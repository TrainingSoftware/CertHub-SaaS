@extends('layouts.app')
@section('title', $employee->firstname . 's Qualifications')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Home</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">Employees</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">{{ $employee->firstname }} {{ $employee->lastname }}</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			@include('partials.employee.header')
			<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
				<div class="card-header cursor-pointer">
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">{{ $employee->firstname }}'s Qualifications</h3>
					</div>
				</div>
				<div class="card-body p-9">
					<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
						<thead>
							<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
								<th class="min-w-125px">Qualification Type</th>
								<th class="min-w-125px">Provider</th>
								<th class="min-w-125px">Expiry Date</th>
								<th class="min-w-125px">Status</th>
								<th class="text-end min-w-100px">Actions</th>
							</tr>
						</thead>
						<tbody class="text-gray-600 fw-bold">
							@foreach ($employee->qualifications as $item)
							<tr>
								<td class="d-flex align-items-center border-bottom-0">
									<div class="d-flex flex-column">
										<a href="/qualifications/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->qualificationtype->name }}</a>
									</div>
								</td>
								<td>{{ $item->provider->name }}</td>
								<td>{{ $item->expiry_date->format('d/m/Y') }}</td>
								<td>
									@if($item->expiry_date < Carbon\Carbon::today())
									<span class="badge badge-danger">Expired</span>
									@elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
									<span class="badge badge-warning">Expiring</span>
									@else
									<span class="badge badge-success">Valid</span>
									@endif
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
											<a href="/qualifications/{{ $item->id }}/edit" class="menu-link px-3">Edit</a>
										</div>
										<div class="menu-item px-3">
											<a href="#" class="menu-link px-3" data-kt-users-table-filter="delete_row">Delete</a>
										</div>
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
@endsection