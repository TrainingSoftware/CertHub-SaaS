<div id="kt_modal_users_search_handler" data-kt-search-keypress="true" data-kt-search-min-length="2"
    data-kt-search-enter="enter" data-kt-search-layout="inline">
    <!--begin::Form-->
    <div class="row nav-group nav-group-outline mx-auto mb-10" data-kt-buttons="true">
        <a href="#" class="col btn btn-color-gray-400 btn-active {{$selected == " Library" ? "active" : "" }}
            btn-active-secondary px-6 py-3 me-2" wire:click="openLibrary">Library</a>
        <a href="#" class="col btn btn-color-gray-400 btn-active {{$selected == " Custom" ? "active" : "" }}
            btn-active-secondary px-6 py-3" wire:click="openCustom">Custom</a>
    </div>
    <form data-kt-search-element="form" class="w-100 position-relative mb-5" autocomplete="off">
        <!--begin::Hidden input(Added to disable form autocomplete)-->
        <input type="hidden" />
        <span
            class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1"
                    transform="rotate(45 17.0365 15.1223)" fill="black" />
                <path
                    d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                    fill="black" />
            </svg>
        </span>

        <input type="text" class="form-control form-control-lg form-control-solid px-15" wire:model="searchTerm"
            placeholder="Search..." data-kt-search-element="input" />
        <!--end::Input-->
        <span
            class="btn btn-flush btn-active-color-primary position-absolute top-50 end-0 translate-middle-y lh-0 me-5 d-none"
            data-kt-search-element="clear">
            <!--begin::Svg Icon | path: icons/duotune/arrows/arr061.svg-->
            <span class="svg-icon svg-icon-2 svg-icon-lg-1 me-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)"
                        fill="black" />
                    <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)"
                        fill="black" />
                </svg>
            </span>
            <!--end::Svg Icon-->
        </span>
        <!--end::Reset-->
    </form>
    <!--end::Form-->
    <!--begin::Wrapper-->
    @if($selected == "Custom")
    <div class="py-5 " id="Custom">
        <div data-kt-search-element="suggestions">
            <div class="mh-275px scroll-y me-n7 pe-7">
                <div class="table-responsive">
                    <table class="table align-middle table-hover table-rounded table-striped border-0 gs-7">
                        <tbody class="text-gray-600 fw-bold">
                            @foreach($qualificationTypes as $key => $value)
                            <tr class="">
                                <td class="">
                                    <a class="d-flex align-items-center p-0 rounded bg-state-light bg-state-opacity-50 mb-0"
                                        wire:click="updateQualificationType('{{$key}}','{{$value}}','custom')">
                                        <div class="fw-bold">
                                            <span class="fs-6 text-gray-800 me-2">{{$value}}</span>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <!--end::Users-->
        </div>
    </div>
    @endif
    @if($selected == "Library")
    <div class="py-5 " id="Library">
        <div data-kt-search-element="suggestions">
            <div class="mh-275px scroll-y me-n7 pe-7">
                <div class="table-responsive">
                    <table class="table align-middle table-hover table-rounded table-striped border-0 gs-7">
                        <tbody class="text-gray-600 fw-bold">
                            @foreach($courses as $key => $value)
                            <tr class="">
                                <td class="">
                                    <a class="d-flex align-items-center p-0 rounded bg-state-light bg-state-opacity-50 mb-0"
                                        wire:click="updateQualificationType('{{$key}}','{{$value}}','custom')">
                                        <div class="fw-bold">
                                            <span class="fs-6 text-gray-800 me-2">{{$value}}</span>
                                        </div>
                                    </a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
            <!--end::Users-->
        </div>
        <div data-kt-search-element="empty" class="text-center d-none">
            <!--begin::Message-->
            <div class="fw-bold py-10">
                <div class="text-gray-600 fs-3 mb-2">No users found</div>
                <div class="text-muted fs-6">Try to search by username, full name or email...</div>
            </div>
            <!--end::Message-->
            <!--begin::Illustration-->
            <div class="text-center px-5" wire:loading>
                <img src="assets/media/illustrations/dozzy-1/1.png" alt="" class="w-100 h-200px h-sm-325px" />
            </div>
            <!--end::Illustration-->
        </div>
        <!--end::Empty-->
    </div>
    @endif
    <!--end::Wrapper-->
</div>