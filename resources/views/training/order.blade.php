@extends('layouts.app')
@section('title', 'Order')
@push('extra-css')
@endpush
@section('content')
<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
    <div class="toolbar d-flex flex-stack mb-3 mb-lg-5" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container d-flex flex-stack flex-wrap">
            <div class="page-title d-flex flex-column me-5 py-2">
                <h1 class="d-flex flex-column text-dark fw-bolder fs-3 mb-0">Order</h1>
                <ul class="breadcrumb breadcrumb-separatorless fw-bold fs-7 pt-1">
                    <li class="breadcrumb-item text-muted">
                        <a href="/home" class="text-muted text-hover-primary">Dashboard</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-muted">
                        <a href="/training" class="text-muted text-hover-primary">Training</a>
                    </li>
                    <li class="breadcrumb-item">
                        <span class="bullet bg-gray-200 w-5px h-2px"></span>
                    </li>
                    <li class="breadcrumb-item text-dark">Order</li>
                </ul>
            </div>
            <div class="d-flex align-items-center flex-shrink-0">
                <div class="d-flex justify-content-end" data-kt-user-table-toolbar="base">
                    <a href="#" class="btn btn-sm btn-primary">
                        <span class="svg-icon svg-icon-muted">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <path opacity="0.3"
                                    d="M8 8C8 7.4 8.4 7 9 7H16V3C16 2.4 15.6 2 15 2H3C2.4 2 2 2.4 2 3V13C2 13.6 2.4 14 3 14H5V16.1C5 16.8 5.79999 17.1 6.29999 16.6L8 14.9V8Z"
                                    fill="black" />
                                <path
                                    d="M22 8V18C22 18.6 21.6 19 21 19H19V21.1C19 21.8 18.2 22.1 17.7 21.6L15 18.9H9C8.4 18.9 8 18.5 8 17.9V7.90002C8 7.30002 8.4 6.90002 9 6.90002H21C21.6 7.00002 22 7.4 22 8ZM19 11C19 10.4 18.6 10 18 10H12C11.4 10 11 10.4 11 11C11 11.6 11.4 12 12 12H18C18.6 12 19 11.6 19 11ZM17 15C17 14.4 16.6 14 16 14H12C11.4 14 11 14.4 11 15C11 15.6 11.4 16 12 16H16C16.6 16 17 15.6 17 15Z"
                                    fill="black" />
                            </svg>
                        </span>
                        Speak to sales
                    </a>
                </div>
            </div>
        </div>
    </div>

    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <form id="kt_ecommerce_edit_order_form" class="form d-flex flex-column flex-lg-row"
                data-kt-redirect="../../demo1/dist/apps/ecommerce/sales/listing.html">
                <div class="w-100 flex-lg-row-auto w-lg-300px mb-7 me-7 me-lg-10">
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Order Details</h2>
                            </div>
                        </div>

                        <div class="card-body pt-0">
                            <div class="d-flex flex-column gap-10">
                                <div class="fv-row">
                                    <label class="form-label">Order ID</label>

                                    <div class="fw-bolder fs-3">#14564</div>
                                </div>

                                <div class="fv-row">
                                    <label class="required form-label">Payment Method</label>

                                    <select class="form-select mb-2" data-control="select2" data-hide-search="true"
                                        data-placeholder="Select an option" name="payment_method"
                                        id="kt_ecommerce_edit_order_payment">
                                        <option></option>
                                        <option value="visa">Credit Card</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="d-flex flex-column flex-lg-row-fluid gap-7 gap-lg-10">
                    <div class="card card-flush py-4">
                        <div class="card-header">
                            <div class="card-title">
                                <h2>Your basket</h2>
                            </div>
                        </div>

                        <div class="card-body pt-0">
                            <div class="d-flex flex-column gap-10">

                                <div class="separator"></div>

                                <table class="table align-middle table-row-dashed fs-6 gy-5"
                                    id="kt_ecommerce_edit_order_product_table">
                                    <thead>
                                        <tr class="text-start text-gray-400 fw-bolder fs-7 text-uppercase gs-0">
                                            <th class="w-25px pe-2"></th>
                                            <th class="min-w-200px">Course</th>
                                            <th class="">Price</th>
                                            <th class="">Location</th>
                                            <th class="min-w-200px">Employee</th>
                                        </tr>
                                    </thead>

                                    <tbody class="fw-bold text-gray-600">
                                        <tr>
                                            <td>
                                                <div
                                                    class="form-check form-check-sm form-check-custom form-check-solid">
                                                    <i class="bi bi-trash"></i>
                                                </div>
                                            </td>

                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <div class="ms-5">
                                                        <a href=""
                                                            class="text-gray-800 text-hover-primary fs-5 fw-bolder">Product
                                                            1</a>

                                                        <div class="text-muted fs-7">Ref: CourseMetaID</div>
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div class="d-flex align-items-center">
                                                    £100.00
                                                </div>
                                            </td>

                                            <td>
                                                <div class="d-flex align-items-center">
                                                    Location
                                                </div>
                                            </td>

                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <select class="form-select mb-2" data-control="select2"
                                                        data-hide-search="false" data-placeholder="Select an option">
                                                        <option value="">Add Manually</option>
                                                        <option value="">List employees</option>
                                                    </select>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="d-flex justify-content-end">
                        <button type="submit" id="kt_ecommerce_edit_order_submit" class="btn btn-primary">
                            <span class="indicator-label">Place order</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
@endsection
@push('extra-js')
@endpush