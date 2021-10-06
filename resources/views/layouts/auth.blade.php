<!DOCTYPE html>
<html lang="en">
	<!--begin::Head-->
	<head>
		<title>@yield('title') | CertHub | Simple Construction Training Management</title>
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
		<link rel="shortcut icon" href="assets/media/logos/favicon.ico" />
		<!--begin::Fonts-->
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<!--end::Fonts-->
		<!--begin::Global Stylesheets Bundle(used by all pages)-->
		<link href="assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
	</head>
	<!--end::Head-->
	<!--begin::Body-->
	<body id="kt_body" class="bg-body">
		<!--begin::Main-->
		@yield('content')
		<!--end::Main-->
        <!--begin::Javascript-->
        <script>var hostUrl = "assets/";</script>
		<!--begin::Global Javascript Bundle(used by all pages)-->
		<script src="assets/plugins/global/plugins.bundle.js"></script>
		<script src="assets/js/scripts.bundle.js"></script>
		<!--end::Global Javascript Bundle-->
		<!--begin::Page Custom Javascript(used by this page)-->
		<script src="assets/js/custom/authentication/sign-in/general.js"></script>
        <script src="assets/js/custom/modals/create-account.js"></script>
        <script src="assets/js/custom/authentication/password-reset/new-password.js"></script>
        <script src="assets/js/custom/authentication/password-reset/password-reset.js"></script>
		<!--end::Page Custom Javascript-->
		<!--end::Javascript-->
		<!--end::Global Stylesheets Bundle-->
	</body>
	<!--end::Body-->
</html>

