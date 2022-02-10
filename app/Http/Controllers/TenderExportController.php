<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Tender;
use PDF;

class TenderExportController extends Controller
{
    public function generateExport(Tender $tender)
    {
        view()->share('tender', $tender);

        $pdf = PDF::loadView('tenders.export', $tender);

        return $pdf->download($tender->name . '_CertHub_Tender.pdf');
    }
}
