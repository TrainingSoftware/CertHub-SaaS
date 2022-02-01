@extends('layouts.app')
@section('title', $provider->name . ' Qualifications')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Provider : {{ $provider->name }}</h1>
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
                        <li class="breadcrumb-item text-muted">
                            <a href="/providers" class="text-muted text-hover-primary">
                                Providers
                            </a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">{{ $provider->name }}</li>
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
                <!--begin::Navbar-->
                @include('partials.providers.header')
                <!--end::Navbar-->
                <!--begin::details View-->
                <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                    <!--begin::Card header-->
                    <div class="card-header cursor-pointer">
                        <!--begin::Card title-->
                        <div class="card-title m-0">
                            <h3 class="fw-bolder m-0">Qualifications</h3>
                        </div>
                        <!--end::Card title-->
                    </div>
                    <!--begin::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body p-9">
                        <!--begin::Table-->
                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                            <!--begin::Table head-->
                            <thead>
                            <!--begin::Table row-->
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-150px">Qualification Type</th>
                                <th class="min-w-125px">Employee</th>
                                <th class="min-w-100px">Expiry Date</th>
                                <th class="min-w-50px">Status</th>
                                <th class="min-w-15px"></th>
                                <th class="min-w-50px"></th>
                            </tr>
                            <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="text-gray-600 fw-bold">
                            @foreach ($qualifications as $item)
                                <!--begin::Table row-->
                                <tr>
                                    <!--begin::User=-->
                                    <td class="d-flex align-items-center border-bottom-0">
                                        <!--begin::User details-->
                                        <div class="d-flex flex-column">
                                            <a href="/qualifications/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->qualificationtype->name }}</a>
                                        </div>
                                        <!--begin::User details-->
                                    </td>
                                    <!--end::User=-->
                                    <!--begin::Joined-->
                                    <td>{{ $item->employee->firstname }} {{ $item->employee->lastname }}</td>
                                    <td>{{ $item->expiry_date->format('d/m/Y') }}</td>
                                    <td>
                                        @if($item->expiry_date < Carbon\Carbon::today())
                                            <span class="badge badge-danger">Expired</span>
                                        @elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
                                            <span class="badge badge-warning">Expiring</span>
                                        @else
                                            <span class="badge badge-success">Valid</span>
                                        @endif
                                    </td>
                                    <!--begin::Joined-->
                                    <td>
                                        @if($item->upload)
                                            <a href="{{ Storage::disk('vultr')->url($item->upload->url) }}" target="_blank">
                                                <span data-bs-toggle="tooltip" data-bs-placement="top" title="Qualification file uploaded">
                                                    <span class="svg-icon svg-icon-success svg-icon-2hx">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                opacity="0.3"
                                                                d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16.7 12.7C17.1 12.3 17.1 11.7 16.7 11.3C16.3 10.9 15.7 10.9 15.3 11.3L11 15.6L8.70001 13.3C8.30001 12.9 7.69999 12.9 7.29999 13.3C6.89999 13.7 6.89999 14.3 7.29999 14.7L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                fill="black"
                                                            />
                                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                                        </svg>
                                                    </span>
                                                </span>
                                            </a>
                                        @endif
                                    </td>
                                    <!--begin::Action=-->
                                    <td class="">
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
                <!--end::details View-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection
