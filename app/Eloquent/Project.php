<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    protected $fillable = ['title', 'description', 'file', 'domain'];

    public $timestamps = ['created_at', 'updated_at'];

    // Eager loading
    protected $with = ['tag'];

    public function tag()
    {
        return $this->belongsToMany(Tag::class, 'project_tag');
    }   
}
