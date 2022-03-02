<?php

namespace App\Http\Controllers;

use App\Http\Requests\AwardingBodyCreateRequest;
use App\Http\Requests\AwardingBodyUpdateRequest;
use App\Models\AwardingBody;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AwardingBodyController extends Controller
{

    public function index()
    {
        // get current logged in user
        $company = Auth::user()->companies()->first();

        // get qualification types that belong to authenticated user
        $awardingBodies = AwardingBody::where('company_id', '=', $company->id)
            ->paginate(10);


        return view('awarding-bodies.index', compact('awardingBodies'));
    }


    public function create()
    {
        $company = Auth::user()->companies()->first();
        $qualificationTypes = $company->qualificationTypes;
        return view('awarding-bodies.create',compact('qualificationTypes'));
    }



    public function store(AwardingBodyCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();


        // create qualification type with validated data
        $awardingBody = $company->awardingbodies()->create($storeData);



        return redirect(route('awarding-bodies.index'))
            ->with('success', 'Awarding Body successfully created');
    }


    public function show(AwardingBody $awardingBody)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $awardingBody)) {
            return view('awarding-bodies.show')
                ->with('awardingbody', $awardingBody);
        } else {
            return abort(403);
        }
    }


    public function edit(AwardingBody $awardingBody)
    {
        //
        $company = Auth::user()->companies()->first();
        $qualificationTypes = $company->qualificationTypes()->pluck('name','id');
        return view('awarding-bodies.edit',compact('awardingBody','qualificationTypes'));
    }


    public function update(AwardingBodyUpdateRequest $request, AwardingBody $awardingBody)
    {
        //
        $data = $request->validated();
        $awardingBody->update($data);
        return redirect()->back()->with('success','Update successful');
    }

    public function destroy(AwardingBody $awardingBody)
    {
        $awardingBody->delete();
        return redirect(route('awarding-bodies.index'))->with('success','Deleted successfully');
    }
     public function bulk()
    {
        $company = Auth::user()->companies()->first();
        $string = request('awarding_bodies');
        $awards = preg_split("/\r\n|\n|\r/", $string);
        foreach($awards as $award){
            $company->awardingBodies()->create(['name'=> $award]);
        }
        $totalAdded = count($awards);
        return redirect()->back()->with('success',"$totalAdded Award Bodies created successfully");
    }
}
