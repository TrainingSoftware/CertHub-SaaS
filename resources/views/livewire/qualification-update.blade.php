<div class="row mb-6">
    <label class="col-lg-4 fw-bold text-muted justify-content-center align-self-center">
        <span class="required">Qualification Type</span>
    </label>
    <div class="col-lg-8">
        <div class="input-group">
            <input type="text" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" disabled
                wire:model="qualificationtype">
            <input type="hidden" name="qualificationtype_id" wire:model="qualificationtype_id">
            <input type="hidden" name="list" wire:model="list">
            <span class="input-group-text border-0 p-0 pe-2" id="basic-addon2">
                <a class="btn btn-primary btn-sm bg-success" data-bs-toggle="modal"
                    data-bs-target="#kt_modal_users_search">Library</a>
            </span>
        </div>
    </div>
</div>