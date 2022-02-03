/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/basic.js ***!
  \**************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeBasic = function() {
    // Private functions
    var exampleBasic = function() {
        $('#kt_docs_jstree_basic').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder"
                },
                "file" : {
                    "icon" : "fa fa-file"
                }
            },
            "plugins": ["types"]
        });
    }
=======
eval(" // Class definition\n\nvar KTJSTreeBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    $('#kt_docs_jstree_basic').jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file\"\n        }\n      },\n      \"plugins\": [\"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2Jhc2ljLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFXO0FBQzNCO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQkMsSUFBQUEsQ0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJDLE1BQTNCLENBQWtDO0FBQzlCLGNBQVM7QUFDTCxrQkFBVztBQUNQLHdCQUFjO0FBRFA7QUFETixPQURxQjtBQU05QixlQUFVO0FBQ04sbUJBQVk7QUFDUixrQkFBUztBQURELFNBRE47QUFJTixnQkFBUztBQUNMLGtCQUFTO0FBREo7QUFKSCxPQU5vQjtBQWM5QixpQkFBVyxDQUFDLE9BQUQ7QUFkbUIsS0FBbEM7QUFnQkgsR0FqQkQ7O0FBbUJBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYkgsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBM0JtQixFQUFwQixDLENBNkJBOzs7QUFDQUksTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDTixFQUFBQSxhQUFhLENBQUNJLElBQWQ7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2pzdHJlZS9iYXNpYy5qcz8wNzNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RKU1RyZWVCYXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcja3RfZG9jc19qc3RyZWVfYmFzaWMnKS5qc3RyZWUoe1xuICAgICAgICAgICAgXCJjb3JlXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJ0aGVtZXNcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZXNcIiA6IHtcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZvbGRlclwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZpbGVcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZpbGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBsdWdpbnNcIjogW1widHlwZXNcIl1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RKU1RyZWVCYXNpYy5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZUJhc2ljIiwiZXhhbXBsZUJhc2ljIiwiJCIsImpzdHJlZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/basic.js\n");
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
    KTJSTreeBasic.init();
});

/******/ })()
;
//# sourceMappingURL=basic.js.map