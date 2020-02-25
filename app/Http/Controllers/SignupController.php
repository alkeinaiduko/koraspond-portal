<?php

namespace App\Http\Controllers;

use App\Eloquent\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Validator;

class SignupController extends Controller
{
    /**
     * Display detailed signup
     *
     * @return View
     */
    public function index()
    {
        //
        if (Auth::check()) {
            // Get the currently authenticated user
            $user = Auth::user();

            // check if registration is completed
            if (!$user->drafted) {
                // redirect
                return redirect('/');
            }

            // view
            return view('signup.detail', compact('user'));
        } else {

            // redirect
            return redirect('/login');
        }
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
            return response()->json(['errors'=>$validator->errors()], 422);
        }

        $data = $request->all();

        // create
        $user = User::create([
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'user_type_id' => $data['user_type_id'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'country' => $data['country'],
            'city' => $data['city'],
            'address' => $data['address'],
            'phone' => $data['phone'],
            'country_code' => $data['country_code'],
            'newsletter' => $data['newsletter'] ?? false
        ]);

        $credentials = $request->only('email', 'password');

        // login user
        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'User created but failed to login.']);
        }

        // create registration steps
        $user->basicInfo()->create();
        $user->arrivalDetail()->create();
        $user->businessRegistration()->create();

        return new UserResource($user);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param int $id User ID
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $user = User::find(1);

        // prepare arrays
        $basicInfo = [];
        $arrivalDetail = [];
        $businessRegistration = [];

        // table columns
        $basicInfoColumns = array_keys($user->basicInfo->getAttributes());
        $arrivalDetailColumns = array_keys($user->arrivalDetail->getAttributes());
        $businessRegistrationColumns = array_keys($user->businessRegistration->getAttributes());

        // basic info
        foreach ($request->input('basic_info') as $key => $info) {
            if (in_array($key, $basicInfoColumns))
                $basicInfo[$key] = $info;
        }

        // arrival detail
        foreach ($request->input('arrival_detail') as $key => $detail) {
            if (in_array($key, $arrivalDetailColumns))
                $arrivalDetail[$key] = $detail;
        }

        // registration detail
        foreach ($request->input('business_registration') as $key => $reg) {
            if (in_array($key, $businessRegistrationColumns))
                $businessRegistration[$key] = $reg;
        }

        // update
        $user->basicInfo()->update($basicInfo);
        $user->arrivalDetail()->update($arrivalDetail);
        $user->businessRegistration()->update($businessRegistration);

        $user->drafted = $request->input('drafted'); // true or false, false == completed
        $user->drafted_step = $request->input('drafted_step'); // 1 - basic info, 2 - arrival detail, 3 - b2b/b2g, 4 - b2b/b2g signup
        $user->save();

        // you add redirection here

        return new UserResource($user->refresh());
    }
}
