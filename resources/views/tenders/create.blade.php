@extends('layouts.app')
@section('title', 'Create a tender')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Create a tender</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">
                        Dashboard
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualifications" class="text-muted text-hover-primary">
                        Tenders
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Create</li>
                </ul>
            </div>
        </div>
    </div>
    @include('partials.layout.alert')
    <div class="post d-flex flex-column-fluid">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10">
                <div class="card-header border-0 ">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Tender Details</h3>
                    </div>
                </div>
                <div id="kt_account_profile_details">
                    <form class="form" method="POST" action="/tenders">
                        @csrf
                        <div class="card-body border-top p-9">
                            <div class="row mb-6 d-flex h-100">
                                <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Name</label>
                                <div class="col-lg-8">
                                    {{ Form::text('name', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '2022 Training Tender']) }}
                                </div>
                            </div>
                            <div class="row mb-6 d-flex h-100">
                                <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Date period</label>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="form-group col-md-6">
                                            <label class="d-flex align-items-center form-label">
                                            Start Date
                                            </label>
                                            {{ Form::text('start_date', date('d-m-Y'), ['id' => 'tenderStart', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) }}
                                        </div>
                                        <div class="form-group col-md-6">
                                            <label class="d-flex align-items-center form-label">
                                            End Date
                                            </label>
                                            {{ Form::text('end_date', date('d-m-Y'), ['id' => 'tenderExpiry', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer d-flex justify-content-end py-6 px-9">
                            <a href="/employees"
                                class="btn btn-light btn-active-light-primary me-2">Cancel</a>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection