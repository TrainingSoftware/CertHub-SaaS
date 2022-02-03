/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**************************************************************************!*\
  !*** ../src/js/custom/documentation/general/vis-timeline/interaction.js ***!
  \**************************************************************************/


// Class definition
var KTVisTimelineInteraction = function () {
    // Private functions
    var exampleInteraction = function () {
        // create a dataset with items
        // we specify the type of the fields `start` and `end` here to be strings
        // containing an ISO date. The fields will be outputted as ISO dates
        // automatically getting data from the DataSet via items.get().
        var items = new vis.DataSet({
            type: { start: "ISODate", end: "ISODate" },
        });

        // add items to the DataSet
        items.add([
            { id: 1, content: "item 1<br>start", start: "2021-01-23" },
            { id: 2, content: "item 2", start: "2021-01-18" },
            { id: 3, content: "item 3", start: "2021-01-21" },
            { id: 4, content: "item 4", start: "2021-01-19", end: "2021-01-24" },
            { id: 5, content: "item 5", start: "2021-01-28", type: "point" },
            { id: 6, content: "item 6", start: "2021-01-26" },
        ]);

        var container = document.getElementById("kt_docs_vistimeline_interaction");
        var options = {
            start: "2021-01-10",
            end: "2021-02-10",
            editable: true,
            showCurrentTime: true,
        };

        var timeline = new vis.Timeline(container, items, options);

        // Handle buttons
        document.getElementById("window1").onclick = function () {
            timeline.setWindow("2021-01-01", "2021-04-01");
        };
        document.getElementById("fit").onclick = function () {
            timeline.fit();
        };
        document.getElementById("select").onclick = function () {
            timeline.setSelection([5, 6], {
                focus: true,
            });
        };
        document.getElementById("focus1").onclick = function () {
            timeline.focus(2);
        };
        document.getElementById("moveTo").onclick = function () {
            timeline.moveTo("2021-02-01");
        };
    }

    return {
        // Public Functions
        init: function () {
            exampleInteraction();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineInteraction.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/interaction.js":
/*!***********************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/interaction.js ***!
  \***********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineInteraction = function () {\n  // Private functions\n  var exampleInteraction = function exampleInteraction() {\n    // create a dataset with items\n    // we specify the type of the fields `start` and `end` here to be strings\n    // containing an ISO date. The fields will be outputted as ISO dates\n    // automatically getting data from the DataSet via items.get().\n    var items = new vis.DataSet({\n      type: {\n        start: \"ISODate\",\n        end: \"ISODate\"\n      }\n    }); // add items to the DataSet\n\n    items.add([{\n      id: 1,\n      content: \"item 1<br>start\",\n      start: \"2021-01-23\"\n    }, {\n      id: 2,\n      content: \"item 2\",\n      start: \"2021-01-18\"\n    }, {\n      id: 3,\n      content: \"item 3\",\n      start: \"2021-01-21\"\n    }, {\n      id: 4,\n      content: \"item 4\",\n      start: \"2021-01-19\",\n      end: \"2021-01-24\"\n    }, {\n      id: 5,\n      content: \"item 5\",\n      start: \"2021-01-28\",\n      type: \"point\"\n    }, {\n      id: 6,\n      content: \"item 6\",\n      start: \"2021-01-26\"\n    }]);\n    var container = document.getElementById(\"kt_docs_vistimeline_interaction\");\n    var options = {\n      start: \"2021-01-10\",\n      end: \"2021-02-10\",\n      editable: true,\n      showCurrentTime: true\n    };\n    var timeline = new vis.Timeline(container, items, options); // Handle buttons\n\n    document.getElementById(\"window1\").onclick = function () {\n      timeline.setWindow(\"2021-01-01\", \"2021-04-01\");\n    };\n\n    document.getElementById(\"fit\").onclick = function () {\n      timeline.fit();\n    };\n\n    document.getElementById(\"select\").onclick = function () {\n      timeline.setSelection([5, 6], {\n        focus: true\n      });\n    };\n\n    document.getElementById(\"focus1\").onclick = function () {\n      timeline.focus(2);\n    };\n\n    document.getElementById(\"moveTo\").onclick = function () {\n      timeline.moveTo(\"2021-02-01\");\n    };\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleInteraction();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineInteraction.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2ludGVyYWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHdCQUF3QixHQUFHLFlBQVk7QUFDdkM7QUFDQSxNQUFJQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLEdBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJQyxLQUFLLEdBQUcsSUFBSUMsR0FBRyxDQUFDQyxPQUFSLENBQWdCO0FBQ3hCQyxNQUFBQSxJQUFJLEVBQUU7QUFBRUMsUUFBQUEsS0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFFBQUFBLEdBQUcsRUFBRTtBQUF6QjtBQURrQixLQUFoQixDQUFaLENBTGlDLENBU2pDOztBQUNBTCxJQUFBQSxLQUFLLENBQUNNLEdBQU4sQ0FBVSxDQUNOO0FBQUVDLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxpQkFBbEI7QUFBcUNKLE1BQUFBLEtBQUssRUFBRTtBQUE1QyxLQURNLEVBRU47QUFBRUcsTUFBQUEsRUFBRSxFQUFFLENBQU47QUFBU0MsTUFBQUEsT0FBTyxFQUFFLFFBQWxCO0FBQTRCSixNQUFBQSxLQUFLLEVBQUU7QUFBbkMsS0FGTSxFQUdOO0FBQUVHLE1BQUFBLEVBQUUsRUFBRSxDQUFOO0FBQVNDLE1BQUFBLE9BQU8sRUFBRSxRQUFsQjtBQUE0QkosTUFBQUEsS0FBSyxFQUFFO0FBQW5DLEtBSE0sRUFJTjtBQUFFRyxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJKLE1BQUFBLEtBQUssRUFBRSxZQUFuQztBQUFpREMsTUFBQUEsR0FBRyxFQUFFO0FBQXRELEtBSk0sRUFLTjtBQUFFRSxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJKLE1BQUFBLEtBQUssRUFBRSxZQUFuQztBQUFpREQsTUFBQUEsSUFBSSxFQUFFO0FBQXZELEtBTE0sRUFNTjtBQUFFSSxNQUFBQSxFQUFFLEVBQUUsQ0FBTjtBQUFTQyxNQUFBQSxPQUFPLEVBQUUsUUFBbEI7QUFBNEJKLE1BQUFBLEtBQUssRUFBRTtBQUFuQyxLQU5NLENBQVY7QUFTQSxRQUFJSyxTQUFTLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixpQ0FBeEIsQ0FBaEI7QUFDQSxRQUFJQyxPQUFPLEdBQUc7QUFDVlIsTUFBQUEsS0FBSyxFQUFFLFlBREc7QUFFVkMsTUFBQUEsR0FBRyxFQUFFLFlBRks7QUFHVlEsTUFBQUEsUUFBUSxFQUFFLElBSEE7QUFJVkMsTUFBQUEsZUFBZSxFQUFFO0FBSlAsS0FBZDtBQU9BLFFBQUlDLFFBQVEsR0FBRyxJQUFJZCxHQUFHLENBQUNlLFFBQVIsQ0FBaUJQLFNBQWpCLEVBQTRCVCxLQUE1QixFQUFtQ1ksT0FBbkMsQ0FBZixDQTNCaUMsQ0E2QmpDOztBQUNBRixJQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsRUFBbUNNLE9BQW5DLEdBQTZDLFlBQVk7QUFDckRGLE1BQUFBLFFBQVEsQ0FBQ0csU0FBVCxDQUFtQixZQUFuQixFQUFpQyxZQUFqQztBQUNILEtBRkQ7O0FBR0FSLElBQUFBLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QixFQUErQk0sT0FBL0IsR0FBeUMsWUFBWTtBQUNqREYsTUFBQUEsUUFBUSxDQUFDSSxHQUFUO0FBQ0gsS0FGRDs7QUFHQVQsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDTSxPQUFsQyxHQUE0QyxZQUFZO0FBQ3BERixNQUFBQSxRQUFRLENBQUNLLFlBQVQsQ0FBc0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF0QixFQUE4QjtBQUMxQkMsUUFBQUEsS0FBSyxFQUFFO0FBRG1CLE9BQTlCO0FBR0gsS0FKRDs7QUFLQVgsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDTSxPQUFsQyxHQUE0QyxZQUFZO0FBQ3BERixNQUFBQSxRQUFRLENBQUNNLEtBQVQsQ0FBZSxDQUFmO0FBQ0gsS0FGRDs7QUFHQVgsSUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLEVBQWtDTSxPQUFsQyxHQUE0QyxZQUFZO0FBQ3BERixNQUFBQSxRQUFRLENBQUNPLE1BQVQsQ0FBZ0IsWUFBaEI7QUFDSCxLQUZEO0FBR0gsR0EvQ0Q7O0FBaURBLFNBQU87QUFDSDtBQUNBQyxJQUFBQSxJQUFJLEVBQUUsZ0JBQVk7QUFDZHhCLE1BQUFBLGtCQUFrQjtBQUNyQjtBQUpFLEdBQVA7QUFNSCxDQXpEOEIsRUFBL0IsQyxDQTJEQTs7O0FBQ0F5QixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbEMzQixFQUFBQSx3QkFBd0IsQ0FBQ3lCLElBQXpCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZ2VuZXJhbC92aXMtdGltZWxpbmUvaW50ZXJhY3Rpb24uanM/NTNmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUVmlzVGltZWxpbmVJbnRlcmFjdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBleGFtcGxlSW50ZXJhY3Rpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGNyZWF0ZSBhIGRhdGFzZXQgd2l0aCBpdGVtc1xuICAgICAgICAvLyB3ZSBzcGVjaWZ5IHRoZSB0eXBlIG9mIHRoZSBmaWVsZHMgYHN0YXJ0YCBhbmQgYGVuZGAgaGVyZSB0byBiZSBzdHJpbmdzXG4gICAgICAgIC8vIGNvbnRhaW5pbmcgYW4gSVNPIGRhdGUuIFRoZSBmaWVsZHMgd2lsbCBiZSBvdXRwdXR0ZWQgYXMgSVNPIGRhdGVzXG4gICAgICAgIC8vIGF1dG9tYXRpY2FsbHkgZ2V0dGluZyBkYXRhIGZyb20gdGhlIERhdGFTZXQgdmlhIGl0ZW1zLmdldCgpLlxuICAgICAgICB2YXIgaXRlbXMgPSBuZXcgdmlzLkRhdGFTZXQoe1xuICAgICAgICAgICAgdHlwZTogeyBzdGFydDogXCJJU09EYXRlXCIsIGVuZDogXCJJU09EYXRlXCIgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYWRkIGl0ZW1zIHRvIHRoZSBEYXRhU2V0XG4gICAgICAgIGl0ZW1zLmFkZChbXG4gICAgICAgICAgICB7IGlkOiAxLCBjb250ZW50OiBcIml0ZW0gMTxicj5zdGFydFwiLCBzdGFydDogXCIyMDIxLTAxLTIzXCIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDIsIGNvbnRlbnQ6IFwiaXRlbSAyXCIsIHN0YXJ0OiBcIjIwMjEtMDEtMThcIiB9LFxuICAgICAgICAgICAgeyBpZDogMywgY29udGVudDogXCJpdGVtIDNcIiwgc3RhcnQ6IFwiMjAyMS0wMS0yMVwiIH0sXG4gICAgICAgICAgICB7IGlkOiA0LCBjb250ZW50OiBcIml0ZW0gNFwiLCBzdGFydDogXCIyMDIxLTAxLTE5XCIsIGVuZDogXCIyMDIxLTAxLTI0XCIgfSxcbiAgICAgICAgICAgIHsgaWQ6IDUsIGNvbnRlbnQ6IFwiaXRlbSA1XCIsIHN0YXJ0OiBcIjIwMjEtMDEtMjhcIiwgdHlwZTogXCJwb2ludFwiIH0sXG4gICAgICAgICAgICB7IGlkOiA2LCBjb250ZW50OiBcIml0ZW0gNlwiLCBzdGFydDogXCIyMDIxLTAxLTI2XCIgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfZG9jc192aXN0aW1lbGluZV9pbnRlcmFjdGlvblwiKTtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBzdGFydDogXCIyMDIxLTAxLTEwXCIsXG4gICAgICAgICAgICBlbmQ6IFwiMjAyMS0wMi0xMFwiLFxuICAgICAgICAgICAgZWRpdGFibGU6IHRydWUsXG4gICAgICAgICAgICBzaG93Q3VycmVudFRpbWU6IHRydWUsXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IHZpcy5UaW1lbGluZShjb250YWluZXIsIGl0ZW1zLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBIYW5kbGUgYnV0dG9uc1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndpbmRvdzFcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVsaW5lLnNldFdpbmRvdyhcIjIwMjEtMDEtMDFcIiwgXCIyMDIxLTA0LTAxXCIpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpdFwiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZWxpbmUuZml0KCk7XG4gICAgICAgIH07XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VsZWN0XCIpLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aW1lbGluZS5zZXRTZWxlY3Rpb24oWzUsIDZdLCB7XG4gICAgICAgICAgICAgICAgZm9jdXM6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmb2N1czFcIikub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRpbWVsaW5lLmZvY3VzKDIpO1xuICAgICAgICB9O1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vdmVUb1wiKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGltZWxpbmUubW92ZVRvKFwiMjAyMS0wMi0wMVwiKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVJbnRlcmFjdGlvbigpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVmlzVGltZWxpbmVJbnRlcmFjdGlvbi5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFZpc1RpbWVsaW5lSW50ZXJhY3Rpb24iLCJleGFtcGxlSW50ZXJhY3Rpb24iLCJpdGVtcyIsInZpcyIsIkRhdGFTZXQiLCJ0eXBlIiwic3RhcnQiLCJlbmQiLCJhZGQiLCJpZCIsImNvbnRlbnQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsImVkaXRhYmxlIiwic2hvd0N1cnJlbnRUaW1lIiwidGltZWxpbmUiLCJUaW1lbGluZSIsIm9uY2xpY2siLCJzZXRXaW5kb3ciLCJmaXQiLCJzZXRTZWxlY3Rpb24iLCJmb2N1cyIsIm1vdmVUbyIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/interaction.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/interaction.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=interaction.js.map