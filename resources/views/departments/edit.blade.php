@extends('layouts.app')
@section('title', 'Update Department')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Department: {{ $department->name }}</h1>
                    <!--end::Title-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/home" class="text-muted text-hover-primary">Home</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/departments" class="text-muted text-hover-primary">
                                Departments
                            </a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">{{ $department->name }}</li>
                        <!--end::Item-->
                    </ul>
                    <!--end::Breadcrumb-->
                </div>
                <!--end::Page title-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Toolbar-->
    @include('partials.layout.alert')
    <!--begin::Post-->
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <!--begin::Container-->
            <div id="kt_content_container" class="container-xxl">
                <!--begin::Navbar-->
            <!--end::Navbar-->
                <!--begin::details View-->
                <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                    <!--begin::Card header-->
                    <div class="card-header cursor-pointer">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bolder m-0">Department Details</h3>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body p-9">
                    {{ Form::model($department, array('route' => array('departments.update', $department->id), 'method' => 'PUT')) }}
                    <!--begin::Row-->
                        <div class="row mb-7 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Full Name</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center form-label">
                                        <span class="required">Name</span>
                                    </label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    {{ Form::text('name', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                <!--end::Input-->
                                </div>
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                        <!--begin::Row-->
                        <div class="row mb-7 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Description</label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <!--begin::Row-->
                                <!--begin::Input group-->
                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <!--begin::Input-->
                                        {{ Form::textarea('body', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Col-->
                        </div>
                        <!--end::Row-->
                    </div>
                    <!--end::Card body-->
                    <div class="card-footer">
                        <!--begin::Card title-->
                        <!--begin::Action-->
                        <button type="submit" class="btn btn-primary align-self-center">Update</button>
                        <!--end::Action-->
                        {{ Form::close() }}

                        {{ Form::model($department, array('route' => array('departments.destroy', $department->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
                            <button type="submit" class="btn btn-danger align-self-center">Delete</button>
                        {{ Form::close() }}
                    </div>
                </div>
                <!--end::details View-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection
