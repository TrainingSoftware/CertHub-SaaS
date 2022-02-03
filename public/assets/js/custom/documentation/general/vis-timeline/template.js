/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!***********************************************************************!*\
  !*** ../src/js/custom/documentation/general/vis-timeline/template.js ***!
  \***********************************************************************/


// Class definition
var KTVisTimelineTemplate = function () {
    // Template data --- handlebars is used as the template for this demo. For more info: https://handlebarsjs.com/
    const data = `<table class="score">
        <tr>
            <td colspan="3" class="description">
                {{ description }}
            </td>
        </tr>
        <tr>
            <td>{{ player1 }}</td>
        <th>
            {{ score1 }} - {{ score2 }}
        </th>
            <td>{{ player2 }}</td>
        </tr>
        <tr>
            <td>
                <img
                src="https://flagpedia.net/data/flags/mini/{{abbr1}}.png"
                width="31"
                height="20"
                alt="{{abbr1}}"
                />
            </td>
        <th></th>
            <td>
                <img
                src="https://flagpedia.net/data/flags/mini/{{abbr2}}.png"
                width="31"
                height="20"
                alt="{{abbr2}}"
                />
            </td>
        </tr>
    </table>`;

    // Private functions
    var exampleTemplate = function () {
        // create a handlebars template --- For more info: https://handlebarsjs.com/
        var template = Handlebars.compile(data);

        // DOM element where the Timeline will be attached
        var container = document.getElementById("kt_docs_vistimeline_template");

        // Create a DataSet (allows two way data-binding)
        var items = new vis.DataSet([
            // round of 16
            {
                player1: "Brazil",
                abbr1: "br",
                score1: "1 (3)",
                player2: "Chile",
                abbr2: "cl",
                score2: "1 (2)",
                description: "round of 16",
                start: "2014-06-28T13:00:00",
            },
            {
                player1: "Colombia",
                abbr1: "co",
                score1: 2,
                player2: "Uruguay",
                abbr2: "uy",
                score2: 0,
                description: "round of 16",
                start: "2014-06-28T17:00:00",
            },
            {
                player1: "Netherlands",
                abbr1: "nl",
                score1: 2,
                player2: "Mexico",
                abbr2: "mx",
                score2: 1,
                description: "round of 16",
                start: "2014-06-29T13:00:00",
            },
            {
                player1: "Costa Rica",
                abbr1: "cr",
                score1: "1 (5)",
                player2: "Greece",
                abbr2: "gr",
                score2: "1 (3)",
                description: "round of 16",
                start: "2014-06-29T17:00:00",
            },
            {
                player1: "France",
                abbr1: "fr",
                score1: 2,
                player2: "Nigeria",
                abbr2: "ng",
                score2: 0,
                description: "round of 16",
                start: "2014-06-30T13:00:00",
            },
            {
                player1: "Germany",
                abbr1: "de",
                score1: 2,
                player2: "Algeria",
                abbr2: "dz",
                score2: 1,
                description: "round of 16",
                start: "2014-06-30T17:00:00",
            },
            {
                player1: "Argentina",
                abbr1: "ar",
                score1: 1,
                player2: "Switzerland",
                abbr2: "ch",
                score2: 0,
                description: "round of 16",
                start: "2014-07-01T13:00:00",
            },
            {
                player1: "Belgium",
                abbr1: "be",
                score1: 2,
                player2: "USA",
                abbr2: "us",
                score2: 1,
                description: "round of 16",
                start: "2014-07-01T17:00:00",
            },

            // quarter-finals
            {
                player1: "France",
                abbr1: "fr",
                score1: 0,
                player2: "Germany",
                abbr2: "de",
                score2: 1,
                description: "quarter-finals",
                start: "2014-07-04T13:00:00",
            },
            {
                player1: "Brazil",
                abbr1: "br",
                score1: 2,
                player2: "Colombia",
                abbr2: "co",
                score2: 1,
                description: "quarter-finals",
                start: "2014-07-04T17:00:00",
            },
            {
                player1: "Argentina",
                abbr1: "ar",
                score1: 1,
                player2: "Belgium",
                abbr2: "be",
                score2: 0,
                description: "quarter-finals",
                start: "2014-07-05T13:00:00",
            },
            {
                player1: "Netherlands",
                abbr1: "nl",
                score1: "0 (4)",
                player2: "Costa Rica",
                abbr2: "cr",
                score2: "0 (3)",
                description: "quarter-finals",
                start: "2014-07-05T17:00:00",
            },

            // semi-finals
            {
                player1: "Brazil",
                abbr1: "br",
                score1: 1,
                player2: "Germany",
                abbr2: "de",
                score2: 7,
                description: "semi-finals",
                start: "2014-07-08T17:00:00",
            },
            {
                player1: "Netherlands",
                abbr1: "nl",
                score1: "0 (2)",
                player2: "Argentina",
                abbr2: "ar",
                score2: "0 (4)",
                description: "semi-finals",
                start: "2014-07-09T17:00:00",
            },

            // final
            {
                player1: "Germany",
                score1: 1,
                abbr1: "de",
                player2: "Argentina",
                abbr2: "ar",
                score2: 0,
                description: "final",
                start: "2014-07-13T16:00:00",
            },
        ]);

        // Configuration for the Timeline
        var options = {
            // specify a template for the items
            template: template,
        };

        // Create a Timeline
        var timeline = new vis.Timeline(container, items, options);
    }

    return {
        // Public Functions
        init: function () {
            exampleTemplate();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTVisTimelineTemplate.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/vis-timeline/template.js":
/*!********************************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/vis-timeline/template.js ***!
  \********************************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTVisTimelineTemplate = function () {\n  // Template data --- handlebars is used as the template for this demo. For more info: https://handlebarsjs.com/\n  var data = \"<table class=\\\"score\\\">\\n        <tr>\\n            <td colspan=\\\"3\\\" class=\\\"description\\\">\\n                {{ description }}\\n            </td>\\n        </tr>\\n        <tr>\\n            <td>{{ player1 }}</td>\\n        <th>\\n            {{ score1 }} - {{ score2 }}\\n        </th>\\n            <td>{{ player2 }}</td>\\n        </tr>\\n        <tr>\\n            <td>\\n                <img\\n                src=\\\"https://flagpedia.net/data/flags/mini/{{abbr1}}.png\\\"\\n                width=\\\"31\\\"\\n                height=\\\"20\\\"\\n                alt=\\\"{{abbr1}}\\\"\\n                />\\n            </td>\\n        <th></th>\\n            <td>\\n                <img\\n                src=\\\"https://flagpedia.net/data/flags/mini/{{abbr2}}.png\\\"\\n                width=\\\"31\\\"\\n                height=\\\"20\\\"\\n                alt=\\\"{{abbr2}}\\\"\\n                />\\n            </td>\\n        </tr>\\n    </table>\"; // Private functions\n\n  var exampleTemplate = function exampleTemplate() {\n    // create a handlebars template --- For more info: https://handlebarsjs.com/\n    var template = Handlebars.compile(data); // DOM element where the Timeline will be attached\n\n    var container = document.getElementById(\"kt_docs_vistimeline_template\"); // Create a DataSet (allows two way data-binding)\n\n    var items = new vis.DataSet([// round of 16\n    {\n      player1: \"Brazil\",\n      abbr1: \"br\",\n      score1: \"1 (3)\",\n      player2: \"Chile\",\n      abbr2: \"cl\",\n      score2: \"1 (2)\",\n      description: \"round of 16\",\n      start: \"2014-06-28T13:00:00\"\n    }, {\n      player1: \"Colombia\",\n      abbr1: \"co\",\n      score1: 2,\n      player2: \"Uruguay\",\n      abbr2: \"uy\",\n      score2: 0,\n      description: \"round of 16\",\n      start: \"2014-06-28T17:00:00\"\n    }, {\n      player1: \"Netherlands\",\n      abbr1: \"nl\",\n      score1: 2,\n      player2: \"Mexico\",\n      abbr2: \"mx\",\n      score2: 1,\n      description: \"round of 16\",\n      start: \"2014-06-29T13:00:00\"\n    }, {\n      player1: \"Costa Rica\",\n      abbr1: \"cr\",\n      score1: \"1 (5)\",\n      player2: \"Greece\",\n      abbr2: \"gr\",\n      score2: \"1 (3)\",\n      description: \"round of 16\",\n      start: \"2014-06-29T17:00:00\"\n    }, {\n      player1: \"France\",\n      abbr1: \"fr\",\n      score1: 2,\n      player2: \"Nigeria\",\n      abbr2: \"ng\",\n      score2: 0,\n      description: \"round of 16\",\n      start: \"2014-06-30T13:00:00\"\n    }, {\n      player1: \"Germany\",\n      abbr1: \"de\",\n      score1: 2,\n      player2: \"Algeria\",\n      abbr2: \"dz\",\n      score2: 1,\n      description: \"round of 16\",\n      start: \"2014-06-30T17:00:00\"\n    }, {\n      player1: \"Argentina\",\n      abbr1: \"ar\",\n      score1: 1,\n      player2: \"Switzerland\",\n      abbr2: \"ch\",\n      score2: 0,\n      description: \"round of 16\",\n      start: \"2014-07-01T13:00:00\"\n    }, {\n      player1: \"Belgium\",\n      abbr1: \"be\",\n      score1: 2,\n      player2: \"USA\",\n      abbr2: \"us\",\n      score2: 1,\n      description: \"round of 16\",\n      start: \"2014-07-01T17:00:00\"\n    }, // quarter-finals\n    {\n      player1: \"France\",\n      abbr1: \"fr\",\n      score1: 0,\n      player2: \"Germany\",\n      abbr2: \"de\",\n      score2: 1,\n      description: \"quarter-finals\",\n      start: \"2014-07-04T13:00:00\"\n    }, {\n      player1: \"Brazil\",\n      abbr1: \"br\",\n      score1: 2,\n      player2: \"Colombia\",\n      abbr2: \"co\",\n      score2: 1,\n      description: \"quarter-finals\",\n      start: \"2014-07-04T17:00:00\"\n    }, {\n      player1: \"Argentina\",\n      abbr1: \"ar\",\n      score1: 1,\n      player2: \"Belgium\",\n      abbr2: \"be\",\n      score2: 0,\n      description: \"quarter-finals\",\n      start: \"2014-07-05T13:00:00\"\n    }, {\n      player1: \"Netherlands\",\n      abbr1: \"nl\",\n      score1: \"0 (4)\",\n      player2: \"Costa Rica\",\n      abbr2: \"cr\",\n      score2: \"0 (3)\",\n      description: \"quarter-finals\",\n      start: \"2014-07-05T17:00:00\"\n    }, // semi-finals\n    {\n      player1: \"Brazil\",\n      abbr1: \"br\",\n      score1: 1,\n      player2: \"Germany\",\n      abbr2: \"de\",\n      score2: 7,\n      description: \"semi-finals\",\n      start: \"2014-07-08T17:00:00\"\n    }, {\n      player1: \"Netherlands\",\n      abbr1: \"nl\",\n      score1: \"0 (2)\",\n      player2: \"Argentina\",\n      abbr2: \"ar\",\n      score2: \"0 (4)\",\n      description: \"semi-finals\",\n      start: \"2014-07-09T17:00:00\"\n    }, // final\n    {\n      player1: \"Germany\",\n      score1: 1,\n      abbr1: \"de\",\n      player2: \"Argentina\",\n      abbr2: \"ar\",\n      score2: 0,\n      description: \"final\",\n      start: \"2014-07-13T16:00:00\"\n    }]); // Configuration for the Timeline\n\n    var options = {\n      // specify a template for the items\n      template: template\n    }; // Create a Timeline\n\n    var timeline = new vis.Timeline(container, items, options);\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      exampleTemplate();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTVisTimelineTemplate.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdmlzLXRpbWVsaW5lL3RlbXBsYXRlLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLHFCQUFxQixHQUFHLFlBQVk7QUFDcEM7QUFDQSxNQUFNQyxJQUFJLHM0QkFBVixDQUZvQyxDQW9DcEM7O0FBQ0EsTUFBSUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFZO0FBQzlCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHQyxVQUFVLENBQUNDLE9BQVgsQ0FBbUJKLElBQW5CLENBQWYsQ0FGOEIsQ0FJOUI7O0FBQ0EsUUFBSUssU0FBUyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsOEJBQXhCLENBQWhCLENBTDhCLENBTzlCOztBQUNBLFFBQUlDLEtBQUssR0FBRyxJQUFJQyxHQUFHLENBQUNDLE9BQVIsQ0FBZ0IsQ0FDeEI7QUFDQTtBQUNJQyxNQUFBQSxPQUFPLEVBQUUsUUFEYjtBQUVJQyxNQUFBQSxLQUFLLEVBQUUsSUFGWDtBQUdJQyxNQUFBQSxNQUFNLEVBQUUsT0FIWjtBQUlJQyxNQUFBQSxPQUFPLEVBQUUsT0FKYjtBQUtJQyxNQUFBQSxLQUFLLEVBQUUsSUFMWDtBQU1JQyxNQUFBQSxNQUFNLEVBQUUsT0FOWjtBQU9JQyxNQUFBQSxXQUFXLEVBQUUsYUFQakI7QUFRSUMsTUFBQUEsS0FBSyxFQUFFO0FBUlgsS0FGd0IsRUFZeEI7QUFDSVAsTUFBQUEsT0FBTyxFQUFFLFVBRGI7QUFFSUMsTUFBQUEsS0FBSyxFQUFFLElBRlg7QUFHSUMsTUFBQUEsTUFBTSxFQUFFLENBSFo7QUFJSUMsTUFBQUEsT0FBTyxFQUFFLFNBSmI7QUFLSUMsTUFBQUEsS0FBSyxFQUFFLElBTFg7QUFNSUMsTUFBQUEsTUFBTSxFQUFFLENBTlo7QUFPSUMsTUFBQUEsV0FBVyxFQUFFLGFBUGpCO0FBUUlDLE1BQUFBLEtBQUssRUFBRTtBQVJYLEtBWndCLEVBc0J4QjtBQUNJUCxNQUFB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RSxPQU5aO0FBT0lDLE1BQUFBLFdBQVcsRUFBRSxhQVBqQjtBQVFJQyxNQUFBQSxLQUFLLEVBQUU7QUFSWCxLQXhJd0IsRUFtSnhCO0FBQ0E7QUFDSVAsTUFBQUEsT0FBTyxFQUFFLFNBRGI7QUFFSUUsTUFBQUEsTUFBTSxFQUFFLENBRlo7QUFHSUQsTUFBQUEsS0FBSyxFQUFFLElBSFg7QUFJSUUsTUFBQUEsT0FBTyxFQUFFLFdBSmI7QUFLSUMsTUFBQUEsS0FBSyxFQUFFLElBTFg7QUFNSUMsTUFBQUEsTUFBTSxFQUFFLENBTlo7QUFPSUMsTUFBQUEsV0FBVyxFQUFFLE9BUGpCO0FBUUlDLE1BQUFBLEtBQUssRUFBRTtBQVJYLEtBcEp3QixDQUFoQixDQUFaLENBUjhCLENBd0s5Qjs7QUFDQSxRQUFJQyxPQUFPLEdBQUc7QUFDVjtBQUNBakIsTUFBQUEsUUFBUSxFQUFFQTtBQUZBLEtBQWQsQ0F6SzhCLENBOEs5Qjs7QUFDQSxRQUFJa0IsUUFBUSxHQUFHLElBQUlYLEdBQUcsQ0FBQ1ksUUFBUixDQUFpQmhCLFNBQWpCLEVBQTRCRyxLQUE1QixFQUFtQ1csT0FBbkMsQ0FBZjtBQUNILEdBaExEOztBQWtMQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGdCQUFZO0FBQ2RyQixNQUFBQSxlQUFlO0FBQ2xCO0FBSkUsR0FBUDtBQU1ILENBN04yQixFQUE1QixDLENBK05BOzs7QUFDQXNCLE1BQU0sQ0FBQ0Msa0JBQVAsQ0FBMEIsWUFBWTtBQUNsQ3pCLEVBQUFBLHFCQUFxQixDQUFDdUIsSUFBdEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3Zpcy10aW1lbGluZS90ZW1wbGF0ZS5qcz8zOGU5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RWaXNUaW1lbGluZVRlbXBsYXRlID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRlbXBsYXRlIGRhdGEgLS0tIGhhbmRsZWJhcnMgaXMgdXNlZCBhcyB0aGUgdGVtcGxhdGUgZm9yIHRoaXMgZGVtby4gRm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL1xuICAgIGNvbnN0IGRhdGEgPSBgPHRhYmxlIGNsYXNzPVwic2NvcmVcIj5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIzXCIgY2xhc3M9XCJkZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgIHt7IGRlc2NyaXB0aW9uIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+e3sgcGxheWVyMSB9fTwvdGQ+XG4gICAgICAgIDx0aD5cbiAgICAgICAgICAgIHt7IHNjb3JlMSB9fSAtIHt7IHNjb3JlMiB9fVxuICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRkPnt7IHBsYXllcjIgfX08L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZmxhZ3BlZGlhLm5ldC9kYXRhL2ZsYWdzL21pbmkve3thYmJyMX19LnBuZ1wiXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIzMVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxuICAgICAgICAgICAgICAgIGFsdD1cInt7YWJicjF9fVwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2ZsYWdwZWRpYS5uZXQvZGF0YS9mbGFncy9taW5pL3t7YWJicjJ9fS5wbmdcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMzFcIlxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJ7e2FiYnIyfX1cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGFibGU+YDtcblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGV4YW1wbGVUZW1wbGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gY3JlYXRlIGEgaGFuZGxlYmFycyB0ZW1wbGF0ZSAtLS0gRm9yIG1vcmUgaW5mbzogaHR0cHM6Ly9oYW5kbGViYXJzanMuY29tL1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSBIYW5kbGViYXJzLmNvbXBpbGUoZGF0YSk7XG5cbiAgICAgICAgLy8gRE9NIGVsZW1lbnQgd2hlcmUgdGhlIFRpbWVsaW5lIHdpbGwgYmUgYXR0YWNoZWRcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia3RfZG9jc192aXN0aW1lbGluZV90ZW1wbGF0ZVwiKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBEYXRhU2V0IChhbGxvd3MgdHdvIHdheSBkYXRhLWJpbmRpbmcpXG4gICAgICAgIHZhciBpdGVtcyA9IG5ldyB2aXMuRGF0YVNldChbXG4gICAgICAgICAgICAvLyByb3VuZCBvZiAxNlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiQnJhemlsXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiYnJcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IFwiMSAoMylcIixcbiAgICAgICAgICAgICAgICBwbGF5ZXIyOiBcIkNoaWxlXCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwiY2xcIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IFwiMSAoMilcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJyb3VuZCBvZiAxNlwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDYtMjhUMTM6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJDb2xvbWJpYVwiLFxuICAgICAgICAgICAgICAgIGFiYnIxOiBcImNvXCIsXG4gICAgICAgICAgICAgICAgc2NvcmUxOiAyLFxuICAgICAgICAgICAgICAgIHBsYXllcjI6IFwiVXJ1Z3VheVwiLFxuICAgICAgICAgICAgICAgIGFiYnIyOiBcInV5XCIsXG4gICAgICAgICAgICAgICAgc2NvcmUyOiAwLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInJvdW5kIG9mIDE2XCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiMjAxNC0wNi0yOFQxNzowMDowMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxOiBcIk5ldGhlcmxhbmRzXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwibmxcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IDIsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJNZXhpY29cIixcbiAgICAgICAgICAgICAgICBhYmJyMjogXCJteFwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMjogMSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJyb3VuZCBvZiAxNlwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDYtMjlUMTM6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJDb3N0YSBSaWNhXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiY3JcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IFwiMSAoNSlcIixcbiAgICAgICAgICAgICAgICBwbGF5ZXIyOiBcIkdyZWVjZVwiLFxuICAgICAgICAgICAgICAgIGFiYnIyOiBcImdyXCIsXG4gICAgICAgICAgICAgICAgc2NvcmUyOiBcIjEgKDMpXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicm91bmQgb2YgMTZcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA2LTI5VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiRnJhbmNlXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiZnJcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IDIsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJOaWdlcmlhXCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwibmdcIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IDAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicm91bmQgb2YgMTZcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA2LTMwVDEzOjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiR2VybWFueVwiLFxuICAgICAgICAgICAgICAgIGFiYnIxOiBcImRlXCIsXG4gICAgICAgICAgICAgICAgc2NvcmUxOiAyLFxuICAgICAgICAgICAgICAgIHBsYXllcjI6IFwiQWxnZXJpYVwiLFxuICAgICAgICAgICAgICAgIGFiYnIyOiBcImR6XCIsXG4gICAgICAgICAgICAgICAgc2NvcmUyOiAxLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInJvdW5kIG9mIDE2XCIsXG4gICAgICAgICAgICAgICAgc3RhcnQ6IFwiMjAxNC0wNi0zMFQxNzowMDowMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwbGF5ZXIxOiBcIkFyZ2VudGluYVwiLFxuICAgICAgICAgICAgICAgIGFiYnIxOiBcImFyXCIsXG4gICAgICAgICAgICAgICAgc2NvcmUxOiAxLFxuICAgICAgICAgICAgICAgIHBsYXllcjI6IFwiU3dpdHplcmxhbmRcIixcbiAgICAgICAgICAgICAgICBhYmJyMjogXCJjaFwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMjogMCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJyb3VuZCBvZiAxNlwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDctMDFUMTM6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJCZWxnaXVtXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiYmVcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IDIsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJVU0FcIixcbiAgICAgICAgICAgICAgICBhYmJyMjogXCJ1c1wiLFxuICAgICAgICAgICAgICAgIHNjb3JlMjogMSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJyb3VuZCBvZiAxNlwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDctMDFUMTc6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIHF1YXJ0ZXItZmluYWxzXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJGcmFuY2VcIixcbiAgICAgICAgICAgICAgICBhYmJyMTogXCJmclwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMTogMCxcbiAgICAgICAgICAgICAgICBwbGF5ZXIyOiBcIkdlcm1hbnlcIixcbiAgICAgICAgICAgICAgICBhYmJyMjogXCJkZVwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMjogMSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJxdWFydGVyLWZpbmFsc1wiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDctMDRUMTM6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJCcmF6aWxcIixcbiAgICAgICAgICAgICAgICBhYmJyMTogXCJiclwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMTogMixcbiAgICAgICAgICAgICAgICBwbGF5ZXIyOiBcIkNvbG9tYmlhXCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwiY29cIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IDEsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicXVhcnRlci1maW5hbHNcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA3LTA0VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiQXJnZW50aW5hXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiYXJcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IDEsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJCZWxnaXVtXCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwiYmVcIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IDAsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicXVhcnRlci1maW5hbHNcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA3LTA1VDEzOjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiTmV0aGVybGFuZHNcIixcbiAgICAgICAgICAgICAgICBhYmJyMTogXCJubFwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMTogXCIwICg0KVwiLFxuICAgICAgICAgICAgICAgIHBsYXllcjI6IFwiQ29zdGEgUmljYVwiLFxuICAgICAgICAgICAgICAgIGFiYnIyOiBcImNyXCIsXG4gICAgICAgICAgICAgICAgc2NvcmUyOiBcIjAgKDMpXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwicXVhcnRlci1maW5hbHNcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA3LTA1VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBzZW1pLWZpbmFsc1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiQnJhemlsXCIsXG4gICAgICAgICAgICAgICAgYWJicjE6IFwiYnJcIixcbiAgICAgICAgICAgICAgICBzY29yZTE6IDEsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJHZXJtYW55XCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwiZGVcIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IDcsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwic2VtaS1maW5hbHNcIixcbiAgICAgICAgICAgICAgICBzdGFydDogXCIyMDE0LTA3LTA4VDE3OjAwOjAwXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBsYXllcjE6IFwiTmV0aGVybGFuZHNcIixcbiAgICAgICAgICAgICAgICBhYmJyMTogXCJubFwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMTogXCIwICgyKVwiLFxuICAgICAgICAgICAgICAgIHBsYXllcjI6IFwiQXJnZW50aW5hXCIsXG4gICAgICAgICAgICAgICAgYWJicjI6IFwiYXJcIixcbiAgICAgICAgICAgICAgICBzY29yZTI6IFwiMCAoNClcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJzZW1pLWZpbmFsc1wiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDctMDlUMTc6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIGZpbmFsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGxheWVyMTogXCJHZXJtYW55XCIsXG4gICAgICAgICAgICAgICAgc2NvcmUxOiAxLFxuICAgICAgICAgICAgICAgIGFiYnIxOiBcImRlXCIsXG4gICAgICAgICAgICAgICAgcGxheWVyMjogXCJBcmdlbnRpbmFcIixcbiAgICAgICAgICAgICAgICBhYmJyMjogXCJhclwiLFxuICAgICAgICAgICAgICAgIHNjb3JlMjogMCxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJmaW5hbFwiLFxuICAgICAgICAgICAgICAgIHN0YXJ0OiBcIjIwMTQtMDctMTNUMTY6MDA6MDBcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgIC8vIENvbmZpZ3VyYXRpb24gZm9yIHRoZSBUaW1lbGluZVxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIC8vIHNwZWNpZnkgYSB0ZW1wbGF0ZSBmb3IgdGhlIGl0ZW1zXG4gICAgICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGUsXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgVGltZWxpbmVcbiAgICAgICAgdmFyIHRpbWVsaW5lID0gbmV3IHZpcy5UaW1lbGluZShjb250YWluZXIsIGl0ZW1zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGV4YW1wbGVUZW1wbGF0ZSgpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUVmlzVGltZWxpbmVUZW1wbGF0ZS5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFZpc1RpbWVsaW5lVGVtcGxhdGUiLCJkYXRhIiwiZXhhbXBsZVRlbXBsYXRlIiwidGVtcGxhdGUiLCJIYW5kbGViYXJzIiwiY29tcGlsZSIsImNvbnRhaW5lciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJpdGVtcyIsInZpcyIsIkRhdGFTZXQiLCJwbGF5ZXIxIiwiYWJicjEiLCJzY29yZTEiLCJwbGF5ZXIyIiwiYWJicjIiLCJzY29yZTIiLCJkZXNjcmlwdGlvbiIsInN0YXJ0Iiwib3B0aW9ucyIsInRpbWVsaW5lIiwiVGltZWxpbmUiLCJpbml0IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/vis-timeline/template.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/vis-timeline/template.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=template.js.map