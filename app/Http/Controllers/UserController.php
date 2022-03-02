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


    public function index()
    {

        if(Auth::user()->isAdmin()){
            $users = User::all();
            return view('users.index', compact('users'));
        }
        $company = Auth::user()->companies()->first();
        $users = $company->users;

        return view('users.index', compact('users'));
    }

    public function create()
    {
        return view('users.create');
    }

    public function store(UserCreateRequest $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();


        // get and validate data
        $storeData = $request->validated();

        $storeData['password'] = bcrypt($storeData['password']);
        // create department with validated data
        $newUser = $company->users()->create($storeData);

        return redirect('/settings/users/' . $newUser->id)
            ->with('success', 'User successfully created');
    }


    public function show(User $user)
    {
        if(Auth::user()->isAdmin()){
             return view('users.show')
                ->with('user', $user);
        }
        if ($user->can('view', $user)) {

            return view('users.show')
                ->with('user', $user);

        } else {

            return abort(403);

        }

    }

    public function edit(User $user)
    {
        if ($user->can('view', $user)) {

            return view('users.edit')
                ->with('user', $user);

        } else {

            return abort(403);

        }
    }


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
