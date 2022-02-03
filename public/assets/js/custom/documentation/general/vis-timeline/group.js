/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/general/vis-timeline/group.js ***!
  \********************************************************************/


// Class definition
var KTVisTimelineGroup = function () {
    // Private functions
    var exampleGroup = function () {
        var now = Date.now();

        var options = {
            stack: true,
            maxHeight: 640,
            horizontalScroll: false,
            verticalScroll: true,
            zoomKey: "ctrlKey",
            start: Date.now() - 1000 * 60 * 60 * 24 * 3, // minus 3 days
            end: Date.now() + 1000 * 60 * 60 * 24 * 21, // plus 1 months aprox.
            orientation: {
                axis: "both",
                item: "top",
            },
        };
        var groups = new vis.DataSet();
        var items = new vis.DataSet();

        var count = 300;

        for (var i = 0; i < count; i++) {
            var start = now + 1000 * 60 * 60 * 24 * (i + Math.floor(Math.random() * 7));
            var end = start + 1000 * 60 * 60 * 24 * (1 + Math.floor(Math.random() * 5));

            groups.add({
                id: i,
                content: "Task " + i,
                order: i,
            });

            items.add({
                id: i,
                group: i,
                start: start,
                end: end,
                type: "range",
                content: "Item " + i,
            });
        }

        // create a Timeline
        var container = document.getElementById("kt_docs_vistimeline_group");
        var timeline = new vis.Timeline(container, items, groups, options);
        //timeline = new vis.Timeline(container, null, options);
        timeline.setGroups(groups);
        timeline.setItems(items);

        function debounce(func, wait = 100) {
            let timeout;
            return function (...args) {
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    func.apply(this, args);
                }, wait);
            };
        }

        let groupFocus = (e) => {
            let vGroups = timeline.getVisibleGroups();
            let vItems = vGroups.reduce((res, groupId) => {
                let group = timeline.itemSet.groups[groupId];
                if (group.items) {
                    res = res.concat(Object.keys(group.items));
                }
                return res;
            }, []);
            timeline.focus(vItems);
        };
        timeline.on("scroll", debounce(groupFocus, 200));
        // Enabling the next line leads to a continuous since calling focus might scroll vertically even if it shouldn't
        // this.timeline.on("scrollSide", debounce(groupFocus, 200))        

        // Handle button click
        const button = document.getElementById('kt_docs_vistimeline_group_button');
        button.addEventListener('click', e => {
            e.preventDefault();

            var a = timeline.getVisibleGroups();
            document.getElementById("visibleGroupsContainer").innerHTML = "";
            document.getElementById("visibleGroupsContainer").innerHTML += a;
        });
    }

    return {
        // Public Functions
        init: function () {
            exampleGroup();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineGroup.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/group.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/group.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineGroup = function () {\n  // Private functions\n  var exampleGroup = function exampleGroup() {\n    var now = Date.now();\n    var options = {\n      stack: true,\n      maxHeight: 640,\n      horizontalScroll: false,\n      verticalScroll: true,\n      zoomKey: \"ctrlKey\",\n      start: Date.now() - 1000 * 60 * 60 * 24 * 3,\n      // minus 3 days\n      end: Date.now() + 1000 * 60 * 60 * 24 * 21,\n      // plus 1 months aprox.\n      orientation: {\n        axis: \"both\",\n        item: \"top\"\n      }\n    };\n    var groups = new vis.DataSet();\n    var items = new vis.DataSet();\n    var count = 300;\n\n    for (var i = 0; i < count; i++) {\n      var start = now + 1000 * 60 * 60 * 24 * (i + Math.floor(Math.random() * 7));\n      var end = start + 1000 * 60 * 60 * 24 * (1 + Math.floor(Math.random() * 5));\n      groups.add({\n        id: i,\n        content: \"Task \" + i,\n        order: i\n      });\n      items.add({\n        id: i,\n        group: i,\n        start: start,\n        end: end,\n        type: \"range\",\n        content: \"Item \" + i\n      });\n    } // create a Timeline\n\n\n    var container = document.getElementById(\"kt_docs_vistimeline_group\");\n    var timeline = new vis.Timeline(container, items, groups, options); //timeline = new vis.Timeline(container, null, options);\n\n    timeline.setGroups(groups);\n    timeline.setItems(items);\n\n    function debounce(func) {\n      var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;\n      var timeout;\n      return function () {\n        var _this = this;\n\n        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n          args[_key] = arguments[_key];\n        }\n\n        clearTimeout(timeout);\n        timeout = setTimeout(function () {\n          func.apply(_this, args);\n        }, wait);\n      };\n    }\n\n    var groupFocus = function groupFocus(e) {\n      var vGroups = timeline.getVisibleGroups();\n      var vItems = vGroups.reduce(function (res, groupId) {\n        var group = timeline.itemSet.groups[groupId];\n\n        if (group.items) {\n          res = res.concat(Object.keys(group.items));\n        }\n\n        return res;\n      }, []);\n      timeline.focus(vItems);\n    };\n\n    timeline.on(\"scroll\", debounce(groupFocus, 200)); // Enabling the next line leads to a continuous since calling focus might scroll vertically even if it shouldn't\n    // this.timeline.on(\"scrollSide\", debounce(groupFocus, 200))        \n    // Handle button click\n\n    var button = document.getElementById('kt_docs_vistimeline_group_button');\n    button.addEventListener('click', function (e) {\n      e.preventDefault();\n      var a = timeline.getVisibleGroups();\n      document.getElementById(\"visibleGroupsContainer\").innerHTML = \"\";\n      document.getElementById(\"visibleGroupsContainer\").innerHTML += a;\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleGroup();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineGroup.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2dyb3VwLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVk7QUFDakM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzNCLFFBQUlDLEdBQUcsR0FBR0MsSUFBSSxDQUFDRCxHQUFMLEVBQVY7QUFFQSxRQUFJRSxPQUFPLEdBQUc7QUFDVkMsTUFBQUEsS0FBSyxFQUFFLElBREc7QUFFVkMsTUFBQUEsU0FBUyxFQUFFLEdBRkQ7QUFHVkMsTUFBQUEsZ0JBQWdCLEVBQUUsS0FIUjtBQUlWQyxNQUFBQSxjQUFjLEVBQUUsSUFKTjtBQUtWQyxNQUFBQSxPQUFPLEVBQUUsU0FMQztBQU1WQyxNQUFBQSxLQUFLLEVBQUVQLElBQUksQ0FBQ0QsR0FBTCxLQUFhLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsQ0FOaEM7QUFNbUM7QUFDN0NTLE1BQUFBLEdBQUcsRUFBRVIsSUFBSSxDQUFDRCxHQUFMLEtBQWEsT0FBTyxFQUFQLEdBQVksRUFBWixHQUFpQixFQUFqQixHQUFzQixFQVA5QjtBQU9rQztBQUM1Q1UsTUFBQUEsV0FBVyxFQUFFO0FBQ1RDLFFBQUFBLElBQUksRUFBRSxNQURHO0FBRVRDLFFBQUFBLElBQUksRUFBRTtBQUZHO0FBUkgsS0FBZDtBQWFBLFFBQUlDLE1BQU0sR0FBRyxJQUFJQyxHQUFHLENBQUNDLE9BQVIsRUFBYjtBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJRixHQUFHLENBQUNDLE9BQVIsRUFBWjtBQUVBLFFBQUlFLEtBQUssR0FBRyxHQUFaOztBQUVBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBcEIsRUFBMkJDLENBQUMsRUFBNUIsRUFBZ0M7QUFDNUIsVUFBSVYsS0FBSyxHQUFHUixHQUFHLEdBQUcsT0FB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Q0FBeEIsQ0FBZjtBQUNBMkIsSUFBQUEsTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFBZCxDQUFDLEVBQUk7QUFDbENBLE1BQUFBLENBQUMsQ0FBQ2UsY0FBRjtBQUVBLFVBQUlDLENBQUMsR0FBRzdCLFFBQVEsQ0FBQ2UsZ0JBQVQsRUFBUjtBQUNBakIsTUFBQUEsUUFBUSxDQUFDQyxjQUFULENBQXdCLHdCQUF4QixFQUFrRCtCLFNBQWxELEdBQThELEVBQTlEO0FBQ0FoQyxNQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0Isd0JBQXhCLEVBQWtEK0IsU0FBbEQsSUFBK0RELENBQS9EO0FBQ0gsS0FORDtBQU9ILEdBbEZEOztBQW9GQSxTQUFPO0FBQ0g7QUFDQUUsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2QvRCxNQUFBQSxZQUFZO0FBQ2Y7QUFKRSxHQUFQO0FBTUgsQ0E1RndCLEVBQXpCLEMsQ0E4RkE7OztBQUNBZ0UsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFZO0FBQ2xDbEUsRUFBQUEsa0JBQWtCLENBQUNnRSxJQUFuQjtBQUNILENBRkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL2dyb3VwLmpzPzIzODAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFZpc1RpbWVsaW5lR3JvdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZUdyb3VwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgbm93ID0gRGF0ZS5ub3coKTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHN0YWNrOiB0cnVlLFxuICAgICAgICAgICAgbWF4SGVpZ2h0OiA2NDAsXG4gICAgICAgICAgICBob3Jpem9udGFsU2Nyb2xsOiBmYWxzZSxcbiAgICAgICAgICAgIHZlcnRpY2FsU2Nyb2xsOiB0cnVlLFxuICAgICAgICAgICAgem9vbUtleTogXCJjdHJsS2V5XCIsXG4gICAgICAgICAgICBzdGFydDogRGF0ZS5ub3coKSAtIDEwMDAgKiA2MCAqIDYwICogMjQgKiAzLCAvLyBtaW51cyAzIGRheXNcbiAgICAgICAgICAgIGVuZDogRGF0ZS5ub3coKSArIDEwMDAgKiA2MCAqIDYwICogMjQgKiAyMSwgLy8gcGx1cyAxIG1vbnRocyBhcHJveC5cbiAgICAgICAgICAgIG9yaWVudGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgYXhpczogXCJib3RoXCIsXG4gICAgICAgICAgICAgICAgaXRlbTogXCJ0b3BcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHZhciBncm91cHMgPSBuZXcgdmlzLkRhdGFTZXQoKTtcbiAgICAgICAgdmFyIGl0ZW1zID0gbmV3IHZpcy5EYXRhU2V0KCk7XG5cbiAgICAgICAgdmFyIGNvdW50ID0gMzAwO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gbm93ICsgMTAwMCAqIDYwICogNjAgKiAyNCAqIChpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNykpO1xuICAgICAgICAgICAgdmFyIGVuZCA9IHN0YXJ0ICsgMTAwMCAqIDYwICogNjAgKiAyNCAqICgxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNSkpO1xuXG4gICAgICAgICAgICBncm91cHMuYWRkKHtcbiAgICAgICAgICAgICAgICBpZDogaSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlRhc2sgXCIgKyBpLFxuICAgICAgICAgICAgICAgIG9yZGVyOiBpLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGl0ZW1zLmFkZCh7XG4gICAgICAgICAgICAgICAgaWQ6IGksXG4gICAgICAgICAgICAgICAgZ3JvdXA6IGksXG4gICAgICAgICAgICAgICAgc3RhcnQ6IHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDogZW5kLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwicmFuZ2VcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIkl0ZW0gXCIgKyBpLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYSBUaW1lbGluZVxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9kb2NzX3Zpc3RpbWVsaW5lX2dyb3VwXCIpO1xuICAgICAgICB2YXIgdGltZWxpbmUgPSBuZXcgdmlzLlRpbWVsaW5lKGNvbnRhaW5lciwgaXRlbXMsIGdyb3Vwcywgb3B0aW9ucyk7XG4gICAgICAgIC8vdGltZWxpbmUgPSBuZXcgdmlzLlRpbWVsaW5lKGNvbnRhaW5lciwgbnVsbCwgb3B0aW9ucyk7XG4gICAgICAgIHRpbWVsaW5lLnNldEdyb3Vwcyhncm91cHMpO1xuICAgICAgICB0aW1lbGluZS5zZXRJdGVtcyhpdGVtcyk7XG5cbiAgICAgICAgZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCA9IDEwMCkge1xuICAgICAgICAgICAgbGV0IHRpbWVvdXQ7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0sIHdhaXQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBncm91cEZvY3VzID0gKGUpID0+IHtcbiAgICAgICAgICAgIGxldCB2R3JvdXBzID0gdGltZWxpbmUuZ2V0VmlzaWJsZUdyb3VwcygpO1xuICAgICAgICAgICAgbGV0IHZJdGVtcyA9IHZHcm91cHMucmVkdWNlKChyZXMsIGdyb3VwSWQpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZ3JvdXAgPSB0aW1lbGluZS5pdGVtU2V0Lmdyb3Vwc1tncm91cElkXTtcbiAgICAgICAgICAgICAgICBpZiAoZ3JvdXAuaXRlbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gcmVzLmNvbmNhdChPYmplY3Qua2V5cyhncm91cC5pdGVtcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICAgICAgdGltZWxpbmUuZm9jdXModkl0ZW1zKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGltZWxpbmUub24oXCJzY3JvbGxcIiwgZGVib3VuY2UoZ3JvdXBGb2N1cywgMjAwKSk7XG4gICAgICAgIC8vIEVuYWJsaW5nIHRoZSBuZXh0IGxpbmUgbGVhZHMgdG8gYSBjb250aW51b3VzIHNpbmNlIGNhbGxpbmcgZm9jdXMgbWlnaHQgc2Nyb2xsIHZlcnRpY2FsbHkgZXZlbiBpZiBpdCBzaG91bGRuJ3RcbiAgICAgICAgLy8gdGhpcy50aW1lbGluZS5vbihcInNjcm9sbFNpZGVcIiwgZGVib3VuY2UoZ3JvdXBGb2N1cywgMjAwKSkgICAgICAgIFxuXG4gICAgICAgIC8vIEhhbmRsZSBidXR0b24gY2xpY2tcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2t0X2RvY3NfdmlzdGltZWxpbmVfZ3JvdXBfYnV0dG9uJyk7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICB2YXIgYSA9IHRpbWVsaW5lLmdldFZpc2libGVHcm91cHMoKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidmlzaWJsZUdyb3Vwc0NvbnRhaW5lclwiKS5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ2aXNpYmxlR3JvdXBzQ29udGFpbmVyXCIpLmlubmVySFRNTCArPSBhO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVHcm91cCgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVmlzVGltZWxpbmVHcm91cC5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFZpc1RpbWVsaW5lR3JvdXAiLCJleGFtcGxlR3JvdXAiLCJub3ciLCJEYXRlIiwib3B0aW9ucyIsInN0YWNrIiwibWF4SGVpZ2h0IiwiaG9yaXpvbnRhbFNjcm9sbCIsInZlcnRpY2FsU2Nyb2xsIiwiem9vbUtleSIsInN0YXJ0IiwiZW5kIiwib3JpZW50YXRpb24iLCJheGlzIiwiaXRlbSIsImdyb3VwcyIsInZpcyIsIkRhdGFTZXQiLCJpdGVtcyIsImNvdW50IiwiaSIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImFkZCIsImlkIiwiY29udGVudCIsIm9yZGVyIiwiZ3JvdXAiLCJ0eXBlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJzZXRHcm91cHMiLCJzZXRJdGVtcyIsImRlYm91bmNlIiwiZnVuYyIsIndhaXQiLCJ0aW1lb3V0IiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJhcHBseSIsImdyb3VwRm9jdXMiLCJlIiwidkdyb3VwcyIsImdldFZpc2libGVHcm91cHMiLCJ2SXRlbXMiLCJyZWR1Y2UiLCJyZXMiLCJncm91cElkIiwiaXRlbVNldCIsImNvbmNhdCIsIk9iamVjdCIsImtleXMiLCJmb2N1cyIsIm9uIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwiYSIsImlubmVySFRNTCIsImluaXQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/group.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/group.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=group.js.map