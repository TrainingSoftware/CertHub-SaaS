<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ContactCreateRequest;
use App\Http\Requests\ContactUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Contact;
use App\Http\Resources\Contact as ContactResource;

class ContactController extends BaseController
{

    public function index()
    {
        $contacts = Contact::all();
        return $this->sendResponse(ContactResource::collection($contacts), 'Contacts fetched.');
    }


    public function store(ContactCreateRequest $request)
    {
       $company = Auth::user()->company;

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create contact with validated data
        $contact = $company->contacts()->create($storeData);

        // log the contact on successful creation
        if ($contact){
            activity('contact')
                ->performedOn($contact)
                ->causedBy($user)
                ->log('Contact created by ' . $user->name);
        }
        return $this->sendResponse(new ContactResource($contact), 'Contact created.');
    }


    public function show($id)
    {
        $contact = Contact::find($id);
        if (is_null($contact)) {
            return $this->sendError('Contact does not exist.');
        }
        return $this->sendResponse(new ContactResource($contact), 'Contact fetched.');
    }


    public function update(ContactUpdateRequest $request, Contact $contact)
    {
        $input = $request->validated();

        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update contact with validated data
        $contact->update($updateData);

        // log the provider on successful update
        activity('contact')
            ->performedOn($contact)
            ->causedBy($user)
            ->log('Contact updated by ' . $user->name);

        $contact->update($input);

        return $this->sendResponse(new ContactResource($contact), 'Contact updated.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return $this->sendResponse([], 'Contact deleted.');
    }
}
