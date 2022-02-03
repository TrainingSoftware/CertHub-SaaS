/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ../src/js/custom/documentation/forms/formrepeater/basic.js ***!
  \******************************************************************/


// Class definition
var KTFormRepeaterBasic = function () {
    // Private functions
    var example1 = function () {
        $('#kt_docs_repeater_basic').repeater({
            initEmpty: false,

            defaultValues: {
                'text-input': 'foo'
            },

            show: function () {
                $(this).slideDown();
            },

            hide: function (deleteElement) {
                $(this).slideUp(deleteElement);
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
    KTFormRepeaterBasic.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/formrepeater/basic.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/formrepeater/basic.js ***!
  \***************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormRepeaterBasic = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_basic').repeater({\n      initEmpty: false,\n      defaultValues: {\n        'text-input': 'foo'\n      },\n      show: function show() {\n        $(this).slideDown();\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFZO0FBQ2xDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QkMsSUFBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFFBQTdCLENBQXNDO0FBQ2xDQyxNQUFBQSxTQUFTLEVBQUUsS0FEdUI7QUFHbENDLE1BQUFBLGFBQWEsRUFBRTtBQUNYLHNCQUFjO0FBREgsT0FIbUI7QUFPbENDLE1BQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkSixRQUFBQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFLLFNBQVI7QUFDSCxPQVRpQztBQVdsQ0MsTUFBQUEsSUFBSSxFQUFFLGNBQVVDLGFBQVYsRUFBeUI7QUFDM0JQLFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQkQsYUFBaEI7QUFDSDtBQWJpQyxLQUF0QztBQWVILEdBaEJEOztBQWtCQSxTQUFPO0FBQ0g7QUFDQUUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RWLE1BQUFBLFFBQVE7QUFDWDtBQUpFLEdBQVA7QUFNSCxDQTFCeUIsRUFBMUIsQyxDQTRCQTs7O0FBQ0FXLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2IsRUFBQUEsbUJBQW1CLENBQUNXLElBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvZm9ybXJlcGVhdGVyL2Jhc2ljLmpzPzFlN2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1SZXBlYXRlckJhc2ljID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcja3RfZG9jc19yZXBlYXRlcl9iYXNpYycpLnJlcGVhdGVyKHtcbiAgICAgICAgICAgIGluaXRFbXB0eTogZmFsc2UsXG5cbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgICAgICAgICAgICAndGV4dC1pbnB1dCc6ICdmb28nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uIChkZWxldGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKGRlbGV0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3JtUmVwZWF0ZXJCYXNpYy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1SZXBlYXRlckJhc2ljIiwiZXhhbXBsZTEiLCIkIiwicmVwZWF0ZXIiLCJpbml0RW1wdHkiLCJkZWZhdWx0VmFsdWVzIiwic2hvdyIsInNsaWRlRG93biIsImhpZGUiLCJkZWxldGVFbGVtZW50Iiwic2xpZGVVcCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/formrepeater/basic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=basic.js.map