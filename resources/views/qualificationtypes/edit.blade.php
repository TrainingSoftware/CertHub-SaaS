@extends('layouts.app')
@section('title', 'Update Qualification Type')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Qualification Type: {{ $qualificationtype->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Home</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualificationtypes" class="text-muted text-hover-primary">
                        Qualification Types
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $qualificationtype->name }}</li>
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
                        <h3 class="fw-bolder m-0">Qualification Type Details</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    {{ Form::model($qualificationtype, array('route' => array('qualificationtypes.update', $qualificationtype->id), 'method' => 'PUT')) }}
                    <div class="row mb-7 d-flex h-100">
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
                    <div class="row">
                        <label class="col-lg-4 col-form-label fw-bold fs-6">Awarding Bodies</label>
                        <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-lg-12 fv-row">
                                        <div class="form-group">
                                            {{ Form::select('awarding_body_id', $awardingBodies,null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0','data-control'=>"select2")) }}
                                        </div>
                                    </div>
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
                                    <div class="mw-lg-600px mx-auto">F
                                        <div class="text-center">
                                            <h1 class="mb-3">Delete <span class="text-danger">{{ $qualificationtype->name }}</span>?</h1>
                                            <div class="text-muted fw-bold fs-5">
                                                Are you sure you want to delete {{ $qualificationtype->name }}? This action cannot be undone.
                                            </div>
                                            <div class="text-center mt-10">
                                                {{ Form::model($qualificationtype, array('route' => array('qualificationtypes.destroy', $qualificationtype->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
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
