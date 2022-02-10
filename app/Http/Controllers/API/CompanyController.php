<?php

namespace App\Http\Controllers\API;

use App\Http\Requests\CompanyCreateRequest;
use App\Http\Requests\CompanyUpdateRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Illuminate\Support\Facades\Auth;
use Nette\Schema\ValidationException;
use Validator;
use App\Models\Company;
use App\Http\Resources\Company as CompanyResource;

class CompanyController extends BaseController
{

    public function index()
    {
        $user = Auth::user();

        // get company that belong to authenticated user
        $companies = Auth::user()->companies;
        return $this->sendResponse(CompanyResource::collection($companies), 'Companies fetched.');
    }


    public function store(CompanyCreateRequest $request)
    {

         // get current logged in user
        $user = Auth::user();

        // get and validate data
        $data = $request->validated();

        // create department with validated data
        $company = $user->companies()->create($data);

        // log the company on successful creation
        activity('company')
            ->performedOn($company)
            ->causedBy($user)
            ->log('Company updated by ' . $user->name);

        return $this->sendResponse(new CompanyResource($company), 'Company created.');
    }


    public function show($id)
    {
        $company = Company::find($id);
        if (is_null($company)) {
            return $this->sendError('Company does not exist.');
        }
        return $this->sendResponse(new CompanyResource($company), 'Company fetched.');
    }


    public function update(CompanyUpdateRequest $request, Company $company)
    {
        $data = $request->validated();
        $company->update($data);
        return $this->sendResponse(new CompanyResource($company), 'Company updated.');
    }

    public function destroy(Company $company)
    {
        $company->delete();
        return $this->sendResponse([], 'Company deleted.');
    }
}
