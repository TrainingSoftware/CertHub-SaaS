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

            @livewire('training-filter')

            @foreach($courseCategory as $category)
            <div class="toolbar d-flex flex-stack p-0 mb-5">
                <div class="container d-flex flex-stack flex-wrap">
                    <div class="page-title d-flex flex-column me-5 py-2">
                        <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">{{$category->name}}</h1>
                    </div>
                    <div class="d-flex align-items-center flex-shrink-1">
                        <div class="d-flex justify-content-end">
                            <button class="btn btn-sm btn-primary float-end me-2">
                                <!--begin::Svg Icon | path: assets/media/icons/duotune/arrows/arr026.svg-->
                                <span class="svg-icon svg-icon-muted me-0"><svg xmlns="http://www.w3.org/2000/svg"
                                        width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M7.75 10.7L17.65 5V19L7.75 13.3C6.75 12.7 6.75 11.3 7.75 10.7Z"
                                            fill="black" />
                                    </svg></span>
                                <!--end::Svg Icon-->
                            </button>
                            <button class="btn btn-sm btn-primary float-end ">
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
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
</script>
@endpush
