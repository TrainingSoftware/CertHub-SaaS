/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../src/js/custom/documentation/editors/tinymce/hidden.js ***!
  \****************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTFormsTinyMCEHidden = function() {
    // Private functions
    var exampleHidden = function() {
        tinymce.init({
            selector: '#kt_docs_tinymce_hidden',
            menubar: false,
            toolbar: ['styleselect fontselect fontsizeselect',
                'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify',
                'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'],
            plugins : 'advlist autolink link image lists charmap print preview code'
        });
    }
=======
eval(" // Class definition\n\nvar KTFormsTinyMCEHidden = function () {\n  // Private functions\n  var exampleHidden = function exampleHidden() {\n    tinymce.init({\n      selector: '#kt_docs_tinymce_hidden',\n      menubar: false,\n      toolbar: ['styleselect fontselect fontsizeselect', 'undo redo | cut copy paste | bold italic | link image | alignleft aligncenter alignright alignjustify', 'bullist numlist | outdent indent | blockquote subscript superscript | advlist | autolink | lists charmap | print preview |  code'],\n      plugins: 'advlist autolink link image lists charmap print preview code'\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleHidden();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsTinyMCEHidden.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvdGlueW1jZS9oaWRkZW4uanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBVztBQUNsQztBQUNBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQkMsSUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWE7QUFDVEMsTUFBQUEsUUFBUSxFQUFFLHlCQUREO0FBRVRDLE1BQUFBLE9BQU8sRUFBRSxLQUZBO0FBR1RDLE1BQUFBLE9BQU8sRUFBRSxDQUFDLHVDQUFELEVBQ0wsdUdBREssRUFFTCxrSUFGSyxDQUhBO0FBTVRDLE1BQUFBLE9BQU8sRUFBRztBQU5ELEtBQWI7QUFRSCxHQVREOztBQVdBLFNBQU87QUFDSDtBQUNBSixJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYkYsTUFBQUEsYUFBYTtBQUNoQjtBQUpFLEdBQVA7QUFNSCxDQW5CMEIsRUFBM0IsQyxDQXFCQTs7O0FBQ0FPLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ1QsRUFBQUEsb0JBQW9CLENBQUNHLElBQXJCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZWRpdG9ycy90aW55bWNlL2hpZGRlbi5qcz8xZTk4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc1RpbnlNQ0VIaWRkZW4gPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlSGlkZGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbnltY2UuaW5pdCh7XG4gICAgICAgICAgICBzZWxlY3RvcjogJyNrdF9kb2NzX3RpbnltY2VfaGlkZGVuJyxcbiAgICAgICAgICAgIG1lbnViYXI6IGZhbHNlLFxuICAgICAgICAgICAgdG9vbGJhcjogWydzdHlsZXNlbGVjdCBmb250c2VsZWN0IGZvbnRzaXplc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAndW5kbyByZWRvIHwgY3V0IGNvcHkgcGFzdGUgfCBib2xkIGl0YWxpYyB8IGxpbmsgaW1hZ2UgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmp1c3RpZnknLFxuICAgICAgICAgICAgICAgICdidWxsaXN0IG51bWxpc3QgfCBvdXRkZW50IGluZGVudCB8IGJsb2NrcXVvdGUgc3Vic2NyaXB0IHN1cGVyc2NyaXB0IHwgYWR2bGlzdCB8IGF1dG9saW5rIHwgbGlzdHMgY2hhcm1hcCB8IHByaW50IHByZXZpZXcgfCAgY29kZSddLFxuICAgICAgICAgICAgcGx1Z2lucyA6ICdhZHZsaXN0IGF1dG9saW5rIGxpbmsgaW1hZ2UgbGlzdHMgY2hhcm1hcCBwcmludCBwcmV2aWV3IGNvZGUnXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlSGlkZGVuKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEZvcm1zVGlueU1DRUhpZGRlbi5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEZvcm1zVGlueU1DRUhpZGRlbiIsImV4YW1wbGVIaWRkZW4iLCJ0aW55bWNlIiwiaW5pdCIsInNlbGVjdG9yIiwibWVudWJhciIsInRvb2xiYXIiLCJwbHVnaW5zIiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/tinymce/hidden.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleHidden();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsTinyMCEHidden.init();
});

/******/ })()
;
//# sourceMappingURL=hidden.js.map