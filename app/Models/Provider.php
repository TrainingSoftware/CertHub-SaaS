<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'body',
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
