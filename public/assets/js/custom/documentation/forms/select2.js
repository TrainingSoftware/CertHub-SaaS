/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ../src/js/custom/documentation/forms/select2.js ***!
  \*******************************************************/


// Class definition
var KTFormsSelect2Demo = function () {
    // Private functions
    var exampleCountry = function () {
        // Format options
        const format = (item) => {
            if (!item.id) {
                return item.text;
            }

            var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-country');
            var img = $("<img>", {
                class: "rounded-circle me-2",
                width: 26,
                src: url
            });
            var span = $("<span>", {
                text: " " + item.text
            });
            span.prepend(img);
            return span;
        }

        // Init Select2 --- more info: https://select2.org/
        $('#kt_docs_select2_country').select2({
            templateResult: function (item) {
                return format(item);
            }
        });
    }

    const exampleUsers = function () {
        // Format options
        const format = (item) => {
            if (!item.id) {
                return item.text;
            }

            var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-user');
            var img = $("<img>", {
                class: "rounded-circle me-2",
                width: 26,
                src: url
            });
            var span = $("<span>", {
                text: " " + item.text
            });
            span.prepend(img);
            return span;
        }

        // Init Select2 --- more info: https://select2.org/
        $('#kt_docs_select2_users').select2({
            templateResult: function (item) {
                return format(item);
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleCountry();
            exampleUsers();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsSelect2Demo.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/select2.js":
/*!****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/select2.js ***!
  \****************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsSelect2Demo = function () {\n  // Private functions\n  var exampleCountry = function exampleCountry() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-country');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_country').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  var exampleUsers = function exampleUsers() {\n    // Format options\n    var format = function format(item) {\n      if (!item.id) {\n        return item.text;\n      }\n\n      var url = hostUrl + 'media/' + item.element.getAttribute('data-kt-select2-user');\n      var img = $(\"<img>\", {\n        \"class\": \"rounded-circle me-2\",\n        width: 26,\n        src: url\n      });\n      var span = $(\"<span>\", {\n        text: \" \" + item.text\n      });\n      span.prepend(img);\n      return span;\n    }; // Init Select2 --- more info: https://select2.org/\n\n\n    $('#kt_docs_select2_users').select2({\n      templateResult: function templateResult(item) {\n        return format(item);\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCountry();\n      exampleUsers();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsSelect2Demo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3NlbGVjdDIuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBWTtBQUNqQztBQUNBLE1BQUlDLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsR0FBWTtBQUM3QjtBQUNBLFFBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUNyQixVQUFJLENBQUNBLElBQUksQ0FBQ0MsRUFBVixFQUFjO0FBQ1YsZUFBT0QsSUFBSSxDQUFDRSxJQUFaO0FBQ0g7O0FBRUQsVUFBSUMsR0FBRyxHQUFHQyxPQUFPLEdBQUcsUUFBVixHQUFxQkosSUFBSSxDQUFDSyxPQUFMLENBQWFDLFlBQWIsQ0FBMEIseUJBQTFCLENBQS9CO0FBQ0EsVUFBSUMsR0FBRyxHQUFHQyxDQUFDLENBQUMsT0FBRCxFQUFVO0FBQ2pCLGlCQUFPLHFCQURVO0FBRWpCQyxRQUFBQSxLQUFLLEVBQUUsRUFGVTtBQUdqQkMsUUFBQUEsR0FBRyxFQUFFUDtBQUhZLE9BQVYsQ0FBWDtBQUtBLFVBQUlRLElBQUksR0FBR0gsQ0FBQyxDQUFDLFFBQUQsRUFBVztBQUNuQk4sUUFBQUEsSUFBSSxFQUFFLE1BQU1GLElBQUksQ0FBQ0U7QUFERSxPQUFYLENBQVo7QUFHQVMsTUFBQUEsSUFBSSxDQUFDQyxPQUFMLENBQWFMLEdBQWI7QUFDQSxhQUFPSSxJQUFQO0FBQ0gsS0FoQkQsQ0FGNkIsQ0FvQjdCOzs7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJLLE9BQTlCLENBQXNDO0FBQ2xDQyxNQUFBQSxjQUFjLEVBQUUsd0JBQVVkLElBQVYsRUFBZ0I7QUFDNUIsZUFBT0QsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFDSDtBQUhpQyxLQUF0QztBQUtILEdBMUJEOztBQTRCQSxNQUFNZSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzdCO0FBQ0EsUUFBTWhCLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLElBQUQsRUFBVTtBQUNyQixVQUFJLENBQUNBLElBQUksQ0FBQ0MsRUFBVixFQUFjO0FBQ1YsZUFBT0QsSUFBSSxDQUFDRSxJQUFaO0FBQ0g7O0FBRUQsVUFBSUMsR0FBRyxHQUFHQyxPQUFPLEdBQUcsUUFBVixHQUFxQkosSUFBSSxDQUFDSyxPQUFMLENBQWFDLFlBQWIsQ0FBMEIsc0JBQTFCLENBQS9CO0FBQ0EsVUFBSUMsR0FBRyxHQUFHQyxDQUFDLENBQUMsT0FBRCxFQUFVO0FBQ2pCLGlCQUFPLHFCQURVO0FBRWpCQyxRQUFBQSxLQUFLLEVBQUUsRUFGVTtBQUdqQkMsUUFBQUEsR0FBRyxFQUFFUDtBQUhZLE9BQVYsQ0FBWDtBQUtBLFVBQUlRLElBQUksR0FBR0gsQ0FBQyxDQUFDLFFBQUQsRUFBVztBQUNuQk4sUUFBQUEsSUFBSSxFQUFFLE1BQU1GLElBQUksQ0FBQ0U7QUFERSxPQUFYLENBQVo7QUFHQVMsTUFBQUEsSUFBSSxDQUFDQyxPQUFMLENBQWFMLEdBQWI7QUFDQSxhQUFPSSxJQUFQO0FBQ0gsS0FoQkQsQ0FGNkIsQ0FvQjdCOzs7QUFDQUgsSUFBQUEsQ0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJLLE9BQTVCLENBQW9DO0FBQ2hDQyxNQUFBQSxjQUFjLEVBQUUsd0JBQVVkLElBQVYsRUFBZ0I7QUFDNUIsZUFBT0QsTUFBTSxDQUFDQyxJQUFELENBQWI7QUFDSDtBQUgrQixLQUFwQztBQUtILEdBMUJEOztBQTRCQSxTQUFPO0FBQ0g7QUFDQWdCLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkbEIsTUFBQUEsY0FBYztBQUNkaUIsTUFBQUEsWUFBWTtBQUNmO0FBTEUsR0FBUDtBQU9ILENBakV3QixFQUF6QixDLENBbUVBOzs7QUFDQUUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDckIsRUFBQUEsa0JBQWtCLENBQUNtQixJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL3NlbGVjdDIuanM/YTljNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNTZWxlY3QyRGVtbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQ291bnRyeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRm9ybWF0IG9wdGlvbnNcbiAgICAgICAgY29uc3QgZm9ybWF0ID0gKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmICghaXRlbS5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnRleHQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciB1cmwgPSBob3N0VXJsICsgJ21lZGlhLycgKyBpdGVtLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWt0LXNlbGVjdDItY291bnRyeScpO1xuICAgICAgICAgICAgdmFyIGltZyA9ICQoXCI8aW1nPlwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwicm91bmRlZC1jaXJjbGUgbWUtMlwiLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNixcbiAgICAgICAgICAgICAgICBzcmM6IHVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgc3BhbiA9ICQoXCI8c3Bhbj5cIiwge1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiIFwiICsgaXRlbS50ZXh0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNwYW4ucHJlcGVuZChpbWcpO1xuICAgICAgICAgICAgcmV0dXJuIHNwYW47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJbml0IFNlbGVjdDIgLS0tIG1vcmUgaW5mbzogaHR0cHM6Ly9zZWxlY3QyLm9yZy9cbiAgICAgICAgJCgnI2t0X2RvY3Nfc2VsZWN0Ml9jb3VudHJ5Jykuc2VsZWN0Mih7XG4gICAgICAgICAgICB0ZW1wbGF0ZVJlc3VsdDogZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm9ybWF0KGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBleGFtcGxlVXNlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEZvcm1hdCBvcHRpb25zXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IChpdGVtKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWl0ZW0uaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS50ZXh0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdXJsID0gaG9zdFVybCArICdtZWRpYS8nICsgaXRlbS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1rdC1zZWxlY3QyLXVzZXInKTtcbiAgICAgICAgICAgIHZhciBpbWcgPSAkKFwiPGltZz5cIiwge1xuICAgICAgICAgICAgICAgIGNsYXNzOiBcInJvdW5kZWQtY2lyY2xlIG1lLTJcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogMjYsXG4gICAgICAgICAgICAgICAgc3JjOiB1cmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHNwYW4gPSAkKFwiPHNwYW4+XCIsIHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBcIiBcIiArIGl0ZW0udGV4dFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzcGFuLnByZXBlbmQoaW1nKTtcbiAgICAgICAgICAgIHJldHVybiBzcGFuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdCBTZWxlY3QyIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vc2VsZWN0Mi5vcmcvXG4gICAgICAgICQoJyNrdF9kb2NzX3NlbGVjdDJfdXNlcnMnKS5zZWxlY3QyKHtcbiAgICAgICAgICAgIHRlbXBsYXRlUmVzdWx0OiBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQoaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZUNvdW50cnkoKTtcbiAgICAgICAgICAgIGV4YW1wbGVVc2VycygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURm9ybXNTZWxlY3QyRGVtby5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zU2VsZWN0MkRlbW8iLCJleGFtcGxlQ291bnRyeSIsImZvcm1hdCIsIml0ZW0iLCJpZCIsInRleHQiLCJ1cmwiLCJob3N0VXJsIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImltZyIsIiQiLCJ3aWR0aCIsInNyYyIsInNwYW4iLCJwcmVwZW5kIiwic2VsZWN0MiIsInRlbXBsYXRlUmVzdWx0IiwiZXhhbXBsZVVzZXJzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/select2.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/select2.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=select2.js.map