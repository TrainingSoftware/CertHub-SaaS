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

        $qrCode = QrCode::format('svg')->generate($url, '../public/qrcodes/employee-' . $employee->id . '.svg');

        $qrCodeLink = '../public/qrcodes/employee-' . $employee->id . '.svg';

        $headers = array(
            'Content-Type: image/svg',
          );

        return Response::download($qrCodeLink, $employee->firstname . '_' . $employee->lastname . '.svg', $headers);
    }

    
}
