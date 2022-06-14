<?php

namespace App\Models;

use Database\Factories\QualificationTypeFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class QualificationType extends Model
{
    use HasFactory;
    use LogsActivity;
    protected  $logName = 'qualification type';
    protected $fillable = [
        'name',
        'has_citb',
        'citb_value',
        'awarding_body_id'
    ];

    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }
    protected static function newFactory()
    {
        return QualificationTypeFactory::new();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function qualifications()
    {
        return $this->hasMany(Qualification::class);
    }

    public function awardingbody()
    {
        return $this->hasOne(AwardingBody::class);
    }
}
