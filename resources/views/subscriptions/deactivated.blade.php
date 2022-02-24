@extends('layouts.auth')
@section('title', 'Verify your email')
@section('content')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-column-fluid">
        <div class="d-flex flex-column flex-column-fluid text-center p-10 py-lg-15">
            <a href="/" class="mb-10 pt-lg-10">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentScriptType="text/ecmascript" width="150" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 375 149.999998" preserveAspectRatio="xMidYMid meet" version="1.0">
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
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="20.221978" y="98.510383" xlink:href="#glyph-0-1" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="75.737824" y="98.510383" xlink:href="#glyph-0-2" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="120.990164" y="98.510383" xlink:href="#glyph-0-3" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="150.069702" y="98.510383" xlink:href="#glyph-0-4" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="178.449457" y="98.510383" xlink:href="#glyph-0-5" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="233.887553" y="98.510383" xlink:href="#glyph-0-6" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="#002745" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="284.427154" y="98.510383" xlink:href="#glyph-0-7" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                    <g fill="rgb(3.529358%, 41.178894%, 76.469421%)" fill-opacity="1">
                        <use xmlns:xlink="http://www.w3.org/1999/xlink" x="334.800084" y="98.510383" xlink:href="#glyph-0-8" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                    </g>
                </svg>
            </a>
            <div class="pt-lg-10 mb-10">
                <h1 class="fw-bolder fs-2qx text-gray-800 mb-7">Account deactivated</h1>
                <div class="fs-3 fw-bold text-muted mb-10">Your account is currently deactivated.<br>To access your account, please subscribe to a plan.<br>
                    <a href="#" class="link-primary fw-bolder">Subscribe now</a>.
                </div>
                <div class="fs-5">
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