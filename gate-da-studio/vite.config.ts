import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import fs from 'node:fs'
import path from 'node:path'

const WORKSPACE_ROOT = path.resolve(__dirname, '..')
const PROGRESS_FILE = path.join(WORKSPACE_ROOT, 'user-progress.json')
const FEEDBACK_FILE = path.join(WORKSPACE_ROOT, 'pilot-feedback.json')
const STYLE_FILE = path.join(WORKSPACE_ROOT, 'LEARNING_STYLE.md')

function localPersistencePlugin(): Plugin {
  const configureMiddleware = (middlewares: any) => {
    middlewares.use('/api/progress', (req: any, res: any) => {
      res.setHeader('Content-Type', 'application/json')
      if (req.method === 'GET') {
        if (fs.existsSync(PROGRESS_FILE)) {
          res.end(fs.readFileSync(PROGRESS_FILE, 'utf-8'))
        } else {
          res.end(JSON.stringify({}))
        }
        return
      }
      if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk: any) => { body += chunk })
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body || '{}')
            fs.writeFileSync(PROGRESS_FILE, JSON.stringify(parsed, null, 2), 'utf-8')
            res.end(JSON.stringify({ ok: true }))
          } catch (e: any) {
            res.statusCode = 400
            res.end(JSON.stringify({ ok: false, error: e?.message }))
          }
        })
        return
      }
      res.statusCode = 405
      res.end(JSON.stringify({ error: 'Method not allowed' }))
    })

    middlewares.use('/api/feedback', (req: any, res: any) => {
      res.setHeader('Content-Type', 'application/json')
      if (req.method === 'GET') {
        if (fs.existsSync(FEEDBACK_FILE)) {
          res.end(fs.readFileSync(FEEDBACK_FILE, 'utf-8'))
        } else {
          res.end(JSON.stringify({ items: [] }))
        }
        return
      }
      if (req.method === 'POST') {
        let body = ''
        req.on('data', (chunk: any) => { body += chunk })
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body || '{"items":[]}')
            fs.writeFileSync(FEEDBACK_FILE, JSON.stringify(parsed, null, 2), 'utf-8')
            res.end(JSON.stringify({ ok: true }))
          } catch (e: any) {
            res.statusCode = 400
            res.end(JSON.stringify({ ok: false, error: e?.message }))
          }
        })
        return
      }
      res.statusCode = 405
      res.end(JSON.stringify({ error: 'Method not allowed' }))
    })

    middlewares.use('/api/learning-style', (_req: any, res: any) => {
      res.setHeader('Content-Type', 'application/json')
      const content = fs.existsSync(STYLE_FILE) ? fs.readFileSync(STYLE_FILE, 'utf-8') : ''
      res.end(JSON.stringify({ content, path: STYLE_FILE }))
    })

    middlewares.use('/pdfs', (req: any, res: any, next: any) => {
      const cleanName = decodeURIComponent((req.url || '').replace(/^\//, '').split('?')[0])
      const allowed = ['syllabus.pdf', '2024_DA.pdf', '2025_DA.pdf', '2026_DA.pdf']
      if (!allowed.includes(cleanName)) {
        next()
        return
      }
      const pdfPath = path.join(WORKSPACE_ROOT, cleanName)
      if (!fs.existsSync(pdfPath)) {
        res.statusCode = 404
        res.end('Not found')
        return
      }
      res.setHeader('Content-Type', 'application/pdf')
      fs.createReadStream(pdfPath).pipe(res)
    })
  }

  return {
    name: 'gate-da-local-persistence',
    configureServer(server) {
      configureMiddleware(server.middlewares)
    },
    configurePreviewServer(server) {
      configureMiddleware(server.middlewares)
    },
  }
}

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), localPersistencePlugin()],
})
