@extends('layouts.app')
@section('title', 'Billings')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Usage & Billing</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Dashboard</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">Settings</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">Billing & Usage</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			<div class="card mb-5 mb-xl-10">
				<div class="card-header card-header-stretch pb-0">
					<div class="card-title">
						<h3 class="m-0">Your Subscription</h3>
					</div>
				</div>
				<div class="card-body">
					<div class="row">
						<div class="col-lg-7">
							<h3 class="mb-2">Active until Dec 09, 2022</h3>
							<p class="fs-6 text-gray-600 fw-bold mb-6 mb-lg-15">We will send you a
								notification 7 days before your next billing period
							</p>
							<div class="fs-5 mb-2">
								<span class="text-gray-800 fw-bolder me-1">£{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }}.00</span>
								<span class="text-gray-600 fw-bold">Per Month</span>
							</div>
							<div class="fs-6 text-gray-600 fw-bold">Scroll down to view your invoices</div>
						</div>
						<div class="col-lg-5">
							<div class="d-flex text-muted fw-bolder fs-5 mb-3">
								<span class="flex-grow-1 text-gray-800">Users</span>
								<span class="text-gray-800">{{ Auth::user()->companies()->first()->employees->count()  }} of {{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }} Used</span>
							</div>
							<div class="progress h-8px bg-light-primary mb-2">
								<div class="progress-bar bg-primary"
									role="progressbar"
									style="width: {{ ( Auth::user()->companies()->first()->employees->count() / Auth::user()->companies()->first()->subscriptions()->first()->quantity) * 100 }}%"
									aria-valuenow="{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity - Auth::user()->companies()->first()->employees->count()  }}"
									aria-valuemin="{{ Auth::user()->companies()->first()->employees->count()  }}"
									aria-valuemax="{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }}">
								</div>
							</div>
							<div class="fs-6 text-gray-600 fw-bold mb-10">{{ Auth::user()->companies()->first()->subscriptions()->first()->quantity - Auth::user()->companies()->first()->employees->count() }} Employees remaining until your
								plan requires updating
							</div>
							<div class="d-flex justify-content-end pb-0 px-0">
								<button class="btn btn-primary btn-active-light-primary align-self-center"
									data-bs-toggle="modal" data-bs-target="#kt_modal_account_upgrade">Manage employee quota
								</button>
								<div class="modal fade" id="kt_modal_account_upgrade" tabindex="-1" aria-hidden="true">
									<div class="modal-dialog modal-dialog-centered mw-800px">
										<div class="modal-content">
											<div class="modal-header pb-0 border-0 justify-content-end">
												<div class="btn btn-sm btn-icon btn-active-color-primary"
													data-bs-dismiss="modal">
													<span class="svg-icon svg-icon-1">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none">
															<rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
																rx="1" transform="rotate(-45 6 17.3137)" fill="black"/>
															<rect x="7.41422" y="6" width="16" height="2" rx="1"
																transform="rotate(45 7.41422 6)" fill="black"/>
														</svg>
													</span>
												</div>
											</div>
											<div class="modal-body scroll-y pt-0 pb-15">
												<div class="mw-lg-600px mx-auto">
													<div class="text-center">
														<h1 class="mb-3">Upgrade your employee quota</h1>
														<h5 class="text-muted my-5">You current plan is {{ Auth::user()->companies()->first()->subscriptions()->first()->quantity }} employees</h5>
														<div class="row">
															<div class="col-6 offset-3">
																<form action="{{route('payments.upgrade')}}" method="POST">
																	@csrf
																	<div class="input-group" id="employee-dialer">
																		<button
																			class="btn btn-icon btn-outline btn-outline-secondary"
																			type="button" data-kt-dialer-control="decrease">
																		<i class="bi bi-dash fs-1"></i>
																		</button>
																		<input type="text" class="form-control" readonly
																			placeholder="Amount" value="1"
																			data-kt-dialer-control="input" name="quantity"/>
																		<input type="hidden" name="plan" value="standard">
																		<button
																			class="btn btn-icon btn-outline btn-outline-secondary"
																			type="button" data-kt-dialer-control="increase">
																		<i class="bi bi-plus fs-1"></i>
																		</button>
																	</div>
																	<div class="text-center py-5">
																		<button
																			class="btn btn-primary btn-active-light-primary fw-bolder"
																			type="submit">Add <span id="employee-amount">{{ $plan->price }}</span> Employees
																		</button>
																	</div>
																	<p class="text-muted">
																		By submitting this form, you hereby agree to CertHub charging your credit card on file with Stripe.
																	</p>
																</form>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="card mb-5 mb-xl-10">
				<div class="card-header card-header-stretch pb-0">
					<div class="card-title">
						<h3 class="m-0">Payment Methods</h3>
					</div>
				</div>
				<div id="kt_billing_payment_tab_content" class="card-body tab-content">
					<div id="kt_billing_creditcard" class="tab-pane fade show active" role="tabpanel">
						<h3 class="mb-5">My Cards</h3>
						<div class="row gx-9 gy-6">
							<div class="col-xl-6">
								<div class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
									<div class="d-flex flex-column py-2">
										<div class="d-flex align-items-center fs-4 fw-bolder mb-5">Marcus Morris
											<span class="badge badge-light-success fs-7 ms-2">Primary</span>
										</div>
										<div class="d-flex align-items-center">
											<img src="/assets/media/svg/card-logos/visa.svg" alt="" class="me-4" />
											<div>
												<div class="fs-4 fw-bolder">Visa **** 1679</div>
												<div class="fs-6 fw-bold text-gray-400">Card expires at 09/24</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center py-2">
										<button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-3">Delete</button>
										<button class="btn btn-sm btn-light btn-active-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">Edit</button>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
									<div class="d-flex flex-column py-2">
										<div class="d-flex align-items-center fs-4 fw-bolder mb-5">Jacob Holder</div>
										<div class="d-flex align-items-center">
											<img src="/assets/media/svg/card-logos/american-express.svg" alt="" class="me-4" />
											<div>
												<div class="fs-4 fw-bolder">Mastercard **** 2040</div>
												<div class="fs-6 fw-bold text-gray-400">Card expires at 10/22</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center py-2">
										<button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-3">Delete</button>
										<button class="btn btn-sm btn-light btn-active-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">Edit</button>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="card card-dashed h-xl-100 flex-row flex-stack flex-wrap p-6">
									<div class="d-flex flex-column py-2">
										<div class="d-flex align-items-center fs-4 fw-bolder mb-5">Jhon Larson</div>
										<div class="d-flex align-items-center">
											<img src="/assets/media/svg/card-logos/mastercard.svg" alt="" class="me-4" />
											<div>
												<div class="fs-4 fw-bolder">Mastercard **** 1290</div>
												<div class="fs-6 fw-bold text-gray-400">Card expires at 03/23</div>
											</div>
										</div>
									</div>
									<div class="d-flex align-items-center py-2">
										<button type="reset" class="btn btn-sm btn-light btn-active-light-primary me-3">Delete</button>
										<button class="btn btn-sm btn-light btn-active-light-primary" data-bs-toggle="modal" data-bs-target="#kt_modal_new_card">Edit</button>
									</div>
								</div>
							</div>
							<div class="col-xl-6">
								<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed h-lg-100 p-6">
									<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
										<div class="mb-3 mb-md-0 fw-bold">
											<h4 class="text-gray-900 fw-bolder">Important Note!</h4>
											<div class="fs-6 text-gray-700 pe-7">Please carefully read
												<a href="#" class="fw-bolder me-1">Product Terms</a>adding your new payment card
											</div>
										</div>
										<a href="#" class="btn btn-primary px-6 align-self-center text-nowrap">Add Card</a>
									</div>
								</div>
							</div>
							<div class="modal fade" id="kt_modal_new_card" tabindex="-1" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered mw-650px">
									<div class="modal-content">
										<div class="modal-header">
											<h2>Add New Card</h2>
											<div class="btn btn-sm btn-icon btn-active-color-primary"
												data-bs-dismiss="modal">
												<span class="svg-icon svg-icon-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
															rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
														<rect x="7.41422" y="6" width="16" height="2" rx="1"
															transform="rotate(45 7.41422 6)" fill="black" />
													</svg>
												</span>
											</div>
										</div>
										<div class="modal-body scroll-y mx-5 mx-xl-15 my-7">
											<form id="kt_modal_new_card_form" class="form" action="#">
												<div class="d-flex flex-column mb-7 fv-row">
													<label
														class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
													<span class="required">Name On Card</span>
													<i class="fas fa-exclamation-circle ms-2 fs-7"
														data-bs-toggle="tooltip"
														title="Specify a card holder's name"></i>
													</label>
													<input type="text" class="form-control form-control-solid"
														placeholder="" name="card_name" value="Max Doe" />
												</div>
												<div class="d-flex flex-column mb-7 fv-row">
													<label class="required fs-6 fw-bold form-label mb-2">Card
													Number</label>
													<div class="position-relative">
														<input type="text" class="form-control form-control-solid"
															placeholder="Enter card number" name="card_number"
															value="4111 1111 1111 1111" />
														<div
															class="position-absolute translate-middle-y top-50 end-0 me-5">
															<img src="assets/media/svg/card-logos/visa.svg" alt=""
																class="h-25px" />
															<img src="assets/media/svg/card-logos/mastercard.svg" alt=""
																class="h-25px" />
															<img src="assets/media/svg/card-logos/american-express.svg"
																alt="" class="h-25px" />
														</div>
													</div>
												</div>
												<div class="row mb-10">
													<div class="col-md-8 fv-row">
														<label class="required fs-6 fw-bold form-label mb-2">Expiration
														Date</label>
														<div class="row fv-row">
															<div class="col-6">
																<select name="card_expiry_month"
																	class="form-select form-select-solid"
																	data-control="select2" data-hide-search="true"
																	data-placeholder="Month">
																	<option></option>
																	<option value="1">1</option>
																	<option value="2">2</option>
																	<option value="3">3</option>
																	<option value="4">4</option>
																	<option value="5">5</option>
																	<option value="6">6</option>
																	<option value="7">7</option>
																	<option value="8">8</option>
																	<option value="9">9</option>
																	<option value="10">10</option>
																	<option value="11">11</option>
																	<option value="12">12</option>
																</select>
															</div>
															<div class="col-6">
																<select name="card_expiry_year"
																	class="form-select form-select-solid"
																	data-control="select2" data-hide-search="true"
																	data-placeholder="Year">
																	<option></option>
																	<option value="2022">2022</option>
																	<option value="2023">2023</option>
																	<option value="2024">2024</option>
																	<option value="2025">2025</option>
																	<option value="2026">2026</option>
																	<option value="2027">2027</option>
																	<option value="2028">2028</option>
																	<option value="2029">2029</option>
																	<option value="2030">2030</option>
																	<option value="2031">2031</option>
																	<option value="2032">2032</option>
																</select>
															</div>
														</div>
													</div>
													<div class="col-md-4 fv-row">
														<label
															class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
														<span class="required">CVV</span>
														<i class="fas fa-exclamation-circle ms-2 fs-7"
															data-bs-toggle="tooltip"
															title="Enter a card CVV code"></i>
														</label>
														<div class="position-relative">
															<input type="text" class="form-control form-control-solid"
																minlength="3" maxlength="4" placeholder="CVV"
																name="card_cvv" />
															<div
																class="position-absolute translate-middle-y top-50 end-0 me-3">
																<span class="svg-icon svg-icon-2hx">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24"
																		height="24" viewBox="0 0 24 24" fill="none">
																		<path d="M22 7H2V11H22V7Z" fill="black" />
																		<path opacity="0.3"
																			d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
																			fill="black" />
																	</svg>
																</span>
															</div>
														</div>
													</div>
												</div>
												<div class="d-flex flex-stack">
													<div class="me-5">
														<label class="fs-6 fw-bold form-label">Save Card for further
														billing?</label>
														<div class="fs-7 fw-bold text-muted">If you need more info,
															please check budget planning
														</div>
													</div>
													<label
														class="form-check form-switch form-check-custom form-check-solid">
													<input class="form-check-input" type="checkbox" value="1"
														checked="checked" />
													<span class="form-check-label fw-bold text-muted">Save
													Card</span>
													</label>
												</div>
												<div class="text-center pt-15">
													<button type="reset" id="kt_modal_new_card_cancel"
														class="btn btn-light me-3">Discard</button>
													<button type="submit" id="kt_modal_new_card_submit"
														class="btn btn-primary">
													<span class="indicator-label">Submit</span>
													<span class="indicator-progress">Please wait...
													<span
														class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
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
			<div class="card mb-5 mb-xl-10">
				<div class="card-header card-header-stretch border-bottom border-gray-200">
					<div class="card-title">
						<h3 class="fw-bolder m-0">Billing History</h3>
					</div>
				</div>
				<div class="tab-content">
					<div id="kt_billing_months" class="card-body p-0 tab-pane fade show active" role="tabpanel" aria-labelledby="kt_billing_months">
						<div class="table-responsive">
							<table class="table table-row-bordered align-middle gy-4 gs-9">
								<thead class="border-bottom border-gray-200 fs-6 text-gray-600 fw-bolder bg-light bg-opacity-75">
									<tr>
										<td class="min-w-150px">Date</td>
										<td class="min-w-250px">Description</td>
										<td class="min-w-150px">Amount</td>
										<td class="min-w-150px">Invoice</td>
										<td></td>
									</tr>
								</thead>
								<tbody class="fw-bold text-gray-600">
									<tr>
										<td>Nov 01, 2020</td>
										<td>
											<a href="#">Invoice for Ocrober 2022</a>
										</td>
										<td>$123.79</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Oct 08, 2020</td>
										<td>
											<a href="#">Invoice for September 2022</a>
										</td>
										<td>$98.03</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Aug 24, 2020</td>
										<td>Paypal</td>
										<td>$35.07</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Aug 01, 2020</td>
										<td>
											<a href="#">Invoice for July 2022</a>
										</td>
										<td>$142.80</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Jul 01, 2020</td>
										<td>
											<a href="#">Invoice for June 2022</a>
										</td>
										<td>$123.79</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Jun 17, 2020</td>
										<td>Paypal</td>
										<td>$523.09</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
									<tr>
										<td>Jun 01, 2020</td>
										<td>
											<a href="#">Invoice for May 2022</a>
										</td>
										<td>$123.79</td>
										<td>
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">PDF</a>
										</td>
										<td class="text-right">
											<a href="#" class="btn btn-sm btn-light btn-active-light-primary">View</a>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
			<div class="card mb-5 mb-xxl-10">
				<div class="card-header">
					<div class="card-title">
						<h3>Deactivate your account</h3>
					</div>
				</div>
				<div class="card-body py-10">
					<div class="row">
						<div class="col-md-6 pb-10 pb-lg-0">
							<p class="fs-6 fw-bold text-gray-600">
								We're sorry to see you go! Click the button below to deactivate your account.
							</p>
							<p class="fs-6 fw-bold text-gray-600">
								For guidance please email <a href="mailto:help@certhub.co">help@certhub.co</a>
							</p>
							<button class="btn btn-danger btn-active-light-danger align-self-center"
								data-bs-toggle="modal" data-bs-target="#kt_modal_confirm_delete">Deactivate
							account
							</button>
							<div class="modal fade" id="kt_modal_confirm_delete" tabindex="-1" aria-hidden="true">
								<div class="modal-dialog modal-dialog-centered mw-800px">
									<div class="modal-content">
										<div class="modal-header pb-0 border-0 justify-content-end">
											<div class="btn btn-sm btn-icon btn-active-color-primary"
												data-bs-dismiss="modal">
												<span class="svg-icon svg-icon-1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none">
														<rect opacity="0.5" x="6" y="17.3137" width="16" height="2"
															rx="1" transform="rotate(-45 6 17.3137)" fill="black"/>
														<rect x="7.41422" y="6" width="16" height="2" rx="1"
															transform="rotate(45 7.41422 6)" fill="black"/>
													</svg>
												</span>
											</div>
										</div>
										<div class="modal-body scroll-y pt-0 pb-15">
											<div class="mw-lg-600px mx-auto">
												<div class="text-center">
													<h1 class="mb-3">Deactivate <span
														class="text-danger">{{ Auth::user()->companies()->first()->name }}</span>?
													</h1>
													<div class="text-muted fw-bold fs-5">
														Are you sure you want to deactivate your account?<br>
														You can restore your account at anytime.
													</div>
													<div class="text-center mt-10">
														<button class="btn btn-danger fw-bolder" type="submit">
														Confirm deactivation
														</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
@push('extra-js')
<script>
	var amount  = document.getElementById('employee-amount')
	var dialerElement = document.querySelector("#employee-dialer")
	var dialerObject = new KTDialer(dialerElement, {
	    min: 1,
	    max: 500,
	    step: 1,
	});
	dialerObject.on('kt.dialer.increase',function(t){
	   if(t.value >=1) {
	       amount.textContent = (t.value + 1) * {{$plan->price}};
	   }
	
	})
	dialerObject.on('kt.dialer.decrease',function(t){
	    if(t.value >=2){
	        amount.textContent = (t.value - 1) *  {{$plan->price}};
	    }
	})
</script>
@endpush