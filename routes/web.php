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

Route::get('/admin/login', 'Admin\AdminLoginController@showLoginForm')->name('admin.login');
Route::post('/admin/login', 'Admin\AdminLoginController@login')->name('admin.login.submit');

Route::get('/home', 'UserController@index')->name('user.index');

Route::get('/admin/home', 'Admin\AdminController@index')->name('admin.index');

Route::post('/login', 'Auth\LoginController@login')->name('user.login');

Route::get('/portal/applicant', 'Portal\ApplicantController@index');

Route::resource('signup', 'SignupController')->only(['store']);
Route::resource('user-types', 'UserTypeController');
Route::resource('meeting-profiles', 'MeetingProfileController');
Route::resource('meeting-request', 'MeetingRequestController');
