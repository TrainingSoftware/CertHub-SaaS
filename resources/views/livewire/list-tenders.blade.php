<div> 
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                @if(Auth::user()->companies->first()->tenders->count() != 0 )
                <div class="card-header border-0 py-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                </svg>
                            </span>
                            <input type="text" wire:model="searchTerm" class="form-control form-control-solid w-250px ps-14" placeholder="Search tenders" />
                        </div>
                    </div>
                </div>
                @endif
                @if(Auth::user()->companies->first()->tenders->count() == 0 )
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">Add Your First Tender!</h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            It looks like you haven't created a tender yet...
                        </p>
                        <a href="/tenders/create" class="btn btn-primary">Create Tender</a>
                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
                @else
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">Name</th>
                                <th class="min-w-125px">Location</th>
                                <th class="min-w-125px">Start Date</th>
                                <th class="min-w-125px">End Date</th>
                                <th class="text-end min-w-100px"></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @foreach ($tenders as $item)
                            <tr class="">
                                <td class="d-flex align-items-center border-bottom-0">
                                    <div class="d-flex flex-column">
                                        <a href="/tenders/{{ $item->id }}" class="text-gray-800 text-hover-primary p-2">{{ $item->name }}</a>
                                    </div>
                                </td>
                                <td class="">
                                    <div class="d-flex flex-column">
                                        {{ $item->location }}
                                    </div>
                                </td>
                                <td class="">
                                    <div class="d-flex flex-column">
                                        {{ $item->start_date->format('d M Y') }}
                                    </div>
                                </td>
                                <td class="">
                                    <div class="d-flex flex-column">
                                        {{ $item->end_date->format('d M Y') }}
                                    </div>
                                </td>
                                <td class="text-end">
									<a href="/tenders/{{ $item->id }}" class="btn btn-light btn-sm">View</a>
								</td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
                @endif
            </div>
        </div>
    </div>
</div>