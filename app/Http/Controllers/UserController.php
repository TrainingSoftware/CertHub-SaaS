<?php

namespace App\Http\Controllers;

use App\Http\Requests\UserCreateRequest;
use App\Http\Requests\UserUpdateRequest;
use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $company = Auth::user()->companies()->first();
        $users = $company->users;
        
        return view('users.index', compact('users'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('users.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(UserCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();

        $storeData['password'] = bcrypt($storeData['password']);
        // create department with validated data
        $newUser = $company->users()->create($storeData);

        // log the department on successful creation
        if ($newUser){
            activity('department')
                ->performedOn($newUser)
                ->causedBy($user)
                ->log('Department created by ' . $user->name);
        }

        return redirect('/settings/users/' . $newUser->id)
            ->with('success', 'User successfully created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(User $user)
    {
        if ($user->can('view', $user)) {

            return view('users.show')
                ->with('user', $user);

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
    public function edit(User $user)
    {        
        if ($user->can('view', $user)) {

            return view('users.edit')
                ->with('user', $user);

        } else {

            return abort(403);

        }
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(UserUpdateRequest $request, User $user)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update provider with validated data
        $user->update($updateData);

        return redirect()->refresh()
            ->with('success', 'User has been successfully updated');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {

        if ($user->can('delete', $user)) {

            $user->delete();

            return redirect('/settings/users')->with('success', 'User has been deleted');

        } else {

            return abort(403);

        }
        
    }
}
