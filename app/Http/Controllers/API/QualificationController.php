<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\QualificationCreateRequest;
use App\Http\Requests\QualificationUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\Qualification;
use App\Http\Resources\Qualification as QualificationResource;

class QualificationController extends BaseController
{

    public function index()
    {// get current company

        $company = Auth::user()->companies()->first();


        // get qualifications that belong to authenticated user
        $qualifications = $company->qualifications;

        return $this->sendResponse(QualificationResource::collection($qualifications), 'Qualifications fetched.');
    }


    public function store(QualificationCreateRequest $request)
    {
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create qualifications with validated data
        $qualification = $company->qualifications()->create($storeData);

        // log the qualification on successful creation
        if ($qualification){
            activity('qualification')
                ->performedOn($qualification)
                ->causedBy($user)
                ->log('Qualification created by ' . $user->name);
        }
        return $this->sendResponse(new QualificationResource($qualification), 'Qualification created.');
    }


    public function show($id)
    {
        $qualification = Qualification::find($id);
        if (is_null($qualification)) {
            return $this->sendError('Qualification does not exist.');
        }
        return $this->sendResponse(new QualificationResource($qualification), 'Qualification fetched.');
    }


    public function update(QualificationUpdateRequest $request, Qualification $qualification)
    {
        $input = $request->validated();


//
//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }
//
//        $qualification->user_id = $input['user_id'];
//        $qualification->qualificationtype_id = $input['qualificationtype_id'];
//        $qualification->provider_id = $input['provider_id'];
//        $qualification->regno = $input['regno'];
//        $qualification->price = $input['price'];
//        $qualification->slug = $input['slug'];
//        $qualification->expiry_date = $input['expiry_date'];
//        $qualification->status = $input['status'];

        $qualification->update($input);

        return $this->sendResponse(new QualificationResource($qualification), 'Qualification updated.');
    }

    public function destroy(Qualification $qualification)
    {
        $qualification->delete();
        return $this->sendResponse([], 'Qualification deleted.');
    }
}
