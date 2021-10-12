<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\Qualification;
use App\Http\Resources\Qualification as QualificationResource;

class QualificationController extends BaseController
{

    public function index()
    {
        $user = Auth::user();
        $qualifications = $user->qualifications;
        return $this->sendResponse(QualificationResource::collection($qualifications), 'Qualifications fetched.');
    }


    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'user_id' => 'required',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => '',
            'price' => '',
            'slug' => '',
            'expiry_date' => '',
            'status' => ''
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $qualification = Qualification::create($input);
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


    public function update(Request $request, Qualification $qualification)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => '',
            'qualificationtype_id' => 'required',
            'provider_id' => 'required',
            'regno' => 'email',
            'price' => '',
            'slug' => '',
            'expiry_date' => '',
            'status' => ''
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $qualification->user_id = $input['user_id'];
        $qualification->qualificationtype_id = $input['qualificationtype_id'];
        $qualification->provider_id = $input['provider_id'];
        $qualification->regno = $input['regno'];
        $qualification->price = $input['price'];
        $qualification->slug = $input['slug'];
        $qualification->expiry_date = $input['expiry_date'];
        $qualification->status = $input['status'];

        $qualification->save();

        return $this->sendResponse(new QualificationResource($qualification), 'Qualification updated.');
    }

    public function destroy(Qualification $qualification)
    {
        $qualification->delete();
        return $this->sendResponse([], 'Qualification deleted.');
    }
}
