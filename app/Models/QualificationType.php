<?php

namespace App\Models;

use Database\Factories\QualificationTypeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class QualificationType extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'body',
    ];

    protected static function newFactory()
    {
        return QualificationTypeFactory::new();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
