@extends('layouts.app')
@section('title', 'View Employee')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>
                <!--end::Title-->
                <!--begin::Breadcrumb-->
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">Employees</li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">{{ $employee->firstname }} {{ $employee->lastname }}</li>
                    <!--end::Item-->
                </ul>
                <!--end::Breadcrumb-->
            </div>
            <!--end::Page title-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Toolbar-->
    <!--begin::Post-->
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-xxl">
            <!--begin::Navbar-->
            @include('partials.employee.header')
            <!--end::Navbar-->
            <!--begin::details View-->
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <!--begin::Card header-->
                <div class="card-header cursor-pointer">
                    <!--begin::Card title-->
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">{{ $employee->firstname }}'s Details</h3>
                    </div>
                    <!--end::Card title-->
                    <!--begin::Action-->
                    <a href="/employees/{{ $employee->id }}/edit" class="btn btn-sm btn-primary align-self-center">Edit Employee</a>
                    <!--end::Action-->
                </div>
                <!--begin::Card header-->
                <!--begin::Card body-->
                <div class="card-body p-9">
                    <!--begin::Row-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Full Name</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $employee->firstname }} {{ $employee->lastname }}</span>
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Row-->
                    <!--begin::Row-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Gender</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                            @if($employee->gender)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $employee->gender }}</span>
                            @else
                                <span class="fw-bolder fs-6 text-gray-800">No gender information available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Row-->
                    @if(Auth::user()->company)
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Company</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8 fv-row">
                            <span class="fw-bold text-gray-800 fs-6">{{ Auth::user()->company->name }}</span>
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    @endif
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Phone</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8 d-flex align-items-center">
                            <a href="tel:{{ $employee->phone }}" class="text-hover-primary fw-bolder fs-6 text-gray-800">{{ $employee->phone }}</a>
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Email</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                            <a href="mailto:{{ $employee->email }}" class="text-hover-primary fw-bolder fs-6 text-gray-800  ">{{ $employee->email }}</a>
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Address</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                            @if($employee->line_1 && $employee->town && $employee->county && $employee->postcode && $employee->postcode)
                                <span class="fw-bolder fs-6 text-gray-800">{{ $employee->line_1 }}, {{ $employee->line_2 }}, {{ $employee->town }}, {{ $employee->county }}, {{ $employee->postcode }} {{ $employee->country }}</span>
                            @else
                                <span class="fw-bolder fs-6 text-gray-500">No address information available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Position</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-8">
                            @if($employee->position)
                                <span class="fw-bold text-gray-800 fs-6">{{ $employee->position }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No job position available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Start Date</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-6">
                            @if($employee->start_date)
                                <span class="fw-bold text-gray-800 fs-6">{{ $employee->start_date->format('d/m/Y') }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No employment start date available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">End Date</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-6">
                            @if($employee->end_date)
                                <span class="fw-bold text-gray-800 fs-6">{{ $employee->end_date }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No employment end date available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Type</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-6">
                            @if($employee->employment)
                                <span class="fw-bold text-gray-800 fs-6">{{ $employee->employment }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No employment type selected</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Salary</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-6">
                            @if($employee->salary)
                                <span class="fw-bold text-gray-800 fs-6">£{{ $employee->salary }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No salary information available</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                    <!--begin::Input group-->
                    <div class="row mb-7">
                        <!--begin::Label-->
                        <label class="col-lg-4 fw-bold text-muted">Department</label>
                        <!--end::Label-->
                        <!--begin::Col-->
                        <div class="col-lg-6">
                            @if($employee->department)
                                <span class="fw-bold text-gray-800 fs-6">{{ $employee->department->name }}</span>
                            @else
                                <span class="fw-bold text-gray-500 fs-6">No department assigned</span>
                            @endif
                        </div>
                        <!--end::Col-->
                    </div>
                    <!--end::Input group-->
                </div>
                <!--end::Card body-->
            </div>
            <!--end::details View-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
@endsection
