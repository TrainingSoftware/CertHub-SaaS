@extends('layouts.app')
@section('title', 'Report: Qualifications Expiring This Month')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Report: Qualifications Expiring This Month</h1>
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
                        <li class="breadcrumb-item text-dark">
                            <a href="/reports" class="text-muted text-hover-primary">Reports</a>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <!--end::Item-->
                        <!--begin::Item-->
                        <li class="breadcrumb-item text-dark">Qualifications Expiring This Month</li>
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
                <!--begin::Card-->

                <!--begin::Alert-->
                <div class="alert bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row w-100 p-5 mb-10">
                    <!--begin::Icon-->
                    <span class="svg-icon svg-icon-2hx svg-icon-danger me-4 mb-5 mb-sm-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="black"></path>
                            <path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="black"></path>
                        </svg>
                    </span>
                    <!--end::Icon-->

                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <!--begin::Title-->
                        <h5 class="mb-1">About this report...</h5>
                        <!--end::Title-->
                        <!--begin::Content-->
                        <span>This report shows all qualifications expiring in the current month.</span>
                        <!--end::Content-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Alert-->

                <div class="row">
                    <div class="col-md-3">
                        <div class="card bg-white">
                            <div class="card-header top-left top-right">
                                <div class="card-title text-black hint-text">
                                    <span class="font-montserrat fs-11 all-caps">Number of Renewals</span>
                                </div>
                            </div>
                            <div class="card-body p-t-40">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="no-margin p-b-5 text-danger semi-bold">{{ $qualificationsCount }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="card bg-white">
                            <div class="card-header top-left top-right">
                                <div class="card-title text-black hint-text">
                                    <span class="font-montserrat fs-11 all-caps">Est Cost of Renewals</span>
                                </div>
                            </div>
                            <div class="card-body p-t-40">
                                <div class="row">
                                    <div class="col-sm-12">
                                        <h4 class="no-margin p-b-5 text-danger semi-bold">£{{ $qualificationsPrice }}</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!--begin::Card -->
                <div class="card mt-10">
                    <!--begin::Card header-->
                    <div class="card-header border-0 pt-6">
                        <!--begin::Card title-->
                        <div class="card-title">
                            <!--begin::Search-->
                            <div class="d-flex align-items-center position-relative my-1">
                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                </svg>
                            </span>
                                <!--end::Svg Icon-->
                                <input type="text" data-kt-user-table-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Search qualifications" />
                            </div>
                            <!--end::Search-->
                        </div>
                        <!--begin::Card title-->
                    </div>
                    <!--end::Card header-->
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Table-->
                            <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                <!--begin::Table head-->
                                <thead>
                                <!--begin::Table row-->
                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                    <th class="min-w-125px">Name</th>
                                    <th class="min-w-125px">Type</th>
                                    <th class="min-w-125px">Expiry Date</th>
                                    <th class="min-w-125px">Cost</th>
                                </tr>
                                <!--end::Table row-->
                                </thead>
                                <!--end::Table head-->
                                <!--begin::Table body-->
                                <tbody class="text-gray-600 fw-bold">
                                @foreach($qualifications as $item)
                                <tr>
                                    <!--begin::Two step=-->
                                    <td><a href="/employees/{{ $item->employee->id }}">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</a></td>
                                    <td><a href="/qualifications/{{ $item->id }}">{{ $item->qualificationtype->name }}</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>{{ $item->expiry_date->format('d/m/Y') }} </td>
                                    <!--begin::Joined-->
                                    <td>£{{ $item->price }} </td>
                                </tr>
                                <!--end::Table row-->
                                @endforeach
                                <tr>
                                    <!--begin::Two step=-->
                                    <td></td>
                                    <td></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td></td>
                                    <!--begin::Joined-->
                                    <td><strong>£{{ $qualificationsPrice }}</strong></td>
                                </tr>
                                </tbody>
                                <!--end::Table body-->
                            </table>
                            <!--end::Table-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card body-->
                </div>
                <!--end::Card-->
            </div>
            <!--end::Container-->
        </div>
        <!--end::Post-->
    </div>
@endsection
