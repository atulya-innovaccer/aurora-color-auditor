// Aurora v8 - Internal Innovaccer Color Tool
// Full WCAG 2.2 compliance, DS token matching, typography awareness

// ============================================
// DESIGN SYSTEM COLOR MAP
// ============================================

const DS_COLOR_MAP: Record<string, string> = {
    // Primary
    '#EEF6FC': 'Primary/Ultra Light',
    '#DCECF9': 'Primary/Lightest',
    '#C9E1F5': 'Primary/300',
    '#97C5F0': 'Primary/Lighter',
    '#4F9DE7': 'Primary/Light',
    '#0070DD': 'Jal',
    '#00509F': 'Primary/Dark',
    '#003365': 'Primary/Darker',

    // Secondary - Mirch (Red)
    '#FCF1F1': 'Mirch/Ultra Light',
    '#F9E2E2': 'Mirch/Lightest',
    '#FAD1CD': 'Mirch/300',
    '#F7ADA5': 'Mirch/Lighter',
    '#EB776C': 'Mirch/Light',
    '#D93737': 'Mirch',
    '#9C2828': 'Mirch/Dark',
    '#631919': 'Mirch/Darker',

    // Secondary - Haldi (Yellow)
    '#FFFAE4': 'Haldi/Ultra Light',
    '#FFF5C7': 'Haldi/Lightest',
    '#FFEBAD': 'Haldi/300',
    '#FFE597': 'Haldi/Lighter',
    '#FFD462': 'Haldi/Light',
    '#FFC208': 'Haldi',
    '#B78707': 'Haldi/Dark',
    '#6B4A06': 'Haldi/Darker',

    // Secondary - Neem (Green)
    '#ECF7F0': 'Neem/Ultra Light',
    '#D7EFDF': 'Neem/Lightest',
    '#CAEACD': 'Neem/300',
    '#A5D8AA': 'Neem/Lighter',
    '#71C077': 'Neem/Light',
    '#2EA843': 'Neem',
    '#227934': 'Neem/Dark',
    '#154D26': 'Neem/Darker',

    // Secondary - Tawak (Orange)
    '#FEF3E7': 'Tawak/Ultra Light',
    '#FDE6CE': 'Tawak/Lightest',
    '#FCD9B6': 'Tawak/300',
    '#FFC998': 'Tawak/Lighter',
    '#FEAC5F': 'Tawak/Light',
    '#F07D00': 'Tawak',
    '#B35F13': 'Tawak/Dark',
    '#743207': 'Tawak/Darker',

    // Secondary - Nimbu (Lime)
    '#F2F9E7': 'Nimbu/Ultra Light',
    '#E3F3CE': 'Nimbu/Lightest',
    '#D3EBB2': 'Nimbu/300',
    '#C6E599': 'Nimbu/Lighter',
    '#A6D763': 'Nimbu/Light',
    '#82C91E': 'Nimbu',
    '#578715': 'Nimbu/Dark',
    '#304A0B': 'Nimbu/Darker',

    // Secondary - Neel (Indigo)
    '#F1F3FC': 'Neel/Ultra Light',
    '#E2E5F9': 'Neel/Lightest',
    '#CBD1F5': 'Neel/300',
    '#ABB4ED': 'Neel/Lighter',
    '#7583E1': 'Neel/Light',
    '#3D51D4': 'Neel',
    '#2C3A98': 'Neel/Dark',
    '#1C2561': 'Neel/Darker',

    // Secondary - Jamun (Purple)
    '#F0ECF7': 'Jamun/Ultra Light',
    '#E0D8EE': 'Jamun/Lightest',
    '#D7CAE8': 'Jamun/300',
    '#BFAADA': 'Jamun/Lighter',
    '#9D7EC6': 'Jamun/Light',
    '#7A53B2': 'Jamun',
    '#644491': 'Jamun/Dark',
    '#4E3572': 'Jamun/Darker',

    // Neutrals - Stone
    '#F4F4F4': 'Stone/Lightest',
    '#ECECEC': 'Stone/Lighter',
    '#E5E5E5': 'Stone/Light',
    '#D5D5D5': 'Stone',
    '#C5C5C5': 'Stone/Dark',

    // Neutrals - Night
    '#A6A6A6': 'Night/Lightest',
    '#707070': 'Night/Lighter',
    '#494949': 'Night/Light',
    '#1F1F1F': 'Night',

    // Common
    '#FFFFFF': 'White',
    '#000000': 'Black',
};

// ============================================
// DS TEXT SCALES
// ============================================

interface TextScale {
    id: string;
    name: string;
    fontSize: number;
    fontWeight: number;
    isLarge: boolean;
}

const DS_TEXT_SCALES: TextScale[] = [
    { id: 'Heading/XXLarge', name: 'Heading/XXLarge', fontSize: 40, fontWeight: 400, isLarge: true },
    { id: 'Heading/XLarge', name: 'Heading/XLarge', fontSize: 32, fontWeight: 600, isLarge: true },
    { id: 'Heading/Large', name: 'Heading/Large', fontSize: 28, fontWeight: 400, isLarge: true },
    { id: 'Heading/Medium', name: 'Heading/Medium', fontSize: 20, fontWeight: 600, isLarge: true },
    { id: 'Heading/Default', name: 'Heading/Default', fontSize: 16, fontWeight: 700, isLarge: false },
    { id: 'Body/Large/Medium', name: 'Body/Large/Medium', fontSize: 16, fontWeight: 600, isLarge: false },
    { id: 'Body/Large/Default', name: 'Body/Large/Default', fontSize: 16, fontWeight: 400, isLarge: false },
    { id: 'Body/Bold', name: 'Body/Bold', fontSize: 14, fontWeight: 700, isLarge: false },
    { id: 'Body/Medium', name: 'Body/Medium', fontSize: 14, fontWeight: 600, isLarge: false },
    { id: 'Body/Default', name: 'Body/Default', fontSize: 14, fontWeight: 400, isLarge: false },
    { id: 'Label/Label', name: 'Label/Label', fontSize: 14, fontWeight: 600, isLarge: false },
    { id: 'Link/Link', name: 'Link/Link', fontSize: 14, fontWeight: 600, isLarge: false },
    { id: 'Subheading/subheading', name: 'Subheading', fontSize: 12, fontWeight: 800, isLarge: false },
    { id: 'Small/Bold', name: 'Small/Bold', fontSize: 12, fontWeight: 700, isLarge: false },
    { id: 'Small/Default', name: 'Small/Default', fontSize: 12, fontWeight: 600, isLarge: false },
];

function matchTextScale(fontSize: number | null, fontWeight: number): TextScale | null {
    if (fontSize === null) return null;

    // Find exact match first
    const exact = DS_TEXT_SCALES.find(s => s.fontSize === fontSize && s.fontWeight === fontWeight);
    if (exact) return exact;

    // Find closest by size
    const bySize = DS_TEXT_SCALES.filter(s => s.fontSize === fontSize);
    if (bySize.length > 0) {
        return bySize.reduce((a, b) => Math.abs(a.fontWeight - fontWeight) < Math.abs(b.fontWeight - fontWeight) ? a : b);
    }

    // Find closest overall
    return DS_TEXT_SCALES.reduce((a, b) => {
        const diffA = Math.abs(a.fontSize - fontSize) + Math.abs(a.fontWeight - fontWeight) / 100;
        const diffB = Math.abs(b.fontSize - fontSize) + Math.abs(b.fontWeight - fontWeight) / 100;
        return diffA < diffB ? a : b;
    });
}

// ============================================
// COLOR DISTANCE & NEAREST DS COLOR
// ============================================

function hexToRgbValues(hex: string): { r: number; g: number; b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function colorDistance(hex1: string, hex2: string): number {
    const c1 = hexToRgbValues(hex1);
    const c2 = hexToRgbValues(hex2);
    return Math.sqrt(
        Math.pow(c1.r - c2.r, 2) +
        Math.pow(c1.g - c2.g, 2) +
        Math.pow(c1.b - c2.b, 2)
    );
}

function findNearestDSColor(hex: string): { hex: string; name: string; distance: number } | null {
    const upperHex = hex.toUpperCase();

    // If exact match, return it
    if (DS_COLOR_MAP[upperHex]) {
        return { hex: upperHex, name: DS_COLOR_MAP[upperHex], distance: 0 };
    }

    // Find nearest
    let nearest: { hex: string; name: string; distance: number } | null = null;

    for (const [dsHex, dsName] of Object.entries(DS_COLOR_MAP)) {
        const dist = colorDistance(hex, dsHex);
        if (!nearest || dist < nearest.distance) {
            nearest = { hex: dsHex, name: dsName, distance: dist };
        }
    }

    return nearest;
}

// ============================================
// WCAG GUIDELINE MESSAGES
// ============================================

interface WcagGuideline {
    title: string;
    description: string;
    criterion: string;
    recommendation?: string;
}

function getWcagGuideline(
    ratio: number,
    isLargeText: boolean,
    isText: boolean,
    fontSize: number | null
): WcagGuideline {

    // Small text warning (< 14px)
    const isSmallText = isText && fontSize !== null && fontSize < 14;

    if (ratio >= 7.0) {
        return {
            title: 'AAA',
            description: 'Enhanced contrast. Ideal for long-form reading.',
            criterion: 'WCAG 1.4.6',
            recommendation: isSmallText ? '✓ Good! Small text benefits from AAA contrast.' : undefined
        };
    }

    if (ratio >= 4.5) {
        if (isSmallText) {
            return {
                title: 'AA',
                description: 'Passes AA, but small text (<14px) should prefer AAA (7:1).',
                criterion: 'WCAG 1.4.3',
                recommendation: '⚠ Consider AAA (7:1) for small/caption text.'
            };
        }
        return {
            title: 'AA',
            description: 'Safe for all text sizes. Recommended minimum.',
            criterion: 'WCAG 1.4.3'
        };
    }

    if (ratio >= 3.0) {
        if (isLargeText) {
            return {
                title: 'AA Large',
                description: 'Safe for 18px bold / 24px+ regular headings and CTAs.',
                criterion: 'WCAG 1.4.3'
            };
        }
        if (!isText) {
            return {
                title: 'AA',
                description: 'Meets UI component requirement (3:1). Safe for buttons, icons.',
                criterion: 'WCAG 1.4.11'
            };
        }
        return {
            title: 'Fail',
            description: 'Too low for normal text. Only valid for large text (24px+ or 18px bold).',
            criterion: 'WCAG 1.4.3',
            recommendation: 'Increase contrast to 4.5:1 for normal text.'
        };
    }

    return {
        title: 'Fail',
        description: 'Not accessible. OK only for decorative elements or disabled states.',
        criterion: 'WCAG 1.4.3 / 1.4.11',
        recommendation: isText ? 'Text contrast must be ≥ 4.5:1 (normal) or ≥ 3:1 (large).' : 'UI contrast must be ≥ 3:1.'
    };
}

// ============================================
// TYPES & INTERFACES
// ============================================

interface ColorInfo {
    hex: string;
    rgb: { r: number; g: number; b: number };
    opacity: number;
    tokenName?: string;
    nearestDS?: { hex: string; name: string; distance: number };
}

type NodeCategory = 'text' | 'shape' | 'frame' | 'other';
type Severity = 'pass' | 'warning' | 'fail' | 'complex';

interface ContrastResult {
    nodeId: string;
    nodeName: string;
    nodeType: string;
    nodeCategory: NodeCategory;
    foreground: ColorInfo | null;
    background: ColorInfo | null;
    contrastRatio: number | null;
    fontSize: number | null;
    fontWeight: number;
    isBold: boolean;
    isLargeText: boolean;
    textScaleName?: string;
    passesAA: boolean;
    passesAAA: boolean;
    status: Severity;
    isDecorative: boolean;
    decorativeReason?: string;
    // New Broken Color fields
    isBrokenColor: boolean;
    brokenColorReason?: string;

    message?: string;
    wcagGuideline?: WcagGuideline;
}

interface ColorMatrixEntry {
    foreground: string;
    foregroundToken?: string;
    background: string;
    backgroundToken?: string;
    ratio: number;
    passesAA: boolean;
    passesAAA: boolean;
    rating: string;
    status: string;
    nodeIds: string[]; // Added: List of node IDs using this combo
}

interface ColorMatrix {
    unique_colors: Array<{ hex: string; tokenName?: string; nearestDS?: { hex: string; name: string; distance: number } }>;
    combinations: ColorMatrixEntry[];
    generated_at: string;
    source_frame: string;
}

// ============================================
// COLOR UTILITIES
// ============================================

function rgbToHex(r: number, g: number, b: number): string {
    const toHex = (n: number): string => {
        const hex = Math.round(n * 255).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
}

function linearize(channel: number): number {
    return channel <= 0.03928 ? channel / 12.92 : Math.pow((channel + 0.055) / 1.055, 2.4);
}

function calculateLuminance(r: number, g: number, b: number): number {
    return 0.2126 * linearize(r) + 0.7152 * linearize(g) + 0.0722 * linearize(b);
}

function calculateContrastRatio(fg: ColorInfo, bg: ColorInfo): number {
    const fgLum = calculateLuminance(fg.rgb.r, fg.rgb.g, fg.rgb.b);
    const bgLum = calculateLuminance(bg.rgb.r, bg.rgb.g, bg.rgb.b);
    const lighter = Math.max(fgLum, bgLum);
    const darker = Math.min(fgLum, bgLum);
    return (lighter + 0.05) / (darker + 0.05);
}

function calculateContrastFromHex(fgHex: string, bgHex: string): number {
    const fg = hexToRgbValues(fgHex);
    const bg = hexToRgbValues(bgHex);
    const fgLum = calculateLuminance(fg.r / 255, fg.g / 255, fg.b / 255);
    const bgLum = calculateLuminance(bg.r / 255, bg.g / 255, bg.b / 255);
    const lighter = Math.max(fgLum, bgLum);
    const darker = Math.min(fgLum, bgLum);
    return (lighter + 0.05) / (darker + 0.05);
}

// ============================================
// TOKEN & STYLE RESOLUTION
// ============================================

function getTokenName(hex: string, figmaStyleName?: string): string | undefined {
    if (figmaStyleName) return figmaStyleName;
    return DS_COLOR_MAP[hex.toUpperCase()];
}

function getStyleName(styleId: string | undefined): string | undefined {
    if (!styleId) return undefined;
    try {
        const style = figma.getStyleById(styleId);
        if (style && style.name) return style.name;
    } catch (e) { }
    return undefined;
}

// ============================================
// VISIBILITY CHECK
// ============================================

function isNodeFullyVisible(node: SceneNode): boolean {
    if (!node.visible) return false;
    let current: BaseNode | null = node.parent;
    while (current !== null) {
        if (current.type === 'PAGE' || current.type === 'DOCUMENT') break;
        if ('visible' in current && !(current as SceneNode).visible) return false;
        current = current.parent;
    }
    return true;
}

// ============================================
// COLOR EXTRACTION
// ============================================

type NodeWithFills = SceneNode & {
    fills: ReadonlyArray<Paint> | typeof figma.mixed;
    fillStyleId?: string | typeof figma.mixed;
};

function hasFills(node: SceneNode): node is NodeWithFills {
    return 'fills' in node;
}

function extractSolidFill(node: SceneNode): ColorInfo | null {
    if (!hasFills(node)) return null;
    const fills = node.fills;
    if (fills === figma.mixed || !Array.isArray(fills)) return null;

    let figmaStyleName: string | undefined;
    if ('fillStyleId' in node) {
        const styleId = node.fillStyleId;
        if (styleId && styleId !== figma.mixed && typeof styleId === 'string') {
            figmaStyleName = getStyleName(styleId);
        }
    }

    for (let i = fills.length - 1; i >= 0; i--) {
        const fill = fills[i];
        if (fill.visible !== false && fill.type === 'SOLID') {
            const { r, g, b } = fill.color;
            const hex = rgbToHex(r, g, b);
            const tokenName = getTokenName(hex, figmaStyleName);
            const nearestDS = tokenName ? undefined : findNearestDSColor(hex) || undefined;

            return {
                hex,
                rgb: { r, g, b },
                opacity: fill.opacity ?? 1,
                tokenName,
                nearestDS
            };
        }
    }

    return null;
}

function hasComplexFill(node: SceneNode): boolean {
    if (!hasFills(node)) return false;
    const fills = node.fills;
    if (fills === figma.mixed) return true;
    if (!Array.isArray(fills)) return false;
    return fills.some(f => f.visible !== false &&
        (f.type === 'GRADIENT_LINEAR' || f.type === 'GRADIENT_RADIAL' ||
            f.type === 'GRADIENT_ANGULAR' || f.type === 'GRADIENT_DIAMOND' || f.type === 'IMAGE'));
}

function findBackgroundColor(node: SceneNode): ColorInfo {
    let current: BaseNode | null = node.parent;
    while (current !== null) {
        if (current.type === 'PAGE' || current.type === 'DOCUMENT') break;
        if ('fills' in current) {
            const fill = extractSolidFill(current as SceneNode);
            if (fill && fill.opacity > 0.1) return fill;
        }
        current = current.parent;
    }
    return { hex: '#FFFFFF', rgb: { r: 1, g: 1, b: 1 }, opacity: 1, tokenName: 'White' };
}

// ============================================
// SMART SEVERITY
// ============================================

function hasReadableContent(node: SceneNode, containerFill: ColorInfo): boolean {
    if (!('children' in node)) return false;
    for (const child of node.children) {
        if (!child.visible) continue;
        if (child.type === 'TEXT') {
            const textFill = extractSolidFill(child);
            if (textFill && textFill.opacity > 0.1 && calculateContrastRatio(textFill, containerFill) >= 4.5) return true;
        }
        if (child.type === 'VECTOR' || child.type === 'BOOLEAN_OPERATION') {
            const vectorFill = extractSolidFill(child);
            if (vectorFill && vectorFill.opacity > 0.1 && calculateContrastRatio(vectorFill, containerFill) >= 3.0) return true;
        }
        if ('children' in child && hasReadableContent(child, containerFill)) return true;
    }
    return false;
}

function assessContainerSeverity(node: SceneNode, foreground: ColorInfo, background: ColorInfo, ratio: number): { status: Severity; isDecorative: boolean; reason?: string } {
    if (ratio >= 3.0) return { status: 'pass', isDecorative: false };
    if ('children' in node && hasReadableContent(node, foreground)) {
        return { status: 'warning', isDecorative: true, reason: 'Low container contrast, but content is readable' };
    }
    return { status: 'fail', isDecorative: false };
}

// ============================================
// NODE PROCESSING
// ============================================

function getNodeCategory(nodeType: string): NodeCategory {
    switch (nodeType) {
        case 'TEXT': return 'text';
        case 'RECTANGLE': case 'ELLIPSE': case 'POLYGON': case 'STAR':
        case 'VECTOR': case 'LINE': case 'BOOLEAN_OPERATION': return 'shape';
        case 'FRAME': case 'GROUP': case 'COMPONENT': case 'COMPONENT_SET':
        case 'INSTANCE': case 'SECTION': return 'frame';
        default: return 'other';
    }
}

function getFontSize(node: TextNode): number | null {
    const fontSize = node.fontSize;
    return fontSize === figma.mixed ? null : fontSize;
}

function getFontWeight(node: TextNode): number {
    const weight = node.fontWeight;
    return weight === figma.mixed ? 400 : weight;
}

function isBoldText(weight: number): boolean {
    return weight >= 600;
}

function isLargeText(fontSize: number | null, isBold: boolean): boolean {
    if (fontSize === null) return false;
    return fontSize >= 24 || (fontSize >= 18.66 && isBold);
}

function passesWCAG_AA(ratio: number, isLarge: boolean): boolean {
    return isLarge ? ratio >= 3.0 : ratio >= 4.5;
}

function passesWCAG_AAA(ratio: number, isLarge: boolean): boolean {
    return isLarge ? ratio >= 4.5 : ratio >= 7.0;
}

const VISUAL_NODE_TYPES = [
    'TEXT', 'VECTOR', 'RECTANGLE', 'ELLIPSE', 'POLYGON', 'STAR', 'LINE',
    'BOOLEAN_OPERATION', 'FRAME', 'COMPONENT', 'INSTANCE', 'GROUP'
];

function processNode(node: SceneNode): ContrastResult | null {
    if (!isNodeFullyVisible(node)) return null;
    if (!VISUAL_NODE_TYPES.includes(node.type)) return null;

    const nodeCategory = getNodeCategory(node.type);

    if (hasComplexFill(node)) {
        return {
            nodeId: node.id, nodeName: node.name, nodeType: node.type, nodeCategory,
            foreground: null, background: null, contrastRatio: null,
            fontSize: node.type === 'TEXT' ? getFontSize(node as TextNode) : null,
            fontWeight: node.type === 'TEXT' ? getFontWeight(node as TextNode) : 400,
            isBold: false, isLargeText: false, passesAA: false, passesAAA: false,
            status: 'complex', isDecorative: false, isBrokenColor: false,
            message: 'Has gradient or image fill - manual check required'
        };
    }

    const foreground = extractSolidFill(node);
    if (!foreground || foreground.opacity < 0.1) return null;

    const background = findBackgroundColor(node);
    const contrastRatio = calculateContrastRatio(foreground, background);

    const fontSize = node.type === 'TEXT' ? getFontSize(node as TextNode) : null;
    const fontWeight = node.type === 'TEXT' ? getFontWeight(node as TextNode) : 400;
    const isBold = isBoldText(fontWeight);
    const largeText = isLargeText(fontSize, isBold);

    const textScale = nodeCategory === 'text' ? matchTextScale(fontSize, fontWeight) : null;

    let status: Severity;
    let isDecorative = false;
    let decorativeReason: string | undefined;
    let passesAA: boolean;
    let passesAAA: boolean;

    if (nodeCategory === 'text') {
        passesAA = passesWCAG_AA(contrastRatio, largeText);
        passesAAA = passesWCAG_AAA(contrastRatio, largeText);
        status = passesAA ? 'pass' : 'fail';
    } else {
        passesAA = contrastRatio >= 3.0;
        passesAAA = contrastRatio >= 4.5;
        const severity = assessContainerSeverity(node, foreground, background, contrastRatio);
        status = severity.status;
        isDecorative = severity.isDecorative;
        decorativeReason = severity.reason;
    }

    // BROKEN COLOR CHECK (Passes WCAG but off-palette)
    let isBrokenColor = false;
    let brokenColorReason: string | undefined;

    if (status === 'pass' && !isDecorative) {
        const fgBroken = !foreground.tokenName;
        const bgBroken = !background.tokenName;

        if (fgBroken || bgBroken) {
            status = 'warning';
            isBrokenColor = true;
            brokenColorReason = 'Passes contrast, but uses off-palette colors.';
        }
    }

    const wcagGuideline = getWcagGuideline(contrastRatio, largeText, nodeCategory === 'text', fontSize);

    return {
        nodeId: node.id, nodeName: node.name, nodeType: node.type, nodeCategory,
        foreground, background,
        contrastRatio: Math.round(contrastRatio * 100) / 100,
        fontSize, fontWeight, isBold, isLargeText: largeText,
        textScaleName: textScale?.name,
        passesAA, passesAAA, status, isDecorative, decorativeReason,
        isBrokenColor, brokenColorReason, wcagGuideline
    };
}

function traverseNodes(node: SceneNode, results: ContrastResult[]): void {
    const result = processNode(node);
    if (result) results.push(result);
    if ('children' in node) {
        for (const child of node.children) traverseNodes(child, results);
    }
}

// ============================================
// COLOR MATRIX
// ============================================

function collectUniqueColors(results: ContrastResult[]): Array<{ hex: string; tokenName?: string; nearestDS?: { hex: string; name: string; distance: number } }> {
    const colorMap = new Map<string, { tokenName?: string; nearestDS?: { hex: string; name: string; distance: number } }>();

    for (const result of results) {
        if (result.foreground && !colorMap.has(result.foreground.hex)) {
            colorMap.set(result.foreground.hex, { tokenName: result.foreground.tokenName, nearestDS: result.foreground.nearestDS });
        }
        if (result.background && !colorMap.has(result.background.hex)) {
            colorMap.set(result.background.hex, { tokenName: result.background.tokenName, nearestDS: result.background.nearestDS });
        }
    }

    return Array.from(colorMap.entries())
        .map(([hex, data]) => ({ hex, tokenName: data.tokenName, nearestDS: data.nearestDS }))
        .sort((a, b) => a.hex.localeCompare(b.hex));
}


function generateColorMatrix(uniqueColors: Array<{ hex: string; tokenName?: string }>, sourceName: string, results: ContrastResult[]): ColorMatrix {
    const combinations: ColorMatrixEntry[] = [];

    // Build a map of combinations to node IDs
    const comboNodeMap = new Map<string, string[]>();
    for (const res of results) {
        if (!res.foreground || !res.background) continue;
        const key = `${res.foreground.hex}_${res.background.hex}`;
        if (!comboNodeMap.has(key)) comboNodeMap.set(key, []);
        comboNodeMap.get(key)!.push(res.nodeId);
    }

    for (const fg of uniqueColors) {
        for (const bg of uniqueColors) {
            if (fg.hex === bg.hex) continue;
            const ratio = calculateContrastFromHex(fg.hex, bg.hex);
            const roundedRatio = Math.round(ratio * 100) / 100;
            const passesAA = ratio >= 4.5;
            const passesAAA = ratio >= 7.0;

            let rating = 'Fail';
            let status = 'fail';
            if (passesAAA) { rating = 'AAA'; status = 'pass'; }
            else if (passesAA) { rating = 'AA'; status = 'pass'; }
            else if (ratio >= 3.0) { rating = 'AA-Large'; status = 'warning'; }

            const key = `${fg.hex}_${bg.hex}`;
            const nodeIds = comboNodeMap.get(key) || [];

            combinations.push({
                foreground: fg.hex, foregroundToken: fg.tokenName,
                background: bg.hex, backgroundToken: bg.tokenName,
                ratio: roundedRatio, passesAA, passesAAA, rating, status,
                nodeIds // Included in export
            });
        }
    }

    combinations.sort((a, b) => b.ratio - a.ratio);
    return { unique_colors: uniqueColors, combinations, generated_at: new Date().toISOString(), source_frame: sourceName };
}

// ============================================
// MAIN PLUGIN
// ============================================

figma.showUI(__html__, { width: 900, height: 750 });

let lastResults: ContrastResult[] = [];
let lastSourceName = '';

figma.ui.onmessage = async (msg: { type: string; nodeId?: string; nodeIds?: string[] }) => {

    if (msg.type === 'scan') {
        // ... (existing scan code) ...
        const selection = figma.currentPage.selection;
        if (selection.length === 0) {
            figma.ui.postMessage({ type: 'error', message: 'Please select one or more elements to scan.' });
            return;
        }

        const allResults: ContrastResult[] = [];
        for (const node of selection) {
            const nodeResult = processNode(node);
            if (nodeResult) allResults.push(nodeResult);
            if ('children' in node) {
                // fix: explicitly cast to SceneNode or check children type if needed, strict mode might complain
                for (const child of node.children) traverseNodes(child, allResults);
            }
        }

        // ... (rest of scan logic) ...
        if (allResults.length === 0) {
            figma.ui.postMessage({ type: 'error', message: 'No visible elements with fills found.' });
            return;
        }

        allResults.sort((a, b) => {
            const order: Record<Severity, number> = { fail: 0, warning: 1, complex: 2, pass: 3 };
            return order[a.status] - order[b.status];
        });

        lastResults = allResults;
        lastSourceName = selection.length === 1 ? selection[0].name : `${selection.length} elements`;
        figma.ui.postMessage({ type: 'results', data: allResults });
    }

    if (msg.type === 'get-unique-colors') {
        const uniqueColors = collectUniqueColors(lastResults);
        figma.ui.postMessage({ type: 'unique-colors', data: uniqueColors });
    }

    if (msg.type === 'export-matrix') {
        if (lastResults.length === 0) {
            figma.ui.postMessage({ type: 'error', message: 'Please scan a selection first.' });
            return;
        }
        const uniqueColors = collectUniqueColors(lastResults);
        const matrix = generateColorMatrix(uniqueColors, lastSourceName, lastResults);
        figma.ui.postMessage({ type: 'matrix-data', data: matrix });
    }

    if (msg.type === 'get-matrix-data') {
        if (lastResults.length === 0) {
            figma.ui.postMessage({ type: 'error', message: 'Please scan a selection first.' });
            return;
        }
        const uniqueColors = collectUniqueColors(lastResults);
        const matrix = generateColorMatrix(uniqueColors, lastSourceName, lastResults);
        figma.ui.postMessage({ type: 'matrix-data-display', data: matrix });
    }

    if (msg.type === 'select-node' && msg.nodeId) {
        const node = figma.getNodeById(msg.nodeId);
        if (node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
            figma.currentPage.selection = [node as SceneNode];
            figma.viewport.scrollAndZoomIntoView([node as SceneNode]);
        }
    }

    if (msg.type === 'select-nodes' && msg.nodeIds) {
        const nodes: SceneNode[] = [];
        for (const id of msg.nodeIds) {
            const node = figma.getNodeById(id);
            if (node && node.type !== 'DOCUMENT' && node.type !== 'PAGE') {
                nodes.push(node as SceneNode);
            }
        }
        if (nodes.length > 0) {
            figma.currentPage.selection = nodes;
            figma.viewport.scrollAndZoomIntoView(nodes);
            figma.notify(`Selected ${nodes.length} layers`);
        }
    }

    if (msg.type === 'close') {
        figma.closePlugin();
    }
};
