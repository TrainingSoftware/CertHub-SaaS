@extends('layouts.app')
@section('title', 'Update Employee')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>
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
                    <li class="breadcrumb-item text-muted">
                        <a href="/employees" class="text-muted text-hover-primary">Employees</a></li>
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
    @include('partials.layout.alert')
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
                        <h3 class="fw-bolder m-0">Profile Details</h3>
                    </div>
                    <!--end::Card title-->
                </div>
                <!--begin::Card header-->
                <!--begin::Card body-->
                <div class="card-body p-9">
                    {{ Form::model($employee, array('route' => array('employees.update', $employee->id), 'method' => 'PUT')) }}
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Full Name</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Row-->
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Firstname</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('firstname', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Lastname</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('lastname', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Gender</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Row-->
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <!--begin::Input-->
                                        {!! Form::select('gender', $genders, null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) !!}
                                    <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                    @if(Auth::user()->company)
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Company</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8 fv-row">
                                <span class="fw-bolder text-gray-800 fs-6">{{ Auth::user()->company->name }}</span>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        @endif
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                                <span class="required">Contact Phone</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8 d-flex align-items-center">
                                {{ Form::text('phone', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                                <span class="required">Email</span>
                            </label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                {{ Form::text('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Address</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="row mb-7">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Building Name / Number
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('line_1', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '6')) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Line 2
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('line_2', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Dale Road')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-7">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Town
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('town', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Chesterfield')) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            County
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('county', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Derbyshire')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Postcode
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('postcode', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'S18 1XJ')) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Country
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('country', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'United Kingdom')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Position</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                {{ Form::text('position', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Training Manager')) }}
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <!--begin::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Employment Details</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Input group-->
                                <div class="row mb-7">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Start Date
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('start_date', null, array('id' => 'employeeStart', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '01/07/2021')) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            End Date
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('end_date', null, array('id' => 'employeeEnd', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '21/09/2011')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                                <div class="row mb-7">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Salary
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {{ Form::text('salary', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '26,500' )) }}
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Employment Status
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {!! Form::select('employment', $employment, null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) !!}
                                        <!--end::Input-->
                                    </div>
                                </div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Department</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            Department
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        {!! Form::select('department_id', $departments, null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) !!}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Input group-->
                </div>
                <!--end::Card body-->
                <div class="card-footer">
                    <!--begin::Card title-->
                    <!--begin::Action-->
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    <!--end::Action-->
                {{ Form::close() }}

                    {{ Form::model($employee, array('route' => array('employees.destroy', $employee->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
                    <button type="submit" class="btn btn-danger align-self-center">Delete</button>
                    {{ Form::close() }}
                </div>
            </div>
            <!--end::details View-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
@endsection
