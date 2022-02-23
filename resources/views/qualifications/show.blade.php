@extends('layouts.app')
@section('title', 'View Qualification')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Qualification: {{ $qualification->qualificationtype->name }} </h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualifications" class="text-muted text-hover-primary">Qualifications</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $qualification->qualificationtype->name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div class="card-header cursor-pointer">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">
                            {{ optional($qualification->employee)->firstname }}'s {{ optional($qualification->qualificationtype)->name }} Details
                        </h3>
                        @if($qualification->expiry_date < Carbon\Carbon::today())
                        <span class="badge badge-danger ms-5">Expired</span>
                        @elseif($qualification->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $qualification->expiry_date > Carbon\Carbon::today())
                        <span class="badge badge-warning ms-5">Expiring</span>
                        @else
                        <span class="badge badge-success ms-5">Valid</span>
                        @endif
                    </div>
                    <div class="flex-end align-self-center">
                        @if($qualification->upload)
                        <form method="POST" action="/qualifications/{{$qualification->id}}/sendSMS" class="d-inline">
                            @csrf
                            <button type="submit" class="btn btn-sm btn-secondary me-5">Send</button>
                        </form>
                        @endif
                        @if($qualification->expiry_date < Carbon\Carbon::today())
                        <a href="/renewals/create?qualification={{ $qualification->id }}" class="btn btn-sm btn-warning">Add Renewal</a>
                        @else
                        <a href="/qualifications/{{ $qualification->id }}/edit" class="btn btn-sm btn-primary">Edit Qualification</a>
                        @endif
                    </div>
                </div>
                <div class="card-body p-9">
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Employee</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">
                            <a href="/employees/{{ optional($qualification->employee)->id }}">{{ optional($qualification->employee)->firstname }} {{ optional($qualification->employee)->lastname }}</a>
                            </span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Qualification Type</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $qualification->qualificationtype->name }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Provider</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $qualification->provider->name }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Expiry Date</label>
                        <div class="col-lg-8">
                            <span class="fw-bolder fs-6 text-gray-800">{{ $qualification->expiry_date->format('d/m/Y') }}</span>
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Registration Number</label>
                        <div class="col-lg-8">
                            @if($qualification->regno)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $qualification->regno }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No reg no available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row mb-7">
                        <label class="col-lg-4 fw-bold text-muted">Cost</label>
                        <div class="col-lg-8">
                            @if($qualification->price)
                            <span class="fw-bolder fs-6 text-gray-800">£{{ $qualification->price }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No price available</span>
                            @endif
                        </div>
                    </div>
                    <div class="row">
                        <label class="col-lg-4 fw-bold text-muted">Grade</label>
                        <div class="col-lg-8">
                            @if($qualification->grade)
                            <span class="fw-bolder fs-6 text-gray-800">{{ $qualification->grade }}</span>
                            @else
                            <span class="fw-bold text-gray-500 fs-6">No Grade Available</span>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
