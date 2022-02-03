<div class="modal fade" id="kt_modal_postcode" tabindex="-1" aria-hidden="true">
	<div class="modal-dialog modal-dialog-centered mw-650px">
		<div class="modal-content">
			<div class="modal-body scroll-y mx-5 mx-xl-18 pt-15 pb-15">
				<div class="text-center mb-13">
					<h1 class="mb-3">Address lookup</h1>
					<div class="text-muted fw-bold fs-5">Enter your postcode </div>
				</div>
				<div id="">
					<form id="example_form">
						<div class="address_container">
							<div class="row mb-10">
								<div class="form-group col-md-12">
									<div class="input-group mb-5">
										<input type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" id="address" placeholder="NR14 7PZ" aria-owns="address_result" autocomplete="off" autocorrect="off">
										<span class="input-group-text border-0" id="basic-addon2">
										<button class="btn btn-primary bg-success" type="submit" id="search">Search</button>
										</span>
									</div>
								</div>
							</div>
							<div class="row mb-10">
								<div class="form-group col-md-12">
									<div id="address_status" aria-live="assertive" aria-atomic="true" role="status" class="sr-only">
										<i class="fas fa-spinner fa-spin fa-1x"></i>
									</div>
									<div id="address_results"></div>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>