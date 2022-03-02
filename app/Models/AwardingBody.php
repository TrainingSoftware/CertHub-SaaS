<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class AwardingBody extends Model
{
    use HasFactory;
    use LogsActivity;


    protected  $logName = 'awarding body';


    protected $fillable = [
        'name',
        'qualificationtype_id'
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

    public function qualificationtype()
    {
        return $this->belongsTo(QualificationType::class);
    }

}
