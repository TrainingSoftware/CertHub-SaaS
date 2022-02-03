/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/modals/create-project/bundle/files.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/modals/create-project/bundle/files.js ***!
  \***********************************************************************/
/***/ ((module) => {

eval(" // Class definition\n\nvar KTModalCreateProjectFiles = function () {\n  // Variables\n  var nextButton;\n  var previousButton;\n  var form;\n  var stepper; // Private functions\n\n  var initForm = function initForm() {\n    // Project logo\n    // For more info about Dropzone plugin visit:  https://www.dropzonejs.com/#usage\n    var myDropzone = new Dropzone(\"#kt_modal_create_project_files_upload\", {\n      url: \"https://keenthemes.com/scripts/void.php\",\n      // Set the url for your upload script location\n      paramName: \"file\",\n      // The name that will be used to transfer the file\n      maxFiles: 10,\n      maxFilesize: 10,\n      // MB\n      addRemoveLinks: true,\n      accept: function accept(file, done) {\n        if (file.name == \"justinbieber.jpg\") {\n          done(\"Naha, you don't.\");\n        } else {\n          done();\n        }\n      }\n    });\n  };\n\n  var handleForm = function handleForm() {\n    nextButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Disable button to avoid multiple click \n\n      nextButton.disabled = true; // Show loading indication\n\n      nextButton.setAttribute('data-kt-indicator', 'on'); // Simulate form submission\n\n      setTimeout(function () {\n        // Hide loading indication\n        nextButton.removeAttribute('data-kt-indicator'); // Enable button\n\n        nextButton.disabled = false; // Go to next step\n\n        stepper.goNext();\n      }, 1500);\n    });\n    previousButton.addEventListener('click', function () {\n      stepper.goPrevious();\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      form = KTModalCreateProject.getForm();\n      stepper = KTModalCreateProject.getStepperObj();\n      nextButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-next\"]');\n      previousButton = KTModalCreateProject.getStepper().querySelector('[data-kt-element=\"files-previous\"]');\n      initForm();\n      handleForm();\n    }\n  };\n}(); // Webpack support\n\n\nif ( true && typeof module.exports !== 'undefined') {\n  module.exports = KTModalCreateProjectFiles;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvY3JlYXRlLXByb2plY3QvYnVuZGxlL2ZpbGVzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHlCQUF5QixHQUFHLFlBQVk7QUFDM0M7QUFDQSxNQUFJQyxVQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLElBQUo7QUFDQSxNQUFJQyxPQUFKLENBTDJDLENBTzNDOztBQUNBLE1BQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQVc7QUFDekI7QUFDQTtBQUNBLFFBQUlDLFVBQVUsR0FBRyxJQUFJQyxRQUFKLENBQWEsdUNBQWIsRUFBc0Q7QUFDdEVDLE1BQUFBLEdBQUcsRUFBRSx5Q0FEaUU7QUFDdEI7QUFDdkNDLE1BQUFBLFNBQVMsRUFBRSxNQUZrRDtBQUUxQztBQUNuQkMsTUFBQUEsUUFBUSxFQUFFLEVBSG1EO0FBSTdEQyxNQUFBQSxXQUFXLEVBQUUsRUFKZ0Q7QUFJNUM7QUFDakJDLE1BQUFBLGNBQWMsRUFBRSxJQUw2QztBQU03REMsTUFBQUEsTUFBTSxFQUFFLGdCQUFTQyxJQUFULEVBQWVDLElBQWYsRUFBcUI7QUFDekIsWUFBSUQsSUFBSSxDQUFDRSxJQUFMLElBQWEsa0JBQWpCLEVBQXFDO0FBQ2pDRCxVQUFBQSxJQUFJLENBQUMsa0JBQUQsQ0FBSjtBQUNILFNBRkQsTUFFTztBQUNIQSxVQUFBQSxJQUFJO0FBQ1A7QUFDSjtBQVo0RCxLQUF0RCxDQUFqQjtBQWNBLEdBakJEOztBQW1CQSxNQUFJRSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFXO0FBQzNCaEIsSUFBQUEsVUFBVSxDQUFDaUIsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsVUFBVUMsQ0FBVixFQUFhO0FBQ2pEO0FBQ0FBLE1BQUFBLENBQUMsQ0FBQ0MsY0FBRixHQUZpRCxDQUlqRDs7QUFDQW5CLE1BQUFBLFVBQVUsQ0FBQ29CLFFBQVgsR0FBc0IsSUFBdEIsQ0FMaUQsQ0FPakQ7O0FBQ0FwQixNQUFBQSxVQUFVLENBQUNxQixZQUFYLENBQXdCLG1CQUF4QixFQUE2QyxJQUE3QyxFQVJpRCxDQVVqRDs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDckI7QUFDQXRCLFFBQUFBLFVBQVUsQ0FBQ3VCLGVBQVgsQ0FBMkIsbUJBQTNCLEVBRnFCLENBSXJCOztBQUNBdkIsUUFBQUEsVUFBVSxDQUFDb0IsUUFBWCxHQUFzQixLQUF0QixDQUxxQixDQU9yQjs7QUFDQWpCLFFBQUFBLE9BQU8sQ0FBQ3FCLE1BQVI7QUFDQSxPQVRTLEVBU1AsSUFUTyxDQUFWO0FBVUEsS0FyQkQ7QUF1QkF2QixJQUFBQSxjQUFjLENBQUNnQixnQkFBZixDQUFnQyxPQUFoQyxFQUF5QyxZQUFZO0FBQ3BEZCxNQUFBQSxPQUFPLENBQUNzQixVQUFSO0FBQ0EsS0FGRDtBQUdBLEdBM0JEOztBQTZCQSxTQUFPO0FBQ047QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2pCeEIsTUFBQUEsSUFBSSxHQUFHeUIsb0JBQW9CLENBQUNDLE9BQXJCLEVBQVA7QUFDQXpCLE1BQUFBLE9BQU8sR0FBR3dCLG9CQUFvQixDQUFDRSxhQUFyQixFQUFWO0FBQ0E3QixNQUFBQSxVQUFVLEdBQUcyQixvQkFBb0IsQ0FBQ0csVUFBckIsR0FBa0NDLGFBQWxDLENBQWdELGdDQUFoRCxDQUFiO0FBQ0E5QixNQUFBQSxjQUFjLEdBQUcwQixvQkFBb0IsQ0FBQ0csVUFBckIsR0FBa0NDLGFBQWxDLENBQWdELG9DQUFoRCxDQUFqQjtBQUVBM0IsTUFBQUEsUUFBUTtBQUNSWSxNQUFBQSxVQUFVO0FBQ1Y7QUFWSyxHQUFQO0FBWUEsQ0FwRStCLEVBQWhDLEMsQ0FzRUE7OztBQUNBLElBQUksU0FBaUMsT0FBT2dCLE1BQU0sQ0FBQ0MsT0FBZCxLQUEwQixXQUEvRCxFQUE0RTtBQUMzRUQsRUFBQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCbEMseUJBQWpCO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvY3JlYXRlLXByb2plY3QvYnVuZGxlL2ZpbGVzLmpzPzI5YTYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVE1vZGFsQ3JlYXRlUHJvamVjdEZpbGVzID0gZnVuY3Rpb24gKCkge1xuXHQvLyBWYXJpYWJsZXNcblx0dmFyIG5leHRCdXR0b247XG5cdHZhciBwcmV2aW91c0J1dHRvbjtcblx0dmFyIGZvcm07XG5cdHZhciBzdGVwcGVyO1xuXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXG5cdHZhciBpbml0Rm9ybSA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIFByb2plY3QgbG9nb1xuXHRcdC8vIEZvciBtb3JlIGluZm8gYWJvdXQgRHJvcHpvbmUgcGx1Z2luIHZpc2l0OiAgaHR0cHM6Ly93d3cuZHJvcHpvbmVqcy5jb20vI3VzYWdlXG5cdFx0dmFyIG15RHJvcHpvbmUgPSBuZXcgRHJvcHpvbmUoXCIja3RfbW9kYWxfY3JlYXRlX3Byb2plY3RfZmlsZXNfdXBsb2FkXCIsIHsgXG5cdFx0XHR1cmw6IFwiaHR0cHM6Ly9rZWVudGhlbWVzLmNvbS9zY3JpcHRzL3ZvaWQucGhwXCIsIC8vIFNldCB0aGUgdXJsIGZvciB5b3VyIHVwbG9hZCBzY3JpcHQgbG9jYXRpb25cbiAgICAgICAgICAgIHBhcmFtTmFtZTogXCJmaWxlXCIsIC8vIFRoZSBuYW1lIHRoYXQgd2lsbCBiZSB1c2VkIHRvIHRyYW5zZmVyIHRoZSBmaWxlXG4gICAgICAgICAgICBtYXhGaWxlczogMTAsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTAsIC8vIE1CXG4gICAgICAgICAgICBhZGRSZW1vdmVMaW5rczogdHJ1ZSxcbiAgICAgICAgICAgIGFjY2VwdDogZnVuY3Rpb24oZmlsZSwgZG9uZSkge1xuICAgICAgICAgICAgICAgIGlmIChmaWxlLm5hbWUgPT0gXCJqdXN0aW5iaWViZXIuanBnXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZShcIk5haGEsIHlvdSBkb24ndC5cIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9KTsgIFxuXHR9XG5cblx0dmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbigpIHtcblx0XHRuZXh0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuXHRcdFx0bmV4dEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cblx0XHRcdC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG5cdFx0XHRuZXh0QnV0dG9uLnNldEF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InLCAnb24nKTtcblxuXHRcdFx0Ly8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBIaWRlIGxvYWRpbmcgaW5kaWNhdGlvblxuXHRcdFx0XHRuZXh0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuXHRcdFx0XHQvLyBFbmFibGUgYnV0dG9uXG5cdFx0XHRcdG5leHRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdFx0XG5cdFx0XHRcdC8vIEdvIHRvIG5leHQgc3RlcFxuXHRcdFx0XHRzdGVwcGVyLmdvTmV4dCgpO1xuXHRcdFx0fSwgMTUwMCk7IFx0XHRcblx0XHR9KTtcblxuXHRcdHByZXZpb3VzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0c3RlcHBlci5nb1ByZXZpb3VzKCk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcblx0XHRpbml0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRmb3JtID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0Rm9ybSgpO1xuXHRcdFx0c3RlcHBlciA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0LmdldFN0ZXBwZXJPYmooKTtcblx0XHRcdG5leHRCdXR0b24gPSBLVE1vZGFsQ3JlYXRlUHJvamVjdC5nZXRTdGVwcGVyKCkucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImZpbGVzLW5leHRcIl0nKTtcblx0XHRcdHByZXZpb3VzQnV0dG9uID0gS1RNb2RhbENyZWF0ZVByb2plY3QuZ2V0U3RlcHBlcigpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJmaWxlcy1wcmV2aW91c1wiXScpO1xuXG5cdFx0XHRpbml0Rm9ybSgpO1xuXHRcdFx0aGFuZGxlRm9ybSgpO1xuXHRcdH1cblx0fTtcbn0oKTtcblxuLy8gV2VicGFjayBzdXBwb3J0XG5pZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzICE9PSAndW5kZWZpbmVkJykge1xuXHRtb2R1bGUuZXhwb3J0cyA9IEtUTW9kYWxDcmVhdGVQcm9qZWN0RmlsZXM7XG59XG4iXSwibmFtZXMiOlsiS1RNb2RhbENyZWF0ZVByb2plY3RGaWxlcyIsIm5leHRCdXR0b24iLCJwcmV2aW91c0J1dHRvbiIsImZvcm0iLCJzdGVwcGVyIiwiaW5pdEZvcm0iLCJteURyb3B6b25lIiwiRHJvcHpvbmUiLCJ1cmwiLCJwYXJhbU5hbWUiLCJtYXhGaWxlcyIsIm1heEZpbGVzaXplIiwiYWRkUmVtb3ZlTGlua3MiLCJhY2NlcHQiLCJmaWxlIiwiZG9uZSIsIm5hbWUiLCJoYW5kbGVGb3JtIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpc2FibGVkIiwic2V0QXR0cmlidXRlIiwic2V0VGltZW91dCIsInJlbW92ZUF0dHJpYnV0ZSIsImdvTmV4dCIsImdvUHJldmlvdXMiLCJpbml0IiwiS1RNb2RhbENyZWF0ZVByb2plY3QiLCJnZXRGb3JtIiwiZ2V0U3RlcHBlck9iaiIsImdldFN0ZXBwZXIiLCJxdWVyeVNlbGVjdG9yIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/create-project/bundle/files.js\n");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./resources/src/js/custom/modals/create-project/bundle/files.js");
/******/ 	
/******/ })()
;