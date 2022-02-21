@extends('layouts.app')
@section('title', $employee->firstname . 's Contacts')
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
						<h3 class="fw-bolder m-0">{{ $employee->firstname }}'s Contacts</h3>
					</div>
					<div class="card-toolbar">
						<div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
							<a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addEmployeeContact">
								<span class="svg-icon svg-icon-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
										<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
									</svg>
								</span>
								Add Contact
							</a>
							<div class="modal fade" id="addEmployeeContact" tabindex="-1" aria-hidden="true">
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
												<h1 class="d-flex justify-content-center align-items-center mb-3">Add an emergency contact for {{ $employee->firstname }}</h1>
												<div class="text-muted fw-bold fs-5">These are import details, it's best practice to review them periodically</div>
											</div>
											<div class="mh-475px">
												<form class="form" method="POST" action="{{route('employee.contacts.store',$employee)}}">
													@csrf
													<div class="card-body p-9 text-left">
														<div class="row mb-6">
															<label class="col-lg-3 col-form-label required fw-bold fs-6">
															Full Name
															</label>
															<div class="col-lg-9">
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
																class="col-lg-3 col-form-label required fw-bold fs-6">Email</label>
															<div class="col-lg-9 fv-row">
																<input type="text" name="email"
																	class="form-control form-control-lg form-control-solid"
																	placeholder="john.smith@certhub.co.uk"/>
															</div>
														</div>
														<div class="row mb-6">
															<label class="col-lg-3 col-form-label fw-bold fs-6">
															<span class="required">Phone</span>
															</label>
															<div class="col-lg-9 fv-row">
																<input type="tel" name="phone"
																	class="form-control form-control-lg form-control-solid"
																	placeholder="01234 567 890"
																	data-inputmask="'mask': '99999999999'"/>
															</div>
														</div>
													</div>
													<div class="card-footer border-0 d-flex justify-content-end py-6 px-9">
														<a href="/employees/{{ $employee->id }}/contacts"
															class="btn btn-light btn-active-light-primary me-2">Cancel</a>
														<button type="submit" class="btn btn-primary">Create</button>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-body p-9">
					<table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
						<thead>
							<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
								<th class="min-w-125px">Name</th>
								<th class="">Phone</th>
								<th class="">Email</th>
								<th class="">Relationship</th>
								<th class="text-end"></th>
							</tr>
						</thead>
						<tbody>
							@foreach($employee->contacts as $contact)
                            <tr>
                                <th>{{ $contact->firstname }} {{ $contact->lastname }}</th>
								<th>{{ $contact->phone }}</th>
								<th>{{ $contact->email }}</th>
								<th>{{ $contact->relation }}</th>
								<th class="text-end"><a href="/employees/{{ $employee->id }}/contacts/{{ $contact->id }}" class="btn btn-light btn-sm">View</a></th>
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