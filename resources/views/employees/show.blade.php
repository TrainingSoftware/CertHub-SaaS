@extends('layouts.app')
@section('title', 'View Employee')
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
					<li class="breadcrumb-item text-muted">
						<a href="/employees" class="text-muted text-hover-primary">Employees</a>
					</li>
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
						<h3 class="fw-bolder m-0">
							{{ $employee->firstname }}'s Details
						</h3>
					</div>
					<a href="/employees/{{ $employee->id }}/edit" class="btn btn-sm btn-primary align-self-center">Edit Employee</a>
				</div>
				<div class="card-body p-9">
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Full Name</label>
						<div class="col-lg-8">
							<span class="fw-bolder fs-6 text-gray-800">{{ $employee->firstname }} {{ $employee->lastname }}</span>
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Gender</label>
						<div class="col-lg-8">
							@if($employee->gender)
							<span class="fw-bolder fs-6 text-gray-800">{{ $employee->gender }}</span>
							@else
							<span class="fw-bolder fs-6 text-gray-500">No gender information available</span>
							@endif
						</div>
					</div>
					@if(Auth::user()->company)
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Company</label>
						<div class="col-lg-8 fv-row">
							<span class="fw-bolder text-gray-800 fs-6">{{ Auth::user()->company->name }}</span>
						</div>
					</div>
					@endif
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Phone</label>
						<div class="col-lg-8">
							@if($employee->phone)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->phone }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No phone number available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Email</label>
						<div class="col-lg-8">
							@if($employee->email)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->email }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No email address available</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Marital Status</label>
						<div class="col-lg-6">
							@if($employee->marital_status)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->marital_status }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No Marital Status</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Address</label>
						<div class="col-lg-8">
							@if($employee->line_1 && $employee->town && $employee->county && $employee->postcode && $employee->postcode)
							<span class="fw-bolder fs-6 text-gray-800">{{ $employee->line_1 }}, @if($employee->line_2){{ $employee->line_2 }}, @endif{{ $employee->town }}, {{ $employee->county }}, {{ $employee->postcode }} {{ $employee->country }}</span>
							@else
							<span class="fw-bolder fs-6 text-gray-500">No address information available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Position</label>
						<div class="col-lg-8">
							@if($employee->position)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->position }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No job position available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Start Date</label>
						<div class="col-lg-6">
							@if($employee->start_date)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->start_date->format('d/m/Y') }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No employment start date available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">End Date</label>
						<div class="col-lg-6">
							@if($employee->end_date)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->end_date->format('d/m/Y') }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No employment end date available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Type</label>
						<div class="col-lg-6">
							@if($employee->employment)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->employment }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No employment type selected</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Salary</label>
						<div class="col-lg-6">
							@if($employee->salary)
							<span class="fw-bold text-gray-800 fs-6">£{{ $employee->salary }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No salary information available</span>
							@endif
						</div>
					</div>
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Department</label>
						<div class="col-lg-6">
							@if($employee->department)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->department->name }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No department assigned</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Nationality</label>
						<div class="col-lg-6">
							@if($employee->nationality)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->nationality }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No Nationality information</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Cityb number</label>
						<div class="col-lg-6">
							@if($employee->citb_number)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->citb_number }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No Citb number</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Driving License Number</label>
						<div class="col-lg-6">
							@if($employee->driving_license_number)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->driving_license_number }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No Driving License Number</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">NOCN Number</label>
						<div class="col-lg-6">
							@if($employee->nocn_number)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->nocn_number }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No NOCN Number</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">NPORS Number</label>
						<div class="col-lg-6">
							@if($employee->npors_number)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->npors_number }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No NPORS Number</span>
							@endif
						</div>
					</div>
                    <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">EUSR Number</label>
						<div class="col-lg-6">
							@if($employee->eusr_number)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->eusr_number }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No EUSR Number</span>
							@endif
						</div>
					</div>
                     <div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">ULN</label>
						<div class="col-lg-6">
							@if($employee->uln)
							<span class="fw-bold text-gray-800 fs-6">{{ $employee->uln }}</span>
							@else
							<span class="fw-bold text-gray-500 fs-6">No ULN</span>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
