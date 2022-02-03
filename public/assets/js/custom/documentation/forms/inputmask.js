/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/forms/inputmask.js ***!
  \*********************************************************/


// Class definition
var KTFormsInputmaskDemos = function() {
    // Private functions
    var _examples = function() {
        // Date
        Inputmask({
            "mask" : "99/99/9999"
        }).mask("#kt_inputmask_1");

        // Phone 
        Inputmask({
            "mask" : "(999) 999-9999"
        }).mask("#kt_inputmask_2");

        // Placeholder 
        Inputmask({
            "mask" : "(999) 999-9999",
            "placeholder": "(999) 999-9999",
        }).mask("#kt_inputmask_3");

        // Repeating 
        Inputmask({
            "mask": "9",
            "repeat": 10,
            "greedy": false
        }).mask("#kt_inputmask_4");

        // Right aligned 
        Inputmask("decimal", {
            "rightAlignNumerics": false
        }).mask("#kt_inputmask_5");

        // Currency
        Inputmask("€ 999.999.999,99", {
            "numericInput": true
        }).mask("#kt_inputmask_6");

        // Ip address
        Inputmask({
            "mask": "999.999.999.999"
        }).mask("#kt_inputmask_7");

        // Email address
        Inputmask({
            mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
            greedy: false,
            onBeforePaste: function (pastedValue, opts) {
                pastedValue = pastedValue.toLowerCase();
                return pastedValue.replace("mailto:", "");
            },
            definitions: {
                "*": {
                    validator: '[0-9A-Za-z!#$%&"*+/=?^_`{|}~\-]',
                    cardinality: 1,
                    casing: "lower"
                }
            }
        }).mask("#kt_inputmask_8");
    }

    return {
        // Public Functions
        init: function(element) {
            _examples();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsInputmaskDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/inputmask.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/inputmask.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsInputmaskDemos = function () {\n  // Private functions\n  var _examples = function _examples() {\n    // Date\n    Inputmask({\n      \"mask\": \"99/99/9999\"\n    }).mask(\"#kt_inputmask_1\"); // Phone \n\n    Inputmask({\n      \"mask\": \"(999) 999-9999\"\n    }).mask(\"#kt_inputmask_2\"); // Placeholder \n\n    Inputmask({\n      \"mask\": \"(999) 999-9999\",\n      \"placeholder\": \"(999) 999-9999\"\n    }).mask(\"#kt_inputmask_3\"); // Repeating \n\n    Inputmask({\n      \"mask\": \"9\",\n      \"repeat\": 10,\n      \"greedy\": false\n    }).mask(\"#kt_inputmask_4\"); // Right aligned \n\n    Inputmask(\"decimal\", {\n      \"rightAlignNumerics\": false\n    }).mask(\"#kt_inputmask_5\"); // Currency\n\n    Inputmask(\"€ 999.999.999,99\", {\n      \"numericInput\": true\n    }).mask(\"#kt_inputmask_6\"); // Ip address\n\n    Inputmask({\n      \"mask\": \"999.999.999.999\"\n    }).mask(\"#kt_inputmask_7\"); // Email address\n\n    Inputmask({\n      mask: \"*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]\",\n      greedy: false,\n      onBeforePaste: function onBeforePaste(pastedValue, opts) {\n        pastedValue = pastedValue.toLowerCase();\n        return pastedValue.replace(\"mailto:\", \"\");\n      },\n      definitions: {\n        \"*\": {\n          validator: '[0-9A-Za-z!#$%&\"*+/=?^_`{|}~\\-]',\n          cardinality: 1,\n          casing: \"lower\"\n        }\n      }\n    }).mask(\"#kt_inputmask_8\");\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _examples();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsInputmaskDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2lucHV0bWFzay5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFXO0FBQ25DO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBVztBQUN2QjtBQUNBQyxJQUFBQSxTQUFTLENBQUM7QUFDTixjQUFTO0FBREgsS0FBRCxDQUFULENBRUdDLElBRkgsQ0FFUSxpQkFGUixFQUZ1QixDQU12Qjs7QUFDQUQsSUFBQUEsU0FBUyxDQUFDO0FBQ04sY0FBUztBQURILEtBQUQsQ0FBVCxDQUVHQyxJQUZILENBRVEsaUJBRlIsRUFQdUIsQ0FXdkI7O0FBQ0FELElBQUFBLFNBQVMsQ0FBQztBQUNOLGNBQVMsZ0JBREg7QUFFTixxQkFBZTtBQUZULEtBQUQsQ0FBVCxDQUdHQyxJQUhILENBR1EsaUJBSFIsRUFadUIsQ0FpQnZCOztBQUNBRCxJQUFBQSxTQUFTLENBQUM7QUFDTixjQUFRLEdBREY7QUFFTixnQkFBVSxFQUZKO0FBR04sZ0JBQVU7QUFISixLQUFELENBQVQsQ0FJR0MsSUFKSCxDQUlRLGlCQUpSLEVBbEJ1QixDQXdCdkI7O0FBQ0FELElBQUFBLFNBQVMsQ0FBQyxTQUFELEVBQVk7QUFDakIsNEJBQXNCO0FBREwsS0FBWixDQUFULENBRUdDLElBRkgsQ0FFUSxpQkFGUixFQXpCdUIsQ0E2QnZCOztBQUNBRCxJQUFBQSxTQUFTLENBQUMsa0JBQUQsRUFBcUI7QUFDMUIsc0JBQWdCO0FBRFUsS0FBckIsQ0FBVCxDQUVHQyxJQUZILENBRVEsaUJBRlIsRUE5QnVCLENBa0N2Qjs7QUFDQUQsSUFBQUEsU0FBUyxDQUFDO0FBQ04sY0FBUTtBQURGLEtBQUQsQ0FBVCxDQUVHQyxJQUZILENBRVEsaUJBRlIsRUFuQ3VCLENBdUN2Qjs7QUFDQUQsSUFBQUEsU0FBUyxDQUFDO0FBQ05DLE1BQUFBLElBQUksRUFBRSxpRUFEQTtBQUVOQyxNQUFBQSxNQUFNLEVBQUUsS0FGRjtBQUdOQyxNQUFBQSxhQUFhLEVBQUUsdUJBQVVDLFdBQVYsRUFBdUJDLElBQXZCLEVBQTZCO0FBQ3hDRCxRQUFBQSxXQUFXLEdBQUdBLFdBQVcsQ0FBQ0UsV0FBWixFQUFkO0FBQ0EsZUFBT0YsV0FBVyxDQUFDRyxPQUFaLENBQW9CLFNBQXBCLEVBQStCLEVBQS9CLENBQVA7QUFDSCxPQU5LO0FBT05DLE1BQUFBLFdBQVcsRUFBRTtBQUNULGFBQUs7QUFDREMsVUFBQUEsU0FBUyxFQUFFLGlDQURWO0FBRURDLFVBQUFBLFdBQVcsRUFBRSxDQUZaO0FBR0RDLFVBQUFBLE1BQU0sRUFBRTtBQUhQO0FBREk7QUFQUCxLQUFELENBQVQsQ0FjR1YsSUFkSCxDQWNRLGlCQWRSO0FBZUgsR0F2REQ7O0FBeURBLFNBQU87QUFDSDtBQUNBVyxJQUFBQSxJQUFJLEVBQUUsY0FBU0MsT0FBVCxFQUFrQjtBQUNwQmQsTUFBQUEsU0FBUztBQUNaO0FBSkUsR0FBUDtBQU1ILENBakUyQixFQUE1QixDLENBbUVBOzs7QUFDQWUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDakIsRUFBQUEscUJBQXFCLENBQUNjLElBQXRCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvaW5wdXRtYXNrLmpzPzAxNWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zSW5wdXRtYXNrRGVtb3MgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBfZXhhbXBsZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gRGF0ZVxuICAgICAgICBJbnB1dG1hc2soe1xuICAgICAgICAgICAgXCJtYXNrXCIgOiBcIjk5Lzk5Lzk5OTlcIlxuICAgICAgICB9KS5tYXNrKFwiI2t0X2lucHV0bWFza18xXCIpO1xuXG4gICAgICAgIC8vIFBob25lIFxuICAgICAgICBJbnB1dG1hc2soe1xuICAgICAgICAgICAgXCJtYXNrXCIgOiBcIig5OTkpIDk5OS05OTk5XCJcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfMlwiKTtcblxuICAgICAgICAvLyBQbGFjZWhvbGRlciBcbiAgICAgICAgSW5wdXRtYXNrKHtcbiAgICAgICAgICAgIFwibWFza1wiIDogXCIoOTk5KSA5OTktOTk5OVwiLFxuICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIig5OTkpIDk5OS05OTk5XCIsXG4gICAgICAgIH0pLm1hc2soXCIja3RfaW5wdXRtYXNrXzNcIik7XG5cbiAgICAgICAgLy8gUmVwZWF0aW5nIFxuICAgICAgICBJbnB1dG1hc2soe1xuICAgICAgICAgICAgXCJtYXNrXCI6IFwiOVwiLFxuICAgICAgICAgICAgXCJyZXBlYXRcIjogMTAsXG4gICAgICAgICAgICBcImdyZWVkeVwiOiBmYWxzZVxuICAgICAgICB9KS5tYXNrKFwiI2t0X2lucHV0bWFza180XCIpO1xuXG4gICAgICAgIC8vIFJpZ2h0IGFsaWduZWQgXG4gICAgICAgIElucHV0bWFzayhcImRlY2ltYWxcIiwge1xuICAgICAgICAgICAgXCJyaWdodEFsaWduTnVtZXJpY3NcIjogZmFsc2VcbiAgICAgICAgfSkubWFzayhcIiNrdF9pbnB1dG1hc2tfNVwiKTtcblxuICAgICAgICAvLyBDdXJyZW5jeVxuICAgICAgICBJbnB1dG1hc2soXCLigqwgOTk5Ljk5OS45OTksOTlcIiwge1xuICAgICAgICAgICAgXCJudW1lcmljSW5wdXRcIjogdHJ1ZVxuICAgICAgICB9KS5tYXNrKFwiI2t0X2lucHV0bWFza182XCIpO1xuXG4gICAgICAgIC8vIElwIGFkZHJlc3NcbiAgICAgICAgSW5wdXRtYXNrKHtcbiAgICAgICAgICAgIFwibWFza1wiOiBcIjk5OS45OTkuOTk5Ljk5OVwiXG4gICAgICAgIH0pLm1hc2soXCIja3RfaW5wdXRtYXNrXzdcIik7XG5cbiAgICAgICAgLy8gRW1haWwgYWRkcmVzc1xuICAgICAgICBJbnB1dG1hc2soe1xuICAgICAgICAgICAgbWFzazogXCIqezEsMjB9Wy4qezEsMjB9XVsuKnsxLDIwfV1bLip7MSwyMH1dQCp7MSwyMH1bLip7Miw2fV1bLip7MSwyfV1cIixcbiAgICAgICAgICAgIGdyZWVkeTogZmFsc2UsXG4gICAgICAgICAgICBvbkJlZm9yZVBhc3RlOiBmdW5jdGlvbiAocGFzdGVkVmFsdWUsIG9wdHMpIHtcbiAgICAgICAgICAgICAgICBwYXN0ZWRWYWx1ZSA9IHBhc3RlZFZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhc3RlZFZhbHVlLnJlcGxhY2UoXCJtYWlsdG86XCIsIFwiXCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgXCIqXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yOiAnWzAtOUEtWmEteiEjJCUmXCIqKy89P15fYHt8fX5cXC1dJyxcbiAgICAgICAgICAgICAgICAgICAgY2FyZGluYWxpdHk6IDEsXG4gICAgICAgICAgICAgICAgICAgIGNhc2luZzogXCJsb3dlclwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KS5tYXNrKFwiI2t0X2lucHV0bWFza184XCIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgX2V4YW1wbGVzKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEZvcm1zSW5wdXRtYXNrRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc0lucHV0bWFza0RlbW9zIiwiX2V4YW1wbGVzIiwiSW5wdXRtYXNrIiwibWFzayIsImdyZWVkeSIsIm9uQmVmb3JlUGFzdGUiLCJwYXN0ZWRWYWx1ZSIsIm9wdHMiLCJ0b0xvd2VyQ2FzZSIsInJlcGxhY2UiLCJkZWZpbml0aW9ucyIsInZhbGlkYXRvciIsImNhcmRpbmFsaXR5IiwiY2FzaW5nIiwiaW5pdCIsImVsZW1lbnQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/inputmask.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/inputmask.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=inputmask.js.map