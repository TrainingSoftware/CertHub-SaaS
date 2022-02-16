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

            </div>
        </div>
        @include('qualifications.calendar.partials.fullcalendar')
    </div>
@endsection
@push('extra-js')

@endpush