@extends('layouts.app')
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
            <div class="row gy-5 g-xl-8">
                <div class="col-xl-4">
                    <div class="card card-xl-stretch mb-xl-8">
                        <div class="card-body p-0">
                            <div class="px-9 pt-7 card-rounded h-275px w-100 bg-primary">
                                <div class="d-flex flex-stack">
                                    <h3 class="m-0 text-white fw-bolder fs-3">Quarterly Training Summary</h3>
                                </div>
                                <div class="d-flex text-center flex-column text-white pt-8">
                                    <span class="fw-bold fs-7">
                                        Your Estimated Quarterly Spend
                                        <span class="svg-icon svg-icon-white" data-bs-toggle="tooltip" data-bs-placement="top" title="Price based on qualification(s) cost">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="white"/>
                                                <path d="M11.276 13.654C11.276 13.2713 11.3367 12.9447 11.458 12.674C11.5887 12.394 11.738 12.1653 11.906 11.988C12.0833 11.8107 12.3167 11.61 12.606 11.386C12.942 11.1247 13.1893 10.896 13.348 10.7C13.5067 10.4947 13.586 10.2427 13.586 9.944C13.586 9.636 13.4833 9.356 13.278 9.104C13.082 8.84267 12.69 8.712 12.102 8.712C11.486 8.712 11.066 8.866 10.842 9.174C10.6273 9.482 10.52 9.82267 10.52 10.196L10.534 10.574H8.826C8.78867 10.3967 8.77 10.2333 8.77 10.084C8.77 9.552 8.90067 9.07133 9.162 8.642C9.42333 8.20333 9.81067 7.858 10.324 7.606C10.8467 7.354 11.4813 7.228 12.228 7.228C13.1987 7.228 13.9687 7.44733 14.538 7.886C15.1073 8.31533 15.392 8.92667 15.392 9.72C15.392 10.168 15.322 10.5507 15.182 10.868C15.042 11.1853 14.874 11.442 14.678 11.638C14.482 11.834 14.2253 12.0533 13.908 12.296C13.544 12.576 13.2733 12.8233 13.096 13.038C12.928 13.2527 12.844 13.528 12.844 13.864V14.326H11.276V13.654ZM11.192 15.222H12.928V17H11.192V15.222Z" fill="black"/>
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="fw-bolder fs-2x pt-1">£{{ $thisQuarterTrainingSpend }}</span>
                                </div>
                            </div>
                            <div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
                                <div class="d-flex align-items-center mb-6">
                                    <div class="symbol symbol-45px w-40px me-5">
                                        <span class="symbol-label bg-lighten">
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap w-100">
                                        <div class="mb-1 pe-3 flex-grow-1">
                                            <a href="/reports/1" class="fs-5 text-gray-800 text-hover-primary fw-bolder">This Month</a>
                                            <div class="text-gray-400 fw-bold fs-7">{{$thisMonth->format('F, Y')}}</div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $monthlyTrainingSpend }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center mb-6">
                                    <div class="symbol symbol-45px w-40px me-5">
                                        <span class="symbol-label bg-lighten">
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap w-100">
                                        <div class="mb-1 pe-3 flex-grow-1">
                                            <a href="/reports/2" class="fs-5 text-gray-800 text-hover-primary fw-bolder">Next Month</a>
                                            <div class="text-gray-400 fw-bold fs-7">{{$nextMonth->format('F, Y')}}</div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $nextMonthTrainingSpend }}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-45px w-40px me-5">
                                        <span class="symbol-label bg-lighten">
                                            <span class="svg-icon svg-icon-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                </svg>
                                            </span>
                                        </span>
                                    </div>
                                    <div class="d-flex align-items-center flex-wrap w-100">
                                        <div class="mb-1 pe-3 flex-grow-1">
                                            <a href="/reports/3" class="fs-5 text-gray-800 text-hover-primary fw-bolder">{{ $thisQuarter->format('F') }}</a>
                                            <div class="text-gray-400 fw-bold fs-7">{{$thisQuarter->format('F, Y')}}</div>
                                        </div>
                                        <div class="d-flex align-items-center">
                                            <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $thirdMonthTrainingSpend }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="mx-9 mb-9 position-relative z-index-1">
                                <a href="/reports" class="btn btn-primary btn-block dashed">
                                    View All Reports
                                    <span class="svg-icon svg-icon-3 me-0">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card card-xl-stretch">
                        <div class="card-header align-items-center border-0 mt-4">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="fw-bolder mb-2 text-dark">
                                <a href="/reports/1" class="text-dark text-hover-primary">Upcoming Renewals</a>
                                </span>
                                <span class="text-muted fw-bold fs-7">{{ $upcomingRenewalsCount }} qualifications due to expire between {{ $thisMonth->format('M, y') }} - {{ $thisQuarter->format('M, y') }}</span>
                            </h3>
                        </div>
                        <div class="card-body pt-5">
                            <div class="timeline-label">
                                @forelse($upcomingRenewals as $item)
                                <div class="timeline-item">
                                    <div class="timeline-label fw-bolder text-gray-800 fs-6">{{ $item->expiry_date->format('m/y')}}</div>
                                    <div class="timeline-badge">
                                        @if($item->expiry_date->format('m') === Carbon\Carbon::today()->format('m'))
                                        <i class="fa fa-genderless text-danger fs-1"></i>
                                        @elseif($item->expiry_date->format('m') === Carbon\Carbon::today()->addMonth(1)->format('m'))
                                        <i class="fa fa-genderless text-warning fs-1"></i>
                                        @else
                                        <i class="fa fa-genderless text-success fs-1"></i>
                                        @endif
                                    </div>
                                    <div class="fw-mormal timeline-content text-muted ps-3">
                                        <a href="/qualifications/{{ $item->id }}">
                                        <strong class="text-gray-800">{{ optional($item->employee)->firstname }} {{ optional($item->employee)->lastname }}</strong>
                                        <br>{{ $item->qualificationtype->name }}
                                        </a>
                                    </div>
                                </div>
                                @empty
                                <p class="bg-body text-muted position-relative z-index-1">No qualifications...</p>
                                @endforelse
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <div class="card-header align-items-center border-0 mt-4">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="fw-bolder mb-2 text-dark">
                                <a href="/reports/1" class="text-dark text-hover-primary">To Do</a>
                                </span>
                                <span class="text-muted fw-bold fs-7">Lets get you started...</span>
                            </h3>
                        </div>
                        <div class="card-body pt-2">
                            @if($employees == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Employee</a>
                                    <span class="text-muted fw-bold d-block">Add your first employee</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Employee</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first employee</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                            @if($providers == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/providers" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Provider</a>
                                    <span class="text-muted fw-bold d-block">Add your first provider</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Provider</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first provider</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                            @if($departments == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/departments" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Department</a>
                                    <span class="text-muted fw-bold d-block">Add your first department</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Department</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first department</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                            @if($awardingBodies == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/awarding-bodies" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Awarding Body</a>
                                    <span class="text-muted fw-bold d-block">Add your first awarding body</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Awarding Body</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first awarding body</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                            @if($qualificationtypes == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/qualificationtypes" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Qualification Type</a>
                                    <span class="text-muted fw-bold d-block">Add your first qualification type</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Qualification Type</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first qualification type</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                            @if($qualifications == 0)
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/qualifications" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Qualification</a>
                                    <span class="text-muted fw-bold d-block">Add your first qualification</span>
                                </div>
                                <span class="badge badge-light-danger fs-8 fw-bolder">Incomplete</span>
                            </div>
                            @else
                            <div class="d-flex align-items-center mb-8">
                                <span class="bullet bullet-vertical h-40px bg-success"></span>
                                <div class="form-check form-check-custom form-check-solid mx-5">
                                    <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                </div>
                                <div class="flex-grow-1">
                                    <a href="/qualifications" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Qualification</strike></a>
                                    <span class="text-muted fw-bold d-block">Add your first qualification</span>
                                </div>
                                <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                            </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="row gy-5 g-xl-8">
                <div class="col-xl-6">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bolder fs-3 mb-1">Recently Updated Employees</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $employees }} <a href="/employees">employees</a></span>
                            </h3>
                            <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Employee">
                                <a href="/employees/create" class="btn btn-sm btn-light btn-active-primary">
                                    <span class="svg-icon svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                            <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                        </svg>
                                    </span>
                                    Add Employee
                                </a>
                            </div>
                        </div>
                        <div class="card-body py-3">
                            <div class="table-responsive">
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr class="fw-bolder text-muted">
                                            <th class="min-w-100px">Name</th>
                                            <th class="min-w-100px">Last Updated</th>
                                            <th class="min-w-100px text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($latestEmployees as $item)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="symbol symbol-45px me-5">
                                                        <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $item->firstname[0] }}{{ $item->lastname[0] }}</span>
                                                    </div>
                                                    <div class="d-flex justify-content-start flex-column">
                                                        <a href="/employees/{{ $item->id }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $item->firstname }} {{ $item->lastname }}</a>
                                                        <span class="text-muted fw-bold text-muted d-block fs-7">{{ $item->email }}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <a href="#" class="text-muted fw-bold text-hover-primary d-block fs-6">
                                                {{ $item->updated_at->diffForHumans() }}
                                                </a>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-end flex-shrink-0">
                                                    <a href="/employees/{{ $item->id }}" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <span class="svg-icon svg-icon-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
                                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bolder fs-3 mb-1">Recently Updated Qualifications</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $qualifications }} <a href="/qualifications">qualifications</a></span>
                            </h3>
                            @if($qualifications > 0)
                            <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a qualification">
                                <a href="/qualifications/create" class="btn btn-sm btn-light btn-active-primary">
                                    <span class="svg-icon svg-icon-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                            <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                        </svg>
                                    </span>
                                    Add Qualification
                                </a>
                            </div>
                            @endif
                        </div>
                        <div class="card-body py-3">
                            <div class="table-responsive">
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <thead>
                                        <tr class="fw-bolder text-muted">
                                            <th class="min-w-100px">Name</th>
                                            <th class="min-w-100px">Last Updated</th>
                                            <th class="min-w-100px text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach($latestQualifications as $item)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex justify-content-start flex-column">
                                                        <a href="/qualifications/{{ $item->id }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $item->qualificationtype->name }}</a>
                                                        <span class="text-muted fw-bold text-muted d-block fs-7">
                                                        <a href="/employees/{{ optional($item->employee)->id }}">
                                                        {{ optional($item->employee)->firstname }} {{ optional($item->employee)->lastname }}
                                                        </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span href="#" class="text-muted fw-bold text-hover-primary d-block fs-6">
                                                {{ $item->updated_at->diffForHumans() }}
                                                </span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-end flex-shrink-0">
                                                    <a href="/qualifications/{{ $item->id }}" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <span class="svg-icon svg-icon-3">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
                                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </div>
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
