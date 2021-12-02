<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */

    public function index()
    {
        // get current company
        $company = Auth::user()->company;

        // get contacts that belong to authenticated user
        $contacts = $company->contacts;

        return view('contacts.index', compact('contacts'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('contacts.create');
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
        $company = Auth::user()->company;

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11'
        ]);

        // create contact with validated data
        $contact = $company->contacts()->create($storeData);

        // log the contact on successful creation
        if ($contact){
            activity('contact')
                ->performedOn($contact)
                ->causedBy($user)
                ->log('Contact created by ' . $user->name);
        }

        return redirect('/contacts/' . $contact->id )
            ->with('success', 'Contact successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Contact  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Contact $contact)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $contact)) {
            return view('contacts.show')
                ->with('contact', $contact);
        } else {
            echo 'This contact does not belong to you.';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Contact  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Contact $contact)
    {
        // get current company
        $company = Auth::user()->company;

        // get current logged in user
        $user = Auth::user();

        // get employees
        $employees = Employee::where('company_id', '=', $company->id)
            ->pluck('name', 'id');

        // define genders
        $genders = array([
            '' => 'Select gender',
            'Male' => 'Male',
            'Female' => 'Female'
        ]);

        if ($user->can('update', $contact)) {
            return view('contacts.edit', compact('contact', 'employees', 'genders'));
        } else {
            echo 'This contact does not belong to you.';
        }

    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Employee  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Contact $contact)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'firstname' => 'string|nullable',
            'firstname' => 'required',
            'lastname'  => 'required',
            'email' => 'required|email',
            'phone' => 'required|numeric|digits:11',
            'gender' => 'string|nullable',
            'line_1' => 'string|nullable',
            'line_2' => 'string|nullable',
            'line_3' => 'string|nullable',
            'town' => 'string|nullable',
            'city' => 'string|nullable',
            'county' => 'string|nullable',
            'postcode' => 'string|nullable',
            'relation' => 'string|nullable',
        ]);

        // update contact with validated data
        $contact->update($updateData);

        // log the provider on successful update
        activity('contact')
            ->performedOn($contact)
            ->causedBy($user)
            ->log('Contact updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Contact has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Contact $contact)
    {
        // delete employee
        $contact->delete();

        return redirect('/contacts')->with('success', 'Contact has been deleted');
    }

}
