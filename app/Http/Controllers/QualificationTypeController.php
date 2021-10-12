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
        $user = Auth::user();
        $qualificationtypes = $user->qualificationtypes;
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
        $storeData = $request->validate([
            'name' => 'required',
            'body' => 'max:1000|nullable'
        ]);

        $user = Auth::user();
        $qualificationtype = $user->qualificationtypes()->create($storeData);

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
        $qualificationtype = QualificationType::find($id);

        return view('qualificationtypes.show')
            ->with('qualificationtype', $qualificationtype);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        $qualificationtype = QualificationType::findOrFail($id);
        return view('qualificationtypes.edit', compact('qualificationtype'));
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
            'name' => 'required',
            'body' => 'nullable'
        ]);

        QualificationType::whereId($id)->update($updateData);

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
        $quaificationtype = QualificationType::findOrFail($id);
        $quaificationtype->delete();

        return redirect('/qualificationtypes')->with('success', 'Department has been deleted');
    }
}
