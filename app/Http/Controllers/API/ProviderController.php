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
        $company = Auth::user()->companies()->first();

        // get providers that belong to authenticated user
        $providers = $company->providers()
            ->paginate(10);
        return $this->sendResponse(ProviderResource::collection($providers), 'Providers fetched.');
    }


    public function store(ProviderCreateRequest $request)
    {
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create provider with validated data
        $provider = $company->providers()->create($storeData);

        // log the provider on successful creation
        if ($provider){
            activity('provider')
                ->performedOn($provider)
                ->causedBy($user)
                ->log('Provider created by ' . $user->name);
        }
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
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update provider with validated data
        $provider->update($updateData);

        // log the provider on successful update
        activity('provider')
            ->performedOn($provider)
            ->causedBy($user)
            ->log('Provider updated by ' . $user->name);

        return $this->sendResponse(new ProviderResource($provider), 'Provider updated.');
    }


    public function destroy(Provider $provider)
    {
        $provider->delete();
        return $this->sendResponse([], 'Provider deleted.');
    }
}
