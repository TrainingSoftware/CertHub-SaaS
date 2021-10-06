<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Employee extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
            'title' => $this->title,
            'firstname' => $this->firstname,
            'lastname' => $this->lastname,
            'email' => $this->email,
            'phone' => $this->phone,
            'position' => $this->position,
            'dob' => $this->dob,
            'gender' => $this->gender,
            'line_1' => $this->line_1,
            'line_2' => $this->line_2,
            'line_3' => $this->line_3,
            'town' => $this->town,
            'city' => $this->city,
            'county' => $this->county,
            'postcode' => $this->postcode,
            'start_date' => $this->start_date,
            'end_date' => $this->end_date,
            'salary' => $this->salary,
            'employment' => $this->employment,
            'department_id' => $this->department_id,
            'user_id' => $this->user_id,
        ];
    }
}
