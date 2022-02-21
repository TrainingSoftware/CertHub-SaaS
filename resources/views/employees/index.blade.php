@extends('layouts.app')
@section('title', 'All Employees')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Employees</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Dashboard</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">Employees</li>
				</ul>
			</div>
			<div class="d-flex align-items-center flex-shrink-0">
				<div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
					@if(Auth::user()->companies()->first()->employees->count() === Auth::user()->companies()->first()->subscriptions()->first()->quantity)
					<a href="/billing-portal" class="btn btn-sm btn-danger me-5">
						<span class="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
								<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
							</svg>
						</span>
						Upgrade plan
					</a>
					@else
					<a href="#" class="btn btn-sm btn-primary me-5" data-bs-toggle="modal" data-bs-target="#addEmployee">
						<span class="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
								<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
							</svg>
						</span>
						Add Employee
					</a>
					@endif
					<div class="me-0">
                            <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="bi bi-three-dots fs-3"></i>
                            </button>
                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                <div class="menu-item px-3">
                                    <a href="employees/archived" class="menu-link px-3">Archived Employees</a>
                                </div>
                            </div>
                        </div>
				</div>
			</div>
		</div>
	</div>
	@livewire('list-employees')
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
</div>
@endsection
