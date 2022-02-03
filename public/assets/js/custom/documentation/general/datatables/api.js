/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../src/js/custom/documentation/general/datatables/api.js ***!
  \****************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTDatatablesApi = function () {
    // Private functions
=======
eval(" // Class definition\n\nvar KTDatatablesApi = function () {\n  // Private functions\n  var _initExample1 = function _initExample1() {\n    var t = $(\"#kt_datatable_example_1\").DataTable();\n    var counter = 1;\n    $(\"#kt_datatable_example_1_addrow\").on(\"click\", function () {\n      t.row.add([counter + \".1\", counter + \".2\", counter + \".3\", counter + \".4\", counter + \".5\"]).draw(false);\n      counter++;\n    }); // Automatically add a first row of data\n\n    $(\"#kt_datatable_example_1_addrow\").click();\n  };\n\n  var _initExample2 = function _initExample2() {\n    var table = $(\"#kt_datatable_example_2\").DataTable({\n      columnDefs: [{\n        orderable: false,\n        targets: [1, 2, 3]\n      }]\n    });\n    $(\"#kt_datatable_example_2_submit\").click(function () {\n      var data = table.$(\"input, select\").serialize();\n      alert(\"The following data would have been submitted to the server: \\n\\n\" + data.substr(0, 120) + \"...\");\n      return false;\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      _initExample1();\n\n      _initExample2();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDatatablesApi.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZGF0YXRhYmxlcy9hcGkuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFlBQVk7QUFDOUI7QUFFQSxNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVc7QUFDM0IsUUFBSUMsQ0FBQyxHQUFHQyxDQUFDLENBQUMseUJBQUQsQ0FBRCxDQUE2QkMsU0FBN0IsRUFBUjtBQUNBLFFBQUlDLE9BQU8sR0FBRyxDQUFkO0FBRUFGLElBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DRyxFQUFwQyxDQUF3QyxPQUF4QyxFQUFpRCxZQUFZO0FBQ3pESixNQUFBQSxDQUFDLENBQUNLLEdBQUYsQ0FBTUMsR0FBTixDQUFXLENBQ1BILE9BQU8sR0FBRSxJQURGLEVBRVBBLE9BQU8sR0FBRSxJQUZGLEVBR1BBLE9BQU8sR0FBRSxJQUhGLEVBSVBBLE9BQU8sR0FBRSxJQUpGLEVBS1BBLE9BQU8sR0FBRSxJQUxGLENBQVgsRUFNSUksSUFOSixDQU1VLEtBTlY7QUFRQUosTUFBQUEsT0FBTztBQUNWLEtBVkQsRUFKMkIsQ0FnQjNCOztBQUNBRixJQUFBQSxDQUFDLENBQUMsZ0NBQUQsQ0FBRCxDQUFvQ08sS0FBcEM7QUFDSCxHQWxCRDs7QUFvQkEsTUFBSUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixHQUFXO0FBQzNCLFFBQUlDLEtBQUssR0FBR1QsQ0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJDLFNBQTdCLENBQXVDO0FBQy9DUyxNQUFBQSxVQUFVLEVBQUUsQ0FBQztBQUNUQyxRQUFBQSxTQUFTLEVBQUUsS0FERjtBQUVUQyxRQUFBQSxPQUFPLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUw7QUFGQSxPQUFEO0FBRG1DLEtBQXZDLENBQVo7QUFPQVosSUFBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NPLEtBQXBDLENBQTJDLFlBQVc7QUFDbEQsVUFBSU0sSUFBSSxHQUFHSixLQUFLLENBQUNULENBQU4sQ0FBUSxlQUFSLEVBQXlCYyxTQUF6QixFQUFYO0FBQ0FDLE1BQUFBLEtBQUssQ0FDRCxxRUFDQUYsSUFBSSxDQUFDRyxNQUFMLENBQWEsQ0FBYixFQUFnQixHQUFoQixDQURBLEdBQ3NCLEtBRnJCLENBQUw7QUFJQSxhQUFPLEtBQVA7QUFDSCxLQVBEO0FBUUgsR0FoQkQsQ0F2QjhCLENBeUM5Qjs7O0FBQ0EsU0FBTztBQUNIQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZG5CLE1BQUFBLGFBQWE7O0FBQ2JVLE1BQUFBLGFBQWE7QUFDaEI7QUFKRSxHQUFQO0FBTUgsQ0FoRHFCLEVBQXRCLEMsQ0FrREE7OztBQUNBVSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakN0QixFQUFBQSxlQUFlLENBQUNvQixJQUFoQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZGF0YXRhYmxlcy9hcGkuanM/OGI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURGF0YXRhYmxlc0FwaSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuXG4gICAgdmFyIF9pbml0RXhhbXBsZTEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHQgPSAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzFcIikuRGF0YVRhYmxlKCk7XG4gICAgICAgIHZhciBjb3VudGVyID0gMTtcbiAgICBcbiAgICAgICAgJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8xX2FkZHJvd1wiKS5vbiggXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0LnJvdy5hZGQoIFtcbiAgICAgICAgICAgICAgICBjb3VudGVyICtcIi4xXCIsXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuMlwiLFxuICAgICAgICAgICAgICAgIGNvdW50ZXIgK1wiLjNcIixcbiAgICAgICAgICAgICAgICBjb3VudGVyICtcIi40XCIsXG4gICAgICAgICAgICAgICAgY291bnRlciArXCIuNVwiLFxuICAgICAgICAgICAgXSApLmRyYXcoIGZhbHNlICk7XG4gICAgXG4gICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgIH0gKTtcbiAgICBcbiAgICAgICAgLy8gQXV0b21hdGljYWxseSBhZGQgYSBmaXJzdCByb3cgb2YgZGF0YVxuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzFfYWRkcm93XCIpLmNsaWNrKCk7XG4gICAgfVxuXG4gICAgdmFyIF9pbml0RXhhbXBsZTIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHRhYmxlID0gJChcIiNrdF9kYXRhdGFibGVfZXhhbXBsZV8yXCIpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBjb2x1bW5EZWZzOiBbe1xuICAgICAgICAgICAgICAgIG9yZGVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogWzEsMiwzXVxuICAgICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgIFxuICAgICAgICAkKFwiI2t0X2RhdGF0YWJsZV9leGFtcGxlXzJfc3VibWl0XCIpLmNsaWNrKCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGFibGUuJChcImlucHV0LCBzZWxlY3RcIikuc2VyaWFsaXplKCk7XG4gICAgICAgICAgICBhbGVydChcbiAgICAgICAgICAgICAgICBcIlRoZSBmb2xsb3dpbmcgZGF0YSB3b3VsZCBoYXZlIGJlZW4gc3VibWl0dGVkIHRvIHRoZSBzZXJ2ZXI6IFxcblxcblwiK1xuICAgICAgICAgICAgICAgIGRhdGEuc3Vic3RyKCAwLCAxMjAgKStcIi4uLlwiXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTEoKTtcbiAgICAgICAgICAgIF9pbml0RXhhbXBsZTIoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1REYXRhdGFibGVzQXBpLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURGF0YXRhYmxlc0FwaSIsIl9pbml0RXhhbXBsZTEiLCJ0IiwiJCIsIkRhdGFUYWJsZSIsImNvdW50ZXIiLCJvbiIsInJvdyIsImFkZCIsImRyYXciLCJjbGljayIsIl9pbml0RXhhbXBsZTIiLCJ0YWJsZSIsImNvbHVtbkRlZnMiLCJvcmRlcmFibGUiLCJ0YXJnZXRzIiwiZGF0YSIsInNlcmlhbGl6ZSIsImFsZXJ0Iiwic3Vic3RyIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/datatables/api.js\n");
>>>>>>> Stashed changes

    var _initExample1 = function() {
        var t = $("#kt_datatable_example_1").DataTable();
        var counter = 1;
    
        $("#kt_datatable_example_1_addrow").on( "click", function () {
            t.row.add( [
                counter +".1",
                counter +".2",
                counter +".3",
                counter +".4",
                counter +".5",
            ] ).draw( false );
    
            counter++;
        } );
    
        // Automatically add a first row of data
        $("#kt_datatable_example_1_addrow").click();
    }

    var _initExample2 = function() {
        var table = $("#kt_datatable_example_2").DataTable({
            columnDefs: [{
                orderable: false,
                targets: [1,2,3]
            }]
        });
     
        $("#kt_datatable_example_2_submit").click( function() {
            var data = table.$("input, select").serialize();
            alert(
                "The following data would have been submitted to the server: \n\n"+
                data.substr( 0, 120 )+"..."
            );
            return false;
        });
    }

    // Public methods
    return {
        init: function () {
            _initExample1();
            _initExample2();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDatatablesApi.init();
});

/******/ })()
;
//# sourceMappingURL=api.js.map