@extends('layouts.app')
@section('title', $tender->name . ' Employees')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Tender: {{ $tender->name }}</h1>
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
                        <a href="/tenders" class="text-muted text-hover-primary">Tenders</a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">{{ $tender->name }}</li>
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
            <div class="card mb-6 mb-xl-9">
                <div class="card-body pt-9 pb-0">
                    <!--begin::Details-->
                    <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
                        <!--begin::Image-->
                        <div class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                            <!--begin::Svg Icon | path: assets/media/icons/duotune/abstract/abs034.svg-->
                            <span class="svg-icon svg-icon-muted svg-icon-3hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path opacity="0.3" d="M22 12C22 13.8 21.5 15.5 20.7 17L14.9 7H20.7C21.5 8.5 22 10.2 22 12ZM3.3 7L6.2 12L12 2C8.3 2 5.1 4 3.3 7ZM3.3 17C5 20 8.3 22 12 22L14.9 17H3.3Z" fill="black"/>
                                    <path d="M20.7 7H9.2L12.1 2C15.7 2 18.9 4 20.7 7ZM3.3 7C2.4 8.5 2 10.2 2 12C2 13.8 2.5 15.5 3.3 17H9.10001L3.3 7ZM17.8 12L12 22C15.7 22 18.9 20 20.7 17L17.8 12Z" fill="black"/>
                                </svg>
                            </span>
                            <!--end::Svg Icon-->
                        </div>
                        <!--end::Image-->
                        <!--begin::Wrapper-->
                        <div class="flex-grow-1">
                            <!--begin::Head-->
                            <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                                <!--begin::Details-->
                                <div class="d-flex flex-column">
                                    <!--begin::Status-->
                                    <div class="d-flex align-items-center mb-1">
                                        <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ $tender->name }}</a>
                                        <span class="badge badge-light-success me-auto">In Progress</span>
                                    </div>
                                    <!--end::Status-->
                                    <!--begin::Description-->
                                    <div class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                                        <span class="">
                                            {{ $tender->location }}
                                        </span>
                                         
                                    </div>
                                    <!--end::Description-->
                                </div>
                                <!--end::Details-->
                                <!--begin::Actions-->
                                <div class="d-flex mb-4">
                                    <a href="#" class="btn btn-sm btn-primary btn-active-color-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Employees</a>
                                    <!--begin::Menu-->
                                    <div class="me-0">
                                        <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                        <i class="bi bi-three-dots fs-3"></i>
                                        </button>
                                        <!--begin::Menu 3-->
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="/tenders/{{ $tender->id }}/edit" class="menu-link px-3">Edit project</a>
                                            </div>
                                            <!--end::Menu item-->
                                            <!--begin::Menu item-->
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3">Generate Tender</a>
                                            </div>
                                            <!--end::Menu item-->
                                        </div>
                                        <!--end::Menu 3-->
                                    </div>
                                    <!--end::Menu-->
                                </div>
                                <!--end::Actions-->
                            </div>
                            <!--end::Head-->
                            <!--begin::Info-->
                            <div class="d-flex flex-wrap justify-content-start">
                                <!--begin::Stats-->
                                <div class="d-flex flex-wrap">
                                    <!--begin::Stat-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <!--begin::Number-->
                                        <div class="d-flex align-items-center">
                                            <div class="fs-4 fw-bolder">{{ $tender->start_date->format('d M Y') }}</div>
                                        </div>
                                        <!--end::Number-->
                                        <!--begin::Label-->
                                        <div class="fw-bold fs-6 text-gray-400">Start Date</div>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Stat-->
                                    <!--begin::Stat-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <!--begin::Number-->
                                        <div class="d-flex align-items-center">
                                            <div class="fs-4 fw-bolder">{{ $tender->end_date->format('d M Y') }}</div>
                                        </div>
                                        <!--end::Number-->
                                        <!--begin::Label-->
                                        <div class="fw-bold fs-6 text-gray-400">End Date</div>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Stat-->
                                    <!--begin::Stat-->
                                    <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                                        <!--begin::Number-->
                                        <div class="d-flex align-items-center">
                                            <div class="fs-4 fw-bolder">{{ $renewalsCount }}</div>
                                        </div>
                                        <!--end::Number-->
                                        <!--begin::Label-->
                                        <div class="fw-bold fs-6 text-gray-400">Renewals</div>
                                        <!--end::Label-->
                                    </div>
                                    <!--end::Stat-->
                                </div>
                                <!--end::Stats-->
                                <!--begin::Users-->
                                <div class="symbol-group symbol-hover mb-3">
                                    @foreach($slicedEmployees as $employee)    
                                    <!--begin::User-->
                                    <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="{{ $employee->firstname }}{{ $employee->lastname }}">
                                        <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
                                    </div>
                                    <!--end::User-->
                                    @endforeach
                                    <!--begin::All users-->
                                    @if($tender->employees->count() > 5)
                                    <a href="/tenders/{{ $tender->id }}/employees" class="symbol symbol-35px symbol-circle">
                                        <span class="symbol-label bg-secondary text-dark fs-8 fw-bolder" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View all ({{ $tender->employees->count() }}) employees">
                                            + {{ $remainingEmployees }}
                                        </span>
                                    </a>
                                    @endif
                                    <!--end::All users-->
                                </div>
                                <!--end::Users-->
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Details-->
                    <div class="separator"></div>
                    <!--begin::Nav-->
                    <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
                        <!--begin::Nav item-->
                        <li class="nav-item">
                            <a class="nav-link text-active-primary py-5 me-6" href="/tenders/{{ $tender->id }}">Overview</a>
                        </li>
                        <!--end::Nav item-->
                        <!--begin::Nav item-->
                        <li class="nav-item">
                            <a class="nav-link text-active-primary py-5 me-6 active" href="/tenders/{{ $tender->id }}/employees">Employees</a>
                        </li>
                        <!--end::Nav item-->
                        <!--begin::Nav item-->
                        <li class="nav-item">
                            <a class="nav-link text-active-primary py-5 me-6" href="">Renewals</a>
                        </li>
                        <!--end::Nav item-->
                    </ul>
                    <!--end::Nav-->
                </div>
            </div>
            <!--end::Navbar-->
            <!--begin::Row-->
            <div class="row g-6 g-xl-9">
                <div class="col-lg-12">
                    <!--begin::Table-->
                    <div class="card card-flush ">
                        <!--begin::Card header-->
                        <div class="card-header mt-5">
                            <!--begin::Card title-->
                            <div class="card-title flex-column">
                                <h3 class="fw-bolder mb-1">Employees active on {{ $tender->name }} ({{ $tender->employees->count() }})</h3>
                            </div>
                        </div>
                        <!--end::Card header-->
                        <!--begin::Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Table container-->
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table id="kt_profile_overview_table" class="table table-row-bordered table-row-dashed gy-4 align-middle fw-bolder">
                                    <!--begin::Head-->
                                    <thead class="fs-7 text-gray-400 text-uppercase">
                                        <tr>
                                            <th class="min-w-auto">Name</th>
                                            <th class="min-w-auto">Department</th>
                                            <th class="min-w-auto">Qualifications</th>
                                            <th class="min-w-auto">Status</th>
                                            <th class="min-w-auto text-end">Details</th>
                                        </tr>
                                    </thead>
                                    <!--end::Head-->
                                    <!--begin::Body-->
                                    <tbody class="fs-6">
                                        @foreach($tenderEmployees as $employee)
                                        <tr>
                                            <td>
                                                <!--begin::User-->
                                                <div class="d-flex align-items-center">
                                                    <!--begin::Wrapper-->
                                                    <div class="me-5 position-relative">
                                                        <!--begin::Avatar-->
                                                        <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="{{ $employee->firstname }}{{ $employee->lastname }}">
                                                            <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
                                                        </div>
                                                        <!--end::Avatar-->
                                                    </div>
                                                    <!--end::Wrapper-->
                                                    <!--begin::Info-->
                                                    <div class="d-flex flex-column justify-content-center">
                                                        <a href="" class="fs-6 text-gray-800 text-hover-primary">{{ $employee->firstname }}{{ $employee->lastname }}</a>
                                                        <div class="fw-bold text-gray-400">{{ $employee->email }}</div>
                                                    </div>
                                                    <!--end::Info-->
                                                </div>
                                                <!--end::User-->
                                            </td>
                                            <td>
                                                @if($employee->department)
                                                    {{ $employee->department->name }}
                                                @endif
                                            </td>
                                            <td>
                                                @if($employee->qualifications)
                                                    {{ $employee->qualifications->count() }}
                                                @endif</td>
                                            <td>
                                                
                                            </td>
                                            <td class="text-end">
                                                <a href="/employees/{{ $employee->id }}" class="btn btn-light btn-sm">View</a>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                    <!--end::Body-->
                                </table>
                                <!--end::Table-->
                            </div>
                            <!--end::Table container-->
                        </div>
                        <!--end::Card body-->
                    </div>
                    <!--end::Card-->
                </div>
            </div>
            <!--end::Row-->
        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
<!--end::Content-->

@endsection