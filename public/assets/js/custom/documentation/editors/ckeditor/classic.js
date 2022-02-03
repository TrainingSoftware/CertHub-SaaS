/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ../src/js/custom/documentation/editors/ckeditor/classic.js ***!
  \******************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsCKEditorClassic = function () {
    // Private functions
    var exampleClassic = function () {
        ClassicEditor
            .create(document.querySelector('#kt_docs_ckeditor_classic'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });
    }
=======
eval(" // Class definition\n\nvar KTFormsCKEditorClassic = function () {\n  // Private functions\n  var exampleClassic = function exampleClassic() {\n    ClassicEditor.create(document.querySelector('#kt_docs_ckeditor_classic')).then(function (editor) {\n      console.log(editor);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleClassic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorClassic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvY2xhc3NpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxzQkFBc0IsR0FBRyxZQUFZO0FBQ3JDO0FBQ0EsTUFBSUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixHQUFZO0FBQzdCQyxJQUFBQSxhQUFhLENBQ1JDLE1BREwsQ0FDWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLDJCQUF2QixDQURaLEVBRUtDLElBRkwsQ0FFVSxVQUFBQyxNQUFNLEVBQUk7QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDSCxLQUpMLFdBS1csVUFBQUcsS0FBSyxFQUFJO0FBQ1pGLE1BQUFBLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQSxLQUFkO0FBQ0gsS0FQTDtBQVFILEdBVEQ7O0FBV0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkVixNQUFBQSxjQUFjO0FBQ2pCO0FBSkUsR0FBUDtBQU1ILENBbkI0QixFQUE3QixDLENBcUJBOzs7QUFDQVcsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDYixFQUFBQSxzQkFBc0IsQ0FBQ1csSUFBdkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL2NrZWRpdG9yL2NsYXNzaWMuanM/NWE5MSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNDS0VkaXRvckNsYXNzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUNsYXNzaWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIENsYXNzaWNFZGl0b3JcbiAgICAgICAgICAgIC5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RvY3NfY2tlZGl0b3JfY2xhc3NpYycpKVxuICAgICAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVDbGFzc2ljKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0NLRWRpdG9yQ2xhc3NpYy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zQ0tFZGl0b3JDbGFzc2ljIiwiZXhhbXBsZUNsYXNzaWMiLCJDbGFzc2ljRWRpdG9yIiwiY3JlYXRlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGhlbiIsImVkaXRvciIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/ckeditor/classic.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function () {
            exampleClassic();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsCKEditorClassic.init();
});

/******/ })()
;
//# sourceMappingURL=classic.js.map