<form class="form" method="POST" action="/qualifications">
    @csrf
    <div class="card-body border-top p-9">
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Employee</label><br>
                <small><a href="/employees/create" target="_blank">Create new?</a></small>
            </div>
            <div wire:ignore class="col-lg-8">
                <select wire:model="employee_id" name="employee_id" class="form-select form-select-lg form-select-solid"
                    data-control="select2" data-placeholder="Select employee">
                    @foreach($employees as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Qualification Type</label><br>
                <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
            </div>
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
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Provider</label><br>
                <small><a href="/providers/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8" wire:ignore>
                <select wire:model="provider_id" name="provider_id" class="form-select form-select-lg form-select-solid"
                    data-control="select2" data-hide-search="false">
                    <option selected disabled>Select...</option>
                    @foreach($providers as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label">
                <label class=" fw-bold fs-6">Registration Number</label>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12 fv-row">
                        <input type="text" wire:model="regno" name="regno"
                            class='form-control form-control-lg form-control-solid mb-3 mb-lg-0' placeholder='01234567'>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label">
                <label class="fw-bold fs-6">Expiry Date</label>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12 fv-row">
                        <input type="text" name="expiry_date" wire:model="expiry_date" id="qualExpiry"
                            placeholder="{{  date('d-m-Y') }}"
                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label">
                <label class="fw-bold fs-6">Grade</label>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12 fv-row">
                        <input type="text" wire:model="grade" name="grade"
                            class="form-control form-control-lg form-control-solid mb-3 mb-lg-0"
                            placeholder="Distinction">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="card-footer d-flex justify-content-end py-6 px-9">
        <a href="/employees" class="btn btn-light btn-active-light-primary me-2">Cancel</a>
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
</form>
@include('partials.qualification.types',['courses' => $courses,'qualificationTypes' => $qualificationTypes])