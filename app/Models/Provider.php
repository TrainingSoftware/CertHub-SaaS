<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ProviderFactory;

class Provider extends Model
{
    use HasFactory;

    use Search;

    protected $searchable = [
        'name',
    ];

    protected $fillable = [
        'name',
        'line_1',
        'line_2',
        'line_3',
        'town',
        'city',
        'county',
        'country',
        'postcode',
        'company_reg',
        'email',
        'phone',
        'website',
    ];

    protected static function newFactory()
    {
        return ProviderFactory::new();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
