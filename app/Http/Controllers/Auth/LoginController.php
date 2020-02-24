<?php

namespace App\Http\Controllers\Auth;

use Auth;
use App\Eloquent\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except(['login', 'logout']);
    }

    public function login(Request $request)
    {
        $credentials = $credentials = $request->only('email', 'password');

        if(Auth::attempt($credentials)) {
            return response()->json(['status' => 'success'], 200);
        }

        return response()->json(['error' => 'Username or password incorrect!'], 422);
    }

    public function logout()
    {
        Auth::logout();

        return response()->json(['status', 'Success logout'], 200);
    }
}
