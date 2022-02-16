@extends('layouts.app')
@section('title', 'Import Employees')
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
		</div>
	</div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			<div class="card">
				<div class="card-body p-0">
					<div class="card-px text-center py-20 my-10">
						<h2 class="fs-2x fw-bolder mb-5">Bulk import your Employees!</h2>
						<div class="text-muted fw-bold fs-5 mb-5">
							How do you want to add your training provider to CertHub?
						</div>
						<div class="row">
							<div class="col-md-6 offset-md-3">
								<form action="/import/employees" method="POST" enctype="multipart/form-data">
									@csrf
									<div class="input-group mb-5">
										<input type="file" name="file" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
										<span class="input-group-text border-0" id="basic-addon2">
										<button class="btn btn-sm btn-primary bg-success" type="submit">Upload</button>
										</span>
									</div>
								</form>
							</div>
						</div>
						<div class="text-muted fw-bold fs-5 mb-5">
							<a class="text-primary" href="/import/employees/export">Export Employees</a>
						</div>
					</div>
					<div class="text-center px-4">
						<img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection