<div class="d-flex flex-column flex-root">
	<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
		<div class="d-flex flex-column flex-lg-row-fluid py-10">
			<div class="d-flex flex-center flex-column flex-column-fluid">
				<div class="w-lg-700px p-10 p-lg-15 mx-auto">
					<form class="my-auto pb-5" id="payment-form" action="{{ route('payments.store') }}" method="POST">
						<div class="current" data-kt-stepper-element="content">
							@csrf
							<div class="row">
								<div class="col-8">
									<div class="pb-10 pb-lg-15">
										<h2 class="fw-bolder d-flex align-items-center text-dark">
											How many employees do you have? 
										</h2>
										<div class="text-muted fw-bold fs-6">
											We operate a simple & transparent pricing structure, you only pay for what you use.
										</div>
									</div>
									<div class="fv-row">
										<div class="col">
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10">
												<span class="svg-icon svg-icon-3x me-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="black"/>
                                                        <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black"/>
                                                    </svg>
												</span>
												<span class="d-block fw-bold text-start">
													<span class="text-dark fw-bolder d-block fs-4 mb-2">
                                                        £
													<span id="employee-amount">{{$plan->price}}</span>
													     per month
													</span>
												</span>
											</label>
											<div class="input-group" id="employee-dialer">
												<button class="btn btn-icon btn-outline btn-outline-secondary" type="button" data-kt-dialer-control="decrease">
													<i class="bi bi-dash fs-1"></i>
												</button>
												<input type="text" class="form-control"  readonly placeholder="Amount" value="1" data-kt-dialer-control="input" name="quantity"/>
												<input type="hidden" name="plan" value="{{$plan->identifier}}">
												<button class="btn btn-icon btn-outline btn-outline-secondary" type="button" data-kt-dialer-control="increase">
													<i class="bi bi-plus fs-1"></i>
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="" data-kt-stepper-element="content">
							<div class="w-100">
								<div class="pb-10 pb-lg-15">
									<h2 class="fw-bolder text-dark">Billing Details</h2>
									<div class="text-muted fw-bold fs-6">Don't worry, you wont be charged! We just use your card details to verify you.</div>
								</div>
								<div class="mb-10 fv-row">
									<label class="form-label mb-3 required">Name on Card</label>
									<input type="text" name="name" id="card-holder-name" class="form-control" value="" placeholder="Name on the card " required>
								</div>
								<div class="mb-10 fv-row">
									<label class="form-label mb-3 required">Card Details</label>
									<div id="card-element" class="form-control"></div>
								</div>
							</div>
						</div>
						<div class="" data-kt-stepper-element="content">
						</div>
						<div class="d-flex flex-stack pt-15">
							<div class="mr-2">
								<button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
									<span class="svg-icon svg-icon-4 me-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
											<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
										</svg>
									</span>
									Previous
								</button>
							</div>
							<div>
								<button data-kt-stepper-action="submit" type="submit" class="btn btn-lg btn-primary" id="card-button" data-secret="{{ $intent['client_secret'] }}">
									<span class="indicator-label">
										Submit
										<span class="svg-icon svg-icon-4 ms-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
												<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
											</svg>
										</span>
									</span>
								</button>
								<button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">
									Continue
									<span class="svg-icon svg-icon-4 ms-1">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
											<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
										</svg>
									</span>
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
				<div class="d-flex flex-center fw-bold fs-6">
					<a href="https://certhub.co/about" target="_blank" class="text-muted text-hover-primary px-2">About</a>
					<a href="https://certhub.co/contact" target="_blank" class="text-muted text-hover-primary px-2">Contact Us</a>
				</div>
			</div>
		</div>
	</div>
</div>
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