function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="text-center p-6 rounded-2xl shadow-lg bg-white">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          🚀 Tailwind is Working!
        </h1>
        <p className="text-gray-700">
          If you see this styled text, Tailwind is set up correctly.
        </p>
        <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
          Test Button
        </button>
      </div>
    </div>
  )
}

export default App
