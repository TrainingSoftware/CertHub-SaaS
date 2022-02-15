@extends('layouts.portal')
@section('title', 'Home')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5 d-none" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
                <div class="page-title d-flex flex-column me-5 py-2">
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Dashboard</h1>
                </div>
            </div>
        </div>
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" class="container-xxl">
                @include('partials.portal.header')
                <div class="row gy-5 g-xl-8">
                    <div class="col-xl-3">
                        <a href="#" class="card bg-body hoverable card-xl-stretch mb-xl-8">
                            <div class="card-body">
                                <span class="svg-icon svg-icon-primary svg-icon-3x ms-n1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black"></rect>
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black"></rect>
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black"></rect>
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black"></rect>
                                    </svg>
                                </span>
                                <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-5">{{ Auth::guard('portal')->user()->qualifications->count() }}</div>
                                <div class="fw-bold text-gray-400">Qualifications</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xl-3">
                        <a href="#" class="card bg-body hoverable card-xl-stretch mb-xl-8">
                            <div class="card-body">
                                <span class="svg-icon svg-icon-primary svg-icon-3x ms-n1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black"></rect>
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black"></rect>
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black"></rect>
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black"></rect>
                                    </svg>
                                </span>
                                <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-5">{{ Auth::guard('portal')->user()->tenders->count() }}</div>
                                <div class="fw-bold text-gray-400">Tenders</div>
                            </div>
                        </a>
                    </div>
                    <div class="col-xl-3">
                        <a href="#" class="card bg-body hoverable card-xl-stretch mb-xl-8">
                            <div class="card-body">
                                <span class="svg-icon svg-icon-primary svg-icon-3x ms-n1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect x="8" y="9" width="3" height="10" rx="1.5" fill="black"></rect>
                                        <rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black"></rect>
                                        <rect x="18" y="11" width="3" height="8" rx="1.5" fill="black"></rect>
                                        <rect x="3" y="13" width="3" height="6" rx="1.5" fill="black"></rect>
                                    </svg>
                                </span>
                                <div class="text-gray-900 fw-bolder fs-2 mb-2 mt-5">0</div>
                                <div class="fw-bold text-gray-400">Training requests</div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
