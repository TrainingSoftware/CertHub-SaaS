@extends('layouts.app')
@section('title', 'All Qualification Types')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Qualification Types</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Qualification Types</li>
                </ul>
            </div>
            <div class="d-flex align-items-center flex-shrink-0">
				<div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addQualificationType">
						<span class="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
								<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
							</svg>
						</span>
						Add Qualification Type
					</a>
				</div>
			</div>
        </div>
    </div>
    @livewire('list-qualification-types')
    <div class="modal fade" id="addQualificationType" tabindex="-1" aria-hidden="true">
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
												<h1 class="d-flex justify-content-center align-items-center mb-3">Add Qualification Types</h1>
												<div class="text-muted fw-bold fs-5">How do you want to add your qualification types to CertHub?
												</div>
											</div>
											<div class="mh-475px text-center">
												<div class="row">
													<div class="col-6">
														<a href="/qualificationtypes/create" class="btn btn-primary w-100">Add manually</a>
													</div>
													<div class="col-6">
														<a href="#" class="btn btn-primary w-100" id="bulkButton " data-bs-toggle="modal" data-bs-target="#bulkAdd">Bulk Import</a>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
                             @include('qualificationtypes.bulk-import-form')
</div>
@endsection