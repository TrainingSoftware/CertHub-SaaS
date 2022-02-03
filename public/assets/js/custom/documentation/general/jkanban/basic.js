/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***************************************************************!*\
  !*** ../src/js/custom/documentation/general/jkanban/basic.js ***!
  \***************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTJKanbanDemoBasic = function() {
    // Private functions
    var exampleBasic = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_basic',
            gutter: '0',
            widthBoard: '250px',
            boards: [{
                    'id': '_inprocess',
                    'title': 'In Process',
                    'item': [{
                            'title': '<span class="fw-bold">You can drag me too</span>'
                        },
                        {
                            'title': '<span class="fw-bold">Buy Milk</span>'
                        }
                    ]
                }, {
                    'id': '_working',
                    'title': 'Working',
                    'item': [{
                            'title': '<span class="fw-bold">Do Something!</span>'
                        },
                        {
                            'title': '<span class="fw-bold">Run?</span>'
                        }
                    ]
                }, {
                    'id': '_done',
                    'title': 'Done',
                    'item': [{
                            'title': '<span class="fw-bold">All right</span>'
                        },
                        {
                            'title': '<span class="fw-bold">Ok!</span>'
                        }
                    ]
                }
            ]
        });
    }
=======
eval(" // Class definition\n\nvar KTJKanbanDemoBasic = function () {\n  // Private functions\n  var exampleBasic = function exampleBasic() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_basic',\n      gutter: '0',\n      widthBoard: '250px',\n      boards: [{\n        'id': '_inprocess',\n        'title': 'In Process',\n        'item': [{\n          'title': '<span class=\"fw-bold\">You can drag me too</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Buy Milk</span>'\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'item': [{\n          'title': '<span class=\"fw-bold\">Do Something!</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Run?</span>'\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'item': [{\n          'title': '<span class=\"fw-bold\">All right</span>'\n        }, {\n          'title': '<span class=\"fw-bold\">Ok!</span>'\n        }]\n      }]\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBasic();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoBasic.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9iYXNpYy5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxrQkFBa0IsR0FBRyxZQUFXO0FBQ2hDO0FBQ0EsTUFBSUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBVztBQUMxQixRQUFJQyxNQUFNLEdBQUcsSUFBSUMsT0FBSixDQUFZO0FBQ3JCQyxNQUFBQSxPQUFPLEVBQUUsd0JBRFk7QUFFckJDLE1BQUFBLE1BQU0sRUFBRSxHQUZhO0FBR3JCQyxNQUFBQSxVQUFVLEVBQUUsT0FIUztBQUlyQkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDRCxjQUFNLFlBREw7QUFFRCxpQkFBUyxZQUZSO0FBR0QsZ0JBQVEsQ0FBQztBQUNELG1CQUFTO0FBRFIsU0FBRCxFQUdKO0FBQ0ksbUJBQVM7QUFEYixTQUhJO0FBSFAsT0FBRCxFQVVEO0FBQ0MsY0FBTSxVQURQO0FBRUMsaUJBQVMsU0FGVjtBQUdDLGdCQUFRLENBQUM7QUFDRCxtQkFBUztBQURSLFNBQUQsRUFHSjtBQUNJLG1CQUFTO0FBRGIsU0FISTtBQUhULE9BVkMsRUFvQkQ7QUFDQyxjQUFNLE9BRFA7QUFFQyxpQkFBUyxNQUZWO0FBR0MsZ0JBQVEsQ0FBQztBQUNELG1CQUFTO0FBRFIsU0FBRCxFQUdKO0FBQ0ksbUJBQVM7QUFEYixTQUhJO0FBSFQsT0FwQkM7QUFKYSxLQUFaLENBQWI7QUFxQ0gsR0F0Q0Q7O0FBd0NBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYlAsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBaER3QixFQUF6QixDLENBa0RBOzs7QUFDQVEsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDVixFQUFBQSxrQkFBa0IsQ0FBQ1EsSUFBbkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2prYW5iYW4vYmFzaWMuanM/ZGUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSkthbmJhbkRlbW9CYXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVCYXNpYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIga2FuYmFuID0gbmV3IGpLYW5iYW4oe1xuICAgICAgICAgICAgZWxlbWVudDogJyNrdF9kb2NzX2prYW5iYW5fYmFzaWMnLFxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXG4gICAgICAgICAgICB3aWR0aEJvYXJkOiAnMjUwcHgnLFxuICAgICAgICAgICAgYm9hcmRzOiBbe1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX2lucHJvY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdJbiBQcm9jZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5Zb3UgY2FuIGRyYWcgbWUgdG9vPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkJ1eSBNaWxrPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ193b3JraW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ1dvcmtpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJzxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkRvIFNvbWV0aGluZyE8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+UnVuPzwvc3Bhbj4nXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZG9uZScsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdEb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICc8c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5BbGwgcmlnaHQ8L3NwYW4+J1xuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnPHNwYW4gY2xhc3M9XCJmdy1ib2xkXCI+T2shPC9zcGFuPidcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVCYXNpYygpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24oKSB7XG4gICAgS1RKS2FuYmFuRGVtb0Jhc2ljLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUSkthbmJhbkRlbW9CYXNpYyIsImV4YW1wbGVCYXNpYyIsImthbmJhbiIsImpLYW5iYW4iLCJlbGVtZW50IiwiZ3V0dGVyIiwid2lkdGhCb2FyZCIsImJvYXJkcyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/basic.js\n");
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
    KTJKanbanDemoBasic.init();
});

/******/ })()
;
//# sourceMappingURL=basic.js.map