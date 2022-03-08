 <div class="card mb-5 mb-xl-8">

                <!--begin::Header-->
                <div class="card-header border-0 pt-5">
                    <h3 class="card-title align-items-start flex-column">
                        <span class="card-label fw-bolder fs-3 mb-1">Renewal offers</span>
                        <span class="text-muted mt-1 fw-bold fs-7">{{$courseMetas->total()}} available</span>
                    </h3>
                    <div class="row w-100">
                        <div class="col-3" wire:ignore>
                            <select wire:model="location" id="select2" class="form-control form-control-solid">
                                <option value="">Location</option>
                                @foreach($locations as $location)
                                   <option value="{{$location->id}}">{{$location->name}}</option>
                                @endforeach
                            </select>
                        </div>
                         <div class="col-2">
                             <input type="text" wire:model.lazy="dateStart" class="form-control form-control-solid" id="expiryStart" placeholder="Date start" autocomplete="off">
                        </div>
                        <div class="col-2">
                             <input type="text" wire:model.lazy="dateEnd" class="form-control form-control-solid" id="expiryEnd" placeholder="Date end" autocomplete="off">
                        </div>
                    </div>
                </div>
                <!--end::Header-->
                <!--begin::Body-->
                <div class="card-body py-3">
                    <!--begin::Table container-->
                    <div class="table-responsive">
                        <!--begin::Table-->
                        <table class="table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3">
                            <!--begin::Table head-->
                            <thead>
                                <tr class="fw-bolder text-muted">
                                    <th class="" wire:click="sortBy('date')">Date<i class="{{$sortDirection == "asc" ? 'fa fa-angle-down' : 'fa fa-angle-up'}}"></i></th>
                                    <th class="">Location</th>
                                    <th class="">Duration</th>
                                    <th class="">Price</th>
                                </tr>
                            </thead>
                            <!--end::Table head-->
                            <!--begin::Table body-->
                            <tbody>
                            @foreach($courseMetas as $meta)
                                <tr>
                                    <td>
                                        <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">
                                           {{date("d-m-Y",strtotime($meta->date))}}</a>
                                    </td>
                                    <td>
                                        <a href="#"
                                            class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">{{optional($meta->location)->name}}</a>
                                    </td>
                                    <td>
                                        <a href="#" class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">2
                                            {{optional($meta->duration)->name}}</a>
                                    </td>
                                    <td>
                                        <a href="#"
                                            class="text-dark fw-bolder text-hover-primary d-block mb-1 fs-6">£{{$meta->price}}
                                        </a>
                                    </td>
                                    <td class="text-end">
                                        <a href="https://certhub.co/orders/{{$meta->id}}" target="__blank" class="btn btn-primary btn-sm">Book now</a>
                                    </td>
                                </tr>
                            @endforeach

                            </tbody>
                            <!--end::Table body-->
                        </table>
                        {{$courseMetas->links()}}
                        <!--end::Table-->
                    </div>
                    <!--end::Table container-->
                </div>
                <!--begin::Body-->
            </div>

@push('extra-js')
<script>
    $(document).ready(function() {
        $('#select2').select2();
        $('#select2').on('change', function (e) {
            var data = $('#select2').select2("val");
            @this.set('location', data);
        });
    });
</script>
@endpush
