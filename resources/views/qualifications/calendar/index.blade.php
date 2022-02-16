@extends('layouts.app')
@section('title', 'All Qualifications')
@push('extra-css')
<link href="{{asset('assets/plugins/custom/fullcalendar/fullcalendar.bundle.css')}}" rel="stylesheet" type="text/css" />
@endpush
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
                <div class="page-title d-flex flex-column me-5 py-2">
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Qualifications</h1>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <li class="breadcrumb-item text-muted">
                            <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">Qualifications</li>
                    </ul>
                </div>
                <div class="d-flex align-items-center flex-shrink-0">
                    <div class="d-flex align-items-center mx-3 ms-lg-4">
                        <a href ="{{route('qualifications.index')}}" class="btn btn-icon btn-color-gray-700 btn-sm btn-active-color-primary btn-outline btn-outline-secondary">
                            <span class="svg-icon svg-icon-muted svg-icon-1hx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="auto" height="auto" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                </svg>
                            </span>
                        </a>
                    </div>
                    <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                        <a href="/qualifications/create" class="btn btn-sm btn-primary">
                            <span class="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                </svg>
                            </span>
                            Add Qualification
                        </a>
                    </div>
                </div>
            </div>
        </div>
        @include('qualifications.calendar.partials.fullcalendar')
    </div>
@endsection
@push('extra-js')

@endpush
