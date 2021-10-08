<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'name',
        'email',
        'phone',
        'industry',
        'line_1',
        'line_2',
        'line_3',
        'town',
        'city',
        'county',
        'postcode',
        'company_reg',
        'company_vat'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }


    public function employees()
    {
        return $this->hasMany(Employee::class);
    }


    public function departments()
    {
        return $this->hasMany(Department::class);
    }


    public function providers()
    {
        return $this->hasMany(Provider::class);
    }


    public function qualifications()
    {
        return $this->hasMany(Qualification::class);
    }


    public function qualificationtypes()
    {
        return $this->hasMany(QualificationType::class);
    }
}
