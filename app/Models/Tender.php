<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tender extends Model
{
    use HasFactory;

    protected $dates = [
        'start_date',
        'end_date'
    ];

    protected $fillable = [
        'name',
        'start_date',
        'end_date',
        'location',
        'line_1',
        'line_2',
        'town',
        'county',
        'longitude',
        'latitude',
        'postcode',
        'country'
    ];

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function employees()
    {
        return $this->belongsToMany(
            Employee::class,
            'tenders_employees',
            'tender_id',
            'employee_id');
    }
    public function contacts()
    {
        return $this->hasMany(TenderContact::class);
    }
    public function scopeActive($q)
    {

        return $q->where('end_date','>=',date('Y-m-d'));
    }

}
