<?php

namespace App\Http\Controllers;

use App\Http\Requests\EmployeeCreateRequest;
use App\Http\Requests\EmployeeUpdateRequest;
use App\Jobs\SendWelcomeMail;
use App\Models\Employee;
use App\Models\Department;
use App\Models\Qualification;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\Request;
use App\Exports\EmployeeExport;
use App\Imports\EmployeeImport;
use Illuminate\Mail\Message;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Password;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class EmployeeController extends Controller
{



    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function __construct()
    {
        $this->middleware('CheckEmployeeSubscription',['only' => 'store']);
    }

    public function index(Request $request)
    {
        // get current company
        $company = Auth::user()->companies()->first();

        // get employees that belong to authenticated user


        return view('employees.index');
    }



    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('employees.create');
    }



    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     */

    public function store(EmployeeCreateRequest $request)
    {
        // get current company
        $welcome = false;
        if($request->has('welcome_mail')){
            $welcome = true;
        }
        $company = Auth::user()->companies()->first();

        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $storeData = $request->validated();
        $password = Str::random(8);

        // create employee with validated data
        $employee = $company->employees()->create(array_merge($storeData, [
            'password' => Hash::make($password)
        ]));


        if($welcome){
            SendWelcomeMail::dispatch($password,$employee);
        }
        // log the provider on successful creation
        if ($employee) {
            activity('employee')
                ->performedOn($employee)
                ->causedBy($user)
                ->log('Employee created by ' . $user->name);
        }

        return redirect('/employees/' . $employee->id)
            ->with('success', 'Employee successfully created');
    }



    /**
     * Display the specified resource.
     *
     * @param \App\Models\Employee $id
     * @return \Illuminate\Http\Response
     */
    public function show(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        // get current logged in user
        $contacts = $employee->contacts;

        if ($user->can('view', $employee)) {
            return view('employees.show')
                ->with('employee', $employee)
                ->with('contacts', $contacts);
        } else {
            return abort(403);
        }
    }



    /**
     * Show the form for editing the specified resource.
     *
     * @param \App\Models\Employee $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();
        $company = Auth::user()->companies()->first();

        // get departments
        $departments = $company->departments;

        // define genders
        $genders = array([
            '' => 'Select gender',
            'Male' => 'Male',
            'Female' => 'Female'
        ]);

        // define employment
        $employment = array([
            '' => 'Select employment type',
            'Employed' => 'Employed',
            'Self Employed' => 'Self Employed',
            'Contractor' => 'Contractor'
        ]);

        if ($user->can('update', $employee)) {
            return view('employees.edit', compact('employee', 'departments', 'genders', 'employment'));
        } else {
            return abort(403);
        }

    }



    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param \App\Models\Employee $id
     * @return \Illuminate\Http\Response
     */
    public function update(EmployeeUpdateRequest $request, Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        // get and validate data
        $updateData = $request->validated();

        // update department with validated data
        $employee->update($updateData);
        if($request->hasFile('avatar') && $request->file('avatar')->isValid()){
            $employee->clearMediaCollection('avatar');
            $employee->addMediaFromRequest('avatar')
                ->addCustomHeaders([
                    'ACL' => 'public-read'
                ])
                ->toMediaCollection('avatar');
        }
        // log the provider on successful update
        activity('employee')
            ->performedOn($employee)
            ->causedBy($user)
            ->log('Employee updated by ' . $user->name);

        return redirect()->refresh()
            ->with('success', 'Employee has been successfully updated');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('delete', $employee)) {

            // delete department
            $employee->delete();

            // log the department on successful deletion
            activity('employee')
                ->performedOn($employee)
                ->causedBy($user)
                ->log('Employee deleted by ' . $user->name);

            return redirect('/employees')->with('success', 'Employee has been deleted');

        } else {

            return abort(403);
        }

    }



    /**
     * Show qualifications that belong to employee.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */

    public function qualifications(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $employee)) {
            return view('employees.qualifications')
                ->with('employee', $employee);
        } else {
            return abort(403);
        }
    }



    /**
     * Show contacts that belong to employee.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */

    public function contacts(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $employee)) {
            return view('employees.contacts')
                ->with('employee', $employee);
        } else {
            return abort(403);
        }
    }



    /**
     * Show tenders that employee belongs to.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */

    public function tenders(Employee $employee)
    {
        // get current logged in user
        $user = Auth::user();

        if ($user->can('view', $employee)) {
            return view('employees.tenders')
                ->with('employee', $employee);
        } else {
            return abort(403);
        }
    }



    /**
     * @return \Illuminate\Support\Collection
     */
    public function importLanding()
    {
        return view('employees.import');
    }



    /**
     * @return \Illuminate\Support\Collection
     */
    public function export()
    {
        return Excel::download(new EmployeeExport, 'employees.csv');
    }



    /**
     * @return \Illuminate\Support\Collection
     */
    public function import()
    {
        Excel::import(new EmployeeImport, request()->file('file'));

        return back()
            ->with('success', 'Employees successfully imported');
    }

    public function sendWelcomeEmail(Employee $employee)
    {
        $employee->sendWelcomeEmail();
        return redirect()->back()->with('success', 'Mail sent successfully');
    }



    /**
     * Send employee password reset.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */

    public function sendResetLink(Employee $employee)
    {
        $credentials = ['email' => $employee->email];
        $path = env('APP_URL');
        ResetPassword::createUrlUsing(function ($user, string $token) use ($employee, $path) {
            return "$path/employee/reset-password/$token?email=$employee->email";
        });
        $response = Password::broker('employees')->sendResetLink($credentials);

        switch ($response) {
            case Password::RESET_LINK_SENT:
                return redirect()->back()->with('success', trans($response));
            case Password::INVALID_USER:
                return redirect()->back()->withErrors(['email' => trans($response)]);
        }
    }



    /**
     * Show employee password reset.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */

    public function showResetPassword($token)
    {
        return view('auth.employee-reset-password')->with('token',$token);
    }
    public function resetPassword(Request $request)
    {
        $request->validate([
            'token' => 'required',
            'email' => 'required|email',
            'password' => 'required|min:8|confirmed',
        ]);

        $status = Password::broker('employees')->reset(
            $request->only('email', 'password', 'password_confirmation', 'token'),
            function ($user, $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

    return $status === Password::PASSWORD_RESET
                ? redirect()->route('portal.login')->with('status', __($status))
                : back()->withErrors(['email' => [__($status)]]);
    }



    /**
     * Archive employee.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */

    public function archive(Request $request, Employee $employee)
    {
        $employee->archive();

        return redirect('/employees')
            ->with('success', 'Employee has been successfully archived');
    }



    /**
     * Show the archived resources.
     *
     * @return \Illuminate\Http\Response
     */
    public function archived()
    {
        return view('employees.archived');
    }



    /**
     * Unarchive employee.
     *
     * @param Employee $employee
     * @return \Illuminate\Http\Response
     */
    public function unarchive(Request $request)
    {
        $employee = Employee::withArchived()->find($request->employee_id);
        $employee->unArchive();

        return redirect('/employees/'. $employee->id)
            ->with('success', 'Employee has been successfully unarchived');
    }

}
