/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************!*\
  !*** ../src/js/custom/documentation/documentation.js ***!
  \*******************************************************/


var KTLayoutDocumentation = function() {
    var _init = function(element) {
        var elements = element;

        if ( typeof elements === 'undefined' ) {
            elements = document.querySelectorAll('.highlight');
        }

        if ( elements && elements.length > 0 ) {
            for ( var i = 0; i < elements.length; ++i ) {
                var highlight = elements[i];
                var copy = highlight.querySelector('.highlight-copy');

                if ( copy ) {
                    var clipboard = new ClipboardJS(copy, {
                        target: function(trigger) {
                            var highlight = trigger.closest('.highlight');
                            var el = highlight.querySelector('.tab-pane.active');

                            if ( el == null ) {
                                el = highlight.querySelector('.highlight-code');
                            }

                            return el;
                        }
                    });

                    clipboard.on('success', function(e) {
                        var caption = e.trigger.innerHTML;

                        e.trigger.innerHTML = 'copied';
                        e.clearSelection();

                        setTimeout(function() {
                            e.trigger.innerHTML = caption;
                        }, 2000);
                    });
                }
            }
        }
    }

    return {
        init: function(element) {
            _init(element);
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutDocumentation.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/documentation.js":
/*!****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/documentation.js ***!
  \****************************************************************/
/***/ (() => {

eval("\n\nvar KTLayoutDocumentation = function () {\n  var _init = function _init(element) {\n    var elements = element;\n\n    if (typeof elements === 'undefined') {\n      elements = document.querySelectorAll('.highlight');\n    }\n\n    if (elements && elements.length > 0) {\n      for (var i = 0; i < elements.length; ++i) {\n        var highlight = elements[i];\n        var copy = highlight.querySelector('.highlight-copy');\n\n        if (copy) {\n          var clipboard = new ClipboardJS(copy, {\n            target: function target(trigger) {\n              var highlight = trigger.closest('.highlight');\n              var el = highlight.querySelector('.tab-pane.active');\n\n              if (el == null) {\n                el = highlight.querySelector('.highlight-code');\n              }\n\n              return el;\n            }\n          });\n          clipboard.on('success', function (e) {\n            var caption = e.trigger.innerHTML;\n            e.trigger.innerHTML = 'copied';\n            e.clearSelection();\n            setTimeout(function () {\n              e.trigger.innerHTML = caption;\n            }, 2000);\n          });\n        }\n      }\n    }\n  };\n\n  return {\n    init: function init(element) {\n      _init(element);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutDocumentation.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2RvY3VtZW50YXRpb24uanMuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWIsSUFBSUEscUJBQXFCLEdBQUcsWUFBVztBQUNuQyxNQUFJQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFTQyxPQUFULEVBQWtCO0FBQzFCLFFBQUlDLFFBQVEsR0FBR0QsT0FBZjs7QUFFQSxRQUFLLE9BQU9DLFFBQVAsS0FBb0IsV0FBekIsRUFBdUM7QUFDbkNBLE1BQUFBLFFBQVEsR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixZQUExQixDQUFYO0FBQ0g7O0FBRUQsUUFBS0YsUUFBUSxJQUFJQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkMsRUFBdUM7QUFDbkMsV0FBTSxJQUFJQyxDQUFDLEdBQUcsQ0FBZCxFQUFpQkEsQ0FBQyxHQUFHSixRQUFRLENBQUNHLE1BQTlCLEVBQXNDLEVBQUVDLENBQXhDLEVBQTRDO0FBQ3hDLFlBQUlDLFNBQVMsR0FBR0wsUUFBUSxDQUFDSSxDQUFELENBQXhCO0FBQ0EsWUFBSUUsSUFBSSxHQUFHRCxTQUFTLENBQUNFLGFBQVYsQ0FBd0IsaUJBQXhCLENBQVg7O0FBRUEsWUFBS0QsSUFBTCxFQUFZO0FBQ1IsY0FBSUUsU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JILElBQWhCLEVBQXNCO0FBQ2xDSSxZQUFBQSxNQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0I7QUFDdEIsa0JBQUlOLFNBQVMsR0FBR00sT0FBTyxDQUFDQyxPQUFSLENBQWdCLFlBQWhCLENBQWhCO0FBQ0Esa0JBQUlDLEVBQUUsR0FBR1IsU0FBUyxDQUFDRSxhQUFWLENBQXdCLGtCQUF4QixDQUFUOztBQUVBLGtCQUFLTSxFQUFFLElBQUksSUFBWCxFQUFrQjtBQUNkQSxnQkFBQUEsRUFBRSxHQUFHUixTQUFTLENBQUNFLGFBQVYsQ0FBd0IsaUJBQXhCLENBQUw7QUFDSDs7QUFFRCxxQkFBT00sRUFBUDtBQUNIO0FBVmlDLFdBQXRCLENBQWhCO0FBYUFMLFVBQUFBLFNBQVMsQ0FBQ00sRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDLGdCQUFJQyxPQUFPLEdBQUdELENBQUMsQ0FBQ0osT0FBRixDQUFVTSxTQUF4QjtBQUVBRixZQUFBQSxDQUFDLENBQUNKLE9BQUYsQ0FBVU0sU0FBVixHQUFzQixRQUF0QjtBQUNBRixZQUFBQSxDQUFDLENBQUNHLGNBQUY7QUFFQUMsWUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEJKLGNBQUFBLENBQUMsQ0FBQ0osT0FBRixDQUFVTSxTQUFWLEdBQXNCRCxPQUF0QjtBQUNILGFBRlMsRUFFUCxJQUZPLENBQVY7QUFHSCxXQVREO0FBVUg7QUFDSjtBQUNKO0FBQ0osR0F2Q0Q7O0FBeUNBLFNBQU87QUFDSEksSUFBQUEsSUFBSSxFQUFFLGNBQVNyQixPQUFULEVBQWtCO0FBQ3BCRCxNQUFBQSxLQUFLLENBQUNDLE9BQUQsQ0FBTDtBQUNIO0FBSEUsR0FBUDtBQUtILENBL0MyQixFQUE1QixDLENBaURBOzs7QUFDQXNCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ3pCLEVBQUFBLHFCQUFxQixDQUFDdUIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9kb2N1bWVudGF0aW9uLmpzP2Y3OTgiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLVExheW91dERvY3VtZW50YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgX2luaXQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBlbGVtZW50cyA9IGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKCB0eXBlb2YgZWxlbWVudHMgPT09ICd1bmRlZmluZWQnICkge1xuICAgICAgICAgICAgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIGVsZW1lbnRzICYmIGVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG4gICAgICAgICAgICBmb3IgKCB2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7ICsraSApIHtcbiAgICAgICAgICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gZWxlbWVudHNbaV07XG4gICAgICAgICAgICAgICAgdmFyIGNvcHkgPSBoaWdobGlnaHQucXVlcnlTZWxlY3RvcignLmhpZ2hsaWdodC1jb3B5Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoIGNvcHkgKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoY29weSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBmdW5jdGlvbih0cmlnZ2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhpZ2hsaWdodCA9IHRyaWdnZXIuY2xvc2VzdCgnLmhpZ2hsaWdodCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbCA9IGhpZ2hsaWdodC5xdWVyeVNlbGVjdG9yKCcudGFiLXBhbmUuYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIGVsID09IG51bGwgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsID0gaGlnaGxpZ2h0LnF1ZXJ5U2VsZWN0b3IoJy5oaWdobGlnaHQtY29kZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNhcHRpb24gPSBlLnRyaWdnZXIuaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnRyaWdnZXIuaW5uZXJIVE1MID0gJ2NvcGllZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS50cmlnZ2VyLmlubmVySFRNTCA9IGNhcHRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgX2luaXQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVExheW91dERvY3VtZW50YXRpb24uaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUTGF5b3V0RG9jdW1lbnRhdGlvbiIsIl9pbml0IiwiZWxlbWVudCIsImVsZW1lbnRzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiaSIsImhpZ2hsaWdodCIsImNvcHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJ0YXJnZXQiLCJ0cmlnZ2VyIiwiY2xvc2VzdCIsImVsIiwib24iLCJlIiwiY2FwdGlvbiIsImlubmVySFRNTCIsImNsZWFyU2VsZWN0aW9uIiwic2V0VGltZW91dCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/documentation.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/documentation.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=documentation.js.map