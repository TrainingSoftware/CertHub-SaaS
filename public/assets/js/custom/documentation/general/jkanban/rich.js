/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************!*\
  !*** ../src/js/custom/documentation/general/jkanban/rich.js ***!
  \**************************************************************/


// Class definition
var KTJKanbanDemoRich = function() {
    // Private functions
    var exampleRich = function() {
        var kanban = new jKanban({
            element: '#kt_docs_jkanban_rich',
            gutter: '0',
            click: function(el) {
                alert(el.innerHTML);
            },
            boards: [{
                    'id': '_backlog',
                    'title': 'Backlog',
                    'class': 'light-dark',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-1.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <span class="symbol-label fs-4">A.D</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Finance</span>
                        	            <span class="badge badge-light-danger">Pending</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_todo',
                    'title': 'To Do',
                    'class': 'light-danger',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-2.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Server Setup</span>
                        	            <span class="badge badge-light-info">Completed</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-3.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Report Generation</span>
                        	            <span class="badge badge-light-warning">Due</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_working',
                    'title': 'Working',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                            	         <img alt="Pic" src="${hostUrl}media/avatars/150-1.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Marketing</span>
                        	            <span class="badge badge-light-danger">Planning</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-info me-3">
                        	            <span class="symbol-label fs-4">A.P</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Finance</span>
                        	            <span class="badge badge-light-primary">Done</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_done',
                    'title': 'Done',
                    'class': 'light-success',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-4.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-success me-3">
                        	            <img alt="Pic" src="${hostUrl}media/avatars/150-5.jpg" />
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Product Team</span>
                        	            <span class="badge badge-light-danger">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                },
                {
                    'id': '_deploy',
                    'title': 'Deploy',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-warning me-3">
                        	            <span class="symbol-label fs-4">D.L</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">SEO Optimization</span>
                        	            <span class="badge badge-light-success">In progress</span>
                        	        </div>
                        	    </div>
                            `,
                        },
                        {
                            'title': `
                                <div class="d-flex align-items-center">
                        	        <div class="symbol symbol-light-danger me-3">
                        	            <span class="symbol-label fs-4">E.K</span>
                        	        </div>
                        	        <div class="d-flex flex-column align-items-start">
                        	            <span class="text-dark-50 fw-bold mb-1">Requirement Study</span>
                        	            <span class="badge badge-light-warning">Scheduled</span>
                        	        </div>
                        	    </div>
                            `,
                        }
                    ]
                }
            ]
        });

        var toDoButton = document.getElementById('addToDo');
        toDoButton.addEventListener('click', function() {
            kanban.addElement(
                '_todo', {
                    'title': `
                        <div class="d-flex align-items-center">
                            <div class="symbol symbol-light-primary me-3">
                                <img alt="Pic" src="${hostUrl}media/avatars/150-6.jpg" />
                            </div>
                            <div class="d-flex flex-column align-items-start">
                                <span class="text-dark-50 fw-bold mb-1">Requirement Study</span>
                                <span class="badge badge-light-success">Scheduled</span>
                            </div>
                        </div>
                    `
                }
            );
        });

        var addBoardDefault = document.getElementById('addDefault');
        addBoardDefault.addEventListener('click', function() {
            kanban.addBoards(
                [{
                    'id': '_default',
                    'title': 'New Board',
                    'class': 'light-primary',
                    'item': [{
                            'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success me-3">
                                        <img alt="Pic" src="${hostUrl}media/avatars/150-7.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                        <span class="text-dark-50 fw-bold mb-1">Payment Modules</span>
                                        <span class="badge badge-light-primary">In development</span>
                                    </div>
                                </div>
                        `},{
                            'title': `
                                <div class="d-flex align-items-center">
                                    <div class="symbol symbol-success me-3">
                                        <img alt="Pic" src="${hostUrl}media/avatars/150-8.jpg" />
                                    </div>
                                    <div class="d-flex flex-column align-items-start">
                                    <span class="text-dark-50 fw-bold mb-1">New Project</span>
                                    <span class="badge badge-light-danger">Pending</span>
                                </div>
                            </div>
                        `}
                    ]
                }]
            )
        });

        var removeBoard = document.getElementById('removeBoard');
        removeBoard.addEventListener('click', function() {
            kanban.removeBoard('_done');
        });
    }

    return {
        // Public Functions
        init: function() {
            exampleRich();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTJKanbanDemoRich.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/jkanban/rich.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/jkanban/rich.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTJKanbanDemoRich = function () {\n  // Private functions\n  var exampleRich = function exampleRich() {\n    var kanban = new jKanban({\n      element: '#kt_docs_jkanban_rich',\n      gutter: '0',\n      click: function click(el) {\n        alert(el.innerHTML);\n      },\n      boards: [{\n        'id': '_backlog',\n        'title': 'Backlog',\n        'class': 'light-dark',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-1.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">A.D</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Finance</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">Pending</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }, {\n        'id': '_todo',\n        'title': 'To Do',\n        'class': 'light-danger',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-2.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Server Setup</span>\\n                        \\t            <span class=\\\"badge badge-light-info\\\">Completed</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-3.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Report Generation</span>\\n                        \\t            <span class=\\\"badge badge-light-warning\\\">Due</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }]\n      }, {\n        'id': '_working',\n        'title': 'Working',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                            \\t         <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-1.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Marketing</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">Planning</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-info me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">A.P</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Finance</span>\\n                        \\t            <span class=\\\"badge badge-light-primary\\\">Done</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }, {\n        'id': '_done',\n        'title': 'Done',\n        'class': 'light-success',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-4.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-success me-3\\\">\\n                        \\t            <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-5.jpg\\\" />\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Product Team</span>\\n                        \\t            <span class=\\\"badge badge-light-danger\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \")\n        }]\n      }, {\n        'id': '_deploy',\n        'title': 'Deploy',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-warning me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">D.L</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">SEO Optimization</span>\\n                        \\t            <span class=\\\"badge badge-light-success\\\">In progress</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                        \\t        <div class=\\\"symbol symbol-light-danger me-3\\\">\\n                        \\t            <span class=\\\"symbol-label fs-4\\\">E.K</span>\\n                        \\t        </div>\\n                        \\t        <div class=\\\"d-flex flex-column align-items-start\\\">\\n                        \\t            <span class=\\\"text-dark-50 fw-bold mb-1\\\">Requirement Study</span>\\n                        \\t            <span class=\\\"badge badge-light-warning\\\">Scheduled</span>\\n                        \\t        </div>\\n                        \\t    </div>\\n                            \"\n        }]\n      }]\n    });\n    var toDoButton = document.getElementById('addToDo');\n    toDoButton.addEventListener('click', function () {\n      kanban.addElement('_todo', {\n        'title': \"\\n                        <div class=\\\"d-flex align-items-center\\\">\\n                            <div class=\\\"symbol symbol-light-primary me-3\\\">\\n                                <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-6.jpg\\\" />\\n                            </div>\\n                            <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                <span class=\\\"text-dark-50 fw-bold mb-1\\\">Requirement Study</span>\\n                                <span class=\\\"badge badge-light-success\\\">Scheduled</span>\\n                            </div>\\n                        </div>\\n                    \")\n      });\n    });\n    var addBoardDefault = document.getElementById('addDefault');\n    addBoardDefault.addEventListener('click', function () {\n      kanban.addBoards([{\n        'id': '_default',\n        'title': 'New Board',\n        'class': 'light-primary',\n        'item': [{\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                                    <div class=\\\"symbol symbol-success me-3\\\">\\n                                        <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-7.jpg\\\" />\\n                                    </div>\\n                                    <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                        <span class=\\\"text-dark-50 fw-bold mb-1\\\">Payment Modules</span>\\n                                        <span class=\\\"badge badge-light-primary\\\">In development</span>\\n                                    </div>\\n                                </div>\\n                        \")\n        }, {\n          'title': \"\\n                                <div class=\\\"d-flex align-items-center\\\">\\n                                    <div class=\\\"symbol symbol-success me-3\\\">\\n                                        <img alt=\\\"Pic\\\" src=\\\"\".concat(hostUrl, \"media/avatars/150-8.jpg\\\" />\\n                                    </div>\\n                                    <div class=\\\"d-flex flex-column align-items-start\\\">\\n                                    <span class=\\\"text-dark-50 fw-bold mb-1\\\">New Project</span>\\n                                    <span class=\\\"badge badge-light-danger\\\">Pending</span>\\n                                </div>\\n                            </div>\\n                        \")\n        }]\n      }]);\n    });\n    var removeBoard = document.getElementById('removeBoard');\n    removeBoard.addEventListener('click', function () {\n      kanban.removeBoard('_done');\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleRich();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTJKanbanDemoRich.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvamthbmJhbi9yaWNoLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGlCQUFpQixHQUFHLFlBQVc7QUFDL0I7QUFDQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFXO0FBQ3pCLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxPQUFKLENBQVk7QUFDckJDLE1BQUFBLE9BQU8sRUFBRSx1QkFEWTtBQUVyQkMsTUFBQUEsTUFBTSxFQUFFLEdBRmE7QUFHckJDLE1BQUFBLEtBQUssRUFBRSxlQUFTQyxFQUFULEVBQWE7QUFDaEJDLFFBQUFBLEtBQUssQ0FBQ0QsRUFBRSxDQUFDRSxTQUFKLENBQUw7QUFDSCxPQUxvQjtBQU1yQkMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDRCxjQUFNLFVBREw7QUFFRCxpQkFBUyxTQUZSO0FBR0QsaUJBQVMsWUFIUjtBQUlELGdCQUFRLENBQUM7QUFDRCxxUEFHK0JDLE9BSC9CO0FBREMsU0FBRCxFQWFKO0FBQ0k7QUFESixTQWJJO0FBSlAsT0FBRCxFQWdDSjtBQUNJLGNBQU0sT0FEVjtBQUVJLGlCQUFTLE9BRmI7QUFHSSxpQkFBUyxjQUhiO0FBSUksZ0JBQVEsQ0FBQztBQUNELHFQQUcrQkEsT0FIL0I7QUFEQyxTQUFELEVBYUo7QUFDSSxxUEFHK0JBLE9BSC9CO0FBREosU0FiSTtBQUpaLE9BaENJLEVBZ0VKO0FBQ0ksY0FBTSxVQURWO0FBRUksaUJBQVMsU0FGYjtBQUdJLGlCQUFTLGVBSGI7QUFJSSxnQkFBUSxDQUFDO0FBQ0Qsc1BBR2dDQSxPQUhoQztBQURDLFNBQUQsRUFhSjtBQUNJO0FBREosU0FiSTtBQUpaLE9BaEVJLEVBZ0dKO0FBQ0ksY0FBTSxPQURWO0FBRUksaUJBQVMsTUFGYjtBQUdJLGlCQUFTLGVBSGI7QUFJSSxnQkFBUSxDQUFDO0FBQ0QscVBBRytCQSxPQUgvQjtBQURDLFNBQUQsRUFhSjtBQUNJLHFQQUcrQkEsT0FIL0I7QUFESixTQWJJO0FBSlosT0FoR0ksRUFnSUo7QUFDSSxjQUFNLFNBRFY7QUFFSSxpQkFBUyxRQUZiO0FBR0ksaUJBQVMsZUFIYjtBQUlJLGdCQUFRLENBQUM7QUFDRDtBQURDLFNBQUQsRUFhSjtBQUNJO0FBREosU0FiSTtBQUpaLE9BaElJO0FBTmEsS0FBWixDQUFiO0FBeUtBLFFBQUlDLFVBQVUsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBQWpCO0FBQ0FGLElBQUFBLFVBQVUsQ0FBQ0csZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBVztBQUM1Q2IsTUFBQUEsTUFBTSxDQUFDYyxVQUFQLENBQ0ksT0FESixFQUNhO0FBQ0wscU9BR2tDTCxPQUhsQztBQURLLE9BRGI7QUFlSCxLQWhCRDtBQWtCQSxRQUFJTSxlQUFlLEdBQUdKLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUF0QjtBQUNBRyxJQUFBQSxlQUFlLENBQUNGLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFXO0FBQ2pEYixNQUFBQSxNQUFNLENBQUNnQixTQUFQLENBQ0ksQ0FBQztBQUNHLGNBQU0sVUFEVDtBQUVHLGlCQUFTLFdBRlo7QUFHRyxpQkFBUyxlQUhaO0FBSUcsZ0JBQVEsQ0FBQztBQUNELHlQQUdrQ1AsT0FIbEM7QUFEQyxTQUFELEVBV0Q7QUFDQyx5UEFHa0NBLE9BSGxDO0FBREQsU0FYQztBQUpYLE9BQUQsQ0FESjtBQStCSCxLQWhDRDtBQWtDQSxRQUFJUSxXQUFXLEdBQUdOLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFsQjtBQUNBSyxJQUFBQSxXQUFXLENBQUNKLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQVc7QUFDN0NiLE1BQUFBLE1BQU0sQ0FBQ2lCLFdBQVAsQ0FBbUIsT0FBbkI7QUFDSCxLQUZEO0FBR0gsR0FwT0Q7O0FBc09BLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDYm5CLE1BQUFBLFdBQVc7QUFDZDtBQUpFLEdBQVA7QUFNSCxDQTlPdUIsRUFBeEIsQyxDQWdQQTs7O0FBQ0FvQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakN0QixFQUFBQSxpQkFBaUIsQ0FBQ29CLElBQWxCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC9qa2FuYmFuL3JpY2guanM/NDI1NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUSkthbmJhbkRlbW9SaWNoID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVJpY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGthbmJhbiA9IG5ldyBqS2FuYmFuKHtcbiAgICAgICAgICAgIGVsZW1lbnQ6ICcja3RfZG9jc19qa2FuYmFuX3JpY2gnLFxuICAgICAgICAgICAgZ3V0dGVyOiAnMCcsXG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oZWwpIHtcbiAgICAgICAgICAgICAgICBhbGVydChlbC5pbm5lckhUTUwpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvYXJkczogW3tcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19iYWNrbG9nJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0JhY2tsb2cnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFyaycsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTEuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlNFTyBPcHRpbWl6YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtc3VjY2Vzc1wiPkluIHByb2dyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLXN1Y2Nlc3MgbWUtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN5bWJvbC1sYWJlbCBmcy00XCI+QS5EPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+RmluYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1kYW5nZXJcIj5QZW5kaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAnaWQnOiAnX3RvZG8nLFxuICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiAnVG8gRG8nLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtZGFuZ2VyJyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC1zdWNjZXNzIG1lLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtMi5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+U2VydmVyIFNldHVwPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LWluZm9cIj5Db21wbGV0ZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTMuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlJlcG9ydCBHZW5lcmF0aW9uPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXdhcm5pbmdcIj5EdWU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfd29ya2luZycsXG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6ICdXb3JraW5nJyxcbiAgICAgICAgICAgICAgICAgICAgJ2NsYXNzJzogJ2xpZ2h0LXByaW1hcnknLFxuICAgICAgICAgICAgICAgICAgICAnaXRlbSc6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLXN1Y2Nlc3MgbWUtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgPGltZyBhbHQ9XCJQaWNcIiBzcmM9XCIke2hvc3RVcmx9bWVkaWEvYXZhdGFycy8xNTAtMS5qcGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+TWFya2V0aW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LWRhbmdlclwiPlBsYW5uaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLWxpZ2h0LWluZm8gbWUtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN5bWJvbC1sYWJlbCBmcy00XCI+QS5QPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWRhcmstNTAgZnctYm9sZCBtYi0xXCI+RmluYW5jZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1wcmltYXJ5XCI+RG9uZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGAsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kb25lJyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RvbmUnLFxuICAgICAgICAgICAgICAgICAgICAnY2xhc3MnOiAnbGlnaHQtc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICdpdGVtJzogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtc3VjY2VzcyBtZS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTQuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlNFTyBPcHRpbWl6YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtc3VjY2Vzc1wiPkluIHByb2dyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLXN1Y2Nlc3MgbWUtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8aW1nIGFsdD1cIlBpY1wiIHNyYz1cIiR7aG9zdFVybH1tZWRpYS9hdmF0YXJzLzE1MC01LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFyay01MCBmdy1ib2xkIG1iLTFcIj5Qcm9kdWN0IFRlYW08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtZGFuZ2VyXCI+SW4gcHJvZ3Jlc3M8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICdpZCc6ICdfZGVwbG95JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ0RlcGxveScsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC1saWdodC13YXJuaW5nIG1lLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzeW1ib2wtbGFiZWwgZnMtNFwiPkQuTDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlNFTyBPcHRpbWl6YXRpb248L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtbGlnaHQtc3VjY2Vzc1wiPkluIHByb2dyZXNzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLWxpZ2h0LWRhbmdlciBtZS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3ltYm9sLWxhYmVsIGZzLTRcIj5FLks8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICBcdCAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtZGFyay01MCBmdy1ib2xkIG1iLTFcIj5SZXF1aXJlbWVudCBTdHVkeTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC13YXJuaW5nXCI+U2NoZWR1bGVkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgXHQgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHRvRG9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkVG9EbycpO1xuICAgICAgICB0b0RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBrYW5iYW4uYWRkRWxlbWVudChcbiAgICAgICAgICAgICAgICAnX3RvZG8nLCB7XG4gICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN5bWJvbCBzeW1ib2wtbGlnaHQtcHJpbWFyeSBtZS0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTYuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlJlcXVpcmVtZW50IFN0dWR5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXN1Y2Nlc3NcIj5TY2hlZHVsZWQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBhZGRCb2FyZERlZmF1bHQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkRGVmYXVsdCcpO1xuICAgICAgICBhZGRCb2FyZERlZmF1bHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGthbmJhbi5hZGRCb2FyZHMoXG4gICAgICAgICAgICAgICAgW3tcbiAgICAgICAgICAgICAgICAgICAgJ2lkJzogJ19kZWZhdWx0JyxcbiAgICAgICAgICAgICAgICAgICAgJ3RpdGxlJzogJ05ldyBCb2FyZCcsXG4gICAgICAgICAgICAgICAgICAgICdjbGFzcyc6ICdsaWdodC1wcmltYXJ5JyxcbiAgICAgICAgICAgICAgICAgICAgJ2l0ZW0nOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd0aXRsZSc6IGBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzeW1ib2wgc3ltYm9sLXN1Y2Nlc3MgbWUtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgYWx0PVwiUGljXCIgc3JjPVwiJHtob3N0VXJsfW1lZGlhL2F2YXRhcnMvMTUwLTcuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPlBheW1lbnQgTW9kdWxlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhZGdlIGJhZGdlLWxpZ2h0LXByaW1hcnlcIj5JbiBkZXZlbG9wbWVudDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9LHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndGl0bGUnOiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3ltYm9sIHN5bWJvbC1zdWNjZXNzIG1lLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGFsdD1cIlBpY1wiIHNyYz1cIiR7aG9zdFVybH1tZWRpYS9hdmF0YXJzLzE1MC04LmpwZ1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1kYXJrLTUwIGZ3LWJvbGQgbWItMVwiPk5ldyBQcm9qZWN0PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYWRnZSBiYWRnZS1saWdodC1kYW5nZXJcIj5QZW5kaW5nPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgKVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcmVtb3ZlQm9hcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVtb3ZlQm9hcmQnKTtcbiAgICAgICAgcmVtb3ZlQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGthbmJhbi5yZW1vdmVCb2FyZCgnX2RvbmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGVSaWNoKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEpLYW5iYW5EZW1vUmljaC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVEpLYW5iYW5EZW1vUmljaCIsImV4YW1wbGVSaWNoIiwia2FuYmFuIiwiakthbmJhbiIsImVsZW1lbnQiLCJndXR0ZXIiLCJjbGljayIsImVsIiwiYWxlcnQiLCJpbm5lckhUTUwiLCJib2FyZHMiLCJob3N0VXJsIiwidG9Eb0J1dHRvbiIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiYWRkRWxlbWVudCIsImFkZEJvYXJkRGVmYXVsdCIsImFkZEJvYXJkcyIsInJlbW92ZUJvYXJkIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/jkanban/rich.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/jkanban/rich.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=rich.js.map