/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************!*\
  !*** ../src/js/custom/documentation/general/draggable/restricted.js ***!
  \**********************************************************************/


// Class definition
var KTDraggableRestricted = function () {
    // Private functions
    var exampleRestricted = function () {
        var containers = document.querySelectorAll('.draggable-zone');
        const restrcitedWrapper = document.querySelector('[data-kt-draggable-level="restricted"]');

        if (containers.length === 0) {
            return false;
        }

        var droppable = new Droppable.default(containers, {
            draggable: '.draggable',
            dropzone: '.draggable-zone',
            handle: '.draggable .draggable-handle',
            mirror: {
                //appendTo: selector,
                appendTo: 'body',
                constrainDimensions: true
            }
        });

        // Define draggable element variable for permissions level
        let droppableOrigin;

        // Handle drag start event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragEvent.html
        droppable.on('drag:start', (e) => {
            droppableOrigin = e.originalSource.getAttribute('data-kt-draggable-level');
        });

        // Handle drag over event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragOverEvent.html
        droppable.on('drag:over', (e) => {
            const isRestricted = e.overContainer.closest('[data-kt-draggable-level="restricted"]');
            if (isRestricted) {
                if (droppableOrigin !== 'admin') {
                    restrcitedWrapper.classList.add('bg-light-danger');
                } else {
                    restrcitedWrapper.classList.remove('bg-light-danger');
                }
            } else {
                restrcitedWrapper.classList.remove('bg-light-danger');
            }
        });

        // Handle drag stop event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragStopEvent.html
        droppable.on('drag:stop', (e) => {
            // remove all draggable occupied limit
            containers.forEach(c => {
                c.classList.remove('draggable-dropzone--occupied');
            });

            // Remove restricted alert
            restrcitedWrapper.classList.remove('bg-light-danger');
        });

        // Handle drop event -- https://shopify.github.io/draggable/docs/class/src/Droppable/DroppableEvent/DroppableEvent.js~DroppableDroppedEvent.html
        droppable.on('droppable:dropped', (e) => {
            const isRestricted = e.dropzone.closest('[data-kt-draggable-level="restricted"]');
            // Detect if drop container is restricted
            if (isRestricted) {
                // Check if dragged element has permission level
                if (droppableOrigin !== 'admin') {
                    restrcitedWrapper.classList.add('bg-light-danger');
                    e.cancel();
                }
            }
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleRestricted();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTDraggableRestricted.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/draggable/restricted.js":
/*!*******************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/draggable/restricted.js ***!
  \*******************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDraggableRestricted = function () {\n  // Private functions\n  var exampleRestricted = function exampleRestricted() {\n    var containers = document.querySelectorAll('.draggable-zone');\n    var restrcitedWrapper = document.querySelector('[data-kt-draggable-level=\"restricted\"]');\n\n    if (containers.length === 0) {\n      return false;\n    }\n\n    var droppable = new Droppable[\"default\"](containers, {\n      draggable: '.draggable',\n      dropzone: '.draggable-zone',\n      handle: '.draggable .draggable-handle',\n      mirror: {\n        //appendTo: selector,\n        appendTo: 'body',\n        constrainDimensions: true\n      }\n    }); // Define draggable element variable for permissions level\n\n    var droppableOrigin; // Handle drag start event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragEvent.html\n\n    droppable.on('drag:start', function (e) {\n      droppableOrigin = e.originalSource.getAttribute('data-kt-draggable-level');\n    }); // Handle drag over event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragOverEvent.html\n\n    droppable.on('drag:over', function (e) {\n      var isRestricted = e.overContainer.closest('[data-kt-draggable-level=\"restricted\"]');\n\n      if (isRestricted) {\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n        } else {\n          restrcitedWrapper.classList.remove('bg-light-danger');\n        }\n      } else {\n        restrcitedWrapper.classList.remove('bg-light-danger');\n      }\n    }); // Handle drag stop event -- more info: https://shopify.github.io/draggable/docs/class/src/Draggable/DragEvent/DragEvent.js~DragStopEvent.html\n\n    droppable.on('drag:stop', function (e) {\n      // remove all draggable occupied limit\n      containers.forEach(function (c) {\n        c.classList.remove('draggable-dropzone--occupied');\n      }); // Remove restricted alert\n\n      restrcitedWrapper.classList.remove('bg-light-danger');\n    }); // Handle drop event -- https://shopify.github.io/draggable/docs/class/src/Droppable/DroppableEvent/DroppableEvent.js~DroppableDroppedEvent.html\n\n    droppable.on('droppable:dropped', function (e) {\n      var isRestricted = e.dropzone.closest('[data-kt-draggable-level=\"restricted\"]'); // Detect if drop container is restricted\n\n      if (isRestricted) {\n        // Check if dragged element has permission level\n        if (droppableOrigin !== 'admin') {\n          restrcitedWrapper.classList.add('bg-light-danger');\n          e.cancel();\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRestricted();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDraggableRestricted.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZHJhZ2dhYmxlL3Jlc3RyaWN0ZWQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBWTtBQUNwQztBQUNBLE1BQUlDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBWTtBQUNoQyxRQUFJQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsaUJBQTFCLENBQWpCO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0csYUFBVCxDQUF1Qix3Q0FBdkIsQ0FBMUI7O0FBRUEsUUFBSUosVUFBVSxDQUFDSyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLGFBQU8sS0FBUDtBQUNIOztBQUVELFFBQUlDLFNBQVMsR0FBRyxJQUFJQyxTQUFTLFdBQWIsQ0FBc0JQLFVBQXRCLEVBQWtDO0FBQzlDUSxNQUFBQSxTQUFTLEVBQUUsWUFEbUM7QUFFOUNDLE1BQUFBLFFBQVEsRUFBRSxpQkFGb0M7QUFHOUNDLE1BQUFBLE1BQU0sRUFBRSw4QkFIc0M7QUFJOUNDLE1BQUFBLE1BQU0sRUFBRTtBQUNKO0FBQ0FDLFFBQUFBLFFBQVEsRUFBRSxNQUZOO0FBR0pDLFFBQUFBLG1CQUFtQixFQUFFO0FBSGpCO0FBSnNDLEtBQWxDLENBQWhCLENBUmdDLENBbUJoQzs7QUFDQSxRQUFJQyxlQUFKLENBcEJnQyxDQXNCaEM7O0FBQ0FSLElBQUFBLFNBQVMsQ0FBQ1MsRUFBVixDQUFhLFlBQWIsRUFBMkIsVUFBQ0MsQ0FBRCxFQUFPO0FBQzlCRixNQUFBQSxlQUFlLEdBQUdFLENBQUMsQ0FBQ0MsY0FBRixDQUFpQkMsWUFBakIsQ0FBOEIseUJBQTlCLENBQWxCO0FBQ0gsS0FGRCxFQXZCZ0MsQ0EyQmhDOztBQUNBWixJQUFBQSxTQUFTLENBQUNTLEVBQVYsQ0FBYSxXQUFiLEVBQTBCLFVBQUNDLENBQUQsRUFBTztBQUM3QixVQUFNRyxZQUFZLEdBQUdILENBQUMsQ0FBQ0ksYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0Isd0NBQXhCLENBQXJCOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDZCxZQUFJTCxlQUFlLEtBQUssT0FBeEIsRUFBaUM7QUFDN0JYLFVBQUFBLGlCQUFpQixDQUFDbUIsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLGlCQUFoQztBQUNILFNBRkQsTUFFTztBQUNIcEIsVUFBQUEsaUJBQWlCLENBQUNtQixTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsaUJBQW5DO0FBQ0g7QUFDSixPQU5ELE1BTU87QUFDSHJCLFFBQUFBLGlCQUFpQixDQUFDbUIsU0FBbEIsQ0FBNEJFLE1BQTVCLENBQW1DLGlCQUFuQztBQUNIO0FBQ0osS0FYRCxFQTVCZ0MsQ0F5Q2hDOztBQUNBbEIsSUFBQUEsU0FBUyxDQUFDUyxFQUFWLENBQWEsV0FBYixFQUEwQixVQUFDQyxDQUFELEVBQU87QUFDN0I7QUFDQWhCLE1BQUFBLFVBQVUsQ0FBQ3lCLE9BQVgsQ0FBbUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BCQSxRQUFBQSxDQUFDLENBQUNKLFNBQUYsQ0FBWUUsTUFBWixDQUFtQiw4QkFBbkI7QUFDSCxPQUZELEVBRjZCLENBTTdCOztBQUNBckIsTUFBQUEsaUJBQWlCLENBQUNtQixTQUFsQixDQUE0QkUsTUFBNUIsQ0FBbUMsaUJBQW5DO0FBQ0gsS0FSRCxFQTFDZ0MsQ0FvRGhDOztBQUNBbEIsSUFBQUEsU0FBUyxDQUFDUyxFQUFWLENBQWEsbUJBQWIsRUFBa0MsVUFBQ0MsQ0FBRCxFQUFPO0FBQ3JDLFVBQU1HLFlBQVksR0FBR0gsQ0FBQyxDQUFDUCxRQUFGLENBQVdZLE9BQVgsQ0FBbUIsd0NBQW5CLENBQXJCLENBRHFDLENBRXJDOztBQUNBLFVBQUlGLFlBQUosRUFBa0I7QUFDZDtBQUNBLFlBQUlMLGVBQWUsS0FBSyxPQUF4QixFQUFpQztBQUM3QlgsVUFBQUEsaUJBQWlCLENBQUNtQixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0MsaUJBQWhDO0FBQ0FQLFVBQUFBLENBQUMsQ0FBQ1csTUFBRjtBQUNIO0FBQ0o7QUFDSixLQVZEO0FBV0gsR0FoRUQ7O0FBa0VBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDdCLE1BQUFBLGlCQUFpQjtBQUNwQjtBQUpFLEdBQVA7QUFNSCxDQTFFMkIsRUFBNUIsQyxDQTRFQTs7O0FBQ0E4QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENoQyxFQUFBQSxxQkFBcUIsQ0FBQzhCLElBQXRCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9kcmFnZ2FibGUvcmVzdHJpY3RlZC5qcz9mNDk5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1REcmFnZ2FibGVSZXN0cmljdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVSZXN0cmljdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kcmFnZ2FibGUtem9uZScpO1xuICAgICAgICBjb25zdCByZXN0cmNpdGVkV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWRyYWdnYWJsZS1sZXZlbD1cInJlc3RyaWN0ZWRcIl0nKTtcblxuICAgICAgICBpZiAoY29udGFpbmVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkcm9wcGFibGUgPSBuZXcgRHJvcHBhYmxlLmRlZmF1bHQoY29udGFpbmVycywge1xuICAgICAgICAgICAgZHJhZ2dhYmxlOiAnLmRyYWdnYWJsZScsXG4gICAgICAgICAgICBkcm9wem9uZTogJy5kcmFnZ2FibGUtem9uZScsXG4gICAgICAgICAgICBoYW5kbGU6ICcuZHJhZ2dhYmxlIC5kcmFnZ2FibGUtaGFuZGxlJyxcbiAgICAgICAgICAgIG1pcnJvcjoge1xuICAgICAgICAgICAgICAgIC8vYXBwZW5kVG86IHNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIGFwcGVuZFRvOiAnYm9keScsXG4gICAgICAgICAgICAgICAgY29uc3RyYWluRGltZW5zaW9uczogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEZWZpbmUgZHJhZ2dhYmxlIGVsZW1lbnQgdmFyaWFibGUgZm9yIHBlcm1pc3Npb25zIGxldmVsXG4gICAgICAgIGxldCBkcm9wcGFibGVPcmlnaW47XG5cbiAgICAgICAgLy8gSGFuZGxlIGRyYWcgc3RhcnQgZXZlbnQgLS0gbW9yZSBpbmZvOiBodHRwczovL3Nob3BpZnkuZ2l0aHViLmlvL2RyYWdnYWJsZS9kb2NzL2NsYXNzL3NyYy9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5qc35EcmFnRXZlbnQuaHRtbFxuICAgICAgICBkcm9wcGFibGUub24oJ2RyYWc6c3RhcnQnLCAoZSkgPT4ge1xuICAgICAgICAgICAgZHJvcHBhYmxlT3JpZ2luID0gZS5vcmlnaW5hbFNvdXJjZS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtZHJhZ2dhYmxlLWxldmVsJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBkcmFnIG92ZXIgZXZlbnQgLS0gbW9yZSBpbmZvOiBodHRwczovL3Nob3BpZnkuZ2l0aHViLmlvL2RyYWdnYWJsZS9kb2NzL2NsYXNzL3NyYy9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5qc35EcmFnT3ZlckV2ZW50Lmh0bWxcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcmFnOm92ZXInLCAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaXNSZXN0cmljdGVkID0gZS5vdmVyQ29udGFpbmVyLmNsb3Nlc3QoJ1tkYXRhLWt0LWRyYWdnYWJsZS1sZXZlbD1cInJlc3RyaWN0ZWRcIl0nKTtcbiAgICAgICAgICAgIGlmIChpc1Jlc3RyaWN0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZHJvcHBhYmxlT3JpZ2luICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RyY2l0ZWRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2JnLWxpZ2h0LWRhbmdlcicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RyY2l0ZWRXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2JnLWxpZ2h0LWRhbmdlcicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzdHJjaXRlZFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQtZGFuZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBkcmFnIHN0b3AgZXZlbnQgLS0gbW9yZSBpbmZvOiBodHRwczovL3Nob3BpZnkuZ2l0aHViLmlvL2RyYWdnYWJsZS9kb2NzL2NsYXNzL3NyYy9EcmFnZ2FibGUvRHJhZ0V2ZW50L0RyYWdFdmVudC5qc35EcmFnU3RvcEV2ZW50Lmh0bWxcbiAgICAgICAgZHJvcHBhYmxlLm9uKCdkcmFnOnN0b3AnLCAoZSkgPT4ge1xuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBkcmFnZ2FibGUgb2NjdXBpZWQgbGltaXRcbiAgICAgICAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaChjID0+IHtcbiAgICAgICAgICAgICAgICBjLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnYWJsZS1kcm9wem9uZS0tb2NjdXBpZWQnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBSZW1vdmUgcmVzdHJpY3RlZCBhbGVydFxuICAgICAgICAgICAgcmVzdHJjaXRlZFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYmctbGlnaHQtZGFuZ2VyJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEhhbmRsZSBkcm9wIGV2ZW50IC0tIGh0dHBzOi8vc2hvcGlmeS5naXRodWIuaW8vZHJhZ2dhYmxlL2RvY3MvY2xhc3Mvc3JjL0Ryb3BwYWJsZS9Ecm9wcGFibGVFdmVudC9Ecm9wcGFibGVFdmVudC5qc35Ecm9wcGFibGVEcm9wcGVkRXZlbnQuaHRtbFxuICAgICAgICBkcm9wcGFibGUub24oJ2Ryb3BwYWJsZTpkcm9wcGVkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlzUmVzdHJpY3RlZCA9IGUuZHJvcHpvbmUuY2xvc2VzdCgnW2RhdGEta3QtZHJhZ2dhYmxlLWxldmVsPVwicmVzdHJpY3RlZFwiXScpO1xuICAgICAgICAgICAgLy8gRGV0ZWN0IGlmIGRyb3AgY29udGFpbmVyIGlzIHJlc3RyaWN0ZWRcbiAgICAgICAgICAgIGlmIChpc1Jlc3RyaWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiBkcmFnZ2VkIGVsZW1lbnQgaGFzIHBlcm1pc3Npb24gbGV2ZWxcbiAgICAgICAgICAgICAgICBpZiAoZHJvcHBhYmxlT3JpZ2luICE9PSAnYWRtaW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3RyY2l0ZWRXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2JnLWxpZ2h0LWRhbmdlcicpO1xuICAgICAgICAgICAgICAgICAgICBlLmNhbmNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlUmVzdHJpY3RlZCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURHJhZ2dhYmxlUmVzdHJpY3RlZC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVERyYWdnYWJsZVJlc3RyaWN0ZWQiLCJleGFtcGxlUmVzdHJpY3RlZCIsImNvbnRhaW5lcnMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZXN0cmNpdGVkV3JhcHBlciIsInF1ZXJ5U2VsZWN0b3IiLCJsZW5ndGgiLCJkcm9wcGFibGUiLCJEcm9wcGFibGUiLCJkcmFnZ2FibGUiLCJkcm9wem9uZSIsImhhbmRsZSIsIm1pcnJvciIsImFwcGVuZFRvIiwiY29uc3RyYWluRGltZW5zaW9ucyIsImRyb3BwYWJsZU9yaWdpbiIsIm9uIiwiZSIsIm9yaWdpbmFsU291cmNlIiwiZ2V0QXR0cmlidXRlIiwiaXNSZXN0cmljdGVkIiwib3ZlckNvbnRhaW5lciIsImNsb3Nlc3QiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJmb3JFYWNoIiwiYyIsImNhbmNlbCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/draggable/restricted.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/draggable/restricted.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=restricted.js.map