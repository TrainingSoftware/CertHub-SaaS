/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!****************************************************************!*\
  !*** ../src/js/custom/documentation/editors/quill/autosave.js ***!
  \****************************************************************/


// Class definition
var KTFormsQuillAutosave = function () {
    // Private functions
    var exampleAutosave = function () {
        var Delta = Quill.import('delta');
        var quill = new Quill('#kt_docs_quill_autosave', {
            modules: {
                toolbar: true
            },
            placeholder: 'Type your text here...',
            theme: 'snow'
        });

        // Store accumulated changes
        var change = new Delta();
        quill.on('text-change', function (delta) {
            change = change.compose(delta);
        });

        // Save periodically
        setInterval(function () {
            if (change.length() > 0) {
                console.log('Saving changes', change);
                /*
                Send partial changes
                $.post('/your-endpoint', {
                partial: JSON.stringify(change)
                });

                Send entire document
                $.post('/your-endpoint', {
                doc: JSON.stringify(quill.getContents())
                });
                */
                change = new Delta();
            }
        }, 5 * 1000);

        // Check for unsaved data
        window.onbeforeunload = function () {
            if (change.length() > 0) {
                return 'There are unsaved changes. Are you sure you want to leave?';
            }
        }
    }

    return {
        // Public Functions
        init: function () {
            exampleAutosave();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTFormsQuillAutosave.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/editors/quill/autosave.js":
/*!*************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/editors/quill/autosave.js ***!
  \*************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsQuillAutosave = function () {\n  // Private functions\n  var exampleAutosave = function exampleAutosave() {\n    var Delta = Quill[\"import\"]('delta');\n    var quill = new Quill('#kt_docs_quill_autosave', {\n      modules: {\n        toolbar: true\n      },\n      placeholder: 'Type your text here...',\n      theme: 'snow'\n    }); // Store accumulated changes\n\n    var change = new Delta();\n    quill.on('text-change', function (delta) {\n      change = change.compose(delta);\n    }); // Save periodically\n\n    setInterval(function () {\n      if (change.length() > 0) {\n        console.log('Saving changes', change);\n        /*\n        Send partial changes\n        $.post('/your-endpoint', {\n        partial: JSON.stringify(change)\n        });\n         Send entire document\n        $.post('/your-endpoint', {\n        doc: JSON.stringify(quill.getContents())\n        });\n        */\n\n        change = new Delta();\n      }\n    }, 5 * 1000); // Check for unsaved data\n\n    window.onbeforeunload = function () {\n      if (change.length() > 0) {\n        return 'There are unsaved changes. Are you sure you want to leave?';\n      }\n    };\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleAutosave();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsQuillAutosave.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2VkaXRvcnMvcXVpbGwvYXV0b3NhdmUuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsb0JBQW9CLEdBQUcsWUFBWTtBQUNuQztBQUNBLE1BQUlDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBWTtBQUM5QixRQUFJQyxLQUFLLEdBQUdDLEtBQUssVUFBTCxDQUFhLE9BQWIsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJRCxLQUFKLENBQVUseUJBQVYsRUFBcUM7QUFDN0NFLE1BQUFBLE9BQU8sRUFBRTtBQUNMQyxRQUFBQSxPQUFPLEVBQUU7QUFESixPQURvQztBQUk3Q0MsTUFBQUEsV0FBVyxFQUFFLHdCQUpnQztBQUs3Q0MsTUFBQUEsS0FBSyxFQUFFO0FBTHNDLEtBQXJDLENBQVosQ0FGOEIsQ0FVOUI7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlQLEtBQUosRUFBYjtBQUNBRSxJQUFBQSxLQUFLLENBQUNNLEVBQU4sQ0FBUyxhQUFULEVBQXdCLFVBQVVDLEtBQVYsRUFBaUI7QUFDckNGLE1BQUFBLE1BQU0sR0FBR0EsTUFBTSxDQUFDRyxPQUFQLENBQWVELEtBQWYsQ0FBVDtBQUNILEtBRkQsRUFaOEIsQ0FnQjlCOztBQUNBRSxJQUFBQSxXQUFXLENBQUMsWUFBWTtBQUNwQixVQUFJSixNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJDLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCUCxNQUE5QjtBQUNBO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZ0JBLFFBQUFBLE1BQU0sR0FBRyxJQUFJUCxLQUFKLEVBQVQ7QUFDSDtBQUNKLEtBaEJVLEVBZ0JSLElBQUksSUFoQkksQ0FBWCxDQWpCOEIsQ0FtQzlCOztBQUNBZSxJQUFBQSxNQUFNLENBQUNDLGNBQVAsR0FBd0IsWUFBWTtBQUNoQyxVQUFJVCxNQUFNLENBQUNLLE1BQVAsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckIsZUFBTyw0REFBUDtBQUNIO0FBQ0osS0FKRDtBQUtILEdBekNEOztBQTJDQSxTQUFPO0FBQ0g7QUFDQUssSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RsQixNQUFBQSxlQUFlO0FBQ2xCO0FBSkUsR0FBUDtBQU1ILENBbkQwQixFQUEzQixDLENBcURBOzs7QUFDQW1CLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3JCLEVBQUFBLG9CQUFvQixDQUFDbUIsSUFBckI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9lZGl0b3JzL3F1aWxsL2F1dG9zYXZlLmpzP2FhZWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVEZvcm1zUXVpbGxBdXRvc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlQXV0b3NhdmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBEZWx0YSA9IFF1aWxsLmltcG9ydCgnZGVsdGEnKTtcbiAgICAgICAgdmFyIHF1aWxsID0gbmV3IFF1aWxsKCcja3RfZG9jc19xdWlsbF9hdXRvc2F2ZScsIHtcbiAgICAgICAgICAgIG1vZHVsZXM6IHtcbiAgICAgICAgICAgICAgICB0b29sYmFyOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdUeXBlIHlvdXIgdGV4dCBoZXJlLi4uJyxcbiAgICAgICAgICAgIHRoZW1lOiAnc25vdydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU3RvcmUgYWNjdW11bGF0ZWQgY2hhbmdlc1xuICAgICAgICB2YXIgY2hhbmdlID0gbmV3IERlbHRhKCk7XG4gICAgICAgIHF1aWxsLm9uKCd0ZXh0LWNoYW5nZScsIGZ1bmN0aW9uIChkZWx0YSkge1xuICAgICAgICAgICAgY2hhbmdlID0gY2hhbmdlLmNvbXBvc2UoZGVsdGEpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBTYXZlIHBlcmlvZGljYWxseVxuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTYXZpbmcgY2hhbmdlcycsIGNoYW5nZSk7XG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICBTZW5kIHBhcnRpYWwgY2hhbmdlc1xuICAgICAgICAgICAgICAgICQucG9zdCgnL3lvdXItZW5kcG9pbnQnLCB7XG4gICAgICAgICAgICAgICAgcGFydGlhbDogSlNPTi5zdHJpbmdpZnkoY2hhbmdlKVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgU2VuZCBlbnRpcmUgZG9jdW1lbnRcbiAgICAgICAgICAgICAgICAkLnBvc3QoJy95b3VyLWVuZHBvaW50Jywge1xuICAgICAgICAgICAgICAgIGRvYzogSlNPTi5zdHJpbmdpZnkocXVpbGwuZ2V0Q29udGVudHMoKSlcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgICAgIGNoYW5nZSA9IG5ldyBEZWx0YSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCA1ICogMTAwMCk7XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHVuc2F2ZWQgZGF0YVxuICAgICAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoY2hhbmdlLmxlbmd0aCgpID4gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnVGhlcmUgYXJlIHVuc2F2ZWQgY2hhbmdlcy4gQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGxlYXZlPyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVBdXRvc2F2ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtURm9ybXNRdWlsbEF1dG9zYXZlLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktURm9ybXNRdWlsbEF1dG9zYXZlIiwiZXhhbXBsZUF1dG9zYXZlIiwiRGVsdGEiLCJRdWlsbCIsInF1aWxsIiwibW9kdWxlcyIsInRvb2xiYXIiLCJwbGFjZWhvbGRlciIsInRoZW1lIiwiY2hhbmdlIiwib24iLCJkZWx0YSIsImNvbXBvc2UiLCJzZXRJbnRlcnZhbCIsImxlbmd0aCIsImNvbnNvbGUiLCJsb2ciLCJ3aW5kb3ciLCJvbmJlZm9yZXVubG9hZCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/editors/quill/autosave.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/editors/quill/autosave.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=autosave.js.map