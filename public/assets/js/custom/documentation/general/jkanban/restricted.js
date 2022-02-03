/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/general/jkanban/restricted.js ***!
  \********************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJKanbanDemoRestricted = function() {
    // Private functions
    var exampleRestricted = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_restricted',
            gutter: '0',
            widthBoard: '250px',
            click: function(el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-primary',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'My Task Test',
                            'class': 'primary'
                        },
                        {
                            'title': 'Buy Milk',
                            'class': 'primary'
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-warning',
                    'item': [{
                            'title': 'Do Something!',
                            'class': 'warning'
                        },
                        {
                            'title': 'Run?',
                            'class': 'warning'
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'dragTo': ['_working'],
                    'item': [{
                            'title': 'All right',
                            'class': 'success'
                        },
                        {
                            'title': 'Ok!',
                            'class': 'success'
                        }
                    ]
                },
                {
                    'id': '_notes',
                    'title': 'Notes',
                    'class': 'light-danger',
                    'item': [{
                            'title': 'Warning Task',
                            'class': 'danger'
                        },
                        {
                            'title': 'Do not enter',
                            'class': 'danger'
                        }
                    ]
                }
            ]
        });
    }
=======
eval(" // Class definition\n\nvar KTJKanbanDemoRestricted = function () {\n  // Private functions\n  var exampleRestricted = function exampleRestricted() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_restricted',\n      gutter: '0',\n      widthBoard: '250px',\n      click: function click(el) {\n        alert(el.innerHTML);\n      },\n      boards: [{\n        'id': '_todo',\n        'title': 'To Do',\n        'class': 'light-primary',\n        'dragTo': ['_working'],\n        'item': [{\n          'title': 'My Task Test',\n          'class': 'primary'\n        }, {\n          'title': 'Buy Milk',\n          'class': 'primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'light-warning',\n        'item': [{\n          'title': 'Do Something!',\n          'class': 'warning'\n        }, {\n          'title': 'Run?',\n          'class': 'warning'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'light-success',\n        'dragTo': ['_working'],\n        'item': [{\n          'title': 'All right',\n          'class': 'success'\n        }, {\n          'title': 'Ok!',\n          'class': 'success'\n        }]\n      }, {\n        'id': '_notes',\n        'title': 'Notes',\n        'class': 'light-danger',\n        'item': [{\n          'title': 'Warning Task',\n          'class': 'danger'\n        }, {\n          'title': 'Do not enter',\n          'class': 'danger'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRestricted();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoRestricted.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9yZXN0cmljdGVkLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHVCQUF1QixHQUFHLFlBQVc7QUFDckM7QUFDQSxNQUFJQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQVc7QUFDL0IsUUFBSUMsTUFBTSxHQUFHLElBQUlDLE9BQUosQ0FBWTtBQUNyQkMsTUFBQUEsT0FBTyxFQUFFLDZCQURZO0FBRXJCQyxNQUFBQSxNQUFNLEVBQUUsR0FGYTtBQUdyQkMsTUFBQUEsVUFBVSxFQUFFLE9BSFM7QUFJckJDLE1BQUFBLEtBQUssRUFBRSxlQUFTQyxFQUFULEVBQWE7QUFDaEJDLFFBQUFBLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRSxTQUFKLENBQUw7QUFDSCxPQU5vQjtBQU9yQkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDRCxjQUFNLE9BREw7QUFFRCxpQkFBUyxPQUZSO0FBR0QsaUJBQVMsZUFIUjtBQUlELGtCQUFVLENBQUMsVUFBRCxDQUpUO0FBS0QsZ0JBQVEsQ0FBQztBQUNELG1CQUFTLGNBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLFVBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFMUCxPQUFELEVBZUo7QUFDSSxjQUFNLFVBRFY7QUFFSSxpQkFBUyxTQUZiO0FBR0ksaUJBQVMsZUFIYjtBQUlJLGdCQUFRLENBQUM7QUFDRCxtQkFBUyxlQURSO0FBRUQsbUJBQVM7QUFGUixTQUFELEVBSUo7QUFDSSxtQkFBUyxNQURiO0FBRUksbUJBQVM7QUFGYixTQUpJO0FBSlosT0FmSSxFQTZCSjtBQUNJLGNBQU0sT0FEVjtBQUVJLGlCQUFTLE1BRmI7QUFHSSxpQkFBUyxlQUhiO0FBSUksa0JBQVUsQ0FBQyxVQUFELENBSmQ7QUFLSSxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsV0FEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsS0FEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUxaLE9BN0JJLEVBNENKO0FBQ0ksY0FBTSxRQURWO0FBRUksaUJBQVMsT0FGYjtBQUdJLGlCQUFTLGNBSGI7QUFJSSxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsY0FEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsY0FEYjtBQUVJLG1CQUFTO0FBRmIsU0FKSTtBQUpaLE9BNUNJO0FBUGEsS0FBWixDQUFiO0FBbUVILEdBcEVEOztBQXNFQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JYLE1BQUFBLGlCQUFpQjtBQUNwQjtBQUpFLEdBQVA7QUFNSCxDQTlFNkIsRUFBOUIsQyxDQWdGQTs7O0FBQ0FZLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBVztBQUNqQ2QsRUFBQUEsdUJBQXVCLENBQUNZLElBQXhCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL3Jlc3RyaWN0ZWQuanM/NWFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSkthbmJhbkRlbW9SZXN0cmljdGVkID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVJlc3RyaWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBqS2FuYmFuKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX3Jlc3RyaWN0ZWQnLFxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXG4gICAgICAgICAgICB3aWR0aEJvYXJkOiAnMjUwcHgnLFxuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoZWwuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBib2FyZHM6IFt7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfdG9kbycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdUbyBEbycsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2RyYWdUbyc6IFsnX3dvcmtpbmcnXSxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdNeSBUYXNrIFRlc3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQnV5IE1pbGsnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdwcmltYXJ5J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdXb3JraW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXdhcm5pbmcnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvIFNvbWV0aGluZyEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICd3YXJuaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnUnVuPycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3dhcm5pbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICdkcmFnVG8nOiBbJ193b3JraW5nJ10sXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnQWxsIHJpZ2h0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VjY2VzcydcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ09rIScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3N1Y2Nlc3MnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19ub3RlcycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdOb3RlcycsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1kYW5nZXInLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dhcm5pbmcgVGFzaycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvIG5vdCBlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RhbmdlcidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVSZXN0cmljdGVkKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpLYW5iYW5EZW1vUmVzdHJpY3RlZC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vUmVzdHJpY3RlZCIsImV4YW1wbGVSZXN0cmljdGVkIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJ3aWR0aEJvYXJkIiwiY2xpY2siLCJlbCIsImFsZXJ0IiwiaW5uZXJIVE1MIiwiYm9hcmRzIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/restricted.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleRestricted();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJKanbanDemoRestricted.init();
});

/******/ })()
;
//# sourceMappingURL=restricted.js.map