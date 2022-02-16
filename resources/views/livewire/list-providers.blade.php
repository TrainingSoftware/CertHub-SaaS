<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                @if(Auth::user()->companies->first()->providers->count() != 0 )
                <div class="card-header border-0 py-6">
                    <div class="card-title">
                        <div class="d-flex align-items-center position-relative my-1">
                            <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                    <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
                                </svg>
                            </span>
                            <input type="text" data-kt-user-table-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Search providers" wire:model="searchTerm"/>
                        </div>
                    </div>
                </div>
                @endif
                @if(Auth::user()->companies->first()->providers->count() == 0 )
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">Add Your First Provider!</h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            It looks like you have not added any providers yet...
                        </p>
                        <a href="#" class="btn btn-sm btn-primary" data-bs-toggle="modal" data-bs-target="#addProvider">
                            <span class="svg-icon svg-icon-2">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                    <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                </svg>
                            </span>
                            Add Provider
                        </a>
                        <div class="modal fade" id="addProvider" tabindex="-1" aria-hidden="true">
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
                                            <h1 class="d-flex justify-content-center align-items-center mb-3">Add a training provider</h1>
                                            <div class="text-muted fw-bold fs-5">How do you want to add your training provider to CertHub?
                                            </div>
                                        </div>
                                        <div class="mh-475px text-center">
                                            <div class="row">
                                                <div class="col-6">
                                                    <a href="/providers/create" class="btn btn-primary w-100">Add manually</a>
                                                </div>
                                                <div class="col-6">
                                                    <button
                                                        class="btn btn-primary w-100 collapsed"
                                                        type="button"
                                                        data-bs-toggle="collapse"
                                                        data-bs-target="#searchCompany"
                                                        aria-expanded="false"
                                                        aria-controls="kt_accordion_1_body_1"
                                                        >
                                                    Import from Companies House
                                                    </button>
                                                </div>
                                            </div>
                                            <div id="searchCompany" class="accordion-collapse collapse">
                                                <div class="row mt-10">
                                                    <div class="col-12">
                                                        <div class="accordion-body">
                                                            <form action="/import-provider" method="get">
                                                                @csrf
                                                                <div class="input-group mb-5">
                                                                    {!! Form::text('query', null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Enter company registration number...']) !!}
                                                                    <span class="input-group-text border-0" id="basic-addon2">
                                                                    <button class="btn btn-primary bg-success" type="submit">Find Company</button>
                                                                    </span>
                                                                </div>
                                                            </form>
                                                        </div>
                                                        <p>Not sure on the Provider's company number? <a href="https://find-and-update.company-information.service.gov.uk" target="_blank">Find it here</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
                @else
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5 mb-0" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-125px">Name</th>
                                <th class="min-w-125px">Phone</th>
                                <th class="min-w-125px">Email</th>
                                <th class="text-end min-w-100px"></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @foreach ($providers as $provider)
                            <tr>
                                <td class="d-flex align-items-center">
                                    <div class="symbol symbol-circle symbol-50px overflow-hidden me-3">
                                        <a href="/providers/{{ $provider->id }}">
                                            <div class="symbol-label">
                                                @if($provider->website)
                                                <img src="//logo.clearbit.com/{{ $provider->website }}" class="w-100">
                                                @else
                                                <div class="symbol symbol-25px symbol-circle">
                                                    <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $provider->name[0] }}</span>
                                                </div>
                                                @endif
                                            </div>
                                        </a>
                                    </div>
                                    <div class="d-flex flex-column">
                                        <a href="/providers/{{ $provider->id }}" class="text-gray-800 text-hover-primary p-2">{{ $provider->name }}</a>
                                    </div>
                                </td>
                                <td>{{ $provider->phone }}</td>
                                <td>{{ $provider->email }}</td>
                                <td class="text-end">
									<a href="/providers/{{ $provider->id }}" class="btn btn-light btn-sm">View</a>
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