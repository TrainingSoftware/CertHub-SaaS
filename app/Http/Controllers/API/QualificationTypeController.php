<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\QualificationTypeCreateRequest;
use App\Http\Requests\QualificationTypeUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\QualificationType;
use App\Http\Resources\QualificationType as QualificationTypeResource;

class QualificationTypeController extends BaseController
{

    public function index()
    {
        $company = Auth::user()->companies()->first();

        // get qualification types that belong to authenticated user
        $qualificationtypes = QualificationType::where('company_id', '=', $company->id)
            ->paginate(10);
        return $this->sendResponse(QualificationTypeResource::collection($qualificationtypes), 'Qualification Types fetched.');
    }


    public function store(QualificationTypeCreateRequest $request)
    {
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create qualification type with validated data
        $qualificationtype = $company->qualificationtypes()->create($storeData);

        // log the qualification type on successful update
        if ($qualificationtype){
            activity('qualificationtype')
                ->performedOn($qualificationtype)
                ->causedBy($user)
                ->log('Qualification Type updated by ' . $user->name);
        }

        return $this->sendResponse(new QualificationTypeResource($qualificationtype), 'Qualification Type created.');
    }


    public function show($id)
    {
        $qualificationtype = QualificationType::find($id);
        if (is_null($qualificationtype)) {
            return $this->sendError('Qualification Type does not exist.');
        }
        return $this->sendResponse(new QualificationTypeResource($qualificationtype), 'Qualification Type fetched.');
    }


    public function update(QualificationTypeUpdateRequest $request, QualificationType $qualificationtype)
    {
        $input = $request->validated();

//        $validator = Validator::make($input, [
//            'name' => '',
//            'body' => '',
//            'user_id' => ''
//        ]);

//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }

//        $qualificationtype->name = $input['name'];
//        $qualificationtype->body = $input['body'];
//        $qualificationtype->user_id = $input['user_id'];

        $qualificationtype->update($input);

        return $this->sendResponse(new QualificationTypeResource($qualificationtype), 'Qualification Type updated.');
    }


    public function destroy(QualificationType $qualificationtype)
    {
        $qualificationtype->delete();
        return $this->sendResponse([], 'Qualification Type deleted.');
    }
}
