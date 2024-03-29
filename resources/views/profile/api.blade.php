@extends('layouts.app')
@section('title', 'Profile API')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">API Keys</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Home</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">Crafted</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">Account</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">API Keys</li>
				</ul>
			</div>
			<div class="d-flex align-items-center py-2">
				<div class="me-4">
					<a href="#" class="btn btn-sm btn-flex btn-light btn-active-primary fw-bolder" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
						<span class="svg-icon svg-icon-5 svg-icon-gray-500 me-1">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z" fill="black" />
							</svg>
						</span>
						Filter
					</a>
					<div class="menu menu-sub menu-sub-dropdown w-250px w-md-300px" data-kt-menu="true" id="kt_menu_615c3bc07c8d9">
						<div class="px-7 py-5">
							<div class="fs-5 text-dark fw-bolder">Filter Options</div>
						</div>
						<div class="separator border-gray-200"></div>
						<div class="px-7 py-5">
							<div class="mb-10">
								<label class="form-label fw-bold">Status:</label>
								<div>
									<select class="form-select form-select-solid" data-kt-select2="true" data-placeholder="Select option" data-dropdown-parent="#kt_menu_615c3bc07c8d9" data-allow-clear="true">
										<option></option>
										<option value="1">Approved</option>
										<option value="2">Pending</option>
										<option value="2">In Process</option>
										<option value="2">Rejected</option>
									</select>
								</div>
							</div>
							<div class="mb-10">
								<label class="form-label fw-bold">Member Type:</label>
								<div class="d-flex">
									<label class="form-check form-check-sm form-check-custom form-check-solid me-5">
									<input class="form-check-input" type="checkbox" value="1" />
									<span class="form-check-label">Author</span>
									</label>
									<label class="form-check form-check-sm form-check-custom form-check-solid">
									<input class="form-check-input" type="checkbox" value="2" checked="checked" />
									<span class="form-check-label">Customer</span>
									</label>
								</div>
							</div>
							<div class="mb-10">
								<label class="form-label fw-bold">Notifications:</label>
								<div class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
									<input class="form-check-input" type="checkbox" value="" name="notifications" checked="checked" />
									<label class="form-check-label">Enabled</label>
								</div>
							</div>
							<div class="d-flex justify-content-end">
								<button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-2" data-kt-menu-dismiss="true">Reset</button>
								<button type="submit" class="btn btn-sm btn-primary" data-kt-menu-dismiss="true">Apply</button>
							</div>
						</div>
					</div>
				</div>
				<a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_create_api_key" id="kt_toolbar_primary_button">New API Key</a>
			</div>
		</div>
	</div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			@include('partials.profile.header')
			<div class="card mb-5 mb-xxl-10">
				<div class="card-header">
					<div class="card-title">
						<h3>API Keys</h3>
					</div>
					<div class="card-toolbar">
						<label class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
						<input class="form-check-input" type="checkbox" checked="checked" value="1" />
						<span class="form-check-label text-muted">Test mode</span>
						</label>
					</div>
				</div>
				<div class="card-body py-10">
					<div class="row mb-10">
						<div class="col-md-6 pb-10 pb-lg-0">
							<h2>How to set API</h2>
							<p class="fs-6 fw-bold text-gray-600 py-2">Use images to enhance your post, improve its flow, add humor
								<br />and explain complex topics
							</p>
							<a href="#" class="btn btn-light btn-active-light-primary">Get Started</a>
						</div>
						<div class="col-md-6">
							<h2>Developer Tools</h2>
							<p class="fs-6 fw-bold text-gray-600 py-2">Plan your blog post by choosing a topic, creating an outline conduct
								<br />research, and checking facts
							</p>
							<a href="#" class="btn btn-light btn-active-light-primary">Create Rule</a>
						</div>
					</div>
					<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
						<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="black" />
								<path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="black" />
							</svg>
						</span>
						<div class="d-flex flex-stack flex-grow-1">
							<div class="fw-bold">
								<div class="fs-6 text-gray-700">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing and create outstanding products to serve your clients
									<a class="fw-bolder" href="#">Learn More</a>.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card mb-5 mb-xxl-10">
				<div class="card-header">
					<div class="card-title">
						<h3>Login Sessions</h3>
					</div>
					<div class="card-toolbar">
						<div class="my-1 me-4">
							<select class="form-select form-select-sm form-select-solid w-125px" data-control="select2" data-placeholder="Select Hours" data-hide-search="true">
								<option value="1" selected="selected">1 Hours</option>
								<option value="2">6 Hours</option>
								<option value="3">12 Hours</option>
								<option value="4">24 Hours</option>
							</select>
						</div>
						<a href="#" class="btn btn-sm btn-primary my-1">View All</a>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="table-responsive">
						<table class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9">
							<thead class="border-gray-200 fs-5 fw-bold bg-lighten">
								<tr>
									<th class="min-w-250px">Location</th>
									<th class="min-w-100px">Status</th>
									<th class="min-w-150px">Device</th>
									<th class="min-w-150px">IP Address</th>
									<th class="min-w-150px">Time</th>
								</tr>
							</thead>
							<tbody class="fw-6 fw-bold text-gray-600">
								<tr>
									<td>
										<a href="#" class="text-hover-primary text-gray-600">USA(5)</a>
									</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bolder">OK</span>
									</td>
									<td>Chrome - Windows</td>
									<td>236.125.56.78</td>
									<td>2 mins ago</td>
								</tr>
								<tr>
									<td>
										<a href="#" class="text-hover-primary text-gray-600">United Kingdom(10)</a>
									</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bolder">OK</span>
									</td>
									<td>Safari - Mac OS</td>
									<td>236.125.56.78</td>
									<td>10 mins ago</td>
								</tr>
								<tr>
									<td>
										<a href="#" class="text-hover-primary text-gray-600">Norway(-)</a>
									</td>
									<td>
										<span class="badge badge-light-danger fs-7 fw-bolder">ERR</span>
									</td>
									<td>Firefox - Windows</td>
									<td>236.125.56.10</td>
									<td>20 mins ago</td>
								</tr>
								<tr>
									<td>
										<a href="#" class="text-hover-primary text-gray-600">Japan(112)</a>
									</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bolder">OK</span>
									</td>
									<td>iOS - iPhone Pro</td>
									<td>236.125.56.54</td>
									<td>30 mins ago</td>
								</tr>
								<tr>
									<td>
										<a href="#" class="text-hover-primary text-gray-600">Italy(5)</a>
									</td>
									<td>
										<span class="badge badge-light-warning fs-7 fw-bolder">WRN</span>
									</td>
									<td>Samsung Noted 5- Android</td>
									<td>236.100.56.50</td>
									<td>40 mins ago</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="card">
				<div class="card-header card-header-stretch">
					<div class="card-title">
						<h3>API Keys</h3>
					</div>
				</div>
				<div class="card-body p-0">
					<div class="table-responsive">
						<table class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9" id="kt_api_keys_table">
							<thead class="border-gray-200 fs-5 fw-bold bg-lighten">
								<tr>
									<th class="w-250px min-w-175px ps-9">Label</th>
									<th class="w-275px min-w-250px px-0">API Keys</th>
									<th class="w-125px min-w-125px"></th>
									<th class="min-w-125px min-w-125px">Created</th>
									<th class="min-w-125px">Status</th>
									<th class="w-100px"></th>
								</tr>
							</thead>
							<tbody class="fs-6 fw-bold text-gray-600">
								<tr>
									<td class="ps-9">none set</td>
									<td data-bs-target="license" class="ps-0">fftt456765gjkkjhi83093985</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Nov 01, 2020</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bold">Active</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">Navitare</td>
									<td data-bs-target="license" class="ps-0">jk076590ygghgh324vd33</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Sep 27, 2020</td>
									<td>
										<span class="badge badge-light-primary fs-7 fw-bold">Review</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">Docs API Key</td>
									<td data-bs-target="license" class="ps-0">fftt456765gjkkjhi83093985</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Jul 09, 2020</td>
									<td>
										<span class="badge badge-light-danger fs-7 fw-bold">Inactive</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">Identity Key</td>
									<td data-bs-target="license" class="ps-0">jk076590ygghgh324vd3568</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>May 14, 2020</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bold">Active</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">Remore Interface</td>
									<td data-bs-target="license" class="ps-0">hhet6454788gfg555hhh4</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Dec 30, 2019</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bold">Active</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">none set</td>
									<td data-bs-target="license" class="ps-0">fftt456765gjkkjhi83093985</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Inactive</td>
									<td>
										<span class="badge badge-light-danger fs-7 fw-bold">Active</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
								<tr>
									<td class="ps-9">Test App</td>
									<td data-bs-target="license" class="ps-0">jk076590ygghgh324vd33</td>
									<td>
										<button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
											<span class="svg-icon svg-icon-2">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
													<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
												</svg>
											</span>
										</button>
									</td>
									<td>Apr 03, 2019</td>
									<td>
										<span class="badge badge-light-success fs-7 fw-bold">Active</span>
									</td>
									<td class="pe-9">
										<div class="w-100px position-relative">
											<select class="form-select form-select-sm form-select-solid" data-control="select2" data-placeholder="Options" data-hide-search="true">
												<option value=""></option>
												<option value="2">Options 1</option>
												<option value="3">Options 2</option>
												<option value="4">Options 3</option>
											</select>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
			<div class="modal fade" id="kt_modal_create_api_key" tabindex="-1" aria-hidden="true">
				<div class="modal-dialog modal-dialog-centered mw-650px">
					<div class="modal-content">
						<div class="modal-header" id="kt_modal_create_api_key_header">
							<h2>Create API Key</h2>
							<div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
								<span class="svg-icon svg-icon-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
										<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
									</svg>
								</span>
							</div>
						</div>
						<form id="kt_modal_create_api_key_form" class="form" action="#">
							<div class="modal-body py-10 px-lg-17">
								<div class="scroll-y me-n7 pe-7" id="kt_modal_create_api_key_scroll" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-max-height="auto" data-kt-scroll-dependencies="#kt_modal_create_api_key_header" data-kt-scroll-wrappers="#kt_modal_create_api_key_scroll" data-kt-scroll-offset="300px">
									<div class="notice d-flex bg-light-warning rounded border-warning border border-dashed mb-10 p-6">
										<span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
												<rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
												<rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
											</svg>
										</span>
										<div class="d-flex flex-stack flex-grow-1">
											<div class="fw-bold">
												<h4 class="text-gray-900 fw-bolder">Please Note!</h4>
												<div class="fs-6 text-gray-700">Adding new API key may afftect to your
													<a href="#">Affiliate Income</a>
												</div>
											</div>
										</div>
									</div>
									<div class="mb-5 fv-row">
										<label class="required fs-5 fw-bold mb-2">API Name</label>
										<input type="text" class="form-control form-control-solid" placeholder="Your API Name" name="name" />
									</div>
									<div class="d-flex flex-column mb-5 fv-row">
										<label class="required fs-5 fw-bold mb-2">Short Description</label>
										<textarea class="form-control form-control-solid" rows="3" name="description" placeholder="Describe your API"></textarea>
									</div>
									<div class="d-flex flex-column mb-10 fv-row">
										<label class="required fs-5 fw-bold mb-2">Category</label>
										<select name="category" data-control="select2" data-hide-search="true" data-placeholder="Select a Category..." class="form-select form-select-solid">
											<option value="">Select a Category...</option>
											<option value="1">CRM</option>
											<option value="2">Project Alice</option>
											<option value="3">Keenthemes</option>
											<option value="4">General</option>
										</select>
									</div>
									<div class="mb-10">
										<div class="mb-3">
											<label class="d-flex align-items-center fs-5 fw-bold">
											<span class="required">Specify Your API Method</span>
											<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Your billing numbers will be calculated based on your API method"></i>
											</label>
											<div class="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
										</div>
										<div class="fv-row">
											<div class="btn-group w-100" data-kt-buttons="true" data-kt-buttons-target="[data-kt-button]">
												<label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" data-kt-button="true">
												<input class="btn-check" type="radio" name="method" value="1" />
												Open API</label>
												<label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active" data-kt-button="true">
												<input class="btn-check" type="radio" name="method" checked="checked" value="2" />
												SQL Call</label>
												<label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" data-kt-button="true">
												<input class="btn-check" type="radio" name="method" value="3" />
												UI/UX</label>
												<label class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" data-kt-button="true">
												<input class="btn-check" type="radio" name="method" value="4" />
												Docs</label>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer flex-center">
								<button type="reset" id="kt_modal_create_api_key_cancel" class="btn btn-light me-3">Discard</button>
								<button type="submit" id="kt_modal_create_api_key_submit" class="btn btn-primary">
								<span class="indicator-label">Submit</span>
								<span class="indicator-progress">Please wait...
								<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection