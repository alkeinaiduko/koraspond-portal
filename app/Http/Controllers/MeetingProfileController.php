<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Eloquent\MeetingProfile;

class MeetingProfileController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $meetingProfiles = MeetingProfile::all();

        return response()->json($meetingProfiles);
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
     * @param  \App\Eloquent\MeetingProfile  $meetingProfile
     * @return \Illuminate\Http\Response
     */
    public function show(MeetingProfile $meetingProfile)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Eloquent\MeetingProfile  $meetingProfile
     * @return \Illuminate\Http\Response
     */
    public function edit(MeetingProfile $meetingProfile)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Eloquent\MeetingProfile  $meetingProfile
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MeetingProfile $meetingProfile)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Eloquent\MeetingProfile  $meetingProfile
     * @return \Illuminate\Http\Response
     */
    public function destroy(MeetingProfile $meetingProfile)
    {
        //
    }
}