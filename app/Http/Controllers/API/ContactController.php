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
        $data = $request->validated();

//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }
        $contact = Contact::create($data);
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

//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }

//        $contact->title = $input['title'];
//        $contact->firstname = $input['firstname'];
//        $contact->lastname = $input['lastname'];
//        $contact->email = $input['email'];
//        $contact->phone = $input['phone'];
//        $contact->gender = $input['gender'];
//        $contact->line_1 = $input['line_1'];
//        $contact->line_2 = $input['line_2'];
//        $contact->line_3 = $input['line_3'];
//        $contact->town = $input['town'];
//        $contact->city = $input['city'];
//        $contact->county = $input['county'];
//        $contact->postcode = $input['postcode'];
//        $contact->employee_id = $input['employee_id'];
//        $contact->user_id = $input['user_id'];

        $contact->update($input);

        return $this->sendResponse(new ContactResource($contact), 'Contact updated.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return $this->sendResponse([], 'Contact deleted.');
    }
}
