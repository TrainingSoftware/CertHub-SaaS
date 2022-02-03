/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/users/view/add-auth-app.js ***!
  \**********************************************************************************************************/


// Class definition
var KTUsersAddAuthApp = function () {
    // Shared variables
    const element = document.getElementById('kt_modal_add_auth_app');
    const modal = new bootstrap.Modal(element);

    // Init add schedule modal
    var initAddAuthApp = () => {

        // Close button handler
        const closeButton = element.querySelector('[data-kt-users-modal-action="close"]');
        closeButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to close?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, close it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    modal.hide(); // Hide modal				
                } 
            });
        });

    }

    // QR code to text code swapper
    var initCodeSwap = () => {
        const qrCode = element.querySelector('[ data-kt-add-auth-action="qr-code"]');
        const textCode = element.querySelector('[ data-kt-add-auth-action="text-code"]');
        const qrCodeButton = element.querySelector('[ data-kt-add-auth-action="qr-code-button"]');
        const textCodeButton = element.querySelector('[ data-kt-add-auth-action="text-code-button"]');
        const qrCodeLabel = element.querySelector('[ data-kt-add-auth-action="qr-code-label"]');
        const textCodeLabel = element.querySelector('[ data-kt-add-auth-action="text-code-label"]');

        const toggleClass = () =>{
            qrCode.classList.toggle('d-none');
            qrCodeButton.classList.toggle('d-none');
            qrCodeLabel.classList.toggle('d-none');
            textCode.classList.toggle('d-none');
            textCodeButton.classList.toggle('d-none');
            textCodeLabel.classList.toggle('d-none');
        }

        // Swap to text code handler
        textCodeButton.addEventListener('click', e =>{
            e.preventDefault();

            toggleClass();
        });

        qrCodeButton.addEventListener('click', e =>{
            e.preventDefault();

            toggleClass();
        });
    }

    return {
        // Public functions
        init: function () {
            initAddAuthApp();
            initCodeSwap();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersAddAuthApp.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js":
/*!*********************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js ***!
  \*********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersAddAuthApp = function () {\n  // Shared variables\n  var element = document.getElementById('kt_modal_add_auth_app');\n  var modal = new bootstrap.Modal(element); // Init add schedule modal\n\n  var initAddAuthApp = function initAddAuthApp() {\n    // Close button handler\n    var closeButton = element.querySelector('[data-kt-users-modal-action=\"close\"]');\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to close?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, close it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          modal.hide(); // Hide modal\t\t\t\t\n        }\n      });\n    });\n  }; // QR code to text code swapper\n\n\n  var initCodeSwap = function initCodeSwap() {\n    var qrCode = element.querySelector('[ data-kt-add-auth-action=\"qr-code\"]');\n    var textCode = element.querySelector('[ data-kt-add-auth-action=\"text-code\"]');\n    var qrCodeButton = element.querySelector('[ data-kt-add-auth-action=\"qr-code-button\"]');\n    var textCodeButton = element.querySelector('[ data-kt-add-auth-action=\"text-code-button\"]');\n    var qrCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"qr-code-label\"]');\n    var textCodeLabel = element.querySelector('[ data-kt-add-auth-action=\"text-code-label\"]');\n\n    var toggleClass = function toggleClass() {\n      qrCode.classList.toggle('d-none');\n      qrCodeButton.classList.toggle('d-none');\n      qrCodeLabel.classList.toggle('d-none');\n      textCode.classList.toggle('d-none');\n      textCodeButton.classList.toggle('d-none');\n      textCodeLabel.classList.toggle('d-none');\n    }; // Swap to text code handler\n\n\n    textCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n    qrCodeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      toggleClass();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      initAddAuthApp();\n      initCodeSwap();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersAddAuthApp.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy92aWV3L2FkZC1hdXRoLWFwcC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFZO0FBQ2hDO0FBQ0EsTUFBTUMsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsdUJBQXhCLENBQWhCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLElBQUlDLFNBQVMsQ0FBQ0MsS0FBZCxDQUFvQkwsT0FBcEIsQ0FBZCxDQUhnQyxDQUtoQzs7QUFDQSxNQUFJTSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFFdkI7QUFDQSxRQUFNQyxXQUFXLEdBQUdQLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQixzQ0FBdEIsQ0FBcEI7QUFDQUQsSUFBQUEsV0FBVyxDQUFDRSxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxVQUFBQyxDQUFDLEVBQUk7QUFDdkNBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRjtBQUVBQyxNQUFBQSxJQUFJLENBQUNDLElBQUwsQ0FBVTtBQUNOQyxRQUFBQSxJQUFJLEVBQUUsdUNBREE7QUFFTkMsUUFBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkMsUUFBQUEsZ0JBQWdCLEVBQUUsSUFIWjtBQUlOQyxRQUFBQSxjQUFjLEVBQUUsS0FKVjtBQUtOQyxRQUFBQSxpQkFBaUIsRUFBRSxnQkFMYjtBQU1OQyxRQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUUsaUJBRE47QUFFVEMsVUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxPQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ0MsS0FBWCxFQUFrQjtBQUNkdEIsVUFBQUEsS0FBSyxDQUFDdUIsSUFBTixHQURjLENBQ0E7QUFDakI7QUFDSixPQWZEO0FBZ0JILEtBbkJEO0FBcUJILEdBekJELENBTmdDLENBaUNoQzs7O0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUNyQixRQUFNQyxNQUFNLEdBQUc1QixPQUFPLENBQUNRLGFBQVIsQ0FBc0Isc0NBQXRCLENBQWY7QUFDQSxRQUFNcUIsUUFBUSxHQUFHN0IsT0FBTyxDQUFDUSxhQUFSLENBQXNCLHdDQUF0QixDQUFqQjtBQUNBLFFBQU1zQixZQUFZLEdBQUc5QixPQUFPLENBQUNRLGFBQVIsQ0FBc0IsNkNBQXRCLENBQXJCO0FBQ0EsUUFBTXVCLGNBQWMsR0FBRy9CLE9BQU8sQ0FBQ1EsYUFBUixDQUFzQiwrQ0FBdEIsQ0FBdkI7QUFDQSxRQUFNd0IsV0FBVyxHQUFHaEMsT0FBTyxDQUFDUSxhQUFSLENBQXNCLDRDQUF0QixDQUFwQjtBQUNBLFFBQU15QixhQUFhLEdBQUdqQyxPQUFPLENBQUNRLGFBQVIsQ0FBc0IsOENBQXRCLENBQXRCOztBQUVBLFFBQU0wQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFLO0FBQ3JCTixNQUFBQSxNQUFNLENBQUNPLFNBQVAsQ0FBaUJDLE1BQWpCLENBQXdCLFFBQXhCO0FBQ0FOLE1BQUFBLFlBQVksQ0FBQ0ssU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsUUFBOUI7QUFDQUosTUFBQUEsV0FBVyxDQUFDRyxTQUFaLENBQXNCQyxNQUF0QixDQUE2QixRQUE3QjtBQUNBUCxNQUFBQSxRQUFRLENBQUNNLFNBQVQsQ0FBbUJDLE1BQW5CLENBQTBCLFFBQTFCO0FBQ0FMLE1BQUFBLGNBQWMsQ0FBQ0ksU0FBZixDQUF5QkMsTUFBekIsQ0FBZ0MsUUFBaEM7QUFDQUgsTUFBQUEsYUFBYSxDQUFDRSxTQUFkLENBQXdCQyxNQUF4QixDQUErQixRQUEvQjtBQUNILEtBUEQsQ0FScUIsQ0FpQnJCOzs7QUFDQUwsSUFBQUEsY0FBYyxDQUFDdEIsZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBQUMsQ0FBQyxFQUFHO0FBQ3pDQSxNQUFBQSxDQUFDLENBQUNDLGNBQUY7QUFFQXVCLE1BQUFBLFdBQVc7QUFDZCxLQUpEO0FBTUFKLElBQUFBLFlBQVksQ0FBQ3JCLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFVBQUFDLENBQUMsRUFBRztBQUN2Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUF1QixNQUFBQSxXQUFXO0FBQ2QsS0FKRDtBQUtILEdBN0JEOztBQStCQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QvQixNQUFBQSxjQUFjO0FBQ2RxQixNQUFBQSxZQUFZO0FBQ2Y7QUFMRSxHQUFQO0FBT0gsQ0F4RXVCLEVBQXhCLEMsQ0EwRUE7OztBQUNBVyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN4QyxFQUFBQSxpQkFBaUIsQ0FBQ3NDLElBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3VzZXJzL3ZpZXcvYWRkLWF1dGgtYXBwLmpzPzBhMDQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFVzZXJzQWRkQXV0aEFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaGFyZWQgdmFyaWFibGVzXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9tb2RhbF9hZGRfYXV0aF9hcHAnKTtcbiAgICBjb25zdCBtb2RhbCA9IG5ldyBib290c3RyYXAuTW9kYWwoZWxlbWVudCk7XG5cbiAgICAvLyBJbml0IGFkZCBzY2hlZHVsZSBtb2RhbFxuICAgIHZhciBpbml0QWRkQXV0aEFwcCA9ICgpID0+IHtcblxuICAgICAgICAvLyBDbG9zZSBidXR0b24gaGFuZGxlclxuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtdXNlcnMtbW9kYWwtYWN0aW9uPVwiY2xvc2VcIl0nKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd291bGQgbGlrZSB0byBjbG9zZT9cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGNsb3NlIGl0IVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBRUiBjb2RlIHRvIHRleHQgY29kZSBzd2FwcGVyXG4gICAgdmFyIGluaXRDb2RlU3dhcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcXJDb2RlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbIGRhdGEta3QtYWRkLWF1dGgtYWN0aW9uPVwicXItY29kZVwiXScpO1xuICAgICAgICBjb25zdCB0ZXh0Q29kZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWt0LWFkZC1hdXRoLWFjdGlvbj1cInRleHQtY29kZVwiXScpO1xuICAgICAgICBjb25zdCBxckNvZGVCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1sgZGF0YS1rdC1hZGQtYXV0aC1hY3Rpb249XCJxci1jb2RlLWJ1dHRvblwiXScpO1xuICAgICAgICBjb25zdCB0ZXh0Q29kZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignWyBkYXRhLWt0LWFkZC1hdXRoLWFjdGlvbj1cInRleHQtY29kZS1idXR0b25cIl0nKTtcbiAgICAgICAgY29uc3QgcXJDb2RlTGFiZWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1sgZGF0YS1rdC1hZGQtYXV0aC1hY3Rpb249XCJxci1jb2RlLWxhYmVsXCJdJyk7XG4gICAgICAgIGNvbnN0IHRleHRDb2RlTGFiZWwgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1sgZGF0YS1rdC1hZGQtYXV0aC1hY3Rpb249XCJ0ZXh0LWNvZGUtbGFiZWxcIl0nKTtcblxuICAgICAgICBjb25zdCB0b2dnbGVDbGFzcyA9ICgpID0+e1xuICAgICAgICAgICAgcXJDb2RlLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgcXJDb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgcXJDb2RlTGFiZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB0ZXh0Q29kZS5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHRleHRDb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdGV4dENvZGVMYWJlbC5jbGFzc0xpc3QudG9nZ2xlKCdkLW5vbmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN3YXAgdG8gdGV4dCBjb2RlIGhhbmRsZXJcbiAgICAgICAgdGV4dENvZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0b2dnbGVDbGFzcygpO1xuICAgICAgICB9KTtcblxuICAgICAgICBxckNvZGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+e1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB0b2dnbGVDbGFzcygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluaXRBZGRBdXRoQXBwKCk7XG4gICAgICAgICAgICBpbml0Q29kZVN3YXAoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVFVzZXJzQWRkQXV0aEFwcC5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RVc2Vyc0FkZEF1dGhBcHAiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm1vZGFsIiwiYm9vdHN0cmFwIiwiTW9kYWwiLCJpbml0QWRkQXV0aEFwcCIsImNsb3NlQnV0dG9uIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwic2hvd0NhbmNlbEJ1dHRvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjYW5jZWxCdXR0b25UZXh0IiwiY3VzdG9tQ2xhc3MiLCJjb25maXJtQnV0dG9uIiwiY2FuY2VsQnV0dG9uIiwidGhlbiIsInJlc3VsdCIsInZhbHVlIiwiaGlkZSIsImluaXRDb2RlU3dhcCIsInFyQ29kZSIsInRleHRDb2RlIiwicXJDb2RlQnV0dG9uIiwidGV4dENvZGVCdXR0b24iLCJxckNvZGVMYWJlbCIsInRleHRDb2RlTGFiZWwiLCJ0b2dnbGVDbGFzcyIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/users/view/add-auth-app.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=add-auth-app.js.map