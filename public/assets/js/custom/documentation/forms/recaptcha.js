/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/forms/recaptcha.js ***!
  \*********************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsGoogleRecaptchaDemos = function () {
    // Private functions
    var example = function (element) {
        document.querySelector("#kt_form_submit_button").addEventListener("click", function (e) {
            e.preventDefault();
=======
eval(" // Class definition\n\nvar KTFormsGoogleRecaptchaDemos = function () {\n  // Private functions\n  var example = function example(element) {\n    document.querySelector(\"#kt_form_submit_button\").addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      grecaptcha.ready(function () {\n        if (grecaptcha.getResponse() === \"\") {\n          alert(\"Please validate the Google reCaptcha.\");\n        } else {\n          alert(\"Successful validation! Now you can submit this form to your server side processing.\");\n        }\n      });\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsGoogleRecaptchaDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3JlY2FwdGNoYS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFZO0FBQzFDO0FBQ0EsTUFBSUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBVUMsT0FBVixFQUFtQjtBQUM3QkMsSUFBQUEsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixFQUFpREMsZ0JBQWpELENBQWtFLE9BQWxFLEVBQTJFLFVBQVVDLENBQVYsRUFBYTtBQUNwRkEsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFDLE1BQUFBLFVBQVUsQ0FBQ0MsS0FBWCxDQUFpQixZQUFZO0FBQ3pCLFlBQUlELFVBQVUsQ0FBQ0UsV0FBWCxPQUE2QixFQUFqQyxFQUFxQztBQUNqQ0MsVUFBQUEsS0FBSyxDQUFDLHVDQUFELENBQUw7QUFDSCxTQUZELE1BRU87QUFDSEEsVUFBQUEsS0FBSyxDQUFDLHFGQUFELENBQUw7QUFDSDtBQUNKLE9BTkQ7QUFPSCxLQVZEO0FBV0gsR0FaRDs7QUFjQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGNBQVVWLE9BQVYsRUFBbUI7QUFDckJELE1BQUFBLE9BQU87QUFDVjtBQUpFLEdBQVA7QUFNSCxDQXRCaUMsRUFBbEMsQyxDQXdCQTs7O0FBQ0FZLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2QsRUFBQUEsMkJBQTJCLENBQUNZLElBQTVCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvcmVjYXB0Y2hhLmpzPzkwMjMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zR29vZ2xlUmVjYXB0Y2hhRGVtb3MgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfZm9ybV9zdWJtaXRfYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoZ3JlY2FwdGNoYS5nZXRSZXNwb25zZSgpID09PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KFwiUGxlYXNlIHZhbGlkYXRlIHRoZSBHb29nbGUgcmVDYXB0Y2hhLlwiKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBhbGVydChcIlN1Y2Nlc3NmdWwgdmFsaWRhdGlvbiEgTm93IHlvdSBjYW4gc3VibWl0IHRoaXMgZm9ybSB0byB5b3VyIHNlcnZlciBzaWRlIHByb2Nlc3NpbmcuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBleGFtcGxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0dvb2dsZVJlY2FwdGNoYURlbW9zLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybXNHb29nbGVSZWNhcHRjaGFEZW1vcyIsImV4YW1wbGUiLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImdyZWNhcHRjaGEiLCJyZWFkeSIsImdldFJlc3BvbnNlIiwiYWxlcnQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/recaptcha.js\n");
>>>>>>> Stashed changes

            grecaptcha.ready(function () {
                if (grecaptcha.getResponse() === "") {
                    alert("Please validate the Google reCaptcha.");
                } else {
                    alert("Successful validation! Now you can submit this form to your server side processing.");
                }
            });
        });
    }

    return {
        // Public Functions
        init: function (element) {
            example();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsGoogleRecaptchaDemos.init();
});

/******/ })()
;
//# sourceMappingURL=recaptcha.js.map