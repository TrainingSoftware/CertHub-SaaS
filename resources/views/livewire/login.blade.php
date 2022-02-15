<div>
    <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">

        <form wire:submit.prevent="submit" class="form w-100" id="kt_sign_in_form">
            @if($showCompany == false)
            <div class="text-center mb-10">
                <h1 class="text-dark mb-3">Employee Sign In to CertHub</h1>
            </div>
            <div class="fv-row mb-10">
                <label class="form-label fs-6 fw-bolder text-dark">Email</label>
                <input wire:model="email" class="form-control form-control-lg form-control-solid" type="email"
                       autocomplete="off"/>
                @error('email') <span ...>{{ $message }}</span> @enderror
            </div>
            <div class="text-center">
                <button wire:click="getCompany" class="btn btn-lg btn-primary w-100 mb-5">
                    Continue
                </button>
            </div>
                @else
                <div class="text-center mb-10">
                <h1 class="text-dark mb-3">{{$company->name}}</h1>
            </div>
                <div class="fv-row mb-10">
                    <label class="form-label fs-6 fw-bolder text-dark">Password</label>
                    <input wire:model="password" class="form-control form-control-lg form-control-solid" type="password"
                           autocomplete="off"/>
                   <span ...>{{ $loginError }}</span>
                </div>
                <div class="text-center">
                    <button type="submit" class="btn btn-lg btn-primary w-100 mb-5">
                        Login
                    </button>
                </div>
                @endif
        </form>
    </div>
</div>
