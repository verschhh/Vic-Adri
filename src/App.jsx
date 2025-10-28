function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">
            Vic & Adri
          </h1>
          <p className="text-2xl text-gray-600">
            We're getting married!
          </p>
        </header>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">
              Save the Date
            </h2>
            <p className="text-xl text-gray-600 mb-2">
              Join us as we celebrate our special day
            </p>
            <p className="text-lg text-gray-500">
              More details coming soon...
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Ceremony
              </h3>
              <p className="text-gray-600">
                Details to be announced
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Reception
              </h3>
              <p className="text-gray-600">
                Details to be announced
              </p>
            </div>
          </div>
        </main>

        <footer className="text-center mt-16">
          <p className="text-gray-600">
            Built with ❤️ using Vite + React + Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
