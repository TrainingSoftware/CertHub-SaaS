<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                @if(Auth::user()->companies()->first()->employees->count() != 0 )
                <div class="card-header border-0 pt-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg wire:loading.remove xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                </svg>
                                <i wire:loading class="fas fa-spinner fa-spin fa-1x"></i>
                            </span>
                            <form class="me-5">
                                <input type="text" wire:model="term"  class="form-control form-control-solid w-250px ps-14" placeholder="Search employees" autocomplete="off"/>
                            </form>
                        </div>
                    </div>
                    <div class="card-toolbar">
                        <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                            <a href="#" class="btn btn-sm btn-primary me-5" data-bs-toggle="modal" data-bs-target="#addEmployee">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                    </svg>
                                </span>
                                Add Employee
                            </a>
                            <div class="modal fade" id="addEmployee" tabindex="-1" aria-hidden="true">
                                <div class="modal-dialog mw-700px">
                                    <div class="modal-content">
                                        <div class="modal-header pb-0 border-0 d-flex justify-content-end">
                                            <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                                <span class="svg-icon svg-icon-1">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                                        <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                                    </svg>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                                            <div class="text-center mb-13">
                                                <h1 class="d-flex justify-content-center align-items-center mb-3">Add an Employee</h1>
                                                <div class="text-muted fw-bold fs-5">How do you want to add your employees to CertHub?
                                                </div>
                                            </div>
                                            <div class="mh-475px text-center">
                                                <div class="row">
                                                    <div class="col-6">
                                                        <a href="/employees/create" class="btn btn-primary w-100">Add manually</a>
                                                    </div>
                                                    <div class="col-6">
                                                        <a href="/import/employees" class="btn btn-primary w-100">Bulk Import</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="me-0">
                                <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                <i class="bi bi-three-dots fs-3"></i>
                                </button>
                                <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                    <div class="menu-item px-3">
                                        <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Quick links</div>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="/import-employees/export" class="menu-link px-3">
                                        Export
                                        </a>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="/import-employees" class="menu-link px-3">
                                        Import
                                        </a>
                                    </div>
                                    <div class="menu-item px-3">
                                        <a href="/employees/archived" class="menu-link px-3">
                                        Archived
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                @endif
                @if(Auth::user()->companies()->first()->employees->count() == 0 )
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">Add Your First Employee!</h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            It looks like you have not added any employees yet...
                        </p>
                        <a href="/employees/create" class="btn btn-primary">Add Employee</a>
                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
                @else   
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="w-10px pe-2">
                                    <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                        <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                    </div>
                                </th>
                                <th class="min-w-125px">Employee</th>
                                <th class="min-w-125px">Department</th>
                                <th class="min-w-125px">Qualifications</th>
                                <th class="min-w-125px">Employment Date</th>
                                <th class="text-end min-w-100px">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @if($employees->isEmpty())
                                @foreach ($employeesOnLoad as $item)
                                <tr>
                                    <td>
                                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="1" />
                                        </div>
                                    </td>
                                    <td class="d-flex align-items-center border-bottom-0">
                                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="/employees/{{ $item->id }}">
                                                <div class="symbol-label">
                                                    <div class="symbol symbol-35px symbol-circle">
                                                        <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $item->firstname[0] }}{{ $item->lastname[0] }}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <a href="/employees/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->firstname }} {{ $item->lastname }}</a>
                                            <span>{{ $item->email }}</span>
                                        </div>
                                    </td>
                                    <td>@if($item->department){{ $item->department->name }}@endif</td>
                                    <td>
                                        <a href="/employees/{{ $item->id }}/qualifications">
                                            {{ $item->qualifications->count() }}
                                    </td>
                                    <td>
                                        @if($item->start_date){{ $item->start_date->format('d/m/Y') }}@endif
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-link btn-sm p-0" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="10" y="10" width="4" height="4" rx="2" fill="black"/>
                                                    <rect x="17" y="10" width="4" height="4" rx="2" fill="black"/>
                                                    <rect x="3" y="10" width="4" height="4" rx="2" fill="black"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                            <div class="menu-item px-3">
                                                <a href="/employees/{{ $item->id }}/edit" class="menu-link px-3">Edit</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            @else
                                @foreach ($employees as $item)
                                <tr>
                                    <td>
                                        <div class="form-check form-check-sm form-check-custom form-check-solid">
                                            <input class="form-check-input" type="checkbox" value="1" />
                                        </div>
                                    </td>
                                    <td class="d-flex align-items-center border-bottom-0">
                                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="/employees/{{ $item->id }}">
                                                <div class="symbol-label">
                                                    <div class="symbol symbol-35px symbol-circle">
                                                        <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $item->firstname[0] }}{{ $item->lastname[0] }}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <a href="/employees/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->firstname }} {{ $item->lastname }}</a>
                                            <span>{{ $item->email }}</span>
                                        </div>
                                    </td>
                                    <td>@if($item->department){{ $item->department->name }}@endif</td>
                                    <td>
                                        <a href="/employees/{{ $item->id }}/qualifications">
                                            {{ $item->qualifications->count() }}
                                    </td>
                                    <td>
                                        @if($item->start_date){{ $item->start_date->format('d/m/Y') }}@endif
                                    </td>
                                    <td class="text-end">
                                        <a href="#" class="btn btn-link btn-sm p-0" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                            <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <rect x="10" y="10" width="4" height="4" rx="2" fill="black"/>
                                                    <rect x="17" y="10" width="4" height="4" rx="2" fill="black"/>
                                                    <rect x="3" y="10" width="4" height="4" rx="2" fill="black"/>
                                                </svg>
                                            </span>
                                        </a>
                                        <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                            <div class="menu-item px-3">
                                                <a href="/employees/{{ $item->id }}/edit" class="menu-link px-3">Edit</a>
                                            </div>
                                            <div class="menu-item px-3">
                                                <a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            @endif
                        </tbody>
                    </table>
                </div>
                @endif
            </div>
            <div class="row mt-5">
                <div class="col-12">
                {{ $employeesOnLoad->links('vendor.pagination.bootstrap-4') }}
                </div>
            </div>
        </div>
    </div>
</div>