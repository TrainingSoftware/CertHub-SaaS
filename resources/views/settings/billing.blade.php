@extends('layouts.app')
@section('title', 'Billings')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
                <div class="page-title d-flex flex-column me-5 py-2">
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Usage & Billing</h1>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <li class="breadcrumb-item text-muted">
                            <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-muted">Settings</li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">Billing & Usage</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" class="container-xxl">
                <div class="card mb-5 mb-xxl-10">
                    <div class="card-header">
                        <div class="card-title">
                            <h3>Account</h3>
                        </div>
                    </div>
                    <div class="card-body py-10">
                        <div class="row">
                            <div class="col-md-6 pb-10 pb-lg-0">
                                <h2>Usage</h2>
                                <div class="py-5">
                                    <div class="d-flex text-muted fs-8 mb-3">
                                        <span class="flex-grow-1 text-gray-800">Employees</span>
                                        <span class="text-gray-800">{{ Auth::user()->companies()->first()->employees->count()  }} of {{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }} Used</span>
                                    </div>
                                    <div class="progress h-8px bg-light-primary mb-2">
                                        <div class="progress-bar bg-primary"
                                             role="progressbar"
                                             style="width: {{ ( Auth::user()->companies()->first()->employees->count() / Auth::user()->companies()->first()->subscriptions()->first()->quantity) * 100 }}%"
                                             aria-valuenow="{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity - Auth::user()->companies()->first()->employees->count()  }}"
                                             aria-valuemin="{{ Auth::user()->companies()->first()->employees->count()  }}"
                                             aria-valuemax="{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }}">
                                        </div>
                                    </div>
                                    <div
                                        class="fs-8 text-gray-600 fw-bold mb-2">{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity - Auth::user()->companies()->first()->employees->count()  }}
                                        Employees remaining until your plan requires updating.
                                    </div>
                                </div>
                                <p class="fs-6 fw-bold text-gray-600 py-2">
                                    Do you need to add more employees to your account? Click the button below to add
                                    more.
                                </p>
                                <button class="btn btn-primary btn-active-light-primary align-self-center"
                                        data-bs-toggle="modal" data-bs-target="#kt_modal_account_upgrade">Upgrade
                                </button>
                                <div class="modal fade" id="kt_modal_account_upgrade" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered mw-800px">
                                        <div class="modal-content">
                                            <div class="modal-header pb-0 border-0 justify-content-end">
                                                <div class="btn btn-sm btn-icon btn-active-color-primary"
                                                     data-bs-dismiss="modal">
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                              rx="1" transform="rotate(-45 6 17.3137)" fill="black"/>
                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                              transform="rotate(45 7.41422 6)" fill="black"/>
                                                    </svg>
                                                </span>
                                                </div>
                                            </div>
                                            <div class="modal-body scroll-y pt-0 pb-15">
                                                <div class="mw-lg-600px mx-auto">
                                                    <div class="text-center">
                                                        <h1 class="mb-3">Upgrade your employees</h1>
                                                        <label
                                                            class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10">
                                                        <span class="svg-icon svg-icon-3x me-5">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                                                                    fill="black"/>
                                                                <rect opacity="0.3" x="8" y="3" width="8" height="8"
                                                                      rx="4" fill="black"/>
                                                            </svg>
                                                        </span>
                                                            <span class="d-block fw-bold text-start">
                                                            <span class="text-dark fw-bolder d-block fs-4 mb-2">
                                                                £
                                                            <span id="employee-amount">{{$plan->price}}</span>
                                                                per month
                                                            </span>
                                                        </span>
                                                        </label>
                                                        <form action="{{route('payments.upgrade')}}" method="POST">
                                                            @csrf
                                                            <div class="input-group" id="employee-dialer">

                                                                <button
                                                                    class="btn btn-icon btn-outline btn-outline-secondary"
                                                                    type="button" data-kt-dialer-control="decrease">
                                                                    <i class="bi bi-dash fs-1"></i>
                                                                </button>
                                                                <input type="text" class="form-control" readonly
                                                                       placeholder="Amount" value="1"
                                                                       data-kt-dialer-control="input" name="quantity"/>
                                                                <input type="hidden" name="plan" value="standard">
                                                                <button
                                                                    class="btn btn-icon btn-outline btn-outline-secondary"
                                                                    type="button" data-kt-dialer-control="increase">
                                                                    <i class="bi bi-plus fs-1"></i>
                                                                </button>


                                                            </div>
                                                            <div class="text-center mt-10">
                                                                <!-- Form Open here -->
                                                                <button
                                                                    class="btn btn-primary btn-active-light-primary fw-bolder"
                                                                    type="submit">Confirm upgrade
                                                                </button>
                                                                <!-- Form Close here -->
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card mb-5 mb-xxl-10">
                    <div class="card-header">
                        <div class="card-title">
                            <h3>Deactivate your account</h3>
                        </div>
                    </div>
                    <div class="card-body py-10">
                        <div class="row">
                            <div class="col-md-6 pb-10 pb-lg-0">
                                <p class="fs-6 fw-bold text-gray-600">
                                    We're sorry to see you go! Click the button below to deactivate your account.
                                </p>
                                <p class="fs-6 fw-bold text-gray-600">
                                    For guidance please email <a href="mailto:help@certhub.co">help@certhub.co</a>
                                </p>
                                <button class="btn btn-danger btn-active-light-danger align-self-center"
                                        data-bs-toggle="modal" data-bs-target="#kt_modal_confirm_delete">Deactivate
                                    account
                                </button>
                                <div class="modal fade" id="kt_modal_confirm_delete" tabindex="-1" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered mw-800px">
                                        <div class="modal-content">
                                            <div class="modal-header pb-0 border-0 justify-content-end">
                                                <div class="btn btn-sm btn-icon btn-active-color-primary"
                                                     data-bs-dismiss="modal">
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
                                                              rx="1" transform="rotate(-45 6 17.3137)" fill="black"/>
                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1"
                                                              transform="rotate(45 7.41422 6)" fill="black"/>
                                                    </svg>
                                                </span>
                                                </div>
                                            </div>
                                            <div class="modal-body scroll-y pt-0 pb-15">
                                                <div class="mw-lg-600px mx-auto">
                                                    <div class="text-center">
                                                        <h1 class="mb-3">Deactivate <span
                                                                class="text-danger">{{ Auth::user()->companies()->first()->name }}</span>?
                                                        </h1>
                                                        <div class="text-muted fw-bold fs-5">
                                                            Are you sure you want to deactivate your account?<br>
                                                            You can restore your account at anytime.
                                                        </div>
                                                        <div class="text-center mt-10">
                                                            <!-- Form Open here -->
                                                            <button class="btn btn-danger fw-bolder" type="submit">
                                                                Confirm deactivation
                                                            </button>
                                                            <!-- Form Close here -->
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('extra-js')
<script>
	var amount  = document.getElementById('employee-amount')
	var dialerElement = document.querySelector("#employee-dialer")
	var dialerObject = new KTDialer(dialerElement, {
	    min: 1,
	    max: 500,
	    step: 1,
	});
	dialerObject.on('kt.dialer.increase',function(t){
	   if(t.value >=1) {
	       amount.textContent = (t.value + 1) * {{$plan->price}};
	   }

	})
	dialerObject.on('kt.dialer.decrease',function(t){
	    if(t.value >=2){
	        amount.textContent = (t.value - 1) *  {{$plan->price}};
	    }
	})
</script>
@endpush
