<!DOCTYPE html>
<html lang="{{ $page->language ?? 'en' }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="canonical" href="{{ $page->getUrl() }}">
    <meta name="description" content="{{ $page->description }}">
    <title>{{ $page->title }}</title>
    <link rel="stylesheet" href="{{ mix('css/main.css', 'assets/build') }}">
    <script defer src="{{ mix('js/main.js', 'assets/build') }}"></script>
</head>
<body class="dark:bg-gray-700 dark:text-gray-300 bg-gray-50 font-serif antialiased">
<div class="container mx-auto">
    <div class="mx-3">
        <header class="my-8">
            <h1 class="text-3xl font-bold mb-3 font-sans">
                <a href="/" class="hover:text-blue-600">vblinden.</a>
            </h1>

            @if ($description ?? false)
                <p class="mb-3">
                    Hello friends, my name is Vincent van der Linden and you can find me online as
                    <a href="https://github.com/vblinden" target="_blank" rel="noreferrer"
                       class="text-blue-600 hover:text-blue-800">@vblinden</a>. I am currently working as a Software
                    Engineer at team.blue. On this website you can find some thoughts and other babblings that I thought
                    were important or useful enough to put online. Please enjoy.
                </p>

                <p>
                    Disclaimer: The opinions expressed herein are my own personal opinions and do not represent my
                    employer’s view in any way.
                </p>
            @endif
        </header>

        @yield('body')
    </div>
</div>
</body>
</html>
