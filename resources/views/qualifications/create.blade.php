@extends('layouts.app')
@section('title', 'Add a Qualification')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Add a qualification</h1>
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
                        Qualifications
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
                        <h3 class="fw-bolder m-0">Qualification Details</h3>
                    </div>
                </div>
                <div id="kt_account_profile_details">
                    <form class="form" method="POST" action="/qualifications">
                        @csrf
                        <div class="card-body border-top p-9">
                            <div class="row mb-6">
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Employee</label><br>
                                    <small><a href="/employees/create" target="_blank">Create new?</a></small>
                                </div>
                                <div class="col-lg-8">
                                    <select name="employee_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select employee" data-allow-clear="true" data-hide-search="false">
                                        <option></option>
                                        @foreach($employees as $item)
                                        <option value="{{ $item->id }}" @if(request()->query("employee") == $item->id) selected @endif>{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-6">
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Qualification Type</label><br>
                                    <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
                                </div>
                                <div class="col-lg-8">
                                    <select name="qualificationtype_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select qualification" data-allow-clear="true" data-hide-search="false">
                                        <option></option>
                                        @foreach($qualificationtypes as $item)
                                        <option value="{{ $item->id }}">{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-6">
                                <div class="col-lg-4 col-form-label py-0">
                                    <label class="required fw-bold fs-6">Provider</label><br>
                                    <small><a href="/providers/create" target="_blank">Create new?</a></small>
                                </div>
                                <div class="col-lg-8">
                                    <select name="provider_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select provider" data-allow-clear="true" data-hide-search="false">
                                        <option></option>
                                        @foreach($providers as $item)
                                        <option value="{{ $item->id }}" @if(request()->query("provider") == $item->id) selected @endif>{{ $item->name }}</option>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            <div class="row mb-6">
                                <div class="col-lg-4 col-form-label">
                                    <label class="required fw-bold fs-6">Registration Number</label>
                                </div>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-lg-12 fv-row">
                                            {{ Form::text('regno', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '01234567']) }}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-6">
                                <div class="col-lg-4 col-form-label">
                                    <label class="required fw-bold fs-6">Expiry Date</label>
                                </div>
                                <div class="col-lg-8">
                                    <div class="row">
                                        <div class="col-lg-12 fv-row">
                                            {{ Form::text('expiry_date', date('d-m-Y'), ['id' => 'qualExpiry', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) }}
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