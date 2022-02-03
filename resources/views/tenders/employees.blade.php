@extends('layouts.app')
@section('title', $tender->name . ' Employees')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Tender: {{ $tender->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">
                        <a href="/tenders" class="text-muted text-hover-primary">Tenders</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $tender->name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            @include('partials.tenders.header')
            <div class="row g-6 g-xl-9">
                <div class="col-lg-12">
                    <div class="card card-flush ">
                        <div class="card-header mt-5">
                            <div class="card-title flex-column">
                                <h3 class="fw-bolder mb-1">Employees active on {{ $tender->name }} ({{ $tender->employees->count() }})</h3>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="table-responsive">
                                <table id="kt_profile_overview_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder">
                                    <thead class="fs-7 text-gray-400 text-uppercase">
                                        <tr>
                                            <th class="min-w-auto">Name</th>
                                            <th class="min-w-auto">Department</th>
                                            <th class="min-w-auto">Qualifications</th>
                                            <th class="min-w-auto">Status</th>
                                            <th class="min-w-auto text-end">Details</th>
                                        </tr>
                                    </thead>
                                    <tbody class="fs-6">
                                        @foreach($tenderEmployees as $employee)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="me-5 position-relative">
                                                        <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="{{ $employee->firstname }}{{ $employee->lastname }}">
                                                            <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
                                                        </div>
                                                    </div>
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <a href="" class="fs-6 text-gray-800 text-hover-primary">{{ $employee->firstname }}{{ $employee->lastname }}</a>
                                                        <div class="fw-bold text-gray-400">{{ $employee->email }}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                @if($employee->department)
                                                {{ $employee->department->name }}
                                                @endif
                                            </td>
                                            <td>
                                                @if($employee->qualifications)
                                                {{ $employee->qualifications->count() }}
                                                @endif
                                            </td>
                                            <td>
                                            </td>
                                            <td class="text-end">
                                                <a href="/employees/{{ $employee->id }}" class="btn btn-light btn-sm">View</a>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection