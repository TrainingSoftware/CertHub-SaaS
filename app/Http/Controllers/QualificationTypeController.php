<?php

namespace App\Http\Controllers;

use App\Http\Requests\QualificationTypeCreateRequest;
use App\Http\Requests\QualificationTypeUpdateRequest;
use App\Models\QualificationType;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class QualificationTypeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get current logged in user
        $company = Auth::user()->companies()->first();

        // get qualification types that belong to authenticated user
        $qualificationtypes = QualificationType::where('company_id', '=', $company->id)
            ->paginate(10);

        return view('qualificationtypes.index', compact('qualificationtypes'));
    }


    public function create()
    {
        $company = Auth::user()->companies()->first();
        $awardingBodies = $company->awardingBodies()->pluck('name','id');
        return view('qualificationtypes.create',compact('awardingBodies'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(QualificationTypeCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create qualification type with validated data
        $qualificationtype = $company->qualificationtypes()->create($storeData);

        // log the qualification type on successful update
        if ($qualificationtype){
            activity('qualificationtype')
                ->performedOn($qualificationtype)
                ->causedBy($user)
                ->log('Qualification Type updated by ' . $user->name);
        }

        return redirect('/qualificationtypes/' . $qualificationtype->id)
            ->with('success', 'Qualification Type successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(QualificationType $qualificationtype)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $qualificationtype)) {

            // get qualifications that belong to qualification type
            $qualifications = Qualification::wherehas('employee')->where('qualificationtype_id', '=', $qualificationtype->id)
                ->get();

            return view('qualificationtypes.show')
                ->with('qualificationtype', $qualificationtype)
                ->with('qualifications', $qualifications);
        } else {
            return abort(403);
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(QualificationType $qualificationtype)
    {
        // get current logged in user
        $user = Auth::user();
         $company = Auth::user()->companies()->first();
        $awardingBodies = $company->awardingBodies()->pluck('name','id');

        if ($user->can('update', $qualificationtype)) {

            return view('qualificationtypes.edit', compact('qualificationtype','awardingBodies'));

        } else {

            return abort(403);

        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id

     */
    public function update(QualificationTypeUpdateRequest $request, QualificationType $qualificationtype)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update qualification type with validated data
        $qualificationtype->update($updateData);

        // log the qualification type on successful update
        activity('qualificationtype')
            ->performedOn($qualificationtype)
            ->causedBy($user)
            ->log('Qualification Type updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Qualification Type has been successfully updated');

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(QualificationType $qualificationtype)
    {

        // delete qualification type
        $quaificationtype->delete();

        return redirect('/qualificationtypes')->with('success', 'Qualification Type has been deleted');
    }
    public function bulk()
    {
        $company = Auth::user()->companies()->first();
        $string = request('qualificationtypes');
        $qualificationtypes = preg_split("/\r\n|\n|\r/", $string);
        foreach($qualificationtypes as $type){
            $company->qualificationtypes()->create(['name'=> $type]);
        }
        $totalAdded = count($qualificationtypes);
        return redirect()->back()->with('success',"$totalAdded Qualification Types created successfully");
    }
}
