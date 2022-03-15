@extends('layouts.app')
@section('title', 'Find training')
@push('extra-css')
<link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css" />
@endpush
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Training</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Training</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-12">
                <div class="card-body flex-column p-5">
                    <div class="d-flex align-items-center h-lg-300px p-5 p-lg-15">
                        <div class="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                            <h1 class="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-6">Find your next training
                                course...</h1>
                            <p class="text-gray-600 mb-6">We have partnered with selected, <a href="">award winning
                                    training providers</a> around the UK to help provide and facilitate first-class
                                training for your workforce</p>
                            @livewire('course-search-bar')
                            <button type="button" class="btn btn-link light btn-sm" data-bs-toggle="modal"
                                data-bs-target="#trainingCategories">
                                Advanced Filter
                            </button>
                        </div>
                        <div class="flex-equal d-flex align-items-end justift-content-center ms-20 pt-20">
                            <img src="/assets/media/creds.png" alt="" class="mw-100 mh-25px mh-lg-275px mb-lg-n12">
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-6 g-xl-9 mb-5">
                <div class="col-md-12">
                    <h3>Popular categories</h3>
                    <ul class="list-inline mt-10 mb-0">
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Working at Height</a>
                        </li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Workplace Culture &
                                Conduct</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Fire Safety</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Safeguarding</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">First Aid</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Mental Health &
                                Wellbeing</a></li>
                        <li class="list-inline-item">
                            <button type="button" class="btn btn-link light btn-sm" data-bs-toggle="modal"
                                data-bs-target="#trainingCategories">
                                View all (56)
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal fade" tabindex="-1" id="trainingCategories">
                <div class="modal-dialog modal-xl">
                    <div class="modal-content shadow-none">
                        <div class="modal-body">
                            <div class="position-relative w-100">
                                <div class="card mb-7 p-5 border-0">
                                    @livewire('training-filter')
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            @foreach($courseCategory as $category)
            <div class="toolbar d-flex flex-stack p-0 mb-5">
                <div class="container d-flex flex-stack flex-wrap">
                    <div class="page-title d-flex flex-column me-5 py-2">
                        <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">{{$category->name}}</h1>
                    </div>
                    <div class="d-flex align-items-center flex-shrink-1">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-sm btn-primary float-end me-2 prev">
                                <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr026.svg-->
                                <span class="svg-icon svg-icon-muted me-0"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7.75 10.7L17.65 5V19L7.75 13.3C6.75 12.7 6.75 11.3 7.75 10.7Z"
                                            fill="black" />
                                    </svg></span>
                                <!--end::Svg Icon-->
                            </button>
                            <button class="btn btn-sm btn-primary float-end next">
                                <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr027.svg-->
                                <span class="svg-icon svg-icon-muted me-0"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M16.9 10.7L7 5V19L16.9 13.3C17.9 12.7 17.9 11.3 16.9 10.7Z"
                                            fill="black" />
                                    </svg></span>
                                <!--end::Svg Icon-->

                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-6 g-xl-9">
                <div class="col-12">
                    <div class="slider multiple-items row">
                        @foreach($category->courses as $course)
                        <div class="col-md-6 col-xl-4 me-3">
                            <div class="card card-stretch border-hover-primary">
                                <div class="card-header border-0 p-9">
                                    <div class="d-inline">
                                        <div class="fs-4 fw-bolder text-dark mt-2">{{$course->name}}</div>
                                        <p class="text-gray-400 fw-bold fs-5">{{$category->name}}</p>
                                    </div>
                                </div>
                                <div class="card-body pt-0">
                                    <div class="row">
                                        <div class="col ">
                                            <div class="fs-6 text-gray-800 fw-bolder">
                                                {{optional($course->duration)->day}}
                                                mins</div>
                                            <div class="fw-bold text-gray-400">Duration</div>
                                        </div>
                                        <div class="col ">
                                            <div class="fs-6 text-gray-800 fw-bolder">£{{$course->price}}</div>
                                            <div class="fw-bold text-gray-400">Price</div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</div>
@endsection
@push('extra-js')
<script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
<script>
    var id = {{$category->id}}

    $('.multiple-items').slick({
        infinite: true,
        arrows: true,
        prevArrow: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.9543 40 -2.7141e-06 31.0457 -1.74846e-06 20C-7.8281e-07 8.9543 8.95431 -2.7141e-06 20 -1.74846e-06C31.0457 -7.8281e-07 40 8.9543 40 20C40 31.0457 31.0457 40 20 40ZM16.1206 13.5198C15.7554 13.1055 15.1632 13.1055 14.798 13.5198L9.58704 19.4308C9.22182 19.8451 9.22182 20.5168 9.58704 20.931L14.798 26.8421C15.1632 27.2563 15.7554 27.2563 16.1206 26.8421C16.4858 26.4278 16.4858 25.7561 16.1206 25.3418L12.4912 21.2248L29.6865 21.2248C30.2388 21.2248 30.6865 20.7771 30.6865 20.2248C30.6865 19.6725 30.2388 19.2248 29.6865 19.2248L12.4138 19.2248L16.1206 15.02C16.4858 14.6057 16.4858 13.934 16.1206 13.5198Z" fill="#7C8B9C"/></svg>',
        nextArrow: '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M20 3.49691e-06C31.0457 5.4282e-06 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.9543 40 1.56562e-06 31.0457 3.49691e-06 20C5.4282e-06 8.95431 8.95431 1.56562e-06 20 3.49691e-06ZM23.8794 26.4802C24.2446 26.8945 24.8368 26.8945 25.202 26.4802L30.413 20.5692C30.7782 20.1549 30.7782 19.4833 30.413 19.069L25.202 13.1579C24.8368 12.7437 24.2446 12.7437 23.8794 13.1579C23.5142 13.5722 23.5142 14.2439 23.8794 14.6582L27.5088 18.7752L10.3135 18.7752C9.7612 18.7752 9.31348 19.2229 9.31348 19.7752C9.31348 20.3275 9.76119 20.7752 10.3135 20.7752L27.5862 20.7752L23.8794 24.98C23.5142 25.3943 23.5142 26.066 23.8794 26.4802Z" fill="#7C8B9C"/></svg>',
        prevArrow: $(".prev"),
        nextArrow: $(".next"),
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
    });
</script>
@endpush
