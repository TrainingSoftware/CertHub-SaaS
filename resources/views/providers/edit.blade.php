@extends('layouts.app')
@section('title', 'Update Provider')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Provider: {{ $provider->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/providers" class="text-muted text-hover-primary">
                        Providers
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $provider->name }}</li>
                </ul>
            </div>
        </div>
    </div>
    @include('partials.layout.alert')
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div class="card-header cursor-pointer">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Provider Details</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    {{ Form::model($provider, array('route' => array('providers.update', $provider->id), 'method' => 'PUT')) }}
                    <div class="row mb-20 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Full Name</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <label class="d-flex align-items-center form-label">
                                <span class="required">Name</span>
                                </label>
                                {{ Form::text('name', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-20 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Address</label>
                        <div class="col-lg-8">
                            <div class="row mb-7">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Building Name / Number
                                    </label>
                                    {{ Form::text('line_1', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '6')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Line 2
                                    </label>
                                    {{ Form::text('line_2', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Dale Road')) }}
                                </div>
                            </div>
                            <div class="row mb-7">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Town
                                    </label>
                                    {{ Form::text('town', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Chesterfield')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    County
                                    </label>
                                    {{ Form::text('county', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Derbyshire')) }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Postcode
                                    </label>
                                    {{ Form::text('postcode', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'S18 1XJ')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Country
                                    </label>
                                    {{ Form::text('country', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'United Kingdom')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-20 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Contact Details</label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6 fv-row">
                                    {{ Form::text('phone', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '0114 2345 232')) }}
                                </div>
                                <div class="col-lg-6 fv-row">
                                    {{ Form::email('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'training@acme-training.com')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-20 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Website</label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                {{ Form::text('website', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'acme-training.com')) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    {{ Form::close() }}
                    {{ Form::model($provider, array('route' => array('providers.destroy', $provider->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
                    <button type="submit" class="btn btn-danger align-self-center">Delete</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection