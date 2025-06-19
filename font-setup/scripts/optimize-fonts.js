// This script helps you convert and optimize font files
// You'll need to install: npm install fontkit

import fs from "fs"
import fontkit from "fontkit"

async function optimizeFont(inputPath, outputPath) {
  try {
    console.log(`Optimizing font: ${inputPath}`)

    // Load the font
    const font = fontkit.openSync(inputPath)

    // Get font info
    console.log(`Font family: ${font.familyName}`)
    console.log(`Font weight: ${font.weight}`)
    console.log(`Font style: ${font.style}`)

    // For WOFF2 conversion, you'd typically use a tool like woff2_compress
    // This is just for analysis
    console.log(`Original file size: ${fs.statSync(inputPath).size} bytes`)

    console.log("✅ Font analysis complete")
  } catch (error) {
    console.error("❌ Font optimization failed:", error.message)
  }
}

// Example usage
const fontFiles = ["path/to/SquareSans-Regular.ttf", "path/to/SquareSans-Bold.ttf"]

fontFiles.forEach((file) => {
  if (fs.existsSync(file)) {
    optimizeFont(file, file.replace(".ttf", ".woff2"))
  } else {
    console.log(`⚠️  Font file not found: ${file}`)
  }
})
