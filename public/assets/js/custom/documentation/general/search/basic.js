/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ../src/js/custom/documentation/general/search/basic.js ***!
  \**************************************************************/


// Class definition
var KTGeneralSearchBasicDemos = function() {
    // Private variables
    var element;
    var suggestionsElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;
    var searchObject;
    
    var modal;

    // Private functions
    var processs = function(search) {
        var timeout = setTimeout(function() {
            var number = KTUtil.getRandomInt(1, 6);

            // Hide recently viewed
            suggestionsElement.classList.add('d-none');

            if (number === 3) {
                // Hide results
                resultsElement.classList.add('d-none');
                // Show empty message 
                emptyElement.classList.remove('d-none');
            } else {
                // Show results
                resultsElement.classList.remove('d-none');
                // Hide empty message 
                emptyElement.classList.add('d-none');
            }                  

            // Complete search
            search.complete();
        }, 1500);
    }

    var clear = function(search) {
        // Show recently viewed
        suggestionsElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_docs_search_handler_basic');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            suggestionsElement = element.querySelector('[data-kt-search-element="suggestions"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);

            // Handle select
            KTUtil.on(element, '[data-kt-search-element="customer"]', 'click', function() {
                //modal.hide();
            });
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralSearchBasicDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/search/basic.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/search/basic.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralSearchBasicDemos = function () {\n  // Private variables\n  var element;\n  var suggestionsElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var searchObject;\n  var modal; // Private functions\n\n  var processs = function processs(search) {\n    var timeout = setTimeout(function () {\n      var number = KTUtil.getRandomInt(1, 6); // Hide recently viewed\n\n      suggestionsElement.classList.add('d-none');\n\n      if (number === 3) {\n        // Hide results\n        resultsElement.classList.add('d-none'); // Show empty message \n\n        emptyElement.classList.remove('d-none');\n      } else {\n        // Show results\n        resultsElement.classList.remove('d-none'); // Hide empty message \n\n        emptyElement.classList.add('d-none');\n      } // Complete search\n\n\n      search.complete();\n    }, 1500);\n  };\n\n  var clear = function clear(search) {\n    // Show recently viewed\n    suggestionsElement.classList.remove('d-none'); // Hide results\n\n    resultsElement.classList.add('d-none'); // Hide empty message \n\n    emptyElement.classList.add('d-none');\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_docs_search_handler_basic');\n\n      if (!element) {\n        return;\n      }\n\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      suggestionsElement = element.querySelector('[data-kt-search-element=\"suggestions\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]'); // Initialize search handler\n\n      searchObject = new KTSearch(element); // Search handler\n\n      searchObject.on('kt.search.process', processs); // Clear handler\n\n      searchObject.on('kt.search.clear', clear); // Handle select\n\n      KTUtil.on(element, '[data-kt-search-element=\"customer\"]', 'click', function () {//modal.hide();\n      });\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralSearchBasicDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvc2VhcmNoL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHlCQUF5QixHQUFHLFlBQVc7QUFDdkM7QUFDQSxNQUFJQyxPQUFKO0FBQ0EsTUFBSUMsa0JBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLFlBQUo7QUFDQSxNQUFJQyxZQUFKO0FBRUEsTUFBSUMsS0FBSixDQVR1QyxDQVd2Qzs7QUFDQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTQyxNQUFULEVBQWlCO0FBQzVCLFFBQUlDLE9BQU8sR0FBR0MsVUFBVSxDQUFDLFlBQVc7QUFDaEMsVUFBSUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFlBQVAsQ0FBb0IsQ0FBcEIsRUFBdUIsQ0FBdkIsQ0FBYixDQURnQyxDQUdoQzs7QUFDQVosTUFBQUEsa0JBQWtCLENBQUNhLFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQyxRQUFqQzs7QUFFQSxVQUFJSixNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNkO0FBQ0FULFFBQUFBLGNBQWMsQ0FBQ1ksU0FBZixDQUF5QkMsR0FBekIsQ0FBNkIsUUFBN0IsRUFGYyxDQUdkOztBQUNBWCxRQUFBQSxZQUFZLENBQUNVLFNBQWIsQ0FBdUJFLE1BQXZCLENBQThCLFFBQTlCO0FBQ0gsT0FMRCxNQUtPO0FBQ0g7QUFDQWQsUUFBQUEsY0FBYyxDQUFDWSxTQUFmLENBQXlCRSxNQUF6QixDQUFnQyxRQUFoQyxFQUZHLENBR0g7O0FBQ0FaLFFBQUFBLFlBQVksQ0FBQ1UsU0FBYixDQUF1QkMsR0FBdkIsQ0FBMkIsUUFBM0I7QUFDSCxPQWhCK0IsQ0FrQmhDOzs7QUFDQVAsTUFBQUEsTUFBTSxDQUFDUyxRQUFQO0FBQ0gsS0FwQnVCLEVBb0JyQixJQXBCcUIsQ0FBeEI7QUFxQkgsR0F0QkQ7O0FBd0JBLE1BQUlDLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQVNWLE1BQVQsRUFBaUI7QUFDekI7QUFDQVAsSUFBQUEsa0JBQWtCLENBQUNhLFNBQW5CLENBQTZCRSxNQUE3QixDQUFvQyxRQUFwQyxFQUZ5QixDQUd6Qjs7QUFDQWQsSUFBQUEsY0FBYyxDQUFDWSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixRQUE3QixFQUp5QixDQUt6Qjs7QUFDQVgsSUFBQUEsWUFBWSxDQUFDVSxTQUFiLENBQXVCQyxHQUF2QixDQUEyQixRQUEzQjtBQUNILEdBUEQsQ0FwQ3VDLENBNkN2Qzs7O0FBQ0gsU0FBTztBQUNOSSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDUDtBQUNBbkIsTUFBQUEsT0FBTyxHQUFHb0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLCtCQUF2QixDQUFWOztBQUVBLFVBQUksQ0FBQ3JCLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRURHLE1BQUFBLGNBQWMsR0FBR0gsT0FBTyxDQUFDcUIsYUFBUixDQUFzQixvQ0FBdEIsQ0FBakI7QUFDQXBCLE1BQUFBLGtCQUFrQixHQUFHRCxPQUFPLENBQUNxQixhQUFSLENBQXNCLHdDQUF0QixDQUFyQjtBQUNBbkIsTUFBQUEsY0FBYyxHQUFHRixPQUFPLENBQUNxQixhQUFSLENBQXNCLG9DQUF0QixDQUFqQjtBQUNBakIsTUFBQUEsWUFBWSxHQUFHSixPQUFPLENBQUNxQixhQUFSLENBQXNCLGtDQUF0QixDQUFmLENBWE8sQ0FhUDs7QUFDQWhCLE1BQUFBLFlBQVksR0FBRyxJQUFJaUIsUUFBSixDQUFhdEIsT0FBYixDQUFmLENBZE8sQ0FnQlA7O0FBQ0FLLE1BQUFBLFlBQVksQ0FBQ2tCLEVBQWIsQ0FBZ0IsbUJBQWhCLEVBQXFDaEIsUUFBckMsRUFqQk8sQ0FtQlA7O0FBQ0FGLE1BQUFBLFlBQVksQ0FBQ2tCLEVBQWIsQ0FBZ0IsaUJBQWhCLEVBQW1DTCxLQUFuQyxFQXBCTyxDQXNCUDs7QUFDQU4sTUFBQUEsTUFBTSxDQUFDVyxFQUFQLENBQVV2QixPQUFWLEVBQW1CLHFDQUFuQixFQUEwRCxPQUExRCxFQUFtRSxZQUFXLENBQzFFO0FBQ0gsT0FGRDtBQUdUO0FBM0JLLEdBQVA7QUE2QkEsQ0EzRStCLEVBQWhDLEMsQ0E2RUE7OztBQUNBWSxNQUFNLENBQUNZLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN6QixFQUFBQSx5QkFBeUIsQ0FBQ29CLElBQTFCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9zZWFyY2gvYmFzaWMuanM/NDI2NyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUR2VuZXJhbFNlYXJjaEJhc2ljRGVtb3MgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIHZhcmlhYmxlc1xuICAgIHZhciBlbGVtZW50O1xuICAgIHZhciBzdWdnZXN0aW9uc0VsZW1lbnQ7XG4gICAgdmFyIHJlc3VsdHNFbGVtZW50O1xuICAgIHZhciB3cmFwcGVyRWxlbWVudDtcbiAgICB2YXIgZW1wdHlFbGVtZW50O1xuICAgIHZhciBzZWFyY2hPYmplY3Q7XG4gICAgXG4gICAgdmFyIG1vZGFsO1xuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgcHJvY2Vzc3MgPSBmdW5jdGlvbihzZWFyY2gpIHtcbiAgICAgICAgdmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIG51bWJlciA9IEtUVXRpbC5nZXRSYW5kb21JbnQoMSwgNik7XG5cbiAgICAgICAgICAgIC8vIEhpZGUgcmVjZW50bHkgdmlld2VkXG4gICAgICAgICAgICBzdWdnZXN0aW9uc0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG5cbiAgICAgICAgICAgIGlmIChudW1iZXIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHJlc3VsdHNcbiAgICAgICAgICAgICAgICByZXN1bHRzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAvLyBTaG93IGVtcHR5IG1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBTaG93IHJlc3VsdHNcbiAgICAgICAgICAgICAgICByZXN1bHRzRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICAvLyBIaWRlIGVtcHR5IG1lc3NhZ2UgXG4gICAgICAgICAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBDb21wbGV0ZSBzZWFyY2hcbiAgICAgICAgICAgIHNlYXJjaC5jb21wbGV0ZSgpO1xuICAgICAgICB9LCAxNTAwKTtcbiAgICB9XG5cbiAgICB2YXIgY2xlYXIgPSBmdW5jdGlvbihzZWFyY2gpIHtcbiAgICAgICAgLy8gU2hvdyByZWNlbnRseSB2aWV3ZWRcbiAgICAgICAgc3VnZ2VzdGlvbnNFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAvLyBIaWRlIHJlc3VsdHNcbiAgICAgICAgcmVzdWx0c0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcbiAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgIH0gICAgXG5cbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xuXHRyZXR1cm4ge1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19zZWFyY2hfaGFuZGxlcl9iYXNpYycpO1xuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cIndyYXBwZXJcIl0nKTtcbiAgICAgICAgICAgIHN1Z2dlc3Rpb25zRWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJzdWdnZXN0aW9uc1wiXScpO1xuICAgICAgICAgICAgcmVzdWx0c0VsZW1lbnQgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwicmVzdWx0c1wiXScpO1xuICAgICAgICAgICAgZW1wdHlFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImVtcHR5XCJdJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIEluaXRpYWxpemUgc2VhcmNoIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdCA9IG5ldyBLVFNlYXJjaChlbGVtZW50KTtcblxuICAgICAgICAgICAgLy8gU2VhcmNoIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5vbigna3Quc2VhcmNoLnByb2Nlc3MnLCBwcm9jZXNzcyk7XG5cbiAgICAgICAgICAgIC8vIENsZWFyIGhhbmRsZXJcbiAgICAgICAgICAgIHNlYXJjaE9iamVjdC5vbigna3Quc2VhcmNoLmNsZWFyJywgY2xlYXIpO1xuXG4gICAgICAgICAgICAvLyBIYW5kbGUgc2VsZWN0XG4gICAgICAgICAgICBLVFV0aWwub24oZWxlbWVudCwgJ1tkYXRhLWt0LXNlYXJjaC1lbGVtZW50PVwiY3VzdG9tZXJcIl0nLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAvL21vZGFsLmhpZGUoKTtcbiAgICAgICAgICAgIH0pO1xuXHRcdH1cblx0fTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUR2VuZXJhbFNlYXJjaEJhc2ljRGVtb3MuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUR2VuZXJhbFNlYXJjaEJhc2ljRGVtb3MiLCJlbGVtZW50Iiwic3VnZ2VzdGlvbnNFbGVtZW50IiwicmVzdWx0c0VsZW1lbnQiLCJ3cmFwcGVyRWxlbWVudCIsImVtcHR5RWxlbWVudCIsInNlYXJjaE9iamVjdCIsIm1vZGFsIiwicHJvY2Vzc3MiLCJzZWFyY2giLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsIm51bWJlciIsIktUVXRpbCIsImdldFJhbmRvbUludCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsImNvbXBsZXRlIiwiY2xlYXIiLCJpbml0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiS1RTZWFyY2giLCJvbiIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/search/basic.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/search/basic.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=basic.js.map