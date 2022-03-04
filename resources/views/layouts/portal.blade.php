<!DOCTYPE html>
<html lang="en">
	<head>
		<base href="">
		<title>{{ Auth::guard('portal')->user()->firstname }} {{ Auth::guard('portal')->user()->lastname }} | CertHub</title>
		<meta charset="utf-8" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta property="og:locale" content="en_GB" />
		<meta property="og:type" content="article" />
		<meta property="og:title" content="" />
		<meta property="og:url" content="" />
		<meta property="og:site_name" content="" />
		<link rel="canonical" href="" />
		<link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
		<link href="/assets/css/custom.css" rel="stylesheet" type="text/css" />
	</head>
	<body id="kt_body">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				@include('partials.portal.layout.aside-menu')
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					@include('partials.portal.layout.header')
					@yield('content')
					@include('partials.portal.layout.footer')
				</div>
			</div>
		</div>
		<div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
			<span class="svg-icon">
				<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
					<rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
					<path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
				</svg>
			</span>
		</div>
		<script>var hostUrl = "assets/";</script>
		<script src="/assets/plugins/global/plugins.bundle.js"></script>
		<script src="/assets/js/scripts.bundle.js"></script>
		<script src="/assets/js/custom/account/api-keys/api-keys.js"></script>
		<script src="/assets/js/custom/modals/create-api-key.js"></script>
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
		<script>
			$(function() {
			    $('input[type="date"]').datepicker({
			        altFormat: "dd-mm-yyyy",
			        altField: "#alt-date"
			    });
			
			    $( "#datepicker" ).datepicker( "option", "altFormat", "dd-mm-yy" );
			});
		</script>
		<script src="/assets/js/custom/widgets.js"></script>
		<script src="/assets/js/custom/apps/chat/chat.js"></script>
		<script src="/assets/js/custom/modals/create-app.js"></script>
		<script src="/assets/js/custom/modals/upgrade-plan.js"></script>
		@if ($message = Session::get('success'))
		<style>
			.toast-top-right {
			top: 90px !important;
			}
		</style>
		<script>
			toastr.options = {
			    "closeButton": true,
			    "debug": false,
			    "newestOnTop": true,
			    "progressBar": true,
			    "positionClass": "toast-top-right",
			    "preventDuplicates": false,
			    "onclick": null,
			    "showDuration": "500",
			    "hideDuration": "1000",
			    "timeOut": "5000",
			    "extendedTimeOut": "1000",
			    "showEasing": "swing",
			    "hideEasing": "linear",
			    "showMethod": "fadeIn",
			    "hideMethod": "fadeOut"
			};
			
			toastr.success("{{ $message }}");
		</script>
		@endif
		@if (App::environment('production')) {
		<script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25074209.js"></script>
		}
		@endif
	</body>
</html>