<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Auth;

class ProviderLookupController extends Controller
{

    public function getCompanyDetails(Request $request)
    {
        $company = Auth::user()->companies()->first();

        $apiKey = env('COMPANIES_HOUSE');

        $query = $request->validate([
            'query' => 'required',
        ]);

        $response = Http::withBasicAuth(
            username: $apiKey,
            password: ''
            )->withHeaders([
            'Connection' => 'keep-alive',
            'Accept-Encoding' => 'gzip, deflate, br',
            'Accept' => '*/*'

        ])->get('https://api.companieshouse.gov.uk/search/companies?q='.$query['query']);

        $data = json_decode($response, true);



        $provider = $company->providers()->create([
            'name' => $data['items'][0]['title'] ?? null,
            'line_1' => $data['items'][0]['address']['premises'] ?? null,
            'line_2' => $data['items'][0]['address']['address_line_1'] ?? null,
            'town' => $data['items'][0]['address']['locality'] ?? null,
            'postcode' => $data['items'][0]['address']['postal_code'] ?? null,
            'country' => $data['items'][0]['address']['country'] ?? null,
            'company_reg' => $data['items'][0]['company_number'] ?? null,
        ]);

        return redirect('/providers/' . $provider->id . '/edit')
            ->with('success', 'Provider successfully created');
    }
}
