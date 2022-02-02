@extends('layouts.app')
@section('title', 'Update Provider')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Provider: {{ $provider->name }}</h1>
                    <!--end::Title-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/providers" class="text-muted text-hover-primary">
                                Providers
                            </a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">{{ $provider->name }}</li>
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
                            <h3 class="fw-bolder m-0">Provider Details</h3>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body p-9">
                    {{ Form::model($provider, array('route' => array('providers.update', $provider->id), 'method' => 'PUT')) }}
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Full Name</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center form-label">
                                        <span class="required">Name</span>
                                    </label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    {{ Form::text('name', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                <!--end::Input-->
                                </div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
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
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Contact Details</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Row-->
                                <div class="row">
                                    <!--begin::Col-->
                                    <div class="col-lg-6 fv-row">
                                        {{ Form::text('phone', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '0114 2345 232')) }}
                                    </div>
                                    <!--end::Col-->
                                    <!--begin::Col-->
                                    <div class="col-lg-6 fv-row">
                                        {{ Form::email('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'training@acme-training.com')) }}
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Row-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Website</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                {{ Form::text('website', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'acme-training.com')) }}
                                <!--end::Input-->
                                </div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--end::Row-->
                    </div>
                    <!--end::Card body-->
                    <div class="card-footer">
                        <!--begin::Card title-->
                        <!--begin::Action-->
                        <button type="submit" class="btn btn-primary align-self-center">Update</button>
                        <!--end::Action-->
                        {{ Form::close() }}

                        {{ Form::model($provider, array('route' => array('providers.destroy', $provider->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
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
