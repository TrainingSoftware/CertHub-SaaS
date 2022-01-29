<div>
    <form method="GET" class="w-100 position-relative mb-5" autocomplete="off">
        <span class="svg-icon svg-icon-2 svg-icon-lg-1 svg-icon-gray-500 position-absolute top-50 ms-5 translate-middle-y">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
                <path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
            </svg>
        </span>
        <input type="text" class="form-control form-control-lg form-control-solid px-15" placeholder="Search by name or email..." wire:model="term" autofocus/>
    </form>

    <div wire:loading class="text-center w-100">
        <i class="fas fa-spinner fa-spin fa-1x"></i> <span class="h5">Searching employees...</span>
    </div>
    
    <div wire:loading.remove>
        @if ($term == "")
        @else
            @if($employees->isEmpty())
            <div class="text-center py-5">
                <div class="fw-bold py-10">
                    <div class="text-gray-600 fs-3 mb-2">No employees found</div>
                    <div class="text-muted fs-6">Try to search by name or email...</div>
                </div>
                <div class="text-center px-5">
                    <img src="/assets/media/illustrations/sketchy-1/1.png" alt="" class="w-50" />
                </div>
            </div>
            @else
            <div class="mh-375px scroll-y me-n7 pe-7">
                @foreach($employees as $employee)
                <div class="rounded d-flex flex-stack bg-active-lighten p-4">
                    <div class="d-flex align-items-center">
                        <label class="form-check form-check-custom form-check-solid me-5">
                            <input class="form-check-input" type="checkbox" name="users" />
                        </label>
                        <div class="symbol symbol-35px symbol-circle">
                            <img alt="Pic" src="/assets/media/avatars/300-6.jpg" />
                        </div>
                        <div class="ms-5">
                            <a href="#" class="fs-5 fw-bolder text-gray-900 text-hover-primary mb-2">{{ $employee->firstname }} {{ $employee->lastname}}</a>
                            <div class="fw-bold text-muted">{{ $employee->email }}</div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="d-flex flex-center mt-15">
                <button type="reset" data-bs-dismiss="modal" class="btn btn-active-light me-3">Cancel</button>
                <button type="submit" class="btn btn-primary">Add Selected Users</button>
            </div>
            @endif
        @endif
    </div>
</div>