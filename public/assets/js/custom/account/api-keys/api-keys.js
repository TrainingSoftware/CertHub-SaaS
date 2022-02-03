/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/account/api-keys/api-keys.js ***!
  \***************************************************************************************/


// Class definition
var KTAccountAPIKeys = function () {
    // Private functions
    var initLicenceCopy = function() {
        KTUtil.each(document.querySelectorAll('#kt_api_keys_table [data-action="copy"]'), function(button) {
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
    KTAccountAPIKeys.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/account/api-keys/api-keys.js":
/*!**************************************************************!*\
  !*** ./resources/src/js/custom/account/api-keys/api-keys.js ***!
  \**************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAccountAPIKeys = function () {\n  // Private functions\n  var initLicenceCopy = function initLicenceCopy() {\n    KTUtil.each(document.querySelectorAll('#kt_api_keys_table [data-action=\"copy\"]'), function (button) {\n      var tr = button.closest('tr');\n      var license = KTUtil.find(tr, '[data-bs-target=\"license\"]');\n      var clipboard = new ClipboardJS(button, {\n        target: license,\n        text: function text() {\n          return license.innerHTML;\n        }\n      });\n      clipboard.on('success', function (e) {\n        // Icons\n        var svgIcon = button.querySelector('.svg-icon');\n        var checkIcon = button.querySelector('.bi.bi-check'); // exit if check icon is already shown\n\n        if (checkIcon) {\n          return;\n        } // Create check icon\n\n\n        checkIcon = document.createElement('i');\n        checkIcon.classList.add('bi');\n        checkIcon.classList.add('bi-check');\n        checkIcon.classList.add('fs-2x'); // Append check icon\n\n        button.appendChild(checkIcon); // Highlight target\n\n        license.classList.add('text-success'); // Hide copy icon\n\n        svgIcon.classList.add('d-none'); // Set 3 seconds timeout to hide the check icon and show copy icon back\n\n        setTimeout(function () {\n          // Remove check icon\n          svgIcon.classList.remove('d-none'); // Show check icon back\n\n          button.removeChild(checkIcon); // Remove highlight\n\n          license.classList.remove('text-success');\n        }, 3000);\n      });\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initLicenceCopy();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAccountAPIKeys.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L2FwaS1rZXlzL2FwaS1rZXlzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVk7QUFDL0I7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDN0JDLElBQUFBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLHlDQUExQixDQUFaLEVBQWtGLFVBQVNDLE1BQVQsRUFBaUI7QUFDL0YsVUFBSUMsRUFBRSxHQUFHRCxNQUFNLENBQUNFLE9BQVAsQ0FBZSxJQUFmLENBQVQ7QUFDQSxVQUFJQyxPQUFPLEdBQUdQLE1BQU0sQ0FBQ1EsSUFBUCxDQUFZSCxFQUFaLEVBQWdCLDRCQUFoQixDQUFkO0FBRUEsVUFBSUksU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JOLE1BQWhCLEVBQXdCO0FBQ3BDTyxRQUFBQSxNQUFNLEVBQUVKLE9BRDRCO0FBRXBDSyxRQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYixpQkFBT0wsT0FBTyxDQUFDTSxTQUFmO0FBQ0g7QUFKbUMsT0FBeEIsQ0FBaEI7QUFPQUosTUFBQUEsU0FBUyxDQUFDSyxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxDQUFULEVBQVk7QUFDaEM7QUFDQSxZQUFJQyxPQUFPLEdBQUdaLE1BQU0sQ0FBQ2EsYUFBUCxDQUFxQixXQUFyQixDQUFkO0FBQ0EsWUFBSUMsU0FBUyxHQUFHZCxNQUFNLENBQUNhLGFBQVAsQ0FBcUIsY0FBckIsQ0FBaEIsQ0FIZ0MsQ0FLaEM7O0FBQ0EsWUFBSUMsU0FBSixFQUFlO0FBQ1o7QUFDRixTQVIrQixDQVVoQzs7O0FBQ0FBLFFBQUFBLFNBQVMsR0FBR2hCLFFBQVEsQ0FBQ2lCLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBWjtBQUNBRCxRQUFBQSxTQUFTLENBQUNFLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLElBQXhCO0FBQ0FILFFBQUFBLFNBQVMsQ0FBQ0UsU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsVUFBeEI7QUFDQUgsUUFBQUEsU0FBUyxDQUFDRSxTQUFWLENBQW9CQyxHQUFwQixDQUF3QixPQUF4QixFQWRnQyxDQWdCaEM7O0FBQ0FqQixRQUFBQSxNQUFNLENBQUNrQixXQUFQLENBQW1CSixTQUFuQixFQWpCZ0MsQ0FtQmhDOztBQUNBWCxRQUFBQSxPQUFPLENBQUNhLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLGNBQXRCLEVBcEJnQyxDQXNCaEM7O0FBQ0FMLFFBQUFBLE9BQU8sQ0FBQ0ksU0FBUixDQUFrQkMsR0FBbEIsQ0FBc0IsUUFBdEIsRUF2QmdDLENBeUJoQzs7QUFDQUUsUUFBQUEsVUFBVSxDQUFDLFlBQVc7QUFDbEI7QUFDQVAsVUFBQUEsT0FBTyxDQUFDSSxTQUFSLENBQWtCSSxNQUFsQixDQUF5QixRQUF6QixFQUZrQixDQUdsQjs7QUFDQXBCLFVBQUFBLE1BQU0sQ0FBQ3FCLFdBQVAsQ0FBbUJQLFNBQW5CLEVBSmtCLENBTWxCOztBQUNBWCxVQUFBQSxPQUFPLENBQUNhLFNBQVIsQ0FBa0JJLE1BQWxCLENBQXlCLGNBQXpCO0FBQ0gsU0FSUyxFQVFQLElBUk8sQ0FBVjtBQVNILE9BbkNEO0FBb0NILEtBL0NEO0FBZ0RILEdBakRELENBRitCLENBcUQvQjs7O0FBQ0EsU0FBTztBQUNIRSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZDNCLE1BQUFBLGVBQWU7QUFDbEI7QUFIRSxHQUFQO0FBS0gsQ0EzRHNCLEVBQXZCLEMsQ0E2REE7OztBQUNBQyxNQUFNLENBQUMyQixrQkFBUCxDQUEwQixZQUFXO0FBQ2pDN0IsRUFBQUEsZ0JBQWdCLENBQUM0QixJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hY2NvdW50L2FwaS1rZXlzL2FwaS1rZXlzLmpzPzk4ZjUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEFjY291bnRBUElLZXlzID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXRMaWNlbmNlQ29weSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwuZWFjaChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcja3RfYXBpX2tleXNfdGFibGUgW2RhdGEtYWN0aW9uPVwiY29weVwiXScpLCBmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICAgIHZhciB0ciA9IGJ1dHRvbi5jbG9zZXN0KCd0cicpO1xuICAgICAgICAgICAgdmFyIGxpY2Vuc2UgPSBLVFV0aWwuZmluZCh0ciwgJ1tkYXRhLWJzLXRhcmdldD1cImxpY2Vuc2VcIl0nKTtcblxuICAgICAgICAgICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmRKUyhidXR0b24sIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IGxpY2Vuc2UsXG4gICAgICAgICAgICAgICAgdGV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsaWNlbnNlLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgICAgIGNsaXBib2FyZC5vbignc3VjY2VzcycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJY29uc1xuICAgICAgICAgICAgICAgIHZhciBzdmdJY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5zdmctaWNvbicpOyAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tJY29uID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5iaS5iaS1jaGVjaycpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC8vIGV4aXQgaWYgY2hlY2sgaWNvbiBpcyBhbHJlYWR5IHNob3duXG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrSWNvbikge1xuICAgICAgICAgICAgICAgICAgIHJldHVybjsgIFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBjaGVjayBpY29uXG4gICAgICAgICAgICAgICAgY2hlY2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaScpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdiaS1jaGVjaycpO1xuICAgICAgICAgICAgICAgIGNoZWNrSWNvbi5jbGFzc0xpc3QuYWRkKCdmcy0yeCcpO1xuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIGNoZWNrIGljb25cbiAgICAgICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2hlY2tJY29uKTtcblxuICAgICAgICAgICAgICAgIC8vIEhpZ2hsaWdodCB0YXJnZXRcbiAgICAgICAgICAgICAgICBsaWNlbnNlLmNsYXNzTGlzdC5hZGQoJ3RleHQtc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAgICAgLy8gSGlkZSBjb3B5IGljb25cbiAgICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2V0IDMgc2Vjb25kcyB0aW1lb3V0IHRvIGhpZGUgdGhlIGNoZWNrIGljb24gYW5kIHNob3cgY29weSBpY29uIGJhY2tcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgY2hlY2sgaWNvblxuICAgICAgICAgICAgICAgICAgICBzdmdJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGNoZWNrIGljb24gYmFja1xuICAgICAgICAgICAgICAgICAgICBidXR0b24ucmVtb3ZlQ2hpbGQoY2hlY2tJY29uKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaGlnaGxpZ2h0XG4gICAgICAgICAgICAgICAgICAgIGxpY2Vuc2UuY2xhc3NMaXN0LnJlbW92ZSgndGV4dC1zdWNjZXNzJyk7XG4gICAgICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0TGljZW5jZUNvcHkoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RBY2NvdW50QVBJS2V5cy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEFjY291bnRBUElLZXlzIiwiaW5pdExpY2VuY2VDb3B5IiwiS1RVdGlsIiwiZWFjaCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInRyIiwiY2xvc2VzdCIsImxpY2Vuc2UiLCJmaW5kIiwiY2xpcGJvYXJkIiwiQ2xpcGJvYXJkSlMiLCJ0YXJnZXQiLCJ0ZXh0IiwiaW5uZXJIVE1MIiwib24iLCJlIiwic3ZnSWNvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjaGVja0ljb24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/account/api-keys/api-keys.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/account/api-keys/api-keys.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=api-keys.js.map