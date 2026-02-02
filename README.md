# Aurora Color Auditor

**Aurora Color Auditor** is a powerful Figma plugin designed to ensure accessibility and Design System compliance within your designs. It automates the process of checking color contrast ratios against WCAG 2.2 standards while validating color usage against the Aurora Design System tokens.

<p align="center">
  <img src="./logo.png" width="100" alt="Aurora Logo" />
</p>

## ✨ Features

- **WCAG 2.2 Compliance**: Automatically checks contrast ratios for text and UI elements, categorizing results into AAA, AA, AA Large, or Fail.
- **Design System Token Matching**: Identifies if used colors map to existing Aurora Design System tokens.
- **Smart Severity Assessment**:
  - Distinguishes between text (critical) and decorative elements.
  - Detects "Broken Colors" (accessible contrast but off-palette).
  - Identifies "Complex" fills (gradients, images) that require manual review.
- **Typography Awareness**: Matches text layers to known Design System typography scales.
- **Color Matrix**: Generates a comprehensive matrix of foreground/background combinations from your selection to visualize accessible pairings.
- **Interactive Reports**: Filter results by status (Pass, Fail, Warning), navigate to layers in Figma, and view detailed metrics.

## 🚀 Installation & Usage

### Running Locally
1.  **Clone the repository**:
    ```bash
    git clone https://github.com/atulya-innovaccer/aurora-color-auditor.git
    cd aurora-color-auditor
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Build the plugin**:
    ```bash
    npm run build
    # Or watch for changes
    npm run watch
    ```

4.  **Load in Figma**:
    - Open Figma and go to **Plugins > Development > Import plugin from manifest...**
    - Select the `manifest.json` file from this project directory.

### How to Use
1.  **Select Layers**: Select one or more frames, groups, or layers in your Figma file.
2.  **Run Plugin**: Launch **Aurora** from your plugins list.
3.  **Audit**: The plugin will automatically scan the selection and present a list of accessibility issues and compliant elements.
    - **Pass/Fail/Warning**: Click any item to select the layer in Figma.
    - **Matrix View**: Switch to the Matrix tab to see a grid of all color combinations found in your selection.

## 🛠 Development

to extend or modify the plugin:

- **`code.ts`**: Contains the main logic for traversing nodes, extracting colors, and calculating contrast.
- **`ui.html`**: Handles the user interface, utilizing standard web technologies (HTML/CSS/JS).

**Tech Stack**:
- TypeScript
- Figma Plugin API
- CSS Variables for theming (Dark mode ready)

## 📄 License
MIT
