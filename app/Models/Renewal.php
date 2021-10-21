<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Renewal extends Model
{
    use HasFactory;

    protected $dates = [
        'expiry_date',
    ];

    protected $fillable = [
        'user_id',
        'qualificationtype_id',
        'qualification_id',
        'employee_id',
        'provider_id',
        'regno',
        'price',
        'slug',
        'expiry_date',
        'status'
    ];

    public function qualification()
    {
        return $this->belongsTo(Qualification::class);
    }
}
