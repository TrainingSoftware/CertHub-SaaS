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

/***/ "./resources/src/js/custom/documentation/general/cropper.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/cropper.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTCropperDemo = function () {\n  // Private functions\n  var initCropperDemo = function initCropperDemo() {\n    var image = document.getElementById('image');\n    var options = {\n      crop: function crop(event) {\n        document.getElementById('dataX').value = Math.round(event.detail.x);\n        document.getElementById('dataY').value = Math.round(event.detail.y);\n        document.getElementById('dataWidth').value = Math.round(event.detail.width);\n        document.getElementById('dataHeight').value = Math.round(event.detail.height);\n        document.getElementById('dataRotate').value = event.detail.rotate;\n        document.getElementById('dataScaleX').value = event.detail.scaleX;\n        document.getElementById('dataScaleY').value = event.detail.scaleY;\n        var lg = document.getElementById('cropper-preview-lg');\n        lg.innerHTML = '';\n        lg.appendChild(cropper.getCroppedCanvas({\n          width: 256,\n          height: 160\n        }));\n        var md = document.getElementById('cropper-preview-md');\n        md.innerHTML = '';\n        md.appendChild(cropper.getCroppedCanvas({\n          width: 128,\n          height: 80\n        }));\n        var sm = document.getElementById('cropper-preview-sm');\n        sm.innerHTML = '';\n        sm.appendChild(cropper.getCroppedCanvas({\n          width: 64,\n          height: 40\n        }));\n        var xs = document.getElementById('cropper-preview-xs');\n        xs.innerHTML = '';\n        xs.appendChild(cropper.getCroppedCanvas({\n          width: 32,\n          height: 20\n        }));\n      }\n    };\n    var cropper = new Cropper(image, options);\n    var buttons = document.getElementById('cropper-buttons');\n    var methods = buttons.querySelectorAll('[data-method]');\n    methods.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        var method = button.getAttribute('data-method');\n        var option = button.getAttribute('data-option');\n        var option2 = button.getAttribute('data-second-option');\n\n        try {\n          option = JSON.parse(option);\n        } catch (e) {}\n\n        var result;\n\n        if (!option2) {\n          result = cropper[method](option, option2);\n        } else if (option) {\n          result = cropper[method](option);\n        } else {\n          result = cropper[method]();\n        }\n\n        if (method === 'getCroppedCanvas') {\n          var modal = document.getElementById('getCroppedCanvasModal');\n          var modalBody = modal.querySelector('.modal-body');\n          modalBody.innerHTML = '';\n          modalBody.appendChild(result);\n        }\n\n        var input = document.querySelector('#putData');\n\n        try {\n          input.value = JSON.stringify(result);\n        } catch (e) {\n          if (!result) {\n            input.value = result;\n          }\n        }\n      });\n    }); // set aspect ratio option buttons\n\n    var radioOptions = document.getElementById('setAspectRatio').querySelectorAll('[name=\"aspectRatio\"]');\n    radioOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.setAspectRatio(e.target.value);\n      });\n    }); // set view mode\n\n    var viewModeOptions = document.getElementById('viewMode').querySelectorAll('[name=\"viewMode\"]');\n    viewModeOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.destroy();\n        cropper = new Cropper(image, Object.assign({}, options, {\n          viewMode: e.target.value\n        }));\n      });\n    });\n    var toggleoptions = document.getElementById('toggleOptionButtons').querySelectorAll('[type=\"checkbox\"]');\n    toggleoptions.forEach(function (checkbox) {\n      checkbox.addEventListener('click', function (e) {\n        var appendOption = {};\n        appendOption[e.target.getAttribute('name')] = e.target.checked;\n        options = Object.assign({}, options, appendOption);\n        cropper.destroy();\n        cropper = new Cropper(image, options);\n      });\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      initCropperDemo();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTCropperDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvY3JvcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxhQUFhLEdBQUcsWUFBWTtBQUUvQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUNqQyxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBRUEsUUFBSUMsT0FBTyxHQUFHO0FBQ2JDLE1BQUFBLElBQUksRUFBRSxjQUFVQyxLQUFWLEVBQWlCO0FBQ3RCSixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNJLEtBQWpDLEdBQXlDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLENBQXhCLENBQXpDO0FBQ0FULFFBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0ksS0FBakMsR0FBeUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUUsQ0FBeEIsQ0FBekM7QUFDQVYsUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDSSxLQUFyQyxHQUE2Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssQ0FBQ0ksTUFBTixDQUFhRyxLQUF4QixDQUE3QztBQUNBWCxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQThDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFOLENBQWFJLE1BQXhCLENBQTlDO0FBQ0FaLFFBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0ksS0FBdEMsR0FBOENELEtBQUssQ0FBQ0ksTUFBTixDQUFhSyxNQUEzRDtBQUNBYixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQThD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QVl6QixLQUFaLEVBQW1CRyxPQUFuQixDQUFWO0FBQ0EsT0FORDtBQU9BLEtBUkQ7QUFTQSxHQXhHRDs7QUEwR0EsU0FBTztBQUNOO0FBQ0FzRCxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDakIxRCxNQUFBQSxlQUFlO0FBQ2Y7QUFKSyxHQUFQO0FBTUEsQ0FuSG1CLEVBQXBCLEMsQ0FxSEE7OztBQUNBMkQsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ3JDN0QsRUFBQUEsYUFBYSxDQUFDMkQsSUFBZDtBQUNBLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvY3JvcHBlci5qcz8yOTRiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIENsYXNzIGRlZmluaXRpb25cclxudmFyIEtUQ3JvcHBlckRlbW8gPSBmdW5jdGlvbiAoKSB7XHJcblxyXG5cdC8vIFByaXZhdGUgZnVuY3Rpb25zXHJcblx0dmFyIGluaXRDcm9wcGVyRGVtbyA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdHZhciBpbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZScpO1xyXG5cclxuXHRcdHZhciBvcHRpb25zID0ge1xyXG5cdFx0XHRjcm9wOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVgnKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLngpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhWScpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwueSk7XHJcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFXaWR0aCcpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwud2lkdGgpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhSGVpZ2h0JykudmFsdWUgPSBNYXRoLnJvdW5kKGV2ZW50LmRldGFpbC5oZWlnaHQpO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhUm90YXRlJykudmFsdWUgPSBldmVudC5kZXRhaWwucm90YXRlO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhU2NhbGVYJykudmFsdWUgPSBldmVudC5kZXRhaWwuc2NhbGVYO1xyXG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhU2NhbGVZJykudmFsdWUgPSBldmVudC5kZXRhaWwuc2NhbGVZO1xyXG5cclxuXHRcdFx0XHR2YXIgbGcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1wcmV2aWV3LWxnJyk7XHJcblx0XHRcdFx0bGcuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0bGcuYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDI1NiwgaGVpZ2h0OiAxNjAgfSkpO1xyXG5cclxuXHRcdFx0XHR2YXIgbWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1wcmV2aWV3LW1kJyk7XHJcblx0XHRcdFx0bWQuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0bWQuYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDEyOCwgaGVpZ2h0OiA4MCB9KSk7XHJcblxyXG5cdFx0XHRcdHZhciBzbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXctc20nKTtcclxuXHRcdFx0XHRzbS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRzbS5hcHBlbmRDaGlsZChjcm9wcGVyLmdldENyb3BwZWRDYW52YXMoeyB3aWR0aDogNjQsIGhlaWdodDogNDAgfSkpO1xyXG5cclxuXHRcdFx0XHR2YXIgeHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1wcmV2aWV3LXhzJyk7XHJcblx0XHRcdFx0eHMuaW5uZXJIVE1MID0gJyc7XHJcblx0XHRcdFx0eHMuYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDIwIH0pKTtcclxuXHRcdFx0fSxcclxuXHRcdH07XHJcblxyXG5cdFx0dmFyIGNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwgb3B0aW9ucyk7XHJcblxyXG5cdFx0dmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1idXR0b25zJyk7XHJcblx0XHR2YXIgbWV0aG9kcyA9IGJ1dHRvbnMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbWV0aG9kXScpO1xyXG5cdFx0bWV0aG9kcy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHR2YXIgbWV0aG9kID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1tZXRob2QnKTtcclxuXHRcdFx0XHR2YXIgb3B0aW9uID0gYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1vcHRpb24nKTtcclxuXHRcdFx0XHR2YXIgb3B0aW9uMiA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Vjb25kLW9wdGlvbicpO1xyXG5cclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIHJlc3VsdDtcclxuXHRcdFx0XHRpZiAoIW9wdGlvbjIpIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGNyb3BwZXJbbWV0aG9kXShvcHRpb24sIG9wdGlvbjIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIGlmIChvcHRpb24pIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGNyb3BwZXJbbWV0aG9kXShvcHRpb24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRcdHJlc3VsdCA9IGNyb3BwZXJbbWV0aG9kXSgpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aWYgKG1ldGhvZCA9PT0gJ2dldENyb3BwZWRDYW52YXMnKSB7XHJcblx0XHRcdFx0XHR2YXIgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2V0Q3JvcHBlZENhbnZhc01vZGFsJyk7XHJcblx0XHRcdFx0XHR2YXIgbW9kYWxCb2R5ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcclxuXHRcdFx0XHRcdG1vZGFsQm9keS5pbm5lckhUTUwgPSAnJztcclxuXHRcdFx0XHRcdG1vZGFsQm9keS5hcHBlbmRDaGlsZChyZXN1bHQpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0dmFyIGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3B1dERhdGEnKTtcclxuXHRcdFx0XHR0cnkge1xyXG5cdFx0XHRcdFx0aW5wdXQudmFsdWUgPSBKU09OLnN0cmluZ2lmeShyZXN1bHQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXRjaCAoZSkge1xyXG5cdFx0XHRcdFx0aWYgKCFyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0aW5wdXQudmFsdWUgPSByZXN1bHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIHNldCBhc3BlY3QgcmF0aW8gb3B0aW9uIGJ1dHRvbnNcclxuXHRcdHZhciByYWRpb09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0QXNwZWN0UmF0aW8nKS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImFzcGVjdFJhdGlvXCJdJyk7XHJcblx0XHRyYWRpb09wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XHJcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0Y3JvcHBlci5zZXRBc3BlY3RSYXRpbyhlLnRhcmdldC52YWx1ZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gc2V0IHZpZXcgbW9kZVxyXG5cdFx0dmFyIHZpZXdNb2RlT3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3TW9kZScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwidmlld01vZGVcIl0nKTtcclxuXHRcdHZpZXdNb2RlT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcclxuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRjcm9wcGVyLmRlc3Ryb3koKTtcclxuXHRcdFx0XHRjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgdmlld01vZGU6IGUudGFyZ2V0LnZhbHVlIH0pKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHR2YXIgdG9nZ2xlb3B0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGVPcHRpb25CdXR0b25zJykucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJjaGVja2JveFwiXScpO1xyXG5cdFx0dG9nZ2xlb3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChjaGVja2JveCkge1xyXG5cdFx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0dmFyIGFwcGVuZE9wdGlvbiA9IHt9O1xyXG5cdFx0XHRcdGFwcGVuZE9wdGlvbltlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ25hbWUnKV0gPSBlLnRhcmdldC5jaGVja2VkO1xyXG5cdFx0XHRcdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBhcHBlbmRPcHRpb24pO1xyXG5cdFx0XHRcdGNyb3BwZXIuZGVzdHJveSgpO1xyXG5cdFx0XHRcdGNyb3BwZXIgPSBuZXcgQ3JvcHBlcihpbWFnZSwgb3B0aW9ucyk7XHJcblx0XHRcdH0pXHJcblx0XHR9KTtcclxuXHR9O1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Ly8gcHVibGljIGZ1bmN0aW9uc1xyXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRpbml0Q3JvcHBlckRlbW8oKTtcclxuXHRcdH0sXHJcblx0fTtcclxufSgpO1xyXG5cclxuLy8gT24gZG9jdW1lbnQgcmVhZHlcclxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XHJcblx0S1RDcm9wcGVyRGVtby5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RDcm9wcGVyRGVtbyIsImluaXRDcm9wcGVyRGVtbyIsImltYWdlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJjcm9wIiwiZXZlbnQiLCJ2YWx1ZSIsIk1hdGgiLCJyb3VuZCIsImRldGFpbCIsIngiLCJ5Iiwid2lkdGgiLCJoZWlnaHQiLCJyb3RhdGUiLCJzY2FsZVgiLCJzY2FsZVkiLCJsZyIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiY3JvcHBlciIsImdldENyb3BwZWRDYW52YXMiLCJtZCIsInNtIiwieHMiLCJDcm9wcGVyIiwiYnV0dG9ucyIsIm1ldGhvZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwibWV0aG9kIiwiZ2V0QXR0cmlidXRlIiwib3B0aW9uIiwib3B0aW9uMiIsIkpTT04iLCJwYXJzZSIsInJlc3VsdCIsIm1vZGFsIiwibW9kYWxCb2R5IiwicXVlcnlTZWxlY3RvciIsImlucHV0Iiwic3RyaW5naWZ5IiwicmFkaW9PcHRpb25zIiwic2V0QXNwZWN0UmF0aW8iLCJ0YXJnZXQiLCJ2aWV3TW9kZU9wdGlvbnMiLCJkZXN0cm95IiwiT2JqZWN0IiwiYXNzaWduIiwidmlld01vZGUiLCJ0b2dnbGVvcHRpb25zIiwiY2hlY2tib3giLCJhcHBlbmRPcHRpb24iLCJjaGVja2VkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/cropper.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/cropper.js"]();
/******/ 	
/******/ })()
;