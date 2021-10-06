<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class Qualification extends JsonResource
{

    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'created_at' => $this->created_at->format('d/m/Y'),
            'updated_at' => $this->updated_at->format('d/m/Y'),
            'user_id' => $this->user_id,
            'qualificationtype_id' => $this->qualificationtype_id,
            'provider_id' => $this->provider_id,
            'regno' => $this->regno,
            'price' => $this->price,
            'slug' => $this->slug,
            'expiry_date' => $this->expiry_date,
            'status' => $this->status,
        ];
    }
}
