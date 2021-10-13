<?php

namespace App\Http\Controllers;

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

        // get employees that belong to authenticated user
        $company = $user->company;

        return redirect('/company/' . $company->id);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        // get current logged in user
        $user = Auth::user();

        // get employees that belong to authenticated user
        $company = $user->company;

        return redirect('/company/' . $company->id);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $this->validate($request, [
            'name' => ['required', 'string'],
            'type' => ['required', 'string'],
            'size' => ['required', 'string'],
            'line_1' => ['required', 'string'],
            'line_2' => ['required', 'string'],
            'town' => ['required', 'string'],
            'county' => ['required', 'string'],
            'postcode' => ['required', 'string'],
            'country' => ['required', 'string'],
        ]);

        $user = Auth::user();
        $user->company()->create($data);

        return redirect('/home')->with('success', 'Company successfully created');
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
            echo 'This employee does not belong to you.';
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
        $company = $user->company::findOrFail($id);

        if ($user->can('update', $company)) {
            return view('company.edit', compact('company'));
        } else {
            echo 'This company does not belong to you.';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'name' => 'required', 'string',
            'type' => 'required', 'string',
            'size' => 'required', 'string',
            'line_1' => 'required', 'string',
            'line_2' => 'required', 'string',
            'town' => 'required', 'string',
            'county' => 'required', 'string',
            'postcode' => 'required', 'string',
            'country' => 'required', 'string',
        ]);

        // find employee and update with validated data
        $company = $user->company::findOrFail($id)->first()->update($updateData);

        return redirect()->refresh()
            ->with('success', 'Company has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
