<?php

namespace App\Http\Controllers;

use App\Http\Requests\AwardingBodyCreateRequest;
use App\Http\Requests\AwardingBodyUpdateRequest;
use App\Models\AwardingBody;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AwardingBodyController extends Controller
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
        $awardingBodies = AwardingBody::where('company_id', '=', $company->id)
            ->paginate(10);

        return view('awardingbodies.index', compact('awardingBodies'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('awardingbodies.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AwardingBodyCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create qualification type with validated data
        $awardingBody = $company->awardingbody()->create($storeData);

        // log the qualification type on successful update
        if ($awardingBody){
            activity('qualificationtype')
                ->performedOn($awardingBody)
                ->causedBy($user)
                ->log('Awarding Body created by ' . $user->name);
        }

        return redirect('/awarding-bodies/' . $awardingBody->id)
            ->with('success', 'Awarding Body successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(AwardingBody $awardingBody)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $awardingBody)) {
            return view('awardingbodies.show')
                ->with('awardingbody', $awardingbody);
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
    public function edit($id)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
