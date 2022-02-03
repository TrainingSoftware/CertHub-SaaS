/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/permissions/list.js ***!
  \***************************************************************************************************/


// Class definition
var KTUsersPermissionsList = function () {
    // Shared variables
    var datatable;
    var table;

    // Init add schedule modal
    var initPermissionsList = () => {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[2].innerHTML, "DD MMM YYYY, LT").format(); // select date from 2nd column in table
            dateRow[2].setAttribute('data-order', realDate);
        });

         // Init datatable --- more info on datatables: https://datatables.net/manual/
         datatable = $(table).DataTable({
            "info": false,
            'order': [],
            'columnDefs': [
                { orderable: false, targets: 1 }, // Disable ordering on column 1 (assigned)
                { orderable: false, targets: 3 }, // Disable ordering on column 3 (actions)
            ]
        });        
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-permissions-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Delete user
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-permissions-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get permission name
                const permissionName = parent.querySelectorAll('td')[0].innerText;

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Are you sure you want to delete " + permissionName + "?",
                    icon: "warning",
                    showCancelButton: true,
                    buttonsStyling: false,
                    confirmButtonText: "Yes, delete!",
                    cancelButtonText: "No, cancel",
                    customClass: {
                        confirmButton: "btn fw-bold btn-danger",
                        cancelButton: "btn fw-bold btn-active-light-primary"
                    }
                }).then(function (result) {
                    if (result.value) {
                        Swal.fire({
                            text: "You have deleted " + permissionName + "!.",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        }).then(function () {
                            // Remove current row
                            datatable.row($(parent)).remove().draw();
                        });
                    } else if (result.dismiss === 'cancel') {
                        Swal.fire({
                            text: customerName + " was not deleted.",
                            icon: "error",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn fw-bold btn-primary",
                            }
                        });
                    }
                });
            })
        });
    }


    return {
        // Public functions
        init: function () {
            table = document.querySelector('#kt_permissions_table');
            
            if (!table) {
                return;
            }

            initPermissionsList();
            handleSearchDatatable();
            handleDeleteRows();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersPermissionsList.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/permissions/list.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/permissions/list.js ***!
  \**************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersPermissionsList = function () {\n  // Shared variables\n  var datatable;\n  var table; // Init add schedule modal\n\n  var initPermissionsList = function initPermissionsList() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[2].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 2nd column in table\n\n      dateRow[2].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      'columnDefs': [{\n        orderable: false,\n        targets: 1\n      }, // Disable ordering on column 1 (assigned)\n      {\n        orderable: false,\n        targets: 3\n      } // Disable ordering on column 3 (actions)\n      ]\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-permissions-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete user\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-permissions-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get permission name\n\n        var permissionName = parent.querySelectorAll('td')[0].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + permissionName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + permissionName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_permissions_table');\n\n      if (!table) {\n        return;\n      }\n\n      initPermissionsList();\n      handleSearchDatatable();\n      handleDeleteRows();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersPermissionsList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9wZXJtaXNzaW9ucy9saXN0LmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHNCQUFzQixHQUFHLFlBQVk7QUFDckM7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsS0FBSixDQUhxQyxDQUtyQzs7QUFDQSxNQUFJQyxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLEdBQU07QUFDNUI7QUFDQSxRQUFNQyxTQUFTLEdBQUdGLEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUIsVUFBdkIsQ0FBbEI7QUFFQUQsSUFBQUEsU0FBUyxDQUFDRSxPQUFWLENBQWtCLFVBQUFDLEdBQUcsRUFBSTtBQUNyQixVQUFNQyxPQUFPLEdBQUdELEdBQUcsQ0FBQ0YsZ0JBQUosQ0FBcUIsSUFBckIsQ0FBaEI7QUFDQSxVQUFNSSxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0YsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRyxTQUFaLEVBQXVCLGlCQUF2QixDQUFOLENBQWdEQyxNQUFoRCxFQUFqQixDQUZxQixDQUVzRDs7QUFDM0VKLE1BQUFBLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ssWUFBWCxDQUF3QixZQUF4QixFQUFzQ0osUUFBdEM7QUFDSCxLQUpELEVBSjRCLENBVTNCOztBQUNBUixJQUFBQSxTQUFTLEdBQUdhLENBQUMsQ0FBQ1osS0FBRCxDQUFELENBQVNhLFNBQVQsQ0FBbUI7QUFDNUIsY0FBUSxLQURvQjtBQUU1QixlQUFTLEVBRm1CO0FBRzVCLG9CQUFjLENBQ1Y7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QixPQURVLEVBQ3dCO0FBQ2xDO0FBQUVELFFBQUFBLFNBQVMsRUFBRSxLQUFiO0FBQW9CQyxRQUFBQSxPQUFPLEVBQUU7QUFBN0IsT0FGVSxDQUV3QjtBQUZ4QjtBQUhjLEtBQW5CLENBQVo7QUFRSixHQW5CRCxDQU5xQyxDQTJCckM7OztBQUNBLE1BQUlDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUM5QixRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw2Q0FBdkIsQ0FBckI7QUFDQUYsSUFBQUEsWUFBWSxDQUFDRyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaER0QixNQUFBQSxTQUFTLENBQUN1QixNQUFWLENBQWlCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBMUIsRUFBaUNDLElBQWpDO0FBQ0gsS0FGRDtBQUdILEdBTEQsQ0E1QnFDLENBbUNyQzs7O0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3pCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHM0IsS0FBSyxDQUFDRyxnQkFBTixDQUF1QixpREFBdkIsQ0FBdEI7QUFFQXdCLElBQUFBLGFBQWEsQ0FBQ3ZCLE9BQWQsQ0FBc0IsVUFBQXdCLENBQUMsRUFBSTtBQUN2QjtBQUNBQSxNQUFBQSxDQUFDLENBQUNSLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCLFVBQVVDLENBQVYsRUFBYTtBQUNyQ0EsUUFBQUEsQ0FBQyxDQUFDUSxjQUFGLEdBRHFDLENBR3JDOztBQUNBLFlBQU1DLE1BQU0sR0FBR1QsQ0FBQyxDQUFDRSxNQUFGLENBQVNRLE9BQVQsQ0FBaUIsSUFBakIsQ0FBZixDQUpxQyxDQU1yQzs7QUFDQSxZQUFNQyxjQUFjLEdBQUdGLE1BQU0sQ0FBQzNCLGdCQUFQLENBQXdCLElBQXhCLEVBQThCLENBQTlCLEVBQWlDOEIsU0FBeEQsQ0FQcUMsQ0FTckM7O0FBQ0FDLFFBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFVBQUFBLElBQUksRUFBRSxxQ0FBcUNKLGNBQXJDLEdBQXNELEdBRHREO0FBRU5LLFVBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFVBQUFBLGdCQUFnQixFQUFFLElBSFo7QUFJTkMsVUFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkMsVUFBQUEsaUJBQWlCLEVBQUUsY0FMYjtBQU1OQyxVQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFVBQUFBLFdBQVcsRUFBRTtBQUNUQyxZQUFBQSxhQUFhLEVBQUUsd0JBRE47QUFFVEMsWUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxTQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGNBQUlBLE1BQU0sQ0FBQ3RCLEtBQVgsRUFBa0I7QUFDZFUsWUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsY0FBQUEsSUFBSSxFQUFFLHNCQUFzQkosY0FBdEIsR0FBdUMsSUFEdkM7QUFFTkssY0FBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkUsY0FBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsY0FBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxjQUFBQSxXQUFXLEVBQUU7QUFDVEMsZ0JBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsYUFBVixFQVFHRSxJQVJILENBUVEsWUFBWTtBQUNoQjtBQUNBOUMsY0FBQUEsU0FBUyxDQUFDTSxHQUFWLENBQWNPLENBQUMsQ0FBQ2tCLE1BQUQsQ0FBZixFQUF5QmlCLE1BQXpCLEdBQWtDdEIsSUFBbEM7QUFDSCxhQVhEO0FBWUgsV0FiRCxNQWFPLElBQUlxQixNQUFNLENBQUNFLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDcENkLFlBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLGNBQUFBLElBQUksRUFBRWEsWUFBWSxHQUFHLG1CQURmO0FBRU5aLGNBQUFBLElBQUksRUFBRSxPQUZBO0FBR05FLGNBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLGNBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsY0FBQUEsV0FBVyxFQUFFO0FBQ1RDLGdCQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLGFBQVY7QUFTSDtBQUNKLFNBcENEO0FBcUNILE9BL0NEO0FBZ0RILEtBbEREO0FBbURILEdBdkREOztBQTBEQSxTQUFPO0FBQ0g7QUFDQU8sSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsRCxNQUFBQSxLQUFLLEdBQUdrQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsdUJBQXZCLENBQVI7O0FBRUEsVUFBSSxDQUFDbkIsS0FBTCxFQUFZO0FBQ1I7QUFDSDs7QUFFREMsTUFBQUEsbUJBQW1CO0FBQ25CZSxNQUFBQSxxQkFBcUI7QUFDckJVLE1BQUFBLGdCQUFnQjtBQUNuQjtBQVpFLEdBQVA7QUFjSCxDQTVHNEIsRUFBN0IsQyxDQThHQTs7O0FBQ0F5QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEN0RCxFQUFBQSxzQkFBc0IsQ0FBQ29ELElBQXZCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvdXNlci1tYW5hZ2VtZW50L3Blcm1pc3Npb25zL2xpc3QuanM/MTBkZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUVXNlcnNQZXJtaXNzaW9uc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBkYXRhdGFibGU7XG4gICAgdmFyIHRhYmxlO1xuXG4gICAgLy8gSW5pdCBhZGQgc2NoZWR1bGUgbW9kYWxcbiAgICB2YXIgaW5pdFBlcm1pc3Npb25zTGlzdCA9ICgpID0+IHtcbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCByZWFsRGF0ZSA9IG1vbWVudChkYXRlUm93WzJdLmlubmVySFRNTCwgXCJERCBNTU0gWVlZWSwgTFRcIikuZm9ybWF0KCk7IC8vIHNlbGVjdCBkYXRlIGZyb20gMm5kIGNvbHVtbiBpbiB0YWJsZVxuICAgICAgICAgICAgZGF0ZVJvd1syXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICAvLyBJbml0IGRhdGF0YWJsZSAtLS0gbW9yZSBpbmZvIG9uIGRhdGF0YWJsZXM6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvbWFudWFsL1xuICAgICAgICAgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXG4gICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiAxIH0sIC8vIERpc2FibGUgb3JkZXJpbmcgb24gY29sdW1uIDEgKGFzc2lnbmVkKVxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogMyB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiAzIChhY3Rpb25zKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBEYXRhdGFibGUgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL2RhdGF0YWJsZXMubmV0L3JlZmVyZW5jZS9hcGkvc2VhcmNoKClcbiAgICB2YXIgaGFuZGxlU2VhcmNoRGF0YXRhYmxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1wZXJtaXNzaW9ucy10YWJsZS1maWx0ZXI9XCJzZWFyY2hcIl0nKTtcbiAgICAgICAgZmlsdGVyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGRhdGF0YWJsZS5zZWFyY2goZS50YXJnZXQudmFsdWUpLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHVzZXJcbiAgICB2YXIgaGFuZGxlRGVsZXRlUm93cyA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBkZWxldGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtcGVybWlzc2lvbnMtdGFibGUtZmlsdGVyPVwiZGVsZXRlX3Jvd1wiXScpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gb24gY2xpY2tcbiAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBwYXJlbnQgcm93XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBwZXJtaXNzaW9uIG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCBwZXJtaXNzaW9uTmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpWzBdLmlubmVyVGV4dDtcblxuICAgICAgICAgICAgICAgIC8vIFN3ZWV0QWxlcnQyIHBvcCB1cCAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBcIiArIHBlcm1pc3Npb25OYW1lICsgXCI/XCIsXG4gICAgICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCBjYW5jZWxcIixcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1hY3RpdmUtbGlnaHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgXCIgKyBwZXJtaXNzaW9uTmFtZSArIFwiIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcm93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YXRhYmxlLnJvdygkKHBhcmVudCkpLnJlbW92ZSgpLmRyYXcoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjdXN0b21lck5hbWUgKyBcIiB3YXMgbm90IGRlbGV0ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgZnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3Blcm1pc3Npb25zX3RhYmxlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRQZXJtaXNzaW9uc0xpc3QoKTtcbiAgICAgICAgICAgIGhhbmRsZVNlYXJjaERhdGF0YWJsZSgpO1xuICAgICAgICAgICAgaGFuZGxlRGVsZXRlUm93cygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVXNlcnNQZXJtaXNzaW9uc0xpc3QuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktUVXNlcnNQZXJtaXNzaW9uc0xpc3QiLCJkYXRhdGFibGUiLCJ0YWJsZSIsImluaXRQZXJtaXNzaW9uc0xpc3QiLCJ0YWJsZVJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJvdyIsImRhdGVSb3ciLCJyZWFsRGF0ZSIsIm1vbWVudCIsImlubmVySFRNTCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsIiQiLCJEYXRhVGFibGUiLCJvcmRlcmFibGUiLCJ0YXJnZXRzIiwiaGFuZGxlU2VhcmNoRGF0YXRhYmxlIiwiZmlsdGVyU2VhcmNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImRyYXciLCJoYW5kbGVEZWxldGVSb3dzIiwiZGVsZXRlQnV0dG9ucyIsImQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJwZXJtaXNzaW9uTmFtZSIsImlubmVyVGV4dCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aGVuIiwicmVzdWx0IiwicmVtb3ZlIiwiZGlzbWlzcyIsImN1c3RvbWVyTmFtZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/permissions/list.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/permissions/list.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=list.js.map