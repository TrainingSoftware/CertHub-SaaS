<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Renewal extends Model
{
    use HasFactory;
    use LogsActivity;
    protected $dates = [
        'expiry_date',
    ];

    protected $fillable = [
        'user_id',
        'qualificationtype_id',
        'qualification_id',
        'employee_id',
        'provider_id',
        'regno',
        'price',
        'slug',
        'expiry_date',
        'status'
    ];
    protected  $logName = 'renewal';

    public function qualification()
    {
        return $this->belongsTo(Qualification::class);
    }
    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }
}
