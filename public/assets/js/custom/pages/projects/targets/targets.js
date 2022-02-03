/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/pages/projects/targets/targets.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/pages/projects/targets/targets.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTProjectTargets = function () {\n  var initDatatable = function initDatatable() {\n    var table = document.getElementById('kt_profile_overview_table'); // set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[1].innerHTML, \"MMM D, YYYY\").format();\n      dateRow[1].setAttribute('data-order', realDate);\n    }); // init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"paging\": false\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initDatatable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTProjectTargets.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9wYWdlcy9wcm9qZWN0cy90YXJnZXRzL3RhcmdldHMuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZ0JBQWdCLEdBQUcsWUFBWTtBQUUvQixNQUFJQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLEdBQVk7QUFDNUIsUUFBTUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsMkJBQXhCLENBQWQsQ0FENEIsQ0FHNUI7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHSCxLQUFLLENBQUNJLGdCQUFOLENBQXVCLFVBQXZCLENBQWxCO0FBQ0FELElBQUFBLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDckIsVUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNGLGdCQUFKLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsVUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csU0FBWixFQUF1QixhQUF2QixDQUFOLENBQTRDQyxNQUE1QyxFQUFqQjtBQUNBSixNQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NKLFFBQXRDO0FBQ0gsS0FKRCxFQUw0QixDQVc1Qjs7QUFDQSxRQUFNSyxTQUFTLEdBQUdDLENBQUMsQ0FBQ2QsS0FBRCxDQUFELENBQVNlLFNBQVQsQ0FBbUI7QUFDakMsY0FBUSxLQUR5QjtBQUVqQyxlQUFTLEVBRndCO0FBR2pDLGdCQUFVO0FBSHVCLEtBQW5CLENBQWxCO0FBTUgsR0FsQkQsQ0FGK0IsQ0FzQi9COzs7QUFDQSxTQUFPO0FBQ0hDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkakIsTUFBQUEsYUFBYTtBQUNoQjtBQUhFLEdBQVA7QUFLSCxDQTVCc0IsRUFBdkIsQyxDQStCQTs7O0FBQ0FrQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNwQixFQUFBQSxnQkFBZ0IsQ0FBQ2tCLElBQWpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL3BhZ2VzL3Byb2plY3RzL3RhcmdldHMvdGFyZ2V0cy5qcz9mNzEwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLy8gQ2xhc3MgZGVmaW5pdGlvblxyXG52YXIgS1RQcm9qZWN0VGFyZ2V0cyA9IGZ1bmN0aW9uICgpIHtcclxuXHJcbiAgICB2YXIgaW5pdERhdGF0YWJsZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjb25zdCB0YWJsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9wcm9maWxlX292ZXJ2aWV3X3RhYmxlJyk7XHJcblxyXG4gICAgICAgIC8vIHNldCBkYXRlIGRhdGEgb3JkZXJcclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xyXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSb3cgPSByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcclxuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1sxXS5pbm5lckhUTUwsIFwiTU1NIEQsIFlZWVlcIikuZm9ybWF0KCk7XHJcbiAgICAgICAgICAgIGRhdGVSb3dbMV0uc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgcmVhbERhdGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xyXG4gICAgICAgIGNvbnN0IGRhdGF0YWJsZSA9ICQodGFibGUpLkRhdGFUYWJsZSh7XHJcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcclxuICAgICAgICAgICAgJ29yZGVyJzogW10sXHJcbiAgICAgICAgICAgIFwicGFnaW5nXCI6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvLyBQdWJsaWMgbWV0aG9kc1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGluaXREYXRhdGFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0oKTtcclxuXHJcblxyXG4vLyBPbiBkb2N1bWVudCByZWFkeVxyXG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xyXG4gICAgS1RQcm9qZWN0VGFyZ2V0cy5pbml0KCk7XHJcbn0pO1xyXG4iXSwibmFtZXMiOlsiS1RQcm9qZWN0VGFyZ2V0cyIsImluaXREYXRhdGFibGUiLCJ0YWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0YWJsZVJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJvdyIsImRhdGVSb3ciLCJyZWFsRGF0ZSIsIm1vbWVudCIsImlubmVySFRNTCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsImRhdGF0YWJsZSIsIiQiLCJEYXRhVGFibGUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/pages/projects/targets/targets.js\n");

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
/******/ })()
;