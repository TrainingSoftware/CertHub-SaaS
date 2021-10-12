<?php

namespace App\Models;

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

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
