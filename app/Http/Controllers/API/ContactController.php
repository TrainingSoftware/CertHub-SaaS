<?php

namespace App\Http\Controllers\API;

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


    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'title' => '',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email',
            'phone' => '',
            'gender' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'employee_id' => 'required',
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $contact = Contact::create($input);
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


    public function update(Request $request, Contact $contact)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'title' => '',
            'firstname' => 'required',
            'lastname' => 'required',
            'email' => 'email',
            'phone' => '',
            'gender' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'employee_id' => 'required',
            'user_id' => 'required',
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $contact->title = $input['title'];
        $contact->firstname = $input['firstname'];
        $contact->lastname = $input['lastname'];
        $contact->email = $input['email'];
        $contact->phone = $input['phone'];
        $contact->gender = $input['gender'];
        $contact->line_1 = $input['line_1'];
        $contact->line_2 = $input['line_2'];
        $contact->line_3 = $input['line_3'];
        $contact->town = $input['town'];
        $contact->city = $input['city'];
        $contact->county = $input['county'];
        $contact->postcode = $input['postcode'];
        $contact->employee_id = $input['employee_id'];
        $contact->user_id = $input['user_id'];

        $contact->save();

        return $this->sendResponse(new ContactResource($contact), 'Contact updated.');
    }

    public function destroy(Contact $contact)
    {
        $contact->delete();
        return $this->sendResponse([], 'Contact deleted.');
    }
}
