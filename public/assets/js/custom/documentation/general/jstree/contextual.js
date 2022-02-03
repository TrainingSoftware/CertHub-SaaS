/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*******************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/contextual.js ***!
  \*******************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeContextual = function() {
    // Private functions
    var exampleContextual = function() {
        $("#kt_docs_jstree_contextual").jstree({
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
                            "icon": "flaticon2-hourglass-1 text-danger"
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
                            "icon": "flaticon2-drop text-waring"
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
                    "icon" : "fa fa-folder text-primary"
                },
                "file" : {
                    "icon" : "fa fa-file  text-primary"
                }
            },
            "state" : { "key" : "demo2" },
            "plugins" : [ "contextmenu", "state", "types" ]
        });
    }
=======
eval(" // Class definition\n\nvar KTJSTreeContextual = function () {\n  // Private functions\n  var exampleContextual = function exampleContextual() {\n    $(\"#kt_docs_jstree_contextual\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': [{\n          \"text\": \"Parent Node\",\n          \"children\": [{\n            \"text\": \"Initially selected\",\n            \"state\": {\n              \"selected\": true\n            }\n          }, {\n            \"text\": \"Custom Icon\",\n            \"icon\": \"flaticon2-hourglass-1 text-danger\"\n          }, {\n            \"text\": \"Initially open\",\n            \"icon\": \"fa fa-folder text-success\",\n            \"state\": {\n              \"opened\": true\n            },\n            \"children\": [{\n              \"text\": \"Another node\",\n              \"icon\": \"fa fa-file text-waring\"\n            }]\n          }, {\n            \"text\": \"Another Custom Icon\",\n            \"icon\": \"flaticon2-drop text-waring\"\n          }, {\n            \"text\": \"Disabled Node\",\n            \"icon\": \"fa fa-check text-success\",\n            \"state\": {\n              \"disabled\": true\n            }\n          }, {\n            \"text\": \"Sub Nodes\",\n            \"icon\": \"fa fa-folder text-danger\",\n            \"children\": [{\n              \"text\": \"Item 1\",\n              \"icon\": \"fa fa-file text-waring\"\n            }, {\n              \"text\": \"Item 2\",\n              \"icon\": \"fa fa-file text-success\"\n            }, {\n              \"text\": \"Item 3\",\n              \"icon\": \"fa fa-file text-default\"\n            }, {\n              \"text\": \"Item 4\",\n              \"icon\": \"fa fa-file text-danger\"\n            }, {\n              \"text\": \"Item 5\",\n              \"icon\": \"fa fa-file text-info\"\n            }]\n          }]\n        }, \"Another Node\"]\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo2\"\n      },\n      \"plugins\": [\"contextmenu\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleContextual();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeContextual.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NvbnRleHR1YWwuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsa0JBQWtCLEdBQUcsWUFBVztBQUNoQztBQUNBLE1BQUlDLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBVztBQUMvQkMsSUFBQUEsQ0FBQyxDQUFDLDRCQUFELENBQUQsQ0FBZ0NDLE1BQWhDLENBQXVDO0FBQ25DLGNBQVM7QUFDTCxrQkFBVztBQUNQLHdCQUFjO0FBRFAsU0FETjtBQUlMO0FBQ0EsMEJBQW1CLElBTGQ7QUFNTCxnQkFBUSxDQUFDO0FBQ0Qsa0JBQVEsYUFEUDtBQUVELHNCQUFZLENBQUM7QUFDVCxvQkFBUSxvQkFEQztBQUVULHFCQUFTO0FBQ0wsMEJBQVk7QUFEUDtBQUZBLFdBQUQsRUFLVDtBQUNDLG9CQUFRLGFBRFQ7QUFFQyxvQkFBUTtBQUZULFdBTFMsRUFRVDtBQUNDLG9CQUFRLGdCQURUO0FBRUMsb0JBQVMsMkJBRlY7QUFHQyxxQkFBUztBQUNMLHdCQUFVO0FBREwsYUFIVjtBQU1DLHdCQUFZLENBQ1I7QUFBQyxzQkFBUSxjQUFUO0FBQXlCLHNCQUFTO0FBQWxDLGFBRFE7QUFOYixXQVJTLEVBaUJUO0FBQ0Msb0JBQVEscUJBRFQ7QUFFQyxvQkFBUTtBQUZULFdBakJTLEVBb0JUO0FBQ0Msb0JBQVEsZUFEVDtBQUVDLG9CQUFRLDBCQUZUO0FBR0MscUJBQVM7QUFDTCwwQkFBWTtBQURQO0FBSFYsV0FwQlMsRUEwQlQ7QUFDQyxvQkFBUSxXQURUO0FBRUMsb0JBQVEsMEJBRlQ7QUFHQyx3QkFBWSxDQUNSO0FBQUMsc0JBQVEsUUFBVDtBQUFtQixzQkFBUztBQUE1QixhQURRLEVBRVI7QUFBQyxzQkFBUSxRQUFUO0FBQW1CLHNCQUFTO0FBQTVCLGFBRlEsRUFHUjtBQUFDLHNCQUFRLFFBQVQ7QUFBbUIsc0JBQVM7QUFBNUIsYUFIUSxFQUlSO0FBQUMsc0JBQVEsUUFBVDtBQUFtQixzQkFBUztBQUE1QixhQUpRLEVBS1I7QUFBQyxzQkFBUSxRQUFUO0FBQW1CLHNCQUFTO0FBQTVCLGFBTFE7QUFIYixXQTFCUztBQUZYLFNBQUQsRUF3Q0osY0F4Q0k7QUFOSCxPQUQwQjtBQWtEbkMsZUFBVTtBQUNOLG1CQUFZO0FBQ1Isa0JBQVM7QUFERCxTQUROO0FBSU4sZ0JBQVM7QUFDTCxrQkFBUztBQURKO0FBSkgsT0FsRHlCO0FBMERuQyxlQUFVO0FBQUUsZUFBUTtBQUFWLE9BMUR5QjtBQTJEbkMsaUJBQVksQ0FBRSxhQUFGLEVBQWlCLE9BQWpCLEVBQTBCLE9BQTFCO0FBM0R1QixLQUF2QztBQTZESCxHQTlERDs7QUFnRUEsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiSCxNQUFBQSxpQkFBaUI7QUFDcEI7QUFKRSxHQUFQO0FBTUgsQ0F4RXdCLEVBQXpCLEMsQ0EwRUE7OztBQUNBSSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNOLEVBQUFBLGtCQUFrQixDQUFDSSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2NvbnRleHR1YWwuanM/NTQ1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSlNUcmVlQ29udGV4dHVhbCA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVDb250ZXh0dWFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIja3RfZG9jc19qc3RyZWVfY29udGV4dHVhbFwiKS5qc3RyZWUoe1xuICAgICAgICAgICAgXCJjb3JlXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJ0aGVtZXNcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IGNyZWF0ZSB3b3Jrc1xuICAgICAgICAgICAgICAgIFwiY2hlY2tfY2FsbGJhY2tcIiA6IHRydWUsXG4gICAgICAgICAgICAgICAgJ2RhdGEnOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiUGFyZW50IE5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbml0aWFsbHkgc2VsZWN0ZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkN1c3RvbSBJY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmxhdGljb24yLWhvdXJnbGFzcy0xIHRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHRcIjogXCJJbml0aWFsbHkgb3BlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGF0ZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwib3BlbmVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiQW5vdGhlciBub2RlXCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtd2FyaW5nXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dFwiOiBcIkFub3RoZXIgQ3VzdG9tIEljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmbGF0aWNvbjItZHJvcCB0ZXh0LXdhcmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiRGlzYWJsZWQgTm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaWNvblwiOiBcImZhIGZhLWNoZWNrIHRleHQtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhdGVcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpc2FibGVkXCI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0XCI6IFwiU3ViIE5vZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZm9sZGVyIHRleHQtZGFuZ2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDFcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC13YXJpbmdcIn0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcInRleHRcIjogXCJJdGVtIDJcIiwgXCJpY29uXCIgOiBcImZhIGZhLWZpbGUgdGV4dC1zdWNjZXNzXCJ9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCJ0ZXh0XCI6IFwiSXRlbSAzXCIsIFwiaWNvblwiIDogXCJmYSBmYS1maWxlIHRleHQtZGVmYXVsdFwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gNFwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LWRhbmdlclwifSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1widGV4dFwiOiBcIkl0ZW0gNVwiLCBcImljb25cIiA6IFwiZmEgZmEtZmlsZSB0ZXh0LWluZm9cIn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBcIkFub3RoZXIgTm9kZVwiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidHlwZXNcIiA6IHtcbiAgICAgICAgICAgICAgICBcImRlZmF1bHRcIiA6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCIgOiBcImZhIGZhLWZvbGRlciB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJmaWxlXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1maWxlICB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCIgOiB7IFwia2V5XCIgOiBcImRlbW8yXCIgfSxcbiAgICAgICAgICAgIFwicGx1Z2luc1wiIDogWyBcImNvbnRleHRtZW51XCIsIFwic3RhdGVcIiwgXCJ0eXBlc1wiIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVDb250ZXh0dWFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpTVHJlZUNvbnRleHR1YWwuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKU1RyZWVDb250ZXh0dWFsIiwiZXhhbXBsZUNvbnRleHR1YWwiLCIkIiwianN0cmVlIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/contextual.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleContextual();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeContextual.init();
});

/******/ })()
;
//# sourceMappingURL=contextual.js.map