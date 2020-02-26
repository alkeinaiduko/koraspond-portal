<?php

namespace App\Http\Controllers\Admin;

use Auth;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminLoginController extends Controller
{
    public function __construct()
    {
        $this->middleware('guest:admin')->except('logout');
    }

    public function showLoginForm()
    {
        return view('admins.login');
    }

    public function login(Request $request)
    {
        $credentials = array(
            'email' => $request->email,
            'password' => $request->password
        );

        if (Auth::guard('admin')->attempt($credentials)) {
            return redirect()->route('admin.index');
        }

        return "Username or password incorrect!";
    }

    public function logout()
    {
        try {
            Auth::guard('admin')->logout();

            return response(['status' => 'Success logout'], 200);
        } catch (\Exception $e) {
            return response(['error' => $e->getMessage()]);
        }
    }
}