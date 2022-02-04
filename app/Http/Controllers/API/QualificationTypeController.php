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
        $user = Auth::user();
        $qualificationtypes = $user->qualificationtypes;
        return $this->sendResponse(QualificationTypeResource::collection($qualificationtypes), 'Qualification Types fetched.');
    }


    public function store(QualificationTypeCreateRequest $request)
    {
        $input = $request->validated();
//        $validator = Validator::make($input, [
//            'name' => 'required',
//            'body' => '',
//            'user_id' => 'required'
//        ]);
//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }
        $qualificationtype = QualificationType::create($input);
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
