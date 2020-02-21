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

Route::get('/', function () {
    return view('welcome');
})->name('welcome')->middleware('guest');

Route::get('/admin/login', 'Admin\AdminsLoginController@showLoginForm')->name('admin.login');
Route::post('/admin/login', 'Admin\AdminsLoginController@login')->name('admin.login.submit');

Route::get('/home', 'UsersController@index')->name('user.index');

Route::get('/admin/home', 'Admin\AdminsController@index')->name('admin.index');

Route::post('login', 'Auth\LoginController@login')->name('user.login');
