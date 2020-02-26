const mix = require('laravel-mix');
const config = require('./webpack.config');

/*
 |--------------------------------------------------------------------------
 | Webpack config
 |--------------------------------------------------------------------------
 */
mix.webpackConfig(config);

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
mix.js('resources/js/modules/Default/main.js', 'public/js/modules/default/main.js');

/*
 |--------------------------------------------------------------------------
 | Homepage modules
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/modules/HomePage/main.js', 'public/js/modules/homepage')

/*
 |--------------------------------------------------------------------------
 | Final Registration modules
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/modules/Portal/FinalRegistration/main.js', 'public/js/modules/finalregistration')

/*
 |--------------------------------------------------------------------------
 | Portal modules
 |--------------------------------------------------------------------------
 */
// Dashboard Portal Page
mix.js('resources/js/modules/Portal/Dashboard/main.js', 'public/js/modules/dashboard')


/*
 |--------------------------------------------------------------------------
 | Admin Dashboard modules
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/modules/Admin/Dashboard/main.js', 'public/js/modules/admin-dashboard')

/*
 |--------------------------------------------------------------------------
 | Admin Dashboard modules
 |--------------------------------------------------------------------------
 */
mix.js('resources/js/modules/Admin/MeetingRequest/main.js', 'public/js/modules/meetingrequest')


mix.sass('resources/sass/app.sass', 'public/css');


mix.browserSync('http://koraspond.test');
