<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AwardingBody extends Model
{
    use HasFactory;

    protected $fillable = [
        'name'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function qualificationtype()
    {
        return $this->belongsTo(QualificationType::class);
    }

}
