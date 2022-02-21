@extends('layouts.app')
@section('title', 'Update ' . $qualification->qualificationtype->name)
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Qualification: {{ optional($qualification->employee)->firstname }}'s {{ $qualification->qualificationtype->name }}</h1>
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
                    <li class="breadcrumb-item text-dark">{{ optional($qualification->employee)->firstname }}'s {{ $qualification->qualificationtype->name }}</li>
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
                        <h3 class="fw-bolder m-0">Qualification Details</h3>
                    </div>
                    <div class="flex-end align-self-center">
                        @if($qualification->getMedia('avatar')->first())
                        <a href="#" class="btn btn-sm btn-link align-self-center me-5" data-bs-toggle="modal" data-bs-target="#fileUpload">Replace File?</a>
                        <a href="{{ $qualification->getMedia('qualification')->first()->getUrl() }}" class="btn btn-sm btn-primary align-self-center" target="_blank">View File</a>
                        @else
                        <a href="#" class="btn btn-sm btn-primary align-self-center" data-bs-toggle="modal" data-bs-target="#fileUpload">Attach File</a>
                        @endif
                    </div>
                </div>
                <div class="modal fade" id="fileUpload" tabindex="-1" aria-hidden="true">
                    <div class="modal-dialog mw-700px">
                        <div class="modal-content">
                            <div class="modal-header pb-0 border-0 d-flex justify-content-end">
                                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                    <span class="svg-icon svg-icon-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <div class="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                                <div class="text-center mb-13">
                                    <h1 class="d-flex justify-content-center align-items-center mb-3">Upload a copy of {{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }} Qualification</h1>
                                    <div class="text-muted fw-bold fs-5">Having trouble uploading? Check out our
                                        <a href="#" class="link-primary fw-bolder">FAQ Page</a>.
                                    </div>
                                </div>
                                <div class="mh-475px text-center">
                                    <form action="{{ route('upload.qualification.file') }}" method="POST" enctype="multipart/form-data">
                                        @csrf
                                        <input type="hidden" name="qualification_id" value="{{ $qualification->id }}">
                                        <div class="row">
                                            <div class="col-md-9">
                                                <input type="file" name="file" class="form-control">
                                            </div>
                                            <div class="col-md-3">
                                                <button type="submit" class="btn btn-success">Upload</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body p-9">
                    {{ Form::model($qualification, array('route' => array('qualifications.update', $qualification->id), 'method' => 'PUT')) }}
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Employee</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <select name="employee_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select employee" data-allow-clear="true" data-hide-search="false">
                                    <option></option>
                                    @foreach($employees as $item)
                                    <option value="{{ $item->id }}" @if($qualification->employee->id === $item->id) selected @endif>{{ $item->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Qualification Type</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <select name="qualificationtype_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select qualification type" data-allow-clear="true" data-hide-search="false">
                                    <option></option>
                                    @foreach($qualificationtypes as $item)
                                    <option value="{{ $item->id }}" @if($qualification->qualificationtype->id === $item->id) selected @endif>{{ $item->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Provider</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <select name="provider_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select provider" data-allow-clear="true" data-hide-search="false">
                                    <option></option>
                                    @foreach($providers as $item)
                                    <option value="{{ $item->id }}" @if($qualification->provider->id === $item->id) selected @endif>{{ $item->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Expiry Date</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                <input name="expiry_date" id="qualExpiry" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" value="@if($qualification->expiry_date){{ $qualification->expiry_date->format('j-n-Y') }}@endif">
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Reg No.</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                {!! Form::text('regno', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '123-456-789']) !!}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="">Price</span></label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                {!! Form::text('price', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Enter cost']) !!}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    {{ Form::close() }}
                    <button class="btn btn-danger align-self-center" data-bs-toggle="modal" data-bs-target="#kt_modal_confirm_delete">Delete</button>
                    <div class="modal fade" id="kt_modal_confirm_delete" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered mw-800px">
                            <div class="modal-content">
                                <div class="modal-header pb-0 border-0 justify-content-end">
                                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                        <span class="svg-icon svg-icon-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                                <div class="modal-body scroll-y pt-0 pb-15">
                                    <div class="mw-lg-600px mx-auto">
                                        <div class="text-center">
                                            <h1 class="mb-3">Delete <span class="text-danger">{{ $qualification->qualificationtype->name }}</span>?</h1>
                                            <div class="text-muted fw-bold fs-5">
                                                Are you sure you want to delete {{ $qualification->qualificationtype->name }}? This action cannot be undone.
                                            </div>
                                            <div class="text-center mt-10">
                                                {{ Form::model($qualification, array('route' => array('qualifications.destroy', $qualification->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
                                                <button class="btn btn-danger fw-bolder" type="submit">Confirm delete</button>
                                                {{ Form::close() }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
