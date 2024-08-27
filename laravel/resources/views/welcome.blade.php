<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />

        <!-- Styles -->
        @vite(['resources/sass/app.scss', 'resources/js/app.js'])
    </head>
    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
        <header class="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">

        </header>
        <main class="col-12 row">
            <img src="{{Vite::asset('resources/img/642030.jpg')}}" alt="">
            <img src="./img/642030.jpg" alt="">
        </main>

        <footer class="py-16 text-center text-sm text-black dark:text-white/70">
            Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
        </footer>
    </body>
</html>
