/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/layout-builder/layout-builder.js ***!
  \*********************************************************/


// Class definition
var KTLayoutBuilder = function() {
	var form = document.querySelector("#kt_layout_builder_form");
	var actionInput = document.querySelector("#kt_layout_builder_action");
	var tabInput = document.querySelector("#kt_layout_builder_tab");	
	var url = form.getAttribute("action");

	var previewButton = document.querySelector("#kt_layout_builder_preview");
	var exportButton = document.querySelector("#kt_layout_builder_export");
	var resetButton = document.querySelector("#kt_layout_builder_reset");

	var handleTab = function() {
		var tabs = [].slice.call(document.querySelectorAll('#kt_layout_builder_tabs a[data-bs-toggle="tab"]'));

		tabs.forEach(function (tab) {
			tab.addEventListener("shown.bs.tab", function (e) {
				tabInput.value = tab.getAttribute("href").substring(1);
			});
		});
	};

	var handlePreview = function() {
		previewButton.addEventListener("click", function(e) {
			e.preventDefault();

			// Set form action value
			actionInput.value = "preview";

			// Show progress
			previewButton.setAttribute("data-kt-indicator", "on");

			// Prepare form data
			var data = $(form).serialize();

			// Submit
			$.ajax({
				type: "POST",
				dataType: "html",
				url: url,
				data: data,
				success: function(response, status, xhr) {
					toastr.success(
						"Preview has been updated with current configured layout.", 
						"Preview updated!", 
						{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
					);

					setTimeout(function() {
						location.reload(); // reload page
					}, 1500);
				},
				error: function(response) {
					toastr.error(
						"Please try it again later.", 
						"Something went wrong!", 
						{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
					);
				},
				complete: function() {
					previewButton.removeAttribute("data-kt-indicator");
				}
			});
		});
	};

	var handleExport = function() {
		exportButton.addEventListener("click", function(e) {
			e.preventDefault();

			toastr.success(
				"Process has been started and it may take a while.", 
				"Generating HTML!", 
				{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
			);

			// Show progress
			exportButton.setAttribute("data-kt-indicator", "on");

			// Set form action value
			actionInput.value = "export";
			
			// Prepare form data
			var data = $(form).serialize();

			$.ajax({
				type: "POST",
				dataType: "html",
				url: url,
				data: data,
				success: function(response, status, xhr) {
					var timer = setInterval(function() {
						$("<iframe/>").attr({
							src: url + "?layout-builder[action]=export&download=1&output=" + response,
							style: "visibility:hidden;display:none",
						}).ready(function() {
							// Stop the timer
							clearInterval(timer);

							exportButton.removeAttribute("data-kt-indicator");
						}).appendTo("body");
					}, 3000);
				},
				error: function(response) {
					toastr.error(
						"Please try it again later.", 
						"Something went wrong!", 
						{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
					);

					exportButton.removeAttribute("data-kt-indicator");
				},
			});
		});
	};

	var handleReset = function() {
		resetButton.addEventListener("click", function(e) {
			e.preventDefault();

			// Show progress
			resetButton.setAttribute("data-kt-indicator", "on");

			// Set form action value
			actionInput.value = "reset";
			
			// Prepare form data
			var data = $(form).serialize();

			$.ajax({
				type: "POST",
				dataType: "html",
				url: url,
				data: data,
				success: function(response, status, xhr) {
					toastr.success(
						"Preview has been successfully reset and the page will be reloaded.", 
						"Reset Preview!", 
						{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
					);

					setTimeout(function() {
						location.reload(); // reload page
					}, 1500);
				},
				error: function(response) {
					toastr.error(
						"Please try it again later.", 
						"Something went wrong!", 
						{timeOut: 0, extendedTimeOut: 0, closeButton: true, closeDuration: 0}
					);
				},
				complete: function() {
					resetButton.removeAttribute("data-kt-indicator");
				},
			});
		});
	};

	return {
		// Public functions
		init: function() {
			handlePreview();
			handleExport();
			handleReset();
			handleTab();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTLayoutBuilder.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/layout-builder/layout-builder.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/layout-builder/layout-builder.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTLayoutBuilder = function () {\n  var form = document.querySelector(\"#kt_layout_builder_form\");\n  var actionInput = document.querySelector(\"#kt_layout_builder_action\");\n  var tabInput = document.querySelector(\"#kt_layout_builder_tab\");\n  var url = form.getAttribute(\"action\");\n  var previewButton = document.querySelector(\"#kt_layout_builder_preview\");\n  var exportButton = document.querySelector(\"#kt_layout_builder_export\");\n  var resetButton = document.querySelector(\"#kt_layout_builder_reset\");\n\n  var handleTab = function handleTab() {\n    var tabs = [].slice.call(document.querySelectorAll('#kt_layout_builder_tabs a[data-bs-toggle=\"tab\"]'));\n    tabs.forEach(function (tab) {\n      tab.addEventListener(\"shown.bs.tab\", function (e) {\n        tabInput.value = tab.getAttribute(\"href\").substring(1);\n      });\n    });\n  };\n\n  var handlePreview = function handlePreview() {\n    previewButton.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // Set form action value\n\n      actionInput.value = \"preview\"; // Show progress\n\n      previewButton.setAttribute(\"data-kt-indicator\", \"on\"); // Prepare form data\n\n      var data = $(form).serialize(); // Submit\n\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          toastr.success(\"Preview has been updated with current configured layout.\", \"Preview updated!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          setTimeout(function () {\n            location.reload(); // reload page\n          }, 1500);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n        },\n        complete: function complete() {\n          previewButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  var handleExport = function handleExport() {\n    exportButton.addEventListener(\"click\", function (e) {\n      e.preventDefault();\n      toastr.success(\"Process has been started and it may take a while.\", \"Generating HTML!\", {\n        timeOut: 0,\n        extendedTimeOut: 0,\n        closeButton: true,\n        closeDuration: 0\n      }); // Show progress\n\n      exportButton.setAttribute(\"data-kt-indicator\", \"on\"); // Set form action value\n\n      actionInput.value = \"export\"; // Prepare form data\n\n      var data = $(form).serialize();\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          var timer = setInterval(function () {\n            $(\"<iframe/>\").attr({\n              src: url + \"?layout-builder[action]=export&download=1&output=\" + response,\n              style: \"visibility:hidden;display:none\"\n            }).ready(function () {\n              // Stop the timer\n              clearInterval(timer);\n              exportButton.removeAttribute(\"data-kt-indicator\");\n            }).appendTo(\"body\");\n          }, 3000);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          exportButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  var handleReset = function handleReset() {\n    resetButton.addEventListener(\"click\", function (e) {\n      e.preventDefault(); // Show progress\n\n      resetButton.setAttribute(\"data-kt-indicator\", \"on\"); // Set form action value\n\n      actionInput.value = \"reset\"; // Prepare form data\n\n      var data = $(form).serialize();\n      $.ajax({\n        type: \"POST\",\n        dataType: \"html\",\n        url: url,\n        data: data,\n        success: function success(response, status, xhr) {\n          toastr.success(\"Preview has been successfully reset and the page will be reloaded.\", \"Reset Preview!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n          setTimeout(function () {\n            location.reload(); // reload page\n          }, 1500);\n        },\n        error: function error(response) {\n          toastr.error(\"Please try it again later.\", \"Something went wrong!\", {\n            timeOut: 0,\n            extendedTimeOut: 0,\n            closeButton: true,\n            closeDuration: 0\n          });\n        },\n        complete: function complete() {\n          resetButton.removeAttribute(\"data-kt-indicator\");\n        }\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      handlePreview();\n      handleExport();\n      handleReset();\n      handleTab();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTLayoutBuilder.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9sYXlvdXQtYnVpbGRlci9sYXlvdXQtYnVpbGRlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxlQUFlLEdBQUcsWUFBVztBQUNoQyxNQUFJQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix5QkFBdkIsQ0FBWDtBQUNBLE1BQUlDLFdBQVcsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFsQjtBQUNBLE1BQUlFLFFBQVEsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLHdCQUF2QixDQUFmO0FBQ0EsTUFBSUcsR0FBRyxHQUFHTCxJQUFJLENBQUNNLFlBQUwsQ0FBa0IsUUFBbEIsQ0FBVjtBQUVBLE1BQUlDLGFBQWEsR0FBR04sUUFBUSxDQUFDQyxhQUFULENBQXVCLDRCQUF2QixDQUFwQjtBQUNBLE1BQUlNLFlBQVksR0FBR1AsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFuQjtBQUNBLE1BQUlPLFdBQVcsR0FBR1IsUUFBUSxDQUFDQyxhQUFULENBQXVCLDBCQUF2QixDQUFsQjs7QUFFQSxNQUFJUSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFXO0FBQzFCLFFBQUlDLElBQUksR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY1osUUFBUSxDQUFDYSxnQkFBVCxDQUEwQixpREFBMUIsQ0FBZCxDQUFYO0FBRUFILElBQUFBLElBQUksQ0FBQ0ksT0FBTCxDQUFhLFVBQVVDLEdBQVYsRUFBZTtBQUMzQkEsTUFBQUEsR0FBRyxDQUFDQyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxVQUFVQyxDQUFWLEVBQWE7QUFDakRkLFFBQUFBLFFBQVEsQ0FBQ2UsS0FBVCxHQUFpQkgsR0FBRyxDQUFDVixZQUFKLENBQWlCLE1BQWpCLEVBQXlCYyxTQUF6QixDQUFtQyxDQUFuQyxDQUFqQjtBQUNBLE9BRkQ7QUFHQSxLQUpEO0FBS0EsR0FSRDs7QUFVQSxNQUFJ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VUFBQUEsV0FBVyxDQUFDbUMsZUFBWixDQUE0QixtQkFBNUI7QUFDQTtBQXpCSyxPQUFQO0FBMkJBLEtBdkNEO0FBd0NBLEdBekNEOztBQTJDQSxTQUFPO0FBQ047QUFDQVcsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2hCbEMsTUFBQUEsYUFBYTtBQUNid0IsTUFBQUEsWUFBWTtBQUNaUyxNQUFBQSxXQUFXO0FBQ1g1QyxNQUFBQSxTQUFTO0FBQ1Q7QUFQSyxHQUFQO0FBU0EsQ0F0S3FCLEVBQXRCLEMsQ0F3S0E7OztBQUNBOEMsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDMUQsRUFBQUEsZUFBZSxDQUFDd0QsSUFBaEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vbGF5b3V0LWJ1aWxkZXIvbGF5b3V0LWJ1aWxkZXIuanM/N2M3NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUTGF5b3V0QnVpbGRlciA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfbGF5b3V0X2J1aWxkZXJfZm9ybVwiKTtcblx0dmFyIGFjdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9sYXlvdXRfYnVpbGRlcl9hY3Rpb25cIik7XG5cdHZhciB0YWJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfbGF5b3V0X2J1aWxkZXJfdGFiXCIpO1x0XG5cdHZhciB1cmwgPSBmb3JtLmdldEF0dHJpYnV0ZShcImFjdGlvblwiKTtcblxuXHR2YXIgcHJldmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfbGF5b3V0X2J1aWxkZXJfcHJldmlld1wiKTtcblx0dmFyIGV4cG9ydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3RfbGF5b3V0X2J1aWxkZXJfZXhwb3J0XCIpO1xuXHR2YXIgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X2xheW91dF9idWlsZGVyX3Jlc2V0XCIpO1xuXG5cdHZhciBoYW5kbGVUYWIgPSBmdW5jdGlvbigpIHtcblx0XHR2YXIgdGFicyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI2t0X2xheW91dF9idWlsZGVyX3RhYnMgYVtkYXRhLWJzLXRvZ2dsZT1cInRhYlwiXScpKTtcblxuXHRcdHRhYnMuZm9yRWFjaChmdW5jdGlvbiAodGFiKSB7XG5cdFx0XHR0YWIuYWRkRXZlbnRMaXN0ZW5lcihcInNob3duLmJzLnRhYlwiLCBmdW5jdGlvbiAoZSkge1xuXHRcdFx0XHR0YWJJbnB1dC52YWx1ZSA9IHRhYi5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLnN1YnN0cmluZygxKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBoYW5kbGVQcmV2aWV3ID0gZnVuY3Rpb24oKSB7XG5cdFx0cHJldmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBTZXQgZm9ybSBhY3Rpb24gdmFsdWVcblx0XHRcdGFjdGlvbklucHV0LnZhbHVlID0gXCJwcmV2aWV3XCI7XG5cblx0XHRcdC8vIFNob3cgcHJvZ3Jlc3Ncblx0XHRcdHByZXZpZXdCdXR0b24uc2V0QXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIiwgXCJvblwiKTtcblxuXHRcdFx0Ly8gUHJlcGFyZSBmb3JtIGRhdGFcblx0XHRcdHZhciBkYXRhID0gJChmb3JtKS5zZXJpYWxpemUoKTtcblxuXHRcdFx0Ly8gU3VibWl0XG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XG5cdFx0XHRcdFx0dG9hc3RyLnN1Y2Nlc3MoXG5cdFx0XHRcdFx0XHRcIlByZXZpZXcgaGFzIGJlZW4gdXBkYXRlZCB3aXRoIGN1cnJlbnQgY29uZmlndXJlZCBsYXlvdXQuXCIsIFxuXHRcdFx0XHRcdFx0XCJQcmV2aWV3IHVwZGF0ZWQhXCIsIFxuXHRcdFx0XHRcdFx0e3RpbWVPdXQ6IDAsIGV4dGVuZGVkVGltZU91dDogMCwgY2xvc2VCdXR0b246IHRydWUsIGNsb3NlRHVyYXRpb246IDB9XG5cdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRsb2NhdGlvbi5yZWxvYWQoKTsgLy8gcmVsb2FkIHBhZ2Vcblx0XHRcdFx0XHR9LCAxNTAwKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0ZXJyb3I6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG5cdFx0XHRcdFx0dG9hc3RyLmVycm9yKFxuXHRcdFx0XHRcdFx0XCJQbGVhc2UgdHJ5IGl0IGFnYWluIGxhdGVyLlwiLCBcblx0XHRcdFx0XHRcdFwiU29tZXRoaW5nIHdlbnQgd3JvbmchXCIsIFxuXHRcdFx0XHRcdFx0e3RpbWVPdXQ6IDAsIGV4dGVuZGVkVGltZU91dDogMCwgY2xvc2VCdXR0b246IHRydWUsIGNsb3NlRHVyYXRpb246IDB9XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Y29tcGxldGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHByZXZpZXdCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHZhciBoYW5kbGVFeHBvcnQgPSBmdW5jdGlvbigpIHtcblx0XHRleHBvcnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dG9hc3RyLnN1Y2Nlc3MoXG5cdFx0XHRcdFwiUHJvY2VzcyBoYXMgYmVlbiBzdGFydGVkIGFuZCBpdCBtYXkgdGFrZSBhIHdoaWxlLlwiLCBcblx0XHRcdFx0XCJHZW5lcmF0aW5nIEhUTUwhXCIsIFxuXHRcdFx0XHR7dGltZU91dDogMCwgZXh0ZW5kZWRUaW1lT3V0OiAwLCBjbG9zZUJ1dHRvbjogdHJ1ZSwgY2xvc2VEdXJhdGlvbjogMH1cblx0XHRcdCk7XG5cblx0XHRcdC8vIFNob3cgcHJvZ3Jlc3Ncblx0XHRcdGV4cG9ydEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xuXG5cdFx0XHQvLyBTZXQgZm9ybSBhY3Rpb24gdmFsdWVcblx0XHRcdGFjdGlvbklucHV0LnZhbHVlID0gXCJleHBvcnRcIjtcblx0XHRcdFxuXHRcdFx0Ly8gUHJlcGFyZSBmb3JtIGRhdGFcblx0XHRcdHZhciBkYXRhID0gJChmb3JtKS5zZXJpYWxpemUoKTtcblxuXHRcdFx0JC5hamF4KHtcblx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXG5cdFx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdFx0dXJsOiB1cmwsXG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlLCBzdGF0dXMsIHhocikge1xuXHRcdFx0XHRcdHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JChcIjxpZnJhbWUvPlwiKS5hdHRyKHtcblx0XHRcdFx0XHRcdFx0c3JjOiB1cmwgKyBcIj9sYXlvdXQtYnVpbGRlclthY3Rpb25dPWV4cG9ydCZkb3dubG9hZD0xJm91dHB1dD1cIiArIHJlc3BvbnNlLFxuXHRcdFx0XHRcdFx0XHRzdHlsZTogXCJ2aXNpYmlsaXR5OmhpZGRlbjtkaXNwbGF5Om5vbmVcIixcblx0XHRcdFx0XHRcdH0pLnJlYWR5KGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHQvLyBTdG9wIHRoZSB0aW1lclxuXHRcdFx0XHRcdFx0XHRjbGVhckludGVydmFsKHRpbWVyKTtcblxuXHRcdFx0XHRcdFx0XHRleHBvcnRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG5cdFx0XHRcdFx0XHR9KS5hcHBlbmRUbyhcImJvZHlcIik7XG5cdFx0XHRcdFx0fSwgMzAwMCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihyZXNwb25zZSkge1xuXHRcdFx0XHRcdHRvYXN0ci5lcnJvcihcblx0XHRcdFx0XHRcdFwiUGxlYXNlIHRyeSBpdCBhZ2FpbiBsYXRlci5cIiwgXG5cdFx0XHRcdFx0XHRcIlNvbWV0aGluZyB3ZW50IHdyb25nIVwiLCBcblx0XHRcdFx0XHRcdHt0aW1lT3V0OiAwLCBleHRlbmRlZFRpbWVPdXQ6IDAsIGNsb3NlQnV0dG9uOiB0cnVlLCBjbG9zZUR1cmF0aW9uOiAwfVxuXHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRleHBvcnRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHR2YXIgaGFuZGxlUmVzZXQgPSBmdW5jdGlvbigpIHtcblx0XHRyZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHQvLyBTaG93IHByb2dyZXNzXG5cdFx0XHRyZXNldEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJkYXRhLWt0LWluZGljYXRvclwiLCBcIm9uXCIpO1xuXG5cdFx0XHQvLyBTZXQgZm9ybSBhY3Rpb24gdmFsdWVcblx0XHRcdGFjdGlvbklucHV0LnZhbHVlID0gXCJyZXNldFwiO1xuXHRcdFx0XG5cdFx0XHQvLyBQcmVwYXJlIGZvcm0gZGF0YVxuXHRcdFx0dmFyIGRhdGEgPSAkKGZvcm0pLnNlcmlhbGl6ZSgpO1xuXG5cdFx0XHQkLmFqYXgoe1xuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcblx0XHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0XHR1cmw6IHVybCxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UsIHN0YXR1cywgeGhyKSB7XG5cdFx0XHRcdFx0dG9hc3RyLnN1Y2Nlc3MoXG5cdFx0XHRcdFx0XHRcIlByZXZpZXcgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHJlc2V0IGFuZCB0aGUgcGFnZSB3aWxsIGJlIHJlbG9hZGVkLlwiLCBcblx0XHRcdFx0XHRcdFwiUmVzZXQgUHJldmlldyFcIiwgXG5cdFx0XHRcdFx0XHR7dGltZU91dDogMCwgZXh0ZW5kZWRUaW1lT3V0OiAwLCBjbG9zZUJ1dHRvbjogdHJ1ZSwgY2xvc2VEdXJhdGlvbjogMH1cblx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGxvY2F0aW9uLnJlbG9hZCgpOyAvLyByZWxvYWQgcGFnZVxuXHRcdFx0XHRcdH0sIDE1MDApO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpIHtcblx0XHRcdFx0XHR0b2FzdHIuZXJyb3IoXG5cdFx0XHRcdFx0XHRcIlBsZWFzZSB0cnkgaXQgYWdhaW4gbGF0ZXIuXCIsIFxuXHRcdFx0XHRcdFx0XCJTb21ldGhpbmcgd2VudCB3cm9uZyFcIiwgXG5cdFx0XHRcdFx0XHR7dGltZU91dDogMCwgZXh0ZW5kZWRUaW1lT3V0OiAwLCBjbG9zZUJ1dHRvbjogdHJ1ZSwgY2xvc2VEdXJhdGlvbjogMH1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmVzZXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1rdC1pbmRpY2F0b3JcIik7XG5cdFx0XHRcdH0sXG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdC8vIFB1YmxpYyBmdW5jdGlvbnNcblx0XHRpbml0OiBmdW5jdGlvbigpIHtcblx0XHRcdGhhbmRsZVByZXZpZXcoKTtcblx0XHRcdGhhbmRsZUV4cG9ydCgpO1xuXHRcdFx0aGFuZGxlUmVzZXQoKTtcblx0XHRcdGhhbmRsZVRhYigpO1xuXHRcdH1cblx0fTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RMYXlvdXRCdWlsZGVyLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVExheW91dEJ1aWxkZXIiLCJmb3JtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWN0aW9uSW5wdXQiLCJ0YWJJbnB1dCIsInVybCIsImdldEF0dHJpYnV0ZSIsInByZXZpZXdCdXR0b24iLCJleHBvcnRCdXR0b24iLCJyZXNldEJ1dHRvbiIsImhhbmRsZVRhYiIsInRhYnMiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhYiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwidmFsdWUiLCJzdWJzdHJpbmciLCJoYW5kbGVQcmV2aWV3IiwicHJldmVudERlZmF1bHQiLCJzZXRBdHRyaWJ1dGUiLCJkYXRhIiwiJCIsInNlcmlhbGl6ZSIsImFqYXgiLCJ0eXBlIiwiZGF0YVR5cGUiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJ4aHIiLCJ0b2FzdHIiLCJ0aW1lT3V0IiwiZXh0ZW5kZWRUaW1lT3V0IiwiY2xvc2VCdXR0b24iLCJjbG9zZUR1cmF0aW9uIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwicmVsb2FkIiwiZXJyb3IiLCJjb21wbGV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImhhbmRsZUV4cG9ydCIsInRpbWVyIiwic2V0SW50ZXJ2YWwiLCJhdHRyIiwic3JjIiwic3R5bGUiLCJyZWFkeSIsImNsZWFySW50ZXJ2YWwiLCJhcHBlbmRUbyIsImhhbmRsZVJlc2V0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/layout-builder/layout-builder.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/layout-builder/layout-builder.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=layout-builder.js.map