import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-indigo-50 via-sky-50 to-white text-gray-900 antialiased">
        <header className="backdrop-blur-sm bg-white/60 sticky top-0 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <h1 className="text-xl font-extrabold tracking-tight">AccessAI</h1>
              </div>
              <nav className="flex items-center space-x-4">
                <a href="/" className="text-gray-700 hover:text-gray-900">
                  Home
                </a>
                <a href="/results" className="text-gray-700 hover:text-gray-900">
                  Results
                </a>
              </nav>
            </div>
          </div>
        </header>
        <main className="flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-4xl">{children}</div>
        </main>
      </body>
    </html>
  );
}
