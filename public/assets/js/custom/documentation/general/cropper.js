/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/general/cropper.js ***!
  \*********************************************************/


// Class definition
var KTCropperDemo = function () {

	// Private functions
	var initCropperDemo = function () {
		var image = document.getElementById('image');

		var options = {
			crop: function (event) {
				document.getElementById('dataX').value = Math.round(event.detail.x);
				document.getElementById('dataY').value = Math.round(event.detail.y);
				document.getElementById('dataWidth').value = Math.round(event.detail.width);
				document.getElementById('dataHeight').value = Math.round(event.detail.height);
				document.getElementById('dataRotate').value = event.detail.rotate;
				document.getElementById('dataScaleX').value = event.detail.scaleX;
				document.getElementById('dataScaleY').value = event.detail.scaleY;

				var lg = document.getElementById('cropper-preview-lg');
				lg.innerHTML = '';
				lg.appendChild(cropper.getCroppedCanvas({ width: 256, height: 160 }));

				var md = document.getElementById('cropper-preview-md');
				md.innerHTML = '';
				md.appendChild(cropper.getCroppedCanvas({ width: 128, height: 80 }));

				var sm = document.getElementById('cropper-preview-sm');
				sm.innerHTML = '';
				sm.appendChild(cropper.getCroppedCanvas({ width: 64, height: 40 }));

				var xs = document.getElementById('cropper-preview-xs');
				xs.innerHTML = '';
				xs.appendChild(cropper.getCroppedCanvas({ width: 32, height: 20 }));
			},
		};

		var cropper = new Cropper(image, options);

		var buttons = document.getElementById('cropper-buttons');
		var methods = buttons.querySelectorAll('[data-method]');
		methods.forEach(function (button) {
			button.addEventListener('click', function (e) {
				var method = button.getAttribute('data-method');
				var option = button.getAttribute('data-option');
				var option2 = button.getAttribute('data-second-option');

				try {
					option = JSON.parse(option);
				}
				catch (e) {
				}

				var result;
				if (!option2) {
					result = cropper[method](option, option2);
				}
				else if (option) {
					result = cropper[method](option);
				}
				else {
					result = cropper[method]();
				}

				if (method === 'getCroppedCanvas') {
					var modal = document.getElementById('getCroppedCanvasModal');
					var modalBody = modal.querySelector('.modal-body');
					modalBody.innerHTML = '';
					modalBody.appendChild(result);
				}

				var input = document.querySelector('#putData');
				try {
					input.value = JSON.stringify(result);
				}
				catch (e) {
					if (!result) {
						input.value = result;
					}
				}
			});
		});

		// set aspect ratio option buttons
		var radioOptions = document.getElementById('setAspectRatio').querySelectorAll('[name="aspectRatio"]');
		radioOptions.forEach(function (button) {
			button.addEventListener('click', function (e) {
				cropper.setAspectRatio(e.target.value);
			});
		});

		// set view mode
		var viewModeOptions = document.getElementById('viewMode').querySelectorAll('[name="viewMode"]');
		viewModeOptions.forEach(function (button) {
			button.addEventListener('click', function (e) {
				cropper.destroy();
				cropper = new Cropper(image, Object.assign({}, options, { viewMode: e.target.value }));
			});
		});

		var toggleoptions = document.getElementById('toggleOptionButtons').querySelectorAll('[type="checkbox"]');
		toggleoptions.forEach(function (checkbox) {
			checkbox.addEventListener('click', function (e) {
				var appendOption = {};
				appendOption[e.target.getAttribute('name')] = e.target.checked;
				options = Object.assign({}, options, appendOption);
				cropper.destroy();
				cropper = new Cropper(image, options);
			})
		});
	};

	return {
		// public functions
		init: function () {
			initCropperDemo();
		},
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	KTCropperDemo.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/cropper.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/cropper.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTCropperDemo = function () {\n  // Private functions\n  var initCropperDemo = function initCropperDemo() {\n    var image = document.getElementById('image');\n    var options = {\n      crop: function crop(event) {\n        document.getElementById('dataX').value = Math.round(event.detail.x);\n        document.getElementById('dataY').value = Math.round(event.detail.y);\n        document.getElementById('dataWidth').value = Math.round(event.detail.width);\n        document.getElementById('dataHeight').value = Math.round(event.detail.height);\n        document.getElementById('dataRotate').value = event.detail.rotate;\n        document.getElementById('dataScaleX').value = event.detail.scaleX;\n        document.getElementById('dataScaleY').value = event.detail.scaleY;\n        var lg = document.getElementById('cropper-preview-lg');\n        lg.innerHTML = '';\n        lg.appendChild(cropper.getCroppedCanvas({\n          width: 256,\n          height: 160\n        }));\n        var md = document.getElementById('cropper-preview-md');\n        md.innerHTML = '';\n        md.appendChild(cropper.getCroppedCanvas({\n          width: 128,\n          height: 80\n        }));\n        var sm = document.getElementById('cropper-preview-sm');\n        sm.innerHTML = '';\n        sm.appendChild(cropper.getCroppedCanvas({\n          width: 64,\n          height: 40\n        }));\n        var xs = document.getElementById('cropper-preview-xs');\n        xs.innerHTML = '';\n        xs.appendChild(cropper.getCroppedCanvas({\n          width: 32,\n          height: 20\n        }));\n      }\n    };\n    var cropper = new Cropper(image, options);\n    var buttons = document.getElementById('cropper-buttons');\n    var methods = buttons.querySelectorAll('[data-method]');\n    methods.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        var method = button.getAttribute('data-method');\n        var option = button.getAttribute('data-option');\n        var option2 = button.getAttribute('data-second-option');\n\n        try {\n          option = JSON.parse(option);\n        } catch (e) {}\n\n        var result;\n\n        if (!option2) {\n          result = cropper[method](option, option2);\n        } else if (option) {\n          result = cropper[method](option);\n        } else {\n          result = cropper[method]();\n        }\n\n        if (method === 'getCroppedCanvas') {\n          var modal = document.getElementById('getCroppedCanvasModal');\n          var modalBody = modal.querySelector('.modal-body');\n          modalBody.innerHTML = '';\n          modalBody.appendChild(result);\n        }\n\n        var input = document.querySelector('#putData');\n\n        try {\n          input.value = JSON.stringify(result);\n        } catch (e) {\n          if (!result) {\n            input.value = result;\n          }\n        }\n      });\n    }); // set aspect ratio option buttons\n\n    var radioOptions = document.getElementById('setAspectRatio').querySelectorAll('[name=\"aspectRatio\"]');\n    radioOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.setAspectRatio(e.target.value);\n      });\n    }); // set view mode\n\n    var viewModeOptions = document.getElementById('viewMode').querySelectorAll('[name=\"viewMode\"]');\n    viewModeOptions.forEach(function (button) {\n      button.addEventListener('click', function (e) {\n        cropper.destroy();\n        cropper = new Cropper(image, Object.assign({}, options, {\n          viewMode: e.target.value\n        }));\n      });\n    });\n    var toggleoptions = document.getElementById('toggleOptionButtons').querySelectorAll('[type=\"checkbox\"]');\n    toggleoptions.forEach(function (checkbox) {\n      checkbox.addEventListener('click', function (e) {\n        var appendOption = {};\n        appendOption[e.target.getAttribute('name')] = e.target.checked;\n        options = Object.assign({}, options, appendOption);\n        cropper.destroy();\n        cropper = new Cropper(image, options);\n      });\n    });\n  };\n\n  return {\n    // public functions\n    init: function init() {\n      initCropperDemo();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTCropperDemo.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvY3JvcHBlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxhQUFhLEdBQUcsWUFBWTtBQUUvQjtBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUNqQyxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixDQUFaO0FBRUEsUUFBSUMsT0FBTyxHQUFHO0FBQ2JDLE1BQUFBLElBQUksRUFBRSxjQUFVQyxLQUFWLEVBQWlCO0FBQ3RCSixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNJLEtBQWpDLEdBQXlDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFOLENBQWFDLENBQXhCLENBQXpDO0FBQ0FULFFBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixPQUF4QixFQUFpQ0ksS0FBakMsR0FBeUNDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUUsQ0FBeEIsQ0FBekM7QUFDQVYsUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLEVBQXFDSSxLQUFyQyxHQUE2Q0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILEtBQUssQ0FBQ0ksTUFBTixDQUFhRyxLQUF4QixDQUE3QztBQUNBWCxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQThDQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsS0FBSyxDQUFDSSxNQUFOLENBQWFJLE1BQXhCLENBQTlDO0FBQ0FaLFFBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0ksS0FBdEMsR0FBOENELEtBQUssQ0FBQ0ksTUFBTixDQUFhSyxNQUEzRDtBQUNBYixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NJLEtBQXRDLEdBQThDRCxLQUFLLENBQUNJLE1BQU4sQ0FBYU0sTUFBM0Q7QUFDQWQsUUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDSSxLQUF0QyxHQUE4Q0QsS0FBSyxDQUFDSSxNQUFOLENBQWFPLE1BQTNEO0FBRUEsWUFBSUMsRUFBRSxHQUFHaEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLG9CQUF4QixDQUFUO0FBQ0FlLFFBQUFBLEVBQUUsQ0FBQ0MsU0FBSCxHQUFlLEVBQWY7QUFDQUQsUUFBQUEsRUFBRSxDQUFDRSxXQUFILENBQWVDLE9BQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUI7QUFBRVQsVUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBQUEsTUFBTSxFQUFFO0FBQXRCLFNBQXpCLENBQWY7QUFFQSxZQUFJUyxFQUFFLEdBQUdyQixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQVQ7QUFDQW9CLFFBQUFBLEVBQUUsQ0FBQ0osU0FBSCxHQUFlLEVBQWY7QUFDQUksUUFBQUEsRUFBRSxDQUFDSCxXQUFILENBQWVDLE9BQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUI7QUFBRVQsVUFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsVUFBQUEsTUFBTSxFQUFFO0FBQXRCLFNBQXpCLENBQWY7QUFFQSxZQUFJVSxFQUFFLEdBQUd0QixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQVQ7QUFDQXFCLFFBQUFBLEVBQUUsQ0FBQ0wsU0FBSCxHQUFlLEVBQWY7QUFDQUssUUFBQUEsRUFBRSxDQUFDSixXQUFILENBQWVDLE9BQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUI7QUFBRVQsVUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsVUFBQUEsTUFBTSxFQUFFO0FBQXJCLFNBQXpCLENBQWY7QUFFQSxZQUFJVyxFQUFFLEdBQUd2QixRQUFRLENBQUNDLGNBQVQsQ0FBd0Isb0JBQXhCLENBQVQ7QUFDQXNCLFFBQUFBLEVBQUUsQ0FBQ04sU0FBSCxHQUFlLEVBQWY7QUFDQU0sUUFBQUEsRUFBRSxDQUFDTCxXQUFILENBQWVDLE9BQU8sQ0FBQ0MsZ0JBQVIsQ0FBeUI7QUFBRVQsVUFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsVUFBQUEsTUFBTSxFQUFFO0FBQXJCLFNBQXpCLENBQWY7QUFDQTtBQXpCWSxLQUFkO0FBNEJBLFFBQUlPLE9BQU8sR0FBRyxJQUFJSyxPQUFKLENBQVl6QixLQUFaLEVBQW1CRyxPQUFuQixDQUFkO0FBRUEsUUFBSXVCLE9BQU8sR0FBR3pCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQkFBeEIsQ0FBZDtBQUNBLFFBQUl5QixPQUFPLEdBQUdELE9BQU8sQ0FBQ0UsZ0JBQVIsQ0FBeUIsZUFBekIsQ0FBZDtBQUNBRCxJQUFBQSxPQUFPLENBQUNFLE9BQVIsQ0FBZ0IsVUFBVUMsTUFBVixFQUFrQjtBQUNqQ0EsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDN0MsWUFBSUMsTUFBTSxHQUFHSCxNQUFNLENBQUNJLFlBQVAsQ0FBb0IsYUFBcEIsQ0FBYjtBQUNBLFlBQUlDLE1BQU0sR0FBR0wsTUFBTSxDQUFDSSxZQUFQLENBQW9CLGFBQXBCLENBQWI7QUFDQSxZQUFJRSxPQUFPLEdBQUdOLE1BQU0sQ0FBQ0ksWUFBUCxDQUFvQixvQkFBcEIsQ0FBZDs7QUFFQSxZQUFJO0FBQ0hDLFVBQUFBLE1BQU0sR0FBR0UsSUFBSSxDQUFDQyxLQUFMLENBQVdILE1BQVgsQ0FBVDtBQUNBLFNBRkQsQ0FHQSxPQUFPSCxDQUFQLEVBQVUsQ0FDVDs7QUFFRCxZQUFJTyxNQUFKOztBQUNBLFlBQUksQ0FBQ0gsT0FBTCxFQUFjO0FBQ2JHLFVBQUFBLE1BQU0sR0FBR25CLE9BQU8sQ0FBQ2EsTUFBRCxDQUFQLENBQWdCRSxNQUFoQixFQUF3QkMsT0FBeEIsQ0FBVDtBQUNBLFNBRkQsTUFHSyxJQUFJRCxNQUFKLEVBQVk7QUFDaEJJLFVBQUFBLE1BQU0sR0FBR25CLE9BQU8sQ0FBQ2EsTUFBRCxDQUFQLENBQWdCRSxNQUFoQixDQUFUO0FBQ0EsU0FGSSxNQUdBO0FBQ0pJLFVBQUFBLE1BQU0sR0FBR25CLE9BQU8sQ0FBQ2EsTUFBRCxDQUFQLEVBQVQ7QUFDQTs7QUFFRCxZQUFJQSxNQUFNLEtBQUssa0JBQWYsRUFBbUM7QUFDbEMsY0FBSU8sS0FBSyxHQUFHdkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLHVCQUF4QixDQUFaO0FBQ0EsY0FBSXVDLFNBQVMsR0FBR0QsS0FBSyxDQUFDRSxhQUFOLENBQW9CLGFBQXBCLENBQWhCO0FBQ0FELFVBQUFBLFNBQVMsQ0FBQ3ZCLFNBQVYsR0FBc0IsRUFBdEI7QUFDQXVCLFVBQUFBLFNBQVMsQ0FBQ3RCLFdBQVYsQ0FBc0JvQixNQUF0QjtBQUNBOztBQUVELFlBQUlJLEtBQUssR0FBRzFDLFFBQVEsQ0FBQ3lDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBWjs7QUFDQSxZQUFJO0FBQ0hDLFVBQUFBLEtBQUssQ0FBQ3JDLEtBQU4sR0FBYytCLElBQUksQ0FBQ08sU0FBTCxDQUFlTCxNQUFmLENBQWQ7QUFDQSxTQUZELENBR0EsT0FBT1AsQ0FBUCxFQUFVO0FBQ1QsY0FBSSxDQUFDTyxNQUFMLEVBQWE7QUFDWkksWUFBQUEsS0FBSyxDQUFDckMsS0FBTixHQUFjaUMsTUFBZDtBQUNBO0FBQ0Q7QUFDRCxPQXRDRDtBQXVDQSxLQXhDRCxFQW5DaUMsQ0E2RWpDOztBQUNBLFFBQUlNLFlBQVksR0FBRzVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixnQkFBeEIsRUFBMEMwQixnQkFBMUMsQ0FBMkQsc0JBQTNELENBQW5CO0FBQ0FpQixJQUFBQSxZQUFZLENBQUNoQixPQUFiLENBQXFCLFVBQVVDLE1BQVYsRUFBa0I7QUFDdENBLE1BQUFBLE1BQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBVUMsQ0FBVixFQUFhO0FBQzdDWixRQUFBQSxPQUFPLENBQUMwQixjQUFSLENBQXVCZCxDQUFDLENBQUNlLE1BQUYsQ0FBU3pDLEtBQWhDO0FBQ0EsT0FGRDtBQUdBLEtBSkQsRUEvRWlDLENBcUZqQzs7QUFDQSxRQUFJMEMsZUFBZSxHQUFHL0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFVBQXhCLEVBQW9DMEIsZ0JBQXBDLENBQXFELG1CQUFyRCxDQUF0QjtBQUNBb0IsSUFBQUEsZUFBZSxDQUFDbkIsT0FBaEIsQ0FBd0IsVUFBVUMsTUFBVixFQUFrQjtBQUN6Q0EsTUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFVQyxDQUFWLEVBQWE7QUFDN0NaLFFBQUFBLE9BQU8sQ0FBQzZCLE9BQVI7QUFDQTdCLFFBQUFBLE9BQU8sR0FBRyxJQUFJSyxPQUFKLENBQVl6QixLQUFaLEVBQW1Ca0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQmhELE9BQWxCLEVBQTJCO0FBQUVpRCxVQUFBQSxRQUFRLEVBQUVwQixDQUFDLENBQUNlLE1BQUYsQ0FBU3pDO0FBQXJCLFNBQTNCLENBQW5CLENBQVY7QUFDQSxPQUhEO0FBSUEsS0FMRDtBQU9BLFFBQUkrQyxhQUFhLEdBQUdwRCxRQUFRLENBQUNDLGNBQVQsQ0FBd0IscUJBQXhCLEVBQStDMEIsZ0JBQS9DLENBQWdFLG1CQUFoRSxDQUFwQjtBQUNBeUIsSUFBQUEsYUFBYSxDQUFDeEIsT0FBZCxDQUFzQixVQUFVeUIsUUFBVixFQUFvQjtBQUN6Q0EsTUFBQUEsUUFBUSxDQUFDdkIsZ0JBQVQsQ0FBMEIsT0FBMUIsRUFBbUMsVUFBVUMsQ0FBVixFQUFhO0FBQy9DLFlBQUl1QixZQUFZLEdBQUcsRUFBbkI7QUFDQUEsUUFBQUEsWUFBWSxDQUFDdkIsQ0FBQyxDQUFDZSxNQUFGLENBQVNiLFlBQVQsQ0FBc0IsTUFBdEIsQ0FBRCxDQUFaLEdBQThDRixDQUFDLENBQUNlLE1BQUYsQ0FBU1MsT0FBdkQ7QUFDQXJELFFBQUFBLE9BQU8sR0FBRytDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JoRCxPQUFsQixFQUEyQm9ELFlBQTNCLENBQVY7QUFDQW5DLFFBQUFBLE9BQU8sQ0FBQzZCLE9BQVI7QUFDQTdCLFFBQUFBLE9BQU8sR0FBRyxJQUFJSyxPQUFKLENBQVl6QixLQUFaLEVBQW1CRyxPQUFuQixDQUFWO0FBQ0EsT0FORDtBQU9BLEtBUkQ7QUFTQSxHQXhHRDs7QUEwR0EsU0FBTztBQUNOO0FBQ0FzRCxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDakIxRCxNQUFBQSxlQUFlO0FBQ2Y7QUFKSyxHQUFQO0FBTUEsQ0FuSG1CLEVBQXBCLEMsQ0FxSEE7OztBQUNBMkQsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ3JDN0QsRUFBQUEsYUFBYSxDQUFDMkQsSUFBZDtBQUNBLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvY3JvcHBlci5qcz9jNTgzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQ3JvcHBlckRlbW8gPSBmdW5jdGlvbiAoKSB7XG5cblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcblx0dmFyIGluaXRDcm9wcGVyRGVtbyA9IGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW1hZ2UnKTtcblxuXHRcdHZhciBvcHRpb25zID0ge1xuXHRcdFx0Y3JvcDogZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhWCcpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwueCk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhWScpLnZhbHVlID0gTWF0aC5yb3VuZChldmVudC5kZXRhaWwueSk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhV2lkdGgnKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLndpZHRoKTtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFIZWlnaHQnKS52YWx1ZSA9IE1hdGgucm91bmQoZXZlbnQuZGV0YWlsLmhlaWdodCk7XG5cdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRhUm90YXRlJykudmFsdWUgPSBldmVudC5kZXRhaWwucm90YXRlO1xuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0YVNjYWxlWCcpLnZhbHVlID0gZXZlbnQuZGV0YWlsLnNjYWxlWDtcblx0XHRcdFx0ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RhdGFTY2FsZVknKS52YWx1ZSA9IGV2ZW50LmRldGFpbC5zY2FsZVk7XG5cblx0XHRcdFx0dmFyIGxnID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy1sZycpO1xuXHRcdFx0XHRsZy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0bGcuYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDI1NiwgaGVpZ2h0OiAxNjAgfSkpO1xuXG5cdFx0XHRcdHZhciBtZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXctbWQnKTtcblx0XHRcdFx0bWQuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdG1kLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiAxMjgsIGhlaWdodDogODAgfSkpO1xuXG5cdFx0XHRcdHZhciBzbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcm9wcGVyLXByZXZpZXctc20nKTtcblx0XHRcdFx0c20uaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdHNtLmFwcGVuZENoaWxkKGNyb3BwZXIuZ2V0Q3JvcHBlZENhbnZhcyh7IHdpZHRoOiA2NCwgaGVpZ2h0OiA0MCB9KSk7XG5cblx0XHRcdFx0dmFyIHhzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nyb3BwZXItcHJldmlldy14cycpO1xuXHRcdFx0XHR4cy5pbm5lckhUTUwgPSAnJztcblx0XHRcdFx0eHMuYXBwZW5kQ2hpbGQoY3JvcHBlci5nZXRDcm9wcGVkQ2FudmFzKHsgd2lkdGg6IDMyLCBoZWlnaHQ6IDIwIH0pKTtcblx0XHRcdH0sXG5cdFx0fTtcblxuXHRcdHZhciBjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIG9wdGlvbnMpO1xuXG5cdFx0dmFyIGJ1dHRvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JvcHBlci1idXR0b25zJyk7XG5cdFx0dmFyIG1ldGhvZHMgPSBidXR0b25zLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW1ldGhvZF0nKTtcblx0XHRtZXRob2RzLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0dmFyIG1ldGhvZCA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbWV0aG9kJyk7XG5cdFx0XHRcdHZhciBvcHRpb24gPSBidXR0b24uZ2V0QXR0cmlidXRlKCdkYXRhLW9wdGlvbicpO1xuXHRcdFx0XHR2YXIgb3B0aW9uMiA9IGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2Vjb25kLW9wdGlvbicpO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gSlNPTi5wYXJzZShvcHRpb24pO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNhdGNoIChlKSB7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0XHRpZiAoIW9wdGlvbjIpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0ob3B0aW9uLCBvcHRpb24yKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIGlmIChvcHRpb24pIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0ob3B0aW9uKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBjcm9wcGVyW21ldGhvZF0oKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmIChtZXRob2QgPT09ICdnZXRDcm9wcGVkQ2FudmFzJykge1xuXHRcdFx0XHRcdHZhciBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXRDcm9wcGVkQ2FudmFzTW9kYWwnKTtcblx0XHRcdFx0XHR2YXIgbW9kYWxCb2R5ID0gbW9kYWwucXVlcnlTZWxlY3RvcignLm1vZGFsLWJvZHknKTtcblx0XHRcdFx0XHRtb2RhbEJvZHkuaW5uZXJIVE1MID0gJyc7XG5cdFx0XHRcdFx0bW9kYWxCb2R5LmFwcGVuZENoaWxkKHJlc3VsdCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHR2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHV0RGF0YScpO1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlucHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkocmVzdWx0KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjYXRjaCAoZSkge1xuXHRcdFx0XHRcdGlmICghcmVzdWx0KSB7XG5cdFx0XHRcdFx0XHRpbnB1dC52YWx1ZSA9IHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0Ly8gc2V0IGFzcGVjdCByYXRpbyBvcHRpb24gYnV0dG9uc1xuXHRcdHZhciByYWRpb09wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2V0QXNwZWN0UmF0aW8nKS5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImFzcGVjdFJhdGlvXCJdJyk7XG5cdFx0cmFkaW9PcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbikge1xuXHRcdFx0YnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcblx0XHRcdFx0Y3JvcHBlci5zZXRBc3BlY3RSYXRpbyhlLnRhcmdldC52YWx1ZSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblxuXHRcdC8vIHNldCB2aWV3IG1vZGVcblx0XHR2YXIgdmlld01vZGVPcHRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXdNb2RlJykucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ2aWV3TW9kZVwiXScpO1xuXHRcdHZpZXdNb2RlT3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcblx0XHRcdGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdGNyb3BwZXIuZGVzdHJveSgpO1xuXHRcdFx0XHRjcm9wcGVyID0gbmV3IENyb3BwZXIoaW1hZ2UsIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHsgdmlld01vZGU6IGUudGFyZ2V0LnZhbHVlIH0pKTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXG5cdFx0dmFyIHRvZ2dsZW9wdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlT3B0aW9uQnV0dG9ucycpLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKTtcblx0XHR0b2dnbGVvcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGNoZWNrYm94KSB7XG5cdFx0XHRjaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG5cdFx0XHRcdHZhciBhcHBlbmRPcHRpb24gPSB7fTtcblx0XHRcdFx0YXBwZW5kT3B0aW9uW2UudGFyZ2V0LmdldEF0dHJpYnV0ZSgnbmFtZScpXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG5cdFx0XHRcdG9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCBhcHBlbmRPcHRpb24pO1xuXHRcdFx0XHRjcm9wcGVyLmRlc3Ryb3koKTtcblx0XHRcdFx0Y3JvcHBlciA9IG5ldyBDcm9wcGVyKGltYWdlLCBvcHRpb25zKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHQvLyBwdWJsaWMgZnVuY3Rpb25zXG5cdFx0aW5pdDogZnVuY3Rpb24gKCkge1xuXHRcdFx0aW5pdENyb3BwZXJEZW1vKCk7XG5cdFx0fSxcblx0fTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuXHRLVENyb3BwZXJEZW1vLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUQ3JvcHBlckRlbW8iLCJpbml0Q3JvcHBlckRlbW8iLCJpbWFnZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zIiwiY3JvcCIsImV2ZW50IiwidmFsdWUiLCJNYXRoIiwicm91bmQiLCJkZXRhaWwiLCJ4IiwieSIsIndpZHRoIiwiaGVpZ2h0Iiwicm90YXRlIiwic2NhbGVYIiwic2NhbGVZIiwibGciLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImNyb3BwZXIiLCJnZXRDcm9wcGVkQ2FudmFzIiwibWQiLCJzbSIsInhzIiwiQ3JvcHBlciIsImJ1dHRvbnMiLCJtZXRob2RzIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsIm1ldGhvZCIsImdldEF0dHJpYnV0ZSIsIm9wdGlvbiIsIm9wdGlvbjIiLCJKU09OIiwicGFyc2UiLCJyZXN1bHQiLCJtb2RhbCIsIm1vZGFsQm9keSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dCIsInN0cmluZ2lmeSIsInJhZGlvT3B0aW9ucyIsInNldEFzcGVjdFJhdGlvIiwidGFyZ2V0Iiwidmlld01vZGVPcHRpb25zIiwiZGVzdHJveSIsIk9iamVjdCIsImFzc2lnbiIsInZpZXdNb2RlIiwidG9nZ2xlb3B0aW9ucyIsImNoZWNrYm94IiwiYXBwZW5kT3B0aW9uIiwiY2hlY2tlZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/cropper.js\n");

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
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=cropper.js.map