/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!****************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/chat/chat.js ***!
  \****************************************************************************/


// Class definition
var KTAppChat = function () {
	// Private functions
	var handeSend = function (element) {
		if (!element) {
			return;
		}

		// Handle send
		KTUtil.on(element, '[data-kt-element="input"]', 'keydown', function(e) {
			if (e.keyCode == 13) {
				handeMessaging(element);
				e.preventDefault();

				return false;
			}
		});

		KTUtil.on(element, '[data-kt-element="send"]', 'click', function(e) {
			handeMessaging(element);
		});
	}

	var handeMessaging = function(element) {
		var messages = element.querySelector('[data-kt-element="messages"]');
		var input = element.querySelector('[data-kt-element="input"]');

        if (input.value.length === 0 ) {
            return;
        }

		var messageOutTemplate = messages.querySelector('[data-kt-element="template-out"]');
		var messageInTemplate = messages.querySelector('[data-kt-element="template-in"]');
		var message;
		
		// Show example outgoing message
		message = messageOutTemplate.cloneNode(true);
		message.classList.remove('d-none');
		message.querySelector('[data-kt-element="message-text"]').innerText = input.value;		
		input.value = '';
		messages.appendChild(message);
		messages.scrollTop = messages.scrollHeight;
		
		
		setTimeout(function() {			
			// Show example incoming message
			message = messageInTemplate.cloneNode(true);			
			message.classList.remove('d-none');
			message.querySelector('[data-kt-element="message-text"]').innerText = 'Thank you for your awesome support!';
			messages.appendChild(message);
			messages.scrollTop = messages.scrollHeight;
		}, 2000);
	}

	// Public methods
	return {
		init: function(element) {
			handeSend(element);
        }
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
	// Init inline chat messenger
    KTAppChat.init(document.querySelector('#kt_chat_messenger'));

	// Init drawer chat messenger
	KTAppChat.init(document.querySelector('#kt_drawer_chat_messenger'));
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/chat/chat.js":
/*!***************************************************!*\
  !*** ./resources/src/js/custom/apps/chat/chat.js ***!
  \***************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppChat = function () {\n  // Private functions\n  var handeSend = function handeSend(element) {\n    if (!element) {\n      return;\n    } // Handle send\n\n\n    KTUtil.on(element, '[data-kt-element=\"input\"]', 'keydown', function (e) {\n      if (e.keyCode == 13) {\n        handeMessaging(element);\n        e.preventDefault();\n        return false;\n      }\n    });\n    KTUtil.on(element, '[data-kt-element=\"send\"]', 'click', function (e) {\n      handeMessaging(element);\n    });\n  };\n\n  var handeMessaging = function handeMessaging(element) {\n    var messages = element.querySelector('[data-kt-element=\"messages\"]');\n    var input = element.querySelector('[data-kt-element=\"input\"]');\n\n    if (input.value.length === 0) {\n      return;\n    }\n\n    var messageOutTemplate = messages.querySelector('[data-kt-element=\"template-out\"]');\n    var messageInTemplate = messages.querySelector('[data-kt-element=\"template-in\"]');\n    var message; // Show example outgoing message\n\n    message = messageOutTemplate.cloneNode(true);\n    message.classList.remove('d-none');\n    message.querySelector('[data-kt-element=\"message-text\"]').innerText = input.value;\n    input.value = '';\n    messages.appendChild(message);\n    messages.scrollTop = messages.scrollHeight;\n    setTimeout(function () {\n      // Show example incoming message\n      message = messageInTemplate.cloneNode(true);\n      message.classList.remove('d-none');\n      message.querySelector('[data-kt-element=\"message-text\"]').innerText = 'Thank you for your awesome support!';\n      messages.appendChild(message);\n      messages.scrollTop = messages.scrollHeight;\n    }, 2000);\n  }; // Public methods\n\n\n  return {\n    init: function init(element) {\n      handeSend(element);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  // Init inline chat messenger\n  KTAppChat.init(document.querySelector('#kt_chat_messenger')); // Init drawer chat messenger\n\n  KTAppChat.init(document.querySelector('#kt_drawer_chat_messenger'));\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2NoYXQvY2hhdC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxTQUFTLEdBQUcsWUFBWTtBQUMzQjtBQUNBLE1BQUlDLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQVVDLE9BQVYsRUFBbUI7QUFDbEMsUUFBSSxDQUFDQSxPQUFMLEVBQWM7QUFDYjtBQUNBLEtBSGlDLENBS2xDOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVGLE9BQVYsRUFBbUIsMkJBQW5CLEVBQWdELFNBQWhELEVBQTJELFVBQVNHLENBQVQsRUFBWTtBQUN0RSxVQUFJQSxDQUFDLENBQUNDLE9BQUYsSUFBYSxFQUFqQixFQUFxQjtBQUNwQkMsUUFBQUEsY0FBYyxDQUFDTCxPQUFELENBQWQ7QUFDQUcsUUFBQUEsQ0FBQyxDQUFDRyxjQUFGO0FBRUEsZUFBTyxLQUFQO0FBQ0E7QUFDRCxLQVBEO0FBU0FMLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVRixPQUFWLEVBQW1CLDBCQUFuQixFQUErQyxPQUEvQyxFQUF3RCxVQUFTRyxDQUFULEVBQVk7QUFDbkVFLE1BQUFBLGNBQWMsQ0FBQ0wsT0FBRCxDQUFkO0FBQ0EsS0FGRDtBQUdBLEdBbEJEOztBQW9CQSxNQUFJSyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQVNMLE9BQVQsRUFBa0I7QUFDdEMsUUFBSU8sUUFBUSxHQUFHUCxPQUFPLENBQUNRLGFBQVIsQ0FBc0IsOEJBQXRCLENBQWY7QUFDQSxRQUFJQyxLQUFLLEdBQUdULE9BQU8sQ0FBQ1EsYUFBUixDQUFzQiwyQkFBdEIsQ0FBWjs7QUFFTSxRQUFJQyxLQUFLLENBQUNDLEtBQU4sQ0FBWUMsTUFBWixLQUF1QixDQUEzQixFQUErQjtBQUMzQjtBQUNIOztBQUVQLFFBQUlDLGtCQUFrQixHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0NBQXZCLENBQXpCO0FBQ0EsUUFBSUssaUJBQWlCLEdBQUdOLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixpQ0FBdkIsQ0FBeEI7QUFDQSxRQUFJTSxPQUFKLENBVnNDLENBWXRDOztBQUNBQSxJQUFBQSxPQUFPLEdBQUdGLGtCQUFrQixDQUFDRyxTQUFuQixDQUE2QixJQUE3QixDQUFWO0FBQ0FELElBQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQUgsSUFBQUEsT0FBTyxDQUFDTixhQUFSLENBQXNCLGtDQUF0QixFQUEwRFUsU0FBMUQsR0FBc0VULEtBQUssQ0FBQ0MsS0FBNUU7QUFDQUQsSUFBQUEsS0FBSyxDQUFDQyxLQUFOLEdBQWMsRUFBZDtBQUNBSCxJQUFBQSxRQUFRLENBQUNZLFdBQVQsQ0FBcUJMLE9BQXJCO0FBQ0FQLElBQUFBLFFBQVEsQ0FBQ2EsU0FBVCxHQUFxQmIsUUFBUSxDQUFDYyxZQUE5QjtBQUdBQyxJQUFBQSxVQUFVLENBQUMsWUFBVztBQUNyQjtBQUNBUixNQUFBQSxPQUFPLEdBQUdELGlCQUFpQixDQUFDRSxTQUFsQixDQUE0QixJQUE1QixDQUFWO0FBQ0FELE1BQUFBLE9BQU8sQ0FBQ0UsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDQUgsTUFBQUEsT0FBTyxDQUFDTixhQUFSLENBQXNCLGtDQUF0QixFQUEwRFUsU0FBMUQsR0FBc0UscUNBQXRFO0FBQ0FYLE1BQUFBLFFBQVEsQ0FBQ1ksV0FBVCxDQUFxQkwsT0FBckI7QUFDQVAsTUFBQUEsUUFBUSxDQUFDYSxTQUFULEdBQXFCYixRQUFRLENBQUNjLFlBQTlCO0FBQ0EsS0FQUyxFQU9QLElBUE8sQ0FBVjtBQVFBLEdBN0JELENBdEIyQixDQXFEM0I7OztBQUNBLFNBQU87QUFDTkUsSUFBQUEsSUFBSSxFQUFFLGNBQVN2QixPQUFULEVBQWtCO0FBQ3ZCRCxNQUFBQSxTQUFTLENBQUNDLE9BQUQsQ0FBVDtBQUNNO0FBSEQsR0FBUDtBQUtBLENBM0RlLEVBQWhCLEMsQ0E2REE7OztBQUNBQyxNQUFNLENBQUN1QixrQkFBUCxDQUEwQixZQUFZO0FBQ3JDO0FBQ0cxQixFQUFBQSxTQUFTLENBQUN5QixJQUFWLENBQWVFLFFBQVEsQ0FBQ2pCLGFBQVQsQ0FBdUIsb0JBQXZCLENBQWYsRUFGa0MsQ0FJckM7O0FBQ0FWLEVBQUFBLFNBQVMsQ0FBQ3lCLElBQVYsQ0FBZUUsUUFBUSxDQUFDakIsYUFBVCxDQUF1QiwyQkFBdkIsQ0FBZjtBQUNBLENBTkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2NoYXQvY2hhdC5qcz8yNGM5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RBcHBDaGF0ID0gZnVuY3Rpb24gKCkge1xuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xuXHR2YXIgaGFuZGVTZW5kID0gZnVuY3Rpb24gKGVsZW1lbnQpIHtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgc2VuZFxuXHRcdEtUVXRpbC5vbihlbGVtZW50LCAnW2RhdGEta3QtZWxlbWVudD1cImlucHV0XCJdJywgJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRpZiAoZS5rZXlDb2RlID09IDEzKSB7XG5cdFx0XHRcdGhhbmRlTWVzc2FnaW5nKGVsZW1lbnQpO1xuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0S1RVdGlsLm9uKGVsZW1lbnQsICdbZGF0YS1rdC1lbGVtZW50PVwic2VuZFwiXScsICdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGhhbmRlTWVzc2FnaW5nKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGhhbmRlTWVzc2FnaW5nID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdHZhciBtZXNzYWdlcyA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cIm1lc3NhZ2VzXCJdJyk7XG5cdFx0dmFyIGlucHV0ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiaW5wdXRcIl0nKTtcblxuICAgICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID09PSAwICkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cblx0XHR2YXIgbWVzc2FnZU91dFRlbXBsYXRlID0gbWVzc2FnZXMucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInRlbXBsYXRlLW91dFwiXScpO1xuXHRcdHZhciBtZXNzYWdlSW5UZW1wbGF0ZSA9IG1lc3NhZ2VzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJ0ZW1wbGF0ZS1pblwiXScpO1xuXHRcdHZhciBtZXNzYWdlO1xuXHRcdFxuXHRcdC8vIFNob3cgZXhhbXBsZSBvdXRnb2luZyBtZXNzYWdlXG5cdFx0bWVzc2FnZSA9IG1lc3NhZ2VPdXRUZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG5cdFx0bWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcblx0XHRtZXNzYWdlLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJtZXNzYWdlLXRleHRcIl0nKS5pbm5lclRleHQgPSBpbnB1dC52YWx1ZTtcdFx0XG5cdFx0aW5wdXQudmFsdWUgPSAnJztcblx0XHRtZXNzYWdlcy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRtZXNzYWdlcy5zY3JvbGxUb3AgPSBtZXNzYWdlcy5zY3JvbGxIZWlnaHQ7XG5cdFx0XG5cdFx0XG5cdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcdFx0XHRcblx0XHRcdC8vIFNob3cgZXhhbXBsZSBpbmNvbWluZyBtZXNzYWdlXG5cdFx0XHRtZXNzYWdlID0gbWVzc2FnZUluVGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1x0XHRcdFxuXHRcdFx0bWVzc2FnZS5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcblx0XHRcdG1lc3NhZ2UucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cIm1lc3NhZ2UtdGV4dFwiXScpLmlubmVyVGV4dCA9ICdUaGFuayB5b3UgZm9yIHlvdXIgYXdlc29tZSBzdXBwb3J0ISc7XG5cdFx0XHRtZXNzYWdlcy5hcHBlbmRDaGlsZChtZXNzYWdlKTtcblx0XHRcdG1lc3NhZ2VzLnNjcm9sbFRvcCA9IG1lc3NhZ2VzLnNjcm9sbEhlaWdodDtcblx0XHR9LCAyMDAwKTtcblx0fVxuXG5cdC8vIFB1YmxpYyBtZXRob2RzXG5cdHJldHVybiB7XG5cdFx0aW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdFx0aGFuZGVTZW5kKGVsZW1lbnQpO1xuICAgICAgICB9XG5cdH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcblx0Ly8gSW5pdCBpbmxpbmUgY2hhdCBtZXNzZW5nZXJcbiAgICBLVEFwcENoYXQuaW5pdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY2hhdF9tZXNzZW5nZXInKSk7XG5cblx0Ly8gSW5pdCBkcmF3ZXIgY2hhdCBtZXNzZW5nZXJcblx0S1RBcHBDaGF0LmluaXQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RyYXdlcl9jaGF0X21lc3NlbmdlcicpKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUQXBwQ2hhdCIsImhhbmRlU2VuZCIsImVsZW1lbnQiLCJLVFV0aWwiLCJvbiIsImUiLCJrZXlDb2RlIiwiaGFuZGVNZXNzYWdpbmciLCJwcmV2ZW50RGVmYXVsdCIsIm1lc3NhZ2VzIiwicXVlcnlTZWxlY3RvciIsImlucHV0IiwidmFsdWUiLCJsZW5ndGgiLCJtZXNzYWdlT3V0VGVtcGxhdGUiLCJtZXNzYWdlSW5UZW1wbGF0ZSIsIm1lc3NhZ2UiLCJjbG9uZU5vZGUiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInNjcm9sbFRvcCIsInNjcm9sbEhlaWdodCIsInNldFRpbWVvdXQiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIiwiZG9jdW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/chat/chat.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/chat/chat.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=chat.js.map