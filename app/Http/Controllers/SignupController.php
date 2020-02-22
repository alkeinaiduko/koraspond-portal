<?php

namespace App\Http\Controllers;

use App\Eloquent\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class SignupController extends Controller
{
    /**
     * Role IDs
     * @var int
     */
    public $investor_id;

    public function __construct()
    {
        $this->investor_id = 7;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'first_name' => 'required'
            // other validators here
        ]);

        // investor
        $validator->sometimes(['interest_id', 'partnership_id'], 'required', function($input) {
            return $input->role_id == $this->investor_id;
        });

        if($validator->fails()) {
            return response($validator->errors());
        }

        $data = $request->all();

        // create
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'role_id' => $data['role_id'], // Admin
            'email' => $data['email'],
            'password' => Hash ::make($data['password']),
            'country' => $data['country'],
            'city' => $data['city'],
            'address' => $data['address'],
            'phone' => $data['phone']
        ]);

        switch ($user->role_id) {
            case $this->investor_id:
                $user->interest_id = $data['interest_id'];
                $user->partnership_id = $data['partnership_id'];
                break;

            default:
                # code...
                break;
        }

        $user->save();

        return response()->json($user);
    }
}
