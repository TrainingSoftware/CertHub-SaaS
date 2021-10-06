<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\API\BaseController as BaseController;
use Validator;
use App\Models\Company;
use App\Http\Resources\Company as CompanyResource;

class CompanyController extends BaseController
{

    public function index()
    {
        $companies = Company::all();
        return $this->sendResponse(CompanyResource::collection($companies), 'Companies fetched.');
    }


    public function store(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'user_id' => 'required',
            'name' => 'required',
            'email' => 'email',
            'phone' => '',
            'industry' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'company_reg' => '',
            'company_vat' => '',
        ]);
        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }
        $company = Company::create($input);
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


    public function update(Request $request, Company $company)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            'name' => 'required',
            'email' => 'email',
            'phone' => '',
            'industry' => '',
            'line_1' => '',
            'line_2' => '',
            'line_3' => '',
            'town' => '',
            'city' => '',
            'county' => '',
            'postcode' => '',
            'company_reg' => '',
            'company_vat' => '',
        ]);

        if ($validator->fails()) {
            return $this->sendError($validator->errors());
        }

        $company->user_id = $input['user_id'];
        $company->name = $input['name'];
        $company->email = $input['email'];
        $company->phone = $input['phone'];
        $company->industry = $input['industry'];
        $company->line_1 = $input['line_1'];
        $company->line_2 = $input['line_2'];
        $company->line_3 = $input['line_3'];
        $company->town = $input['town'];
        $company->city = $input['city'];
        $company->county = $input['county'];
        $company->postcode = $input['postcode'];
        $company->company_reg = $input['company_reg'];
        $company->company_vat = $input['company_vat'];

        $company->save();

        return $this->sendResponse(new CompanyResource($company), 'Company updated.');
    }

    public function destroy(Company $company)
    {
        $company->delete();
        return $this->sendResponse([], 'Company deleted.');
    }
}
