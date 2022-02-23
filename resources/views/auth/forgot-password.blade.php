@extends('layouts.auth')
@section('title', 'Forgot Password')
@section('content')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/illustrations/sigma-1/14.png">
        <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            {{-- <a href="../../demo10/dist/index.html" class="mb-12">
            <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
            </a> --}}
            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form class="form w-100" novalidate="novalidate" id="kt_password_reset_form" action="/forgot-password" method="POST">
                    @csrf
                    <div class="text-center mb-10">
                        <h1 class="text-dark mb-3">Forgot Password ?</h1>
                        <div class="text-gray-400 fw-bold fs-4">Enter your email to reset your password.</div>
                    </div>
                    @include('partials.layout.alert')
                    @if (session('status'))
                       <p class="alert alert-success">{{ session('status') }}</p>
                    @endif
                    <div class="fv-row mb-10">
                        <label class="form-label fw-bolder text-gray-900 fs-6">Email</label>
                        <input class="form-control form-control-solid" type="email" placeholder="" name="email" autocomplete="off" />
                    </div>
                    <div class="d-flex flex-wrap justify-content-center pb-lg-0">
                        <button type="submit" {{-- id="kt_password_reset_submit" --}} class="btn btn-lg btn-primary fw-bolder me-4">
                        {{-- <span class="indicator-label">Submit</span>
                        <span class="indicator-progress">Please wait...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span> --}}Send link
                        </button>
                        <a href="/" class="btn btn-lg btn-light-primary fw-bolder">Cancel</a>
                    </div>
                </form>
            </div>
        </div>
        <div class="d-flex flex-center flex-column-auto p-10">
            <div class="d-flex align-items-center fw-bold fs-6">
                <a href="https://certhub.co/about" target="_blank" class="text-muted text-hover-primary px-2">About</a>
                <a href="https://certhub.co/contact" target="_blank" class="text-muted text-hover-primary px-2">Contact Us</a>
            </div>
        </div>
    </div>
</div>
@endsection
