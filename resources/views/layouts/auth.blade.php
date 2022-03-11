<!DOCTYPE html>
<html lang="en">
	<head>
		<title>@yield('title') | CertHub</title>
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
		<script src="https://js.stripe.com/v3/"></script>
		@livewireStyles
	</head>
	<body id="kt_body" class="bg-body">
		@yield('content')
		<script>var hostUrl = "/assets/";</script>
		<script src="/assets/plugins/global/plugins.bundle.js"></script>
		<script src="/assets/js/scripts.bundle.js"></script>
		<script src="/assets/js/custom/authentication/sign-in/general.js"></script>
		<script src="/assets/js/custom/modals/create-account.js"></script>
		<script src="/assets/js/custom/authentication/password-reset/new-password.js"></script>
		<script src="/assets/js/custom/authentication/password-reset/password-reset.js"></script>
		<script src="/assets/js/custom.js"></script>
		<script>
			$('#mySelect2').find(':selected');
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
			    $('#kt_modal_postcode').modal('hide');

			    // Full list of response elements
			    // https://developers.alliescomputing.com/postcoder-web-api/address-lookup
			    }

			});
		</script>
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
	</body>
    @yield('extra-js')
    @stack('extra-js')
	@livewireScripts
</html>
