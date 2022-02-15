@extends('layouts.auth')
@section('title', 'Login')

@section('content')
    <div class="d-flex flex-column flex-root">
        <div class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed" style="background-image: url(assets/media/illustrations/sigma-1/14.png">
            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                 <livewire:login />
            </div>
        </div>
    </div>
@endsection
