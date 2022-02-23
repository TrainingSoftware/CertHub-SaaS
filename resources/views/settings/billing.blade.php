@extends('layouts.app')
@section('title', 'API Keys')
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
                                <div class="fs-8 text-gray-600 fw-bold mb-2">{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity - Auth::user()->companies()->first()->employees->count()  }} Employees remaining until your plan requires updating.</div>
                            </div>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                Do you need to add more employees to your account? Click the button below to add more.
                            </p>
                            <a href="#" class="btn btn-primary btn-active-light-primary">Upgrade</a>
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
                                We're sorry to see you go! Click the button below to deactive your account.
                            </p>
                            <p class="fs-6 fw-bold text-gray-600">
                                For guidance please email <a href="mailto:help@certhub.co">help@certhub.co</a>
                            </p>
                            <a href="#" class="btn btn-danger btn-active-light-danger">Deactive account</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
