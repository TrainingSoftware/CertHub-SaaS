/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/forms/daterangepicker.js ***!
  \***************************************************************/


// Class definition
var KTFormsDaterangepickerDemos = function() {
    // Private functions
    var example1 = function(element) {
        $("#kt_daterangepicker_1").daterangepicker();
    }

    var example2 = function(element) {
        $("#kt_daterangepicker_2").daterangepicker({
            timePicker: true,
            startDate: moment().startOf("hour"),
            endDate: moment().startOf("hour").add(32, "hour"),
            locale: {
                format: "M/DD hh:mm A"
            }
        });
    }

    var example3 = function(element) {
        $("#kt_daterangepicker_3").daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                minYear: 1901,
                maxYear: parseInt(moment().format("YYYY"),10)
            }, function(start, end, label) {
                var years = moment().diff(start, "years");
                alert("You are " + years + " years old!");
            }
        );
    }

    var example4 = function(element) {
        var start = moment().subtract(29, "days");
        var end = moment();

        function cb(start, end) {
            $("#kt_daterangepicker_4").html(start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY"));
        }

        $("#kt_daterangepicker_4").daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
            "Today": [moment(), moment()],
            "Yesterday": [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
            }
        }, cb);

        cb(start, end);
    }

    var example5 = function(element) {
        $("#kt_daterangepicker_5").daterangepicker();
    }    

    return {
        // Public Functions
        init: function(element) {
            example1();
            example2();
            example3();
            example4();
            example5();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsDaterangepickerDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/daterangepicker.js":
/*!************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/daterangepicker.js ***!
  \************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsDaterangepickerDemos = function () {\n  // Private functions\n  var example1 = function example1(element) {\n    $(\"#kt_daterangepicker_1\").daterangepicker();\n  };\n\n  var example2 = function example2(element) {\n    $(\"#kt_daterangepicker_2\").daterangepicker({\n      timePicker: true,\n      startDate: moment().startOf(\"hour\"),\n      endDate: moment().startOf(\"hour\").add(32, \"hour\"),\n      locale: {\n        format: \"M/DD hh:mm A\"\n      }\n    });\n  };\n\n  var example3 = function example3(element) {\n    $(\"#kt_daterangepicker_3\").daterangepicker({\n      singleDatePicker: true,\n      showDropdowns: true,\n      minYear: 1901,\n      maxYear: parseInt(moment().format(\"YYYY\"), 10)\n    }, function (start, end, label) {\n      var years = moment().diff(start, \"years\");\n      alert(\"You are \" + years + \" years old!\");\n    });\n  };\n\n  var example4 = function example4(element) {\n    var start = moment().subtract(29, \"days\");\n    var end = moment();\n\n    function cb(start, end) {\n      $(\"#kt_daterangepicker_4\").html(start.format(\"MMMM D, YYYY\") + \" - \" + end.format(\"MMMM D, YYYY\"));\n    }\n\n    $(\"#kt_daterangepicker_4\").daterangepicker({\n      startDate: start,\n      endDate: end,\n      ranges: {\n        \"Today\": [moment(), moment()],\n        \"Yesterday\": [moment().subtract(1, \"days\"), moment().subtract(1, \"days\")],\n        \"Last 7 Days\": [moment().subtract(6, \"days\"), moment()],\n        \"Last 30 Days\": [moment().subtract(29, \"days\"), moment()],\n        \"This Month\": [moment().startOf(\"month\"), moment().endOf(\"month\")],\n        \"Last Month\": [moment().subtract(1, \"month\").startOf(\"month\"), moment().subtract(1, \"month\").endOf(\"month\")]\n      }\n    }, cb);\n    cb(start, end);\n  };\n\n  var example5 = function example5(element) {\n    $(\"#kt_daterangepicker_5\").daterangepicker();\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      example1();\n      example2();\n      example3();\n      example4();\n      example5();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsDaterangepickerDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2RhdGVyYW5nZXBpY2tlci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFXO0FBQ3pDO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBU0MsT0FBVCxFQUFrQjtBQUM3QkMsSUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLGVBQTNCO0FBQ0gsR0FGRDs7QUFJQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTSCxPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsZUFBM0IsQ0FBMkM7QUFDdkNFLE1BQUFBLFVBQVUsRUFBRSxJQUQyQjtBQUV2Q0MsTUFBQUEsU0FBUyxFQUFFQyxNQUFNLEdBQUdDLE9BQVQsQ0FBaUIsTUFBakIsQ0FGNEI7QUFHdkNDLE1BQUFBLE9BQU8sRUFBRUYsTUFBTSxHQUFHQyxPQUFULENBQWlCLE1BQWpCLEVBQXlCRSxHQUF6QixDQUE2QixFQUE3QixFQUFpQyxNQUFqQyxDQUg4QjtBQUl2Q0MsTUFBQUEsTUFBTSxFQUFFO0FBQ0pDLFFBQUFBLE1BQU0sRUFBRTtBQURKO0FBSitCLEtBQTNDO0FBUUgsR0FURDs7QUFXQSxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFTWixPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsZUFBM0IsQ0FBMkM7QUFDbkNXLE1BQUFBLGdCQUFnQixFQUFFLElBRGlCO0FBRW5DQyxNQUFBQSxhQUFhLEVBQUUsSUFGb0I7QUFHbkNDLE1BQUFBLE9BQU8sRUFBRSxJQUgwQjtBQUluQ0MsTUFBQUEsT0FBTyxFQUFFQyxRQUFRLENBQUNYLE1BQU0sR0FBR0ssTUFBVCxDQUFnQixNQUFoQixDQUFELEVBQXlCLEVBQXpCO0FBSmtCLEtBQTNDLEVBS08sVUFBU08sS0FBVCxFQUFnQkMsR0FBaEIsRUFBcUJDLEtBQXJCLEVBQTRCO0FBQzNCLFVBQUlDLEtBQUssR0FBR2YsTUFBTSxHQUFHZ0IsSUFBVCxDQUFjSixLQUFkLEVBQXFCLE9BQXJCLENBQVo7QUFDQUssTUFBQUEsS0FBSyxDQUFDLGFBQWFGLEtBQWIsR0FBcUIsYUFBdEIsQ0FBTDtBQUNILEtBUkw7QUFVSCxHQVhEOztBQWFBLE1BQUlHLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVN4QixPQUFULEVBQWtCO0FBQzdCLFFBQUlrQixLQUFLLEdBQUdaLE1BQU0sR0FBR21CLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0IsTUFBdEIsQ0FBWjtBQUNBLFFBQUlOLEdBQUcsR0FBR2IsTUFBTSxFQUFoQjs7QUFFQSxhQUFTb0IsRUFBVCxDQUFZUixLQUFaLEVBQW1CQyxHQUFuQixFQUF3QjtBQUNwQmxCLE1BQUFBLENBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCMEIsSUFBM0IsQ0FBZ0NULEtBQUssQ0FBQ1AsTUFBTixDQUFhLGNBQWIsSUFBK0IsS0FBL0IsR0FBdUNRLEdBQUcsQ0FBQ1IsTUFBSixDQUFXLGNBQVgsQ0FBdkU7QUFDSDs7QUFFRFYsSUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLGVBQTNCLENBQTJDO0FBQ3ZDRyxNQUFBQSxTQUFTLEVBQUVhLEtBRDRCO0FBRXZDVixNQUFBQSxPQUFPLEVBQUVXLEdBRjhCO0FBR3ZDUyxNQUFBQSxNQUFNLEVBQUU7QUFDUixpQkFBUyxDQUFDdEIsTUFBTSxFQUFQLEVBQVdBLE1BQU0sRUFBakIsQ0FERDtBQUVSLHFCQUFhLENBQUNBLE1BQU0sR0FBR21CLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsTUFBckIsQ0FBRCxFQUErQm5CLE1BQU0sR0FBR21CLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsTUFBckIsQ0FBL0IsQ0FGTDtBQUdSLHVCQUFlLENBQUNuQixNQUFNLEdBQUdtQixRQUFULENBQWtCLENBQWxCLEVBQXFCLE1BQXJCLENBQUQsRUFBK0JuQixNQUFNLEVBQXJDLENBSFA7QUFJUix3QkFBZ0IsQ0FBQ0EsTUFBTSxHQUFHbUIsUUFBVCxDQUFrQixFQUFsQixFQUFzQixNQUF0QixDQUFELEVBQWdDbkIsTUFBTSxFQUF0QyxDQUpSO0FBS1Isc0JBQWMsQ0FBQ0EsTUFBTSxHQUFHQyxPQUFULENBQWlCLE9BQWpCLENBQUQsRUFBNEJELE1BQU0sR0FBR3VCLEtBQVQsQ0FBZSxPQUFmLENBQTVCLENBTE47QUFNUixzQkFBYyxDQUFDdkIsTUFBTSxHQUFHbUIsUUFBVCxDQUFrQixDQUFsQixFQUFxQixPQUFyQixFQUE4QmxCLE9BQTlCLENBQXNDLE9BQXRDLENBQUQsRUFBaURELE1BQU0sR0FBR21CLFFBQVQsQ0FBa0IsQ0FBbEIsRUFBcUIsT0FBckIsRUFBOEJJLEtBQTlCLENBQW9DLE9BQXBDLENBQWpEO0FBTk47QUFIK0IsS0FBM0MsRUFXR0gsRUFYSDtBQWFBQSxJQUFBQSxFQUFFLENBQUNSLEtBQUQsRUFBUUMsR0FBUixDQUFGO0FBQ0gsR0F0QkQ7O0FBd0JBLE1BQUlXLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQVM5QixPQUFULEVBQWtCO0FBQzdCQyxJQUFBQSxDQUFDLENBQUMsdUJBQUQsQ0FBRCxDQUEyQkMsZUFBM0I7QUFDSCxHQUZEOztBQUlBLFNBQU87QUFDSDtBQUNBNkIsSUFBQUEsSUFBSSxFQUFFLGNBQVMvQixPQUFULEVBQWtCO0FBQ3BCRCxNQUFBQSxRQUFRO0FBQ1JJLE1BQUFBLFFBQVE7QUFDUlMsTUFBQUEsUUFBUTtBQUNSWSxNQUFBQSxRQUFRO0FBQ1JNLE1BQUFBLFFBQVE7QUFDWDtBQVJFLEdBQVA7QUFVSCxDQXBFaUMsRUFBbEMsQyxDQXNFQTs7O0FBQ0FFLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ25DLEVBQUFBLDJCQUEyQixDQUFDaUMsSUFBNUI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9mb3Jtcy9kYXRlcmFuZ2VwaWNrZXIuanM/ZWI3NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNEYXRlcmFuZ2VwaWNrZXJEZW1vcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGUxID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAkKFwiI2t0X2RhdGVyYW5nZXBpY2tlcl8xXCIpLmRhdGVyYW5nZXBpY2tlcigpO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlMiA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgJChcIiNrdF9kYXRlcmFuZ2VwaWNrZXJfMlwiKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgICAgICAgdGltZVBpY2tlcjogdHJ1ZSxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogbW9tZW50KCkuc3RhcnRPZihcImhvdXJcIiksXG4gICAgICAgICAgICBlbmREYXRlOiBtb21lbnQoKS5zdGFydE9mKFwiaG91clwiKS5hZGQoMzIsIFwiaG91clwiKSxcbiAgICAgICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgICAgIGZvcm1hdDogXCJNL0REIGhoOm1tIEFcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTMgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXJhbmdlcGlja2VyXzNcIikuZGF0ZXJhbmdlcGlja2VyKHtcbiAgICAgICAgICAgICAgICBzaW5nbGVEYXRlUGlja2VyOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3dEcm9wZG93bnM6IHRydWUsXG4gICAgICAgICAgICAgICAgbWluWWVhcjogMTkwMSxcbiAgICAgICAgICAgICAgICBtYXhZZWFyOiBwYXJzZUludChtb21lbnQoKS5mb3JtYXQoXCJZWVlZXCIpLDEwKVxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oc3RhcnQsIGVuZCwgbGFiZWwpIHtcbiAgICAgICAgICAgICAgICB2YXIgeWVhcnMgPSBtb21lbnQoKS5kaWZmKHN0YXJ0LCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwiWW91IGFyZSBcIiArIHllYXJzICsgXCIgeWVhcnMgb2xkIVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGFydCA9IG1vbWVudCgpLnN1YnRyYWN0KDI5LCBcImRheXNcIik7XG4gICAgICAgIHZhciBlbmQgPSBtb21lbnQoKTtcblxuICAgICAgICBmdW5jdGlvbiBjYihzdGFydCwgZW5kKSB7XG4gICAgICAgICAgICAkKFwiI2t0X2RhdGVyYW5nZXBpY2tlcl80XCIpLmh0bWwoc3RhcnQuZm9ybWF0KFwiTU1NTSBELCBZWVlZXCIpICsgXCIgLSBcIiArIGVuZC5mb3JtYXQoXCJNTU1NIEQsIFlZWVlcIikpO1xuICAgICAgICB9XG5cbiAgICAgICAgJChcIiNrdF9kYXRlcmFuZ2VwaWNrZXJfNFwiKS5kYXRlcmFuZ2VwaWNrZXIoe1xuICAgICAgICAgICAgc3RhcnREYXRlOiBzdGFydCxcbiAgICAgICAgICAgIGVuZERhdGU6IGVuZCxcbiAgICAgICAgICAgIHJhbmdlczoge1xuICAgICAgICAgICAgXCJUb2RheVwiOiBbbW9tZW50KCksIG1vbWVudCgpXSxcbiAgICAgICAgICAgIFwiWWVzdGVyZGF5XCI6IFttb21lbnQoKS5zdWJ0cmFjdCgxLCBcImRheXNcIiksIG1vbWVudCgpLnN1YnRyYWN0KDEsIFwiZGF5c1wiKV0sXG4gICAgICAgICAgICBcIkxhc3QgNyBEYXlzXCI6IFttb21lbnQoKS5zdWJ0cmFjdCg2LCBcImRheXNcIiksIG1vbWVudCgpXSxcbiAgICAgICAgICAgIFwiTGFzdCAzMCBEYXlzXCI6IFttb21lbnQoKS5zdWJ0cmFjdCgyOSwgXCJkYXlzXCIpLCBtb21lbnQoKV0sXG4gICAgICAgICAgICBcIlRoaXMgTW9udGhcIjogW21vbWVudCgpLnN0YXJ0T2YoXCJtb250aFwiKSwgbW9tZW50KCkuZW5kT2YoXCJtb250aFwiKV0sXG4gICAgICAgICAgICBcIkxhc3QgTW9udGhcIjogW21vbWVudCgpLnN1YnRyYWN0KDEsIFwibW9udGhcIikuc3RhcnRPZihcIm1vbnRoXCIpLCBtb21lbnQoKS5zdWJ0cmFjdCgxLCBcIm1vbnRoXCIpLmVuZE9mKFwibW9udGhcIildXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGNiKTtcblxuICAgICAgICBjYihzdGFydCwgZW5kKTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZTUgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICQoXCIja3RfZGF0ZXJhbmdlcGlja2VyXzVcIikuZGF0ZXJhbmdlcGlja2VyKCk7XG4gICAgfSAgICBcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgZXhhbXBsZTEoKTtcbiAgICAgICAgICAgIGV4YW1wbGUyKCk7XG4gICAgICAgICAgICBleGFtcGxlMygpO1xuICAgICAgICAgICAgZXhhbXBsZTQoKTtcbiAgICAgICAgICAgIGV4YW1wbGU1KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEZvcm1zRGF0ZXJhbmdlcGlja2VyRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc0RhdGVyYW5nZXBpY2tlckRlbW9zIiwiZXhhbXBsZTEiLCJlbGVtZW50IiwiJCIsImRhdGVyYW5nZXBpY2tlciIsImV4YW1wbGUyIiwidGltZVBpY2tlciIsInN0YXJ0RGF0ZSIsIm1vbWVudCIsInN0YXJ0T2YiLCJlbmREYXRlIiwiYWRkIiwibG9jYWxlIiwiZm9ybWF0IiwiZXhhbXBsZTMiLCJzaW5nbGVEYXRlUGlja2VyIiwic2hvd0Ryb3Bkb3ducyIsIm1pblllYXIiLCJtYXhZZWFyIiwicGFyc2VJbnQiLCJzdGFydCIsImVuZCIsImxhYmVsIiwieWVhcnMiLCJkaWZmIiwiYWxlcnQiLCJleGFtcGxlNCIsInN1YnRyYWN0IiwiY2IiLCJodG1sIiwicmFuZ2VzIiwiZW5kT2YiLCJleGFtcGxlNSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/daterangepicker.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/daterangepicker.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=daterangepicker.js.map