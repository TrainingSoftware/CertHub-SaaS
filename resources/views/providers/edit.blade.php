@extends('layouts.app')
@section('title', 'Update Provider')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Provider: {{ $provider->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/providers" class="text-muted text-hover-primary">
                        Providers
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $provider->name }}</li>
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
                        <h3 class="fw-bolder m-0">Provider Details</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    {{ Form::model($provider, array('route' => array('providers.update', $provider->id), 'method' => 'PUT')) }}
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
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Address</label>
                        <div class="col-lg-8">
                        <div class="row mb-10">
								<div class="form-group col-md-12">
									<a href="#" class="btn btn-light-primary fw-bolder w-100" data-bs-toggle="modal" data-bs-target="#kt_modal_postcode">Search address</a>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="d-flex align-items-center mb-10">
										<div class="border-bottom border-gray-300 mw-50 w-100"></div>
										<span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
										<div class="border-bottom border-gray-300 mw-50 w-100"></div>
									</div>
								</div>
							</div>
                            <div class="row mb-7">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Building Name / Number
                                    </label>
                                    {{ Form::text('line_1', null, array('id' => 'address_line_1', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '6')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Line 2
                                    </label>
                                    {{ Form::text('line_2', null, array('id' => 'address_line_2', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Dale Road')) }}
                                </div>
                            </div>
                            <div class="row mb-7">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Town
                                    </label>
                                    {{ Form::text('town', null, array('id' => 'posttown', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Chesterfield')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    County
                                    </label>
                                    {{ Form::text('county', null, array('id' => 'county', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Derbyshire')) }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Postcode
                                    </label>
                                    {{ Form::text('postcode', null, array('id' => 'postcode', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'S18 1XJ')) }}
                                </div>
                                <div class="form-group col-md-6">
                                    <label class="d-flex align-items-center form-label">
                                    Country
                                    </label>
                                    {{ Form::text('country', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'United Kingdom')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Contact Details</label>
                        <div class="col-lg-8">
                            <div class="row">
                                <div class="col-lg-6 fv-row">
                                    <input typ="text" name="phone" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" value="{{ $provider->phone }}" data-inputmask="'mask': '99999999999'" placeholder="01246498100">
                                </div>
                                <div class="col-lg-6 fv-row">
                                    {{ Form::email('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'training@acme-training.com')) }}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Website</label>
                        <div class="col-lg-8">
                            <div class="form-group">
                                {{ Form::text('website', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'acme-training.com')) }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer">
                    <button type="submit" class="btn btn-primary align-self-center">Update</button>
                    {{ Form::close() }}
                    @include('partials.global.postcode-search')
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
                                            <h1 class="mb-3">Delete <span class="text-danger">{{ $provider->name }}</span>?</h1>
                                            <div class="text-muted fw-bold fs-5">
                                                Are you sure you want to delete {{ $provider->name }}? This action cannot be undone.
                                            </div>
                                            <div class="text-center mt-10">
                                                {{ Form::model($provider, array('route' => array('providers.destroy', $provider->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
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