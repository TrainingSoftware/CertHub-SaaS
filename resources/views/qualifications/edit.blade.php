@extends('layouts.app')
@section('title', 'Update ' . $qualification->qualificationtype->name)
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Qualification: {{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }}</h1>
                    <!--end::Title-->
                    <!--begin::Breadcrumb-->
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/" class="text-muted text-hover-primary">Home</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-muted">
                            <a href="/qualifications" class="text-muted text-hover-primary">Qualifications</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">{{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }}</li>
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
                            <h3 class="fw-bolder m-0">Qualification Details</h3>
                        </div>
                        <!--end::Card title-->
                        <div class="flex-end align-self-center">
                            @if($qualification->upload)
                                <a href="#" class="btn btn-sm btn-link align-self-center me-5" data-bs-toggle="modal" data-bs-target="#fileUpload">Replace File?</a>
                                <a href="{{ Storage::disk('vultr')->url($qualification->upload->url) }}" class="btn btn-sm btn-primary align-self-center" target="_blank">View File</a>
                            @else
                                <a href="#" class="btn btn-sm btn-primary align-self-center" data-bs-toggle="modal" data-bs-target="#fileUpload">Attach File</a>
                            @endif
                        </div>
                    </div>
                    <!--begin::Card header-->
                    <!--begin::Modal - Select Users-->
                    <div class="modal fade" id="fileUpload" tabindex="-1" aria-hidden="true">
                        <!--begin::Modal dialog-->
                        <div class="modal-dialog mw-700px">
                            <!--begin::Modal content-->
                            <div class="modal-content">
                                <!--begin::Modal header-->
                                <div class="modal-header pb-0 border-0 d-flex justify-content-end">
                                    <!--begin::Close-->
                                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                        <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
                                        <span class="svg-icon svg-icon-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
											<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
										</svg>
									</span>
                                        <!--end::Svg Icon-->
                                    </div>
                                    <!--end::Close-->
                                </div>
                                <!--end::Modal header-->
                                <!--begin::Modal body-->
                                <div class="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                                    <!--begin::Heading-->
                                    <div class="text-center mb-13">
                                        <!--begin::Title-->
                                        <h1 class="d-flex justify-content-center align-items-center mb-3">Upload a copy of {{ $qualification->employee->firstname }}'s {{ $qualification->qualificationtype->name }} Qualification</h1>
                                        <!--end::Title-->
                                        <!--begin::Description-->
                                        <div class="text-muted fw-bold fs-5">Having trouble uploading? Check out our
                                            <a href="#" class="link-primary fw-bolder">FAQ Page</a>.
                                        </div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Heading-->
                                    <!--begin::Users-->
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
                                    <!--end::Users-->
                                </div>
                                <!--end::Modal Body-->
                            </div>
                            <!--end::Modal content-->
                        </div>
                        <!--end::Modal dialog-->
                    </div>
                    <!--end::Modal - Select Users-->
                    <!--begin::Card body-->
                    <div class="card-body p-9">
                    {{ Form::model($qualification, array('route' => array('qualifications.update', $qualification->id), 'method' => 'PUT')) }}
                    <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Employee</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('employee_id', $employees, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select employee']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Qualification Type</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('qualificationtype_id', $qualificationtypes, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select qualiification type']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Provider</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::select('provider_id', $providers, null, ['class' => 'form-control form-control-lg form-select form-select-solid mb-3 mb-lg-0', 'placeholder' => 'Select provider']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Expiry Date</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::text('expiry_date', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Select expiry date']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Employee</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::text('regno', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Select employee']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                        <!--begin::Row-->
                        <div class="row mb-20 d-flex h-100">
                            <!--begin::Label-->
                            <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="">Price</span></label>
                            <!--end::Label-->
                            <!--begin::Col-->
                            <div class="col-lg-8">
                                <div class="form-group">
                                    {!! Form::text('price', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Enter cost']) !!}
                                </div>
                            </div>
                        </div>
                        <!--end::row-->
                    </div>
                    <!--end::Card body-->
                    <div class="card-footer">
                        <!--begin::Card title-->
                        <!--begin::Action-->
                        <button type="submit" class="btn btn-primary align-self-center">Update</button>
                        <!--end::Action-->
                        {{ Form::close() }}
                        {{ Form::model($qualification, array('route' => array('qualifications.destroy', $qualification->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
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
