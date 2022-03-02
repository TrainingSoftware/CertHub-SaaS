<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Laravel\Cashier\Billable;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;

class Company extends Model implements HasMedia
{
    use HasFactory, Notifiable, Billable,InteractsWithMedia,LogsActivity;
    protected  $logName = 'company';
    protected $fillable = [
        'user_id',
        'name',
        'type',
        'size',
        'line_1',
        'line_2',
        'town',
        'county',
        'postcode',
        'country',
        'email',
        'phone',
        'company_reg',
        'company_vat',
        'citb_levy'
    ];
    public function getActivitylogOptions() : LogOptions
    {
        return LogOptions::defaults()
             ->setDescriptionForEvent(fn(string $eventName) => "{$this->logName} has been {$eventName}")
             ->useLogName($this->logName)
             ->logAll();
    }
    public function plan()
    {
        return $this->hasMany(Plan::class);
    }

    public function users()
    {
        return $this->belongsToMany(
            User::class,
            'companies_users',
            'company_id',
            'user_id');
    }

    public function departments()
    {
        return $this->hasMany(Department::class);
    }

    public function employees()
    {
        return $this->hasMany(Employee::class);
    }

    public function providers()
    {
        return $this->hasMany(Provider::class);
    }

    public function tenders()
    {
        return $this->hasMany(Tender::class);
    }

    public function qualifications()
    {
        return $this->hasMany(Qualification::class);
    }

    public function qualificationtypes()
    {
        return $this->hasMany(QualificationType::class);
    }

    public function uploads()
    {
        return $this->hasMany(Upload::class);
    }
    public function awardingBodies()
    {
        return $this->hasMany(AwardingBody::class);
    }
}
