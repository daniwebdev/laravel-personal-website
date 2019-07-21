const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .styles([
        'public/plugins/summernote/dist/summernote-bs4.css',
        'public/plugins/datetimepicker/build/jquery.datetimepicker.min.css',
        'public/plugins/sweetalert2/dist/sweetalert2.css'
    ], 'public/css/all.css')
    .scripts([
        'node_modules/axios/dist/axios.min.js',
        'public/plugins/datetimepicker/build/jquery.datetimepicker.full.min.js',
        'public/plugins/sweetalert2/dist/sweetalert2.js',
        'public/plugins/summernote/dist/summernote-bs4.min.js',
        'resources/js/general.js'
    ], 'public/js/all.js');
