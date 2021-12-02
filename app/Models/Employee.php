<?php

namespace App\Models;

use Database\Factories\EmployeeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use \LaravelArchivable\Archivable;

class Employee extends Authenticatable
{
    use Notifiable, Archivable;

    protected $guard = 'employee';

    use HasFactory;

    protected $dates = [
        'start_date',
        'end_date'
    ];

    protected $casts = [
        'is_archived' => 'boolean',
        'is_admin' => 'boolean'
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
        'is_archived',
        'password'
    ];

    protected $hidden = [
        'password', 'remember_token',
    ];

    protected static function newFactory()
    {
        return EmployeeFactory::new();
    }

    /**
     * Get the employees's first name.
     *
     * @param  string  $value
     * @return string
     */
    public function getFirstNameAttribute($value)
    {
        return ucfirst($value);
    }

    /**
     * Get the employees's last name.
     *
     * @param  string  $value
     * @return string
     */
    public function getLastNameAttribute($value)
    {
        return ucfirst($value);
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
