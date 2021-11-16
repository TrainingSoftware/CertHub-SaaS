<?php

namespace App\Http\Controllers;

use App\Models\Provider;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProviderController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get providers that belong to authenticated user
        $providers = Provider::where('company_id', '=', $company->id)
            ->paginate(10);

        return view('providers.index', compact('providers'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('providers.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'name' => 'required',
            'email' => 'nullable',
            'phone' => 'nullable',
            'website' => 'nullable',
            'line_1' => 'nullable',
            'line_2' => 'nullable',
            'line_3' => 'nullable',
            'town' => 'nullable',
            'city' => 'nullable',
            'county' => 'nullable',
            'country' => 'nullable',
            'postcode' => 'nullable',
            'company_reg' => 'nullable'
        ]);

        // create provider with validated data
        $provider = $company->providers()->create($storeData);

        // log the provider on successful creation
        if ($provider){
            activity('provider')
                ->performedOn($provider)
                ->causedBy($user)
                ->log('Provider created by ' . $user->name);
        }

        return redirect('/providers/' . $provider->id)
            ->with('success', 'Provider successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load provider
        $provider = Provider::find($id);

        if ($user->can('view', $provider)) {
            return view('providers.show')
                ->with('provider', $provider);
        } else {
            echo 'This provider does not belong to you.';
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        // get current logged in user
        $user = Auth::user();

        // load provider
        $provider = Provider::findOrFail($id);

        if ($user->can('update', $provider)) {
            return view('providers.edit', compact('provider'));
        } else {
            echo 'This provider does not belong to you.';
        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validate([
            'name' => 'required',
            'email' => 'nullable',
            'phone' => 'nullable',
            'website' => 'nullable',
            'line_1' => 'nullable',
            'line_2' => 'nullable',
            'line_3' => 'nullable',
            'town' => 'nullable',
            'city' => 'nullable',
            'county' => 'nullable',
            'country' => 'nullable',
            'postcode' => 'nullable',
            'company_reg' => 'nullable'
        ]);

        // find provider
        $provider = Provider::findOrFail($id);

        // update provider with validated data
        $provider->update($updateData);

        // log the provider on successful update
        activity('provider')
            ->performedOn($provider)
            ->causedBy($user)
            ->log('Provider updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Provider has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // find provider
        $provider = Provider::findOrFail($id);

        // delete provider
        $provider->delete();

        return redirect('/providers')->with('success', 'Provider has been deleted');
    }

    /**
     * Show qualifications that belong to employee.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */

    public function qualifications($id)
    {
        // get the company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // load provider
        $provider = Provider::find($id);

        $qualifications = Qualification::where('company_id', '=', $company->id)
            ->where('provider_id', '=', $provider->id)
            ->get();

        if ($user->can('view', $provider)) {
            return view('providers.qualifications')
                ->with('qualifications', $qualifications)
                ->with('provider', $provider);
        } else {
            echo 'This provider does not belong to you.';
        }
    }
}
