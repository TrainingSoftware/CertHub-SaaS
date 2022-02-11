@component('mail::message')
#Introduction
Welcome {{$employee->name}}

Thanks, <br>
{{config('app.name')}}
@endcomponent
