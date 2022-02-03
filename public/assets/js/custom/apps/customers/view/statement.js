/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/customers/view/statement.js ***!
  \*******************************************************************************************/


// Class definition
var KTCustomerViewStatements = function () {

    // Private functions
    // Init current year datatable
    var initStatementYearCurrent = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_1';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2020 datatable
    var initStatementYear2020 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_2';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2019 datatable
    var initStatementYear2019 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_3';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Init year 2018 datatable
    var initStatementYear2018 = function () {
        // Define table element
        const id = '#kt_customer_view_statement_table_4';
        var table = document.querySelector(id);

        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[0].innerHTML, "DD MMM YYYY, LT").format(); // select date from 1st column in table
            dateRow[0].setAttribute('data-order', realDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        var datatable = $(id).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 4 }, // Disable ordering on column 0 (download)
            ]
        });
    }

    // Public methods
    return {
        init: function () {
            initStatementYearCurrent();
            initStatementYear2020();
            initStatementYear2019();
            initStatementYear2018();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTCustomerViewStatements.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/customers/view/statement.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/apps/customers/view/statement.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTCustomerViewStatements = function () {\n  // Private functions\n  // Init current year datatable\n  var initStatementYearCurrent = function initStatementYearCurrent() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_1';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2020 datatable\n\n\n  var initStatementYear2020 = function initStatementYear2020() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_2';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2019 datatable\n\n\n  var initStatementYear2019 = function initStatementYear2019() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_3';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Init year 2018 datatable\n\n\n  var initStatementYear2018 = function initStatementYear2018() {\n    // Define table element\n    var id = '#kt_customer_view_statement_table_4';\n    var table = document.querySelector(id); // Set date data order\n\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[0].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 1st column in table\n\n      dateRow[0].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    var datatable = $(id).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 0 (download)\n      ]\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initStatementYearCurrent();\n      initStatementYear2020();\n      initStatementYear2019();\n      initStatementYear2018();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTCustomerViewStatements.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2N1c3RvbWVycy92aWV3L3N0YXRlbWVudC5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSx3QkFBd0IsR0FBRyxZQUFZO0FBRXZDO0FBQ0E7QUFDQSxNQUFJQyx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLEdBQVk7QUFDdkM7QUFDQSxRQUFNQyxFQUFFLEdBQUcscUNBQVg7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QkgsRUFBdkIsQ0FBWixDQUh1QyxDQUt2Qzs7QUFDQSxRQUFNSSxTQUFTLEdBQUdILEtBQUssQ0FBQ0ksZ0JBQU4sQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQUQsSUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0YsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxVQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxTQUFaLEVBQXVCLGlCQUF2QixDQUFOLENBQWdEQyxNQUFoRCxFQUFqQixDQUZxQixDQUVzRDs7QUFDM0VKLE1BQUFBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQ0osUUFBdEM7QUFDSCxLQUpELEVBUnVDLENBY3ZDOztBQUNBLFFBQUlLLFNBQVMsR0FBR0MsQ0FBQyxDQUFDZixFQUFELENBQUQsQ0FBTWdCLFNBQU4sQ0FBZ0I7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixlQUFTLEVBRm1CO0FBRzVCLG9CQUFjLEVBSGM7QUFJNUIsc0JBQWdCLEtBSlk7QUFLNUIsb0JBQWMsQ0FDVjtBQUFFQyxRQUFBQSxTQUFTLEVBQUUsS0FBYjtBQUFvQkMsUUFBQUEsT0FBTyxFQUFFO0FBQTdCLE9BRFUsQ0FDd0I7QUFEeEI7QUFMYyxLQUFoQixDQUFoQjtBQVNILEdB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QUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3JCLFVBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRixnQkFBSixDQUFxQixJQUFyQixDQUFoQjtBQUNBLFVBQU1JLFFBQVEsR0FBR0MsTUFBTSxDQUFDRixPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdHLFNBQVosRUFBdUIsaUJBQXZCLENBQU4sQ0FBZ0RDLE1BQWhELEVBQWpCLENBRnFCLENBRXNEOztBQUMzRUosTUFBQUEsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXSyxZQUFYLENBQXdCLFlBQXhCLEVBQXNDSixRQUF0QztBQUNILEtBSkQsRUFSb0MsQ0FjcEM7O0FBQ0EsUUFBSUssU0FBUyxHQUFHQyxDQUFDLENBQUNmLEVBQUQsQ0FBRCxDQUFNZ0IsU0FBTixDQUFnQjtBQUM1QixjQUFRLEtBRG9CO0FBRTVCLGVBQVMsRUFGbUI7QUFHNUIsb0JBQWMsRUFIYztBQUk1QixzQkFBZ0IsS0FKWTtBQUs1QixvQkFBYyxDQUNWO0FBQUVDLFFBQUFBLFNBQVMsRUFBRSxLQUFiO0FBQW9CQyxRQUFBQSxPQUFPLEVBQUU7QUFBN0IsT0FEVSxDQUN3QjtBQUR4QjtBQUxjLEtBQWhCLENBQWhCO0FBU0gsR0F4QkQsQ0FyRnVDLENBK0d2Qzs7O0FBQ0EsU0FBTztBQUNISSxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZHZCLE1BQUFBLHdCQUF3QjtBQUN4Qm9CLE1BQUFBLHFCQUFxQjtBQUNyQkMsTUFBQUEscUJBQXFCO0FBQ3JCQyxNQUFBQSxxQkFBcUI7QUFDeEI7QUFORSxHQUFQO0FBUUgsQ0F4SDhCLEVBQS9CLEMsQ0EwSEE7OztBQUNBRSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEMxQixFQUFBQSx3QkFBd0IsQ0FBQ3dCLElBQXpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvY3VzdG9tZXJzL3ZpZXcvc3RhdGVtZW50LmpzP2I2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEN1c3RvbWVyVmlld1N0YXRlbWVudHMgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIC8vIEluaXQgY3VycmVudCB5ZWFyIGRhdGF0YWJsZVxuICAgIHZhciBpbml0U3RhdGVtZW50WWVhckN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSB0YWJsZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gJyNrdF9jdXN0b21lcl92aWV3X3N0YXRlbWVudF90YWJsZV8xJztcbiAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzBdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gMXN0IGNvbHVtbiBpbiB0YWJsZVxuICAgICAgICAgICAgZGF0ZVJvd1swXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXG4gICAgICAgIHZhciBkYXRhdGFibGUgPSAkKGlkKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ29yZGVyJzogW10sXG4gICAgICAgICAgICBcInBhZ2VMZW5ndGhcIjogMTAsXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICdjb2x1bW5EZWZzJzogW1xuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogNCB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAwIChkb3dubG9hZClcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdCB5ZWFyIDIwMjAgZGF0YXRhYmxlXG4gICAgdmFyIGluaXRTdGF0ZW1lbnRZZWFyMjAyMCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIHRhYmxlIGVsZW1lbnRcbiAgICAgICAgY29uc3QgaWQgPSAnI2t0X2N1c3RvbWVyX3ZpZXdfc3RhdGVtZW50X3RhYmxlXzInO1xuICAgICAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGlkKTtcblxuICAgICAgICAvLyBTZXQgZGF0ZSBkYXRhIG9yZGVyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XG5cbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSb3cgPSByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KGRhdGVSb3dbMF0uaW5uZXJIVE1MLCBcIkREIE1NTSBZWVlZLCBMVFwiKS5mb3JtYXQoKTsgLy8gc2VsZWN0IGRhdGUgZnJvbSAxc3QgY29sdW1uIGluIHRhYmxlXG4gICAgICAgICAgICBkYXRlUm93WzBdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cbiAgICAgICAgdmFyIGRhdGF0YWJsZSA9ICQoaWQpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiAxMCxcbiAgICAgICAgICAgIFwibGVuZ3RoQ2hhbmdlXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXG4gICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiA0IH0sIC8vIERpc2FibGUgb3JkZXJpbmcgb24gY29sdW1uIDAgKGRvd25sb2FkKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBJbml0IHllYXIgMjAxOSBkYXRhdGFibGVcbiAgICB2YXIgaW5pdFN0YXRlbWVudFllYXIyMDE5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBEZWZpbmUgdGFibGUgZWxlbWVudFxuICAgICAgICBjb25zdCBpZCA9ICcja3RfY3VzdG9tZXJfdmlld19zdGF0ZW1lbnRfdGFibGVfMyc7XG4gICAgICAgIHZhciB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoaWQpO1xuXG4gICAgICAgIC8vIFNldCBkYXRlIGRhdGEgb3JkZXJcbiAgICAgICAgY29uc3QgdGFibGVSb3dzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgdHInKTtcblxuICAgICAgICB0YWJsZVJvd3MuZm9yRWFjaChyb3cgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVJvdyA9IHJvdy5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpO1xuICAgICAgICAgICAgY29uc3QgcmVhbERhdGUgPSBtb21lbnQoZGF0ZVJvd1swXS5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpOyAvLyBzZWxlY3QgZGF0ZSBmcm9tIDFzdCBjb2x1bW4gaW4gdGFibGVcbiAgICAgICAgICAgIGRhdGVSb3dbMF0uc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgcmVhbERhdGUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xuICAgICAgICB2YXIgZGF0YXRhYmxlID0gJChpZCkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgXCJwYWdlTGVuZ3RoXCI6IDEwLFxuICAgICAgICAgICAgXCJsZW5ndGhDaGFuZ2VcIjogZmFsc2UsXG4gICAgICAgICAgICAnY29sdW1uRGVmcyc6IFtcbiAgICAgICAgICAgICAgICB7IG9yZGVyYWJsZTogZmFsc2UsIHRhcmdldHM6IDQgfSwgLy8gRGlzYWJsZSBvcmRlcmluZyBvbiBjb2x1bW4gMCAoZG93bmxvYWQpXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEluaXQgeWVhciAyMDE4IGRhdGF0YWJsZVxuICAgIHZhciBpbml0U3RhdGVtZW50WWVhcjIwMTggPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIERlZmluZSB0YWJsZSBlbGVtZW50XG4gICAgICAgIGNvbnN0IGlkID0gJyNrdF9jdXN0b21lcl92aWV3X3N0YXRlbWVudF90YWJsZV80JztcbiAgICAgICAgdmFyIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihpZCk7XG5cbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzBdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gMXN0IGNvbHVtbiBpbiB0YWJsZVxuICAgICAgICAgICAgZGF0ZVJvd1swXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXG4gICAgICAgIHZhciBkYXRhdGFibGUgPSAkKGlkKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ29yZGVyJzogW10sXG4gICAgICAgICAgICBcInBhZ2VMZW5ndGhcIjogMTAsXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZSxcbiAgICAgICAgICAgICdjb2x1bW5EZWZzJzogW1xuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogNCB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAwIChkb3dubG9hZClcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0U3RhdGVtZW50WWVhckN1cnJlbnQoKTtcbiAgICAgICAgICAgIGluaXRTdGF0ZW1lbnRZZWFyMjAyMCgpO1xuICAgICAgICAgICAgaW5pdFN0YXRlbWVudFllYXIyMDE5KCk7XG4gICAgICAgICAgICBpbml0U3RhdGVtZW50WWVhcjIwMTgoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUQ3VzdG9tZXJWaWV3U3RhdGVtZW50cy5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RDdXN0b21lclZpZXdTdGF0ZW1lbnRzIiwiaW5pdFN0YXRlbWVudFllYXJDdXJyZW50IiwiaWQiLCJ0YWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93IiwiZGF0ZVJvdyIsInJlYWxEYXRlIiwibW9tZW50IiwiaW5uZXJIVE1MIiwiZm9ybWF0Iiwic2V0QXR0cmlidXRlIiwiZGF0YXRhYmxlIiwiJCIsIkRhdGFUYWJsZSIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJpbml0U3RhdGVtZW50WWVhcjIwMjAiLCJpbml0U3RhdGVtZW50WWVhcjIwMTkiLCJpbml0U3RhdGVtZW50WWVhcjIwMTgiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/customers/view/statement.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/customers/view/statement.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=statement.js.map