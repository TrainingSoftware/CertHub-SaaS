/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/security/license-usage.js ***!
  \********************************************************************************************/


// Class definition
var KTAccountSecurityLicenseUsage = function () {
    // Private functions
    var initLicenceCopy = function() {
        KTUtil.each(document.querySelectorAll('#kt_security_license_usage_table [data-action="copy"]'), function(button) {
            var tr = button.closest('tr');
            var license = KTUtil.find(tr, '[data-bs-target="license"]');

            var clipboard = new ClipboardJS(button, {
                target: license,
                text: function() {
                    return license.innerHTML;
                }
            });
        
            clipboard.on('success', function(e) {
                // Icons
                var svgIcon = button.querySelector('.svg-icon');                
                var checkIcon = button.querySelector('.bi.bi-check');
                
                // exit if check icon is already shown
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
                license.classList.add('text-success');

                // Hide copy icon
                svgIcon.classList.add('d-none');

                // Set 3 seconds timeout to hide the check icon and show copy icon back
                setTimeout(function() {
                    // Remove check icon
                    svgIcon.classList.remove('d-none');
                    // Show check icon back
                    button.removeChild(checkIcon);

                    // Remove highlight
                    license.classList.remove('text-success');
                }, 3000);
            });
        });
    }

    // Public methods
    return {
        init: function () {
            initLicenceCopy();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTAccountSecurityLicenseUsage.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/security/license-usage.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/account/security/license-usage.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountSecurityLicenseUsage = function () {\n  // Private functions\n  var initLicenceCopy = function initLicenceCopy() {\n    KTUtil.each(document.querySelectorAll('#kt_security_license_usage_table [data-action=\"copy\"]'), function (button) {\n      var tr = button.closest('tr');\n      var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n      var clipboard = new ClipboardJS(button, {\n        target: license,\n        text: function text() {\n          return license.innerHTML;\n        }\n      });\n      clipboard.on('success', function (e) {\n        // Icons\n        var svgIcon = button.querySelector('.svg-icon');\n        var checkIcon = button.querySelector('.bi.bi-check'); // exit if check icon is already shown\n\n        if (checkIcon) {\n          return;\n        } // Create check icon\n\n\n        checkIcon = document.createElement('i');\n        checkIcon.classList.add('bi');\n        checkIcon.classList.add('bi-check');\n        checkIcon.classList.add('fs-2x'); // Append check icon\n\n        button.appendChild(checkIcon); // Highlight target\n\n        license.classList.add('text-success'); // Hide copy icon\n\n        svgIcon.classList.add('d-none'); // Set 3 seconds timeout to hide the check icon and show copy icon back\n\n        setTimeout(function () {\n          // Remove check icon\n          svgIcon.classList.remove('d-none'); // Show check icon back\n\n          button.removeChild(checkIcon); // Remove highlight\n\n          license.classList.remove('text-success');\n        }, 3000);\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initLicenceCopy();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountSecurityLicenseUsage.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L3NlY3VyaXR5L2xpY2Vuc2UtdXNhZ2UuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsNkJBQTZCLEdBQUcsWUFBWTtBQUM1QztBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBVztBQUM3QkMsSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsdURBQTFCLENBQVosRUFBZ0csVUFBU0MsTUFBVCxFQUFpQjtBQUM3RyxVQUFJQyxFQUFFLEdBQUdELE1BQU0sQ0FBQ0UsT0FBUCxDQUFlLElBQWYsQ0FBVDtBQUNBLFVBQUlDLE9BQU8sR0FBR1AsTUFBTSxDQUFDUSxJQUFQLENBQVlILEVBQVosRUFBZ0IsNEJBQWhCLENBQWQ7QUFFQSxVQUFJSSxTQUFTLEdBQUcsSUFBSUMsV0FBSixDQUFnQk4sTUFBaEIsRUFBd0I7QUFDcENPLFFBQUFBLE1BQU0sRUFBRUosT0FENEI7QUFFcENLLFFBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiLGlCQUFPTCxPQUFPLENBQUNNLFNBQWY7QUFDSDtBQUptQyxPQUF4QixDQUFoQjtBQU9BSixNQUFBQSxTQUFTLENBQUNLLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQztBQUNBLFlBQUlDLE9BQU8sR0FBR1osTUFBTSxDQUFDYSxhQUFQLENBQXFCLFdBQXJCLENBQWQ7QUFDQSxZQUFJQyxTQUFTLEdBQUdkLE1BQU0sQ0FBQ2EsYUFBUCxDQUFxQixjQUFyQixDQUFoQixDQUhnQyxDQUtoQzs7QUFDQSxZQUFJQyxTQUFKLEVBQWU7QUFDWjtBQUNGLFNBUitCLENBVWhDOzs7QUFDQUEsUUFBQUEsU0FBUyxHQUFHaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixHQUF2QixDQUFaO0FBQ0FELFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsSUFBeEI7QUFDQUgsUUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixVQUF4QjtBQUNBSCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLE9BQXhCLEVBZGdDLENBZ0JoQzs7QUFDQWpCLFFBQUFBLE1BQU0sQ0FBQ2tCLFdBQVAsQ0FBbUJKLFNBQW5CLEVBakJnQyxDQW1CaEM7O0FBQ0FYLFFBQUFBLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsY0FBdEIsRUFwQmdDLENBc0JoQzs7QUFDQUwsUUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCQyxHQUFsQixDQUFzQixRQUF0QixFQXZCZ0MsQ0F5QmhDOztBQUNBRSxRQUFBQSxVQUFVLENBQUMsWUFBVztBQUNsQjtBQUNBUCxVQUFBQSxPQUFPLENBQUNJLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLFFBQXpCLEVBRmtCLENBR2xCOztBQUNBcEIsVUFBQUEsTUFBTSxDQUFDcUIsV0FBUCxDQUFtQlAsU0FBbkIsRUFKa0IsQ0FNbEI7O0FBQ0FYLFVBQUFBLE9BQU8sQ0FBQ2EsU0FBUixDQUFrQkksTUFBbEIsQ0FBeUIsY0FBekI7QUFDSCxTQVJTLEVBUVAsSUFSTyxDQUFWO0FBU0gsT0FuQ0Q7QUFvQ0gsS0EvQ0Q7QUFnREgsR0FqREQsQ0FGNEMsQ0FxRDVDOzs7QUFDQSxTQUFPO0FBQ0hFLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkM0IsTUFBQUEsZUFBZTtBQUNsQjtBQUhFLEdBQVA7QUFLSCxDQTNEbUMsRUFBcEMsQyxDQTZEQTs7O0FBQ0FDLE1BQU0sQ0FBQzJCLGtCQUFQLENBQTBCLFlBQVc7QUFDakM3QixFQUFBQSw2QkFBNkIsQ0FBQzRCLElBQTlCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FjY291bnQvc2VjdXJpdHkvbGljZW5zZS11c2FnZS5qcz85YmYyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBY2NvdW50U2VjdXJpdHlMaWNlbnNlVXNhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgaW5pdExpY2VuY2VDb3B5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIEtUVXRpbC5lYWNoKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNrdF9zZWN1cml0eV9saWNlbnNlX3VzYWdlX3RhYmxlIFtkYXRhLWFjdGlvbj1cImNvcHlcIl0nKSwgZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICB2YXIgdHIgPSBidXR0b24uY2xvc2VzdCgndHInKTtcbiAgICAgICAgICAgIHZhciBsaWNlbnNlID0gS1RVdGlsLmZpbmQodHIsICdbZGF0YS1icy10YXJnZXQ9XCJsaWNlbnNlXCJdJyk7XG5cbiAgICAgICAgICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uLCB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBsaWNlbnNlLFxuICAgICAgICAgICAgICAgIHRleHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGljZW5zZS5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgY2xpcGJvYXJkLm9uKCdzdWNjZXNzJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIC8vIEljb25zXG4gICAgICAgICAgICAgICAgdmFyIHN2Z0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLnN2Zy1pY29uJyk7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHZhciBjaGVja0ljb24gPSBidXR0b24ucXVlcnlTZWxlY3RvcignLmJpLmJpLWNoZWNrJyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy8gZXhpdCBpZiBjaGVjayBpY29uIGlzIGFscmVhZHkgc2hvd25cbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tJY29uKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuOyAgXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGNoZWNrIGljb25cbiAgICAgICAgICAgICAgICBjaGVja0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2JpJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2JpLWNoZWNrJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tJY29uLmNsYXNzTGlzdC5hZGQoJ2ZzLTJ4Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyBBcHBlbmQgY2hlY2sgaWNvblxuICAgICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChjaGVja0ljb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gSGlnaGxpZ2h0IHRhcmdldFxuICAgICAgICAgICAgICAgIGxpY2Vuc2UuY2xhc3NMaXN0LmFkZCgndGV4dC1zdWNjZXNzJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBIaWRlIGNvcHkgaWNvblxuICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgMyBzZWNvbmRzIHRpbWVvdXQgdG8gaGlkZSB0aGUgY2hlY2sgaWNvbiBhbmQgc2hvdyBjb3B5IGljb24gYmFja1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjaGVjayBpY29uXG4gICAgICAgICAgICAgICAgICAgIHN2Z0ljb24uY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgY2hlY2sgaWNvbiBiYWNrXG4gICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVDaGlsZChjaGVja0ljb24pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBoaWdobGlnaHRcbiAgICAgICAgICAgICAgICAgICAgbGljZW5zZS5jbGFzc0xpc3QucmVtb3ZlKCd0ZXh0LXN1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluaXRMaWNlbmNlQ29weSgpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEFjY291bnRTZWN1cml0eUxpY2Vuc2VVc2FnZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEFjY291bnRTZWN1cml0eUxpY2Vuc2VVc2FnZSIsImluaXRMaWNlbmNlQ29weSIsIktUVXRpbCIsImVhY2giLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJ0ciIsImNsb3Nlc3QiLCJsaWNlbnNlIiwiZmluZCIsImNsaXBib2FyZCIsIkNsaXBib2FyZEpTIiwidGFyZ2V0IiwidGV4dCIsImlubmVySFRNTCIsIm9uIiwiZSIsInN2Z0ljb24iLCJxdWVyeVNlbGVjdG9yIiwiY2hlY2tJY29uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsInJlbW92ZUNoaWxkIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/security/license-usage.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/security/license-usage.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=license-usage.js.map