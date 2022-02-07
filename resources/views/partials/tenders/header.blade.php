<div class="card mb-6 mb-xl-9">
    <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-6">
            <div class="d-flex flex-center flex-shrink-0 bg-light rounded w-100px h-100px w-lg-150px h-lg-150px me-7 mb-4">
                <span class="svg-icon svg-icon-muted svg-icon-3hx">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.3" d="M22 12C22 13.8 21.5 15.5 20.7 17L14.9 7H20.7C21.5 8.5 22 10.2 22 12ZM3.3 7L6.2 12L12 2C8.3 2 5.1 4 3.3 7ZM3.3 17C5 20 8.3 22 12 22L14.9 17H3.3Z" fill="black"/>
                        <path d="M20.7 7H9.2L12.1 2C15.7 2 18.9 4 20.7 7ZM3.3 7C2.4 8.5 2 10.2 2 12C2 13.8 2.5 15.5 3.3 17H9.10001L3.3 7ZM17.8 12L12 22C15.7 22 18.9 20 20.7 17L17.8 12Z" fill="black"/>
                    </svg>
                </span>
            </div>
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center mb-1">
                            <a href="#" class="text-gray-800 text-hover-primary fs-2 fw-bolder me-3">{{ $tender->name }}</a>
                            <span class="badge badge-light-success me-auto">In Progress</span>
                        </div>
                        <div class="d-flex flex-wrap fw-bold mb-4 fs-5 text-gray-400">
                            <span class="">
                            @if($tender->line_1)
                                {{ $tender->line_1 }}, @if($tender->line_2){{ $tender->line_2 }}, @endif{{ $tender->town }}, {{ $tender->county }}, {{ $tender->postcode }}@if($tender->country), {{ $tender->country }}@endif
                            @else
                                <a href="#" data-bs-toggle="modal" data-bs-target="#kt_modal_postcode">Add location?</a>
                                @include('partials/global/postcode-search')
                            @endif
                            </span>
                        </div>
                    </div>
                    <div class="d-flex mb-4">
                        <a href="#" class="btn btn-sm btn-primary btn-active-color-primary me-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Employees</a>
                        <div class="me-0">
                            <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="bi bi-three-dots fs-3"></i>
                            </button>
                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                <div class="menu-item px-3">
                                    <a href="/tenders/{{ $tender->id }}/edit" class="menu-link px-3">Edit project</a>
                                </div>
                                <div class="menu-item px-3">
                                    <a href="#" class="menu-link px-3">Generate Tender</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-wrap justify-content-start">
                    <div class="d-flex flex-wrap">
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bolder">{{ $tender->start_date->format('d M Y') }}</div>
                            </div>
                            <div class="fw-bold fs-6 text-gray-400">Start Date</div>
                        </div>
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bolder">{{ $tender->end_date->format('d M Y') }}</div>
                            </div>
                            <div class="fw-bold fs-6 text-gray-400">End Date</div>
                        </div>
                        <div class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3">
                            <div class="d-flex align-items-center">
                                <div class="fs-4 fw-bolder">{{ $expiredQualificationsTotal }}</div>
                            </div>
                            <div class="fw-bold fs-6 text-gray-400">Renewals</div>
                        </div>
                    </div>
                    <div class="symbol-group symbol-hover mb-3">
                        @foreach($tender->employees->slice(0,5) as $employee)    
                        <div class="symbol symbol-35px symbol-circle" data-bs-toggle="tooltip" title="{{ $employee->firstname }}{{ $employee->lastname }}">
                            <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
                        </div>
                        @endforeach
                        @if($tender->employees->count() > 5)
                        <a href="/tenders/{{ $tender->id }}/employees" class="symbol symbol-35px symbol-circle">
                        <span class="symbol-label bg-secondary text-dark fs-8 fw-bolder" data-bs-toggle="tooltip" data-bs-trigger="hover" title="View all ({{ $tender->employees->count() }}) employees">
                        + {{ $tender->employees->count() - 5 }}
                        </span>
                        </a>
                        @endif
                    </div>
                </div>
            </div>
        </div>
        <div class="separator"></div>
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
            <li class="nav-item">
                <a class="nav-link text-active-primary py-5 me-6 @if(\Route::is('tenders.show')) active @endif" href="/tenders/{{ $tender->id }}">Overview</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-active-primary py-5 me-6 @if(\Route::is('tenders.employees')) active @endif" href="/tenders/{{ $tender->id }}/employees">Employees</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-active-primary py-5 me-6 @if(\Route::is('tenders.renewals')) active @endif" href="/tenders/{{ $tender->id }}/renewals">Renewals</a>
            </li>
        </ul>
    </div>
</div>