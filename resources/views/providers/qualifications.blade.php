@extends('layouts.app')
@section('title', $provider->name . ' Qualifications')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Provider : {{ $provider->name }}</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/providers" class="text-muted text-hover-primary">
                        Providers
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">{{ $provider->name }}</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            @include('partials.providers.header')
            <div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
                <div class="card-header cursor-pointer">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Qualifications</h3>
                    </div>
                </div>
                <div class="card-body p-9">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-150px">Qualification Type</th>
                                <th class="min-w-125px">Employee</th>
                                <th class="min-w-100px">Expiry Date</th>
                                <th class="min-w-50px">Status</th>
                                <th class="min-w-15px"></th>
                                <th class="min-w-50px"></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @foreach ($qualifications as $item)
                            <tr>
                                <td class="d-flex align-items-center border-bottom-0">
                                    <div class="d-flex flex-column">
                                        <a href="/qualifications/{{ $item->id }}" class="text-gray-800 text-hover-primary mb-1">{{ $item->qualificationtype->name }}</a>
                                    </div>
                                </td>
                                <td>{{ $item->employee->firstname }} {{ $item->employee->lastname }}</td>
                                <td>{{ $item->expiry_date->format('d/m/Y') }}</td>
                                <td>
                                    @if($item->expiry_date < Carbon\Carbon::today())
                                    <span class="badge badge-danger">Expired</span>
                                    @elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
                                    <span class="badge badge-warning">Expiring</span>
                                    @else
                                    <span class="badge badge-success">Valid</span>
                                    @endif
                                </td>
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
                                <td class="">
                                    <a href="/qualifications/{{ $item->id }}" class="btn btn-light btn-sm w-100">View</a>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection