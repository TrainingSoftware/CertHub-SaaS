@extends('layouts.app')
@section('title', 'Generate Access Code')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Generate Access Code</h1>
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
            <div class="card">
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">Generate</h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            Generate Access for admin user
                        </p>
                        <form action="{{route('generate.code',$user)}}" method="POST">
                            @csrf
                            <button type="submit" class="btn btn-primary">Generate Access Code</button>
                        </form>


                        @if (session('code'))
                           <p class="alert alert-warning">{{session('code')}}}</p>
                        @endif


                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

@endsection
