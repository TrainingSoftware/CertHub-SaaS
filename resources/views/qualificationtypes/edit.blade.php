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
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    {{ Form::close() }}
                    {{ Form::model($qualificationtype, array('route' => array('qualificationtypes.destroy', $qualificationtype->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
                    <button type="submit" class="btn btn-danger align-self-center">Delete</button>
                    {{ Form::close() }}
                </div>
            </div>
        </div>
    </div>
</div>
@endsection