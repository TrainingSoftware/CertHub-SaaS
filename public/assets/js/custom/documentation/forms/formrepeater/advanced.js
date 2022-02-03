/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ../src/js/custom/documentation/forms/formrepeater/advanced.js ***!
  \*********************************************************************/


// Class definition
var KTFormRepeaterAdvanced = function () {
    // Private functions
    var example1 = function () {
        $('#kt_docs_repeater_advanced').repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': 'foo'
            },

            show: function () {
                $(this).slideDown();

                // Re-init select2
                $(this).find('[data-kt-repeater="select2"]').select2();

                // Re-init flatpickr
                $(this).find('[data-kt-repeater="datepicker"]').flatpickr();

                // Re-init tagify
                new Tagify(this.querySelector('[data-kt-repeater="tagify"]'));
            },

            hide: function (deleteElement) {
                $(this).slideUp(deleteElement);
            },

            ready: function(){
                // Init select
                $('[data-kt-repeater="select2"]').select2();

                // Init flatpickr
                $('[data-kt-repeater="datepicker"]').flatpickr();

                // Init Tagify
                new Tagify(document.querySelector('[data-kt-repeater="tagify"]'));
            }
        });        
    }

    return {
        // Public Functions
        init: function () {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormRepeaterAdvanced.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/formrepeater/advanced.js":
/*!******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formrepeater/advanced.js ***!
  \******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormRepeaterAdvanced = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_advanced').repeater({\n      initEmpty: false,\n      defaultValues: {\n        'text-input': 'foo'\n      },\n      show: function show() {\n        $(this).slideDown(); // Re-init select2\n\n        $(this).find('[data-kt-repeater=\"select2\"]').select2(); // Re-init flatpickr\n\n        $(this).find('[data-kt-repeater=\"datepicker\"]').flatpickr(); // Re-init tagify\n\n        new Tagify(this.querySelector('[data-kt-repeater=\"tagify\"]'));\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      },\n      ready: function ready() {\n        // Init select\n        $('[data-kt-repeater=\"select2\"]').select2(); // Init flatpickr\n\n        $('[data-kt-repeater=\"datepicker\"]').flatpickr(); // Init Tagify\n\n        new Tagify(document.querySelector('[data-kt-repeater=\"tagify\"]'));\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterAdvanced.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9hZHZhbmNlZC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxzQkFBc0IsR0FBRyxZQUFZO0FBQ3JDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QkMsSUFBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLFFBQWhDLENBQXlDO0FBQ3JDQyxNQUFBQSxTQUFTLEVBQUUsS0FEMEI7QUFHckNDLE1BQUFBLGFBQWEsRUFBRTtBQUNYLHNCQUFjO0FBREgsT0FIc0I7QUFPckNDLE1BQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkSixRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLFNBQVIsR0FEYyxDQUdkOztBQUNBTCxRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSw4QkFBYixFQUE2Q0MsT0FBN0MsR0FKYyxDQU1kOztBQUNBUCxRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFNLElBQVIsQ0FBYSxpQ0FBYixFQUFnREUsU0FBaEQsR0FQYyxDQVNkOztBQUNBLFlBQUlDLE1BQUosQ0FBVyxLQUFLQyxhQUFMLENBQW1CLDZCQUFuQixDQUFYO0FBQ0gsT0FsQm9DO0FBb0JyQ0MsTUFBQUEsSUFBSSxFQUFFLGNBQVVDLGFBQVYsRUFBeUI7QUFDM0JaLFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWEsT0FBUixDQUFnQkQsYUFBaEI7QUFDSCxPQXRCb0M7QUF3QnJDRSxNQUFBQSxLQUFLLEVBQUUsaUJBQVU7QUFDYjtBQUNBZCxRQUFBQSxDQUFDLENBQUMsOEJBQUQsQ0FBRCxDQUFrQ08sT0FBbEMsR0FGYSxDQUliOztBQUNBUCxRQUFBQSxDQUFDLENBQUMsaUNBQUQsQ0FBRCxDQUFxQ1EsU0FBckMsR0FMYSxDQU9iOztBQUNBLFlBQUlDLE1BQUosQ0FBV00sUUFBUSxDQUFDTCxhQUFULENBQXVCLDZCQUF2QixDQUFYO0FBQ0g7QUFqQ29DLEtBQXpDO0FBbUNILEdBcENEOztBQXNDQSxTQUFPO0FBQ0g7QUFDQU0sSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RqQixNQUFBQSxRQUFRO0FBQ1g7QUFKRSxHQUFQO0FBTUgsQ0E5QzRCLEVBQTdCLEMsQ0FnREE7OztBQUNBa0IsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDcEIsRUFBQUEsc0JBQXNCLENBQUNrQixJQUF2QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9hZHZhbmNlZC5qcz80YjI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3JtUmVwZWF0ZXJBZHZhbmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2t0X2RvY3NfcmVwZWF0ZXJfYWR2YW5jZWQnKS5yZXBlYXRlcih7XG4gICAgICAgICAgICBpbml0RW1wdHk6IGZhbHNlLFxuXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICAgICAgICAgICAgJ3RleHQtaW5wdXQnOiAnZm9vJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykuc2xpZGVEb3duKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZS1pbml0IHNlbGVjdDJcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmZpbmQoJ1tkYXRhLWt0LXJlcGVhdGVyPVwic2VsZWN0MlwiXScpLnNlbGVjdDIoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlLWluaXQgZmxhdHBpY2tyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5maW5kKCdbZGF0YS1rdC1yZXBlYXRlcj1cImRhdGVwaWNrZXJcIl0nKS5mbGF0cGlja3IoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlLWluaXQgdGFnaWZ5XG4gICAgICAgICAgICAgICAgbmV3IFRhZ2lmeSh0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXJlcGVhdGVyPVwidGFnaWZ5XCJdJykpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24gKGRlbGV0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlVXAoZGVsZXRlRWxlbWVudCk7XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZWFkeTogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAvLyBJbml0IHNlbGVjdFxuICAgICAgICAgICAgICAgICQoJ1tkYXRhLWt0LXJlcGVhdGVyPVwic2VsZWN0MlwiXScpLnNlbGVjdDIoKTtcblxuICAgICAgICAgICAgICAgIC8vIEluaXQgZmxhdHBpY2tyXG4gICAgICAgICAgICAgICAgJCgnW2RhdGEta3QtcmVwZWF0ZXI9XCJkYXRlcGlja2VyXCJdJykuZmxhdHBpY2tyKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBJbml0IFRhZ2lmeVxuICAgICAgICAgICAgICAgIG5ldyBUYWdpZnkoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcmVwZWF0ZXI9XCJ0YWdpZnlcIl0nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pOyAgICAgICAgXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlMSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURm9ybVJlcGVhdGVyQWR2YW5jZWQuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3JtUmVwZWF0ZXJBZHZhbmNlZCIsImV4YW1wbGUxIiwiJCIsInJlcGVhdGVyIiwiaW5pdEVtcHR5IiwiZGVmYXVsdFZhbHVlcyIsInNob3ciLCJzbGlkZURvd24iLCJmaW5kIiwic2VsZWN0MiIsImZsYXRwaWNrciIsIlRhZ2lmeSIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlIiwiZGVsZXRlRWxlbWVudCIsInNsaWRlVXAiLCJyZWFkeSIsImRvY3VtZW50IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/advanced.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formrepeater/advanced.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=advanced.js.map