<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Tender extends Model
{
    use HasFactory;
    use LogsActivity;

    protected $dates = [
        'start_date',
        'end_date'
    ];
    protected  $logName = 'tender';
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
    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }
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
