<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
         <div class="@if(!Auth::user()->isAdmin()) @if(Auth::user()->companies->first()->users->count() == 0 ) card @endif @endif">
                <div class="card-header border-0 py-6 px-0">
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
									<input type="text" class="form-control form-control-solid ps-14" placeholder="Search users" wire:model="searchTerm"/>
								</div>
							</div>
							<div class="col-2 mt-3">
                                <a href="/settings/users">
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
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table align-middle table-hover table-rounded table-striped border gy-7 gs-7">
                            <thead>
                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                    <th class="min-w-125px pointer">User</th>
                                    <th class="min-w-125px pointer">Email</th>
                                    <th class="min-w-125px pointer">Added on</th>
                                    <th class="text-end min-w-100px"></th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 fw-bold">
                                @foreach ($users as $item)
                                <tr class="">
                                    <td class="d-flex align-items-center border-bottom-0">
                                        <div class="d-flex flex-column ">
                                            <a href="/settings/users/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1 p-2">{{ $item->name }}</a>
                                        </div>
                                    </td>
                                    <td class="border-bottom-0">
                                        <div class="d-flex flex-column ">
                                            <span class="text-gray-800 text-hover-primary mb-1 p-2">{{ $item->email }}</span>
                                        </div>
                                    </td>
                                    <td class="border-bottom-0">
                                        <div class="d-flex flex-column ">
                                            <span class="text-gray-800 text-hover-primary mb-1 p-2">{{ $item->created_at->format('d/m/Y') }}</span>
                                        </div>
                                    </td>
                                    <td class="text-end">
                                        <a href="/settings/users/{{ $item->id }}" class="btn btn-secondary btn-sm">View</a>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
