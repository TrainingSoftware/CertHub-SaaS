<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TenderContact extends Model
{
    use HasFactory;
     protected $fillable = [
        'title',
        'firstname',
        'lastname',
        'email',
        'phone',
        'gender',
        'line_1',
        'line_2',
        'line_3',
        'town',
        'city',
        'county',
        'postcode',
        'user_id',
        'employee_id',
        'relation',
        'company_id',
        'employee_id'
    ];
}