/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/general/vis-timeline/basic.js ***!
  \********************************************************************/


// Class definition
var KTVisTimelineBasic = function () {
    // Private functions
    var exampleBasic = function () {
        // DOM element where the Timeline will be attached
        var container = document.getElementById("kt_docs_vistimeline_basic");

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([
            { id: 1, content: "item 1", start: "2021-04-20" },
            { id: 2, content: "item 2", start: "2021-04-14" },
            { id: 3, content: "item 3", start: "2021-04-18" },
            { id: 4, content: "item 4", start: "2021-04-16", end: "2021-04-19" },
            { id: 5, content: "item 5", start: "2021-04-25" },
            { id: 6, content: "item 6", start: "2021-04-27", type: "point" },
        ]);

        // Configuration for the Timeline
        var options = {};

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);
    }

    return {
        // Public Functions
        init: function () {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineBasic.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/basic.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/basic.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    // DOM element where the Timeline will be attached\n    var container = document.getElementById(\"kt_docs_vistimeline_basic\"); // Create a DataSet (allows two way data-binding)\n\n    var items = new vis.DataSet([{\n      id: 1,\n      content: \"item 1\",\n      start: \"2021-04-20\"\n    }, {\n      id: 2,\n      content: \"item 2\",\n      start: \"2021-04-14\"\n    }, {\n      id: 3,\n      content: \"item 3\",\n      start: \"2021-04-18\"\n    }, {\n      id: 4,\n      content: \"item 4\",\n      start: \"2021-04-16\",\n      end: \"2021-04-19\"\n    }, {\n      id: 5,\n      content: \"item 5\",\n      start: \"2021-04-25\"\n    }, {\n      id: 6,\n      content: \"item 6\",\n      start: \"2021-04-27\",\n      type: \"point\"\n    }]); // Configuration for the Timeline\n\n    var options = {}; // Create a Timeline\n\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVk7QUFDakM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzNCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWhCLENBRjJCLENBSTNCOztBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxHQUFHLENBQUNDLE9BQVIsQ0FBZ0IsQ0FDeEI7QUFBRUMsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FEd0IsRUFFeEI7QUFBRUYsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FGd0IsRUFHeEI7QUFBRUYsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FId0IsRUFJeEI7QUFBRUYsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCQyxNQUFBQSxLQUFLLEVBQUUsWUFBbkM7QUFBaURDLE1BQUFBLEdBQUcsRUFBRTtBQUF0RCxLQUp3QixFQUt4QjtBQUFFSCxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQUx3QixFQU14QjtBQUFFRixNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJDLE1BQUFBLEtBQUssRUFBRSxZQUFuQztBQUFpREUsTUFBQUEsSUFBSSxFQUFFO0FBQXZELEtBTndCLENBQWhCLENBQVosQ0FMMkIsQ0FjM0I7O0FBQ0EsUUFBSUMsT0FBTyxHQUFHLEVBQWQsQ0FmMkIsQ0FpQjNCOztBQUNBLFFBQUlDLFFBQVEsR0FBRyxJQUFJUixHQUFHLENBQUNTLFFBQVIsQ0FBaUJiLFNBQWpCLEVBQTRCRyxLQUE1QixFQUFtQ1EsT0FBbkMsQ0FBZjtBQUNILEdBbkJEOztBQXFCQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RmLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQTdCd0IsRUFBekIsQyxDQStCQTs7O0FBQ0FnQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENsQixFQUFBQSxrQkFBa0IsQ0FBQ2dCLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvYmFzaWMuanM/N2EyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUVmlzVGltZWxpbmVCYXNpYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQmFzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERPTSBlbGVtZW50IHdoZXJlIHRoZSBUaW1lbGluZSB3aWxsIGJlIGF0dGFjaGVkXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImt0X2RvY3NfdmlzdGltZWxpbmVfYmFzaWNcIik7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgRGF0YVNldCAoYWxsb3dzIHR3byB3YXkgZGF0YS1iaW5kaW5nKVxuICAgICAgICB2YXIgaXRlbXMgPSBuZXcgdmlzLkRhdGFTZXQoW1xuICAgICAgICAgICAgeyBpZDogMSwgY29udGVudDogXCJpdGVtIDFcIiwgc3RhcnQ6IFwiMjAyMS0wNC0yMFwiIH0sXG4gICAgICAgICAgICB7IGlkOiAyLCBjb250ZW50OiBcIml0ZW0gMlwiLCBzdGFydDogXCIyMDIxLTA0LTE0XCIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDMsIGNvbnRlbnQ6IFwiaXRlbSAzXCIsIHN0YXJ0OiBcIjIwMjEtMDQtMThcIiB9LFxuICAgICAgICAgICAgeyBpZDogNCwgY29udGVudDogXCJpdGVtIDRcIiwgc3RhcnQ6IFwiMjAyMS0wNC0xNlwiLCBlbmQ6IFwiMjAyMS0wNC0xOVwiIH0sXG4gICAgICAgICAgICB7IGlkOiA1LCBjb250ZW50OiBcIml0ZW0gNVwiLCBzdGFydDogXCIyMDIxLTA0LTI1XCIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDYsIGNvbnRlbnQ6IFwiaXRlbSA2XCIsIHN0YXJ0OiBcIjIwMjEtMDQtMjdcIiwgdHlwZTogXCJwb2ludFwiIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBUaW1lbGluZVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHt9O1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIFRpbWVsaW5lXG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyB2aXMuVGltZWxpbmUoY29udGFpbmVyLCBpdGVtcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVFZpc1RpbWVsaW5lQmFzaWMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RWaXNUaW1lbGluZUJhc2ljIiwiZXhhbXBsZUJhc2ljIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIml0ZW1zIiwidmlzIiwiRGF0YVNldCIsImlkIiwiY29udGVudCIsInN0YXJ0IiwiZW5kIiwidHlwZSIsIm9wdGlvbnMiLCJ0aW1lbGluZSIsIlRpbWVsaW5lIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/basic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=basic.js.map