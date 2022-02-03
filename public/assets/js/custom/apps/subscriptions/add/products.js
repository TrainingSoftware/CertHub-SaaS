/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/subscriptions/add/products.js ***!
  \*********************************************************************************************/


var KTSubscriptionsProducts = function () {
    // Shared variables
    var table;
    var datatable;
    var modalEl;
    var modal;

    var initDatatable = function() {
        // Init datatable --- more info on datatables: https://datatables.net/manual/        
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            'ordering': false,
            'paging': false,
            "lengthChange": false
        });
    }

    // Delete product
    var deleteProduct = function() {
        KTUtil.on(table, '[data-kt-action="product_remove"]', 'click', function(e) {
            e.preventDefault();

            // Select parent row
            const parent = e.target.closest('tr');

            // Get customer name
            const productName = parent.querySelectorAll('td')[0].innerText;

            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete " + productName + "?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, delete!",
                cancelButtonText: "No, cancel",
                customClass: {
                    confirmButton: "btn fw-bold btn-danger",
                    cancelButton: "btn fw-bold btn-active-light-primary"
                }
            }).then(function (result) {
                if (result.value) {
                    Swal.fire({
                        text: "You have deleted " + productName + "!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove current row
                        datatable.row($(parent)).remove().draw();
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: customerName + " was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Modal handlers
    var addProduct = function() {
        // Select modal buttons
        const closeButton = modalEl.querySelector('#kt_modal_add_product_close');
        const cancelButton = modalEl.querySelector('#kt_modal_add_product_cancel');
        const submitButton = modalEl.querySelector('#kt_modal_add_product_submit');

        // Cancel button action
        cancelButton.addEventListener('click', function(e){
            e.preventDefault();

			Swal.fire({
				text: "Are you sure you would like to cancel?",
				icon: "warning",
				showCancelButton: true,
				buttonsStyling: false,
				confirmButtonText: "Yes, cancel it!",
				cancelButtonText: "No, return",
				customClass: {
					confirmButton: "btn btn-primary",
					cancelButton: "btn btn-active-light"
				}
			}).then(function (result) {
				if (result.value) {
					modal.hide(); // Hide modal				
				} else if (result.dismiss === 'cancel') {
					Swal.fire({
						text: "Your form has not been cancelled!.",
						icon: "error",
						buttonsStyling: false,
						confirmButtonText: "Ok, got it!",
						customClass: {
							confirmButton: "btn btn-primary",
						}
					});
				}
			});
        });

        // Add customer button handler
        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Check all radio buttons
            var radio = modalEl.querySelector('input[type="radio"]:checked');            

            // Define datatable row node
            var rowNode;

            if (radio && radio.checked === true) {
                rowNode = datatable.row.add( [
                    radio.getAttribute('data-kt-product-name'),
                    '1',
                    radio.getAttribute('data-kt-product-price') + ' / ' + radio.getAttribute('data-kt-product-frequency'),
                    table.querySelector('tbody tr td:last-child').innerHTML
                ]).draw().node();

                // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class
                $( rowNode ).find('td').eq(3).addClass('text-end');
            }           

            modal.hide(); // Remove modal
        });
    }

    return {
        init: function () {
            modalEl = document.getElementById('kt_modal_add_product');

            // Select modal -- more info on Bootstrap modal: https://getbootstrap.com/docs/5.0/components/modal/
            modal = new bootstrap.Modal(modalEl);

            table = document.querySelector('#kt_subscription_products_table');

            initDatatable();
            deleteProduct();
            addProduct();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTSubscriptionsProducts.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/subscriptions/add/products.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/apps/subscriptions/add/products.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\nvar KTSubscriptionsProducts = function () {\n  // Shared variables\n  var table;\n  var datatable;\n  var modalEl;\n  var modal;\n\n  var initDatatable = function initDatatable() {\n    // Init datatable --- more info on datatables: https://datatables.net/manual/        \n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      'ordering': false,\n      'paging': false,\n      \"lengthChange\": false\n    });\n  }; // Delete product\n\n\n  var deleteProduct = function deleteProduct() {\n    KTUtil.on(table, '[data-kt-action=\"product_remove\"]', 'click', function (e) {\n      e.preventDefault(); // Select parent row\n\n      var parent = e.target.closest('tr'); // Get customer name\n\n      var productName = parent.querySelectorAll('td')[0].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n      Swal.fire({\n        text: \"Are you sure you want to delete \" + productName + \"?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted \" + productName + \"!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove current row\n            datatable.row($(parent)).remove().draw();\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: customerName + \" was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Modal handlers\n\n\n  var addProduct = function addProduct() {\n    // Select modal buttons\n    var closeButton = modalEl.querySelector('#kt_modal_add_product_close');\n    var cancelButton = modalEl.querySelector('#kt_modal_add_product_cancel');\n    var submitButton = modalEl.querySelector('#kt_modal_add_product_submit'); // Cancel button action\n\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    }); // Add customer button handler\n\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault(); // Check all radio buttons\n\n      var radio = modalEl.querySelector('input[type=\"radio\"]:checked'); // Define datatable row node\n\n      var rowNode;\n\n      if (radio && radio.checked === true) {\n        rowNode = datatable.row.add([radio.getAttribute('data-kt-product-name'), '1', radio.getAttribute('data-kt-product-price') + ' / ' + radio.getAttribute('data-kt-product-frequency'), table.querySelector('tbody tr td:last-child').innerHTML]).draw().node(); // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class\n\n        $(rowNode).find('td').eq(3).addClass('text-end');\n      }\n\n      modal.hide(); // Remove modal\n    });\n  };\n\n  return {\n    init: function init() {\n      modalEl = document.getElementById('kt_modal_add_product'); // Select modal -- more info on Bootstrap modal: https://getbootstrap.com/docs/5.0/components/modal/\n\n      modal = new bootstrap.Modal(modalEl);\n      table = document.querySelector('#kt_subscription_products_table');\n      initDatatable();\n      deleteProduct();\n      addProduct();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSubscriptionsProducts.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3N1YnNjcmlwdGlvbnMvYWRkL3Byb2R1Y3RzLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLHVCQUF1QixHQUFHLFlBQVk7QUFDdEM7QUFDQSxNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxLQUFKOztBQUVBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQjtBQUNBSCxJQUFBQSxTQUFTLEdBQUdJLENBQUMsQ0FBQ0wsS0FBRCxDQUFELENBQVNNLFNBQVQsQ0FBbUI7QUFDM0IsY0FBUSxLQURtQjtBQUUzQixlQUFTLEVBRmtCO0FBRzNCLGtCQUFZLEtBSGU7QUFJM0IsZ0JBQVUsS0FKaUI7QUFLM0Isc0JBQWdCO0FBTFcsS0FBbkIsQ0FBWjtBQU9ILEdBVEQsQ0FQc0MsQ0FrQnRDOzs7QUFDQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0JDLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVVCxLQUFWLEVBQWlCLG1DQUFqQixFQUFzRCxPQUF0RCxFQUErRCxVQUFTVSxDQUFULEVBQVk7QUFDdkVBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUR1RSxDQUd2RTs7QUFDQSxVQUFNQyxNQUFNLEdBQUdGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxPQUFULENBQWlCLElBQWpCLENBQWYsQ0FKdUUsQ0FNdkU7O0FBQ0EsVUFBTUMsV0FBVyxHQUFHSCxNQUFNLENBQUNJLGdCQUFQLENBQXdCLElBQXhCLEVBQThCLENBQTlCLEVBQWlDQyxTQUFyRCxDQVB1RSxDQVN2RTs7QUFDQUMsTUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsUUFBQUEsSUFBSSxFQUFFLHFDQUFxQ0wsV0FBckMsR0FBbUQsR0FEbkQ7QUFFTk0sUUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsUUFBQUEsZ0JBQWdCLEVBQUUs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LElBQUksRUFBRSxnQkFBWTtBQUNkbkQsTUFBQUEsT0FBTyxHQUFHb0QsUUFBUSxDQUFDQyxjQUFULENBQXdCLHNCQUF4QixDQUFWLENBRGMsQ0FHZDs7QUFDQXBELE1BQUFBLEtBQUssR0FBRyxJQUFJcUQsU0FBUyxDQUFDQyxLQUFkLENBQW9CdkQsT0FBcEIsQ0FBUjtBQUVBRixNQUFBQSxLQUFLLEdBQUdzRCxRQUFRLENBQUNmLGFBQVQsQ0FBdUIsaUNBQXZCLENBQVI7QUFFQW5DLE1BQUFBLGFBQWE7QUFDYkcsTUFBQUEsYUFBYTtBQUNiOEIsTUFBQUEsVUFBVTtBQUNiO0FBWkUsR0FBUDtBQWNILENBcko2QixFQUE5QixDLENBdUpBOzs7QUFDQTdCLE1BQU0sQ0FBQ2tELGtCQUFQLENBQTBCLFlBQVk7QUFDbEMzRCxFQUFBQSx1QkFBdUIsQ0FBQ3NELElBQXhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvc3Vic2NyaXB0aW9ucy9hZGQvcHJvZHVjdHMuanM/MTM2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxudmFyIEtUU3Vic2NyaXB0aW9uc1Byb2R1Y3RzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgdGFibGU7XG4gICAgdmFyIGRhdGF0YWJsZTtcbiAgICB2YXIgbW9kYWxFbDtcbiAgICB2YXIgbW9kYWw7XG5cbiAgICB2YXIgaW5pdERhdGF0YWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsLyAgICAgICAgXG4gICAgICAgIGRhdGF0YWJsZSA9ICQodGFibGUpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgICAgICAgICdvcmRlcmluZyc6IGZhbHNlLFxuICAgICAgICAgICAgJ3BhZ2luZyc6IGZhbHNlLFxuICAgICAgICAgICAgXCJsZW5ndGhDaGFuZ2VcIjogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHByb2R1Y3RcbiAgICB2YXIgZGVsZXRlUHJvZHVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwub24odGFibGUsICdbZGF0YS1rdC1hY3Rpb249XCJwcm9kdWN0X3JlbW92ZVwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gU2VsZWN0IHBhcmVudCByb3dcbiAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ3RyJyk7XG5cbiAgICAgICAgICAgIC8vIEdldCBjdXN0b21lciBuYW1lXG4gICAgICAgICAgICBjb25zdCBwcm9kdWN0TmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpWzBdLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgLy8gU3dlZXRBbGVydDIgcG9wIHVwIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiArIHByb2R1Y3ROYW1lICsgXCI/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgZGVsZXRlZCBcIiArIHByb2R1Y3ROYW1lICsgXCIhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcm93XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQocGFyZW50KSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY3VzdG9tZXJOYW1lICsgXCIgd2FzIG5vdCBkZWxldGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gTW9kYWwgaGFuZGxlcnNcbiAgICB2YXIgYWRkUHJvZHVjdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTZWxlY3QgbW9kYWwgYnV0dG9uc1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IG1vZGFsRWwucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX2FkZF9wcm9kdWN0X2Nsb3NlJyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IG1vZGFsRWwucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX2FkZF9wcm9kdWN0X2NhbmNlbCcpO1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSBtb2RhbEVsLnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGRfcHJvZHVjdF9zdWJtaXQnKTtcblxuICAgICAgICAvLyBDYW5jZWwgYnV0dG9uIGFjdGlvblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0U3dhbC5maXJlKHtcblx0XHRcdFx0dGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2FuY2VsP1wiLFxuXHRcdFx0XHRpY29uOiBcIndhcm5pbmdcIixcblx0XHRcdFx0c2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcblx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuXHRcdFx0XHRjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGNhbmNlbCBpdCFcIixcblx0XHRcdFx0Y2FuY2VsQnV0dG9uVGV4dDogXCJObywgcmV0dXJuXCIsXG5cdFx0XHRcdGN1c3RvbUNsYXNzOiB7XG5cdFx0XHRcdFx0Y29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcblx0XHRcdFx0XHRjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0aWYgKHJlc3VsdC52YWx1ZSkge1xuXHRcdFx0XHRcdG1vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XG5cdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG5cdFx0XHRcdFx0U3dhbC5maXJlKHtcblx0XHRcdFx0XHRcdHRleHQ6IFwiWW91ciBmb3JtIGhhcyBub3QgYmVlbiBjYW5jZWxsZWQhLlwiLFxuXHRcdFx0XHRcdFx0aWNvbjogXCJlcnJvclwiLFxuXHRcdFx0XHRcdFx0YnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuXHRcdFx0XHRcdFx0Y29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcblx0XHRcdFx0XHRcdGN1c3RvbUNsYXNzOiB7XG5cdFx0XHRcdFx0XHRcdGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBBZGQgY3VzdG9tZXIgYnV0dG9uIGhhbmRsZXJcbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gQ2hlY2sgYWxsIHJhZGlvIGJ1dHRvbnNcbiAgICAgICAgICAgIHZhciByYWRpbyA9IG1vZGFsRWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQnKTsgICAgICAgICAgICBcblxuICAgICAgICAgICAgLy8gRGVmaW5lIGRhdGF0YWJsZSByb3cgbm9kZVxuICAgICAgICAgICAgdmFyIHJvd05vZGU7XG5cbiAgICAgICAgICAgIGlmIChyYWRpbyAmJiByYWRpby5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgcm93Tm9kZSA9IGRhdGF0YWJsZS5yb3cuYWRkKCBbXG4gICAgICAgICAgICAgICAgICAgIHJhZGlvLmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1wcm9kdWN0LW5hbWUnKSxcbiAgICAgICAgICAgICAgICAgICAgJzEnLFxuICAgICAgICAgICAgICAgICAgICByYWRpby5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtcHJvZHVjdC1wcmljZScpICsgJyAvICcgKyByYWRpby5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtcHJvZHVjdC1mcmVxdWVuY3knKSxcbiAgICAgICAgICAgICAgICAgICAgdGFibGUucXVlcnlTZWxlY3RvcigndGJvZHkgdHIgdGQ6bGFzdC1jaGlsZCcpLmlubmVySFRNTFxuICAgICAgICAgICAgICAgIF0pLmRyYXcoKS5ub2RlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgY3VzdG9tIGNsYXNzIHRvIGxhc3QgY29sdW1uIC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9mb3J1bXMvZGlzY3Vzc2lvbi8yMjM0MS9yb3ctYWRkLWNlbGwtY2xhc3NcbiAgICAgICAgICAgICAgICAkKCByb3dOb2RlICkuZmluZCgndGQnKS5lcSgzKS5hZGRDbGFzcygndGV4dC1lbmQnKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgIFxuXG4gICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIFJlbW92ZSBtb2RhbFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBtb2RhbEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X21vZGFsX2FkZF9wcm9kdWN0Jyk7XG5cbiAgICAgICAgICAgIC8vIFNlbGVjdCBtb2RhbCAtLSBtb3JlIGluZm8gb24gQm9vdHN0cmFwIG1vZGFsOiBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjAvY29tcG9uZW50cy9tb2RhbC9cbiAgICAgICAgICAgIG1vZGFsID0gbmV3IGJvb3RzdHJhcC5Nb2RhbChtb2RhbEVsKTtcblxuICAgICAgICAgICAgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfc3Vic2NyaXB0aW9uX3Byb2R1Y3RzX3RhYmxlJyk7XG5cbiAgICAgICAgICAgIGluaXREYXRhdGFibGUoKTtcbiAgICAgICAgICAgIGRlbGV0ZVByb2R1Y3QoKTtcbiAgICAgICAgICAgIGFkZFByb2R1Y3QoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUU3Vic2NyaXB0aW9uc1Byb2R1Y3RzLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUU3Vic2NyaXB0aW9uc1Byb2R1Y3RzIiwidGFibGUiLCJkYXRhdGFibGUiLCJtb2RhbEVsIiwibW9kYWwiLCJpbml0RGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsImRlbGV0ZVByb2R1Y3QiLCJLVFV0aWwiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsInRhcmdldCIsImNsb3Nlc3QiLCJwcm9kdWN0TmFtZSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpbm5lclRleHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwicm93IiwicmVtb3ZlIiwiZHJhdyIsImRpc21pc3MiLCJjdXN0b21lck5hbWUiLCJhZGRQcm9kdWN0IiwiY2xvc2VCdXR0b24iLCJxdWVyeVNlbGVjdG9yIiwic3VibWl0QnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGUiLCJyYWRpbyIsInJvd05vZGUiLCJjaGVja2VkIiwiYWRkIiwiZ2V0QXR0cmlidXRlIiwiaW5uZXJIVE1MIiwibm9kZSIsImZpbmQiLCJlcSIsImFkZENsYXNzIiwiaW5pdCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJib290c3RyYXAiLCJNb2RhbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/subscriptions/add/products.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/subscriptions/add/products.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=products.js.map