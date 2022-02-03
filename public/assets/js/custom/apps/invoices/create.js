/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/invoices/create.js ***!
  \**********************************************************************************/


// Class definition
var KTAppInvoicesCreate = function () {
    var form;

	// Private functions
	var updateTotal = function() {
		var items = [].slice.call(form.querySelectorAll('[data-kt-element="items"] [data-kt-element="item"]'));
		var grandTotal = 0;

		var format = wNumb({
			//prefix: '$ ',
			decimals: 2,
			thousand: ','
		});

		items.map(function (item) {
            var quantity = item.querySelector('[data-kt-element="quantity"]');
			var price = item.querySelector('[data-kt-element="price"]');

			var priceValue = format.from(price.value);
			priceValue = (!priceValue || priceValue < 0) ? 0 : priceValue;

			var quantityValue = parseInt(quantity.value);
			quantityValue = (!quantityValue || quantityValue < 0) ?  1 : quantityValue;

			price.value = format.to(priceValue);
			quantity.value = quantityValue;

			item.querySelector('[data-kt-element="total"]').innerText = format.to(priceValue * quantityValue);			

			grandTotal += priceValue * quantityValue;
		});

		form.querySelector('[data-kt-element="sub-total"]').innerText = format.to(grandTotal);
		form.querySelector('[data-kt-element="grand-total"]').innerText = format.to(grandTotal);
	}

	var handleEmptyState = function() {
		if (form.querySelectorAll('[data-kt-element="items"] [data-kt-element="item"]').length === 0) {
			var item = form.querySelector('[data-kt-element="empty-template"] tr').cloneNode(true);
			form.querySelector('[data-kt-element="items"] tbody').appendChild(item);
		} else {
			KTUtil.remove(form.querySelector('[data-kt-element="items"] [data-kt-element="empty"]'));
		}
	}

	var handeForm = function (element) {
		// Add item
		form.querySelector('[data-kt-element="items"] [data-kt-element="add-item"]').addEventListener('click', function(e) {
			e.preventDefault();

			var item = form.querySelector('[data-kt-element="item-template"] tr').cloneNode(true);

			form.querySelector('[data-kt-element="items"] tbody').appendChild(item);

			handleEmptyState();
			updateTotal();			
		});

		// Remove item
		KTUtil.on(form, '[data-kt-element="items"] [data-kt-element="remove-item"]', 'click', function(e) {
			e.preventDefault();

			KTUtil.remove(this.closest('[data-kt-element="item"]'));

			handleEmptyState();
			updateTotal();			
		});		

		// Handle price and quantity changes
		KTUtil.on(form, '[data-kt-element="items"] [data-kt-element="quantity"], [data-kt-element="items"] [data-kt-element="price"]', 'change', function(e) {
			e.preventDefault();

			updateTotal();			
		});
	}

	var initForm = function(element) {
		// Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/
		var invoiceDate = $(form.querySelector('[name="invoice_date"]'));
		invoiceDate.flatpickr({
			enableTime: false,
			dateFormat: "d, M Y",
		});

        // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/
		var dueDate = $(form.querySelector('[name="invoice_due_date"]'));
		dueDate.flatpickr({
			enableTime: false,
			dateFormat: "d, M Y",
		});
	}

	// Public methods
	return {
		init: function(element) {
            form = document.querySelector('#kt_invoice_form');

			handeForm();
            initForm();
			updateTotal();
        }
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTAppInvoicesCreate.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/invoices/create.js":
/*!*********************************************************!*\
  !*** ./resources/src/js/custom/apps/invoices/create.js ***!
  \*********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppInvoicesCreate = function () {\n  var form; // Private functions\n\n  var updateTotal = function updateTotal() {\n    var items = [].slice.call(form.querySelectorAll('[data-kt-element=\"items\"] [data-kt-element=\"item\"]'));\n    var grandTotal = 0;\n    var format = wNumb({\n      //prefix: '$ ',\n      decimals: 2,\n      thousand: ','\n    });\n    items.map(function (item) {\n      var quantity = item.querySelector('[data-kt-element=\"quantity\"]');\n      var price = item.querySelector('[data-kt-element=\"price\"]');\n      var priceValue = format.from(price.value);\n      priceValue = !priceValue || priceValue < 0 ? 0 : priceValue;\n      var quantityValue = parseInt(quantity.value);\n      quantityValue = !quantityValue || quantityValue < 0 ? 1 : quantityValue;\n      price.value = format.to(priceValue);\n      quantity.value = quantityValue;\n      item.querySelector('[data-kt-element=\"total\"]').innerText = format.to(priceValue * quantityValue);\n      grandTotal += priceValue * quantityValue;\n    });\n    form.querySelector('[data-kt-element=\"sub-total\"]').innerText = format.to(grandTotal);\n    form.querySelector('[data-kt-element=\"grand-total\"]').innerText = format.to(grandTotal);\n  };\n\n  var handleEmptyState = function handleEmptyState() {\n    if (form.querySelectorAll('[data-kt-element=\"items\"] [data-kt-element=\"item\"]').length === 0) {\n      var item = form.querySelector('[data-kt-element=\"empty-template\"] tr').cloneNode(true);\n      form.querySelector('[data-kt-element=\"items\"] tbody').appendChild(item);\n    } else {\n      KTUtil.remove(form.querySelector('[data-kt-element=\"items\"] [data-kt-element=\"empty\"]'));\n    }\n  };\n\n  var handeForm = function handeForm(element) {\n    // Add item\n    form.querySelector('[data-kt-element=\"items\"] [data-kt-element=\"add-item\"]').addEventListener('click', function (e) {\n      e.preventDefault();\n      var item = form.querySelector('[data-kt-element=\"item-template\"] tr').cloneNode(true);\n      form.querySelector('[data-kt-element=\"items\"] tbody').appendChild(item);\n      handleEmptyState();\n      updateTotal();\n    }); // Remove item\n\n    KTUtil.on(form, '[data-kt-element=\"items\"] [data-kt-element=\"remove-item\"]', 'click', function (e) {\n      e.preventDefault();\n      KTUtil.remove(this.closest('[data-kt-element=\"item\"]'));\n      handleEmptyState();\n      updateTotal();\n    }); // Handle price and quantity changes\n\n    KTUtil.on(form, '[data-kt-element=\"items\"] [data-kt-element=\"quantity\"], [data-kt-element=\"items\"] [data-kt-element=\"price\"]', 'change', function (e) {\n      e.preventDefault();\n      updateTotal();\n    });\n  };\n\n  var initForm = function initForm(element) {\n    // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n    var invoiceDate = $(form.querySelector('[name=\"invoice_date\"]'));\n    invoiceDate.flatpickr({\n      enableTime: false,\n      dateFormat: \"d, M Y\"\n    }); // Due date. For more info, please visit the official plugin site: https://flatpickr.js.org/\n\n    var dueDate = $(form.querySelector('[name=\"invoice_due_date\"]'));\n    dueDate.flatpickr({\n      enableTime: false,\n      dateFormat: \"d, M Y\"\n    });\n  }; // Public methods\n\n\n  return {\n    init: function init(element) {\n      form = document.querySelector('#kt_invoice_form');\n      handeForm();\n      initForm();\n      updateTotal();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppInvoicesCreate.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2ludm9pY2VzL2NyZWF0ZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFZO0FBQ2xDLE1BQUlDLElBQUosQ0FEa0MsQ0FHckM7O0FBQ0EsTUFBSUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBVztBQUM1QixRQUFJQyxLQUFLLEdBQUcsR0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNKLElBQUksQ0FBQ0ssZ0JBQUwsQ0FBc0Isb0RBQXRCLENBQWQsQ0FBWjtBQUNBLFFBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUVBLFFBQUlDLE1BQU0sR0FBR0MsS0FBSyxDQUFDO0FBQ2xCO0FBQ0FDLE1BQUFBLFFBQVEsRUFBRSxDQUZRO0FBR2xCQyxNQUFBQSxRQUFRLEVBQUU7QUFIUSxLQUFELENBQWxCO0FBTUFSLElBQUFBLEtBQUssQ0FBQ1MsR0FBTixDQUFVLFVBQVVDLElBQVYsRUFBZ0I7QUFDaEIsVUFBSUMsUUFBUSxHQUFHRCxJQUFJLENBQUNFLGFBQUwsQ0FBbUIsOEJBQW5CLENBQWY7QUFDVCxVQUFJQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsYUFBTCxDQUFtQiwyQkFBbkIsQ0FBWjtBQUVBLFVBQUlFLFVBQVUsR0FBR1QsTUFBTSxDQUFDVSxJQUFQLENBQVlGLEtBQUssQ0FBQ0csS0FBbEIsQ0FBakI7QUFDQUYsTUFBQUEsVUFBVSxHQUFJLENBQUNBLFVBQUQsSUFBZUEsVUFBVSxHQUFHLENBQTdCLEdBQWtDLENBQWxDLEdBQXNDQSxVQUFuRDtBQUVBLFVBQUlHLGFBQWEsR0FBR0MsUUFBUSxDQUFDUCxRQUFRLENBQUNLLEtBQVYsQ0FBNUI7QUFDQUMsTUFBQUEsYUFBYSxHQUFJLENBQUNBLGFBQUQsSUFBa0JBLGFBQWEsR0FBRyxDQUFuQyxHQUF5QyxDQUF6QyxHQUE2Q0EsYUFBN0Q7QUFFQUosTUFBQUEsS0FBSyxDQUFDRyxLQUFOLEdBQWNYLE1BQU0sQ0FBQ2Ms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QixFQUhnQyxDQVExQjs7QUFDTixRQUFJQyxPQUFPLEdBQUdKLENBQUMsQ0FBQ3RDLElBQUksQ0FBQ2MsYUFBTCxDQUFtQiwyQkFBbkIsQ0FBRCxDQUFmO0FBQ0E0QixJQUFBQSxPQUFPLENBQUNILFNBQVIsQ0FBa0I7QUFDakJDLE1BQUFBLFVBQVUsRUFBRSxLQURLO0FBRWpCQyxNQUFBQSxVQUFVLEVBQUU7QUFGSyxLQUFsQjtBQUlBLEdBZEQsQ0E1RXFDLENBNEZyQzs7O0FBQ0EsU0FBTztBQUNORSxJQUFBQSxJQUFJLEVBQUUsY0FBU2IsT0FBVCxFQUFrQjtBQUNkOUIsTUFBQUEsSUFBSSxHQUFHNEMsUUFBUSxDQUFDOUIsYUFBVCxDQUF1QixrQkFBdkIsQ0FBUDtBQUVUZSxNQUFBQSxTQUFTO0FBQ0FPLE1BQUFBLFFBQVE7QUFDakJuQyxNQUFBQSxXQUFXO0FBQ0w7QUFQRCxHQUFQO0FBU0EsQ0F0R3lCLEVBQTFCLEMsQ0F3R0E7OztBQUNBMEIsTUFBTSxDQUFDa0Isa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQzlDLEVBQUFBLG1CQUFtQixDQUFDNEMsSUFBcEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vYXBwcy9pbnZvaWNlcy9jcmVhdGUuanM/NTlhMiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQXBwSW52b2ljZXNDcmVhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZvcm07XG5cblx0Ly8gUHJpdmF0ZSBmdW5jdGlvbnNcblx0dmFyIHVwZGF0ZVRvdGFsID0gZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGl0ZW1zID0gW10uc2xpY2UuY2FsbChmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwiaXRlbVwiXScpKTtcblx0XHR2YXIgZ3JhbmRUb3RhbCA9IDA7XG5cblx0XHR2YXIgZm9ybWF0ID0gd051bWIoe1xuXHRcdFx0Ly9wcmVmaXg6ICckICcsXG5cdFx0XHRkZWNpbWFsczogMixcblx0XHRcdHRob3VzYW5kOiAnLCdcblx0XHR9KTtcblxuXHRcdGl0ZW1zLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgdmFyIHF1YW50aXR5ID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwicXVhbnRpdHlcIl0nKTtcblx0XHRcdHZhciBwcmljZSA9IGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInByaWNlXCJdJyk7XG5cblx0XHRcdHZhciBwcmljZVZhbHVlID0gZm9ybWF0LmZyb20ocHJpY2UudmFsdWUpO1xuXHRcdFx0cHJpY2VWYWx1ZSA9ICghcHJpY2VWYWx1ZSB8fCBwcmljZVZhbHVlIDwgMCkgPyAwIDogcHJpY2VWYWx1ZTtcblxuXHRcdFx0dmFyIHF1YW50aXR5VmFsdWUgPSBwYXJzZUludChxdWFudGl0eS52YWx1ZSk7XG5cdFx0XHRxdWFudGl0eVZhbHVlID0gKCFxdWFudGl0eVZhbHVlIHx8IHF1YW50aXR5VmFsdWUgPCAwKSA/ICAxIDogcXVhbnRpdHlWYWx1ZTtcblxuXHRcdFx0cHJpY2UudmFsdWUgPSBmb3JtYXQudG8ocHJpY2VWYWx1ZSk7XG5cdFx0XHRxdWFudGl0eS52YWx1ZSA9IHF1YW50aXR5VmFsdWU7XG5cblx0XHRcdGl0ZW0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInRvdGFsXCJdJykuaW5uZXJUZXh0ID0gZm9ybWF0LnRvKHByaWNlVmFsdWUgKiBxdWFudGl0eVZhbHVlKTtcdFx0XHRcblxuXHRcdFx0Z3JhbmRUb3RhbCArPSBwcmljZVZhbHVlICogcXVhbnRpdHlWYWx1ZTtcblx0XHR9KTtcblxuXHRcdGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cInN1Yi10b3RhbFwiXScpLmlubmVyVGV4dCA9IGZvcm1hdC50byhncmFuZFRvdGFsKTtcblx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJncmFuZC10b3RhbFwiXScpLmlubmVyVGV4dCA9IGZvcm1hdC50byhncmFuZFRvdGFsKTtcblx0fVxuXG5cdHZhciBoYW5kbGVFbXB0eVN0YXRlID0gZnVuY3Rpb24oKSB7XG5cdFx0aWYgKGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEta3QtZWxlbWVudD1cIml0ZW1zXCJdIFtkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtXCJdJykubGVuZ3RoID09PSAwKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtZWxlbWVudD1cImVtcHR5LXRlbXBsYXRlXCJdIHRyJykuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0Zm9ybS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1lbGVtZW50PVwiaXRlbXNcIl0gdGJvZHknKS5hcHBlbmRDaGlsZChpdGVtKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0S1RVdGlsLnJlbW92ZShmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwiZW1wdHlcIl0nKSk7XG5cdFx0fVxuXHR9XG5cblx0dmFyIGhhbmRlRm9ybSA9IGZ1bmN0aW9uIChlbGVtZW50KSB7XG5cdFx0Ly8gQWRkIGl0ZW1cblx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwiYWRkLWl0ZW1cIl0nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0dmFyIGl0ZW0gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtLXRlbXBsYXRlXCJdIHRyJykuY2xvbmVOb2RlKHRydWUpO1xuXG5cdFx0XHRmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSB0Ym9keScpLmFwcGVuZENoaWxkKGl0ZW0pO1xuXG5cdFx0XHRoYW5kbGVFbXB0eVN0YXRlKCk7XG5cdFx0XHR1cGRhdGVUb3RhbCgpO1x0XHRcdFxuXHRcdH0pO1xuXG5cdFx0Ly8gUmVtb3ZlIGl0ZW1cblx0XHRLVFV0aWwub24oZm9ybSwgJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwicmVtb3ZlLWl0ZW1cIl0nLCAnY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdEtUVXRpbC5yZW1vdmUodGhpcy5jbG9zZXN0KCdbZGF0YS1rdC1lbGVtZW50PVwiaXRlbVwiXScpKTtcblxuXHRcdFx0aGFuZGxlRW1wdHlTdGF0ZSgpO1xuXHRcdFx0dXBkYXRlVG90YWwoKTtcdFx0XHRcblx0XHR9KTtcdFx0XG5cblx0XHQvLyBIYW5kbGUgcHJpY2UgYW5kIHF1YW50aXR5IGNoYW5nZXNcblx0XHRLVFV0aWwub24oZm9ybSwgJ1tkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwicXVhbnRpdHlcIl0sIFtkYXRhLWt0LWVsZW1lbnQ9XCJpdGVtc1wiXSBbZGF0YS1rdC1lbGVtZW50PVwicHJpY2VcIl0nLCAnY2hhbmdlJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHR1cGRhdGVUb3RhbCgpO1x0XHRcdFxuXHRcdH0pO1xuXHR9XG5cblx0dmFyIGluaXRGb3JtID0gZnVuY3Rpb24oZWxlbWVudCkge1xuXHRcdC8vIER1ZSBkYXRlLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgdmlzaXQgdGhlIG9mZmljaWFsIHBsdWdpbiBzaXRlOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXG5cdFx0dmFyIGludm9pY2VEYXRlID0gJChmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaW52b2ljZV9kYXRlXCJdJykpO1xuXHRcdGludm9pY2VEYXRlLmZsYXRwaWNrcih7XG5cdFx0XHRlbmFibGVUaW1lOiBmYWxzZSxcblx0XHRcdGRhdGVGb3JtYXQ6IFwiZCwgTSBZXCIsXG5cdFx0fSk7XG5cbiAgICAgICAgLy8gRHVlIGRhdGUuIEZvciBtb3JlIGluZm8sIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgcGx1Z2luIHNpdGU6IGh0dHBzOi8vZmxhdHBpY2tyLmpzLm9yZy9cblx0XHR2YXIgZHVlRGF0ZSA9ICQoZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImludm9pY2VfZHVlX2RhdGVcIl0nKSk7XG5cdFx0ZHVlRGF0ZS5mbGF0cGlja3Ioe1xuXHRcdFx0ZW5hYmxlVGltZTogZmFsc2UsXG5cdFx0XHRkYXRlRm9ybWF0OiBcImQsIE0gWVwiLFxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gUHVibGljIG1ldGhvZHNcblx0cmV0dXJuIHtcblx0XHRpbml0OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2ludm9pY2VfZm9ybScpO1xuXG5cdFx0XHRoYW5kZUZvcm0oKTtcbiAgICAgICAgICAgIGluaXRGb3JtKCk7XG5cdFx0XHR1cGRhdGVUb3RhbCgpO1xuICAgICAgICB9XG5cdH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEFwcEludm9pY2VzQ3JlYXRlLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUQXBwSW52b2ljZXNDcmVhdGUiLCJmb3JtIiwidXBkYXRlVG90YWwiLCJpdGVtcyIsInNsaWNlIiwiY2FsbCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJncmFuZFRvdGFsIiwiZm9ybWF0Iiwid051bWIiLCJkZWNpbWFscyIsInRob3VzYW5kIiwibWFwIiwiaXRlbSIsInF1YW50aXR5IiwicXVlcnlTZWxlY3RvciIsInByaWNlIiwicHJpY2VWYWx1ZSIsImZyb20iLCJ2YWx1ZSIsInF1YW50aXR5VmFsdWUiLCJwYXJzZUludCIsInRvIiwiaW5uZXJUZXh0IiwiaGFuZGxlRW1wdHlTdGF0ZSIsImxlbmd0aCIsImNsb25lTm9kZSIsImFwcGVuZENoaWxkIiwiS1RVdGlsIiwicmVtb3ZlIiwiaGFuZGVGb3JtIiwiZWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJvbiIsImNsb3Nlc3QiLCJpbml0Rm9ybSIsImludm9pY2VEYXRlIiwiJCIsImZsYXRwaWNrciIsImVuYWJsZVRpbWUiLCJkYXRlRm9ybWF0IiwiZHVlRGF0ZSIsImluaXQiLCJkb2N1bWVudCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/invoices/create.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/invoices/create.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=create.js.map