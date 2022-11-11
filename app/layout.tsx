import 'app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>vblinden.dev</title>
        <meta
          name="description"
          content="Hello friends, my name is Vincent van der Linden. I am currently working as a software engineer at team.blue. On this website you can find some thoughts and
          other babblings that I thought were important or useful enough to put online. Please enjoy."
        />
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
      </head>
      <body className="dark:bg-gray-700 dark:text-gray-300 bg-gray-50 font-serif antialiased">
        <div className="container mx-auto">
          <div className="mx-3">
            <div className="my-8">
              <h1 className="text-3xl font-bold mb-3 font-sans">
                <a href="/" className="hover:text-blue-600">
                  vblinden.
                </a>
              </h1>
            </div>

            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
