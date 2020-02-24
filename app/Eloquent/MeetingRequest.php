<?php

namespace App\Eloquent;

use Illuminate\Database\Eloquent\Model;

class MeetingRequest extends Model
{
    protected $fillable = [
        'request_from', 'request_to', 'title', 'content',
        'status'
    ];

    public function userFrom()
    {
    	return $this->belongsTo(User::class, 'request_from');
    }

    public function userTo()
    {
    	return $this->belongsTo(User::class, 'request_to');
    }
}
