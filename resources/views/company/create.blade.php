@extends('layouts.auth')
@section('title', 'Your Company Details')
@section('content')
<div class="d-flex flex-column flex-root">
    <!--begin::Authentication - Multi-steps-->
    <div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
        <!--begin::Aside-->
        <div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
            <!--begin::Wrapper-->
            <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y">
                <!--begin::Header-->
                <div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20">
                    <!--begin::Logo-->
                    <a href="../../demo10/dist/index.html" class="mb-10 mb-lg-20">
                        <img alt="Logo" src="/assets/media/logos/logo-1.svg" class="h-40px" />
                    </a>
                    <!--end::Logo-->
                    <!--begin::Nav-->
                    <div class="stepper-nav">
                        <!--begin::Step 1-->
                        <div class="stepper-item current" data-kt-stepper-element="nav">
                            <!--begin::Line-->
                            <div class="stepper-line w-40px"></div>
                            <!--end::Line-->
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">1</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                                <h3 class="stepper-title">Business Details</h3>
                                <div class="stepper-desc fw-bold">Setup Your Account Details</div>
                            </div>
                            <!--end::Label-->
                        </div>
                        <!--end::Step 1-->
                        <!--begin::Step 2-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <!--begin::Line-->
                            <div class="stepper-line w-40px"></div>
                            <!--end::Line-->
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">2</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                                <h3 class="stepper-title">Address</h3>
                                <div class="stepper-desc fw-bold">Setup Your Account Settings</div>
                            </div>
                            <!--end::Label-->
                        </div>
                        <!--end::Step 2-->
                        <!--begin::Step 5-->
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <!--begin::Line-->
                            <div class="stepper-line w-40px"></div>
                            <!--end::Line-->
                            <!--begin::Icon-->
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">5</span>
                            </div>
                            <!--end::Icon-->
                            <!--begin::Label-->
                            <div class="stepper-label">
                                <h3 class="stepper-title">Completed</h3>
                                <div class="stepper-desc fw-bold">Woah, we are here</div>
                            </div>
                            <!--end::Label-->
                        </div>
                        <!--end::Step 5-->
                    </div>
                    <!--end::Nav-->
                </div>
                <!--end::Header-->
                <!--begin::Illustration-->
                <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px" style="background-image: url(assets/media/illustrations/sigma-1/16.png"></div>
                <!--end::Illustration-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--begin::Aside-->
        <!--begin::Body-->
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
            <!--begin::Content-->
            <div class="d-flex flex-center flex-column flex-column-fluid">
                <!--begin::Wrapper-->
                <div class="w-lg-700px p-10 p-lg-15 mx-auto">
                    {{ HTML::ul($errors->all()) }}
                    <!--begin::Form-->
                    <form class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form" method="POST" action="/company">
                        <!--begin::Step 1-->
                        <div class="current" data-kt-stepper-element="content">
                            @csrf
                            <input type="hidden" name="user_id" value="{{ Auth::user()->id }}"/>
                            <!--begin::Wrapper-->
                            <div class="w-100">
                                <!--begin::Heading-->
                                <div class="pb-10 pb-lg-12">
                                    <!--begin::Title-->
                                    <h2 class="fw-bolder text-dark">Business Details</h2>
                                    <!--end::Title-->
                                    <!--begin::Notice-->
                                    <div class="text-muted fw-bold fs-6">If you need more info, please check out
                                    <a href="#" class="link-primary fw-bolder">Help Page</a>.</div>
                                    <!--end::Notice-->
                                </div>
                                <!--end::Heading-->
                                <!--begin::Input group-->
                                <div class="fv-row mb-10">
                                    <!--begin::Label-->
                                    <label class="form-label required">Business Name</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <input name="name" class="form-control form-control-lg form-control-solid" value="{{ Input::old('name') }}" />
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="fv-row mb-10">
                                    <!--begin::Label-->
                                    <label class="form-label required">Corporation Type</label>
                                    <!--end::Label-->
                                    <!--begin::Input-->
                                    <select name="type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                        <option></option>
                                        <option value="Public limited company (PLC)">Public limited company (PLC)</option>
                                        <option value="Private company limited by shares (LTD)">Private company limited by shares (LTD)</option>
                                        <option value="Company limited by guarantee">Company limited by guarantee</option>
                                        <option value="Unlimited company (Unltd)">Unlimited company (Unltd)</option>
                                        <option value="Limited liability partnership (LLP)">Limited liability partnership (LLP)</option>
                                        <option value="Community interest company">Community interest company</option>
                                        <option value="Industrial and provident society (IPS)">Industrial and provident society (IPS)</option>
                                        <option value="Royal charter (RC)">Royal charter (RC)</option>
                                    </select>
                                    <!--end::Input-->
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="mb-10 fv-row">
                                    <!--begin::Label-->
                                    <label class="d-flex align-items-center form-label mb-3">Specify Team Size
                                    <i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Provide your team size to help us setup your billing"></i></label>
                                    <!--end::Label-->
                                    <!--begin::Row-->
                                    <div class="row mb-2" data-kt-buttons="true">
                                        <!--begin::Col-->
                                        <div class="col">
                                            <!--begin::Option-->
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                <input type="radio" class="btn-check" name="size" value="1-1" />
                                                <span class="fw-bolder fs-3">1-1</span>
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col">
                                            <!--begin::Option-->
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4 active">
                                                <input type="radio" class="btn-check" name="size" checked="checked" value="2-10" />
                                                <span class="fw-bolder fs-3">2-10</span>
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col">
                                            <!--begin::Option-->
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                <input type="radio" class="btn-check" name="size" value="10-50" />
                                                <span class="fw-bolder fs-3">10-50</span>
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Col-->
                                        <!--begin::Col-->
                                        <div class="col">
                                            <!--begin::Option-->
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default w-100 p-4">
                                                <input type="radio" class="btn-check" name="size" value="50+" />
                                                <span class="fw-bolder fs-3">50+</span>
                                            </label>
                                            <!--end::Option-->
                                        </div>
                                        <!--end::Col-->
                                    </div>
                                    <!--end::Row-->
                                    <!--begin::Hint-->
                                    <div class="form-text">Customers will see this shortened version of your statement descriptor</div>
                                    <!--end::Hint-->
                                </div>
                                <!--end::Input <group-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Step 1-->
                        <!--begin::Step 2-->
                        <div class="" data-kt-stepper-element="content">
                            <!--begin::Wrapper-->
                            <div class="w-100">
                                <!--begin::Heading-->
                                <div class="pb-10 pb-lg-15">
                                    <!--begin::Title-->
                                    <h2 class="fw-bolder text-dark">Address</h2>
                                    <!--end::Title-->
                                    <!--begin::Notice-->
                                    <div class="text-muted fw-bold fs-6">If you need more info, please check out
                                    <a href="#" class="link-primary fw-bolder">Help Page</a>.</div>
                                    <!--end::Notice-->
                                </div>
                                <!--end::Heading-->

                                <!--begin::Input group-->
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Building Name / Number</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="line_1" class="form-control form-control-lg form-control-solid" value="{{ Input::old('line_1') }}" />
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Line 2</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="line_2" class="form-control form-control-lg form-control-solid" value="{{ Input::old('line_2') }}" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                                <!--begin::Input group-->
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Town</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="town" class="form-control form-control-lg form-control-solid" value="" />
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">County</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="county" class="form-control form-control-lg form-control-solid" value="" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--begin::Input group-->
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Postcode</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="postcode" class="form-control form-control-lg form-control-solid" value="" />
                                        <!--end::Input-->
                                    </div>
                                    <div class="form-group col-md-6">
                                        <!--begin::Label-->
                                        <label class="d-flex align-items-center form-label">
                                            <span class="required">Country</span>
                                        </label>
                                        <!--end::Label-->
                                        <!--begin::Input-->
                                        <input name="country" class="form-control form-control-lg form-control-solid" value="" />
                                        <!--end::Input-->
                                    </div>
                                </div>
                                <!--end::Input group-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Step 2-->
                        <!--begin::Step 5-->
                        <div class="" data-kt-stepper-element="content">
                            <!--begin::Wrapper-->
                            <div class="w-100">
                                <!--begin::Heading-->
                                <div class="pb-8 pb-lg-10">
                                    <!--begin::Title-->
                                    <h2 class="fw-bolder text-dark">Your Are Done!</h2>
                                    <!--end::Title-->
                                    <!--begin::Notice-->
                                    <div class="text-muted fw-bold fs-6">If you need more info, please
                                    <a href="../../demo10/dist/authentication/sign-in/basic.html" class="link-primary fw-bolder">Sign In</a>.</div>
                                    <!--end::Notice-->
                                </div>
                                <!--end::Heading-->
                                <!--begin::Body-->
                                <div class="mb-0">
                                    <!--begin::Text-->
                                    <div class="fs-6 text-gray-600 mb-5">Writing headlines for blog posts is as much an art as it is a science and probably warrants its own post, but for all advise is with what works for your great &amp; amazing audience.</div>
                                    <!--end::Text-->
                                    <!--begin::Alert-->
                                    <!--begin::Notice-->
                                    <div class="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6">
                                        <!--begin::Icon-->
                                        <!--begin::Svg Icon | path: icons/duotune/general/gen044.svg-->
                                        <span class="svg-icon svg-icon-2tx svg-icon-warning me-4">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.3" x="2" y="2" width="20" height="20" rx="10" fill="black" />
                                                <rect x="11" y="14" width="7" height="2" rx="1" transform="rotate(-90 11 14)" fill="black" />
                                                <rect x="11" y="17" width="2" height="2" rx="1" transform="rotate(-90 11 17)" fill="black" />
                                            </svg>
                                        </span>
                                        <!--end::Svg Icon-->
                                        <!--end::Icon-->
                                        <!--begin::Wrapper-->
                                        <div class="d-flex flex-stack flex-grow-1">
                                            <!--begin::Content-->
                                            <div class="fw-bold">
                                                <h4 class="text-gray-900 fw-bolder">We need your attention!</h4>
                                                <div class="fs-6 text-gray-700">To start using great tools, please, please
                                                <a href="#" class="fw-bolder">Create Team Platform</a></div>
                                            </div>
                                            <!--end::Content-->
                                        </div>
                                        <!--end::Wrapper-->
                                    </div>
                                    <!--end::Notice-->
                                    <!--end::Alert-->
                                </div>
                                <!--end::Body-->
                            </div>
                            <!--end::Wrapper-->
                        </div>
                        <!--end::Step 5-->
                        <!--begin::Actions-->
                        <div class="d-flex flex-stack pt-15">
                            <div class="mr-2">
                                <button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr063.svg-->
                                <span class="svg-icon svg-icon-4 me-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
                                        <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon-->Previous</button>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                    <span class="indicator-label">Submit
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                    <span class="svg-icon svg-icon-4 ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                    <!--end::Svg Icon--></span>
                                    <span class="indicator-progress">Please wait...
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button>
                                <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                                <!--begin::Svg Icon | path: icons/duotune/arrows/arr064.svg-->
                                <span class="svg-icon svg-icon-4 ms-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                        <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                    </svg>
                                </span>
                                <!--end::Svg Icon--></button>
                            </div>
                        </div>
                        <!--end::Actions-->
                    </form>
                    <!--end::Form-->
                </div>
                <!--end::Wrapper-->
            </div>
            <!--end::Content-->
            <!--begin::Footer-->
            <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                <!--begin::Links-->
                <div class="d-flex flex-center fw-bold fs-6">
                    <a href="#" class="text-muted text-hover-primary px-2" target="_blank">About</a>
                    <a href="#" class="text-muted text-hover-primary px-2" target="_blank">Support</a>
                    <a href="#" class="text-muted text-hover-primary px-2" target="_blank">Purchase</a>
                </div>
                <!--end::Links-->
            </div>
            <!--end::Footer-->
        </div>
        <!--end::Body-->
    </div>
    <!--end::Authentication - Multi-steps-->
</div>
@endsection
