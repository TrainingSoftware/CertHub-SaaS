<div class="card mb-5 mb-xl-10">
    <div class="card-body pt-9 pb-0">
        <!--begin::Details-->
        <div class="d-flex flex-wrap flex-sm-nowrap mb-3">
            <!--begin: Pic-->
            <div class="me-7 mb-4">
                <div class="symbol symbol-50px symbol-lg-60px symbol-fixed position-relative">
                    @if($provider->website)
                        <img src="//logo.clearbit.com/{{ $provider->website }}">
                    @else
                        <img src="/assets/media/avatars/blank.png" class="w-100" />
                    @endif
                </div>
            </div>
            <!--end::Pic-->
            <!--begin::Info-->
            <div class="flex-grow-1">
                <!--begin::Title-->
                <div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
                    <!--begin::User-->
                    <div class="d-flex flex-column">
                        <!--begin::Name-->
                        <div class="d-flex align-items-center mb-2">
                            <a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{{ $provider->name }}</a>
                        </div>
                        <!--end::Name-->
                        <!--begin::Info-->
                        <div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
                            @if($provider->email)
                                <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
                                    <!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
                                    <span class="svg-icon svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
                                            <path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                    {{ $provider->email }}
                                </a>
                            @endif
                            @if($provider->phone)
                                <a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary ms-5 mb-2">
                                    <!--begin::Svg Icon | path: assets/media/icons/duotune/electronics/elc003.svg-->
                                    <span class="svg-icon svg-icon-muted ">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M5 20H19V21C19 21.6 18.6 22 18 22H6C5.4 22 5 21.6 5 21V20ZM19 3C19 2.4 18.6 2 18 2H6C5.4 2 5 2.4 5 3V4H19V3Z" fill="black"/>
                                            <path opacity="0.3" d="M19 4H5V20H19V4Z" fill="black"/>
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon-->
                                    {{ $provider->phone }}</a>
                            @endif
                        </div>
                        <!--end::Info-->
                    </div>
                    <!--end::User-->
                    <!--begin::Actions-->
                    <div class="d-flex my-4">
                        <a href="/qualifications/create?provider={{ $provider->id }}" class="btn btn-sm btn-success">Add Qualification</a>
                        </a>
                    </div>
                    <!--end::Actions-->
                </div>
                <!--end::Title-->
            </div>
            <!--end::Info-->
        </div>
        <!--end::Details-->
        <!--begin::Navs-->
        <ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
            <!--begin::Nav item-->
            <li class="nav-item mt-2">
                <a href="/providers/{{ $provider->id }}" class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('providers/'.$provider->id)) ? 'active' : '' }}">Overview</a>
            </li>
            <!--end::Nav item-->
            <li class="nav-item mt-2">
                <a href="/providers/{{ $provider->id }}/qualifications" class="nav-link text-active-primary ms-0 me-10 py-5 {{ (request()->is('providers/'.$provider->id.'/qualifications')) ? 'active' : '' }}">Qualifications</a>
            </li>
            <!--end::Nav item-->
        </ul>
        <!--begin::Navs-->
    </div>
</div>