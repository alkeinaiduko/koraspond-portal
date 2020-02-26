<?php

namespace App\Http\Controllers;

use Auth;
use Illuminate\Http\Request;
use App\Eloquent\MeetingRequest;
use App\Http\Resources\MeetingRequestResource;

class MeetingRequestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $meetingRequest = MeetingRequest::create([
            'request_from' => $request->request_from ?? Auth::user()->id,
            'request_to' => $request->request_to,
            'title' => $request->title,
            'content' => $request->content,
        ]);

        return response([
            'status' => 'Success',
            'data' => new MeetingRequestResource($meetingRequest)
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, MeetingRequest $meetingRequest)
    {
        // Only super admin can update/reroute
        if (Auth::guard('admin')->check()) {
            try {
                $meetingRequest->request_from = $request->request_from;
                $meetingRequest->request_to = $request->request_to;
                $meetingRequest->title = $request->title;
                $meetingRequest->content = $request->content;
                $meetingRequest->status = $request->status;

                $meetingRequest->save();

                return response([
                    'status' => 'Successful update',
                    'data' => new MeetingRequestResource($meetingRequest)
                ], 200);
            } catch (\Exception $e) {
                return response(['error' => $e->getMessage()]);
            }

        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function meetingAvailble()
    {
        return view("portal.meeting-available.index");
    }
}
