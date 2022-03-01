<?php

namespace App\Models;

use App\Jobs\QueueVerifyEmailJob;
use App\Notifications\SendAccessCodeNotification;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

// sanctum
use Laravel\Sanctum\HasApiTokens;
use Spatie\Activitylog\Models\Activity;


class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'email_verified_at',
        'role',
        'status'
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'email_verified_at'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    //protected $casts = [
    //    'email_verified_at' => 'datetime',
    //];
    public function isAdmin() {
       return $this->role === 'admin';
    }

    public function companies()
    {
        return $this->belongsToMany(
            Company::class,
            'companies_users',
            'user_id',
            'company_id');
    }
    public function generateAccessCode($user)
    {
        $code = rand(1000, 9999);

        UserCode::updateOrCreate(
            [ 'user_id' => $this->id ],
            [ 'code' => $code ]
        );

        try {

            $user->notify(new SendAccessCodeNotification($code));

            return $code;

        } catch (\Exception $e) {
            info("Error: ". $e->getMessage());
        }
    }
    public function code()
    {
        return $this->hasOne(UserCode::class,'user_id');
    }
    public function sendEmailVerificationNotification()
    {
         QueueVerifyEmailJob::dispatch($this);
    }
    public function activity()
    {
        return $this->hasMany(Activity::class,'causer_id');
    }
}
