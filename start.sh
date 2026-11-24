#!/bin/zsh
set -e
cd "$(dirname "$0")/gate-da-studio"
echo "Starting GATE DA 2027 Interactive Mastery Studio on http://localhost:5173 ..."
npm run dev
