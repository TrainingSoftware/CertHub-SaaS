<div class="modal" id="bulkAdd"  tabindex="-1" aria-hidden="true">
    <div class="modal-dialog mw-700px">
        <div class="modal-content">
            <div class="modal-header pb-0 border-0 d-flex justify-content-end">
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <span class="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="modal-body scroll-y mx-5 mx-xl-10 pt-0 pb-15">
                <div class="text-center mb-13">
                    <h1 class="d-flex justify-content-center align-items-center mb-3">Add Training Providers</h1>
                    <div class="text-muted fw-bold fs-5">Add each provider name on a new line, press enter to enter new line
                    </div>
                </div>
                <div class="row my-3">
                    <form class="form col-12" method="POST" action="{{route('providers.bulk')}}">
                        @csrf
                        <div class="form-group">
                            <textarea name="providers" class="form-control form-control form-control-solid" data-kt-autosize="true"></textarea>
                            <button class="btn btn-primary w-100 mt-5" type="submit">Import</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</div>



