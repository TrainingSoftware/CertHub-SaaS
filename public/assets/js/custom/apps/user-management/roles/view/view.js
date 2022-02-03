/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/roles/view/view.js ***!
  \**************************************************************************************************/


// Class definition
var KTUsersViewRole = function () {
    // Shared variables
    var datatable;
    var table;

    // Init add schedule modal
    var initViewRole = () => {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const realDate = moment(dateRow[3].innerHTML, "DD MMM YYYY, LT").format(); // select date from 5th column in table
            dateRow[3].setAttribute('data-order', realDate);
        });

         // Init datatable --- more info on datatables: https://datatables.net/manual/
         datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "pageLength": 5,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
                { orderable: false, targets: 4 }, // Disable ordering on column 4 (actions)
            ]
        });        
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-roles-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Delete user
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-roles-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get customer name
                const userName = parent.querySelectorAll('td')[1].innerText;

                // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
                Swal.fire({
                    text: "Are you sure you want to delete " + userName + "?",
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
                            text: "You have deleted " + userName + "!.",
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

    // Init toggle toolbar
    var initToggleToolbar = () => {
        // Toggle selected action toolbar
        // Select all checkboxes
        const checkboxes = table.querySelectorAll('[type="checkbox"]');

        // Select elements
        const deleteSelected = document.querySelector('[data-kt-view-roles-table-select="delete_selected"]');

        // Toggle delete selected toolbar
        checkboxes.forEach(c => {
            // Checkbox on click event
            c.addEventListener('click', function () {
                setTimeout(function () {
                    toggleToolbars();
                }, 50);
            });
        });

        // Deleted selected rows
        deleteSelected.addEventListener('click', function () {
            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete selected customers?",
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
                        text: "You have deleted all selected customers!.",
                        icon: "success",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    }).then(function () {
                        // Remove all selected customers
                        checkboxes.forEach(c => {
                            if (c.checked) {
                                datatable.row($(c.closest('tbody tr'))).remove().draw();
                            }
                        });

                        // Remove header checked box
                        const headerCheckbox = table.querySelectorAll('[type="checkbox"]')[0];
                        headerCheckbox.checked = false;
                    }).then(function(){
                        toggleToolbars(); // Detect checked checkboxes
                        initToggleToolbar(); // Re-init toolbar to recalculate checkboxes
                    });
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Selected customers was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Toggle toolbars
    const toggleToolbars = () => {
        // Define variables
        const toolbarBase = document.querySelector('[data-kt-view-roles-table-toolbar="base"]');
        const toolbarSelected = document.querySelector('[data-kt-view-roles-table-toolbar="selected"]');
        const selectedCount = document.querySelector('[data-kt-view-roles-table-select="selected_count"]');

        // Select refreshed checkbox DOM elements 
        const allCheckboxes = table.querySelectorAll('tbody [type="checkbox"]');

        // Detect checkboxes state & count
        let checkedState = false;
        let count = 0;

        // Count checked boxes
        allCheckboxes.forEach(c => {
            if (c.checked) {
                checkedState = true;
                count++;
            }
        });

        // Toggle toolbars
        if (checkedState) {
            selectedCount.innerHTML = count;
            toolbarBase.classList.add('d-none');
            toolbarSelected.classList.remove('d-none');
        } else {
            toolbarBase.classList.remove('d-none');
            toolbarSelected.classList.add('d-none');
        }
    }

    return {
        // Public functions
        init: function () {
            table = document.querySelector('#kt_roles_view_table');
            
            if (!table) {
                return;
            }

            initViewRole();
            handleSearchDatatable();
            handleDeleteRows();
            initToggleToolbar();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersViewRole.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/roles/view/view.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/roles/view/view.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTUsersViewRole = function () {\n  // Shared variables\n  var datatable;\n  var table; // Init add schedule modal\n\n  var initViewRole = function initViewRole() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var realDate = moment(dateRow[3].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 5th column in table\n\n      dateRow[3].setAttribute('data-order', realDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 5,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 0\n      }, // Disable ordering on column 0 (checkbox)\n      {\n        orderable: false,\n        targets: 4\n      } // Disable ordering on column 4 (actions)\n      ]\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-roles-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Delete user\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-roles-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get customer name\n\n        var userName = parent.querySelectorAll('td')[1].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + userName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + userName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  }; // Init toggle toolbar\n\n\n  var initToggleToolbar = function initToggleToolbar() {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    var checkboxes = table.querySelectorAll('[type=\"checkbox\"]'); // Select elements\n\n    var deleteSelected = document.querySelector('[data-kt-view-roles-table-select=\"delete_selected\"]'); // Toggle delete selected toolbar\n\n    checkboxes.forEach(function (c) {\n      // Checkbox on click event\n      c.addEventListener('click', function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    }); // Deleted selected rows\n\n    deleteSelected.addEventListener('click', function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected customers?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected customers!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove all selected customers\n            checkboxes.forEach(function (c) {\n              if (c.checked) {\n                datatable.row($(c.closest('tbody tr'))).remove().draw();\n              }\n            }); // Remove header checked box\n\n            var headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n            headerCheckbox.checked = false;\n          }).then(function () {\n            toggleToolbars(); // Detect checked checkboxes\n\n            initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Selected customers was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Toggle toolbars\n\n\n  var toggleToolbars = function toggleToolbars() {\n    // Define variables\n    var toolbarBase = document.querySelector('[data-kt-view-roles-table-toolbar=\"base\"]');\n    var toolbarSelected = document.querySelector('[data-kt-view-roles-table-toolbar=\"selected\"]');\n    var selectedCount = document.querySelector('[data-kt-view-roles-table-select=\"selected_count\"]'); // Select refreshed checkbox DOM elements \n\n    var allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]'); // Detect checkboxes state & count\n\n    var checkedState = false;\n    var count = 0; // Count checked boxes\n\n    allCheckboxes.forEach(function (c) {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    }); // Toggle toolbars\n\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add('d-none');\n      toolbarSelected.classList.remove('d-none');\n    } else {\n      toolbarBase.classList.remove('d-none');\n      toolbarSelected.classList.add('d-none');\n    }\n  };\n\n  return {\n    // Public functions\n    init: function init() {\n      table = document.querySelector('#kt_roles_view_table');\n\n      if (!table) {\n        return;\n      }\n\n      initViewRole();\n      handleSearchDatatable();\n      handleDeleteRows();\n      initToggleToolbar();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersViewRole.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC9yb2xlcy92aWV3L3ZpZXcuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsZUFBZSxHQUFHLFlBQVk7QUFDOUI7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsS0FBSixDQUg4QixDQUs5Qjs7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQ3JCO0FBQ0EsUUFBTUMsU0FBUyxHQUFHRixLQUFLLENBQUNHLGdCQUFOLENBQXVCLFVBQXZCLENBQWxCO0FBRUFELElBQUFBLFNBQVMsQ0FBQ0UsT0FBVixDQUFrQixVQUFBQyxHQUFHLEVBQUk7QUFDckIsVUFBTUMsT0FBTyxHQUFHRCxHQUFHLENBQUNGLGdCQUFKLENBQXFCLElBQXJCLENBQWhCO0FBQ0EsVUFBTUksUUFBUSxHQUFHQyxNQUFNLENBQUNGLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0csU0FBWixFQUF1QixpQkFBdkIsQ0FBTixDQUFnREMsTUFBaEQsRUFBakIsQ0FGcUIsQ0FFc0Q7O0FBQzNFSixNQUFBQSxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdLLFlBQVgsQ0FBd0IsWUFBeEIsRUFBc0NKLFFBQXRDO0FBQ0gsS0FKRCxFQUpxQixDQVVwQjs7QUFDQVIsSUFBQUEsU0FBUyxHQUFHYSxDQUFDLENBQUNaLEtBQUQsQ0FBRCxDQUFTYSxTQUFULENBQW1CO0FBQzVCLGNBQVEsS0FEb0I7QUFFNUIsZUFBUyxFQUZtQjtBQUc1QixvQkFBYyxDQUhjO0FBSTVCLHNCQUFnQixLQUpZO0FBSzVCLG9CQUFjLENBQ1Y7QUFBRUMsUUFBQUEsU0FBUyxFQUFFLEtBQWI7QUFBb0JDLFFBQUFBLE9BQU8sRUFBRTtBQUE3QixPQURVLEVBQ3dCO0FBQ2xDO0FBQUVELFFBQUFBLFNBQVMsRUFBRSxLQUFiO0FBQW9CQyxRQUFBQSxPQUFPLEVBQUU7QUFBN0IsT0FGVSxDQUV3QjtBQUZ4QjtBQUxjLEtBQW5CLENBQVo7QUFVSixHQXJCRCxDQU44QixDQTZCOUI7OztBQUNBLE1BQUlDLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsR0FBTTtBQUM5QixRQUFNQyxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1Q0FBdkIsQ0FBckI7QUFDQUYsSUFBQUEsWUFBWSxDQUFDRyxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxVQUFVQyxDQUFWLEVBQWE7QUFDaER0QixNQUFBQSxTQUFTLENBQUN1QixNQUFWLENBQWlCRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBMUIsRUFBaUNDLElBQWpDO0FBQ0gsS0FGRDtBQUdILEdBTEQsQ0E5QjhCLENBcUM5Qjs7O0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFNO0FBQ3pCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHM0IsS0FBSyxDQUFDRyxnQkFBTixDQUF1QiwyQ0FBdkIsQ0FBdEI7QUFFQXdCLElBQUFBLGFBQWEsQ0FBQ3ZCLE9BQWQsQ0FBc0IsVUFBQXdCLENBQUMsRUFBSTtBQUN2QjtBQUNBQSxNQUFBQSxDQUFDLENBQUNSLGdCQUFGLENBQW1CLE9BQW5CLEVBQTRCLFVBQVVDLENBQVYsRUFBYTtBQUNyQ0EsUUFBQUEsQ0FBQyxDQUFDUSxjQUFGLEdBRHFDLENBR3JDOztBQUNBLFlBQU1DLE1BQU0sR0FBR1QsQ0FBQyxDQUFDRSxNQUFGLENBQVNRLE9BQVQsQ0FBaUIsSUFBakIsQ0FBZixDQUpxQyxDQU1yQzs7QUFDQSxZQUFNQyxRQUFRLEdBQUdGLE1BQU0sQ0FBQzNCLGdCQUFQLENBQXdCLElBQXhCLEVBQThCLENBQTlCLEVBQWlDOEIsU0FBbEQsQ0FQcUMsQ0FTckM7O0FBQ0FDLFFBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFVBQUFBLElBQUksRUFBRSxxQ0FBcUNKLFFBQXJDLEdBQWdELEdBRGhEO0FBRU5LLFVBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFVBQUFBLGdCQUFnQixFQUFFLElBSFo7QUFJTkMsVUFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkMsVUFBQUEsaUJBQWlCLEVBQUUsY0FMYjtBQU1OQyxVQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFVBQUFBLFdBQVcsRUFBRTtBQUNUQyxZQUFBQSxhQUFhLEVBQUUsd0JBRE47QUFFVEMsWUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxTQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLGNBQUlBLE1BQU0sQ0FBQ3RCLEtBQVgsRUFBa0I7QUFDZFUsWUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsY0FBQUEsSUFBSSxFQUFFLHNCQUFzQkosUUFBdEIsR0FBaUMsSUFEakM7QUFFTkssY0FBQUEsSUFBSSxFQUFFLFNBRkE7QUFHTkUsY0FBQUEsY0FBYyxFQUFFLEtBSFY7QUFJTkMsY0FBQUEsaUJBQWlCLEVBQUUsYUFKYjtBQUtORSxjQUFBQSxXQUFXLEVBQUU7QUFDVEMsZ0JBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsYUFBVixFQVFHRSxJQVJILENBUVEsWUFBWTtBQUNoQjtBQUNBOUMsY0FBQUEsU0FBUyxDQUFDTSxHQUFWLENBQWNPLENBQUMsQ0FBQ2tCLE1BQUQsQ0FBZixFQUF5QmlCLE1BQXpCLEdBQWtDdEIsSUFBbEM7QUFDSCxhQVhEO0FBWUgsV0FiRCxNQWFPLElBQUlxQixNQUFNLENBQUNFLE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7QUFDcENkLFlBQUFBLElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLGNBQUFBLElBQUksRUFBRWEsWUFBWSxHQUFHLG1CQURmO0FBRU5aLGNBQUFBLElBQUksRUFBRSxPQUZBO0FBR05FLGNBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLGNBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsY0FBQUEsV0FBVyxFQUFFO0FBQ1RDLGdCQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLGFBQVY7QUFTSDtBQUNKLFNBcENEO0FBcUNILE9BL0NEO0FBZ0RILEtBbEREO0FBbURILEdBdkRELENBdEM4QixDQStGOUI7OztBQUNBLE1BQUlPLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUMxQjtBQUNBO0FBQ0EsUUFBTUMsVUFBVSxHQUFHbkQsS0FBSyxDQUFDRyxnQkFBTixDQUF1QixtQkFBdkIsQ0FBbkIsQ0FIMEIsQ0FLMUI7O0FBQ0EsUUFBTWlELGNBQWMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxREFBdkIsQ0FBdkIsQ0FOMEIsQ0FRMUI7O0FBQ0FnQyxJQUFBQSxVQUFVLENBQUMvQyxPQUFYLENBQW1CLFVBQUFpRCxDQUFDLEVBQUk7QUFDcEI7QUFDQUEsTUFBQUEsQ0FBQyxDQUFDakMsZ0JBQUYsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBWTtBQUNwQ2tDLFFBQUFBLFVBQVUsQ0FBQyxZQUFZO0FBQ25CQyxVQUFBQSxjQUFjO0FBQ2pCLFNBRlMsRUFFUCxFQUZPLENBQVY7QUFHSCxPQUpEO0FBS0gsS0FQRCxFQVQwQixDQWtCMUI7O0FBQ0FILElBQUFBLGNBQWMsQ0FBQ2hDLGdCQUFmLENBQWdDLE9BQWhDLEVBQXlDLFlBQVk7QUFDakQ7QUFDQWMsTUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsUUFBQUEsSUFBSSxFQUFFLHFEQURBO0FBRU5DLFFBQUFBLElBQUksRUFBRSxTQUZBO0FBR05DLFFBQUFBLGdCQUFnQixFQUFFLElBSFo7QUFJTkMsUUFBQUEsY0FBYyxFQUFFLEtBSlY7QUFLTkMsUUFBQUEsaUJBQWlCLEVBQUUsY0FMYjtBQU1OQyxRQUFBQSxnQkFBZ0IsRUFBRSxZQU5aO0FBT05DLFFBQUFBLFdBQVcsRUFBRTtBQUNUQyxVQUFBQSxhQUFhLEVBQUUsd0JBRE47QUFFVEMsVUFBQUEsWUFBWSxFQUFFO0FBRkw7QUFQUCxPQUFWLEVBV0dDLElBWEgsQ0FXUSxVQUFVQyxNQUFWLEVBQWtCO0FBQ3RCLFlBQUlBLE1BQU0sQ0FBQ3RCLEtBQVgsRUFBa0I7QUFDZFUsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLDJDQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxTQUZBO0FBR05FLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVixFQVFHRSxJQVJILENBUVEsWUFBWTtBQUNoQjtBQUNBTSxZQUFBQSxVQUFVLENBQUMvQyxPQUFYLENBQW1CLFVBQUFpRCxDQUFDLEVBQUk7QUFDcEIsa0JBQUlBLENBQUMsQ0FBQ0csT0FBTixFQUFlO0FBQ1h6RCxnQkFBQUEsU0FBUyxDQUFDTSxHQUFWLENBQWNPLENBQUMsQ0FBQ3lDLENBQUMsQ0FBQ3RCLE9BQUYsQ0FBVSxVQUFWLENBQUQsQ0FBZixFQUF3Q2dCLE1BQXhDLEdBQWlEdEIsSUFBakQ7QUFDSDtBQUNKLGFBSkQsRUFGZ0IsQ0FRaEI7O0FBQ0EsZ0JBQU1nQyxjQUFjLEdBQUd6RCxLQUFLLENBQUNHLGdCQUFOLENBQXVCLG1CQUF2QixFQUE0QyxDQUE1QyxDQUF2QjtBQUNBc0QsWUFBQUEsY0FBYyxDQUFDRCxPQUFmLEdBQXlCLEtBQXpCO0FBQ0gsV0FuQkQsRUFtQkdYLElBbkJILENBbUJRLFlBQVU7QUFDZFUsWUFBQUEsY0FBYyxHQURBLENBQ0k7O0FBQ2xCTCxZQUFBQSxpQkFBaUIsR0FGSCxDQUVPO0FBQ3hCLFdBdEJEO0FBdUJILFNBeEJELE1Bd0JPLElBQUlKLE1BQU0sQ0FBQ0UsT0FBUCxLQUFtQixRQUF2QixFQUFpQztBQUNwQ2QsVUFBQUEsSUFBSSxDQUFDQyxJQUFMLENBQVU7QUFDTkMsWUFBQUEsSUFBSSxFQUFFLHFDQURBO0FBRU5DLFlBQUFBLElBQUksRUFBRSxPQUZBO0FBR05FLFlBQUFBLGNBQWMsRUFBRSxLQUhWO0FBSU5DLFlBQUFBLGlCQUFpQixFQUFFLGFBSmI7QUFLTkUsWUFBQUEsV0FBVyxFQUFFO0FBQ1RDLGNBQUFBLGFBQWEsRUFBRTtBQUROO0FBTFAsV0FBVjtBQVNIO0FBQ0osT0EvQ0Q7QUFnREgsS0FsREQ7QUFtREgsR0F0RUQsQ0FoRzhCLENBd0s5Qjs7O0FBQ0EsTUFBTVksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFNO0FBQ3pCO0FBQ0EsUUFBTUcsV0FBVyxHQUFHeEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJDQUF2QixDQUFwQjtBQUNBLFFBQU13QyxlQUFlLEdBQUd6QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsK0NBQXZCLENBQXhCO0FBQ0EsUUFBTXlDLGFBQWEsR0FBRzFDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvREFBdkIsQ0FBdEIsQ0FKeUIsQ0FNekI7O0FBQ0EsUUFBTTBDLGFBQWEsR0FBRzdELEtBQUssQ0FBQ0csZ0JBQU4sQ0FBdUIseUJBQXZCLENBQXRCLENBUHlCLENBU3pCOztBQUNBLFFBQUkyRCxZQUFZLEdBQUcsS0FBbkI7QUFDQSxRQUFJQyxLQUFLLEdBQUcsQ0FBWixDQVh5QixDQWF6Qjs7QUFDQUYsSUFBQUEsYUFBYSxDQUFDekQsT0FBZCxDQUFzQixVQUFBaUQsQ0FBQyxFQUFJO0FBQ3ZCLFVBQUlBLENBQUMsQ0FBQ0csT0FBTixFQUFlO0FBQ1hNLFFBQUFBLFlBQVksR0FBRyxJQUFmO0FBQ0FDLFFBQUFBLEtBQUs7QUFDUjtBQUNKLEtBTEQsRUFkeUIsQ0FxQnpCOztBQUNBLFFBQUlELFlBQUosRUFBa0I7QUFDZEYsTUFBQUEsYUFBYSxDQUFDbkQsU0FBZCxHQUEwQnNELEtBQTFCO0FBQ0FMLE1BQUFBLFdBQVcsQ0FBQ00sU0FBWixDQUFzQkMsR0FBdEIsQ0FBMEIsUUFBMUI7QUFDQU4sTUFBQUEsZUFBZSxDQUFDSyxTQUFoQixDQUEwQmpCLE1BQTFCLENBQWlDLFFBQWpDO0FBQ0gsS0FKRCxNQUlPO0FBQ0hXLE1BQUFBLFdBQVcsQ0FBQ00sU0FBWixDQUFzQmpCLE1BQXRCLENBQTZCLFFBQTdCO0FBQ0FZLE1BQUFBLGVBQWUsQ0FBQ0ssU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0FBQ0g7QUFDSixHQTlCRDs7QUFnQ0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkbEUsTUFBQUEsS0FBSyxHQUFHa0IsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFSOztBQUVBLFVBQUksQ0FBQ25CLEtBQUwsRUFBWTtBQUNSO0FBQ0g7O0FBRURDLE1BQUFBLFlBQVk7QUFDWmUsTUFBQUEscUJBQXFCO0FBQ3JCVSxNQUFBQSxnQkFBZ0I7QUFDaEJ3QixNQUFBQSxpQkFBaUI7QUFDcEI7QUFiRSxHQUFQO0FBZUgsQ0F4TnFCLEVBQXRCLEMsQ0EwTkE7OztBQUNBaUIsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDdEUsRUFBQUEsZUFBZSxDQUFDb0UsSUFBaEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy91c2VyLW1hbmFnZW1lbnQvcm9sZXMvdmlldy92aWV3LmpzPzEzYjAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFVzZXJzVmlld1JvbGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIHZhciBkYXRhdGFibGU7XG4gICAgdmFyIHRhYmxlO1xuXG4gICAgLy8gSW5pdCBhZGQgc2NoZWR1bGUgbW9kYWxcbiAgICB2YXIgaW5pdFZpZXdSb2xlID0gKCkgPT4ge1xuICAgICAgICAvLyBTZXQgZGF0ZSBkYXRhIG9yZGVyXG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XG5cbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2gocm93ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVSb3cgPSByb3cucXVlcnlTZWxlY3RvckFsbCgndGQnKTtcbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KGRhdGVSb3dbM10uaW5uZXJIVE1MLCBcIkREIE1NTSBZWVlZLCBMVFwiKS5mb3JtYXQoKTsgLy8gc2VsZWN0IGRhdGUgZnJvbSA1dGggY29sdW1uIGluIHRhYmxlXG4gICAgICAgICAgICBkYXRlUm93WzNdLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmRlcicsIHJlYWxEYXRlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXG4gICAgICAgICBkYXRhdGFibGUgPSAkKHRhYmxlKS5EYXRhVGFibGUoe1xuICAgICAgICAgICAgXCJpbmZvXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ29yZGVyJzogW10sXG4gICAgICAgICAgICBcInBhZ2VMZW5ndGhcIjogNSxcbiAgICAgICAgICAgIFwibGVuZ3RoQ2hhbmdlXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXG4gICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiAwIH0sIC8vIERpc2FibGUgb3JkZXJpbmcgb24gY29sdW1uIDAgKGNoZWNrYm94KVxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogNCB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiA0IChhY3Rpb25zKVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIC8vIFNlYXJjaCBEYXRhdGFibGUgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL2RhdGF0YWJsZXMubmV0L3JlZmVyZW5jZS9hcGkvc2VhcmNoKClcbiAgICB2YXIgaGFuZGxlU2VhcmNoRGF0YXRhYmxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1yb2xlcy10YWJsZS1maWx0ZXI9XCJzZWFyY2hcIl0nKTtcbiAgICAgICAgZmlsdGVyU2VhcmNoLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGRhdGF0YWJsZS5zZWFyY2goZS50YXJnZXQudmFsdWUpLmRyYXcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVsZXRlIHVzZXJcbiAgICB2YXIgaGFuZGxlRGVsZXRlUm93cyA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBkZWxldGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3Qtcm9sZXMtdGFibGUtZmlsdGVyPVwiZGVsZXRlX3Jvd1wiXScpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gb24gY2xpY2tcbiAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBwYXJlbnQgcm93XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCBjdXN0b21lciBuYW1lXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlck5hbWUgPSBwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgndGQnKVsxXS5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyB1c2VyTmFtZSArIFwiP1wiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSFcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBkZWxldGVkIFwiICsgdXNlck5hbWUgKyBcIiEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coJChwYXJlbnQpKS5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogY3VzdG9tZXJOYW1lICsgXCIgd2FzIG5vdCBkZWxldGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEluaXQgdG9nZ2xlIHRvb2xiYXJcbiAgICB2YXIgaW5pdFRvZ2dsZVRvb2xiYXIgPSAoKSA9PiB7XG4gICAgICAgIC8vIFRvZ2dsZSBzZWxlY3RlZCBhY3Rpb24gdG9vbGJhclxuICAgICAgICAvLyBTZWxlY3QgYWxsIGNoZWNrYm94ZXNcbiAgICAgICAgY29uc3QgY2hlY2tib3hlcyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKTtcblxuICAgICAgICAvLyBTZWxlY3QgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGVsZXRlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC12aWV3LXJvbGVzLXRhYmxlLXNlbGVjdD1cImRlbGV0ZV9zZWxlY3RlZFwiXScpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZWxldGUgc2VsZWN0ZWQgdG9vbGJhclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAvLyBDaGVja2JveCBvbiBjbGljayBldmVudFxuICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVsZXRlZCBzZWxlY3RlZCByb3dzXG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3dlZXRBbGVydDIgcG9wIHVwIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBzZWxlY3RlZCBjdXN0b21lcnM/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgZGVsZXRlZCBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQoYy5jbG9zZXN0KCd0Ym9keSB0cicpKSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaGVhZGVyIGNoZWNrZWQgYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJDaGVja2JveCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTsgLy8gRGV0ZWN0IGNoZWNrZWQgY2hlY2tib3hlc1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdFRvZ2dsZVRvb2xiYXIoKTsgLy8gUmUtaW5pdCB0b29sYmFyIHRvIHJlY2FsY3VsYXRlIGNoZWNrYm94ZXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiU2VsZWN0ZWQgY3VzdG9tZXJzIHdhcyBub3QgZGVsZXRlZC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFRvZ2dsZSB0b29sYmFyc1xuICAgIGNvbnN0IHRvZ2dsZVRvb2xiYXJzID0gKCkgPT4ge1xuICAgICAgICAvLyBEZWZpbmUgdmFyaWFibGVzXG4gICAgICAgIGNvbnN0IHRvb2xiYXJCYXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtdmlldy1yb2xlcy10YWJsZS10b29sYmFyPVwiYmFzZVwiXScpO1xuICAgICAgICBjb25zdCB0b29sYmFyU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC12aWV3LXJvbGVzLXRhYmxlLXRvb2xiYXI9XCJzZWxlY3RlZFwiXScpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3Qtdmlldy1yb2xlcy10YWJsZS1zZWxlY3Q9XCJzZWxlY3RlZF9jb3VudFwiXScpO1xuXG4gICAgICAgIC8vIFNlbGVjdCByZWZyZXNoZWQgY2hlY2tib3ggRE9NIGVsZW1lbnRzIFxuICAgICAgICBjb25zdCBhbGxDaGVja2JveGVzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgW3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG4gICAgICAgIC8vIERldGVjdCBjaGVja2JveGVzIHN0YXRlICYgY291bnRcbiAgICAgICAgbGV0IGNoZWNrZWRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIENvdW50IGNoZWNrZWQgYm94ZXNcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRvb2xiYXJzXG4gICAgICAgIGlmIChjaGVja2VkU3RhdGUpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgICAgICAgICB0b29sYmFyQmFzZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHRvb2xiYXJTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvb2xiYXJCYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdG9vbGJhclNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0YWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9yb2xlc192aWV3X3RhYmxlJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghdGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRWaWV3Um9sZSgpO1xuICAgICAgICAgICAgaGFuZGxlU2VhcmNoRGF0YXRhYmxlKCk7XG4gICAgICAgICAgICBoYW5kbGVEZWxldGVSb3dzKCk7XG4gICAgICAgICAgICBpbml0VG9nZ2xlVG9vbGJhcigpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVXNlcnNWaWV3Um9sZS5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RVc2Vyc1ZpZXdSb2xlIiwiZGF0YXRhYmxlIiwidGFibGUiLCJpbml0Vmlld1JvbGUiLCJ0YWJsZVJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJvdyIsImRhdGVSb3ciLCJyZWFsRGF0ZSIsIm1vbWVudCIsImlubmVySFRNTCIsImZvcm1hdCIsInNldEF0dHJpYnV0ZSIsIiQiLCJEYXRhVGFibGUiLCJvcmRlcmFibGUiLCJ0YXJnZXRzIiwiaGFuZGxlU2VhcmNoRGF0YXRhYmxlIiwiZmlsdGVyU2VhcmNoIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJzZWFyY2giLCJ0YXJnZXQiLCJ2YWx1ZSIsImRyYXciLCJoYW5kbGVEZWxldGVSb3dzIiwiZGVsZXRlQnV0dG9ucyIsImQiLCJwcmV2ZW50RGVmYXVsdCIsInBhcmVudCIsImNsb3Nlc3QiLCJ1c2VyTmFtZSIsImlubmVyVGV4dCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aGVuIiwicmVzdWx0IiwicmVtb3ZlIiwiZGlzbWlzcyIsImN1c3RvbWVyTmFtZSIsImluaXRUb2dnbGVUb29sYmFyIiwiY2hlY2tib3hlcyIsImRlbGV0ZVNlbGVjdGVkIiwiYyIsInNldFRpbWVvdXQiLCJ0b2dnbGVUb29sYmFycyIsImNoZWNrZWQiLCJoZWFkZXJDaGVja2JveCIsInRvb2xiYXJCYXNlIiwidG9vbGJhclNlbGVjdGVkIiwic2VsZWN0ZWRDb3VudCIsImFsbENoZWNrYm94ZXMiLCJjaGVja2VkU3RhdGUiLCJjb3VudCIsImNsYXNzTGlzdCIsImFkZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/roles/view/view.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/roles/view/view.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=view.js.map