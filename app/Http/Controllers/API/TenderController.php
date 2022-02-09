<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\TenderCreateRequest;
use App\Http\Requests\TenderUpdateRequest;
use App\Models\Tender;
use App\Models\Employee;
use App\Models\Qualifications;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TenderController extends BaseController
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

        return $this->sendResponse($tenders,'Tenders Fetched');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(TenderCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create department with validated data
        $tender = $company->tenders()->create($storeData);

        // log the department on successful creation
        if ($tender){
            activity('tender')
                ->performedOn($tender)
                ->causedBy($user)
                ->log('Tender created by ' . $user->name);
        }

        return $this->sendResponse($tender,"Tender Created");
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
                ->withCount('qualifications')
                ->join('qualifications', 'qualifications.employee_id', '=', 'employees.id')
                ->whereBetween('qualifications.expiry_date', [$start, $end])
                ->get();

            // get total count of employees with expired qualifications
            $expiredQualificationsTotal = $expiredQualifications->sum('qualifications_count');


//            return view('tenders.show')
//                ->with('tender', $tender)
//                ->with('tenderEmployees', $tenderEmployees)
//                ->with('tenderEmployeesCount', $tenderEmployeesCount)
//                ->with('slicedEmployees', $slicedEmployees)
//                ->with('remainingEmployees', $remainingEmployees)
//                ->with('renewals', $renewals)
//                ->with('renewalsCount', $renewalsCount)
//                ->with('activeQualifications', $activeQualifications)
//                ->with('expiredQualifications', $expiredQualifications)
//                ->with('expiredQualificationsTotal', $expiredQualificationsTotal);;
                return $this->sendResponse([
                    $tender,
                    $tenderEmployees
                ],'Tender fetched');

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
    public function edit(Tender $tender)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $tender)) {

            return view('tenders.edit', compact('tender'));
        } else {
            echo 'This tender does not belong to you.';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param TenderUpdateRequest $request
     * @param Tender $tender
     */
    public function update(TenderUpdateRequest $request, Tender $tender)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $tender)) {

            // get and validate data
            $updateData = $request->validated();

            // update department with validated data
            $tender->update($updateData);

            return $this->sendResponse($tender,"Tender Updated");

        } else {
            return $this->sendError("Tender does not belong to you");
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tender $tender)
    {
        //
        if($tender){
            $tender->delete();
            return $this->sendResponse([],'Tender Deleted');
        }
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
                ->withCount('qualifications')
                ->join('qualifications', 'qualifications.employee_id', '=', 'employees.id')
                ->whereBetween('qualifications.expiry_date', [$start, $end])
                ->get();

            // get total count of employees with expired qualifications
            $expiredQualificationsTotal = $expiredQualifications->sum('qualifications_count');


           return view('tenders.employees')
            ->with('tender', $tender)
            ->with('tenderEmployees', $tenderEmployees)
            ->with('slicedEmployees', $slicedEmployees)
            ->with('expiredQualifications', $expiredQualifications)
            ->with('expiredQualificationsTotal', $expiredQualificationsTotal);

       } else {

           echo 'This Tender does not belong to you.';

       }
    }



    /**
     * View qualifications attached specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
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
                ->withCount('qualifications')
                ->join('qualifications', 'qualifications.employee_id', '=', 'employees.id')
                ->whereBetween('qualifications.expiry_date', [$start, $end])
                ->get();


            // get total count of employees with expired qualifications
            $expiredQualificationsTotal = $expiredQualifications->count();


           return view('tenders.renewals')
               ->with('tender', $tender)
               ->with('slicedEmployees', $slicedEmployees)
               ->with('expiredQualifications', $expiredQualifications)
               ->with('expiredQualificationsTotal', $expiredQualificationsTotal);

       } else {

           echo 'This Tender does not belong to you.';

       }
    }
    public function attachEmployee(Tender $tender)
    {
        $selectedEmployees = request('employees');
        try {
            $tender->employees()->attach($selectedEmployees);

        }catch (QueryException $exception){
            return $this->sendError([],"Employee Already Added");
        }

        return $this->sendResponse([],"Employees Successfully Added");

    }
    public function dettachEmployee(Tender $tender)
    {
        $selectedEmployees = request('selected_employees');
        try {
            $tender->employees()->detach($selectedEmployees);

        }catch (QueryException $exception){
            return $this->sendError([],"Employee Already Removed");
        }

        return $this->sendResponse([],"Employees Successfully Removed");

    }
}
