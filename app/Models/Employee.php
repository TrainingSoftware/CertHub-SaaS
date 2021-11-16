<?php

namespace App\Models;

use Database\Factories\EmployeeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Policies\EmployeePolicy;
use App\Models\Department;

class Employee extends Model
{
    use HasFactory;
    protected $dates = [
        'start_date',
        'end_date'
    ];

    protected $fillable = [
        'title',
        'firstname',
        'lastname',
        'email',
        'phone',
        'position',
        'dob',
        'gender',
        'line_1',
        'line_2',
        'line_3',
        'town',
        'city',
        'county',
        'postcode',
        'start_date',
        'end_date',
        'salary',
        'employment',
        'department_id',
        'user_id'
    ];

    protected static function newFactory()
    {
        return EmployeeFactory::new();
    }

    public function contacts()
    {
        return $this->hasMany(Contact::class);
    }

    public function qualifications()
    {
        return $this->hasMany(Qualification::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function department()
    {
        return $this->belongsTo(Department::class);
    }

}
