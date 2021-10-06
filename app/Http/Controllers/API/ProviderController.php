<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Provider;
use App\Http\Resources\Provider as ProviderResource;

class ProviderController extends BaseController
{

    public function index()
    {
        $providers = Provider::all();
        return $this->sendResponse(ProviderResource::collection($providers), 'Providers fetched.');
    }


    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'name' => 'required',
            'body' => '',
            'user_id' => 'required'
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $provider = Provider::create($input);
        return $this->sendResponse(new ProviderResource($provider), 'Provider created.');
    }


    public function show($id)
    {
        $provider = Provider::find($id);
        if (is_null($provider)) {
            return $this->sendError('Provider does not exist.');
        }
        return $this->sendResponse(new ProviderResource($provider), 'Provider fetched.');
    }


    public function update(Request $request, Provider $provider)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => '',
            'body' => '',
            'user_id' => ''
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $provider->name = $input['name'];
        $provider->body = $input['body'];
        $provider->user_id = $input['user_id'];

        $provider->save();

        return $this->sendResponse(new ProviderResource($provider), 'Provider updated.');
    }


    public function destroy(Provider $provider)
    {
        $provider->delete();
        return $this->sendResponse([], 'Provider deleted.');
    }
}
