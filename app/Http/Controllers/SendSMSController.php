<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use App\Models\Upload;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Twilio\Rest\Client;

class SendSMSController extends Controller
{
    public function sendQualificationSMS(Request $request, Qualification $qualification)
    {
        // get the image url
        $url = Storage::disk('vultr')->url($qualification->upload->url);

        // get the employees phone number
        $employee = $qualification->employee->phone;

        if ($employee) {
            $account_sid = getenv("TWILIO_SID");

            $auth_token = getenv("TWILIO_AUTH_TOKEN");

            $twilio_number = getenv("TWILIO_NUMBER");

            $client = new Client($account_sid, $auth_token);

            $client->messages->create($employee,
                [
                    'from' => $twilio_number,
                    'body' => 'Here is your sms ' . $url
                ]
            );

            return back()->with('success', 'SMS successfully sent.');
        }
    }
}
