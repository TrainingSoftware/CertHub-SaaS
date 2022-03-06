<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Qualification extends Model implements HasMedia
{
    use HasFactory,InteractsWithMedia,LogsActivity;
    protected  $logName = 'qualification';
    protected $dates = [
        'expiry_date',
    ];

    protected $fillable = [
        'user_id',
        'qualificationtype_id',
        'employee_id',
        'external_qualificationtype_id',
        'provider_id',
        'grade',
        'regno',
        'price',
        'slug',
        'expiry_date',
        'status'
    ];
    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }

    public function upload()
    {
        return $this->hasOne(Upload::class);
    }

    public function renewals()
    {
        return $this->hasMany(Renewal::class);
    }

    public function employee()
    {
        return $this->belongsTo(Employee::class);
    }

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function qualificationtype()
    {
        if($this->external_qualificationtype_id != null){
            return $this->belongsTo(ExternalQualificationType::class,'external_qualificationtype_id');
        }
        return $this->belongsTo(QualificationType::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
    public function scopeNextMonth($q)
    {
        $nextMonth = Carbon::now()->addMonth();
          return $q->whereMonth('expiry_date', $nextMonth->month)
            ->whereYear('expiry_date', $nextMonth->year);
    }
    public function scopeNextQuarter($q)
    {
         $start = Carbon::now()->startOfMonth()->addMonths(3);
         $end = Carbon::now()->endOfMonth()->addMonths(5);
         return $q->whereBetween('expiry_date', array($start, $end));
    }
    public function scopeThisMonth($q)
    {

        return $q->whereMonth('expiry_date', now()->month)
            ->whereYear('expiry_date', now()->year);
    }
    public function scopeThisQuarter($q)
    {
        $year = date('Y');
        $month = date('M');
        $day = 0;
        // Leap years are divisible by 400 or by 4 but not 100
        if($month=="Feb"){
            if(($year % 400 == 0) || (($year % 100 == 0) && ($year % 4 == 0))){
                $day = 1;
            } else{
                 $day =2;
            }
        }else{
            $day = 0;
        }
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth()->addMonths(2)->addDays($day);
        return $q->whereBetween('expiry_date', array($start, $end));
    }
}
