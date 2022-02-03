/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/pages/projects/targets/targets.js ***!
  \********************************************************************************************/


// Class definition
var KTProjectTargets = function () {

    var initDatatable = function () {
        const table = document.getElementById('kt_profile_overview_table');

        // set date data order
        const tableRows = table.querySelectorAll('tbody tr');
        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[1].innerHTML, "MMM D, YYYY").format();
            dateRow[1].setAttribute('data-order', realDate);
        });

        // init datatable --- more info on datatables: https://datatables.net/manual/
        const datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "paging": false,
        });

    }

    // Public methods
    return {
        init: function () {
            initDatatable();
        }
    }
}();


// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTProjectTargets.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/projects/targets/targets.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/pages/projects/targets/targets.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectTargets = function () {\n  var initDatatable = function initDatatable() {\n    var table = document.getElementById('kt_profile_overview_table'); // set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n      dateRow[1].setAttribute('data-order', realDate);\n    }); // init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"paging\": false\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initDatatable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectTargets.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy90YXJnZXRzL3RhcmdldHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUUvQixNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFDNUIsUUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWQsQ0FENEIsQ0FHNUI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCLFVBQXZCLENBQWxCO0FBQ0FELElBQUFBLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDckIsVUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNGLGdCQUFKLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsVUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csU0FBWixFQUF1QixhQUF2QixDQUFOLENBQTRDQyxNQUE1QyxFQUFqQjtBQUNBSixNQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NKLFFBQXRDO0FBQ0gsS0FKRCxFQUw0QixDQVc1Qjs7QUFDQSxRQUFNSyxTQUFTLEdBQUdDLENBQUMsQ0FBQ2QsS0FBRCxDQUFELENBQVNlLFNBQVQsQ0FBbUI7QUFDakMsY0FBUSxLQUR5QjtBQUVqQyxlQUFTLEVBRndCO0FBR2pDLGdCQUFVO0FBSHVCLEtBQW5CLENBQWxCO0FBTUgsR0FsQkQsQ0FGK0IsQ0FzQi9COzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkakIsTUFBQUEsYUFBYTtBQUNoQjtBQUhFLEdBQVA7QUFLSCxDQTVCc0IsRUFBdkIsQyxDQStCQTs7O0FBQ0FrQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNwQixFQUFBQSxnQkFBZ0IsQ0FBQ2tCLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL3BhZ2VzL3Byb2plY3RzL3RhcmdldHMvdGFyZ2V0cy5qcz9mNzEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RQcm9qZWN0VGFyZ2V0cyA9IGZ1bmN0aW9uICgpIHtcblxuICAgIHZhciBpbml0RGF0YXRhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9wcm9maWxlX292ZXJ2aWV3X3RhYmxlJyk7XG5cbiAgICAgICAgLy8gc2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1sxXS5pbm5lckhUTUwsIFwiTU1NIEQsIFlZWVlcIikuZm9ybWF0KCk7XG4gICAgICAgICAgICBkYXRlUm93WzFdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gaW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cbiAgICAgICAgY29uc3QgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgXCJwYWdpbmdcIjogZmFsc2UsXG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0RGF0YXRhYmxlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KCk7XG5cblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RQcm9qZWN0VGFyZ2V0cy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFByb2plY3RUYXJnZXRzIiwiaW5pdERhdGF0YWJsZSIsInRhYmxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiZGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/projects/targets/targets.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/pages/projects/targets/targets.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=targets.js.map