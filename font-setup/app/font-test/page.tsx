"use client"

import { useEffect, useState } from "react"

const FONT_BASE_URL = "https://squarefonts.vercel.app/fonts/Sans/"

const fontVariants = [
  { name: "Square Sans Text Regular", weight: 400, style: "normal", file: "SquareSansText-Regular.woff2" },
  { name: "Square Sans Text Italic", weight: 400, style: "italic", file: "SquareSansText-Italic.woff2" },
  { name: "Square Sans Text Medium", weight: 500, style: "normal", file: "SquareSansText-Medium.woff2" },
  { name: "Square Sans Text Medium Italic", weight: 500, style: "italic", file: "SquareSansText-MediumItalic.woff2" },
  { name: "Square Sans Text SemiBold", weight: 600, style: "normal", file: "SquareSansText-SemiBold.woff2" },
  {
    name: "Square Sans Text SemiBold Italic",
    weight: 600,
    style: "italic",
    file: "SquareSansText-SemiBoldItalic.woff2",
  },
  { name: "Square Sans Text Bold", weight: 700, style: "normal", file: "SquareSansText-Bold.woff2" },
  { name: "Square Sans Text Bold Italic", weight: 700, style: "italic", file: "SquareSansText-BoldItalic.woff2" },
]

export default function FontTestPage() {
  const [fontStatus, setFontStatus] = useState<{ [key: string]: "loading" | "loaded" | "error" }>({})

  useEffect(() => {
    fontVariants.forEach((font) => {
      const fontUrl = `${FONT_BASE_URL}${font.file}`
      setFontStatus((prev) => ({ ...prev, [font.name]: "loading" }))

      fetch(fontUrl, { method: "HEAD" })
        .then((response) => {
          if (response.ok) {
            setFontStatus((prev) => ({ ...prev, [font.name]: "loaded" }))
            console.log(`✅ ${font.name} loaded successfully from ${fontUrl}`)
          } else {
            setFontStatus((prev) => ({ ...prev, [font.name]: "error" }))
            console.error(`❌ ${font.name} failed to load: ${response.status} from ${fontUrl}`)
          }
        })
        .catch((error) => {
          setFontStatus((prev) => ({ ...prev, [font.name]: "error" }))
          console.error(`❌ ${font.name} network error for ${fontUrl}:`, error)
        })
    })
  }, [])

  return (
    <div className="min-h-screen p-8 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold mb-10 text-center" style={{ fontFamily: "'Square Sans Text', sans-serif" }}>
          Square Sans Text - Font Test
        </h1>

        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: "'Square Sans Text', sans-serif" }}>
            Font Loading Status
          </h2>
          {fontVariants.map((font) => (
            <div key={font.name} className="flex items-center gap-3 mb-2">
              <div
                className={`w-3.5 h-3.5 rounded-full ${
                  fontStatus[font.name] === "loading"
                    ? "bg-yellow-400 animate-pulse"
                    : fontStatus[font.name] === "loaded"
                      ? "bg-green-500"
                      : "bg-red-500"
                }`}
              />
              <span
                className="font-medium text-sm"
                style={{ fontFamily: "'Square Sans Text', sans-serif", fontWeight: font.weight, fontStyle: font.style }}
              >
                {font.name}
              </span>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  fontStatus[font.name] === "loading"
                    ? "text-yellow-700 bg-yellow-100"
                    : fontStatus[font.name] === "loaded"
                      ? "text-green-700 bg-green-100"
                      : "text-red-700 bg-red-100"
                }`}
              >
                {fontStatus[font.name] || "pending"}
              </span>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          {fontVariants.map((font) => (
            <div key={font.name} className="border p-6 rounded-lg shadow-sm">
              <h3
                className="text-xl font-semibold mb-3"
                style={{ fontFamily: "'Square Sans Text', sans-serif", fontWeight: font.weight, fontStyle: font.style }}
              >
                {font.name}
              </h3>
              <p
                className="text-base mb-2"
                style={{ fontFamily: "'Square Sans Text', sans-serif", fontWeight: font.weight, fontStyle: font.style }}
              >
                The quick brown fox jumps over the lazy dog. 1234567890
              </p>
              <p
                className="text-3xl mb-2"
                style={{ fontFamily: "'Square Sans Text', sans-serif", fontWeight: font.weight, fontStyle: font.style }}
              >
                Large Text Sample
              </p>
              <p
                className="text-xs text-gray-500"
                style={{ fontFamily: "'Square Sans Text', sans-serif", fontWeight: font.weight, fontStyle: font.style }}
              >
                Small text to test readability and rendering quality.
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Square Sans Text', sans-serif" }}>
            Manual Verification
          </h3>
          <p className="mb-4">Open your browser's Developer Tools (F12) and check:</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Network Tab:</strong> Look for font requests to <code>{FONT_BASE_URL}*</code>
            </li>
            <li>
              <strong>Console:</strong> Check for font loading success/error messages.
            </li>
            <li>
              <strong>Elements Tab:</strong> Inspect computed styles to verify{" "}
              <code>font-family: "Square Sans Text"</code> and correct weights/styles.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
