@extends('layouts.app')
@section('title', 'Find training')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <!--begin::Toolbar-->
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <!--begin::Container-->
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
            <!--begin::Page title-->
            <div class="page-title d-flex flex-column me-5 py-2">
                <!--begin::Title-->
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Training</h1>
                <!--end::Title-->
                <!--begin::Breadcrumb-->
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-muted">
                        <a href="/" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <!--end::Item-->
                    <!--begin::Item-->
                    <li class="breadcrumb-item text-dark">Training</li>
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
            <div class="card mb-12">
                <!--begin::Hero body-->
                <div class="card-body flex-column p-5">
                    <!--begin::Hero content-->
                    <div class="d-flex align-items-center h-lg-300px p-5 p-lg-15">
                        <!--begin::Wrapper-->
                        <div class="d-flex flex-column align-items-start justift-content-center flex-equal me-5">
                            <!--begin::Title-->
                            <h1 class="fw-bolder fs-4 fs-lg-1 text-gray-800 mb-5 mb-lg-6">Find your next training course...</h1>
                            <p class="text-gray-600 mb-6">We have partnered with selected, <a href="">award winning training providers</a> around the UK to help provide and facilitate first-class training for your workforce</p>
                            <!--end::Title-->
                            <!--begin::Input group-->
                            <div class="position-relative w-100">
                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                <span class="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <input type="text" class="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px" name="search" value="" placeholder="Search our training courses...">
                            </div>
                            <!--end::Input group-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Wrapper-->
                        <div class="flex-equal d-flex align-items-end justift-content-center ms-20 pt-20">
                            <!--begin::Illustration-->
                            <img src="/assets/media/creds.png" alt="" class="mw-100 mh-25px mh-lg-275px mb-lg-n12">
                            <!--end::Illustration-->
                        </div>
                        <!--end::Wrapper-->
                    </div>
                    <!--end::Hero content-->
                    <!--begin::Hero nav-->

                    <!--end::Hero nav-->
                </div>
                <!--end::Hero body-->
            </div>
            <!--end::Card-->
            <div class="row g-6 g-xl-9 mb-5">
                <div class="col-md-12">
                    <h3>Popular categories</h3>
                    <ul class="list-inline mt-10 mb-0">
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Working at Height</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Workplace Culture & Conduct</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Fire Safety</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Safeguarding</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">First Aid</a></li>
                        <li class="list-inline-item"><a href="" class="btn btn-info light btn-sm">Mental Health & Wellbeing</a></li>
                        <li class="list-inline-item">
                            <button type="button" class="btn btn-link light btn-sm" data-bs-toggle="modal" data-bs-target="#trainingCategories">
                                View all (56)
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="modal bg-white fade" tabindex="-1" id="trainingCategories">
                <div class="modal-dialog modal-fullscreen">
                    <div class="modal-content shadow-none">
                        <div class="modal-header">
                            <h5 class="modal-title">Search training categories</h5>

                            <!--begin::Close-->
                            <div class="btn btn-icon btn-sm btn-active-light-primary ms-2" data-bs-dismiss="modal" aria-label="Close">
                                <span class="svg-icon svg-icon-2x">
                                    X
                                </span>
                            </div>
                            <!--end::Close-->
                        </div>

                        <div class="modal-body">
                            <div class="position-relative w-100">
                                <!--begin::Svg Icon | path: icons/duotune/general/gen021.svg-->
                                <span class="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                                        <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black"></path>
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->
                                <input type="text" class="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px" name="search" value="" placeholder="Search our training courses...">
                            </div>
                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <!--begin::Due-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <!--end::Due-->
                                <!--begin::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <!--end::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
            </div>

            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <!--begin::Due-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <!--end::Due-->
                                <!--begin::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <!--end::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
            </div>

            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <!--begin::Due-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <!--end::Due-->
                                <!--begin::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <!--end::Budget-->
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
                <!--begin::Col-->
                <div class="col-md-6 col-xl-4">
                    <!--begin::Card-->
                    <a href="" class="card border-hover-primary">
                        <!--begin::Card header-->
                        <div class="card-header border-0 p-9">
                            <!--begin::Card Title-->
                            <div class="card-title">
                                <!--begin::Avatar-->
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg" alt="image" class="p-3">
                                </div>
                                <!--end::Avatar-->
                            </div>
                            <!--end::Car Title-->
                            <!--begin::Card toolbar-->
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <!--end::Name-->
                                <!--begin::Description-->
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                            <!--end::Card toolbar-->
                        </div>
                        <!--end:: Card header-->

                        <!--begin:: Card body-->
                        <div class="card-body pt-0">
                            <!--begin::Name-->
                            <!--end::Description-->
                            <!--begin::Info-->
                            <div class="row">
                                <div class="row">
                                    <!--begin::Due-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <!--end::Due-->
                                    <!--begin::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <!--end::Budget-->
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                            <!--end::Info-->
                        </div>
                        <!--end:: Card body-->
                    </a>
                    <!--end::Card-->
                </div>
                <!--end::Col-->
            </div>

        </div>
        <!--end::Container-->
    </div>
    <!--end::Post-->
</div>
@endsection
