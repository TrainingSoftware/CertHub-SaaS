<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Employee;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Illuminate\Support\Facades\URL;
use Response;


class QrCodeController extends Controller
{


    /**
     * Generate Employee QR Code.
     *
     * @return \Illuminate\Http\Response
     */

    public function employeeQrCode(Employee $employee)
    {
        $url = URL::temporarySignedRoute(
            'employee.public', now()->addMinutes(100), [
                'employee' => $employee
             ]
        );
        $qrCode = QrCode::format('svg')->generate($url);
        $employee->clearMediaCollection('qrcode');
        $employee->addMediaFromString($qrCode)->addCustomHeaders([
                    'ACL' => 'public-read'
                ])
            ->withCustomProperties(['mime-type' => 'image/svg'])
                ->toMediaCollection('qrcode');

        $qrCodeLink = $employee->fresh()->getMedia('qrcode')->first()->getUrl();

        $headers = array(
            'Content-Type: image/svg',
          );
        $tempImage = tempnam(sys_get_temp_dir(),  $employee->getMedia('qrcode')->first()->name);
        copy($employee->getMedia('qrcode')->first()->getUrl(), $tempImage);

        return Response::download($tempImage, $employee->firstname . '_' . $employee->lastname . '.svg', $headers);
    }


}
