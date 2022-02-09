<?php

namespace App\Http\Controllers;

use App\Http\Requests\CompanyCreateRequest;
use App\Http\Requests\CompanyUpdateRequest;
use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Input;

class CompanyController extends Controller
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

        // get company that belong to authenticated user
        $company = Auth::user()->companies()->first();

        if ($company) {
            return redirect('/company/' . $company->id);
        } else {
            return view('company.show');
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

        // get companies that belong to authenticated user
        $company = Auth::user()->companies()->first();

        if ($company) {
            return redirect('/company/' . $company->id);
        } else {
            return view('company.create');
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CompanyCreateRequest $request)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $data = $request->validated();

        // create department with validated data
        $company = $user->companies()->create($data);

        // log the company on successful creation
        activity('company')
            ->performedOn($company)
            ->causedBy($user)
            ->log('Company updated by ' . $user->name);

        return redirect('/home')
            ->with('success', 'Company successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load employee
        $company = Company::find($id);

        if ($user->can('view', $company)) {
            return view('company.show')
                ->with('company', $company);
        } else {
            return abort(403);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load company
        $company = Auth::user()->companies()->first();

        if ($user->can('update', $company)) {

        // define genders
        $types = array([
            '' => 'Select company type',
            'Public limited company (PLC)' => 'Public limited company (PLC)',
            'Private company limited by shares (LTD)' => 'Private company limited by shares (LTD)',
            'Company limited by guarantee' => 'Company limited by guarantee',
            'Unlimited company (Unltd)' => 'Unlimited company (Unltd)',
            'Limited liability partnership (LLP)' => 'Limited liability partnership (LLP)',
            'Community interest company' => 'Community interest company',
            'Industrial and provident society (IPS)' => 'Industrial and provident society (IPS)',
            'Royal charter (RC)' => 'Royal charter (RC)',
        ]);

        // define genders
        $size = array([
            '' => 'Select company size',
            '1-1' => '1-1',
            '2-10' => '2-10',
            '11-50' => '11-50',
            '50+' => '50+',

        ]);

            return view('company.edit', compact('company', 'types', 'size'));
        } else {
            return abort(403);
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $id
     */
    public function update(CompanyUpdateRequest $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // find employee and update with validated data
        $company = Company::findOrFail($id)->update($updateData);

        // log the company on successful update
        //activity('company')
        //    ->performedOn($company)
        //    ->causedBy($user)
        //    ->log('Company updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Company has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company

     */
    public function destroy(Company $company)
    {
        //
    }
}
