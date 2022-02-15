@extends('layouts.app')
@section('title', 'Add an Employee')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Add an employee</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Dashboard</a>
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
					<li class="breadcrumb-item text-dark">Create</li>
				</ul>
			</div>
		</div>
	</div>
	@include('partials.layout.alert')
	<div class="post d-flex flex-column-fluid">
		<div id="kt_content_container" class="container-xxl">
			<div class="card mb-5 mb-xl-10">
				<div class="card-header border-0 ">
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">Employee Details</h3>
					</div>
				</div>
				<div id="kt_account_profile_details">
					<form class="form" method="POST" action="/employees">
						@csrf
						<div class="card-body border-top p-9">
							<div class="row mb-6">
								<label class="col-lg-4 col-form-label required fw-bold fs-6">
								Full Name
								</label>
								<div class="col-lg-8">
									<div class="row">
										<div class="col-lg-6 fv-row">
											<input type="text" name="firstname"
												class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
												placeholder="John"/>
										</div>
										<div class="col-lg-6 fv-row">
											<input type="text" name="lastname"
												class="form-control form-control-lg form-control-solid"
												placeholder="Smith"/>
										</div>
									</div>
								</div>
							</div>
							<div class="row mb-6">
								<label
									class="col-lg-4 col-form-label required fw-bold fs-6">Email</label>
								<div class="col-lg-8 fv-row">
									<input type="text" name="email"
										class="form-control form-control-lg form-control-solid"
										placeholder="john.smith@certhub.co.uk"/>
								</div>
							</div>
							<div class="row mb-6">
								<label class="col-lg-4 col-form-label fw-bold fs-6">
								<span class="required">Phone</span>
								</label>
								<div class="col-lg-8 fv-row">
									<input type="tel" name="phone"
										class="form-control form-control-lg form-control-solid"
										placeholder="01234 567 890"/>
								</div>
							</div>
							<div class="row mb-6">
								<label class="col-lg-4 col-form-label fw-bold fs-6">
								<span class="required">Send welcome email?</span>
								</label>
								<div class="col-lg-8 fv-row">
									<input class="form-check-input  mt-2" type="checkbox"id="sendWelcomeEmail" name="welcome_mail">
								</div>
							</div>
						</div>
						<div class="card-footer d-flex justify-content-end py-6 px-9">
							<a href="/employees"
								class="btn btn-light btn-active-light-primary me-2">Cancel</a>
							<button type="submit" class="btn btn-primary">Create</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection