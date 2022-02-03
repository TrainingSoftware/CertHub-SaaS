/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************************************!*\
  !*** ../src/js/custom/documentation/general/draggable/multiple-containers.js ***!
  \*******************************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTDraggableMultiple = function() {
    // Private functions
    var exampleMultiple = function() {
        var containers = document.querySelectorAll('.draggable-zone');
=======
eval(" // Class definition\n\nvar KTDraggableMultiple = function () {\n  // Private functions\n  var exampleMultiple = function exampleMultiple() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Sortable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleMultiple();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableMultiple.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL211bHRpcGxlLWNvbnRhaW5lcnMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsbUJBQW1CLEdBQUcsWUFBVztBQUNqQztBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUM3QixRQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWpCOztBQUVBLFFBQUlGLFVBQVUsQ0FBQ0csTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUN6QixhQUFPLEtBQVA7QUFDSDs7QUFFRCxRQUFJQyxTQUFTLEdBQUcsSUFBSUMsUUFBUSxXQUFaLENBQXFCTCxVQUFyQixFQUFpQztBQUM3Q00sTUFBQUEsU0FBUyxFQUFFLFlBRGtDO0FBRTdDQyxNQUFBQSxNQUFNLEVBQUUsOEJBRnFDO0FBRzdDQyxNQUFBQSxNQUFNLEVBQUU7QUFDSjtBQUNBQyxRQUFBQSxRQUFRLEVBQUUsTUFGTjtBQUdKQyxRQUFBQSxtQkFBbUIsRUFBRTtBQUhqQjtBQUhxQyxLQUFqQyxDQUFoQjtBQVNILEdBaEJEOztBQWtCQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JaLE1BQUFBLGVBQWU7QUFDbEI7QUFKRSxHQUFQO0FBTUgsQ0ExQnlCLEVBQTFCLEMsQ0E0QkE7OztBQUNBYSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNmLEVBQUFBLG1CQUFtQixDQUFDYSxJQUFwQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL211bHRpcGxlLWNvbnRhaW5lcnMuanM/NTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURHJhZ2dhYmxlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlTXVsdGlwbGUgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZHJhZ2dhYmxlLXpvbmUnKTtcblxuICAgICAgICBpZiAoY29udGFpbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzd2FwcGFibGUgPSBuZXcgU29ydGFibGUuZGVmYXVsdChjb250YWluZXJzLCB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICcuZHJhZ2dhYmxlJyxcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnZ2FibGUgLmRyYWdnYWJsZS1oYW5kbGUnLFxuICAgICAgICAgICAgbWlycm9yOiB7XG4gICAgICAgICAgICAgICAgLy9hcHBlbmRUbzogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5EaW1lbnNpb25zOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlTXVsdGlwbGUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURHJhZ2dhYmxlTXVsdGlwbGUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1REcmFnZ2FibGVNdWx0aXBsZSIsImV4YW1wbGVNdWx0aXBsZSIsImNvbnRhaW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJzd2FwcGFibGUiLCJTb3J0YWJsZSIsImRyYWdnYWJsZSIsImhhbmRsZSIsIm1pcnJvciIsImFwcGVuZFRvIiwiY29uc3RyYWluRGltZW5zaW9ucyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/multiple-containers.js\n");
>>>>>>> Stashed changes

        if (containers.length === 0) {
            return false;
        }

        var swappable = new Sortable.default(containers, {
            draggable: '.draggable',
            handle: '.draggable .draggable-handle',
            mirror: {
                //appendTo: selector,
                appendTo: 'body',
                constrainDimensions: true
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleMultiple();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDraggableMultiple.init();
});

/******/ })()
;
//# sourceMappingURL=multiple-containers.js.map