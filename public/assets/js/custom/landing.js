/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../themes/metronic/html/demo10/src/js/custom/landing.js":
/*!*********************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/landing.js ***!
  \*********************************************************************/
/***/ ((module) => {

<<<<<<< Updated upstream


// Class definition
var KTLandingPage = function () {
    // Private methods
    var initTyped = function() {
        var typed = new Typed("#kt_landing_hero_text", {
            strings: ["The Best Theme Ever", "The Most Trusted Theme", "#1 Selling Theme"],
            typeSpeed: 50
        });
    }

    // Public methods
    return {
        init: function () {
            //initTyped();
        }   
    }
}();

// Webpack support
if (true) {
    module.exports = KTLandingPage;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLandingPage.init();
});

=======
eval(" // Class definition\n\nvar KTLandingPage = function () {\n  // Private methods\n  var initTyped = function initTyped() {\n    var typed = new Typed(\"#kt_landing_hero_text\", {\n      strings: [\"The Best Theme Ever\", \"The Most Trusted Theme\", \"#1 Selling Theme\"],\n      typeSpeed: 50\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {//initTyped();\n    }\n  };\n}(); // Webpack support\n\n\nif (true) {\n  module.exports = KTLandingPage;\n} // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLandingPage.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9sYW5kaW5nLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFZO0FBQzVCO0FBQ0EsTUFBSUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBVztBQUN2QixRQUFJQyxLQUFLLEdBQUcsSUFBSUMsS0FBSixDQUFVLHVCQUFWLEVBQW1DO0FBQzNDQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxxQkFBRCxFQUF3Qix3QkFBeEIsRUFBa0Qsa0JBQWxELENBRGtDO0FBRTNDQyxNQUFBQSxTQUFTLEVBQUU7QUFGZ0MsS0FBbkMsQ0FBWjtBQUlILEdBTEQsQ0FGNEIsQ0FTNUI7OztBQUNBLFNBQU87QUFDSEMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZLENBQ2Q7QUFDSDtBQUhFLEdBQVA7QUFLSCxDQWZtQixFQUFwQixDLENBaUJBOzs7QUFDQSxJQUFJLElBQUosRUFBbUM7QUFDL0JDLEVBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQlIsYUFBakI7QUFDSCxDLENBRUQ7OztBQUNBUyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNWLEVBQUFBLGFBQWEsQ0FBQ00sSUFBZDtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9sYW5kaW5nLmpzPzhiMTQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVExhbmRpbmdQYWdlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgbWV0aG9kc1xuICAgIHZhciBpbml0VHlwZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHR5cGVkID0gbmV3IFR5cGVkKFwiI2t0X2xhbmRpbmdfaGVyb190ZXh0XCIsIHtcbiAgICAgICAgICAgIHN0cmluZ3M6IFtcIlRoZSBCZXN0IFRoZW1lIEV2ZXJcIiwgXCJUaGUgTW9zdCBUcnVzdGVkIFRoZW1lXCIsIFwiIzEgU2VsbGluZyBUaGVtZVwiXSxcbiAgICAgICAgICAgIHR5cGVTcGVlZDogNTBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2luaXRUeXBlZCgpO1xuICAgICAgICB9ICAgXG4gICAgfVxufSgpO1xuXG4vLyBXZWJwYWNrIHN1cHBvcnRcbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gS1RMYW5kaW5nUGFnZTtcbn1cblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RMYW5kaW5nUGFnZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVExhbmRpbmdQYWdlIiwiaW5pdFR5cGVkIiwidHlwZWQiLCJUeXBlZCIsInN0cmluZ3MiLCJ0eXBlU3BlZWQiLCJpbml0IiwibW9kdWxlIiwiZXhwb3J0cyIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/landing.js\n");
>>>>>>> Stashed changes

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../themes/metronic/html/demo10/src/js/custom/landing.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=landing.js.map