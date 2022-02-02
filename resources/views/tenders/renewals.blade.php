@extends('layouts.app')
@section('title', $tender->name . ' Renewals')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Tender: {{ $tender->name }}</h1>
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
                    <li class="breadcrumb-item text-dark">
                        <a href="/tenders" class="text-muted text-hover-primary">Tenders</a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">{{ $tender->name }}</li>
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
            @include('partials.tenders.header')
            <!--begin::Row-->
            <div class="row g-6 g-xl-9">
                <div class="col-lg-12">
                    <!--begin::Table-->
                    <div class="card card-flush ">
                        <!--begin::Card header-->
                        <div class="card-header mt-5">
                            <!--begin::Card title-->
                            <div class="card-title flex-column">
                                <h3 class="fw-bolder mb-1">Renewals due</h3>
                            </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <div class="col-lg-12">
                                <div class="row p-3">
                                    <div class="col-lg-5">
                                        <h5>Qualification</h5>
                                    </div>
                                    <div class="col-lg-4">
                                        <h5>Expiry</h5>
                                    </div>
                                    <div class="col-lg-3">
                                        <h5>Price</h5>
                                    </div>
                                    <div class="col-lg-1">
                                        
                                    </div>
                                </div>
                            </div>
                            @foreach($expiredQualifications as $item)
                            <div class="row mb-3">
                                <div class="col-lg-12">
                                    <div class="bg-light border rounded p-3">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <h4 class="mb-0">{{ $item->firstname }} {{ $item->lastname }}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                @foreach($item->qualifications as $item)
                                <div class="col-lg-12">
                                    <div class="row p-3 align-items-center">
                                        <div class="col-lg-5">
                                            <p class="mb-0">
                                                <a href="/qualifications/{{ $item->id }}">{{ $item->qualificationtype->name }} {{ $item->id }}</a></p>
                                        </div>
                                        <div class="col-lg-4">
                                            {{ $item->expiry_date->format('d M Y') }} ({{ $item->expiry_date->diffForHumans() }})
                                        </div>
                                        <div class="col-lg-2">
                                            £{{ $item->price }}
                                        </div>
                                        <div class="col-lg-1 text-right">
                                            <a href="/qualifications/{{ $item->id }}" class="btn btn-light btn-sm w-100">View</a>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                            @endforeach
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                </div>
            </div>
            <!--end::Row-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
<!--end::Content-->

@endsection