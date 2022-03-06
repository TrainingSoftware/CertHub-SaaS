@extends('layouts.app')
@section('title', 'Add a Qualification')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Add a qualification</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">
                        Dashboard
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/qualifications" class="text-muted text-hover-primary">
                        Qualifications
                        </a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Create</li>
                </ul>
            </div>
        </div>
    </div>
    @include('partials.layout.alert')
    <div class="post d-flex flex-column-fluid">
        <div id="kt_content_container" class="container-xxl">
            <div class="card mb-5 mb-xl-10">
                <div class="card-header border-0 ">
                    <div class="card-title m-0">
                        <h3 class="fw-bolder m-0">Qualification Details</h3>
                    </div>
                </div>
                <div id="kt_account_profile_details">
                    @livewire('qualification-create')
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
@push('extra-js')
<script>
    $(document).ready(function() {
            window.initSelectStationDrop=()=>{
                $('#qtype').select2();
            }
            initSelectStationDrop();
            window.livewire.on('select2',()=>{
                initSelectStationDrop();
            });

        });
</script>
@endpush
