<div>
	<form method="GET" class="w-100 position-relative mb-5" autocomplete="off">
		<span class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
			<svg wire:loading.remove xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
				<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
				<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
			</svg>
			<i wire:loading class="fas fa-spinner fa-spin fa-1x"></i>
		</span>
		<input type="text" class="form-control form-control-lg form-control-solid px-15" placeholder="Search by name or email..." wire:model="searchTerm" autofocus/>
	</form>
	<div class="py-5">
		<div>
			<div class="mh-375px scroll-y me-n7 pe-7">
				@foreach($employees as $employee)
				<div class="rounded d-flex flex-stack bg-active-lighten p-4">
					<div class="d-flex align-items-center">
						<div class="symbol symbol-35px symbol-circle">
							<span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
						</div>
						<div class="ms-5">
							<a href="/employees/{{ $employee->id }}" class="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">{{ $employee->firstname }} {{ $employee->lastname }}</a>
							<div class="fw-bold text-muted">{{ $employee->email }}</div>
						</div>
					</div>
					<div class="ms-2 w-100px">
						<a href="/employees/{{ $employee->id }}" class="btn btn-light">View</a>
					</div>
				</div>
				@endforeach
			</div>
		</div>
	</div>
</div>