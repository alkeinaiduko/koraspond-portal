<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class Role extends Model
{   
    /**
     * Role Users
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
