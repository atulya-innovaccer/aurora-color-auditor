Below is a detailed walkthrough of what I understand about the Aurora Color Auditor Figma plugin, based on the project’s documentation and source code. I’ve included citations for every referenced file, and listed the terminal commands I used.

---

## Overview (Purpose & Capabilities)
Aurora is a Figma plugin focused on accessibility (WCAG 2.2 contrast checks) and Aurora Design System token compliance. It scans selected layers in Figma, evaluates text and non-text contrast, flags off-palette usage (“broken colors”), and presents results in an interactive UI with filtering and a color matrix view. The README calls out features like WCAG compliance, DS token matching, broken color detection, typography awareness, and the matrix visualization, all of which align with the implementation in code.ts and ui.html.【F:README.md†L1-L46】【F:code.ts†L1-L664】【F:ui.html†L1-L1401】

---

## Plugin Entry Points & Configuration
The manifest identifies this as a Figma plugin named “Aurora,” using `code.js` for the main plugin logic and `ui.html` for the interface. It doesn’t allow network access beyond “none,” so all logic is local/offline in the plugin runtime.【F:manifest.json†L1-L16】

---

## Core Logic (code.ts)
### 1) Design System Token Matching
A large `DS_COLOR_MAP` maps hex values to Aurora Design System token names (Primary, Mirch, Haldi, Neem, etc.). This map is used to label colors when exact matches occur and to detect off-palette colors when no token is found.【F:code.ts†L8-L99】

### 2) Typography Awareness
`DS_TEXT_SCALES` defines known text scales (size/weight pairs). `matchTextScale` attempts an exact match, then closest by size, then closest overall to tag a scanned text node with its design-system scale name (e.g., Heading/XLarge, Body/Default).【F:code.ts†L110-L173】

### 3) Color Distance (Off-Palette “Broken Color” Support)
`colorDistance` and `findNearestDSColor` compute a simple RGB Euclidean distance to suggest the closest DS token when a color isn’t mapped. This powers the “off-palette” warnings and nearest-token suggestions in the UI and the color list modal.【F:code.ts†L184-L229】

### 4) WCAG Guidance Logic
`getWcagGuideline` returns descriptive WCAG guidance based on contrast ratio, text size, and text type. It explicitly handles:
- AAA (≥7:1), AA (≥4.5:1), AA-Large (≥3:1), and Fail.
- A special warning for small text (<14px) even if it passes AA.  
These descriptions are surfaced in the UI for each result.【F:code.ts†L231-L304】

### 5) Contrast Utilities
Utilities for hex/RGB conversion and luminance/contrast calculation implement standard WCAG contrast ratio math. This is used for both individual node scanning and matrix generation.【F:code.ts†L328-L392】

### 6) Node Visibility and Color Extraction
- `isNodeFullyVisible` ensures hidden nodes or hidden ancestors are skipped.
- `extractSolidFill` pulls the topmost visible solid fill, resolves token names, and attaches nearest-DS color if needed.
- `hasComplexFill` flags gradients/images (requiring manual review).
- `findBackgroundColor` walks up the parent chain to find the first solid fill as background, defaulting to white if none is found.  
This is central to the scan engine’s “foreground vs background” evaluation.【F:code.ts†L430-L517】

### 7) Smart Severity / Decorative Logic
`assessContainerSeverity` and `hasReadableContent` treat containers differently:  
- If a container’s contrast is low but it contains readable text/vector content with sufficient contrast, the container is marked as a warning and considered decorative (not a full failure).  
This aligns with the spec noted in the AI memory log about decorative handling and container logic.【F:code.ts†L519-L574】【F:AURORA_LOGS.md†L95-L113】

### 8) Node Processing
`processNode` is the core evaluator:
- Skips invisible or non-visual nodes.
- Returns “complex” when gradients/images are detected.
- Computes contrast, AA/AAA pass status, text-scale tags, and decorative/off-palette warnings.
- Marks “broken colors” (off-palette) when a node passes contrast but uses colors not in DS tokens.  
This yields a `ContrastResult` used by the UI.【F:code.ts†L608-L723】

### 9) Traversal and Color Matrix
The plugin recursively traverses the selection with `traverseNodes`.  
It also builds a color matrix by extracting unique colors and computing contrast for every foreground/background pair. The matrix includes node IDs per combination, enabling click-to-select in the UI.【F:code.ts†L726-L820】

### 10) Figma UI Bridge
The plugin shows the UI at 900x750. It listens for messages (`scan`, `get-unique-colors`, `export-matrix`, `get-matrix-data`, `select-node`, `select-nodes`, `close`) and responds by:
- scanning the current selection,
- returning results,
- creating matrix data,
- selecting nodes in the canvas.  
This defines the app’s UI ↔ plugin integration contract.【F:code.ts†L822-L918】

---

## UI Behavior (ui.html)
### Layout & Interaction
The UI provides:
- Scan button
- Filter chips for type and status
- Result list with color swatches, AA/AAA badges, WCAG guideline details, and DS token metadata
- Stats bar and export bar
- Modal listing unique colors (separated into DS vs off-palette)
- Interactive contrast matrix with tooltips and click-to-select  
All of this is defined in the HTML/CSS and the inlined script logic.【F:ui.html†L1-L1401】

### Message Handling
The UI posts messages (`scan`, `export-matrix`, `get-unique-colors`, `get-matrix-data`) and handles plugin responses:
- `results` → updates stats and renders list
- `matrix-data` → downloads JSON
- `matrix-data-display` → shows interactive matrix
- `unique-colors` → opens modal
- `error` → shows inline error  
This is the operational flow for how scans populate the UI and export tooling.【F:ui.html†L1009-L1401】

### Matrix Rendering
`renderMatrix` builds a 2D grid from the color list and combination data, sets up tooltips, and applies “interactive” behavior if there are associated node IDs (click selects them in Figma). It also dims failed contrast cells for quick visual scanning.【F:ui.html†L1179-L1322】

---

## Documentation / AI Context File
`AURORA_LOGS.md` captures evolution and design decisions, such as:
- addition of DS token mapping (v5),
- broken color detection using Delta-E style distance (v6),
- interactive matrix (v7),
- UI resize and interactivity improvements (v7.1),
- rebranding to Aurora (v8),
- rule interpretations of WCAG thresholds and text sizes, and
- container/decorative logic.  
This context aligns with the current TypeScript implementation and UI behaviors noted above.【F:AURORA_LOGS.md†L1-L140】

---

## Commands Run
- `ls`
- `rg --files -g 'AGENTS.md'`
- `ls *.md`
- `cat README.md`
- `cat AURORA_LOGS.md`
- `cat manifest.json`
- `sed -n '1,220p' code.ts`
- `sed -n '220,520p' code.ts`
- `sed -n '520,1040p' code.ts`
- `sed -n '1,240p' code.js`
- `sed -n '1,240p' ui.html`
- `rg -n "script|postMessage|matrix|scan" ui.html`
- `sed -n '880,1385p' ui.html`
- `sed -n '1385,1660p' ui.html`
