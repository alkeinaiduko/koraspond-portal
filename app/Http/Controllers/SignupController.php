<?php

namespace App\Http\Controllers;

use App\Eloquent\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SignupController extends Controller
{

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required',
            'last_name' => 'required',
            'user_type_id' => 'required',
            'email' => 'required|unique:users',
            'password' =>'required',
            'country' => 'required',
            'city' => 'required',
            'address' => 'required',
            'phone' => 'required'
        ]);

        if($validator->fails()) {
            return response($validator->errors());
        }

        $data = $request->all();

        // create
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'user_type_id' => $data['user_type_id'],
            'email' => $data['email'],
            'password' => Hash ::make($data['password']),
            'country' => $data['country'],
            'city' => $data['city'],
            'address' => $data['address'],
            'phone' => $data['phone']
        ]);


        $credentials = $request->only('email', 'password');

        // login user
        if(!Auth::attempt($credentials)) {
            return response()->json(['message' => 'User created but failed to login.']);
        }

        return response()->json($user);
    }
}
