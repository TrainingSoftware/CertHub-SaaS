@extends('layouts.app')
@section('title', 'All Reports')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <!--begin::Toolbar-->
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <!--begin::Container-->
            <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
                <!--begin::Page title-->
                <div class="page-title d-flex flex-column me-5 py-2">
                    <!--begin::Title-->
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Reports</h1>
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
                        <li class="breadcrumb-item text-dark">Reports</li>
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
                <div class="card">
                    <!--begin::Card body-->
                    <div class="card-body pt-0">
                        <!--begin::Table-->
                        <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                            <!--begin::Table head-->
                            <thead>
                            <!--begin::Table row-->
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">Module</th>
                                <th class="min-w-125px">Name</th>
                                <th class="min-w-125px">Description</th>
                            </tr>
                            <!--end::Table row-->
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody class="text-gray-600 fw-bold">
                                <!--begin::Table row-->
                                <tr>
                                    <td rowspan="5">Qualifications</td>
                                    <!--begin::Two step=-->
                                    <td class="p-0"><a href="/reports/1">Qualifications Expiring This Month</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows all qualifications expiring in the current month, {{ $thisMonth->format('F, Y') }}. </td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <!--begin::Table row-->
                                <tr>
                                    <!--begin::Two step=-->
                                    <td><a href="/reports/2">Qualifications Expiring Next Month</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows all qualifications expiring next month, {{ $nextMonth->format('F, Y') }}. </td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <!--begin::Table row-->
                                <tr>
                                    <!--begin::Two step=-->
                                    <td><a href="/reports/3">Qualifications Expiring This Quarter</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows all qualifications expiring next month, {{ $thisMonth->format('F, Y') }} - {{ $thisQuarter->format('F, Y') }}. </td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <!--begin::Table row-->
                                <tr>
                                    <!--begin::Two step=-->
                                    <td><a href="/reports/4">Qualifications Expiring Next Quarter</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows all qualifications expiring next quarter, {{ $nextQuarterStart->format('F, Y') }} - {{ $nextQuarterEnd->format('F, Y') }}. </td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <!--begin::Table row-->
                                <tr>
                                    <!--begin::Two step=-->
                                    <td><a href="/reports/5">Qualifications Expiring In This Calendar Year</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows all qualifications expiring next quarter, {{ $startOfYear->format('F, Y') }} - {{ $endOfYear->format('F, Y') }}. </td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <tr>
                                    <td rowspan="1">Departments</td>
                                    <!--begin::Two step=-->
                                    <td class="p-0"><a href="/reports/#">Annual Training Spend by Department</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows training spend split by Department</td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                                <tr>
                                    <td rowspan="1">Providers</td>
                                    <!--begin::Two step=-->
                                    <td class="p-0"><a href="/reports/#">Annual Training Spend by Provider</a></td>
                                    <!--end::Two step=-->
                                    <!--begin::Joined-->
                                    <td>Shows training spend split by Provider</td>
                                    <!--begin::Joined-->
                                </tr>
                                <!--end::Table row-->
                            </tbody>
                            <!--end::Table body-->
                        </table>
                        <!--end::Table-->
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
