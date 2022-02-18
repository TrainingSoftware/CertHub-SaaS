@extends('layouts.auth')
@section('title', 'Your Company Details')
@section('content')
<div class="d-flex flex-column flex-root">
    <div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
        <div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
            <div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y">
                <div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20">
                    <a href="/" class="mb-10 mb-lg-20">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" contentScriptType="text/ecmascript" width="200" zoomAndPan="magnify" contentStyleType="text/css" viewBox="0 0 375 149.999998" preserveAspectRatio="xMidYMid meet" version="1.0">
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
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="20.21127" y="97.217603" xlink:href="#glyph-0-1" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="75.733144" y="97.217603" xlink:href="#glyph-0-2" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="120.990471" y="97.217603" xlink:href="#glyph-0-3" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="150.073365" y="97.217603" xlink:href="#glyph-0-4" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="178.456401" y="97.217603" xlink:href="#glyph-0-5" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="233.900502" y="97.217603" xlink:href="#glyph-0-6" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(0%, 15.289307%, 27.059937%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="284.445615" y="97.217603" xlink:href="#glyph-0-7" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                            <g fill="rgb(3.529358%, 41.178894%, 76.469421%)" fill-opacity="1">
                                <use xmlns:xlink="http://www.w3.org/1999/xlink" x="334.816023" y="97.217603" xlink:href="#glyph-0-8" xlink:type="simple" xlink:actuate="onLoad" xlink:show="embed"/>
                            </g>
                        </svg>
                    </a>
                    <div class="stepper-nav min-w-75">
                        <div class="stepper-item current" data-kt-stepper-element="nav">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">1</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Business Details</h3>
                                <div class="stepper-desc fw-bold">Setup Your Account Details</div>
                            </div>
                        </div>
                        <div class="stepper-item" data-kt-stepper-element="nav">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">2</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Address</h3>
                                <div class="stepper-desc fw-bold">Where is your company office?</div>
                            </div>
                        </div>
                        <div class="stepper-item">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">3</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Choose Your Plan</h3>
                                <div class="stepper-desc fw-bold">Select the plan which works for you</div>
                            </div>
                        </div>
                        <div class="stepper-item">
                            <div class="stepper-line w-40px"></div>
                            <div class="stepper-icon w-40px h-40px">
                                <i class="stepper-check fas fa-check"></i>
                                <span class="stepper-number">4</span>
                            </div>
                            <div class="stepper-label">
                                <h3 class="stepper-title">Billing Details</h3>
                                <div class="stepper-desc fw-bold">Set up your payment method</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px" style="background-image: url(/assets/media/illustrations/sigma-1/16.png"></div>
            </div>
        </div>
        <div class="d-flex flex-column flex-lg-row-fluid py-10">
            @include('partials.layout.alert')
            <div class="d-flex flex-center flex-column flex-column-fluid">
                <div class="w-lg-700px p-10 p-lg-15 mx-auto">
                    <form class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form" method="POST" action="/company">
                        <div class="current" data-kt-stepper-element="content">
                            @csrf
                            <div class="w-100">
                                <div class="pb-10 pb-lg-12">
                                    <h2 class="fw-bolder text-dark">Business Details</h2>
                                    <div class="text-muted fw-bold fs-6 d-none">If you need more info, please check out
                                        <a href="#" class="link-primary fw-bolder">Help Page</a>.
                                    </div>
                                </div>
                                <div class="fv-row mb-10">
                                    <label class="form-label required">Business Name</label>
                                    <input name="name" class="form-control form-control-lg form-control-solid" value="{{ old('name') }}" />
                                </div>
                                <div class="fv-row mb-10">
                                    <label class="form-label required">Corporation Type</label>
                                    <select name="type" class="form-select form-select-lg form-select-solid" data-control="select2" data-placeholder="Select..." data-allow-clear="true" data-hide-search="true">
                                        <option></option>
                                        <option value="Public limited company (PLC)">Public limited company (PLC)</option>
                                        <option value="Private company limited by shares (LTD)">Private company limited by shares (LTD)</option>
                                        <option value="Company limited by guarantee">Company limited by guarantee</option>
                                        <option value="Unlimited company (Unltd)">Unlimited company (Unltd)</option>
                                        <option value="Limited liability partnership (LLP)">Limited liability partnership (LLP)</option>
                                        <option value="Community interest company">Community interest company</option>
                                        <option value="Industrial and provident society (IPS)">Industrial and provident society (IPS)</option>
                                        <option value="Royal charter (RC)">Royal charter (RC)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="" data-kt-stepper-element="content">
                            <div class="w-100">
                                <div class="pb-10 pb-lg-15">
                                    <h2 class="fw-bolder text-dark">Address</h2>
                                </div>
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
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <label class="d-flex align-items-center form-label">
                                        <span class="required">Line 1</span>
                                        </label>
                                        <input name="line_1" id="address_line_1" class="form-control form-control-lg form-control-solid" value="{{ old('line_1') }}" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="d-flex align-items-center form-label">
                                        <span class="">Line 2</span>
                                        </label>
                                        <input name="line_2" id="" class="form-control form-control-lg form-control-solid" value="{{ old('line_2') }}" />
                                    </div>
                                </div>
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <label class="d-flex align-items-center form-label">
                                        <span class="required">Town</span>
                                        </label>
                                        <input name="town" id="posttown" class="form-control form-control-lg form-control-solid" value="{{ old('town') }}" />
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="d-flex align-items-center form-label">
                                        <span class="required">County</span>
                                        </label>
                                        <input name="county" id="county" class="form-control form-control-lg form-control-solid" value="{{ old('county') }}" />
                                    </div>
                                </div>
                                <div class="row mb-10">
                                    <div class="form-group col-md-6">
                                        <label class="d-flex align-items-center form-label">
                                        <span class="required">Postcode</span>
                                        </label>
                                        <input name="postcode" id="postcode" class="form-control form-control-lg form-control-solid" value="{{ old('postcode') }}"/>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label class="form-label required">Country</label>
                                        <select name="country" value="United Kingdom" class="form-select form-select-lg form-select-solid" disabled>
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
                            </div>
                        </div>
                        <div class="d-flex flex-stack pt-15">
                            <div class="mr-2">
                                <button type="button" class="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                    <span class="svg-icon svg-icon-4 me-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
                                            <path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
                                        </svg>
                                    </span>
                                    Previous
                                </button>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-lg btn-primary" data-kt-stepper-action="submit">
                                    <span class="indicator-label">
                                        Continue
                                        <span class="svg-icon svg-icon-4 ms-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                                <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                            </svg>
                                        </span>
                                    </span>
                                    <span class="indicator-progress">Please wait...
                                    <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                </button>
                                <button type="button" class="btn btn-lg btn-primary" data-kt-stepper-action="next">
                                    Continue
                                    <span class="svg-icon svg-icon-4 ms-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
                                            <path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </form>
                    @include('partials.global.postcode-search')
                </div>
            </div>
            <div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
                <div class="d-flex flex-center fw-bold fs-6">
                    <a href="https://certhub.co/about" target="_blank" class="text-muted text-hover-primary px-2">About</a>
                    <a href="https://certhub.co/contact" target="_blank" class="text-muted text-hover-primary px-2">Contact Us</a>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection