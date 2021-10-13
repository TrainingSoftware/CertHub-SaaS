<?php

namespace App\Http\Controllers;

use App\Models\Provider;
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
        // get current logged in user
        $user = Auth::user();

        // get providers that belong to authenticated user
        $providers = $user->providers;
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
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validate([
            'name' => 'required',
            'body' => 'max:1000|nullable'
        ]);

        // create provider with validated data
        $provider = $user->providers()->create($storeData);

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

        if ($user->can('update', $employee)) {
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
        // get and validate data
        $updateData = $request->validate([
            'name' => 'required',
            'body' => 'nullable'
        ]);

        // find provider and update with validated data
        Provider::whereId($id)->update($updateData);

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
}
