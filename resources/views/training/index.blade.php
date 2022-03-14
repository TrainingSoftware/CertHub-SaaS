@extends('layouts.app')
@section('title', 'Find training')
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
                            <div class="position-relative w-100">
                                <span
                                    class="svg-icon svg-icon-2 svg-icon-primary position-absolute top-50 translate-middle ms-8">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                                            transform="rotate(45 17.0365 15.1223)" fill="black"></rect>
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="black"></path>
                                    </svg>
                                </span>
                                <input type="text"
                                    class="form-control fs-4 py-4 ps-14 text-gray-700 placeholder-gray-400 mw-500px"
                                    name="search" value="" placeholder="Search our training courses...">
                            </div>
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
                                    <div class="row g-8 mb-10">
                                        <!--begin::Col-->
                                        <!--begin::Col-->
                                        <div class="col-lg-12">
                                            <label class="fs-6 form-label fw-bolder text-dark">Select
                                                Type</label>
                                            <!--begin::Radio group-->
                                            <div class="nav-group nav-group-fluid">
                                                <!--begin::Option-->
                                                <label>
                                                    <input type="radio" class="btn-check" name="type" value="has"
                                                        checked="checked">
                                                    <span
                                                        class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">Commercial</span>
                                                </label>
                                                <!--end::Option-->
                                                <!--begin::Option-->
                                                <label>
                                                    <input type="radio" class="btn-check" name="type" value="users">
                                                    <span
                                                        class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">NVQ</span>
                                                </label>
                                                <!--end::Option-->
                                                <!--begin::Option-->
                                                <label>
                                                    <input type="radio" class="btn-check" name="type" value="orders">
                                                    <span
                                                        class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">CPD</span>
                                                </label>
                                                <!--end::Option-->
                                            </div>
                                            <!--end::Radio group-->
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                    <div class="row g-8 mb-10">
                                        <div class="col-lg-6">
                                            <label class="fs-6 form-label fw-bolder text-dark">Category
                                                Type</label>
                                            <!--begin::Select-->
                                            <select class="form-select form-select-solid select2-hidden-accessible"
                                                data-control="select2" data-placeholder="select category..."
                                                data-hide-search="false" tabindex="-1" aria-hidden="true">
                                                <option value=""></option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-lg-6">
                                            <label class="fs-6 form-label fw-bolder text-dark">Course
                                                Type</label>
                                            <!--begin::Select-->
                                            <select class="form-select form-select-solid select2-hidden-accessible"
                                                data-control="select2" data-placeholder="select course..."
                                                data-hide-search="false" tabindex="-1" aria-hidden="true">
                                                <option value=""></option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                        <!--end::Col-->

                                    </div>
                                    <!--end::Row-->
                                    <!--begin::Row-->
                                    <div class="row g-8 mb-0">
                                        <div class="col-lg-3">
                                            <label class="fs-6 form-label fw-bolder text-dark">Start Date</label>
                                            <input class="form-control" id="trainingStartDate" type="text" />
                                        </div>
                                        <div class="col-lg-3">
                                            <label class="fs-6 form-label fw-bolder text-dark">End Date</label>
                                            <input class="form-control" id="trainingEndDate" type="text" />
                                        </div>
                                        <div class="col-lg-3">
                                            <label class="fs-6 form-label fw-bolder text-dark">Location</label>
                                            <!--begin::Select-->
                                            <select class="form-select form-select-solid select2-hidden-accessible"
                                                data-control="select2" data-placeholder="In Progress"
                                                data-hide-search="true" data-select2-id="select2-data-13-euze"
                                                tabindex="-1" aria-hidden="true">
                                                <option value=""></option>
                                                <option value="1">Not started</option>
                                                <option value="2" selected="selected"
                                                    data-select2-id="select2-data-15-msm2">Select
                                                </option>
                                                <option value="3">Done</option>
                                            </select>
                                            <!--end::Select-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col-lg-3">
                                            <label class="fs-6 form-label fw-bolder text-dark">Remote
                                                delivery?</label>
                                            <div class="form-check form-switch form-check-custom form-check-solid mt-1">
                                                <input class="form-check-input" type="checkbox" value=""
                                                    id="flexSwitchChecked" checked="checked">
                                                <label class="form-check-label" for="flexSwitchChecked">Active</label>
                                            </div>
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Search</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <div class="row g-6 g-xl-9 mt-5">
                <div class="col-md-12">
                    <h3>Category title</h3>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                    <div class="fw-bold text-gray-400">Duration</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                    <div class="fw-bold text-gray-400">Price</div>
                                </div>
                                <div class="col ">
                                    <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                    <div class="fw-bold text-gray-400">Provider</div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-6 col-xl-4">
                    <a href="" class="card border-hover-primary">
                        <div class="card-header border-0 p-9">
                            <div class="card-title">
                                <div class="symbol symbol-50px w-50px bg-light">
                                    <img src="https://pbs.twimg.com/profile_images/1051754923463983105/MJIleIQo_400x400.jpg"
                                        alt="image" class="p-3">
                                </div>
                            </div>
                            <div class="d-inline w-75">
                                <div class="fs-3 fw-bolder text-dark mt-2">Course Name</div>
                                <p class="text-gray-400 fw-bold fs-5">Health & Safety</p>
                            </div>
                        </div>
                        <div class="card-body pt-0">
                            <div class="row">
                                <div class="row">
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">45 mins</div>
                                        <div class="fw-bold text-gray-400">Duration</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">£20.00</div>
                                        <div class="fw-bold text-gray-400">Price</div>
                                    </div>
                                    <div class="col ">
                                        <div class="fs-6 text-gray-800 fw-bolder">iHasco</div>
                                        <div class="fw-bold text-gray-400">Provider</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection