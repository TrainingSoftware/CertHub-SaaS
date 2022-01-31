<!DOCTYPE html>
<html lang="en">
<!--begin::Head-->
<head>
    <base href="">
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
    <link rel="shortcut icon" href="/assets/media/logos/favicon.ico" />
    <!--begin::Fonts-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
    <!--end::Fonts-->
    <!--begin::Global Stylesheets Bundle(used by all pages)-->
    <link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
    <link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
    <link href="/assets/css/custom.css" rel="stylesheet" type="text/css" />
    @livewireStyles
    <!--end::Global Stylesheets Bundle-->
</head>
<!--end::Head-->
<!--begin::Body-->

<body id="kt_body">
    <!--begin::Main-->
    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            @include('partials.layout.aside-menu')
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
                <!--begin::Header-->
                @include('partials.layout.header')
                <!--end::Header-->
                <!--begin::Content-->
                @if(Auth::user()->email_verified_at === null)
                <!--begin::Alert-->
                <div class="alert bg-danger mx-12 mt-10 mb-0">
                    <!--begin::Wrapper-->
                    <div class="d-flex flex-column pe-0 pe-sm-10">
                        <!--begin::Title-->
                        <h4 class="fw-bold text-white">IMPORTANT</h4>
                        <!--end::Title-->
                        <!--begin::Content-->
                        <span class="text-white">Please verify your email address.
                            <form method="POST" action="/email/verification-notification" class="d-inline">
                                @csrf
                                <button class="btn btn-link d-inline-flex text-white fw-bolder">Resend?</button>
                            </form>
                        </span>
                        <!--end::Content-->
                    </div>
                    <!--end::Wrapper-->
                </div>
                <!--end::Alert-->
                @endif
                @yield('content')
                <!--end::Content-->
                <!--begin::Footer-->
                @include('partials.layout.footer')
                <!--end::Footer-->
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
    <!--end::Root -->
    <!--begin::Scrolltop-->
    <div id="kt_scrolltop" class="scrolltop" data-kt-scrolltop="true">
        <!--begin::Svg Icon | path: icons/duotune/arrows/arr066.svg-->
        <span class="svg-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect opacity="0.5" x="13" y="6" width="13" height="2" rx="1" transform="rotate(90 13 6)" fill="black" />
                <path d="M12.5657 8.56569L16.75 12.75C17.1642 13.1642 17.8358 13.1642 18.25 12.75C18.6642 12.3358 18.6642 11.6642 18.25 11.25L12.7071 5.70711C12.3166 5.31658 11.6834 5.31658 11.2929 5.70711L5.75 11.25C5.33579 11.6642 5.33579 12.3358 5.75 12.75C6.16421 13.1642 6.83579 13.1642 7.25 12.75L11.4343 8.56569C11.7467 8.25327 12.2533 8.25327 12.5657 8.56569Z" fill="black" />
            </svg>
        </span>
        <!--end::Svg Icon-->
    </div>
    @if(request()->is('tenders/*'))
        @include('partials.tenders.search-modal')
    @endif
    <!--end::Main-->
    <script>
        var hostUrl = "assets/";
    </script>
    <!--begin::Javascript-->
    <!--begin::Global Javascript Bundle(used by all pages)-->
    <script src="/assets/plugins/global/plugins.bundle.js"></script>
    <script src="/assets/js/scripts.bundle.js"></script>
    <!--end::Global Javascript Bundle-->
    <!--end::Page Vendors Javascript-->
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
    <script>
        $(function() {
            $('input[type="date"]').datepicker({
                altFormat: "dd-mm-yyyy",
                altField: "#alt-date"
            });

            $("#datepicker").datepicker("option", "altFormat", "dd-mm-yy");
        });
    </script>
    <!--begin::Page Custom Javascript(used by this page)-->
    @if(request()->is('tenders/*'))
        @include('partials.tenders.search-modal')
        <script>
            "use strict";
            var KTProjectOverview = (function () {
                var t = KTUtil.getCssVariableValue("--bs-primary"),
                    e = KTUtil.getCssVariableValue("--bs-light-primary"),
                    a = KTUtil.getCssVariableValue("--bs-success"),
                    r = KTUtil.getCssVariableValue("--bs-light-success"),
                    o = KTUtil.getCssVariableValue("--bs-gray-200"),
                    n = KTUtil.getCssVariableValue("--bs-gray-500");
                return {
                    init: function () {
                        var s, i;
                        !(function () {
                            var t = document.getElementById("project_overview_chart");
                            if (t) {
                                var e = t.getContext("2d");
                                new Chart(e, {
                                    type: "doughnut",
                                    data: { datasets: [
                                        { data: [{{ $activeQualifications }}, {{ $renewalsCount }},], backgroundColor: ["#50CD89", "#F1416C"] }], labels: ["Active", "Expired"] },
                                    options: {
                                        chart: { fontFamily: "inherit" },
                                        cutoutPercentage: 75,
                                        responsive: !0,
                                        maintainAspectRatio: !1,
                                        cutout: "75%",
                                        title: { display: !1 },
                                        animation: { animateScale: !0, animateRotate: !0 },
                                        tooltips: {
                                            enabled: !0,
                                            intersect: !1,
                                            mode: "nearest",
                                            bodySpacing: 5,
                                            yPadding: 10,
                                            xPadding: 10,
                                            caretPadding: 0,
                                            displayColors: !1,
                                            backgroundColor: "#20D489",
                                            titleFontColor: "#ffffff",
                                            cornerRadius: 4,
                                            footerSpacing: 0,
                                            titleSpacing: 0,
                                        },
                                        plugins: { legend: { display: !1 } },
                                    },
                                });
                            }
                        })().render()
                    },
                };
            })();
            KTUtil.onDOMContentLoaded(function () {
                KTProjectOverview.init();
            });
            </script>
    @endif
    <script src="/assets/js/custom/widgets.js"></script>
    <script src="/assets/js/widgets.bundle.js"></script>
    <script src="/assets/js/custom/apps/chat/chat.js"></script>
    <script src="/assets/js/custom/modals/create-app.js"></script>
    <script src="/assets/js/custom/modals/upgrade-plan.js"></script>
    <script src="/assets/js/custom/account/api-keys/api-keys.js"></script>
    <script src="/assets/js/custom/modals/create-api-key.js"></script>
    <!--end::Page Custom Javascript-->
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
    <!--end::Javascript-->
    <!-- Start of HubSpot Embed Code -->
    @if (App::environment('production')) {
    <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/25074209.js"></script>
    }
    @endif
    <!-- End of HubSpot Embed Code -->
    @livewireScripts
</body>
<!--end::Body-->

</html>