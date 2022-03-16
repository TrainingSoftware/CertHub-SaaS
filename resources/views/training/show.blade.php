@extends('layouts.app')
@section('title', $course->name)
@push('extra-css')
@endpush

@section('content')

<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">{{ $course->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/training" class="text-muted text-hover-primary">Training</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $course->name }}</li>
                </ul>
            </div>
            <div class="d-flex align-items-center flex-shrink-0">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <a href="#" class="btn btn-sm btn-primary">
                        <span class="svg-icon svg-icon-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M8 8C8 7.4 8.4 7 9 7H16V3C16 2.4 15.6 2 15 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H5V16.1C5 16.8 5.79999 17.1 6.29999 16.6L8 14.9V8Z"
                                    fill="black" />
                                <path
                                    d="M22 8V18C22 18.6 21.6 19 21 19H19V21.1C19 21.8 18.2 22.1 17.7 21.6L15 18.9H9C8.4 18.9 8 18.5 8 17.9V7.90002C8 7.30002 8.4 6.90002 9 6.90002H21C21.6 7.00002 22 7.4 22 8ZM19 11C19 10.4 18.6 10 18 10H12C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H18C18.6 12 19 11.6 19 11ZM17 15C17 14.4 16.6 14 16 14H12C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16H16C16.6 16 17 15.6 17 15Z"
                                    fill="black" />
                            </svg>
                        </span>
                        Speak to sales
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="row">
                <div class="col-9">
                    @if($course->courseMetas)
                    <div id="courseDates">
                        <div class="card mb-7 bg-light">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12">
                                        <h3 class="text-primary">Search available course dates</h3>
                                        <p class="w-75">We have partnered with selected, award winning training
                                            providers around the
                                            UK to
                                            help provide and facilitate first-class training for your workforce</p>
                                    </div>
                                </div>
                                <form action="{{route('training.coursemeta.search',$course)}}" method="POST">
                                    @csrf
                                    <div class="d-flex align-items-center">

                                    <div class="position-relative col me-md-2">
                                        <span
                                            class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                            <i class="bi bi-calendar"></i>
                                        </span>
                                        <input type="text" class="form-control form-control-solid ps-10  bg-white"
                                            name="courseStartDate" id="courseStartDate" placeholder="Start Date" />
                                    </div>
                                    <div class="position-relative me-md-2">
                                        to
                                    </div>
                                    <div class="position-relative col me-md-2">
                                        <span
                                            class="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                                            <i class="bi bi-calendar"></i>
                                        </span>

                                        <input type="text" class="form-control form-control-solid ps-10  bg-white"
                                            name="courseEndDate" id="courseEndDate" placeholder="End Date" />
                                    </div>
                                    <div class="position-relative me-md-2">
                                        in
                                    </div>
                                    <div class="position-relative col me-md-2">
                                        <select name="location"
                                            class="form-select form-select-lg form-select-solid bg-white"
                                            data-control="select2" data-placeholder="Select location..."
                                            data-allow-clear="true" data-hide-search="false">
                                            @foreach($locations as $location)
                                            <option value="{{$location->id}}">{{$location->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="position-relative col-3">
                                        <button class="btn btn-block btn-primary py-3">Search Dates</button>
                                    </div>
                                </div>

                                </form>
                               @if(session()->has('courseMeta'))
                                   {{session('courseMeta')}}
                                   @endif

                            </div>
                        </div>
                    </div>
                    @endif
                    <div class="mb-10">
                        <h3>Overview</h3>
                        <div class="text-muted">
                            {!! $course->overview !!}
                        </div>
                    </div>
                    <div class="mb-10">
                        <h3>What you will learn</h3>
                        <ul class="list text-muted">
                            @foreach (optional($course->agenda) as $item )
                            <li><i class="fa fas-check-circle-o"></i> {{ $item['name'] }}</li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="mb-10">
                        <h3>Entry requirements</h3>
                        <div class="text-muted">
                            {!! $course->entry !!}
                        </div>
                    </div>
                    <div class="mb-10">
                        <h3>Certification</h3>
                        <div class="text-muted">
                            {!! $course->certification !!}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

@endsection
@push('extra-js')
@endpush
