/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../../../themes/metronic/html/demo10/src/js/custom/intro.js":
/*!*******************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/intro.js ***!
  \*******************************************************************/
/***/ ((module) => {

<<<<<<< Updated upstream


// Class definition
var KTIntro = function () {
    // Private functions
    var handleIntro = function(id, calback, timeout) {
        var date = new Date();

        var currentTime = date.getTime();

        var time2days = 1000 * 60 * 60 * 24 * 2; // 2 days
        var time7days = 1000 * 60 * 60 * 24 * 7; // 7 days
        var time15days = 1000 * 60 * 60 * 24 * 15; // 15 days
        var time21days = 1000 * 60 * 60 * 24 * 21; // 21 days
        var time30days = 1000 * 60 * 60 * 24 * 30; // 30 days        

        if (!KTCookie.get(id + '_counter') || parseInt(KTCookie.get(id + '_counter')) < 3) {
            // Initial display
            if (!KTCookie.get(id + '_counter')) {
                setTimeout(calback, timeout); // Display intro in 5 seconds
                
                KTCookie.set(id + '_show_1', '1', {expires: new Date(date.getTime() + time2days)});

                KTCookie.set(id + '_counter', '1', {expires: new Date(date.getTime() + time30days)});

                return true;
            } 

            // 2 display
            if (KTCookie.get(id + '_counter') == '1' && !KTCookie.get(id + '_show_1')) {
                setTimeout(calback, timeout); // Display intro in 5 seconds
                
                KTCookie.set(id + '_show_2', '1', {expires: new Date(date.getTime() + time7days)});
                
                KTCookie.set(id + '_counter', '2', {expires: new Date(date.getTime() + time21days)});

                return true;
            }

            // 3 display
            if (KTCookie.get(id + '_counter') == '2' && !KTCookie.get(id + '_show_2')) {
                setTimeout(calback, timeout); // Display intro in 5 seconds
                
                KTCookie.set(id + '_show_3', '1', {expires: new Date(date.getTime() + time15days)});
                
                KTCookie.set(id + '_counter', '3', {expires: new Date(date.getTime() + time15days)});

                return true;
            }

            return false;
        }
    }

    var showtIntro1 = function() {
        var element = document.querySelector('#kt_header_search_toggle');

        if (!element) {
            return;
        }

        var options = {
            customClass: 'popover-dark',
            container: 'body',
            trigger: 'manual',
            boundary: 'window',
            placement: 'left',
            dismiss: true,
            html: true,
            title: 'Quick Search',
            content: 'Fully functional search with advance options and preferences setup'
        }

        // Initialize popover
        var popover = KTApp.initBootstrapPopover(element, options);
        popover.show();

        // Auto remove
        setTimeout(function() {
            if (popover) {
                popover.dispose();
            } 
        }, 1000 * 10); // 10 seconds

        // Hide popover on element click
        element.addEventListener("click", function(e) {
            popover.dispose();
        });
    }

    var showtIntro2 = function() {
        var element = document.querySelector('#kt_toolbar_primary_button');

        if (!element) {
            return;
        }

        var options = {
            customClass: 'popover-dark',
            container: 'body',
            boundary: 'window',
            trigger: 'manual',
            placement: 'left',
            dismiss: true,
            html: true,
            title: 'Quick Notifications',
            content: 'Seamless access to updates and notifications in various formats'
        }

        // Initialize popover
        var popover = KTApp.initBootstrapPopover(element, options);
        popover.show();

        // Remove
        setTimeout(function() {
            if (popover) {
                popover.dispose();
            } 
        }, 1000 * 10); // 10 seconds

        // Hide popover on element click
        element.addEventListener("click", function(e) {
            popover.dispose();
        });
    }

    var showtIntro3 = function() {
        var element = document.querySelector('#kt_header_user_menu_toggle');

        if (!element) {
            return;
        }

        var options = {
            customClass: 'popover-dark',
            container: 'body',
            boundary: 'window',
            placement: 'left',
            trigger: 'manual',
            dismiss: true,
            html: true,
            title: 'Advanced User Menu',
            content: 'With quick links to user profile and account settings pages'
        }

        // Initialize popover
        var popover = KTApp.initBootstrapPopover(element, options);
        popover.show();

        // Remove
        setTimeout(function() {
            if (popover) {
                popover.dispose();
            } 
        }, 1000 * 10); // 10 seconds

        // Hide popover on element click
        element.addEventListener("click", function(e) {
            popover.dispose();
        });
    }

    var initIntro = function(product) {
        // Handle intro popovers displays
        if (KTUtil.inIframe() === false) {                
            if (handleIntro('kt_' + product + '_intro_1', showtIntro1, 1000 * 5)) {
            } else if (handleIntro('kt_' + product + '_intro_2', showtIntro2, 1000 * 5)) {
            } else if (handleIntro('kt_' + product + '_intro_3', showtIntro3, 1000 * 5)) {
            }
        } 
    }

    // Public methods
    return {
        init: function () {
            initIntro('metronic');
        }   
    }
}();

// Webpack support
if (true) {
    module.exports = KTIntro;
}

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTIntro.init();
});

=======
eval(" // Class definition\n\nvar KTIntro = function () {\n  // Private functions\n  var handleIntro = function handleIntro(id, calback, timeout) {\n    var date = new Date();\n    var currentTime = date.getTime();\n    var time2days = 1000 * 60 * 60 * 24 * 2; // 2 days\n\n    var time7days = 1000 * 60 * 60 * 24 * 7; // 7 days\n\n    var time15days = 1000 * 60 * 60 * 24 * 15; // 15 days\n\n    var time21days = 1000 * 60 * 60 * 24 * 21; // 21 days\n\n    var time30days = 1000 * 60 * 60 * 24 * 30; // 30 days        \n\n    if (!KTCookie.get(id + '_counter') || parseInt(KTCookie.get(id + '_counter')) < 3) {\n      // Initial display\n      if (!KTCookie.get(id + '_counter')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_1', '1', {\n          expires: new Date(date.getTime() + time2days)\n        });\n        KTCookie.set(id + '_counter', '1', {\n          expires: new Date(date.getTime() + time30days)\n        });\n        return true;\n      } // 2 display\n\n\n      if (KTCookie.get(id + '_counter') == '1' && !KTCookie.get(id + '_show_1')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_2', '1', {\n          expires: new Date(date.getTime() + time7days)\n        });\n        KTCookie.set(id + '_counter', '2', {\n          expires: new Date(date.getTime() + time21days)\n        });\n        return true;\n      } // 3 display\n\n\n      if (KTCookie.get(id + '_counter') == '2' && !KTCookie.get(id + '_show_2')) {\n        setTimeout(calback, timeout); // Display intro in 5 seconds\n\n        KTCookie.set(id + '_show_3', '1', {\n          expires: new Date(date.getTime() + time15days)\n        });\n        KTCookie.set(id + '_counter', '3', {\n          expires: new Date(date.getTime() + time15days)\n        });\n        return true;\n      }\n\n      return false;\n    }\n  };\n\n  var showtIntro1 = function showtIntro1() {\n    var element = document.querySelector('#kt_header_search_toggle');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      trigger: 'manual',\n      boundary: 'window',\n      placement: 'left',\n      dismiss: true,\n      html: true,\n      title: 'Quick Search',\n      content: 'Fully functional search with advance options and preferences setup'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Auto remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var showtIntro2 = function showtIntro2() {\n    var element = document.querySelector('#kt_toolbar_primary_button');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      boundary: 'window',\n      trigger: 'manual',\n      placement: 'left',\n      dismiss: true,\n      html: true,\n      title: 'Quick Notifications',\n      content: 'Seamless access to updates and notifications in various formats'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var showtIntro3 = function showtIntro3() {\n    var element = document.querySelector('#kt_header_user_menu_toggle');\n\n    if (!element) {\n      return;\n    }\n\n    var options = {\n      customClass: 'popover-dark',\n      container: 'body',\n      boundary: 'window',\n      placement: 'left',\n      trigger: 'manual',\n      dismiss: true,\n      html: true,\n      title: 'Advanced User Menu',\n      content: 'With quick links to user profile and account settings pages'\n    }; // Initialize popover\n\n    var popover = KTApp.initBootstrapPopover(element, options);\n    popover.show(); // Remove\n\n    setTimeout(function () {\n      if (popover) {\n        popover.dispose();\n      }\n    }, 1000 * 10); // 10 seconds\n    // Hide popover on element click\n\n    element.addEventListener(\"click\", function (e) {\n      popover.dispose();\n    });\n  };\n\n  var initIntro = function initIntro(product) {\n    // Handle intro popovers displays\n    if (KTUtil.inIframe() === false) {\n      if (handleIntro('kt_' + product + '_intro_1', showtIntro1, 1000 * 5)) {} else if (handleIntro('kt_' + product + '_intro_2', showtIntro2, 1000 * 5)) {} else if (handleIntro('kt_' + product + '_intro_3', showtIntro3, 1000 * 5)) {}\n    }\n  }; // Public methods\n\n\n  return {\n    init: function init() {\n      initIntro('metronic');\n    }\n  };\n}(); // Webpack support\n\n\nif (true) {\n  module.exports = KTIntro;\n} // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTIntro.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9pbnRyby5qcy5qcyIsIm1hcHBpbmdzIjoiQ0FFQTs7QUFDQSxJQUFJQSxPQUFPLEdBQUcsWUFBWTtBQUN0QjtBQUNBLE1BQUlDLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVNDLEVBQVQsRUFBYUMsT0FBYixFQUFzQkMsT0FBdEIsRUFBK0I7QUFDN0MsUUFBSUMsSUFBSSxHQUFHLElBQUlDLElBQUosRUFBWDtBQUVBLFFBQUlDLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxPQUFMLEVBQWxCO0FBRUEsUUFBSUMsU0FBUyxHQUFHLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsQ0FBdEMsQ0FMNkMsQ0FLSjs7QUFDekMsUUFBSUMsU0FBUyxHQUFHLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsQ0FBdEMsQ0FONkMsQ0FNSjs7QUFDekMsUUFBSUMsVUFBVSxHQUFHLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsRUFBdkMsQ0FQNkMsQ0FPRjs7QUFDM0MsUUFBSUMsVUFBVSxHQUFHLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsRUFBdkMsQ0FSNkMsQ0FRRjs7QUFDM0MsUUFBSUMsVUFBVSxHQUFHLE9BQU8sRUFBUCxHQUFZLEVBQVosR0FBaUIsRUFBakIsR0FBc0IsRUFBdkMsQ0FUNkMsQ0FTRjs7QUFFM0MsUUFBSSxDQUFDQyxRQUFRLENBQUNDLEdBQVQsQ0FBYWIsRUFBRSxHQUFHLFVBQWxCLENBQUQsSUFBa0NjLFFBQVEsQ0FBQ0YsUUFBUSxDQUFDQyxHQUFULENBQWFiLEVBQUUsR0FBRyxVQUFsQixDQUFELENBQVIsR0FBMEMsQ0FBaEYsRUFBbUY7QUFDL0U7QUFDQSxVQUFJLENBQUNZLFFBQVEsQ0FBQ0MsR0FBVCxDQUFhYixFQUFFLEdBQUcsVUFBbEIsQ0FBTCxFQUFvQztBQUNoQ2UsUUFBQUEsVUFBVSxDQUFDZCxPQUFELEVB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InNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vLyBDbGFzcyBkZWZpbml0aW9uXG52YXIgS1RJbnRybyA9IGZ1bmN0aW9uICgpIHtcbiAgICAvLyBQcml2YXRlIGZ1bmN0aW9uc1xuICAgIHZhciBoYW5kbGVJbnRybyA9IGZ1bmN0aW9uKGlkLCBjYWxiYWNrLCB0aW1lb3V0KSB7XG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcblxuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBkYXRlLmdldFRpbWUoKTtcblxuICAgICAgICB2YXIgdGltZTJkYXlzID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDI7IC8vIDIgZGF5c1xuICAgICAgICB2YXIgdGltZTdkYXlzID0gMTAwMCAqIDYwICogNjAgKiAyNCAqIDc7IC8vIDcgZGF5c1xuICAgICAgICB2YXIgdGltZTE1ZGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAxNTsgLy8gMTUgZGF5c1xuICAgICAgICB2YXIgdGltZTIxZGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAyMTsgLy8gMjEgZGF5c1xuICAgICAgICB2YXIgdGltZTMwZGF5cyA9IDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMDsgLy8gMzAgZGF5cyAgICAgICAgXG5cbiAgICAgICAgaWYgKCFLVENvb2tpZS5nZXQoaWQgKyAnX2NvdW50ZXInKSB8fCBwYXJzZUludChLVENvb2tpZS5nZXQoaWQgKyAnX2NvdW50ZXInKSkgPCAzKSB7XG4gICAgICAgICAgICAvLyBJbml0aWFsIGRpc3BsYXlcbiAgICAgICAgICAgIGlmICghS1RDb29raWUuZ2V0KGlkICsgJ19jb3VudGVyJykpIHtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGNhbGJhY2ssIHRpbWVvdXQpOyAvLyBEaXNwbGF5IGludHJvIGluIDUgc2Vjb25kc1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIEtUQ29va2llLnNldChpZCArICdfc2hvd18xJywgJzEnLCB7ZXhwaXJlczogbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkgKyB0aW1lMmRheXMpfSk7XG5cbiAgICAgICAgICAgICAgICBLVENvb2tpZS5zZXQoaWQgKyAnX2NvdW50ZXInLCAnMScsIHtleHBpcmVzOiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWUzMGRheXMpfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIC8vIDIgZGlzcGxheVxuICAgICAgICAgICAgaWYgKEtUQ29va2llLmdldChpZCArICdfY291bnRlcicpID09ICcxJyAmJiAhS1RDb29raWUuZ2V0KGlkICsgJ19zaG93XzEnKSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoY2FsYmFjaywgdGltZW91dCk7IC8vIERpc3BsYXkgaW50cm8gaW4gNSBzZWNvbmRzXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgS1RDb29raWUuc2V0KGlkICsgJ19zaG93XzInLCAnMScsIHtleHBpcmVzOiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWU3ZGF5cyl9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBLVENvb2tpZS5zZXQoaWQgKyAnX2NvdW50ZXInLCAnMicsIHtleHBpcmVzOiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWUyMWRheXMpfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gMyBkaXNwbGF5XG4gICAgICAgICAgICBpZiAoS1RDb29raWUuZ2V0KGlkICsgJ19jb3VudGVyJykgPT0gJzInICYmICFLVENvb2tpZS5nZXQoaWQgKyAnX3Nob3dfMicpKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChjYWxiYWNrLCB0aW1lb3V0KTsgLy8gRGlzcGxheSBpbnRybyBpbiA1IHNlY29uZHNcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBLVENvb2tpZS5zZXQoaWQgKyAnX3Nob3dfMycsICcxJywge2V4cGlyZXM6IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgdGltZTE1ZGF5cyl9KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBLVENvb2tpZS5zZXQoaWQgKyAnX2NvdW50ZXInLCAnMycsIHtleHBpcmVzOiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWUxNWRheXMpfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHNob3d0SW50cm8xID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2hlYWRlcl9zZWFyY2hfdG9nZ2xlJyk7XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzOiAncG9wb3Zlci1kYXJrJyxcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICBib3VuZGFyeTogJ3dpbmRvdycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdsZWZ0JyxcbiAgICAgICAgICAgIGRpc21pc3M6IHRydWUsXG4gICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICdRdWljayBTZWFyY2gnLFxuICAgICAgICAgICAgY29udGVudDogJ0Z1bGx5IGZ1bmN0aW9uYWwgc2VhcmNoIHdpdGggYWR2YW5jZSBvcHRpb25zIGFuZCBwcmVmZXJlbmNlcyBzZXR1cCdcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgcG9wb3ZlclxuICAgICAgICB2YXIgcG9wb3ZlciA9IEtUQXBwLmluaXRCb290c3RyYXBQb3BvdmVyKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBwb3BvdmVyLnNob3coKTtcblxuICAgICAgICAvLyBBdXRvIHJlbW92ZVxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHBvcG92ZXIpIHtcbiAgICAgICAgICAgICAgICBwb3BvdmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0sIDEwMDAgKiAxMCk7IC8vIDEwIHNlY29uZHNcblxuICAgICAgICAvLyBIaWRlIHBvcG92ZXIgb24gZWxlbWVudCBjbGlja1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBwb3BvdmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHNob3d0SW50cm8yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X3Rvb2xiYXJfcHJpbWFyeV9idXR0b24nKTtcblxuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgICAgY3VzdG9tQ2xhc3M6ICdwb3BvdmVyLWRhcmsnLFxuICAgICAgICAgICAgY29udGFpbmVyOiAnYm9keScsXG4gICAgICAgICAgICBib3VuZGFyeTogJ3dpbmRvdycsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnbWFudWFsJyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ2xlZnQnLFxuICAgICAgICAgICAgZGlzbWlzczogdHJ1ZSxcbiAgICAgICAgICAgIGh0bWw6IHRydWUsXG4gICAgICAgICAgICB0aXRsZTogJ1F1aWNrIE5vdGlmaWNhdGlvbnMnLFxuICAgICAgICAgICAgY29udGVudDogJ1NlYW1sZXNzIGFjY2VzcyB0byB1cGRhdGVzIGFuZCBub3RpZmljYXRpb25zIGluIHZhcmlvdXMgZm9ybWF0cydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgcG9wb3ZlclxuICAgICAgICB2YXIgcG9wb3ZlciA9IEtUQXBwLmluaXRCb290c3RyYXBQb3BvdmVyKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBwb3BvdmVyLnNob3coKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9LCAxMDAwICogMTApOyAvLyAxMCBzZWNvbmRzXG5cbiAgICAgICAgLy8gSGlkZSBwb3BvdmVyIG9uIGVsZW1lbnQgY2xpY2tcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBzaG93dEludHJvMyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9oZWFkZXJfdXNlcl9tZW51X3RvZ2dsZScpO1xuXG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjdXN0b21DbGFzczogJ3BvcG92ZXItZGFyaycsXG4gICAgICAgICAgICBjb250YWluZXI6ICdib2R5JyxcbiAgICAgICAgICAgIGJvdW5kYXJ5OiAnd2luZG93JyxcbiAgICAgICAgICAgIHBsYWNlbWVudDogJ2xlZnQnLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICBkaXNtaXNzOiB0cnVlLFxuICAgICAgICAgICAgaHRtbDogdHJ1ZSxcbiAgICAgICAgICAgIHRpdGxlOiAnQWR2YW5jZWQgVXNlciBNZW51JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICdXaXRoIHF1aWNrIGxpbmtzIHRvIHVzZXIgcHJvZmlsZSBhbmQgYWNjb3VudCBzZXR0aW5ncyBwYWdlcydcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEluaXRpYWxpemUgcG9wb3ZlclxuICAgICAgICB2YXIgcG9wb3ZlciA9IEtUQXBwLmluaXRCb290c3RyYXBQb3BvdmVyKGVsZW1lbnQsIG9wdGlvbnMpO1xuICAgICAgICBwb3BvdmVyLnNob3coKTtcblxuICAgICAgICAvLyBSZW1vdmVcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmIChwb3BvdmVyKSB7XG4gICAgICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XG4gICAgICAgICAgICB9IFxuICAgICAgICB9LCAxMDAwICogMTApOyAvLyAxMCBzZWNvbmRzXG5cbiAgICAgICAgLy8gSGlkZSBwb3BvdmVyIG9uIGVsZW1lbnQgY2xpY2tcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgcG9wb3Zlci5kaXNwb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBpbml0SW50cm8gPSBmdW5jdGlvbihwcm9kdWN0KSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnRybyBwb3BvdmVycyBkaXNwbGF5c1xuICAgICAgICBpZiAoS1RVdGlsLmluSWZyYW1lKCkgPT09IGZhbHNlKSB7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGhhbmRsZUludHJvKCdrdF8nICsgcHJvZHVjdCArICdfaW50cm9fMScsIHNob3d0SW50cm8xLCAxMDAwICogNSkpIHtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlSW50cm8oJ2t0XycgKyBwcm9kdWN0ICsgJ19pbnRyb18yJywgc2hvd3RJbnRybzIsIDEwMDAgKiA1KSkge1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVJbnRybygna3RfJyArIHByb2R1Y3QgKyAnX2ludHJvXzMnLCBzaG93dEludHJvMywgMTAwMCAqIDUpKSB7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gXG4gICAgfVxuXG4gICAgLy8gUHVibGljIG1ldGhvZHNcbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpbml0SW50cm8oJ21ldHJvbmljJyk7XG4gICAgICAgIH0gICBcbiAgICB9XG59KCk7XG5cbi8vIFdlYnBhY2sgc3VwcG9ydFxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBLVEludHJvO1xufVxuXG4vLyBPbiBkb2N1bWVudCByZWFkeVxuS1RVdGlsLm9uRE9NQ29udGVudExvYWRlZChmdW5jdGlvbigpIHtcbiAgICBLVEludHJvLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbIktUSW50cm8iLCJoYW5kbGVJbnRybyIsImlkIiwiY2FsYmFjayIsInRpbWVvdXQiLCJkYXRlIiwiRGF0ZSIsImN1cnJlbnRUaW1lIiwiZ2V0VGltZSIsInRpbWUyZGF5cyIsInRpbWU3ZGF5cyIsInRpbWUxNWRheXMiLCJ0aW1lMjFkYXlzIiwidGltZTMwZGF5cyIsIktUQ29va2llIiwiZ2V0IiwicGFyc2VJbnQiLCJzZXRUaW1lb3V0Iiwic2V0IiwiZXhwaXJlcyIsInNob3d0SW50cm8xIiwiZWxlbWVudCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wdGlvbnMiLCJjdXN0b21DbGFzcyIsImNvbnRhaW5lciIsInRyaWdnZXIiLCJib3VuZGFyeSIsInBsYWNlbWVudCIsImRpc21pc3MiLCJodG1sIiwidGl0bGUiLCJjb250ZW50IiwicG9wb3ZlciIsIktUQXBwIiwiaW5pdEJvb3RzdHJhcFBvcG92ZXIiLCJzaG93IiwiZGlzcG9zZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwic2hvd3RJbnRybzIiLCJzaG93dEludHJvMyIsImluaXRJbnRybyIsInByb2R1Y3QiLCJLVFV0aWwiLCJpbklmcmFtZSIsImluaXQiLCJtb2R1bGUiLCJleHBvcnRzIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/intro.js\n");
>>>>>>> Stashed changes

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("../../../themes/metronic/html/demo10/src/js/custom/intro.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=intro.js.map