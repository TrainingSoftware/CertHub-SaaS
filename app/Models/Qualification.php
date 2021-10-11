<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Qualification extends Model
{
    use HasFactory;

    protected $dates = [
        'expiry_date',
    ];

    protected $fillable = [
        'user_id',
        'qualificationtype_id',
        'employee_id',
        'provider_id',
        'regno',
        'price',
        'slug',
        'expiry_date',
        'status'
    ];

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function qualificationtype()
    {
        return $this->belongsTo(QualificationType::class);
    }
}
