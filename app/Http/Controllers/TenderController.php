<?php

namespace App\Http\Controllers;

use App\Models\Tender;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TenderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user
        $tenders = $company->tenders;

        return view('tenders.index', compact('tenders'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        return view('tenders.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'name' => 'required',
            'location' => 'required',
            'start_date' => 'required',
            'end_date' => 'required',
        ]);

        // create department with validated data
        $tender = $company->tenders()->create($storeData);

        // log the department on successful creation
        if ($tender){
            activity('tender')
                ->performedOn($tender)
                ->causedBy($user)
                ->log('Tender created by ' . $user->name);
        }

        return redirect('/tenders/' . $tender->id)
            ->with('success', 'Tender successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Tender $tender)
    {
        // get current logged in user
        $user = Auth::user();
        
        // get current company
        $company = Auth::user()->companies()->first();
        
        $employees = Employee::where('company_id', '=', $company->id)
            ->paginate(10);

        if ($user->can('view', $tender)) {
            return view('tenders.show')
                ->with('tender', $tender);
        } else {
            echo 'This Tender does not belong to you.';
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

    /**
     * Attach Employees to specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function attachEmployees(Request $request, $id)
    {
        //
    }
}
