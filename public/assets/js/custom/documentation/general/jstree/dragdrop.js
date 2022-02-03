/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/dragdrop.js ***!
  \*****************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeDragDrop = function() {
    // Private functions
    var exampleDragDrop = function() {
        $("#kt_docs_jstree_dragdrop").jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                },
                // so that create works
                "check_callback" : true,
                'data': [{
                        "text": "Parent Node",
                        "children": [{
                            "text": "Initially selected",
                            "state": {
                                "selected": true
                            }
                        }, {
                            "text": "Custom Icon",
                            "icon": "flaticon2-warning text-danger"
                        }, {
                            "text": "Initially open",
                            "icon" : "fa fa-folder text-success",
                            "state": {
                                "opened": true
                            },
                            "children": [
                                {"text": "Another node", "icon" : "fa fa-file text-waring"}
                            ]
                        }, {
                            "text": "Another Custom Icon",
                            "icon": "flaticon2-bell-5 text-waring"
                        }, {
                            "text": "Disabled Node",
                            "icon": "fa fa-check text-success",
                            "state": {
                                "disabled": true
                            }
                        }, {
                            "text": "Sub Nodes",
                            "icon": "fa fa-folder text-danger",
                            "children": [
                                {"text": "Item 1", "icon" : "fa fa-file text-waring"},
                                {"text": "Item 2", "icon" : "fa fa-file text-success"},
                                {"text": "Item 3", "icon" : "fa fa-file text-default"},
                                {"text": "Item 4", "icon" : "fa fa-file text-danger"},
                                {"text": "Item 5", "icon" : "fa fa-file text-info"}
                            ]
                        }]
                    },
                    "Another Node"
                ]
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-success"
                },
                "file" : {
                    "icon" : "fa fa-file  text-success"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "dnd", "state", "types" ]
        });
    }
=======
eval(" // Class definition\n\nvar KTJSTreeDragDrop = function () {\n  // Private functions\n  var exampleDragDrop = function exampleDragDrop() {\n    $(\"#kt_docs_jstree_dragdrop\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': [{\n          \"text\": \"Parent Node\",\n          \"children\": [{\n            \"text\": \"Initially selected\",\n            \"state\": {\n              \"selected\": true\n            }\n          }, {\n            \"text\": \"Custom Icon\",\n            \"icon\": \"flaticon2-warning text-danger\"\n          }, {\n            \"text\": \"Initially open\",\n            \"icon\": \"fa fa-folder text-success\",\n            \"state\": {\n              \"opened\": true\n            },\n            \"children\": [{\n              \"text\": \"Another node\",\n              \"icon\": \"fa fa-file text-waring\"\n            }]\n          }, {\n            \"text\": \"Another Custom Icon\",\n            \"icon\": \"flaticon2-bell-5 text-waring\"\n          }, {\n            \"text\": \"Disabled Node\",\n            \"icon\": \"fa fa-check text-success\",\n            \"state\": {\n              \"disabled\": true\n            }\n          }, {\n            \"text\": \"Sub Nodes\",\n            \"icon\": \"fa fa-folder text-danger\",\n            \"children\": [{\n              \"text\": \"Item 1\",\n              \"icon\": \"fa fa-file text-waring\"\n            }, {\n              \"text\": \"Item 2\",\n              \"icon\": \"fa fa-file text-success\"\n            }, {\n              \"text\": \"Item 3\",\n              \"icon\": \"fa fa-file text-default\"\n            }, {\n              \"text\": \"Item 4\",\n              \"icon\": \"fa fa-file text-danger\"\n            }, {\n              \"text\": \"Item 5\",\n              \"icon\": \"fa fa-file text-info\"\n            }]\n          }]\n        }, \"Another Node\"]\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-success\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-success\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo2\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDragDrop();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeDragDrop.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2RyYWdkcm9wLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdCQUFnQixHQUFHLFlBQVc7QUFDOUI7QUFDQSxNQUFJQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVc7QUFDN0JDLElBQUFBLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCQyxNQUE5QixDQUFxQztBQUNqQyxjQUFTO0FBQ0wsa0JBQVc7QUFDUCx3QkFBYztBQURQLFNBRE47QUFJTDtBQUNBLDBCQUFtQixJQUxkO0FBTUwsZ0JBQVEsQ0FBQztBQUNELGtCQUFRLGFBRFA7QUFFRCxzQkFBWSxDQUFDO0FBQ1Qsb0JBQVEsb0JBREM7QUFFVCxxQkFBUztBQUNMLDBCQUFZO0FBRFA7QUFGQSxXQUFELEVBS1Q7QUFDQyxvQkFBUSxhQURUO0FBRUMsb0JBQVE7QUFGVCxXQUxTLEVBUVQ7QUFDQyxvQkFBUSxnQkFEVDtBQUVDLG9CQUFTLDJCQUZWO0FBR0MscUJBQVM7QUFDTCx3QkFBVTtBQURMLGFBSFY7QUFNQyx3QkFBWSxDQUNSO0FBQUMsc0JBQVEsY0FBVDtBQUF5QixzQkFBUztBQUFsQyxhQURRO0FBTmIsV0FSUyxFQWlCVDtBQUNDLG9CQUFRLHFCQURUO0FBRUMsb0JBQVE7QUFGVCxXQWpCUyxFQW9CVDtBQUNDLG9CQUFRLGVBRFQ7QUFFQyxvQkFBUSwwQkFGVDtBQUdDLHFCQUFTO0FBQ0wsMEJBQVk7QUFEUDtBQUhWLFdBcEJTLEVBMEJUO0FBQ0Msb0JBQVEsV0FEVDtBQUVDLG9CQUFRLDBCQUZUO0FBR0Msd0JBQVksQ0FDUjtBQUFDLHNCQUFRLFFBQVQ7QUFBbUIsc0JBQVM7QUFBNUIsYUFEUSxFQUVSO0FBQUMsc0JBQVEsUUFBVDtBQUFtQixzQkFBUztBQUE1QixhQUZRLEVBR1I7QUFBQyxzQkFBUSxRQUFUO0FBQW1CLHNCQUFTO0FBQTVCLGFBSFEsRUFJUjtBQUFDLHNCQUFRLFFBQVQ7QUFBbUIsc0JBQVM7QUFBNUIsYUFKUSxFQUtSO0FBQUMsc0JBQVEsUUFBVDtBQUFtQixzQkFBUztBQUE1QixhQUxRO0FBSGIsV0ExQlM7QUFGWCxTQUFELEVBd0NKLGNBeENJO0FBTkgsT0FEd0I7QUFrRGpDLGVBQVU7QUFDTixtQkFBWTtBQUNSLGtCQUFTO0FBREQsU0FETjtBQUlOLGdCQUFTO0FBQ0wsa0JBQVM7QUFESjtBQUpILE9BbER1QjtBQTBEakMsZUFBVTtBQUFFLGVBQVE7QUFBVixPQTFEdUI7QUEyRGpDLGlCQUFZLENBQUUsS0FBRixFQUFTLE9BQVQsRUFBa0IsT0FBbEI7QUEzRHFCLEtBQXJDO0FBNkRILEdBOUREOztBQWdFQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JILE1BQUFBLGVBQWU7QUFDbEI7QUFKRSxHQUFQO0FBTUgsQ0F4RXNCLEVBQXZCLEMsQ0EwRUE7OztBQUNBSSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNOLEVBQUFBLGdCQUFnQixDQUFDSSxJQUFqQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2RyYWdkcm9wLmpzPzdiMmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEpTVHJlZURyYWdEcm9wID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZURyYWdEcm9wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZG9jc19qc3RyZWVfZHJhZ2Ryb3BcIikuanN0cmVlKHtcbiAgICAgICAgICAgIFwiY29yZVwiIDoge1xuICAgICAgICAgICAgICAgIFwidGhlbWVzXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gc28gdGhhdCBjcmVhdGUgd29ya3NcbiAgICAgICAgICAgICAgICBcImNoZWNrX2NhbGxiYWNrXCIgOiB0cnVlLFxuICAgICAgICAgICAgICAgICdkYXRhJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIlBhcmVudCBOb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiSW5pdGlhbGx5IHNlbGVjdGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJDdXN0b20gSWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZsYXRpY29uMi13YXJuaW5nIHRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbml0aWFsbHkgb3BlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BlbmVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQW5vdGhlciBub2RlXCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtd2FyaW5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkFub3RoZXIgQ3VzdG9tIEljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmbGF0aWNvbjItYmVsbC01IHRleHQtd2FyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJEaXNhYmxlZCBOb2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtY2hlY2sgdGV4dC1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGlzYWJsZWRcIjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJTdWIgTm9kZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS1mb2xkZXIgdGV4dC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gMVwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LXdhcmluZ1wifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gMlwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LXN1Y2Nlc3NcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDNcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC1kZWZhdWx0XCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSXRlbSA0XCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtZGFuZ2VyXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSXRlbSA1XCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtaW5mb1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiQW5vdGhlciBOb2RlXCJcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiIDoge1xuICAgICAgICAgICAgICAgIFwiZGVmYXVsdFwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZm9sZGVyIHRleHQtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZpbGVcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgIHRleHQtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic3RhdGVcIiA6IHsgXCJrZXlcIiA6IFwiZGVtbzJcIiB9LFxuICAgICAgICAgICAgXCJwbHVnaW5zXCIgOiBbIFwiZG5kXCIsIFwic3RhdGVcIiwgXCJ0eXBlc1wiIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVEcmFnRHJvcCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RKU1RyZWVEcmFnRHJvcC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZURyYWdEcm9wIiwiZXhhbXBsZURyYWdEcm9wIiwiJCIsImpzdHJlZSIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/dragdrop.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleDragDrop();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeDragDrop.init();
});

/******/ })()
;
//# sourceMappingURL=dragdrop.js.map