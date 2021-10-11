<?php

namespace App\Http\Controllers;

use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class QualificationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $qualifications = Qualification::all();
        return view('qualifications.index', compact('qualifications'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $employees = \App\Models\Employee::select(
            DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->pluck('name', 'id');
        $qualificationtypes = \App\Models\QualificationType::pluck('name', 'id');
        $providers = \App\Models\Provider::pluck('name', 'id');
        return view('qualifications.create', compact('employees', 'qualificationtypes', 'providers'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $storeData = $request->validate([
            'user_id' => 'required',
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'required|string',
            'expiry_date' => 'required|date'

        ]);

        $qualification = Qualification::create($storeData);

        return redirect('/qualifications/' . $qualification->id)
            ->with('success', 'Qualification successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $qualification = Qualification::find($id);

        return view('qualifications.show')
            ->with('qualification', $qualification);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $qualification = Qualification::findOrFail($id);
        $providers = \App\Models\Provider::pluck('name', 'id');
        $qualificationtypes = \App\Models\QualificationType::pluck('name', 'id');
        $employees = \App\Models\Employee::select(
            DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->pluck('name', 'id');

        return view('qualifications.edit', compact('qualification','employees', 'qualificationtypes', 'providers'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $updateData = $request->validate([
            'employee_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'required|string',
            'expiry_date' => 'required|date',
            'slug' => 'string',
            'price' => 'numeric',
        ]);

        Qualification::whereId($id)->update($updateData);

        return redirect()->refresh()
            ->with('success', 'Qualification has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $qualification = Qualification::findOrFail($id);
        $qualification->delete();

        return redirect('/qualification')->with('success', 'Qualification has been deleted');
    }
}
