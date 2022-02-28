<?php

namespace App\Http\Controllers;

use App\Http\Requests\QualificationCreateRequest;
use App\Http\Requests\QualificationUpdateRequest;
use App\Models\Qualification;
use App\Models\QualificationType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\URL;

class QualificationController extends Controller
{


    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get qualifications that belong to authenticated user
        $qualifications = $company->qualifications;

        return view('qualifications.index', compact('qualifications'));
    }


    public function create(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employee with concatenated first & last name, id
        $employees = \App\Models\Employee::where('company_id', '=', $company->id)
            ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
            ->get();

        // get qualification types with name, id
        $qualificationtypes = \App\Models\QualificationType::where('company_id', '=', $company->id)->get();

        // get providers
        $providers = \App\Models\Provider::where('company_id', '=', $company->id)->get();

        return view('qualifications.create', compact('employees', 'qualificationtypes', 'providers'));
    }


    public function store(QualificationCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create qualifications with validated data
        $qualification = $company->qualifications()->create($storeData);


        // log the qualification on successful creation
        if ($qualification){
            activity('qualification')
                ->performedOn($qualification)
                ->causedBy($user)
                ->log('Qualification created by ' . $user->name);
        }

        return redirect('/qualifications/' . $qualification->id)
            ->with('success', 'Qualification successfully created');
    }


    public function show(Qualification $qualification)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $qualification)) {
            return view('qualifications.show')
                ->with('qualification', $qualification);
        } else {
            return abort(403);
        }

    }


    public function edit(Qualification $qualification)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $qualification)) {

            // get providers with name, id
            $providers = \App\Models\Provider::where('company_id', '=', $company->id)
                ->get();

            // get employee with concatenated first & last name, id
            $employees = \App\Models\Employee::where('company_id', '=', $company->id)
                ->select(DB::raw("CONCAT(firstname,' ',lastname) AS name"),'id')
                ->get();

            // get qualification types with name, id
            $qualificationtypes = \App\Models\QualificationType::where('company_id', '=', $company->id)
                ->get();

            return view('qualifications.edit', compact('qualification','employees', 'qualificationtypes', 'providers'));
        } else {
            return abort(403);
        }
    }


    public function update(QualificationUpdateRequest $request, Qualification $qualification)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update qualification with validated data
        if(!$qualification->expiry_date->isPast()){
            $qualification->update($updateData);
        }

        // log the qualification on successful update
        activity('qualification')
            ->performedOn($qualification)
            ->causedBy($user)
            ->log('Qualification updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Qualification has been successfully updated');
    }


    public function destroy(Qualification $qualification)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('delete', $qualification)) {

            // delete department
            $qualification->delete();

            // log the department on successful deletion
            activity('provider')
                ->performedOn($qualification)
                ->causedBy($user)
                ->log('Qualification deleted by ' . $user->name);

                return redirect('/qualifications')->with('success', 'Qualification has been deleted');

        } else {

            return abort(403);

        }
    }

    public function fullcalendar()
    {
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();
        $events = [];
        // get qualifications that belong to authenticated user
        $qualifications = $company->qualifications;
        for($i = 0; $i < $qualifications->count(); $i++){
            $events[$i] = [
                "id" => $qualifications[$i]->id,
                "title" => $qualifications[$i]->qualificationtype->name,
                "start" => $qualifications[$i]->expiry_date,
                "url" => route('qualifications.show',$qualifications[$i])
            ];
        }
        return view('qualifications.calendar.index',compact('qualifications','events'));
    }

}
