@extends('layouts.app')
@section('title', $company->name )
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
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
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div class="card-header cursor-pointer">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">{{ $company->name }} Details</h3>
                    </div>
                    <a href="/company/{{ $company->id }}/edit" class="btn btn-sm btn-primary align-self-center">Edit Company</a>
                </div>
                <div class="card-body p-9">
                <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Logo</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">
                                <img src="{{$company->getMedia('avatar')->first() != null ? $company->getMedia('avatar')->first()->getUrl() : "assets/media/svg/avatars/blank.svg" }}" class="img-fluid w-25"/>
                            </span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Name</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->name }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Type</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->type }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Employees</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->size }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Phone</label>
                        <div class="col-lg-8 d-flex align-items-center">
                            @if($company->phone)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->phone }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No phone number available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Email</label>
                        <div class="col-lg-8">
                            @if($company->email)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->email }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No email address available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Address</label>
                        <div class="col-lg-8">
                            @if($company->line_1 && $company->town && $company->county && $company->postcode && $company->country)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->line_1 }},@if($company->line_2) {{ $company->line_2 }},@endif {{ $company->town }}, {{ $company->county }}, {{ $company->postcode }} {{ $company->country }}</span>
                            @else
                            <span class="fw-bolder fs-6 text-gray-500">No address information available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Registration Number</label>
                        <div class="col-lg-8 d-flex align-items-center">
                            @if($company->company_reg)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->company_reg }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No company registration number available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">VAT Number</label>
                        <div class="col-lg-8">
                            @if($company->company_reg)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $company->company_vat }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No company vat number available</span>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection