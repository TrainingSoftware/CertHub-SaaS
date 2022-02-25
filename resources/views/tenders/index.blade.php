@extends('layouts.app')
@section('title', 'All Tenders')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Tenders</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Tenders</li>
                </ul>
            </div>
            <div class="d-flex align-items-center flex-shrink-0">
                <div class="d-flex align-items-center mx-3 ms-lg-4">
					<a href ="{{route('tenders.map')}}" class="btn btn-icon btn-color-gray-700 btn-sm btn-active-color-primary btn-outline btn-outline-secondary">
                        <span class="svg-icon svg-icon-muted svg-icon-1hx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M8.7 4.19995L4 6.30005V18.8999L8.7 16.8V19L3.1 21.5C2.6 21.7 2 21.4 2 20.8V6C2 5.4 2.3 4.89995 2.9 4.69995L8.7 2.09998V4.19995Z" fill="black"/>
                                <path d="M15.3 19.8L20 17.6999V5.09992L15.3 7.19989V4.99994L20.9 2.49994C21.4 2.29994 22 2.59989 22 3.19989V17.9999C22 18.5999 21.7 19.1 21.1 19.3L15.3 21.8998V19.8Z" fill="black"/>
                                <path opacity="0.3" d="M15.3 7.19995L20 5.09998V17.7L15.3 19.8V7.19995Z" fill="black"/>
                                <path opacity="0.3" d="M8.70001 4.19995V2L15.4 5V7.19995L8.70001 4.19995ZM8.70001 16.8V19L15.4 22V19.8L8.70001 16.8Z" fill="black"/>
                                <path opacity="0.3" d="M8.7 16.8L4 18.8999V6.30005L8.7 4.19995V16.8Z" fill="black"/>
                            </svg>
                        </span>
                    </a>
				</div>
				<div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
					<a href="/tenders/create" class="btn btn-sm btn-primary">
						<span class="svg-icon svg-icon-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
								<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
								<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
							</svg>
						</span>
						Add Tender
					</a>
				</div>
			</div>
        </div>
    </div>
    @livewire('list-tenders')
</div>
@endsection