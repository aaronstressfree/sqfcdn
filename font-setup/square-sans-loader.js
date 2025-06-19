/**
 * Square Sans Text Font Loader
 * Easy integration for any project
 */

// Option 1: Load via CSS import
export function loadSquareSansCSS() {
  const link = document.createElement("link")
  link.rel = "stylesheet"
  link.href = "https://squarefonts.vercel.app/square-sans-font.css" // You'd host this CSS file
  document.head.appendChild(link)
}

// Option 2: Load fonts programmatically
export function loadSquareSansFonts() {
  const fonts = [
    { weight: "400", style: "normal", file: "SquareSansText-Regular.woff2" },
    { weight: "400", style: "italic", file: "SquareSansText-Italic.woff2" },
    { weight: "500", style: "normal", file: "SquareSansText-Medium.woff2" },
    { weight: "500", style: "italic", file: "SquareSansText-MediumItalic.woff2" },
    { weight: "600", style: "normal", file: "SquareSansText-SemiBold.woff2" },
    { weight: "600", style: "italic", file: "SquareSansText-SemiBoldItalic.woff2" },
    { weight: "700", style: "normal", file: "SquareSansText-Bold.woff2" },
    { weight: "700", style: "italic", file: "SquareSansText-BoldItalic.woff2" },
  ]

  fonts.forEach((font) => {
    const fontFace = new FontFace("Square Sans Text", `url(https://squarefonts.vercel.app/fonts/Sans/${font.file})`, {
      weight: font.weight,
      style: font.style,
      display: "swap",
    })

    fontFace
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont)
        console.log(`✅ Loaded Square Sans Text ${font.weight} ${font.style}`)
      })
      .catch((error) => {
        console.error(`❌ Failed to load Square Sans Text ${font.weight} ${font.style}:`, error)
      })
  })
}

// Option 3: Apply to body
export function applySquareSansToBody() {
  document.body.style.fontFamily =
    '"Square Sans Text", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
}

// All-in-one function
export function initSquareSans(options = {}) {
  const { method = "css", applyToBody = true } = options

  if (method === "css") {
    loadSquareSansCSS()
  } else {
    loadSquareSansFonts()
  }

  if (applyToBody) {
    // Wait a bit for fonts to load
    setTimeout(() => applySquareSansToBody(), 100)
  }
}
