<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ProviderFactory;

class Provider extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'name',
        'body',
    ];

    protected static function newFactory()
    {
        return ProviderFactory::new();
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
