<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class UserType extends Model
{
    /**
     * UserType Users
     */
    public function users()
    {
        return $this->hasMany(User::class);
    }
}
