@extends('layouts.app')
@section('title', 'All Reports')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Reports</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Reports</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">Module</th>
                                <th class="min-w-125px">Name</th>
                                <th class="min-w-125px">Description</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            <tr>
                                <td rowspan="5">Qualifications</td>
                                <td class="p-0"><a href="/reports/1">Qualifications Expiring This Month</a></td>
                                <td>Shows all qualifications expiring in the current month, {{ $thisMonth->format('F, Y') }}. </td>
                            </tr>
                            <tr>
                                <td><a href="/reports/2">Qualifications Expiring Next Month</a></td>
                                <td>Shows all qualifications expiring next month, {{ $nextMonth->format('F, Y') }}. </td>
                            </tr>
                            <tr>
                                <td><a href="/reports/3">Qualifications Expiring This Quarter</a></td>
                                <td>Shows all qualifications expiring next month, {{ $thisMonth->format('F, Y') }} - {{ $thisQuarter->format('F, Y') }}. </td>
                            </tr>
                            <tr>
                                <td><a href="/reports/4">Qualifications Expiring Next Quarter</a></td>
                                <td>Shows all qualifications expiring next quarter, {{ $nextQuarterStart->format('F, Y') }} - {{ $nextQuarterEnd->format('F, Y') }}. </td>
                            </tr>
                            <tr>
                                <td><a href="/reports/5">Qualifications Expiring In This Calendar Year</a></td>
                                <td>Shows all qualifications expiring next quarter, {{ $startOfYear->format('F, Y') }} - {{ $endOfYear->format('F, Y') }}. </td>
                            </tr>
                            <tr>
                                <td rowspan="1">Departments</td>
                                <td class="p-0"><a href="/reports/#">Annual Training Spend by Department</a></td>
                                <td>Shows training spend split by Department</td>
                            </tr>
                            <tr>
                                <td rowspan="1">Providers</td>
                                <td class="p-0"><a href="/reports/#">Annual Training Spend by Provider</a></td>
                                <td>Shows training spend split by Provider</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection