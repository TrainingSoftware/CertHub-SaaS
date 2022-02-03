@extends('layouts.auth')
@section('title', 'Register')
@section('content')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/illustrations/sigma-1/14.png">
        <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
            {{-- <a href="../../demo10/dist/index.html" class="mb-12">
            <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px" />
            </a> --}}
            <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                <form class="form w-100" novalidate="novalidate" id="kt_sign_in_form" action="/register" method="POST">
                    @csrf
                    <div class="text-center mb-10">
                        <h1 class="text-dark mb-3">Register for CertHub</h1>
                        <div class="text-gray-400 fw-bold fs-4">Already have an account?
                            <a href="/login" class="link-primary fw-bolder">Login</a>
                        </div>
                    </div>
                    @include('partials.layout.alert')
                    <div class="fv-row mb-10">
                        <label class="form-label fs-6 fw-bolder text-dark">Your name</label>
                        <input class="form-control form-control-lg form-control-solid" type="text" name="name" value="{{ old('name') }}" autocomplete="off" />
                    </div>
                    <div class="fv-row mb-10">
                        <label class="form-label fs-6 fw-bolder text-dark">Your email</label>
                        <input class="form-control form-control-lg form-control-solid" type="email" name="email" value="{{ old('email') }}" autocomplete="off" />
                    </div>
                    <div class="mb-10 fv-row" data-kt-password-meter="true">
                        <div class="mb-1">
                            <label class="form-label fw-bolder text-dark fs-6">Create a password</label>
                            <div class="position-relative mb-3">
                                <input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password" autocomplete="off" />
                                <span class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2" data-kt-password-meter-control="visibility">
                                <i class="bi bi-eye-slash fs-2"></i>
                                <i class="bi bi-eye fs-2 d-none"></i>
                                </span>
                            </div>
                            <div class="d-flex align-items-center mb-3" data-kt-password-meter-control="highlight">
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                                <div class="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                            </div>
                        </div>
                        <div class="text-muted"><i><strong>Tip</strong>: Use 8 or more characters with a mix of letters, numbers &amp; symbols.</i></div>
                    </div>
                    <div class="fv-row mb-10">
                        <label class="form-label fw-bolder text-dark fs-6">Confirm your password</label>
                        <input class="form-control form-control-lg form-control-solid" type="password" placeholder="" name="password_confirmation" autocomplete="off" />
                    </div>
                    <div class="text-center">
                        <button type="submit" {{-- id="kt_sign_in_submit" --}} class="btn btn-lg btn-primary w-100 mb-5"> Continue
                        </button>
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