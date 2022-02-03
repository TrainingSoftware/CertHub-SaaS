/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/subscriptions/add/advanced.js ***!
  \*********************************************************************************************/


var KTSubscriptionsAdvanced = function () {
    // Shared variables
    var table;
    var datatable;

    var initCustomFieldsDatatable = function () {
        // Define variables
        const addButton = document.getElementById('kt_create_new_custom_fields_add');

        // Duplicate input fields
        const fieldName = table.querySelector('tbody tr td:first-child').innerHTML;
        const fieldValue = table.querySelector('tbody tr td:nth-child(2)').innerHTML;
        const deleteButton = table.querySelector('tbody tr td:last-child').innerHTML;

        // Init datatable --- more info on datatables: https://datatables.net/manual/
        datatable = $(table).DataTable({
            "info": false,
            'order': [],
            'ordering': false,
            'paging': false,
            "lengthChange": false
        });

        // Define datatable row node
        var rowNode;

        // Handle add button
        addButton.addEventListener('click', function (e) {
            e.preventDefault();

            rowNode = datatable.row.add([
                fieldName,
                fieldValue,
                deleteButton
            ]).draw().node();

            // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class
            $(rowNode).find('td').eq(2).addClass('text-end');

            // Re-calculate index
            initCustomFieldRowIndex();
        });
    }

    // Handle row index count
    var initCustomFieldRowIndex = function() {
        const tableRows = table.querySelectorAll('tbody tr');

        tableRows.forEach((tr, index) => {
            // add index number to input names & id
            const fieldNameInput = tr.querySelector('td:first-child input');
            const fieldValueInput = tr.querySelector('td:nth-child(2) input');
            const fieldNameLabel = fieldNameInput.getAttribute('id');
            const fieldValueLabel = fieldValueInput.getAttribute('id');

            fieldNameInput.setAttribute('name', fieldNameLabel + '-' + index);
            fieldValueInput.setAttribute('name', fieldValueLabel + '-' + index);
        });
    }

    // Delete product
    var deleteCustomField = function() {
        KTUtil.on(table, '[data-kt-action="field_remove"]', 'click', function(e) {
            e.preventDefault();

            // Select parent row
            const parent = e.target.closest('tr');

            // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/
            Swal.fire({
                text: "Are you sure you want to delete this field ?",
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
                        text: "You have deleted it!.",
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
                        text: "It was not deleted.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn fw-bold btn-primary",
                        }
                    })
                }
            });
        });
    }

    return {
        init: function () {
            table = document.getElementById('kt_create_new_custom_fields');

            initCustomFieldsDatatable();
            initCustomFieldRowIndex();            
            deleteCustomField();
        }
    }
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTSubscriptionsAdvanced.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/subscriptions/add/advanced.js":
/*!********************************************************************!*\
  !*** ./resources/src/js/custom/apps/subscriptions/add/advanced.js ***!
  \********************************************************************/
/***/ (() => {

eval("\n\nvar KTSubscriptionsAdvanced = function () {\n  // Shared variables\n  var table;\n  var datatable;\n\n  var initCustomFieldsDatatable = function initCustomFieldsDatatable() {\n    // Define variables\n    var addButton = document.getElementById('kt_create_new_custom_fields_add'); // Duplicate input fields\n\n    var fieldName = table.querySelector('tbody tr td:first-child').innerHTML;\n    var fieldValue = table.querySelector('tbody tr td:nth-child(2)').innerHTML;\n    var deleteButton = table.querySelector('tbody tr td:last-child').innerHTML; // Init datatable --- more info on datatables: https://datatables.net/manual/\n\n    datatable = $(table).DataTable({\n      \"info\": false,\n      'order': [],\n      'ordering': false,\n      'paging': false,\n      \"lengthChange\": false\n    }); // Define datatable row node\n\n    var rowNode; // Handle add button\n\n    addButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      rowNode = datatable.row.add([fieldName, fieldValue, deleteButton]).draw().node(); // Add custom class to last column -- more info: https://datatables.net/forums/discussion/22341/row-add-cell-class\n\n      $(rowNode).find('td').eq(2).addClass('text-end'); // Re-calculate index\n\n      initCustomFieldRowIndex();\n    });\n  }; // Handle row index count\n\n\n  var initCustomFieldRowIndex = function initCustomFieldRowIndex() {\n    var tableRows = table.querySelectorAll('tbody tr');\n    tableRows.forEach(function (tr, index) {\n      // add index number to input names & id\n      var fieldNameInput = tr.querySelector('td:first-child input');\n      var fieldValueInput = tr.querySelector('td:nth-child(2) input');\n      var fieldNameLabel = fieldNameInput.getAttribute('id');\n      var fieldValueLabel = fieldValueInput.getAttribute('id');\n      fieldNameInput.setAttribute('name', fieldNameLabel + '-' + index);\n      fieldValueInput.setAttribute('name', fieldValueLabel + '-' + index);\n    });\n  }; // Delete product\n\n\n  var deleteCustomField = function deleteCustomField() {\n    KTUtil.on(table, '[data-kt-action=\"field_remove\"]', 'click', function (e) {\n      e.preventDefault(); // Select parent row\n\n      var parent = e.target.closest('tr'); // SweetAlert2 pop up --- official docs reference: https://sweetalert2.github.io/\n\n      Swal.fire({\n        text: \"Are you sure you want to delete this field ?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete!\",\n        cancelButtonText: \"No, cancel\",\n        customClass: {\n          confirmButton: \"btn fw-bold btn-danger\",\n          cancelButton: \"btn fw-bold btn-active-light-primary\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          Swal.fire({\n            text: \"You have deleted it!.\",\n            icon: \"success\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          }).then(function () {\n            // Remove current row\n            datatable.row($(parent)).remove().draw();\n          });\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"It was not deleted.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn fw-bold btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  return {\n    init: function init() {\n      table = document.getElementById('kt_create_new_custom_fields');\n      initCustomFieldsDatatable();\n      initCustomFieldRowIndex();\n      deleteCustomField();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSubscriptionsAdvanced.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3N1YnNjcmlwdGlvbnMvYWRkL2FkdmFuY2VkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLElBQUlBLHVCQUF1QixHQUFHLFlBQVk7QUFDdEM7QUFDQSxNQUFJQyxLQUFKO0FBQ0EsTUFBSUMsU0FBSjs7QUFFQSxNQUFJQyx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQVk7QUFDeEM7QUFDQSxRQUFNQyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQ0FBeEIsQ0FBbEIsQ0FGd0MsQ0FJeEM7O0FBQ0EsUUFBTUMsU0FBUyxHQUFHTixLQUFLLENBQUNPLGFBQU4sQ0FBb0IseUJBQXBCLEVBQStDQyxTQUFqRTtBQUNBLFFBQU1DLFVBQVUsR0FBR1QsS0FBSyxDQUFDTyxhQUFOLENBQW9CLDBCQUFwQixFQUFnREMsU0FBbkU7QUFDQSxRQUFNRSxZQUFZLEdBQUdWLEtBQUssQ0FBQ08sYUFBTixDQUFvQix3QkFBcEIsRUFBOENDLFNBQW5FLENBUHdDLENBU3hDOztBQUNBUCxJQUFBQSxTQUFTLEdBQUdVLENBQUMsQ0FBQ1gsS0FBRCxDQUFELENBQVNZLFNBQVQsQ0FBbUI7QUFDM0IsY0FBUSxLQURtQjtBQUUzQixlQUFTLEVBRmtCO0FBRzNCLGtCQUFZLEtBSGU7QUFJM0IsZ0JBQVUsS0FKaUI7QUFLM0Isc0JBQWdCO0FBTFcsS0FBbkIsQ0FBWixDQVZ3QyxDQWtCeEM7O0FBQ0EsUUFBSUMsT0FBSixDQW5Cd0MsQ0FxQnhDOztBQUNBVixJQUFBQSxTQUFTLENBQUNXLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFVBQVVDLENBQVYsRUFBYTtBQUM3Q0EsTUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBRUFILE1BQUFBLE9BQU8sR0FBR1osU0FBUyxDQUFDZ0IsR0FBVixDQUFjQyxHQUFkLENBQWtCLENBQ3hCWixTQUR3QixFQUV4QkcsVUFGd0IsRUFHeEJDLFlBSHdCLENBQWxCLEVBSVBTLElB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LElBQUksQ0FBQ0MsSUFBTCxDQUFVO0FBQ05DLFlBQUFBLElBQUksRUFBRSxxQkFEQTtBQUVOQyxZQUFBQSxJQUFJLEVBQUUsT0FGQTtBQUdORSxZQUFBQSxjQUFjLEVBQUUsS0FIVjtBQUlOQyxZQUFBQSxpQkFBaUIsRUFBRSxhQUpiO0FBS05FLFlBQUFBLFdBQVcsRUFBRTtBQUNUQyxjQUFBQSxhQUFhLEVBQUU7QUFETjtBQUxQLFdBQVY7QUFTSDtBQUNKLE9BcENEO0FBcUNILEtBNUNEO0FBNkNILEdBOUNEOztBQWdEQSxTQUFPO0FBQ0hPLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkMUQsTUFBQUEsS0FBSyxHQUFHSSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsNkJBQXhCLENBQVI7QUFFQUgsTUFBQUEseUJBQXlCO0FBQ3pCc0IsTUFBQUEsdUJBQXVCO0FBQ3ZCWSxNQUFBQSxpQkFBaUI7QUFDcEI7QUFQRSxHQUFQO0FBU0gsQ0F0SDZCLEVBQTlCLEMsQ0F3SEE7OztBQUNBQyxNQUFNLENBQUNzQixrQkFBUCxDQUEwQixZQUFZO0FBQ2xDNUQsRUFBQUEsdUJBQXVCLENBQUMyRCxJQUF4QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL3N1YnNjcmlwdGlvbnMvYWRkL2FkdmFuY2VkLmpzP2MxNGQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBLVFN1YnNjcmlwdGlvbnNBZHZhbmNlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBTaGFyZWQgdmFyaWFibGVzXG4gICAgdmFyIHRhYmxlO1xuICAgIHZhciBkYXRhdGFibGU7XG5cbiAgICB2YXIgaW5pdEN1c3RvbUZpZWxkc0RhdGF0YWJsZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIHZhcmlhYmxlc1xuICAgICAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfY3JlYXRlX25ld19jdXN0b21fZmllbGRzX2FkZCcpO1xuXG4gICAgICAgIC8vIER1cGxpY2F0ZSBpbnB1dCBmaWVsZHNcbiAgICAgICAgY29uc3QgZmllbGROYW1lID0gdGFibGUucXVlcnlTZWxlY3RvcigndGJvZHkgdHIgdGQ6Zmlyc3QtY2hpbGQnKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSB0YWJsZS5xdWVyeVNlbGVjdG9yKCd0Ym9keSB0ciB0ZDpudGgtY2hpbGQoMiknKS5pbm5lckhUTUw7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3IoJ3Rib2R5IHRyIHRkOmxhc3QtY2hpbGQnKS5pbm5lckhUTUw7XG5cbiAgICAgICAgLy8gSW5pdCBkYXRhdGFibGUgLS0tIG1vcmUgaW5mbyBvbiBkYXRhdGFibGVzOiBodHRwczovL2RhdGF0YWJsZXMubmV0L21hbnVhbC9cbiAgICAgICAgZGF0YXRhYmxlID0gJCh0YWJsZSkuRGF0YVRhYmxlKHtcbiAgICAgICAgICAgIFwiaW5mb1wiOiBmYWxzZSxcbiAgICAgICAgICAgICdvcmRlcic6IFtdLFxuICAgICAgICAgICAgJ29yZGVyaW5nJzogZmFsc2UsXG4gICAgICAgICAgICAncGFnaW5nJzogZmFsc2UsXG4gICAgICAgICAgICBcImxlbmd0aENoYW5nZVwiOiBmYWxzZVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBEZWZpbmUgZGF0YXRhYmxlIHJvdyBub2RlXG4gICAgICAgIHZhciByb3dOb2RlO1xuXG4gICAgICAgIC8vIEhhbmRsZSBhZGQgYnV0dG9uXG4gICAgICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHJvd05vZGUgPSBkYXRhdGFibGUucm93LmFkZChbXG4gICAgICAgICAgICAgICAgZmllbGROYW1lLFxuICAgICAgICAgICAgICAgIGZpZWxkVmFsdWUsXG4gICAgICAgICAgICAgICAgZGVsZXRlQnV0dG9uXG4gICAgICAgICAgICBdKS5kcmF3KCkubm9kZSgpO1xuXG4gICAgICAgICAgICAvLyBBZGQgY3VzdG9tIGNsYXNzIHRvIGxhc3QgY29sdW1uIC0tIG1vcmUgaW5mbzogaHR0cHM6Ly9kYXRhdGFibGVzLm5ldC9mb3J1bXMvZGlzY3Vzc2lvbi8yMjM0MS9yb3ctYWRkLWNlbGwtY2xhc3NcbiAgICAgICAgICAgICQocm93Tm9kZSkuZmluZCgndGQnKS5lcSgyKS5hZGRDbGFzcygndGV4dC1lbmQnKTtcblxuICAgICAgICAgICAgLy8gUmUtY2FsY3VsYXRlIGluZGV4XG4gICAgICAgICAgICBpbml0Q3VzdG9tRmllbGRSb3dJbmRleCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgcm93IGluZGV4IGNvdW50XG4gICAgdmFyIGluaXRDdXN0b21GaWVsZFJvd0luZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbnN0IHRhYmxlUm93cyA9IHRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoJ3Rib2R5IHRyJyk7XG5cbiAgICAgICAgdGFibGVSb3dzLmZvckVhY2goKHRyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgLy8gYWRkIGluZGV4IG51bWJlciB0byBpbnB1dCBuYW1lcyAmIGlkXG4gICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVJbnB1dCA9IHRyLnF1ZXJ5U2VsZWN0b3IoJ3RkOmZpcnN0LWNoaWxkIGlucHV0Jyk7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbHVlSW5wdXQgPSB0ci5xdWVyeVNlbGVjdG9yKCd0ZDpudGgtY2hpbGQoMikgaW5wdXQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZUxhYmVsID0gZmllbGROYW1lSW5wdXQuZ2V0QXR0cmlidXRlKCdpZCcpO1xuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZUxhYmVsID0gZmllbGRWYWx1ZUlucHV0LmdldEF0dHJpYnV0ZSgnaWQnKTtcblxuICAgICAgICAgICAgZmllbGROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZmllbGROYW1lTGFiZWwgKyAnLScgKyBpbmRleCk7XG4gICAgICAgICAgICBmaWVsZFZhbHVlSW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZmllbGRWYWx1ZUxhYmVsICsgJy0nICsgaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWxldGUgcHJvZHVjdFxuICAgIHZhciBkZWxldGVDdXN0b21GaWVsZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBLVFV0aWwub24odGFibGUsICdbZGF0YS1rdC1hY3Rpb249XCJmaWVsZF9yZW1vdmVcIl0nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFNlbGVjdCBwYXJlbnQgcm93XG4gICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBlLnRhcmdldC5jbG9zZXN0KCd0cicpO1xuXG4gICAgICAgICAgICAvLyBTd2VldEFsZXJ0MiBwb3AgdXAgLS0tIG9mZmljaWFsIGRvY3MgcmVmZXJlbmNlOiBodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby9cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgZmllbGQgP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIGNhbmNlbFwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGZ3LWJvbGQgYnRuLWFjdGl2ZS1saWdodC1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIGRlbGV0ZWQgaXQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJzdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIGN1cnJlbnQgcm93XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhdGFibGUucm93KCQocGFyZW50KSkucmVtb3ZlKCkuZHJhdygpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJJdCB3YXMgbm90IGRlbGV0ZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBmdy1ib2xkIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRhYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2NyZWF0ZV9uZXdfY3VzdG9tX2ZpZWxkcycpO1xuXG4gICAgICAgICAgICBpbml0Q3VzdG9tRmllbGRzRGF0YXRhYmxlKCk7XG4gICAgICAgICAgICBpbml0Q3VzdG9tRmllbGRSb3dJbmRleCgpOyAgICAgICAgICAgIFxuICAgICAgICAgICAgZGVsZXRlQ3VzdG9tRmllbGQoKTtcbiAgICAgICAgfVxuICAgIH1cbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUU3Vic2NyaXB0aW9uc0FkdmFuY2VkLmluaXQoKTtcbn0pOyJdLCJuYW1lcyI6WyJLVFN1YnNjcmlwdGlvbnNBZHZhbmNlZCIsInRhYmxlIiwiZGF0YXRhYmxlIiwiaW5pdEN1c3RvbUZpZWxkc0RhdGF0YWJsZSIsImFkZEJ1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWVsZE5hbWUiLCJxdWVyeVNlbGVjdG9yIiwiaW5uZXJIVE1MIiwiZmllbGRWYWx1ZSIsImRlbGV0ZUJ1dHRvbiIsIiQiLCJEYXRhVGFibGUiLCJyb3dOb2RlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJvdyIsImFkZCIsImRyYXciLCJub2RlIiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJpbml0Q3VzdG9tRmllbGRSb3dJbmRleCIsInRhYmxlUm93cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwidHIiLCJpbmRleCIsImZpZWxkTmFtZUlucHV0IiwiZmllbGRWYWx1ZUlucHV0IiwiZmllbGROYW1lTGFiZWwiLCJnZXRBdHRyaWJ1dGUiLCJmaWVsZFZhbHVlTGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJkZWxldGVDdXN0b21GaWVsZCIsIktUVXRpbCIsIm9uIiwicGFyZW50IiwidGFyZ2V0IiwiY2xvc2VzdCIsIlN3YWwiLCJmaXJlIiwidGV4dCIsImljb24iLCJzaG93Q2FuY2VsQnV0dG9uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJjYW5jZWxCdXR0b24iLCJ0aGVuIiwicmVzdWx0IiwidmFsdWUiLCJyZW1vdmUiLCJkaXNtaXNzIiwiaW5pdCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/subscriptions/add/advanced.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/subscriptions/add/advanced.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=advanced.js.map