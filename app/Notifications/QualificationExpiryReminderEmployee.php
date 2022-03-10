<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class QualificationExpiryReminderEmployee extends Notification implements ShouldQueue
{
    use Queueable;
    public $days;
    public $qualification;
    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($days,$qualification)
    {
        //
        $this->days = $days;
        $this->qualification = $qualification;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->line("Qualification Expires in the next $this->days days")
                    ->action('View Qualification', route('qualifications.show',$this->qualification))
                    ->line('Thank you for using our application!');
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
