/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!************************************************************************!*\
  !*** ../src/js/custom/documentation/editors/ckeditor/balloon-block.js ***!
  \************************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsCKEditorBalloonBlock = function () {
    // Private functions
    var exampleBalloonBlock = function () {
        BalloonEditor
            .create(document.querySelector('#kt_docs_ckeditor_balloon_block'))
            .then(editor => {
                console.log(editor);
            })
            .catch(error => {
                console.error(error);
            });
    }
=======
eval(" // Class definition\n\nvar KTFormsCKEditorBalloonBlock = function () {\n  // Private functions\n  var exampleBalloonBlock = function exampleBalloonBlock() {\n    BalloonEditor.create(document.querySelector('#kt_docs_ckeditor_balloon_block')).then(function (editor) {\n      console.log(editor);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBalloonBlock();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorBalloonBlock.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvYmFsbG9vbi1ibG9jay5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSwyQkFBMkIsR0FBRyxZQUFZO0FBQzFDO0FBQ0EsTUFBSUMsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixHQUFZO0FBQ2xDQyxJQUFBQSxhQUFhLENBQ1JDLE1BREwsQ0FDWUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlDQUF2QixDQURaLEVBRUtDLElBRkwsQ0FFVSxVQUFBQyxNQUFNLEVBQUk7QUFDWkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLE1BQVo7QUFDSCxLQUpMLFdBS1csVUFBQUcsS0FBSyxFQUFJO0FBQ1pGLE1BQUFBLE9BQU8sQ0FBQ0UsS0FBUixDQUFjQSxLQUFkO0FBQ0gsS0FQTDtBQVFILEdBVEQ7O0FBV0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkVixNQUFBQSxtQkFBbUI7QUFDdEI7QUFKRSxHQUFQO0FBTUgsQ0FuQmlDLEVBQWxDLEMsQ0FxQkE7OztBQUNBVyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENiLEVBQUFBLDJCQUEyQixDQUFDVyxJQUE1QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvYmFsbG9vbi1ibG9jay5qcz9lMzhlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc0NLRWRpdG9yQmFsbG9vbkJsb2NrID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVCYWxsb29uQmxvY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIEJhbGxvb25FZGl0b3JcbiAgICAgICAgICAgIC5jcmVhdGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2RvY3NfY2tlZGl0b3JfYmFsbG9vbl9ibG9jaycpKVxuICAgICAgICAgICAgLnRoZW4oZWRpdG9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlZGl0b3IpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYWxsb29uQmxvY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVEZvcm1zQ0tFZGl0b3JCYWxsb29uQmxvY2suaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc0NLRWRpdG9yQmFsbG9vbkJsb2NrIiwiZXhhbXBsZUJhbGxvb25CbG9jayIsIkJhbGxvb25FZGl0b3IiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiZWRpdG9yIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/ckeditor/balloon-block.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function () {
            exampleBalloonBlock();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsCKEditorBalloonBlock.init();
});

/******/ })()
;
//# sourceMappingURL=balloon-block.js.map