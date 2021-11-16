<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Upload extends Model
{
    use HasFactory;

    public function qualification()
    {
        return $this->belongsTo(Qualification::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
