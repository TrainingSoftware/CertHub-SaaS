<?php

namespace App\Models;

use Database\Factories\QualificationTypeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QualificationType extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'has_citb',
        'citb_value'
    ];

    protected static function newFactory()
    {
        return QualificationTypeFactory::new();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function qualifications()
    {
        return $this->hasMany(Qualification::class);
    }

    public function awardingbodies()
    {
        return $this->hasMany(AwardingBody::class);
    }
}
