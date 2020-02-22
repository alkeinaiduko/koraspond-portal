<?php

namespace App\Http\Resources;

use App\Http\Resources\UserTypeResource;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'first_name' => $this->first_name,
            'last_name' => $this->last_name,
            'user_type_id' => $this->user_type_id,
            'email' => $this->email,
            'country' => $this->country,
            'city' => $this->city,
            'address' => $this->address,
            'phone' => $this->phone,
            'country_code' => $this->country_code,
            'newsletter' => $this->newsletter,
            'user_type' => new UserTypeResource($this->userType)
        ];
    }
}
