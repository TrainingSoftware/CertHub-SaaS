@extends('layouts.app')
@section('title', 'Add a Qualification')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Add a qualification</h1>
                <!--end::Title-->
                <!--begin::Breadcrumb-->
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">
                            Dashboard
                        </a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualifications" class="text-muted text-hover-primary">
                            Qualifications
                        </a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">Create</li>
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
    <div class="post d-flex flex-column-fluid">
        <!--begin::Container-->
        <div id="kt_content_container" class="container-xxl">
            <!--begin::Basic info-->
            <div class="card mb-5 mb-xl-10">
                <!--begin::Card header-->
                <div class="card-header border-0 ">
                    <!--begin::Card title-->
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Qualification Details</h3>
                    </div>
                    <!--end::Card title-->
                </div>
                <!--begin::Card header-->
                <!--begin::Content-->
                <div id="kt_account_profile_details">
                    <!--begin::Form-->
                    <form class="form" method="POST" action="/qualifications">
                        @csrf
                        <!--begin::Card body-->
                        <div class="card-body border-top p-9">
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Employee</label><br>
                                    <small><a href="/employees/create" target="_blank">Create new?</a></small>
                                </div>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    {!! Form::select('employee_id', $employees, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select employee']) !!}
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Qualification Type</label><br>
                                    <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
                                </div>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    {!! Form::select('qualificationtype_id', $qualificationtypes, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select qualification type']) !!}
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Provider</label><br>
                                    <small><a href="/providers/create" target="_blank">Create new?</a></small>
                                </div>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    @if(request()->query("provider"))
                                        <div class="input-group">
                                            <input class="form-control form-control-lg form-control-solid mb-3 mb-lg-0 disbled" type="text" value="{{ $providers[0]['name'] }}" disabled>
                                            <span class="input-group-text border-0" id="basic-addon1">
                                                <a href="/qualifications/create">Clear</a>
                                            </span>
                                        </div>
                                    @else
                                        {!! Form::select('provider_id', $providers, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select provider']) !!}
                                    @endif
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <div class="col-lg-4 col-form-label">
                                    <label class="required fw-bold fs-6">Registration Number</label>
                                </div>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <!--begin::Row-->
                                    <div class="row">
                                        <!--begin::Col-->
                                        <div class="col-lg-12 fv-row">
                                            {{ Form::text('regno', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '01234567']) }}
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                            <!--begin::Input group-->
                            <div class="row mb-6">
                                <!--begin::Label-->
                                <div class="col-lg-4 col-form-label">
                                    <label class="required fw-bold fs-6">Expiry Date</label>
                                </div>
                                <!--end::Label-->
                                <!--begin::Col-->
                                <div class="col-lg-8">
                                    <!--begin::Row-->
                                    <div class="row">
                                        <!--begin::Col-->
                                        <div class="col-lg-12 fv-row">
                                            {{ Form::text('expiry_date', date('d-m-Y'), ['id' => 'qualExpiry', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) }}
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Input group-->
                        </div>
                        <!--end::Card body-->
                        <!--begin::Actions-->
                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                            <a href="/employees"
                               class="btn btn-light btn-active-light-primary me-2">Cancel</a>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                        <!--end::Actions-->
                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Content-->
            </div>
            <!--end::Basic info-->
        </div>
    </div>
</div>
@endsection
