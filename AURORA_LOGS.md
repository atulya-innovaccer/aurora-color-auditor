# Aurora: Project Context & AI Memory Log

This document serves as a persistent record of the development, logic, and design decisions for the **Aurora** (formerly A11y Contrast Auditor) Figma plugin. It is intended to provide full context for any AI model or developer continuing work on this project.

---

## 1. Project Overview
- **Name**: Aurora
- **Description**: Internal Innovaccer tool for mapping and checking colors.
- **Goal**: Automate accessibility (WCAG 2.2) audits within Figma while enforcing Design System (DS) consistency.

---

## 2. Version Evolution & Feature History

### v1 - v4: Core Foundation
- **Scan Engine**: Iterative node traversal to find fills (Solid/Mixed).
- **Contrast Logic**: Implementation of standard WCAG contrast formula `(L1 + 0.05) / (L2 + 0.05)`.
- **UI**: Standard list view with "Scan" and "Select Node" functionality.

### v5: Design System Token Matching
- **Feature**: Automatic mapping of Hex codes to Innovaccer's Design System tokens (e.g., `#0070DD` -> `Jal`).
- **Logic**: A hardcoded `DS_COLOR_MAP` in `code.ts` acts as the source of truth.

### v6: Broken Color Detection & DS Deviation
- **User Request**: Flag colors that pass accessibility but aren't in the official Design System.
- **Logic**: Introduced **Delta-E (ΔE)** color distance check.
- **Severity**: "Broken" colors are marked with a Warning/Orange badge.
- **Suggestion**: The UI suggests the nearest DS token and shows the distance (Δ).

### v7: Interactive Color Matrix (CSS Grid)
- **User Request**: A bird's-eye view of all color combinations used in a selection.
- **Implementation**: 
    - Export Matrix logic ported to a real-time UI view.
    - Hover Tooltips: Show contrast, rating, and token names.
    - CSS Grid: Responsive matrix that supports large palettes.

### v7.1: Matrix Interactivity & UX
- **Interactions**:
    - **Click-to-Select**: Clicking a matrix cell selects all corresponding layers in the Figma canvas.
    - **Cursor**: Changed to `pointer` for interactive cells.
- **UI Resize**: Increased window to `900x750` for better visibility of the full palette.

### v8: Rebranding to Aurora
- **Name**: Changed from "A11y Contrast Auditor" to "Aurora".
- **Description**: Updated to reflect its status as an internal Innovaccer tool.

---

## 3. Technical Core Logic

### Contrast Calculation
Standard relative luminance calculation:
```typescript
function calculateLuminance(r, g, b) {
    const a = [r, g, b].map(v => {
        return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}
```

### Color Distance (Delta-E Lite)
Used for finding the "Nearest DS Color":
```typescript
function colorDistance(hex1, hex2) {
    const c1 = hexToRgb(hex1);
    const c2 = hexToRgb(hex2);
    return Math.sqrt(Math.pow(c1.r - c2.r, 2) + Math.pow(c1.g - c2.g, 2) + Math.pow(c1.b - c2.b, 2));
}
```

### Node Traversal
The plugin uses deep traversal to find visible elements:
1. Skips hidden layers.
2. Identifies foreground (node fill) and background (first solid parent fill, defaults to White).
3. Handles "Complex Fills" (Gradients/Images) by requesting manual checks.

---

## 4. WCAG Audit Rules & User Context

The following rules were specifically requested and refined by the user to ensure the plugin aligns with Innovaccer's internal quality standards:

### Standard Contrast Ratios
- **Normal Text**: Minimum **4.5:1** (WCAG AA). Ideal **7:1** (WCAG AAA).
- **Large Text / UI Components**: Minimum **3:1** (WCAG AA).
- **Small Text Warning**: Elements < 14px are flagged even if they pass 4.5:1, suggesting a move toward **7:1** for better readability.

### "Large Text" Definition
- **Bold**: 18px or larger.
- **Regular**: 24px or larger.
- *Any text meeting these criteria is evaluated against the 3:1 threshold instead of 4.5:1.*

### Guideline Mapping
The plugin explicitly maps results to WCAG 2.2 criteria:
- **WCAG 1.4.3 (Contrast - Minimum)**: Normal text vs. Large text.
- **WCAG 1.4.6 (Contrast - Enhanced)**: The 7:1 (AAA) standard.
- **WCAG 1.4.11 (Non-text Contrast)**: UI components, icons, and focus states.

### User-Specific Logic & Overrides
- **Decorative Elements**: Elements with low contrast can be marked as "Pass" if they are purely decorative or have readable child content (Container Logic).
- **Complexity Handover**: If a node has a gradient or image fill, the plugin **must** yield to a "Complex/Manual Check" rather than guessing.
- **Text Scale Awareness**: The plugin should match scanned font sizes to the `DS_TEXT_SCALES` to tell the user exactly which Design System heading they are using.

---

## 5. Discussion & Decision Log

- **Why separate DS vs Off-Palette in the Color Panel?**
  - To allow auditors to quickly identify "rogue" colors without digging through the main scan list.
- **Why include AA-Large?**
  - To align with WCAG guidelines for headings (18px bold / 24px) which have lower contrast requirements (3:1).
- **Matrix Architecture**:
  - The matrix is built using a 2D lookup map in `ui.html` for performance, then rendered via dynamic DOM creation for maximum control over tooltips and click events.

---

## 5. Future Considerations
- [ ] Integration with Figma Variables API.
- [ ] Support for Opacity/Alpha blending in contrast calculation.
- [ ] Real-time "Watch" mode (automatic re-scan on selection change).
