/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/user-management/users/list/table.js ***!
  \***************************************************************************************************/


var KTUsersList = function () {
    // Define shared variables
    var table = document.getElementById('kt_table_users');
    var datatable;
    var toolbarBase;
    var toolbarSelected;
    var selectedCount;

    // Private functions
    var initUserTable = function () {
        // Set date data order
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach(row => {
            const dateRow = row.querySelectorAll('td');
            const lastLogin = dateRow[3].innerText.toLowerCase(); // Get last login time
            let timeCount = 0;
            let timeFormat = 'minutes';

            // Determine date & time format -- add more formats when necessary
            if (lastLogin.includes('yesterday')) {
                timeCount = 1;
                timeFormat = 'days';
            } else if (lastLogin.includes('mins')) {
                timeCount = parseInt(lastLogin.replace(/\D/g, ''));
                timeFormat = 'minutes';
            } else if (lastLogin.includes('hours')) {
                timeCount = parseInt(lastLogin.replace(/\D/g, ''));
                timeFormat = 'hours';
            } else if (lastLogin.includes('days')) {
                timeCount = parseInt(lastLogin.replace(/\D/g, ''));
                timeFormat = 'days';
            } else if (lastLogin.includes('weeks')) {
                timeCount = parseInt(lastLogin.replace(/\D/g, ''));
                timeFormat = 'weeks';
            }

            // Subtract date/time from today -- more info on moment datetime subtraction: https://momentjs.com/docs/#/durations/subtract/
            const realDate = moment().subtract(timeCount, timeFormat).format();

            // Insert real date to last login attribute
            dateRow[3].setAttribute('data-order', realDate);

            // Set real date for joined column
            const joinedDate = moment(dateRow[5].innerHTML, "DD MMM YYYY, LT").format(); // select date from 5th column in table
            dateRow[5].setAttribute('data-order', joinedDate);
        });

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            "pageLength": 10,
            "lengthChange": false,
            'columnDefs': [
                { orderable: false, targets: 0 }, // Disable ordering on column 0 (checkbox)
                { orderable: false, targets: 6 }, // Disable ordering on column 6 (actions)                
            ]
        });

        // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw
        datatable.on('draw', function () {
            initToggleToolbar();
            handleDeleteRows();
            toggleToolbars();
        });
    }

    // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()
    var handleSearchDatatable = () => {
        const filterSearch = document.querySelector('[data-kt-user-table-filter="search"]');
        filterSearch.addEventListener('keyup', function (e) {
            datatable.search(e.target.value).draw();
        });
    }

    // Filter Datatable
    var handleFilterDatatable = () => {
        // Select filter options
        const filterForm = document.querySelector('[data-kt-user-table-filter="form"]');
        const filterButton = filterForm.querySelector('[data-kt-user-table-filter="filter"]');
        const selectOptions = filterForm.querySelectorAll('select');

        // Filter datatable on submit
        filterButton.addEventListener('click', function () {
            var filterString = '';

            // Get filter values
            selectOptions.forEach((item, index) => {
                if (item.value && item.value !== '') {
                    if (index !== 0) {
                        filterString += ' ';
                    }

                    // Build filter value options
                    filterString += item.value;
                }
            });

            // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()
            datatable.search(filterString).draw();
        });
    }

    // Reset Filter
    var handleResetForm = () => {
        // Select reset button
        const resetButton = document.querySelector('[data-kt-user-table-filter="reset"]');

        // Reset datatable
        resetButton.addEventListener('click', function () {
            // Select filter options
            const filterForm = document.querySelector('[data-kt-user-table-filter="form"]');
            const selectOptions = filterForm.querySelectorAll('select');

            // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items
            selectOptions.forEach(select => {
                $(select).val('').trigger('change');
            });

            // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()
            datatable.search('').draw();
        });
    }


    // Delete subscirption
    var handleDeleteRows = () => {
        // Select all delete buttons
        const deleteButtons = table.querySelectorAll('[data-kt-users-table-filter="delete_row"]');

        deleteButtons.forEach(d => {
            // Delete button on click
            d.addEventListener('click', function (e) {
                e.preventDefault();

                // Select parent row
                const parent = e.target.closest('tr');

                // Get user name
                const userName = parent.querySelectorAll('td')[1].querySelectorAll('a')[1].innerText;

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
                        }).then(function () {
                            // Detect checked checkboxes
                            toggleToolbars();
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
        toolbarBase = document.querySelector('[data-kt-user-table-toolbar="base"]');
        toolbarSelected = document.querySelector('[data-kt-user-table-toolbar="selected"]');
        selectedCount = document.querySelector('[data-kt-user-table-select="selected_count"]');
        const deleteSelected = document.querySelector('[data-kt-user-table-select="delete_selected"]');

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
                    }).then(function () {
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
            if (!table) {
                return;
            }

            initUserTable();
            initToggleToolbar();
            handleSearchDatatable();
            handleResetForm();
            handleDeleteRows();
            handleFilterDatatable();

        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTUsersList.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/user-management/users/list/table.js":
/*!**************************************************************************!*\
  !*** ./resources/src/js/custom/apps/user-management/users/list/table.js ***!
  \**************************************************************************/
/***/ (() => {

eval("\n\nvar KTUsersList = function () {\n  // Define shared variables\n  var table = document.getElementById('kt_table_users');\n  var datatable;\n  var toolbarBase;\n  var toolbarSelected;\n  var selectedCount; // Private functions\n\n  var initUserTable = function initUserTable() {\n    // Set date data order\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (row) {\n      var dateRow = row.querySelectorAll('td');\n      var lastLogin = dateRow[3].innerText.toLowerCase(); // Get last login time\n\n      var timeCount = 0;\n      var timeFormat = 'minutes'; // Determine date & time format -- add more formats when necessary\n\n      if (lastLogin.includes('yesterday')) {\n        timeCount = 1;\n        timeFormat = 'days';\n      } else if (lastLogin.includes('mins')) {\n        timeCount = parseInt(lastLogin.replace(/\\D/g, ''));\n        timeFormat = 'minutes';\n      } else if (lastLogin.includes('hours')) {\n        timeCount = parseInt(lastLogin.replace(/\\D/g, ''));\n        timeFormat = 'hours';\n      } else if (lastLogin.includes('days')) {\n        timeCount = parseInt(lastLogin.replace(/\\D/g, ''));\n        timeFormat = 'days';\n      } else if (lastLogin.includes('weeks')) {\n        timeCount = parseInt(lastLogin.replace(/\\D/g, ''));\n        timeFormat = 'weeks';\n      } // Subtract date/time from today -- more info on moment datetime subtraction: https://momentjs.com/docs/#/durations/subtract/\n\n\n      var realDate = moment().subtract(timeCount, timeFormat).format(); // Insert real date to last login attribute\n\n      dateRow[3].setAttribute('data-order', realDate); // Set real date for joined column\n\n      var joinedDate = moment(dateRow[5].innerHTML, \"DD MMM YYYY, LT\").format(); // select date from 5th column in table\n\n      dateRow[5].setAttribute('data-order', joinedDate);\n    }); // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      \"pageLength\": 10,\n      \"lengthChange\": false,\n      'columnDefs': [{\n        orderable: false,\n        targets: 0\n      }, // Disable ordering on column 0 (checkbox)\n      {\n        orderable: false,\n        targets: 6\n      } // Disable ordering on column 6 (actions)                \n      ]\n    }); // Re-init functions on every table re-draw -- more info: https://datatables.net/reference/event/draw\n\n    datatable.on('draw', function () {\n      initToggleToolbar();\n      handleDeleteRows();\n      toggleToolbars();\n    });\n  }; // Search Datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n\n  var handleSearchDatatable = function handleSearchDatatable() {\n    var filterSearch = document.querySelector('[data-kt-user-table-filter=\"search\"]');\n    filterSearch.addEventListener('keyup', function (e) {\n      datatable.search(e.target.value).draw();\n    });\n  }; // Filter Datatable\n\n\n  var handleFilterDatatable = function handleFilterDatatable() {\n    // Select filter options\n    var filterForm = document.querySelector('[data-kt-user-table-filter=\"form\"]');\n    var filterButton = filterForm.querySelector('[data-kt-user-table-filter=\"filter\"]');\n    var selectOptions = filterForm.querySelectorAll('select'); // Filter datatable on submit\n\n    filterButton.addEventListener('click', function () {\n      var filterString = ''; // Get filter values\n\n      selectOptions.forEach(function (item, index) {\n        if (item.value && item.value !== '') {\n          if (index !== 0) {\n            filterString += ' ';\n          } // Build filter value options\n\n\n          filterString += item.value;\n        }\n      }); // Filter datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n      datatable.search(filterString).draw();\n    });\n  }; // Reset Filter\n\n\n  var handleResetForm = function handleResetForm() {\n    // Select reset button\n    var resetButton = document.querySelector('[data-kt-user-table-filter=\"reset\"]'); // Reset datatable\n\n    resetButton.addEventListener('click', function () {\n      // Select filter options\n      var filterForm = document.querySelector('[data-kt-user-table-filter=\"form\"]');\n      var selectOptions = filterForm.querySelectorAll('select'); // Reset select2 values -- more info: https://select2.org/programmatic-control/add-select-clear-items\n\n      selectOptions.forEach(function (select) {\n        $(select).val('').trigger('change');\n      }); // Reset datatable --- official docs reference: https://datatables.net/reference/api/search()\n\n      datatable.search('').draw();\n    });\n  }; // Delete subscirption\n\n\n  var handleDeleteRows = function handleDeleteRows() {\n    // Select all delete buttons\n    var deleteButtons = table.querySelectorAll('[data-kt-users-table-filter=\"delete_row\"]');\n    deleteButtons.forEach(function (d) {\n      // Delete button on click\n      d.addEventListener('click', function (e) {\n        e.preventDefault(); // Select parent row\n\n        var parent = e.target.closest('tr'); // Get user name\n\n        var userName = parent.querySelectorAll('td')[1].querySelectorAll('a')[1].innerText; // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n        Swal.fire({\n          text: \"Are you sure you want to delete \" + userName + \"?\",\n          icon: \"warning\",\n          showCancelButton: true,\n          buttonsStyling: false,\n          confirmButtonText: \"Yes, delete!\",\n          cancelButtonText: \"No, cancel\",\n          customClass: {\n            confirmButton: \"btn fw-bold btn-danger\",\n            cancelButton: \"btn fw-bold btn-active-light-primary\"\n          }\n        }).then(function (result) {\n          if (result.value) {\n            Swal.fire({\n              text: \"You have deleted \" + userName + \"!.\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            }).then(function () {\n              // Remove current row\n              datatable.row($(parent)).remove().draw();\n            }).then(function () {\n              // Detect checked checkboxes\n              toggleToolbars();\n            });\n          } else if (result.dismiss === 'cancel') {\n            Swal.fire({\n              text: customerName + \" was not deleted.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn fw-bold btn-primary\"\n              }\n            });\n          }\n        });\n      });\n    });\n  }; // Init toggle toolbar\n\n\n  var initToggleToolbar = function initToggleToolbar() {\n    // Toggle selected action toolbar\n    // Select all checkboxes\n    var checkboxes = table.querySelectorAll('[type=\"checkbox\"]'); // Select elements\n\n    toolbarBase = document.querySelector('[data-kt-user-table-toolbar=\"base\"]');\n    toolbarSelected = document.querySelector('[data-kt-user-table-toolbar=\"selected\"]');\n    selectedCount = document.querySelector('[data-kt-user-table-select=\"selected_count\"]');\n    var deleteSelected = document.querySelector('[data-kt-user-table-select=\"delete_selected\"]'); // Toggle delete selected toolbar\n\n    checkboxes.forEach(function (c) {\n      // Checkbox on click event\n      c.addEventListener('click', function () {\n        setTimeout(function () {\n          toggleToolbars();\n        }, 50);\n      });\n    }); // Deleted selected rows\n\n    deleteSelected.addEventListener('click', function () {\n      // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n      Swal.fire({\n        text: \"Are you sure you want to delete selected customers?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted all selected customers!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove all selected customers\n            checkboxes.forEach(function (c) {\n              if (c.checked) {\n                datatable.row($(c.closest('tbody tr'))).remove().draw();\n              }\n            }); // Remove header checked box\n\n            var headerCheckbox = table.querySelectorAll('[type=\"checkbox\"]')[0];\n            headerCheckbox.checked = false;\n          }).then(function () {\n            toggleToolbars(); // Detect checked checkboxes\n\n            initToggleToolbar(); // Re-init toolbar to recalculate checkboxes\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Selected customers was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Toggle toolbars\n\n\n  var toggleToolbars = function toggleToolbars() {\n    // Select refreshed checkbox DOM elements \n    var allCheckboxes = table.querySelectorAll('tbody [type=\"checkbox\"]'); // Detect checkboxes state & count\n\n    var checkedState = false;\n    var count = 0; // Count checked boxes\n\n    allCheckboxes.forEach(function (c) {\n      if (c.checked) {\n        checkedState = true;\n        count++;\n      }\n    }); // Toggle toolbars\n\n    if (checkedState) {\n      selectedCount.innerHTML = count;\n      toolbarBase.classList.add('d-none');\n      toolbarSelected.classList.remove('d-none');\n    } else {\n      toolbarBase.classList.remove('d-none');\n      toolbarSelected.classList.add('d-none');\n    }\n  };\n\n  return {\n    // Public functions  \n    init: function init() {\n      if (!table) {\n        return;\n      }\n\n      initUserTable();\n      initToggleToolbar();\n      handleSearchDatatable();\n      handleResetForm();\n      handleDeleteRows();\n      handleFilterDatatable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTUsersList.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3VzZXItbWFuYWdlbWVudC91c2Vycy9saXN0L3RhYmxlLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLFdBQVcsR0FBRyxZQUFZO0FBQzFCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsZ0JBQXhCLENBQVo7QUFDQSxNQUFJQyxTQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLGVBQUo7QUFDQSxNQUFJQyxhQUFKLENBTjBCLENBUTFCOztBQUNBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBWTtBQUM1QjtBQUNBLFFBQU1DLFNBQVMsR0FBR1IsS0FBSyxDQUFDUyxnQkFBTixDQUF1QixVQUF2QixDQUFsQjtBQUVBRCxJQUFBQSxTQUFTLENBQUNFLE9BQVYsQ0FBa0IsVUFBQUMsR0FBRyxFQUFJO0FBQ3JCLFVBQU1DLE9BQU8sR0FBR0QsR0FBRyxDQUFDRixnQkFBSixDQUFxQixJQUFyQixDQUFoQjtBQUNBLFVBQU1JLFNBQVMsR0FBR0QsT0FBTyxDQUFDLENBQUQsQ0FBUCxDQUFXRSxTQUFYLENBQXFCQyxXQUFyQixFQUFsQixDQUZxQixDQUVpQzs7QUFDdEQsVUFBSUMsU0FBUyxHQUFHLENBQWhCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLFNBQWpCLENBSnFCLENBTXJCOztBQUNBLFVBQUlKLFNBQVMsQ0FBQ0ssUUFBVixDQUFtQixXQUFuQixDQUFKLEVBQXFDO0FBQ2pDRixRQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNBQyxRQUFBQSxVQUFVLEdBQUcsTUFBYjtBQUNILE9BSEQsTUFHTyxJQUFJSixTQUFTLENBQUNLLFFBQVYsQ0FBbUIsTUFBbkIsQ0FBSixFQUFnQztBQUNuQ0YsUUFBQUEsU0FBUyxHQUFHRyxRQUFRLENBQUNOLFNBQVMsQ0FBQ08sT0FBVixDQUFrQixLQUFsQixFQUF5QixFQUF6QixDQUFELENBQXBCO0FBQ0FILFFBQUFB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aEIsQ0FBMEJDLEdBQTFCLENBQThCLFFBQTlCO0FBQ0g7QUFDSixHQXpCRDs7QUEyQkEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkLFVBQUksQ0FBQzFGLEtBQUwsRUFBWTtBQUNSO0FBQ0g7O0FBRURPLE1BQUFBLGFBQWE7QUFDYjBCLE1BQUFBLGlCQUFpQjtBQUNqQkcsTUFBQUEscUJBQXFCO0FBQ3JCZ0IsTUFBQUEsZUFBZTtBQUNmbEIsTUFBQUEsZ0JBQWdCO0FBQ2hCVyxNQUFBQSxxQkFBcUI7QUFFeEI7QUFkRSxHQUFQO0FBZ0JILENBblRpQixFQUFsQixDLENBcVRBOzs7QUFDQThDLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQzdGLEVBQUFBLFdBQVcsQ0FBQzJGLElBQVo7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy91c2VyLW1hbmFnZW1lbnQvdXNlcnMvbGlzdC90YWJsZS5qcz8zYWE1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG52YXIgS1RVc2Vyc0xpc3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gRGVmaW5lIHNoYXJlZCB2YXJpYWJsZXNcbiAgICB2YXIgdGFibGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfdGFibGVfdXNlcnMnKTtcbiAgICB2YXIgZGF0YXRhYmxlO1xuICAgIHZhciB0b29sYmFyQmFzZTtcbiAgICB2YXIgdG9vbGJhclNlbGVjdGVkO1xuICAgIHZhciBzZWxlY3RlZENvdW50O1xuXG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgaW5pdFVzZXJUYWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU2V0IGRhdGUgZGF0YSBvcmRlclxuICAgICAgICBjb25zdCB0YWJsZVJvd3MgPSB0YWJsZS5xdWVyeVNlbGVjdG9yQWxsKCd0Ym9keSB0cicpO1xuXG4gICAgICAgIHRhYmxlUm93cy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlUm93ID0gcm93LnF1ZXJ5U2VsZWN0b3JBbGwoJ3RkJyk7XG4gICAgICAgICAgICBjb25zdCBsYXN0TG9naW4gPSBkYXRlUm93WzNdLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpOyAvLyBHZXQgbGFzdCBsb2dpbiB0aW1lXG4gICAgICAgICAgICBsZXQgdGltZUNvdW50ID0gMDtcbiAgICAgICAgICAgIGxldCB0aW1lRm9ybWF0ID0gJ21pbnV0ZXMnO1xuXG4gICAgICAgICAgICAvLyBEZXRlcm1pbmUgZGF0ZSAmIHRpbWUgZm9ybWF0IC0tIGFkZCBtb3JlIGZvcm1hdHMgd2hlbiBuZWNlc3NhcnlcbiAgICAgICAgICAgIGlmIChsYXN0TG9naW4uaW5jbHVkZXMoJ3llc3RlcmRheScpKSB7XG4gICAgICAgICAgICAgICAgdGltZUNvdW50ID0gMTtcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gJ2RheXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0TG9naW4uaW5jbHVkZXMoJ21pbnMnKSkge1xuICAgICAgICAgICAgICAgIHRpbWVDb3VudCA9IHBhcnNlSW50KGxhc3RMb2dpbi5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gJ21pbnV0ZXMnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChsYXN0TG9naW4uaW5jbHVkZXMoJ2hvdXJzJykpIHtcbiAgICAgICAgICAgICAgICB0aW1lQ291bnQgPSBwYXJzZUludChsYXN0TG9naW4ucmVwbGFjZSgvXFxEL2csICcnKSk7XG4gICAgICAgICAgICAgICAgdGltZUZvcm1hdCA9ICdob3Vycyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RMb2dpbi5pbmNsdWRlcygnZGF5cycpKSB7XG4gICAgICAgICAgICAgICAgdGltZUNvdW50ID0gcGFyc2VJbnQobGFzdExvZ2luLnJlcGxhY2UoL1xcRC9nLCAnJykpO1xuICAgICAgICAgICAgICAgIHRpbWVGb3JtYXQgPSAnZGF5cyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxhc3RMb2dpbi5pbmNsdWRlcygnd2Vla3MnKSkge1xuICAgICAgICAgICAgICAgIHRpbWVDb3VudCA9IHBhcnNlSW50KGxhc3RMb2dpbi5yZXBsYWNlKC9cXEQvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0aW1lRm9ybWF0ID0gJ3dlZWtzJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gU3VidHJhY3QgZGF0ZS90aW1lIGZyb20gdG9kYXkgLS0gbW9yZSBpbmZvIG9uIG1vbWVudCBkYXRldGltZSBzdWJ0cmFjdGlvbjogaHR0cHM6Ly9tb21lbnRqcy5jb20vZG9jcy8jL2R1cmF0aW9ucy9zdWJ0cmFjdC9cbiAgICAgICAgICAgIGNvbnN0IHJlYWxEYXRlID0gbW9tZW50KCkuc3VidHJhY3QodGltZUNvdW50LCB0aW1lRm9ybWF0KS5mb3JtYXQoKTtcblxuICAgICAgICAgICAgLy8gSW5zZXJ0IHJlYWwgZGF0ZSB0byBsYXN0IGxvZ2luIGF0dHJpYnV0ZVxuICAgICAgICAgICAgZGF0ZVJvd1szXS5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JkZXInLCByZWFsRGF0ZSk7XG5cbiAgICAgICAgICAgIC8vIFNldCByZWFsIGRhdGUgZm9yIGpvaW5lZCBjb2x1bW5cbiAgICAgICAgICAgIGNvbnN0IGpvaW5lZERhdGUgPSBtb21lbnQoZGF0ZVJvd1s1XS5pbm5lckhUTUwsIFwiREQgTU1NIFlZWVksIExUXCIpLmZvcm1hdCgpOyAvLyBzZWxlY3QgZGF0ZSBmcm9tIDV0aCBjb2x1bW4gaW4gdGFibGVcbiAgICAgICAgICAgIGRhdGVSb3dbNV0uc2V0QXR0cmlidXRlKCdkYXRhLW9yZGVyJywgam9pbmVkRGF0ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIEluaXQgZGF0YXRhYmxlIC0tLSBtb3JlIGluZm8gb24gZGF0YXRhYmxlczogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9tYW51YWwvXG4gICAgICAgIGRhdGF0YWJsZSA9ICQodGFibGUpLkRhdGFUYWJsZSh7XG4gICAgICAgICAgICBcImluZm9cIjogZmFsc2UsXG4gICAgICAgICAgICAnb3JkZXInOiBbXSxcbiAgICAgICAgICAgIFwicGFnZUxlbmd0aFwiOiAxMCxcbiAgICAgICAgICAgIFwibGVuZ3RoQ2hhbmdlXCI6IGZhbHNlLFxuICAgICAgICAgICAgJ2NvbHVtbkRlZnMnOiBbXG4gICAgICAgICAgICAgICAgeyBvcmRlcmFibGU6IGZhbHNlLCB0YXJnZXRzOiAwIH0sIC8vIERpc2FibGUgb3JkZXJpbmcgb24gY29sdW1uIDAgKGNoZWNrYm94KVxuICAgICAgICAgICAgICAgIHsgb3JkZXJhYmxlOiBmYWxzZSwgdGFyZ2V0czogNiB9LCAvLyBEaXNhYmxlIG9yZGVyaW5nIG9uIGNvbHVtbiA2IChhY3Rpb25zKSAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gUmUtaW5pdCBmdW5jdGlvbnMgb24gZXZlcnkgdGFibGUgcmUtZHJhdyAtLSBtb3JlIGluZm86IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvcmVmZXJlbmNlL2V2ZW50L2RyYXdcbiAgICAgICAgZGF0YXRhYmxlLm9uKCdkcmF3JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaW5pdFRvZ2dsZVRvb2xiYXIoKTtcbiAgICAgICAgICAgIGhhbmRsZURlbGV0ZVJvd3MoKTtcbiAgICAgICAgICAgIHRvZ2dsZVRvb2xiYXJzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFNlYXJjaCBEYXRhdGFibGUgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL2RhdGF0YWJsZXMubmV0L3JlZmVyZW5jZS9hcGkvc2VhcmNoKClcbiAgICB2YXIgaGFuZGxlU2VhcmNoRGF0YXRhYmxlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBmaWx0ZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlcj1cInNlYXJjaFwiXScpO1xuICAgICAgICBmaWx0ZXJTZWFyY2guYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZGF0YXRhYmxlLnNlYXJjaChlLnRhcmdldC52YWx1ZSkuZHJhdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBGaWx0ZXIgRGF0YXRhYmxlXG4gICAgdmFyIGhhbmRsZUZpbHRlckRhdGF0YWJsZSA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VsZWN0IGZpbHRlciBvcHRpb25zXG4gICAgICAgIGNvbnN0IGZpbHRlckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlcj1cImZvcm1cIl0nKTtcbiAgICAgICAgY29uc3QgZmlsdGVyQnV0dG9uID0gZmlsdGVyRm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlcj1cImZpbHRlclwiXScpO1xuICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gZmlsdGVyRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcblxuICAgICAgICAvLyBGaWx0ZXIgZGF0YXRhYmxlIG9uIHN1Ym1pdFxuICAgICAgICBmaWx0ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyU3RyaW5nID0gJyc7XG5cbiAgICAgICAgICAgIC8vIEdldCBmaWx0ZXIgdmFsdWVzXG4gICAgICAgICAgICBzZWxlY3RPcHRpb25zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0udmFsdWUgJiYgaXRlbS52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJTdHJpbmcgKz0gJyAnO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gQnVpbGQgZmlsdGVyIHZhbHVlIG9wdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyU3RyaW5nICs9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIEZpbHRlciBkYXRhdGFibGUgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL2RhdGF0YWJsZXMubmV0L3JlZmVyZW5jZS9hcGkvc2VhcmNoKClcbiAgICAgICAgICAgIGRhdGF0YWJsZS5zZWFyY2goZmlsdGVyU3RyaW5nKS5kcmF3KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFJlc2V0IEZpbHRlclxuICAgIHZhciBoYW5kbGVSZXNldEZvcm0gPSAoKSA9PiB7XG4gICAgICAgIC8vIFNlbGVjdCByZXNldCBidXR0b25cbiAgICAgICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2VyLXRhYmxlLWZpbHRlcj1cInJlc2V0XCJdJyk7XG5cbiAgICAgICAgLy8gUmVzZXQgZGF0YXRhYmxlXG4gICAgICAgIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU2VsZWN0IGZpbHRlciBvcHRpb25zXG4gICAgICAgICAgICBjb25zdCBmaWx0ZXJGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtdXNlci10YWJsZS1maWx0ZXI9XCJmb3JtXCJdJyk7XG4gICAgICAgICAgICBjb25zdCBzZWxlY3RPcHRpb25zID0gZmlsdGVyRm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QnKTtcblxuICAgICAgICAgICAgLy8gUmVzZXQgc2VsZWN0MiB2YWx1ZXMgLS0gbW9yZSBpbmZvOiBodHRwczovL3NlbGVjdDIub3JnL3Byb2dyYW1tYXRpYy1jb250cm9sL2FkZC1zZWxlY3QtY2xlYXItaXRlbXNcbiAgICAgICAgICAgIHNlbGVjdE9wdGlvbnMuZm9yRWFjaChzZWxlY3QgPT4ge1xuICAgICAgICAgICAgICAgICQoc2VsZWN0KS52YWwoJycpLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFJlc2V0IGRhdGF0YWJsZSAtLS0gb2ZmaWNpYWwgZG9jcyByZWZlcmVuY2U6IGh0dHBzOi8vZGF0YXRhYmxlcy5uZXQvcmVmZXJlbmNlL2FwaS9zZWFyY2goKVxuICAgICAgICAgICAgZGF0YXRhYmxlLnNlYXJjaCgnJykuZHJhdygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIERlbGV0ZSBzdWJzY2lycHRpb25cbiAgICB2YXIgaGFuZGxlRGVsZXRlUm93cyA9ICgpID0+IHtcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBkZWxldGUgYnV0dG9uc1xuICAgICAgICBjb25zdCBkZWxldGVCdXR0b25zID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtdXNlcnMtdGFibGUtZmlsdGVyPVwiZGVsZXRlX3Jvd1wiXScpO1xuXG4gICAgICAgIGRlbGV0ZUJ1dHRvbnMuZm9yRWFjaChkID0+IHtcbiAgICAgICAgICAgIC8vIERlbGV0ZSBidXR0b24gb24gY2xpY2tcbiAgICAgICAgICAgIGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBwYXJlbnQgcm93XG4gICAgICAgICAgICAgICAgY29uc3QgcGFyZW50ID0gZS50YXJnZXQuY2xvc2VzdCgndHInKTtcblxuICAgICAgICAgICAgICAgIC8vIEdldCB1c2VyIG5hbWVcbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyTmFtZSA9IHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCd0ZCcpWzFdLnF1ZXJ5U2VsZWN0b3JBbGwoJ2EnKVsxXS5pbm5lclRleHQ7XG5cbiAgICAgICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgXCIgKyB1c2VyTmFtZSArIFwiP1wiLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGRlbGV0ZSFcIixcbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3UgaGF2ZSBkZWxldGVkIFwiICsgdXNlck5hbWUgKyBcIiEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBjdXJyZW50IHJvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGF0YWJsZS5yb3coJChwYXJlbnQpKS5yZW1vdmUoKS5kcmF3KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXRlY3QgY2hlY2tlZCBjaGVja2JveGVzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBjdXN0b21lck5hbWUgKyBcIiB3YXMgbm90IGRlbGV0ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSW5pdCB0b2dnbGUgdG9vbGJhclxuICAgIHZhciBpbml0VG9nZ2xlVG9vbGJhciA9ICgpID0+IHtcbiAgICAgICAgLy8gVG9nZ2xlIHNlbGVjdGVkIGFjdGlvbiB0b29sYmFyXG4gICAgICAgIC8vIFNlbGVjdCBhbGwgY2hlY2tib3hlc1xuICAgICAgICBjb25zdCBjaGVja2JveGVzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgnW3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG4gICAgICAgIC8vIFNlbGVjdCBlbGVtZW50c1xuICAgICAgICB0b29sYmFyQmFzZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXVzZXItdGFibGUtdG9vbGJhcj1cImJhc2VcIl0nKTtcbiAgICAgICAgdG9vbGJhclNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtdXNlci10YWJsZS10b29sYmFyPVwic2VsZWN0ZWRcIl0nKTtcbiAgICAgICAgc2VsZWN0ZWRDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LXVzZXItdGFibGUtc2VsZWN0PVwic2VsZWN0ZWRfY291bnRcIl0nKTtcbiAgICAgICAgY29uc3QgZGVsZXRlU2VsZWN0ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC11c2VyLXRhYmxlLXNlbGVjdD1cImRlbGV0ZV9zZWxlY3RlZFwiXScpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBkZWxldGUgc2VsZWN0ZWQgdG9vbGJhclxuICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAvLyBDaGVja2JveCBvbiBjbGljayBldmVudFxuICAgICAgICAgICAgYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlVG9vbGJhcnMoKTtcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gRGVsZXRlZCBzZWxlY3RlZCByb3dzXG4gICAgICAgIGRlbGV0ZVNlbGVjdGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gU3dlZXRBbGVydDIgcG9wIHVwIC0tLSBvZmZpY2lhbCBkb2NzIHJlZmVyZW5jZTogaHR0cHM6Ly9zd2VldGFsZXJ0Mi5naXRodWIuaW8vXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBzZWxlY3RlZCBjdXN0b21lcnM/XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiWWVzLCBkZWxldGUhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDogXCJObywgY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tYWN0aXZlLWxpZ2h0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91IGhhdmUgZGVsZXRlZCBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBhbGwgc2VsZWN0ZWQgY3VzdG9tZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveGVzLmZvckVhY2goYyA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQoYy5jbG9zZXN0KCd0Ym9keSB0cicpKSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgaGVhZGVyIGNoZWNrZWQgYm94XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJDaGVja2JveCA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ1t0eXBlPVwiY2hlY2tib3hcIl0nKVswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlckNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVUb29sYmFycygpOyAvLyBEZXRlY3QgY2hlY2tlZCBjaGVja2JveGVzXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0VG9nZ2xlVG9vbGJhcigpOyAvLyBSZS1pbml0IHRvb2xiYXIgdG8gcmVjYWxjdWxhdGUgY2hlY2tib3hlc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTZWxlY3RlZCBjdXN0b21lcnMgd2FzIG5vdCBkZWxldGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gZnctYm9sZCBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gVG9nZ2xlIHRvb2xiYXJzXG4gICAgY29uc3QgdG9nZ2xlVG9vbGJhcnMgPSAoKSA9PiB7XG4gICAgICAgIC8vIFNlbGVjdCByZWZyZXNoZWQgY2hlY2tib3ggRE9NIGVsZW1lbnRzIFxuICAgICAgICBjb25zdCBhbGxDaGVja2JveGVzID0gdGFibGUucXVlcnlTZWxlY3RvckFsbCgndGJvZHkgW3R5cGU9XCJjaGVja2JveFwiXScpO1xuXG4gICAgICAgIC8vIERldGVjdCBjaGVja2JveGVzIHN0YXRlICYgY291bnRcbiAgICAgICAgbGV0IGNoZWNrZWRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIC8vIENvdW50IGNoZWNrZWQgYm94ZXNcbiAgICAgICAgYWxsQ2hlY2tib3hlcy5mb3JFYWNoKGMgPT4ge1xuICAgICAgICAgICAgaWYgKGMuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGNoZWNrZWRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIHRvb2xiYXJzXG4gICAgICAgIGlmIChjaGVja2VkU3RhdGUpIHtcbiAgICAgICAgICAgIHNlbGVjdGVkQ291bnQuaW5uZXJIVE1MID0gY291bnQ7XG4gICAgICAgICAgICB0b29sYmFyQmFzZS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIHRvb2xiYXJTZWxlY3RlZC5jbGFzc0xpc3QucmVtb3ZlKCdkLW5vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvb2xiYXJCYXNlLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgdG9vbGJhclNlbGVjdGVkLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIGZ1bmN0aW9ucyAgXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGluaXRVc2VyVGFibGUoKTtcbiAgICAgICAgICAgIGluaXRUb2dnbGVUb29sYmFyKCk7XG4gICAgICAgICAgICBoYW5kbGVTZWFyY2hEYXRhdGFibGUoKTtcbiAgICAgICAgICAgIGhhbmRsZVJlc2V0Rm9ybSgpO1xuICAgICAgICAgICAgaGFuZGxlRGVsZXRlUm93cygpO1xuICAgICAgICAgICAgaGFuZGxlRmlsdGVyRGF0YXRhYmxlKCk7XG5cbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVXNlcnNMaXN0LmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVFVzZXJzTGlzdCIsInRhYmxlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImRhdGF0YWJsZSIsInRvb2xiYXJCYXNlIiwidG9vbGJhclNlbGVjdGVkIiwic2VsZWN0ZWRDb3VudCIsImluaXRVc2VyVGFibGUiLCJ0YWJsZVJvd3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInJvdyIsImRhdGVSb3ciLCJsYXN0TG9naW4iLCJpbm5lclRleHQiLCJ0b0xvd2VyQ2FzZSIsInRpbWVDb3VudCIsInRpbWVGb3JtYXQiLCJpbmNsdWRlcyIsInBhcnNlSW50IiwicmVwbGFjZSIsInJlYWxEYXRlIiwibW9tZW50Iiwic3VidHJhY3QiLCJmb3JtYXQiLCJzZXRBdHRyaWJ1dGUiLCJqb2luZWREYXRlIiwiaW5uZXJIVE1MIiwiJCIsIkRhdGFUYWJsZSIsIm9yZGVyYWJsZSIsInRhcmdldHMiLCJvbiIsImluaXRUb2dnbGVUb29sYmFyIiwiaGFuZGxlRGVsZXRlUm93cyIsInRvZ2dsZVRvb2xiYXJzIiwiaGFuZGxlU2VhcmNoRGF0YXRhYmxlIiwiZmlsdGVyU2VhcmNoIiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJkcmF3IiwiaGFuZGxlRmlsdGVyRGF0YXRhYmxlIiwiZmlsdGVyRm9ybSIsImZpbHRlckJ1dHRvbiIsInNlbGVjdE9wdGlvbnMiLCJmaWx0ZXJTdHJpbmciLCJpdGVtIiwiaW5kZXgiLCJoYW5kbGVSZXNldEZvcm0iLCJyZXNldEJ1dHRvbiIsInNlbGVjdCIsInZhbCIsInRyaWdnZXIiLCJkZWxldGVCdXR0b25zIiwiZCIsInByZXZlbnREZWZhdWx0IiwicGFyZW50IiwiY2xvc2VzdCIsInVzZXJOYW1lIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3dDYW5jZWxCdXR0b24iLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsInRoZW4iLCJyZXN1bHQiLCJyZW1vdmUiLCJkaXNtaXNzIiwiY3VzdG9tZXJOYW1lIiwiY2hlY2tib3hlcyIsImRlbGV0ZVNlbGVjdGVkIiwiYyIsInNldFRpbWVvdXQiLCJjaGVja2VkIiwiaGVhZGVyQ2hlY2tib3giLCJhbGxDaGVja2JveGVzIiwiY2hlY2tlZFN0YXRlIiwiY291bnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/user-management/users/list/table.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/user-management/users/list/table.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=table.js.map