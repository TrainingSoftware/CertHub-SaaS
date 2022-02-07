<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\ProviderCreateRequest;
use App\Http\Requests\ProviderUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Validator;
use App\Models\Provider;
use App\Http\Resources\Provider as ProviderResource;

class ProviderController extends BaseController
{

    public function index()
    {
        $user = Auth::user();
        $providers = $user->providers;
        return $this->sendResponse(ProviderResource::collection($providers), 'Providers fetched.');
    }


    public function store(ProviderCreateRequest $request)
    {
        $input = $request->validated();

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


    public function update(ProviderUpdateRequest $request, Provider $provider)
    {
        $input = $request->validated();

//
//        if ($validator->fails()) {
//            return $this->sendError($validator->errors());
//        }

//        $provider->name = $input['name'];
//        $provider->body = $input['body'];
//        $provider->user_id = $input['user_id'];

        $provider->update($input);

        return $this->sendResponse(new ProviderResource($provider), 'Provider updated.');
    }


    public function destroy(Provider $provider)
    {
        $provider->delete();
        return $this->sendResponse([], 'Provider deleted.');
    }
}
