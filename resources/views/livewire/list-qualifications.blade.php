<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div class="card">
                @if(Auth::user()->companies->first()->qualifications->count() != 0 )
                <div class="card-header border-0 py-6">
                    <div class="card-title w-100">
                        
                            <div class="row w-100">
                                <div class="col-3">
                                    <select wire:model="qualificationType" class="form-control form-control-solid">
                                        <option value="">Qualification Type</option>
                                        @foreach($qualificationTypes as $qualificationType)
                                           <option value="{{$qualificationType->id}}">{{$qualificationType->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                <div class="col-3">
                                    <select wire:model="provider" class="form-control form-control-solid">
                                        <option value="">Provider</option>
                                        @foreach($providers as $provider)
                                           <option value="{{$provider->id}}">{{$provider->name}}</option>
                                        @endforeach
                                    </select>
                                </div>
                                 <div class="col-2">
                                     <input type="text" wire:model.lazy="expiryStart" class="form-control form-control-solid" id="expiryStart" placeholder="Expiry start" autocomplete="off">
                                </div>
                                <div class="col-2">
                                     <input type="text" wire:model.lazy="expiryEnd" class="form-control form-control-solid" id="expiryEnd" placeholder="Expiry end" autocomplete="off">
                                </div>
                                <div class="col-2 mt-3">
                                    <a href="/qualifications">
                                        <span class="svg-icon svg-icon-muted svg-icon-1hx">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-clockwise" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"/>
                                                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z"/>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                    </div>
                </div>
                @endif
                @if(Auth::user()->companies->first()->qualifications->count() == 0)
                <div class="card-body p-0">
                    <div class="card-px text-center py-20 my-10">
                        <h2 class="fs-2x fw-bolder mb-10">
                            Add Your First Qualification!
                        </h2>
                        <p class="text-gray-400 fs-4 fw-bold mb-10">
                            It looks like you have a few outstanding tasks to do before you can add a qualification:
                        </p>
                        <ul class="list-unstyled mb-10 text-left">
                            @if(Auth::user()->companies->first()->employees->count() == 0)
                            <li class="h4 mb-4">
                                <a href="/employees/create" class="fs-1.5x">Add your first Employee</a>
                            </li>
                            @else
                            <li class="text-success h4 mb-4">
                                <strike>Add your first Employee</strike>
                            </li>
                            @endif
                            @if(Auth::user()->companies->first()->providers->count() == 0)
                            <li class="h4 mb-4">
                                <a href="/providers/create">Add your first Provider</a>
                            </li>
                            @else
                            <li class="text-success h4 mb-4">
                                <strike>Add your first Provider</strike>
                            </li>
                            @endif
                            @if(Auth::user()->companies->first()->qualificationtypes->count() == 0)
                            <li class="h4 mb-4">
                                <a href="/qualificationtypes/create">Add your first Qualification Type</a>
                            </li>
                            @else
                            <li class="text-success h4 mb-4">
                                <strike>Add your first Qualification Type</strike>
                            </li>
                            @endif
                        </ul>
                        @if(Auth::user()->companies->first()->qualificationtypes->count() != 0 && Auth::user()->companies->first()->providers->count() != 0 && Auth::user()->companies->first()->employees->count() != 0)
                        <a href="/qualifications/create" class="btn btn-primary">Add Qualification</a>
                        @endif
                    </div>
                    <div class="text-center px-4">
                        <img class="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/2.png" />
                    </div>
                </div>
                @else
                <div class="card-body pt-0">
                    <table class="table align-middle table-row-dashed fs-6 gy-5" id="kt_table_users">
                        <thead>
                            <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                <th class="min-w-100px">Type</th>
                                <th class="min-w-100px">Employee</th>
                                <th class="min-w-100px">Provider</th>
                                <th class="min-w-50px">Status</th>
                                <th class="min-w-100px">Expires on</th>
                                <th class=""></th>
                                <th class=""></th>
                            </tr>
                        </thead>
                        <tbody class="text-gray-600 fw-bold">
                            @foreach ($qualifications as $item)
                                @if($item->employee->is_archived == 0)
                                <tr>
                                    <td>
                                        <a href="/qualifications/{{ $item->id }}" class="text-gray-800 text-hover-primary">
                                            {{ $item->qualificationtype->name }}
                                        </a>
                                    </td>
                                    <td>
                                        <a href="/employees/{{ $item->employee->id }}" class="text-gray-800 text-hover-primary">{{ $item->employee->firstname }} {{ $item->employee->lastname }}</a>
                                    </td>
                                    <td>
                                        <a href="/providers/{{ $item->provider->id }}" class="text-gray-800 text-hover-primary">
                                            {{ $item->provider->name }}
                                        </a>
                                    </td>
                                    <td>
                                        @if($item->expiry_date < Carbon\Carbon::today())
                                            <span class="badge badge-danger">Expired</span>
                                        @elseif($item->expiry_date->format('m') == Carbon\Carbon::today()->format('m') && $item->expiry_date > Carbon\Carbon::today())
                                            <span class="badge badge-warning">Expiring</span>
                                        @else
                                            <span class="badge badge-success">Valid</span>
                                        @endif
                                    </td>
                                    <td>{{ $item->expiry_date->format('d/m/Y') }}</td>
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
                                        @else
                                            <span data-bs-toggle="tooltip" data-bs-placement="top" title="No Qualification file uploaded">
                                                <span class="svg-icon svg-icon-muted svg-icon-2hx">
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
                                        @endif
                                    </td>
                                    <td class="text-end">
                                        <a href="/qualifications/{{ $item->id }}" class="btn btn-light btn-sm">View</a>
                                    </td>
                                </tr>
                                @endif
                            @endforeach
                        </tbody>
                    </table>
                </div>
                @endif
            </div>
        </div>
    </div>
</div>
