/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************!*\
  !*** ../src/js/custom/documentation/search.js ***!
  \************************************************/


// Class definition
var KTDocsSearch = function() {
    // Private variables
    var element;
    var formElement;
    var mainElement;
    var resultsElement;
    var wrapperElement;
    var emptyElement;    
    var searchObject;

    // Private functions
    var processs = function(search) {
        var results = 0;

        // Elements
        var searchable = [].slice.call(resultsElement.querySelectorAll('[data-kt-searchable="true"]'));

        // Match elements
        searchable.map(function (element) {  
            var query = searchObject.getQuery();

            if (element.innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {
                element.classList.remove('d-none');
                results++;
            } else {
                element.classList.add('d-none');
            }
        });
        
        // Hide recently viewed
        mainElement.classList.add('d-none');

        if (results === 0) {
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
    }

    var clear = function(search) {
        // Show recently viewed
        mainElement.classList.remove('d-none');
        // Hide results
        resultsElement.classList.add('d-none');
        // Hide empty message 
        emptyElement.classList.add('d-none');
    }    

    // Public methods
	return {
		init: function() {
            // Elements
            element = document.querySelector('#kt_docs_search');

            if (!element) {
                return;
            }

            wrapperElement = element.querySelector('[data-kt-search-element="wrapper"]');
            formElement = element.querySelector('[data-kt-search-element="form"]');
            mainElement = element.querySelector('[data-kt-search-element="main"]');
            resultsElement = element.querySelector('[data-kt-search-element="results"]');
            emptyElement = element.querySelector('[data-kt-search-element="empty"]');
            
            // Initialize search handler
            searchObject = new KTSearch(element);

            // Search handler
            searchObject.on('kt.search.process', processs);

            // Clear handler
            searchObject.on('kt.search.clear', clear);     
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTDocsSearch.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/search.js":
/*!*********************************************************!*\
  !*** ./resources/src/js/custom/documentation/search.js ***!
  \*********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTDocsSearch = function () {\n  // Private variables\n  var element;\n  var formElement;\n  var mainElement;\n  var resultsElement;\n  var wrapperElement;\n  var emptyElement;\n  var searchObject; // Private functions\n\n  var processs = function processs(search) {\n    var results = 0; // Elements\n\n    var searchable = [].slice.call(resultsElement.querySelectorAll('[data-kt-searchable=\"true\"]')); // Match elements\n\n    searchable.map(function (element) {\n      var query = searchObject.getQuery();\n\n      if (element.innerText.toLowerCase().indexOf(query.toLowerCase()) !== -1) {\n        element.classList.remove('d-none');\n        results++;\n      } else {\n        element.classList.add('d-none');\n      }\n    }); // Hide recently viewed\n\n    mainElement.classList.add('d-none');\n\n    if (results === 0) {\n      // Hide results\n      resultsElement.classList.add('d-none'); // Show empty message \n\n      emptyElement.classList.remove('d-none');\n    } else {\n      // Show results\n      resultsElement.classList.remove('d-none'); // Hide empty message \n\n      emptyElement.classList.add('d-none');\n    } // Complete search\n\n\n    search.complete();\n  };\n\n  var clear = function clear(search) {\n    // Show recently viewed\n    mainElement.classList.remove('d-none'); // Hide results\n\n    resultsElement.classList.add('d-none'); // Hide empty message \n\n    emptyElement.classList.add('d-none');\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      // Elements\n      element = document.querySelector('#kt_docs_search');\n\n      if (!element) {\n        return;\n      }\n\n      wrapperElement = element.querySelector('[data-kt-search-element=\"wrapper\"]');\n      formElement = element.querySelector('[data-kt-search-element=\"form\"]');\n      mainElement = element.querySelector('[data-kt-search-element=\"main\"]');\n      resultsElement = element.querySelector('[data-kt-search-element=\"results\"]');\n      emptyElement = element.querySelector('[data-kt-search-element=\"empty\"]'); // Initialize search handler\n\n      searchObject = new KTSearch(element); // Search handler\n\n      searchObject.on('kt.search.process', processs); // Clear handler\n\n      searchObject.on('kt.search.clear', clear);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTDocsSearch.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL3NlYXJjaC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxZQUFZLEdBQUcsWUFBVztBQUMxQjtBQUNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLFlBQUosQ0FSMEIsQ0FVMUI7O0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsTUFBVCxFQUFpQjtBQUM1QixRQUFJQyxPQUFPLEdBQUcsQ0FBZCxDQUQ0QixDQUc1Qjs7QUFDQSxRQUFJQyxVQUFVLEdBQUcsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNULGNBQWMsQ0FBQ1UsZ0JBQWYsQ0FBZ0MsNkJBQWhDLENBQWQsQ0FBakIsQ0FKNEIsQ0FNNUI7O0FBQ0FILElBQUFBLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQVVkLE9BQVYsRUFBbUI7QUFDOUIsVUFBSWUsS0FBSyxHQUFHVCxZQUFZLENBQUNVLFFBQWIsRUFBWjs7QUFFQSxVQUFJaEIsT0FBTyxDQUFDaUIsU0FBUixDQUFrQkMsV0FBbEIsR0FBZ0NDLE9BQWhDLENBQXdDSixLQUFLLENBQUNHLFdBQU4sRUFBeEMsTUFBaUUsQ0FBQyxDQUF0RSxFQUF5RTtBQUNyRWxCLFFBQUFBLE9BQU8sQ0FBQ29CLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLFFBQXpCO0FBQ0FaLFFBQUFBLE9BQU87QUFDVixPQUhELE1BR087QUFDSFQsUUFBQUEsT0FBTyxDQUFDb0IsU0FBUixDQUFrQkUsR0FBbEIsQ0FBc0IsUUFBdEI7QUFDSDtBQUNKLEtBVEQsRUFQNEIsQ0FrQjVCOztBQUNBcEIsSUFBQUEsV0FBVyxDQUFDa0IsU0FBWixDQUFzQkUsR0FBdEIsQ0FBMEIsUUFBMUI7O0FBRUEsUUFBSWIsT0FBTyxLQUFLLENBQWhCLEVBQW1CO0FBQ2Y7QUFDQU4sTUFBQUEsY0FBYyxDQUFDaUIsU0FBZixDQUF5QkUsR0FBekIsQ0FBNkIsUUFBN0IsRUFGZSxDQUdmOztBQUNBakIsTUFBQUEsWUFBWSxDQUFDZSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixRQUE5QjtBQUNILEtBTEQsTUFLTztBQUNIO0FBQ0FsQixNQUFBQSxjQUFjLENBQUNpQixTQUFmLENBQXlCQyxNQUF6QixDQUFnQyxRQUFoQyxFQUZHLENBR0g7O0FBQ0FoQixNQUFBQSxZQUFZLENBQUNlLFNBQWIsQ0FBdUJFLEdBQXZCLENBQTJCLFFBQTNCO0FBQ0gsS0EvQjJCLENBaUM1Qjs7O0FBQ0FkLElBQUFBLE1BQU0sQ0FBQ2UsUUFBUDtBQUNILEdBbkNEOztBQXFDQSxNQUFJQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxDQUFTaEIsTUFBVCxFQUFpQjtBQUN6QjtBQUNBTixJQUFBQSxXQUFXLENBQUNrQixTQUFaLENBQXNCQyxNQUF0QixDQUE2QixRQUE3QixFQUZ5QixDQUd6Qjs7QUFDQWxCLElBQUFBLGNBQWMsQ0FBQ2lCLFNBQWYsQ0FBeUJFLEdBQXpCLENBQTZCLFFBQTdCLEVBSnlCLENBS3pCOztBQUNBakIsSUFBQUEsWUFBWSxDQUFDZSxTQUFiLENBQXVCRSxHQUF2QixDQUEyQixRQUEzQjtBQUNILEdBUEQsQ0FoRDBCLENBeUQxQjs7O0FBQ0gsU0FBTztBQUNORyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDUDtBQUNBekIsTUFBQUEsT0FBTyxHQUFHMEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFWOztBQUVBLFVBQUksQ0FBQzNCLE9BQUwsRUFBYztBQUNWO0FBQ0g7O0FBRURJLE1BQUFBLGNBQWMsR0FBR0osT0FBTyxDQUFDMkIsYUFBUixDQUFzQixvQ0FBdEIsQ0FBakI7QUFDQTFCLE1BQUFBLFdBQVcsR0FBR0QsT0FBTyxDQUFDMkIsYUFBUixDQUFzQixpQ0FBdEIsQ0FBZDtBQUNBekIsTUFBQUEsV0FBVyxHQUFHRixPQUFPLENBQUMyQixhQUFSLENBQXNCLGlDQUF0QixDQUFkO0FBQ0F4QixNQUFBQSxjQUFjLEdBQUdILE9BQU8sQ0FBQzJCLGFBQVIsQ0FBc0Isb0NBQXRCLENBQWpCO0FBQ0F0QixNQUFBQSxZQUFZLEdBQUdMLE9BQU8sQ0FBQzJCLGFBQVIsQ0FBc0Isa0NBQXRCLENBQWYsQ0FaTyxDQWNQOztBQUNBckIsTUFBQUEsWUFBWSxHQUFHLElBQUlzQixRQUFKLENBQWE1QixPQUFiLENBQWYsQ0FmTyxDQWlCUDs7QUFDQU0sTUFBQUEsWUFBWSxDQUFDdUIsRUFBYixDQUFnQixtQkFBaEIsRUFBcUN0QixRQUFyQyxFQWxCTyxDQW9CUDs7QUFDQUQsTUFBQUEsWUFBWSxDQUFDdUIsRUFBYixDQUFnQixpQkFBaEIsRUFBbUNMLEtBQW5DO0FBQ1Q7QUF2QkssR0FBUDtBQXlCQSxDQW5Ga0IsRUFBbkIsQyxDQXFGQTs7O0FBQ0FNLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2hDLEVBQUFBLFlBQVksQ0FBQzBCLElBQWI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9zZWFyY2guanM/ODUwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURG9jc1NlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgdmFyaWFibGVzXG4gICAgdmFyIGVsZW1lbnQ7XG4gICAgdmFyIGZvcm1FbGVtZW50O1xuICAgIHZhciBtYWluRWxlbWVudDtcbiAgICB2YXIgcmVzdWx0c0VsZW1lbnQ7XG4gICAgdmFyIHdyYXBwZXJFbGVtZW50O1xuICAgIHZhciBlbXB0eUVsZW1lbnQ7ICAgIFxuICAgIHZhciBzZWFyY2hPYmplY3Q7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBwcm9jZXNzcyA9IGZ1bmN0aW9uKHNlYXJjaCkge1xuICAgICAgICB2YXIgcmVzdWx0cyA9IDA7XG5cbiAgICAgICAgLy8gRWxlbWVudHNcbiAgICAgICAgdmFyIHNlYXJjaGFibGUgPSBbXS5zbGljZS5jYWxsKHJlc3VsdHNFbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LXNlYXJjaGFibGU9XCJ0cnVlXCJdJykpO1xuXG4gICAgICAgIC8vIE1hdGNoIGVsZW1lbnRzXG4gICAgICAgIHNlYXJjaGFibGUubWFwKGZ1bmN0aW9uIChlbGVtZW50KSB7ICBcbiAgICAgICAgICAgIHZhciBxdWVyeSA9IHNlYXJjaE9iamVjdC5nZXRRdWVyeSgpO1xuXG4gICAgICAgICAgICBpZiAoZWxlbWVudC5pbm5lclRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHF1ZXJ5LnRvTG93ZXJDYXNlKCkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgcmVzdWx0cysrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIEhpZGUgcmVjZW50bHkgdmlld2VkXG4gICAgICAgIG1haW5FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuXG4gICAgICAgIGlmIChyZXN1bHRzID09PSAwKSB7XG4gICAgICAgICAgICAvLyBIaWRlIHJlc3VsdHNcbiAgICAgICAgICAgIHJlc3VsdHNFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgLy8gU2hvdyBlbXB0eSBtZXNzYWdlIFxuICAgICAgICAgICAgZW1wdHlFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gU2hvdyByZXN1bHRzXG4gICAgICAgICAgICByZXN1bHRzRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIC8vIEhpZGUgZW1wdHkgbWVzc2FnZSBcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIC8vIENvbXBsZXRlIHNlYXJjaFxuICAgICAgICBzZWFyY2guY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICB2YXIgY2xlYXIgPSBmdW5jdGlvbihzZWFyY2gpIHtcbiAgICAgICAgLy8gU2hvdyByZWNlbnRseSB2aWV3ZWRcbiAgICAgICAgbWFpbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgIC8vIEhpZGUgcmVzdWx0c1xuICAgICAgICByZXN1bHRzRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgLy8gSGlkZSBlbXB0eSBtZXNzYWdlIFxuICAgICAgICBlbXB0eUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgfSAgICBcblxuICAgIC8vIFB1YmxpYyBtZXRob2RzXG5cdHJldHVybiB7XG5cdFx0aW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBFbGVtZW50c1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9kb2NzX3NlYXJjaCcpO1xuXG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdyYXBwZXJFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cIndyYXBwZXJcIl0nKTtcbiAgICAgICAgICAgIGZvcm1FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cImZvcm1cIl0nKTtcbiAgICAgICAgICAgIG1haW5FbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cIm1haW5cIl0nKTtcbiAgICAgICAgICAgIHJlc3VsdHNFbGVtZW50ID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1zZWFyY2gtZWxlbWVudD1cInJlc3VsdHNcIl0nKTtcbiAgICAgICAgICAgIGVtcHR5RWxlbWVudCA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtc2VhcmNoLWVsZW1lbnQ9XCJlbXB0eVwiXScpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBJbml0aWFsaXplIHNlYXJjaCBoYW5kbGVyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3QgPSBuZXcgS1RTZWFyY2goZWxlbWVudCk7XG5cbiAgICAgICAgICAgIC8vIFNlYXJjaCBoYW5kbGVyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3Qub24oJ2t0LnNlYXJjaC5wcm9jZXNzJywgcHJvY2Vzc3MpO1xuXG4gICAgICAgICAgICAvLyBDbGVhciBoYW5kbGVyXG4gICAgICAgICAgICBzZWFyY2hPYmplY3Qub24oJ2t0LnNlYXJjaC5jbGVhcicsIGNsZWFyKTsgICAgIFxuXHRcdH1cblx0fTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1REb2NzU2VhcmNoLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVERvY3NTZWFyY2giLCJlbGVtZW50IiwiZm9ybUVsZW1lbnQiLCJtYWluRWxlbWVudCIsInJlc3VsdHNFbGVtZW50Iiwid3JhcHBlckVsZW1lbnQiLCJlbXB0eUVsZW1lbnQiLCJzZWFyY2hPYmplY3QiLCJwcm9jZXNzcyIsInNlYXJjaCIsInJlc3VsdHMiLCJzZWFyY2hhYmxlIiwic2xpY2UiLCJjYWxsIiwicXVlcnlTZWxlY3RvckFsbCIsIm1hcCIsInF1ZXJ5IiwiZ2V0UXVlcnkiLCJpbm5lclRleHQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJjb21wbGV0ZSIsImNsZWFyIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIktUU2VhcmNoIiwib24iLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/search.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/search.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=search.js.map