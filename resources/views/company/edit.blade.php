@extends('layouts.app')
@section('title', 'Edit ' . $company->name )
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">{{ $company->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/departments" class="text-muted text-hover-primary">
                        {{ $company->name }}
                        </a>
                    </li>
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
                        <h3 class="fw-bolder m-0">Profile Details</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    {{ Form::model($company, array('route' => array('company.update', $company->id), 'method' => 'PUT','enctype'=>'multipart/form-data')) }}
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Name</span></label>
                        <div class="col-lg-8">
                            @php

                            @endphp
                            <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('{{$company->getMedia('avatar')->first() != null ? $company->getMedia('avatar')->first()->getUrl() : "assets/media/svg/avatars/blank.svg" }}')">
                                <div class="image-input-wrapper w-125px h-125px" style="background-image: url('{{$company->getMedia('avatar')->first() != null ? $company->getMedia('avatar')->first()->getUrl() : "assets/media/svg/avatars/blank.svg" }}')"></div>
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="" data-bs-original-title="Change avatar">
                                    <i class="bi bi-pencil-fill fs-7"></i>
                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg">
                                    <input type="hidden" name="avatar_remove">
                                </label>
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="" data-bs-original-title="Cancel avatar">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove avatar">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Name</span></label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    {{ Form::text('name', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Type</label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    {!! Form::select('type', $types, null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) !!}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                        <span class="required">Phone</span></label>
                        <div class="col-lg-8 d-flex align-items-center">
                            <input typ="text" name="phone" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" value="{{ $company->phone }}" data-inputmask="'mask': '99999999999'">
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                        <span class="required">Email</span>
                        </label>
                        <div class="col-lg-8">
                            {{ Form::text('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
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
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                        <span class="required">Legal Details</span></label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    <span class="required">Company Reg</span>
                                    </label>
                                    {{ Form::text('company_reg', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    <span class="required">Company VAT</span>
                                    </label>
                                    {{ Form::text('company_vat', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
                        <span class="required">CITB Levy Payer</span>
                        </label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="form-group col-md-12">
                                    <label class="form-check form-switch form-check-custom form-check-solid">
                                    {{ Form::checkbox('citb_levy', 0, false) }}
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
