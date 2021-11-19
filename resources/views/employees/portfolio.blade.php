<!DOCTYPE html>
<html>
<head><link rel="stylesheet" href="invoice.css"></head>
<body style="padding: 3rem">
<h1>Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>
<h3>Position: {{ $employee->position }}</h3>

<h2 style="margin-top: 3rem">Qualification Portfolio</h2>

<div style="margin-top: 3rem">
    Requsted by: {{ Auth::user()->name }}<br />
    Date: {{ Carbon\Carbon::now() }}
</div>

<table class="table" style="margin-top: 3rem; width: 100%">
    <thead>
    <tr>
        <th style="text-align: left">Qualification
        <th style="text-align: left">Qualified on</th>
        <th style="text-align: left">Expires on</th>
    </tr>
    </thead>

    @foreach($employee->qualifications as $item)
    <tr>
        <td style="text-align: left">{{ $item->qualificationtype->name }}</td>
        <td style="text-align: left">{{ $item->created_at }}</td>
        <td style="text-align: left">{{ $item->expiry_date }}</td>
    </tr>
    @endforeach

</table>
</body>
</html>
