<?php

namespace App\Http\Controllers;

use App\Models\Tender;
use App\Models\Employee;
use App\Models\Qualifications;
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
        
        if ($user->can('view', $tender)) {

            // get the tender dates
            $start = $tender->start_date;
            $end = $tender->end_date;

            // get current company
            $company = Auth::user()->companies()->first();

            // get tender employees
            $tenderEmployees = $tender->employees;

            // count tender employees
            $tenderEmployeesCount = $tender->employees->count();

            // slice tender employees
            $slicedEmployees = $tenderEmployees->slice(0, 5);

            // count remaining tender employees
            $remainingEmployees = $tender->employees->count() - 5;
            
            // get company qualifications due for renewal
            $renewals = $tender->employees()->whereHas('qualifications', function ($query) use ($start, $end) {
                $query->whereBetween('expiry_date', [$start, $end]);
            })->get();

            // count company qualifications due for renewal
            $renewalsCount = $tender->employees()->whereHas('qualifications', function ($query) use ($start, $end) {
                $query->whereBetween('expiry_date', [$start, $end]);
            })->count();

            // count total
            $activeQualifications = $tender->employees()->whereHas('qualifications', function ($query) use ($end) {
                $query->where('expiry_date', '>', $end);
            })->count();

            // get employees with expired qualifications
           $expiredQualifications = $tender->employees()
           ->with('qualifications')
           ->whereHas('qualifications', function ($query) use ($start, $end) {
               $query->whereBetween('expiry_date', [$start, $end]);
           })
           ->get();
   
            //$expiredQualificationsCount = $expiredQualifications[1]->qualifications_count;

        
            return view('tenders.show')
                ->with('tender', $tender)
                ->with('tenderEmployees', $tenderEmployees)
                ->with('tenderEmployeesCount', $tenderEmployeesCount)
                ->with('slicedEmployees', $slicedEmployees)
                ->with('remainingEmployees', $remainingEmployees)
                ->with('renewals', $renewals)
                ->with('renewalsCount', $renewalsCount)
                ->with('activeQualifications', $activeQualifications)
                ->with('expiredQualifications', $expiredQualifications);

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
     * View Employees to attached specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function employees(Tender $tender)
    {
       // get current logged in user
       $user = Auth::user();
        
       if ($user->can('view', $tender)) {

           // get the tender dates
           $start = $tender->start_date;
           $end = $tender->end_date;

           // get tender employees
           $tenderEmployees = $tender->employees;

           // count tender employees
           $tenderEmployeesCount = $tender->employees->count();

           // slice tender employees
           $slicedEmployees = $tenderEmployees->slice(0, 5);

           // get employees with expired qualifications
           $expiredQualifications = $tender->employees()
                ->with('qualifications')
                ->whereHas('qualifications', function ($query) use ($start, $end) {
                    $query->whereBetween('expiry_date', [$start, $end]);
                })
                ->get();
        
            //$expiredQualificationsCount = $expiredQualifications[1]->qualifications_count;

       
           return view('tenders.employees')
            ->with('tender', $tender)
            ->with('tenderEmployees', $tenderEmployees)
            ->with('slicedEmployees', $slicedEmployees)
            ->with('expiredQualifications', $expiredQualifications);

       } else {

           echo 'This Tender does not belong to you.';

       }
    }



    /**
     * View qualifications attached specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function renewals(Tender $tender)
    {
       // get current logged in user
       $user = Auth::user();
        
       if ($user->can('view', $tender)) {

           // get the tender dates
           $start = $tender->start_date;
           $end = $tender->end_date;

           // get tender employees
           $tenderEmployees = $tender->employees;

           // slice tender employees
           $slicedEmployees = $tenderEmployees->slice(0, 5);

           // get employees with expired qualifications
           $expiredQualifications = $tender->employees()
                ->with('qualifications')
                ->whereHas('qualifications', function ($query) use ($start, $end) {
                    $query->whereBetween('expiry_date', [$start, $end]);
                })
                ->get();
        
            //$expiredQualificationsCount = $expiredQualifications[1]->qualifications_count;
       
           return view('tenders.renewals')
               ->with('tender', $tender)
               ->with('slicedEmployees', $slicedEmployees)
               ->with('expiredQualifications', $expiredQualifications);

       } else {

           echo 'This Tender does not belong to you.';

       }
    }
}
