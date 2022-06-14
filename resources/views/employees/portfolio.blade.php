<!DOCTYPE html>
<html>

<head></head>

<body style="padding: 3rem">
    <h1>Employee: {{ $employee->firstname }} {{ $employee->lastname }}</h1>

    <h2 style="margin-top: 3rem">Qualification Portfolio</h2>

    <div style="margin-top: 3rem">
        Requsted by: {{ Auth::user()->name }}<br />
        Date: {{ Carbon\Carbon::now() }}
    </div>

    <table class="table" style="margin-top: 3rem; width: 100%">
        <thead>
            <tr>
                <th style="text-align: left">Provider</th>
                <th style="text-align: left">Awarding Body</th>
                <th style="text-align: left">Qualification</th>
                <th style="text-align: left">Start Date</th>
                <th style="text-align: left">End Date</th>
                <th style="text-align: left">Grade</th>
                <th style="text-align: left">Award Date</th>
            </tr>
        </thead>

        @foreach($employee->qualifications as $item)
        <tr>
            <td style="text-align: left">{{ $item->provider->name }}</td>
            <td style="text-align: left"> </td>
            <td style="text-align: left">{{ $item->qualificationtype->name }}</td>
            <td style="text-align: left"></td>
            <td style="text-align: left">{{ $item->expiry_date }}</td>
            <td style="text-align: left">{{ $item->grade }}</td>
            <td style="text-align: left"></td>
        </tr>
        @endforeach

    </table>
</body>

</html>