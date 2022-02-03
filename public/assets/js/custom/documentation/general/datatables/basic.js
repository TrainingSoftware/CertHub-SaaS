/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ../src/js/custom/documentation/general/datatables/basic.js ***!
  \******************************************************************/


// Class definition
var KTDatatablesBasic = function () {
    // Private functions

    var _initExample1 = function() {
        $("#kt_datatable_example_1").DataTable();
    }

    var _initExample2 = function() {
        $("#kt_datatable_example_2").DataTable({
            "scrollY":        "500px",
            "scrollCollapse": true,
            "paging":         false,
            "dom":   "<'table-responsive'tr>" 
        });
    }

    var _initExample3 = function() {
        $("#kt_datatable_example_3").DataTable({
            "scrollX": true
        });
    }

    var _initExample4 = function() {
        $("#kt_datatable_example_4").DataTable({
            "scrollY": 300,
            "scrollX": true
        });
    }  

    // Public methods
    return {
        init: function () {
            _initExample1();
            _initExample2();
            _initExample3();
            _initExample4();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesBasic.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/datatables/basic.js":
/*!***************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/datatables/basic.js ***!
  \***************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDatatablesBasic = function () {\n  // Private functions\n  var _initExample1 = function _initExample1() {\n    $(\"#kt_datatable_example_1\").DataTable();\n  };\n\n  var _initExample2 = function _initExample2() {\n    $(\"#kt_datatable_example_2\").DataTable({\n      \"scrollY\": \"500px\",\n      \"scrollCollapse\": true,\n      \"paging\": false,\n      \"dom\": \"<'table-responsive'tr>\"\n    });\n  };\n\n  var _initExample3 = function _initExample3() {\n    $(\"#kt_datatable_example_3\").DataTable({\n      \"scrollX\": true\n    });\n  };\n\n  var _initExample4 = function _initExample4() {\n    $(\"#kt_datatable_example_4\").DataTable({\n      \"scrollY\": 300,\n      \"scrollX\": true\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      _initExample1();\n\n      _initExample2();\n\n      _initExample3();\n\n      _initExample4();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDatatablesBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZGF0YXRhYmxlcy9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFZO0FBQ2hDO0FBRUEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCQyxJQUFBQSxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsU0FBN0I7QUFDSCxHQUZEOztBQUlBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQkYsSUFBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFNBQTdCLENBQXVDO0FBQ25DLGlCQUFrQixPQURpQjtBQUVuQyx3QkFBa0IsSUFGaUI7QUFHbkMsZ0JBQWtCLEtBSGlCO0FBSW5DLGFBQVM7QUFKMEIsS0FBdkM7QUFNSCxHQVBEOztBQVNBLE1BQUlFLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQkgsSUFBQUEsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFNBQTdCLENBQXVDO0FBQ25DLGlCQUFXO0FBRHdCLEtBQXZDO0FBR0gsR0FKRDs7QUFNQSxNQUFJRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0JKLElBQUFBLENBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCQyxTQUE3QixDQUF1QztBQUNuQyxpQkFBVyxHQUR3QjtBQUVuQyxpQkFBVztBQUZ3QixLQUF2QztBQUlILEdBTEQsQ0F0QmdDLENBNkJoQzs7O0FBQ0EsU0FBTztBQUNISSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZE4sTUFBQUEsYUFBYTs7QUFDYkcsTUFBQUEsYUFBYTs7QUFDYkMsTUFBQUEsYUFBYTs7QUFDYkMsTUFBQUEsYUFBYTtBQUNoQjtBQU5FLEdBQVA7QUFRSCxDQXRDdUIsRUFBeEIsQyxDQXdDQTs7O0FBQ0FFLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ1QsRUFBQUEsaUJBQWlCLENBQUNPLElBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kYXRhdGFibGVzL2Jhc2ljLmpzPzBmODkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVERhdGF0YWJsZXNCYXNpYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuXG4gICAgdmFyIF9pbml0RXhhbXBsZTEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8xXCIpLkRhdGFUYWJsZSgpO1xuICAgIH1cblxuICAgIHZhciBfaW5pdEV4YW1wbGUyID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZGF0YXRhYmxlX2V4YW1wbGVfMlwiKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgXCJzY3JvbGxZXCI6ICAgICAgICBcIjUwMHB4XCIsXG4gICAgICAgICAgICBcInNjcm9sbENvbGxhcHNlXCI6IHRydWUsXG4gICAgICAgICAgICBcInBhZ2luZ1wiOiAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgXCJkb21cIjogICBcIjwndGFibGUtcmVzcG9uc2l2ZSd0cj5cIiBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF9pbml0RXhhbXBsZTMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8zXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcInNjcm9sbFhcIjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgX2luaXRFeGFtcGxlNCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzRcIikuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwic2Nyb2xsWVwiOiAzMDAsXG4gICAgICAgICAgICBcInNjcm9sbFhcIjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9ICBcblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX2luaXRFeGFtcGxlMSgpO1xuICAgICAgICAgICAgX2luaXRFeGFtcGxlMigpO1xuICAgICAgICAgICAgX2luaXRFeGFtcGxlMygpO1xuICAgICAgICAgICAgX2luaXRFeGFtcGxlNCgpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVERhdGF0YWJsZXNCYXNpYy5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1REYXRhdGFibGVzQmFzaWMiLCJfaW5pdEV4YW1wbGUxIiwiJCIsIkRhdGFUYWJsZSIsIl9pbml0RXhhbXBsZTIiLCJfaW5pdEV4YW1wbGUzIiwiX2luaXRFeGFtcGxlNCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/datatables/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/datatables/basic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=basic.js.map