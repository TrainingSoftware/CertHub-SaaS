<?php

namespace App\Jobs;

use App\Models\Qualification;
use App\Notifications\QualificationExpiryReminder;
use App\Notifications\QualificationExpiryReminderEmployee;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Notification;

class QualificationReminderJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        //Get all qualifications that are about to expire withing 30 days


        foreach (config('reminders.days') as $day){
            $dayToCheck = Carbon::now()->addDays($day);
           Qualification::whereDate('expiry_date',$dayToCheck)->with('company.users')->get()->map(function($q) use ($day){
                $usersToMail = $q->company->users->flatten()->unique();
                Notification::send($usersToMail,new QualificationExpiryReminder($day,$q->employee,$q));
            });
           Qualification::whereDate('expiry_date',$dayToCheck)->with('employee',function($q){
                    $q->where('email',"!=",null);
                })->get()->map(function($q) use ($day){
                    $usersToMail = $q->employee;
                    Notification::send($usersToMail,new QualificationExpiryReminderEmployee($day,$q));
                return $q->employee;
            });
        }

    }
}
