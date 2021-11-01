<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Twilio\Rest\Client;
use Illuminate\Support\Facades\URL;

class SendSMSController extends Controller
{
    public function sendQualificationSMS(Request $request, Qualification $qualification)
    {
        // Auth user
        $user = Auth::user();

        // get the image url
        $url = Storage::disk('vultr')->url($qualification->upload->url);

        // get the employees phone number
        $phone = $qualification->employee->phone;

        // get portal
        $portal = URL::temporarySignedRoute(
            'portal', now()->addMinutes(30), [
                'qualification' => $request->qualification,
            ]
        );

        if ($phone) {
            $account_sid = getenv("TWILIO_SID");

            $auth_token = getenv("TWILIO_AUTH_TOKEN");

            $twilio_number = getenv("TWILIO_NUMBER");

            $client = new Client($account_sid, $auth_token);

            $client->messages->create($phone,
                [
                    'from' => $twilio_number,
                    'body' => 'Hi ' . $qualification->employee->firstname . "\r\n" . 'Here is your link to your ' . $qualification->qualificationtype->name . ' qualification. ' . "\r\n" . $portal . ''
                ]
            );

            return back()->with('success', 'SMS successfully sent.');
        }
    }
}
