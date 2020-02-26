const mix = require('laravel-mix');
const config = require('./webpack.config');

/*
 |--------------------------------------------------------------------------
 | Webpack config
 |--------------------------------------------------------------------------
 */
mix.webpackConfig(config);
mix.babelConfig({
   plugins: ['@babel/plugin-syntax-dynamic-import']
});

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

 /*
 |--------------------------------------------------------------------------
 | This is the default module and is used when the section does not need to create a Vue module.
 | We need to include this file into .blade so that Buefy markup works correctly
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.sass', 'public/css');

mix.browserSync('http://koraspond.test');
