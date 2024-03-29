<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProviderCreateRequest;
use App\Http\Requests\ProviderUpdateRequest;
use App\Models\Provider;
use App\Models\Qualification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ProviderController extends Controller
{

    public function index()
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get providers that belong to authenticated user
        $providers = $company->providers()
            ->paginate(10);

        return view('providers.index', compact('providers'));
    }

    public function create()
    {
        return view('providers.create');
    }

    public function store(ProviderCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        // create provider with validated data
        $provider = $company->providers()->create($storeData);




        return redirect('/providers/' . $provider->id)
            ->with('success', 'Provider successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Provider $provider)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $provider)) {
            return view('providers.show')
                ->with('provider', $provider);
        } else {
            return abort(403);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Provider $provider)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('update', $provider)) {
            return view('providers.edit', compact('provider'));
        } else {
            return abort(403);
        }
    }

    public function update(ProviderUpdateRequest $request, Provider $provider)
    {
        // get current logged in user
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

        return redirect()->refresh()
            ->with('success', 'Provider has been successfully updated');
    }


    public function destroy(Provider $provider)
    {
        $user = Auth::user();
        if ($user->can('delete', $provider)) {

            // delete department
            $provider->delete();

            // log the department on successful deletion
            activity('provider')
                ->performedOn($provider)
                ->causedBy($user)
                ->log('Provider deleted by ' . $user->name);

                return redirect('/providers')->with('success', 'Provider has been deleted');

        } else {

            return abort(403);
        }
    }



    public function qualifications(Provider $provider)
    {
        // get the company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $provider)) {

            $qualifications = Qualification::whereHas('employee')->where('company_id', '=', $company->id)
                ->where('provider_id', '=', $provider->id)
                ->get();


            return view('providers.qualifications')
                ->with('qualifications', $qualifications)
                ->with('provider', $provider);

        } else {

            return abort(403);

        }
    }
    public function bulk()
    {
        $company = Auth::user()->companies()->first();
        $string = request('providers');
        $providers = preg_split("/\r\n|\n|\r/", $string);
        foreach($providers as $provider){
            $company->providers()->create(['name'=> $provider]);
        }
        $totalAdded = count($providers);
        return redirect()->back()->with('success',"$totalAdded Providers created successfully");
    }
}
