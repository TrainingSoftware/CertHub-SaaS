/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/search/horizontal.js ***!
  \*************************************************************************************/

 
// Class definition
var KTSearchHorizontal = function () {
    // Private functions
    var initAdvancedSearchForm = function () {
       var form = document.querySelector('#kt_advanced_search_form');

<<<<<<< Updated upstream
       // Init tags
       var tags = form.querySelector('[name="tags"]');
       new Tagify(tags);
    }
=======
eval(" // Class definition\n\nvar KTSearchHorizontal = function () {\n  // Private functions\n  var initAdvancedSearchForm = function initAdvancedSearchForm() {\n    var form = document.querySelector('#kt_advanced_search_form'); // Init tags\n\n    var tags = form.querySelector('[name=\"tags\"]');\n    new Tagify(tags);\n  };\n\n  var handleAdvancedSearchToggle = function handleAdvancedSearchToggle() {\n    var link = document.querySelector('#kt_horizontal_search_advanced_link');\n    link.addEventListener('click', function (e) {\n      e.preventDefault();\n\n      if (link.innerHTML === \"Advanced Search\") {\n        link.innerHTML = \"Hide Advanced Search\";\n      } else {\n        link.innerHTML = \"Advanced Search\";\n      }\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initAdvancedSearchForm();\n      handleAdvancedSearchToggle();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSearchHorizontal.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9zZWFyY2gvaG9yaXpvbnRhbC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFZO0FBQ2pDO0FBQ0EsTUFBSUMsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFZO0FBQ3RDLFFBQUlDLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLDBCQUF2QixDQUFYLENBRHNDLENBR3RDOztBQUNBLFFBQUlDLElBQUksR0FBR0gsSUFBSSxDQUFDRSxhQUFMLENBQW1CLGVBQW5CLENBQVg7QUFDQSxRQUFJRSxNQUFKLENBQVdELElBQVg7QUFDRixHQU5EOztBQVFBLE1BQUlFLDBCQUEwQixHQUFHLFNBQTdCQSwwQkFBNkIsR0FBWTtBQUN6QyxRQUFJQyxJQUFJLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQ0FBdkIsQ0FBWDtBQUVBSSxJQUFBQSxJQUFJLENBQUNDLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFVBQVVDLENBQVYsRUFBYTtBQUN4Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUVBLFVBQUlILElBQUksQ0FBQ0ksU0FBTCxLQUFtQixpQkFBdkIsRUFBMEM7QUFDdENKLFFBQUFBLElBQUksQ0FBQ0ksU0FBTCxHQUFpQixzQkFBakI7QUFDSCxPQUZELE1BRU87QUFDSEosUUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCLGlCQUFqQjtBQUNIO0FBQ0osS0FSRDtBQVNILEdBWkQsQ0FWaUMsQ0F3QmpDOzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkWixNQUFBQSxzQkFBc0I7QUFDdEJNLE1BQUFBLDBCQUEwQjtBQUM3QjtBQUpFLEdBQVA7QUFNSCxDQS9Cd0IsRUFBekIsQyxDQWlDQTs7O0FBQ0FPLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2YsRUFBQUEsa0JBQWtCLENBQUNhLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL3BhZ2VzL3NlYXJjaC9ob3Jpem9udGFsLmpzP2EyM2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4gXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RTZWFyY2hIb3Jpem9udGFsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXRBZHZhbmNlZFNlYXJjaEZvcm0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfYWR2YW5jZWRfc2VhcmNoX2Zvcm0nKTtcblxuICAgICAgIC8vIEluaXQgdGFnc1xuICAgICAgIHZhciB0YWdzID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRhZ3NcIl0nKTtcbiAgICAgICBuZXcgVGFnaWZ5KHRhZ3MpO1xuICAgIH1cblxuICAgIHZhciBoYW5kbGVBZHZhbmNlZFNlYXJjaFRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfaG9yaXpvbnRhbF9zZWFyY2hfYWR2YW5jZWRfbGluaycpO1xuXG4gICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAobGluay5pbm5lckhUTUwgPT09IFwiQWR2YW5jZWQgU2VhcmNoXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5rLmlubmVySFRNTCA9IFwiSGlkZSBBZHZhbmNlZCBTZWFyY2hcIjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGluay5pbm5lckhUTUwgPSBcIkFkdmFuY2VkIFNlYXJjaFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5pdEFkdmFuY2VkU2VhcmNoRm9ybSgpO1xuICAgICAgICAgICAgaGFuZGxlQWR2YW5jZWRTZWFyY2hUb2dnbGUoKTtcbiAgICAgICAgfVxuICAgIH0gICAgIFxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RTZWFyY2hIb3Jpem9udGFsLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUU2VhcmNoSG9yaXpvbnRhbCIsImluaXRBZHZhbmNlZFNlYXJjaEZvcm0iLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGFncyIsIlRhZ2lmeSIsImhhbmRsZUFkdmFuY2VkU2VhcmNoVG9nZ2xlIiwibGluayIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJpbm5lckhUTUwiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/search/horizontal.js\n");
>>>>>>> Stashed changes

    var handleAdvancedSearchToggle = function () {
        var link = document.querySelector('#kt_horizontal_search_advanced_link');

        link.addEventListener('click', function (e) {
            e.preventDefault();
            
            if (link.innerHTML === "Advanced Search") {
                link.innerHTML = "Hide Advanced Search";
            } else {
                link.innerHTML = "Advanced Search";
            }
        })
    }

    // Public methods
    return {
        init: function () {
            initAdvancedSearchForm();
            handleAdvancedSearchToggle();
        }
    }     
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTSearchHorizontal.init();
});

/******/ })()
;
//# sourceMappingURL=horizontal.js.map