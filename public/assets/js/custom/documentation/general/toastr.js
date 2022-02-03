/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!********************************************************!*\
  !*** ../src/js/custom/documentation/general/toastr.js ***!
  \********************************************************/


// Class definition
var KTGeneralToastr = function() {
    // Private functions
    var example1 = function() {
        var i = -1;
        var toastCount = 0;
        var $toastlast;

        var getMessage = function () {
            var msgs = [
                'New order has been placed!',
                'Are you the six fingered man?',
                'Inconceivable!',
                'I do not think that means what you think it means.',
                'Have fun storming the castle!'
            ];
            i++;
            if (i === msgs.length) {
                i = 0;
            }

            return msgs[i];
        };

        var getMessageWithClearButton = function (msg) {
            msg = msg ? msg : 'Clear itself?';
            msg += '<br /><br /><button type="button" class="btn btn-outline-light btn-sm">Yes</button>';
            return msg;
        };

        $('#showtoast').on('click', function () {
            var shortCutFunction = $("#toastTypeGroup input:radio:checked").val();
            var msg = $('#message').val();
            var title = $('#title').val() || '';
            var $showDuration = $('#showDuration');
            var $hideDuration = $('#hideDuration');
            var $timeOut = $('#timeOut');
            var $extendedTimeOut = $('#extendedTimeOut');
            var $showEasing = $('#showEasing');
            var $hideEasing = $('#hideEasing');
            var $showMethod = $('#showMethod');
            var $hideMethod = $('#hideMethod');
            var toastIndex = toastCount++;
            var addClear = $('#addClear').prop('checked');

            toastr.options = {
                closeButton: $('#closeButton').prop('checked'),
                debug: $('#debugInfo').prop('checked'),
                newestOnTop: $('#newestOnTop').prop('checked'),
                progressBar: $('#progressBar').prop('checked'),
                positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',
                preventDuplicates: $('#preventDuplicates').prop('checked'),
                onclick: null
            };

            if ($('#addBehaviorOnToastClick').prop('checked')) {
                toastr.options.onclick = function () {
                    alert('You can perform some custom action after a toast goes away');
                };
            }

            if ($showDuration.val().length) {
                toastr.options.showDuration = $showDuration.val();
            }

            if ($hideDuration.val().length) {
                toastr.options.hideDuration = $hideDuration.val();
            }

            if ($timeOut.val().length) {
                toastr.options.timeOut = addClear ? 0 : $timeOut.val();
            }

            if ($extendedTimeOut.val().length) {
                toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();
            }

            if ($showEasing.val().length) {
                toastr.options.showEasing = $showEasing.val();
            }

            if ($hideEasing.val().length) {
                toastr.options.hideEasing = $hideEasing.val();
            }

            if ($showMethod.val().length) {
                toastr.options.showMethod = $showMethod.val();
            }

            if ($hideMethod.val().length) {
                toastr.options.hideMethod = $hideMethod.val();
            }

            if (addClear) {
                msg = getMessageWithClearButton(msg);
                toastr.options.tapToDismiss = false;
            }
            if (!msg) {
                msg = getMessage();
            }

            $('#toastrOptions').text(
                    'toastr.options = '
                    + JSON.stringify(toastr.options, null, 2)
                    + ';'
                    + '\n\ntoastr.'
                    + shortCutFunction
                    + '("'
                    + msg
                    + (title ? '", "' + title : '')
                    + '");'
            );

            var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists
            $toastlast = $toast;

            if(typeof $toast === 'undefined'){
                return;
            }

            if ($toast.find('#okBtn').length) {
                $toast.delegate('#okBtn', 'click', function () {
                    alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');
                    $toast.remove();
                });
            }
            if ($toast.find('#surpriseBtn').length) {
                $toast.delegate('#surpriseBtn', 'click', function () {
                    alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');
                });
            }
            if ($toast.find('.clear').length) {
                $toast.delegate('.clear', 'click', function () {
                    toastr.clear($toast, { force: true });
                });
            }
        });

        function getLastToast(){
            return $toastlast;
        }
        $('#clearlasttoast').on('click', function () {
            toastr.clear(getLastToast());
        });
        $('#cleartoasts').on('click', function () {
            toastr.clear();
        });
    }

    return {
        // Public Functions
        init: function() {
            example1();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTGeneralToastr.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/documentation/general/toastr.js":
/*!*****************************************************************!*\
  !*** ./resources/src/js/custom/documentation/general/toastr.js ***!
  \*****************************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTGeneralToastr = function () {\n  // Private functions\n  var example1 = function example1() {\n    var i = -1;\n    var toastCount = 0;\n    var $toastlast;\n\n    var getMessage = function getMessage() {\n      var msgs = ['New order has been placed!', 'Are you the six fingered man?', 'Inconceivable!', 'I do not think that means what you think it means.', 'Have fun storming the castle!'];\n      i++;\n\n      if (i === msgs.length) {\n        i = 0;\n      }\n\n      return msgs[i];\n    };\n\n    var getMessageWithClearButton = function getMessageWithClearButton(msg) {\n      msg = msg ? msg : 'Clear itself?';\n      msg += '<br /><br /><button type=\"button\" class=\"btn btn-outline-light btn-sm\">Yes</button>';\n      return msg;\n    };\n\n    $('#showtoast').on('click', function () {\n      var shortCutFunction = $(\"#toastTypeGroup input:radio:checked\").val();\n      var msg = $('#message').val();\n      var title = $('#title').val() || '';\n      var $showDuration = $('#showDuration');\n      var $hideDuration = $('#hideDuration');\n      var $timeOut = $('#timeOut');\n      var $extendedTimeOut = $('#extendedTimeOut');\n      var $showEasing = $('#showEasing');\n      var $hideEasing = $('#hideEasing');\n      var $showMethod = $('#showMethod');\n      var $hideMethod = $('#hideMethod');\n      var toastIndex = toastCount++;\n      var addClear = $('#addClear').prop('checked');\n      toastr.options = {\n        closeButton: $('#closeButton').prop('checked'),\n        debug: $('#debugInfo').prop('checked'),\n        newestOnTop: $('#newestOnTop').prop('checked'),\n        progressBar: $('#progressBar').prop('checked'),\n        positionClass: $('#positionGroup input:radio:checked').val() || 'toast-top-right',\n        preventDuplicates: $('#preventDuplicates').prop('checked'),\n        onclick: null\n      };\n\n      if ($('#addBehaviorOnToastClick').prop('checked')) {\n        toastr.options.onclick = function () {\n          alert('You can perform some custom action after a toast goes away');\n        };\n      }\n\n      if ($showDuration.val().length) {\n        toastr.options.showDuration = $showDuration.val();\n      }\n\n      if ($hideDuration.val().length) {\n        toastr.options.hideDuration = $hideDuration.val();\n      }\n\n      if ($timeOut.val().length) {\n        toastr.options.timeOut = addClear ? 0 : $timeOut.val();\n      }\n\n      if ($extendedTimeOut.val().length) {\n        toastr.options.extendedTimeOut = addClear ? 0 : $extendedTimeOut.val();\n      }\n\n      if ($showEasing.val().length) {\n        toastr.options.showEasing = $showEasing.val();\n      }\n\n      if ($hideEasing.val().length) {\n        toastr.options.hideEasing = $hideEasing.val();\n      }\n\n      if ($showMethod.val().length) {\n        toastr.options.showMethod = $showMethod.val();\n      }\n\n      if ($hideMethod.val().length) {\n        toastr.options.hideMethod = $hideMethod.val();\n      }\n\n      if (addClear) {\n        msg = getMessageWithClearButton(msg);\n        toastr.options.tapToDismiss = false;\n      }\n\n      if (!msg) {\n        msg = getMessage();\n      }\n\n      $('#toastrOptions').text('toastr.options = ' + JSON.stringify(toastr.options, null, 2) + ';' + '\\n\\ntoastr.' + shortCutFunction + '(\"' + msg + (title ? '\", \"' + title : '') + '\");');\n      var $toast = toastr[shortCutFunction](msg, title); // Wire up an event handler to a button in the toast, if it exists\n\n      $toastlast = $toast;\n\n      if (typeof $toast === 'undefined') {\n        return;\n      }\n\n      if ($toast.find('#okBtn').length) {\n        $toast.delegate('#okBtn', 'click', function () {\n          alert('you clicked me. i was toast #' + toastIndex + '. goodbye!');\n          $toast.remove();\n        });\n      }\n\n      if ($toast.find('#surpriseBtn').length) {\n        $toast.delegate('#surpriseBtn', 'click', function () {\n          alert('Surprise! you clicked me. i was toast #' + toastIndex + '. You could perform an action here.');\n        });\n      }\n\n      if ($toast.find('.clear').length) {\n        $toast.delegate('.clear', 'click', function () {\n          toastr.clear($toast, {\n            force: true\n          });\n        });\n      }\n    });\n\n    function getLastToast() {\n      return $toastlast;\n    }\n\n    $('#clearlasttoast').on('click', function () {\n      toastr.clear(getLastToast());\n    });\n    $('#cleartoasts').on('click', function () {\n      toastr.clear();\n    });\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      example1();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTGeneralToastr.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9kb2N1bWVudGF0aW9uL2dlbmVyYWwvdG9hc3RyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGVBQWUsR0FBRyxZQUFXO0FBQzdCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBVztBQUN0QixRQUFJQyxDQUFDLEdBQUcsQ0FBQyxDQUFUO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsUUFBSUMsVUFBSjs7QUFFQSxRQUFJQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFZO0FBQ3pCLFVBQUlDLElBQUksR0FBRyxDQUNQLDRCQURPLEVBRVAsK0JBRk8sRUFHUCxnQkFITyxFQUlQLG9EQUpPLEVBS1AsK0JBTE8sQ0FBWDtBQU9BSixNQUFBQSxDQUFDOztBQUNELFVBQUlBLENBQUMsS0FBS0ksSUFBSSxDQUFDQyxNQUFmLEVBQXVCO0FBQ25CTCxRQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUVELGFBQU9JLElBQUksQ0FBQ0osQ0FBRCxDQUFYO0FBQ0gsS0FkRDs7QUFnQkEsUUFBSU0seUJBQXlCLEdBQUcsU0FBNUJBLHlCQUE0QixDQUFVQyxHQUFWLEVBQWU7QUFDM0NBLE1BQUFBLEdBQUcsR0FBR0EsR0FBRyxHQUFHQSxHQUFILEdBQVMsZUFBbEI7QUFDQUEsTUFBQUEsR0FBRyxJQUFJLHFGQUFQO0FBQ0EsYUFBT0EsR0FBUDtBQUNILEtBSkQ7O0FBTUFDLElBQUFBLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JDLEVBQWhCLENBQW1CLE9BQW5CLEVBQTRCLFlBQVk7QUFDcEMsVUFBSUMsZ0JBQWdCLEdBQUdGLENBQUMsQ0FBQyxxQ0FBRCxDQUFELENBQXlDRyxHQUF6QyxFQUF2QjtBQUNBLFVBQUlKLEdBQUcsR0FBR0MsQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjRyxHQUFkLEVBQVY7QUFDQSxVQUFJQyxLQUFLLEdBQUdKLENBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUcsR0FBWixNQUFxQixFQUFqQztBQUNBLFVBQUlFLGFBQWEsR0FBR0wsQ0FBQyxDQUFDLGVBQUQsQ0FBckI7QUFDQSxVQUFJTSxhQUFhLEdBQUdOLENBQUMsQ0FBQyxlQUFELENBQXJCO0FBQ0EsVUFBSU8sUUFBUSxHQUFHUCxDQUFDLENBQUMsVUFBRCxDQUFoQjtBQUNBLFVBQUlRLGdCQUFnQixHQUFHUixDQUFDLENBQUMsa0JBQUQsQ0FBeEI7QUFDQSxVQUFJUyxXQUFXLEdBQUdULENBQUMsQ0FBQyxhQUFELENBQW5CO0FBQ0EsVUFBSVUsV0FBVyxHQUFHVixDQUFDLENBQUMsYUFBRCxDQUFuQjtBQUNBLFVBQUlXLFdBQVcsR0FBR1gsQ0FBQyxDQUFDLGFBQUQsQ0FBbkI7QUFDQSxVQUFJWSxXQUFXLEdBQUdaLENBQUMsQ0FBQyxhQUFELENBQW5CO0FBQ0EsVUFBSWEsVUFBVSxHQUFHcEIsVUFBVSxFQUEzQjtBQUNBLFVBQUlxQixRQUFRLEdBQUdkLENBQUMsQ0FBQyxXQUFELENBQUQsQ0FBZWUsSUFBZixDQUFvQixTQUFwQixDQUFmO0FBRUFDLE1BQUFBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxRQUFBQSxXQUFXLEVBQUVsQixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCZSxJQUFsQixDQUF1QixTQUF2QixDQURBO0FBRWJJLFFBQUFBLEtBQUssRUFBRW5CLENBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JlLElBQWhCLENBQXFCLFNBQXJCLENBRk07QUFHYkssUUFBQUEsV0FBVyxFQUFFcEIsQ0FBQyxDQUFDLGNBQUQsQ0FBRCxDQUFrQmUsSUFBbEIsQ0FBdUIsU0FBdkIsQ0FIQTtBQUliTSxRQUFBQSxXQUFXLEVBQUVyQixDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCZSxJQUFsQixDQUF1QixTQUF2QixDQUpBO0FBS2JPLFFBQUFBLGFBQWEsRUFBRXRCLENBQUMsQ0FBQyxvQ0FBRCxDQUFELENBQXdDRyxHQUF4QyxNQUFpRCxpQkFMbkQ7QUFNYm9CLFFBQUFBLGlCQUFpQixFQUFFdkIsQ0FBQyxDQUFDLG9CQUFELENBQUQsQ0FBd0JlLElBQXhCLENBQTZCLFNBQTdCLENBTk47QUFPYlMsUUFBQUEsT0FBTyxFQUFFO0FBUEksT0FBakI7O0FBVUEsVUFBSXhCLENBQUMsQ0FBQywwQkFBRCxDQUFELENBQThCZSxJQUE5QixDQUFtQyxTQUFuQyxDQUFKLEVBQW1EO0FBQy9DQyxRQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZU8sT0FBZixHQUF5QixZQUFZO0FBQ2pDQyxVQUFBQSxLQUFLLENBQUMsNERBQUQsQ0FBTDtBQUNILFNBRkQ7QUFHSDs7QUFFRCxVQUFJcEIsYUFBYSxDQUFDRixHQUFkLEdBQW9CTixNQUF4QixFQUFnQztBQUM1Qm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlUyxZQUFmLEdBQThCckIsYUFBYSxDQUFDRixHQUFkLEVBQTlCO0FBQ0g7O0FBRUQsVUFBSUcsYUFBYSxDQUFDSCxHQUFkLEdBQW9CTixNQUF4QixFQUFnQztBQUM1Qm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVSxZQUFmLEdBQThCckIsYUFBYSxDQUFDSCxHQUFkLEVBQTlCO0FBQ0g7O0FBRUQsVUFBSUksUUFBUSxDQUFDSixHQUFULEdBQWVOLE1BQW5CLEVBQTJCO0FBQ3ZCbUIsUUFBQUEsTUFBTSxDQUFDQyxPQUFQLENBQWVXLE9BQWYsR0FBeUJkLFFBQVEsR0FBRyxDQUFILEdBQU9QLFFBQVEsQ0FBQ0osR0FBVCxFQUF4QztBQUNIOztBQUVELFVBQUlLLGdCQUFnQixDQUFDTCxHQUFqQixHQUF1Qk4sTUFBM0IsRUFBbUM7QUFDL0JtQixRQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZVksZUFBZixHQUFpQ2YsUUFBUSxHQUFHLENBQUgsR0FBT04sZ0JBQWdCLENBQUNMLEdBQWpCLEVBQWhEO0FBQ0g7O0FBRUQsVUFBSU0sV0FBVyxDQUFDTixHQUFaLEdBQWtCTixNQUF0QixFQUE4QjtBQUMxQm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlYSxVQUFmLEdBQTRCckIsV0FBVyxDQUFDTixHQUFaLEVBQTVCO0FBQ0g7O0FBRUQsVUFBSU8sV0FBVyxDQUFDUCxHQUFaLEdBQWtCTixNQUF0QixFQUE4QjtBQUMxQm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlYyxVQUFmLEdBQTRCckIsV0FBVyxDQUFDUCxHQUFaLEVBQTVCO0FBQ0g7O0FBRUQsVUFBSVEsV0FBVyxDQUFDUixHQUFaLEdBQWtCTixNQUF0QixFQUE4QjtBQUMxQm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlZSxVQUFmLEdBQTRCckIsV0FBVyxDQUFDUixHQUFaLEVBQTVCO0FBQ0g7O0FBRUQsVUFBSVMsV0FBVyxDQUFDVCxHQUFaLEdBQWtCTixNQUF0QixFQUE4QjtBQUMxQm1CLFFBQUFBLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlZ0IsVUFBZixHQUE0QnJCLFdBQVcsQ0FBQ1QsR0FBWixFQUE1QjtBQUNIOztBQUVELFVBQUlXLFFBQUosRUFBYztBQUNWZixRQUFBQSxHQUFHLEdBQUdELHlCQUF5QixDQUFDQyxHQUFELENBQS9CO0FBQ0FpQixRQUFBQSxNQUFNLENBQUNDLE9BQVAsQ0FBZWlCLFlBQWYsR0FBOEIsS0FBOUI7QUFDSDs7QUFDRCxVQUFJLENBQUNuQyxHQUFMLEVBQVU7QUFDTkEsUUFBQUEsR0FBRyxHQUFHSixVQUFVLEVBQWhCO0FBQ0g7O0FBRURLLE1BQUFBLENBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CbUMsSUFBcEIsQ0FDUSxzQkFDRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVyQixNQUFNLENBQUNDLE9BQXRCLEVBQStCLElBQS9CLEVBQXFDLENBQXJDLENBREYsR0FFRSxHQUZGLEdBR0UsYUFIRixHQUlFZixnQkFKRixHQUtFLElBTEYsR0FNRUgsR0FORixJQU9HSyxLQUFLLEdBQUcsU0FBU0EsS0FBWixHQUFvQixFQVA1QixJQVFFLEtBVFY7QUFZQSxVQUFJa0MsTUFBTSxHQUFHdEIsTUFBTSxDQUFDZCxnQkFBRCxDQUFOLENBQXlCSCxHQUF6QixFQUE4QkssS0FBOUIsQ0FBYixDQW5Gb0MsQ0FtRmU7O0FBQ25EVixNQUFBQSxVQUFVLEdBQUc0QyxNQUFiOztBQUVBLFVBQUcsT0FBT0EsTUFBUCxLQUFrQixXQUFyQixFQUFpQztBQUM3QjtBQUNIOztBQUVELFVBQUlBLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVosRUFBc0IxQyxNQUExQixFQUFrQztBQUM5QnlDLFFBQUFBLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixRQUFoQixFQUEwQixPQUExQixFQUFtQyxZQUFZO0FBQzNDZixVQUFBQSxLQUFLLENBQUMsa0NBQWtDWixVQUFsQyxHQUErQyxZQUFoRCxDQUFMO0FBQ0F5QixVQUFBQSxNQUFNLENBQUNHLE1BQVA7QUFDSCxTQUhEO0FBSUg7O0FBQ0QsVUFBSUgsTUFBTSxDQUFDQyxJQUFQLENBQVksY0FBWixFQUE0QjFDLE1BQWhDLEVBQXdDO0FBQ3BDeUMsUUFBQUEsTUFBTSxDQUFDRSxRQUFQLENBQWdCLGNBQWhCLEVBQWdDLE9BQWhDLEVBQXlDLFlBQVk7QUFDakRmLFVBQUFBLEtBQUssQ0FBQyw0Q0FBNENaLFVBQTVDLEdBQXlELHFDQUExRCxDQUFMO0FBQ0gsU0FGRDtBQUdIOztBQUNELFVBQUl5QixNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXNCMUMsTUFBMUIsRUFBa0M7QUFDOUJ5QyxRQUFBQSxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsUUFBaEIsRUFBMEIsT0FBMUIsRUFBbUMsWUFBWTtBQUMzQ3hCLFVBQUFBLE1BQU0sQ0FBQzBCLEtBQVAsQ0FBYUosTUFBYixFQUFxQjtBQUFFSyxZQUFBQSxLQUFLLEVBQUU7QUFBVCxXQUFyQjtBQUNILFNBRkQ7QUFHSDtBQUNKLEtBMUdEOztBQTRHQSxhQUFTQyxZQUFULEdBQXVCO0FBQ25CLGFBQU9sRCxVQUFQO0FBQ0g7O0FBQ0RNLElBQUFBLENBQUMsQ0FBQyxpQkFBRCxDQUFELENBQXFCQyxFQUFyQixDQUF3QixPQUF4QixFQUFpQyxZQUFZO0FBQ3pDZSxNQUFBQSxNQUFNLENBQUMwQixLQUFQLENBQWFFLFlBQVksRUFBekI7QUFDSCxLQUZEO0FBR0E1QyxJQUFBQSxDQUFDLENBQUMsY0FBRCxDQUFELENBQWtCQyxFQUFsQixDQUFxQixPQUFyQixFQUE4QixZQUFZO0FBQ3RDZSxNQUFBQSxNQUFNLENBQUMwQixLQUFQO0FBQ0gsS0FGRDtBQUdILEdBaEpEOztBQWtKQSxTQUFPO0FBQ0g7QUFDQUcsSUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2J0RCxNQUFBQSxRQUFRO0FBQ1g7QUFKRSxHQUFQO0FBTUgsQ0ExSnFCLEVBQXRCLEMsQ0E0SkE7OztBQUNBdUQsTUFBTSxDQUFDQyxrQkFBUCxDQUEwQixZQUFXO0FBQ2pDekQsRUFBQUEsZUFBZSxDQUFDdUQsSUFBaEI7QUFDSCxDQUZEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL3NyYy9qcy9jdXN0b20vZG9jdW1lbnRhdGlvbi9nZW5lcmFsL3RvYXN0ci5qcz84ODM1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RHZW5lcmFsVG9hc3RyID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gUHJpdmF0ZSBmdW5jdGlvbnNcbiAgICB2YXIgZXhhbXBsZTEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGkgPSAtMTtcbiAgICAgICAgdmFyIHRvYXN0Q291bnQgPSAwO1xuICAgICAgICB2YXIgJHRvYXN0bGFzdDtcblxuICAgICAgICB2YXIgZ2V0TWVzc2FnZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBtc2dzID0gW1xuICAgICAgICAgICAgICAgICdOZXcgb3JkZXIgaGFzIGJlZW4gcGxhY2VkIScsXG4gICAgICAgICAgICAgICAgJ0FyZSB5b3UgdGhlIHNpeCBmaW5nZXJlZCBtYW4/JyxcbiAgICAgICAgICAgICAgICAnSW5jb25jZWl2YWJsZSEnLFxuICAgICAgICAgICAgICAgICdJIGRvIG5vdCB0aGluayB0aGF0IG1lYW5zIHdoYXQgeW91IHRoaW5rIGl0IG1lYW5zLicsXG4gICAgICAgICAgICAgICAgJ0hhdmUgZnVuIHN0b3JtaW5nIHRoZSBjYXN0bGUhJ1xuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIGlmIChpID09PSBtc2dzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGkgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbXNnc1tpXTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZ2V0TWVzc2FnZVdpdGhDbGVhckJ1dHRvbiA9IGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgICAgICAgIG1zZyA9IG1zZyA/IG1zZyA6ICdDbGVhciBpdHNlbGY/JztcbiAgICAgICAgICAgIG1zZyArPSAnPGJyIC8+PGJyIC8+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHQgYnRuLXNtXCI+WWVzPC9idXR0b24+JztcbiAgICAgICAgICAgIHJldHVybiBtc2c7XG4gICAgICAgIH07XG5cbiAgICAgICAgJCgnI3Nob3d0b2FzdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzaG9ydEN1dEZ1bmN0aW9uID0gJChcIiN0b2FzdFR5cGVHcm91cCBpbnB1dDpyYWRpbzpjaGVja2VkXCIpLnZhbCgpO1xuICAgICAgICAgICAgdmFyIG1zZyA9ICQoJyNtZXNzYWdlJykudmFsKCk7XG4gICAgICAgICAgICB2YXIgdGl0bGUgPSAkKCcjdGl0bGUnKS52YWwoKSB8fCAnJztcbiAgICAgICAgICAgIHZhciAkc2hvd0R1cmF0aW9uID0gJCgnI3Nob3dEdXJhdGlvbicpO1xuICAgICAgICAgICAgdmFyICRoaWRlRHVyYXRpb24gPSAkKCcjaGlkZUR1cmF0aW9uJyk7XG4gICAgICAgICAgICB2YXIgJHRpbWVPdXQgPSAkKCcjdGltZU91dCcpO1xuICAgICAgICAgICAgdmFyICRleHRlbmRlZFRpbWVPdXQgPSAkKCcjZXh0ZW5kZWRUaW1lT3V0Jyk7XG4gICAgICAgICAgICB2YXIgJHNob3dFYXNpbmcgPSAkKCcjc2hvd0Vhc2luZycpO1xuICAgICAgICAgICAgdmFyICRoaWRlRWFzaW5nID0gJCgnI2hpZGVFYXNpbmcnKTtcbiAgICAgICAgICAgIHZhciAkc2hvd01ldGhvZCA9ICQoJyNzaG93TWV0aG9kJyk7XG4gICAgICAgICAgICB2YXIgJGhpZGVNZXRob2QgPSAkKCcjaGlkZU1ldGhvZCcpO1xuICAgICAgICAgICAgdmFyIHRvYXN0SW5kZXggPSB0b2FzdENvdW50Kys7XG4gICAgICAgICAgICB2YXIgYWRkQ2xlYXIgPSAkKCcjYWRkQ2xlYXInKS5wcm9wKCdjaGVja2VkJyk7XG5cbiAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGNsb3NlQnV0dG9uOiAkKCcjY2xvc2VCdXR0b24nKS5wcm9wKCdjaGVja2VkJyksXG4gICAgICAgICAgICAgICAgZGVidWc6ICQoJyNkZWJ1Z0luZm8nKS5wcm9wKCdjaGVja2VkJyksXG4gICAgICAgICAgICAgICAgbmV3ZXN0T25Ub3A6ICQoJyNuZXdlc3RPblRvcCcpLnByb3AoJ2NoZWNrZWQnKSxcbiAgICAgICAgICAgICAgICBwcm9ncmVzc0JhcjogJCgnI3Byb2dyZXNzQmFyJykucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3M6ICQoJyNwb3NpdGlvbkdyb3VwIGlucHV0OnJhZGlvOmNoZWNrZWQnKS52YWwoKSB8fCAndG9hc3QtdG9wLXJpZ2h0JyxcbiAgICAgICAgICAgICAgICBwcmV2ZW50RHVwbGljYXRlczogJCgnI3ByZXZlbnREdXBsaWNhdGVzJykucHJvcCgnY2hlY2tlZCcpLFxuICAgICAgICAgICAgICAgIG9uY2xpY2s6IG51bGxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICgkKCcjYWRkQmVoYXZpb3JPblRvYXN0Q2xpY2snKS5wcm9wKCdjaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBhbGVydCgnWW91IGNhbiBwZXJmb3JtIHNvbWUgY3VzdG9tIGFjdGlvbiBhZnRlciBhIHRvYXN0IGdvZXMgYXdheScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkc2hvd0R1cmF0aW9uLnZhbCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zLnNob3dEdXJhdGlvbiA9ICRzaG93RHVyYXRpb24udmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkaGlkZUR1cmF0aW9uLnZhbCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zLmhpZGVEdXJhdGlvbiA9ICRoaWRlRHVyYXRpb24udmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdGltZU91dC52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy50aW1lT3V0ID0gYWRkQ2xlYXIgPyAwIDogJHRpbWVPdXQudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkZXh0ZW5kZWRUaW1lT3V0LnZhbCgpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5vcHRpb25zLmV4dGVuZGVkVGltZU91dCA9IGFkZENsZWFyID8gMCA6ICRleHRlbmRlZFRpbWVPdXQudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkc2hvd0Vhc2luZy52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5zaG93RWFzaW5nID0gJHNob3dFYXNpbmcudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkaGlkZUVhc2luZy52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5oaWRlRWFzaW5nID0gJGhpZGVFYXNpbmcudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkc2hvd01ldGhvZC52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5zaG93TWV0aG9kID0gJHNob3dNZXRob2QudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkaGlkZU1ldGhvZC52YWwoKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy5oaWRlTWV0aG9kID0gJGhpZGVNZXRob2QudmFsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChhZGRDbGVhcikge1xuICAgICAgICAgICAgICAgIG1zZyA9IGdldE1lc3NhZ2VXaXRoQ2xlYXJCdXR0b24obXNnKTtcbiAgICAgICAgICAgICAgICB0b2FzdHIub3B0aW9ucy50YXBUb0Rpc21pc3MgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbXNnKSB7XG4gICAgICAgICAgICAgICAgbXNnID0gZ2V0TWVzc2FnZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjdG9hc3RyT3B0aW9ucycpLnRleHQoXG4gICAgICAgICAgICAgICAgICAgICd0b2FzdHIub3B0aW9ucyA9ICdcbiAgICAgICAgICAgICAgICAgICAgKyBKU09OLnN0cmluZ2lmeSh0b2FzdHIub3B0aW9ucywgbnVsbCwgMilcbiAgICAgICAgICAgICAgICAgICAgKyAnOydcbiAgICAgICAgICAgICAgICAgICAgKyAnXFxuXFxudG9hc3RyLidcbiAgICAgICAgICAgICAgICAgICAgKyBzaG9ydEN1dEZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICAgICsgJyhcIidcbiAgICAgICAgICAgICAgICAgICAgKyBtc2dcbiAgICAgICAgICAgICAgICAgICAgKyAodGl0bGUgPyAnXCIsIFwiJyArIHRpdGxlIDogJycpXG4gICAgICAgICAgICAgICAgICAgICsgJ1wiKTsnXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB2YXIgJHRvYXN0ID0gdG9hc3RyW3Nob3J0Q3V0RnVuY3Rpb25dKG1zZywgdGl0bGUpOyAvLyBXaXJlIHVwIGFuIGV2ZW50IGhhbmRsZXIgdG8gYSBidXR0b24gaW4gdGhlIHRvYXN0LCBpZiBpdCBleGlzdHNcbiAgICAgICAgICAgICR0b2FzdGxhc3QgPSAkdG9hc3Q7XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZiAkdG9hc3QgPT09ICd1bmRlZmluZWQnKXtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkdG9hc3QuZmluZCgnI29rQnRuJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgJHRvYXN0LmRlbGVnYXRlKCcjb2tCdG4nLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsZXJ0KCd5b3UgY2xpY2tlZCBtZS4gaSB3YXMgdG9hc3QgIycgKyB0b2FzdEluZGV4ICsgJy4gZ29vZGJ5ZSEnKTtcbiAgICAgICAgICAgICAgICAgICAgJHRvYXN0LnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCR0b2FzdC5maW5kKCcjc3VycHJpc2VCdG4nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAkdG9hc3QuZGVsZWdhdGUoJyNzdXJwcmlzZUJ0bicsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoJ1N1cnByaXNlISB5b3UgY2xpY2tlZCBtZS4gaSB3YXMgdG9hc3QgIycgKyB0b2FzdEluZGV4ICsgJy4gWW91IGNvdWxkIHBlcmZvcm0gYW4gYWN0aW9uIGhlcmUuJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJHRvYXN0LmZpbmQoJy5jbGVhcicpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICR0b2FzdC5kZWxlZ2F0ZSgnLmNsZWFyJywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuY2xlYXIoJHRvYXN0LCB7IGZvcmNlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBnZXRMYXN0VG9hc3QoKXtcbiAgICAgICAgICAgIHJldHVybiAkdG9hc3RsYXN0O1xuICAgICAgICB9XG4gICAgICAgICQoJyNjbGVhcmxhc3R0b2FzdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRvYXN0ci5jbGVhcihnZXRMYXN0VG9hc3QoKSk7XG4gICAgICAgIH0pO1xuICAgICAgICAkKCcjY2xlYXJ0b2FzdHMnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0b2FzdHIuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gUHVibGljIEZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGV4YW1wbGUxKCk7XG4gICAgICAgIH1cbiAgICB9O1xufSgpO1xuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEdlbmVyYWxUb2FzdHIuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RHZW5lcmFsVG9hc3RyIiwiZXhhbXBsZTEiLCJpIiwidG9hc3RDb3VudCIsIiR0b2FzdGxhc3QiLCJnZXRNZXNzYWdlIiwibXNncyIsImxlbmd0aCIsImdldE1lc3NhZ2VXaXRoQ2xlYXJCdXR0b24iLCJtc2ciLCIkIiwib24iLCJzaG9ydEN1dEZ1bmN0aW9uIiwidmFsIiwidGl0bGUiLCIkc2hvd0R1cmF0aW9uIiwiJGhpZGVEdXJhdGlvbiIsIiR0aW1lT3V0IiwiJGV4dGVuZGVkVGltZU91dCIsIiRzaG93RWFzaW5nIiwiJGhpZGVFYXNpbmciLCIkc2hvd01ldGhvZCIsIiRoaWRlTWV0aG9kIiwidG9hc3RJbmRleCIsImFkZENsZWFyIiwicHJvcCIsInRvYXN0ciIsIm9wdGlvbnMiLCJjbG9zZUJ1dHRvbiIsImRlYnVnIiwibmV3ZXN0T25Ub3AiLCJwcm9ncmVzc0JhciIsInBvc2l0aW9uQ2xhc3MiLCJwcmV2ZW50RHVwbGljYXRlcyIsIm9uY2xpY2siLCJhbGVydCIsInNob3dEdXJhdGlvbiIsImhpZGVEdXJhdGlvbiIsInRpbWVPdXQiLCJleHRlbmRlZFRpbWVPdXQiLCJzaG93RWFzaW5nIiwiaGlkZUVhc2luZyIsInNob3dNZXRob2QiLCJoaWRlTWV0aG9kIiwidGFwVG9EaXNtaXNzIiwidGV4dCIsIkpTT04iLCJzdHJpbmdpZnkiLCIkdG9hc3QiLCJmaW5kIiwiZGVsZWdhdGUiLCJyZW1vdmUiLCJjbGVhciIsImZvcmNlIiwiZ2V0TGFzdFRvYXN0IiwiaW5pdCIsIktUVXRpbCIsIm9uRE9NQ29udGVudExvYWRlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/src/js/custom/documentation/general/toastr.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/documentation/general/toastr.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=toastr.js.map