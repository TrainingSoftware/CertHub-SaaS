@extends('layouts.auth')
@section('title', 'Verify your email')
@section('content')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-column-fluid">
        <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
            {{--  
            <a href="../../demo10/dist/index.html" class="mb-10 pt-lg-10">
            <img alt="Logo" src="assets/media/logos/logo-1.svg" class="h-40px mb-5" />
            </a>
            --}}
            <div class="pt-lg-10 mb-10">
                <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Verify Your Email</h1>
                <div class="fs-3 fw-bold text-muted mb-10">We have sent an email to
                    <a href="#" class="link-primary fw-bolder">{{ Auth::user()->email}}</a>
                    <br />please follow a link to verify your email.
                </div>
                {{-- 
                <div class="text-center mb-10">
                    <a href="/dashboard" class="btn btn-lg btn-primary fw-bolder">Skip for now</a>
                </div>
                --}}
                <div class="fs-5">
                    <form method="POST" action="/email/verification-notification">
                        @csrf
                        <span class="fw-bold text-gray-700">Did’t receive an email?</span>
                        <button type="submit" class="btn btn-link fw-bolder">Resend</button>
                    </form>
                    <form action="/logout" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-link bg-transparent menu-link px-5">Sign Out</button>
                        </form>
                </div>
            </div>
            <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-100px min-h-lg-350px" style="background-image: url(assets/media/illustrations/sigma-1/17.png"></div>
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