/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/forms/clipboard.js ***!
  \*********************************************************/


// Class definition
var KTFormsClipboard = function () {
    // Shared variables
    var clipboard;

    // Private functions
    var example1 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_1');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.value;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = button.innerHTML;

            // Exit label update when already in progress
            if (button.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            button.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                button.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example2 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_2');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.innerText;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = button.innerHTML;

            // Exit label update when already in progress
            if (button.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            button.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                button.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example3 = function () {
        // Select element
        const target = document.getElementById('kt_clipboard_3');

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(target);

        // Success action handler
        clipboard.on('success', function (e) {
            const currentLabel = target.innerHTML;

            // Exit label update when already in progress
            if (target.innerHTML === 'Copied!') {
                return;
            }

            // Update button label
            target.innerHTML = "Copied!";

            // Revert button label after 3 seconds
            setTimeout(function () {
                target.innerHTML = currentLabel;
            }, 3000)
        });
    }

    var example4 = function () {
        // Select elements
        const target = document.getElementById('kt_clipboard_4');
        const button = target.nextElementSibling;

        // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/
        clipboard = new ClipboardJS(button, {
            target: target,
            text: function () {
                return target.innerHTML;
            }
        });

        // Success action handler
        clipboard.on('success', function (e) {
            var checkIcon = button.querySelector('.bi.bi-check');
            var svgIcon = button.querySelector('.svg-icon');

            // Exit check icon when already showing
            if (checkIcon) {
                return;
            }

            // Create check icon
            checkIcon = document.createElement('i');
            checkIcon.classList.add('bi');
            checkIcon.classList.add('bi-check');
            checkIcon.classList.add('fs-2x');

            // Append check icon
            button.appendChild(checkIcon);

            // Highlight target
            const classes = ['text-success', 'fw-boldest'];
            target.classList.add(...classes);

            // Highlight button
            button.classList.add('btn-success');

            // Hide copy icon
            svgIcon.classList.add('d-none');

            // Revert button label after 3 seconds
            setTimeout(function () {
                // Remove check icon
                svgIcon.classList.remove('d-none');

                // Revert icon
                button.removeChild(checkIcon);

                // Remove target highlight
                target.classList.remove(...classes);

                // Remove button highlight
                button.classList.remove('btn-success');
            }, 3000)
        });
    }

    return {
        // Public Functions
        init: function () {
            example1();
            example2();
            example3();
            example4();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsClipboard.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/clipboard.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/clipboard.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsClipboard = function () {\n  // Shared variables\n  var clipboard; // Private functions\n\n  var example1 = function example1() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_1');\n    var button = target.nextElementSibling; // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.value;\n      }\n    }); // Success action handler\n\n    clipboard.on('success', function (e) {\n      var currentLabel = button.innerHTML; // Exit label update when already in progress\n\n      if (button.innerHTML === 'Copied!') {\n        return;\n      } // Update button label\n\n\n      button.innerHTML = \"Copied!\"; // Revert button label after 3 seconds\n\n      setTimeout(function () {\n        button.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n\n  var example2 = function example2() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_2');\n    var button = target.nextElementSibling; // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.innerText;\n      }\n    }); // Success action handler\n\n    clipboard.on('success', function (e) {\n      var currentLabel = button.innerHTML; // Exit label update when already in progress\n\n      if (button.innerHTML === 'Copied!') {\n        return;\n      } // Update button label\n\n\n      button.innerHTML = \"Copied!\"; // Revert button label after 3 seconds\n\n      setTimeout(function () {\n        button.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n\n  var example3 = function example3() {\n    // Select element\n    var target = document.getElementById('kt_clipboard_3'); // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n\n    clipboard = new ClipboardJS(target); // Success action handler\n\n    clipboard.on('success', function (e) {\n      var currentLabel = target.innerHTML; // Exit label update when already in progress\n\n      if (target.innerHTML === 'Copied!') {\n        return;\n      } // Update button label\n\n\n      target.innerHTML = \"Copied!\"; // Revert button label after 3 seconds\n\n      setTimeout(function () {\n        target.innerHTML = currentLabel;\n      }, 3000);\n    });\n  };\n\n  var example4 = function example4() {\n    // Select elements\n    var target = document.getElementById('kt_clipboard_4');\n    var button = target.nextElementSibling; // Init clipboard -- for more info, please read the offical documentation: https://clipboardjs.com/\n\n    clipboard = new ClipboardJS(button, {\n      target: target,\n      text: function text() {\n        return target.innerHTML;\n      }\n    }); // Success action handler\n\n    clipboard.on('success', function (e) {\n      var _target$classList;\n\n      var checkIcon = button.querySelector('.bi.bi-check');\n      var svgIcon = button.querySelector('.svg-icon'); // Exit check icon when already showing\n\n      if (checkIcon) {\n        return;\n      } // Create check icon\n\n\n      checkIcon = document.createElement('i');\n      checkIcon.classList.add('bi');\n      checkIcon.classList.add('bi-check');\n      checkIcon.classList.add('fs-2x'); // Append check icon\n\n      button.appendChild(checkIcon); // Highlight target\n\n      var classes = ['text-success', 'fw-boldest'];\n\n      (_target$classList = target.classList).add.apply(_target$classList, classes); // Highlight button\n\n\n      button.classList.add('btn-success'); // Hide copy icon\n\n      svgIcon.classList.add('d-none'); // Revert button label after 3 seconds\n\n      setTimeout(function () {\n        var _target$classList2;\n\n        // Remove check icon\n        svgIcon.classList.remove('d-none'); // Revert icon\n\n        button.removeChild(checkIcon); // Remove target highlight\n\n        (_target$classList2 = target.classList).remove.apply(_target$classList2, classes); // Remove button highlight\n\n\n        button.classList.remove('btn-success');\n      }, 3000);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n      example2();\n      example3();\n      example4();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsClipboard.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2NsaXBib2FyZC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFZO0FBQy9CO0FBQ0EsTUFBSUMsU0FBSixDQUYrQixDQUkvQjs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFZO0FBQ3ZCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQWY7QUFDQSxRQUFNQyxNQUFNLEdBQUdILE1BQU0sQ0FBQ0ksa0JBQXRCLENBSHVCLENBS3ZCOztBQUNBTixJQUFBQSxTQUFTLEdBQUcsSUFBSU8sV0FBSixDQUFnQkYsTUFBaEIsRUFBd0I7QUFDaENILE1BQUFBLE1BQU0sRUFBRUEsTUFEd0I7QUFFaENNLE1BQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLGVBQU9OLE1BQU0sQ0FBQ08sS0FBZDtBQUNIO0FBSitCLEtBQXhCLENBQVosQ0FOdUIsQ0FhdkI7O0FBQ0FULElBQUFBLFNBQVMsQ0FBQ1UsRUFBVixDQUFhLFNBQWIsRUFBd0IsVUFBVUMsQ0FBVixFQUFhO0FBQ2pDLFVBQU1DLFlBQVksR0FBR1AsTUFBTSxDQUFDUSxTQUE1QixDQURpQyxDQUdqQzs7QUFDQSxVQUFJUixNQUFNLENBQUNRLFNBQVAsS0FBcUIsU0FBekIsRUFBb0M7QUFDaEM7QUFDSCxPQU5nQyxDQVFqQzs7O0FBQ0FSLE1BQUFBLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQixTQUFuQixDQVRpQyxDQVdqQzs7QUFDQUMsTUFBQUEsVUFBVSxDQUFDLFlBQVk7QUFDbkJULFFBQUFBLE1BQU0sQ0FBQ1EsU0FBUCxHQUFtQkQsWUFBbkI7QUFDSCxPQUZTLEVBRVAsSUFGTyxDQUFWO0FBR0gsS0FmRDtBQWdCSCxHQTlCRDs7QUFnQ0EsTUFBSUcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBWTtBQUN2QjtBQUNBLFFBQU1iLE1B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Q1JDLE1BQUFBLFFBQVE7QUFDWDtBQVBFLEdBQVA7QUFTSCxDQW5Lc0IsRUFBdkIsQyxDQXFLQTs7O0FBQ0FZLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ2hDLEVBQUFBLGdCQUFnQixDQUFDOEIsSUFBakI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9jbGlwYm9hcmQuanM/OTExMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNDbGlwYm9hcmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBjbGlwYm9hcmQ7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlMSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2VsZWN0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jbGlwYm9hcmRfMScpO1xuICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIC8vIEluaXQgY2xpcGJvYXJkIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSByZWFkIHRoZSBvZmZpY2FsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xuICAgICAgICBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTdWNjZXNzIGFjdGlvbiBoYW5kbGVyXG4gICAgICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGFiZWwgPSBidXR0b24uaW5uZXJIVE1MO1xuXG4gICAgICAgICAgICAvLyBFeGl0IGxhYmVsIHVwZGF0ZSB3aGVuIGFscmVhZHkgaW4gcHJvZ3Jlc3NcbiAgICAgICAgICAgIGlmIChidXR0b24uaW5uZXJIVE1MID09PSAnQ29waWVkIScpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBidXR0b24gbGFiZWxcbiAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBcIkNvcGllZCFcIjtcblxuICAgICAgICAgICAgLy8gUmV2ZXJ0IGJ1dHRvbiBsYWJlbCBhZnRlciAzIHNlY29uZHNcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBjdXJyZW50TGFiZWw7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY2xpcGJvYXJkXzInKTtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcblxuICAgICAgICAvLyBJbml0IGNsaXBib2FyZCAtLSBmb3IgbW9yZSBpbmZvLCBwbGVhc2UgcmVhZCB0aGUgb2ZmaWNhbCBkb2N1bWVudGF0aW9uOiBodHRwczovL2NsaXBib2FyZGpzLmNvbS9cbiAgICAgICAgY2xpcGJvYXJkID0gbmV3IENsaXBib2FyZEpTKGJ1dHRvbiwge1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICB0ZXh0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldC5pbm5lclRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN1Y2Nlc3MgYWN0aW9uIGhhbmRsZXJcbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYWJlbCA9IGJ1dHRvbi5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIC8vIEV4aXQgbGFiZWwgdXBkYXRlIHdoZW4gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKGJ1dHRvbi5pbm5lckhUTUwgPT09ICdDb3BpZWQhJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGJ1dHRvbiBsYWJlbFxuICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IFwiQ29waWVkIVwiO1xuXG4gICAgICAgICAgICAvLyBSZXZlcnQgYnV0dG9uIGxhYmVsIGFmdGVyIDMgc2Vjb25kc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYnV0dG9uLmlubmVySFRNTCA9IGN1cnJlbnRMYWJlbDtcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2VsZWN0IGVsZW1lbnRcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NsaXBib2FyZF8zJyk7XG5cbiAgICAgICAgLy8gSW5pdCBjbGlwYm9hcmQgLS0gZm9yIG1vcmUgaW5mbywgcGxlYXNlIHJlYWQgdGhlIG9mZmljYWwgZG9jdW1lbnRhdGlvbjogaHR0cHM6Ly9jbGlwYm9hcmRqcy5jb20vXG4gICAgICAgIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyh0YXJnZXQpO1xuXG4gICAgICAgIC8vIFN1Y2Nlc3MgYWN0aW9uIGhhbmRsZXJcbiAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMYWJlbCA9IHRhcmdldC5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIC8vIEV4aXQgbGFiZWwgdXBkYXRlIHdoZW4gYWxyZWFkeSBpbiBwcm9ncmVzc1xuICAgICAgICAgICAgaWYgKHRhcmdldC5pbm5lckhUTUwgPT09ICdDb3BpZWQhJykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGJ1dHRvbiBsYWJlbFxuICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IFwiQ29waWVkIVwiO1xuXG4gICAgICAgICAgICAvLyBSZXZlcnQgYnV0dG9uIGxhYmVsIGFmdGVyIDMgc2Vjb25kc1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlubmVySFRNTCA9IGN1cnJlbnRMYWJlbDtcbiAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlNCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2VsZWN0IGVsZW1lbnRzXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jbGlwYm9hcmRfNCcpO1xuICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQubmV4dEVsZW1lbnRTaWJsaW5nO1xuXG4gICAgICAgIC8vIEluaXQgY2xpcGJvYXJkIC0tIGZvciBtb3JlIGluZm8sIHBsZWFzZSByZWFkIHRoZSBvZmZpY2FsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xuICAgICAgICBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0LmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3VjY2VzcyBhY3Rpb24gaGFuZGxlclxuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgdmFyIGNoZWNrSWNvbiA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuYmkuYmktY2hlY2snKTtcbiAgICAgICAgICAgIHZhciBzdmdJY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpO1xuXG4gICAgICAgICAgICAvLyBFeGl0IGNoZWNrIGljb24gd2hlbiBhbHJlYWR5IHNob3dpbmdcbiAgICAgICAgICAgIGlmIChjaGVja0ljb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVjayBpY29uXG4gICAgICAgICAgICBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICBjaGVja0ljb24uY2xhc3NMaXN0LmFkZCgnYmknKTtcbiAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaS1jaGVjaycpO1xuICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZzLTJ4Jyk7XG5cbiAgICAgICAgICAgIC8vIEFwcGVuZCBjaGVjayBpY29uXG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcblxuICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IHRhcmdldFxuICAgICAgICAgICAgY29uc3QgY2xhc3NlcyA9IFsndGV4dC1zdWNjZXNzJywgJ2Z3LWJvbGRlc3QnXTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuXG4gICAgICAgICAgICAvLyBIaWdobGlnaHQgYnV0dG9uXG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuLXN1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gSGlkZSBjb3B5IGljb25cbiAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICAgICAgICAgIC8vIFJldmVydCBidXR0b24gbGFiZWwgYWZ0ZXIgMyBzZWNvbmRzXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY2hlY2sgaWNvblxuICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXZlcnQgaWNvblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChjaGVja0ljb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRhcmdldCBoaWdobGlnaHRcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSguLi5jbGFzc2VzKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBidXR0b24gaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2J0bi1zdWNjZXNzJyk7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XG4gICAgICAgICAgICBleGFtcGxlMigpO1xuICAgICAgICAgICAgZXhhbXBsZTMoKTtcbiAgICAgICAgICAgIGV4YW1wbGU0KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0NsaXBib2FyZC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zQ2xpcGJvYXJkIiwiY2xpcGJvYXJkIiwiZXhhbXBsZTEiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiQ2xpcGJvYXJkSlMiLCJ0ZXh0IiwidmFsdWUiLCJvbiIsImUiLCJjdXJyZW50TGFiZWwiLCJpbm5lckhUTUwiLCJzZXRUaW1lb3V0IiwiZXhhbXBsZTIiLCJpbm5lclRleHQiLCJleGFtcGxlMyIsImV4YW1wbGU0IiwiY2hlY2tJY29uIiwicXVlcnlTZWxlY3RvciIsInN2Z0ljb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJjbGFzc2VzIiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/clipboard.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/clipboard.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=clipboard.js.map