/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*********************************************************************!*\
  !*** ../src/js/custom/documentation/general/draggable/swappable.js ***!
  \*********************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTDraggableSwappable = function() {
    // Private functions
    var exampleSwappable = function() {
        var containers = document.querySelectorAll('.draggable-zone');
=======
eval(" // Class definition\n\nvar KTDraggableSwappable = function () {\n  // Private functions\n  var exampleSwappable = function exampleSwappable() {\n    var containers = document.querySelectorAll('.draggable-zone');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var swappable = new Swappable[\"default\"](containers, {\n      draggable: '.draggable',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleSwappable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableSwappable.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3N3YXBwYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxvQkFBb0IsR0FBRyxZQUFXO0FBQ2xDO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCLFFBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBakI7O0FBRUEsUUFBSUYsVUFBVSxDQUFDRyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBRyxJQUFJQyxTQUFTLFdBQWIsQ0FBc0JMLFVBQXRCLEVBQWtDO0FBQzlDTSxNQUFBQSxTQUFTLEVBQUUsWUFEbUM7QUFFOUNDLE1BQUFBLE1BQU0sRUFBRSw4QkFGc0M7QUFHOUNDLE1BQUFBLE1BQU0sRUFBRTtBQUNKO0FBQ0FDLFFBQUFBLFFBQVEsRUFBRSxNQUZOO0FBR0pDLFFBQUFBLG1CQUFtQixFQUFFO0FBSGpCO0FBSHNDLEtBQWxDLENBQWhCO0FBU0gsR0FoQkQ7O0FBa0JBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYlosTUFBQUEsZ0JBQWdCO0FBQ25CO0FBSkUsR0FBUDtBQU1ILENBMUIwQixFQUEzQixDLENBNEJBOzs7QUFDQWEsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDZixFQUFBQSxvQkFBb0IsQ0FBQ2EsSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2RyYWdnYWJsZS9zd2FwcGFibGUuanM/NjdlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURHJhZ2dhYmxlU3dhcHBhYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVN3YXBwYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtem9uZScpO1xuXG4gICAgICAgIGlmIChjb250YWluZXJzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHN3YXBwYWJsZSA9IG5ldyBTd2FwcGFibGUuZGVmYXVsdChjb250YWluZXJzLCB7XG4gICAgICAgICAgICBkcmFnZ2FibGU6ICcuZHJhZ2dhYmxlJyxcbiAgICAgICAgICAgIGhhbmRsZTogJy5kcmFnZ2FibGUgLmRyYWdnYWJsZS1oYW5kbGUnLFxuICAgICAgICAgICAgbWlycm9yOiB7XG4gICAgICAgICAgICAgICAgLy9hcHBlbmRUbzogc2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgYXBwZW5kVG86ICdib2R5JyxcbiAgICAgICAgICAgICAgICBjb25zdHJhaW5EaW1lbnNpb25zOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlU3dhcHBhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVERyYWdnYWJsZVN3YXBwYWJsZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZVN3YXBwYWJsZSIsImV4YW1wbGVTd2FwcGFibGUiLCJjb250YWluZXJzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwic3dhcHBhYmxlIiwiU3dhcHBhYmxlIiwiZHJhZ2dhYmxlIiwiaGFuZGxlIiwibWlycm9yIiwiYXBwZW5kVG8iLCJjb25zdHJhaW5EaW1lbnNpb25zIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/swappable.js\n");
>>>>>>> Stashed changes

        if (containers.length === 0) {
            return false;
        }

        var swappable = new Swappable.default(containers, {
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
            exampleSwappable();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDraggableSwappable.init();
});

/******/ })()
;
//# sourceMappingURL=swappable.js.map