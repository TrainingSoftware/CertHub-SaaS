/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!**********************************************************!*\
  !*** ../src/js/custom/documentation/forms/nouislider.js ***!
  \**********************************************************/


// Class definition
var KTFormsNouisliderDemos = function() {
    // Private functions
    var _exampleBasic = function() {
        var slider = document.querySelector("#kt_slider_basic");
        var valueMin = document.querySelector("#kt_slider_basic_min");
        var valueMax = document.querySelector("#kt_slider_basic_max");

        noUiSlider.create(slider, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        slider.noUiSlider.on("update", function (values, handle) {
            if (handle) {
                valueMax.innerHTML = values[handle];
            } else {
                valueMin.innerHTML = values[handle];
            }
        });
    }

    var _exampleSizes = function() {
        var slider1 = document.querySelector("#kt_slider_sizes_sm");
        var slider2 = document.querySelector("#kt_slider_sizes_default");
        var slider3 = document.querySelector("#kt_slider_sizes_lg");

        noUiSlider.create(slider1, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        noUiSlider.create(slider2, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });

        noUiSlider.create(slider3, {
            start: [20, 80],
            connect: true,
            range: {
                "min": 0,
                "max": 100
            }
        });
    }   

    var _exampleVertical = function() {
        var slider = document.querySelector("#kt_slider_vertical");

        noUiSlider.create(slider, {
            start: [60, 160],
            connect: true,
            orientation: "vertical",
            range: {
                "min": 0,
                "max": 200
            }
        });
    }

    var _exampleTooltip = function() {
        var slider = document.querySelector("#kt_slider_tooltip");

        noUiSlider.create(slider, {
            start: [20, 80, 120],
            tooltips: [false, wNumb({decimals: 1}), true],
            range: {
                "min": 0,
                "max": 200
            }
        });        
    }

    var _exampleSoftLimits = function() {
        var slider = document.querySelector("#kt_slider_soft_limits");

        noUiSlider.create(slider, {
            start: 50,
            range: {
                min: 0,
                max: 100
            },
            pips: {
                mode: "values",
                values: [20, 80],
                density: 4
            }
        });
    } 

    return {
        // Public Functions
        init: function(element) {
            _exampleBasic();
            _exampleSizes();
            _exampleVertical();
            _exampleTooltip();
            _exampleSoftLimits();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTFormsNouisliderDemos.init();
});
=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/forms/nouislider.js":
/*!*******************************************************************!*\
  !*** ./resources/src/js/custom/documentation/forms/nouislider.js ***!
  \*******************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTFormsNouisliderDemos = function () {\n  // Private functions\n  var _exampleBasic = function _exampleBasic() {\n    var slider = document.querySelector(\"#kt_slider_basic\");\n    var valueMin = document.querySelector(\"#kt_slider_basic_min\");\n    var valueMax = document.querySelector(\"#kt_slider_basic_max\");\n    noUiSlider.create(slider, {\n      start: [20, 80],\n      connect: true,\n      range: {\n        \"min\": 0,\n        \"max\": 100\n      }\n    });\n    slider.noUiSlider.on(\"update\", function (values, handle) {\n      if (handle) {\n        valueMax.innerHTML = values[handle];\n      } else {\n        valueMin.innerHTML = values[handle];\n      }\n    });\n  };\n\n  var _exampleSizes = function _exampleSizes() {\n    var slider1 = document.querySelector(\"#kt_slider_sizes_sm\");\n    var slider2 = document.querySelector(\"#kt_slider_sizes_default\");\n    var slider3 = document.querySelector(\"#kt_slider_sizes_lg\");\n    noUiSlider.create(slider1, {\n      start: [20, 80],\n      connect: true,\n      range: {\n        \"min\": 0,\n        \"max\": 100\n      }\n    });\n    noUiSlider.create(slider2, {\n      start: [20, 80],\n      connect: true,\n      range: {\n        \"min\": 0,\n        \"max\": 100\n      }\n    });\n    noUiSlider.create(slider3, {\n      start: [20, 80],\n      connect: true,\n      range: {\n        \"min\": 0,\n        \"max\": 100\n      }\n    });\n  };\n\n  var _exampleVertical = function _exampleVertical() {\n    var slider = document.querySelector(\"#kt_slider_vertical\");\n    noUiSlider.create(slider, {\n      start: [60, 160],\n      connect: true,\n      orientation: \"vertical\",\n      range: {\n        \"min\": 0,\n        \"max\": 200\n      }\n    });\n  };\n\n  var _exampleTooltip = function _exampleTooltip() {\n    var slider = document.querySelector(\"#kt_slider_tooltip\");\n    noUiSlider.create(slider, {\n      start: [20, 80, 120],\n      tooltips: [false, wNumb({\n        decimals: 1\n      }), true],\n      range: {\n        \"min\": 0,\n        \"max\": 200\n      }\n    });\n  };\n\n  var _exampleSoftLimits = function _exampleSoftLimits() {\n    var slider = document.querySelector(\"#kt_slider_soft_limits\");\n    noUiSlider.create(slider, {\n      start: 50,\n      range: {\n        min: 0,\n        max: 100\n      },\n      pips: {\n        mode: \"values\",\n        values: [20, 80],\n        density: 4\n      }\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init(element) {\n      _exampleBasic();\n\n      _exampleSizes();\n\n      _exampleVertical();\n\n      _exampleTooltip();\n\n      _exampleSoftLimits();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTFormsNouisliderDemos.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2Zvcm1zL25vdWlzbGlkZXIuanMuanMiLCJtYXBwaW5ncyI6IkNBRUE7O0FBQ0EsSUFBSUEsc0JBQXNCLEdBQUcsWUFBVztBQUNwQztBQUNBLE1BQUlDLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQixRQUFJQyxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBYjtBQUNBLFFBQUlDLFFBQVEsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLHNCQUF2QixDQUFmO0FBQ0EsUUFBSUUsUUFBUSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsc0JBQXZCLENBQWY7QUFFQUcsSUFBQUEsVUFBVSxDQUFDQyxNQUFYLENBQWtCTixNQUFsQixFQUEwQjtBQUN0Qk8sTUFBQUEsS0FBSyxFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FEZTtBQUV0QkMsTUFBQUEsT0FBTyxFQUFFLElBRmE7QUFHdEJDLE1BQUFBLEtBQUssRUFBRTtBQUNILGVBQU8sQ0FESjtBQUVILGVBQU87QUFGSjtBQUhlLEtBQTFCO0FBU0FULElBQUFBLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQkssRUFBbEIsQ0FBcUIsUUFBckIsRUFBK0IsVUFBVUMsTUFBVixFQUFrQkMsTUFBbEIsRUFBMEI7QUFDckQsVUFBSUEsTUFBSixFQUFZO0FBQ1JSLFFBQUFBLFFBQVEsQ0FBQ1MsU0FBVCxHQUFxQkYsTUFBTSxDQUFDQyxNQUFELENBQTNCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hULFFBQUFBLFFBQVEsQ0FBQ1UsU0FBVCxHQUFxQkYsTUFBTSxDQUFDQyxNQUFELENBQTNCO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FyQkQ7O0FBdUJBLE1BQUlFLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBVztBQUMzQixRQUFJQyxPQUFPLEdBQUdkLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixxQkFBdkIsQ0FBZDtBQUNB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OztBQWlCQSxTQUFPO0FBQ0g7QUFDQUMsSUFBQUEsSUFBSSxFQUFFLGNBQVNDLE9BQVQsRUFBa0I7QUFDcEJoQyxNQUFBQSxhQUFhOztBQUNiZSxNQUFBQSxhQUFhOztBQUNiSSxNQUFBQSxnQkFBZ0I7O0FBQ2hCRSxNQUFBQSxlQUFlOztBQUNmSSxNQUFBQSxrQkFBa0I7QUFDckI7QUFSRSxHQUFQO0FBVUgsQ0FoSDRCLEVBQTdCLEMsQ0FrSEE7OztBQUNBUSxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNuQyxFQUFBQSxzQkFBc0IsQ0FBQ2dDLElBQXZCO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2RvY3VtZW50YXRpb24vZm9ybXMvbm91aXNsaWRlci5qcz9jNDNlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RGb3Jtc05vdWlzbGlkZXJEZW1vcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIF9leGFtcGxlQmFzaWMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc2xpZGVyX2Jhc2ljXCIpO1xuICAgICAgICB2YXIgdmFsdWVNaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3NsaWRlcl9iYXNpY19taW5cIik7XG4gICAgICAgIHZhciB2YWx1ZU1heCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc2xpZGVyX2Jhc2ljX21heFwiKTtcblxuICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNsaWRlci5ub1VpU2xpZGVyLm9uKFwidXBkYXRlXCIsIGZ1bmN0aW9uICh2YWx1ZXMsIGhhbmRsZSkge1xuICAgICAgICAgICAgaWYgKGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHZhbHVlTWF4LmlubmVySFRNTCA9IHZhbHVlc1toYW5kbGVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YWx1ZU1pbi5pbm5lckhUTUwgPSB2YWx1ZXNbaGFuZGxlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF9leGFtcGxlU2l6ZXMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNsaWRlcjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3NsaWRlcl9zaXplc19zbVwiKTtcbiAgICAgICAgdmFyIHNsaWRlcjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3NsaWRlcl9zaXplc19kZWZhdWx0XCIpO1xuICAgICAgICB2YXIgc2xpZGVyMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc2xpZGVyX3NpemVzX2xnXCIpO1xuXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlcjEsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlcjIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlcjMsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbMjAsIDgwXSxcbiAgICAgICAgICAgIGNvbm5lY3Q6IHRydWUsXG4gICAgICAgICAgICByYW5nZToge1xuICAgICAgICAgICAgICAgIFwibWluXCI6IDAsXG4gICAgICAgICAgICAgICAgXCJtYXhcIjogMTAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0gICBcblxuICAgIHZhciBfZXhhbXBsZVZlcnRpY2FsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzbGlkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2t0X3NsaWRlcl92ZXJ0aWNhbFwiKTtcblxuICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbNjAsIDE2MF0sXG4gICAgICAgICAgICBjb25uZWN0OiB0cnVlLFxuICAgICAgICAgICAgb3JpZW50YXRpb246IFwidmVydGljYWxcIixcbiAgICAgICAgICAgIHJhbmdlOiB7XG4gICAgICAgICAgICAgICAgXCJtaW5cIjogMCxcbiAgICAgICAgICAgICAgICBcIm1heFwiOiAyMDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIF9leGFtcGxlVG9vbHRpcCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNrdF9zbGlkZXJfdG9vbHRpcFwiKTtcblxuICAgICAgICBub1VpU2xpZGVyLmNyZWF0ZShzbGlkZXIsIHtcbiAgICAgICAgICAgIHN0YXJ0OiBbMjAsIDgwLCAxMjBdLFxuICAgICAgICAgICAgdG9vbHRpcHM6IFtmYWxzZSwgd051bWIoe2RlY2ltYWxzOiAxfSksIHRydWVdLFxuICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBcIm1pblwiOiAwLFxuICAgICAgICAgICAgICAgIFwibWF4XCI6IDIwMFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICAgICAgIFxuICAgIH1cblxuICAgIHZhciBfZXhhbXBsZVNvZnRMaW1pdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIja3Rfc2xpZGVyX3NvZnRfbGltaXRzXCIpO1xuXG4gICAgICAgIG5vVWlTbGlkZXIuY3JlYXRlKHNsaWRlciwge1xuICAgICAgICAgICAgc3RhcnQ6IDUwLFxuICAgICAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICAgICAgbWF4OiAxMDBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaXBzOiB7XG4gICAgICAgICAgICAgICAgbW9kZTogXCJ2YWx1ZXNcIixcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFsyMCwgODBdLFxuICAgICAgICAgICAgICAgIGRlbnNpdHk6IDRcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSBcblxuICAgIHJldHVybiB7XG4gICAgICAgIC8vIFB1YmxpYyBGdW5jdGlvbnNcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgX2V4YW1wbGVCYXNpYygpO1xuICAgICAgICAgICAgX2V4YW1wbGVTaXplcygpO1xuICAgICAgICAgICAgX2V4YW1wbGVWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgX2V4YW1wbGVUb29sdGlwKCk7XG4gICAgICAgICAgICBfZXhhbXBsZVNvZnRMaW1pdHMoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtURm9ybXNOb3Vpc2xpZGVyRGVtb3MuaW5pdCgpO1xufSk7Il0sIm5hbWVzIjpbIktURm9ybXNOb3Vpc2xpZGVyRGVtb3MiLCJfZXhhbXBsZUJhc2ljIiwic2xpZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidmFsdWVNaW4iLCJ2YWx1ZU1heCIsIm5vVWlTbGlkZXIiLCJjcmVhdGUiLCJzdGFydCIsImNvbm5lY3QiLCJyYW5nZSIsIm9uIiwidmFsdWVzIiwiaGFuZGxlIiwiaW5uZXJIVE1MIiwiX2V4YW1wbGVTaXplcyIsInNsaWRlcjEiLCJzbGlkZXIyIiwic2xpZGVyMyIsIl9leGFtcGxlVmVydGljYWwiLCJvcmllbnRhdGlvbiIsIl9leGFtcGxlVG9vbHRpcCIsInRvb2x0aXBzIiwid051bWIiLCJkZWNpbWFscyIsIl9leGFtcGxlU29mdExpbWl0cyIsIm1pbiIsIm1heCIsInBpcHMiLCJtb2RlIiwiZGVuc2l0eSIsImluaXQiLCJlbGVtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/forms/nouislider.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/forms/nouislider.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=nouislider.js.map