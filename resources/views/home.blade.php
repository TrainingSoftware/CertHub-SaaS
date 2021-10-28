@extends('layouts.app')
@section('title', 'Home')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<!--begin::Toolbar-->
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<!--begin::Container-->
		<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
			<!--begin::Page title-->
			<div class="page-title d-flex flex-column me-5 py-2">
				<!--begin::Title-->
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Dashboard</h1>
				<!--end::Title-->
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
			<!--begin::Row-->
			<div class="row gy-5 g-xl-8">
				<!--begin::Col-->
				<div class="col-xl-4">

                        <div class="card card-xl-stretch mb-xl-8">
                            <!--begin::Body-->
                            <div class="card-body p-0">
                                <!--begin::Header-->
                                <div class="px-9 pt-7 card-rounded h-275px w-100 bg-primary">
                                    <!--begin::Heading-->
                                    <div class="d-flex flex-stack">
                                        <h3 class="m-0 text-white fw-bolder fs-3">Quarterly Training Summary</h3>
                                    </div>
                                    <!--end::Heading-->
                                    <!--begin::Balance-->
                                    <div class="d-flex text-center flex-column text-white pt-8">
                                        <span class="fw-bold fs-7">Your Estimated Quarterly Spend</span>
                                        <span class="fw-bolder fs-2x pt-1">£{{ $monthlyTrainingSpend }}</span>
                                    </div>
                                    <!--end::Balance-->
                                </div>
                                <!--end::Header-->
                                <!--begin::Items-->
                                <div class="bg-body shadow-sm card-rounded mx-9 mb-9 px-6 py-9 position-relative z-index-1" style="margin-top: -100px">
                                    <!--begin::Item-->
                                    <div class="d-flex align-items-center mb-6">
                                        <!--begin::Symbol-->
                                        <div class="symbol symbol-45px w-40px me-5">
                                            <span class="symbol-label bg-lighten">
                                                <!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                        </div>
                                        <!--end::Symbol-->
                                        <!--begin::Description-->
                                        <div class="d-flex align-items-center flex-wrap w-100">
                                            <!--begin::Title-->
                                            <div class="mb-1 pe-3 flex-grow-1">
                                                <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">This Month</a>
                                                <div class="text-gray-400 fw-bold fs-7">{{$thisMonth->format('F, Y')}}</div>
                                            </div>
                                            <!--end::Title-->
                                            <!--begin::Label-->
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $monthlyTrainingSpend }}</div>

                                            </div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Item-->
                                    <!--begin::Item-->
                                    <div class="d-flex align-items-center mb-6">
                                        <!--begin::Symbol-->
                                        <div class="symbol symbol-45px w-40px me-5">
                                            <span class="symbol-label bg-lighten">
                                                <!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                        </div>
                                        <!--end::Symbol-->
                                        <!--begin::Description-->
                                        <div class="d-flex align-items-center flex-wrap w-100">
                                            <!--begin::Title-->
                                            <div class="mb-1 pe-3 flex-grow-1">
                                                <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">Next Month</a>
                                                <div class="text-gray-400 fw-bold fs-7">{{$nextMonth->format('F, Y')}}</div>
                                            </div>
                                            <!--end::Title-->
                                            <!--begin::Label-->
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $monthlyTrainingSpend }}</div>

                                            </div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Item-->
                                    <!--begin::Item-->
                                    <div class="d-flex align-items-center">
                                        <!--begin::Symbol-->
                                        <div class="symbol symbol-45px w-40px me-5">
                                            <span class="symbol-label bg-lighten">
                                                <!--begin::Svg Icon | path: icons/duotune/maps/map004.svg-->
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black"></path>
                                                        <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black"></path>
                                                    </svg>
                                                </span>
                                                <!--end::Svg Icon-->
                                            </span>
                                        </div>
                                        <!--end::Symbol-->
                                        <!--begin::Description-->
                                        <div class="d-flex align-items-center flex-wrap w-100">
                                            <!--begin::Title-->
                                            <div class="mb-1 pe-3 flex-grow-1">
                                                <a href="#" class="fs-5 text-gray-800 text-hover-primary fw-bolder">{{ $thisQuarter->format('F') }}</a>
                                                <div class="text-gray-400 fw-bold fs-7">{{$thisQuarter->format('F, Y')}}</div>
                                            </div>
                                            <!--end::Title-->
                                            <!--begin::Label-->
                                            <div class="d-flex align-items-center">
                                                <div class="fw-bolder fs-5 text-gray-800 pe-1">£{{ $monthlyTrainingSpend }}</div>

                                            </div>
                                            <!--end::Label-->
                                        </div>
                                        <!--end::Description-->
                                    </div>
                                    <!--end::Item-->
                                </div>
                                <!--end::Items-->
                                <div class="mx-9 mb-9 position-relative z-index-1">
                                    <a href="/reports" class="btn btn-primary btn-block dashed">View All Reports
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
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-xl-4">
					<!--begin::List Widget 5-->
					<div class="card card-xl-stretch">
						<!--begin::Header-->
						<div class="card-header align-items-center border-0 mt-4">
							<h3 class="card-title align-items-start flex-column">
								<span class="fw-bolder mb-2 text-dark">
                                    <a href="/reports/1" class="text-dark text-hover-primary">Upcoming Renewals</a>
                                </span>
								<span class="text-muted fw-bold fs-7">{{ $upcomingRenewalsCount }} qualifications are due to expire in {{ $thisMonth->format('F, Y') }}</span>
							</h3>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body pt-5">
							<!--begin::Timeline-->
							<div class="timeline-label">
                                @forelse($upcomingRenewals as $item)
                                    <div class="timeline-item">
                                            <div class="timeline-label fw-bolder text-gray-800 fs-6">{{ $item->expiry_date->format('d/m')}}</div>
                                            <div class="timeline-badge">
                                                @if($item->expiry_date < Carbon\Carbon::today())
                                                    <i class="fa fa-genderless text-danger fs-1"></i>
                                                @else
                                                    <i class="fa fa-genderless text-warning fs-1"></i>
                                                @endif
                                            </div>
                                            <div class="fw-mormal timeline-content text-muted ps-3">
                                                <a href="/qualifications/{{ $item->id }}">
                                                    <strong class="text-gray-800">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</strong>
                                                    <br>{{ $item->qualificationtype->name }}
                                                </a>
                                            </div>
                                        </div>
                                @empty
                                   <p class="bg-body text-muted position-relative z-index-1">No qualifications...</p>
                                @endforelse
							</div>
							<!--end::Timeline-->
						</div>
						<!--end: Card Body-->
					</div>
					<!--end: List Widget 5-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-xl-4">
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header align-items-center border-0 mt-4">
                            <h3 class="card-title align-items-start flex-column">
								<span class="fw-bolder mb-2 text-dark">
                                    <a href="/reports/1" class="text-dark text-hover-primary">To Do</a>
                                </span>
                                <span class="text-muted fw-bold fs-7">Lets get you started...</span>
                            </h3>
                        </div>
                        <!--begin::Body-->
                        <div class="card-body pt-2">
                            @if($employees == 0)
                                <div class="d-flex align-items-center mb-8">
                                    <!--begin::Bullet-->
                                    <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                    <!--end::Bullet-->
                                    <!--begin::Checkbox-->
                                    <div class="form-check form-check-custom form-check-solid mx-5">
                                        <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                    </div>
                                    <!--end::Checkbox-->
                                    <!--begin::Description-->
                                    <div class="flex-grow-1">
                                        <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Employee</a>
                                        <span class="text-muted fw-bold d-block">Add your first employee</span>
                                    </div>
                                    <!--end::Description-->
                                    <span class="badge badge-light-danger fs-8 fw-bolder">New</span>
                                </div>
                            @else
                                <div class="d-flex align-items-center mb-8">
                                    <!--begin::Bullet-->
                                    <span class="bullet bullet-vertical h-40px bg-success"></span>
                                    <!--end::Bullet-->
                                    <!--begin::Checkbox-->
                                    <div class="form-check form-check-custom form-check-solid mx-5">
                                        <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                    </div>
                                    <!--end::Checkbox-->
                                    <!--begin::Description-->
                                    <div class="flex-grow-1">
                                        <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Employee</strike></a>
                                        <span class="text-muted fw-bold d-block">Add your first employee</span>
                                    </div>
                                    <!--end::Description-->
                                    <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                                </div>
                            @endif
                            @if($qualifications == 0)
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="/qualifications" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Qualification</a>
                                            <span class="text-muted fw-bold d-block">Add your first qualification</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-light-danger fs-8 fw-bolder">New</span>
                                    </div>
                                @else
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-success"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="/qualifications" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Qualification</strike></a>
                                            <span class="text-muted fw-bold d-block">Add your first qualification</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                                    </div>
                                @endif
                                @if($providers == 0)
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Provider</a>
                                            <span class="text-muted fw-bold d-block">Add your first provider</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-light-danger fs-8 fw-bolder">New</span>
                                    </div>
                                @else
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-success"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Provider</strike></a>
                                            <span class="text-muted fw-bold d-block">Add your first provider</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                                    </div>
                                @endif
                                @if($departments == 0)
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Department</a>
                                            <span class="text-muted fw-bold d-block">Add your first department</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-light-danger fs-8 fw-bolder">New</span>
                                    </div>
                                @else
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-success"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Department</strike></a>
                                            <span class="text-muted fw-bold d-block">Add your first department</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                                    </div>
                                @endif
                                @if($qualificationtypes == 0)
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-danger"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-danger" type="checkbox" value="" disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-gray-800 text-hover-primary fw-bolder fs-6">Add Qualification Type</a>
                                            <span class="text-muted fw-bold d-block">Add your first qualification type</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-light-danger fs-8 fw-bolder">New</span>
                                    </div>
                                @else
                                    <div class="d-flex align-items-center mb-8">
                                        <!--begin::Bullet-->
                                        <span class="bullet bullet-vertical h-40px bg-success"></span>
                                        <!--end::Bullet-->
                                        <!--begin::Checkbox-->
                                        <div class="form-check form-check-custom form-check-solid mx-5">
                                            <input class="form-check-input bg-success" type="checkbox" value="" checked disabled>
                                        </div>
                                        <!--end::Checkbox-->
                                        <!--begin::Description-->
                                        <div class="flex-grow-1">
                                            <a href="#" class="text-success text-hover-primary fw-bolder fs-6"><strike>Add Qualification Type</strike></a>
                                            <span class="text-muted fw-bold d-block">Add your first qualification type</span>
                                        </div>
                                        <!--end::Description-->
                                        <span class="badge badge-success fs-8 fw-bolder">Completed</span>
                                    </div>
                                @endif
                        </div>
                        <!--end::Body-->
                    </div>
				</div>
				<!--end::Col-->
			</div>
			<!--end::Row-->
			<!--begin::Row-->
			<div class="row gy-5 g-xl-8">
				<!--begin::Col-->
				<div class="col-xl-6">
					<!--begin::Tables Widget 9-->
					<div class="card card-xl-stretch mb-5 mb-xl-8">
						<!--begin::Header-->
						<div class="card-header border-0 pt-5">
							<h3 class="card-title align-items-start flex-column">
								<span class="card-label fw-bolder fs-3 mb-1">Recently Updated Employees</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $monthlyTrainingSpend }} <a href="/employees">employees</a></span>
							</h3>
							<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Employee">
								<a href="/employees/create" class="btn btn-sm btn-light btn-active-primary">
									<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
									<span class="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
											<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
										</svg>
									</span>
									<!--end::Svg Icon-->Add Employee
								</a>
							</div>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body py-3">
							<!--begin::Table container-->
							<div class="table-responsive">
								<!--begin::Table-->
								<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
									<!--begin::Table head-->
									<thead>
										<tr class="fw-bolder text-muted">
											<th class="min-w-100px">Name</th>
                                            <th class="min-w-100px">Last Updated</th>
											<th class="min-w-100px text-end">Actions</th>
										</tr>
									</thead>
									<!--end::Table head-->
									<!--begin::Table body-->
									<tbody>
                                        @foreach($latestEmployees as $item)
										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="symbol symbol-45px me-5">
														<img src="/assets/media/avatars/blank.png" alt="" />
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
													<a href="/employees/{{ $item->id }}/edit" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
														<!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
														<span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
																				<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
																			</svg>
														</span>
														<!--end::Svg Icon-->
													</a>
												</div>
											</td>
										</tr>
										@endforeach
									</tbody>
									<!--end::Table body-->
								</table>
								<!--end::Table-->
							</div>
							<!--end::Table container-->
						</div>
						<!--begin::Body-->
					</div>
					<!--end::Tables Widget 9-->
				</div>
				<!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-6">
                    <!--begin::Tables Widget 9-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bolder fs-3 mb-1">Recently Updated Qualifications</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $qualifications }} <a href="/qualifications">qualifications</a></span>
                            </h3>
                            @if($qualifications < 0)
                            <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a qualification">
                                <a href="/employees/create" class="btn btn-sm btn-light btn-active-primary">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
                                    <span class="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
											<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
										</svg>
									</span>
                                    <!--end::Svg Icon-->Add Qualification
                                </a>
                            </div>
                            @endif
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <!--begin::Table container-->
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <!--begin::Table head-->
                                    <thead>
                                    <tr class="fw-bolder text-muted">
                                        <th class="min-w-100px">Name</th>
                                        <th class="min-w-100px">Last Updated</th>
                                        <th class="min-w-100px text-end">Actions</th>
                                    </tr>
                                    </thead>
                                    <!--end::Table head-->
                                    <!--begin::Table body-->
                                    <tbody>
                                    @foreach($latestQualifications as $item)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex justify-content-start flex-column">
                                                        <a href="/qualifications/{{ $item->id }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $item->qualificationtype->name }}</a>
                                                        <span class="text-muted fw-bold text-muted d-block fs-7">
                                                            <a href="/employees/{{ $item->employee->id }}">
                                                            {{ $item->employee->firstname }} {{ $item->employee->lastname }}
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
                                                    <a href="/qualifications/{{ $item->id }}/edit" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                                                        <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black"></rect>
																				<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black"></path>
																			</svg>
														</span>
                                                        <!--end::Svg Icon-->
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    <!--end::Table body-->
                                </table>
                                <!--end::Table-->
                            </div>
                            <!--end::Table container-->
                        </div>
                        <!--begin::Body-->
                    </div>
                    <!--end::Tables Widget 9-->
                </div>
                <!--end::Col-->
			</div>
			<!--end::Row-->

			<!--end::Modals-->
		</div>
		<!--end::Container-->
	</div>
	<!--end::Post-->
</div>
<!--end::Content-->

<script>
    var initMixedWidget7 = function() {
        var charts = document.querySelectorAll('.mixed-widget-7-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);

            var options = {
                series: [{
                    name: 'Estimated Training Spend',
                    data: [{{ $monthlyTrainingSpend }}]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['{{ $thisMonth->format('F Y') }}'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "£" + val
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget10 = function() {
        var charts = document.querySelectorAll('.mixed-widget-10-chart');

        var color;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseLightColor;
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var baseColor;
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            color = element.getAttribute("data-kt-color");
            height = parseInt(KTUtil.css(element, 'height'));
            baseColor = KTUtil.getCssVariableValue('--bs-' + color);

            options = {
                series: [{
                    name: 'Net Profit',
                    data: [50, 60, 70, 80, 60, 50, 70, 60, 60, 100, 70, 60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['50%'],
                        borderRadius: 4
                    },
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [

                    ],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: 'solid'
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "£" + val
                        }
                    }
                },
                colors: [baseColor, secondaryColor],
                grid: {
                    padding: {
                        top: 10
                    },
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    }
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();
        });
    }
</script>
@endsection
