@extends('layouts.app')
@section('title', 'Home')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<!--begin::Toolbar-->
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<!--begin::Container-->
		<div id="kt_toolbar_container" class="container-fluid d-flex flex-stack flex-wrap">
			<!--begin::Page title-->
			<div class="page-title d-flex flex-column me-5 py-2">
				<!--begin::Title-->
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Dashboard</h1>
				<!--end::Title-->
			</div>
			<!--end::Page title-->
		</div>
		<!--end::Container-->
	</div>
	<!--end::Toolbar-->
	<!--begin::Post-->
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<!--begin::Container-->
		<div id="kt_content_container" class="container-xxl">
			<!--begin::Row-->
			<div class="row gy-5 g-xl-8">
				<!--begin::Col-->
				<div class="col-xl-4">
					<!--begin::Mixed Widget 2-->
					<div class="card card-xl-stretch">
						<!--begin::Header-->
						<div class="card-header border-0 bg-danger py-5">
							<h3 class="card-title fw-bolder text-white">Get Started...</h3>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body p-0">
							<!--begin::Chart-->
							<div class="card-rounded-bottom bg-danger" data-kt-color="danger" style="height: 200px"></div>
							<!--end::Chart-->
							<!--begin::Stats-->
							<div class="card-p mt-n20 position-relative">
								<!--begin::Row-->
								<div class="row g-0">
									<!--begin::Col-->
									<div class="col bg-light-warning px-6 py-8 rounded-2 me-7 mb-7">
										<!--begin::Svg Icon | path: icons/duotune/general/gen032.svg-->
										<span class="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<rect x="8" y="9" width="3" height="10" rx="1.5" fill="black" />
												<rect opacity="0.5" x="13" y="5" width="3" height="14" rx="1.5" fill="black" />
												<rect x="18" y="11" width="3" height="8" rx="1.5" fill="black" />
												<rect x="3" y="13" width="3" height="6" rx="1.5" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->
										<a href="/reports" class="text-warning fw-bold fs-6">View Reports</a>
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col bg-light-primary px-6 py-8 rounded-2 mb-7">
										<!--begin::Svg Icon | path: icons/duotune/finance/fin006.svg-->
										<span class="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
												<path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->
										<a href="/employees" class="text-primary fw-bold fs-6">Employees</a>
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
								<!--begin::Row-->
								<div class="row g-0">
									<!--begin::Col-->
									<div class="col bg-light-danger px-6 py-8 rounded-2 me-7">
										<!--begin::Svg Icon | path: icons/duotune/abstract/abs027.svg-->
										<span class="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
												<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->
										<a href="/qualifications" class="text-danger fw-bold fs-6 mt-2">Qualifications</a>
									</div>
									<!--end::Col-->
									<!--begin::Col-->
									<div class="col bg-light-success px-6 py-8 rounded-2">
										<!--begin::Svg Icon | path: icons/duotune/communication/com010.svg-->
										<span class="svg-icon svg-icon-3x svg-icon-success d-block my-2">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="black" />
												<path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="black" />
											</svg>
										</span>
										<!--end::Svg Icon-->
										<a href="#" class="text-success fw-bold fs-6 mt-2">Support</a>
									</div>
									<!--end::Col-->
								</div>
								<!--end::Row-->
							</div>
							<!--end::Stats-->
						</div>
						<!--end::Body-->
					</div>
					<!--end::Mixed Widget 2-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-xl-4">
					<!--begin::List Widget 5-->
					<div class="card card-xl-stretch">
						<!--begin::Header-->
						<div class="card-header align-items-center border-0 mt-4">
							<h3 class="card-title align-items-start flex-column">
								<span class="fw-bolder mb-2 text-dark">Upcoming Renewals</span>
								<span class="text-muted fw-bold fs-7">{{ $upcomingRenewalsCount }} qualifications are due to expire in {{ $thisMonth->format('F, Y') }}</span>
							</h3>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body pt-5">
							<!--begin::Timeline-->
							<div class="timeline-label">
                                @foreach($upcomingRenewals as $item)
                                    <div class="timeline-item">
                                            <div class="timeline-label fw-bolder text-gray-800 fs-6">{{ $item->expiry_date->format('d/m')}}</div>
                                            <div class="timeline-badge">
                                                @if($item->expiry_date < Carbon\Carbon::today())
                                                    <i class="fa fa-genderless text-danger fs-1"></i>
                                                @else
                                                    <i class="fa fa-genderless text-warning fs-1"></i>
                                                @endif
                                            </div>
                                            <div class="fw-mormal timeline-content text-muted ps-3">
                                                <a href="/qualifications/{{ $item->id }}">
                                                    <strong class="text-gray-800">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</strong>
                                                    <br>{{ $item->qualificationtype->name }}
                                                </a>
                                            </div>
                                        </div>
                                @endforeach
							</div>
							<!--end::Timeline-->
						</div>
						<!--end: Card Body-->
					</div>
					<!--end: List Widget 5-->
				</div>
				<!--end::Col-->
				<!--begin::Col-->
				<div class="col-xl-4">
					<!--begin::Mixed Widget 7-->
					<div class="card card-xl-stretch-50 mb-5 mb-xl-8">
						<!--begin::Body-->
						<div class="card-body d-flex flex-column p-0">
							<!--begin::Stats-->
							<div class="flex-grow-1 card-p pb-0">
								<div class="d-flex flex-stack flex-wrap">
									<div class="me-2 w-100">
										<a href="/reports/1" class="text-dark text-hover-primary fw-bolder fs-3">Est. Training Spend This Month</a>
										<div class="text-muted fs-7 fw-bold">{{ $thisMonth->format('F Y') }}</div>
									</div>
									<div class="fw-bolder fs-3 text-primary">£{{ $monthlyTrainingSpend }}</div>
								</div>
							</div>
							<!--end::Stats-->
							<!--begin::Chart-->
							<div class="mixed-widget-7-chart card-rounded-bottom" data-kt-chart-color="primary" style="height: 120px"></div>
							<!--end::Chart-->
						</div>
						<!--end::Body-->
					</div>
					<!--end::Mixed Widget 7-->
					<!--begin::Mixed Widget 10-->
					<div class="card card-xl-stretch-50 mb-5 mb-xl-8">
						<!--begin::Body-->
						<div class="card-body p-0 d-flex justify-content-between flex-column overflow-hidden">
							<!--begin::Hidden-->
							<div class="d-flex flex-stack flex-wrap flex-grow-1 px-9 pt-9 pb-3">
								<div class="me-2 w-100">
                                    <a href="/reports/5" class="text-dark text-hover-primary fw-bolder fs-3">Est. Training Spend This Year</a>
									<div class="text-gray-400 fw-bold">{{ $startOfYear->format('d M Y') }} - {{ $endOfYear->format('d M Y') }}</div>
								</div>
								<div class="fw-bolder fs-3 text-primary">£{{ $yearlyTrainingSpend }}</div>
							</div>
							<!--end::Hidden-->
							<!--begin::Chart-->
							<div class="mixed-widget-10-chart" data-kt-color="primary" style="height: 150px"></div>
							<!--end::Chart-->
						</div>
					</div>
					<!--end::Mixed Widget 10-->
				</div>
				<!--end::Col-->
			</div>
			<!--end::Row-->
			<!--begin::Row-->
			<div class="row gy-5 g-xl-8">
				<!--begin::Col-->
				<div class="col-xl-6">
					<!--begin::Tables Widget 9-->
					<div class="card card-xl-stretch mb-5 mb-xl-8">
						<!--begin::Header-->
						<div class="card-header border-0 pt-5">
							<h3 class="card-title align-items-start flex-column">
								<span class="card-label fw-bolder fs-3 mb-1">Recently Updated Employees</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $countEmployees }} <a href="/employees">employees</a></span>
							</h3>
							<div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a Employee">
								<a href="/employees/create" class="btn btn-sm btn-light btn-active-primary">
									<!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
									<span class="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
											<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
										</svg>
									</span>
									<!--end::Svg Icon-->Add Employee
								</a>
							</div>
						</div>
						<!--end::Header-->
						<!--begin::Body-->
						<div class="card-body py-3">
							<!--begin::Table container-->
							<div class="table-responsive">
								<!--begin::Table-->
								<table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
									<!--begin::Table head-->
									<thead>
										<tr class="fw-bolder text-muted">
											<th class="min-w-100px">Name</th>
                                            <th class="min-w-100px">Last Updated</th>
											<th class="min-w-100px text-end">Actions</th>
										</tr>
									</thead>
									<!--end::Table head-->
									<!--begin::Table body-->
									<tbody>
                                        @foreach($latestEmployees as $item)
										<tr>
											<td>
												<div class="d-flex align-items-center">
													<div class="symbol symbol-45px me-5">
														<img src="/assets/media/avatars/blank.png" alt="" />
													</div>
													<div class="d-flex justify-content-start flex-column">
														<a href="/employees/{{ $item->id }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $item->firstname }} {{ $item->lastname }}</a>
														<span class="text-muted fw-bold text-muted d-block fs-7">{{ $item->email }}</span>
													</div>
												</div>
											</td>
                                            <td>
                                                <a href="#" class="text-muted fw-bold text-hover-primary d-block fs-6">
                                                    {{ $item->updated_at->diffForHumans() }}
                                                </a>
                                            </td>
											<td>
												<div class="d-flex justify-content-end flex-shrink-0">
													<a href="/employees/{{ $item->id }}/edit" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
														<!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
														<span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
																<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
															</svg>
														</span>
														<!--end::Svg Icon-->
													</a>
												</div>
											</td>
										</tr>
										@endforeach
									</tbody>
									<!--end::Table body-->
								</table>
								<!--end::Table-->
							</div>
							<!--end::Table container-->
						</div>
						<!--begin::Body-->
					</div>
					<!--end::Tables Widget 9-->
				</div>
				<!--end::Col-->
                <!--begin::Col-->
                <div class="col-xl-6">
                    <!--begin::Tables Widget 9-->
                    <div class="card card-xl-stretch mb-5 mb-xl-8">
                        <!--begin::Header-->
                        <div class="card-header border-0 pt-5">
                            <h3 class="card-title align-items-start flex-column">
                                <span class="card-label fw-bolder fs-3 mb-1">Recently Updated Qualifications</span>
                                <span class="text-muted mt-1 fw-bold fs-7">You have {{ $countQualifications }} <a href="/qualifications">qualifications</a></span>
                            </h3>
                            <div class="card-toolbar" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-trigger="hover" title="Click to add a qualification">
                                <a href="/employees/create" class="btn btn-sm btn-light btn-active-primary">
                                    <!--begin::Svg Icon | path: icons/duotune/arrows/arr075.svg-->
                                    <span class="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
											<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
										</svg>
									</span>
                                    <!--end::Svg Icon-->Add Qualification
                                </a>
                            </div>
                        </div>
                        <!--end::Header-->
                        <!--begin::Body-->
                        <div class="card-body py-3">
                            <!--begin::Table container-->
                            <div class="table-responsive">
                                <!--begin::Table-->
                                <table class="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                                    <!--begin::Table head-->
                                    <thead>
                                    <tr class="fw-bolder text-muted">
                                        <th class="min-w-100px">Name</th>
                                        <th class="min-w-100px">Last Updated</th>
                                        <th class="min-w-100px text-end">Actions</th>
                                    </tr>
                                    </thead>
                                    <!--end::Table head-->
                                    <!--begin::Table body-->
                                    <tbody>
                                    @foreach($latestQualifications as $item)
                                        <tr>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="d-flex justify-content-start flex-column">
                                                        <a href="/qualifications/{{ $item->id }}" class="text-dark fw-bolder text-hover-primary fs-6">{{ $item->qualificationtype->name }}</a>
                                                        <span class="text-muted fw-bold text-muted d-block fs-7">
                                                            <a href="/employees/{{ $item->employee->id }}">
                                                            {{ $item->employee->firstname }} {{ $item->employee->lastname }}
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span href="#" class="text-muted fw-bold text-hover-primary d-block fs-6">
                                                    {{ $item->updated_at->diffForHumans() }}
                                                </span>
                                            </td>
                                            <td>
                                                <div class="d-flex justify-content-end flex-shrink-0">
                                                    <a href="/qualifications/{{ $item->id }}/edit" class="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1">
                                                        <!--begin::Svg Icon | path: icons/duotune/art/art005.svg-->
                                                        <span class="svg-icon svg-icon-3">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M21.4 8.35303L19.241 10.511L13.485 4.755L15.643 2.59595C16.0248 2.21423 16.5426 1.99988 17.0825 1.99988C17.6224 1.99988 18.1402 2.21423 18.522 2.59595L21.4 5.474C21.7817 5.85581 21.9962 6.37355 21.9962 6.91345C21.9962 7.45335 21.7817 7.97122 21.4 8.35303ZM3.68699 21.932L9.88699 19.865L4.13099 14.109L2.06399 20.309C1.98815 20.5354 1.97703 20.7787 2.03189 21.0111C2.08674 21.2436 2.2054 21.4561 2.37449 21.6248C2.54359 21.7934 2.75641 21.9115 2.989 21.9658C3.22158 22.0201 3.4647 22.0084 3.69099 21.932H3.68699Z" fill="black" />
																<path d="M5.574 21.3L3.692 21.928C3.46591 22.0032 3.22334 22.0141 2.99144 21.9594C2.75954 21.9046 2.54744 21.7864 2.3789 21.6179C2.21036 21.4495 2.09202 21.2375 2.03711 21.0056C1.9822 20.7737 1.99289 20.5312 2.06799 20.3051L2.696 18.422L5.574 21.3ZM4.13499 14.105L9.891 19.861L19.245 10.507L13.489 4.75098L4.13499 14.105Z" fill="black" />
															</svg>
														</span>
                                                        <!--end::Svg Icon-->
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                    <!--end::Table body-->
                                </table>
                                <!--end::Table-->
                            </div>
                            <!--end::Table container-->
                        </div>
                        <!--begin::Body-->
                    </div>
                    <!--end::Tables Widget 9-->
                </div>
                <!--end::Col-->
			</div>
			<!--end::Row-->

			<!--end::Modals-->
		</div>
		<!--end::Container-->
	</div>
	<!--end::Post-->
</div>
<!--end::Content-->

<script>
    var initMixedWidget7 = function() {
        var charts = document.querySelectorAll('.mixed-widget-7-chart');

        [].slice.call(charts).map(function(element) {
            var height = parseInt(KTUtil.css(element, 'height'));

            if ( !element ) {
                return;
            }

            var color = element.getAttribute('data-kt-chart-color');

            var labelColor = KTUtil.getCssVariableValue('--bs-' + 'gray-800');
            var strokeColor = KTUtil.getCssVariableValue('--bs-' + 'gray-300');
            var baseColor = KTUtil.getCssVariableValue('--bs-' + color);
            var lightColor = KTUtil.getCssVariableValue('--bs-light-' + color);

            var options = {
                series: [{
                    name: 'Estimated Training Spend',
                    data: [{{ $monthlyTrainingSpend }}]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'area',
                    height: height,
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    },
                    sparkline: {
                        enabled: true
                    }
                },
                plotOptions: {},
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                fill: {
                    type: 'solid',
                    opacity: 1
                },
                stroke: {
                    curve: 'smooth',
                    show: true,
                    width: 3,
                    colors: [baseColor]
                },
                xaxis: {
                    categories: ['{{ $thisMonth->format('F Y') }}'],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    },
                    crosshairs: {
                        show: false,
                        position: 'front',
                        stroke: {
                            color: strokeColor,
                            width: 1,
                            dashArray: 3
                        }
                    },
                    tooltip: {
                        enabled: true,
                        formatter: undefined,
                        offsetY: 0,
                        style: {
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    min: 0,
                    max: 60,
                    labels: {
                        show: false,
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "£" + val
                        }
                    }
                },
                colors: [lightColor],
                markers: {
                    colors: [lightColor],
                    strokeColor: [baseColor],
                    strokeWidth: 3
                }
            };

            var chart = new ApexCharts(element, options);
            chart.render();
        });
    }

    var initMixedWidget10 = function() {
        var charts = document.querySelectorAll('.mixed-widget-10-chart');

        var color;
        var height;
        var labelColor = KTUtil.getCssVariableValue('--bs-gray-500');
        var borderColor = KTUtil.getCssVariableValue('--bs-gray-200');
        var baseLightColor;
        var secondaryColor = KTUtil.getCssVariableValue('--bs-gray-300');
        var baseColor;
        var options;
        var chart;

        [].slice.call(charts).map(function(element) {
            color = element.getAttribute("data-kt-color");
            height = parseInt(KTUtil.css(element, 'height'));
            baseColor = KTUtil.getCssVariableValue('--bs-' + color);

            options = {
                series: [{
                    name: 'Net Profit',
                    data: [50, 60, 70, 80, 60, 50, 70, 60, 60, 100, 70, 60]
                }],
                chart: {
                    fontFamily: 'inherit',
                    type: 'bar',
                    height: height,
                    toolbar: {
                        show: false
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: ['50%'],
                        borderRadius: 4
                    },
                },
                legend: {
                    show: false
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
                xaxis: {
                    categories: [

                    ],
                    axisBorder: {
                        show: false,
                    },
                    axisTicks: {
                        show: false
                    },
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                yaxis: {
                    y: 0,
                    offsetX: 0,
                    offsetY: 0,
                    labels: {
                        style: {
                            colors: labelColor,
                            fontSize: '12px'
                        }
                    }
                },
                fill: {
                    type: 'solid'
                },
                states: {
                    normal: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    hover: {
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    },
                    active: {
                        allowMultipleDataPointsSelection: false,
                        filter: {
                            type: 'none',
                            value: 0
                        }
                    }
                },
                tooltip: {
                    style: {
                        fontSize: '12px'
                    },
                    y: {
                        formatter: function (val) {
                            return "£" + val
                        }
                    }
                },
                colors: [baseColor, secondaryColor],
                grid: {
                    padding: {
                        top: 10
                    },
                    borderColor: borderColor,
                    strokeDashArray: 4,
                    yaxis: {
                        lines: {
                            show: true
                        }
                    }
                }
            };

            chart = new ApexCharts(element, options);
            chart.render();
        });
    }
</script>
@endsection
