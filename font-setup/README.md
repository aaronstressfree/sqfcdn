# Square Sans Text - Single Import Font System

## One-Line Integration

Add this single line to your CSS or HTML:

### CSS Import
\`\`\`css
@import url('https://squarefonts.vercel.app/index.css');
\`\`\`

### HTML Link
\`\`\`html
<link rel="stylesheet" href="https://squarefonts.vercel.app/index.css">
\`\`\`

## Usage Examples

### Basic Usage
\`\`\`css
body {
  font-family: var(--font-square-sans);
}
\`\`\`

### With Classes
\`\`\`html
<p class="font-square-sans">Text in Square Sans</p>
<p class="font-square-sans-bold">Bold text</p>
<p class="font-square-sans-italic">Italic text</p>
\`\`\`

### Tailwind CSS Integration
\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Square Sans Text', 'system-ui', 'sans-serif'],
      }
    }
  }
}
\`\`\`

### Next.js Integration
\`\`\`css
/* app/globals.css */
@import url('https://squarefonts.vercel.app/index.css');

body {
  font-family: var(--font-square-sans);
}
\`\`\`

## Available Weights
- Regular (400)
- Medium (500)
- SemiBold (600)
- Bold (700)
- All weights in italic

## CDN
- Main CSS: `https://squarefonts.vercel.app/index.css`
- Font files: `https://squarefonts.vercel.app/fonts/Sans/`
