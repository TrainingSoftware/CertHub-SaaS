<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div>
                <div class="card-header border-0 py-6 px-0">
                    <div class="card-title w-100">
                        <div class="row w-100">
                            <div class="col-3">
                                <div class="d-flex align-items-center position-relative">
                                    <select  class="form-control form-control-solid" wire:model.lazy="subject"  data-control="select2">
                                        <option value="">Filter By Subject</option>
                                        @foreach($subjects as $subject)
                                        <option value="{{$subject}}">{{$subject}}</option>
                                        @endforeach
                                    </select>
                                </div>
                        </div>
                            <div class="col-3">
                                <select  class="form-control form-control-solid" wire:model.lazy="action"  data-control="select2">
                                    <option value="">Filter By Action</option>
                                    <option value="updated">Update</option>
                                    <option value="deleted">Delete</option>
                                    <option value="created">Create
                                    <option value="viewed">View</option>
                                </select>
                            </div>
                            <div class="col-3">
                                <select  class="form-control form-control-solid" wire:model.lazy="user" data-control="select2">
                                    <option value="">Filter By User </option>
                                    @foreach($users as $key => $value)
                                        <option value="{{$key}}">{{$value}}</option>
                                    @endforeach
                                </select>
                            </div>
							<div class="col-2 mt-3">
                                <a href="{{route('activity.logs')}}">
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
                <div class="card-body p-0">
                    <div class="table-responsive">
                        <table class="table align-middle table-hover table-rounded table-striped border gy-7 gs-7">
                            <thead>
                                <tr class="text-start text-muted fw-bolder fs-7 text-uppercase gs-0">
                                    <th class="min-w-125px" wire:click="sortBy('log_name')" >Subject <i class="{{$sortDirection == "asc" ? 'fa fa-angle-down' : 'fa fa-angle-up'}}"></i></th>
                                    <th class="min-w-100px" wire:click="sortBy('description')">Action <i class="{{$sortDirection == "asc" ? 'fa fa-angle-down' : 'fa fa-angle-up'}}"></i></th>
                                    <th class="min-w-100px" >Triggered By </th>
                                    <th class="min-w-100px" wire:click="sortBy('created_at')">Created at <i class="{{$sortDirection == "asc" ? 'fa fa-angle-down' : 'fa fa-angle-up'}}"></i></th>
                                    <th class="min-w-100px">Actions <i class="{{$sortDirection == "asc" ? 'fa fa-angle-down' : 'fa fa-angle-up'}}"></i></th>
                                </tr>
                            </thead>
                            <tbody class="text-gray-600 fw-bold">
                                @foreach($activities as $activity)
                                    <tr>
                                        <td>{{$activity->log_name}}</td>
                                        <td>{{$activity->description}}</td>
                                        <th>{{optional($activity->causer)->name}}</th>
                                        <td>{{$activity->created_at}}
                                        <td>
                                           @include('activity.partials.properties-modal',['activity' => $activity])
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                        {{$activities->links()}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

