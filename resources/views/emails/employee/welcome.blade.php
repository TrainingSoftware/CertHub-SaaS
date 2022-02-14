@component('mail::message')
#Introduction
Welcome {{$employee->name}} , here's your password : {{$password}}

Thanks, <br>
{{config('app.name')}}
@endcomponent
