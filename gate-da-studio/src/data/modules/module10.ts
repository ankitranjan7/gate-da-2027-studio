import type { ChapterData } from '../../types/curriculum'

export const MODULE_10_CHAPTERS: ChapterData[] = [
  {
    id: 'graph-ch1',
    number: 1,
    title: 'Graph Traversals: BFS, DFS, Discovery-Finish Brackets & Topological Sort',
    shortTitle: 'BFS, DFS & Topo Sort',
    estimatedHours: 4.0,
    dayLabel: 'Week 4 · Day 4',
    tagline:
      'Let’s walk through how Breadth-First Search ripples outward to guarantee unweighted shortest paths, while Depth-First Search dives deep to reveal parent-child brackets, back-edge cycles, reversed-graph duality ($G^R$), and DAG topological schedules.',
    syllabusMapping: [
      'Graph algorithms: BFS and DFS traversals, connected components, edge classification',
      'Cycle detection in directed & undirected graphs, DAG Topological Sort (Sec 4: PDSA)',
      'Uninformed search state-space comparison: BFS vs DFS (Sec 7: AI)',
    ],
    whatIsImportant: [
      'BFS Queue (layer-by-layer unweighted shortest hop-count) vs DFS Stack/Recursion (deep exploration + discovery/finish timestamps $d[u], f[u]$)',
      'Parenthesis Theorem & Directed Edge Classification: Back edges ($d[v] \\le d[u] < f[u] \\le f[v]$) detect cycles; Undirected DFS has ONLY Tree and Back edges',
      'Directed Reachability Duality: $v$ visited by $\\text{DFS}(G, u) \\iff u$ visited by $\\text{BFS}(G^R, v)$ (tested in GATE DA 2026 Q.40)',
      'Unweighted shortest-path witness invariants (forbidden shortcut edges tested in GATE DA 2025 Q.58) & structured large-$V$ DFS orderings (GATE DA 2025 Q.65)',
      'DAG Topological Ordering via reverse DFS finish times $f[u]$ or Kahn’s in-degree-$0$ peeling (GATE DA 2024 Q.51)',
    ],
    whatIsNotImportant: [
      'Tarjan’s articulation points / biconnected components & Kosaraju’s full SCC implementation code',
      'Network Flow (Ford-Fulkerson / Max-Flow Min-Cut) and Bipartite Matching — not in GATE DA syllabus',
      'Eulerian / Hamiltonian NP-completeness reductions',
    ],
    inboundStream: 'Module 8–9 Python recursion stacks, queues, sets, and tree traversals.',
    outboundStream: [
      'Module 10 Ch.2 Dijkstra, UCS & $A^*$ Informed Search',
      'Module 14 Neural Net Autograd DAGs (forward topological pass, backward reverse-topological pass)',
      'Module 15 Bayesian Network DAG ordering & CPT ancestor-before-child evaluation',
    ],
    glossary: [
      {
        term: 'Graph (Vertices & Edges)',
        symbol: '$G = (V, E)$',
        plainEnglish:
          'A network made of dots called vertices (or nodes) connected by lines or arrows called edges. Edges can be two-way (undirected) or one-way arrows (directed).',
        tinyExample: 'A 3-city road map with $V = \\{A, B, C\\}$ and edges $E = \\{(A,B), (B,C)\\}$.',
      },
      {
        term: 'Adjacency List vs. Adjacency Matrix',
        symbol: '$O(|V|+|E|)$ vs. $O(|V|^2)$',
        plainEnglish:
          'Two ways to store a graph in memory: an adjacency list stores only each node’s actual neighbors (fast on sparse graphs), whereas an adjacency matrix stores a full $|V| \\times |V|$ grid of $0$s and $1$s (fast edge lookup, slower full scan).',
        tinyExample: 'For a tree with $1000$ nodes and $999$ edges, a list scans $\\approx 2000$ entries while a matrix scans $1{,}000{,}000$ cells.',
      },
      {
        term: 'Breadth-First Search (BFS)',
        symbol: '$\\delta(s, v)$',
        plainEnglish:
          'A level-by-level graph exploration powered by a FIFO queue that visits every node at distance $1$, then distance $2$, and so on—always finding the fewest-hop path in an unweighted graph.',
        tinyExample: 'Starting at $S$ with $S\\!-\\!B\\!-\\!G$ and $S\\!-\\!A\\!-\\!C\\!-\\!G$, BFS finds $G$ in $2$ hops via $B$.',
      },
      {
        term: 'Depth-First Search (DFS)',
        plainEnglish:
          'A bold, tunnel-diving traversal powered by recursion (or a LIFO stack) that follows one path as far as it can go before backtracking to explore leftover branches.',
        tinyExample: 'With neighbors sorted alphabetically, DFS dives down $S \\to A \\to C \\to D \\to G$ before ever checking $S \\to B$.',
      },
      {
        term: 'Reversed Graph (Transpose)',
        symbol: '$G^R$',
        plainEnglish:
          'The exact same vertices as a directed graph $G$, but with every one-way arrow flipped backward—turning “who can $u$ reach?” into “who can reach $u$?”',
        tinyExample: 'If $G$ has edge $u \\to v$, then $G^R$ has $v \\to u$, so $\\text{BFS}(G^R, v)$ visits $u$.',
      },
      {
        term: 'Discovery & Finish Timestamps',
        symbol: '$d[u], f[u]$',
        plainEnglish:
          'A running clock during DFS that stamps $d[u]$ the moment you first step into node $u$, and $f[u]$ the moment you finish all of $u$’s neighbors and leave $u$ for good.',
        tinyExample: 'If $A$ calls $B$ and $B$ has no other neighbors, their brackets nest as $A:(1,4)$ and $B:(2,3)$.',
      },
      {
        term: 'Three-Color DFS States',
        symbol: '`WHITE / GRAY / BLACK`',
        plainEnglish:
          'A three-status tag that prevents cycle-detection bugs in directed graphs: `WHITE` means untouched, `GRAY` means currently active on the recursion stack, and `BLACK` means completely finished.',
        tinyExample: 'Hitting a `GRAY` node signals a real directed cycle; hitting a `BLACK` node does not.',
      },
      {
        term: 'Tree, Back, Forward & Cross Edges',
        plainEnglish:
          'The four ways a DFS edge $(u, v)$ can land: Tree (discovers a new child), Back (loops up to an active `GRAY` ancestor—proves a cycle!), Forward (jumps down to a finished descendant), and Cross (jumps to a finished unrelated branch).',
        tinyExample: 'If $u$ has $[12,15]$ and $v$ has $[3,8]$, edge $(u,v)$ jumps to an already-finished node, so it is a Cross edge.',
      },
      {
        term: 'Directed Acyclic Graph (DAG)',
        plainEnglish:
          'A directed graph with zero directed cycles—meaning you can never follow arrows from a node and loop back to where you started, making it ideal for prerequisites and neural net computation graphs.',
        tinyExample: 'Course rules $\\text{Calc} \\to \\text{Prob} \\to \\text{ML}$ form a DAG with no circular dependency.',
      },
      {
        term: 'Topological Sort',
        symbol: '$f[u] > f[v]$',
        plainEnglish:
          'A left-to-right lineup of all vertices in a DAG so that every directed arrow $u \\to v$ points strictly forward (never backward)—easily built by sorting nodes in decreasing order of DFS finish time.',
        tinyExample: 'For diamond $S \\to A, S \\to B, A \\to T, B \\to T$, both `[S, A, B, T]` and `[S, B, A, T]` are valid topological sorts.',
      },
      {
        term: 'Indegree & Kahn’s Algorithm',
        symbol: '$\\text{deg}^-(v)$',
        plainEnglish:
          'A node’s indegree is how many incoming arrows point into it. Kahn’s algorithm repeatedly peels off any node with indegree $0$ (no remaining prerequisites) and reduces its neighbors’ indegrees until the whole DAG is ordered.',
        tinyExample: 'If $\\text{Calc}$ has indegree $0$ and points to $\\text{Prob}$ (indegree $1$), outputting $\\text{Calc}$ drops $\\text{Prob}$’s indegree to $0$.',
      },
    ],
    generatorId: 'astar-trace-gen',
    concepts: [
      {
        id: 'm10-c1-1',
        title: 'BFS vs. DFS: Queue Levels, Recursion Stacks & $G$ vs. $G^R$ Duality',
        subtitle: 'Why BFS finds shortest unweighted hop counts while DFS dives deep—and how reversing edges flips reachability',
        priority: 'core-pillar',
        buildsOn: 'Queues (FIFO), Stacks (LIFO), and adjacency list representations',
        whyStudy:
          'Real networks — road maps, social graphs, web hyperlinks, and AI puzzle state spaces — are general **graphs** full of cycles and competing paths, not neat trees. To answer everyday questions like *"what is the fewest-hop route from $S$ to $G$?"* or *"which nodes can $u$ reach?"*, computer science relies on two core traversal engines: **BFS** (FIFO queue) and **DFS** (LIFO recursion stack). Seeing the exact queue/stack mechanics and edge-reversal rules behind BFS and DFS immediately unlocks unweighted shortest-path witnesses (**GATE DA 2025 Q.58**), large-$V$ DFS orderings (**GATE DA 2025 Q.65**), and reversed-graph duality (**GATE DA 2026 Q.40**).',
        groundRules: [
          '**BFS Uses a FIFO Queue — Guaranteeing Non-Decreasing Hop Distance From Start $s$:** Every vertex at distance $d$ is enqueued and expanded before any vertex at distance $d + 1$, so the *very first time* BFS discovers vertex $v$, it locks in the exact shortest unweighted distance $\\delta(s, v)$.',
          '**DFS Uses a LIFO Stack (or Recursion) — Diving Deep With Zero Distance Awareness:** DFS follows the first unvisited neighbor all the way down one corridor before backtracking, so its path to a goal can be much longer than the shortest path — yet starting from the same vertex $u$, BFS and DFS ALWAYS visit the **exact same reachable set** $\\text{Reach}_G(u)$.',
          '**Graph Storage Determines Traversal Runtime ($\\Theta(|V| + |E|)$ vs. $\\Theta(|V|^2)$):** On **adjacency lists**, every vertex enters the frontier once and each edge is scanned once (twice if undirected), taking $\\Theta(|V| + |E|)$ time. On an **adjacency matrix**, scanning all $|V|$ entries of each vertex’s row forces $\\Theta(|V|^2)$ even on sparse trees!',
          '**Reversing All Directed Edges ($G^R$) Swaps Source and Destination Reachability:** A directed path $u \\to x_1 \\to \\dots \\to v$ exists in $G$ if and only if the reversed directed path $v \\to \\dots \\to x_1 \\to u$ exists in $G^R$ — proving $v \\in \\text{DFS}(G, u) \\iff u \\in \\text{BFS}(G^R, v)$!',
        ],
        toyExample: {
          title: 'Two Ways to Escape a 5-Room Museum',
          scenario:
            'You start at Lobby $S$ and want to reach Exit $G$. Hallways are $S\\!-\\!A$, $S\\!-\\!B$, $A\\!-\\!C$, $C\\!-\\!D$, $D\\!-\\!G$, and $B\\!-\\!G$, with neighbors listed alphabetically. Compare the two 6-line Python engines side-by-side:\n```python\nfrom collections import deque\n\ndef bfs(adj, start):\n    visited = {start}\n    q = deque([start])              # FIFO queue -> ripples level by level\n    while q:\n        u = q.popleft()\n        for v in adj[u]:\n            if v not in visited:\n                visited.add(v)\n                q.append(v)\n\ndef dfs(adj, u, visited):\n    visited.add(u)                  # LIFO call stack -> dives deep first\n    for v in adj[u]:\n        if v not in visited:\n            dfs(adj, v, visited)\n```',
          walkthroughSteps: [
            '1. **BFS (FIFO Queue — ripple outward):** Start at $S$ (dist $0$). Enqueue neighbors $A, B$ (dist $1$). Pop $A \\to$ enqueue $C$ (dist $2$). Pop $B \\to$ enqueue $G$ (dist $2$). Pop $C \\to$ enqueue $D$. Pop $G$: found via $S \\to B \\to G$ in **2 hops**!',
            '2. **DFS (Recursion Stack — commit to one corridor):** Start at $S$, take first neighbor $A \\to C \\to D \\to G$! It reaches $G$ in **4 hops** before ever backtracking to $B$.',
            '3. **Time Cost:** Every vertex enters the queue/stack once and every adjacency list is scanned once (twice if undirected), so both run in $O(|V| + |E|)$ time with adjacency lists.',
          ],
          ahaMoment:
            'Think of BFS as ripples expanding smoothly in a pond: it always discovers rooms in non-decreasing order of hop count from $S$, guaranteeing shortest unweighted paths. DFS ignores distance completely and commits to the first unvisited tunnel all the way to its end.',
        },
        theoremAndFormula: {
          statement:
            'In any graph $G=(V,E)$ using adjacency lists, both BFS and DFS run in $\\Theta(|V|+|E|)$ time (vs. $\\Theta(|V|^2)$ on an adjacency matrix). BFS computes exact unweighted shortest-path distances $\\delta(s, v)$. On a directed graph $G$ and its edge-reversed graph $G^R = (V, \\{(v,u) : (u,v) \\in E\\})$, reachability reverses cleanly.',
          formulaLatex:
            'v \\in \\text{Reach}_G(u) \\iff v \\text{ is visited by } \\text{DFS}(G, u) \\iff u \\text{ is visited by } \\text{BFS}(G^R, v)',
          plainEnglishDecoding:
            'Here is the key intuition: starting from the same node $u$, both BFS and DFS always reach the exact same set of vertices—they only differ in the *order* they visit them and the spanning tree they leave behind. And when you flip every arrow in $G$ to create $G^R$, asking “can $u$ reach $v$ in $G$?” is the exact mirror image of asking “can $v$ reach $u$ in $G^R$?”',
          workedMiniExamples: [
            {
              prompt:
                'State space starts at $1$, goal is $6$, successors of $n$ are $\\{n+1, n+2\\}$ pushed/expanded in ascending order. Compare BFS vs. DFS path length to $6$ (GATE DA 2024 Q.44 pattern).',
              solution:
                'DFS follows the first branch $1 \\to 2 \\to 3 \\to 4 \\to 5 \\to 6$ (length $5$). BFS checks distance-$1$ states $\\{2,3\\}$, distance-$2$ $\\{4,5\\}$, and hits $6$ at distance $3$ (e.g. $1 \\to 3 \\to 5 \\to 6$ or $1 \\to 2 \\to 4 \\to 6$). BFS explores wider levels; DFS dives down $n+1$ immediately.',
            },
            {
              prompt:
                'An unweighted undirected graph has a shortest path $a\\!-\\!b\\!-\\!c\\!-\\!d$ of length $3$. Why is edge $(b, d)$ impossible?',
              solution:
                'If $(b, d) \\in E$, then $a\\!-\\!b\\!-\\!d$ would be a valid path of length $2 < 3$, contradicting $\\delta(a,d) = 3$.',
            },
          ],
        },
        sandboxId: 'graph-astar-lab',
        msqTraps: [
          {
            myth: 'DFS finds the shortest path in unweighted graphs if adjacency lists are sorted.',
            reality: 'DFS has no distance awareness; only BFS guarantees minimum edge-count paths from the source.',
            counterExample: 'Triangle $S\\!-\\!A$, $A\\!-\\!G$, $S\\!-\\!G$: alphabetical DFS visits $S \\to A \\to G$ (length $2$), missing the direct length-$1$ edge $S\\!-\\!G$.',
          },
          {
            myth: 'BFS and DFS always run in $O(|V| + |E|)$ time regardless of graph representation.',
            reality: '$O(|V| + |E|)$ holds for adjacency lists; an adjacency matrix requires scanning an entire row of length $|V|$ per vertex, taking $\\Theta(|V|^2)$ even on sparse graphs.',
            counterExample: 'A tree with $|E| = |V|-1$ edges still takes $\\Theta(|V|^2)$ work to scan an adjacency matrix.',
          },
          {
            myth: 'If $v$ is visited by $\\text{DFS}(G, u)$, then $v$ is visited by $\\text{BFS}(G^R, u)$.',
            reality: 'Reversing edges swaps source and target! You must start the $G^R$ traversal at $v$ to check if $u$ is reached.',
            counterExample: 'Single edge $u \\to v$: $\\text{DFS}(G, u)$ reaches $v$, but $\\text{BFS}(G^R, u)$ stays trapped at $u$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 · AI Search',
            targetWeek: 4,
            topic: 'Uninformed Search & Heuristic Guidance ($A^*$)',
            whyItMatters:
              'BFS is Uniform Cost Search (UCS) with unit step costs; replacing the FIFO queue with a priority queue sorted by $g(n)+h(n)$ turns BFS directly into $A^*$.',
            pyqProof: 'GATE DA 2024 · Q.44 & GATE DA 2026 · Q.13, Q.40',
          },
        ],
      },
      {
        id: 'm10-c1-2',
        title: 'DFS Discovery-Finish Brackets $(d[u], f[u])$, Edge Types & Cycle Detection',
        subtitle: 'Using nested timestamps like parentheses to classify edges and catch directed cycles without false alarms',
        priority: 'high-yield',
        buildsOn: 'Recursive DFS call stack',
        whyStudy:
          'In a package installer (`pip`, `npm`), a spreadsheet formula sheet, or a PyTorch neural-network computation graph, a **directed cycle** (`A` waits on `B`, `B` waits on `C`, `C` waits on `A`) causes an immediate deadlock! If you try detecting directed cycles using only a binary `visited` set, you get hit by false alarms on completely valid diamond graphs (`A -> B -> C` and `A -> C`). Tracking **3 DFS colors (`WHITE / GRAY / BLACK`)** and **discovery/finish timestamps $(d[u], f[u])$** eliminates false alarms and lets you classify every edge in a graph on sight.',
        groundRules: [
          '**DFS Stamps $d[u]$ on Entry and $f[u]$ on Exit — Creating Perfectly Nested Parentheses:** Because recursive DFS uses a LIFO call stack, every child finishes completely before its parent finishes. Hence for any two vertices $u$ and $v$, intervals $[d[u], f[u]]$ and $[d[v], f[v]]$ are either **completely disjoint** or **strictly nested** (Parenthesis Theorem!).',
          '**Three Colors Distinguish Active Call-Stack Ancestors (`GRAY`) From Finished Nodes (`BLACK`):** `WHITE` = untouched; `GRAY` = currently active on the recursion stack ($d[u]$ stamped, $f[u]$ still open); `BLACK` = completely finished and popped ($f[u]$ closed).',
          '**A Directed Graph Contains a Cycle If and Only If DFS Spots a Back Edge to a `GRAY` Node:** An edge $(u, v)$ landing on a `GRAY` ancestor ($d[v] \\le d[u] < f[u] \\le f[v]$) closes a real directed cycle $v \\leadsto u \\to v$. An edge landing on a finished `BLACK` node is merely a harmless **Forward** or **Cross** edge — NEVER a cycle!',
          '**Undirected DFS Can ONLY Produce Tree Edges and Back Edges:** Because every undirected edge $(u, v)$ is two-way, if $v$ were already finished (`BLACK`), the edge $(v, u)$ would already have been explored from $v$ earlier! Therefore Forward and Cross edges NEVER occur in undirected DFS.',
        ],
        toyExample: {
          title: 'Tracing Clock Ticks on a 4-Node Directed Graph',
          scenario:
            'Run DFS starting at $A$ on directed edges $A \\to B$, $B \\to C$, $C \\to A$, and $D \\to B$ (where outer loop visits $A$ first, then $D$). Increment a global clock at every discovery $d[u]$ and finish $f[u]$.',
          walkthroughSteps: [
            '1. Enter $A$ ($d[A]=1$) $\\to$ enter $B$ ($d[B]=2$) $\\to$ enter $C$ ($d[C]=3$).',
            '2. From $C$, edge $C \\to A$ sees $A$ is **currently active (GRAY)** on the stack! That is a **Back Edge**, proving a directed cycle $A \\to B \\to C \\to A$.',
            '3. $C$ finishes ($f[C]=4$), $B$ finishes ($f[B]=5$), $A$ finishes ($f[A]=6$). Bracket nesting: $(_A\\; (_B\\; (_C\\; )_C\\; )_B\\; )_A$.',
            '4. Outer loop now picks unvisited $D$ ($d[D]=7$). Edge $D \\to B$ sees $B$ is **already finished (BLACK)** ($[2,5]$). That is a **Cross Edge**—NOT a cycle! $D$ finishes ($f[D]=8$).',
          ],
          ahaMoment:
            'Notice why a simple true/false `visited[]` flag gets fooled here: it cannot tell $C \\to A$ (a real cycle!) apart from $D \\to B$ (a harmless shortcut into an already-finished node). Tracking 3 colors (`WHITE` untouched, `GRAY` active on the call stack, `BLACK` finished)—or comparing the $(d, f)$ brackets—solves that cleanly.',
        },
        theoremAndFormula: {
          statement:
            'By the **Parenthesis Theorem**, for any two vertices $u, v$ in a DFS forest, intervals $[d[u], f[u]]$ and $[d[v], f[v]]$ are either **disjoint** or **one is strictly nested inside the other**. Edge $(u, v)$ is classified purely by timestamps:',
          formulaLatex:
            '\\begin{aligned} \\text{Tree or Forward Edge:} &\\quad d[u] < d[v] < f[v] < f[u] \\\\ \\text{Back Edge (Cycle!):} &\\quad d[v] \\le d[u] < f[u] \\le f[v] \\\\ \\text{Cross Edge:} &\\quad d[v] < f[v] < d[u] < f[u] \\end{aligned}',
          plainEnglishDecoding:
            'In plain terms, a **directed** graph has a cycle if and only if DFS spots at least one **Back Edge** pointing back to a `GRAY` ancestor currently sitting on your recursion stack (a self-loop counts too). And in an **undirected** graph, life is even simpler: every edge is either a **Tree Edge** or a **Back Edge**—Forward and Cross edges can never appear!',
          workedMiniExamples: [
            {
              prompt:
                'During DFS of a directed graph, $u$ has $(d[u], f[u]) = (12, 15)$ and $v$ has $(d[v], f[v]) = (3, 8)$. Classify directed edge $(u, v)$.',
              solution:
                '$[3, 8]$ completely precedes $[12, 15]$ ($d[v] < f[v] < d[u] < f[u]$). So $v$ finished long before $u$ was even discovered: $(u, v)$ is a **Cross Edge**.',
            },
            {
              prompt:
                'In undirected DFS starting at $s$, edge $(u, v)$ is first explored from $u$ to $v$ when $v$ is already visited (not $u$’s parent). What type of edge is $(u, v)$?',
              solution:
                'In an undirected graph, if $v$ were already finished (BLACK), edge $(v, u)$ would already have been explored from $v$ earlier! Hence $v$ must still be active (GRAY ancestor), making $(u, v)$ a **Back Edge**.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If DFS encounters an edge to an already-visited vertex in a directed graph, the graph has a cycle.',
            reality: 'Only an edge to an *active* (GRAY / ancestor) vertex creates a cycle; edges to *finished* (BLACK) vertices are Forward or Cross edges.',
            counterExample: 'DAG $A \\to B, A \\to C, B \\to C$: visiting $A \\to B \\to C$ finishes $C$, then $A \\to C$ hits a finished vertex with zero cycles.',
          },
          {
            myth: 'Undirected graphs can have Cross edges between two branches of the same DFS tree.',
            reality: 'Undirected DFS never produces Cross or Forward edges—whenever an edge connects two branches, DFS crosses it immediately before the first branch finishes.',
            counterExample: 'Any undirected cycle $1\\!-\\!2\\!-\\!3\\!-\\!1$ produces two Tree edges and one Back edge.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 · Deep Learning',
            targetWeek: 7,
            topic: 'Computation Graphs & Cycle-Free Autograd',
            whyItMatters:
              'PyTorch/JAX computation graphs must be acyclic (DAGs) so backpropagation can propagate gradients cleanly without infinite dependency loops.',
          },
        ],
      },
      {
        id: 'm10-c1-3',
        title: 'Topological Sort & Kahn’s Indegree Algorithm on DAGs',
        subtitle: 'Linearizing dependency graphs so every arrow points strictly left-to-right',
        priority: 'core-pillar',
        buildsOn: 'DFS finish times $f[u]$ and Back-edge cycle detection',
        whyStudy:
          'Whether you are ordering university course prerequisites, compiling interdependent software modules, sampling variables in a **Bayesian Network**, or running the forward pass and backpropagation of a **Neural Network autograd graph**, you face the exact same problem: *given one-way dependency arrows $u \\to v$ ("finish $u$ before starting $v$"), can we line up every vertex left-to-right so every arrow points forward?* **Topological Sort** solves this cleanly in $\\Theta(|V| + |E|)$ time — and is tested directly in **GATE DA 2024 Q.51**.',
        groundRules: [
          '**A Directed Graph Admits a Topological Sort If and Only If It Is a DAG (Zero Cycles):** Any directed cycle creates a circular dependency (`A` before `B` before `A`) that can never be arranged strictly left-to-right.',
          '**In a DAG, Every Directed Edge $(u, v)$ Strictly Satisfies $f[u] > f[v]$:** Because a DAG has no Back Edges, when DFS inspects $(u, v)$, either $v$ is untouched (`WHITE`, so $v$ finishes *inside* $u$’s call $\\implies f[v] < f[u]$) or $v$ is already finished (`BLACK` $\\implies f[v] < d[u] < f[u]$). Therefore listing vertices by **decreasing finish time $f[u]$** (NEVER discovery time $d[u]$!) is guaranteed valid!',
          '**Kahn’s Algorithm Repeatedly Peels Zero-Indegree Vertices (Tasks With No Unmet Prerequisites):** Enqueue every vertex with $\\text{deg}^-(v) = 0$; pop one, emit it, and decrement $\\text{deg}^-$ of its neighbors (pushing any neighbor reaching $0$). If the queue empties before outputting all $|V|$ vertices, the leftover subgraph MUST contain a cycle!',
          '**Topological Sort Is Usually NOT Unique:** Independent branches with no directed path between them can appear in either relative order. A DAG has a *unique* topological sort if and only if it contains a Hamiltonian directed path visiting all $|V|$ vertices.',
        ],
        toyExample: {
          title: 'Scheduling 4 Prerequisites Without Breaking Order',
          scenario:
            'Consider courses $\\{\\text{Calc}, \\text{Python}, \\text{Prob}, \\text{ML}\\}$ with prerequisite edges $\\text{Calc} \\to \\text{Prob}$, $\\text{Prob} \\to \\text{ML}$, and $\\text{Python} \\to \\text{ML}$.',
          walkthroughSteps: [
            '1. **Kahn’s Indegree Peeling:** Initial in-degrees are $\\text{Calc}:0,\\; \\text{Python}:0,\\; \\text{Prob}:1,\\; \\text{ML}:2$.',
            '2. Pick any in-degree-$0$ node, say $\\text{Calc}$, output it, and decrement $\\text{Prob}$ to $0$. Now available: $\\{\\text{Python}, \\text{Prob}\\}$.',
            '3. Pick $\\text{Prob}$ (or $\\text{Python}$), then the other, finally $\\text{ML}$ drops to in-degree $0$ and is output last.',
            '4. Notice **both** `[Calc, Python, Prob, ML]` and `[Python, Calc, Prob, ML]` and `[Calc, Prob, Python, ML]` are valid—topological sort is NOT unique!',
          ],
          ahaMoment:
            'You can line up a directed graph left-to-right if and only if it has no cycles (it is a DAG). And here is a lovely connection back to DFS: if you run DFS and list nodes in **decreasing order of finish time $f[u]$**, every arrow $(u, v)$ automatically obeys $f[u] > f[v]$ and points forward.',
        },
        theoremAndFormula: {
          statement:
            'A directed graph $G$ admits a topological ordering (a linear ordering of $V$ where every directed edge $u \\to v$ puts $u$ before $v$) **if and only if** $G$ is a DAG. Both Kahn’s algorithm and reverse-finish-time DFS compute one in $\\Theta(|V| + |E|)$ time.',
          formulaLatex:
            '(u, v) \\in E \\text{ in a DAG} \\implies f[u] > f[v] \\quad (\\text{sort by decreasing } f[u])',
          plainEnglishDecoding:
            'Here is a great exam shortcut: when an MSQ (like GATE DA 2024 Q.51) hands you a candidate permutation and asks whether it is a valid topological sort, you don’t need to run DFS at all! Just check every directed edge $u \\to v$ and make sure $u$ sits to the left of $v$ in that list.',
          workedMiniExamples: [
            {
              prompt:
                'Count the valid topological orderings of a 4-vertex diamond DAG: $S \\to A$, $S \\to B$, $A \\to T$, $B \\to T$.',
              solution:
                '$S$ must be first (only in-degree-$0$ node) and $T$ must be last. Between them, $A$ and $B$ have no edge between each other, so either `[S, A, B, T]` or `[S, B, A, T]` works. Total $= 2$.',
            },
            {
              prompt:
                'Why does Kahn’s algorithm detect cycles automatically?',
              solution:
                'If the output list ends with fewer than $|V|$ vertices (the queue becomes empty while vertices still have positive in-degree), the remaining subgraph contains at least one directed cycle.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Listing vertices in increasing order of DFS *discovery* time $d[u]$ gives a topological sort.',
            reality: 'Discovery order can place a child or independent branch wrongly relative to dependencies when edges point across branches; you MUST use **decreasing finish time** $f[u]$.',
            counterExample: 'DAG $A \\to C$, $B \\to C$, starting DFS at $C$ first: discovery order is `[C, A, B]` which puts $C$ BEFORE its parents $A, B$! Finish times are $f[C]=2, f[A]=4, f[B]=6 \\implies$ decreasing finish is `[B, A, C]` (valid!).',
          },
          {
            myth: 'Every DAG has a unique topological ordering.',
            reality: 'A DAG has a unique topological sort if and only if it contains a Hamiltonian directed path visiting all vertices.',
            counterExample: 'Two disconnected nodes $\\{1, 2\\}$ form a DAG with 2 valid topological sorts: `[1, 2]` and `[2, 1]`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 · Bayesian Networks',
            targetWeek: 7,
            topic: 'Topological Ordering in Bayesian Networks',
            whyItMatters:
              'Every Bayesian Network is a DAG: ancestral sampling and exact CPT factorization $P(X_1,\\dots,X_n)=\\prod P(X_i \\mid \\text{Pa}(X_i))$ evaluate parents before children in **topological order**.',
            pyqProof: 'GATE DA 2024 · Q.64 (Joint CPT evaluation)',
          },
          {
            targetSection: 'Sec 6 · Neural Networks',
            targetWeek: 7,
            topic: 'Neural Net Autograd DAGs',
            whyItMatters:
              'Automatic differentiation runs the **forward pass** in topological order to compute activations, then executes **backpropagation** in exact **reverse topological order** so every downstream gradient $\\partial L / \\partial z_j$ is ready before computing $\\partial L / \\partial z_i$.',
            pyqProof: 'GATE DA 2025 · Q.42 (ReLU Network Backprop)',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm10-c1-ht1',
        title: 'Large-$V$ DFS Discovery Order Without Full Trace',
        difficulty: 'Rank-Decider',
        relatedPyqs: ['GATE DA 2025 · Q.65'],
        problemStatement:
          'Consider an undirected graph on $V = \\{0, 1, \\dots, 100\\}$ with an edge between $i$ and $j$ whenever $0 < |j - i| \\le 2$. Adjacency lists are sorted in **decreasing** order. If DFS starts at $0$, how many vertices are discovered *after* vertex $50$?',
        triggerCue:
          'Vertices $V = \\{0, \\dots, 100\\}$ with a regular rule ($0 < j - i \\le 2$) and sorted adjacency lists—far too large to trace 101 steps blindly by hand.',
        bruteForceTrap:
          'Drawing a 101-node graph or simulating 101 recursive stack frames in the exam wastes 10 minutes and invites off-by-one slips.',
        mentalShift:
          'Trace just the first 4 steps and the turn-around boundary ($98, 99, 100$) to uncover the **structural loop invariant**! Because neighbors are tried in decreasing order, $0$ always jumps $+2$ along the evens until hitting $100$, then backtracks through all odd numbers descending from $99$ down to $1$.',
        steps: [
          {
            label: 'Step 1: Find the forward stride from 0',
            detail:
              'Neighbors of $0$ in decreasing order: $[2, 1] \\to$ visits $2$. Neighbors of $2$: $[4, 3, 1, 0] \\to$ visits $4$. By induction, $2k$ jumps to $2k+2$ all the way through $50, 52, \\dots, 100$.',
          },
          {
            label: 'Step 2: Check the boundary bounce at 100',
            detail:
              'At $100$, neighbors are $[99, 98]$. Since $98$ is already visited, DFS enters $99$. At $99$, $[100, 98, 97] \\to$ enters $97$, walking down every odd vertex $99 \\to 97 \\to \\dots \\to 1$.',
          },
          {
            label: 'Step 3: Count vertices discovered after 50',
            detail:
              'After $50$, DFS discovers the remaining evens $\\{52, 54, \\dots, 100\\}$ ($\\frac{100-52}{2}+1 = 25$ vertices) plus all $50$ odds $\\{99, 97, \\dots, 1\\}$. Total $= 25 + 50 = 75$.',
          },
        ],
        lockInTakeaway:
          'When $|V| > 20$ in a GATE graph code/traversal NAT, there is ALWAYS a clean parity or pattern invariant after 4–5 steps.',
      },
      {
        id: 'm10-c1-ht2',
        title: 'Forbidden Shortcut Edges from Unweighted Shortest Paths',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.58'],
        problemStatement:
          'In an unweighted undirected graph $G$, the paths $a\\!-\\!b\\!-\\!c\\!-\\!d$, $e\\!-\\!f\\!-\\!g\\!-\\!h$, and $a\\!-\\!f\\!-\\!c\\!-\\!h$ are all shortest paths of length $3$. Determine which candidate edges $(b,d), (b,g), (b,h), (e,g)$ CANNOT exist in $G$.',
        triggerCue:
          'You are given explicit shortest paths of fixed length $L$ and asked which extra edges are **impossible** in an MSQ.',
        bruteForceTrap:
          'Trying to draw all possible 8-vertex graphs with and without each candidate edge and computing $8 \\times 8$ all-pairs shortest paths.',
        mentalShift:
          'An edge $(u,v)$ is **forbidden** the instant it creates a path of length $< 3$ between *any* of the given shortest-path endpoint pairs $\\{(a,d), (e,h), (a,h)\\}$—or between two nodes on the same shortest path separated by $\\ge 2$ steps!',
        steps: [
          {
            label: 'Step 1: List exact distance locks',
            detail:
              'From the three paths: $\\delta(a,d)=3$, $\\delta(e,h)=3$, and $\\delta(a,h)=3$ (and any subpath is also shortest, e.g., $\\delta(a,c)=2$).',
          },
          {
            label: 'Step 2: Test each candidate edge for a shortcut',
            detail:
              '$(b,d) \\implies a\\!-\\!b\\!-\\!d$ has length $2 < 3$ (forbidden!). $(b,h) \\implies a\\!-\\!b\\!-\\!h$ has length $2 < 3$ (forbidden!). $(e,g) \\implies e\\!-\\!g\\!-\\!h$ has length $2 < 3$ (forbidden!).',
          },
          {
            label: 'Step 3: Verify the remaining candidate',
            detail:
              'Adding $(b,g)$ leaves $\\delta(a,d)=3$ (via $a\\!-\\!b\\!-\\!c\\!-\\!d$ or $a\\!-\\!b\\!-\\!g\\dots$), $\\delta(e,h)=3$, and $\\delta(a,h)=3$ intact—so $(b,g)$ IS allowed!',
          },
        ],
        lockInTakeaway:
          'Every shortest path of length $k$ forbids chords jumping $\\ge 2$ steps along that path AND cross-chords creating a $\\le k-1$ bridge between its endpoints.',
      },
    ],
    arsenalCards: [
      {
        id: 'm10-c1-ar1',
        badge: 'DFS Edge & Cycle Classifier',
        whenYouSpot: 'Discovery/finish timestamps $(d[u], f[u])$ or directed vs. undirected DFS edge classification',
        directWeaponLatex:
          '\\text{Cycle} \\iff \\exists\\text{ Back Edge } (u,v) \\text{ with } d[v] \\le d[u] < f[u] \\le f[v]',
        instantRule:
          'Disjoint $[d,f]$ with $v$ earlier $\\implies$ Cross; nested with $u$ outer $\\implies$ Tree/Forward; nested with $v$ outer $\\implies$ Back (cycle!). Undirected DFS has ONLY Tree + Back edges.',
        tenSecondExample:
          '$u:(10,13)$ and $v:(4,7)$ with edge $(u,v)$: $v$ finished before $u$ started $\\implies$ Cross Edge (no cycle).',
        oneFatalTrap:
          'Flagging any visited vertex as a cycle in a *directed* graph—you must check that $v$ is currently active (GRAY), not finished (BLACK)!',
      },
      {
        id: 'm10-c1-ar2',
        badge: 'Topological Sort Two-Engine Check',
        whenYouSpot: 'DAG linear ordering, valid permutation MSQ, or counting topological sorts',
        directWeaponLatex:
          '(u,v) \\in E \\implies u \\text{ appears before } v \\iff f[u] > f[v]',
        instantRule:
          'To check a given permutation, verify every directed edge goes left-to-right. To construct one, peel in-degree-$0$ nodes (Kahn) OR sort by decreasing DFS finish time $f[u]$.',
        tenSecondExample:
          'Edges $A\\to C,\\; B\\to C$ with $f[C]=2, f[A]=4, f[B]=6$: decreasing finish gives `[B, A, C]`.',
        oneFatalTrap:
          'Using increasing discovery time $d[u]$ instead of decreasing finish time $f[u]$—a child explored first breaks discovery order!',
      },
      {
        id: 'm10-c1-ar3',
        badge: '$G$ vs. $G^R$ Reachability Duality',
        whenYouSpot: 'Comparing DFS/BFS on directed graph $G$ against reversed graph $G^R$',
        directWeaponLatex:
          'v \\in \\text{DFS}(G, u) \\iff u \\in \\text{BFS}(G^R, v)',
        instantRule:
          'DFS and BFS from the same node visit the exact same reachable set; reversing all edges ($G^R$) swaps the roles of source $u$ and destination $v$.',
        tenSecondExample:
          'If $u \\to w \\to v$ in $G$, then $v \\to w \\to u$ in $G^R$, so BFS from $v$ in $G^R$ finds $u$.',
        oneFatalTrap:
          'Starting the $G^R$ search at $u$ instead of $v$—that tests who can *reach* $u$, not who $u$ can reach!',
      },
    ],
    questions: [
      {
        id: 'm10-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · BFS vs DFS Hop Count',
        marks: 1,
        type: 'MCQ',
        stem: 'Consider an undirected unweighted graph with vertices $\\{S, A, B, C, D, G\\}$ and edges $S\\!-\\!A$, $S\\!-\\!B$, $A\\!-\\!C$, $C\\!-\\!D$, $D\\!-\\!G$, and $B\\!-\\!G$. Adjacency lists are sorted alphabetically, and a search terminates as soon as goal $G$ is popped from the frontier (queue for BFS, stack/recursion for DFS). Which statement is TRUE?',
        options: [
          {
            id: 'A',
            text: 'BFS discovers $G$ along a path of length $2$, whereas DFS discovers $G$ along a path of length $4$.',
            whyTrueOrFalse:
              'True! BFS pops $S$, pushes $A,B$, pops $A$ (pushes $C$), pops $B$ (pushes $G$ at distance $2$ via $S\\!-\\!B\\!-\\!G$). Alphabetical recursive DFS dives $S \\to A \\to C \\to D \\to G$ (length $4$).',
          },
          {
            id: 'B',
            text: 'Both BFS and DFS discover $G$ along a shortest path of length $2$.',
            whyTrueOrFalse: 'False—DFS explores $A \\to C \\to D \\to G$ first and finds a path of length $4$.',
          },
          {
            id: 'C',
            text: 'BFS pops $C$ before $B$, and DFS visits $B$ before $C$.',
            whyTrueOrFalse: 'False—BFS pops $A$, then $B$ (both at distance $1$) before $C$ (distance $2$).',
          },
          {
            id: 'D',
            text: 'DFS runs in $O(|V|^2)$ time using adjacency lists while BFS runs in $O(|V|+|E|)$ time.',
            whyTrueOrFalse: 'False—both BFS and DFS run in $O(|V|+|E|)$ time on adjacency lists.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Trace FIFO queue distances vs. alphabetical recursive depth-first diving.',
        intuitiveSolution: [
          '1. BFS explores by distance layers: Layer $0 = \\{S\\}$, Layer $1 = \\{A, B\\}$. When $B$ is popped, $G$ is discovered at distance $2$ ($S \\to B \\to G$).',
          '2. Recursive DFS from $S$ picks $A$ first, then $C$, then $D$, then $G$—yielding a path of length $4$ ($S \\to A \\to C \\to D \\to G$).',
        ],
        directShortcutUsed: 'BFS = shortest unweighted hop count; DFS = first alphabetical corridor.',
      },
      {
        id: 'm10-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.65',
        year: 2025,
        marks: 2,
        type: 'NAT',
        stem: 'Consider an undirected graph $G$ with vertex set $V = \\{0, 1, 2, \\dots, 100\\}$ where there is an edge between $i$ and $j$ whenever $0 < |j - i| \\le 2$. Suppose the adjacency list of each vertex is ordered in **decreasing** order of vertex labels. If Depth-First Search (DFS) is run starting from vertex $0$, how many vertices are discovered **after** vertex $50$?',
        natAnswer: { min: 75, max: 75, exactDisplay: '75' },
        triggerHint: 'Neighbors of $i$ in decreasing order start at $i+2$! Trace $0 \\to 2 \\to 4 \\dots$ and watch what happens at $100$.',
        intuitiveSolution: [
          '1. Starting at $0$, its adjacency list in decreasing order is $[2, 1]$, so DFS visits $2$.',
          '2. From $2$, its decreasing list is $[4, 3, 1, 0]$, so DFS visits $4$. Repeating this $+2$ step visits all even vertices $0 \\to 2 \\to 4 \\to \\dots \\to 50 \\to 52 \\to \\dots \\to 100$.',
          '3. At $100$, neighbors are $[99, 98]$; $98$ is already visited, so DFS visits $99$, then $97, 95, \\dots, 1$ in descending order.',
          '4. After $50$, DFS discovers $\\{52, 54, \\dots, 100\\}$ ($25$ vertices) and $\\{99, 97, \\dots, 1\\}$ ($50$ vertices), giving $25 + 50 = 75$.',
        ],
        directShortcutUsed: 'Parity-stride invariant: evens ascending ($0..100$), then odds descending ($99..1$).',
      },
      {
        id: 'm10-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.58',
        year: 2025,
        marks: 2,
        type: 'MSQ',
        stem: 'In an unweighted, undirected graph $G$, the paths $a\\!-\\!b\\!-\\!c\\!-\\!d$, $e\\!-\\!f\\!-\\!g\\!-\\!h$, and $a\\!-\\!f\\!-\\!c\\!-\\!h$ are all shortest paths of length $3$ between their respective endpoints. Which of the following edges **CANNOT** be present in $G$?',
        options: [
          {
            id: 'A',
            text: '$(b, d)$',
            whyTrueOrFalse: 'Cannot exist! Edge $(b,d)$ yields path $a\\!-\\!b\\!-\\!d$ of length $2 < 3$, contradicting shortest path $a\\!-\\!b\\!-\\!c\\!-\\!d$.',
          },
          {
            id: 'B',
            text: '$(b, g)$',
            whyTrueOrFalse: 'Allowed! With $(b,g)$, shortest paths between $(a,d)$, $(e,h)$, and $(a,h)$ still all have minimum length $3$.',
          },
          {
            id: 'C',
            text: '$(b, h)$',
            whyTrueOrFalse: 'Cannot exist! Edge $(b,h)$ yields path $a\\!-\\!b\\!-\\!h$ of length $2 < 3$, contradicting shortest path $a\\!-\\!f\\!-\\!c\\!-\\!h$.',
          },
          {
            id: 'D',
            text: '$(e, g)$',
            whyTrueOrFalse: 'Cannot exist! Edge $(e,g)$ yields path $e\\!-\\!g\\!-\\!h$ of length $2 < 3$, contradicting shortest path $e\\!-\\!f\\!-\\!g\\!-\\!h$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Test whether each candidate edge creates a length-$2$ shortcut between $(a,d)$, $(e,h)$, or $(a,h)$.',
        intuitiveSolution: [
          '1. The three given shortest paths lock in $\\delta(a,d)=3$, $\\delta(e,h)=3$, and $\\delta(a,h)=3$.',
          '2. $(b,d)$ creates $a\\!-\\!b\\!-\\!d$ (length $2 < 3$), $(b,h)$ creates $a\\!-\\!b\\!-\\!h$ (length $2 < 3$), and $(e,g)$ creates $e\\!-\\!g\\!-\\!h$ (length $2 < 3$)—all three violate the shortest-path lengths.',
          '3. $(b,g)$ does not shorten any path between $(a,d)$, $(e,h)$, or $(a,h)$ below $3$, so it is permissible.',
        ],
        directShortcutUsed: 'Length-$3$ shortest-path witness check against length-$2$ shortcuts.',
      },
      {
        id: 'm10-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.40 (Concept)',
        year: 2026,
        marks: 2,
        type: 'MCQ',
        stem: 'Let $G = (V, E)$ be a directed graph and let $G^R = (V, E^R)$ be its edge-reversed graph, where $(y, x) \\in E^R \\iff (x, y) \\in E$. For any two vertices $u, v \\in V$, which statement is **ALWAYS** true?',
        options: [
          {
            id: 'A',
            text: '$v$ is visited during $\\text{DFS}(G, u)$ if and only if $u$ is visited during $\\text{BFS}(G^R, v)$.',
            whyTrueOrFalse:
              'True! $\\text{DFS}(G, u)$ visits $v$ iff a directed path $u \\leadsto v$ exists in $G$, which holds iff the reversed directed path $v \\leadsto u$ exists in $G^R$, iff $\\text{BFS}(G^R, v)$ visits $u$.',
          },
          {
            id: 'B',
            text: '$v$ is visited during $\\text{DFS}(G, u)$ if and only if $v$ is visited during $\\text{BFS}(G^R, u)$.',
            whyTrueOrFalse: 'False—reversing edges flips reachability direction, so starting at $u$ in $G^R$ finds ancestors of $u$, not descendants.',
          },
          {
            id: 'C',
            text: 'If $v$ is visited before $w$ in $\\text{DFS}(G, u)$, then $v$ is visited before $w$ in $\\text{BFS}(G, u)$.',
            whyTrueOrFalse: 'False—DFS can visit a deep node $v$ at distance $3$ before a direct neighbor $w$ at distance $1$.',
          },
          {
            id: 'D',
            text: 'The number of edges in the DFS tree of $G$ rooted at $u$ always equals the number of edges in the BFS tree of $G^R$ rooted at $u$.',
            whyTrueOrFalse: 'False—the out-reachable set from $u$ in $G$ can differ completely in size from the in-reachable set of $u$ (out-reachable in $G^R$).',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Translate both DFS and BFS into pure directed reachability: “does a path exist?”',
        intuitiveSolution: [
          '1. Both DFS and BFS from a starting vertex visit the exact set of vertices reachable via directed paths from that start vertex.',
          '2. Path $u \\to x_1 \\to \\dots \\to v$ exists in $G$ $\\iff$ reversed path $v \\to \\dots \\to x_1 \\to u$ exists in $G^R$.',
          '3. Therefore $v \\in \\text{DFS}(G, u) \\iff u \\in \\text{BFS}(G^R, v)$.',
        ],
        directShortcutUsed: 'Directed path reversal equivalence between $G$ and $G^R$.',
      },
      {
        id: 'm10-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Trap · DFS Brackets & Edge Types',
        marks: 2,
        type: 'MSQ',
        stem: 'Suppose DFS is run on a $5$-vertex directed graph $G$ with $V = \\{1, 2, 3, 4, 5\\}$ and yields the discovery and finish intervals $(d[v], f[v])$:\n$1:(1, 8),\\; 2:(2, 7),\\; 3:(3, 4),\\; 4:(5, 6),\\; 5:(9, 10)$.\nWhich of the following statements **MUST** be true?',
        options: [
          {
            id: 'A',
            text: 'If directed edge $(4, 1)$ is in $G$, then $(4, 1)$ is a Back Edge and $G$ contains a directed cycle.',
            whyTrueOrFalse: 'True! $[5,6] \\subset [1,8]$ implies $1$ is an ancestor of $4$ in the DFS forest, so $(4,1)$ is a Back Edge.',
          },
          {
            id: 'B',
            text: 'If directed edge $(5, 3)$ is in $G$, then $(5, 3)$ is a Cross Edge.',
            whyTrueOrFalse: 'True! $d[3]=3 < f[3]=4 < d[5]=9 < f[5]=10$, so interval $3$ finished completely before $5$ started.',
          },
          {
            id: 'C',
            text: 'If directed edge $(1, 4)$ is in $G$, then $(1, 4)$ is a Forward Edge (not a Tree Edge).',
            whyTrueOrFalse:
              'True! Since $2:(2,7)$ strictly contains $4:(5,6)$, vertex $4$ was discovered during $2$’s recursive call—before $1$ could return from $2$ to explore $(1,4)$ as a Tree Edge.',
          },
          {
            id: 'D',
            text: 'The sequence $[5, 1, 2, 4, 3]$ is guaranteed to be a valid topological sort of $G$.',
            whyTrueOrFalse: 'False! Non-tree Back Edges like $(4,1)$ or $(3,2)$ could exist in $G$, making $G$ cyclic with no topological sort.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Use the Parenthesis Theorem: $[d[4], f[4]] \\subset [d[2], f[2]] \\subset [d[1], f[1]]$, while $[d[5], f[5]]$ comes strictly after.',
        intuitiveSolution: [
          '1. Nesting: $1$ contains $2$, and $2$ contains disjoint children $3$ and $4$. Vertex $5$ is a separate DFS root starting at $9$.',
          '2. $(4,1)$ goes from descendant $4$ to ancestor $1$ $\\implies$ Back Edge (cycle!).',
          '3. $(5,3)$ goes from $[9,10]$ to earlier disjoint $[3,4]$ $\\implies$ Cross Edge.',
          '4. $(1,4)$ goes from ancestor $1$ to non-child descendant $4$ (discovered inside $2$) $\\implies$ Forward Edge.',
          '5. Without knowing whether Back Edges exist, $G$ need not even be a DAG, so D is false.',
        ],
        directShortcutUsed: 'Parenthesis nesting intervals + Forward vs. Tree parent timing check.',
      },
      {
        id: 'm10-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Drill · Counting DAG Topological Sorts',
        marks: 2,
        type: 'NAT',
        stem: 'How many distinct valid topological orderings exist for the $5$-vertex DAG with vertex set $\\{1, 2, 3, 4, 5\\}$ and directed edges $1 \\to 2$, $2 \\to 3$, $4 \\to 5$, and $1 \\to 5$?',
        natAnswer: { min: 9, max: 9, exactDisplay: '9' },
        triggerHint: 'Split by which of the two in-degree-$0$ vertices ($1$ or $4$) appears first!',
        intuitiveSolution: [
          '1. Only vertices $1$ and $4$ have in-degree $0$, so the ordering must start with either $4$ or $1$.',
          '2. **Case 1 (Starts with $4$):** Next must be $1$ (now in-degree $0$). The remaining three vertices $\\{2, 3, 5\\}$ only require $2$ before $3$, while $5$ can sit in any of the $3$ slots (`5-2-3`, `2-5-3`, `2-3-5`). That gives $3$ orderings.',
          '3. **Case 2 (Starts with $1$):** Once $1$ is placed first, its outgoing constraints $1 \\to 2$ and $1 \\to 5$ are satisfied. The remaining $4$ slots must interleave two independent chains $2 \\to 3$ and $4 \\to 5$, giving $\\binom{4}{2} = 6$ orderings.',
          '4. Total distinct topological orderings $= 3 + 6 = 9$.',
        ],
        directShortcutUsed: 'Case-split on root choice ($4$ first vs. $1$ first) + chain interleaving $\\binom{4}{2}$.',
      },
    ],
  },
  {
    id: 'graph-ch2',
    number: 2,
    title: 'Weighted Shortest Paths, MST Cut Property, UCS & A* Informed Search',
    shortTitle: 'Dijkstra, MST & A*',
    estimatedHours: 4.5,
    dayLabel: 'Week 4 · Day 5',
    tagline:
      'Let’s connect PDSA’s Sleeping Giants (Dijkstra’s algorithm and the MST Cut Property) directly to AI’s $A^*$ Informed Search—so you clearly see why popping beats pushing, why adding $+c$ keeps MSTs intact while breaking shortest paths, and why consistency is stronger than plain admissibility.',
    syllabusMapping: [
      'Shortest paths: Dijkstra’s algorithm & Uniform Cost Search (Sec 4 & Sec 7 Sleeping Giant)',
      'Minimum Spanning Trees: Cut Property, Prim’s & Kruskal’s algorithms (Sec 4)',
      'Informed Search ($A^*$): $f(n)=g(n)+h(n)$, Admissibility vs. Consistency (Sec 7: AI)',
    ],
    whatIsImportant: [
      'Exact $A^*$ / UCS priority-queue trace: Goal optimality holds ONLY when the goal is **popped** (expanded), never when first generated (GATE DA 2025 Q.44)',
      'Combining admissible heuristics: $\\max(h_1, h_2)$ and $|h_1 - h_2|$ remain admissible (GATE DA 2024 Q.23); Consistency $h(u) \\le c(u,v) + h(v)$ guarantees Graph Search optimality without re-opening',
      'Dijkstra’s non-negative weight precondition ($w \\ge 0$): even ONE negative edge without negative cycles can break Dijkstra',
      'MST Cut & Cycle Properties + edge-weight shift invariance ($w(e) + c$ preserves MSTs, unlike shortest paths) + Kruskal $\\leftrightarrow$ Single-Linkage Clustering bridge',
    ],
    whatIsNotImportant: [
      'Fibonacci Heap amortized decrease-key proofs ($O(E + V \\log V)$) — Binary Heap $O((V+E)\\log V)$ suffices',
      'Johnson’s all-pairs reweighting, Borůvka’s algorithm, or IDA* / RBFS memory-bounded variants',
    ],
    inboundStream: 'Module 10 Ch.1 BFS/DFS and Module 9 Binary Heap priority queues.',
    outboundStream: [
      'Module 14 Single-Linkage Hierarchical Clustering (= Kruskal’s MST!)',
      'Module 10 Ch.3 Minimax & Alpha-Beta Game Tree Search',
    ],
    glossary: [
      {
        term: 'Weighted Graph & Edge Cost',
        symbol: '$w(u, v),\\; c(u, v)$',
        plainEnglish:
          'A graph where every edge carries a numeric cost—such as road distance, toll fee, or cable length—so “shortest” means lowest total weight rather than fewest hops.',
        tinyExample: 'A $2$-hop route $S \\to A \\to G$ costing $2 + 3 = 5$ beats a $1$-hop route $S \\to G$ costing $10$.',
      },
      {
        term: 'Edge Relaxation',
        symbol: '$d[v] \\leftarrow d[u] + w(u,v)$',
        plainEnglish:
          'The core shortest-path update step: whenever walking through $u$ gives a cheaper path to $v$ than your current best estimate $d[v]$, you “relax” (lower) $d[v]$ to that better cost.',
        tinyExample: 'If $d[G] = 10$ and popping $A$ ($d[A]=2$) reveals edge $A \\to G$ of cost $3$, we relax $d[G]$ down to $2 + 3 = 5$.',
      },
      {
        term: 'Dijkstra’s Algorithm',
        symbol: '$O((|V|+|E|)\\log|V|)$',
        plainEnglish:
          'A greedy shortest-path algorithm for graphs with non-negative weights ($w \\ge 0$) that repeatedly pops the cheapest unsettled vertex from a min-priority queue and locks in its exact distance.',
        tinyExample: 'On non-negative road tolls, once a city pops from the min-heap at cost $6$, no future detour can ever beat $6$.',
      },
      {
        term: 'Uniform Cost Search (UCS)',
        symbol: '$f(n) = g(n)$',
        plainEnglish:
          'AI’s goal-directed twin of Dijkstra’s algorithm: it always expands the frontier state with the smallest exact path cost $g(n)$ from the start, stopping only when the goal $G$ is popped.',
        tinyExample: 'UCS is literally $A^*$ with a zero heuristic ($h(n) = 0$)—guaranteed optimal when all step costs are positive.',
      },
      {
        term: 'Spanning Tree & Minimum Spanning Tree (MST)',
        symbol: '$|T| = |V| - 1$',
        plainEnglish:
          'A spanning tree connects all $|V|$ vertices of a connected undirected graph using exactly $|V|-1$ edges with zero cycles; an MST is a spanning tree whose total edge weight is as small as possible.',
        tinyExample: 'Connecting $4$ campus buildings always uses exactly $3$ cables; an MST picks the $3$ non-cyclic cables with minimum total length.',
      },
      {
        term: 'Cut & Cut Property',
        symbol: '$(S, V \\setminus S)$',
        plainEnglish:
          'Any split of a graph’s vertices into two non-empty groups $S$ and $V \\setminus S$ is a cut. The Cut Property promises that the cheapest edge crossing any cut is always safe to include in an MST.',
        tinyExample: 'If the only edges leaving $\\{D\\}$ cost $4$ and $5$, the weight-$4$ edge is guaranteed to belong to every MST.',
      },
      {
        term: 'Cycle Property',
        plainEnglish:
          'The mirror twin of the Cut Property: inside any cycle of a weighted graph, the strictly heaviest edge can never belong to any MST (because you could always remove it and keep the graph connected more cheaply).',
        tinyExample: 'In a triangle with weights $1, 2, 3$, the weight-$3$ edge is strictly heaviest on the cycle and never enters the MST.',
      },
      {
        term: 'Greedy Choice (Prim’s vs. Kruskal’s)',
        plainEnglish:
          'Two greedy ways to build an MST using the Cut Property: Prim’s grows one connected tree outward from a start node, while Kruskal’s sorts all edges globally and adds each lightest edge that doesn’t create a cycle.',
        tinyExample: 'Kruskal’s merge order on point distances is identical to Single-Linkage Hierarchical Clustering in ML.',
      },
      {
        term: 'Heuristic Function',
        symbol: '$h(n)$',
        plainEnglish:
          'A problem-specific rule of thumb estimating the remaining cost from state $n$ to the goal $G$, giving informed search a compass instead of searching blindly.',
        tinyExample: 'Straight-line (Euclidean) distance to a destination city is a classic GPS heuristic $h(n)$.',
      },
      {
        term: '$A^*$ Evaluation Function',
        symbol: '$f(n) = g(n) + h(n)$',
        plainEnglish:
          'The priority score $A^*$ uses to pick the next frontier state: exact cost already spent $g(n)$ plus estimated cost remaining $h(n)$, estimating the total cost of the best path passing through $n$.',
        tinyExample: 'If reaching $C$ cost $g(C) = 4$ and estimated remaining cost is $h(C) = 2$, $A^*$ scores $C$ at $f(C) = 6$.',
      },
      {
        term: 'Admissible Heuristic',
        symbol: '$0 \\le h(n) \\le h^*(n)$',
        plainEnglish:
          'An optimistic heuristic that never overestimates the true shortest remaining cost $h^*(n)$ to reach a goal—guaranteed to keep $A^*$ Tree Search optimal.',
        tinyExample: 'If true remaining cost is $h^*(A) = 6$, then $h(A) = 4$ is admissible, while $h(A) = 7$ is inadmissible.',
      },
      {
        term: 'Consistent (Monotone) Heuristic',
        symbol: '$h(u) \\le c(u,v) + h(v)$',
        plainEnglish:
          'A stronger triangle-inequality guarantee: taking one step $u \\to v$ never drops your estimated total $f$-score, ensuring $A^*$ Graph Search finds the optimal path on the very first pop of every node without ever re-opening closed states.',
        tinyExample: 'With $c(A,B) = 2$, $h(A) = 6$, and $h(B) = 3$, $6 > 2 + 3$ breaks consistency even if $h$ is still admissible.',
      },
    ],
    generatorId: 'astar-trace-gen',
    concepts: [
      {
        id: 'm10-c2-1',
        title: 'Dijkstra’s Algorithm & Uniform Cost Search (UCS): Greedy Locking vs. Negative Edges',
        subtitle: 'Why Dijkstra pops the lowest-cost frontier node—and why a single negative edge breaks the lock',
        priority: 'sleeping-giant',
        buildsOn: 'BFS distance layers and priority queues (Min-Heaps)',
        whyStudy:
          'Plain BFS minimizes hop count, which treats a 500 km highway and a 1 km street identically! Real GPS routing, packet networks, and AI planners operate on **weighted graphs** where every edge has a numeric cost. **Dijkstra’s algorithm** — and its AI twin **Uniform Cost Search (UCS)** — finds optimal weighted shortest paths in $O((|V| + |E|)\\log |V|)$ using a Min-Heap. Understanding the exact non-negative precondition behind Dijkstra’s greedy lock-in (and why optimality is only confirmed on **pop**, never on **push**) prevents the two deadliest shortest-path mistakes in GATE DA.',
        groundRules: [
          '**Dijkstra’s Greedy Lock-In Strictly Assumes Non-Negative Edge Weights ($w(u, v) \\ge 0$):** When the cheapest unsettled vertex $u$ pops from the min-heap at cost $d[u]$, any rival path leaving the settled set must first step through another frontier vertex costing $\\ge d[u]$ and then add only $\\ge 0$ weights — proving no future detour can ever undercut $d[u]$!',
          '**Even ONE Negative Edge Can Break Dijkstra — Even With Zero Negative Cycles:** Once a negative edge exists, a more expensive frontier node can later take that negative "cashback" shortcut to beat an already-locked node! Whenever negative edge weights appear, switch to Bellman-Ford ($O(|V| \\cdot |E|)$).',
          '**Push = Candidate Discovered; Pop = Optimal Cost Confirmed:** Never halt UCS (or $A^*$) the moment goal $G$ is first pushed onto the priority queue — an expensive direct edge may enqueue $G$ early while a cheaper multi-hop path is one pop away. Always stop ONLY when $G$ is **popped**!',
          '**Adding a Uniform Constant $+c$ to All Edges Can Change Shortest Paths:** Because competing $s$-$t$ paths can contain *different numbers of edges* $k$, adding $+c$ per edge penalizes a $k$-edge route by $+k \\cdot c$, potentially flipping which route wins!',
        ],
        toyExample: {
          title: 'Two Toll Roads and a Cashback Shortcut',
          scenario:
            'Drive from $S$ to $A$ with roads $S \\to B$ (toll $5$), $S \\to A$ (toll $4$), and $B \\to A$ (toll $-3$, a cashback bridge!).',
          walkthroughSteps: [
            '1. **With non-negative tolls** (say $B \\to A$ costs $+1$, and $S \\to A$ costs $7$): Dijkstra pops $B$ (cost $5 < 7$), relaxes $B \\to A$ to $5+1=6$, and safely locks $A$ at $6$ because any future path through $A$’s unopened neighbors only *adds* $\\ge 0$.',
            '2. **With the $-3$ cashback road:** Dijkstra sees $d[A]=4 < d[B]=5$, so it **pops and permanently locks** $A$ at cost $4$!',
            '3. Later it pops $B$ (cost $5$) and discovers $S \\to B \\to A$ costs $5 - 3 = 2 < 4$! Because $A$ was already locked, standard Dijkstra misses the true shortest path even though there are **zero negative cycles**!',
          ],
          ahaMoment:
            'Dijkstra’s greedy lock only works because non-negative edge weights ($w(u,v) \\ge 0$) guarantee path costs can never shrink later. The moment negative edges are allowed, popping the cheapest frontier node no longer protects you from a later cashback detour—that is when you must switch to Bellman-Ford ($O(|V|\\cdot|E|)$).',
        },
        theoremAndFormula: {
          statement:
            'For graphs with $w(u,v) \\ge 0$, **Dijkstra’s algorithm** (and its AI goal-directed twin **Uniform Cost Search (UCS)**) maintains $d[v] \\ge \\delta(s, v)$ via edge relaxation and settles vertices in non-decreasing order of true shortest-path cost in $O((|V|+|E|)\\log|V|)$ time (with a binary heap).',
          formulaLatex:
            '\\text{Relax}(u, v, w):\\quad \\text{if } d[u] + w(u, v) < d[v],\\; d[v] \\leftarrow d[u] + w(u, v)',
          plainEnglishDecoding:
            'Keep this golden rule front and center for UCS: **never stop the moment goal $G$ is first pushed into the priority queue**! An expensive direct road might put $G$ into the queue early while a cheaper multi-hop path is still one step away. Only stop when $G$ reaches the **front of the queue and is popped**.',
          workedMiniExamples: [
            {
              prompt:
                'Edges: $S \\to G\\;(10)$, $S \\to A\\;(2)$, $A \\to G\\;(3)$. Trace UCS when stopping on *push* vs. *pop*.',
              solution:
                'Pop $S$: pushes $A(2)$ and $G(10)$. Stopping on push wrongly returns $10$! Continuing: pop $A(2)$, relax $G$ to $2+3=5$, then pop $G(5)$—returns true optimal cost $5$.',
            },
            {
              prompt:
                'If you add $+10$ to every edge weight in a graph with positive weights, do shortest paths stay the same?',
              solution:
                'No! A $1$-edge path gains only $+10$, while a $2$-edge path gains $+20$. For example, a $2$-edge path of cost $4 + 4 = 8$ beats a $1$-edge path of cost $10$, yet after adding $+10$ to every edge, the $2$-edge path costs $14 + 14 = 28$ and loses to the $1$-edge path costing $20$!',
            },
          ],
        },
        sandboxId: 'graph-astar-lab',
        msqTraps: [
          {
            myth: 'Dijkstra works correctly as long as the graph contains no negative-weight cycles.',
            reality: 'False! Even a single negative-weight edge in an acyclic graph (DAG) breaks Dijkstra’s greedy vertex-locking invariant.',
            counterExample: '$S \\to A\\;(4),\\; S \\to B\\;(5),\\; B \\to A\\;(-3)$: acyclic, yet Dijkstra locks $A$ at $4$ instead of $2$.',
          },
          {
            myth: 'Adding a positive constant $+c$ to all edge weights preserves shortest paths.',
            reality: 'Adding $+c$ penalizes paths with more edges by $+k\\cdot c$, changing which path is shortest!',
            counterExample: '$S\\!\\to\\!G\\;(10)$ vs. $S\\!\\to\\!A\\!\\to\\!G\\;(4+4=8)$: after $+10$ per edge, $20 < 28$ reverses the winner.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 · AI Search',
            targetWeek: 4,
            topic: 'UCS as $A^*$ with $h(n) \\equiv 0$',
            whyItMatters:
              'UCS is literally $A^*$ with zero heuristic ($f(n) = g(n) + 0$). Every priority-queue tie-breaking and pop-time rule carries over identically.',
            pyqProof: 'GATE DA 2025 · Q.44 ($A^*$ priority queue trace)',
          },
        ],
      },
      {
        id: 'm10-c2-2',
        title: 'Minimum Spanning Trees (MST): The Cut Property, Kruskal & Prim',
        subtitle: 'Connecting all vertices at minimum total cable cost—and why MST is really Single-Linkage Clustering',
        priority: 'sleeping-giant',
        buildsOn: 'Undirected connected graphs, cycles, and greedy priority selection',
        whyStudy:
          'Imagine wiring $|V|$ campus buildings with fiber-optic cable so every building can talk to every other building at the **smallest possible total cable cost** — rather than minimizing distance from one single root. That is the **Minimum Spanning Tree (MST)** problem! Even better for Data Science: running **Kruskal’s MST** on pairwise data-point distances is literally identical to **Single-Linkage Hierarchical Clustering** in Machine Learning! Understanding the Cut Property, Cycle Property, and fixed-size $|V| - 1$ tree invariance makes every MST proof and weight-shift MSQ effortless.',
        groundRules: [
          '**Every Spanning Tree on $|V|$ Vertices Uses Exactly $|V| - 1$ Edges and Zero Cycles:** Adding any $|V|$-th edge creates a cycle; dropping any edge disconnects the graph. Because *every* candidate spanning tree has the exact same number of edges ($|V| - 1$), adding $+c$ to all weights shifts every tree by the identical constant $(|V| - 1)c$ — preserving MSTs!',
          '**The Cut Property Guarantees Lightest Crossing Edges Are MST-Safe:** Split the vertices into *any* two non-empty sets $S$ and $V \\setminus S$. The strictly cheapest edge bridging $S$ and $V \\setminus S$ MUST belong to EVERY MST (and when tied, at least one cheapest bridge belongs to some MST). Both Prim’s and Kruskal’s are simply greedy implementations of this single rule!',
          '**The Cycle Property Bans the Strictly Heaviest Edge on Any Cycle:** Inside any cycle, the single strictly heaviest edge can NEVER belong to an MST — deleting it leaves the cycle connected via cheaper edges.',
          '**MSTs Depend Only on Relative Edge Weight Order — Distinct Weights Guarantee a Unique MST:** Because Kruskal’s and Prim’s only *compare* individual edge weights (never summing unequal-length paths), any strictly increasing map ($w + c$, $a \\cdot w$ for $a > 0$, or $w^2$ for $w > 0$) leaves the MST untouched!',
        ],
        toyExample: {
          title: 'Wiring 4 Campus Buildings with Minimum Fiber Cable',
          scenario:
            'Buildings $\\{A, B, C, D\\}$ have cable costs $A\\!-\\!B:1$, $B\\!-\\!C:2$, $A\\!-\\!C:3$, $C\\!-\\!D:4$, $B\\!-\\!D:5$.',
          walkthroughSteps: [
            '1. **Cut Property in Action:** Split vertices into ANY two non-empty groups, say $S = \\{A, B, C\\}$ and $V\\setminus S = \\{D\\}$. The edges crossing this cut are $C\\!-\\!D\\;(4)$ and $B\\!-\\!D\\;(5)$. The cheapest bridge is $C\\!-\\!D\\;(4)$, so $C\\!-\\!D$ MUST belong to the MST!',
            '2. **Kruskal’s Sort-and-Skip:** Sort edges: $A\\!-\\!B\\;(1)$ add, $B\\!-\\!C\\;(2)$ add, $A\\!-\\!C\\;(3)$ **skip (creates cycle $A\\!-\\!B\\!-\\!C\\!-\\!A$)**, $C\\!-\\!D\\;(4)$ add. Total $|V|-1 = 3$ edges, cost $= 1+2+4 = 7$.',
            '3. **Why MST $\\neq$ Shortest Path Tree:** From $A$, the shortest path to $C$ has weight $3$ ($A\\!-\\!B\\!-\\!C$ and $A\\!-\\!C$ tie here), but if $A\\!-\\!C$ cost $2.5$ and $B\\!-\\!C$ cost $2$, the MST picks $B\\!-\\!C$ ($2$) while $A$’s shortest path picks $A\\!-\\!C$ ($2.5 < 1+2$)!',
          ],
          ahaMoment:
            'Hold on to this one geometric fact: every spanning tree on $|V|$ vertices uses **exactly $|V|-1$ edges**. Because every candidate tree pays the exact same $(|V|-1)\\cdot c$ shift when you add $+c$ to every edge, MSTs are completely immune to additive shifts—unlike shortest paths, where competing paths can have different numbers of edges!',
        },
        theoremAndFormula: {
          statement:
            '**Cut Property:** For any cut $(S, V\\setminus S)$ of a connected weighted graph $G$, any minimum-weight edge crossing the cut belongs to some MST of $G$ (and belongs to EVERY MST if it is strictly lightest). **Cycle Property:** The strictly heaviest edge on any cycle belongs to NO MST.',
          formulaLatex:
            'T \\text{ is an MST} \\implies |T| = |V|-1, \\qquad w\'(e) = a\\,w(e) + b\\;(a > 0) \\implies \\text{MST}(w\') = \\text{MST}(w)',
          plainEnglishDecoding:
            'Both classic algorithms simply cash in on the Cut Property in slightly different styles: Prim’s grows a single connected tree outward from one start vertex in $O((|V|+|E|)\\log|V|)$ time, whereas Kruskal’s sorts all edges globally and merges components with Union-Find in $O(|E|\\log|E|)$ time. And whenever all edge weights are **distinct**, you are guaranteed a **unique** MST.',
          workedMiniExamples: [
            {
              prompt:
                'A connected graph on $6$ vertices has unique MST weight $25$. If every edge weight increases by $+4$, what is the new MST weight?',
              solution:
                'Every spanning tree has $6 - 1 = 5$ edges, so every tree’s weight shifts by $+4 \\times 5 = +20$. The exact same edges remain optimal, with new MST weight $25 + 20 = 45$.',
            },
            {
              prompt:
                'How does Kruskal’s MST relate to Single-Linkage Agglomerative Clustering?',
              solution:
                'Kruskal’s merges components by shortest edge—identical to Single-Linkage! Stopping Kruskal’s when $k$ components remain (or deleting the $k-1$ heaviest edges of the MST) yields the exact $k$ single-linkage clusters.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'If the minimum-weight edge in the graph is unique, then the entire MST is unique.',
            reality: 'Ties among *other* edges can still create multiple valid MSTs.',
            counterExample: 'Triangle with weights $1, 2, 2$: the cheapest edge ($1$) is unique, yet there are $2$ distinct MSTs of total weight $3$.',
          },
          {
            myth: 'Adding a positive constant $+c$ to all edges can change the Minimum Spanning Tree.',
            reality: 'Every spanning tree has exactly $|V|-1$ edges, so adding $+c$ shifts every spanning tree by the same $(|V|-1)c$ constant.',
            counterExample: 'Triangle $1, 2, 3$ shifted by $+10$ becomes $11, 12, 13$; MST still picks the first two ($11+12 < 11+13 < 12+13$).',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 · Machine Learning',
            targetWeek: 7,
            topic: 'Single-Linkage Hierarchical Clustering',
            whyItMatters:
              'Single-linkage dendrograms on $n$ data points are literally the merge history of Kruskal’s MST on the $n$-point complete distance graph!',
            pyqProof: 'GATE DA 2024 · Q.42 & GATE DA 2025 · Q.30',
          },
        ],
      },
      {
        id: 'm10-c2-3',
        title: 'Informed Search ($A^*$): Admissibility, Consistency & Graph-Search Optimality',
        subtitle: 'Why $h(n) \\le h^*(n)$ suffices for trees, while $h(u) \\le c(u,v) + h(v)$ is required to never re-open closed graph nodes',
        priority: 'core-pillar',
        buildsOn: 'Uniform Cost Search ($f(n)=g(n)$) and shortest-path triangle inequality',
        whyStudy:
          'Uniform Cost Search (Dijkstra) finds optimal paths, yet it expands blindly in every direction like an aimless flood — wasting work exploring states leading straight *away* from the goal. **$A^*$ Search** gives UCS a domain-specific compass $h(n)$ (estimated remaining cost to the goal) and prioritizes frontier states by $f(n) = g(n) + h(n)$. Understanding the exact mathematical rules that keep $A^*$ optimal — **admissibility** for Tree Search vs. **consistency** for Graph Search without re-opening — is one of the highest-yield AI concepts in GATE DA (**2024 Q.23**, **2025 Q.44**, **2026 Q.13**).',
        groundRules: [
          '**$A^*$ Scores Every Frontier State by $f(n) = g(n) + h(n)$ and Stops ONLY When $G$ Is Popped:** Here $g(n)$ is exact cost spent from $S$ to $n$, and $h(n)$ is estimated remaining cost from $n$ to $G$ (UCS is $h \\equiv 0$; Greedy Best-First is $f = h$). Just like UCS, never stop when $G$ is first pushed — wait until $G$ pops with the lowest $f$-score!',
          '**Admissibility ($0 \\le h(n) \\le h^*(n)$) Guarantees Optimality in $A^*$ Tree Search:** Because an admissible heuristic never overestimates true remaining cost $h^*(n)$, every node along an optimal path to $G$ has $f(n) \\le C^*$ and is guaranteed to pop before any suboptimal goal path ($f > C^*$).',
          '**Consistency ($h(u) \\le c(u, v) + h(v)$ with $h(G) = 0$) Guarantees Non-Decreasing $f$ and Graph-Search Optimality:** Along every step $u \\to v$, consistency guarantees $f(v) = g(u) + c(u, v) + h(v) \\ge g(u) + h(u) = f(u)$. Therefore the *very first pop* of any node $n$ already holds its optimal $g(n)$, so closed nodes NEVER need re-opening!',
          '**Consistency Strictly Implies Admissibility (Not Vice Versa), and $\\max(h_1, h_2)$ & $|h_1 - h_2|$ Preserve Admissibility:** Summing the edge triangle inequality along an optimal path proves $h(n) \\le h^*(n)$, whereas an admissible heuristic can still break consistency on one edge! Combining admissible heuristics with $\\max(h_1, h_2)$ or $|h_1 - h_2|$ stays $\\le h^*$, while $h_1 + h_2$ can overshoot $h^*$.',
        ],
        toyExample: {
          title: 'Two GPS Apps: Optimistic vs. Triangle-Consistent',
          scenario:
            'Navigate from $S$ to $G$ via $f(n) = g(n) + h(n)$, where $g(n)$ is exact distance spent so far and $h(n)$ is estimated remaining distance to $G$.',
          walkthroughSteps: [
            '1. **Greedy Best-First ($f=h$)** ignores $g(n)$ and charges down cheap-looking traps; **UCS ($f=g$)** ignores $h(n)$ and floods in all directions; **$A^*$ ($f=g+h$)** balances both!',
            '2. **Admissible ($h(n) \\le h^*(n)$):** Never overestimates true cost to goal. If $A^*$ runs **Tree Search** (allowing duplicate states), admissibility guarantees optimal cost when $G$ is popped.',
            '3. **Consistent ($h(u) \\le c(u,v) + h(v)$):** Along every step $u \\to v$, estimated total cost $f(v) = g(u)+c(u,v)+h(v) \\ge g(u)+h(u) = f(u)$ never drops! Thus the *first* time $A^*$ pops any node $n$, its $g(n)$ is already optimal—no closed node ever needs re-opening!',
          ],
          ahaMoment:
            'Think of consistency as the triangle inequality for heuristics: it guarantees your estimated total score $f(n)$ never decreases along any step, which means the very first time $A^*$ Graph Search pops any state, its shortest path is already settled for good.',
        },
        theoremAndFormula: {
          statement:
            'Let $h^*(n)$ be the exact optimal cost from $n$ to a goal. A heuristic $h$ is **admissible** if $0 \\le h(n) \\le h^*(n)$ for all $n$, and **consistent** (monotone) if $h(G)=0$ and $h(u) \\le c(u,v) + h(v)$ for every edge $(u,v)$. Consistency strictly implies admissibility (not vice versa!).',
          formulaLatex:
            '\\text{Consistency } \\big(h(u) \\le c(u,v) + h(v)\\big) \\implies \\text{Admissibility } \\big(h(n) \\le h^*(n)\\big)',
          plainEnglishDecoding:
            'If you have two admissible heuristics $h_1$ and $h_2$, you can safely combine them with $h_{\\max}(n) = \\max(h_1(n), h_2(n))$—it stays admissible and is at least as smart as both—and even their gap $|h_1(n) - h_2(n)|$ is guaranteed admissible (tested in GATE DA 2024 Q.23!). Just be careful with $h_1 + h_2$: adding two estimates can overshoot $h^*$ and break optimality.',
          workedMiniExamples: [
            {
              prompt:
                'Edge $A \\to B$ has cost $c(A,B) = 2$, $h^*(A)=6$, $h^*(B)=4$. Suppose $h(A)=6$ and $h(B)=3$. Is $h$ admissible? Is $h$ consistent?',
              solution:
                'Admissible: $h(A)=6 \\le 6$ and $h(B)=3 \\le 4$. Consistent check: $h(A) = 6 > c(A,B) + h(B) = 2 + 3 = 5$! Violated, so $h$ is **admissible but NOT consistent**.',
            },
            {
              prompt:
                'If $h_1, h_2$ are admissible, why is $|h_1 - h_2|$ guaranteed admissible while $h_1 + h_2$ is not? (GATE DA 2024 Q.23)',
              solution:
                'Since $0 \\le h_1 \\le h^*$ and $0 \\le h_2 \\le h^*$, we have $0 \\le |h_1 - h_2| \\le \\max(h_1, h_2) \\le h^*$. Meanwhile $h_1 = h_2 = h^* > 0$ gives $h_1 + h_2 = 2h^* > h^*$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Every admissible heuristic is also consistent.',
            reality: 'False! Admissibility checks only against true $h^*(n)$ to the goal, whereas consistency enforces the edge-by-edge triangle inequality.',
            counterExample: '$A \\to B\\;(2) \\to G\\;(4)$ with $h(A)=6, h(B)=3, h(G)=0$: admissible ($6\\le 6, 3\\le 4$), inconsistent ($6 > 2+3$).',
          },
          {
            myth: 'The sum $h_1 + h_2$ of two admissible heuristics is always admissible.',
            reality: 'Adding two non-negative estimates can easily overshoot $h^*(n)$ unless their subproblems are completely disjoint.',
            counterExample: '$h^*(n) = 5,\\; h_1(n) = 4,\\; h_2(n) = 4 \\implies h_1 + h_2 = 8 > 5$.',
          },
          {
            myth: '$A^*$ can terminate immediately as soon as the goal state $G$ is generated and pushed onto the priority queue.',
            reality: 'Just like UCS, $A^*$ must wait until $G$ is **popped** (expanded) with the smallest $f$-value in the frontier!',
            counterExample: 'If $G$ is generated via an expensive edge with $f(G)=10$ while another node sits at $f(A)=4$, popping $A$ can discover a cheaper path to $G$ of cost $6$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 & 7 · ML & Planning',
            targetWeek: 7,
            topic: 'A* vs. Greedy Best-First vs. Tree/Graph Search in ML',
            whyItMatters:
              'Greedy Best-First ($f=h$) matches greedy decoding/beam search in NLP, whereas $A^*$ ($f=g+h$) powers exact admissible search and heuristic-guided planning in ML/RL.',
            pyqProof: 'GATE DA 2024 · Q.23, GATE DA 2025 · Q.44 & GATE DA 2026 · Q.13',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm10-c2-ht1',
        title: 'Tracing $A^*$ Priority Queue Without Premature Goal Termination',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.44'],
        problemStatement:
          'Given a $6$-to-$7$-node directed weighted graph with heuristic values $h(n)$, trace $A^*$ from $S$ to $G$ and report the exact sequence of popped (expanded) nodes and optimal path cost.',
        triggerCue:
          'Graph has multiple paths to $G$ (one direct high-cost edge to $G$ and one multi-hop low-cost path) plus explicit $h(n)$ values.',
        bruteForceTrap:
          'Eye-balling the shortest path visually without tracking the priority queue—or stopping the moment $G$ is added to the frontier!',
        mentalShift:
          'Maintain a tidy 2-column table: **Popped Node** and **Active Frontier $(node, g, f=g+h)$**. Never declare victory when $G$ enters the frontier—only when $G$ has the **lowest $f$** and is popped!',
        steps: [
          {
            label: 'Step 1: Initialize frontier with S',
            detail: 'Push $(S, g=0, f=h(S))$. Always check if the **popped** node is $G$.',
          },
          {
            label: 'Step 2: Relax or keep lower-f entry for G',
            detail:
              'If $A$ pushes $(G, f=9)$ while $(C, f=6)$ is also in the frontier, $C$ pops next! When $C$ discovers a shorter route to $G$ with $f=6$, update $G$ to $f=6$.',
          },
          {
            label: 'Step 3: Stop ONLY on popping G',
            detail:
              'Read the exact list of popped nodes in order. Notice every non-goal node popped before $G$ had $f(n) \\le f^*(G)$.',
          },
        ],
        lockInTakeaway:
          'In UCS and $A^*$, **push = discover; pop = optimal settlement**. Always wait for the pop of $G$!',
      },
      {
        id: 'm10-c2-ht2',
        title: 'Weight-Shift Invariance: Separating Shortest Paths from MSTs',
        difficulty: 'Moderate',
        relatedPyqs: ['Sec 4 Sleeping Giant (Dijkstra vs MST)'],
        problemStatement:
          'Every edge weight $w(e)$ in a connected graph is transformed via $w\'(e) = w(e) + 10$ (or $w\'(e) = 2w(e)$). Decide instantly which of {MST, Shortest $s$-$t$ Path} stays invariant.',
        triggerCue:
          'An MSQ modifies all edge weights uniformly ($+c$, $\\times c$, squaring $w^2$) and asks whether MST or Dijkstra shortest paths change.',
        bruteForceTrap:
          'Constructing a random graph and re-running Kruskal and Dijkstra by hand on the transformed weights.',
        mentalShift:
          'Count the **number of edges** in the solution! Every spanning tree has **fixed size $|V|-1$**, whereas candidate $s$-$t$ paths have **varying edge counts** $k$.',
        steps: [
          {
            label: 'Step 1: Test $+c$ (additive shift)',
            detail:
              'MST shifts every tree by $(|V|-1)c$ (order preserved!). Shortest path shifts a $k$-edge path by $kc$ (order BREAKS if $k$ differs!).',
          },
          {
            label: 'Step 2: Test $\\times c$ ($c > 0$, positive scaling)',
            detail:
              'Both MST and Shortest Path scale every sum linearly by $c$, so BOTH stay invariant!',
          },
          {
            label: 'Step 3: Test strictly monotone $w^2$ ($w > 0$)',
            detail:
              'MST depends only on *relative pairwise comparisons* of edge weights (Kruskal/Cut Property), so ANY strictly increasing map preserves MST! Shortest paths compare *sums* ($3^2+3^2=18 < 5^2=25$ vs $3+3=6 > 5$), so $w^2$ breaks shortest paths!',
          },
        ],
        lockInTakeaway:
          'MST = **fixed $|V|-1$ edges & comparison-only** (survives $+c$ and $w^2$); Shortest Path = **variable edge count & sum-sensitive** (survives only $\\times c$ for $c>0$).',
      },
    ],
    arsenalCards: [
      {
        id: 'm10-c2-ar1',
        badge: 'Admissibility vs. Consistency Check',
        whenYouSpot: '$A^*$ heuristic properties, $h_1, h_2$ combinations, or Graph Search closed-set re-opening',
        directWeaponLatex:
          'h(u) \\le c(u,v) + h(v) \\;\\;(\\text{Consistent}) \\implies 0 \\le h(n) \\le h^*(n) \\;\\;(\\text{Admissible})',
        instantRule:
          'Consistency $\\implies$ Admissibility (not converse!). $\\max(h_1,h_2)$ and $|h_1 - h_2|$ preserve admissibility; $h_1+h_2$ does NOT.',
        tenSecondExample:
          'Edge $(u,v)$ cost $2$, $h(u)=6, h(v)=3$: $6 > 2+3 \\implies$ inconsistent even if $h \\le h^*$.',
        oneFatalTrap:
          'Assuming admissible $h$ guarantees optimality in Graph Search *without re-opening closed nodes*—that requires **consistency**!',
      },
      {
        id: 'm10-c2-ar2',
        badge: 'Dijkstra / UCS / $A^*$ Pop-Time Rule',
        whenYouSpot: 'Priority-queue trace for Dijkstra, UCS, or $A^*$ ($f=g+h$)',
        directWeaponLatex:
          '\\text{Optimal when } G \\text{ is POPPED}, \\quad \\text{Dijkstra valid } \\iff w(u,v) \\ge 0',
        instantRule:
          'Never stop when $G$ is first pushed to the frontier; stop only when $G$ is popped with minimal $f$. One negative edge breaks Dijkstra even in a DAG.',
        tenSecondExample:
          '$S\\to G\\;(10)$, $S\\to A\\;(2)$, $A\\to G\\;(3)$: $G(10)$ enters first, then gets updated and popped at $5$.',
        oneFatalTrap:
          'Thinking “no negative cycles” is enough for Dijkstra—it needs **every edge** $w \\ge 0$!',
      },
      {
        id: 'm10-c2-ar3',
        badge: 'MST Cut & Weight-Transform Shield',
        whenYouSpot: 'Prim/Kruskal edge selection, MST uniqueness, or uniform edge-weight changes',
        directWeaponLatex:
          '|T_{\\text{MST}}| = |V|-1 \\implies \\text{MST invariant under } +c \\text{ and any strictly increasing } f(w)',
        instantRule:
          'Lightest edge across any cut is MST-safe; strictly heaviest edge in any cycle is never in an MST; distinct weights $\\implies$ unique MST.',
        tenSecondExample:
          'Kruskal’s MST with the $k-1$ longest edges removed gives exact $k$-cluster Single-Linkage output.',
        oneFatalTrap:
          'Confusing MST (global $|V|-1$ tree cost) with Shortest-Path Tree (root-to-each-node sum) or thinking $+c$ preserves shortest paths.',
      },
    ],
    questions: [
      {
        id: 'm10-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · Kruskal’s MST Weight',
        marks: 1,
        type: 'NAT',
        stem: 'Consider a connected undirected weighted graph on $5$ vertices $\\{A, B, C, D, E\\}$ with edges: $A\\!-\\!B: 2$, $B\\!-\\!C: 3$, $A\\!-\\!C: 4$, $C\\!-\\!D: 1$, $B\\!-\\!D: 5$, $D\\!-\\!E: 6$, and $C\\!-\\!E: 7$. What is the total weight of the Minimum Spanning Tree (MST)?',
        natAnswer: { min: 12, max: 12, exactDisplay: '12' },
        triggerHint: 'Sort the edges in increasing order of weight and add $5-1=4$ edges without forming cycles.',
        intuitiveSolution: [
          '1. Sorted edges: $C\\!-\\!D\\;(1)$, $A\\!-\\!B\\;(2)$, $B\\!-\\!C\\;(3)$, $A\\!-\\!C\\;(4)$, $B\\!-\\!D\\;(5)$, $D\\!-\\!E\\;(6)$, $C\\!-\\!E\\;(7)$.',
          '2. Kruskal picks $C\\!-\\!D\\;(1)$, $A\\!-\\!B\\;(2)$, $B\\!-\\!C\\;(3)$. Edges $A\\!-\\!C\\;(4)$ and $B\\!-\\!D\\;(5)$ form cycles and are skipped.',
          '3. Finally Kruskal picks $D\\!-\\!E\\;(6)$ to connect $E$. Total MST weight $= 1 + 2 + 3 + 6 = 12$.',
        ],
        directShortcutUsed: 'Kruskal sort-and-add $|V|-1 = 4$ non-cyclic lightest edges.',
      },
      {
        id: 'm10-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.23',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'Suppose $h_1(n)$ and $h_2(n)$ are two admissible heuristics for an $A^*$ search problem (so $0 \\le h_1(n) \\le h^*(n)$ and $0 \\le h_2(n) \\le h^*(n)$ for every state $n$, where $h^*(n)$ is the true optimal cost to a goal). Which of the following heuristic functions is **ALWAYS** admissible?',
        options: [
          {
            id: 'A',
            text: '$h(n) = h_1(n) + h_2(n)$',
            whyTrueOrFalse: 'False—if $h_1(n) = h_2(n) = h^*(n) > 0$, their sum is $2h^*(n) > h^*(n)$.',
          },
          {
            id: 'B',
            text: '$h(n) = |h_1(n) - h_2(n)|$',
            whyTrueOrFalse: 'True! Since $0 \\le h_1, h_2 \\le h^*$, we always have $0 \\le |h_1(n) - h_2(n)| \\le \\max(h_1(n), h_2(n)) \\le h^*(n)$.',
          },
          {
            id: 'C',
            text: '$h(n) = h_1(n) \\cdot h_2(n)$',
            whyTrueOrFalse: 'False—for $h^*(n)=3$ and $h_1=h_2=2$, $h_1 \\cdot h_2 = 4 > 3$.',
          },
          {
            id: 'D',
            text: '$h(n) = 2h_1(n) - h_2(n)$',
            whyTrueOrFalse: 'False—when $h_1 = h^* > 0$ and $h_2 = 0$, $2h_1 - h_2 = 2h^* > h^*$.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Test extreme bounds $h_1, h_2 \\in [0, h^*]$ on each expression.',
        intuitiveSolution: [
          '1. For any $0 \\le a, b \\le h^*$, both $a - b \\le a \\le h^*$ and $b - a \\le b \\le h^*$, hence $0 \\le |h_1(n) - h_2(n)| \\le h^*(n)$ always holds.',
          '2. Sum, product, and $2h_1 - h_2$ can all exceed $h^*(n)$ on simple integers such as $h^* = 3,\\; h_1 = h_2 = 2$.',
        ],
        directShortcutUsed: 'Interval bound $[0, h^*]$: $|a - b| \\le \\max(a, b) \\le h^*$.',
      },
      {
        id: 'm10-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.13',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Which of the following search algorithms is **NOT** an uninformed (blind) search strategy?',
        options: [
          {
            id: 'A',
            text: 'Breadth-First Search (BFS)',
            whyTrueOrFalse: 'BFS is uninformed—it uses no goal-distance heuristic.',
          },
          {
            id: 'B',
            text: 'Depth-First Search (DFS)',
            whyTrueOrFalse: 'DFS is uninformed—it explores blindly by depth.',
          },
          {
            id: 'C',
            text: '$A^*$ Search',
            whyTrueOrFalse: 'Correct! $A^*$ is an **informed** search strategy because it uses a domain heuristic $h(n)$ in $f(n)=g(n)+h(n)$.',
          },
          {
            id: 'D',
            text: 'Depth-Limited Search (DLS)',
            whyTrueOrFalse: 'DLS is uninformed—it adds only a fixed depth cutoff $\\ell$ to DFS.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Which algorithm requires a problem-specific heuristic estimate $h(n)$?',
        intuitiveSolution: [
          '1. Uninformed (blind) algorithms—BFS, DFS, DLS, Iterative Deepening, and UCS—have only the problem definition ($g(n)$ and successors), with zero heuristic estimate of distance to the goal.',
          '2. $A^*$ evaluates $f(n) = g(n) + h(n)$ using a heuristic $h(n)$, making it an informed search algorithm.',
        ],
        directShortcutUsed: 'Informed = uses $h(n)$ $\\implies$ $A^*$.',
      },
      {
        id: 'm10-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.44 (Modeled Trace)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Consider $A^*$ search from start node $S$ to goal $G$ on a directed weighted graph with edges $S\\!\\to\\!A\\;(1)$, $S\\!\\to\\!B\\;(2)$, $A\\!\\to\\!C\\;(3)$, $A\\!\\to\\!G\\;(8)$, $B\\!\\to\\!D\\;(4)$, $C\\!\\to\\!G\\;(2)$, and $D\\!\\to\\!G\\;(1)$. Heuristic values are $h(S)=6,\\; h(A)=4,\\; h(B)=5,\\; h(C)=2,\\; h(D)=1,\\; h(G)=0$. Ties in $f(n)=g(n)+h(n)$ are broken alphabetically, and search stops only when $G$ is **popped** from the priority queue. What is the exact sequence of nodes popped?',
        options: [
          {
            id: 'A',
            text: '$S, A, G$',
            whyTrueOrFalse: 'False—stopping when $G$ is first pushed at $f=9$ misses the cheaper route via $C$.',
          },
          {
            id: 'B',
            text: '$S, A, C, G$',
            whyTrueOrFalse:
              'True! Pop $S(6) \\to$ queue $[A(5), B(7)]$. Pop $A(5) \\to$ queue $[C(6), B(7), G(9)]$. Pop $C(6) \\to$ updates $G$ to $f=6$, queue $[G(6), B(7)]$. Pop $G(6)$!',
          },
          {
            id: 'C',
            text: '$S, A, B, C, G$',
            whyTrueOrFalse: 'False—$C$ has $f(C)=4+2=6 < f(B)=2+5=7$, so $C$ pops before $B$.',
          },
          {
            id: 'D',
            text: '$S, B, D, G$',
            whyTrueOrFalse: 'False—$A$ has $f(A)=1+4=5 < f(B)=7$, so $A$ pops before $B$.',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'Maintain the min-priority queue of $(node, g, f)$ and check $f$-values after every pop.',
        intuitiveSolution: [
          '1. Pop $S$ ($g=0$): push $A$ ($g=1, f=1+4=5$) and $B$ ($g=2, f=2+5=7$).',
          '2. Pop $A$ ($f=5$): push $C$ ($g=4, f=4+2=6$) and $G$ ($g=9, f=9+0=9$). Queue: $[(C,6), (B,7), (G,9)]$.',
          '3. Pop $C$ ($f=6$): relax $G$ to $g=4+2=6, f=6+0=6$. Queue: $[(G,6), (B,7)]$.',
          '4. Pop $G$ ($f=6$) and terminate! Popped sequence: $S, A, C, G$.',
        ],
        directShortcutUsed: 'Priority-queue pop trace with $G$ update from $f=9$ down to $f=6$.',
      },
      {
        id: 'm10-c2-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Trap · Weight Shifts, Cuts & Dijkstra',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements about Minimum Spanning Trees (MST) and Shortest Paths is/are **ALWAYS** true?',
        options: [
          {
            id: 'A',
            text: 'In any connected undirected graph with positive distinct edge weights, adding $+10$ to every edge weight leaves the exact set of MST edges unchanged.',
            whyTrueOrFalse: 'True! Every spanning tree has exactly $|V|-1$ edges, so every tree’s total weight increases by the same constant $10(|V|-1)$.',
          },
          {
            id: 'B',
            text: 'In any connected undirected graph with positive distinct edge weights, adding $+10$ to every edge weight leaves every shortest $s$-$t$ path unchanged.',
            whyTrueOrFalse: 'False! Paths with more edges gain more $+10$ penalties, so a $1$-edge path of weight $10$ can beat a $2$-edge path of weight $4+4=8$ ($20 < 28$).',
          },
          {
            id: 'C',
            text: 'If $e^*$ is the strictly minimum-weight edge crossing a cut $(S, V\\setminus S)$, then $e^*$ belongs to every MST of the graph.',
            whyTrueOrFalse: 'True! This is the Cut Property for MSTs.',
          },
          {
            id: 'D',
            text: 'Even in a Directed Acyclic Graph (DAG) with zero cycles, a single negative-weight edge can cause Dijkstra’s algorithm to output a wrong shortest-path distance.',
            whyTrueOrFalse: 'True! In $S\\to A\\;(4),\\; S\\to B\\;(5),\\; B\\to A\\;(-3)$, Dijkstra locks $A$ at $4$ instead of $2$.',
          },
        ],
        correctOptions: ['A', 'C', 'D'],
        triggerHint: 'Check fixed edge count ($|V|-1$) vs. variable path length ($k$), Cut Property, and Dijkstra’s $w \\ge 0$ requirement.',
        intuitiveSolution: [
          '1. Statement A is true because every spanning tree has $|V|-1$ edges, so additive shifts preserve tree order.',
          '2. Statement B is false because $s$-$t$ paths have varying hop counts ($10$ vs $4+4$ becomes $20$ vs $28$).',
          '3. Statement C is the exact MST Cut Property.',
          '4. Statement D is true because Dijkstra locks popped vertices assuming edge weights are $\\ge 0$.',
        ],
        directShortcutUsed: 'Edge-count invariance ($|V|-1$ vs. $k$) + Cut Property + $w \\ge 0$ guard.',
      },
      {
        id: 'm10-c2-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Trap · Admissible Yet Inconsistent A* Graph Search',
        marks: 2,
        type: 'NAT',
        stem: 'Consider a directed graph with edges $S\\!\\to\\!A\\;(1)$, $S\\!\\to\\!B\\;(1)$, $A\\!\\to\\!C\\;(1)$, $B\\!\\to\\!C\\;(0)$, and $C\\!\\to\\!G\\;(10)$, and admissible heuristics $h(S)=11,\\; h(A)=1,\\; h(B)=9,\\; h(C)=1,\\; h(G)=0$. Suppose $A^*$ runs **Graph Search WITHOUT re-opening closed nodes** (once a node is popped, it is marked CLOSED and never updated or re-queued). What path cost to $G$ does it return?',
        natAnswer: { min: 12, max: 12, exactDisplay: '12' },
        triggerHint: 'Watch $h(B)=9 > c(B,C)+h(C) = 0+1$: $A$ pops early and closes $C$ at suboptimal $g=2$ before $B$ pops!',
        intuitiveSolution: [
          '1. True optimal distances to $G$ are $h^*(G)=0, h^*(C)=10, h^*(B)=10, h^*(A)=11, h^*(S)=11$, so $h$ is 100% admissible ($0 \\le h \\le h^*$). However, $B \\to C$ violates consistency ($9 > 0+1$).',
          '2. Pop $S$: push $A$ ($g=1, f=1+1=2$) and $B$ ($g=1, f=1+9=10$).',
          '3. Pop $A$ ($f=2$): push $C$ ($g=2, f=2+1=3$).',
          '4. Pop $C$ ($f=3$): **$C$ is marked CLOSED with $g=2$**, and pushes $G$ ($g=2+10=12, f=12$).',
          '5. Pop $B$ ($f=10$): sees $C$ at $g=1+0=1$, but $C$ is CLOSED and not re-opened! Next, $G$ pops with suboptimal cost $12$ (missing the true optimal cost $11$).',
        ],
        directShortcutUsed: 'Inconsistent edge $B\\to C$ forces early closure of $C$ at $g=2$ instead of $g=1$.',
      },
    ],
  },
  {
    id: 'graph-ch3',
    number: 3,
    title: 'Adversarial Search: Minimax Game Trees & Alpha-Beta Pruning Cutoffs',
    shortTitle: 'Minimax & Alpha-Beta',
    estimatedHours: 3.5,
    dayLabel: 'Week 4 · Day 6',
    tagline:
      'Let’s turn two-player zero-sum game trees into calm, step-by-step DFS backups—so you nail exact Minimax action choices, never mix up $\\alpha$ and $\\beta$, remember inclusive boundary cutoffs ($\\le, \\ge$), and see why good move ordering doubles your search depth.',
    syllabusMapping: [
      'Adversarial search in deterministic zero-sum games: Minimax algorithm (Sec 7: AI)',
      'Alpha-Beta pruning cutoffs, bound updates, and move-ordering complexity (Sec 7: AI)',
    ],
    whatIsImportant: [
      'Minimax backup: MAX picks $\\max$ of children, MIN picks $\\min$; watch whether the question asks for the **backed-up value** OR the **optimal root action index** (GATE DA 2026 Q.30)',
      'Exact definitions: $\\alpha$ = highest value found so far along path for **MAX**; $\\beta$ = lowest value found so far along path for **MIN** (GATE DA 2024 Q.25)',
      'Exact pruning rules & inclusive boundary brackets: prune at MIN when $v \\le \\alpha$ and at MAX when $v \\ge \\beta$ (GATE DA 2025 Q.43 tested closed brackets $(-\\infty, 2]$ and $[2, \\infty)$!)',
      'Root value invariance + time/space complexity under move ordering: worst $O(b^m)$, ideal $O(b^{m/2})$ (doubles depth!), DFS space $O(bm)$',
    ],
    whatIsNotImportant: [
      'Transposition tables, Zobrist hashing, Iterative Deepening MTD(f), or NegaScout implementation details',
      'Continuous-action Nash equilibria or multi-agent general-sum normal-form game theory',
    ],
    inboundStream: 'Module 10 Ch.1 DFS post-order tree traversal and recursion stack.',
    outboundStream: [
      'Module 11 Propositional & First-Order Logic (remaining Sec 7 AI pillar)',
      'Reinforcement Learning & MCTS / Tree Search concepts in ML',
    ],
    glossary: [
      {
        term: 'Zero-Sum Game',
        plainEnglish:
          'A strictly competitive two-player game where every point one player gains is a point the opponent loses—so MAX trying to raise the score and MIN trying to lower it are exact opposites.',
        tinyExample: 'Chess, Tic-Tac-Toe, and Checkers are zero-sum: a $+1$ win for MAX is a $-1$ loss for MIN.',
      },
      {
        term: 'Game Tree & Ply',
        symbol: '$b, m$',
        plainEnglish:
          'A branching tree of all possible move sequences from the starting board, where $b$ is the branching factor (moves per turn) and each single turn by one player is one ply (total depth $m$ plies).',
        tinyExample: 'MAX moves, then MIN replies, then the game ends: that is a $2$-ply tree.',
      },
      {
        term: 'MAX & MIN Players',
        plainEnglish:
          'The two alternating roles in adversarial search: MAX always picks the branch with the largest backed-up score, while MIN always picks the branch with the smallest backed-up score.',
        tinyExample: 'Facing children with values $[6, 2, 9]$, MIN picks $2$; facing $[2, 4, 3]$, MAX picks $4$.',
      },
      {
        term: 'Terminal Utility',
        symbol: '$\\text{Utility}(s)$',
        plainEnglish:
          'The numeric payoff written on a leaf (finished game state), always measured from MAX’s point of view—higher numbers favor MAX and lower numbers favor MIN.',
        tinyExample: 'Leaf values $[6, 2, 9]$ are terminal utilities evaluated once play reaches the bottom of the tree.',
      },
      {
        term: 'Minimax Value',
        symbol: '$\\text{Minimax}(s)$',
        plainEnglish:
          'The guaranteed best score MAX can secure from state $s$ assuming MIN replies optimally at every turn, computed bottom-up via post-order DFS.',
        tinyExample: 'For MAX above MIN branches $[6,2,9], [5,8,4], [3,7,3]$, the Minimax value is $\\max(2, 4, 3) = 4$.',
      },
      {
        term: 'Optimal Root Action',
        symbol: '$\\arg\\max_a$',
        plainEnglish:
          'The actual move index or label (such as Action `1`, `2`, or `3`) that achieves the root’s Minimax value—always check whether a GATE question wants this move label instead of the score!',
        tinyExample: 'When Action `2` gives guaranteed score $4$ (the highest of $2, 4, 3$), the optimal root action is `2`.',
      },
      {
        term: 'Alpha Bound',
        symbol: '$\\alpha$',
        plainEnglish:
          'The highest-value (best) score MAX has already guaranteed along the current root-to-node path; starts at $-\\infty$ and is updated ONLY at MAX nodes as $\\alpha \\leftarrow \\max(\\alpha, v)$.',
        tinyExample: 'Once MAX finishes a left branch worth $2$, MAX carries $\\alpha = 2$ into the next branch.',
      },
      {
        term: 'Beta Bound',
        symbol: '$\\beta$',
        plainEnglish:
          'The lowest-value (best) score MIN has already guaranteed along the current root-to-node path; starts at $+\\infty$ and is updated ONLY at MIN nodes as $\\beta \\leftarrow \\min(\\beta, v)$.',
        tinyExample: 'Once MIN finishes a left branch worth $5$, MIN carries $\\beta = 5$ into the next branch.',
      },
      {
        term: 'Alpha-Beta Pruning (Cutoff)',
        symbol: '$\\alpha \\ge \\beta$',
        plainEnglish:
          'Stopping early and skipping all remaining sibling branches the instant a MIN node drops to $v \\le \\alpha$ or a MAX node rises to $v \\ge \\beta$—never changing the final root Minimax value.',
        tinyExample: 'If MAX already has $\\alpha = 2$ and a MIN child sees first leaf $x \\le 2$, MIN immediately skips the rest of its leaves.',
      },
      {
        term: 'Move Ordering & Effective Branching Factor',
        symbol: '$O(b^{m/2}),\\; \\sqrt{b}$',
        plainEnglish:
          'The order in which children are explored left-to-right: checking the strongest moves first shrinks effective branching from $b$ to $\\sqrt{b}$, letting Alpha-Beta look twice as deep in the same time.',
        tinyExample: 'With $b = 16$, ideal move ordering cuts branching to $\\sqrt{16} = 4$, reaching depth $10$ in the time plain Minimax spends on depth $5$.',
      },
    ],
    generatorId: 'alphabeta-bound-gen',
    concepts: [
      {
        id: 'm10-c3-1',
        title: 'Zero-Sum Game Trees & Exact Minimax Values',
        subtitle: 'Assuming an optimal opponent who minimizes whatever score you try to maximize',
        priority: 'core-pillar',
        buildsOn: 'Post-order DFS on trees',
        whyStudy:
          'In single-agent search ($A^*$), the environment never fights back against your plan. In competitive two-player games like Chess, Tic-Tac-Toe, and Checkers, an intelligent **adversary** actively tries to ruin your best move at every turn! **Minimax** models this exact strategic tug-of-war by assuming your opponent (MIN) always chooses the reply that hurts you (MAX) the most — letting you select the opening move with the highest guaranteed floor. Mastering bottom-up Minimax backups (and checking whether an exam asks for the **root score** or the **optimal root action**, as in **GATE DA 2026 Q.30**) is the bedrock of adversarial AI search.',
        groundRules: [
          '**Zero-Sum Means MAX’s Gain Is MIN’s Exact Loss:** Every leaf utility is measured from MAX’s perspective; MAX always maximizes the score while MIN always minimizes that exact same number.',
          '**Minimax Evaluates Bottom-Up via Post-Order DFS:** Terminal leaves return `Utility(s)`; every MAX internal node returns the `max` of its children’s Minimax values; every MIN internal node returns the `min` of its children’s Minimax values.',
          '**DFS Execution Keeps Memory Linear $O(bm)$ Despite Exponential $O(b^m)$ Time:** Because Minimax walks one root-to-leaf path at a time and pops frames on return, it never holds the full $b^m$ tree in RAM!',
          '**Always Separate Root Value ($\\max$) From Optimal Root Action ($\\arg\\max$):** The backed-up score at the root is the guaranteed **Minimax value**; the move index (`1`, `2`, `3`) that attains it is the **optimal root action** — check which one the prompt asks for!',
        ],
        toyExample: {
          title: 'Choosing Between 3 Doors When an Opponent Picks the Trap Inside',
          scenario:
            'MAX stands at the root with $3$ doors (`1`, `2`, `3`). After MAX picks a door, MIN chooses among $3$ outcomes inside that door: Door `1`: $[6, 2, 9]$; Door `2`: $[5, 8, 4]$; Door `3`: $[3, 7, 3]$.',
          walkthroughSteps: [
            '1. If MAX enters Door `1`, MIN picks the worst leaf: $\\min(6, 2, 9) = 2$.',
            '2. If MAX enters Door `2`, MIN picks $\\min(5, 8, 4) = 4$.',
            '3. If MAX enters Door `3`, MIN picks $\\min(3, 7, 3) = 3$.',
            '4. MAX chooses the door with the highest guaranteed floor: $\\max(2, 4, 3) = 4$, which corresponds to **Action `2`**!',
          ],
          ahaMoment:
            'Minimax simply bubbles scores up from the leaves using post-order DFS: every MAX layer picks the largest child, and every MIN layer picks the smallest. And pause for one second before typing your answer—GATE DA 2026 Q.30 asked for the **optimal root action** (`2`), NOT the backed-up score (`4`)!',
        },
        theoremAndFormula: {
          statement:
            'For a deterministic, two-player, turn-taking, zero-sum game of branching factor $b$ and depth $m$, **Minimax** computes the optimal backed-up utility in $O(b^m)$ time and $O(bm)$ stack space via recursive DFS.',
          formulaLatex:
            '\\text{Minimax}(s) = \\begin{cases} \\text{Utility}(s) & s \\text{ terminal} \\\\ \\max_{a} \\text{Minimax}(\\text{Result}(s,a)) & \\text{Player}(s) = \\text{MAX} \\\\ \\min_{a} \\text{Minimax}(\\text{Result}(s,a)) & \\text{Player}(s) = \\text{MIN} \\end{cases}',
          plainEnglishDecoding:
            'Here is why Minimax is surprisingly gentle on memory: because it explores one root-to-leaf path at a time via DFS, it never stores the entire $b^m$ tree in RAM—its space stays linear in depth, just $O(bm)$.',
          workedMiniExamples: [
            {
              prompt:
                'Compute the root Minimax value of a 3-ply binary tree (MAX $\\to$ MIN $\\to$ MAX) with leaves $[4, 7, 2, 5, 9, 1, 6, 3]$.',
              solution:
                'Ply 2 (MAX): $[7, 5, 9, 6]$. Ply 1 (MIN): $[\\min(7,5),\\; \\min(9,6)] = [5, 6]$. Root (MAX): $\\max(5, 6) = 6$.',
            },
            {
              prompt:
                'Why is Minimax optimal against a rational opponent, and what happens against a suboptimal opponent?',
              solution:
                'Against an optimal opponent, no strategy achieves a higher guaranteed score than Minimax. Against a weak opponent who makes mistakes, a Minimax agent still guarantees at least the Minimax value (and may score even higher).',
            },
          ],
        },
        sandboxId: 'minimax-alphabeta-lab',
        msqTraps: [
          {
            myth: 'Minimax requires $O(b^m)$ memory to explore a depth-$m$ game tree.',
            reality: 'Minimax executes as a depth-first search, holding only one active path of length $m$ ($O(bm)$ space).',
            counterExample: 'A depth-$10$ binary tree ($1024$ leaves) needs only $\\sim 20$ stack entries in memory at any instant.',
          },
          {
            myth: 'The answer to a Minimax root question is always the root’s utility number.',
            reality: 'GATE frequently asks for the **optimal action/move index** (`1`, `2`, or `3`) rather than the backed-up value!',
            counterExample: 'GATE DA 2026 Q.30 required outputting action `2`, not the leaf utility value inside branch `2`.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6 & 7 · RL & Planning',
            targetWeek: 8,
            topic: 'Expectiminimax, MCTS & Zero-Sum Equilibrium',
            whyItMatters:
              'Adding dice/chance nodes turns Minimax into Expectiminimax; replacing exhaustive search with bandit rollouts + heuristic value networks gives Monte Carlo Tree Search (AlphaZero).',
            pyqProof: 'GATE DA 2026 · Q.30 (2-ply Minimax action)',
          },
        ],
      },
      {
        id: 'm10-c3-2',
        title: 'Alpha-Beta $(\\alpha\\text{-}\\beta)$ Pruning Mechanics: Ownership & Inclusive Cutoffs',
        subtitle: 'Pruning provably irrelevant branches the moment $\\alpha \\ge \\beta$—without ever changing the root decision',
        priority: 'core-pillar',
        buildsOn: 'DFS Minimax evaluation and interval bounds',
        whyStudy:
          'Even in a game like Chess (branching factor $b \\approx 35$), looking just 6 half-moves ahead produces $35^6 \\approx 1.8$ billion positions — plain Minimax simply runs out of time! **Alpha-Beta pruning** solves this with zero loss of exactness: the moment a branch proves it cannot beat a deal already secured higher up the tree, we skip all of its remaining siblings instantly. Knowing exact $\\alpha / \\beta$ ownership (**GATE DA 2024 Q.25**) and inclusive cutoff brackets (`<=` and `>=`, **GATE DA 2025 Q.43**) turns Alpha-Beta questions into effortless 2-mark victories.',
        groundRules: [
          '**Strict Ownership — MAX Updates Only $\\alpha$; MIN Updates Only $\\beta$:** Along the current root-to-node path, $\\alpha$ (starts at $-\\infty$) tracks the **highest-value** score MAX has guaranteed so far (`alpha = max(alpha, v)`), while $\\beta$ (starts at $+\\infty$) tracks the **lowest-value** score MIN has guaranteed so far (`beta = min(beta, v)`).',
          '**Bounds Pass Down By Value; Only Scalar $v$ Returns Up:** A parent passes its current $(\\alpha, \\beta)$ down into each child call. A child never mutates a cousin’s or sibling’s bounds — it returns only its backed-up scalar $v$, and the parent updates its own $\\alpha$ or $\\beta$.',
          '**Cutoffs Trigger Immediately When $\\alpha \\ge \\beta$ (Inclusive Equality!):** At a **MIN** node, prune remaining children the instant $v \\le \\alpha$ (closed interval $(-\\infty, \\alpha]$); at a **MAX** node, prune remaining children the instant $v \\ge \\beta$ (closed interval $[\\beta, \\infty)$). Equality prunes too because the parent above cannot strictly improve!',
          '**Alpha-Beta Pruning NEVER Alters the Root Minimax Value:** Every skipped branch is mathematically guaranteed not to change optimal play — pruning speeds up search without ever altering the answer.',
        ],
        toyExample: {
          title: 'Walking Away from a Bad Deal Mid-Inspection',
          scenario:
            'Look at the exact cutoff lines in Python’s Alpha-Beta recursion:\n```python\ndef max_value(state, alpha, beta):\n    if is_terminal(state):\n        return utility(state)\n    v = float("-inf")\n    for child in children(state):\n        v = max(v, min_value(child, alpha, beta))\n        if v >= beta:               # inclusive >= cutoff!\n            return v                # prune remaining children\n        alpha = max(alpha, v)\n    return v\n\ndef min_value(state, alpha, beta):\n    if is_terminal(state):\n        return utility(state)\n    v = float("inf")\n    for child in children(state):\n        v = min(v, max_value(child, alpha, beta))\n        if v <= alpha:              # inclusive <= cutoff!\n            return v                # prune remaining children\n        beta = min(beta, v)\n    return v\n```\nNow trace MAX inspecting two MIN branches left-to-right: Branch 1 has leaves $[2, 5]$ (returning $2$, setting $\\alpha = 2$), and Branch 2 has leaves $[x, 9]$.',
          walkthroughSteps: [
            '1. Branch 2 (MIN) reads its first leaf $x$. So MIN’s final value on Branch 2 can be **at most** $x$ ($v \\le x$).',
            '2. Suppose $x = 1$: then Branch 2 will return $\\le 1 < \\alpha = 2$. MAX would NEVER abandon guaranteed $2$ for $\\le 1$! So reading $9$ is useless—**prune $9$!**',
            '3. What if $x = 2$ exactly? Branch 2 returns $\\le 2 = \\alpha$. Even if $9$ gave $2$, MAX already has $2$ from Branch 1 and cannot strictly improve! Under standard Russell & Norvig pruning (`if v <= alpha: return v`), **equality $x = 2$ ALSO prunes $9$**!',
            '4. Hence leaf $9$ is pruned for every $x \\in (-\\infty, 2]$ (closed bracket at $2$!).',
          ],
          ahaMoment:
            'Picture $(\\alpha, \\beta)$ as a two-sided bargain traveling down the recursion stack: $\\alpha$ is MAX’s guaranteed floor along the path (highest choice so far), and $\\beta$ is MIN’s guaranteed ceiling (lowest choice so far). The instant $\\alpha \\ge \\beta$, the parent above already has a deal at least this good and will never pick this subtree!',
        },
        theoremAndFormula: {
          statement:
            'In standard **Alpha-Beta pruning** (left-to-right DFS), each node maintains path bounds $\\alpha$ (initialized to $-\\infty$, updated as $\\max(\\alpha, v)$ only at MAX nodes) and $\\beta$ (initialized to $+\\infty$, updated as $\\min(\\beta, v)$ only at MIN nodes). Remaining siblings are pruned immediately when:',
          formulaLatex:
            '\\text{At MAX node: prune if } v \\ge \\beta \\qquad\\qquad \\text{At MIN node: prune if } v \\le \\alpha',
          plainEnglishDecoding:
            'Pay close attention to the equals sign in both cutoff tests ($\\ge$ and $\\le$)—that is why GATE DA 2025 Q.43 used closed brackets $(-\\infty, 2]$ and $[2, \\infty)$. Best of all, **Alpha-Beta pruning never changes the final Minimax value at the root**; it only skips branches that provably cannot affect that answer.',
          workedMiniExamples: [
            {
              prompt:
                'Root is MIN with two MAX children: Left MAX has $[2, 1]$, Right MAX has $[y, 0]$. For which values of $y$ is leaf $0$ pruned?',
              solution:
                'Left MAX returns $\\max(2,1) = 2$, so Root MIN sets $\\beta = 2$. Right MAX sees $y$ first, so its value $v \\ge y$. At a MAX node, pruning triggers when $v \\ge \\beta = 2$, i.e., $y \\in [2, \\infty)$.',
            },
            {
              prompt:
                'In a depth-3 MAX-MIN-MAX binary tree with leaves $[3, 5, 6, 9, 4, 1, 7, 8]$ read left-to-right, which leaves are pruned?',
              solution:
                'Left-Left MAX returns $\\max(3,5)=5 \\implies$ Left MIN sets $\\beta=5$. Left-Right MAX sees $6 \\ge \\beta=5 \\implies$ **prunes $9$**. Left MIN returns $5 \\implies$ Root MAX sets $\\alpha=5$. Right-Left MAX returns $\\max(4,1)=4 \\implies$ Right MIN sees $v=4 \\le \\alpha=5 \\implies$ **prunes $7$ and $8$**! Total $3$ leaves pruned.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Alpha-Beta pruning uses strict inequality ($v < \\alpha$ or $v > \\beta$), leaving open intervals like $(-\\infty, 2)$.',
            reality: 'Standard textbook (Russell & Norvig) and GATE DA 2025 Q.43 prune at equality too: $v \\le \\alpha$ and $v \\ge \\beta$, giving closed brackets $(-\\infty, 2]$ and $[2, \\infty)$.',
            counterExample: 'If MAX already guarantees $2$, a MIN branch capped at $\\le 2$ can never beat $2$, so pruning at $v=2$ is completely sound.',
          },
          {
            myth: 'Updating $\\alpha$ inside a child MIN node permanently modifies $\\alpha$ for sibling branches elsewhere in the tree.',
            reality: '($\\alpha, \\beta$) are passed down *by value* along the current root-to-node path: a MIN node only updates its own $\\beta$, and a MAX node only updates its own $\\alpha$.',
            counterExample: 'A sibling subtree higher up receives the parent’s $(\\alpha, \\beta)$, unaffected by deeper cousin bounds.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 · AI & Optimization',
            targetWeek: 5,
            topic: 'Branch-and-Bound & Exact Tree Pruning',
            whyItMatters:
              'Alpha-Beta pruning is the adversarial twin of Branch-and-Bound: maintaining best incumbent lower/upper bounds $(\\alpha, \\beta)$ to discard unpromising subtrees with mathematical certainty.',
            pyqProof: 'GATE DA 2024 · Q.25 & GATE DA 2025 · Q.43',
          },
        ],
      },
      {
        id: 'm10-c3-3',
        title: 'Move Ordering, Effective Branching Factor & Depth Doubling',
        subtitle: 'Why inspecting the best move first slashes $O(b^m)$ down to $O(b^{m/2})$',
        priority: 'high-yield',
        buildsOn: 'Alpha-Beta pruning cutoffs',
        whyStudy:
          'Run Alpha-Beta pruning on the exact same game tree twice — once checking strong moves first, and once checking weak moves first — and you get two totally different speeds: one skips most of the tree, while the other prunes **zero** leaves! Understanding how **move ordering** shrinks the effective branching factor from $b$ down to $\\sqrt{b}$ (allowing an AI to look **twice as deep** within the same CPU budget) explains both classic GATE DA complexity MSQs and why modern game engines train neural policy networks to sort moves before searching.',
        groundRules: [
          '**Child Ordering Controls Pruning Efficiency — NEVER the Final Minimax Value:** Because $\\max$ and $\\min$ are commutative, reordering siblings left-to-right never changes the backed-up root score — only how early tight $(\\alpha, \\beta)$ bounds lock in!',
          '**Worst-Case Move Ordering Produces Zero Pruning ($O(b^m)$):** If MAX tries its weakest branches first and MIN replies with its weakest responses first, $\\alpha \\ge \\beta$ never triggers and Alpha-Beta evaluates every single leaf like plain Minimax.',
          '**Ideal Move Ordering Cuts Effective Branching From $b$ to $\\sqrt{b}$ ($O(b^{m/2})$):** Inspecting each player’s strongest move first locks in optimal bounds immediately, reducing leaf evaluations to $O((\\sqrt{b})^m) = O(b^{m/2})$ — **doubling** searchable depth from $m$ to $2m$ for the exact same time budget!',
          '**Auxiliary Space Always Stays Linear $O(bm)$:** Regardless of move ordering, Alpha-Beta runs via depth-first recursion and never stores pruned subtrees in memory, keeping space complexity at $O(bm)$.',
        ],
        toyExample: {
          title: 'Two Identical Trees, Opposite Leaf Order',
          scenario:
            'Picture a 2-ply tree with Root MAX above two MIN children. In **Tree A**, Left MIN has $[10, 8]$ (returning $8$, so $\\alpha = 8$) and Right MIN has $[2, 99]$—Right reads $2 \\le 8$ and immediately **prunes $99$**! Now build **Tree B** by merely swapping Right MIN’s leaves to $[99, 2]$: Right reads $99 > 8$ and must also inspect $2$, giving **zero pruning**!',
          walkthroughSteps: [
            '1. Both trees have the exact same game outcomes and root value ($8$), yet `[10, 8 | 2, 99]` prunes $99$ while `[10, 8 | 99, 2]` visits every single leaf!',
            '2. **Best-First Move Ordering:** If MAX tries its strongest move first and MIN replies with its strongest counter-move first, tight $(\\alpha, \\beta)$ bounds lock in immediately and prune almost every other branch.',
            '3. **The Square-Root Miracle:** Optimal move ordering cuts the effective branching factor from $b$ down to $\\sqrt{b}$.',
          ],
          ahaMoment:
            'Watch what happens to the exponent when branching shrinks from $b$ to $\\sqrt{b}$: $O(b^m)$ drops all the way to $O((\\sqrt{b})^m) = O(b^{m/2})$! That means for the exact same time budget, well-ordered Alpha-Beta can see **twice as many plies deep** as plain Minimax.',
        },
        theoremAndFormula: {
          statement:
            'With branching factor $b$ and depth $m$, Alpha-Beta pruning keeps space at $O(bm)$ while leaf evaluations depend critically on move ordering:',
          formulaLatex:
            '\\text{Worst Ordering: } O(b^m) \\qquad \\text{Random Ordering: } O(b^{3m/4}) \\qquad \\text{Ideal Ordering: } O(b^{m/2})',
          plainEnglishDecoding:
            'Think of move ordering as the fuel behind Alpha-Beta’s speed: with ideal ordering, effective branching drops to $b^{1/2}$ so you can search $2m$ plies for the price of $m$. With the worst ordering (checking the weakest moves first), cutoffs never fire and you fall back to plain Minimax’s $O(b^m)$.',
          workedMiniExamples: [
            {
              prompt:
                'A game has branching factor $b = 16$. Within a fixed CPU budget, plain Minimax searches to depth $m = 5$. Roughly what depth can ideal-ordered Alpha-Beta reach?',
              solution:
                'Effective branching drops from $b = 16$ to $\\sqrt{16} = 4$. Since $4^{10} = 16^5$, ideal Alpha-Beta searches to depth $2m = 10$.',
            },
            {
              prompt:
                'What is the exact minimum number of leaves visited by Alpha-Beta in a uniform depth-$2$ (MAX-MIN) tree of branching factor $b = 3$ under ideal ordering?',
              solution:
                'Left MIN evaluates all $3$ leaves (establishing $\\alpha$). Each of the remaining $2$ MIN siblings needs only $1$ bad leaf ($\\le \\alpha$) to prune its other $2$ leaves! Minimum $= 3 + 1 + 1 = 5$ leaves (out of $9$). Formula: $b + (b-1)\\cdot 1 = 2b - 1$.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Alpha-Beta pruning is guaranteed to run in $O(b^{m/2})$ time on every game tree.',
            reality: '$O(b^{m/2})$ requires *ideal* move ordering; worst-case ordering still visits all $O(b^m)$ leaves.',
            counterExample: 'Root MAX explores weakest branches first (increasing values), never tightening $\\alpha$ enough to prune later siblings.',
          },
          {
            myth: 'Reordering children changes the final Minimax value returned by Alpha-Beta.',
            reality: 'Child order affects *how many nodes are pruned* (speed), NEVER the final root Minimax value!',
            counterExample: 'Any permutation of children at MAX/MIN preserves $\\max$ and $\\min$ by commutativity.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 7 · AI & ML Search',
            targetWeek: 8,
            topic: 'Policy Networks Guiding Tree Search',
            whyItMatters:
              'Because ideal move ordering unlocks $O(b^{m/2})$ depth, modern game AI trains a neural policy prior $P(a\\mid s)$ specifically to sort strong moves first during tree search.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm10-c3-ht1',
        title: 'Solving Leaf-Parameter Intervals $(x, y)$ for Alpha-Beta Cutoffs',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.43'],
        problemStatement:
          'You are given a game tree containing unknown leaf values $x$ and $y$ and asked for the exact intervals of $x$ and $y$ where Alpha-Beta pruning skips the remaining sibling(s).',
        triggerCue:
          'Unknown symbols $x, y$ sit as the *first* child of a MIN or MAX node, and MCQ options differ only by open `(` vs. closed `[` brackets!',
        bruteForceTrap:
          'Guessing open intervals `(−∞, 2)` because “equal values might not improve,” or forgetting which node owns $\\alpha$ vs. $\\beta$.',
        mentalShift:
          'Translate the parent’s bound into one single inequality: **MIN parent sets $\\alpha$ from the left** (so right MIN child prunes on $v \\le \\alpha$); **MAX parent sets $\\beta$ from the left** (so right MAX child prunes on $v \\ge \\beta$). Always include equality!',
        steps: [
          {
            label: 'Step 1: Compute the left sibling’s exact bound',
            detail:
              'In a MAX-root tree with left MIN leaves $[2, 5]$, left returns $2$, setting $\\alpha = 2$ at the root.',
          },
          {
            label: 'Step 2: Write the inequality for the node containing x',
            detail:
              'Right MIN reads $x$ first, bounding its own value $v \\le x$. Cutoff happens iff $x \\le \\alpha = 2 \\implies x \\in (-\\infty, 2]$.',
          },
          {
            label: 'Step 3: Flip cleanly for a MIN-root tree with y',
            detail:
              'If Root is MIN with left MAX $[2, 1]$ ($\\beta = 2$) and right MAX $[y, 0]$, right MAX bounds $v \\ge y$ and prunes iff $y \\ge \\beta = 2 \\implies y \\in [2, \\infty)$.',
          },
        ],
        lockInTakeaway:
          'In GATE DA Alpha-Beta interval questions, standard non-strict cutoffs ($v \\le \\alpha$ and $v \\ge \\beta$) always give **closed** endpoint brackets (`]` / `[`)!',
      },
      {
        id: 'm10-c3-ht2',
        title: 'Tracking Local $(\\alpha, \\beta)$ Pairs Down a Depth-3+ DFS Stack',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.25', 'GATE DA 2025 · Q.43'],
        problemStatement:
          'Evaluate a depth-3 or depth-4 game tree left-to-right and count the exact number of pruned leaves without mixing up $(\\alpha, \\beta)$ across siblings.',
        triggerCue:
          'A multi-ply game tree with $8$ to $16$ leaves asks “How many leaf nodes are pruned?” or “Which leaves are NOT evaluated?”',
        bruteForceTrap:
          'Using a single global $\\alpha$ and single global $\\beta$ on scratch paper—accidentally leaking a left-subtree $\\beta$ into a right-subtree branch!',
        mentalShift:
          'Write $(\\alpha, \\beta)$ **inside each node box** as you enter it! A parent passes $(\\alpha, \\beta)$ down; a child returns ONLY a single scalar $v$ back up—never its own modified $(\\alpha, \\beta)$!',
        steps: [
          {
            label: 'Step 1: Pass (α, β) down, return only v up',
            detail:
              'Start Root at $(-\\infty, +\\infty)$. When a child finishes, it hands back a single number $v$, and ONLY the parent updates its own $\\alpha$ (if MAX) or $\\beta$ (if MIN).',
          },
          {
            label: 'Step 2: Test cutoff immediately after EVERY leaf/child return',
            detail:
              'Whenever $\\alpha \\ge \\beta$ inside ANY node, cross out all remaining unvisited right siblings of that node immediately.',
          },
          {
            label: 'Step 3: Tally crossed-out leaves',
            detail:
              'Count every leaf inside the crossed-out subtrees—never subtract leaves that were already evaluated before the cutoff!',
          },
        ],
        lockInTakeaway:
          'Bounds flow **down** on the stack; scalar values flow **up**. Never let a child’s local $\\beta$ leak sideways to a cousin!',
      },
    ],
    arsenalCards: [
      {
        id: 'm10-c3-ar1',
        badge: 'α vs. β Ownership Rule',
        whenYouSpot: 'Conceptual fill-in-the-blank or bound update in Alpha-Beta pruning',
        directWeaponLatex:
          '\\alpha = \\max\\text{ choice so far for MAX}, \\qquad \\beta = \\min\\text{ choice so far for MIN}',
        instantRule:
          'MAX nodes update ONLY $\\alpha = \\max(\\alpha, v)$; MIN nodes update ONLY $\\beta = \\min(\\beta, v)$. Bounds pass down by value; scalar $v$ returns up.',
        tenSecondExample:
          'GATE DA 2024 Q.25 verbatim: $\\alpha =$ highest-value choice for MAX; $\\beta =$ lowest-value choice for MIN.',
        oneFatalTrap:
          'Updating $\\alpha$ at a MIN node or letting a child’s updated bound leak sideways into a sibling branch.',
      },
      {
        id: 'm10-c3-ar2',
        badge: 'Inclusive Cutoff Trigger (α ≥ β)',
        whenYouSpot: 'Leaf parameter interval $(x, y)$ or pruned-leaf count in left-to-right Alpha-Beta',
        directWeaponLatex:
          '\\text{MIN prunes if } v \\le \\alpha \\quad (\\text{e.g. } (-\\infty, 2]); \\qquad \\text{MAX prunes if } v \\ge \\beta \\quad (\\text{e.g. } [2, \\infty))',
        instantRule:
          'Standard Alpha-Beta prunes at equality ($\\le$ and $\\ge$), NEVER changes the root Minimax value, and crosses out only unvisited right siblings.',
        tenSecondExample:
          'Root MAX has $\\alpha=2$; next MIN reads $x=2$: $2 \\le 2 \\implies$ remaining leaves in that MIN node are pruned.',
        oneFatalTrap:
          'Picking open intervals $(-\\infty, 2)$ instead of closed $(-\\infty, 2]$ when equality triggers pruning!',
      },
      {
        id: 'm10-c3-ar3',
        badge: 'Alpha-Beta Ordering & Depth Doubling',
        whenYouSpot: 'Time/space complexity or searchable depth under Alpha-Beta move ordering',
        directWeaponLatex:
          'T_{\\text{worst}} = O(b^m), \\quad T_{\\text{ideal}} = O(b^{m/2}), \\quad S = O(bm)',
        instantRule:
          'Worst ordering does zero pruning ($O(b^m)$); ideal ordering cuts branching $b \\to \\sqrt{b}$ and **doubles** search depth; DFS keeps space linear $O(bm)$.',
        tenSecondExample:
          'If $b=9$ and Minimax searches depth $4$, ideal Alpha-Beta ($\\sqrt{9}=3$) reaches depth $8$ in the same time.',
        oneFatalTrap:
          'Assuming Alpha-Beta always hits $O(b^{m/2})$ regardless of move order, or thinking space grows as $O(b^{m/2})$.',
      },
    ],
    questions: [
      {
        id: 'm10-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 · 3-Ply Minimax Evaluation',
        marks: 1,
        type: 'NAT',
        stem: 'Consider a $3$-ply deterministic game tree where the root is MAX, ply $1$ consists of MIN nodes, and ply $2$ consists of MAX nodes above $8$ terminal leaves (from left to right): $[4, 7, 2, 5, 9, 1, 6, 3]$. What is the Minimax value of the root?',
        natAnswer: { min: 6, max: 6, exactDisplay: '6' },
        triggerHint: 'Compute bottom-up in three layers: $\\max$ of pairs $\\to$ $\\min$ of pairs $\\to$ $\\max$ at root.',
        intuitiveSolution: [
          '1. Ply 2 (MAX): $\\max(4,7)=7$, $\\max(2,5)=5$, $\\max(9,1)=9$, $\\max(6,3)=6$.',
          '2. Ply 1 (MIN): $\\min(7,5)=5$ and $\\min(9,6)=6$.',
          '3. Root (MAX): $\\max(5,6)=6$.',
        ],
        directShortcutUsed: 'Bottom-up MAX $\\to$ MIN $\\to$ MAX pairing.',
      },
      {
        id: 'm10-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.25',
        year: 2024,
        marks: 1,
        type: 'MCQ',
        stem: 'In the Alpha-Beta pruning algorithm for adversarial game trees:\n- $\\alpha$ is the value of the ______ choice found so far at any choice point along the path for MAX.\n- $\\beta$ is the value of the ______ choice found so far at any choice point along the path for MIN.\nWhich option fills the two blanks respectively?',
        options: [
          {
            id: 'A',
            text: 'lowest-value; highest-value',
            whyTrueOrFalse: 'False—reversed! MAX wants high values ($\\alpha$ floor) and MIN wants low values ($\\beta$ ceiling).',
          },
          {
            id: 'B',
            text: 'highest-value; lowest-value',
            whyTrueOrFalse: 'True! $\\alpha$ tracks MAX’s best (highest) guaranteed score, while $\\beta$ tracks MIN’s best (lowest) guaranteed score.',
          },
          {
            id: 'C',
            text: 'highest-value; highest-value',
            whyTrueOrFalse: 'False—MIN minimizes score, so MIN’s best choice is the *lowest* value.',
          },
          {
            id: 'D',
            text: 'average-value; lowest-value',
            whyTrueOrFalse: 'False—Minimax/Alpha-Beta never averages outcomes (that would be Expectiminimax).',
          },
        ],
        correctOptions: ['B'],
        triggerHint: 'MAX maximizes utility; MIN minimizes utility.',
        intuitiveSolution: [
          '1. MAX wants the largest possible score, so the best choice MAX has secured so far along the path is the **highest-value** choice ($\\alpha$).',
          '2. MIN wants the smallest possible score, so the best choice MIN has secured so far along the path is the **lowest-value** choice ($\\beta$).',
        ],
        directShortcutUsed: '$\\alpha =$ MAX’s best (highest); $\\beta =$ MIN’s best (lowest).',
      },
      {
        id: 'm10-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.30 (Modeled Tree)',
        year: 2026,
        marks: 1,
        type: 'NAT',
        stem: 'In a $2$-ply game tree, MAX at the root chooses among three actions: `1`, `2`, or `3`. After MAX’s move, MIN picks among three terminal scores: Action `1` leads to $[6, 2, 9]$, Action `2` leads to $[5, 8, 4]$, and Action `3` leads to $[3, 7, 3]$. Which optimal action (`1`, `2`, or `3`) should MAX choose at the root?',
        natAnswer: { min: 2, max: 2, exactDisplay: '2' },
        triggerHint: 'Compute MIN’s choice under each of the 3 actions, then output the **action number** (not the utility value!).',
        intuitiveSolution: [
          '1. Under Action `1`, MIN chooses $\\min(6, 2, 9) = 2$.',
          '2. Under Action `2`, MIN chooses $\\min(5, 8, 4) = 4$.',
          '3. Under Action `3`, MIN chooses $\\min(3, 7, 3) = 3$.',
          '4. MAX achieves the highest guaranteed score ($4$) by selecting Action `2`.',
        ],
        directShortcutUsed: '$\\arg\\max_a \\min_b U(a,b) = 2$ (output action index, not utility $4$).',
      },
      {
        id: 'm10-c3-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.43 (Modeled Tree)',
        year: 2025,
        marks: 2,
        type: 'MCQ',
        stem: 'Consider two $2$-ply game trees evaluated left-to-right using standard Alpha-Beta pruning (pruning whenever $v \\le \\alpha$ at MIN or $v \\ge \\beta$ at MAX):\n- **Tree 1:** Root is MAX with two MIN children; left MIN has leaves $[2, 5]$, right MIN has leaves $[x, 9]$.\n- **Tree 2:** Root is MIN with two MAX children; left MAX has leaves $[2, 1]$, right MAX has leaves $[y, 0]$.\nFor which intervals of $x$ and $y$ are leaf $9$ (in Tree 1) and leaf $0$ (in Tree 2) pruned?',
        options: [
          {
            id: 'A',
            text: '$x \\in (-\\infty, 2)$ and $y \\in (2, \\infty)$',
            whyTrueOrFalse: 'False—standard Alpha-Beta prunes at equality ($x=2$ and $y=2$) too!',
          },
          {
            id: 'B',
            text: '$x \\in (-\\infty, 2]$ and $y \\in (2, \\infty)$',
            whyTrueOrFalse: 'False—$y=2$ also triggers $v \\ge \\beta=2$ at the right MAX node in Tree 2.',
          },
          {
            id: 'C',
            text: '$x \\in (-\\infty, 2]$ and $y \\in [2, \\infty)$',
            whyTrueOrFalse:
              'True! In Tree 1, $\\alpha=2$ and MIN prunes when $x \\le 2$. In Tree 2, $\\beta=2$ and MAX prunes when $y \\ge 2$.',
          },
          {
            id: 'D',
            text: '$x \\in [2, \\infty)$ and $y \\in (-\\infty, 2]$',
            whyTrueOrFalse: 'False—both inequalities point in the wrong direction.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Left child sets $\\alpha=2$ in Tree 1 and $\\beta=2$ in Tree 2; remember equality triggers cutoff!',
        intuitiveSolution: [
          '1. **Tree 1:** Left MIN evaluates $\\min(2,5) = 2$, so Root MAX sets $\\alpha = 2$. Right MIN sees $x$, making its value $v \\le x$; it prunes $9$ iff $x \\le \\alpha = 2 \\implies x \\in (-\\infty, 2]$.',
          '2. **Tree 2:** Left MAX evaluates $\\max(2,1) = 2$, so Root MIN sets $\\beta = 2$. Right MAX sees $y$, making its value $v \\ge y$; it prunes $0$ iff $y \\ge \\beta = 2 \\implies y \\in [2, \\infty)$.',
        ],
        directShortcutUsed: 'Inclusive cutoff brackets: $x \\le \\alpha$ and $y \\ge \\beta$.',
      },
      {
        id: 'm10-c3-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Trap · Alpha-Beta Invariants & Complexity',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements about Minimax and Alpha-Beta pruning on a finite deterministic two-player zero-sum game tree of branching factor $b$ and depth $m$ is/are **ALWAYS** true?',
        options: [
          {
            id: 'A',
            text: 'Alpha-Beta pruning always returns the exact same backed-up root value as unpruned Minimax.',
            whyTrueOrFalse: 'True! Pruned subtrees are mathematically guaranteed not to change the root decision.',
          },
          {
            id: 'B',
            text: 'Under worst-case move ordering, Alpha-Beta pruning evaluates all $\\Theta(b^m)$ leaf nodes.',
            whyTrueOrFalse: 'True! If bounds never trigger $\\alpha \\ge \\beta$, zero pruning occurs.',
          },
          {
            id: 'C',
            text: 'Under ideal move ordering, Alpha-Beta pruning achieves $O(b^{m/2})$ time complexity while keeping space complexity $O(bm)$.',
            whyTrueOrFalse: 'True! Ideal ordering halves the exponent (effective branching $\\sqrt{b}$), and DFS keeps stack memory $O(bm)$.',
          },
          {
            id: 'D',
            text: 'Alpha-Beta pruning requires $O(b^{m/2})$ auxiliary memory to store pruned subtree bounds.',
            whyTrueOrFalse: 'False! Alpha-Beta runs via DFS and needs only $O(bm)$ stack memory.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Separate time complexity (depends on move order) from space complexity (always DFS $O(bm)$) and root-value invariance.',
        intuitiveSolution: [
          '1. A is true: Alpha-Beta is an exact optimization of Minimax.',
          '2. B & C are true: leaf visits range from $O(b^{m/2})$ (ideal order) to $O(b^m)$ (worst order), while DFS stack memory remains $O(bm)$.',
          '3. D is false because pruned subtrees are simply skipped, not stored in memory.',
        ],
        directShortcutUsed: 'Exact root value + $O(b^{m/2})$ ideal / $O(b^m)$ worst time + $O(bm)$ space.',
      },
      {
        id: 'm10-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Drill · Exact Pruned Leaf Count',
        marks: 2,
        type: 'NAT',
        stem: 'A $3$-ply binary game tree (Root = MAX, Ply 1 = MIN, Ply 2 = MAX) has $8$ leaves from left to right: $[3, 5, 6, 9, 4, 1, 7, 8]$. If standard Alpha-Beta pruning ($v \\le \\alpha$ at MIN, $v \\ge \\beta$ at MAX) is executed **left-to-right**, how many leaf nodes are **pruned** (never evaluated)?',
        natAnswer: { min: 3, max: 3, exactDisplay: '3' },
        triggerHint: 'Trace $(\\alpha, \\beta)$ carefully: check BOTH the second MAX node at ply 2 AND the right MIN node at ply 1!',
        intuitiveSolution: [
          '1. **Left-Left MAX:** evaluates $3$ and $5$, returning $5$ to Left MIN. Left MIN sets $\\beta = 5$.',
          '2. **Left-Right MAX** receives $(-\\infty, 5)$: evaluates $6$. Since $6 \\ge \\beta = 5$, it **prunes leaf $9$** ($1$ pruned) and returns $6$. Left MIN returns $\\min(5,6)=5$ to Root MAX.',
          '3. **Root MAX** sets $\\alpha = 5$ and calls **Right MIN** with $(5, +\\infty)$.',
          '4. **Right-Left MAX** receives $(5, +\\infty)$: evaluates $4$ and $1$, returning $4$ to Right MIN.',
          '5. **Right MIN** updates $v = 4 \\le \\alpha = 5$, so it immediately **prunes its entire right MAX child (leaves $7$ and $8$)** ($2$ more pruned). Total leaves pruned $= 1 + 2 = 3$.',
        ],
        directShortcutUsed: '$\\beta$-cutoff prunes $9$ ($6 \\ge 5$); $\\alpha$-cutoff prunes $7, 8$ ($4 \\le 5$).',
      },
    ],
  },
]
