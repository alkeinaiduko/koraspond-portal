<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    public function project()
    {
        return $this->belongsToMany(Project::class, 'project_tag');
    }   
}
