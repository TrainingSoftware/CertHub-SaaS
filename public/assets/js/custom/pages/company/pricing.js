/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***********************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/company/pricing.js ***!
  \***********************************************************************************/


// Class definition
var KTGeneralPricing = function () {
    // Private variables
    var element;
	var planPeriodMonthButton;
	var planPeriodAnnualButton;

	var changePlanPrices = function(type) {
		var items = [].slice.call(element.querySelectorAll('[data-kt-plan-price-month]'));

		items.map(function (item) {
			var monthPrice = item.getAttribute('data-kt-plan-price-month');
			var annualPrice = item.getAttribute('data-kt-plan-price-annual');

			if ( type === 'month' ) {
				item.innerHTML = monthPrice;
			} else if ( type === 'annual' ) {
				item.innerHTML = annualPrice;
			}
		});
	}

    var handlePlanPeriodSelection = function(e) {

        // Handle period change
        planPeriodMonthButton.addEventListener('click', function (e) {
            e.preventDefault();

            changePlanPrices('month');
        });

		planPeriodAnnualButton.addEventListener('click', function (e) {
            e.preventDefault();
            
            changePlanPrices('annual');
        });
    }

    // Public methods
    return {
        init: function () {
            element = document.querySelector('#kt_pricing');
			planPeriodMonthButton = element.querySelector('[data-kt-plan="month"]');
			planPeriodAnnualButton = element.querySelector('[data-kt-plan="annual"]');

            // Handlers
            handlePlanPeriodSelection();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralPricing.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/company/pricing.js":
/*!**********************************************************!*\
  !*** ./resources/src/js/custom/pages/company/pricing.js ***!
  \**********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralPricing = function () {\n  // Private variables\n  var element;\n  var planPeriodMonthButton;\n  var planPeriodAnnualButton;\n\n  var changePlanPrices = function changePlanPrices(type) {\n    var items = [].slice.call(element.querySelectorAll('[data-kt-plan-price-month]'));\n    items.map(function (item) {\n      var monthPrice = item.getAttribute('data-kt-plan-price-month');\n      var annualPrice = item.getAttribute('data-kt-plan-price-annual');\n\n      if (type === 'month') {\n        item.innerHTML = monthPrice;\n      } else if (type === 'annual') {\n        item.innerHTML = annualPrice;\n      }\n    });\n  };\n\n  var handlePlanPeriodSelection = function handlePlanPeriodSelection(e) {\n    // Handle period change\n    planPeriodMonthButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      changePlanPrices('month');\n    });\n    planPeriodAnnualButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      changePlanPrices('annual');\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      element = document.querySelector('#kt_pricing');\n      planPeriodMonthButton = element.querySelector('[data-kt-plan=\"month\"]');\n      planPeriodAnnualButton = element.querySelector('[data-kt-plan=\"annual\"]'); // Handlers\n\n      handlePlanPeriodSelection();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralPricing.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9jb21wYW55L3ByaWNpbmcuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUMvQjtBQUNBLE1BQUlDLE9BQUo7QUFDSCxNQUFJQyxxQkFBSjtBQUNBLE1BQUlDLHNCQUFKOztBQUVBLE1BQUlDLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBU0MsSUFBVCxFQUFlO0FBQ3JDLFFBQUlDLEtBQUssR0FBRyxHQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY1AsT0FBTyxDQUFDUSxnQkFBUixDQUF5Qiw0QkFBekIsQ0FBZCxDQUFaO0FBRUFILElBQUFBLEtBQUssQ0FBQ0ksR0FBTixDQUFVLFVBQVVDLElBQVYsRUFBZ0I7QUFDekIsVUFBSUMsVUFBVSxHQUFHRCxJQUFJLENBQUNFLFlBQUwsQ0FBa0IsMEJBQWxCLENBQWpCO0FBQ0EsVUFBSUMsV0FBVyxHQUFHSCxJQUFJLENBQUNFLFlBQUwsQ0FBa0IsMkJBQWxCLENBQWxCOztBQUVBLFVBQUtSLElBQUksS0FBSyxPQUFkLEVBQXdCO0FBQ3ZCTSxRQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUJILFVBQWpCO0FBQ0EsT0FGRCxNQUVPLElBQUtQLElBQUksS0FBSyxRQUFkLEVBQXlCO0FBQy9CTSxRQUFBQSxJQUFJLENBQUNJLFNBQUwsR0FBaUJELFdBQWpCO0FBQ0E7QUFDRCxLQVREO0FBVUEsR0FiRDs7QUFlRyxNQUFJRSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQVNDLENBQVQsRUFBWTtBQUV4QztBQUNBZixJQUFBQSxxQkFBcUIsQ0FBQ2dCLGdCQUF0QixDQUF1QyxPQUF2QyxFQUFnRCxVQUFVRCxDQUFWLEVBQWE7QUFDekRBLE1BQUFBLENBQUMsQ0FBQ0UsY0FBRjtBQUVBZixNQUFBQSxnQkFBZ0IsQ0FBQyxPQUFELENBQWhCO0FBQ0gsS0FKRDtBQU1ORCxJQUFBQSxzQkFBc0IsQ0FBQ2UsZ0JBQXZCLENBQXdDLE9BQXhDLEVBQWlELFVBQVVELENBQVYsRUFBYTtBQUNwREEsTUFBQUEsQ0FBQyxDQUFDRSxjQUFGO0FBRUFmLE1BQUFBLGdCQUFnQixDQUFDLFFBQUQsQ0FBaEI7QUFDSCxLQUpQO0FBS0csR0FkRCxDQXJCK0IsQ0FxQy9COzs7QUFDQSxTQUFPO0FBQ0hnQixJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZG5CLE1BQUFBLE9BQU8sR0FBR29CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFWO0FBQ1RwQixNQUFBQSxxQkFBcUIsR0FBR0QsT0FBTyxDQUFDcUIsYUFBUixDQUFzQix3QkFBdEIsQ0FBeEI7QUFDQW5CLE1BQUFBLHNCQUFzQixHQUFHRixPQUFPLENBQUNxQixhQUFSLENBQXNCLHlCQUF0QixDQUF6QixDQUh1QixDQUtkOztBQUNBTixNQUFBQSx5QkFBeUI7QUFDNUI7QUFSRSxHQUFQO0FBVUgsQ0FoRHNCLEVBQXZCLEMsQ0FrREE7OztBQUNBTyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakN4QixFQUFBQSxnQkFBZ0IsQ0FBQ29CLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL3BhZ2VzL2NvbXBhbnkvcHJpY2luZy5qcz82Y2U4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsUHJpY2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50O1xuXHR2YXIgcGxhblBlcmlvZE1vbnRoQnV0dG9uO1xuXHR2YXIgcGxhblBlcmlvZEFubnVhbEJ1dHRvbjtcblxuXHR2YXIgY2hhbmdlUGxhblByaWNlcyA9IGZ1bmN0aW9uKHR5cGUpIHtcblx0XHR2YXIgaXRlbXMgPSBbXS5zbGljZS5jYWxsKGVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtcGxhbi1wcmljZS1tb250aF0nKSk7XG5cblx0XHRpdGVtcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBtb250aFByaWNlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtcGxhbi1wcmljZS1tb250aCcpO1xuXHRcdFx0dmFyIGFubnVhbFByaWNlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEta3QtcGxhbi1wcmljZS1hbm51YWwnKTtcblxuXHRcdFx0aWYgKCB0eXBlID09PSAnbW9udGgnICkge1xuXHRcdFx0XHRpdGVtLmlubmVySFRNTCA9IG1vbnRoUHJpY2U7XG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSAnYW5udWFsJyApIHtcblx0XHRcdFx0aXRlbS5pbm5lckhUTUwgPSBhbm51YWxQcmljZTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG4gICAgdmFyIGhhbmRsZVBsYW5QZXJpb2RTZWxlY3Rpb24gPSBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgLy8gSGFuZGxlIHBlcmlvZCBjaGFuZ2VcbiAgICAgICAgcGxhblBlcmlvZE1vbnRoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY2hhbmdlUGxhblByaWNlcygnbW9udGgnKTtcbiAgICAgICAgfSk7XG5cblx0XHRwbGFuUGVyaW9kQW5udWFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY2hhbmdlUGxhblByaWNlcygnYW5udWFsJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9wcmljaW5nJyk7XG5cdFx0XHRwbGFuUGVyaW9kTW9udGhCdXR0b24gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXBsYW49XCJtb250aFwiXScpO1xuXHRcdFx0cGxhblBlcmlvZEFubnVhbEJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtcGxhbj1cImFubnVhbFwiXScpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGVyc1xuICAgICAgICAgICAgaGFuZGxlUGxhblBlcmlvZFNlbGVjdGlvbigpO1xuICAgICAgICB9XG4gICAgfVxufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEdlbmVyYWxQcmljaW5nLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbFByaWNpbmciLCJlbGVtZW50IiwicGxhblBlcmlvZE1vbnRoQnV0dG9uIiwicGxhblBlcmlvZEFubnVhbEJ1dHRvbiIsImNoYW5nZVBsYW5QcmljZXMiLCJ0eXBlIiwiaXRlbXMiLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWFwIiwiaXRlbSIsIm1vbnRoUHJpY2UiLCJnZXRBdHRyaWJ1dGUiLCJhbm51YWxQcmljZSIsImlubmVySFRNTCIsImhhbmRsZVBsYW5QZXJpb2RTZWxlY3Rpb24iLCJlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/company/pricing.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/pages/company/pricing.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=pricing.js.map