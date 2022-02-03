/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/customicons.js ***!
  \********************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeCustomIcons = function() {
    // Private functions
    var exampleCustomIcons = function() {
        $('#kt_docs_jstree_customicons').jstree({
            "core" : {
                "themes" : {
                    "responsive": false
                }
            },
            "types" : {
                "default" : {
                    "icon" : "fa fa-folder text-warning"
                },
                "file" : {
                    "icon" : "fa fa-file  text-warning"
                }
            },
            "plugins": ["types"]
        });
=======
eval(" // Class definition\n\nvar KTJSTreeCustomIcons = function () {\n  // Private functions\n  var exampleCustomIcons = function exampleCustomIcons() {\n    $('#kt_docs_jstree_customicons').jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-warning\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-warning\"\n        }\n      },\n      \"plugins\": [\"types\"]\n    }); // handle link clicks in tree nodes(support target=\"_blank\" as well)\n\n    $('#kt_docs_jstree_customicons').on('select_node.jstree', function (e, data) {\n      var link = $('#' + data.selected).find('a');\n\n      if (link.attr(\"href\") != \"#\" && link.attr(\"href\") != \"javascript:;\" && link.attr(\"href\") != \"\") {\n        if (link.attr(\"target\") == \"_blank\") {\n          link.attr(\"href\").target = \"_blank\";\n        }\n\n        document.location.href = link.attr(\"href\");\n        return false;\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleCustomIcons();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeCustomIcons.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2N1c3RvbWljb25zLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLG1CQUFtQixHQUFHLFlBQVc7QUFDakM7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVc7QUFDaENDLElBQUFBLENBQUMsQ0FBQyw2QkFBRCxDQUFELENBQWlDQyxNQUFqQyxDQUF3QztBQUNwQyxjQUFTO0FBQ0wsa0JBQVc7QUFDUCx3QkFBYztBQURQO0FBRE4sT0FEMkI7QUFNcEMsZUFBVTtBQUNOLG1CQUFZO0FBQ1Isa0JBQVM7QUFERCxTQUROO0FBSU4sZ0JBQVM7QUFDTCxrQkFBUztBQURKO0FBSkgsT0FOMEI7QUFjcEMsaUJBQVcsQ0FBQyxPQUFEO0FBZHlCLEtBQXhDLEVBRGdDLENBa0JoQzs7QUFDQUQsSUFBQUEsQ0FBQyxDQUFDLDZCQUFELENBQUQsQ0FBaUNFLEVBQWpDLENBQW9DLG9CQUFwQyxFQUEwRCxVQUFTQyxDQUFULEVBQVdDLElBQVgsRUFBaUI7QUFDdkUsVUFBSUMsSUFBSSxHQUFHTCxDQUFDLENBQUMsTUFBTUksSUFBSSxDQUFDRSxRQUFaLENBQUQsQ0FBdUJDLElBQXZCLENBQTRCLEdBQTVCLENBQVg7O0FBQ0EsVUFBSUYsSUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixLQUFxQixHQUFyQixJQUE0QkgsSUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixLQUFxQixjQUFqRCxJQUFtRUgsSUFBSSxDQUFDRyxJQUFMLENBQVUsTUFBVixLQUFxQixFQUE1RixFQUFnRztBQUM1RixZQUFJSCxJQUFJLENBQUNHLElBQUwsQ0FBVSxRQUFWLEtBQXVCLFFBQTNCLEVBQXFDO0FBQ2pDSCxVQUFBQSxJQUFJLENBQUNHLElBQUwsQ0FBVSxNQUFWLEVBQWtCQyxNQUFsQixHQUEyQixRQUEzQjtBQUNIOztBQUNEQyxRQUFBQSxRQUFRLENBQUNDLFFBQVQsQ0FBa0JDLElBQWxCLEdBQXlCUCxJQUFJLENBQUNHLElBQUwsQ0FBVSxNQUFWLENBQXpCO0FBQ0EsZUFBTyxLQUFQO0FBQ0g7QUFDSixLQVREO0FBVUgsR0E3QkQ7O0FBK0JBLFNBQU87QUFDSDtBQUNBSyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYmQsTUFBQUEsa0JBQWtCO0FBQ3JCO0FBSkUsR0FBUDtBQU1ILENBdkN5QixFQUExQixDLENBeUNBOzs7QUFDQWUsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDakIsRUFBQUEsbUJBQW1CLENBQUNlLElBQXBCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvY3VzdG9taWNvbnMuanM/NTJkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSlNUcmVlQ3VzdG9tSWNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQ3VzdG9tSWNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnI2t0X2RvY3NfanN0cmVlX2N1c3RvbWljb25zJykuanN0cmVlKHtcbiAgICAgICAgICAgIFwiY29yZVwiIDoge1xuICAgICAgICAgICAgICAgIFwidGhlbWVzXCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVzcG9uc2l2ZVwiOiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInR5cGVzXCIgOiB7XG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCIgOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiaWNvblwiIDogXCJmYSBmYS1mb2xkZXIgdGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFwiZmlsZVwiIDoge1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIiA6IFwiZmEgZmEtZmlsZSAgdGV4dC13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJwbHVnaW5zXCI6IFtcInR5cGVzXCJdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGhhbmRsZSBsaW5rIGNsaWNrcyBpbiB0cmVlIG5vZGVzKHN1cHBvcnQgdGFyZ2V0PVwiX2JsYW5rXCIgYXMgd2VsbClcbiAgICAgICAgJCgnI2t0X2RvY3NfanN0cmVlX2N1c3RvbWljb25zJykub24oJ3NlbGVjdF9ub2RlLmpzdHJlZScsIGZ1bmN0aW9uKGUsZGF0YSkge1xuICAgICAgICAgICAgdmFyIGxpbmsgPSAkKCcjJyArIGRhdGEuc2VsZWN0ZWQpLmZpbmQoJ2EnKTtcbiAgICAgICAgICAgIGlmIChsaW5rLmF0dHIoXCJocmVmXCIpICE9IFwiI1wiICYmIGxpbmsuYXR0cihcImhyZWZcIikgIT0gXCJqYXZhc2NyaXB0OjtcIiAmJiBsaW5rLmF0dHIoXCJocmVmXCIpICE9IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBpZiAobGluay5hdHRyKFwidGFyZ2V0XCIpID09IFwiX2JsYW5rXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5hdHRyKFwiaHJlZlwiKS50YXJnZXQgPSBcIl9ibGFua1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5ocmVmID0gbGluay5hdHRyKFwiaHJlZlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBleGFtcGxlQ3VzdG9tSWNvbnMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUSlNUcmVlQ3VzdG9tSWNvbnMuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RKU1RyZWVDdXN0b21JY29ucyIsImV4YW1wbGVDdXN0b21JY29ucyIsIiQiLCJqc3RyZWUiLCJvbiIsImUiLCJkYXRhIiwibGluayIsInNlbGVjdGVkIiwiZmluZCIsImF0dHIiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwiaHJlZiIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/customicons.js\n");
>>>>>>> Stashed changes

        // handle link clicks in tree nodes(support target="_blank" as well)
        $('#kt_docs_jstree_customicons').on('select_node.jstree', function(e,data) {
            var link = $('#' + data.selected).find('a');
            if (link.attr("href") != "#" && link.attr("href") != "javascript:;" && link.attr("href") != "") {
                if (link.attr("target") == "_blank") {
                    link.attr("href").target = "_blank";
                }
                document.location.href = link.attr("href");
                return false;
            }
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleCustomIcons();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeCustomIcons.init();
});

/******/ })()
;
//# sourceMappingURL=customicons.js.map