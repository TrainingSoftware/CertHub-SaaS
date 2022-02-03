@extends('layouts.auth')
@section('content')
@include('partials.layout.alert')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
        <div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
            <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y">
                <div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20">
                    <a href="/" class="mb-10 mb-lg-20">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentScriptType="text/ecmascript" width="200" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 375 149.999998" preserveAspectRatio="xMidYMid meet" version="1.0">
                            <defs>
                                <g>
                                    <g id="glyph-0-0"/>
                                    <g id="glyph-0-1">
                                        <path d="M 10.765625 -7.421875 C 5.347656 -12.679688 2.640625 -19.351562 2.640625 -27.4375 C 2.640625 -35.53125 5.347656 -42.207031 10.765625 -47.46875 C 16.179688 -52.738281 22.804688 -55.375 30.640625 -55.375 C 36.703125 -55.375 42.09375 -53.765625 46.8125 -50.546875 C 51.53125 -47.328125 54.820312 -42.867188 56.6875 -37.171875 L 40.828125 -37.171875 C 38.753906 -41.160156 35.4375 -43.15625 30.875 -43.15625 C 26.3125 -43.15625 22.71875 -41.726562 20.09375 -38.875 C 17.476562 -36.03125 16.171875 -32.222656 16.171875 -27.453125 C 16.171875 -22.679688 17.476562 -18.867188 20.09375 -16.015625 C 22.71875 -13.171875 26.3125 -11.75 30.875 -11.75 C 35.4375 -11.75 38.753906 -13.742188 40.828125 -17.734375 L 56.6875 -17.734375 C 54.820312 -12.023438 51.53125 -7.5625 46.8125 -4.34375 C 42.09375 -1.132812 36.703125 0.46875 30.640625 0.46875 C 22.804688 0.46875 16.179688 -2.160156 10.765625 -7.421875 Z M 10.765625 -7.421875 "/>
                                    </g>
                                    <g id="glyph-0-2">
                                        <path d="M 24.265625 0.546875 C 17.941406 0.546875 12.753906 -1.488281 8.703125 -5.5625 C 4.660156 -9.632812 2.640625 -15.039062 2.640625 -21.78125 C 2.640625 -28.519531 4.648438 -33.882812 8.671875 -37.875 C 12.691406 -41.863281 17.890625 -43.859375 24.265625 -43.859375 C 30.640625 -43.859375 35.925781 -41.890625 40.125 -37.953125 C 44.320312 -34.015625 46.421875 -28.546875 46.421875 -21.546875 C 46.421875 -20.035156 46.316406 -18.632812 46.109375 -17.34375 L 16.25 -17.34375 C 16.507812 -15.425781 17.363281 -13.859375 18.8125 -12.640625 C 20.269531 -11.421875 21.835938 -10.8125 23.515625 -10.8125 C 25.203125 -10.8125 26.460938 -10.976562 27.296875 -11.3125 C 28.128906 -11.65625 28.738281 -11.992188 29.125 -12.328125 C 29.507812 -12.660156 30.015625 -13.21875 30.640625 -14 L 45.03125 -14 C 43.78125 -9.644531 41.289062 -6.128906 37.5625 -3.453125 C 33.832031 -0.785156 29.398438 0.546875 24.265625 0.546875 Z M 32.578125 -25.65625 C 32.367188 -27.6875 31.488281 -29.332031 29.9375 -30.59375 C 28.382812 -31.863281 26.546875 -32.5 24.421875 -32.5 C 22.296875 -32.5 20.503906 -31.863281 19.046875 -30.59375 C 17.597656 -29.332031 16.691406 -27.6875 16.328125 -25.65625 Z M 32.578125 -25.65625 "/>
                                    </g>
                                    <g id="glyph-0-3">
                                        <path d="M 19.125 -43.390625 L 19.125 -35.3125 C 22.238281 -41.007812 26.390625 -43.859375 31.578125 -43.859375 L 31.578125 -30.328125 L 28.3125 -30.328125 C 25.25 -30.328125 22.953125 -29.597656 21.421875 -28.140625 C 19.890625 -26.691406 19.125 -24.15625 19.125 -20.53125 L 19.125 0 L 5.828125 0 L 5.828125 -43.390625 Z M 19.125 -43.390625 "/>
                                    </g>
                                    <g id="glyph-0-4">
                                        <path d="M 24.265625 -11.28125 L 29 -11.28125 L 29 0 L 22.234375 0 C 17.367188 0 13.597656 -1.070312 10.921875 -3.21875 C 8.253906 -5.375 6.921875 -9.070312 6.921875 -14.3125 L 6.921875 -32.34375 L 2.875 -32.34375 L 2.875 -43.390625 L 6.921875 -43.390625 L 6.921875 -53.96875 L 20.21875 -53.96875 L 20.21875 -43.390625 L 28.921875 -43.390625 L 28.921875 -32.34375 L 20.21875 -32.34375 L 20.21875 -14.3125 C 20.21875 -12.289062 21.566406 -11.28125 24.265625 -11.28125 Z M 24.265625 -11.28125 "/>
                                    </g>
                                    <g id="glyph-0-5">
                                        <path d="M 40.203125 -54.59375 L 53.5 -54.59375 L 53.5 0 L 40.203125 0 L 40.203125 -22.625 L 19.125 -22.625 L 19.125 0 L 5.828125 0 L 5.828125 -54.59375 L 19.125 -54.59375 L 19.125 -32.734375 L 40.203125 -32.734375 Z M 40.203125 -54.59375 "/>
                                    </g>
                                    <g id="glyph-0-6">
                                        <path d="M 35.3125 -43.390625 L 48.609375 -43.390625 L 48.609375 0 L 35.3125 0 L 35.3125 -6.375 C 32.5625 -1.8125 28.175781 0.46875 22.15625 0.46875 C 17.1875 0.46875 13.15625 -1.1875 10.0625 -4.5 C 6.976562 -7.820312 5.4375 -12.335938 5.4375 -18.046875 L 5.4375 -43.390625 L 18.65625 -43.390625 L 18.65625 -19.828125 C 18.65625 -17.023438 19.394531 -14.859375 20.875 -13.328125 C 22.351562 -11.804688 24.390625 -11.046875 26.984375 -11.046875 C 29.578125 -11.046875 31.613281 -11.804688 33.09375 -13.328125 C 34.570312 -14.859375 35.3125 -17.023438 35.3125 -19.828125 Z M 35.3125 -43.390625 "/>
                                    </g>
                                    <g id="glyph-0-7">
                                        <path d="M 35.21875 -13.71875 C 37.144531 -15.5625 38.109375 -18.191406 38.109375 -21.609375 C 38.109375 -25.035156 37.144531 -27.679688 35.21875 -29.546875 C 33.300781 -31.410156 31.097656 -32.34375 28.609375 -32.34375 C 26.128906 -32.34375 23.925781 -31.421875 22 -29.578125 C 20.082031 -27.742188 19.125 -25.113281 19.125 -21.6875 C 19.125 -18.269531 20.082031 -15.628906 22 -13.765625 C 23.925781 -11.898438 26.128906 -10.96875 28.609375 -10.96875 C 31.097656 -10.96875 33.300781 -11.882812 35.21875 -13.71875 Z M 19.125 -37.71875 C 22.082031 -41.8125 26.320312 -43.859375 31.84375 -43.859375 C 37.363281 -43.859375 42.039062 -41.769531 45.875 -37.59375 C 49.71875 -33.425781 51.640625 -28.097656 51.640625 -21.609375 C 51.640625 -15.128906 49.71875 -9.816406 45.875 -5.671875 C 42.039062 -1.523438 37.398438 0.546875 31.953125 0.546875 C 26.515625 0.546875 22.238281 -1.734375 19.125 -6.296875 L 19.125 0 L 5.828125 0 L 5.828125 -57.546875 L 19.125 -57.546875 Z M 19.125 -37.71875 "/>
                                    </g>
                                    <g id="glyph-0-8">
                                        <path d="M 17.265625 -7.265625 C 17.265625 -5.222656 16.5625 -3.5 15.15625 -2.09375 C 13.757812 -0.695312 12.035156 0 9.984375 0 C 7.941406 0 6.21875 -0.695312 4.8125 -2.09375 C 3.414062 -3.5 2.71875 -5.222656 2.71875 -7.265625 C 2.71875 -9.316406 3.414062 -11.039062 4.8125 -12.4375 C 6.21875 -13.84375 7.941406 -14.546875 9.984375 -14.546875 C 12.035156 -14.546875 13.757812 -13.84375 15.15625 -12.4375 C 16.5625 -11.039062 17.265625 -9.316406 17.265625 -7.265625 Z M 17.265625 -7.265625 "/>
                                    </g>
                                </g>
                            </defs>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="20.21127" y="97.217603" xlink:href="#glyph-0-1" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="75.733144" y="97.217603" xlink:href="#glyph-0-2" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="120.990471" y="97.217603" xlink:href="#glyph-0-3" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="150.073365" y="97.217603" xlink:href="#glyph-0-4" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="178.456401" y="97.217603" xlink:href="#glyph-0-5" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="233.900502" y="97.217603" xlink:href="#glyph-0-6" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="284.445615" y="97.217603" xlink:href="#glyph-0-7" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(3.529358%, 41.178894%, 76.469421%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="334.816023" y="97.217603" xlink:href="#glyph-0-8" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                        </svg>
                    </a>
                    <div class="stepper-nav min-w-75">
                        <div class="stepper-item">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="fas fa-check text-primary"></i>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Business Details</h3>
                                <div class="stepper-desc fw-bold">Setup Your Account Details</div>
                            </div>
                        </div>
                        <div class="stepper-item">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="fas fa-check text-primary"></i>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Address</h3>
                                <div class="stepper-desc fw-bold">Where is your company office?</div>
                            </div>
                        </div>
                        <div class="stepper-item current" data-kt-stepper-element="nav">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">3</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Choose Your Plan</h3>
                                <div class="stepper-desc fw-bold">Select the plan best for you</div>
                            </div>
                        </div>
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">4</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Billing Details</h3>
                                <div class="stepper-desc fw-bold">Set up your payment method</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px" style="background-image: url(assets/media/illustrations/sigma-1/16.png"></div>
            </div>
        </div>
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
            <div class="d-flex flex-center flex-column flex-column-fluid">
                <div class="w-lg-700px p-10 p-lg-15 mx-auto">
                    <form class="my-auto pb-5" id="payment-form" action="{{ route('payments.store') }}" method="POST">
                        <div class="current" data-kt-stepper-element="content">
                            @csrf
                            <input type="hidden" name="plan" id="plan" value="{{ request('plan') }}">
                            <div class="w-100">
                                <div class="pb-10 pb-lg-15">
                                    <h2 class="fw-bolder d-flex align-items-center text-dark">
                                    Choose Your Plan
                                </div>
                                <div class="fv-row">
                                    <div class="row">
                                        <div class="col-lg-6">
                                            <input type="radio" class="btn-check" name="account_type" value="personal" checked="checked" id="kt_create_account_form_account_type_personal" />
                                            <label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10 active" for="kt_create_account_form_account_type_personal">
                                                <span class="svg-icon svg-icon-3x me-5">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
                                                        <path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
                                                    </svg>
                                                </span>
                                                <span class="d-block fw-bold text-start">
                                                <span class="text-dark fw-bolder d-block fs-4 mb-2">Free</span>
                                                <span class="text-muted fw-bold fs-6">This is the best plan!</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="" data-kt-stepper-element="content">
                            <div class="w-100">
                                <div class="pb-10 pb-lg-15">
                                    <h2 class="fw-bolder text-dark">Billing Details</h2>
                                    <div class="text-muted fw-bold fs-6">Don't worry, you wont be charged! We just use your card details to verify you.</div>
                                </div>
                                <div class="mb-10 fv-row">
                                    <label class="form-label mb-3 required">Name on Card</label>
                                    <input type="text" name="name" id="card-holder-name" class="form-control" value="" placeholder="Name on the card " required>
                                </div>
                                <div class="mb-10 fv-row">
                                    <label class="form-label mb-3 required">Card Details</label>
                                    <div id="card-element" class="form-control"></div>
                                </div>
                            </div>
                        </div>
                        <div class="" data-kt-stepper-element="content">
                        </div>
                        <div class="d-flex flex-stack pt-15">
                            <div class="mr-2">
                                <button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                    <span class="svg-icon svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
                                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                                        </svg>
                                    </span>
                                    Previous
                                </button>
                            </div>
                            <div>
                                <button data-kt-stepper-action="submit" type="submit" class="btn btn-lg btn-primary" id="card-button" data-secret="{{ $intent->client_secret }}">
                                    <span class="indicator-label">Submit
                                    <span class="svg-icon svg-icon-4 ms-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                </button>
                                <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                    Continue
                                    <span class="svg-icon svg-icon-4 ms-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                <div class="d-flex flex-center fw-bold fs-6">
                    <a href="https://certhub.co/about" target="_blank" class="text-muted text-hover-primary px-2">About</a>
                    <a href="https://certhub.co/contact" target="_blank" class="text-muted text-hover-primary px-2">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
<script>
    const stripe = Stripe('{{ config('cashier.key') }}')
    
    const elements = stripe.elements()
    const cardElement = elements.create('card')
    
    cardElement.mount('#card-element')
    
    const form = document.getElementById('payment-form')
    const cardBtn = document.getElementById('card-button')
    const cardHolderName = document.getElementById('card-holder-name')
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault()
    
        cardBtn.disabled = true
        const { setupIntent, error } = await stripe.confirmCardSetup(
            cardBtn.dataset.secret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        name: cardHolderName.value
                    }
                }
            }
        )
    
        if(error) {
            cardBtn.disable = false
        } else {
            let token = document.createElement('input')
    
            token.setAttribute('type', 'hidden')
            token.setAttribute('name', 'token')
            token.setAttribute('value', setupIntent.payment_method)
    
            form.appendChild(token)
    
            form.submit();
        }
    })
</script>
@endsection