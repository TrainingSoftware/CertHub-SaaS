<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Contact extends Model
{
    use HasFactory;
    use LogsActivity;
    protected  $logName = 'contact';
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
    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }
    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }
}
