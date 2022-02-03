/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/general/jkanban/color.js ***!
  \***************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJKanbanDemoColor = function() {
    // Private functions
    var exampleColor = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_color',
            gutter: '0',
            widthBoard: '250px',
            boards: [{
                    'id': '_inprocess',
                    'title': 'In Process',
                    'class': 'primary',
                    'item': [{
                            'title': '<span class="fw-bold">You can drag me too</span>',
                            'class': 'light-primary',
                        },
                        {
                            'title': '<span class="fw-bold">Buy Milk</span>',
                            'class': 'light-primary',
                        }
                    ]
                }, {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'success',
                    'item': [{
                            'title': '<span class="fw-bold">Do Something!</span>',
                            'class': 'light-success',
                        },
                        {
                            'title': '<span class="fw-bold">Run?</span>',
                            'class': 'light-success',
                        }
                    ]
                }, {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'danger',
                    'item': [{
                            'title': '<span class="fw-bold">All right</span>',
                            'class': 'light-danger',
                        },
                        {
                            'title': '<span class="fw-bold">Ok!</span>',
                            'class': 'light-danger',
                        }
                    ]
                }
            ]
        });
    }
=======
eval(" // Class definition\n\nvar KTJKanbanDemoColor = function () {\n  // Private functions\n  var exampleColor = function exampleColor() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_color',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'class': 'primary',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>',\n          'class': 'light-primary'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>',\n          'class': 'light-primary'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'success',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>',\n          'class': 'light-success'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>',\n          'class': 'light-success'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'danger',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>',\n          'class': 'light-danger'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>',\n          'class': 'light-danger'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleColor();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoColor.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9jb2xvci5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFXO0FBQ2hDO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQixRQUFJQyxNQUFNLEdBQUcsSUFBSUMsT0FBSixDQUFZO0FBQ3JCQyxNQUFBQSxPQUFPLEVBQUUsd0JBRFk7QUFFckJDLE1BQUFBLE1BQU0sRUFBRSxHQUZhO0FBR3JCQyxNQUFBQSxVQUFVLEVBQUUsT0FIUztBQUlyQkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDRCxjQUFNLFlBREw7QUFFRCxpQkFBUyxZQUZSO0FBR0QsaUJBQVMsU0FIUjtBQUlELGdCQUFRLENBQUM7QUFDRCxtQkFBUyxrREFEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsdUNBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFKUCxPQUFELEVBYUQ7QUFDQyxjQUFNLFVBRFA7QUFFQyxpQkFBUyxTQUZWO0FBR0MsaUJBQVMsU0FIVjtBQUlDLGdCQUFRLENBQUM7QUFDRCxtQkFBUyw0Q0FEUjtBQUVELG1CQUFTO0FBRlIsU0FBRCxFQUlKO0FBQ0ksbUJBQVMsbUNBRGI7QUFFSSxtQkFBUztBQUZiLFNBSkk7QUFKVCxPQWJDLEVBMEJEO0FBQ0MsY0FBTSxPQURQO0FBRUMsaUJBQVMsTUFGVjtBQUdDLGlCQUFTLFFBSFY7QUFJQyxnQkFBUSxDQUFDO0FBQ0QsbUJBQVMsd0NBRFI7QUFFRCxtQkFBUztBQUZSLFNBQUQsRUFJSjtBQUNJLG1CQUFTLGtDQURiO0FBRUksbUJBQVM7QUFGYixTQUpJO0FBSlQsT0ExQkM7QUFKYSxLQUFaLENBQWI7QUE4Q0gsR0EvQ0Q7O0FBaURBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYlAsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBekR3QixFQUF6QixDLENBMkRBOzs7QUFDQVEsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDVixFQUFBQSxrQkFBa0IsQ0FBQ1EsSUFBbkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2prYW5iYW4vY29sb3IuanM/YjBkNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSkthbmJhbkRlbW9Db2xvciA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVDb2xvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2FuYmFuID0gbmV3IGpLYW5iYW4oe1xuICAgICAgICAgICAgZWxlbWVudDogJyNrdF9kb2NzX2prYW5iYW5fY29sb3InLFxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXG4gICAgICAgICAgICB3aWR0aEJvYXJkOiAnMjUwcHgnLFxuICAgICAgICAgICAgYm9hcmRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2lucHJvY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdJbiBQcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ3ByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPllvdSBjYW4gZHJhZyBtZSB0b288L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtcHJpbWFyeScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5CdXkgTWlsazwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ193b3JraW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+RG8gU29tZXRoaW5nITwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1zdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPlJ1bj88L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2RhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+QWxsIHJpZ2h0PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LWRhbmdlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5PayE8L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVDb2xvcigpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RKS2FuYmFuRGVtb0NvbG9yLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUSkthbmJhbkRlbW9Db2xvciIsImV4YW1wbGVDb2xvciIsImthbmJhbiIsImpLYW5iYW4iLCJlbGVtZW50IiwiZ3V0dGVyIiwid2lkdGhCb2FyZCIsImJvYXJkcyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/color.js\n");
>>>>>>> Stashed changes

    return {
        // Public Functions
        init: function() {
            exampleColor();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJKanbanDemoColor.init();
});

/******/ })()
;
//# sourceMappingURL=color.js.map