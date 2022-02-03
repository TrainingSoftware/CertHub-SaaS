/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**************************************************************************!*\
  !*** ../src/js/custom/documentation/general/fullcalendar/drag-n-drop.js ***!
  \**************************************************************************/


<<<<<<< Updated upstream
// Class definition
var KTGeneralFullCalendarDragDemos = function () {
    // Private functions
=======
eval(" // Class definition\n\nvar KTGeneralFullCalendarDragDemos = function () {\n  // Private functions\n  var exampleDrag = function exampleDrag() {\n    // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos\n    var containerEl = document.getElementById('kt_docs_fullcalendar_events_list');\n    new FullCalendar.Draggable(containerEl, {\n      itemSelector: '.fc-event',\n      eventData: function eventData(eventEl) {\n        return {\n          title: eventEl.innerText.trim()\n        };\n      }\n    }); // initialize the calendar -- for more info please visit the official site: https://fullcalendar.io/demos\n\n    var calendarEl = document.getElementById('kt_docs_fullcalendar_drag');\n    var calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'\n      },\n      editable: true,\n      droppable: true,\n      // this allows things to be dropped onto the calendar\n      drop: function drop(arg) {\n        // is the \"remove after drop\" checkbox checked?\n        if (document.getElementById('drop-remove').checked) {\n          // if so, remove the element from the \"Draggable Events\" list\n          arg.draggedEl.parentNode.removeChild(arg.draggedEl);\n        }\n      }\n    });\n    calendar.render();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleDrag();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralFullCalendarDragDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvZnVsbGNhbGVuZGFyL2RyYWctbi1kcm9wLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLDhCQUE4QixHQUFHLFlBQVk7QUFDN0M7QUFFQSxNQUFJQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzFCO0FBQ0EsUUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isa0NBQXhCLENBQWxCO0FBQ0EsUUFBSUMsWUFBWSxDQUFDQyxTQUFqQixDQUEyQkosV0FBM0IsRUFBd0M7QUFDdENLLE1BQUFBLFlBQVksRUFBRSxXQUR3QjtBQUV0Q0MsTUFBQUEsU0FBUyxFQUFFLG1CQUFTQyxPQUFULEVBQWtCO0FBQzNCLGVBQU87QUFDTEMsVUFBQUEsS0FBSyxFQUFFRCxPQUFPLENBQUNFLFNBQVIsQ0FBa0JDLElBQWxCO0FBREYsU0FBUDtBQUdEO0FBTnFDLEtBQXhDLEVBSDBCLENBWTFCOztBQUNBLFFBQUlDLFVBQVUsR0FBR1YsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUFqQjtBQUNBLFFBQUlVLFFBQVEsR0FBRyxJQUFJVCxZQUFZLENBQUNVLFFBQWpCLENBQTBCRixVQUExQixFQUFzQztBQUNuREcsTUFBQUEsYUFBYSxFQUFFO0FBQ2JDLFFBQUFBLElBQUksRUFBRSxpQkFETztBQUViQyxRQUFBQSxNQUFNLEVBQUUsT0FGSztBQUdiQyxRQUFBQSxLQUFLLEVBQUU7QUFITSxPQURvQztBQU1uREMsTUFBQUEsUUFBUSxFQUFFLElBTnlDO0FBT25EQyxNQUFBQSxTQUFTLEVBQUUsSUFQd0M7QUFPbEM7QUFDakJDLE1BQUFBLElBQUksRUFBRSxjQUFTQyxHQUFULEVBQWM7QUFDbEI7QUFDQSxZQUFJcEIsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDb0IsT0FBM0MsRUFBb0Q7QUFDbEQ7QUFDQUQsVUFBQUEsR0FBRyxDQUFDRSxTQUFKLENBQWNDLFVBQWQsQ0FBeUJDLFdBQXpCLENBQXFDSixHQUFHLENBQUNFLFNBQXpDO0FBQ0Q7QUFDRjtBQWRrRCxLQUF0QyxDQUFmO0FBaUJBWCxJQUFBQSxRQUFRLENBQUNjLE1BQVQ7QUFDSCxHQWhDRDs7QUFrQ0EsU0FBTztBQUNIO0FBQ0FDLElBQUFBLElBQUksRUFBRSxnQkFBWTtBQUNkNUIsTUFBQUEsV0FBVztBQUNkO0FBSkUsR0FBUDtBQU1ILENBM0NvQyxFQUFyQyxDLENBNkNBOzs7QUFDQTZCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQy9CLEVBQUFBLDhCQUE4QixDQUFDNkIsSUFBL0I7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL2Z1bGxjYWxlbmRhci9kcmFnLW4tZHJvcC5qcz82MThhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsRnVsbENhbGVuZGFyRHJhZ0RlbW9zID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG5cbiAgICB2YXIgZXhhbXBsZURyYWcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIGV4dGVybmFsIGV2ZW50cyAtLSBmb3IgbW9yZSBpbmZvIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgc2l0ZTogaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZGVtb3NcbiAgICAgICAgdmFyIGNvbnRhaW5lckVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfZnVsbGNhbGVuZGFyX2V2ZW50c19saXN0Jyk7XG4gICAgICAgIG5ldyBGdWxsQ2FsZW5kYXIuRHJhZ2dhYmxlKGNvbnRhaW5lckVsLCB7XG4gICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmZjLWV2ZW50JyxcbiAgICAgICAgICBldmVudERhdGE6IGZ1bmN0aW9uKGV2ZW50RWwpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRpdGxlOiBldmVudEVsLmlubmVyVGV4dC50cmltKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIFxuICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBjYWxlbmRhciAtLSBmb3IgbW9yZSBpbmZvIHBsZWFzZSB2aXNpdCB0aGUgb2ZmaWNpYWwgc2l0ZTogaHR0cHM6Ly9mdWxsY2FsZW5kYXIuaW8vZGVtb3NcbiAgICAgICAgdmFyIGNhbGVuZGFyRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgna3RfZG9jc19mdWxsY2FsZW5kYXJfZHJhZycpO1xuICAgICAgICB2YXIgY2FsZW5kYXIgPSBuZXcgRnVsbENhbGVuZGFyLkNhbGVuZGFyKGNhbGVuZGFyRWwsIHtcbiAgICAgICAgICBoZWFkZXJUb29sYmFyOiB7XG4gICAgICAgICAgICBsZWZ0OiAncHJldixuZXh0IHRvZGF5JyxcbiAgICAgICAgICAgIGNlbnRlcjogJ3RpdGxlJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSxsaXN0V2VlaydcbiAgICAgICAgICB9LFxuICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgIGRyb3BwYWJsZTogdHJ1ZSwgLy8gdGhpcyBhbGxvd3MgdGhpbmdzIHRvIGJlIGRyb3BwZWQgb250byB0aGUgY2FsZW5kYXJcbiAgICAgICAgICBkcm9wOiBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgICAgIC8vIGlzIHRoZSBcInJlbW92ZSBhZnRlciBkcm9wXCIgY2hlY2tib3ggY2hlY2tlZD9cbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcC1yZW1vdmUnKS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIC8vIGlmIHNvLCByZW1vdmUgdGhlIGVsZW1lbnQgZnJvbSB0aGUgXCJEcmFnZ2FibGUgRXZlbnRzXCIgbGlzdFxuICAgICAgICAgICAgICBhcmcuZHJhZ2dlZEVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoYXJnLmRyYWdnZWRFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVEcmFnKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbiAoKSB7XG4gICAgS1RHZW5lcmFsRnVsbENhbGVuZGFyRHJhZ0RlbW9zLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUR2VuZXJhbEZ1bGxDYWxlbmRhckRyYWdEZW1vcyIsImV4YW1wbGVEcmFnIiwiY29udGFpbmVyRWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiRnVsbENhbGVuZGFyIiwiRHJhZ2dhYmxlIiwiaXRlbVNlbGVjdG9yIiwiZXZlbnREYXRhIiwiZXZlbnRFbCIsInRpdGxlIiwiaW5uZXJUZXh0IiwidHJpbSIsImNhbGVuZGFyRWwiLCJjYWxlbmRhciIsIkNhbGVuZGFyIiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImVkaXRhYmxlIiwiZHJvcHBhYmxlIiwiZHJvcCIsImFyZyIsImNoZWNrZWQiLCJkcmFnZ2VkRWwiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJyZW5kZXIiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/fullcalendar/drag-n-drop.js\n");
>>>>>>> Stashed changes

    var exampleDrag = function () {
        // Initialize the external events -- for more info please visit the official site: https://fullcalendar.io/demos
        var containerEl = document.getElementById('kt_docs_fullcalendar_events_list');
        new FullCalendar.Draggable(containerEl, {
          itemSelector: '.fc-event',
          eventData: function(eventEl) {
            return {
              title: eventEl.innerText.trim()
            }
          }
        });
    
        // initialize the calendar -- for more info please visit the official site: https://fullcalendar.io/demos
        var calendarEl = document.getElementById('kt_docs_fullcalendar_drag');
        var calendar = new FullCalendar.Calendar(calendarEl, {
          headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
          },
          editable: true,
          droppable: true, // this allows things to be dropped onto the calendar
          drop: function(arg) {
            // is the "remove after drop" checkbox checked?
            if (document.getElementById('drop-remove').checked) {
              // if so, remove the element from the "Draggable Events" list
              arg.draggedEl.parentNode.removeChild(arg.draggedEl);
            }
          }
        });

        calendar.render();
    }

    return {
        // Public Functions
        init: function () {
            exampleDrag();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTGeneralFullCalendarDragDemos.init();
});

/******/ })()
;
//# sourceMappingURL=drag-n-drop.js.map