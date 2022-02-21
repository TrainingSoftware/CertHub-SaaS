<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Qualification extends Model implements HasMedia
{
    use HasFactory,InteractsWithMedia;

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

    public function upload()
    {
        return $this->hasOne(Upload::class);
    }

    public function renewals()
    {
        return $this->hasMany(Renewal::class);
    }

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

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

}
