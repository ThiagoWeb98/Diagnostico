const fs = require('fs');
const path = require('path');

const colorMap = {
    // Backgrounds (Dark Browns -> Petrol Blues)
    '#1a120b': '#0A192F',
    '#120c08': '#060D1A',
    '#140d08': '#081221',
    '#050505': '#020617',
    '#0b090c': '#040E1F',
    '#0e0d0f': '#0F172A',

    // Backgrounds (Light/Beiges -> Whites/Sleek Grays)
    '#f2ede7': '#F8FAFC',
    '#e9e4df': '#F1F5F9', // slightly darker than F8FAFC

    // Texts (Light Beiges -> Slate)
    '#f2f0ed': '#F1F5F9',
    '#d4cabe': '#CBD5E1',

    // Golds (Various shades -> Elegant consistent golds)
    '#c8a178': '#D4AF37',
    '#c5a368': '#D4AF37', // primary gold
    '#d4b494': '#FBE38E', // lighter gold
    '#9b6d4b': '#B38F22', // darker gold
    '#c5a689': '#D4AF37'
};

function replaceColorsInFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    for (const [oldColor, newColor] of Object.entries(colorMap)) {
        // case insensitive replace for hex codes
        const regex = new RegExp(oldColor, 'gi');
        if (regex.test(content)) {
            content = content.replace(regex, newColor);
            changed = true;
        }
    }

    if (changed) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated colors in ${filePath}`);
    }
}

function traverseDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            traverseDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
            replaceColorsInFile(fullPath);
        }
    }
}

// Run on App.tsx and components folder
if (fs.existsSync('App.tsx')) replaceColorsInFile('App.tsx');
if (fs.existsSync('components')) traverseDir('components');
