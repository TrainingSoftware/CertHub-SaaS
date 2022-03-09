<?php

namespace App\Http\Livewire;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use Livewire\Component;

class ProviderLookup extends Component
{
    public $companies = [];
    public $error;
    public $query;
    public $chosen;

    public function render()
    {
        sleep(1);
        return view('livewire.provider-lookup', [
            'results' => $this->getCompanies()
        ]);
    }

    public function getCompanies()
    {
        $apiKey = env('COMPANIES_HOUSE');


        if ($this->query != "") {
            $response = Http::withBasicAuth(
                username: $apiKey,
                          password: ''
            )->withHeaders([
                'Connection' => 'keep-alive',
                'Accept-Encoding' => 'gzip, deflate, br',
                'Accept' => '*/*'

            ])->get('https://api.companieshouse.gov.uk/search/companies?q=' . $this->query);
            $data = json_decode($response, true);

            if (isset($data["items"])) {
                $this->companies = $data["items"];
            } else {
                $this->error = "Company not found";
            }
        }
        return $this->companies;
    }

    public function createCompany($name, $line1, $line2, $town, $postcode, $country, $number)
    {

        $company = Auth::user()->companies()->first();
        $provider = $company->providers()->create([
            'name' => ucwords(strtolower($name)),
            'line_1' => $line1,
            'line_2' => $line2,
            'town' => $town,
            'postcode' => $postcode,
            'country' => $country,
            'company_reg' => $number,
        ]);

        return redirect('/providers/' . $provider->id . '/edit')
            ->with('success', 'Provider successfully created');

    }
}
