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
    public function show($id)
    {
        // load qualification
        $qualification = Qualification::find($id);

        return view('portal')
            ->with('qualification', $qualification);
    }
}
