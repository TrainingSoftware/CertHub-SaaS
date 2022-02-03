@extends('layouts.app')
@section('title', 'View ' . $tender->name)
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Tender: {{ $tender->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">
                        <a href="/tenders" class="text-muted text-hover-primary">Tenders</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $tender->name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            @include('partials.tenders.header')
            <div class="row g-6 g-xl-9">
                <div class="col-lg-6">
                    <div class="card card-flush h-lg-100">
                        <div class="card-header mt-6">
                            <div class="card-title flex-column">
                                <h3 class="fw-bolder mb-1">Tender Overview</h3>
                                <div class="fs-6 fw-bold text-gray-400">{{ $renewalsCount }} Renewals Due</div>
                            </div>
                            <div class="card-toolbar">
                                <a href="/tenders/{{ $tender->id }}/renewals" class="btn btn-light btn-sm">View Renewals</a>
                            </div>
                        </div>
                        <div class="card-body p-9 pt-5">
                            <div class="d-flex flex-wrap">
                                <div class="position-relative d-flex flex-center h-175px w-175px me-15 mb-7">
                                    <div class="position-absolute translate-middle start-50 top-50 d-flex flex-column flex-center">
                                        <span class="fs-2qx fw-bolder">{{ $tenderEmployeesCount }}</span>
                                        <span class="fs-6 fw-bold text-gray-400">Employees</span>
                                    </div>
                                    <canvas id="project_overview_chart"></canvas>
                                </div>
                                <div class="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
                                    <div class="d-flex fs-6 fw-bold align-items-center mb-3">
                                        <div class="bullet bg-success me-3"></div>
                                        <div class="text-gray-400">Valid Qualifications <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Valid qualifications expire after the project end date"></i></div>
                                        <div class="ms-auto fw-bolder text-gray-700">{{ $activeQualifications }}</div>
                                    </div>
                                    <div class="d-flex fs-6 fw-bold align-items-center mb-3">
                                        <div class="bullet bg-danger me-3"></div>
                                        <div class="text-gray-400">Expired Qualifications <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Expired qualifications expire after during project dates"></i></div>
                                        <div class="ms-auto fw-bolder text-gray-700">{{ $expiredQualificationsTotal }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                                <div class="d-flex flex-stack flex-grow-1">
                                    <div class="fw-bold">
                                        <div class="fs-6 text-gray-700">
                                            <a href="#" class="fw-bolder me-1">Important:</a> This report updates in realtime
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                </div>
            </div>
        </div>
    </div>
</div>
@endsection