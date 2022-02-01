@extends('layouts.app')
@section('title', 'View Department')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Qualification Type : {{ $qualificationtype->name }}</h1>
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
                            <a href="/qualificationtypes" class="text-muted text-hover-primary">
                                Qualification Types
                            </a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">{{ $qualificationtype->name }}</li>
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
                <!--begin::details View-->
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                            <!--begin::Card header-->
                            <div class="card-header cursor-pointer">
                                <!--begin::Card title-->
                                <div class="card-title m-0">
                                    <h3 class="fw-bolder m-0">{{ $qualificationtype->name }} Details</h3>
                                </div>
                                <!--end::Card title-->
                                <!--begin::Action-->
                                <a href="/qualificationtypes/{{ $qualificationtype->id }}/edit" class="btn btn-sm btn-primary align-self-center">Edit Qualification Type</a>
                                <!--end::Action-->
                            </div>
                            <!--begin::Card header-->
                            <!--begin::Card body-->
                            <div class="card-body p-9">
                                <!--begin::Row-->
                                <div class="row">
                                    <!--begin::Label-->
                                    <label class="col-lg-4 fw-bold text-muted">Name</label>
                                    <!--end::Label-->
                                    <!--begin::Col-->
                                    <div class="col-lg-8">
                                        <span class="fw-bolder fs-6 text-gray-800">{{ $qualificationtype->name }}</span>
                                    </div>
                                    <!--end::Col-->
                                </div>
                                <!--end::Row-->
                            </div>
                            <!--end::Card body-->
                        </div>
                    </div>
                </div>
                <!--begin::details View-->
                <div class="row">
                    <div class="col-12">
                        <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                            <!--begin::Card header-->
                            <div class="card-header cursor-pointer">
                                <!--begin::Card title-->
                                <div class="card-title m-0">
                                    <h3 class="fw-bolder m-0">Employees with this qualification</h3>
                                </div>
                            </div>
                            <!--begin::Card header-->
                            <!--end::details View-->
                            <div class="card-body pt-0">
                                <!--begin::Table-->
                                <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                    <!--begin::Table head-->
                                    <thead>
                                        <!--begin::Table row-->
                                        <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                            <th class="w-10px pe-2">
                                                <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                                    <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                                </div>
                                            </th>
                                            <th class="min-w-150px">Name</th>
                                            <th class="min-w-125px">Department</th>
                                            <th class="min-w-125px">Expiry</th>
                                            <th class="min-w-50px">Status</th>
                                            <th class="min-w-50px"></th>
                                        </tr>
                                        <!--end::Table row-->
                                    </thead>
                                    <!--end::Table head-->
                                    <!--begin::Table body-->
                                    <tbody class="text-gray-600 fw-bold">
                                        @foreach ($qualifications as $item)
                                        <!--begin::Table row-->
                                        <tr class="">
                                            <!--begin::Checkbox-->
                                            <td>
                                                <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                    <input class="form-check-input" type="checkbox" value="1" />
                                                </div>
                                            </td>
                                            <!--end::Checkbox-->
                                            <!--begin::User=-->
                                            <td class="d-flex align-items-center border-bottom-0">
                                                <!--begin::User details-->
                                                <div class="d-flex flex-column ">
                                                    <a href="/qualificationtypes/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1 p-2">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</a>
                                                </div>
                                                <!--begin::User details-->
                                            </td>
                                            <!--end::User=-->
                                            <!--begin::User=-->
                                            <td class="">
                                                @if($item->employee->department)
                                                <!--begin::User details-->
                                                <div class="d-flex flex-column ">
                                                        {{ $item->employee->department->name }}
                                                </div>
                                                <!--begin::User details-->
                                                @endif
                                            </td>
                                            <!--end::User=-->
                                            <!--begin::User=-->
                                            <td class="">
                                                <!--begin::User details-->
                                                <div class="d-flex flex-column ">
                                                        {{ $item->expiry_date->format('d M Y') }}
                                                </div>
                                                <!--begin::User details-->
                                            </td>
                                            <!--end::User=-->
                                            <!--begin::User=-->
                                            <td class="">
                                            @if($item->expiry_date < Carbon\Carbon::today())
                                            <span class="badge badge-danger">Expired</span>
                                            @elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
                                                <span class="badge badge-warning">Expiring</span>
                                            @else
                                                <span class="badge badge-success">Valid</span>
                                            @endif
                                            </td>
                                            <!--end::User=-->
                                            <!--begin::Action=-->
                                            <td class="text-end">
                                                <a href="/qualifications/{{ $item->id }}" class="btn btn-light btn-sm w-100">View</a>
                                            </td>
                                            <!--end::Action=-->
                                        </tr>
                                        <!--end::Table row-->
                                        @endforeach
                                    </tbody>
                                    <!--end::Table body-->
                                </table>
                                <!--end::Table-->
                            </div>
                            <!--end::Card body-->
                        </div>
                    </div>
                </div>
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection
