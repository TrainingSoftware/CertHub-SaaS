<?php

namespace App\Models;

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
        'end_date'
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

}
