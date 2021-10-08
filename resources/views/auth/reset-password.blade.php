@extends('layouts.auth')
@section('title', 'Set new password')

@section('content')
<div class="d-flex flex-column flex-root">
    <!--begin::Authentication - New password -->
    <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/illustrations/sigma-1/14.png">
        <!--begin::Content-->
        <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
           {{--  <!--begin::Logo-->
            <a href="../../demo10/dist/index.html" class="mb-12">
                <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
            </a>
            <!--end::Logo--> --}}
            <!--begin::Wrapper-->
            <div class="w-lg-550px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <!--begin::Form-->
                <form class="form w-100" novalidate="novalidate" id="kt_new_password_form" action="/reset-password" method="POST">
                    @csrf
                    <input type="hidden" name="token" value="{{ request()->route('token') }}" />
                    <!--begin::Heading-->
                    <div class="text-center mb-10">
                        <!--begin::Title-->
                        <h1 class="text-dark mb-3">Setup New Password</h1>
                        <!--end::Title-->
                        <!--begin::Link-->
                        <div class="text-gray-400 fw-bold fs-4">Already have reset your password ?
                        <a href="/login" class="link-primary fw-bolder">Sign in here</a></div>
                        <!--end::Link-->
                    </div>
                    <!--begin::Heading-->
                    @include('partials.layout.alert')
                    <div class="mb-10 fv-row">
                        <!--begin::Wrapper-->
                        <div class="mb-1">
                            <!--begin::Label-->
                            <label class="form-label fw-bolder text-dark fs-6">Email</label>
                            <!--end::Label-->
                            <!--begin::Input wrapper-->
                            <div class="position-relative mb-3">
                                <input class="form-control form-control-lg form-control-solid" type="email" placeholder="" name="email" autocomplete="off"/>
                            </div>
                            <!--end::Input wrapper-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Hint-->
                        <div class="text-muted">This is the email address you usually use to login to your account</div>
                        <!--end::Hint-->
                    </div>
                    <!--begin::Input group-->
                    <div class="mb-10 fv-row" data-kt-password-meter="true">
                        <!--begin::Wrapper-->
                        <div class="mb-1">
                            <!--begin::Label-->
                            <label class="form-label fw-bolder text-dark fs-6">Password</label>
                            <!--end::Label-->
                            <!--begin::Input wrapper-->
                            <div class="position-relative mb-3">
                                <input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
                                <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                    <i class="bi bi-eye-slash fs-2"></i>
                                    <i class="bi bi-eye fs-2 d-none"></i>
                                </span>
                            </div>
                            <!--end::Input wrapper-->
                            <!--begin::Meter-->
                            <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                            </div>
                            <!--end::Meter-->
                        </div>
                        <!--end::Wrapper-->
                        <!--begin::Hint-->
                        <div class="text-muted">Use 8 or more characters with a mix of letters, numbers &amp; symbols.</div>
                        <!--end::Hint-->
                    </div>
                    <!--end::Input group=-->
                    <!--begin::Input group=-->
                    <div class="fv-row mb-10">
                        <label class="form-label fw-bolder text-dark fs-6">Confirm Password</label>
                        <input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password_confirmation" autocomplete="off" />
                    </div>
                    <!--end::Input group=-->
                    <!--begin::Action-->
                    <div class="text-center">
                        <button type="submit" class="btn btn-lg btn-primary fw-bolder">Update Password
                        </button>
                    </div>
                    <!--end::Action-->
                </form>
                <!--end::Form-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Content-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-column-auto p-10">
            <!--begin::Links-->
            <div class="d-flex align-items-center fw-bold fs-6">
                <a href="#" class="text-muted text-hover-primary px-2">About</a>
                <a href="#" class="text-muted text-hover-primary px-2">Contact</a>
                <a href="#" class="text-muted text-hover-primary px-2">Contact Us</a>
            </div>
            <!--end::Links-->
        </div>
        <!--end::Footer-->
    </div>
    <!--end::Authentication - New password-->
</div>
@endsection
