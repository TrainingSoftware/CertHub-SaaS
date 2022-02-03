/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************************!*\
  !*** ../src/js/custom/documentation/general/vis-timeline/style.js ***!
  \********************************************************************/



// Class definition
var KTVisTimelineStyle = function () {
    // Private functions
    var exampleStyle = function () {
        var container = document.getElementById("kt_docs_vistimeline_style");

        // Generate HTML content
        const getContent = (title, img) => {
            const item = document.createElement('div');
            const name = document.createElement('div');
            const nameClasses = ['fw-bolder', 'mb-2'];
            name.classList.add(...nameClasses);
            name.innerHTML = title;

            const image = document.createElement('img');
            image.setAttribute('src', img);

            const symbol = document.createElement('div');
            const symbolClasses = ['symbol', 'symbol-circle', 'symbol-30'];
            symbol.classList.add(...symbolClasses);
            symbol.appendChild(image);

            item.appendChild(name);
            item.appendChild(symbol);

            return item;
        }

        // note that months are zero-based in the JavaScript Date object
        var items = new vis.DataSet([
            {
                start: new Date(2010, 7, 23),
                content: getContent('Conversation', hostUrl + '/media/avatars/150-1.jpg')
            },
            {
                start: new Date(2010, 7, 23, 23, 0, 0),
                content: getContent('Mail from boss', hostUrl + '/media/avatars/150-2.jpg')
            },
            { start: new Date(2010, 7, 24, 16, 0, 0), content: "Report" },
            {
                start: new Date(2010, 7, 26),
                end: new Date(2010, 8, 2),
                content: "Traject A",
            },
            {
                start: new Date(2010, 7, 28),
                content: getContent('Memo', hostUrl + '/media/avatars/150-3.jpg')
            },
            {
                start: new Date(2010, 7, 29),
                content: getContent('Phone call', hostUrl + '/media/avatars/150-4.jpg')
            },
            {
                start: new Date(2010, 7, 31),
                end: new Date(2010, 8, 3),
                content: "Traject B",
            },
            {
                start: new Date(2010, 8, 4, 12, 0, 0),
                content: getContent('Report', hostUrl + '/media/avatars/150-5.jpg')
            },
        ]);

        var options = {
            editable: true,
            margin: {
                item: 20,
                axis: 40,
            },
        };

        var timeline = new vis.Timeline(container, items, options);
    }

    return {
        // Public Functions
        init: function () {
            exampleStyle();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineStyle.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/style.js":
/*!*****************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/style.js ***!
  \*****************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineStyle = function () {\n  // Private functions\n  var exampleStyle = function exampleStyle() {\n    var container = document.getElementById(\"kt_docs_vistimeline_style\"); // Generate HTML content\n\n    var getContent = function getContent(title, img) {\n      var _name$classList, _symbol$classList;\n\n      var item = document.createElement('div');\n      var name = document.createElement('div');\n      var nameClasses = ['fw-bolder', 'mb-2'];\n\n      (_name$classList = name.classList).add.apply(_name$classList, nameClasses);\n\n      name.innerHTML = title;\n      var image = document.createElement('img');\n      image.setAttribute('src', img);\n      var symbol = document.createElement('div');\n      var symbolClasses = ['symbol', 'symbol-circle', 'symbol-30'];\n\n      (_symbol$classList = symbol.classList).add.apply(_symbol$classList, symbolClasses);\n\n      symbol.appendChild(image);\n      item.appendChild(name);\n      item.appendChild(symbol);\n      return item;\n    }; // note that months are zero-based in the JavaScript Date object\n\n\n    var items = new vis.DataSet([{\n      start: new Date(2010, 7, 23),\n      content: getContent('Conversation', hostUrl + '/media/avatars/150-1.jpg')\n    }, {\n      start: new Date(2010, 7, 23, 23, 0, 0),\n      content: getContent('Mail from boss', hostUrl + '/media/avatars/150-2.jpg')\n    }, {\n      start: new Date(2010, 7, 24, 16, 0, 0),\n      content: \"Report\"\n    }, {\n      start: new Date(2010, 7, 26),\n      end: new Date(2010, 8, 2),\n      content: \"Traject A\"\n    }, {\n      start: new Date(2010, 7, 28),\n      content: getContent('Memo', hostUrl + '/media/avatars/150-3.jpg')\n    }, {\n      start: new Date(2010, 7, 29),\n      content: getContent('Phone call', hostUrl + '/media/avatars/150-4.jpg')\n    }, {\n      start: new Date(2010, 7, 31),\n      end: new Date(2010, 8, 3),\n      content: \"Traject B\"\n    }, {\n      start: new Date(2010, 8, 4, 12, 0, 0),\n      content: getContent('Report', hostUrl + '/media/avatars/150-5.jpg')\n    }]);\n    var options = {\n      editable: true,\n      margin: {\n        item: 20,\n        axis: 40\n      }\n    };\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleStyle();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineStyle.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL3N0eWxlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUdBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVk7QUFDakM7QUFDQSxNQUFJQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFZO0FBQzNCLFFBQUlDLFNBQVMsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLDJCQUF4QixDQUFoQixDQUQyQixDQUczQjs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxLQUFELEVBQVFDLEdBQVIsRUFBZ0I7QUFBQTs7QUFDL0IsVUFBTUMsSUFBSSxHQUFHTCxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBYjtBQUNBLFVBQU1DLElBQUksR0FBR1AsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWI7QUFDQSxVQUFNRSxXQUFXLEdBQUcsQ0FBQyxXQUFELEVBQWMsTUFBZCxDQUFwQjs7QUFDQSx5QkFBQUQsSUFBSSxDQUFDRSxTQUFMLEVBQWVDLEdBQWYsd0JBQXNCRixXQUF0Qjs7QUFDQUQsTUFBQUEsSUFBSSxDQUFDSSxTQUFMLEdBQWlCUixLQUFqQjtBQUVBLFVBQU1TLEtBQUssR0FBR1osUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWQ7QUFDQU0sTUFBQUEsS0FBSyxDQUFDQyxZQUFOLENBQW1CLEtBQW5CLEVBQTBCVCxHQUExQjtBQUVBLFVBQU1VLE1BQU0sR0FBR2QsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQSxVQUFNUyxhQUFhLEdBQUcsQ0FBQyxRQUFELEVBQVcsZUFBWCxFQUE0QixXQUE1QixDQUF0Qjs7QUFDQSwyQkFBQUQsTUFBTSxDQUFDTCxTQUFQLEVBQWlCQyxHQUFqQiwwQkFBd0JLLGFBQXhCOztBQUNBRCxNQUFBQSxNQUFNLENBQUNFLFdBQVAsQ0FBbUJKLEtBQW5CO0FBRUFQ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WTtBQUNkakMsTUFBQUEsWUFBWTtBQUNmO0FBSkUsR0FBUDtBQU1ILENBL0V3QixFQUF6QixDLENBaUZBOzs7QUFDQWtDLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3BDLEVBQUFBLGtCQUFrQixDQUFDa0MsSUFBbkI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3Zpcy10aW1lbGluZS9zdHlsZS5qcz8yODA4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5cbi8vIENsYXNzIGRlZmluaXRpb25cbnZhciBLVFZpc1RpbWVsaW5lU3R5bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZVN0eWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrdF9kb2NzX3Zpc3RpbWVsaW5lX3N0eWxlXCIpO1xuXG4gICAgICAgIC8vIEdlbmVyYXRlIEhUTUwgY29udGVudFxuICAgICAgICBjb25zdCBnZXRDb250ZW50ID0gKHRpdGxlLCBpbWcpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNvbnN0IG5hbWVDbGFzc2VzID0gWydmdy1ib2xkZXInLCAnbWItMiddO1xuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKC4uLm5hbWVDbGFzc2VzKTtcbiAgICAgICAgICAgIG5hbWUuaW5uZXJIVE1MID0gdGl0bGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIGltZyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY29uc3Qgc3ltYm9sQ2xhc3NlcyA9IFsnc3ltYm9sJywgJ3N5bWJvbC1jaXJjbGUnLCAnc3ltYm9sLTMwJ107XG4gICAgICAgICAgICBzeW1ib2wuY2xhc3NMaXN0LmFkZCguLi5zeW1ib2xDbGFzc2VzKTtcbiAgICAgICAgICAgIHN5bWJvbC5hcHBlbmRDaGlsZChpbWFnZSk7XG5cbiAgICAgICAgICAgIGl0ZW0uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgICAgICAgICBpdGVtLmFwcGVuZENoaWxkKHN5bWJvbCk7XG5cbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm90ZSB0aGF0IG1vbnRocyBhcmUgemVyby1iYXNlZCBpbiB0aGUgSmF2YVNjcmlwdCBEYXRlIG9iamVjdFxuICAgICAgICB2YXIgaXRlbXMgPSBuZXcgdmlzLkRhdGFTZXQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyMyksXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnQ29udmVyc2F0aW9uJywgaG9zdFVybCArICcvbWVkaWEvYXZhdGFycy8xNTAtMS5qcGcnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMjMsIDIzLCAwLCAwKSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCdNYWlsIGZyb20gYm9zcycsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTIuanBnJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7IHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyNCwgMTYsIDAsIDApLCBjb250ZW50OiBcIlJlcG9ydFwiIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDI2KSxcbiAgICAgICAgICAgICAgICBlbmQ6IG5ldyBEYXRlKDIwMTAsIDgsIDIpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiVHJhamVjdCBBXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXJ0OiBuZXcgRGF0ZSgyMDEwLCA3LCAyOCksXG4gICAgICAgICAgICAgICAgY29udGVudDogZ2V0Q29udGVudCgnTWVtbycsIGhvc3RVcmwgKyAnL21lZGlhL2F2YXRhcnMvMTUwLTMuanBnJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDcsIDI5KSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCdQaG9uZSBjYWxsJywgaG9zdFVybCArICcvbWVkaWEvYXZhdGFycy8xNTAtNC5qcGcnKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGFydDogbmV3IERhdGUoMjAxMCwgNywgMzEpLFxuICAgICAgICAgICAgICAgIGVuZDogbmV3IERhdGUoMjAxMCwgOCwgMyksXG4gICAgICAgICAgICAgICAgY29udGVudDogXCJUcmFqZWN0IEJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhcnQ6IG5ldyBEYXRlKDIwMTAsIDgsIDQsIDEyLCAwLCAwKSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBnZXRDb250ZW50KCdSZXBvcnQnLCBob3N0VXJsICsgJy9tZWRpYS9hdmF0YXJzLzE1MC01LmpwZycpXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgbWFyZ2luOiB7XG4gICAgICAgICAgICAgICAgaXRlbTogMjAsXG4gICAgICAgICAgICAgICAgYXhpczogNDAsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciB0aW1lbGluZSA9IG5ldyB2aXMuVGltZWxpbmUoY29udGFpbmVyLCBpdGVtcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBleGFtcGxlU3R5bGUoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uICgpIHtcbiAgICBLVFZpc1RpbWVsaW5lU3R5bGUuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RWaXNUaW1lbGluZVN0eWxlIiwiZXhhbXBsZVN0eWxlIiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRlbnQiLCJ0aXRsZSIsImltZyIsIml0ZW0iLCJjcmVhdGVFbGVtZW50IiwibmFtZSIsIm5hbWVDbGFzc2VzIiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiaW1hZ2UiLCJzZXRBdHRyaWJ1dGUiLCJzeW1ib2wiLCJzeW1ib2xDbGFzc2VzIiwiYXBwZW5kQ2hpbGQiLCJpdGVtcyIsInZpcyIsIkRhdGFTZXQiLCJzdGFydCIsIkRhdGUiLCJjb250ZW50IiwiaG9zdFVybCIsImVuZCIsIm9wdGlvbnMiLCJlZGl0YWJsZSIsIm1hcmdpbiIsImF4aXMiLCJ0aW1lbGluZSIsIlRpbWVsaW5lIiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/style.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/style.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=style.js.map