/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/forms/bootstrap-maxlength.js ***!
  \*******************************************************************/


// Class definition
var KTFormsMaxlengthDemos = function () {
    // Private functions
    var exampleBasic = function () {
        // minimum setup
        $('#kt_docs_maxlength_basic').maxlength({
            warningClass: "badge badge-primary",
            limitReachedClass: "badge badge-success"
        });
    }

    var exampleThreshold = function () {
        // Threshold setup
        $('#kt_docs_maxlength_threshold').maxlength({
            threshold: 20,
            warningClass: "badge badge-primary",
            limitReachedClass: "badge badge-success"
        });
    }

    var exampleAlwaysShow = function () {
        // Always show setup
        $('#kt_docs_maxlength_always_show').maxlength({
            alwaysShow: true,
            threshold: 20,
            warningClass: "badge badge-danger",
            limitReachedClass: "badge badge-info"
        });
    }

    var exampleCustomText = function () {
        // Always show setup
        $('#kt_docs_maxlength_custom_text').maxlength({
            threshold: 20,
            warningClass: "badge badge-danger",
            limitReachedClass: "badge badge-success",
            separator: ' of ',
            preText: 'You have ',
            postText: ' chars remaining.',
            validate: true
        });
    }

    var exampleTextarea = function () {
        // Textarea setup
        $('#kt_docs_maxlength_textarea').maxlength({
            warningClass: "badge badge-primary",
            limitReachedClass: "badge badge-success"
        });
    }

    var examplePosition = function () {
        // Position setup
        $('#kt_docs_maxlength_position_top_left').maxlength({
            placement: 'top-left',
            warningClass: "badge badge-danger",
            limitReachedClass: "badge badge-primary"
        });

        $('#kt_docs_maxlength_position_top_right').maxlength({
            placement: 'top-right',
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-danger"
        });

        $('#kt_docs_maxlength_position_bottom_left').maxlength({
            placement: 'bottom-left',
            warningClass: "badge badge-info",
            limitReachedClass: "badge badge-warning"
        });

        $('#kt_docs_maxlength_position_bottom_right').maxlength({
            placement: 'bottom-right',
            warningClass: "badge badge-primary",
            limitReachedClass: "badge badge-success"
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleBasic();
            exampleThreshold();
            exampleAlwaysShow();
            exampleCustomText();
            exampleTextarea();
            examplePosition();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsMaxlengthDemos.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/bootstrap-maxlength.js":
/*!****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/bootstrap-maxlength.js ***!
  \****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsMaxlengthDemos = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    // minimum setup\n    $('#kt_docs_maxlength_basic').maxlength({\n      warningClass: \"badge badge-primary\",\n      limitReachedClass: \"badge badge-success\"\n    });\n  };\n\n  var exampleThreshold = function exampleThreshold() {\n    // Threshold setup\n    $('#kt_docs_maxlength_threshold').maxlength({\n      threshold: 20,\n      warningClass: \"badge badge-primary\",\n      limitReachedClass: \"badge badge-success\"\n    });\n  };\n\n  var exampleAlwaysShow = function exampleAlwaysShow() {\n    // Always show setup\n    $('#kt_docs_maxlength_always_show').maxlength({\n      alwaysShow: true,\n      threshold: 20,\n      warningClass: \"badge badge-danger\",\n      limitReachedClass: \"badge badge-info\"\n    });\n  };\n\n  var exampleCustomText = function exampleCustomText() {\n    // Always show setup\n    $('#kt_docs_maxlength_custom_text').maxlength({\n      threshold: 20,\n      warningClass: \"badge badge-danger\",\n      limitReachedClass: \"badge badge-success\",\n      separator: ' of ',\n      preText: 'You have ',\n      postText: ' chars remaining.',\n      validate: true\n    });\n  };\n\n  var exampleTextarea = function exampleTextarea() {\n    // Textarea setup\n    $('#kt_docs_maxlength_textarea').maxlength({\n      warningClass: \"badge badge-primary\",\n      limitReachedClass: \"badge badge-success\"\n    });\n  };\n\n  var examplePosition = function examplePosition() {\n    // Position setup\n    $('#kt_docs_maxlength_position_top_left').maxlength({\n      placement: 'top-left',\n      warningClass: \"badge badge-danger\",\n      limitReachedClass: \"badge badge-primary\"\n    });\n    $('#kt_docs_maxlength_position_top_right').maxlength({\n      placement: 'top-right',\n      warningClass: \"badge badge-success\",\n      limitReachedClass: \"badge badge-danger\"\n    });\n    $('#kt_docs_maxlength_position_bottom_left').maxlength({\n      placement: 'bottom-left',\n      warningClass: \"badge badge-info\",\n      limitReachedClass: \"badge badge-warning\"\n    });\n    $('#kt_docs_maxlength_position_bottom_right').maxlength({\n      placement: 'bottom-right',\n      warningClass: \"badge badge-primary\",\n      limitReachedClass: \"badge badge-success\"\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n      exampleThreshold();\n      exampleAlwaysShow();\n      exampleCustomText();\n      exampleTextarea();\n      examplePosition();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsMaxlengthDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL2Jvb3RzdHJhcC1tYXhsZW5ndGguanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEscUJBQXFCLEdBQUcsWUFBWTtBQUNwQztBQUNBLE1BQUlDLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQVk7QUFDM0I7QUFDQUMsSUFBQUEsQ0FBQyxDQUFDLDBCQUFELENBQUQsQ0FBOEJDLFNBQTlCLENBQXdDO0FBQ3BDQyxNQUFBQSxZQUFZLEVBQUUscUJBRHNCO0FBRXBDQyxNQUFBQSxpQkFBaUIsRUFBRTtBQUZpQixLQUF4QztBQUlILEdBTkQ7O0FBUUEsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFZO0FBQy9CO0FBQ0FKLElBQUFBLENBQUMsQ0FBQyw4QkFBRCxDQUFELENBQWtDQyxTQUFsQyxDQUE0QztBQUN4Q0ksTUFBQUEsU0FBUyxFQUFFLEVBRDZCO0FBRXhDSCxNQUFBQSxZQUFZLEVBQUUscUJBRjBCO0FBR3hDQyxNQUFBQSxpQkFBaUIsRUFBRTtBQUhxQixLQUE1QztBQUtILEdBUEQ7O0FBU0EsTUFBSUcsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixHQUFZO0FBQ2hDO0FBQ0FOLElBQUFBLENBQUMsQ0FBQyxnQ0FBRCxDQUFELENBQW9DQyxTQUFwQyxDQUE4QztBQUMxQ00sTUFBQUEsVUFBVSxFQUFFLElBRDhCO0FBRTFDRixNQUFBQSxTQUFTLEVBQUUsRUFGK0I7QUFHMUNILE1BQUFBLFlBQVksRUFBRSxvQkFINEI7QUFJMUNDLE1BQUFBLGlCQUFpQixFQUFFO0FBSnVCLEtBQTlDO0FBTUgsR0FSRDs7QUFVQSxNQUFJSyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVk7QUFDaEM7QUFDQVIsSUFBQUEsQ0FBQyxDQUFDLGdDQUFELENBQUQsQ0FBb0NDLFNBQXBDLENBQThDO0FBQzFDSSxNQUFBQSxTQUFTLEVBQUUsRUFEK0I7QUFFMUNILE1BQUFBLFlBQVksRUFBRSxvQkFGNEI7QUFHMUNDLE1BQUFBLGlCQUFpQixFQUFFLHFCQUh1QjtBQUkxQ00sTUFBQUEsU0FBUyxFQUFFLE1BSitCO0FBSzFDQyxNQUFBQSxPQUFPLEVBQUUsV0FMaUM7QUFNMUNDLE1BQUFBLFFBQVEsRUFBRSxtQkFOZ0M7QUFPMUNDLE1BQUFBLFFBQVEsRUFBRTtBQVBnQyxLQUE5QztBQVNILEdBWEQ7O0FBYUEsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCO0FBQ0FiLElBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxTQUFqQyxDQUEyQztBQUN2Q0MsTUFBQUEsWUFBWSxFQUFFLHFCQUR5QjtBQUV2Q0MsTUFBQUEsaUJBQWlCLEVBQUU7QUFGb0IsS0FBM0M7QUFJSCxHQU5EOztBQVFBLE1BQUlXLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUM5QjtBQUNBZCxJQUFBQSxDQUFDLENBQUMsc0NBQUQsQ0FBRCxDQUEwQ0MsU0FBMUMsQ0FBb0Q7QUFDaERjLE1BQUFBLFNBQVMsRUFBRSxVQURxQztBQUVoRGIsTUFBQUEsWUFBWSxFQUFFLG9CQUZrQztBQUdoREMsTUFBQUEsaUJBQWlCLEVBQUU7QUFINkIsS0FBcEQ7QUFNQUgsSUFBQUEsQ0FBQyxDQUFDLHVDQUFELENBQUQsQ0FBMkNDLFNBQTNDLENBQXFEO0FBQ2pEYyxNQUFBQSxTQUFTLEVBQUUsV0FEc0M7QUFFakRiLE1BQUFBLFlBQVksRUFBRSxxQkFGbUM7QUFHakRDLE1BQUFBLGlCQUFpQixFQUFFO0FBSDhCLEtBQXJEO0FBTUFILElBQUFBLENBQUMsQ0FBQyx5Q0FBRCxDQUFELENBQTZDQyxTQUE3QyxDQUF1RDtBQUNuRGMsTUFBQUEsU0FBUyxFQUFFLGFBRHdDO0FBRW5EYixNQUFBQSxZQUFZLEVBQUUsa0JBRnFDO0FBR25EQyxNQUFBQSxpQkFBaUIsRUFBRTtBQUhnQyxLQUF2RDtBQU1BSCxJQUFBQSxDQUFDLENBQUMsMENBQUQsQ0FBRCxDQUE4Q0MsU0FBOUMsQ0FBd0Q7QUFDcERjLE1BQUFBLFNBQVMsRUFBRSxjQUR5QztBQUVwRGIsTUFBQUEsWUFBWSxFQUFFLHFCQUZzQztBQUdwREMsTUFBQUEsaUJBQWlCLEVBQUU7QUFIaUMsS0FBeEQ7QUFLSCxHQXpCRDs7QUEyQkEsU0FBTztBQUNIO0FBQ0FhLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkakIsTUFBQUEsWUFBWTtBQUNaSyxNQUFBQSxnQkFBZ0I7QUFDaEJFLE1BQUFBLGlCQUFpQjtBQUNqQkUsTUFBQUEsaUJBQWlCO0FBQ2pCSyxNQUFBQSxlQUFlO0FBQ2ZDLE1BQUFBLGVBQWU7QUFDbEI7QUFURSxHQUFQO0FBV0gsQ0F4RjJCLEVBQTVCLEMsQ0EwRkE7OztBQUNBRyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENwQixFQUFBQSxxQkFBcUIsQ0FBQ2tCLElBQXRCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvYm9vdHN0cmFwLW1heGxlbmd0aC5qcz9mYWVhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc01heGxlbmd0aERlbW9zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gbWluaW11bSBzZXR1cFxuICAgICAgICAkKCcja3RfZG9jc19tYXhsZW5ndGhfYmFzaWMnKS5tYXhsZW5ndGgoe1xuICAgICAgICAgICAgd2FybmluZ0NsYXNzOiBcImJhZGdlIGJhZGdlLXByaW1hcnlcIixcbiAgICAgICAgICAgIGxpbWl0UmVhY2hlZENsYXNzOiBcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIlxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgZXhhbXBsZVRocmVzaG9sZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhyZXNob2xkIHNldHVwXG4gICAgICAgICQoJyNrdF9kb2NzX21heGxlbmd0aF90aHJlc2hvbGQnKS5tYXhsZW5ndGgoe1xuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgICAgIHdhcm5pbmdDbGFzczogXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCIsXG4gICAgICAgICAgICBsaW1pdFJlYWNoZWRDbGFzczogXCJiYWRnZSBiYWRnZS1zdWNjZXNzXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGVBbHdheXNTaG93ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBBbHdheXMgc2hvdyBzZXR1cFxuICAgICAgICAkKCcja3RfZG9jc19tYXhsZW5ndGhfYWx3YXlzX3Nob3cnKS5tYXhsZW5ndGgoe1xuICAgICAgICAgICAgYWx3YXlzU2hvdzogdHJ1ZSxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMjAsXG4gICAgICAgICAgICB3YXJuaW5nQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICBsaW1pdFJlYWNoZWRDbGFzczogXCJiYWRnZSBiYWRnZS1pbmZvXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIGV4YW1wbGVDdXN0b21UZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBBbHdheXMgc2hvdyBzZXR1cFxuICAgICAgICAkKCcja3RfZG9jc19tYXhsZW5ndGhfY3VzdG9tX3RleHQnKS5tYXhsZW5ndGgoe1xuICAgICAgICAgICAgdGhyZXNob2xkOiAyMCxcbiAgICAgICAgICAgIHdhcm5pbmdDbGFzczogXCJiYWRnZSBiYWRnZS1kYW5nZXJcIixcbiAgICAgICAgICAgIGxpbWl0UmVhY2hlZENsYXNzOiBcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIHNlcGFyYXRvcjogJyBvZiAnLFxuICAgICAgICAgICAgcHJlVGV4dDogJ1lvdSBoYXZlICcsXG4gICAgICAgICAgICBwb3N0VGV4dDogJyBjaGFycyByZW1haW5pbmcuJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlVGV4dGFyZWEgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFRleHRhcmVhIHNldHVwXG4gICAgICAgICQoJyNrdF9kb2NzX21heGxlbmd0aF90ZXh0YXJlYScpLm1heGxlbmd0aCh7XG4gICAgICAgICAgICB3YXJuaW5nQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtcHJpbWFyeVwiLFxuICAgICAgICAgICAgbGltaXRSZWFjaGVkQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utc3VjY2Vzc1wiXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBleGFtcGxlUG9zaXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFBvc2l0aW9uIHNldHVwXG4gICAgICAgICQoJyNrdF9kb2NzX21heGxlbmd0aF9wb3NpdGlvbl90b3BfbGVmdCcpLm1heGxlbmd0aCh7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AtbGVmdCcsXG4gICAgICAgICAgICB3YXJuaW5nQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtZGFuZ2VyXCIsXG4gICAgICAgICAgICBsaW1pdFJlYWNoZWRDbGFzczogXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnI2t0X2RvY3NfbWF4bGVuZ3RoX3Bvc2l0aW9uX3RvcF9yaWdodCcpLm1heGxlbmd0aCh7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICd0b3AtcmlnaHQnLFxuICAgICAgICAgICAgd2FybmluZ0NsYXNzOiBcImJhZGdlIGJhZGdlLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgIGxpbWl0UmVhY2hlZENsYXNzOiBcImJhZGdlIGJhZGdlLWRhbmdlclwiXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNrdF9kb2NzX21heGxlbmd0aF9wb3NpdGlvbl9ib3R0b21fbGVmdCcpLm1heGxlbmd0aCh7XG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdib3R0b20tbGVmdCcsXG4gICAgICAgICAgICB3YXJuaW5nQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtaW5mb1wiLFxuICAgICAgICAgICAgbGltaXRSZWFjaGVkQ2xhc3M6IFwiYmFkZ2UgYmFkZ2Utd2FybmluZ1wiXG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJyNrdF9kb2NzX21heGxlbmd0aF9wb3NpdGlvbl9ib3R0b21fcmlnaHQnKS5tYXhsZW5ndGgoe1xuICAgICAgICAgICAgcGxhY2VtZW50OiAnYm90dG9tLXJpZ2h0JyxcbiAgICAgICAgICAgIHdhcm5pbmdDbGFzczogXCJiYWRnZSBiYWRnZS1wcmltYXJ5XCIsXG4gICAgICAgICAgICBsaW1pdFJlYWNoZWRDbGFzczogXCJiYWRnZSBiYWRnZS1zdWNjZXNzXCJcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcbiAgICAgICAgICAgIGV4YW1wbGVUaHJlc2hvbGQoKTtcbiAgICAgICAgICAgIGV4YW1wbGVBbHdheXNTaG93KCk7XG4gICAgICAgICAgICBleGFtcGxlQ3VzdG9tVGV4dCgpO1xuICAgICAgICAgICAgZXhhbXBsZVRleHRhcmVhKCk7XG4gICAgICAgICAgICBleGFtcGxlUG9zaXRpb24oKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEZvcm1zTWF4bGVuZ3RoRGVtb3MuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc01heGxlbmd0aERlbW9zIiwiZXhhbXBsZUJhc2ljIiwiJCIsIm1heGxlbmd0aCIsIndhcm5pbmdDbGFzcyIsImxpbWl0UmVhY2hlZENsYXNzIiwiZXhhbXBsZVRocmVzaG9sZCIsInRocmVzaG9sZCIsImV4YW1wbGVBbHdheXNTaG93IiwiYWx3YXlzU2hvdyIsImV4YW1wbGVDdXN0b21UZXh0Iiwic2VwYXJhdG9yIiwicHJlVGV4dCIsInBvc3RUZXh0IiwidmFsaWRhdGUiLCJleGFtcGxlVGV4dGFyZWEiLCJleGFtcGxlUG9zaXRpb24iLCJwbGFjZW1lbnQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/bootstrap-maxlength.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/bootstrap-maxlength.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=bootstrap-maxlength.js.map