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

Route::get('/admin/home', 'Admin\AdminController@index')->name('admin.index');
Route::post('/admin/logout', 'Admin\AdminLoginController@logout');



Route::resource('signup', 'SignupController')->only(['store']);
Route::resource('user-types', 'UserTypeController');
Route::resource('meeting-profiles', 'MeetingProfileController');
Route::resource('meeting-request', 'MeetingRequestController');
Route::get('/admin/meeting-requests', function(){
    return view('admins.meetingrequest.index');
});

Auth::routes(['verify' => true]);
Route::post('/login', 'Auth\LoginController@login')->name('user.login');

Route::group(['middleware' => ['auth', 'verified']], function () {
    Route::get('/home', 'UserController@index')->name('user.index');


    Route::post('/logout', 'Auth\LoginController@logout')->name('user.logout');


    Route::get('/portal/applicant', 'Portal\ApplicantController@index');

    Route::get('/portal/finalregistration', function(){
        return view('finalregistration.index');
    });
});

