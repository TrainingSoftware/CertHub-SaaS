<!DOCTYPE html>
<html lang="en">
	<head>
		<base href="">
		<title>@yield('title') | CertHub</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<link rel="shortcut icon" href="/assets/favicon.ico" />
		<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" />
		<link href="/assets/plugins/global/plugins.bundle.css" rel="stylesheet" type="text/css" />
		<link href="/assets/css/style.bundle.css" rel="stylesheet" type="text/css" />
		<link href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css" rel="stylesheet" type="text/css">
		<link href="/assets/css/custom.css" rel="stylesheet" type="text/css" />
		@yield('extra-css')
		@stack('extra-css')
		@livewireStyles
	</head>
	<body id="kt_body">
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				@include('partials.layout.aside-menu')
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					@include('partials.layout.header')
					@yield('content')
					@include('partials.layout.footer')
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
		<script>
			var hostUrl = "assets/";
		</script>
		<script src="/assets/plugins/global/plugins.bundle.js"></script>
		<script src="/assets/js/scripts.bundle.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.29.1/moment.min.js" integrity="sha512-qTXRIMyZIFb8iQcfjXWCO8+M5Tbc38Qi5WzdPOYZHIlZpzBHG3L3by84BBBOiRGiEb7KKtAOAs5qYdUiZiQNNQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
		<script src="/assets/js/custom.js"></script>
        @if(!Auth::user()->isAdmin())
		@include('partials.global.global-search')
        @endif
		@if(request()->is('tenders/*'))
		    @if(!Route::is('tenders.create') && !Route::is('tenders.map'))
		        @include('partials.tenders.search-modal')
		    @endif
		@endif
		@if(\Route::is('tenders.show'))
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
			                            { data: [{{ $activeQualifications }}, {{ $expiredQualificationsTotal }},], backgroundColor: ["#50CD89", "#F1416C"] }], labels: ["Active", "Expired"] },
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

		@if(\Route::is('employees.edit') or \Route::is('tenders.edit') or \Route::is('providers.edit') or \Route::is('employee.contact.edit') or \Route::is('tenders.contact.edit'))
		<script>
			$(function() {
			             var api_key = "{{ env('ALLIES_API')}}";

			             $(document).ready(function() {
			             $("#example_form").on("submit", function(e) {
			                 e.preventDefault();
			                 address_search("#address", "#address_results", "#address_status");
			             });
			             });

			             function address_search(input_element, address_results, status_element, page) {
			             var page = page || 0;

			             var address = $(input_element)
			                 .val()
			                 .trim();

			             if (address != "") {
			                 // Remove any previous validation results
			                 if (page == 0) $(address_results).empty();
			                 // Create a loading message
			                 var loading_html = $("<div></div>", {
			                 id: "address_loading",
			                 text: ""
			                 });
			                 $(input_element).after(loading_html);

			                 $(status_element).text("");

			                 // Country hard coded to GB for this example
			                 var country_code = "GB";
			                 // Create the URL to API including API key and encoded search term
			                 var address_url =
			                 "https://ws.postcoder.com/pcw/" +
			                 api_key +
			                 "/address/" +
			                 country_code +
			                 "/" +
			                 encodeURIComponent(address) +
			                 "?lines=3&include=county,posttown,postcode&page=" +
			                 page;
			                 // Call the API
			                 $.ajax({
			                 url: address_url
			                 })
			                 .done(function(data) {
			                     $("#address_loading").remove();

			                     // For only one result, simply populate the fields, rather than asking the user to select from list
			                     if (data.length == 1) {
			                     select_address(data[0], address_results, status_element);
			                     $(status_element).text(
			                         '"' +
			                         data[0].summaryline +
			                         '" selected, address fields below populated'
			                     );
			                     } else if (data.length > 1) {
			                     $.each(data, function(index, item) {
			                         var address_option = $("<div></div>", {
			                         class: "radio",
			                         click: function(e) {
			                             // Only trigger if it's a click with the mouse, not caused by using arrow keys
			                             if (e.type === "click" && e.offsetX !== 0 && e.offsetY !== 0) {
			                             e.preventDefault();
			                             select_address(item, address_results, status_element);
			                             }
			                         },
			                         keydown: function(e) {
			                             // When using the keyboard, on return/enter select the item
			                             var code = e.keyCode || e.which;
			                             if (code == 13) {
			                             e.preventDefault();
			                             select_address(item, address_results, status_element);
			                             }
			                         }
			                         }).append(
			                         $("<label></label>", {
			                             text: item.summaryline
			                         }).prepend(
			                             $("<input>", {
			                             type: "radio",
			                             name: "address_radio",
			                             id: "address_" + page + "_" + index,
			                             value: index
			                             })
			                         )
			                         );

			                         $(address_results).append(address_option);
			                     });
			                     // Check if we have more than one page of results (Slight edge case)
			                     // Either let your user page through the results using button or
			                     // show a message to encourage them to refine their search.
			                     // Typically adding a house number or name along with postcode helps
			                     var last_index = data.length - 1;
			                     // Remove existing more button, if exists
			                     $("#show_more_button").remove();
			                     if (data[last_index].morevalues) {
			                         // Create the more button and add some context to text, using totalresutls element
			                         var show_more_button = $("<button>", {
			                         text:
			                             data[last_index].totalresults +
			                             " addresses found, click to show next 100",
			                         id: "show_more_button",
			                         click: function(e) {
			                             e.preventDefault();

			                             address_search(
			                             input_element,
			                             address_results,
			                             status_element,
			                             data[last_index].nextpage
			                             );
			                         }
			                         });
			                         // Insert button at end of existing results
			                         $(address_results).append(show_more_button);
			                         // Accessible status message to say more than 100 addresses
			                         $(status_element).text(
			                         data[last_index].totalresults +
			                             " addresses found, showing 100 per page. This is page " +
			                             (parseInt(page) + 1) +
			                             ". Use tab to reach next page button, after address results."
			                         );
			                     } else {
			                         $(status_element).text(data.length + " addresses found");
			                     }
			                     } else {
			                     $(address_results).text("No addresses found");
			                     $(status_element).text("No addresses found");
			                     }
			                 })
			                 .fail(function(error) {
			                     loading_html.remove();
			                     $(status_element).text("Error occurred");
			                     $(address_results).text("Error occurred");
			                     // Triggered if API does not return HTTP code between 200 and 399
			                     // More info - https://developers.alliescomputing.com/postcoder-web-api/error-handling
			                 });
			             } else {
			                 // Could show an "Address search term is required" message here
			             }
			             }

			             function select_address(address, address_results, status_element) {
			             $(address_results).empty();

			             $(status_element).text(
			                 '"' + address.summaryline + '" selected, address fields below populated'
			             );

			             // Populate fields
			             $("#address_line_1").val(address.addressline1 || "");
			             $("#address_line_2").val(address.addressline2 || "");
			             $("#posttown").val(address.posttown || "");
			             $("#county").val(address.county || "");
			             $("#postcode").val(address.postcode || "");
			             $("#country").val(address.country || "");

			             // Full list of response elements
			             // https://developers.alliescomputing.com/postcoder-web-api/address-lookup
			             }

			         });
		</script>
		@endif
		@if ($message = Session::get('success'))
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
		@if ($message = Session::get('error'))
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

			toastr.error("{{ $message }}");
		</script>
		@endif
		<script>
			$('#bulkButton').click(function(){
			    $('#bulkAdd').modal({show:true});
			    $('#addQualificationType').modal({show:false})
			})
		</script>
		@livewireScripts
        @yield('extra-js')
		@stack('extra-js')
        <script>
            window.livewire.on('qualificationSelected', () => {
                 $('#kt_modal_users_search').modal('hide');
            });
        </script>

	</body>
</html>
