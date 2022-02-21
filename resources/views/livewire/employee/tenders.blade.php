<div>
	<div class="card">
		<div class="card-header border-0 pt-6">
			<div class="card-title">
				<div class="d-flex align-items-center position-relative my-1">
					<span class="svg-icon svg-icon-1 position-absolute ms-6">
						<svg wire:loading.remove xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
							<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
							<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
						</svg>
						<i wire:loading class="fas fa-spinner fa-spin fa-1x"></i>
					</span>
					<form method="GET" class="me-5">
						<input type="text" wire:model="searchTerm"  class="form-control form-control-solid w-250px ps-14" placeholder="Search tenders" autocomplete="off"/>
					</form>
				</div>
			</div>
		</div>
		<div class="card-body pt-0">
			<table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_table_users">
				<thead>
					<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
						<th class="w-10px pe-2">
							<div class="form-check form-check-sm form-check-custom form-check-solid me-3">
								<input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
							</div>
						</th>
						<th class="min-w-125px">Name</th>
						<th class="min-w-125px">Start Date</th>
						<th class="min-w-125px">End Date</th>
						<th class="min-w-125px">Location</th>
						<th class="text-end min-w-100px"></th>
					</tr>
				</thead>
				<tbody class="text-gray-600 fw-bold">
					@foreach($tenders as $item)
					<tr>
						<td>
							<div class="form-check form-check-sm form-check-custom form-check-solid">
								<input class="form-check-input" type="checkbox" value="1" />
							</div>
						</td>
						<td>{{ $item->name }}</td>
						<td>{{ $item->start_date->format('d/M/Y') }}</td>
						<td>{{ $item->end_date->format('d/M/Y') }}</td>
						<td>{{ $item->county }}</td>
						<td class="text-end">
							<a href="/tenders/{{ $item->id }}" class="btn btn-light btn-sm">View</a>
						</td>
					</tr>
					@endforeach
				</tbody>
			</table>
            {{$tenders->links()}}
		</div>
	</div>
</div>
