/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/editors/ckeditor/document.js ***!
  \*******************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsCKEditorDocument = function () {
    // Private functions
    var exampleDocument = function () {
        DecoupledEditor
            .create(document.querySelector('#kt_docs_ckeditor_document'))
            .then(editor => {
                const toolbarContainer = document.querySelector('#kt_docs_ckeditor_document_toolbar');
=======
eval(" // Class definition\n\nvar KTFormsCKEditorDocument = function () {\n  // Private functions\n  var exampleDocument = function exampleDocument() {\n    DecoupledEditor.create(document.querySelector('#kt_docs_ckeditor_document')).then(function (editor) {\n      var toolbarContainer = document.querySelector('#kt_docs_ckeditor_document_toolbar');\n      toolbarContainer.appendChild(editor.ui.view.toolbar.element);\n    })[\"catch\"](function (error) {\n      console.error(error);\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDocument();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsCKEditorDocument.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvZG9jdW1lbnQuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsdUJBQXVCLEdBQUcsWUFBWTtBQUN0QztBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUM5QkMsSUFBQUEsZUFBZSxDQUNWQyxNQURMLENBQ1lDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qiw0QkFBdkIsQ0FEWixFQUVLQyxJQUZMLENBRVUsVUFBQUMsTUFBTSxFQUFJO0FBQ1osVUFBTUMsZ0JBQWdCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQ0FBdkIsQ0FBekI7QUFFQUcsTUFBQUEsZ0JBQWdCLENBQUNDLFdBQWpCLENBQTZCRixNQUFNLENBQUNHLEVBQVAsQ0FBVUMsSUFBVixDQUFlQyxPQUFmLENBQXVCQyxPQUFwRDtBQUNILEtBTkwsV0FPVyxVQUFBQyxLQUFLLEVBQUk7QUFDWkMsTUFBQUEsT0FBTyxDQUFDRCxLQUFSLENBQWNBLEtBQWQ7QUFDSCxLQVRMO0FBVUgsR0FYRDs7QUFhQSxTQUFPO0FBQ0g7QUFDQUUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RmLE1BQUFBLGVBQWU7QUFDbEI7QUFKRSxHQUFQO0FBTUgsQ0FyQjZCLEVBQTlCLEMsQ0F1QkE7OztBQUNBZ0IsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDbEIsRUFBQUEsdUJBQXVCLENBQUNnQixJQUF4QjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvY2tlZGl0b3IvZG9jdW1lbnQuanM/NTJhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtURm9ybXNDS0VkaXRvckRvY3VtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVEb2N1bWVudCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRGVjb3VwbGVkRWRpdG9yXG4gICAgICAgICAgICAuY3JlYXRlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9kb2NzX2NrZWRpdG9yX2RvY3VtZW50JykpXG4gICAgICAgICAgICAudGhlbihlZGl0b3IgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfZG9jc19ja2VkaXRvcl9kb2N1bWVudF90b29sYmFyJyk7XG5cbiAgICAgICAgICAgICAgICB0b29sYmFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGVkaXRvci51aS52aWV3LnRvb2xiYXIuZWxlbWVudCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZXhhbXBsZURvY3VtZW50KCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RGb3Jtc0NLRWRpdG9yRG9jdW1lbnQuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RGb3Jtc0NLRWRpdG9yRG9jdW1lbnQiLCJleGFtcGxlRG9jdW1lbnQiLCJEZWNvdXBsZWRFZGl0b3IiLCJjcmVhdGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aGVuIiwiZWRpdG9yIiwidG9vbGJhckNvbnRhaW5lciIsImFwcGVuZENoaWxkIiwidWkiLCJ2aWV3IiwidG9vbGJhciIsImVsZW1lbnQiLCJlcnJvciIsImNvbnNvbGUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/ckeditor/document.js\n");
>>>>>>> Stashed changes

                toolbarContainer.appendChild(editor.ui.view.toolbar.element);
            })
            .catch(error => {
                console.error(error);
            });
    }

    return {
        // Public Functions
        init: function () {
            exampleDocument();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsCKEditorDocument.init();
});

/******/ })()
;
//# sourceMappingURL=document.js.map