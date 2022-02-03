/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!******************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/checkable.js ***!
  \******************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeCheckable = function() {
    // Private functions
    var exampleCheckable = function() {
        $('#kt_docs_jstree_checkable').jstree({
            'plugins': ["wholerow", "checkbox", "types"],
            'core': {
                "themes" : {
                    "responsive": false
                },
                'data': [{
                        "text": "Same but with checkboxes",
                        "children": [{
                            "text": "initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning text-danger"
                        }, {
                            "text": "initially open",
                            "icon" : "fa fa-folder text-default",
                            "state": {
                                "opened": true
                            },
                            "children": ["Another node"]
                        }, {
                            "text": "custom icon",
                            "icon": "fa fa-warning text-waring"
                        }, {
                            "text": "disabled node",
                            "icon": "fa fa-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }]
                    },
                    "And wholerow selection"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  text-warning"
                }
            },
        });
    }
=======
eval(" // Class definition\n\nvar KTJSTreeCheckable = function () {\n  // Private functions\n  var exampleCheckable = function exampleCheckable() {\n    $('#kt_docs_jstree_checkable').jstree({\n      'plugins': [\"wholerow\", \"checkbox\", \"types\"],\n      'core': {\n        \"themes\": {\n          \"responsive\": false\n        },\n        'data': [{\n          \"text\": \"Same but with checkboxes\",\n          \"children\": [{\n            \"text\": \"initially selected\",\n            \"state\": {\n              \"selected\": true\n            }\n          }, {\n            \"text\": \"custom icon\",\n            \"icon\": \"fa fa-warning text-danger\"\n          }, {\n            \"text\": \"initially open\",\n            \"icon\": \"fa fa-folder text-default\",\n            \"state\": {\n              \"opened\": true\n            },\n            \"children\": [\"Another node\"]\n          }, {\n            \"text\": \"custom icon\",\n            \"icon\": \"fa fa-warning text-waring\"\n          }, {\n            \"text\": \"disabled node\",\n            \"icon\": \"fa fa-check text-success\",\n            \"state\": {\n              \"disabled\": true\n            }\n          }]\n        }, \"And wholerow selection\"]\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-warning\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-warning\"\n        }\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCheckable();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeCheckable.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NoZWNrYWJsZS5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxpQkFBaUIsR0FBRyxZQUFXO0FBQy9CO0FBQ0EsTUFBSUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixHQUFXO0FBQzlCQyxJQUFBQSxDQUFDLENBQUMsMkJBQUQsQ0FBRCxDQUErQkMsTUFBL0IsQ0FBc0M7QUFDbEMsaUJBQVcsQ0FBQyxVQUFELEVBQWEsVUFBYixFQUF5QixPQUF6QixDQUR1QjtBQUVsQyxjQUFRO0FBQ0osa0JBQVc7QUFDUCx3QkFBYztBQURQLFNBRFA7QUFJSixnQkFBUSxDQUFDO0FBQ0Qsa0JBQVEsMEJBRFA7QUFFRCxzQkFBWSxDQUFDO0FBQ1Qsb0JBQVEsb0JBREM7QUFFVCxxQkFBUztBQUNMLDBCQUFZO0FBRFA7QUFGQSxXQUFELEVBS1Q7QUFDQyxvQkFBUSxhQURUO0FBRUMsb0JBQVE7QUFGVCxXQUxTLEVBUVQ7QUFDQyxvQkFBUSxnQkFEVDtBQUVDLG9CQUFTLDJCQUZWO0FBR0MscUJBQVM7QUFDTCx3QkFBVTtBQURMLGFBSFY7QUFNQyx3QkFBWSxDQUFDLGNBQUQ7QUFOYixXQVJTLEVBZVQ7QUFDQyxvQkFBUSxhQURUO0FBRUMsb0JBQVE7QUFGVCxXQWZTLEVBa0JUO0FBQ0Msb0JBQVEsZUFEVDtBQUVDLG9CQUFRLDBCQUZUO0FBR0MscUJBQVM7QUFDTCwwQkFBWTtBQURQO0FBSFYsV0FsQlM7QUFGWCxTQUFELEVBNEJKLHdCQTVCSTtBQUpKLE9BRjBCO0FBcUNsQyxlQUFVO0FBQ04sbUJBQVk7QUFDUixrQkFBUztBQURELFNBRE47QUFJTixnQkFBUztBQUNMLGtCQUFTO0FBREo7QUFKSDtBQXJDd0IsS0FBdEM7QUE4Q0gsR0EvQ0Q7O0FBaURBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYkgsTUFBQUEsZ0JBQWdCO0FBQ25CO0FBSkUsR0FBUDtBQU1ILENBekR1QixFQUF4QixDLENBMkRBOzs7QUFDQUksTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDTixFQUFBQSxpQkFBaUIsQ0FBQ0ksSUFBbEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2pzdHJlZS9jaGVja2FibGUuanM/NjZjZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSlNUcmVlQ2hlY2thYmxlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUNoZWNrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcja3RfZG9jc19qc3RyZWVfY2hlY2thYmxlJykuanN0cmVlKHtcbiAgICAgICAgICAgICdwbHVnaW5zJzogW1wid2hvbGVyb3dcIiwgXCJjaGVja2JveFwiLCBcInR5cGVzXCJdLFxuICAgICAgICAgICAgJ2NvcmUnOiB7XG4gICAgICAgICAgICAgICAgXCJ0aGVtZXNcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTYW1lIGJ1dCB3aXRoIGNoZWNrYm94ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJpbml0aWFsbHkgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImN1c3RvbSBpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtd2FybmluZyB0ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiaW5pdGlhbGx5IG9wZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZm9sZGVyIHRleHQtZGVmYXVsdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wZW5lZFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcIkFub3RoZXIgbm9kZVwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcImN1c3RvbSBpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtd2FybmluZyB0ZXh0LXdhcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiZGlzYWJsZWQgbm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWNoZWNrIHRleHQtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkFuZCB3aG9sZXJvdyBzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZmlsZVwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZmlsZSAgdGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhhbXBsZUNoZWNrYWJsZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RKU1RyZWVDaGVja2FibGUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKU1RyZWVDaGVja2FibGUiLCJleGFtcGxlQ2hlY2thYmxlIiwiJCIsImpzdHJlZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/checkable.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleCheckable();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeCheckable.init();
});

/******/ })()
;
//# sourceMappingURL=checkable.js.map