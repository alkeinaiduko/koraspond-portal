<?php

namespace App\Http\Resources;

use App\Http\Resources\UserTypeResource;
use App\Http\Resources\UserBasicInfoResource;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\UserArrivalDetailResource;
use App\Http\Resources\UserBusinessRegistrationResource;

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
            'newsletter' => !!$this->newsletter,
            'drafted' => !!$this->drafted,
            'drafted_step' => $this->drafted_step,
            'user_type' => new UserTypeResource($this->userType),
            'basic_info' =>  $this->when(!is_null($this->basicInfo), new UserBasicInfoResource($this->basicInfo)),
            'arrival_detail' => $this->when(!is_null($this->arrivalDetail), new UserArrivalDetailResource($this->arrivalDetail)),
            'business_registration' => $this->when(!is_null($this->businessRegistration), new UserBusinessRegistrationResource($this->businessRegistration))
        ];
    }
}