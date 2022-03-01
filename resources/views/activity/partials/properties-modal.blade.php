<a href="#" data-bs-toggle="modal" data-bs-target="#log-info-modal-{{ $activity->id }}"
   class="btn btn-sm btn-clean btn-icon btn-icon-md btn-outline-hover-success" title="View">
    <i class="la la-list-ul kt-font-success"></i>
</a>
<div class="modal fade" id="log-info-modal-{{ $activity->id }}">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Properties</h5>
                <div class="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
                    <span class="svg-icon svg-icon-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
                            <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
                        </svg>
                    </span>
                </div>
            </div>
            <div class="modal-body">
                @csrf
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <textarea type="text" rows="20" class="form-control">{{ json_encode(json_decode($activity->properties), JSON_PRETTY_PRINT) }}</textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-outline-brand" data-bs-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
