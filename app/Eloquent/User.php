<?php

namespace App\Eloquent;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'first_name', 'last_name', 'email', 'password',
        'country', 'city', 'address', 'phone', 'newsletter',
        'user_type_id', 'meeting_profile_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Eager load relationship by default
     */
    protected $with = [
        'userType', 'basicInfo', 'arrivalDetail', 'businessRegistration'
    ];

    /**
     * User UserType
     */
    public function userType()
    {
        return $this->belongsTo(UserType::class);
    }

    /**
     * User Basic Information
     */
    public function basicInfo()
    {
        return $this->hasOne(UserBasicInfo::class);
    }

    /**
     * User Arrival Details
     */
    public function arrivalDetail()
    {
        return $this->hasOne(UserArrivalDetail::class);
    }

    /**
     * User Business Registration
     */
    public function businessRegistration()
    {
        return $this->hasOne(UserBusinessRegistration::class);
    }
}
