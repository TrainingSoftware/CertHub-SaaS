@extends('layouts.app')
@section('title', 'View Employee')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">User: {{ $user->name }}</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Home</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">
						<a href="/employees" class="text-muted text-hover-primary">Users</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">{{ $user->name }}</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
				<div class="card-header cursor-pointer">
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">
							{{ $user->name }}'s Details
						</h3>
					</div>
					<a href="/settings/users/{{ $user->id }}/edit" class="btn btn-sm btn-primary align-self-center">Edit User</a>
				</div>
				<div class="card-body p-9">
					<div class="row mb-7">
						<label class="col-lg-4 fw-bold text-muted">Full Name</label>
						<div class="col-lg-8">
							<span class="fw-bolder fs-6 text-gray-800">{{ $user->name }}</span>
						</div>
					</div>
					<div class="row">
						<label class="col-lg-4 fw-bold text-muted">Email</label>
						<div class="col-lg-8">
							@if($user->email)
							<span class="fw-bolder fs-6 text-gray-800">{{ $user->email }}</span>
							@else
							<span class="fw-bolder fs-6 text-gray-500">No email address available</span>
							@endif
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
@endsection