<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class APIController extends Controller
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

        // get company that belong to authenticated user
        $tokens = $user->tokens;

        return view('api.index', compact('tokens'));
    }


    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('api.create');
    }


    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     */
    public function store(Request $request)
    {
        // get current logged in user
        $user = Auth::user();

        // Create the token
        $token = $request->user()->createToken($request->token_name);



        // log the token on successful creation
        //if ($token){
        //    activity('apiKey')
        //        ->performedOn($token)
        //        ->causedBy($user)
        //        ->log('Token created by ' . $user->name);
        //}

        return redirect('/settings/personal-access-tokens#showToken')
            ->with(['success', 'Token successfully created'])
            ->with(['token' => $token->plainTextToken]);
    }


    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        // get current logged in user
        $user = Auth::user();

        $user->tokens()
            ->where('id', $id)
            ->delete();

        return redirect('/settings/personal-access-tokens')->with('success', 'Token has been deleted');
    }
}
