/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/modals/share-earn.js ***!
  \*******************************************************************************/


// Class definition
var KTModalShareEarn = function () {
    // Private functions
    var handleForm = function() {
        var button = document.querySelector('#kt_share_earn_link_copy_button');
        var input = document.querySelector('#kt_share_earn_link_input');
        var clipboard = new ClipboardJS(button);

        if (!clipboard) {
            return;
        }

        //  Copy text to clipboard. For more info check the plugin's documentation: https://clipboardjs.com/
        clipboard.on('success', function(e) {
            var buttonCaption = button.innerHTML;
            //Add bgcolor
            input.classList.add('bg-success');
            input.classList.add('text-inverse-success');

            button.innerHTML = 'Copied!';

            setTimeout(function() {
                button.innerHTML = buttonCaption;

                // Remove bgcolor
                input.classList.remove('bg-success'); 
                input.classList.remove('text-inverse-success'); 
            }, 3000);  // 3seconds

            e.clearSelection();
        });
    }

    // Public methods
    return {
        init: function () {
            handleForm();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTModalShareEarn.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/modals/share-earn.js":
/*!******************************************************!*\
  !*** ./resources/src/js/custom/modals/share-earn.js ***!
  \******************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTModalShareEarn = function () {\n  // Private functions\n  var handleForm = function handleForm() {\n    var button = document.querySelector('#kt_share_earn_link_copy_button');\n    var input = document.querySelector('#kt_share_earn_link_input');\n    var clipboard = new ClipboardJS(button);\n\n    if (!clipboard) {\n      return;\n    } //  Copy text to clipboard. For more info check the plugin's documentation: https://clipboardjs.com/\n\n\n    clipboard.on('success', function (e) {\n      var buttonCaption = button.innerHTML; //Add bgcolor\n\n      input.classList.add('bg-success');\n      input.classList.add('text-inverse-success');\n      button.innerHTML = 'Copied!';\n      setTimeout(function () {\n        button.innerHTML = buttonCaption; // Remove bgcolor\n\n        input.classList.remove('bg-success');\n        input.classList.remove('text-inverse-success');\n      }, 3000); // 3seconds\n\n      e.clearSelection();\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      handleForm();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTModalShareEarn.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9tb2RhbHMvc2hhcmUtZWFybi5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxnQkFBZ0IsR0FBRyxZQUFZO0FBQy9CO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBVztBQUN4QixRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQ0FBdkIsQ0FBYjtBQUNBLFFBQUlDLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQUFaO0FBQ0EsUUFBSUUsU0FBUyxHQUFHLElBQUlDLFdBQUosQ0FBZ0JMLE1BQWhCLENBQWhCOztBQUVBLFFBQUksQ0FBQ0ksU0FBTCxFQUFnQjtBQUNaO0FBQ0gsS0FQdUIsQ0FTeEI7OztBQUNBQSxJQUFBQSxTQUFTLENBQUNFLEVBQVYsQ0FBYSxTQUFiLEVBQXdCLFVBQVNDLENBQVQsRUFBWTtBQUNoQyxVQUFJQyxhQUFhLEdBQUdSLE1BQU0sQ0FBQ1MsU0FBM0IsQ0FEZ0MsQ0FFaEM7O0FBQ0FOLE1BQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkMsR0FBaEIsQ0FBb0IsWUFBcEI7QUFDQVIsTUFBQUEsS0FBSyxDQUFDTyxTQUFOLENBQWdCQyxHQUFoQixDQUFvQixzQkFBcEI7QUFFQVgsTUFBQUEsTUFBTSxDQUFDUyxTQUFQLEdBQW1CLFNBQW5CO0FBRUFHLE1BQUFBLFVBQVUsQ0FBQyxZQUFXO0FBQ2xCWixRQUFBQSxNQUFNLENBQUNTLFNBQVAsR0FBbUJELGFBQW5CLENBRGtCLENBR2xCOztBQUNBTCxRQUFBQSxLQUFLLENBQUNPLFNBQU4sQ0FBZ0JHLE1BQWhCLENBQXVCLFlBQXZCO0FBQ0FWLFFBQUFBLEtBQUssQ0FBQ08sU0FBTixDQUFnQkcsTUFBaEIsQ0FBdUIsc0JBQXZCO0FBQ0gsT0FOUyxFQU1QLElBTk8sQ0FBVixDQVJnQyxDQWNyQjs7QUFFWE4sTUFBQUEsQ0FBQyxDQUFDTyxjQUFGO0FBQ0gsS0FqQkQ7QUFrQkgsR0E1QkQsQ0FGK0IsQ0FnQy9COzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkaEIsTUFBQUEsVUFBVTtBQUNiO0FBSEUsR0FBUDtBQUtILENBdENzQixFQUF2QixDLENBd0NBOzs7QUFDQWlCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ25CLEVBQUFBLGdCQUFnQixDQUFDaUIsSUFBakI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vbW9kYWxzL3NoYXJlLWVhcm4uanM/MzM2OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUTW9kYWxTaGFyZUVhcm4gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgaGFuZGxlRm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3NoYXJlX2Vhcm5fbGlua19jb3B5X2J1dHRvbicpO1xuICAgICAgICB2YXIgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3Rfc2hhcmVfZWFybl9saW5rX2lucHV0Jyk7XG4gICAgICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkSlMoYnV0dG9uKTtcblxuICAgICAgICBpZiAoIWNsaXBib2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gIENvcHkgdGV4dCB0byBjbGlwYm9hcmQuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIGRvY3VtZW50YXRpb246IGh0dHBzOi8vY2xpcGJvYXJkanMuY29tL1xuICAgICAgICBjbGlwYm9hcmQub24oJ3N1Y2Nlc3MnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICB2YXIgYnV0dG9uQ2FwdGlvbiA9IGJ1dHRvbi5pbm5lckhUTUw7XG4gICAgICAgICAgICAvL0FkZCBiZ2NvbG9yXG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCdiZy1zdWNjZXNzJyk7XG4gICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QuYWRkKCd0ZXh0LWludmVyc2Utc3VjY2VzcycpO1xuXG4gICAgICAgICAgICBidXR0b24uaW5uZXJIVE1MID0gJ0NvcGllZCEnO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBidXR0b25DYXB0aW9uO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGJnY29sb3JcbiAgICAgICAgICAgICAgICBpbnB1dC5jbGFzc0xpc3QucmVtb3ZlKCdiZy1zdWNjZXNzJyk7IFxuICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTGlzdC5yZW1vdmUoJ3RleHQtaW52ZXJzZS1zdWNjZXNzJyk7IFxuICAgICAgICAgICAgfSwgMzAwMCk7ICAvLyAzc2Vjb25kc1xuXG4gICAgICAgICAgICBlLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVE1vZGFsU2hhcmVFYXJuLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUTW9kYWxTaGFyZUVhcm4iLCJoYW5kbGVGb3JtIiwiYnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXQiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmRKUyIsIm9uIiwiZSIsImJ1dHRvbkNhcHRpb24iLCJpbm5lckhUTUwiLCJjbGFzc0xpc3QiLCJhZGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiY2xlYXJTZWxlY3Rpb24iLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/modals/share-earn.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/modals/share-earn.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=share-earn.js.map