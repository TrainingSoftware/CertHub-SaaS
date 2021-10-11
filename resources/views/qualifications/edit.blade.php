@extends('layouts.app')
@section('title', 'Update ' . $qualification->qualificationtype->name)
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Qualification: {{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }}</h1>
                <!--end::Title-->
                <!--begin::Breadcrumb-->
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualifications" class="text-muted text-hover-primary">Qualifications</a></li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">{{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }}</li>
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
            <!--end::Navbar-->
            <!--begin::details View-->
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <!--begin::Card header-->
                <div class="card-header cursor-pointer">
                    <!--begin::Card title-->
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Qualification Details</h3>
                    </div>
                    <!--end::Card title-->
                </div>
                <!--begin::Card header-->
                <!--begin::Card body-->
                <div class="card-body p-9">
                    {{ Form::model($qualification, array('route' => array('qualifications.update', $qualification->id), 'method' => 'PUT')) }}
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Employee</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('employee_id', $employees, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select employee']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Qualification Type</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('qualificationtype_id', $qualificationtypes, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select qualiification type']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Provider</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('provider_id', $providers, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select provider']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Expiry Date</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::date('expiry_date', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Select expiry date']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Employee</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::text('regno', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Select employee']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="">Price</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::text('price', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Enter cost']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                </div>
                <!--end::Card body-->
                <div class="card-footer">
                    <!--begin::Card title-->
                    <!--begin::Action-->
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    <!--end::Action-->
                {{ Form::close() }}

                    {{ Form::model($qualification, array('route' => array('qualifications.destroy', $qualification->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
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
