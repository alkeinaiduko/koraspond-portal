<?php

namespace App\Http\Controllers;

use App\Signup;
use App\User;
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
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return 'test2';
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
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

    /**
     * Display the specified resource.
     *
     * @param  \App\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function show(Signup $signup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function edit(Signup $signup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Signup $signup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Signup  $signup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Signup $signup)
    {
        //
    }
}
