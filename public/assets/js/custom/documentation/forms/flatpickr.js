/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*********************************************************!*\
  !*** ../src/js/custom/documentation/forms/flatpickr.js ***!
  \*********************************************************/


// Class definition
var KTFormsFlatpickrDemos = function() {
    // Private functions
    var example1 = function(element) {
        $("#kt_datepicker_1").flatpickr();

        $("#kt_datepicker_2").flatpickr();
    }

    var example2 = function(element) {
        $("#kt_datepicker_3").flatpickr({
            enableTime: true,
            dateFormat: "Y-m-d H:i",
        });
    }

    var example3 = function(element) {
        $("#kt_datepicker_4").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            disable: ["2025-01-10", "22025-01-11", "2025-01-12", "2025-01-13", "2025-01-14", "2025-01-15", "2025-01-16", "2025-01-17"],
            dateFormat: "Y-m-d",
        });

        $("#kt_datepicker_5").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            dateFormat: "Y-m-d",
            disable: [
                {
                    from: "2025-01-05",
                    to: "2025-01-25"
                },
                {
                    from: "2025-02-03",
                    to: "2025-02-15"
                }
            ]
        });
    }

    var example4 = function(element) {
        $("#kt_datepicker_6").flatpickr({
            onReady: function () {
                this.jumpToDate("2025-01")
            },
            mode: "multiple",
            dateFormat: "Y-m-d",
            defaultDate: ["2025-01-05", "2025-01-10"]
        });
    }

    var example5 = function(element) {
        $("#kt_datepicker_7").flatpickr({
            altInput: true,
            altFormat: "F j, Y",
            dateFormat: "Y-m-d",
            mode: "range"
        });
    }

    var example6 = function(element) {
        $("#kt_datepicker_8").flatpickr({
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }

    var example7 = function(element) {
        $("#kt_datepicker_9").flatpickr({
            weekNumbers: true
        });
    }

    var example8 = function(element) {
        $("#kt_datepicker_10").flatpickr();
    }
    

    return {
        // Public Functions
        init: function(element) {
            example1();
            example2();
            example3();
            example4();
            example5();
            example6();
            example7();
            example8();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsFlatpickrDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/flatpickr.js":
/*!******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/flatpickr.js ***!
  \******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsFlatpickrDemos = function () {\n  // Private functions\n  var example1 = function example1(element) {\n    $(\"#kt_datepicker_1\").flatpickr();\n    $(\"#kt_datepicker_2\").flatpickr();\n  };\n\n  var example2 = function example2(element) {\n    $(\"#kt_datepicker_3\").flatpickr({\n      enableTime: true,\n      dateFormat: \"Y-m-d H:i\"\n    });\n  };\n\n  var example3 = function example3(element) {\n    $(\"#kt_datepicker_4\").flatpickr({\n      onReady: function onReady() {\n        this.jumpToDate(\"2025-01\");\n      },\n      disable: [\"2025-01-10\", \"22025-01-11\", \"2025-01-12\", \"2025-01-13\", \"2025-01-14\", \"2025-01-15\", \"2025-01-16\", \"2025-01-17\"],\n      dateFormat: \"Y-m-d\"\n    });\n    $(\"#kt_datepicker_5\").flatpickr({\n      onReady: function onReady() {\n        this.jumpToDate(\"2025-01\");\n      },\n      dateFormat: \"Y-m-d\",\n      disable: [{\n        from: \"2025-01-05\",\n        to: \"2025-01-25\"\n      }, {\n        from: \"2025-02-03\",\n        to: \"2025-02-15\"\n      }]\n    });\n  };\n\n  var example4 = function example4(element) {\n    $(\"#kt_datepicker_6\").flatpickr({\n      onReady: function onReady() {\n        this.jumpToDate(\"2025-01\");\n      },\n      mode: \"multiple\",\n      dateFormat: \"Y-m-d\",\n      defaultDate: [\"2025-01-05\", \"2025-01-10\"]\n    });\n  };\n\n  var example5 = function example5(element) {\n    $(\"#kt_datepicker_7\").flatpickr({\n      altInput: true,\n      altFormat: \"F j, Y\",\n      dateFormat: \"Y-m-d\",\n      mode: \"range\"\n    });\n  };\n\n  var example6 = function example6(element) {\n    $(\"#kt_datepicker_8\").flatpickr({\n      enableTime: true,\n      noCalendar: true,\n      dateFormat: \"H:i\"\n    });\n  };\n\n  var example7 = function example7(element) {\n    $(\"#kt_datepicker_9\").flatpickr({\n      weekNumbers: true\n    });\n  };\n\n  var example8 = function example8(element) {\n    $(\"#kt_datepicker_10\").flatpickr();\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n      example6();\n      example7();\n      example8();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsFlatpickrDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2ZsYXRwaWNrci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxxQkFBcUIsR0FBRyxZQUFXO0FBQ25DO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLFNBQXRCO0FBRUFELElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxTQUF0QjtBQUNILEdBSkQ7O0FBTUEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0gsT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQzVCRSxNQUFBQSxVQUFVLEVBQUUsSUFEZ0I7QUFFNUJDLE1BQUFBLFVBQVUsRUFBRTtBQUZnQixLQUFoQztBQUlILEdBTEQ7O0FBT0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU04sT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQzVCSyxNQUFBQSxPQUFPLEVBQUUsbUJBQVk7QUFDakIsYUFBS0MsVUFBTCxDQUFnQixTQUFoQjtBQUNILE9BSDJCO0FBSTVCQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxZQUFELEVBQWUsYUFBZixFQUE4QixZQUE5QixFQUE0QyxZQUE1QyxFQUEwRCxZQUExRCxFQUF3RSxZQUF4RSxFQUFzRixZQUF0RixFQUFvRyxZQUFwRyxDQUptQjtBQUs1QkosTUFBQUEsVUFBVSxFQUFFO0FBTGdCLEtBQWhDO0FBUUFKLElBQUFBLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCQyxTQUF0QixDQUFnQztBQUM1QkssTUFBQUEsT0FBTyxFQUFFLG1CQUFZO0FBQ2pCLGFBQUtDLFVBQUwsQ0FBZ0IsU0FBaEI7QUFDSCxPQUgyQjtBQUk1QkgsTUFBQUEsVUFBVSxFQUFFLE9BSmdCO0FBSzVCSSxNQUFBQSxPQUFPLEVBQUUsQ0FDTDtBQUNJQyxRQUFBQSxJQUFJLEVBQUUsWUFEVjtBQUVJQyxRQUFBQSxFQUFFLEVBQUU7QUFGUixPQURLLEVBS0w7QUFDSUQsUUFBQUEsSUFBSSxFQUFFLFlBRFY7QUFFSUMsUUFBQUEsRUFBRSxFQUFFO0FBRlIsT0FMSztBQUxtQixLQUFoQztBQWdCSCxHQXpCRDs7QUEyQkEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU1osT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQzVCSyxNQUFBQSxPQUFPLEVBQUUsbUJBQVk7QUFDakIsYUFBS0MsVUFBTCxDQUFnQixTQUFoQjtBQUNILE9BSDJCO0FBSTVCSyxNQUFBQSxJQUFJLEVBQUUsVUFKc0I7QUFLNUJSLE1BQUFBLFVBQVUsRUFBRSxPQUxnQjtBQU01QlMsTUFBQUEsV0FBVyxFQUFFLENBQUMsWUFBRCxFQUFlLFlBQWY7QUFOZSxLQUFoQztBQVFILEdBVEQ7O0FBV0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU2YsT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JDLFNBQXRCLENBQWdDO0FBQzVCYyxNQUFBQSxRQUFRLEVBQUUsSUFEa0I7QUFFNUJDLE1BQUFBLFNBQVMsRUFBRSxRQUZpQjtBQUc1QlosTUFBQUEsVUFBVSxFQUFFLE9BSGdCO0FBSTVCUSxNQUFBQSxJQUFJLEVBQUU7QUFKc0IsS0FBaEM7QUFNSCxHQVBEOztBQVNBLE1BQUlLLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNsQixPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkMsU0FBdEIsQ0FBZ0M7QUFDNUJFLE1BQUFBLFVBQVUsRUFBRSxJQURnQjtBQUU1QmUsTUFBQUEsVUFBVSxFQUFFLElBRmdCO0FBRzVCZCxNQUFBQSxVQUFVLEVBQUU7QUFIZ0IsS0FBaEM7QUFLSCxHQU5EOztBQVFBLE1BQUllLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVNwQixPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQkMsU0FBdEIsQ0FBZ0M7QUFDNUJtQixNQUFBQSxXQUFXLEVBQUU7QUFEZSxLQUFoQztBQUdILEdBSkQ7O0FBTUEsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU3RCLE9BQVQsRUFBa0I7QUFDN0JDLElBQUFBLENBQUMsQ0FBQyxtQkFBRCxDQUFELENBQXVCQyxTQUF2QjtBQUNILEdBRkQ7O0FBS0EsU0FBTztBQUNIO0FBQ0FxQixJQUFBQSxJQUFJLEVBQUUsY0FBU3ZCLE9BQVQsRUFBa0I7QUFDcEJELE1BQUFBLFFBQVE7QUFDUkksTUFBQUEsUUFBUTtBQUNSRyxNQUFBQSxRQUFRO0FBQ1JNLE1BQUFBLFFBQVE7QUFDUkcsTUFBQUEsUUFBUTtBQUNSRyxNQUFBQSxRQUFRO0FBQ1JFLE1BQUFBLFFBQVE7QUFDUkUsTUFBQUEsUUFBUTtBQUNYO0FBWEUsR0FBUDtBQWFILENBOUYyQixFQUE1QixDLENBZ0dBOzs7QUFDQUUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDM0IsRUFBQUEscUJBQXFCLENBQUN5QixJQUF0QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2ZsYXRwaWNrci5qcz8zOWIxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc0ZsYXRwaWNrckRlbW9zID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl8xXCIpLmZsYXRwaWNrcigpO1xuXG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl8yXCIpLmZsYXRwaWNrcigpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChcIiNrdF9kYXRlcGlja2VyXzNcIikuZmxhdHBpY2tyKHtcbiAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcIlktbS1kIEg6aVwiLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl80XCIpLmZsYXRwaWNrcih7XG4gICAgICAgICAgICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wVG9EYXRlKFwiMjAyNS0wMVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRpc2FibGU6IFtcIjIwMjUtMDEtMTBcIiwgXCIyMjAyNS0wMS0xMVwiLCBcIjIwMjUtMDEtMTJcIiwgXCIyMDI1LTAxLTEzXCIsIFwiMjAyNS0wMS0xNFwiLCBcIjIwMjUtMDEtMTVcIiwgXCIyMDI1LTAxLTE2XCIsIFwiMjAyNS0wMS0xN1wiXSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChcIiNrdF9kYXRlcGlja2VyXzVcIikuZmxhdHBpY2tyKHtcbiAgICAgICAgICAgIG9uUmVhZHk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmp1bXBUb0RhdGUoXCIyMDI1LTAxXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgICAgICAgICAgZGlzYWJsZTogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogXCIyMDI1LTAxLTA1XCIsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBcIjIwMjUtMDEtMjVcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmcm9tOiBcIjIwMjUtMDItMDNcIixcbiAgICAgICAgICAgICAgICAgICAgdG86IFwiMjAyNS0wMi0xNVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl82XCIpLmZsYXRwaWNrcih7XG4gICAgICAgICAgICBvblJlYWR5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5qdW1wVG9EYXRlKFwiMjAyNS0wMVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGU6IFwibXVsdGlwbGVcIixcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICAgICAgICAgIGRlZmF1bHREYXRlOiBbXCIyMDI1LTAxLTA1XCIsIFwiMjAyNS0wMS0xMFwiXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl83XCIpLmZsYXRwaWNrcih7XG4gICAgICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgIGFsdEZvcm1hdDogXCJGIGosIFlcIixcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiWS1tLWRcIixcbiAgICAgICAgICAgIG1vZGU6IFwicmFuZ2VcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTYgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXBpY2tlcl84XCIpLmZsYXRwaWNrcih7XG4gICAgICAgICAgICBlbmFibGVUaW1lOiB0cnVlLFxuICAgICAgICAgICAgbm9DYWxlbmRhcjogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiSDppXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlNyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChcIiNrdF9kYXRlcGlja2VyXzlcIikuZmxhdHBpY2tyKHtcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlOCA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChcIiNrdF9kYXRlcGlja2VyXzEwXCIpLmZsYXRwaWNrcigpO1xuICAgIH1cbiAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgZXhhbXBsZTEoKTtcbiAgICAgICAgICAgIGV4YW1wbGUyKCk7XG4gICAgICAgICAgICBleGFtcGxlMygpO1xuICAgICAgICAgICAgZXhhbXBsZTQoKTtcbiAgICAgICAgICAgIGV4YW1wbGU1KCk7XG4gICAgICAgICAgICBleGFtcGxlNigpO1xuICAgICAgICAgICAgZXhhbXBsZTcoKTtcbiAgICAgICAgICAgIGV4YW1wbGU4KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEZvcm1zRmxhdHBpY2tyRGVtb3MuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktURm9ybXNGbGF0cGlja3JEZW1vcyIsImV4YW1wbGUxIiwiZWxlbWVudCIsIiQiLCJmbGF0cGlja3IiLCJleGFtcGxlMiIsImVuYWJsZVRpbWUiLCJkYXRlRm9ybWF0IiwiZXhhbXBsZTMiLCJvblJlYWR5IiwianVtcFRvRGF0ZSIsImRpc2FibGUiLCJmcm9tIiwidG8iLCJleGFtcGxlNCIsIm1vZGUiLCJkZWZhdWx0RGF0ZSIsImV4YW1wbGU1IiwiYWx0SW5wdXQiLCJhbHRGb3JtYXQiLCJleGFtcGxlNiIsIm5vQ2FsZW5kYXIiLCJleGFtcGxlNyIsIndlZWtOdW1iZXJzIiwiZXhhbXBsZTgiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/flatpickr.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/flatpickr.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=flatpickr.js.map