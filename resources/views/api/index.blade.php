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
                    <div class="row">
                        <div class="col-md-6 pb-10 pb-lg-0">
                            <h2>Get started...</h2>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                Are you looking to integrate CertHub with your existing workflow?<br>
                                Get started by generating a token below
                            </p>
                        </div>
                        <div class="col-md-6">
                            <h2>Developer Docs</h2>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                For developers, you can view our postman documentation here.
                            </p>
                            <p class="fs-6 fw-bold text-gray-600 py-2">
                                For support please email <a href="mailto:api@certhub.co">api@certhub.co</a>
                            </p>
                            <a href="#" class="btn btn-light btn-active-light-primary">View docs</a>
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
                                    <td>{{ $item->created_at->format('d/m/Y') }}</td>
                                    <td>
                                        <span class="badge badge-light-success fs-7 fw-bold">Active</span>
                                    </td>
                                    <td class="pe-9">
                                        <div class="w-100px position-relative">
                                        <button class="btn btn-danger align-self-center" data-bs-toggle="modal" data-bs-target="#kt_modal_confirm_delete{{ $item->id }}">Delete</button>
                                        <div class="modal fade" id="kt_modal_confirm_delete{{ $item->id }}" tabindex="-1" aria-hidden="true">
                                        <div class="modal-dialog modal-dialog-centered mw-800px">
                                            <div class="modal-content">
                                                <div class="modal-header pb-0 border-0 justify-content-end">
                                                    <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                                                        <span class="svg-icon svg-icon-1">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                                                                <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div class="modal-body scroll-y pt-0 pb-15">
                                                    <div class="mw-lg-600px mx-auto">
                                                        <div class="text-center">
                                                            <h1 class="mb-3">Delete <span class="text-danger">{{ $item->name }}</span>?</h1>
                                                            <div class="text-muted fw-bold fs-5">
                                                                Are you sure you want to delete {{ $item->name }}? This action cannot be undone.
                                                            </div>
                                                            <div class="text-center mt-10">
                                                                <form action="/settings/personal-access-tokens/{{ $item->id }}/destroy" method="POST" class="d-inline"> 
                                                                    @csrf
                                                                    <button class="btn btn-danger fw-bolder" type="submit">Confirm delete</button>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
