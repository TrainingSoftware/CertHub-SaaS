/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*************************************************************!*\
  !*** ../src/js/custom/documentation/general/jstree/ajax.js ***!
  \*************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJSTreeAjax = function() {
    // Private functions
    var exampleAjax = function() {
        $("#kt_docs_jstree_ajax").jstree({
            "core": {
                "themes": {
                    "responsive": false
                },
                // so that create works
                "check_callback": true,
                'data': {
                    'url': function(node) {
                        return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint
                    },
                    'data': function(node) {
                        return {
                            'parent': node.id
                        };
                    }
                }
            },
            "types": {
                "default": {
                    "icon": "fa fa-folder text-primary"
                },
                "file": {
                    "icon": "fa fa-file  text-primary"
                }
            },
            "state": {
                "key": "demo3"
            },
            "plugins": ["dnd", "state", "types"]
        });
    }
=======
eval(" // Class definition\n\nvar KTJSTreeAjax = function () {\n  // Private functions\n  var exampleAjax = function exampleAjax() {\n    $(\"#kt_docs_jstree_ajax\").jstree({\n      \"core\": {\n        \"themes\": {\n          \"responsive\": false\n        },\n        // so that create works\n        \"check_callback\": true,\n        'data': {\n          'url': function url(node) {\n            return 'https://preview.keenthemes.com/api/jstree/ajax_data.php'; // Demo API endpoint -- Replace this URL with your set endpoint\n          },\n          'data': function data(node) {\n            return {\n              'parent': node.id\n            };\n          }\n        }\n      },\n      \"types\": {\n        \"default\": {\n          \"icon\": \"fa fa-folder text-primary\"\n        },\n        \"file\": {\n          \"icon\": \"fa fa-file  text-primary\"\n        }\n      },\n      \"state\": {\n        \"key\": \"demo3\"\n      },\n      \"plugins\": [\"dnd\", \"state\", \"types\"]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAjax();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJSTreeAjax.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvanN0cmVlL2FqYXguanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsWUFBWSxHQUFHLFlBQVc7QUFDMUI7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFXO0FBQ3pCQyxJQUFBQSxDQUFDLENBQUMsc0JBQUQsQ0FBRCxDQUEwQkMsTUFBMUIsQ0FBaUM7QUFDN0IsY0FBUTtBQUNKLGtCQUFVO0FBQ04sd0JBQWM7QUFEUixTQUROO0FBSUo7QUFDQSwwQkFBa0IsSUFMZDtBQU1KLGdCQUFRO0FBQ0osaUJBQU8sYUFBU0MsSUFBVCxFQUFlO0FBQ2xCLG1CQUFPLHlEQUFQLENBRGtCLENBQ2dEO0FBQ3JFLFdBSEc7QUFJSixrQkFBUSxjQUFTQSxJQUFULEVBQWU7QUFDbkIsbUJBQU87QUFDSCx3QkFBVUEsSUFBSSxDQUFDQztBQURaLGFBQVA7QUFHSDtBQVJHO0FBTkosT0FEcUI7QUFrQjdCLGVBQVM7QUFDTCxtQkFBVztBQUNQLGtCQUFRO0FBREQsU0FETjtBQUlMLGdCQUFRO0FBQ0osa0JBQVE7QUFESjtBQUpILE9BbEJvQjtBQTBCN0IsZUFBUztBQUNMLGVBQU87QUFERixPQTFCb0I7QUE2QjdCLGlCQUFXLENBQUMsS0FBRCxFQUFRLE9BQVIsRUFBaUIsT0FBakI7QUE3QmtCLEtBQWpDO0FBK0JILEdBaENEOztBQWtDQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JMLE1BQUFBLFdBQVc7QUFDZDtBQUpFLEdBQVA7QUFNSCxDQTFDa0IsRUFBbkIsQyxDQTRDQTs7O0FBQ0FNLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ1IsRUFBQUEsWUFBWSxDQUFDTSxJQUFiO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qc3RyZWUvYWpheC5qcz9iODZlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RKU1RyZWVBamF4ID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUFqYXggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgJChcIiNrdF9kb2NzX2pzdHJlZV9hamF4XCIpLmpzdHJlZSh7XG4gICAgICAgICAgICBcImNvcmVcIjoge1xuICAgICAgICAgICAgICAgIFwidGhlbWVzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZXNwb25zaXZlXCI6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IGNyZWF0ZSB3b3Jrc1xuICAgICAgICAgICAgICAgIFwiY2hlY2tfY2FsbGJhY2tcIjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAnZGF0YSc6IHtcbiAgICAgICAgICAgICAgICAgICAgJ3VybCc6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9wcmV2aWV3LmtlZW50aGVtZXMuY29tL2FwaS9qc3RyZWUvYWpheF9kYXRhLnBocCc7IC8vIERlbW8gQVBJIGVuZHBvaW50IC0tIFJlcGxhY2UgdGhpcyBVUkwgd2l0aCB5b3VyIHNldCBlbmRwb2ludFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnZGF0YSc6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BhcmVudCc6IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJ0eXBlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpY29uXCI6IFwiZmEgZmEtZm9sZGVyIHRleHQtcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBcImZpbGVcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIjogXCJmYSBmYS1maWxlICB0ZXh0LXByaW1hcnlcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInN0YXRlXCI6IHtcbiAgICAgICAgICAgICAgICBcImtleVwiOiBcImRlbW8zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInBsdWdpbnNcIjogW1wiZG5kXCIsIFwic3RhdGVcIiwgXCJ0eXBlc1wiXVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZXhhbXBsZUFqYXgoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUSlNUcmVlQWpheC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEpTVHJlZUFqYXgiLCJleGFtcGxlQWpheCIsIiQiLCJqc3RyZWUiLCJub2RlIiwiaWQiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jstree/ajax.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleAjax();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJSTreeAjax.init();
});

/******/ })()
;
//# sourceMappingURL=ajax.js.map