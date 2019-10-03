<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Auth::routes();

Route::get('/', function () {
    return view('public.blog');
});
Route::get('/single-post', function () {
    return view('public.read');
});

Route::get('/@{username}', 'Main\MainController@PublicProfile');

Route::get('/home', 'HomeController@index')->name('home');

Route::middleware(['auth'])->group(function () {

    Route::prefix('user')->group(function () {
        
        Route::get  ('blog',             'Blog\BlogController@all');
        Route::get  ('blog/add',         'Blog\BlogController@write');
        Route::get  ('blog/edit/{id}',   'Blog\BlogController@write');
        Route::post ('blog/save',        'Blog\BlogController@save');

        Route::get  ('profile',            'Profile\ProfileController@index');
        Route::post ('profile',            'Profile\ProfileController@save');
        Route::post ('profile/socmed',     'Profile\ProfileController@saveSocmed');
        Route::post ('profile/pekerjaan',  'Profile\ProfileController@savePekerjaan');

        Route::get ('profile/delete/{type_delete}', 'Profile\ProfileController@delete');

    });

});