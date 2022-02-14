@extends('layouts.app')
@section('title', 'API Keys')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">API Tokens</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">Settings</li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">API</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xxl-10">
                <div class="card-header">
                    <div class="card-title">
                        <h3>API Overview</h3>
                    </div>
                </div>
                <div class="card-body py-10">
                    <div class="row mb-10">
                        <div class="col-md-6 pb-10 pb-lg-0">
                            <h2>Get started...</h2>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                Are you looking to integrate CertHub with your existing workflow?<br>
                                Get started with our developer docs...
                            </p>
                            <a href="#" class="btn btn-light btn-active-light-primary">Get Started</a>
                        </div>
                        <div class="col-md-6">
                            <h2>Developer Tools</h2>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                Plan your blog post by choosing a topic, creating an outline conduct
                                <br>research, and checking facts
                            </p>
                            <a href="#" class="btn btn-light btn-active-light-primary">Create Rule</a>
                        </div>
                    </div>
                    <div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
                        <span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path opacity="0.3" d="M22 19V17C22 16.4 21.6 16 21 16H8V3C8 2.4 7.6 2 7 2H5C4.4 2 4 2.4 4 3V19C4 19.6 4.4 20 5 20H21C21.6 20 22 19.6 22 19Z" fill="black"></path>
                                <path d="M20 5V21C20 21.6 19.6 22 19 22H17C16.4 22 16 21.6 16 21V8H8V4H19C19.6 4 20 4.4 20 5ZM3 8H4V4H3C2.4 4 2 4.4 2 5V7C2 7.6 2.4 8 3 8Z" fill="black"></path>
                            </svg>
                        </span>
                        <div class="d-flex flex-stack flex-grow-1">
                            <div class="fw-bold">
                                <div class="fs-6 text-gray-700">Two-factor authentication adds an extra layer of security to your account. To log in, in you'll need to provide a 4 digit amazing and create outstanding products to serve your clients
                                    <a class="fw-bolder" href="#">Learn More</a>.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            @if(Auth::user()->tokens->count() == 0 )
            <div class="card">
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">Create your first Token</h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            It looks like you have not created a token yet...
                        </p>
                        <a href="/settings/personal-access-tokens/create" class="btn btn-primary">Create Token</a>
                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
            </div>
            @else
            <div class="card">
                <div class="card-header border-0 py-6">
                    <div class="card-title">
                        <h3>API Keys</h3>
                    </div>
                    <div class="card-toolbar">
                        <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                            <a href="/settings/personal-access-tokens/create" class="btn btn-primary">
                                <span class="svg-icon svg-icon-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                        <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                    </svg>
                                </span>
                                Create Token
                            </a>
                        </div>
                    </div>
                </div>
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table table-flush align-middle table-row-bordered table-row-solid gy-4 gs-9" id="kt_api_keys_table">
                            <thead class="border-gray-200 fs-5 fw-bold bg-lighten">
                                <tr>
                                    <th class="w-250px min-w-175px ps-9">Label</th>
                                    <th class="w-275px min-w-250px px-0">API Keys</th>
                                    <th class="w-125px min-w-125px"></th>
                                    <th class="min-w-125px min-w-125px">Created</th>
                                    <th class="min-w-125px">Status</th>
                                    <th class="w-100px"></th>
                                </tr>
                            </thead>
                            <tbody class="fs-6 fw-bold text-gray-600">
                                @foreach($tokens as $item)
                                <tr>
                                    <td class="ps-9">
                                        {{ $item->name }}
                                    </td>
                                    <td data-bs-target="license" class="ps-0">
                                        {{ $item->plainTextToken }}
                                    </td>
                                    <td>
                                        <button data-action="copy" class="btn btn-active-color-primary btn-icon btn-sm btn-outline-light">
                                            <span class="svg-icon svg-icon-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                    <path opacity="0.5" d="M18 2H9C7.34315 2 6 3.34315 6 5H8C8 4.44772 8.44772 4 9 4H18C18.5523 4 19 4.44772 19 5V16C19 16.5523 18.5523 17 18 17V19C19.6569 19 21 17.6569 21 16V5C21 3.34315 19.6569 2 18 2Z" fill="black" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7857 7.125H6.21429C5.62255 7.125 5.14286 7.6007 5.14286 8.1875V18.8125C5.14286 19.3993 5.62255 19.875 6.21429 19.875H14.7857C15.3774 19.875 15.8571 19.3993 15.8571 18.8125V8.1875C15.8571 7.6007 15.3774 7.125 14.7857 7.125ZM6.21429 5C4.43908 5 3 6.42709 3 8.1875V18.8125C3 20.5729 4.43909 22 6.21429 22H14.7857C16.5609 22 18 20.5729 18 18.8125V8.1875C18 6.42709 16.5609 5 14.7857 5H6.21429Z" fill="black" />
                                                </svg>
                                            </span>
                                        </button>
                                    </td>
                                    <td>{{ $item->created_at->format('d/m/Y') }}</td>
                                    <td>
                                        <span class="badge badge-light-success fs-7 fw-bold">Active</span>
                                    </td>
                                    <td class="pe-9">
                                        <div class="w-100px position-relative">
                                            <form action="/settings/personal-access-tokens/{{ $item->id }}/destroy" method="POST">
                                                @csrf
                                                <button type="submit" class="btn btn-danger btn-block btn-small">Delete</button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            @endif
        </div>
    </div>
</div>
@if(session('token'))
    @include('partials.api.token-modal')
@endif
@endsection
