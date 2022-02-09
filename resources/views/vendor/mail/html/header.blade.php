<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'Laravel')
<img src="https://certhub.co/storage/app/media/branding/CertHub%20-%20Dark.png" class="logo" alt="CertHub Logo">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
