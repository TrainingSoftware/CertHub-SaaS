/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/profile/connections.js ***!
  \***************************************************************************************/


// Class definition
var KTProfileConnections = function () {
    // init variables
    var showMoreButton = document.getElementById('kt_connections_show_more_button');
    var showMoreCards = document.getElementById('kt_connections_show_more_cards');

    // Private functions
    var handleShowMore = function () {
        // Show more click
        showMoreButton.addEventListener('click', function (e) {
            showMoreButton.setAttribute('data-kt-indicator', 'on');

            // Disable button to avoid multiple click 
            showMoreButton.disabled = true;

            setTimeout(function() {
                // Hide loading indication
                showMoreButton.removeAttribute('data-kt-indicator');

                // Enable button
				showMoreButton.disabled = false;

                // Hide button
                showMoreButton.classList.add('d-none');

                // Show card
                showMoreCards.classList.remove('d-none');

                // Scroll to card
                KTUtil.scrollTo(showMoreCards, 200);
            }, 2000);
        });
    }

    // Public methods
    return {
        init: function () {
            handleShowMore();
        }
    }
}();


// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTProfileConnections.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/profile/connections.js":
/*!**************************************************************!*\
  !*** ./resources/src/js/custom/pages/profile/connections.js ***!
  \**************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProfileConnections = function () {\n  // init variables\n  var showMoreButton = document.getElementById('kt_connections_show_more_button');\n  var showMoreCards = document.getElementById('kt_connections_show_more_cards'); // Private functions\n\n  var handleShowMore = function handleShowMore() {\n    // Show more click\n    showMoreButton.addEventListener('click', function (e) {\n      showMoreButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n      showMoreButton.disabled = true;\n      setTimeout(function () {\n        // Hide loading indication\n        showMoreButton.removeAttribute('data-kt-indicator'); // Enable button\n\n        showMoreButton.disabled = false; // Hide button\n\n        showMoreButton.classList.add('d-none'); // Show card\n\n        showMoreCards.classList.remove('d-none'); // Scroll to card\n\n        KTUtil.scrollTo(showMoreCards, 200);\n      }, 2000);\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      handleShowMore();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProfileConnections.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9maWxlL2Nvbm5lY3Rpb25zLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG9CQUFvQixHQUFHLFlBQVk7QUFDbkM7QUFDQSxNQUFJQyxjQUFjLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQ0FBeEIsQ0FBckI7QUFDQSxNQUFJQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQ0FBeEIsQ0FBcEIsQ0FIbUMsQ0FLbkM7O0FBQ0EsTUFBSUUsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQzdCO0FBQ0FKLElBQUFBLGNBQWMsQ0FBQ0ssZ0JBQWYsQ0FBZ0MsT0FBaEMsRUFBeUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2xETixNQUFBQSxjQUFjLENBQUNPLFlBQWYsQ0FBNEIsbUJBQTVCLEVBQWlELElBQWpELEVBRGtELENBR2xEOztBQUNBUCxNQUFBQSxjQUFjLENBQUNRLFFBQWYsR0FBMEIsSUFBMUI7QUFFQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEI7QUFDQVQsUUFBQUEsY0FBYyxDQUFDVSxlQUFmLENBQStCLG1CQUEvQixFQUZrQixDQUlsQjs7QUFDWlYsUUFBQUEsY0FBYyxDQUFDUSxRQUFmLEdBQTBCLEtBQTFCLENBTDhCLENBT2xCOztBQUNBUixRQUFBQSxjQUFjLENBQUNXLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLFFBQTdCLEVBUmtCLENBVWxCOztBQUNBVCxRQUFBQSxhQUFhLENBQUNRLFNBQWQsQ0FBd0JFLE1BQXhCLENBQStCLFFBQS9CLEVBWGtCLENBYWxCOztBQUNBQyxRQUFBQSxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JaLGFBQWhCLEVBQStCLEdBQS9CO0FBQ0gsT0FmUyxFQWVQLElBZk8sQ0FBVjtBQWdCSCxLQXRCRDtBQXVCSCxHQXpCRCxDQU5tQyxDQWlDbkM7OztBQUNBLFNBQU87QUFDSGEsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RaLE1BQUFBLGNBQWM7QUFDakI7QUFIRSxHQUFQO0FBS0gsQ0F2QzBCLEVBQTNCLEMsQ0EwQ0E7OztBQUNBVSxNQUFNLENBQUNHLGtCQUFQLENBQTBCLFlBQVc7QUFDakNsQixFQUFBQSxvQkFBb0IsQ0FBQ2lCLElBQXJCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL3BhZ2VzL3Byb2ZpbGUvY29ubmVjdGlvbnMuanM/NzM4ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUUHJvZmlsZUNvbm5lY3Rpb25zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIGluaXQgdmFyaWFibGVzXG4gICAgdmFyIHNob3dNb3JlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2Nvbm5lY3Rpb25zX3Nob3dfbW9yZV9idXR0b24nKTtcbiAgICB2YXIgc2hvd01vcmVDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jb25uZWN0aW9uc19zaG93X21vcmVfY2FyZHMnKTtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGhhbmRsZVNob3dNb3JlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTaG93IG1vcmUgY2xpY2tcbiAgICAgICAgc2hvd01vcmVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgc2hvd01vcmVCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAvLyBEaXNhYmxlIGJ1dHRvbiB0byBhdm9pZCBtdWx0aXBsZSBjbGljayBcbiAgICAgICAgICAgIHNob3dNb3JlQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgIHNob3dNb3JlQnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cblx0XHRcdFx0c2hvd01vcmVCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIEhpZGUgYnV0dG9uXG4gICAgICAgICAgICAgICAgc2hvd01vcmVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTaG93IGNhcmRcbiAgICAgICAgICAgICAgICBzaG93TW9yZUNhcmRzLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2Nyb2xsIHRvIGNhcmRcbiAgICAgICAgICAgICAgICBLVFV0aWwuc2Nyb2xsVG8oc2hvd01vcmVDYXJkcywgMjAwKTtcbiAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGhhbmRsZVNob3dNb3JlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RQcm9maWxlQ29ubmVjdGlvbnMuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUUHJvZmlsZUNvbm5lY3Rpb25zIiwic2hvd01vcmVCdXR0b24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic2hvd01vcmVDYXJkcyIsImhhbmRsZVNob3dNb3JlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJLVFV0aWwiLCJzY3JvbGxUbyIsImluaXQiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/profile/connections.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/pages/profile/connections.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=connections.js.map