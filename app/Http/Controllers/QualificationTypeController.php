<?php

namespace App\Http\Controllers;

use App\Models\QualificationType;
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
        $user = Auth::user();

        // get qualification types that belong to authenticated user
        $qualificationtypes = QualificationType::where('user_id', '=', $user->id)
            ->paginate(10);

        return view('qualificationtypes.index', compact('qualificationtypes'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('qualificationtypes.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'name' => 'required',
            'body' => 'max:1000|nullable'
        ]);

        // create qualification type with validated data
        $qualificationtype = $user->qualificationtypes()->create($storeData);

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
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load qualification type
        $qualificationtype = QualificationType::find($id);

        if ($user->can('view', $qualificationtype)) {
            return view('qualificationtypes.show')
                ->with('qualificationtype', $qualificationtype);
        } else {
            echo 'This qualification type does not belong to you.';
        }

    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load qualification type
        $qualificationtype = QualificationType::findOrFail($id);

        if ($user->can('update', $qualificationtype)) {
            return view('qualificationtypes.edit', compact('qualificationtype'));
        } else {
            echo 'This qualification type does not belong to you.';
        }
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
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'name' => 'required',
            'body' => 'nullable'
        ]);

        // find qualification type
        $qualificationtype = QualificationType::findOrFail($id);

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
    public function destroy($id)
    {
        // find qualification type
        $quaificationtype = QualificationType::findOrFail($id);

        // delete qualification type
        $quaificationtype->delete();

        return redirect('/qualificationtypes')->with('success', 'Department has been deleted');
    }
}
