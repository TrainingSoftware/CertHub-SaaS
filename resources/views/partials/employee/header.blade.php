<div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
            <div class="me-7 mb-4">
                @if($employee->getMedia('avatar')->first())
                <div class="symbol symbol-50px symbol-lg-60px symbol-fixed position-relative">
                    <img src="{{ $employee->getMedia('avatar')->first()->getUrl() }}" alt="">
                    <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                </div>
                @else
                <div class="symbol symbol-50px symbol-lg-60px symbol-fixed position-relative">
                    <div class="symbol-label">
                        <div class="symbol symbol-35px symbol-circle">
                            <span class="symbol-label bg-info text-inverse-warning fw-bolder">{{ $employee->firstname[0] }}{{ $employee->lastname[0] }}</span>
                            <div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
                        </div>
                    </div>
                </div>
                @endif
            </div>
            <div class="flex-grow-1">
                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <div class="d-flex flex-column">
                        <div class="d-flex align-items-center mb-2">
                            <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">
                            {{ $employee->firstname }} {{ $employee->lastname }}
                            </a>
                            @if($employee->is_archived)
                            <span class="badge badge-light-danger">Archived</span>
                            @else
                            <span class="badge badge-light-success">Active</span>
                            @endif
                        </div>
                        <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                            @if($employee->position)
                            <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                <span class="svg-icon svg-icon-4 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
                                        <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
                                    </svg>
                                </span>
                                {{ $employee->position }}
                            </a>
                            @endif
                            @if($employee->department)
                            <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
                                <span class="svg-icon svg-icon-4 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
                                        <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
                                    </svg>
                                </span>
                                {{ $employee->department->name }}
                            </a>
                            @endif
                            <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                <span class="svg-icon svg-icon-4 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
                                        <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
                                    </svg>
                                </span>
                                {{ $employee->email }}
                            </a>
                        </div>
                    </div>
                    <div class="d-flex my-4">
                        <a href="/qualifications/create?employee={{ $employee->id }}" class="btn btn-sm btn-success me-5">Add Qualification</a>
                        <div class="me-0">
                            <button class="btn btn-sm btn-icon btn-bg-light btn-active-color-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                            <i class="bi bi-three-dots fs-3"></i>
                            </button>
                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                                <div class="menu-item px-3">
                                    <div class="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Quick links</div>
                                </div>
                                <div class="menu-item px-3">
                                    <a href="/employees/{{ $employee->id }}/qualifications/export" class="menu-link px-3">Download Portfolio</a>
                                </div>
                                <div class="menu-item px-3">
                                    <a href="/employees/{{ $employee->id }}/qr-code" class="menu-link px-3">Generate QR Code</a>
                                </div>
                                <div class="menu-item px-3">
                                    <a href="{{route('employee.welcome-mail',$employee)}}" class="menu-link px-3">Send Welcome Email</a>
                                </div>
                                <div class="menu-item px-3">
                                    <a href="{{route('employee.send-reset-link',$employee)}}" class="menu-link px-3">Send Password Reset</a>
                                </div>
                                <div class="menu-item px-3">
                                    <form action="/employees/{{ $employee->id }}/archive" method="post">
                                        @csrf
                                        <button type="submit" class="menu-link px-3 bg-transparent border-0 bg-hover-light w-100 text-danger fw-bold">Archive</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
            <li class="nav-item mt-2">
                <a class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('employees/'.$employee->id)) ? 'active' : '' }}" href="/employees/{{ $employee->id }}">Overview</a>
            </li>
            <li class="nav-item mt-2">
                <a class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('employees/' . $employee->id . '/qualifications')) ? 'active' : '' }}" href="/employees/{{ $employee->id }}/qualifications">Qualifications</a>
            </li>
            <li class="nav-item mt-2">
                <a class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('employees/' . $employee->id . '/contacts')) ? 'active' : '' }}" href="/employees/{{ $employee->id }}/contacts">Contacts</a>
            </li>
            <li class="nav-item mt-2">
                <a class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('employees/' . $employee->id . '/tenders')) ? 'active' : '' }}" href="/employees/{{ $employee->id }}/tenders">Tenders</a>
            </li>
        </ul>
    </div>
</div>
