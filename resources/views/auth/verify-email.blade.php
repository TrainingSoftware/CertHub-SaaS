@extends('layouts.auth')
@section('title', 'Set new password')

@section('content')
<div class="d-flex flex-column flex-root">
    <!--begin::Authentication - Signup Verify Email -->
    <div class="d-flex flex-column flex-column-fluid">
        <!--begin::Content-->
        <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
           {{--  <!--begin::Logo-->
            <a href="../../demo10/dist/index.html" class="mb-10 pt-lg-10">
                <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px mb-5" />
            </a>
            <!--end::Logo--> --}}
            <!--begin::Wrapper-->
            <div class="pt-lg-10 mb-10">
                <!--begin::Logo-->
                <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Verify Your Email</h1>
                <!--end::Logo-->
                <!--begin::Message-->
                <div class="fs-3 fw-bold text-muted mb-10">We have sent an email to
                <a href="#" class="link-primary fw-bolder">{{ Auth::user()->email}}</a>
                <br />please follow a link to verify your email.</div>
                <!--end::Message-->
                {{-- <!--begin::Action-->
                <div class="text-center mb-10">
                    <a href="/dashboard" class="btn btn-lg btn-primary fw-bolder">Skip for now</a>
                </div>
                <!--end::Action--> --}}
                <!--begin::Action-->
                <div class="fs-5">
                    <form method="POST" action="/email/verification-notification">
                        @csrf
                        <span class="fw-bold text-gray-700">Did’t receive an email?</span>
                        <button type="submit" class="btn btn-link fw-bolder">Resend</button>
                    </form>
                </div>
                <!--end::Action-->
            </div>
            <!--end::Wrapper-->
            <!--begin::Illustration-->
            <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style="background-image: url(assets/media/illustrations/sigma-1/17.png"></div>
            <!--end::Illustration-->
        </div>
        <!--end::Content-->
        <!--begin::Footer-->
        <div class="d-flex flex-center flex-column-auto p-10">
            <!--begin::Links-->
            <div class="d-flex align-items-center fw-bold fs-6">
                <a href="https://keenthemes.com" class="text-muted text-hover-primary px-2">About</a>
                <a href="mailto:support@keenthemes.com" class="text-muted text-hover-primary px-2">Contact</a>
                <a href="https://1.envato.market/EA4JP" class="text-muted text-hover-primary px-2">Contact Us</a>
            </div>
            <!--end::Links-->
        </div>
        <!--end::Footer-->
    </div>
    <!--end::Authentication - Signup Verify Email-->
</div>
@endsection
