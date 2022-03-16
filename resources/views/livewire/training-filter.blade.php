<div class="modal fade" wire:ignore.self tabindex="-1" id="trainingCategories">
    <div class="modal-dialog modal-xl">
        <div class="modal-content shadow-none">
            <div class="modal-body">
                <div class="position-relative w-100">
                    <div class="card mb-7 p-5 border-0">
                        <form action="{{route('training.filter')}}" method="POST" id="course-form">
                            @csrf
                            <div class="row g-8 mb-10">
                                <div class="col-lg-12">
                                    <label class="fs-6 form-label fw-bolder text-dark">Select
                                        Type</label>

                                    <div class="nav-group nav-group-fluid">
                                        <!--begin::Option-->
                                        <label>
                                            <input type="radio" class="btn-check" wire:model.lazy="courseType"
                                                   name="type" value="commercial"
                                                   checked="checked">
                                            <span
                                                class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">Commercial</span>
                                        </label>
                                        <label>
                                            <input type="radio" class="btn-check" wire:model.lazy="courseType"
                                                   name="type" value="nvq">
                                            <span
                                                class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">NVQ</span>
                                        </label>

                                        <label>
                                            <input type="radio" class="btn-check" wire:model.lazy="courseType"
                                                   name="type" value="cpd">
                                            <span
                                                class="btn btn-sm btn-color-muted btn-active btn-active-primary fw-bolder px-4">CPD</span>
                                        </label>
                                    </div>
                                    <!--end::Radio group-->
                                </div>
                                <!--end::Col-->
                            </div>
                            <!--end::Row-->

                            <div class="row g-8 mb-10 {{$courseType == null ? "d-none" : ""}}">
                                <div class="col-lg-6">
                                    <label class="fs-6 form-label fw-bolder text-dark">Category
                                        Type</label>
                                    <!--begin::Select-->
                                    <select class="form-select form-select-solid "
                                            id="select2-category" data-placeholder="select category..."
                                            {{$categoryType == null ? "disabled" : ""}}
                                            data-hide-search="false" wire:model="category" name="category" tabindex="-1"
                                            aria-hidden="true">
                                        <option value="">Select a category</option>
                                        @foreach($categoryType as $type)
                                            <option value="{{$type->id}}">{{$type->name}}</option>
                                        @endforeach
                                    </select>
                                    <!--end::Select-->
                                </div>
                                <!--end::Col-->
                                <!--begin::Col-->
                                <div class="col-lg-6">
                                    <label class="fs-6 form-label fw-bolder text-dark">Course
                                        Type</label>
                                    <select class="form-select form-select-solid"
                                            {{$category == "" ? "disabled" : ""}}
                                            data-placeholder="select Course..."
                                            id="select2-course"
                                            data-hide-search="false" tabindex="-1" wire:model="selectedCourse"
                                            name="course_id"
                                            aria-hidden="true">
                                        <option value="">Select a Course</option>
                                        @foreach($actualCourses as $course)
                                            <option value="{{$course->id}}">{{$course->name}}</option>
                                        @endforeach
                                    </select>
                                    <!--end::Select-->
                                </div>
                                <!--end::Col-->

                            </div>

                            <!--end::Row-->
                            <!--begin::Row-->
                            @if($courseType == "commercial")
                                <div class="row g-8 mb-0">
                                    <div class="col-lg-3">
                                        <label class="fs-6 form-label fw-bolder text-dark">Start Date</label>
                                        <input class="form-control" id="trainingStartDate" type="text"
                                               name="start_date"/>
                                    </div>
                                    <div class="col-lg-3">
                                        <label class="fs-6 form-label fw-bolder text-dark">End Date</label>
                                        <input class="form-control" id="trainingEndDate" type="text" name="end_date"/>
                                    </div>
                                    <div class="col-lg-3">
                                        <label class="fs-6 form-label fw-bolder text-dark">Location</label>
                                        <!--begin::Select-->
                                        <select class="form-select form-select-solid " name="location_id"
                                                data-placeholder="Select location"
                                                id="select2-location"
                                                {{$selectedCourse == null ? "disabled" : ""}}

                                                tabindex="-1" aria-hidden="true">
                                            <option value="">Select location</option>
                                            @foreach($locations as $location)
                                                <option value="{{$location->id}}"> {{$location->name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <!--end::Col-->
                                    <!--begin::Col-->
                                    <div class="col-lg-3">
                                        <label class="fs-6 form-label fw-bolder text-dark">Remote
                                            delivery?</label>
                                        <div class="form-check form-switch form-check-custom form-check-solid mt-1">
                                            <input class="form-check-input" type="checkbox"
                                                   id="flexSwitchChecked" checked="checked" name="is_home_based">
                                            <label class="form-check-label" for="flexSwitchChecked">Active</label>
                                        </div>
                                    </div>
                                    <!--end::Col-->

                                </div>
                            @endif

                        </form>
                    </div>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button type="submit" class="btn btn-primary" onclick="document.getElementById('course-form').submit()">Submit</button>
                <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>

@push('extra-js')
    <script>
        $(document).ready(function () {
            window.addEventListener('reApplySelect2', event => {
                $('.form-select').select2();
                $('#trainingEndDate').flatpickr({
                    dateFormat: "d-m-Y",
                    disableMobile: "true",
                    defaultDate: 'null'
                });
                $('#trainingStartDate').flatpickr({
                    dateFormat: "d-m-Y",
                    disableMobile: "true",
                    defaultDate: 'null'
                });
            });
        });
    </script>
    <script>

        $(document).ready(function () {
            $('#select2-course').select2();
            $('#select2-course').on('change', function (e) {
                var data = $('#select2-course').select2("val");
            @this.set('selectedCourse', data);
            });

            $('#select2-category').select2();
            $('#select2-category').on('change', function (e) {
                var data = $('#select2-category').select2("val");
                console.log(data)
            @this.set('category', data);
            });
            $('#select2-location').select2();
            $('#select2-location').on('change', function (e) {
                var data = $('#select2-location').select2("val");
                // @this.set('category', data);
            });
        });
    </script>
@endpush
