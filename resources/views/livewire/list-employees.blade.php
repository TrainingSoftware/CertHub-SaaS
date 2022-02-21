<div>
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			<div class="card">
				@if(Auth::user()->companies()->first()->employees->count() != 0 )
				<div class="card-header border-0 py-6">
					<div class="card-title w-100">
                        <div class="row w-100">
                            <div class="col-3">
								<div class="d-flex align-items-center position-relative">
									<span class="svg-icon svg-icon-1 position-absolute ms-6">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
											<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
										</svg>
									</span>
									<input type="text" class="form-control form-control-solid ps-14" placeholder="Search employees" wire:model="searchTerm"/>
								</div>
							</div>
							<div class="col-3">
                                <select wire:model="department" class="form-control form-control-solid">
                                    <option value="">Select Department</option>
                                    @foreach($departments as $d)
                                        <option value="{{$d->id}}">{{$d->name}}</option>
                                    @endforeach
                                </select>
                            </div>
							<div class="col-2 mt-3">
                                <a href="/employees">
                                    <span class="svg-icon svg-icon-muted svg-icon-1hx">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                            <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                        </svg>
                                    </span>
                                </a>
                            </div>
						</div>
					</div>
				</div>
				@endif
				@if(Auth::user()->companies()->first()->employees->count() == 0 )
				<div class="card-body p-0">
					<div class="card-px text-center py-20 my-10">
						<h2 class="fs-2x fw-bolder mb-10">Add Your First Employee!</h2>
						<p class="text-gray-400 fs-4 fw-bold mb-10">
							It looks like you have not added any employees yet...
						</p>
						<a href="/employees/create" class="btn btn-primary">Add Employee</a>
					</div>
					<div class="text-center px-4">
						<img class="mw-100 mh-300px" alt="" src="assets/media/illustrations/sigma-1/2.png" />
					</div>
				</div>
				@else
				<div class="card-body pt-0">
					<table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_table_users">
						<thead>
							<tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
								<th class="min-w-125px">Employee</th>
								<th class="min-w-125px">Department</th>
								<th class="min-w-125px">Qualifications</th>
								<th class="min-w-125px">Employment Date</th>
								<th class="text-end min-w-100px"></th>
							</tr>
						</thead>
						<tbody class="text-gray-600 fw-bold">

                                @foreach ($employees as $item)
                                <tr>
                                    <td class="d-flex align-items-center border-bottom-0">
                                        <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                            <a href="/employees/{{ $item->id }}">
                                                <div class="symbol-label">
                                                    <div class="symbol symbol-35px symbol-circle">
                                                        <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $item->firstname[0] }}{{ $item->lastname[0] }}</span>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <div class="d-flex flex-column">
                                            <a href="/employees/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->firstname }} {{ $item->lastname }}</a>
                                            <span>{{ $item->email }}</span>
                                        </div>
                                    </td>
                                    <td>@if($item->department){{ $item->department->name }}@endif</td>
                                    <td>
                                        <a href="/employees/{{ $item->id }}/qualifications">
                                            {{ $item->qualifications->count() }}
                                    </td>
                                    <td>
                                    @if($item->start_date){{ $item->start_date->format('d/m/Y') }}@endif
                                    </td>
									<td class="text-end">
										<a href="/employees/{{ $item->id }}" class="btn btn-light btn-sm">View</a>
									</td>
                                </tr>
                                @endforeach

						</tbody>
					</table>
                         {{$employees->links()}}
				</div>
				@endif
			</div>
		</div>
	</div>
</div>
