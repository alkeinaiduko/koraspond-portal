<?php

namespace App\Http\Controllers;

use App\Eloquent\UserType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;

class UserTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        /**
         * IDs
         *
         * 2 = applicant
         * 7 = investor
         * 5 = ISDB
         * 6 = Gov't Minister
         */

        $signup = request('signup');

        if($signup === 'true') {
            $ids = [2, 7, 5, 6];
            $types = UserType::whereIn('id', $ids)->get()->sortBy(function($type) use ($ids) {
                // sort according to given ids
                return array_search($type->getKey(), $ids);
            });
        } else {
            $types = UserType::all();
        }

        return response()->json($types);
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\UserType  $role
     * @return \Illuminate\Http\Response
     */
    public function show(UserType $role)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\UserType  $role
     * @return \Illuminate\Http\Response
     */
    public function edit(UserType $role)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\UserType  $role
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserType $role)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\UserType  $role
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserType $role)
    {
        //
    }
}
