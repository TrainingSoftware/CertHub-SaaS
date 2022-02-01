@extends('layouts.app')
@section('title', 'All Qualifications')
@section('content')
    <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
        <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
            <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
                <div class="page-title d-flex flex-column me-5 py-2">
                    <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Qualifications</h1>
                    <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                        <li class="breadcrumb-item text-muted">
                            <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                        </li>
                        <li class="breadcrumb-item">
                            <span class="bullet bg-gray-200 w-5px h-2px"></span>
                        </li>
                        <li class="breadcrumb-item text-dark">Qualifications</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="post d-flex flex-column-fluid" id="kt_post">
            <div id="kt_content_container" class="container-xxl">
                <div class="card">
                    @if(Auth::user()->companies->first()->qualifications->count() != 0 )
                    <div class="card-header border-0 pt-6">
                        <div class="card-title">
                            <div class="d-flex align-items-center position-relative my-1">
                                <span class="svg-icon svg-icon-1 position-absolute ms-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                                        <path
                                            d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                                            fill="black"
                                        />
                                    </svg>
                                </span>
                                <input type="text" data-kt-user-table-filter="search" class="form-control form-control-solid w-250px ps-14" placeholder="Search qualifications" />
                            </div>
                        </div>
                        <div class="card-toolbar">
                            <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                                <a href="/qualifications/create" class="btn btn-primary">
                                    <span class="svg-icon svg-icon-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
                                            <rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
                                        </svg>
                                    </span>
                                    Add Qualification
                                </a>
                            </div>
                        </div>
                    </div>
                    @endif
                    @if(Auth::user()->companies->first()->qualifications->count() == 0)
                        <div class="card-body p-0">
                            <div class="card-px text-center py-20 my-10">
                                <h2 class="fs-2x fw-bolder mb-10">
                                    Add Your First Qualification!
                                </h2>
                                <p class="text-gray-400 fs-4 fw-bold mb-10">
                                    It looks like you have a few outstanding tasks to do before you can add a qualification:
                                </p>
                                <ul class="list-unstyled mb-10 text-left">
                                    @if(Auth::user()->companies->first()->employees->count() == 0)
                                        <li class="h4 mb-4">
                                            <a href="/employees/create" class="fs-1.5x">Add your first Employee</a>
                                        </li>
                                    @else
                                        <li class="text-success h4 mb-4">
                                            <strike>Add your first Employee</strike>
                                        </li>
                                    @endif
                                    @if(Auth::user()->companies->first()->providers->count() == 0)
                                        <li class="h4 mb-4">
                                            <a href="/providers/create">Add your first Provider</a>
                                        </li>
                                    @else
                                        <li class="text-success h4 mb-4">
                                            <strike>Add your first Provider</strike>
                                        </li>
                                    @endif
                                    @if(Auth::user()->companies->first()->qualificationtypes->count() == 0)
                                        <li class="h4 mb-4">
                                            <a href="/qualificationtypes/create">Add your first Qualification Type</a>
                                        </li>
                                    @else
                                        <li class="text-success h4 mb-4">
                                            <strike>Add your first Qualification Type</strike>
                                        </li>
                                    @endif
                                </ul>
                                @if(Auth::user()->companies->first()->qualificationtypes->count() != 0 && Auth::user()->companies->first()->providers->count() != 0 && Auth::user()->companies->first()->employees->count() != 0)
                                    <a href="/qualifications/create" class="btn btn-primary">Add Qualification</a>
                                @endif
                            </div>
                            <div class="text-center px-4">
                                <img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
                            </div>
                        </div>
                    @else
                        <div class="card-body pt-0">
                            <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                                <thead>
                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                    <th class="w-10px pe-2">
                                        <div class="form-check form-check-sm form-check-custom form-check-solid me-3">
                                            <input class="form-check-input" type="checkbox" data-kt-check="true" data-kt-check-target="#kt_table_users .form-check-input" value="1" />
                                        </div>
                                    </th>
                                    <th class="min-w-100px">Type</th>
                                    <th class="min-w-100px">Employee</th>
                                    <th class="min-w-100px">Provider</th>
                                    <th class="min-w-50px">Status</th>
                                    <th class="min-w-100px">Expires on</th>
                                    <th class="min-w-15px"></th>
                                    <th class="text-end min-w-15px">Actions</th>
                                </tr>
                                </thead>
                                <tbody class="text-gray-600 fw-bold">
                                @foreach ($qualifications as $item)
                                    @if($item->employee->is_archived == 0)
                                    <tr>
                                        <td>
                                            <div class="form-check form-check-sm form-check-custom form-check-solid">
                                                <input class="form-check-input" type="checkbox" value="1" />
                                            </div>
                                        </td>
                                        <td class="d-flex align-items-center border-bottom-0">
                                            <a href="/qualifications/{{ $item->id }}" class="text-gray-800 text-hover-primary p-2">
                                                {{ $item->qualificationtype->name }}
                                            </a>
                                        </td>
                                        <td>
                                            <div class="d-flex flex-column">
                                                <a href="/employees/{{ $item->employee->id }}" class="text-gray-800 text-hover-primary p-2">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</a>
                                            </div>
                                        </td>
                                        <td><a href="/providers/{{ $item->provider->id }}">{{ $item->provider->name }}</td>
                                        <td>
                                            @if($item->expiry_date < Carbon\Carbon::today())
                                                <span class="badge badge-danger">Expired</span>
                                            @elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
                                                <span class="badge badge-warning">Expiring</span>
                                            @else
                                                <span class="badge badge-success">Valid</span>
                                            @endif
                                        </td>
                                        <td>{{ $item->expiry_date->format('d/m/Y') }}</td>
                                        <td>
                                            @if($item->upload)
                                                <a href="{{ Storage::disk('vultr')->url($item->upload->url) }}" target="_blank">
                                                    <span data-bs-toggle="tooltip" data-bs-placement="top" title="Qualification file uploaded">
                                                        <span class="svg-icon svg-icon-success svg-icon-2hx">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                <path
                                                                    opacity="0.3"
                                                                    d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM11.7 17.7L16.7 12.7C17.1 12.3 17.1 11.7 16.7 11.3C16.3 10.9 15.7 10.9 15.3 11.3L11 15.6L8.70001 13.3C8.30001 12.9 7.69999 12.9 7.29999 13.3C6.89999 13.7 6.89999 14.3 7.29999 14.7L10.3 17.7C10.5 17.9 10.8 18 11 18C11.2 18 11.5 17.9 11.7 17.7Z"
                                                                    fill="black"
                                                                />
                                                                <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="black" />
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </a>
                                            @endif
                                        </td>
                                        <td class="text-end">
                                            <a href="#" class="btn btn-link btn-sm p-0" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                                                <span class="svg-icon svg-icon-muted svg-icon-2hx">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect x="10" y="10" width="4" height="4" rx="2" fill="black" />
                                                        <rect x="17" y="10" width="4" height="4" rx="2" fill="black" />
                                                        <rect x="3" y="10" width="4" height="4" rx="2" fill="black" />
                                                    </svg>
                                                </span>
                                            </a>
                                            <div class="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold fs-7 w-125px py-4" data-kt-menu="true">
                                                <div class="menu-item px-3">
                                                    <a href="/qualifications/{{ $item->id }}/edit" class="menu-link px-3">Edit</a>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    @endif
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection
