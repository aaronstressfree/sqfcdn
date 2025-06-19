export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Square Sans Text Test</h1>

        <div className="space-y-4">
          <p className="text-lg font-normal">Regular text - The quick brown fox jumps over the lazy dog.</p>
          <p className="text-lg font-medium">Medium text - The quick brown fox jumps over the lazy dog.</p>
          <p className="text-lg font-semibold">SemiBold text - The quick brown fox jumps over the lazy dog.</p>
          <p className="text-lg font-bold">Bold text - The quick brown fox jumps over the lazy dog.</p>
          <p className="text-lg font-normal italic">Italic text - The quick brown fox jumps over the lazy dog.</p>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Font Loading Check</h2>
          <p className="text-sm text-gray-600">
            If you see this text in Square Sans Text (not your system font), the registry is working correctly. Open
            Developer Tools (F12) → Network tab to see font requests if needed.
          </p>
        </div>
      </div>
    </div>
  )
}
