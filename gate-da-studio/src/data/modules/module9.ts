import type { ChapterData } from '../../types/curriculum'

export const MODULE_9_CHAPTERS: ChapterData[] = [
  {
    id: 'pds2-ch1',
    number: 1,
    title: 'Binary Trees, Traversals, Unique Reconstruction & BST Operations',
    shortTitle: 'Binary Trees & BSTs',
    estimatedHours: 3.5,
    dayLabel: 'Week 4 · Day 1',
    tagline:
      'Let us build rooted binary trees from ground zero with complete visual clarity! Together we will derive the universal node–leaf–height inequalities that crush MSQs, see why Preorder + Postorder fails unless a tree is full, and watch how BST inorder traversal turns a tree straight into a sorted array.',
    syllabusMapping: [
      'Trees and Binary Trees: height, leaves, internal nodes, structural bounds',
      'Tree Traversals (Preorder, Inorder, Postorder, Level-order) & unique tree reconstruction',
      'Binary Search Trees (BST): invariant, search, insert, delete, predecessor/successor',
    ],
    whatIsImportant: [
      'Rooted binary tree universal inequalities: $L \\le I + 1$, $H + 1 \\le N \\le 2^{H+1} - 1$, and $H \\le I \\le 2^H - 1$ (GATE DA 2024 Q.52)',
      'Unique reconstruction rules: Pre+In and In+Post ALWAYS fix any binary tree; Pre+Post ONLY fixes a full/strict binary tree (GATE DA 2024 Q.28, GATE DA 2026 Q.25)',
      'Inorder traversal of a valid BST is strictly sorted ascending; BST delete with 2 children swaps with inorder successor or predecessor',
      'Recursive tree dictionary / adjacency-list code traces in Python (GATE DA 2024 Q.38)',
    ],
    whatIsNotImportant: [
      'AVL tree rotations (LL/RR/LR/RL) and Red-Black tree recoloring rules — 0 marks in GATE DA',
      'Splay trees, Treaps, Threaded binary trees, and Morris O(1)-space traversal',
      'Huffman coding trees and Fibonacci heaps — outside GATE DA PDSA syllabus',
    ],
    inboundStream:
      'Module 8 Python recursion, call stacks, and `dict`/list representations + basic graph vocabulary (root, parent, child, edge).',
    outboundStream: [
      'Module 10 Graph Traversals (BFS/DFS spanning trees & DAG topological order)',
      'Module 12 DBMS $B^+$ Trees (multi-way balanced search trees generalizing BSTs, GATE DA 2026 Q.32 & Q.41)',
      'Module 14 Decision Trees (ID3 splits, GATE DA 2024 Q.62) & $k$-d trees for $k$-NN spatial search',
    ],
    glossary: [
      {
        term: 'Rooted Binary Tree',
        symbol: '$N = I + L$',
        plainEnglish:
          'Think of a family tree starting from one top root where every node has at most two distinct slots — a **left** child and a **right** child — and every tree on $N$ nodes has exactly $N - 1$ edges.',
        tinyExample: 'A single root node has $N = 1$, $0$ edges, and height $H = 0$.',
      },
      {
        term: 'Height & Depth',
        symbol: '$H \\ge 0$',
        plainEnglish:
          'Depth counts the edges from the root down to a node, while the **height** $H$ of the tree is the number of edges along the single longest root-to-leaf path (so a lone root has $H = 0$).',
        tinyExample: 'A chain of $4$ nodes (`1 -> 2 -> 3 -> 4`) has height $H = 3$ edges.',
      },
      {
        term: 'Leaf vs. Internal Node',
        symbol: '$L = n_0,\\; I = n_1 + n_2$',
        plainEnglish:
          'A leaf sits at the bottom with $0$ children, while an internal node has at least $1$ child; in EVERY binary tree, edge counting guarantees $L = n_2 + 1 \\le I + 1$.',
        tinyExample: 'A skewed 4-node chain has $I = 3$ internal nodes and only $L = 1$ leaf.',
      },
      {
        term: 'Full (Strict) Binary Tree',
        symbol: '$n_1 = 0,\\; L = I + 1,\\; N = 2L - 1$',
        plainEnglish:
          'In GATE terminology, a full (or strict/proper) binary tree forbids 1-child nodes completely — every single node has either $0$ or $2$ children, locking $L = I + 1$ and $N = 2L - 1$.',
        tinyExample: 'A full binary tree with $17$ leaves automatically has $I = 16$ internal nodes and $N = 33$ total nodes.',
      },
      {
        term: 'Perfect vs. Skewed Binary Tree',
        symbol: '$N = 2^{H+1} - 1 \\text{ vs. } N = H + 1$',
        plainEnglish:
          'These are the two extreme shapes of height $H$: a **perfect** tree packs every single level completely full ($L = 2^H$), whereas a **skewed** chain stretches linearly with only $L = 1$ leaf.',
        tinyExample: 'At height $H = 3$, a skewed chain has $4$ nodes while a perfect tree has $15$ nodes.',
      },
      {
        term: 'Preorder Traversal',
        symbol: '$\\text{Root} \\to \\text{Left} \\to \\text{Right}$',
        plainEnglish:
          'Visit the root FIRST, then sweep the entire left subtree, then the right subtree — making Preorder your instant beacon for identifying the root of every subtree at index `0`.',
        tinyExample: 'For root `A` with left `B` and right `C`, Preorder prints `[A, B, C]`.',
      },
      {
        term: 'Inorder Traversal',
        symbol: '$\\text{Left} \\to \\text{Root} \\to \\text{Right}$',
        plainEnglish:
          'Visit the entire left subtree, then the root in the middle, then the right subtree — acting like a GPS anchor that separates left from right (and printing any BST in sorted ascending order!).',
        tinyExample: 'For root `15` with left `10` and right `20`, Inorder prints `[10, 15, 20]`.',
      },
      {
        term: 'Postorder & Level-Order Traversal',
        symbol: '$\\text{Left} \\to \\text{Right} \\to \\text{Root}$',
        plainEnglish:
          'Postorder visits both children before the root (putting the root at the very LAST position), while Level-Order sweeps the tree floor-by-floor from top to bottom using a FIFO Queue.',
        tinyExample: 'For root `A` with left `B` and right `C`, Postorder is `[B, C, A]` and Level-Order is `[A, B, C]`.',
      },
      {
        term: 'Unique Tree Reconstruction',
        symbol: '$\\text{Pre+In},\\; \\text{In+Post}$',
        plainEnglish:
          'With distinct keys, pairing Inorder with either Preorder or Postorder ALWAYS nails down one unique binary tree; Preorder + Postorder fails on general trees (1-child ambiguity) but succeeds on **full** binary trees.',
        tinyExample: 'Root `1` with left `2` and root `1` with right `2` share Pre `[1,2]` and Post `[2,1]`, until Inorder separates them.',
      },
      {
        term: 'Binary Search Tree (BST) Property',
        symbol: '$\\forall u \\in L(x),\\; u < x < v\\;(\\forall v \\in R(x))$',
        plainEnglish:
          'A global ordering rule — EVERY key anywhere inside a node’s left subtree must be strictly smaller than the node, and EVERY key anywhere inside its right subtree must be strictly larger, allowing $O(H)$ search.',
        tinyExample: 'Inserting sorted keys `1, 2, 3, ..., N` builds a height $N-1$ skewed BST where search degrades to $\\Theta(N)$.',
      },
      {
        term: 'Inorder Successor & Predecessor',
        symbol: '$\\min(\\text{right}),\\; \\max(\\text{left})$',
        plainEnglish:
          'When deleting a BST node that has two children, you cleanly swap its key with either the smallest key in its right subtree (**inorder successor**) or the largest key in its left subtree (**inorder predecessor**).',
        tinyExample: 'In a BST with `30` having right child `40` and `40`’s left child `35`, the inorder successor of `30` is `35`.',
      },
    ],
    generatorId: 'bsearch-depth-gen',
    concepts: [
      {
        id: 'm9-c1-1',
        title: 'Binary Tree Anatomy & Universal Structural Inequalities',
        subtitle: 'Deriving exact node, leaf, internal-node, and height bounds from a 5-node toy tree',
        priority: 'core-pillar',
        buildsOn: 'Module 8 recursion & parent-child pointer diagrams',
        whyStudy:
          'Hierarchical structures appear everywhere in Computer Science and Data Science — file directories, compiler expression trees, database $B^+$ trees, and Machine Learning decision trees (ID3 / CART). Before you can predict the worst-case search depth of a tree or the maximum number of leaf regions a depth-$H$ decision tree can carve out, you need the exact structural laws connecting total nodes ($N$), internal nodes ($I$), leaves ($L$), and height ($H$). Once you see the four simple edge-counting rules behind every rooted binary tree, proving or refuting universal GATE DA MSQ inequalities (like **GATE DA 2024 Q.52**) takes 20 seconds instead of guesswork.',
        groundRules: [
          '**Every $N$-Node Tree Has Exactly $N - 1$ Edges:** Every node except the single top root has exactly one parent edge entering it from above, so total edges ALWAYS equal $N - 1$. Counting edges downward from parents ($n_1 + 2n_2$) and equating to $N - 1$ immediately proves $L = n_2 + 1$!',
          '**Height $H$ Counts Edges Along the Longest Root-to-Leaf Path (Lone Root $\\implies H = 0$):** Under standard GATE / CLRS convention, a single-node tree sits at level $0$ with height $H = 0$ ($0$ edges). Level $d$ holds at most $2^d$ nodes, and no node at the deepest level $H$ can have any children (otherwise height would be $\\ge H + 1$).',
          '**Two Extreme Shapes Bracket Every Arbitrary Binary Tree of Height $H$:** The thinnest tree of height $H$ is a **skewed 1-leaf chain** ($N = H + 1, I = H, L = 1$); the widest tree is a **perfect binary tree** ($N = 2^{H+1} - 1, I = 2^H - 1, L = 2^H$). Any universal inequality MUST survive both extremes!',
          '**"Full (Strict)" Means Zero 1-Child Nodes ($n_1 = 0$) — NOT Necessarily All Levels Packed:** In GATE terminology, a **full binary tree** allows only $0$ or $2$ children per node (locking $L = I + 1$ and $N = 2L - 1$), whereas a tree with every single level completely packed is called **perfect**.',
        ],
        toyExample: {
          title: 'A 5-Node Family Hierarchy',
          scenario:
            'Draw a tiny binary tree with root `A`, left child `B`, right child `C`, and give `B` two children `D` and `E`. Here total nodes $N = 5$. Height $H$ (longest root-to-leaf edge count) is $2$ (`A -> B -> D`).',
          walkthroughSteps: [
            '1. **Count Leaves ($L$) vs. Internal Nodes ($I$):** Nodes with $0$ children are leaves (`D, E, C` $\\implies L = 3$). Nodes with $\\ge 1$ child are internal (`A, B` $\\implies I = 2$). Notice every internal node here happens to have $2$ children, and $L = 3 = I + 1$.',
            '2. **Count Edges Two Ways:** Any tree on $N$ nodes has $N - 1 = 4$ edges. Looking downward from parents: each 2-child node emits $2$ edges, each 1-child node emits $1$ edge, leaves emit $0$.',
            '3. **What if we drop `E`?** Now `B` has only $1$ child (`D`), so $N = 4$, $I = 2$ (`A, B`), $L = 2$ (`D, C`), and $L = 2 < I + 1 = 3$.',
            '4. **Check Height Limits:** With height $H = 2$, the thinnest tree is a 3-node chain ($N = H + 1 = 3$) and the fattest tree is a packed 3-level tree ($N = 1 + 2 + 4 = 2^{H+1} - 1 = 7$).',
          ],
          ahaMoment:
            'Here is why that inequality never breaks: every time a node branches into $2$ children, it adds $+1$ extra leaf compared to a straight chain, whereas a $1$-child node keeps the leaf count unchanged. That is why $L = n_2 + 1 \\le (n_1 + n_2) + 1 = I + 1$ ALWAYS holds, hitting exact equality if and only if $n_1 = 0$ (a full binary tree)!',
        },
        theoremAndFormula: {
          statement:
            'In any non-empty rooted binary tree of height $H \\ge 0$ (where a single root has $H = 0$) with $N$ total nodes, $I$ internal nodes (degree $\\ge 1$), and $L$ leaves ($N = I + L$), let $n_0, n_1, n_2$ denote the number of nodes with $0, 1, 2$ children:',
          formulaLatex:
            'L = n_2 + 1 \\le I + 1, \\qquad H + 1 \\le N \\le 2^{H+1} - 1, \\qquad H \\le I \\le 2^H - 1',
          plainEnglishDecoding:
            'Let us see why $H \\le I \\le 2^H - 1$ makes complete visual sense: walk along a longest root-to-leaf path of $H$ edges — the first $H$ nodes on that path all have a child below them, so you MUST have at least $H$ internal nodes ($I \\ge H$). On the flip side, every internal node has to sit on levels $0, 1, \\dots, H-1$ (nothing at the bottom level $H$ can have children), and those upper levels hold at most $1 + 2 + \\dots + 2^{H-1} = 2^H - 1$ spots.',
          workedMiniExamples: [
            {
              prompt: 'A full (strict) binary tree (every internal node has 2 children) has $13$ leaves. Find $I$ and $N$.',
              solution:
                'Since $n_1 = 0$, every internal node has $2$ children: $I = n_2 = L - 1 = 13 - 1 = 12$, so $N = I + L = 12 + 13 = 25$ (equivalently $N = 2L - 1 = 25$).',
            },
            {
              prompt: 'Can a binary tree of height $H = 3$ have $N = 10$ nodes and $I = 8$ internal nodes?',
              solution:
                'Check the upper ceiling on internal nodes $I \\le 2^H - 1$: for $H = 3$, levels $0, 1, 2$ hold at most $1 + 2 + 4 = 2^3 - 1 = 7$ nodes total. Having $I = 8 > 7$ forces at least one node at level $3$ to have a child, pushing height to $\\ge 4$. Impossible!',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'In every binary tree, $L \\ge H + 1$ because taller trees must branch out.',
            reality: 'A skewed chain of $H$ edges has height $H$, $N = H + 1$ nodes, $I = H$ internal nodes, and ONLY $L = 1$ leaf!',
            counterExample: 'Chain $1 \\to 2 \\to 3 \\to 4$: $H = 3$, $L = 1 < 4 = H + 1$.',
          },
          {
            myth: '"Full binary tree" always means all levels are completely packed ($N = 2^{H+1} - 1$).',
            reality: 'In GATE / Cormen / standard DS exams, a **full (strict/proper) binary tree** means every node has **0 or 2 children** ($n_1 = 0$). A tree with all levels packed is called a **perfect** binary tree.',
            counterExample: 'Root `A` with `B, C`, and `B` with `D, E` ($N=5$) is full ($n_1=0$) even though `C` has no children.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Decision Tree Depth & Leaf Capacity (ID3 / CART)',
            whyItMatters:
              'A binary decision tree of depth $H$ can partition space into at most $2^H$ leaf regions ($L \\le 2^H$), directly controlling model variance and overfitting.',
            pyqProof: 'GATE DA 2024 · Q.62 (ID3 Information Gain)',
          },
        ],
      },
      {
        id: 'm9-c1-2',
        title: 'Tree Traversals & Unique Reconstruction Rules',
        subtitle: 'Why Inorder is the GPS anchor, and why Pre+Post breaks on 1-child nodes',
        priority: 'high-yield',
        buildsOn: 'Concept 1.1 binary tree anatomy & recursive calls',
        whyStudy:
          'Computer memory and files are flat 1D sequences, whereas a tree branches in 2D! Whenever a program prints, evaluates, or saves a binary tree to disk, it flattens the tree into a 1D list via a **traversal** (Preorder, Inorder, Postorder, or Level-Order). A favorite exam question — tested directly in **GATE DA 2024 Q.28** and **GATE DA 2026 Q.25** — asks: *given two flattened lists, can you rebuild the exact original 2D tree without ambiguity?* Knowing what piece of geometric information each traversal preserves turns tree reconstruction into a calm, foolproof 3-step loop.',
        groundRules: [
          '**All Three Recursive Traversals Visit `Left` Before `Right` — Only the Timing of `Root` Moves:** **Preorder** visits `Root` *before* both subtrees (`Root, Left, Right`); **Inorder** visits `Root` *between* them (`Left, Root, Right`); **Postorder** visits `Root` *after* both (`Left, Right, Root`).',
          '**Preorder and Postorder Identify WHO the Root Is; Inorder Splits WHO Sits Left vs. Right:** `Pre[0]` (or `Post[-1]`) always names the root of the current subtree, while locating that root inside `Inorder` tells you the exact size $k$ of the left subtree vs. the right subtree.',
          '**Without Inorder, Any 1-Child Node Creates Mirror Ambiguity — Unless 1-Child Nodes Are Outlawed:** A root `1` with a single left child `2` and a root `1` with a single right child `2` emit identical Preorder `[1, 2]` and Postorder `[2, 1]`. Forbidding 1-child nodes (**Full Binary Tree**, $n_1 = 0$) guarantees every non-leaf has *both* a left and right child, letting Preorder + Postorder reconstruct uniquely!',
          '**Distinct Keys Are Required for Uniqueness:** If duplicate keys exist, locating the root inside Inorder can match multiple indices, breaking unique reconstruction even when you have Preorder + Inorder.',
        ],
        toyExample: {
          title: 'Two Different 2-Node Trees with Identical Preorder & Postorder',
          scenario:
            'Look at how simple the three recursive traversals are in Python:\n```python\ndef preorder(node):\n    if node is None:\n        return []\n    return [node.key] + preorder(node.left) + preorder(node.right)\n\ndef inorder(node):\n    if node is None:\n        return []\n    return inorder(node.left) + [node.key] + inorder(node.right)\n\ndef postorder(node):\n    if node is None:\n        return []\n    return postorder(node.left) + postorder(node.right) + [node.key]\n```\nNow test these on two mirror-distinct 2-node trees: Tree $T_1$ (root `1`, **left** child `2`) and Tree $T_2$ (root `1`, **right** child `2`).',
          walkthroughSteps: [
            '1. **Preorder (`Root, Left, Right`):** $T_1$ prints `[1, 2]`. $T_2$ prints `[1, 2]`. Completely identical!',
            '2. **Postorder (`Left, Right, Root`):** $T_1$ prints `[2, 1]`. $T_2$ prints `[2, 1]`. Still completely identical!',
            '3. **Inorder (`Left, Root, Right`):** $T_1$ prints `[2, 1]` (`2` sits to the left of `1`), while $T_2$ prints `[1, 2]` (`2` sits to the right of `1`). Only **Inorder** separates left from right!',
            '4. **Now forbid 1-child nodes (Full Binary Tree):** If root `1` MUST have either $0$ or $2$ children, then in Preorder `[1, L_root, ..., R_root, ...]` and Postorder `[..., L_root, ..., R_root, 1]`, the element right after `1` in Preorder (`L_root`) is guaranteed to be the left child’s root — and finding `L_root` inside Postorder marks the exact end of the left subtree!',
          ],
          ahaMoment:
            'Keep each traversal’s superpower straight: Preorder and Postorder hand you **WHO the root is** (front of Pre, end of Post), while Inorder tells you **WHO sits on the left vs. right**. Without Inorder, any single-child node leaves a mirror ambiguity — unless 1-child nodes are outlawed (a full binary tree)!',
        },
        theoremAndFormula: {
          statement:
            'Given traversals of a binary tree with **distinct** node keys: (1) **Preorder + Inorder** uniquely fixes any binary tree. (2) **Postorder + Inorder** uniquely fixes any binary tree. (3) **Preorder + Postorder** does NOT uniquely fix a general binary tree, **but DOES uniquely fix any full binary tree** (where every internal node has 2 children).',
          formulaLatex:
            '\\text{Pre} = [r, \\underbrace{\\text{Left}}_{k}, \\text{Right}], \\quad \\text{In} = [\\underbrace{\\text{Left}}_{k}, r, \\text{Right}], \\quad \\text{Post} = [\\underbrace{\\text{Left}}_{k}, \\text{Right}, r]',
          plainEnglishDecoding:
            'Reconstructing a tree from Pre + In is a calm 3-step loop: read the root $r$ right off the front of Preorder, find $r$ inside Inorder to count how many nodes ($k$) live to its left, peel off the next $k$ items of Preorder as the left subtree, and repeat on both halves.',
          workedMiniExamples: [
            {
              prompt: 'Reconstruct the binary tree with Preorder `[A, B, D, G, C, E, F]` and Inorder `[B, G, D, A, E, C, F]`, then write its Postorder.',
              solution:
                '1. `Pre[0] = A` is the root. Finding `A` in Inorder splits left `[B, G, D]` (3 nodes) and right `[E, C, F]` (3 nodes).\n2. Left Preorder `[B, D, G]` has root `B`; in Inorder `[B, G, D]`, nothing is left of `B`, so `B` has empty left child and right subtree `[D, G]` (Pre) / `[G, D]` (In) $\\implies$ `D` is root with left child `G`.\n3. Right Preorder `[C, E, F]` and Inorder `[E, C, F]` give root `C` with left `E` and right `F`.\n4. Reading `Left -> Right -> Root` gives Postorder = **`[G, D, B, E, F, C, A]`**.',
            },
            {
              prompt: 'Given a **full** binary tree with Preorder `[1, 2, 4, 5, 3]` and Postorder `[4, 5, 2, 3, 1]`, split at the root.',
              solution:
                'Root is `1`. Because the tree is full ($n_1 = 0$), the item right after `1` in Preorder (`2`) MUST be the root of the left subtree. Locate `2` in Postorder `[4, 5, 2 | 3 | 1]`: everything up through `2` is the left subtree `{4, 5, 2}` and the remaining item before `1` is the right subtree leaf `{3}`.',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Preorder + Postorder NEVER uniquely determines a binary tree.',
            reality: 'It fails on general binary trees (due to 1-child nodes), **but ALWAYS uniquely determines a full binary tree** ($n_1 = 0$). Tested verbatim in GATE DA 2024 Q.28!',
            counterExample: 'General tree `[1, 2]` vs full tree `[1, 2, 4, 5, 3]` above.',
          },
          {
            myth: 'Duplicate keys still allow unique reconstruction from Preorder + Inorder.',
            reality: 'If keys repeat, locating the root inside Inorder becomes ambiguous, breaking uniqueness.',
            counterExample: 'Preorder `[1, 1]` and Inorder `[1, 1]` match both a left-child tree and a right-child tree.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'Expression Trees & Compiler AST Evaluation',
            whyItMatters:
              'Postorder evaluates postfix RPN expressions on a stack; Inorder prints infix arithmetic (with parentheses); Preorder prints prefix notation.',
          },
        ],
      },
      {
        id: 'm9-c1-3',
        title: 'Binary Search Trees (BST): Invariant, Operations & Skew Trap',
        subtitle: 'How one ordering rule cuts search from O(N) to tree height—and how a sorted insert destroys it',
        priority: 'high-yield',
        buildsOn: 'Concept 1.2 Inorder traversal',
        whyStudy:
          'A sorted array gives fast $O(\\log N)$ search, yet inserting or deleting a single item in the middle requires shifting $O(N)$ elements. A linked list inserts in $O(1)$ once positioned, yet searching takes $O(N)$. **Binary Search Trees (BSTs)** bridge both worlds by keeping keys dynamically ordered inside a branching tree — enabling $O(H)$ search, insertion, deletion, and sorted range scans, and serving as the conceptual blueprint for database **$B^+$ Trees** and ML **$k$-d Trees**. Understanding the global ancestor-bracket rule prevents the #1 BST bug (local-only child checks) and unlocks 15-second search-path validation.',
        groundRules: [
          '**The BST Invariant Is Global Over Entire Subtrees — Never Just Immediate Children:** Every single descendant anywhere inside `x.left` must be strictly $< x.\\text{key}$, and every single descendant anywhere inside `x.right` must be strictly $> x.\\text{key}$. Walking down any path narrows a strict ancestor interval `(lo, hi)` that *all* deeper keys must obey!',
          '**BST Inorder Traversal MUST Visit `Left < Root < Right`, So Its Output Is Always Sorted:** Because every left-subtree key is smaller than the root and every right-subtree key is larger, Inorder traversal emits every key in strictly increasing order — which means a BST’s **Preorder** (or **Postorder**) ALONE uniquely reconstructs the tree (just sort the keys to recover Inorder!).',
          '**Deleting a 2-Child Node Replaces Its Key With Its Inorder Successor or Predecessor:** You cannot simply detach a 2-child node without orphaning a subtree. Instead, swap its key with either the **smallest key in its right subtree** (inorder successor, which has no left child!) or the **largest key in its left subtree** (inorder predecessor), then remove that easy 0-or-1-child node.',
          '**An Unbalanced BST Has Zero Shape Protection — Insertion Order Controls Height $H$:** Every operation takes $O(H)$ time where $\\lfloor \\log_2 N \\rfloor \\le H \\le N - 1$. Inserting already-sorted keys `1, 2, ..., N` builds a right-skewed chain of height $N - 1$, collapsing search to $\\Theta(N)$ and $N$ insertions to $\\Theta(N^2)$!',
        ],
        toyExample: {
          title: 'Inserting `[50, 30, 70, 20, 40, 60, 80, 35]` vs. Deleting `30`',
          scenario:
            'Insert keys one by one using the BST rule: smaller goes left, larger goes right. Root becomes `50`, children `30, 70`, then `20, 40` under `30`, `60, 80` under `70`, and `35` as left child of `40`.',
          walkthroughSteps: [
            '1. **Inorder Check:** Reading Left-Root-Right gives `[20, 30, 35, 40, 50, 60, 70, 80]` — **perfectly sorted**!',
            '2. **Search `35`:** `35 < 50` (left, window `(-inf, 50)`) $\\to$ `35 > 30` (right, window `(30, 50)`) $\\to$ `35 < 40` (left, window `(30, 40)`) $\\to$ found in $H + 1 = 4$ comparisons.',
            '3. **Delete `30` (2-child node):** You cannot just unplug `30` and leave two orphans! Replace `30` with the smallest key in its right subtree (**inorder successor** `35`, which has 0 children) OR the largest key in its left subtree (**inorder predecessor** `20`).',
            '4. **Now suppose you insert `[20, 30, 35, 40, 50, 60, 70, 80]` in sorted order:** Every key goes right, building a height-$7$ chain! Search drops to $\\Theta(N)$ instead of $\\Theta(\\log N)$.',
          ],
          ahaMoment:
            'Watch out for the classic BST misconception: checking only `left.key < node.key < right.key` on immediate children is NOT enough! A true BST requires **every single descendant** in the left subtree to be $< \\text{node.key}$ and **every single descendant** in the right subtree to be $> \\text{node.key}$.',
        },
        theoremAndFormula: {
          statement:
            'A **Binary Search Tree** enforces $\\forall u \\in \\text{left}(x),\\; u.\\text{key} < x.\\text{key}$ and $\\forall v \\in \\text{right}(x),\\; v.\\text{key} > x.\\text{key}$ (assuming distinct keys). Every search, insert, min/max, successor, and delete runs in $O(H)$ time, where $H$ is the tree height: $\\lfloor \\log_2 N \\rfloor \\le H \\le N - 1$.',
          formulaLatex:
            'T_{\\text{BST}}(N) = O(H), \\qquad \\lfloor \\log_2 N \\rfloor \\le H \\le N - 1',
          plainEnglishDecoding:
            'Here is a beautiful two-way gift: a binary tree is a valid BST if and only if its Inorder traversal reads in strictly increasing sorted order. That also means a **Preorder** (or Postorder) traversal ALONE uniquely rebuilds any BST — because you get Inorder for free simply by sorting the keys!',
          workedMiniExamples: [
            {
              prompt: 'Given the Preorder traversal `[15, 10, 8, 12, 20, 25]` of a BST, find its Postorder traversal.',
              solution:
                'Since it is a BST, sort the keys to get Inorder `[8, 10, 12, 15, 20, 25]` for free! Root `15` splits left `{8, 10, 12}` (root `10`, left `8`, right `12`) and right `{20, 25}` (root `20`, right `25`). Reading `Left -> Right -> Root` yields Postorder = **`[8, 12, 10, 25, 20, 15]`**.',
            },
            {
              prompt: 'Does `[10, 5, 20, 15, 30]` work as a valid search probe path for target `17` in a BST?',
              solution:
                'Track the ancestor bracket `(lo, hi)` starting at `(-inf, +inf)`:\n- At `10` ($17 > 10$), go right $\\implies$ all future keys must be in `(10, +inf)`.\n- Wait: the very next key is `5`, which is **already outside** `(10, +inf)`! Even if we ignored `5` and jumped to `20 -> 15`, going left from `20` caps future keys at `< 20`, so `30 > 20` ALSO breaks the upper bound `20`! Invalid BST probe path.',
            },
          ],
        },
        sandboxId: 'sorting-search-lab',
        msqTraps: [
          {
            myth: 'Checking `node.left.key < node.key < node.right.key` at every node guarantees a valid BST.',
            reality: 'False! A grandchild in the left subtree can be larger than the root while still satisfying local parent checks.',
            counterExample: 'Root `10`, left child `5`, right child of `5` is `12`: `5 < 10` and `12 > 5` both pass locally, yet `12 > 10` breaks the BST!',
          },
          {
            myth: 'Inserting $N$ elements into an initially empty BST always takes $O(N \\log N)$ time.',
            reality: 'Worst-case insertion of sorted or reverse-sorted keys builds a skewed chain of height $N - 1$, costing $\\sum_{k=0}^{N-1} k = \\Theta(N^2)$ time.',
            counterExample: 'Inserting `1, 2, 3, ..., N` creates a right-skewed chain.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: '$B^+$ Trees (Disk-Aligned Multi-Way Search Trees)',
            whyItMatters:
              'A BST stores 1 key per node (height $O(\\log_2 N)$ = too many disk seeks). A $B^+$ Tree packs $p - 1$ keys per disk block (fanout $p \\approx 195$) so height shrinks to $2\\text{–}4$ levels!',
            pyqProof: 'GATE DA 2026 · Q.32 & Q.41 ($B^+$ Tree fanout & split)',
          },
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: '$k$-d Trees for Fast $k$-NN Search',
            whyItMatters:
              'Instead of scanning all $N$ training points in $O(Nd)$ per query, a $k$-d tree generalizes BST splitting by cycling through feature axes $x_1, x_2, \\dots, x_d$ at each depth.',
            pyqProof: 'GATE DA 2024 · Q.63 ($k$-NN)',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm9-c1-ht1',
        title: 'Testing Universal Binary Tree Bounds Without Exhaustive Drawing',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2024 · Q.52 (2M MSQ)'],
        problemStatement:
          'In an MSQ on an arbitrary rooted binary tree of height $H \\ge 1$, $I$ internal nodes, $L$ leaves, and $N$ total nodes, how do you verify or refute proposed inequalities like $L \\le I + 1$, $L \\ge H + 1$, and $H \\le I \\le 2^H - 1$ in 30 seconds?',
        triggerCue:
          'You see an MSQ comparing $H, I, L, N$ for **"any binary tree"** (not necessarily full, not necessarily complete).',
        bruteForceTrap:
          'Drawing random 5-to-7 node balanced trees and checking if each formula holds. Balanced trees falsely confirm traps like $L \\ge H + 1$!',
        mentalShift:
          'Immediately test the **two extreme boundary shapes** of height $H$: (1) **Minimum width (Skewed Chain)** where $N = H+1, I = H, L = 1$, and (2) **Maximum width (Perfect Tree)** where $N = 2^{H+1}-1, I = 2^H - 1, L = 2^H$.',
        steps: [
          {
            label: 'Step 1: Plug the Skewed Chain ($N = H+1, I = H, L = 1$)',
            detail:
              'Any inequality claiming $L$ or $N$ must be large dies here. For $H = 3$, $L = 1 < H + 1 = 4$, instantly killing $L \\ge H + 1$ and $N \\ge 2H$. Meanwhile $H \\le I$ holds with equality ($3 = 3$).',
          },
          {
            label: 'Step 2: Plug the Perfect Tree ($N = 2^{H+1}-1, I = 2^H-1, L = 2^H$)',
            detail:
              'Checks upper bounds: $N = 2^{H+1} - 1$ and $I = 2^H - 1$ sit right on the ceiling, while $L = 2^H = (2^H - 1) + 1 = I + 1$ hits equality.',
          },
          {
            label: 'Step 3: Lock in the Edge-Counting Proof for $L \\le I + 1$',
            detail:
              'For any binary tree, $N - 1 = n_1 + 2n_2$ and $N = n_0 + n_1 + n_2 \\implies n_0 = n_2 + 1 \\le n_1 + n_2 + 1 = I + 1$. Proven universally!',
          },
        ],
        lockInTakeaway:
          'Two pocket trees—the **1-leaf chain** and the **perfect binary tree**—refute 90% of false MSQ tree bounds on contact.',
      },
      {
        id: 'm9-c1-ht2',
        title: '15-Second BST Preorder/Search-Path Validity Check',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.25 (1M MSQ)'],
        problemStatement:
          'You are given a candidate search path `[50, 20, 40, 35, 55]` toward a target `37` in a BST, OR asked whether a traversal sequence corresponds to a valid BST.',
        triggerCue:
          'Question asks: *"Which sequence CANNOT be a search path / Preorder traversal of a BST?"*',
        bruteForceTrap:
          'Trying to draw the whole BST from scratch or checking only adjacent pairs (`20 < 40`, `40 > 35`).',
        mentalShift:
          'Maintain a shrinking **valid interval `(lo, hi)`** as you walk down the path (initially `(-inf, +inf)`). Every right turn tightens `lo`; every left turn tightens `hi`. One number outside `(lo, hi)` kills the path!',
        steps: [
          {
            label: 'Step 1: Initialize `lo = -inf, hi = +inf` at root `50`',
            detail: 'Target `37 < 50`, so we turn LEFT: new valid window is `(-inf, 50)`.',
          },
          {
            label: 'Step 2: Visit `20`, then `40`, then `35`',
            detail:
              '`20` is in `(-inf, 50)`; `37 > 20` turns RIGHT $\\implies (20, 50)$. `40` is in `(20, 50)`; `37 < 40` turns LEFT $\\implies (20, 40)$. `35` is in `(20, 40)`; `37 > 35` turns RIGHT $\\implies (35, 40)$.',
          },
          {
            label: 'Step 3: Check `55` against `(35, 40)`',
            detail: '`55` is outside `(35, 40)`! Impossible in any BST — reject immediately.',
          },
        ],
        lockInTakeaway:
          'Every BST path is a narrowing bracket `(lo, hi)`. Any key that jumps outside the bracket inherited from ALL its ancestors is illegal.',
      },
    ],
    arsenalCards: [
      {
        id: 'm9-c1-a1',
        badge: 'Tree Bounds',
        whenYouSpot: 'MSQ relating height $H$, leaves $L$, internal nodes $I$, and total nodes $N$ of a rooted binary tree',
        directWeaponLatex: 'L = n_2 + 1 \\le I + 1, \\quad H + 1 \\le N \\le 2^{H+1} - 1, \\quad H \\le I \\le 2^H - 1',
        instantRule:
          'Test the skewed chain ($L=1, I=H, N=H+1$) for lower bounds and the perfect tree ($L=2^H, I=2^H-1$) for upper bounds.',
        tenSecondExample: 'Full binary tree ($n_1=0$) with $L=17$ leaves $\\implies I = 16, N = 33$.',
        oneFatalTrap: 'Assuming $H = \\lfloor \\log_2 N \\rfloor$ for arbitrary binary trees; height can be up to $N - 1$ when skewed.',
      },
      {
        id: 'm9-c1-a2',
        badge: 'Reconstruction',
        whenYouSpot: 'Question asks which traversal pairs uniquely fix a binary tree (or asks to reconstruct from Pre + In)',
        directWeaponLatex: '\\text{Pre+In } \\checkmark \\quad \\text{In+Post } \\checkmark \\quad \\text{Pre+Post } \\iff \\text{Full } (n_1=0)',
        instantRule:
          'Inorder is mandatory for general binary trees (and comes FREE for a BST by sorting the keys!). Pre+Post works if and only if every internal node has 2 children.',
        tenSecondExample: 'Pre `[1,2]`, Post `[2,1]` matches two trees unless 1-child nodes are forbidden.',
        oneFatalTrap: 'Saying Pre+Post NEVER fixes a tree when the prompt explicitly says **full binary tree** (GATE DA 2024 Q.28 trap!).',
      },
      {
        id: 'm9-c1-a3',
        badge: 'BST Invariant',
        whenYouSpot: 'BST validation, Preorder-to-Postorder of a BST, or search path / deletion on a BST',
        directWeaponLatex: '\\text{Inorder}(\\text{BST}) = \\text{Sorted Keys}, \\qquad \\text{Delete 2-child } \\to \\text{Inorder Succ/Pred}',
        instantRule:
          'Track ancestor bounds `(lo, hi)` down any BST path; for BST Preorder, get Inorder by sorting the array and reconstruct uniquely.',
        tenSecondExample: 'BST Preorder `[15, 10, 20]` $\\implies$ sorted Inorder `[10, 15, 20]` $\\implies$ Postorder `[10, 20, 15]`.',
        oneFatalTrap: 'Validating a BST by checking only `left < root < right` locally without propagating `(lo, hi)` bounds.',
      },
    ],
    questions: [
      {
        id: 'm9-c1-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'A full (strict) binary tree—in which every internal node has exactly $2$ children—has $17$ leaf nodes. What is the **total** number of nodes $N$ in this tree?',
        natAnswer: { min: 33, max: 33, exactDisplay: '33' },
        triggerHint: 'In a full binary tree ($n_1 = 0$), relate $L$ and $I$ using $L = n_2 + 1$.',
        intuitiveSolution: [
          'Because $n_1 = 0$, every internal node has degree $2$, so $I = n_2 = L - 1 = 17 - 1 = 16$.',
          'Total nodes $N = I + L = 16 + 17 = 33$ (or directly $N = 2L - 1 = 33$).',
        ],
        directShortcutUsed: '$N = 2L - 1$ for any full binary tree.',
      },
      {
        id: 'm9-c1-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.28 (Adapted)',
        year: 2024,
        marks: 1,
        type: 'MSQ',
        stem: 'Consider a **full binary tree** (every node has either $0$ or $2$ children) with $n \\ge 3$ **distinct** node keys. Which of the following traversal combinations is/are **sufficient** to uniquely reconstruct the tree?',
        options: [
          {
            id: 'A',
            text: 'Preorder and Inorder',
            whyTrueOrFalse: 'True: Preorder identifies the root and Inorder partitions left/right subtrees for ANY binary tree with distinct keys.',
          },
          {
            id: 'B',
            text: 'Inorder and Postorder',
            whyTrueOrFalse: 'True: Postorder identifies the root (last item) and Inorder partitions left/right subtrees.',
          },
          {
            id: 'C',
            text: 'Preorder and Postorder',
            whyTrueOrFalse: 'True: Because the tree is **full** ($n_1=0$), every non-leaf has two non-empty subtrees, so the element after the root in Preorder uniquely identifies the left subtree boundary in Postorder.',
          },
          {
            id: 'D',
            text: 'Level-order traversal alone',
            whyTrueOrFalse: 'False: A single traversal without structural null markers cannot distinguish tree shapes.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Notice the bold keyword **full binary tree**—does 1-child ambiguity still exist when $n_1 = 0$?',
        intuitiveSolution: [
          'For an *arbitrary* binary tree, only **Pre+In** and **In+Post** guarantee unique reconstruction because Pre+Post fails when a node has only 1 child.',
          'Here the tree is **full** (0 or 2 children per node), eliminating the 1-child ambiguity. Therefore all three pairs (A, B, and C) uniquely reconstruct the tree!',
        ],
        directShortcutUsed: 'Full binary tree ($n_1=0$) unlocks Pre+Post uniqueness.',
      },
      {
        id: 'm9-c1-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.52 (Adapted)',
        year: 2024,
        marks: 2,
        type: 'MSQ',
        stem: 'Consider any non-empty rooted binary tree of height $H \\ge 1$ (height of a single-node tree is $0$) having $N$ total nodes, $I$ internal nodes (nodes with at least one child), and $L$ leaf nodes. Which of the following inequalities ALWAYS hold?',
        options: [
          {
            id: 'A',
            text: '$L \\le I + 1$',
            whyTrueOrFalse: 'True: By edge counting, $L = n_2 + 1 \\le (n_1 + n_2) + 1 = I + 1$.',
          },
          {
            id: 'B',
            text: '$H + 1 \\le N \\le 2^{H+1} - 1$',
            whyTrueOrFalse: 'True: Minimum nodes for height $H$ is a chain ($H+1$); maximum is a perfect tree ($2^{H+1}-1$).',
          },
          {
            id: 'C',
            text: '$H \\le I \\le 2^H - 1$',
            whyTrueOrFalse: 'True: A longest path of $H$ edges requires at least $H$ internal nodes, and all internal nodes live at levels $0..H-1$ (at most $2^H - 1$ nodes).',
          },
          {
            id: 'D',
            text: '$L \\ge H + 1$',
            whyTrueOrFalse: 'False: A skewed chain of height $H \\ge 1$ has only $L = 1$ leaf, violating $1 \\ge H + 1$.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Test the skewed 1-leaf chain of height $H=3$ against each option.',
        intuitiveSolution: [
          'On a skewed chain of height $H = 3$, $N = 4, I = 3, L = 1$. Option D says $1 \\ge 4$, which is immediately false.',
          'Options A, B, and C hold universally by edge counting ($n_0 = n_2 + 1$) and level-capacity bounds ($2^0 + \\dots + 2^{H-1} = 2^H - 1$).',
        ],
        directShortcutUsed: 'Skewed-chain counterexample ($L=1, I=H$) + edge-counting identity $n_0 = n_2 + 1$.',
      },
      {
        id: 'm9-c1-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.25 (Inspired)',
        year: 2026,
        marks: 1,
        type: 'MSQ',
        stem: 'A 7-node binary tree has **Preorder** `[A, B, D, G, C, E, F]` and **Inorder** `[B, G, D, A, E, C, F]`. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'The root of the tree is `A`, and `B` has no left child.',
            whyTrueOrFalse: 'True: `A` is first in Preorder; in `B, G, D` (left of `A` in Inorder), `B` appears first so `B` has an empty left subtree.',
          },
          {
            id: 'B',
            text: '`G` is the left child of `D`.',
            whyTrueOrFalse: 'True: The right subtree of `B` has Preorder `[D, G]` and Inorder `[G, D]`, so `D` is root and `G` sits to its left.',
          },
          {
            id: 'C',
            text: 'The Postorder traversal is `[G, D, B, E, F, C, A]`.',
            whyTrueOrFalse: 'True: Postorder visits left subtree (`G, D, B`), right subtree (`E, F, C`), then root `A`.',
          },
          {
            id: 'D',
            text: 'The tree is a full binary tree.',
            whyTrueOrFalse: 'False: Both `B` (right child `D` only) and `D` (left child `G` only) have exactly $1$ child.',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Pick the root from Preorder[0], then slice Inorder around it.',
        intuitiveSolution: [
          'Root = `A`. Inorder splits into left `[B, G, D]` (3 nodes) and right `[E, C, F]` (3 nodes).',
          'Left Preorder `[B, D, G]` has root `B`, empty left child, and right subtree (`[D, G]` Pre, `[G, D]` In) where `G` is the left child of `D`.',
          'Right Preorder `[C, E, F]` and Inorder `[E, C, F]` form `C` with left `E` and right `F`. Postorder is `[G, D, B, E, F, C, A]`, and `B, D` each have 1 child so it is NOT full.',
        ],
        directShortcutUsed: 'Pre[0] = Root; split Inorder into `[Left | Root | Right]` recursively.',
      },
      {
        id: 'm9-c1-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Trap',
        marks: 2,
        type: 'MCQ',
        stem: 'Suppose you search for key `42` in a valid Binary Search Tree of distinct integers and record the sequence of node keys visited until finding (or failing to find) `42`. Which of the following probe sequences is **IMPOSSIBLE**?',
        options: [
          {
            id: 'A',
            text: '`[10, 60, 30, 50, 40, 42]`',
            whyTrueOrFalse: 'Valid: brackets shrink `(-inf,+inf) -> (10,+inf) -> (10,60) -> (30,60) -> (30,50) -> (40,50)`.',
          },
          {
            id: 'B',
            text: '`[100, 20, 80, 35, 45, 42]`',
            whyTrueOrFalse: 'Valid: brackets shrink `(-inf,100) -> (20,100) -> (20,80) -> (35,80) -> (35,45)`.',
          },
          {
            id: 'C',
            text: '`[50, 25, 40, 30, 48, 42]`',
            whyTrueOrFalse: 'IMPOSSIBLE: At `40` ($42 > 40$), turning right forces all remaining keys into `(40, 50)`. Visiting `30 < 40` violates the lower bound `40`!',
          },
          {
            id: 'D',
            text: '`[40, 45, 43, 41, 42]`',
            whyTrueOrFalse: 'Valid: brackets shrink `(40,+inf) -> (40,45) -> (40,43) -> (41,43)`.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Walk each path while updating `(lo, hi)` whenever you branch left or right.',
        intuitiveSolution: [
          'In option C: `50` ($42<50$) $\\to$ bracket `(-inf, 50)`. `25` ($42>25$) $\\to$ `(25, 50)`. `40` ($42>40$) $\\to$ `(40, 50)`.',
          'The very next node visited is `30`, which is outside `(40, 50)`! Wait: you cannot step left from `40` when searching for `42 > 40`, nor can `30` reside in the right subtree of `40`. Impossible!',
        ],
        directShortcutUsed: 'Narrowing `(lo, hi)` BST ancestor bracket check.',
      },
      {
        id: 'm9-c1-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style NAT',
        marks: 2,
        type: 'NAT',
        stem: 'What is the **maximum** possible height $H$ (measured as the number of edges on the longest root-to-leaf path, where a 1-node tree has $H = 0$) of a **full binary tree** (every internal node has $2$ children) containing exactly $N = 15$ nodes?',
        natAnswer: { min: 7, max: 7, exactDisplay: '7' },
        triggerHint: 'To maximize height in a full binary tree, make every level as thin as possible: 1 internal node and 1 leaf per step!',
        intuitiveSolution: [
          'To stretch height $H$ as far as possible while keeping $n_1 = 0$, each level $1, 2, \\dots, H$ needs only $2$ nodes (one leaf that stops, and one internal node that continues downward—except level $H$ has two leaves).',
          'Thus the minimum node count for a full binary tree of height $H$ is $N_{\\min}(H) = 1 + 2H$.',
          'Setting $1 + 2H = 15$ gives $2H = 14 \\implies H = 7$.',
        ],
        directShortcutUsed: 'Thinnest full binary tree of height $H$ has $N = 2H + 1$ nodes.',
      },
    ],
  },
  {
    id: 'pds2-ch2',
    number: 2,
    title: 'Binary Search Invariants & Elementary Sorts (Insertion, Selection, Bubble)',
    shortTitle: 'Binary Search & O(n²) Sorts',
    estimatedHours: 3.5,
    dayLabel: 'Week 4 · Day 2',
    tagline:
      'Let us eliminate every off-by-one guess from Binary Search and elementary sorting! Together we will nail exact 3-way binary search comparison counts, understand why sorted linked lists lose $O(\\log n)$ speed, and turn Insertion, Selection, and Bubble Sort swap questions into 10-second inversion counts.',
    syllabusMapping: [
      'Searching: Linear Search vs. Binary Search worst-case comparisons & random-access requirement',
      'Elementary Sorting: Insertion Sort, Selection Sort, Bubble Sort — passes, comparisons, swaps, inversions',
    ],
    whatIsImportant: [
      'Binary Search worst-case 3-way comparison count: $F(n) = F(\\lfloor n/2 \\rfloor) + 1 = \\lfloor \\log_2 n \\rfloor + 1$ (GATE DA 2024 Q.40 & GATE DA 2026 Q.31)',
      'Why Binary Search requires $O(1)$ random access (Sorted Array ONLY; Sorted Linked List takes $\\Theta(n)$, GATE DA 2025 Q.27 single-option MSQ trap)',
      'Pass-by-pass progress: Selection sort locks the minimum in 1 swap per pass (GATE DA 2024 Q.45)',
      'Insertion sort vs. Bubble sort exact swaps (= total inversions!) and comparisons on near-sorted arrays (GATE DA 2025 Q.29, GATE DA 2026 Q.49 & Q.58)',
    ],
    whatIsNotImportant: [
      'Interpolation search, Jump search, Exponential search, or Ternary search analysis',
      'Shell sort gap sequences (Hibbard/Pratt) or Cocktail/Comb sort variants',
    ],
    inboundStream:
      'Module 8 array indexing (`O(1)` random access vs linked-list `O(n)` traversal), loops, and Python list traces.',
    outboundStream: [
      'Chapter 3 Mergesort (computing the exact inversion count in $O(n \\log n)$ instead of Insertion/Bubble Sort\'s $O(n^2)$)',
      'Module 12 DBMS $B^+$ Tree binary search inside a sorted block node',
    ],
    glossary: [
      {
        term: 'Binary Search',
        symbol: '$F(n) = F(\\lfloor n/2 \\rfloor) + 1 = \\lfloor \\log_2 n \\rfloor + 1$',
        plainEnglish:
          'A halving search strategy on a sorted random-access array: compare your target against the middle element `A[mid]` and throw away half of the remaining candidates on every step.',
        tinyExample: 'On $n = 1000$ sorted keys ($2^9 \\le 1000 < 2^{10}$), worst-case 3-way comparisons equal $9 + 1 = 10$.',
      },
      {
        term: 'Loop Invariant',
        symbol: '$\\text{target} \\in A[\\text{lo}..\\text{hi}]$',
        plainEnglish:
          'A rock-solid promise that stays true before and after every iteration of a loop — in binary search, if the target exists anywhere in the array, it MUST live inside the shrinking window `[lo, hi]`.',
        tinyExample: 'In Selection Sort after pass $k$, the invariant promises `A[0..k-1]` holds the $k$ smallest items in final order.',
      },
      {
        term: '3-Way Comparison',
        symbol: '$<,\\; ==,\\; >$',
        plainEnglish:
          'A single check comparing `target` against `A[mid]` that tells you immediately whether `target` is smaller, equal, or larger — allowing binary search to eliminate `mid` itself and recurse on at most $\\lfloor n/2 \\rfloor$ elements.',
        tinyExample: 'For $n = 4$ (`[10, 20, 30, 40]`), worst-case 3-way comparisons equal $\\lfloor \\log_2 4 \\rfloor + 1 = 3$ (not $\\lceil \\log_2 4 \\rceil = 2$!).',
      },
      {
        term: 'Random Access Requirement',
        symbol: '$A[\\text{mid}] \\text{ in } O(1)$',
        plainEnglish:
          'Binary search only reaches $O(\\log n)$ time when jumping directly to `A[mid]` costs $O(1)$ (a contiguous array); on any linked list, walking pointers to the midpoint costs $\\Theta(n)$!',
        tinyExample: 'Binary search on a sorted singly or doubly linked list runs in $\\Theta(n)$, never $O(\\log n)$.',
      },
      {
        term: 'Inversion',
        symbol: '$I_{\\text{inv}} = |\\{(i, j) : i < j,\\; A[i] > A[j]\\}|$',
        plainEnglish:
          'An inversion is any pair of elements sitting in the wrong relative order (bigger number appearing earlier than smaller number); every single adjacent swap removes exactly $1$ inversion.',
        tinyExample: 'In `[5, 3, 4, 1, 2]`, `5` beats $4$ items, `3` beats $2$, `4` beats $2$, giving $I_{\\text{inv}} = 8$.',
      },
      {
        term: 'Insertion Sort',
        symbol: '$\\Theta(n + I_{\\text{inv}})$',
        plainEnglish:
          'Just like sorting playing cards in your hand, Insertion Sort picks each new card `A[i]` and slides it left across larger cards in the already-sorted prefix `A[0..i-1]`; it is **stable** and **adaptive**.',
        tinyExample: 'On `[1, 2, 3, 5, 4]` ($1$ inversion), Insertion Sort makes only $1$ swap and $5$ comparisons.',
      },
      {
        term: 'Selection Sort',
        symbol: '$\\Theta(n^2)\\text{ comps},\\; \\le n - 1\\text{ swaps}$',
        plainEnglish:
          'On pass $i$, Selection Sort scans the entire unsorted suffix to find the global minimum and locks it into slot $i$ with at most ONE long-distance swap — minimizing writes, yet always $\\Theta(n^2)$ comparisons and **unstable**.',
        tinyExample: 'On `[4, 3, 2, 1, 5]`, Selection Sort swaps `4<->1` then `3<->2`, finishing in just $2$ passes!',
      },
      {
        term: 'Bubble Sort (with Early-Exit)',
        symbol: '$\\text{Swaps} = I_{\\text{inv}}$',
        plainEnglish:
          'Bubble Sort sweeps left-to-right swapping adjacent out-of-order pairs so the largest remaining key bubbles to the right end on each pass; with an early-exit flag, it stops after confirming one clean $0$-swap pass.',
        tinyExample: 'On `[1, 2, 3, 5, 4]`, early-exit Bubble makes $4$ comparisons on Pass 1 ($1$ swap) plus $3$ on Pass 2 ($0$ swaps) $= 7$.',
      },
      {
        term: 'Adaptive Sorting Algorithm',
        symbol: '$\\Theta(n)\\text{ on sorted input}$',
        plainEnglish:
          'An algorithm is adaptive when it takes advantage of existing order in the input, speeding up to $\\Theta(n)$ on already-sorted or nearly-sorted arrays (Insertion Sort and early-exit Bubble Sort are adaptive; Selection Sort is NOT).',
        tinyExample: 'On a sorted array of $1000$ items, Insertion Sort makes $999$ comparisons while Selection Sort still makes $499{,}500$.',
      },
      {
        term: 'Stable vs. Unstable Sort',
        symbol: '$A[i] = A[j] \\;(i < j) \\text{ stays ordered}$',
        plainEnglish:
          'A sort is **stable** if equal keys keep their original left-to-right arrival order after sorting; adjacent swaps with strict `>` keep Insertion & Bubble stable, whereas Selection Sort’s long jump can flip equal keys.',
        tinyExample: 'On `[2_a, 2_b, 1]`, Selection Sort swaps `2_a` with `1` into `[1, 2_b, 2_a]`, proving it is unstable.',
      },
    ],
    generatorId: 'bsearch-depth-gen',
    concepts: [
      {
        id: 'm9-c2-1',
        title: 'Binary Search: Loop Invariant, Random Access & Exact Comparison Count',
        subtitle: 'Why $n = 1000$ takes exactly 10 comparisons—and why a sorted linked list ruins it',
        priority: 'core-pillar',
        buildsOn: 'Module 8 arrays vs linked lists',
        whyStudy:
          'Scanning a sorted phone directory of 1 million entries one by one takes up to 1,000,000 checks. Opening straight to the middle and discarding the wrong half slashes that to just **20 checks**! Yet students routinely drop easy marks on Binary Search for two tiny reasons: (1) off-by-one confusion between $\\lceil \\log_2 n \\rceil$ and $\\lfloor \\log_2 n \\rfloor + 1$ (**GATE DA 2024 Q.40**, **2026 Q.31**), and (2) forgetting that jumping straight to `A[mid]` demands a contiguous array — NOT a linked list (**GATE DA 2025 Q.27**). Once you see Binary Search’s exact runtime rules, both traps disappear for good.',
        groundRules: [
          '**Binary Search Requires TWO Properties — Sorted Order AND $O(1)$ Random Access:** Sorted order lets you discard half the remaining elements; contiguous array indexing lets you inspect `A[mid]` in 1 step. On a sorted singly or doubly linked list, walking pointers to `mid` takes $\\Theta(n)$ hops on the first step alone, dragging total runtime to $\\Theta(n)$!',
          '**The Loop Invariant Promises `target` (If Present) Lives Inside `[lo, hi]`:** Starting with `lo = 0` and `hi = n - 1`, checking `mid = (lo + hi) // 2` eliminates `mid` itself whenever `A[mid] != target` — setting either `lo = mid + 1` or `hi = mid - 1` so the search window strictly shrinks on every step and always terminates.',
          '**A Single 3-Way Comparison Eliminates `mid` and Leaves at Most $\\lfloor n / 2 \\rfloor$ Elements:** When `n` is even (say `n = 4`), `mid` splits the remaining `3` items into halves of size `1` and `2` ($= \\lfloor 4 / 2 \\rfloor$). In the worst case (an absent target), you always enter the larger half, yielding the exact recurrence $F(n) = F(\\lfloor n / 2 \\rfloor) + 1$ with $F(0) = 0$.',
          '**Worst-Case Comparisons Step Up at Every Exact Power of $2$:** Anchor at $F(1) = 1$: every integer $n$ in $[2^k, 2^{k+1} - 1]$ halves down to $1$ in $k$ steps plus $1$ final check $= k + 1 = \\lfloor \\log_2 n \\rfloor + 1 = \\lceil \\log_2(n + 1) \\rceil$ comparisons — NOT $\\lceil \\log_2 n \\rceil$!',
        ],
        toyExample: {
          title: 'Hunting a Missing Number in 7 Cards',
          scenario:
            'Trace standard 3-way binary search in Python on 7 sorted cards `A = [10, 20, 30, 40, 50, 60, 70]` (indices `0..6`) searching for an absent target `45`:\n```python\ndef binary_search(A, target):\n    lo, hi = 0, len(A) - 1\n    while lo <= hi:\n        mid = (lo + hi) // 2\n        if A[mid] == target:\n            return mid\n        elif A[mid] < target:\n            lo = mid + 1\n        else:\n            hi = mid - 1\n    return -1\n```',
          walkthroughSteps: [
            '1. **Probe 1:** `lo = 0, hi = 6` $\\implies$ `mid = 3` (`A[3] = 40 < 45`). Left half `{0..3}` is eliminated; set `lo = 4`. Remaining window `[4..6]` has size $3$.',
            '2. **Probe 2:** `lo = 4, hi = 6` $\\implies$ `mid = 5` (`A[5] = 60 > 45`). Right half `{5..6}` is eliminated; set `hi = 4`. Remaining window `[4..4]` has size $1$.',
            '3. **Probe 3:** `lo = 4, hi = 4` $\\implies$ `mid = 4` (`A[4] = 50 > 45`). Set `hi = 3`. Now `lo > hi`, so the loop exits and returns `-1`.',
            '4. **Count Probes:** Even though $n = 7$ is not a power of 2, we made **3** 3-way comparisons (`<, ==, >`), matching $\\lfloor \\log_2 7 \\rfloor + 1 = 2 + 1 = 3$!',
          ],
          ahaMoment:
            'Look at how cleanly the recurrence appears: in 3-way binary search, the worst case happens on an **absent** key when each step sends you into the larger half of size at most $\\lfloor n/2 \\rfloor$, handing you the exact equation $F(n) = F(\\lfloor n/2 \\rfloor) + 1$ with $F(0) = 0$!',
        },
        theoremAndFormula: {
          statement:
            'On a **sorted random-access array** of $n \\ge 1$ distinct elements, standard 3-way binary search (comparing target to `A[mid]` once per step to branch `<`, `==`, or `>`) has worst-case comparison recurrence and closed-form count:',
          formulaLatex:
            'F(n) = F(\\lfloor n/2 \\rfloor) + 1, \\quad F(0)=0 \\implies F(n) = \\lfloor \\log_2 n \\rfloor + 1 = \\lceil \\log_2(n + 1) \\rceil',
          plainEnglishDecoding:
            'Watch the exact powers of $2$: every time $n$ crosses a power of $2$, the worst-case count steps up by $1$ ($n=1 \\to 1$; $n=2..3 \\to 2$; $n=4..7 \\to 3$; ... $n=512..1023 \\to 10$). And remember the crucial data-structure catch: **jumping to `A[mid]` in $O(1)$ demands contiguous array indexing**. On a sorted linked list, walking pointers to the midpoint costs $\\Theta(n + n/2 + n/4 + \\dots) = \\Theta(n)$!',
          workedMiniExamples: [
            {
              prompt: 'How many 3-way comparisons does binary search make in the worst case on $n = 1000$ distinct sorted integers when the target is absent? (GATE DA 2026 Q.31)',
              solution:
                'Compute $F(1000)$: $1000 \\to 500 \\to 250 \\to 125 \\to 62 \\to 31 \\to 15 \\to 7 \\to 3 \\to 1 \\to 0$ (10 steps). Or directly: $2^9 = 512 \\le 1000 < 1024 = 2^{10}$, so $\\lfloor \\log_2 1000 \\rfloor + 1 = 9 + 1 = 10$.',
            },
            {
              prompt: 'What is the time complexity of Binary Search on a sorted **doubly linked list**?',
              solution:
                'Still $\\Theta(n)$! Even with backward pointers, jumping directly to the middle element from `head` takes $\\Theta(n)$ hops on the first step alone.',
            },
          ],
        },
        sandboxId: 'sorting-search-lab',
        msqTraps: [
          {
            myth: 'An MSQ inside the MSQ section must have 2 or more correct options.',
            reality: 'In **GATE DA 2025 Q.27**, an official MSQ asked which inputs allow $O(\\log n)$ binary search—and **ONLY 1 option** (`Sorted Array`) was correct! Never force-tick a second option.',
            counterExample: 'GATE DA 2025 Q.27 (sorted array vs unsorted array vs sorted singly/doubly linked lists).',
          },
          {
            myth: 'Binary search on $n = 1000$ takes $\\lceil \\log_2 1000 \\rceil = 10$, wait—what about $n = 1024$?',
            reality: 'Be careful! $\\lceil \\log_2 1024 \\rceil = 10$, **but** $F(1024) = F(512) + 1 = 10 + 1 = 11$! Always use $\\lfloor \\log_2 n \\rfloor + 1 = \\lceil \\log_2(n+1) \\rceil$, NOT $\\lceil \\log_2 n \\rceil$.',
            counterExample: 'For $n = 4$: $\\lceil \\log_2 4 \\rceil = 2$, but $F(4) = F(2)+1 = F(1)+2 = 3 = \\lfloor \\log_2 4 \\rfloor + 1$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 5: DBMS',
            targetWeek: 6,
            topic: 'Binary Search Inside $B^+$ Tree Nodes',
            whyItMatters:
              'Inside each 4KB $B^+$ Tree disk block holding ~195 sorted keys, the DBMS runs in-memory binary search ($\\approx 8$ comparisons) to pick the next child pointer.',
            pyqProof: 'GATE DA 2026 · Q.32',
          },
        ],
      },
      {
        id: 'm9-c2-2',
        title: 'Elementary Sorts: Selection, Bubble & Insertion Sort Under the Microscope',
        subtitle: 'Exact passes, inversions = adjacent swaps, and early-exit comparison counts',
        priority: 'high-yield',
        buildsOn: 'Concept 2.1 array indexing & loop invariants',
        whyStudy:
          'Even though $O(n \\log n)$ algorithms dominate massive datasets, elementary $O(n^2)$ sorts remain essential in practice (Python’s Timsort switches to Insertion Sort on small chunks!) and are **perennial GATE DA favorites** (**2024 Q.45**, **2025 Q.29**, **2026 Q.49 & Q.58**). Why? Because pass-by-pass traces, swap counts, and stability tests immediately reveal whether you understand how data moves in memory. Learning one unifying law — *every adjacent swap eliminates exactly one inversion* — converts tedious nested-loop traces into 10-second arithmetic.',
        groundRules: [
          '**Every Adjacent Swap Removes Exactly ONE Inversion:** An **inversion** is any out-of-order pair `(i < j)` with `A[i] > A[j]`. Because both Insertion Sort and Bubble Sort only ever swap adjacent out-of-order elements (`A[k] > A[k + 1]`), their total swap count on *any* input is locked identically to the total inversion count $I_{\\text{inv}}$!',
          '**Selection Sort Minimizes Swaps ($\\le n - 1$) at the Cost of Adaptivity and Stability:** On pass `i`, Selection Sort scans the entire unsorted suffix `A[i..n-1]` unconditionally ($\\Theta(n^2)$ comparisons even on already-sorted inputs!) to swap the global minimum into `A[i]` in one long-distance jump — which can hop `A[i]` past an equal key and break stability.',
          '**Insertion Sort Stops Its Inner Scan Immediately When `A[j] <= key`:** On a sorted or nearly-sorted array, each new element checks only one neighbor (plus one comparison per inversion it crosses), running in $\\Theta(n + I_{\\text{inv}})$ time while preserving equal-key order (adaptive and stable!).',
          '**Early-Exit Bubble Sort Must Execute ONE Full Zero-Swap Verification Pass Before Stopping:** Even if Pass 1 fixes the last inversion with 1 swap, Bubble Sort’s `swapped` flag is `True`, forcing it to run Pass 2 across the remaining suffix (`n - 2` comparisons, `0` swaps) before it knows the array is sorted!',
        ],
        toyExample: {
          title: 'Sorting `[4, 3, 2, 1, 5]` in 2 Passes vs. `[1, 2, 3, 5, 4]`',
          scenario:
            'Run one pass each of Selection, Bubble, and Insertion Sort on `[4, 3, 2, 1, 5]` (**GATE DA 2024 Q.45**), and compare the inner logic of Insertion Sort vs. Early-Exit Bubble Sort:\n```python\n# Insertion Sort (slides A[i] left across larger items)\nfor i in range(1, n):\n    j = i\n    while j > 0 and A[j - 1] > A[j]:\n        A[j - 1], A[j] = A[j], A[j - 1]\n        j -= 1\n\n# Early-Exit Bubble Sort (stops only after a 0-swap pass)\nfor p in range(n - 1):\n    swapped = False\n    for j in range(n - 1 - p):\n        if A[j] > A[j + 1]:\n            A[j], A[j + 1] = A[j + 1], A[j]\n            swapped = True\n    if not swapped:\n        break\n```',
          walkthroughSteps: [
            '1. **Selection Sort on `[4, 3, 2, 1, 5]` (Find global min of unsorted suffix, 1 swap per pass):** Pass 1 swaps `4` and `1` $\\to$ `[1, 3, 2, 4, 5]`. Pass 2 swaps `3` and `2` $\\to$ `[1, 2, 3, 4, 5]`. **Sorted in 2 passes!**',
            '2. **Bubble Sort on `[4, 3, 2, 1, 5]` (Swap adjacent out-of-order pairs left-to-right):** Pass 1 bubbles `4` past `3, 2, 1` $\\to$ `[3, 2, 1, 4, 5]`. Pass 2 $\\to$ `[2, 1, 3, 4, 5]`. Pass 3 $\\to$ `[1, 2, 3, 4, 5]`. Needs **3 passes**.',
            '3. **Insertion Sort on `[4, 3, 2, 1, 5]` (Insert `A[i]` into sorted prefix `A[0..i-1]`):** `i = 1`: `[3, 4, 2, 1, 5]`; `i = 2`: `[2, 3, 4, 1, 5]`; `i = 3`: `[1, 2, 3, 4, 5]`. Needs **3 passes**.',
            '4. **Now check `[1, 2, 3, 5, 4]` (nearly sorted, 1 inversion):** Insertion sort makes `1 + 1 + 1 + 2 = 5` comparisons and `1` swap. Early-exit Bubble sort makes `4` comparisons + `1` swap on Pass 1, then MUST run Pass 2 (`3` comparisons, `0` swaps) to break = `7` comparisons!',
          ],
          ahaMoment:
            'Keep this golden shortcut right at your fingertips: every adjacent swap in Bubble Sort or Insertion Sort fixes **exactly one inversion** (a pair $i < j$ with $A[i] > A[j]$). That means on ANY input array, **Insertion Sort swaps = Bubble Sort swaps = total inversions in the array!**',
        },
        theoremAndFormula: {
          statement:
            'For an array $A[0..n-1]$ with $I_{\\text{inv}} = |\\{(i, j) : i < j \\text{ and } A[i] > A[j]\\}|$ inversions ($0 \\le I_{\\text{inv}} \\le \\frac{n(n-1)}{2}$):',
          formulaLatex:
            '\\text{Swaps}_{\\text{Insertion}} = \\text{Swaps}_{\\text{Bubble}} = I_{\\text{inv}}, \\qquad \\text{Comparisons}_{\\text{Insertion}} \\le I_{\\text{inv}} + (n - 1), \\qquad \\text{Swaps}_{\\text{Selection}} \\le n - 1',
          plainEnglishDecoding:
            'Compare the personalities of our three elementary sorts: Insertion Sort and early-exit Bubble Sort are both **adaptive** ($\\Theta(n)$ on already-sorted arrays) and **stable**. Selection Sort is **non-adaptive** (always $\\Theta(n^2)$ comparisons even when already sorted!) and **unstable** in-place (its long-range swap can flip equal keys), yet it shines whenever swaps are expensive because it makes at most $n - 1$ swaps total.',
          workedMiniExamples: [
            {
              prompt: 'For which $x \\in \\{10, 12, 14, 16\\}$ does Insertion Sort on `[1, 3, 5, 7, 9, 11, x, 15, 13]` perform **exactly 2 swaps**? (GATE DA 2025 Q.29)',
              solution:
                'Count inversions directly! Prefix `[1,3,5,7,9,11]` has 0 inversions. `15` vs `13` contributes **1 inversion** (`(15, 13)`). So `x` must contribute **1 inversion**: `x = 10` has `(11, 10)` (+1 = 2 total); `x = 12` has 0 (+0 = 1 total); `x = 14` has `(14, 13)` (+1 = 2 total); `x = 16` has `(16, 15)` and `(16, 13)` (+2 = 3 total). Answer: `10` and `14`!',
            },
            {
              prompt: 'How many total adjacent swaps does Bubble Sort perform on `[5, 3, 4, 1, 2]`? (GATE DA 2026 Q.58)',
              solution:
                'Simply count inversions: `5` beats `3,4,1,2` (4); `3` beats `1,2` (2); `4` beats `1,2` (2); `1` beats none (0). Total $= 4 + 2 + 2 = 8$ swaps!',
            },
          ],
        },
        sandboxId: 'sorting-search-lab',
        msqTraps: [
          {
            myth: 'Insertion Sort and Bubble Sort always perform the same number of **comparisons** on a nearly-sorted array.',
            reality: 'They perform the same number of **swaps** ($= I_{\\text{inv}}$), NOT comparisons! Insertion sort checks one neighbor to stop (`n-1` best-case), whereas Bubble sort scans the entire remaining suffix at least once ($n-1$ comparisons just on Pass 1, plus $n-2$ on Pass 2 if Pass 1 made a swap).',
            counterExample: 'On `[1, 2, 3, 5, 4]`, Insertion uses $5$ comparisons; early-exit Bubble uses $4 + 3 = 7$ comparisons (GATE DA 2026 Q.49).',
          },
          {
            myth: 'Selection Sort is stable because it only swaps when `A[j] < A[min]`.',
            reality: 'Swapping `A[i]` with `A[min]` jumps `A[i]` across unsorted elements, flipping equal keys.',
            counterExample: 'On `[2_a, 2_b, 1]`, Pass 1 swaps `2_a` with `1`, producing `[1, 2_b, 2_a]` — `2_b` now precedes `2_a`!',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'Chapter 3 Mergesort $O(n \\log n)$ Inversion Counting',
            whyItMatters:
              'Adjacent-swap sorts take $\\Theta(n + I_{\\text{inv}})$ time. Next chapter, Mergesort computes the exact same $I_{\\text{inv}}$ count in $O(n \\log n)$ even when $I_{\\text{inv}} = \\Theta(n^2)$!',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm9-c2-ht1',
        title: 'Counting Insertion/Bubble Swaps Instantly via Inversion Counting',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2025 · Q.29 (1M MSQ)', 'GATE DA 2026 · Q.58 (2M NAT)'],
        problemStatement:
          'Find all parameter values $x$ (or total swaps) when running Insertion Sort or Bubble Sort on an array like `[1, 3, 5, 7, 9, 11, x, 15, 13]` or `[5, 3, 4, 1, 2]`.',
        triggerCue:
          'Question asks for **exact swap count** of Insertion Sort or Bubble Sort (or a recursive adjacent-swap loop).',
        bruteForceTrap:
          'Simulating the full nested loop 4 separate times for each candidate value of $x$—slow and prone to indexing slips.',
        mentalShift:
          'Ignore the algorithm mechanics completely! Every swap removes **1 inversion**. Simply count pairs $(a, b)$ with $a$ appearing before $b$ and $a > b$.',
        steps: [
          {
            label: 'Step 1: Count fixed inversions ignoring `x`',
            detail: 'In `[1,3,5,7,9,11, x, 15,13]`, the only fixed inversion is `(15, 13)` = `1` swap.',
          },
          {
            label: 'Step 2: Count how many elements to the LEFT of `x` are $> x$, plus elements to the RIGHT of `x` that are $< x$',
            detail:
              'We need $+1$ extra inversion to hit $2$ total. For `x=10`: `11 > 10` (+1 left, 0 right) $\\implies 2$. For `x=14`: `14 > 13` (0 left, +1 right) $\\implies 2$.',
          },
        ],
        lockInTakeaway:
          '**Swaps(Insertion) = Swaps(Bubble) = Inversions.** Always convert swap-counting questions into pair-counting!',
      },
      {
        id: 'm9-c2-ht2',
        title: 'Zero-Off-by-One Binary Search Bounds via Power-of-2 Halving',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2024 · Q.40 (2M MCQ)', 'GATE DA 2026 · Q.31 (1M NAT)'],
        problemStatement:
          'Compute the exact worst-case 3-way comparisons of recursive binary search on $n$ elements (e.g., $n = 1000$, or $n = 1024$).',
        triggerCue:
          'Question specifies **3-way comparisons** (`<, ==, >` in one probe) and asks for **maximum comparisons** on $n$ sorted distinct keys.',
        bruteForceTrap:
          'Guessing between `floor(log2(n))`, `ceil(log2(n))`, and `floor(log2(n)) + 1` from memory.',
        mentalShift:
          'Anchor at $n = 1$ ($F(1) = 1$) and double! Any $n$ in $[2^k, 2^{k+1}-1]$ halves down to $n=1$ in $k$ steps, plus $1$ comparison at $n=1$, giving $k + 1$.',
        steps: [
          {
            label: 'Step 1: Bracket $n$ between consecutive powers of 2',
            detail: 'For $n = 1000$: $2^9 = 512 \\le 1000 < 1024 = 2^{10}$, so $k = 9$.',
          },
          {
            label: 'Step 2: Add 1 for the final single-element check',
            detail: '$k + 1 = 9 + 1 = 10$ comparisons. (Notice for $n = 1024$, $2^{10} \\le 1024 < 2^{11}$, so $k = 10 \\implies 11$ comparisons!)',
          },
        ],
        lockInTakeaway:
          'Anchor on $F(1) = 1$ and check $[2^k, 2^{k+1}-1] \\mapsto k + 1$. Zero off-by-one ambiguity.',
      },
    ],
    arsenalCards: [
      {
        id: 'm9-c2-a1',
        badge: 'Binary Search',
        whenYouSpot: 'Worst-case 3-way comparisons of Binary Search on $n$ sorted elements, or data-structure eligibility',
        directWeaponLatex: 'F(n) = F(\\lfloor n/2 \\rfloor) + 1 = \\lfloor \\log_2 n \\rfloor + 1, \\qquad O(\\log n) \\iff \\text{Random Access}',
        instantRule:
          'Bracket $2^k \\le n < 2^{k+1} \\implies$ answer is $k + 1$. Binary search is $O(\\log n)$ ONLY on sorted arrays (linked lists take $\\Theta(n)$).',
        tenSecondExample: '$n = 1000 \\implies 512 \\le 1000 < 1024 \\implies 9 + 1 = 10$ comparisons.',
        oneFatalTrap: 'Writing $\\lceil \\log_2 n \\rceil$ instead of $\\lfloor \\log_2 n \\rfloor + 1$ (wrong at exact powers of 2 like $n=4, 8, 1024$).',
      },
      {
        id: 'm9-c2-a2',
        badge: 'Swap = Inversion',
        whenYouSpot: 'Number of swaps performed by Insertion Sort or Bubble Sort (or recursive adjacent-swap trace)',
        directWeaponLatex: '\\text{Swaps}_{\\text{Insertion}} = \\text{Swaps}_{\\text{Bubble}} = \\sum_{i < j} \\mathbf{1}[A[i] > A[j]]',
        instantRule:
          'Never trace every loop iteration just to count swaps—count inversions $(i < j, A[i] > A[j])$ directly.',
        tenSecondExample: '`[5, 3, 4, 1, 2]` has $4 + 2 + 2 = 8$ inversions $\\implies 8$ adjacent swaps.',
        oneFatalTrap: 'Thinking Selection Sort swaps also equal inversions; Selection Sort uses at most $n - 1$ swaps total.',
      },
      {
        id: 'm9-c2-a3',
        badge: 'Pass-by-Pass',
        whenYouSpot: 'Which elementary sort finishes in $k$ passes, or exact comparison counts on near-sorted inputs',
        directWeaponLatex: '\\text{Pass } k: \\text{Selection locks } k\\text{-th min};\\; \\text{Insertion sorts } A[0..k];\\; \\text{Bubble locks } k\\text{-th max}',
        instantRule:
          'Selection shines on few out-of-place prefixes via long jumps; Insertion beats Bubble in comparisons on nearly-sorted arrays ($n-1+I_{\\text{inv}}$ vs extra verification pass).',
        tenSecondExample: '`[4,3,2,1,5]` needs 2 passes in Selection (`1` then `2`), 3 in Bubble & Insertion.',
        oneFatalTrap: 'Forgetting the final zero-swap verification pass in early-exit Bubble Sort when counting comparisons.',
      },
    ],
    questions: [
      {
        id: 'm9-c2-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1',
        marks: 1,
        type: 'NAT',
        stem: 'What is the maximum number of 3-way comparisons performed by standard binary search on a sorted array of $n = 63$ distinct integers?',
        natAnswer: { min: 6, max: 6, exactDisplay: '6' },
        triggerHint: 'Bracket $63$ between consecutive powers of $2$.',
        intuitiveSolution: [
          'Since $2^5 = 32 \\le 63 < 64 = 2^6$, we have $\\lfloor \\log_2 63 \\rfloor = 5$.',
          'Worst-case 3-way comparisons $= 5 + 1 = 6$.',
        ],
        directShortcutUsed: '$F(n) = \\lfloor \\log_2 n \\rfloor + 1$.',
      },
      {
        id: 'm9-c2-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.40',
        year: 2024,
        marks: 2,
        type: 'MCQ',
        stem: 'Which of the following recurrences correctly represents the worst-case number of comparisons $F(n)$ made by binary search on a sorted array of $n$ elements?',
        options: [
          {
            id: 'A',
            text: '$F(n) = F(\\lfloor n/2 \\rfloor) + 1$',
            whyTrueOrFalse: 'True: Each probe makes 1 comparison and discards at least half the array, leaving at most $\\lfloor n/2 \\rfloor$ elements.',
          },
          {
            id: 'B',
            text: '$F(n) = 2F(\\lfloor n/2 \\rfloor) + 1$',
            whyTrueOrFalse: 'False: Binary search recurses on only ONE half, not both halves.',
          },
          {
            id: 'C',
            text: '$F(n) = F(n - 1) + 1$',
            whyTrueOrFalse: 'False: That is linear search, not binary search.',
          },
          {
            id: 'D',
            text: '$F(n) = F(\\lceil n/2 \\rceil) + n$',
            whyTrueOrFalse: 'False: Each step does $O(1)$ comparison work, not $O(n)$ work, and $n=1$ would loop on $\\lceil 1/2 \\rceil = 1$.',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'One probe, one recursive half of size at most $\\lfloor n/2 \\rfloor$.',
        intuitiveSolution: [
          'After comparing the target with `A[mid]`, binary search either terminates or recurses on one subarray of size $\\lfloor (n-1)/2 \\rfloor$ or $\\lfloor n/2 \\rfloor$.',
          'Taking the larger half gives the worst-case recurrence $F(n) = F(\\lfloor n/2 \\rfloor) + 1$.',
        ],
        directShortcutUsed: '1 probe + 1 subproblem of size $\\lfloor n/2 \\rfloor$.',
      },
      {
        id: 'm9-c2-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.27 (Adapted)',
        year: 2025,
        marks: 1,
        type: 'MSQ',
        stem: 'On which of the following data structures can standard Binary Search determine whether a key exists in $O(\\log n)$ worst-case time?',
        options: [
          {
            id: 'A',
            text: 'An unsorted array of $n$ integers',
            whyTrueOrFalse: 'False: Binary search is invalid without sorted order.',
          },
          {
            id: 'B',
            text: 'A sorted singly linked list of $n$ integers',
            whyTrueOrFalse: 'False: Finding the middle node takes $\\Theta(n)$ pointer hops, making total time $\\Theta(n)$.',
          },
          {
            id: 'C',
            text: 'A sorted contiguous array of $n$ integers',
            whyTrueOrFalse: 'True: Sorted order + $O(1)$ random access at `A[mid]` achieves $O(\\log n)$ worst-case time.',
          },
          {
            id: 'D',
            text: 'A sorted doubly linked list of $n$ integers',
            whyTrueOrFalse: 'False: Backward pointers still cannot jump to the midpoint in $O(1)$, so worst-case time remains $\\Theta(n)$.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Recall that an MSQ in GATE DA can have **exactly one** correct option! Check $O(1)$ random access.',
        intuitiveSolution: [
          'Binary search requires TWO properties: (1) sorted order, and (2) $O(1)$ random access to `A[mid]`.',
          'Both singly and doubly linked lists require $\\Theta(n)$ time just to reach the middle node on the first step, so only C runs in $O(\\log n)$.',
        ],
        directShortcutUsed: '$O(\\log n)$ binary search = Sorted + $O(1)$ Random Access (single-option MSQ!).',
      },
      {
        id: 'm9-c2-q4',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.31',
        year: 2026,
        marks: 1,
        type: 'NAT',
        stem: 'Consider recursive binary search on a sorted array of $1000$ distinct integers using a single 3-way comparison (`<, ==, >`) per recursive call. If the target integer is **not** in the array, what is the maximum number of 3-way comparisons performed?',
        natAnswer: { min: 10, max: 10, exactDisplay: '10' },
        triggerHint: 'Apply $F(1000) = \\lfloor \\log_2 1000 \\rfloor + 1$.',
        intuitiveSolution: [
          'Trace worst-case subarray sizes: $1000 \\to 500 \\to 250 \\to 125 \\to 62 \\to 31 \\to 15 \\to 7 \\to 3 \\to 1 \\to 0$.',
          'Counting the non-zero calls gives $10$ comparisons (equivalently $2^9 = 512 \\le 1000 < 1024 = 2^{10} \\implies 9 + 1 = 10$).',
        ],
        directShortcutUsed: '$2^9 \\le 1000 < 2^{10} \\implies 9 + 1 = 10$.',
      },
      {
        id: 'm9-c2-q5',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2025 · Q.29',
        year: 2025,
        marks: 1,
        type: 'MSQ',
        stem: 'Consider running standard Insertion Sort (swapping adjacent out-of-order elements as each item moves left into its sorted position) on the array `[1, 3, 5, 7, 9, 11, x, 15, 13]`. For which of the following values of $x$ does Insertion Sort perform **exactly 2 swaps** in total?',
        options: [
          {
            id: 'A',
            text: '$x = 10$',
            whyTrueOrFalse: 'True: `10` swaps past `11` (1 swap), and later `13` swaps past `15` (1 swap) = 2 swaps total.',
          },
          {
            id: 'B',
            text: '$x = 12$',
            whyTrueOrFalse: 'False: `12` needs 0 swaps, and `13` swaps past `15` (1 swap) = 1 swap total.',
          },
          {
            id: 'C',
            text: '$x = 14$',
            whyTrueOrFalse: 'True: `14` needs 0 swaps when inserted, then `13` swaps past `15` and `14` (2 swaps) = 2 swaps total.',
          },
          {
            id: 'D',
            text: '$x = 16$',
            whyTrueOrFalse: 'False: `15` swaps past `16` (1 swap), then `13` swaps past `16` and `15` (2 swaps) = 3 swaps total.',
          },
        ],
        correctOptions: ['A', 'C'],
        triggerHint: 'Count inversions! `(15, 13)` already gives 1 swap, so `x` must create exactly 1 more inversion.',
        intuitiveSolution: [
          'Total swaps in Insertion Sort equals the total number of inversions in the array.',
          'Without `x`, `(15, 13)` is 1 fixed inversion. We need `x` to form exactly 1 additional inversion with `{1,3,5,7,9,11,15,13}`.',
          'Checking options: $x=10$ creates `(11, 10)` (+1 $\\to 2$); $x=12$ creates 0 (+0 $\\to 1$); $x=14$ creates `(14, 13)` (+1 $\\to 2$); $x=16$ creates `(16, 15)` and `(16, 13)` (+2 $\\to 3$). Thus A and C.',
        ],
        directShortcutUsed: 'Insertion Sort swaps = Total inversions.',
      },
      {
        id: 'm9-c2-q6',
        tier: 'tricky',
        sourceLabel: 'GATE DA 2026 · Q.49 (Adapted)',
        year: 2026,
        marks: 2,
        type: 'MSQ',
        stem: 'Compare **Insertion Sort** and **early-exit Bubble Sort** (which terminates as soon as a pass performs $0$ swaps) on the input array `[1, 2, 3, 5, 4]`. Which of the following statements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'Both algorithms perform exactly $1$ element swap.',
            whyTrueOrFalse: 'True: The array has exactly $1$ inversion (`(5, 4)`), so both adjacent-swap sorts perform $1$ swap.',
          },
          {
            id: 'B',
            text: 'Insertion Sort performs strictly fewer element comparisons than early-exit Bubble Sort.',
            whyTrueOrFalse: 'True: Insertion Sort makes $1+1+1+2 = 5$ comparisons, whereas Bubble Sort makes $4$ comparisons in Pass 1 (1 swap) plus $3$ comparisons in Pass 2 (0 swaps) = $7$ comparisons.',
          },
          {
            id: 'C',
            text: 'Early-exit Bubble Sort terminates after just $1$ pass because no elements remain out of order after Pass 1.',
            whyTrueOrFalse: 'False: Pass 1 performed $1$ swap, so the early-exit flag is `True`; Bubble Sort MUST run Pass 2 to discover $0$ swaps before halting.',
          },
          {
            id: 'D',
            text: 'Selection Sort on `[1, 2, 3, 5, 4]` makes fewer comparisons than Insertion Sort.',
            whyTrueOrFalse: 'False: Selection Sort always makes $4+3+2+1 = 10$ comparisons regardless of input order.',
          },
        ],
        correctOptions: ['A', 'B'],
        triggerHint: 'Count comparisons carefully, and remember early-exit Bubble Sort cannot stop on the pass where it made a swap!',
        intuitiveSolution: [
          'There is only 1 inversion `(5, 4)`, so both Insertion Sort and Bubble Sort perform 1 swap (A is true).',
          'Insertion Sort checks `2<1` (1), `3<2` (1), `5<3` (1), then `4<5` (swap) and `4<3` (stop) = $5$ comparisons.',
          'Early-exit Bubble Sort makes $4$ comparisons in Pass 1 (swapping `5,4`), then MUST run Pass 2 ($3$ comparisons, $0$ swaps) to verify sortedness = $7$ comparisons (B is true, C is false). Selection Sort always makes $\\binom{5}{2} = 10$ comparisons (D is false).',
        ],
        directShortcutUsed: 'Pass-by-pass comparison count + Bubble Sort verification pass rule.',
      },
    ],
  },
  {
    id: 'pds2-ch3',
    number: 3,
    title: 'Divide-and-Conquer Sorting: Mergesort Inversions, Quicksort Partitions & Stability',
    shortTitle: 'Mergesort, Quicksort & Stability',
    estimatedHours: 3.5,
    dayLabel: 'Week 4 · Day 3',
    tagline:
      'Now let us break past the $O(n^2)$ barrier with Divide-and-Conquer! Together we will see how Mergesort counts inversions in $O(n \\log n)$ in batches, trace how Quicksort partitions flip equal keys and stall on sorted arrays, and lock down the decision-tree lower bound and complete sorting matrix.',
    syllabusMapping: [
      'Mergesort: divide-and-conquer recurrence, $O(n)$ merge space, stability, and $O(n \\log n)$ inversion counting',
      'Quicksort: Lomuto/Hoare partition traces, best/average/worst recurrences, in-place stack space, instability',
      'Comparison-sorting lower bound $\\Omega(n \\log n)$ and Stability taxonomy across all algorithms',
    ],
    whatIsImportant: [
      'Quicksort expected-time recurrence $T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)] + O(n)$ (GATE DA 2026 Q.15) and worst-case $\\Theta(n^2)$ on sorted/all-equal inputs',
      'In-place Quicksort swap count on already-sorted arrays (GATE DA 2024 Q.30 = 0 swaps) and why Quicksort is **unstable**',
      'Mergesort **Sleeping Giant**: untested in 2024–2026, prime target for 2027! Exact cross-inversion formula `(mid - i + 1)` when `R[j] < L[i]`',
      'Comparison-based sorting lower bound via decision tree: height $\\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$',
    ],
    whatIsNotImportant: [
      'Linear-time non-comparison sorts (Counting, Radix, Bucket sort) and Median-of-Medians deterministic $O(n)$ pivot proof (BFPRT)',
      'Introsort / Timsort implementation internals and external multi-way tape merging',
    ],
    inboundStream:
      'Chapter 2 inversion counting + Module 8 recursion trees and recurrence solving.',
    outboundStream: [
      'Module 16/17 Asymptotic synthesis & algorithm selection trade-offs (time vs. auxiliary space vs. stability)',
    ],
    glossary: [
      {
        term: 'Divide-and-Conquer',
        symbol: '$\\text{Split} \\to \\text{Recurse} \\to \\text{Combine}$',
        plainEnglish:
          'A classic three-step algorithm blueprint: split a big array into smaller subproblems, sort each subproblem recursively, and combine the pieces cleanly (as in Mergesort and Quicksort).',
        tinyExample: 'Mergesort divides in $O(1)$ and combines in $\\Theta(n)$, while Quicksort partitions in $\\Theta(n)$ and combines in $O(1)$.',
      },
      {
        term: 'Mergesort',
        symbol: '$T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\log n)$',
        plainEnglish:
          'Mergesort always cuts the array straight down the middle, sorts both halves recursively, and zips them back together in a single linear pass — guaranteeing $\\Theta(n \\log n)$ in best, average, AND worst cases.',
        tinyExample: 'Merging two sorted 4-item halves takes between $4$ (best) and $4 + 4 - 1 = 7$ (worst) comparisons.',
      },
      {
        term: 'Cross-Inversion Batch Count',
        symbol: '$\\text{inv} \\mathrel{+}= (\\text{mid} - i + 1)$',
        plainEnglish:
          'While merging sorted `L` and `R`, whenever `R[j] < L[i]`, you know `R[j]` is smaller than `L[i]` AND every element after `L[i]` in `L` — letting you count an entire batch of inversions in one $O(1)$ subtraction!',
        tinyExample: 'Merging `L = [3, 4, 5]` and `R = [1, 2]`: `1 < 3` adds $+3$ and `2 < 3` adds $+3$ ($6$ cross-inversions).',
      },
      {
        term: 'Auxiliary Space vs. In-Place Sort',
        symbol: '$O(n) \\text{ vs. } O(\\log n)\\text{ stack}$',
        plainEnglish:
          'Standard array Mergesort needs an $O(n)$ temporary scratch array during `merge()`, so it is NOT in-place; in-place Quicksort uses zero scratch array, needing only $O(\\log n)$ average (or $O(n)$ worst-case) call-stack frames.',
        tinyExample: 'Do not say Mergesort uses $O(\\log n)$ extra space — its merge scratch buffer always takes $\\Theta(n)$!',
      },
      {
        term: 'Quicksort & Pivot',
        symbol: '$T(k) + T(n - k - 1) + \\Theta(n)$',
        plainEnglish:
          'Quicksort picks one element as the **pivot**, rearranges the array so smaller items sit on the pivot’s left and larger items on its right, and then recursively sorts the two sides of sizes $k$ and $n - k - 1$.',
        tinyExample: 'With last-element pivot on already-sorted `[60, 70, 80, 90, 100]`, every split is $(n-1, 0)$ — $\\Theta(n^2)$ time yet $0$ swaps!',
      },
      {
        term: 'Partitioning (Lomuto / Hoare)',
        symbol: '$\\Theta(n)\\text{ in-place pass}$',
        plainEnglish:
          'Partitioning is the linear-time subroutine inside Quicksort that sweeps pointers across the subarray to place the pivot in its exact final sorted home — and its long-range swaps are what make in-place Quicksort **unstable**.',
        tinyExample: 'Lomuto partition on `[4_a, 4_b, 1]` around pivot `1` swaps `4_a` and `1` into `[1, 4_b, 4_a]`.',
      },
      {
        term: 'Randomized Quicksort',
        symbol: '$T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)] + \\Theta(n)$',
        plainEnglish:
          'Picking the pivot uniformly at random defeats adversarial sorted inputs: each rank $k \\in \\{0,\\dots,n-1\\}$ occurs with probability $1/n$, guaranteeing $\\Theta(n \\log n)$ expected time on EVERY input.',
        tinyExample: 'Even a constant $1:9$ split at every level still stays $\\Theta(n \\log n)$!',
      },
      {
        term: 'Stable Sort (Tie-Breaking Rule)',
        symbol: '$\\texttt{L[i] <= R[j]} \\implies \\text{pick } \\texttt{L[i]}$',
        plainEnglish:
          'A sorting algorithm stays stable when equal keys preserve their original left-to-right order; in Mergesort, choosing the left element on ties (`<=`) guarantees stability, while strict `<` would break it.',
        tinyExample: 'Among the 5 core GATE DA sorts, only **Mergesort** is simultaneously comparison-based, stable, and $O(n \\log n)$ worst-case.',
      },
      {
        term: 'Comparison Decision Tree',
        symbol: '$L \\ge n! \\implies 2^H \\ge n!$',
        plainEnglish:
          'Think of any pairwise comparison sort as a giant binary game of 20 Questions where each node asks `a < b?` and each of the $n!$ input orderings must end up at its own unique leaf.',
        tinyExample: 'For $n = 3$ ($3! = 6$ permutations), $2^H \\ge 6$ forces tree height $H \\ge 3$ comparisons.',
      },
      {
        term: 'Comparison Sorting Lower Bound',
        symbol: '$H_{\\min}(n) \\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$',
        plainEnglish:
          'Because a binary tree with at least $n!$ leaves must have height at least $\\lceil \\log_2(n!) \\rceil$, NO comparison-based sorting algorithm — deterministic or randomized — can ever beat $\\Omega(n \\log n)$ worst-case comparisons.',
        tinyExample: 'For $n = 5$ ($5! = 120$), since $2^6 = 64 < 120 \\le 128 = 2^7$, at least $7$ worst-case comparisons are mandatory.',
      },
    ],
    generatorId: 'sort-swaps-gen',
    concepts: [
      {
        id: 'm9-c3-1',
        title: 'Mergesort & Counting Inversions in $O(n \\log n)$',
        subtitle: 'Why merging two sorted halves counts huge batches of inversions in a single subtraction',
        priority: 'sleeping-giant',
        buildsOn: 'Chapter 2 inversion definition & divide-and-conquer recursion',
        whyStudy:
          'Counting out-of-order pairs (**inversions**) measures how scrambled an array is — and in Data Science, it directly computes **Kendall’s $\\tau$ rank correlation** between two recommendation lists. Checking pairs with Insertion or Bubble Sort costs $O(n^2)$ time (nearly a trillion steps for $n = 10^6$!). **Mergesort** smashes the $O(n^2)$ wall with guaranteed $\\Theta(n \\log n)$ worst-case sorting *and* counts all inversions in bulk during `merge()` for free — making it both a real-world sorting standard and a prime **2027 GATE DA Sleeping Giant**.',
        groundRules: [
          '**Mergesort Cuts Blindly in the Middle ($O(1)$ Split) and Does All Ordering During Linear `merge` ($\\Theta(n)$ Combine):** Because every split produces exact halves of sizes $\\lfloor n/2 \\rfloor$ and $\\lceil n/2 \\rceil$ regardless of input order, its recursion tree is ALWAYS balanced of depth $\\lceil \\log_2 n \\rceil$ — locking in $\\Theta(n \\log n)$ in best, average, AND worst cases.',
          '**Standard Array Mergesort Needs $\\Theta(n)$ Auxiliary Scratch Space:** Zipping two sorted halves of an array cleanly together requires a temporary scratch buffer of size $n$ (in addition to $O(\\log n)$ call-stack frames), so standard array Mergesort is **not** in-place.',
          '**Tie-Breaking With `L[i] <= R[j]` Guarantees Stability:** Every item in `L` originally sat strictly to the left of every item in `R`. Choosing `L[i]` on ties (`<=`) preserves arrival order (100% stable); writing strict `<` would jump `R[j]` ahead of an equal key in `L` and break stability!',
          '**Whenever `R[j] < L[i]`, Sortedness of `L` Counts an Entire Batch of `len(L) - i` Inversions in $O(1)$:** Because `L` is already sorted ascending (`L[i] <= L[i+1] <= ...`), finding `R[j] < L[i]` guarantees `R[j]` is smaller than `L[i]` AND every remaining element after `i` in `L` — counting the entire batch in one subtraction!',
        ],
        toyExample: {
          title: 'Merging `L = [3, 4, 5]` and `R = [1, 2]` (The Exact Array from GATE 2026 Q.58)',
          scenario:
            'In Chapter 2, we saw `[5, 3, 4, 1, 2]` has $8$ inversions. Let Mergesort split it into `[5, 3, 4]` ($2$ internal inversions) and `[1, 2]` ($0$ internal inversions), sort both halves to `L = [3, 4, 5]` and `R = [1, 2]`, and now trace `merge_count(L, R)`:\n```python\ndef merge_count(L, R):\n    merged, inv = [], 0\n    i = j = 0\n    while i < len(L) and j < len(R):\n        if L[i] <= R[j]:          # <= keeps Mergesort STABLE!\n            merged.append(L[i])\n            i += 1\n        else:                     # R[j] < L[i]: beats ALL of L[i:]!\n            merged.append(R[j])\n            inv += len(L) - i     # O(1) batch count of cross-inversions\n            j += 1\n    merged.extend(L[i:])\n    merged.extend(R[j:])\n    return merged, inv\n```',
          walkthroughSteps: [
            '1. **Compare `L[0] = 3` and `R[0] = 1`:** Since `1 < 3`, `1` is smaller than `3` **and automatically smaller than everything after `3` in sorted `L`** (`4` and `5`)!',
            '2. **Batch Count:** Output `1`, advance `j` to `1`, and add `len(L) - i = 3 - 0 = 3` cross-inversions in one $O(1)$ step.',
            '3. **Compare `L[0] = 3` and `R[1] = 2`:** Since `2 < 3`, output `2`, advance `j` to `2`, and add `3 - 0 = 3` more cross-inversions.',
            '4. **Drain `L`:** `3, 4, 5` copy out with $0$ extra inversions. Grand total $= 2 + 0 + 3 + 3 = 8$ inversions—computed in $O(n \\log n)$ instead of $O(n^2)$!',
          ],
          ahaMoment:
            'Look at why Mergesort is so clever here: because `L` and `R` are already sorted, the instant `R[j] < L[i]` you do NOT count inversions one by one — you know `R[j]` jumps ahead of **every remaining element** `L[i..mid]`, adding `(mid - i + 1)` inversions in one $O(1)$ step! And breaking ties in favor of the left half (`L[i] <= R[j]`) keeps Mergesort **100% stable**.',
        },
        theoremAndFormula: {
          statement:
            'Mergesort splits $A[0..n-1]$ into two halves of size $\\lfloor n/2 \\rfloor$ and $\\lceil n/2 \\rceil$, recursively sorts both, and merges in $\\Theta(n)$ auxiliary space. Its running time is **invariant** to input order (best = average = worst):',
          formulaLatex:
            'T(n) = 2T(n/2) + \\Theta(n) = \\Theta(n \\log n), \\qquad \\text{CrossInversions} \\mathrel{+}= (\\text{mid} - i + 1) \\text{ whenever } R[j] < L[i]',
          plainEnglishDecoding:
            'Keep two exam details firmly in mind: first, standard array Mergesort is **not in-place** — it needs an $O(n)$ scratch buffer during `merge()` (alongside its $O(\\log n)$ call stack). Second, to keep equal keys in order (**stability**), always write `L[i] <= R[j]` (pick the left half on ties), never strict `L[i] < R[j]`.',
          workedMiniExamples: [
            {
              prompt: 'How many cross-inversions are counted when merging `L = [2, 5, 8, 12]` and `R = [1, 4, 9, 10]`?',
              solution:
                '`1 < 2` adds `4` (`2,5,8,12`); `2` copies; `4 < 5` adds `3` (`5,8,12`); `5, 8` copy; `9 < 12` adds `1`; `10 < 12` adds `1`. Total cross-inversions $= 4 + 3 + 1 + 1 = 9$.',
            },
            {
              prompt: 'How many comparisons does Mergesort make to merge two sorted arrays of size $4$ and $4$ in the **best** vs. **worst** case?',
              solution:
                'Best case: all 4 elements of `L` are smaller than `R[0]`, emptying `L` in just $4$ comparisons. Worst case: elements interleave (`1,3,5,7` and `2,4,6,8`), stopping one element before the end in $4 + 4 - 1 = 7$ comparisons.',
            },
          ],
        },
        sandboxId: 'sorting-search-lab',
        msqTraps: [
          {
            myth: 'Mergesort uses $O(\\log n)$ total extra space because the recursion tree has depth $\\log_2 n$.',
            reality: 'Standard array Mergesort allocates an $O(n)$ temporary buffer during `merge()`, so auxiliary space is $\\Theta(n)$, NOT $O(\\log n)$!',
            counterExample: 'Merging two halves of size $n/2$ needs an $n$-element scratch array.',
          },
          {
            myth: 'When merging `L` and `R` of sizes $m$ and $k$, the worst-case number of comparisons is $m \\times k$.',
            reality: 'Each comparison outputs at least 1 element into the merged result, and the last remaining tail copies without comparing, so worst-case merge comparisons $= m + k - 1$ (linear, never quadratic!).',
            counterExample: 'Two sorted arrays of size $4$ take at most $4 + 4 - 1 = 7$ comparisons.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 4: PDSA',
            targetWeek: 4,
            topic: 'Divide-and-Conquer Rank Correlation & Kendall Tau Distance',
            whyItMatters:
              'Counting inversions via Mergesort is literally how ranking systems compute Kendall-tau rank correlation between two preference lists in $O(n \\log n)$ time.',
          },
        ],
      },
      {
        id: 'm9-c3-2',
        title: 'Quicksort: Partitions, Random Pivot Recurrence & Why It Is Unstable',
        subtitle: 'Expected O(n log n) elegance vs. O(n²) sorted-array collapse and long-range key flipping',
        priority: 'core-pillar',
        buildsOn: 'Concept 3.1 divide-and-conquer recurrences',
        whyStudy:
          'Mergesort guarantees $\\Theta(n \\log n)$, yet it allocates an extra $O(n)$ scratch array on every sort. **Quicksort** flips divide-and-conquer around: instead of merging afterward, it locks one **pivot** into its exact final sorted home *before* recursing — sorting in-place with great cache speed. That speed comes with two famous caveats tested in **GATE DA 2024 Q.30** and **GATE DA 2026 Q.15**: a fixed pivot stalls to $\\Theta(n^2)$ on already-sorted or all-equal arrays (even while making $0$ swaps!), and long-range swaps make it unstable. Tracing Lomuto partition once makes every Quicksort behavior obvious.',
        groundRules: [
          '**Partitioning Places One Pivot Into Its Exact Final Rank $k$ in $\\Theta(n)$ In-Place Work:** After one linear sweep, all $k$ keys $\\le \\text{pivot}$ sit to its left, all $n - k - 1$ keys $> \\text{pivot}$ sit to its right, and the pivot itself never moves again — leaving subproblems of sizes $k$ and $n - k - 1$.',
          '**Deterministic First/Last Pivots Turn Sorted (and All-Equal) Inputs Into $\\Theta(n^2)$ Worst Case:** If the pivot always lands at an extreme end, every split has sizes `(n - 1, 0)`, giving $T(n) = T(n - 1) + \\Theta(n) = \\Theta(n^2)$ comparisons — even if skipping `i == j` self-swaps performs **$0$ swaps**!',
          '**Uniform Random Pivot Selection Guarantees $\\Theta(n \\log n)$ Expected Time on Every Input:** Choosing the pivot uniformly at random makes every rank $k \\in \\{0, \\dots, n-1\\}$ occur with probability $1/n$, producing $T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k) + T(n - k - 1)] + \\Theta(n) = \\Theta(n \\log n)$ regardless of input order!',
          '**In-Place Quicksort Is Unstable and Still Uses Call-Stack Space (NOT $O(1)$ Total Space):** Long-range swaps can flip equal keys (`[4_a, 4_b, 1] -> [1, 4_b, 4_a]`), and recursive calls still require $O(\\log n)$ average ($O(n)$ worst-case) stack frames.',
        ],
        toyExample: {
          title: 'Tracing Lomuto Partition on `[4_a, 4_b, 1]` (Stability Failure) vs. `[60, 70, 80, 90, 100]`',
          scenario:
            'Trace CLRS Lomuto partition picking the **last element** as pivot (skipping self-swaps when `i == j`):\n```python\ndef lomuto_partition(A, lo, hi):\n    pivot = A[hi]\n    i = lo - 1\n    for j in range(lo, hi):\n        if A[j] <= pivot:\n            i += 1\n            if i != j:\n                A[i], A[j] = A[j], A[i]\n    if i + 1 != hi:\n        A[i + 1], A[hi] = A[hi], A[i + 1]\n    return i + 1\n```\nFirst run it on `[4_a, 4_b, 1]`, then on already-sorted `[60, 70, 80, 90, 100]` (**GATE DA 2024 Q.30**).',
          walkthroughSteps: [
            '1. **Stability Failure on `[4_a, 4_b, 1]` (`pivot = 1`):** `i = -1`. Neither `4_a <= 1` nor `4_b <= 1` triggers. Loop ends.',
            '2. **Final Pivot Swap:** Swap `A[i+1]` (`A[0] = 4_a`) with `A[2]` (`1`) $\\implies$ `[1, 4_b, 4_a]`! Look closely: `4_b` jumped in front of `4_a` in **one single swap**. Standard in-place Quicksort is **UNSTABLE**!',
            '3. **Already-Sorted `[60, 70, 80, 90, 100]` (`pivot = 100`):** Every element `60, 70, 80, 90` is `<= 100`, so `i` advances alongside `j` (`i == j` every time $\\implies$ 0 swaps!), and `i + 1 == hi` (`0` final swap!).',
            '4. **Cost of that Skewed Split:** Pivot `100` creates subproblems of size `4` and `0`! Repeating on `[60,70,80,90]` creates `3` and `0`, making $\\Theta(n^2)$ comparisons even though it did $0$ swaps!',
          ],
          ahaMoment:
            'Do not let zero swaps fool you! With a fixed first or last pivot, an **already-sorted** array is Quicksort’s **worst case** for time ($\\Theta(n^2)$ comparisons) even while performing $0$ swaps! Choosing a **uniformly random pivot** lands at rank $k \\in \\{0, \\dots, n-1\\}$ with probability $1/n$ each, giving the exact expected recurrence tested in **GATE DA 2026 Q.15**.',
        },
        theoremAndFormula: {
          statement:
            'For Quicksort on $n$ distinct elements with a uniformly random pivot (so each split $(k, n-k-1)$ for $k=0..n-1$ occurs with probability $1/n$), the expected running time, worst-case time, and auxiliary stack space are:',
          formulaLatex:
            'T_{\\text{avg}}(n) = \\frac{1}{n}\\sum_{k=0}^{n-1} \\big[T(k) + T(n - k - 1)\\big] + \\Theta(n) = \\Theta(n \\log n), \\qquad T_{\\text{worst}}(n) = T(n-1) + \\Theta(n) = \\Theta(n^2)',
          plainEnglishDecoding:
            'Remember what "in-place" really means for Quicksort: it allocates zero scratch array, yet its recursive calls still use call-stack frames — $O(\\log n)$ stack space on average, and up to $O(n)$ in the worst case (unless tail-call optimization always recurses on the smaller half first, capping stack depth at $O(\\log n)$!).',
          workedMiniExamples: [
            {
              prompt: 'Suppose Quicksort partitions an $n$-element array into a $1:9$ split ($T(n) = T(n/10) + T(9n/10) + cn$) at every level. Is it still $O(n \\log n)$?',
              solution:
                'YES! Even a fixed $1\\%$–$99\\%$ constant-fraction split has recursion tree depth $\\log_{10/9}(n) = \\Theta(\\log n)$ with $\\le cn$ work per level, giving $\\Theta(n \\log n)$ total time!',
            },
            {
              prompt: 'What happens to Lomuto Quicksort if all $n$ elements are identical (`[7, 7, 7, ..., 7]`)?',
              solution:
                'Because `A[j] <= pivot` is always true, `i` stops at $n - 2$, placing the pivot at index $n - 1$ every time! Split is $(n-1, 0) \\implies \\Theta(n^2)$ comparisons!',
            },
          ],
        },
        sandboxId: 'sorting-search-lab',
        msqTraps: [
          {
            myth: 'An already-sorted array is Quicksort\'s best case because no swaps are needed.',
            reality: 'With a deterministic first or last pivot, sorted input produces $(n-1, 0)$ splits at every level — $\\Theta(n^2)$ **worst-case** comparisons!',
            counterExample: '`[60, 70, 80, 90, 100]` with last-element pivot makes $4+3+2+1 = 10$ comparisons and $0$ swaps (GATE DA 2024 Q.30).',
          },
          {
            myth: 'In-place Quicksort uses $O(1)$ space.',
            reality: 'Recursion requires call-stack frames: $O(\\log n)$ average stack space, and up to $O(n)$ worst-case stack space without tail-recursion optimization.',
            counterExample: 'Sorted input with last-element pivot nests $n$ stack frames deep.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 1: Prob & Stats',
            targetWeek: 2,
            topic: 'Linearity of Expectation & Indicator RVs in Randomized Quicksort',
            whyItMatters:
              'Just like indicator RVs in GATE DA 2024 Q.65, defining $X_{ij} = 1$ iff the $i$-th and $j$-th smallest keys are compared ($P(X_{ij}=1) = \\frac{2}{j-i+1}$) proves expected comparisons $= 2n \\ln n$ in 3 lines!',
          },
        ],
      },
      {
        id: 'm9-c3-3',
        title: 'Decision-Tree Lower Bound & The Complete Sorting Comparison Matrix',
        subtitle: 'Why no comparison sort can beat Omega(n log n) and when to pick each algorithm',
        priority: 'high-yield',
        buildsOn: 'Concepts 2.2, 3.1, and 3.2',
        whyStudy:
          'We just accelerated sorting from $O(n^2)$ down to $O(n \\log n)$ using Mergesort and Quicksort. Naturally you wonder: *can a cleverer comparison-based algorithm push worst-case sorting all the way down to $O(n)$?* The **Decision-Tree Lower Bound** delivers a crisp, permanent mathematical **NO** — proving $\\Omega(n \\log n)$ is an unbreakable speed limit for any pairwise-comparison sort! Mastering this 3-line proof alongside the complete 5-sort comparison table equips you for both exact minimum-comparison NATs and real-world algorithm-selection MSQs.',
        groundRules: [
          '**Every Pairwise-Comparison Sort Corresponds to a Binary Decision Tree:** Each internal node asks one yes/no question (`a < b?`) and branches left or right; each leaf outputs one sorted ordering of the $n$ items.',
          '**Every One of the $n!$ Input Permutations Must Reach Its Own Leaf ($L \\ge n!$):** If two different input permutations ended at the exact same leaf, the algorithm would execute the exact same sequence of moves on both and leave at least one of them unsorted!',
          '**A Binary Tree of Height $H$ Has At Most $2^H$ Leaves ($2^H \\ge n!$):** Combining $L \\ge n!$ with $L \\le 2^H$ forces worst-case height (comparisons) $H \\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$ — holding for *both* deterministic and randomized comparison sorts.',
          '**The $\\Omega(n \\log n)$ Wall Applies ONLY to Pairwise-Comparison Models:** Non-comparison sorts (like Counting Sort or Radix Sort on bounded integers) inspect key values/digits directly rather than asking `a < b?`, which lets them bypass the binary tree and run in linear $O(n + k)$ time.',
        ],
        toyExample: {
          title: 'Sorting 3 Numbers `[a, b, c]` Using Only Yes/No Comparisons',
          scenario:
            'There are $3! = 6$ possible input permutations of `[a, b, c]`. Draw a binary decision tree where each internal node asks `x < y?` (Yes/No) and each leaf outputs the sorted order.',
          walkthroughSteps: [
            '1. **Leaf Requirement:** Every one of the $3! = 6$ permutations must land in a distinct leaf, so $L \\ge 6$.',
            '2. **Height Bound:** From Chapter 1, a binary tree of height $H$ has at most $2^H$ leaves ($L \\le 2^H$).',
            '3. **Solve for $H$:** $2^H \\ge 6 \\implies H \\ge \\lceil \\log_2 6 \\rceil = 3$ comparisons in the worst case!',
            '4. **Generalize to $n$ elements:** $2^H \\ge n! \\implies H \\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$ by Stirling\'s approximation ($n! \\ge (n/2)^{n/2}$).',
          ],
          ahaMoment:
            'That single tree argument explains why $\\Omega(n \\log n)$ is an unbreakable speed limit for pairwise sorting: any algorithm that learns order purely by asking `a < b?` builds a binary decision tree with at least $n!$ leaves, forcing its worst-case path length to be at least $\\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)$!',
        },
        theoremAndFormula: {
          statement:
            'Every deterministic or randomized comparison-based sorting algorithm requires $\\Omega(n \\log n)$ comparisons in the worst case (and on average):',
          formulaLatex:
            'H_{\\min}(n) \\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)',
          plainEnglishDecoding:
            'Here is your complete one-glance cheat sheet across all 5 core GATE DA sorts: **Insertion** (Best $\\Theta(n)$, Avg/Worst $\\Theta(n^2)$, Space $O(1)$, Stable); **Bubble** (Best $\\Theta(n)$ early-exit, Avg/Worst $\\Theta(n^2)$, Space $O(1)$, Stable); **Selection** (Best/Avg/Worst $\\Theta(n^2)$, Space $O(1)$, Unstable); **Mergesort** (Best/Avg/Worst $\\Theta(n \\log n)$, Space $O(n)$, Stable); **Quicksort** (Best/Avg $\\Theta(n \\log n)$, Worst $\\Theta(n^2)$, Space $O(\\log n)$ avg / $O(n)$ worst, Unstable).',
          workedMiniExamples: [
            {
              prompt: 'What is the theoretical minimum worst-case number of comparisons needed to sort $n = 5$ elements using any comparison-based algorithm?',
              solution:
                'Count permutations: $5! = 120$. Find smallest $H$ with $2^H \\ge 120$: $2^6 = 64 < 120 \\le 128 = 2^7$, so $H \\ge 7$ comparisons.',
            },
            {
              prompt: 'Which sorting algorithms are simultaneously **comparison-based**, **stable**, and **$O(n \\log n)$ worst-case**?',
              solution:
                'Among the five core sorts, **only Mergesort** satisfies all three! (Insertion/Bubble are $O(n^2)$ worst-case; Selection/Quicksort are unstable and $O(n^2)$ worst-case.)',
            },
          ],
        },
        msqTraps: [
          {
            myth: 'Because $\\Omega(n \\log n)$ is a universal lower bound, NO algorithm can sort $n$ numbers in $O(n)$ time.',
            reality: 'The $\\Omega(n \\log n)$ bound holds **only** for **comparison-based** sorts. Non-comparison sorts (like Counting Sort on small integer ranges) don\'t use pairwise `<` trees.',
            counterExample: 'Insertion Sort already takes $\\Theta(n)$ on sorted arrays; Counting Sort takes $\\Theta(n+k)$ on integers in $[0..k]$.',
          },
          {
            myth: 'Quicksort is always faster than Insertion Sort even for $n = 8$.',
            reality: 'Asymptotics ignore constant factors: for tiny arrays ($n \\le 15$) or nearly-sorted arrays ($I_{\\text{inv}} = O(n)$), Insertion Sort outperforms Quicksort in practice.',
            counterExample: 'Sorted array of size $1000$: Insertion Sort does $999$ comparisons; naive last-pivot Quicksort does $\\approx 500{,}000$.',
          },
        ],
        forwardBridges: [
          {
            targetSection: 'Sec 6: ML',
            targetWeek: 7,
            topic: 'Finding Best Split Thresholds in Decision Trees & $k$-NN',
            whyItMatters:
              'Training a Decision Tree on continuous features sorts each feature column in $O(n \\log n)$ using Timsort/Mergesort before scanning candidate thresholds in $O(n)$.',
          },
        ],
      },
    ],
    howToThinkPlaybook: [
      {
        id: 'm9-c3-ht1',
        title: 'Reading Randomized Quicksort Recurrences Without Solving Integrals',
        difficulty: 'Tricky GATE 2-Mark',
        relatedPyqs: ['GATE DA 2026 · Q.15 (1M MCQ)'],
        problemStatement:
          'Match the correct expected-time recurrence for Quicksort on $n$ distinct keys when a uniformly random pivot is selected.',
        triggerCue:
          'Options show sums $\\sum_{k=0}^{n-1}$ or $\\frac{1}{n}\\sum$ with combinations of $T(k)$ and $T(n-k-1)$.',
        bruteForceTrap:
          'Trying to telescope or integrate the recurrence from scratch before checking the exact index bounds and factor $1/n$.',
        mentalShift:
          'Plug $n$ distinct keys with **1st, 2nd, ..., $n$-th smallest** ranks! Pivot occupies 1 slot, leaving $k$ keys on its left and $n - k - 1$ keys on its right, each chosen with probability $1/n$.',
        steps: [
          {
            label: 'Step 1: Check size sum ($k + 1 + (n - k - 1) = n$)',
            detail:
              'If a distractor writes $T(k) + T(n - k)$, total keys would be $n + 1$ (double-counting the pivot!). Must be $T(k) + T(n - k - 1)$.',
          },
          {
            label: 'Step 2: Check the $1/n$ average + $O(n)$ partition cost',
            detail:
              'Averaging over $k = 0, \\dots, n-1$ multiplies the sum by $\\frac{1}{n}$, while partitioning all $n$ elements costs $\\Theta(n)$ outside the sum (NOT inside!).',
          },
        ],
        lockInTakeaway:
          'Verify three landmarks: $\\frac{1}{n}$ in front, $k + (n-k-1) = n-1$ inside, and $+O(n)$ outside.',
      },
      {
        id: 'm9-c3-ht2',
        title: 'Counting Cross-Inversions During Merge in One Pass',
        difficulty: 'Moderate',
        relatedPyqs: ['GATE DA 2026 · Q.58 (2M NAT — full array inversions)'],
        problemStatement:
          'Given two sorted halves $L$ and $R$, find how many inversions exist between $L$ and $R$ without checking all $|L| \\times |R|$ pairs.',
        triggerCue:
          'Question gives two sorted subarrays `L` and `R` inside Mergesort and asks for inversions or swaps.',
        bruteForceTrap:
          'Testing every `(x in L, y in R)` pair manually ($O(n^2)$), which is slow for $n \\ge 8$.',
        mentalShift:
          'Simulate the two-pointer merge! Only count when an element from `R` beats `L[i]`, adding the **remaining length of `L`** at once.',
        steps: [
          {
            label: 'Step 1: Keep pointers `i = 0` on `L` and `j = 0` on `R`',
            detail: 'If `L[i] <= R[j]`, increment `i` and add `0` (no inversion; preserves stability!).',
          },
          {
            label: 'Step 2: Whenever `R[j] < L[i]`, add `len(L) - i` and increment `j`',
            detail: 'Since `L` is sorted, `R[j] < L[i] <= L[i+1] <= ...`, so `R[j]` beats all `len(L) - i` remaining items in `L`.',
          },
        ],
        lockInTakeaway:
          'Each `R[j] < L[i]` event adds `len(L) - i` inversions in $O(1)$ time—zero nested loops!',
      },
    ],
    arsenalCards: [
      {
        id: 'm9-c3-a1',
        badge: 'Mergesort',
        whenYouSpot: 'Mergesort time/space complexity, stability, merge comparisons, or $O(n \\log n)$ inversion counting',
        directWeaponLatex: 'T(n) = \\Theta(n \\log n) \\text{ always}, \\quad \\text{Space}=O(n), \\quad \\text{Inv} \\mathrel{+}= (\\text{mid}-i+1)',
        instantRule:
          'Mergesort is ALWAYS $\\Theta(n \\log n)$ and stable (with `L[i] <= R[j]`), but uses $O(n)$ auxiliary array space. Cross-inversions trigger only when `R[j] < L[i]`.',
        tenSecondExample: 'Merging `[3,4,5]` and `[1,2]`: `1<3` (+3) and `2<3` (+3) = $6$ cross-inversions.',
        oneFatalTrap: 'Saying Mergesort uses $O(\\log n)$ or $O(1)$ auxiliary space—the merge scratch buffer takes $\\Theta(n)$ space.',
      },
      {
        id: 'm9-c3-a2',
        badge: 'Quicksort',
        whenYouSpot: 'Quicksort recurrence, swaps on sorted array, worst-case input, or stability',
        directWeaponLatex: 'T_{\\text{avg}}(n) = \\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)] + \\Theta(n), \\qquad T_{\\text{worst}} = \\Theta(n^2)',
        instantRule:
          'In-place Quicksort is **unstable** (`[4_a, 4_b, 1]` flips `4_b` before `4_a`). Sorted or all-equal arrays trigger $\\Theta(n^2)$ worst-case under naive last/first pivot.',
        tenSecondExample: 'Already-sorted `[60,70,80,90,100]` with last-element pivot: $0$ swaps, $\\Theta(n^2)$ time.',
        oneFatalTrap: 'Confusing $0$ swaps on sorted input with $O(n)$ best-case time—comparisons are still $\\Theta(n^2)$!',
      },
      {
        id: 'm9-c3-a3',
        badge: 'Lower Bound',
        whenYouSpot: 'Minimum worst-case comparisons to sort $n$ distinct elements by pairwise comparisons',
        directWeaponLatex: 'H_{\\min} \\ge \\lceil \\log_2(n!) \\rceil = \\Omega(n \\log n)',
        instantRule:
          'Compute $n!$, find the smallest power of $2$ that is $\\ge n!$, and read off the exponent.',
        tenSecondExample: '$n = 5 \\implies 5! = 120$. Since $2^6=64 < 120 \\le 128=2^7$, minimum worst-case $= 7$ comparisons.',
        oneFatalTrap: 'Applying $\\Omega(n \\log n)$ to non-comparison sorts like Counting/Radix sort.',
      },
    ],
    questions: [
      {
        id: 'm9-c3-q1',
        tier: 'warmup',
        sourceLabel: 'Warmup Drill #1 (cf. GATE DA 2026 Q.58)',
        marks: 1,
        type: 'NAT',
        stem: 'How many total **inversions** (pairs $(i, j)$ with $i < j$ and $A[i] > A[j]$) exist in the array $A = [5, 3, 4, 1, 2]$—which also equals the total swaps made by recursive adjacent-swap sorting on $A$?',
        natAnswer: { min: 8, max: 8, exactDisplay: '8' },
        triggerHint: 'Count elements smaller than `5` to its right, then smaller than `3` to its right, etc.',
        intuitiveSolution: [
          'Count inversions element by element from left to right:',
          '`5` is greater than `3, 4, 1, 2` (4 inversions); `3` is greater than `1, 2` (2); `4` is greater than `1, 2` (2); `1` is greater than none (0).',
          'Total $= 4 + 2 + 2 = 8$ inversions.',
        ],
        directShortcutUsed: 'Direct right-smaller pair count (matches Mergesort inversion count).',
      },
      {
        id: 'm9-c3-q2',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2024 · Q.30',
        year: 2024,
        marks: 1,
        type: 'NAT',
        stem: 'Consider an in-place Quicksort that always selects the **last element** of the current subarray as the pivot (Lomuto partition, skipping redundant self-swaps when `i == j`). What is the number of swaps performed on the already-sorted array `[60, 70, 80, 90, 100]`?',
        natAnswer: { min: 0, max: 0, exactDisplay: '0' },
        triggerHint: 'In `[60, 70, 80, 90, 100]`, every element is already smaller than the pivot `100`!',
        intuitiveSolution: [
          'In Lomuto partition on `[60, 70, 80, 90, 100]` with pivot `100`, every element before `100` satisfies `A[j] <= pivot`.',
          'So `i` increments in lockstep with `j` (`i == j`), requiring $0$ swaps, and the pivot `100` is already at index `i+1 = 4` ($0$ final swap).',
          'Each recursive subproblem `[60,70,80,90]`, `[60,70,80]`, `[60,70]` behaves identically, giving $0$ swaps total!',
        ],
        directShortcutUsed: 'Sorted input with last-element pivot (skipping `i==j` self-swaps) = $0$ swaps.',
      },
      {
        id: 'm9-c3-q3',
        tier: 'pyq',
        sourceLabel: 'GATE DA 2026 · Q.15',
        year: 2026,
        marks: 1,
        type: 'MCQ',
        stem: 'Consider randomized Quicksort on an array of $n$ distinct elements where the pivot is chosen uniformly at random. Which recurrence describes the expected running time $T(n)$?',
        options: [
          {
            id: 'A',
            text: '$T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1} \\big[T(k) + T(n - k - 1)\\big] + O(n)$',
            whyTrueOrFalse: 'True: Each of the $n$ ranks $k \\in \\{0,\\dots,n-1\\}$ is chosen with probability $1/n$, leaving subproblems of sizes $k$ and $n-k-1$, plus $O(n)$ partition overhead.',
          },
          {
            id: 'B',
            text: '$T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1} \\big[T(k) + T(n - k)\\big] + O(n)$',
            whyTrueOrFalse: 'False: The pivot itself is excluded from both recursive subproblems, so sizes must sum to $n - 1$, not $n$.',
          },
          {
            id: 'C',
            text: '$T(n) = \\sum_{k=0}^{n-1} \\big[T(k) + T(n - k - 1)\\big] + O(n)$',
            whyTrueOrFalse: 'False: Missing the probability factor $1/n$; this sums all possible splits rather than taking their expectation.',
          },
          {
            id: 'D',
            text: '$T(n) = \\frac{1}{n}\\sum_{k=0}^{n-1} T(k) + O(n)$',
            whyTrueOrFalse: 'False: Drops the right recursive call $T(n - k - 1)$ (that would be Quickselect, not Quicksort!).',
          },
        ],
        correctOptions: ['A'],
        triggerHint: 'Expectation averages over all $n$ pivot choices ($1/n$), and the pivot leaves $k$ + $(n-k-1)$ items.',
        intuitiveSolution: [
          'If the uniformly chosen random pivot is the $(k+1)$-th smallest element ($0 \\le k \\le n-1$), it splits the remaining $n-1$ elements into sizes $k$ and $n-k-1$.',
          'Taking expectation adds $\\frac{1}{n}\\sum_{k=0}^{n-1}[T(k)+T(n-k-1)]$, plus the $O(n)$ partitioning step.',
        ],
        directShortcutUsed: 'Uniform pivot expectation: $\\frac{1}{n}\\sum [T(k)+T(n-k-1)] + O(n)$.',
      },
      {
        id: 'm9-c3-q4',
        tier: 'tricky',
        sourceLabel: 'IITM-Style MSQ',
        marks: 2,
        type: 'MSQ',
        stem: 'Which of the following statements regarding sorting algorithms on an array of $n$ elements is/are TRUE?',
        options: [
          {
            id: 'A',
            text: 'Standard in-place Quicksort is **not** stable, as demonstrated by partitioning `[4_a, 4_b, 1]` around pivot `1`.',
            whyTrueOrFalse: 'True: Lomuto partition swaps `4_a` with `1` at the end, yielding `[1, 4_b, 4_a]` and reversing equal keys.',
          },
          {
            id: 'B',
            text: 'Standard array Mergesort is stable (when `L[i] <= R[j]` chooses `L[i]`) and has $\\Theta(n \\log n)$ worst-case time.',
            whyTrueOrFalse: 'True: Always halves the array in $\\Theta(n)$ merge work and preserves relative order of equal keys.',
          },
          {
            id: 'C',
            text: 'Lomuto Quicksort with last-element pivot runs in $\\Theta(n^2)$ time when all $n$ array elements are equal.',
            whyTrueOrFalse: 'True: Every element satisfies `A[j] <= pivot`, producing maximally unbalanced $(n-1, 0)$ partitions at every depth.',
          },
          {
            id: 'D',
            text: 'In-place Selection Sort is stable and runs in $\\Theta(n)$ time when the input array is already sorted.',
            whyTrueOrFalse: 'False: Selection Sort is neither stable (`[2_a, 2_b, 1] -> [1, 2_b, 2_a]`) nor adaptive (always $\\Theta(n^2)$ comparisons).',
          },
        ],
        correctOptions: ['A', 'B', 'C'],
        triggerHint: 'Recall pocket counterexamples `[4_a, 4_b, 1]` for Quicksort and `[2_a, 2_b, 1]` for Selection Sort.',
        intuitiveSolution: [
          'A is true (`[4_a, 4_b, 1] -> [1, 4_b, 4_a]`). B is true (Mergesort is stable and worst-case $\\Theta(n \\log n)$).',
          'C is true (all-equal inputs under `<=` Lomuto partition split $(n-1, 0)$ every time, costing $\\Theta(n^2)$). D is false on both counts (Selection Sort is unstable and $\\Theta(n^2)$ even on sorted arrays).',
        ],
        directShortcutUsed: 'Stability counterexamples + Lomuto all-equal worst-case.',
      },
      {
        id: 'm9-c3-q5',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Decision Tree NAT',
        marks: 2,
        type: 'NAT',
        stem: 'Using the comparison-based decision tree lower bound, what is the minimum possible worst-case number of pairwise comparisons required by **any** comparison-based algorithm to sort $n = 5$ distinct elements?',
        natAnswer: { min: 7, max: 7, exactDisplay: '7' },
        triggerHint: 'Every one of the $5!$ permutations needs its own leaf, and a binary tree of height $H$ has at most $2^H$ leaves.',
        intuitiveSolution: [
          'There are $5! = 120$ distinct permutations of $5$ elements.',
          'A binary decision tree of height $H$ has at most $2^H$ leaves, so we require $2^H \\ge 120$.',
          'Since $2^6 = 64 < 120 \\le 128 = 2^7$, the minimum worst-case height is $H = 7$.',
        ],
        directShortcutUsed: '$H \\ge \\lceil \\log_2(n!) \\rceil = \\lceil \\log_2(120) \\rceil = 7$.',
      },
      {
        id: 'm9-c3-q6',
        tier: 'tricky',
        sourceLabel: 'IITM-Style Mergesort Trace',
        marks: 2,
        type: 'MCQ',
        stem: 'During the `merge(L, R)` step of Mergesort, you merge two sorted subarrays `L = [2, 5, 8, 12]` and `R = [1, 4, 9, 10]`. How many **cross-inversions** $(x \\in L, y \\in R \\text{ with } x > y)$ are counted during this single merge call?',
        options: [
          {
            id: 'A',
            text: '$7$',
            whyTrueOrFalse: 'False: Under-counts `9` and `10` jumping over `12`.',
          },
          {
            id: 'B',
            text: '$8$',
            whyTrueOrFalse: 'False: Off by 1.',
          },
          {
            id: 'C',
            text: '$9$',
            whyTrueOrFalse: 'True: `1 < 2` (+4), `4 < 5` (+3), `9 < 12` (+1), `10 < 12` (+1) = $9$.',
          },
          {
            id: 'D',
            text: '$10$',
            whyTrueOrFalse: 'False: Over-counts by 1.',
          },
        ],
        correctOptions: ['C'],
        triggerHint: 'Every time `R[j] < L[i]`, add the number of elements still remaining in `L`.',
        intuitiveSolution: [
          '`R[0]=1 < L[0]=2`: `1` jumps over all 4 elements `[2,5,8,12]` (+4). Then `2` is copied.',
          '`R[1]=4 < L[1]=5`: `4` jumps over remaining 3 elements `[5,8,12]` (+3). Then `5` and `8` are copied.',
          '`R[2]=9 < L[3]=12`: `9` jumps over `[12]` (+1). `R[3]=10 < L[3]=12`: `10` jumps over `[12]` (+1). Finally `12` is copied.',
          'Total cross-inversions $= 4 + 3 + 1 + 1 = 9$.',
        ],
        directShortcutUsed: 'Sum `len(L) - i` on each `R[j] < L[i]` event.',
      },
    ],
  },
]
