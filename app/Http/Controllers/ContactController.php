<?php

namespace App\Http\Controllers;

use App\Http\Requests\ContactCreateRequest;
use App\Http\Requests\ContactUpdateRequest;
use App\Models\Contact;
use App\Models\Department;
use App\Models\Employee;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ContactController extends Controller
{


    public function index()
    {
        // get current company
        $company = Auth::user()->company;

        // get contacts that belong to authenticated user
        $contacts = $company->contacts;

        return view('contacts.index', compact('contacts'));
    }


    public function create()
    {
        return view('contacts.create');
    }


    public function store(ContactCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->company;

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create contact with validated data
        $contact = $company->contacts()->create($storeData);

        // log the contact on successful creation


        return redirect('/contacts/' . $contact->id )
            ->with('success', 'Contact successfully created');
    }


    public function show(Contact $contact)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $contact)) {
            return view('contacts.show')
                ->with('contact', $contact);
        } else {
            return abort(403);
        }
    }


    public function edit(Contact $contact)
    {
        // get current company
        $company = Auth::user()->company;

        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $contact)) {

        // get employees
        $employees = Employee::where('company_id', '=', $company->id)
            ->pluck('name', 'id');

        // define genders
        $genders = array([
            '' => 'Select gender',
            'Male' => 'Male',
            'Female' => 'Female'
        ]);

            return view('contacts.edit', compact('contact', 'employees', 'genders'));
        } else {
            return abort(403);
        }

    }


    public function update(ContactUpdateRequest $request, Contact $contact)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update contact with validated data
        $contact->update($updateData);


        return redirect()->refresh()
            ->with('success', 'Contact has been successfully updated');
    }


    public function destroy(Contact $contact)
    {
        $user = Auth::user();
        if ($user->can('delete', $contact)) {

            $contact->delete();

            return redirect('/contacts')->with('success', 'Contact has been deleted');

        } else {

            return abort(403);
        }

    }

}
