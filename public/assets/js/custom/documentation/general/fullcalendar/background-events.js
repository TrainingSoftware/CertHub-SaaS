/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************************!*\
  !*** ../src/js/custom/documentation/general/fullcalendar/background-events.js ***!
  \********************************************************************************/


// Class definition
var KTGeneralFullCalendarEventsDemos = function() {
	// Private functions

	var exampleBackgroundEvents = function() {
		// Define colors
		var green = KTUtil.getCssVariableValue('--bs-active-success');
		var red = KTUtil.getCssVariableValue('--bs-active-danger');

		// Initialize Fullcalendar -- for more info please visit the official site: https://fullcalendar.io/demos
		var calendarEl = document.getElementById('kt_docs_fullcalendar_background_events');

		var calendar = new FullCalendar.Calendar(calendarEl, {
			headerToolbar: {
				left: 'prev,next today',
				center: 'title',
				right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'
			},
			initialDate: '2020-09-12',
			navLinks: true, // can click day/week names to navigate views
			businessHours: true, // display business hours
			editable: true,
			selectable: true,
			events: [{
					title: 'Business Lunch',
					start: '2020-09-03T13:00:00',
					constraint: 'businessHours'
				},
				{
					title: 'Meeting',
					start: '2020-09-13T11:00:00',
					constraint: 'availableForMeeting', // defined below
					color: green
				},
				{
					title: 'Conference',
					start: '2020-09-18',
					end: '2020-09-20'
				},
				{
					title: 'Party',
					start: '2020-09-29T20:00:00'
				},

				// areas where "Meeting" must be dropped
				{
					groupId: 'availableForMeeting',
					start: '2020-09-11',
					end: '2020-09-11',
					display: 'background',
				},
				{
					groupId: 'availableForMeeting',
					start: '2020-09-13',
					end: '2020-09-13',
					display: 'background',
				},

				// red areas where no events can be dropped
				{
					start: '2020-09-24',
					end: '2020-09-28',
					overlap: false,
					display: 'background',
					color: red
				},
				{
					start: '2020-09-06',
					end: '2020-09-08',
					overlap: false,
					display: 'background',
					color: red
				}
			]
		});

		calendar.render();
	}

	return {
		// Public Functions
		init: function() {
			exampleBackgroundEvents();
		}
	};
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
	KTGeneralFullCalendarEventsDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/fullcalendar/background-events.js":
/*!*****************************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/fullcalendar/background-events.js ***!
  \*****************************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralFullCalendarEventsDemos = function () {\n  // Private functions\n  var exampleBackgroundEvents = function exampleBackgroundEvents() {\n    // Define colors\n    var green = KTUtil.getCssVariableValue('--bs-active-success');\n    var red = KTUtil.getCssVariableValue('--bs-active-danger'); // Initialize Fullcalendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_background_events');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth'\n      },\n      initialDate: '2020-09-12',\n      navLinks: true,\n      // can click day/week names to navigate views\n      businessHours: true,\n      // display business hours\n      editable: true,\n      selectable: true,\n      events: [{\n        title: 'Business Lunch',\n        start: '2020-09-03T13:00:00',\n        constraint: 'businessHours'\n      }, {\n        title: 'Meeting',\n        start: '2020-09-13T11:00:00',\n        constraint: 'availableForMeeting',\n        // defined below\n        color: green\n      }, {\n        title: 'Conference',\n        start: '2020-09-18',\n        end: '2020-09-20'\n      }, {\n        title: 'Party',\n        start: '2020-09-29T20:00:00'\n      }, // areas where \"Meeting\" must be dropped\n      {\n        groupId: 'availableForMeeting',\n        start: '2020-09-11',\n        end: '2020-09-11',\n        display: 'background'\n      }, {\n        groupId: 'availableForMeeting',\n        start: '2020-09-13',\n        end: '2020-09-13',\n        display: 'background'\n      }, // red areas where no events can be dropped\n      {\n        start: '2020-09-24',\n        end: '2020-09-28',\n        overlap: false,\n        display: 'background',\n        color: red\n      }, {\n        start: '2020-09-06',\n        end: '2020-09-08',\n        overlap: false,\n        display: 'background',\n        color: red\n      }]\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleBackgroundEvents();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarEventsDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2JhY2tncm91bmQtZXZlbnRzLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGdDQUFnQyxHQUFHLFlBQVc7QUFDakQ7QUFFQSxNQUFJQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQVc7QUFDeEM7QUFDQSxRQUFJQyxLQUFLLEdBQUdDLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIscUJBQTNCLENBQVo7QUFDQSxRQUFJQyxHQUFHLEdBQUdGLE1BQU0sQ0FBQ0MsbUJBQVAsQ0FBMkIsb0JBQTNCLENBQVYsQ0FId0MsQ0FLeEM7O0FBQ0EsUUFBSUUsVUFBVSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0NBQXhCLENBQWpCO0FBRUEsUUFBSUMsUUFBUSxHQUFHLElBQUlDLFlBQVksQ0FBQ0MsUUFBakIsQ0FBMEJMLFVBQTFCLEVBQXNDO0FBQ3BETSxNQUFBQSxhQUFhLEVBQUU7QUFDZEMsUUFBQUEsSUFBSSxFQUFFLGlCQURRO0FBRWRDLFFBQUFBLE1BQU0sRUFBRSxPQUZNO0FBR2RDLFFBQUFBLEtBQUssRUFBRTtBQUhPLE9BRHFDO0FBTXBEQyxNQUFBQSxXQUFXLEVBQUUsWUFOdUM7QUFPcERDLE1BQUFBLFFBQVEsRUFBRSxJQVAwQztBQU9wQztBQUNoQkMsTUFBQUEsYUFBYSxFQUFFLElBUnFDO0FBUS9CO0FBQ3JCQyxNQUFBQSxRQUFRLEVBQUUsSUFUMEM7QUFVcERDLE1BQUFBLFVBQVUsRUFBRSxJQVZ3QztBQVdwREMsTUFBQUEsTUFBTSxFQUFFLENBQUM7QUFDUEMsUUFBQUEsS0FBSyxFQUFFLGdCQURBO0FBRVBDLFFBQUFBLEtBQUssRUFBRSxxQkFGQTtBQUdQQyxRQUFBQSxVQUFVLEVBQUU7QUFITCxPQUFELEVBS1A7QUFDQ0YsUUFBQUEsS0FBSyxFQUFFLFNBRFI7QUFFQ0MsUUFBQUEsS0FBSyxFQUFFLHFCQUZSO0FBR0NDLFFBQUFBLFVBQVUsRUFBRSxxQkFIYjtBQUdvQztBQUNuQ0MsUUFBQUEsS0FBSyxFQUFFdkI7QUFKUixPQUxPLEVBV1A7QUFDQ29CLFFBQUFBLEtBQUssRUFBRSxZQURSO0FBRUNDLFFBQUFBLEtBQUssRUFBRSxZQUZSO0FBR0NHLFFBQUFBLEdBQUcsRUFBRTtBQUhOLE9BWE8sRUFnQlA7QUFDQ0osUUFBQUEsS0FBSyxFQUFFLE9BRFI7QUFFQ0MsUUFBQUEsS0FBSyxFQUFFO0FBRlIsT0FoQk8sRUFxQlA7QUFDQTtBQUNDSSxRQUFBQSxPQUFPLEVBQUUscUJBRFY7QUFFQ0osUUFBQUEsS0FBSyxFQUFFLFlBRlI7QUFHQ0csUUFBQUEsR0FBRyxFQUFFLFlBSE47QUFJQ0UsUUFBQUEsT0FBTyxFQUFFO0FBSlYsT0F0Qk8sRUE0QlA7QUFDQ0QsUUFBQUEsT0FBTyxFQUFFLHFCQURWO0FBRUNKLFFBQUFBLEtBQUssRUFBRSxZQUZSO0FBR0NHLFFBQUFBLEdBQUcsRUFBRSxZQUhOO0FBSUNFLFFBQUFBLE9BQU8sRUFBRTtBQUpWLE9BNUJPLEVBbUNQO0FBQ0E7QUFDQ0wsUUFBQUEsS0FBSyxFQUFFLFlBRFI7QUFFQ0csUUFBQUEsR0FBRyxFQUFFLFlBRk47QUFHQ0csUUFBQUEsT0FBTyxFQUFFLEtBSFY7QUFJQ0QsUUFBQUEsT0FBTyxFQUFFLFlBSlY7QUFLQ0gsUUFBQUEsS0FBSyxFQUFFcEI7QUFMUixPQXBDTyxFQTJDUDtBQUNDa0IsUUFBQUEsS0FBSyxFQUFFLFlBRFI7QUFFQ0csUUFBQUEsR0FBRyxFQUFFLFlBRk47QUFHQ0csUUFBQUEsT0FBTyxFQUFFLEtBSFY7QUFJQ0QsUUFBQUEsT0FBTyxFQUFFLFlBSlY7QUFLQ0gsUUFBQUEsS0FBSyxFQUFFcEI7QUFMUixPQTNDTztBQVg0QyxLQUF0QyxDQUFmO0FBZ0VBSSxJQUFBQSxRQUFRLENBQUNxQixNQUFUO0FBQ0EsR0F6RUQ7O0FBMkVBLFNBQU87QUFDTjtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVc7QUFDaEI5QixNQUFBQSx1QkFBdUI7QUFDdkI7QUFKSyxHQUFQO0FBTUEsQ0FwRnNDLEVBQXZDLEMsQ0FzRkE7OztBQUNBRSxNQUFNLENBQUM2QixrQkFBUCxDQUEwQixZQUFXO0FBQ3BDaEMsRUFBQUEsZ0NBQWdDLENBQUMrQixJQUFqQztBQUNBLENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2JhY2tncm91bmQtZXZlbnRzLmpzPzk3YWYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEdlbmVyYWxGdWxsQ2FsZW5kYXJFdmVudHNEZW1vcyA9IGZ1bmN0aW9uKCkge1xuXHQvLyBQcml2YXRlIGZ1bmN0aW9uc1xuXG5cdHZhciBleGFtcGxlQmFja2dyb3VuZEV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuXHRcdC8vIERlZmluZSBjb2xvcnNcblx0XHR2YXIgZ3JlZW4gPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtc3VjY2VzcycpO1xuXHRcdHZhciByZWQgPSBLVFV0aWwuZ2V0Q3NzVmFyaWFibGVWYWx1ZSgnLS1icy1hY3RpdmUtZGFuZ2VyJyk7XG5cblx0XHQvLyBJbml0aWFsaXplIEZ1bGxjYWxlbmRhciAtLSBmb3IgbW9yZSBpbmZvIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgc2l0ZTogaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZGVtb3Ncblx0XHR2YXIgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9kb2NzX2Z1bGxjYWxlbmRhcl9iYWNrZ3JvdW5kX2V2ZW50cycpO1xuXG5cdFx0dmFyIGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XG5cdFx0XHRoZWFkZXJUb29sYmFyOiB7XG5cdFx0XHRcdGxlZnQ6ICdwcmV2LG5leHQgdG9kYXknLFxuXHRcdFx0XHRjZW50ZXI6ICd0aXRsZScsXG5cdFx0XHRcdHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSxsaXN0TW9udGgnXG5cdFx0XHR9LFxuXHRcdFx0aW5pdGlhbERhdGU6ICcyMDIwLTA5LTEyJyxcblx0XHRcdG5hdkxpbmtzOiB0cnVlLCAvLyBjYW4gY2xpY2sgZGF5L3dlZWsgbmFtZXMgdG8gbmF2aWdhdGUgdmlld3Ncblx0XHRcdGJ1c2luZXNzSG91cnM6IHRydWUsIC8vIGRpc3BsYXkgYnVzaW5lc3MgaG91cnNcblx0XHRcdGVkaXRhYmxlOiB0cnVlLFxuXHRcdFx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0XHRcdGV2ZW50czogW3tcblx0XHRcdFx0XHR0aXRsZTogJ0J1c2luZXNzIEx1bmNoJyxcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMDNUMTM6MDA6MDAnLFxuXHRcdFx0XHRcdGNvbnN0cmFpbnQ6ICdidXNpbmVzc0hvdXJzJ1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6ICdNZWV0aW5nJyxcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMTNUMTE6MDA6MDAnLFxuXHRcdFx0XHRcdGNvbnN0cmFpbnQ6ICdhdmFpbGFibGVGb3JNZWV0aW5nJywgLy8gZGVmaW5lZCBiZWxvd1xuXHRcdFx0XHRcdGNvbG9yOiBncmVlblxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGl0bGU6ICdDb25mZXJlbmNlJyxcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMTgnLFxuXHRcdFx0XHRcdGVuZDogJzIwMjAtMDktMjAnXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0aXRsZTogJ1BhcnR5Jyxcblx0XHRcdFx0XHRzdGFydDogJzIwMjAtMDktMjlUMjA6MDA6MDAnXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gYXJlYXMgd2hlcmUgXCJNZWV0aW5nXCIgbXVzdCBiZSBkcm9wcGVkXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRncm91cElkOiAnYXZhaWxhYmxlRm9yTWVldGluZycsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTExJyxcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTExJyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRncm91cElkOiAnYXZhaWxhYmxlRm9yTWVldGluZycsXG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTEzJyxcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTEzJyxcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gcmVkIGFyZWFzIHdoZXJlIG5vIGV2ZW50cyBjYW4gYmUgZHJvcHBlZFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTI0Jyxcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTI4Jyxcblx0XHRcdFx0XHRvdmVybGFwOiBmYWxzZSxcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0Y29sb3I6IHJlZFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c3RhcnQ6ICcyMDIwLTA5LTA2Jyxcblx0XHRcdFx0XHRlbmQ6ICcyMDIwLTA5LTA4Jyxcblx0XHRcdFx0XHRvdmVybGFwOiBmYWxzZSxcblx0XHRcdFx0XHRkaXNwbGF5OiAnYmFja2dyb3VuZCcsXG5cdFx0XHRcdFx0Y29sb3I6IHJlZFxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSk7XG5cblx0XHRjYWxlbmRhci5yZW5kZXIoKTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0Ly8gUHVibGljIEZ1bmN0aW9uc1xuXHRcdGluaXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0ZXhhbXBsZUJhY2tncm91bmRFdmVudHMoKTtcblx0XHR9XG5cdH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuXHRLVEdlbmVyYWxGdWxsQ2FsZW5kYXJFdmVudHNEZW1vcy5pbml0KCk7XG59KTsiXSwibmFtZXMiOlsiS1RHZW5lcmFsRnVsbENhbGVuZGFyRXZlbnRzRGVtb3MiLCJleGFtcGxlQmFja2dyb3VuZEV2ZW50cyIsImdyZWVuIiwiS1RVdGlsIiwiZ2V0Q3NzVmFyaWFibGVWYWx1ZSIsInJlZCIsImNhbGVuZGFyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY2FsZW5kYXIiLCJGdWxsQ2FsZW5kYXIiLCJDYWxlbmRhciIsImhlYWRlclRvb2xiYXIiLCJsZWZ0IiwiY2VudGVyIiwicmlnaHQiLCJpbml0aWFsRGF0ZSIsIm5hdkxpbmtzIiwiYnVzaW5lc3NIb3VycyIsImVkaXRhYmxlIiwic2VsZWN0YWJsZSIsImV2ZW50cyIsInRpdGxlIiwic3RhcnQiLCJjb25zdHJhaW50IiwiY29sb3IiLCJlbmQiLCJncm91cElkIiwiZGlzcGxheSIsIm92ZXJsYXAiLCJyZW5kZXIiLCJpbml0Iiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/fullcalendar/background-events.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/fullcalendar/background-events.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=background-events.js.map