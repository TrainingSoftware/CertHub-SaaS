@extends('layouts.app')
@section('title', 'Update Employee')
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
	<div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
		<div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
			<div class="page-title d-flex flex-column me-5 py-2">
				<h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Edit Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>
				<ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
					<li class="breadcrumb-item text-muted">
						<a href="/home" class="text-muted text-hover-primary">Home</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-muted">
						<a href="/employees" class="text-muted text-hover-primary">Employees</a>
					</li>
					<li class="breadcrumb-item">
						<span class="bullet bg-gray-200 w-5px h-2px"></span>
					</li>
					<li class="breadcrumb-item text-dark">{{ $employee->firstname }} {{ $employee->lastname }}</li>
				</ul>
			</div>
		</div>
	</div>
	@include('partials.layout.alert')
	<div class="post d-flex flex-column-fluid" id="kt_post">
		<div id="kt_content_container" class="container-xxl">
			@include('partials.employee.header')
			<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
				<div class="card-header cursor-pointer">
					<div class="card-title m-0">
						<h3 class="fw-bolder m-0">Edit: {{ $employee->firstname }}'s Details</h3>
					</div>
				</div>
				<div class="card-body p-9">
					{{ Form::model($employee, array('route' => array('employees.update', $employee->id), 'method' => 'PUT','enctype'=>'multipart/form-data')) }}
					<div class="row mb-7 d-flex h-100">
                        <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Photo</span></label>
                        <div class="col-lg-8">
                            <div class="image-input image-input-outline" data-kt-image-input="true" style="background-image: url('{{$employee->getMedia('avatar')->first() != null ? $employee->getMedia('avatar')->first()->getUrl() : "assets/media/svg/avatars/blank.svg" }}')">
                                <div class="image-input-wrapper w-125px h-125px" style="background-image: url('{{$employee->getMedia('avatar')->first() != null ? $employee->getMedia('avatar')->first()->getUrl() : "assets/media/svg/avatars/blank.svg" }}')"></div>
                                <label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="change" data-bs-toggle="tooltip" title="" data-bs-original-title="Change avatar">
                                    <i class="bi bi-pencil-fill fs-7"></i>
                                    <input type="file" name="avatar" accept=".png, .jpg, .jpeg">
                                    <input type="hidden" name="avatar_remove">
                                </label>
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="cancel" data-bs-toggle="tooltip" title="" data-bs-original-title="Cancel avatar">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                                <span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow" data-kt-image-input-action="remove" data-bs-toggle="tooltip" title="" data-bs-original-title="Remove avatar">
                                    <i class="bi bi-x fs-2"></i>
                                </span>
                            </div>
                        </div>
                    </div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center"><span class="required">Full Name</span></label>
						<div class="col-lg-8">
							<div class="row">
								<div class="form-group col-md-4">
									<label class="d-flex align-items-center form-label">
									<span class="required">Forename</span>
									</label>
									{{ Form::text('firstname', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
								</div>
								<div class="form-group col-md-4">
									<label class="d-flex align-items-center form-label">
									<span>Middle name(s)</span>
									</label>
									{{ Form::text('middlenames', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
								</div>
								<div class="form-group col-md-4">
									<label class="d-flex align-items-center form-label">
									<span class="required">Surname</span>
									</label>
									{{ Form::text('lastname', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Gender</label>
						<div class="col-lg-8">
							<div class="row">
								<div class="form-group col-md-12">
									<select name="gender" class="form-select form-select-lg form-select-solid" data-control="select2" data-allow-clear="true">
										<option selected disabled>Select...</option>
										<option value="Male" @if($employee->employment === 'Male') selected @endif>Male</option>
										<option value="Female" @if($employee->employment === 'Female') selected @endif>Female</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Nationality</label>
						<div class="col-lg-8">
							<div class="row">
                                <div class="form-group col-md-12">
									{!! Form::select('nationality', config('nationalities'), null, ['class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0']) !!}
								</div>
							</div> 
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Marital Status</label>
						<div class="col-lg-8">
							<div class="row">
								<div class="form-group col-md-12">
									<select name="marital_status" class="form-select form-select-lg form-select-solid" data-control="select2" data-allow-clear="true">
										<option disabled>Select...</option>
                                        @foreach(config('marital_statuses') as $status)
                                            <option value="{{$status}}" @if($employee->marital_status === $status) selected @endif>{{$status}}</option>
                                        @endforeach
									</select>
								</div>
							</div>
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Date of Birth</label>
						<div class="col-lg-8">
							<div class="row">
								<div class="form-group col-md-12">
                                    {{Form::text('dob',null,array('id' => 'employeeDob', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0'))}}
								</div>
							</div>
						</div>
					</div>
					@if(Auth::user()->company)
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Company</label>
						<div class="col-lg-8 fv-row">
							<span class="fw-bolder text-gray-800 fs-6">{{ Auth::user()->company->name }}</span>
						</div>
					</div>
					@endif
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
						<span class="required">Contact Phone</span></label>
						<div class="col-lg-8 d-flex align-items-center">
							<input type="text" name="phone" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" value="{{ $employee->phone }}" data-inputmask="'mask': '99999999999'">
						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
						<span class="required">Email</span>
						</label>
						<div class="col-lg-8">
							{{ Form::text('email', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0')) }}
						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Address</label>
						<div class="col-lg-8">
							<div class="row mb-10">
								<div class="form-group col-md-12">
									<a href="#" class="btn btn-light-primary fw-bolder w-100" data-bs-toggle="modal" data-bs-target="#kt_modal_postcode">Search address</a>
								</div>
							</div>
							<div class="row">
								<div class="col-12">
									<div class="d-flex align-items-center mb-10">
										<div class="border-bottom border-gray-300 mw-50 w-100"></div>
										<span class="fw-bold text-gray-400 fs-7 mx-2">OR</span>
										<div class="border-bottom border-gray-300 mw-50 w-100"></div>
									</div>
								</div>
							</div>
							<div class="row mb-7">
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Building Name / Number
									</label>
									{{ Form::text('line_1', null, array('id' => 'address_line_1', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '6')) }}
								</div>
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Line 2
									</label>
									{{ Form::text('line_2', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Dale Road')) }}
								</div>
							</div>
							<div class="row mb-7">
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Town
									</label>
									{{ Form::text('town', null, array('id' => 'posttown', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Chesterfield')) }}
								</div>
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									County
									</label>
									{{ Form::text('county', null, array('id' => 'county', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Derbyshire')) }}
								</div>
							</div>
							<div class="row">
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Postcode
									</label>
									{{ Form::text('postcode', null, array('id' => 'postcode', 'class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'S18 1XJ')) }}
								</div>
								<div class="form-group col-md-6">
									<label class="form-label required">Country</label>
									<select name="country" disabled value="United Kingdom" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="false">
										<option></option>
										<option value="Afganistan">Afghanistan</option>
										<option value="Albania">Albania</option>
										<option value="Algeria">Algeria</option>
										<option value="American Samoa">American Samoa</option>
										<option value="Andorra">Andorra</option>
										<option value="Angola">Angola</option>
										<option value="Anguilla">Anguilla</option>
										<option value="Antigua & Barbuda">Antigua & Barbuda</option>
										<option value="Argentina">Argentina</option>
										<option value="Armenia">Armenia</option>
										<option value="Aruba">Aruba</option>
										<option value="Australia">Australia</option>
										<option value="Austria">Austria</option>
										<option value="Azerbaijan">Azerbaijan</option>
										<option value="Bahamas">Bahamas</option>
										<option value="Bahrain">Bahrain</option>
										<option value="Bangladesh">Bangladesh</option>
										<option value="Barbados">Barbados</option>
										<option value="Belarus">Belarus</option>
										<option value="Belgium">Belgium</option>
										<option value="Belize">Belize</option>
										<option value="Benin">Benin</option>
										<option value="Bermuda">Bermuda</option>
										<option value="Bhutan">Bhutan</option>
										<option value="Bolivia">Bolivia</option>
										<option value="Bonaire">Bonaire</option>
										<option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
										<option value="Botswana">Botswana</option>
										<option value="Brazil">Brazil</option>
										<option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
										<option value="Brunei">Brunei</option>
										<option value="Bulgaria">Bulgaria</option>
										<option value="Burkina Faso">Burkina Faso</option>
										<option value="Burundi">Burundi</option>
										<option value="Cambodia">Cambodia</option>
										<option value="Cameroon">Cameroon</option>
										<option value="Canada">Canada</option>
										<option value="Canary Islands">Canary Islands</option>
										<option value="Cape Verde">Cape Verde</option>
										<option value="Cayman Islands">Cayman Islands</option>
										<option value="Central African Republic">Central African Republic</option>
										<option value="Chad">Chad</option>
										<option value="Channel Islands">Channel Islands</option>
										<option value="Chile">Chile</option>
										<option value="China">China</option>
										<option value="Christmas Island">Christmas Island</option>
										<option value="Cocos Island">Cocos Island</option>
										<option value="Colombia">Colombia</option>
										<option value="Comoros">Comoros</option>
										<option value="Congo">Congo</option>
										<option value="Cook Islands">Cook Islands</option>
										<option value="Costa Rica">Costa Rica</option>
										<option value="Cote DIvoire">Cote DIvoire</option>
										<option value="Croatia">Croatia</option>
										<option value="Cuba">Cuba</option>
										<option value="Curaco">Curacao</option>
										<option value="Cyprus">Cyprus</option>
										<option value="Czech Republic">Czech Republic</option>
										<option value="Denmark">Denmark</option>
										<option value="Djibouti">Djibouti</option>
										<option value="Dominica">Dominica</option>
										<option value="Dominican Republic">Dominican Republic</option>
										<option value="East Timor">East Timor</option>
										<option value="Ecuador">Ecuador</option>
										<option value="Egypt">Egypt</option>
										<option value="El Salvador">El Salvador</option>
										<option value="Equatorial Guinea">Equatorial Guinea</option>
										<option value="Eritrea">Eritrea</option>
										<option value="Estonia">Estonia</option>
										<option value="Ethiopia">Ethiopia</option>
										<option value="Falkland Islands">Falkland Islands</option>
										<option value="Faroe Islands">Faroe Islands</option>
										<option value="Fiji">Fiji</option>
										<option value="Finland">Finland</option>
										<option value="France">France</option>
										<option value="French Guiana">French Guiana</option>
										<option value="French Polynesia">French Polynesia</option>
										<option value="French Southern Ter">French Southern Ter</option>
										<option value="Gabon">Gabon</option>
										<option value="Gambia">Gambia</option>
										<option value="Georgia">Georgia</option>
										<option value="Germany">Germany</option>
										<option value="Ghana">Ghana</option>
										<option value="Gibraltar">Gibraltar</option>
										<option value="Great Britain">Great Britain</option>
										<option value="Greece">Greece</option>
										<option value="Greenland">Greenland</option>
										<option value="Grenada">Grenada</option>
										<option value="Guadeloupe">Guadeloupe</option>
										<option value="Guam">Guam</option>
										<option value="Guatemala">Guatemala</option>
										<option value="Guinea">Guinea</option>
										<option value="Guyana">Guyana</option>
										<option value="Haiti">Haiti</option>
										<option value="Hawaii">Hawaii</option>
										<option value="Honduras">Honduras</option>
										<option value="Hong Kong">Hong Kong</option>
										<option value="Hungary">Hungary</option>
										<option value="Iceland">Iceland</option>
										<option value="Indonesia">Indonesia</option>
										<option value="India">India</option>
										<option value="Iran">Iran</option>
										<option value="Iraq">Iraq</option>
										<option value="Ireland">Ireland</option>
										<option value="Isle of Man">Isle of Man</option>
										<option value="Israel">Israel</option>
										<option value="Italy">Italy</option>
										<option value="Jamaica">Jamaica</option>
										<option value="Japan">Japan</option>
										<option value="Jordan">Jordan</option>
										<option value="Kazakhstan">Kazakhstan</option>
										<option value="Kenya">Kenya</option>
										<option value="Kiribati">Kiribati</option>
										<option value="Korea North">Korea North</option>
										<option value="Korea Sout">Korea South</option>
										<option value="Kuwait">Kuwait</option>
										<option value="Kyrgyzstan">Kyrgyzstan</option>
										<option value="Laos">Laos</option>
										<option value="Latvia">Latvia</option>
										<option value="Lebanon">Lebanon</option>
										<option value="Lesotho">Lesotho</option>
										<option value="Liberia">Liberia</option>
										<option value="Libya">Libya</option>
										<option value="Liechtenstein">Liechtenstein</option>
										<option value="Lithuania">Lithuania</option>
										<option value="Luxembourg">Luxembourg</option>
										<option value="Macau">Macau</option>
										<option value="Macedonia">Macedonia</option>
										<option value="Madagascar">Madagascar</option>
										<option value="Malaysia">Malaysia</option>
										<option value="Malawi">Malawi</option>
										<option value="Maldives">Maldives</option>
										<option value="Mali">Mali</option>
										<option value="Malta">Malta</option>
										<option value="Marshall Islands">Marshall Islands</option>
										<option value="Martinique">Martinique</option>
										<option value="Mauritania">Mauritania</option>
										<option value="Mauritius">Mauritius</option>
										<option value="Mayotte">Mayotte</option>
										<option value="Mexico">Mexico</option>
										<option value="Midway Islands">Midway Islands</option>
										<option value="Moldova">Moldova</option>
										<option value="Monaco">Monaco</option>
										<option value="Mongolia">Mongolia</option>
										<option value="Montserrat">Montserrat</option>
										<option value="Morocco">Morocco</option>
										<option value="Mozambique">Mozambique</option>
										<option value="Myanmar">Myanmar</option>
										<option value="Nambia">Nambia</option>
										<option value="Nauru">Nauru</option>
										<option value="Nepal">Nepal</option>
										<option value="Netherland Antilles">Netherland Antilles</option>
										<option value="Netherlands">Netherlands (Holland, Europe)</option>
										<option value="Nevis">Nevis</option>
										<option value="New Caledonia">New Caledonia</option>
										<option value="New Zealand">New Zealand</option>
										<option value="Nicaragua">Nicaragua</option>
										<option value="Niger">Niger</option>
										<option value="Nigeria">Nigeria</option>
										<option value="Niue">Niue</option>
										<option value="Norfolk Island">Norfolk Island</option>
										<option value="Norway">Norway</option>
										<option value="Oman">Oman</option>
										<option value="Pakistan">Pakistan</option>
										<option value="Palau Island">Palau Island</option>
										<option value="Palestine">Palestine</option>
										<option value="Panama">Panama</option>
										<option value="Papua New Guinea">Papua New Guinea</option>
										<option value="Paraguay">Paraguay</option>
										<option value="Peru">Peru</option>
										<option value="Phillipines">Philippines</option>
										<option value="Pitcairn Island">Pitcairn Island</option>
										<option value="Poland">Poland</option>
										<option value="Portugal">Portugal</option>
										<option value="Puerto Rico">Puerto Rico</option>
										<option value="Qatar">Qatar</option>
										<option value="Republic of Montenegro">Republic of Montenegro</option>
										<option value="Republic of Serbia">Republic of Serbia</option>
										<option value="Reunion">Reunion</option>
										<option value="Romania">Romania</option>
										<option value="Russia">Russia</option>
										<option value="Rwanda">Rwanda</option>
										<option value="St Barthelemy">St Barthelemy</option>
										<option value="St Eustatius">St Eustatius</option>
										<option value="St Helena">St Helena</option>
										<option value="St Kitts-Nevis">St Kitts-Nevis</option>
										<option value="St Lucia">St Lucia</option>
										<option value="St Maarten">St Maarten</option>
										<option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
										<option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
										<option value="Saipan">Saipan</option>
										<option value="Samoa">Samoa</option>
										<option value="Samoa American">Samoa American</option>
										<option value="San Marino">San Marino</option>
										<option value="Sao Tome & Principe">Sao Tome & Principe</option>
										<option value="Saudi Arabia">Saudi Arabia</option>
										<option value="Senegal">Senegal</option>
										<option value="Seychelles">Seychelles</option>
										<option value="Sierra Leone">Sierra Leone</option>
										<option value="Singapore">Singapore</option>
										<option value="Slovakia">Slovakia</option>
										<option value="Slovenia">Slovenia</option>
										<option value="Solomon Islands">Solomon Islands</option>
										<option value="Somalia">Somalia</option>
										<option value="South Africa">South Africa</option>
										<option value="Spain">Spain</option>
										<option value="Sri Lanka">Sri Lanka</option>
										<option value="Sudan">Sudan</option>
										<option value="Suriname">Suriname</option>
										<option value="Swaziland">Swaziland</option>
										<option value="Sweden">Sweden</option>
										<option value="Switzerland">Switzerland</option>
										<option value="Syria">Syria</option>
										<option value="Tahiti">Tahiti</option>
										<option value="Taiwan">Taiwan</option>
										<option value="Tajikistan">Tajikistan</option>
										<option value="Tanzania">Tanzania</option>
										<option value="Thailand">Thailand</option>
										<option value="Togo">Togo</option>
										<option value="Tokelau">Tokelau</option>
										<option value="Tonga">Tonga</option>
										<option value="Trinidad & Tobago">Trinidad & Tobago</option>
										<option value="Tunisia">Tunisia</option>
										<option value="Turkey">Turkey</option>
										<option value="Turkmenistan">Turkmenistan</option>
										<option value="Turks & Caicos Is">Turks & Caicos Is</option>
										<option value="Tuvalu">Tuvalu</option>
										<option value="Uganda">Uganda</option>
										<option value="United Kingdom" selected>United Kingdom</option>
										<option value="Ukraine">Ukraine</option>
										<option value="United Arab Erimates">United Arab Emirates</option>
										<option value="United States of America">United States of America</option>
										<option value="Uraguay">Uruguay</option>
										<option value="Uzbekistan">Uzbekistan</option>
										<option value="Vanuatu">Vanuatu</option>
										<option value="Vatican City State">Vatican City State</option>
										<option value="Venezuela">Venezuela</option>
										<option value="Vietnam">Vietnam</option>
										<option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
										<option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
										<option value="Wake Island">Wake Island</option>
										<option value="Wallis & Futana Is">Wallis & Futana Is</option>
										<option value="Yemen">Yemen</option>
										<option value="Zaire">Zaire</option>
										<option value="Zambia">Zambia</option>
										<option value="Zimbabwe">Zimbabwe</option>
									</select>
								</div>
							</div>
                            <div class="row">
                                <div class="form-group col-md-6">
									<label class="form-label required">Nationality</label>
                                    <select name="nationality" class="form-select form-select-lg form-select-solid" data-control="select2" data-allow-clear="true">
										<option disabled>Select...</option>
                                        @foreach(config('nationalities') as $nation)
                                            <option value="{{$nation}}" @if($employee->nationality === $nation) selected @endif >{{$nation}}</option>
                                        @endforeach
									</select>
								</div>
                            </div>

						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Position</label>
						<div class="col-lg-8">
							{{ Form::text('position', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Training Manager')) }}
						</div>
					</div>

					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Employment Details</label>
						<div class="col-lg-8">
							<div class="row mb-7">
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Start Date
									</label>
									<input name="start_date" id="employeeStart" type="text" class="form-control flatpickr-input form-control-lg form-control-solid mb-3 mb-lg-0" value="@if($employee->start_date){{ $employee->start_date->format('j-n-Y') }}@endif">
								</div>
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									End Date
									</label>
									<input name="end_date" id="tenderStart" type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" value="@if($employee->end_date){{ $employee->end_date->format('j-n-Y') }}@endif">
								</div>
							</div>
							<div class="row mb-7">
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Salary
									</label>
									{{ Form::text('salary', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => '26,500' )) }}
								</div>
								<div class="form-group col-md-6">
									<label class="d-flex align-items-center form-label">
									Employment Status
									</label>
									<select name="employment" class="form-select form-select-lg form-select-solid" data-control="select2" data-allow-clear="true">
										<option selected disabled>Select...</option>
										<option value="Full Time" @if($employee->employment === 'Full Time') selected @endif>Full Time</option>
										<option value="Part Time" @if($employee->employment === 'Part Time') selected @endif>Part Time</option>
										<option value="Fixed-term" @if($employee->employment === 'Fixed-term') selected @endif>Fixed-term</option>
										<option value="Freelancer / Contractor" @if($employee->employment === 'Freelancer / Contractor') selected @endif>Freelancer / Contractor</option>
										<option value="Agency" @if($employee->employment === 'Agency') selected @endif>Agency</option>
									</select>
								</div>
							</div>
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">National Insurance</label>
						<div class="col-lg-8">
							{{ Form::text('national_insurance', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'IN-S57P')) }}
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Driving License Number</label>
						<div class="col-lg-8">
							{{ Form::text('driving_license_number', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'INS57P')) }}
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Citb Number</label>
						<div class="col-lg-8">
							{{ Form::text('citb_number', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Citb Number')) }}
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">NONC Number</label>
						<div class="col-lg-8">
							{{ Form::text('nocn_number', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'Nonc Number')) }}
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">NPORS Number</label>
						<div class="col-lg-8">
							{{ Form::text('npors_number', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'NPORS Number')) }}
						</div>
					</div>
                    <div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">EUSR Number</label>
						<div class="col-lg-8">
							{{ Form::text('eusr_number', null, array('class' => 'form-control form-control-lg form-control-solid mb-3 mb-lg-0', 'placeholder' => 'EUSR Number')) }}
						</div>
					</div>
					<div class="row mb-7 d-flex h-100">
						<label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">Department</label>
						<div class="col-lg-8">
							<div class="row">
								<div class="form-group col-md-12">
									<select name="department_id" class="form-select form-select-lg form-select-solid" data-control="select2" data-allow-clear="true">
									<option selected disabled>Select...</option>
									@foreach($departments as $item)
									    <option value="{{ $item->id }}" @if(optional($employee->department)->id === $item->id) selected @endif>{{ $item->name }}</option>
									@endforeach
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-footer">
					<button type="submit" class="btn btn-primary align-self-center">Update</button>
					{{ Form::close() }}
					@include('partials.global.postcode-search')
					{{ Form::model($employee, array('route' => array('employees.destroy', $employee->id), 'method' => 'DELETE', 'class' => 'd-inline')) }}
					<button type="submit" class="btn btn-danger align-self-center">Delete</button>
					{{ Form::close() }}
				</div>
			</div>
		</div>
	</div>
</div>
@endsection
