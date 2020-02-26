<!doctype html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>@yield('page_title') | Portal</title>
    <link rel="stylesheet" href="{{mix('css/app.css')}}">
    @yield('styles')
    <script>
        window.appLang = '{{ app()->getLocale() }}';
    </script>
</head>

<body>

    <div id="app">
        <portal-header></portal-header>
        <div class="container">
            @yield('content')
        </div>
    </div>

    <script src="{{mix('js/app.js')}}"></script>
    {{--<script src="{{mix(!empty($vueModulePath) ? $vueModulePath : 'js/modules/default/main.js')}}"></script>--}}

    @stack('scripts')

    </body>
</html>
