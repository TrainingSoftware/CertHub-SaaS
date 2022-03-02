<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Database\Factories\ProviderFactory;
use Spatie\Activitylog\LogOptions;
use Spatie\Activitylog\Traits\LogsActivity;

class Provider extends Model
{
    use HasFactory;
    use LogsActivity;

    use Search;
    protected  $logName = 'provider';
    protected $searchable = [
        'name',
    ];

    protected $fillable = [
        'name',
        'line_1',
        'line_2',
        'line_3',
        'town',
        'city',
        'county',
        'country',
        'postcode',
        'company_reg',
        'email',
        'phone',
        'website',
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
        return ProviderFactory::new();
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }
}
