/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/editors/tinymce/basic.js ***!
  \***************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsTinyMCEBasic = function() {
    // Private functions
    var exampleBasic = function() {
        var options = {selector: '#kt_docs_tinymce_basic'};
        
        if (KTApp.isDarkMode()) {
            options['skin'] = 'oxide-dark';
            options['content_css'] = 'dark';
        }
        
        tinymce.init(options);
    }
=======
eval(" // Class definition\n\nvar KTFormsTinyMCEBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var options = {\n      selector: '#kt_docs_tinymce_basic'\n    };\n\n    if (KTApp.isDarkMode()) {\n      options['skin'] = 'oxide-dark';\n      options['content_css'] = 'dark';\n    }\n\n    tinymce.init(options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvdGlueW1jZS9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxtQkFBbUIsR0FBRyxZQUFXO0FBQ2pDO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQixRQUFJQyxPQUFPLEdBQUc7QUFBQ0MsTUFBQUEsUUFBUSxFQUFFO0FBQVgsS0FBZDs7QUFFQSxRQUFJQyxLQUFLLENBQUNDLFVBQU4sRUFBSixFQUF3QjtBQUNwQkgsTUFBQUEsT0FBTyxDQUFDLE1BQUQsQ0FBUCxHQUFrQixZQUFsQjtBQUNBQSxNQUFBQSxPQUFPLENBQUMsYUFBRCxDQUFQLEdBQXlCLE1BQXpCO0FBQ0g7O0FBRURJLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhTCxPQUFiO0FBQ0gsR0FURDs7QUFXQSxTQUFPO0FBQ0g7QUFDQUssSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JOLE1BQUFBLFlBQVk7QUFDZjtBQUpFLEdBQVA7QUFNSCxDQW5CeUIsRUFBMUIsQyxDQXFCQTs7O0FBQ0FPLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ1QsRUFBQUEsbUJBQW1CLENBQUNPLElBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2Jhc2ljLmpzPzJiMzUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zVGlueU1DRUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUJhc2ljID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0ge3NlbGVjdG9yOiAnI2t0X2RvY3NfdGlueW1jZV9iYXNpYyd9O1xuICAgICAgICBcbiAgICAgICAgaWYgKEtUQXBwLmlzRGFya01vZGUoKSkge1xuICAgICAgICAgICAgb3B0aW9uc1snc2tpbiddID0gJ294aWRlLWRhcmsnO1xuICAgICAgICAgICAgb3B0aW9uc1snY29udGVudF9jc3MnXSA9ICdkYXJrJztcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdGlueW1jZS5pbml0KG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlQmFzaWMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNUaW55TUNFQmFzaWMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc1RpbnlNQ0VCYXNpYyIsImV4YW1wbGVCYXNpYyIsIm9wdGlvbnMiLCJzZWxlY3RvciIsIktUQXBwIiwiaXNEYXJrTW9kZSIsInRpbnltY2UiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/tinymce/basic.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleBasic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsTinyMCEBasic.init();
});

/******/ })()
;
//# sourceMappingURL=basic.js.map