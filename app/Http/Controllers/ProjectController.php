<?php

namespace App\Http\Controllers;

use DB;
use Validator;
use App\Eloquent\Project;
use Illuminate\Http\Request;
use App\Http\Requests\ProjectRequest;
use App\Http\Resources\ProjectResource;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $projects = Project::all();

        return ProjectResource::collection($projects);
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
    public function store(ProjectRequest $request)
    {   
        $tags = !is_array($request->tags) ? array_map('intval', explode(',', $request->tags)) : $request->tags;

        $data = $request->except('tags');

        try {
            DB::beginTransaction();

            $project = Project::create($data);
            $project->tag()->attach($tags);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();

            return response()->json(['error' => $e->getMessage()]);
        }
        
        return new ProjectResource($project);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Project $project)
    {
        $project = Project::findOrFail($project->id);

        return new ProjectResource($project);
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
    public function update(Request $request, $id)
    {
        $tags = !is_array($request->tags) ? array_map('intval', explode(',', $request->tags)) : $request->tags;
        $data = $request->except('tags');
        
        $projectId = $id ?? $request->id;

        try {
            DB::beginTransaction();

            $project = Project::findOrFail($projectId);
        
            $project->update($data);

            $project->tag()->sync($tags);

            DB::commit();
        } catch (\Exception $e) {
            DB::rollback();

            return response()->json(['error' => $getMessage()]);
        }
        
        return new ProjectResource($project);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $id)
    {
        $tags = [];

        $projectId = $id ?? $request->id;

        $project = Project::find($projectId);

        $project->delete();

        return response()->json(['status' => 'Success delete'], 200);
    }
}
