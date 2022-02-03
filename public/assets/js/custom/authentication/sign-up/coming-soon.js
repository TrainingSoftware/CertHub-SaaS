/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/authentication/sign-up/coming-soon.js ***!
  \************************************************************************************************/


// Class Definition
var KTSignupComingSoon = function() {
    // Elements
    var form;
    var submitButton;
	var validator; 

    var counterDays;
    var counterHours;
    var counterMinutes;
    var counterSeconds;

    var handleForm = function(e) {
        var validation;		 

        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
			form,
			{
				fields: {					
					'email': {
                        validators: {
							notEmpty: {
								message: 'Email address is required'
							},
                            emailAddress: {
								message: 'The value is not a valid email address'
							}
						}
					} 
				},
				plugins: {
					trigger: new FormValidation.plugins.Trigger(),
					bootstrap: new FormValidation.plugins.Bootstrap5({
                        rowSelector: '.fv-row',
                        eleInvalidClass: '',
                        eleValidClass: ''
                    })
				}
			}
		);		

        submitButton.addEventListener('click', function (e) {
            e.preventDefault();

            // Validate form
            validator.validate().then(function (status) {
                if (status == 'Valid') {
                    // Show loading indication
                    submitButton.setAttribute('data-kt-indicator', 'on');

                    // Disable button to avoid multiple click 
                    submitButton.disabled = true;

                    // Simulate ajax request
                    setTimeout(function() {
                        // Hide loading indication
                        submitButton.removeAttribute('data-kt-indicator');

                        // Enable button
                        submitButton.disabled = false;

                        // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                        Swal.fire({
                            text: "You have successfully subscribed !",
                            icon: "success",
                            buttonsStyling: false,
                            confirmButtonText: "Ok, got it!",
                            customClass: {
                                confirmButton: "btn btn-primary"
                            }
                        }).then(function (result) {
                            if (result.isConfirmed) { 
                                form.querySelector('[name="email"]').value= "";                            
                                //form.submit();
                            }
                        });
                    }, 2000);   						
                } else {
                    // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/
                    Swal.fire({
                        text: "Sorry, looks like there are some errors detected, please try again.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary"
                        }
                    });
                }
            });
		});
    }

    var initCounter = function() {
        // Set the date we're counting down to
        var currentTime = new Date(); 
        var countDownDate = new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 15 + 1000 * 60 * 60 * 10 + 1000 * 60 * 15).getTime();

        var count = function() {
            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now an the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result
            counterDays.innerHTML = days;
            counterHours.innerHTML = hours;
            counterMinutes.innerHTML = minutes;
            counterSeconds.innerHTML = seconds;
        };

        // Update the count down every 1 second
        var x = setInterval(count, 1000);

        // Initial count
        count();
    }

    // Public Functions
    return {
        // public functions
        init: function() {
            form = document.querySelector('#kt_coming_soon_form');
            submitButton = document.querySelector('#kt_coming_soon_submit');
            counterDays = document.querySelector('#kt_coming_soon_counter_days');
            counterHours = document.querySelector('#kt_coming_soon_counter_hours');
            counterMinutes = document.querySelector('#kt_coming_soon_counter_minutes');
            counterSeconds = document.querySelector('#kt_coming_soon_counter_seconds');

            handleForm();
            initCounter();
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function() {
    KTSignupComingSoon.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/authentication/sign-up/coming-soon.js":
/*!***********************************************************************!*\
  !*** ./resources/src/js/custom/authentication/sign-up/coming-soon.js ***!
  \***********************************************************************/
/***/ (() => {

eval(" // Class Definition\n\nvar KTSignupComingSoon = function () {\n  // Elements\n  var form;\n  var submitButton;\n  var validator;\n  var counterDays;\n  var counterHours;\n  var counterMinutes;\n  var counterSeconds;\n\n  var handleForm = function handleForm(e) {\n    var validation; // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'email': {\n          validators: {\n            notEmpty: {\n              message: 'Email address is required'\n            },\n            emailAddress: {\n              message: 'The value is not a valid email address'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n    submitButton.addEventListener('click', function (e) {\n      e.preventDefault(); // Validate form\n\n      validator.validate().then(function (status) {\n        if (status == 'Valid') {\n          // Show loading indication\n          submitButton.setAttribute('data-kt-indicator', 'on'); // Disable button to avoid multiple click \n\n          submitButton.disabled = true; // Simulate ajax request\n\n          setTimeout(function () {\n            // Hide loading indication\n            submitButton.removeAttribute('data-kt-indicator'); // Enable button\n\n            submitButton.disabled = false; // Show message popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n\n            Swal.fire({\n              text: \"You have successfully subscribed !\",\n              icon: \"success\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            }).then(function (result) {\n              if (result.isConfirmed) {\n                form.querySelector('[name=\"email\"]').value = \"\"; //form.submit();\n              }\n            });\n          }, 2000);\n        } else {\n          // Show error popup. For more info check the plugin's official documentation: https://sweetalert2.github.io/\n          Swal.fire({\n            text: \"Sorry, looks like there are some errors detected, please try again.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  };\n\n  var initCounter = function initCounter() {\n    // Set the date we're counting down to\n    var currentTime = new Date();\n    var countDownDate = new Date(currentTime.getTime() + 1000 * 60 * 60 * 24 * 15 + 1000 * 60 * 60 * 10 + 1000 * 60 * 15).getTime();\n\n    var count = function count() {\n      // Get todays date and time\n      var now = new Date().getTime(); // Find the distance between now an the count down date\n\n      var distance = countDownDate - now; // Time calculations for days, hours, minutes and seconds\n\n      var days = Math.floor(distance / (1000 * 60 * 60 * 24));\n      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));\n      var minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));\n      var seconds = Math.floor(distance % (1000 * 60) / 1000); // Display the result\n\n      counterDays.innerHTML = days;\n      counterHours.innerHTML = hours;\n      counterMinutes.innerHTML = minutes;\n      counterSeconds.innerHTML = seconds;\n    }; // Update the count down every 1 second\n\n\n    var x = setInterval(count, 1000); // Initial count\n\n    count();\n  }; // Public Functions\n\n\n  return {\n    // public functions\n    init: function init() {\n      form = document.querySelector('#kt_coming_soon_form');\n      submitButton = document.querySelector('#kt_coming_soon_submit');\n      counterDays = document.querySelector('#kt_coming_soon_counter_days');\n      counterHours = document.querySelector('#kt_coming_soon_counter_hours');\n      counterMinutes = document.querySelector('#kt_coming_soon_counter_minutes');\n      counterSeconds = document.querySelector('#kt_coming_soon_counter_seconds');\n      handleForm();\n      initCounter();\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTSignupComingSoon.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hdXRoZW50aWNhdGlvbi9zaWduLXVwL2NvbWluZy1zb29uLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGtCQUFrQixHQUFHLFlBQVc7QUFDaEM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNILE1BQUlDLFNBQUo7QUFFRyxNQUFJQyxXQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLGNBQUo7QUFDQSxNQUFJQyxjQUFKOztBQUVBLE1BQUlDLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQVNDLENBQVQsRUFBWTtBQUN6QixRQUFJQyxVQUFKLENBRHlCLENBR3pCOztBQUNBUCxJQUFBQSxTQUFTLEdBQUdRLGNBQWMsQ0FBQ0MsY0FBZixDQUNqQlgsSUFEaUIsRUFFakI7QUFDQ1ksTUFBQUEsTUFBTSxFQUFFO0FBQ1AsaUJBQVM7QUFDVUMsVUFBQUEsVUFBVSxFQUFFO0FBQzdCQyxZQUFBQSxRQUFRLEVBQUU7QUFDVEMsY0FBQUEsT0FBTyxFQUFFO0FBREEsYUFEbUI7QUFJUkMsWUFBQUEsWUFBWSxFQUFFO0FBQ2xDRCxjQUFBQSxPQUFPLEVBQUU7QUFEeUI7QUFKTjtBQUR0QjtBQURGLE9BRFQ7QUFhQ0UsTUFBQUEsT0FBTyxFQUFFO0FBQ1JDLFFBQUFBLE9BQU8sRUFBRSxJQUFJUixjQUFjLENBQUNPLE9BQWYsQ0FBdUJFLE9BQTNCLEVBREQ7QUFFUkMsUUFBQUEsU0FBUyxFQUFFLElBQUlWLGNBQWMsQ0FBQ08sT0FBZixDQUF1QkksVUFBM0IsQ0FBc0M7QUFDOUJDLFVBQUFBLFdBQVcsRUFBRSxTQURpQjtBQUU5QkMsVUFBQUEsZUFBZSxFQUFFLEVBRmE7QUFHOUJDLFVBQUFBLGFBQWEsRUFBRTtBQUhlLFNBQXRDO0FBRkg7QUFiVixLQUZpQixDQUFaO0FBMEJBdkIsSUFBQUEsWUFBWSxDQUFDd0IsZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsVUFBVWpCLENBQVYsRUFBYTtB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QVA7QUFjSCxDQTVJd0IsRUFBekIsQyxDQThJQTs7O0FBQ0FtQixNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVc7QUFDakNuRSxFQUFBQSxrQkFBa0IsQ0FBQ2dFLElBQW5CO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2F1dGhlbnRpY2F0aW9uL3NpZ24tdXAvY29taW5nLXNvb24uanM/NjU0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgRGVmaW5pdGlvblxudmFyIEtUU2lnbnVwQ29taW5nU29vbiA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIEVsZW1lbnRzXG4gICAgdmFyIGZvcm07XG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcblx0dmFyIHZhbGlkYXRvcjsgXG5cbiAgICB2YXIgY291bnRlckRheXM7XG4gICAgdmFyIGNvdW50ZXJIb3VycztcbiAgICB2YXIgY291bnRlck1pbnV0ZXM7XG4gICAgdmFyIGNvdW50ZXJTZWNvbmRzO1xuXG4gICAgdmFyIGhhbmRsZUZvcm0gPSBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uO1x0XHQgXG5cbiAgICAgICAgLy8gSW5pdCBmb3JtIHZhbGlkYXRpb24gcnVsZXMuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIEZvcm1WYWxpZGF0aW9uIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246aHR0cHM6Ly9mb3JtdmFsaWRhdGlvbi5pby9cbiAgICAgICAgdmFsaWRhdG9yID0gRm9ybVZhbGlkYXRpb24uZm9ybVZhbGlkYXRpb24oXG5cdFx0XHRmb3JtLFxuXHRcdFx0e1xuXHRcdFx0XHRmaWVsZHM6IHtcdFx0XHRcdFx0XG5cdFx0XHRcdFx0J2VtYWlsJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuXHRcdFx0XHRcdFx0XHRub3RFbXB0eToge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdFbWFpbCBhZGRyZXNzIGlzIHJlcXVpcmVkJ1xuXHRcdFx0XHRcdFx0XHR9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsQWRkcmVzczoge1xuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdUaGUgdmFsdWUgaXMgbm90IGEgdmFsaWQgZW1haWwgYWRkcmVzcydcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHBsdWdpbnM6IHtcblx0XHRcdFx0XHR0cmlnZ2VyOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5UcmlnZ2VyKCksXG5cdFx0XHRcdFx0Ym9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdCk7XHRcdFxuXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm1cbiAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGxvYWRpbmcgaW5kaWNhdGlvblxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgYnV0dG9uIHRvIGF2b2lkIG11bHRpcGxlIGNsaWNrIFxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGFqYXggcmVxdWVzdFxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGlkZSBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuYWJsZSBidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaG93IG1lc3NhZ2UgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdSBoYXZlIHN1Y2Nlc3NmdWxseSBzdWJzY3JpYmVkICFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJykudmFsdWU9IFwiXCI7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMDApOyAgIFx0XHRcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNob3cgZXJyb3IgcG9wdXAuIEZvciBtb3JlIGluZm8gY2hlY2sgdGhlIHBsdWdpbidzIG9mZmljaWFsIGRvY3VtZW50YXRpb246IGh0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvL1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXHRcdH0pO1xuICAgIH1cblxuICAgIHZhciBpbml0Q291bnRlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBTZXQgdGhlIGRhdGUgd2UncmUgY291bnRpbmcgZG93biB0b1xuICAgICAgICB2YXIgY3VycmVudFRpbWUgPSBuZXcgRGF0ZSgpOyBcbiAgICAgICAgdmFyIGNvdW50RG93bkRhdGUgPSBuZXcgRGF0ZShjdXJyZW50VGltZS5nZXRUaW1lKCkgKyAxMDAwICogNjAgKiA2MCAqIDI0ICogMTUgKyAxMDAwICogNjAgKiA2MCAqIDEwICsgMTAwMCAqIDYwICogMTUpLmdldFRpbWUoKTtcblxuICAgICAgICB2YXIgY291bnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEdldCB0b2RheXMgZGF0ZSBhbmQgdGltZVxuICAgICAgICAgICAgdmFyIG5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuXG4gICAgICAgICAgICAvLyBGaW5kIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIG5vdyBhbiB0aGUgY291bnQgZG93biBkYXRlXG4gICAgICAgICAgICB2YXIgZGlzdGFuY2UgPSBjb3VudERvd25EYXRlIC0gbm93O1xuXG4gICAgICAgICAgICAvLyBUaW1lIGNhbGN1bGF0aW9ucyBmb3IgZGF5cywgaG91cnMsIG1pbnV0ZXMgYW5kIHNlY29uZHNcbiAgICAgICAgICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcihkaXN0YW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSk7XG4gICAgICAgICAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKChkaXN0YW5jZSAlICgxMDAwICogNjAgKiA2MCAqIDI0KSkgLyAoMTAwMCAqIDYwICogNjApKTtcbiAgICAgICAgICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwICogNjApKSAvICgxMDAwICogNjApKTtcbiAgICAgICAgICAgIHZhciBzZWNvbmRzID0gTWF0aC5mbG9vcigoZGlzdGFuY2UgJSAoMTAwMCAqIDYwKSkgLyAxMDAwKTtcblxuICAgICAgICAgICAgLy8gRGlzcGxheSB0aGUgcmVzdWx0XG4gICAgICAgICAgICBjb3VudGVyRGF5cy5pbm5lckhUTUwgPSBkYXlzO1xuICAgICAgICAgICAgY291bnRlckhvdXJzLmlubmVySFRNTCA9IGhvdXJzO1xuICAgICAgICAgICAgY291bnRlck1pbnV0ZXMuaW5uZXJIVE1MID0gbWludXRlcztcbiAgICAgICAgICAgIGNvdW50ZXJTZWNvbmRzLmlubmVySFRNTCA9IHNlY29uZHM7XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gVXBkYXRlIHRoZSBjb3VudCBkb3duIGV2ZXJ5IDEgc2Vjb25kXG4gICAgICAgIHZhciB4ID0gc2V0SW50ZXJ2YWwoY291bnQsIDEwMDApO1xuXG4gICAgICAgIC8vIEluaXRpYWwgY291bnRcbiAgICAgICAgY291bnQoKTtcbiAgICB9XG5cbiAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgcmV0dXJuIHtcbiAgICAgICAgLy8gcHVibGljIGZ1bmN0aW9uc1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fZm9ybScpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2NvbWluZ19zb29uX3N1Ym1pdCcpO1xuICAgICAgICAgICAgY291bnRlckRheXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fY291bnRlcl9kYXlzJyk7XG4gICAgICAgICAgICBjb3VudGVySG91cnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fY291bnRlcl9ob3VycycpO1xuICAgICAgICAgICAgY291bnRlck1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcja3RfY29taW5nX3Nvb25fY291bnRlcl9taW51dGVzJyk7XG4gICAgICAgICAgICBjb3VudGVyU2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9jb21pbmdfc29vbl9jb3VudGVyX3NlY29uZHMnKTtcblxuICAgICAgICAgICAgaGFuZGxlRm9ybSgpO1xuICAgICAgICAgICAgaW5pdENvdW50ZXIoKTtcbiAgICAgICAgfVxuICAgIH07XG59KCk7XG5cbi8vIE9uIGRvY3VtZW50IHJlYWR5XG5LVFV0aWwub25ET01Db250ZW50TG9hZGVkKGZ1bmN0aW9uKCkge1xuICAgIEtUU2lnbnVwQ29taW5nU29vbi5pbml0KCk7XG59KTtcbiJdLCJuYW1lcyI6WyJLVFNpZ251cENvbWluZ1Nvb24iLCJmb3JtIiwic3VibWl0QnV0dG9uIiwidmFsaWRhdG9yIiwiY291bnRlckRheXMiLCJjb3VudGVySG91cnMiLCJjb3VudGVyTWludXRlcyIsImNvdW50ZXJTZWNvbmRzIiwiaGFuZGxlRm9ybSIsImUiLCJ2YWxpZGF0aW9uIiwiRm9ybVZhbGlkYXRpb24iLCJmb3JtVmFsaWRhdGlvbiIsImZpZWxkcyIsInZhbGlkYXRvcnMiLCJub3RFbXB0eSIsIm1lc3NhZ2UiLCJlbWFpbEFkZHJlc3MiLCJwbHVnaW5zIiwidHJpZ2dlciIsIlRyaWdnZXIiLCJib290c3RyYXAiLCJCb290c3RyYXA1Iiwicm93U2VsZWN0b3IiLCJlbGVJbnZhbGlkQ2xhc3MiLCJlbGVWYWxpZENsYXNzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInByZXZlbnREZWZhdWx0IiwidmFsaWRhdGUiLCJ0aGVuIiwic3RhdHVzIiwic2V0QXR0cmlidXRlIiwiZGlzYWJsZWQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlQXR0cmlidXRlIiwiU3dhbCIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsImJ1dHRvbnNTdHlsaW5nIiwiY29uZmlybUJ1dHRvblRleHQiLCJjdXN0b21DbGFzcyIsImNvbmZpcm1CdXR0b24iLCJyZXN1bHQiLCJpc0NvbmZpcm1lZCIsInF1ZXJ5U2VsZWN0b3IiLCJ2YWx1ZSIsImluaXRDb3VudGVyIiwiY3VycmVudFRpbWUiLCJEYXRlIiwiY291bnREb3duRGF0ZSIsImdldFRpbWUiLCJjb3VudCIsIm5vdyIsImRpc3RhbmNlIiwiZGF5cyIsIk1hdGgiLCJmbG9vciIsImhvdXJzIiwibWludXRlcyIsInNlY29uZHMiLCJpbm5lckhUTUwiLCJ4Iiwic2V0SW50ZXJ2YWwiLCJpbml0IiwiZG9jdW1lbnQiLCJLVFV0aWwiLCJvbkRPTUNvbnRlbnRMb2FkZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./resources/src/js/custom/authentication/sign-up/coming-soon.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/authentication/sign-up/coming-soon.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=coming-soon.js.map