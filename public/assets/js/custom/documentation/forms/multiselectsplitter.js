/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/forms/multiselectsplitter.js ***!
  \*******************************************************************/


// Class definition
var KTFormsMultiselectsplitterDemos = function() {
    // Private functions
    var example1 = function() {
        $("#kt_multiselectsplitter_example_1").multiselectsplitter();
    }

    var example2 = function() {
        $('#kt_multiselectsplitter_example_2').multiselectsplitter({
    		selectSize: 7,
            clearOnFirstChange: true,
    		groupCounter: true
        });
    }

    var example3 = function() {
        $('#kt_multiselectsplitter_example_3').multiselectsplitter({
    		groupCounter: true,
            maximumSelected: 2
        });
    }

    var example4 = function() {
        $('#kt_multiselectsplitter_example_4').multiselectsplitter({
    		groupCounter: true,
            maximumSelected: 3,
            onlySameGroup: true
        });
    }

    var example5 = function() {
        $('#kt_multiselectsplitter_example_5').multiselectsplitter({
    		size: 6,
    		groupCounter: true,
            maximumSelected: 2,
            maximumAlert: function(maximumSelected) {
                alert("You choose " + ( maximumSelected + 1 ) + " options. Are you crazy ?");
            },
            createFirstSelect: function (label, $originalSelect) { 
                return "<option class=\"text-success\">prefix - " + label + "</option>";
            },
            createSecondSelect: function (label, $firstSelect) { 
                return "<option class=\"text-danger\"> ??? </option>";
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            example1();
            example2();
            example3();
            example4();
            example5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsMultiselectsplitterDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/multiselectsplitter.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/multiselectsplitter.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsMultiselectsplitterDemos = function () {\n  // Private functions\n  var example1 = function example1() {\n    $(\"#kt_multiselectsplitter_example_1\").multiselectsplitter();\n  };\n\n  var example2 = function example2() {\n    $('#kt_multiselectsplitter_example_2').multiselectsplitter({\n      selectSize: 7,\n      clearOnFirstChange: true,\n      groupCounter: true\n    });\n  };\n\n  var example3 = function example3() {\n    $('#kt_multiselectsplitter_example_3').multiselectsplitter({\n      groupCounter: true,\n      maximumSelected: 2\n    });\n  };\n\n  var example4 = function example4() {\n    $('#kt_multiselectsplitter_example_4').multiselectsplitter({\n      groupCounter: true,\n      maximumSelected: 3,\n      onlySameGroup: true\n    });\n  };\n\n  var example5 = function example5() {\n    $('#kt_multiselectsplitter_example_5').multiselectsplitter({\n      size: 6,\n      groupCounter: true,\n      maximumSelected: 2,\n      maximumAlert: function maximumAlert(maximumSelected) {\n        alert(\"You choose \" + (maximumSelected + 1) + \" options. Are you crazy ?\");\n      },\n      createFirstSelect: function createFirstSelect(label, $originalSelect) {\n        return \"<option class=\\\"text-success\\\">prefix - \" + label + \"</option>\";\n      },\n      createSecondSelect: function createSecondSelect(label, $firstSelect) {\n        return \"<option class=\\\"text-danger\\\"> ??? </option>\";\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsMultiselectsplitterDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL211bHRpc2VsZWN0c3BsaXR0ZXIuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsK0JBQStCLEdBQUcsWUFBVztBQUM3QztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJDLElBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDQyxtQkFBdkM7QUFDSCxHQUZEOztBQUlBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJGLElBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDQyxtQkFBdkMsQ0FBMkQ7QUFDN0RFLE1BQUFBLFVBQVUsRUFBRSxDQURpRDtBQUV2REMsTUFBQUEsa0JBQWtCLEVBQUUsSUFGbUM7QUFHN0RDLE1BQUFBLFlBQVksRUFBRTtBQUgrQyxLQUEzRDtBQUtILEdBTkQ7O0FBUUEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVztBQUN0Qk4sSUFBQUEsQ0FBQyxDQUFDLG1DQUFELENBQUQsQ0FBdUNDLG1CQUF2QyxDQUEyRDtBQUM3REksTUFBQUEsWUFBWSxFQUFFLElBRCtDO0FBRXZERSxNQUFBQSxlQUFlLEVBQUU7QUFGc0MsS0FBM0Q7QUFJSCxHQUxEOztBQU9BLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJSLElBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDQyxtQkFBdkMsQ0FBMkQ7QUFDN0RJLE1BQUFBLFlBQVksRUFBRSxJQUQrQztBQUV2REUsTUFBQUEsZUFBZSxFQUFFLENBRnNDO0FBR3ZERSxNQUFBQSxhQUFhLEVBQUU7QUFId0MsS0FBM0Q7QUFLSCxHQU5EOztBQVFBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDdEJWLElBQUFBLENBQUMsQ0FBQyxtQ0FBRCxDQUFELENBQXVDQyxtQkFBdkMsQ0FBMkQ7QUFDN0RVLE1BQUFBLElBQUksRUFBRSxDQUR1RDtBQUU3RE4sTUFBQUEsWUFBWSxFQUFFLElBRitDO0FBR3ZERSxNQUFBQSxlQUFlLEVBQUUsQ0FIc0M7QUFJdkRLLE1BQUFBLFlBQVksRUFBRSxzQkFBU0wsZUFBVCxFQUEwQjtBQUNwQ00sUUFBQUEsS0FBSyxDQUFDLGlCQUFrQk4sZUFBZSxHQUFHLENBQXBDLElBQTBDLDJCQUEzQyxDQUFMO0FBQ0gsT0FOc0Q7QUFPdkRPLE1BQUFBLGlCQUFpQixFQUFFLDJCQUFVQyxLQUFWLEVBQWlCQyxlQUFqQixFQUFrQztBQUNqRCxlQUFPLDZDQUE2Q0QsS0FBN0MsR0FBcUQsV0FBNUQ7QUFDSCxPQVRzRDtBQVV2REUsTUFBQUEsa0JBQWtCLEVBQUUsNEJBQVVGLEtBQVYsRUFBaUJHLFlBQWpCLEVBQStCO0FBQy9DLGVBQU8sOENBQVA7QUFDSDtBQVpzRCxLQUEzRDtBQWNILEdBZkQ7O0FBaUJBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYnBCLE1BQUFBLFFBQVE7QUFDUkcsTUFBQUEsUUFBUTtBQUNSSSxNQUFBQSxRQUFRO0FBQ1JFLE1BQUFBLFFBQVE7QUFDUkUsTUFBQUEsUUFBUTtBQUNYO0FBUkUsR0FBUDtBQVVILENBeERxQyxFQUF0QyxDLENBMERBOzs7QUFDQVUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDdkIsRUFBQUEsK0JBQStCLENBQUNxQixJQUFoQztBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL211bHRpc2VsZWN0c3BsaXR0ZXIuanM/NzBiZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNNdWx0aXNlbGVjdHNwbGl0dGVyRGVtb3MgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiI2t0X211bHRpc2VsZWN0c3BsaXR0ZXJfZXhhbXBsZV8xXCIpLm11bHRpc2VsZWN0c3BsaXR0ZXIoKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2t0X211bHRpc2VsZWN0c3BsaXR0ZXJfZXhhbXBsZV8yJykubXVsdGlzZWxlY3RzcGxpdHRlcih7XG4gICAgXHRcdHNlbGVjdFNpemU6IDcsXG4gICAgICAgICAgICBjbGVhck9uRmlyc3RDaGFuZ2U6IHRydWUsXG4gICAgXHRcdGdyb3VwQ291bnRlcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2t0X211bHRpc2VsZWN0c3BsaXR0ZXJfZXhhbXBsZV8zJykubXVsdGlzZWxlY3RzcGxpdHRlcih7XG4gICAgXHRcdGdyb3VwQ291bnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIG1heGltdW1TZWxlY3RlZDogMlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2t0X211bHRpc2VsZWN0c3BsaXR0ZXJfZXhhbXBsZV80JykubXVsdGlzZWxlY3RzcGxpdHRlcih7XG4gICAgXHRcdGdyb3VwQ291bnRlcjogdHJ1ZSxcbiAgICAgICAgICAgIG1heGltdW1TZWxlY3RlZDogMyxcbiAgICAgICAgICAgIG9ubHlTYW1lR3JvdXA6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGU1ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJyNrdF9tdWx0aXNlbGVjdHNwbGl0dGVyX2V4YW1wbGVfNScpLm11bHRpc2VsZWN0c3BsaXR0ZXIoe1xuICAgIFx0XHRzaXplOiA2LFxuICAgIFx0XHRncm91cENvdW50ZXI6IHRydWUsXG4gICAgICAgICAgICBtYXhpbXVtU2VsZWN0ZWQ6IDIsXG4gICAgICAgICAgICBtYXhpbXVtQWxlcnQ6IGZ1bmN0aW9uKG1heGltdW1TZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGNob29zZSBcIiArICggbWF4aW11bVNlbGVjdGVkICsgMSApICsgXCIgb3B0aW9ucy4gQXJlIHlvdSBjcmF6eSA/XCIpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZUZpcnN0U2VsZWN0OiBmdW5jdGlvbiAobGFiZWwsICRvcmlnaW5hbFNlbGVjdCkgeyBcbiAgICAgICAgICAgICAgICByZXR1cm4gXCI8b3B0aW9uIGNsYXNzPVxcXCJ0ZXh0LXN1Y2Nlc3NcXFwiPnByZWZpeCAtIFwiICsgbGFiZWwgKyBcIjwvb3B0aW9uPlwiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZVNlY29uZFNlbGVjdDogZnVuY3Rpb24gKGxhYmVsLCAkZmlyc3RTZWxlY3QpIHsgXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiPG9wdGlvbiBjbGFzcz1cXFwidGV4dC1kYW5nZXJcXFwiPiA/Pz8gPC9vcHRpb24+XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlMSgpO1xuICAgICAgICAgICAgZXhhbXBsZTIoKTtcbiAgICAgICAgICAgIGV4YW1wbGUzKCk7XG4gICAgICAgICAgICBleGFtcGxlNCgpO1xuICAgICAgICAgICAgZXhhbXBsZTUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNNdWx0aXNlbGVjdHNwbGl0dGVyRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc011bHRpc2VsZWN0c3BsaXR0ZXJEZW1vcyIsImV4YW1wbGUxIiwiJCIsIm11bHRpc2VsZWN0c3BsaXR0ZXIiLCJleGFtcGxlMiIsInNlbGVjdFNpemUiLCJjbGVhck9uRmlyc3RDaGFuZ2UiLCJncm91cENvdW50ZXIiLCJleGFtcGxlMyIsIm1heGltdW1TZWxlY3RlZCIsImV4YW1wbGU0Iiwib25seVNhbWVHcm91cCIsImV4YW1wbGU1Iiwic2l6ZSIsIm1heGltdW1BbGVydCIsImFsZXJ0IiwiY3JlYXRlRmlyc3RTZWxlY3QiLCJsYWJlbCIsIiRvcmlnaW5hbFNlbGVjdCIsImNyZWF0ZVNlY29uZFNlbGVjdCIsIiRmaXJzdFNlbGVjdCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/multiselectsplitter.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/multiselectsplitter.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=multiselectsplitter.js.map