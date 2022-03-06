<form class="form" method="POST" action="/qualifications">
    @csrf
    <div class="card-body border-top p-9">
        <div class="row mb-6" >
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Employee</label><br>
                <small><a href="/employees/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8">
                <select wire:model="employee_id" name="employee_id"  class="form-select form-select-lg form-select-solid" data-placeholder="Select employee" >
                    @foreach($employees as $item)
                    <option value="{{ $item->id }}">{{ $item->name }}</option>
                    @endforeach
                </select>
            </div>
        </div>
         <div class="row mb-6">
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Choose Qualification Type to use</label><br>
                <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8">
                <label class="radio radio-success">
                    <input type="radio" wire:model="list" name="list" value="custom"/>
                    <span></span>
                    Custom<span class="text-muted">(This is one created by you )</span>
                </label>
                <label class="radio radio-success">
                    <input type="radio"  wire:model="list" name="list" value="library"/>
                    <span></span>
                    Library <span class="text-muted">(This is list of qualification types we have existing)</span>
                </label>
            </div>
        </div>
        @if($list == "custom")
        <div class="row mb-6" >
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Qualification Type</label><br>
                <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8">
                <select wire:model="qualificationtype_id" name="qualificationtype_id"   class="form-select form-select-lg form-select-solid"  >
                    @foreach($qualificationTypes as $key => $item)
                    <option value="{{ $key }}">{{ $item }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        @elseif($list == "library")
        <div class="row mb-6" >
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Qualification Type</label><br>
                <small><a href="/qualificationtypes/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8">
                <select wire:model="qualificationtype_id" name="qualificationtype_id"  class="form-select form-select-lg form-select-solid"  >
                    @foreach($qualificationTypes as $key => $item)
                    <option value="{{ $key }}">{{ $item }}</option>
                    @endforeach
                </select>
            </div>
        </div>
        @endif
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label py-0">
                <label class="required fw-bold fs-6">Provider</label><br>
                <small><a href="/providers/create" target="_blank">Create new?</a></small>
            </div>
            <div class="col-lg-8" >
                <select wire:model="provider_id"  name="provider_id" class="form-select form-select-lg form-select-solid"  data-placeholder="Select provider" data-allow-clear="true" data-hide-search="false">
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
                        <input type="text" wire:model="regno" name="regno" class= 'form-control form-control-lg form-control-solid mb-3 mb-lg-0' placeholder = '01234567'>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mb-6">
            <div class="col-lg-4 col-form-label">
                <label class="required fw-bold fs-6">Expiry Date</label>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12 fv-row">
                        <input type="text" name="expiry_date" wire:model="expiry_date" id="qualExpiry" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0">
                    </div>
                </div>
            </div>
        </div>
         <div class="row mb-6">
            <div class="col-lg-4 col-form-label">
                <label class="required fw-bold fs-6">Grade</label>
            </div>
            <div class="col-lg-8">
                <div class="row">
                    <div class="col-lg-12 fv-row">
                        <input type="text" wire:model="grade" name="grade" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Enter Grade">
                    </div>
                </div>
            </div>
        </div>

    </div>
    <div class="card-footer d-flex justify-content-end py-6 px-9">
        <a href="/employees"
            class="btn btn-light btn-active-light-primary me-2">Cancel</a>
        <button type="submit" class="btn btn-primary">Create</button>
    </div>
</form>
