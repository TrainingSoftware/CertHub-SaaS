<?php

namespace App\Http\Controllers;

use App\Models\Qualification;

class PortalController extends Controller
{

    public function show(Qualification $qualification)
    {
        return view('portal')
            ->with('qualification', $qualification);
    }

}
