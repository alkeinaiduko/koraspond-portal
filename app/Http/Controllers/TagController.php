<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Eloquent\Tag;
use App\Http\Resources\TagResource;

class TagController extends Controller
{
    //
    public function index(){
        $tags =  Tag::all();

        return TagResource::collection($tags);
    }
}
