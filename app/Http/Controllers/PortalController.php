<?php

namespace App\Http\Controllers;

use App\Models\Qualification;

class PortalController extends Controller
{
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Qualification $qualification)
    {
        return view('portal')
            ->with('qualification', $qualification);
    }
}
