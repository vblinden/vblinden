import 'app/globals.css';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>vblinden.dev</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Hello friends, my name is Vincent van der Linden. I am currently working as a software engineer at team.blue. On this website you can find some thoughts and
          other babblings that I thought were important or useful enough to put online. Please enjoy."
        />
        <link rel="shortcut icon" href="data:image/x-icon;," type="image/x-icon" />
      </head>
      <body className="dark:bg-zinc-900 dark:text-zinc-400 bg-gray-50 antialiased">
        <div className="container mx-auto">
          <div className="mx-3">
            <div className="my-8">
              <h1 className="text-3xl font-bold mb-3 font-sans">
                <a href="/" className="hover:text-blue-600 dark:text-white dark:hover:text-slate-100">
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
