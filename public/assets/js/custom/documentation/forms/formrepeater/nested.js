/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/forms/formrepeater/nested.js ***!
  \*******************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormRepeaterNested = function() {
    // Private functions
    var example1 = function() {
        $('#kt_docs_repeater_nested').repeater({
            // (Required if there is a nested repeater)
            // Specify the configuration of the nested repeaters.
            // Nested configuration follows the same format as the base configuration,
            // supporting options "defaultValues", "show", "hide", etc.
            // Nested repeaters additionally require a "selector" field.
            repeaters: [{
                // (Required)
                // Specify the jQuery selector for this nested repeater
                selector: '.inner-repeater',
                show: function () {
                    $(this).slideDown();
                },
    
                hide: function (deleteElement) {
                    $(this).slideUp(deleteElement);
                }
            }],
=======
eval(" // Class definition\n\nvar KTFormRepeaterNested = function () {\n  // Private functions\n  var example1 = function example1() {\n    $('#kt_docs_repeater_nested').repeater({\n      // (Required if there is a nested repeater)\n      // Specify the configuration of the nested repeaters.\n      // Nested configuration follows the same format as the base configuration,\n      // supporting options \"defaultValues\", \"show\", \"hide\", etc.\n      // Nested repeaters additionally require a \"selector\" field.\n      repeaters: [{\n        // (Required)\n        // Specify the jQuery selector for this nested repeater\n        selector: '.inner-repeater',\n        show: function show() {\n          $(this).slideDown();\n        },\n        hide: function hide(deleteElement) {\n          $(this).slideUp(deleteElement);\n        }\n      }],\n      show: function show() {\n        $(this).slideDown();\n      },\n      hide: function hide(deleteElement) {\n        $(this).slideUp(deleteElement);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormRepeaterNested.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Zvcm1yZXBlYXRlci9uZXN0ZWQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBVztBQUNsQztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJDLElBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCQyxRQUE5QixDQUF1QztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLE1BQUFBLFNBQVMsRUFBRSxDQUFDO0FBQ1I7QUFDQTtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsaUJBSEY7QUFJUkMsUUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RKLFVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssU0FBUjtBQUNILFNBTk87QUFRUkMsUUFBQUEsSUFBSSxFQUFFLGNBQVVDLGFBQVYsRUFBeUI7QUFDM0JQLFVBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQkQsYUFBaEI7QUFDSDtBQVZPLE9BQUQsQ0FOd0I7QUFtQm5DSCxNQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZEosUUFBQUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxTQUFSO0FBQ0gsT0FyQmtDO0FBdUJuQ0MsTUFBQUEsSUFBSSxFQUFFLGNBQVVDLGFBQVYsRUFBeUI7QUFDM0JQLFFBQUFBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVEsT0FBUixDQUFnQkQsYUFBaEI7QUFDSDtBQXpCa0MsS0FBdkM7QUEyQkgsR0E1QkQ7O0FBOEJBLFNBQU87QUFDSDtBQUNBRSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYlYsTUFBQUEsUUFBUTtBQUNYO0FBSkUsR0FBUDtBQU1ILENBdEMwQixFQUEzQixDLENBd0NBOzs7QUFDQVcsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDYixFQUFBQSxvQkFBb0IsQ0FBQ1csSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9mb3JtcmVwZWF0ZXIvbmVzdGVkLmpzPzBhYTIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1SZXBlYXRlck5lc3RlZCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNrdF9kb2NzX3JlcGVhdGVyX25lc3RlZCcpLnJlcGVhdGVyKHtcbiAgICAgICAgICAgIC8vIChSZXF1aXJlZCBpZiB0aGVyZSBpcyBhIG5lc3RlZCByZXBlYXRlcilcbiAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIGNvbmZpZ3VyYXRpb24gb2YgdGhlIG5lc3RlZCByZXBlYXRlcnMuXG4gICAgICAgICAgICAvLyBOZXN0ZWQgY29uZmlndXJhdGlvbiBmb2xsb3dzIHRoZSBzYW1lIGZvcm1hdCBhcyB0aGUgYmFzZSBjb25maWd1cmF0aW9uLFxuICAgICAgICAgICAgLy8gc3VwcG9ydGluZyBvcHRpb25zIFwiZGVmYXVsdFZhbHVlc1wiLCBcInNob3dcIiwgXCJoaWRlXCIsIGV0Yy5cbiAgICAgICAgICAgIC8vIE5lc3RlZCByZXBlYXRlcnMgYWRkaXRpb25hbGx5IHJlcXVpcmUgYSBcInNlbGVjdG9yXCIgZmllbGQuXG4gICAgICAgICAgICByZXBlYXRlcnM6IFt7XG4gICAgICAgICAgICAgICAgLy8gKFJlcXVpcmVkKVxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhlIGpRdWVyeSBzZWxlY3RvciBmb3IgdGhpcyBuZXN0ZWQgcmVwZWF0ZXJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5pbm5lci1yZXBlYXRlcicsXG4gICAgICAgICAgICAgICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnNsaWRlRG93bigpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICAgICAgaGlkZTogZnVuY3Rpb24gKGRlbGV0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKGRlbGV0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1dLFxuXG4gICAgICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZURvd24oKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGhpZGU6IGZ1bmN0aW9uIChkZWxldGVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zbGlkZVVwKGRlbGV0ZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhhbXBsZTEoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybVJlcGVhdGVyTmVzdGVkLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybVJlcGVhdGVyTmVzdGVkIiwiZXhhbXBsZTEiLCIkIiwicmVwZWF0ZXIiLCJyZXBlYXRlcnMiLCJzZWxlY3RvciIsInNob3ciLCJzbGlkZURvd24iLCJoaWRlIiwiZGVsZXRlRWxlbWVudCIsInNsaWRlVXAiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/formrepeater/nested.js\n");
>>>>>>> Stashed changes

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
        init: function() {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormRepeaterNested.init();
});

/******/ })()
;
//# sourceMappingURL=nested.js.map