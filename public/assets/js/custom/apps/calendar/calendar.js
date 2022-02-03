/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
<<<<<<< Updated upstream
var __webpack_exports__ = {};
/*!************************************************************************************!*\
  !*** ../../../themes/metronic/html/demo10/src/js/custom/apps/calendar/calendar.js ***!
  \************************************************************************************/


// Class definition
var KTAppCalendar = function () {
    // Shared variables
    // Calendar variables
    var calendar;
    var data = {
        id: '',
        eventName: '',
        eventDescription: '',
        eventLocation: '',
        startDate: '',
        endDate: '',
        allDay: false
    };
    var popover;
    var popoverState = false;

    // Add event variables
    var eventName;
    var eventDescription;
    var eventLocation;
    var startDatepicker;
    var startFlatpickr;
    var endDatepicker;
    var endFlatpickr;
    var startTimepicker;
    var startTimeFlatpickr;
    var endTimepicker
    var endTimeFlatpickr;
    var modal;
    var modalTitle;
    var form;
    var validator;
    var addButton;
    var submitButton;
    var cancelButton;
    var closeButton;

    // View event variables
    var viewEventName;
    var viewAllDay;
    var viewEventDescription;
    var viewEventLocation;
    var viewStartDate;
    var viewEndDate;
    var viewModal;
    var viewEditButton;
    var viewDeleteButton;


    // Private functions
    var initCalendarApp = function () {
        // Define variables
        var calendarEl = document.getElementById('kt_calendar_app');
        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        // Init calendar --- more info: https://fullcalendar.io/docs/initialize-globals
        calendar = new FullCalendar.Calendar(calendarEl, {
            headerToolbar: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            initialDate: TODAY,
            navLinks: true, // can click day/week names to navigate views
            selectable: true,
            selectMirror: true,

            // Select dates action --- more info: https://fullcalendar.io/docs/select-callback
            select: function (arg) {
                hidePopovers();
                formatArgs(arg);
                handleNewEvent();
            },

            // Click event --- more info: https://fullcalendar.io/docs/eventClick
            eventClick: function (arg) {
                hidePopovers();

                formatArgs({
                    id: arg.event.id,
                    title: arg.event.title,
                    description: arg.event.extendedProps.description,
                    location: arg.event.extendedProps.location,
                    startStr: arg.event.startStr,
                    endStr: arg.event.endStr,
                    allDay: arg.event.allDay
                });
                handleViewEvent();
            },

            // MouseEnter event --- more info: https://fullcalendar.io/docs/eventMouseEnter
            eventMouseEnter: function (arg) {
                formatArgs({
                    id: arg.event.id,
                    title: arg.event.title,
                    description: arg.event.extendedProps.description,
                    location: arg.event.extendedProps.location,
                    startStr: arg.event.startStr,
                    endStr: arg.event.endStr,
                    allDay: arg.event.allDay
                });

                // Show popover preview
                initPopovers(arg.el);
            },

            editable: true,
            dayMaxEvents: true, // allow "more" link when too many events
            events: [
                {
                    id: uid(),
                    title: 'All Day Event',
                    start: YM + '-01',
                    end: YM + '-02',
                    description: 'Toto lorem ipsum dolor sit incid idunt ut',
                    className: "fc-event-danger fc-event-solid-warning",
                    location: 'Federation Square'
                },
                {
                    id: uid(),
                    title: 'Reporting',
                    start: YM + '-14T13:30:00',
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    end: YM + '-14T14:30:00',
                    className: "fc-event-success",
                    location: 'Meeting Room 7.03'
                },
                {
                    id: uid(),
                    title: 'Company Trip',
                    start: YM + '-02',
                    description: 'Lorem ipsum dolor sit tempor incid',
                    end: YM + '-03',
                    className: "fc-event-primary",
                    location: 'Seoul, Korea'

                },
                {
                    id: uid(),
                    title: 'ICT Expo 2021 - Product Release',
                    start: YM + '-03',
                    description: 'Lorem ipsum dolor sit tempor inci',
                    end: YM + '-05',
                    className: "fc-event-light fc-event-solid-primary",
                    location: 'Melbourne Exhibition Hall'
                },
                {
                    id: uid(),
                    title: 'Dinner',
                    start: YM + '-12',
                    description: 'Lorem ipsum dolor sit amet, conse ctetur',
                    end: YM + '-13',
                    location: 'Squire\'s Loft'
                },
                {
                    id: uid(),
                    title: 'Repeating Event',
                    start: YM + '-09T16:00:00',
                    end: YM + '-09T17:00:00',
                    description: 'Lorem ipsum dolor sit ncididunt ut labore',
                    className: "fc-event-danger",
                    location: 'General Area'
                },
                {
                    id: uid(),
                    title: 'Repeating Event',
                    description: 'Lorem ipsum dolor sit amet, labore',
                    start: YM + '-16T16:00:00',
                    end: YM + '-16T17:00:00',
                    location: 'General Area'
                },
                {
                    id: uid(),
                    title: 'Conference',
                    start: YESTERDAY,
                    end: TOMORROW,
                    description: 'Lorem ipsum dolor eius mod tempor labore',
                    className: "fc-event-primary",
                    location: 'Conference Hall A'
                },
                {
                    id: uid(),
                    title: 'Meeting',
                    start: TODAY + 'T10:30:00',
                    end: TODAY + 'T12:30:00',
                    description: 'Lorem ipsum dolor eiu idunt ut labore',
                    location: 'Meeting Room 11.06'
                },
                {
                    id: uid(),
                    title: 'Lunch',
                    start: TODAY + 'T12:00:00',
                    end: TODAY + 'T14:00:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, ut labore',
                    location: 'Cafeteria'
                },
                {
                    id: uid(),
                    title: 'Meeting',
                    start: TODAY + 'T14:30:00',
                    end: TODAY + 'T15:30:00',
                    className: "fc-event-warning",
                    description: 'Lorem ipsum conse ctetur adipi scing',
                    location: 'Meeting Room 11.10'
                },
                {
                    id: uid(),
                    title: 'Happy Hour',
                    start: TODAY + 'T17:30:00',
                    end: TODAY + 'T21:30:00',
                    className: "fc-event-info",
                    description: 'Lorem ipsum dolor sit amet, conse ctetur',
                    location: 'The English Pub'
                },
                {
                    id: uid(),
                    title: 'Dinner',
                    start: TOMORROW + 'T18:00:00',
                    end: TOMORROW + 'T21:00:00',
                    className: "fc-event-solid-danger fc-event-light",
                    description: 'Lorem ipsum dolor sit ctetur adipi scing',
                    location: 'New York Steakhouse'
                },
                {
                    id: uid(),
                    title: 'Birthday Party',
                    start: TOMORROW + 'T12:00:00',
                    end: TOMORROW + 'T14:00:00',
                    className: "fc-event-primary",
                    description: 'Lorem ipsum dolor sit amet, scing',
                    location: 'The English Pub'
                },
                {
                    id: uid(),
                    title: 'Site visit',
                    start: YM + '-28',
                    end: YM + '-29',
                    className: "fc-event-solid-info fc-event-light",
                    description: 'Lorem ipsum dolor sit amet, labore',
                    location: '271, Spring Street'
                }
            ],

            // Reset popovers when changing calendar views --- more info: https://fullcalendar.io/docs/datesSet
            datesSet: function(){
                hidePopovers();
            }
        });

        calendar.render();
    }

    // Initialize popovers --- more info: https://getbootstrap.com/docs/4.0/components/popovers/
    const initPopovers = (element) => {
        hidePopovers();

        // Generate popover content
        const startDate = data.allDay ? moment(data.startDate).format('Do MMM, YYYY') : moment(data.startDate).format('Do MMM, YYYY - h:mm a');
        const endDate = data.allDay ? moment(data.endDate).format('Do MMM, YYYY') : moment(data.endDate).format('Do MMM, YYYY - h:mm a');
        const popoverHtml = '<div class="fw-bolder mb-2">' + data.eventName + '</div><div class="fs-7"><span class="fw-bold">Start:</span> ' + startDate + '</div><div class="fs-7 mb-4"><span class="fw-bold">End:</span> ' + endDate + '</div><div id="kt_calendar_event_view_button" type="button" class="btn btn-sm btn-light-primary">View More</div>';

        // Popover options
        var options = {
            container: 'body',
            trigger: 'manual',
            boundary: 'window',
            placement: 'auto',
            dismiss: true,
            html: true,
            title: 'Event Summary',
            content: popoverHtml,
        }

        // Initialize popover
        popover = KTApp.initBootstrapPopover(element, options);

        // Show popover
        popover.show();

        // Update popover state
        popoverState = true;

        // Open view event modal
        handleViewButton();
    }

    // Hide active popovers
    const hidePopovers = () => {
        if (popoverState) {
            popover.dispose();
            popoverState = false;
        }
    }

    // Init validator
    const initValidator = () => {
        // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/
        validator = FormValidation.formValidation(
            form,
            {
                fields: {
                    'calendar_event_name': {
                        validators: {
                            notEmpty: {
                                message: 'Event name is required'
                            }
                        }
                    },
                    'calendar_event_start_date': {
                        validators: {
                            notEmpty: {
                                message: 'Start date is required'
                            }
                        }
                    },
                    'calendar_event_end_date': {
                        validators: {
                            notEmpty: {
                                message: 'End date is required'
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
    }

    // Initialize datepickers --- more info: https://flatpickr.js.org/
    const initDatepickers = () => {
        startFlatpickr = flatpickr(startDatepicker, {
            enableTime: false,
            dateFormat: "Y-m-d",
        });

        endFlatpickr = flatpickr(endDatepicker, {
            enableTime: false,
            dateFormat: "Y-m-d",
        });

        startTimeFlatpickr = flatpickr(startTimepicker, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });

        endTimeFlatpickr = flatpickr(endTimepicker, {
            enableTime: true,
            noCalendar: true,
            dateFormat: "H:i",
        });
    }

    // Handle add button
    const handleAddButton = () => {
        addButton.addEventListener('click', e => {
            hidePopovers();

            // Reset form data
            data = {
                id: '',
                eventName: '',
                eventDescription: '',
                startDate: new Date(),
                endDate: new Date(),
                allDay: false
            };
            handleNewEvent();
        });
    }

    // Handle add new event
    const handleNewEvent = () => {
        // Update modal title
        modalTitle.innerText = "Add a New Event";

        modal.show();

        // Select datepicker wrapper elements
        const datepickerWrappers = form.querySelectorAll('[data-kt-calendar="datepicker"]');

        // Handle all day toggle
        const allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');
        allDayToggle.addEventListener('click', e => {
            if (e.target.checked) {
                datepickerWrappers.forEach(dw => {
                    dw.classList.add('d-none');
                });
            } else {
                endFlatpickr.setDate(data.startDate, true, 'Y-m-d');
                datepickerWrappers.forEach(dw => {
                    dw.classList.remove('d-none');
                });
            }
        });

        populateForm(data);

        // Handle submit form
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        // Simulate form submission
                        setTimeout(function () {
                            // Simulate form submission
                            submitButton.removeAttribute('data-kt-indicator');

                            // Show popup confirmation 
                            Swal.fire({
                                text: "New event added to calendar!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    modal.hide();

                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Detect if is all day event
                                    let allDayEvent = false;
                                    if (allDayToggle.checked) { allDayEvent = true; }
                                    if (startTimeFlatpickr.selectedDates.length === 0) { allDayEvent = true; }

                                    // Merge date & time
                                    var startDateTime = moment(startFlatpickr.selectedDates[0]).format();
                                    var endDateTime = moment(endFlatpickr.selectedDates[endFlatpickr.selectedDates.length - 1]).format();
                                    if (!allDayEvent) {
                                        const startDate = moment(startFlatpickr.selectedDates[0]).format('YYYY-MM-DD');
                                        const endDate = startDate;
                                        const startTime = moment(startTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');
                                        const endTime = moment(endTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');

                                        startDateTime = startDate + 'T' + startTime;
                                        endDateTime = endDate + 'T' + endTime;
                                    }

                                    // Add new event to calendar
                                    calendar.addEvent({
                                        id: uid(),
                                        title: eventName.value,
                                        description: eventDescription.value,
                                        location: eventLocation.value,
                                        start: startDateTime,
                                        end: endDateTime,
                                        allDay: allDayEvent
                                    });
                                    calendar.render();

                                    // Reset form for demo purposes only
                                    form.reset();
                                }
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    } else {
                        // Show popup warning 
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
            }
        });
    }

    // Handle edit event
    const handleEditEvent = () => {
        // Update modal title
        modalTitle.innerText = "Edit an Event";

        modal.show();

        // Select datepicker wrapper elements
        const datepickerWrappers = form.querySelectorAll('[data-kt-calendar="datepicker"]');

        // Handle all day toggle
        const allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');
        allDayToggle.addEventListener('click', e => {
            if (e.target.checked) {
                datepickerWrappers.forEach(dw => {
                    dw.classList.add('d-none');
                });
            } else {
                endFlatpickr.setDate(data.startDate, true, 'Y-m-d');
                datepickerWrappers.forEach(dw => {
                    dw.classList.remove('d-none');
                });
            }
        });

        populateForm(data);

        // Handle submit form
        submitButton.addEventListener('click', function (e) {
            // Prevent default button action
            e.preventDefault();

            // Validate form before submit
            if (validator) {
                validator.validate().then(function (status) {
                    console.log('validated!');

                    if (status == 'Valid') {
                        // Show loading indication
                        submitButton.setAttribute('data-kt-indicator', 'on');

                        // Disable submit button whilst loading
                        submitButton.disabled = true;

                        // Simulate form submission
                        setTimeout(function () {
                            // Simulate form submission
                            submitButton.removeAttribute('data-kt-indicator');

                            // Show popup confirmation 
                            Swal.fire({
                                text: "New event added to calendar!",
                                icon: "success",
                                buttonsStyling: false,
                                confirmButtonText: "Ok, got it!",
                                customClass: {
                                    confirmButton: "btn btn-primary"
                                }
                            }).then(function (result) {
                                if (result.isConfirmed) {
                                    modal.hide();

                                    // Enable submit button after loading
                                    submitButton.disabled = false;

                                    // Remove old event
                                    calendar.getEventById(data.id).remove();

                                    // Detect if is all day event
                                    let allDayEvent = false;
                                    if (allDayToggle.checked) { allDayEvent = true; }
                                    if (startTimeFlatpickr.selectedDates.length === 0) { allDayEvent = true; }

                                    // Merge date & time
                                    var startDateTime = moment(startFlatpickr.selectedDates[0]).format();
                                    var endDateTime = moment(endFlatpickr.selectedDates[endFlatpickr.selectedDates.length - 1]).format();
                                    if (!allDayEvent) {
                                        const startDate = moment(startFlatpickr.selectedDates[0]).format('YYYY-MM-DD');
                                        const endDate = startDate;
                                        const startTime = moment(startTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');
                                        const endTime = moment(endTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');

                                        startDateTime = startDate + 'T' + startTime;
                                        endDateTime = endDate + 'T' + endTime;
                                    }

                                    // Add new event to calendar
                                    calendar.addEvent({
                                        id: uid(),
                                        title: eventName.value,
                                        description: eventDescription.value,
                                        location: eventLocation.value,
                                        start: startDateTime,
                                        end: endDateTime,
                                        allDay: allDayEvent
                                    });
                                    calendar.render();

                                    // Reset form for demo purposes only
                                    form.reset();
                                }
                            });

                            //form.submit(); // Submit form
                        }, 2000);
                    } else {
                        // Show popup warning 
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
            }
        });
    }

    // Handle view event
    const handleViewEvent = () => {
        viewModal.show();

        // Detect all day event
        var eventNameMod;
        var startDateMod;
        var endDateMod;

        // Generate labels
        if (data.allDay) {
            eventNameMod = 'All Day';
            startDateMod = moment(data.startDate).format('Do MMM, YYYY');
            endDateMod = moment(data.endDate).format('Do MMM, YYYY');
        } else {
            eventNameMod = '';
            startDateMod = moment(data.startDate).format('Do MMM, YYYY - h:mm a');
            endDateMod = moment(data.endDate).format('Do MMM, YYYY - h:mm a');
        }

        // Populate view data
        viewEventName.innerText = data.eventName;
        viewAllDay.innerText = eventNameMod;
        viewEventDescription.innerText = data.eventDescription ? data.eventDescription : '--';
        viewEventLocation.innerText = data.eventLocation ? data.eventLocation : '--';
        viewStartDate.innerText = startDateMod;
        viewEndDate.innerText = endDateMod;
    }

    // Handle delete event
    const handleDeleteEvent = () => {
        viewDeleteButton.addEventListener('click', e => {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to delete this event?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, delete it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    calendar.getEventById(data.id).remove();

                    viewModal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your event was not deleted!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Handle edit button
    const handleEditButton = () => {
        viewEditButton.addEventListener('click', e => {
            e.preventDefault();

            viewModal.hide();
            handleEditEvent();
        });
    }

    // Handle cancel button
    const handleCancelButton = () => {
        // Edit event modal cancel button
        cancelButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Handle close button
    const handleCloseButton = () => {
        // Edit event modal close button
        closeButton.addEventListener('click', function (e) {
            e.preventDefault();

            Swal.fire({
                text: "Are you sure you would like to cancel?",
                icon: "warning",
                showCancelButton: true,
                buttonsStyling: false,
                confirmButtonText: "Yes, cancel it!",
                cancelButtonText: "No, return",
                customClass: {
                    confirmButton: "btn btn-primary",
                    cancelButton: "btn btn-active-light"
                }
            }).then(function (result) {
                if (result.value) {
                    form.reset(); // Reset form	
                    modal.hide(); // Hide modal				
                } else if (result.dismiss === 'cancel') {
                    Swal.fire({
                        text: "Your form has not been cancelled!.",
                        icon: "error",
                        buttonsStyling: false,
                        confirmButtonText: "Ok, got it!",
                        customClass: {
                            confirmButton: "btn btn-primary",
                        }
                    });
                }
            });
        });
    }

    // Handle view button
    const handleViewButton = () => {
        const viewButton = document.querySelector('#kt_calendar_event_view_button');
        viewButton.addEventListener('click', e => {
            e.preventDefault();

            hidePopovers();
            handleViewEvent();
        });
    }

    // Helper functions

    // Reset form validator on modal close
    const resetFormValidator = (element) => {
        // Target modal hidden event --- For more info: https://getbootstrap.com/docs/5.0/components/modal/#events
        element.addEventListener('hidden.bs.modal', e => {
            if (validator) {
                // Reset form validator. For more info: https://formvalidation.io/guide/api/reset-form
                validator.resetForm(true);
            }
        });
    }

    // Populate form 
    const populateForm = () => {
        eventName.value = data.eventName ? data.eventName : '';
        eventDescription.value = data.eventDescription ? data.eventDescription : '';
        eventLocation.value = data.eventLocation ? data.eventLocation : '';
        startFlatpickr.setDate(data.startDate, true, 'Y-m-d');

        // Handle null end dates
        const endDate = data.endDate ? data.endDate : moment(data.startDate).format();
        endFlatpickr.setDate(endDate, true, 'Y-m-d');

        const allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');
        const datepickerWrappers = form.querySelectorAll('[data-kt-calendar="datepicker"]');
        if (data.allDay) {
            allDayToggle.checked = true;
            datepickerWrappers.forEach(dw => {
                dw.classList.add('d-none');
            });
        } else {
            startTimeFlatpickr.setDate(data.startDate, true, 'Y-m-d H:i');
            endTimeFlatpickr.setDate(data.endDate, true, 'Y-m-d H:i');
            endFlatpickr.setDate(data.startDate, true, 'Y-m-d');
            allDayToggle.checked = false;
            datepickerWrappers.forEach(dw => {
                dw.classList.remove('d-none');
            });
        }
    }

    // Format FullCalendar reponses
    const formatArgs = (res) => {
        data.id = res.id;
        data.eventName = res.title;
        data.eventDescription = res.description;
        data.eventLocation = res.location;
        data.startDate = res.startStr;
        data.endDate = res.endStr;
        data.allDay = res.allDay;
    }

    // Generate unique IDs for events
    const uid = () => {
        return Date.now().toString() + Math.floor(Math.random() * 1000).toString();
    }

    return {
        // Public Functions
        init: function () {
            // Define variables
            // Add event modal
            const element = document.getElementById('kt_modal_add_event');
            form = element.querySelector('#kt_modal_add_event_form');
            eventName = form.querySelector('[name="calendar_event_name"]');
            eventDescription = form.querySelector('[name="calendar_event_description"]');
            eventLocation = form.querySelector('[name="calendar_event_location"]');
            startDatepicker = form.querySelector('#kt_calendar_datepicker_start_date');
            endDatepicker = form.querySelector('#kt_calendar_datepicker_end_date');
            startTimepicker = form.querySelector('#kt_calendar_datepicker_start_time');
            endTimepicker = form.querySelector('#kt_calendar_datepicker_end_time');
            addButton = document.querySelector('[data-kt-calendar="add"]');
            submitButton = form.querySelector('#kt_modal_add_event_submit');
            cancelButton = form.querySelector('#kt_modal_add_event_cancel');
            closeButton = element.querySelector('#kt_modal_add_event_close');
            modalTitle = form.querySelector('[data-kt-calendar="title"]');
            modal = new bootstrap.Modal(element);

            // View event modal
            const viewElement = document.getElementById('kt_modal_view_event');
            viewModal = new bootstrap.Modal(viewElement);
            viewEventName = viewElement.querySelector('[data-kt-calendar="event_name"]');
            viewAllDay = viewElement.querySelector('[data-kt-calendar="all_day"]');
            viewEventDescription = viewElement.querySelector('[data-kt-calendar="event_description"]');
            viewEventLocation = viewElement.querySelector('[data-kt-calendar="event_location"]');
            viewStartDate = viewElement.querySelector('[data-kt-calendar="event_start_date"]');
            viewEndDate = viewElement.querySelector('[data-kt-calendar="event_end_date"]');
            viewEditButton = viewElement.querySelector('#kt_modal_view_event_edit');
            viewDeleteButton = viewElement.querySelector('#kt_modal_view_event_delete');

            initCalendarApp();
            initValidator();
            initDatepickers();
            handleEditButton();
            handleAddButton();
            handleDeleteEvent();
            handleCancelButton();
            handleCloseButton();
            resetFormValidator(element);
        }
    };
}();

// On document ready
KTUtil.onDOMContentLoaded(function () {
    KTAppCalendar.init();
});

=======
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/src/js/custom/apps/calendar/calendar.js":
/*!***********************************************************!*\
  !*** ./resources/src/js/custom/apps/calendar/calendar.js ***!
  \***********************************************************/
/***/ (() => {

eval(" // Class definition\n\nvar KTAppCalendar = function () {\n  // Shared variables\n  // Calendar variables\n  var calendar;\n  var data = {\n    id: '',\n    eventName: '',\n    eventDescription: '',\n    eventLocation: '',\n    startDate: '',\n    endDate: '',\n    allDay: false\n  };\n  var popover;\n  var popoverState = false; // Add event variables\n\n  var eventName;\n  var eventDescription;\n  var eventLocation;\n  var startDatepicker;\n  var startFlatpickr;\n  var endDatepicker;\n  var endFlatpickr;\n  var startTimepicker;\n  var startTimeFlatpickr;\n  var endTimepicker;\n  var endTimeFlatpickr;\n  var modal;\n  var modalTitle;\n  var form;\n  var validator;\n  var addButton;\n  var submitButton;\n  var cancelButton;\n  var closeButton; // View event variables\n\n  var viewEventName;\n  var viewAllDay;\n  var viewEventDescription;\n  var viewEventLocation;\n  var viewStartDate;\n  var viewEndDate;\n  var viewModal;\n  var viewEditButton;\n  var viewDeleteButton; // Private functions\n\n  var initCalendarApp = function initCalendarApp() {\n    // Define variables\n    var calendarEl = document.getElementById('kt_calendar_app');\n    var todayDate = moment().startOf('day');\n    var YM = todayDate.format('YYYY-MM');\n    var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');\n    var TODAY = todayDate.format('YYYY-MM-DD');\n    var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD'); // Init calendar --- more info: https://fullcalendar.io/docs/initialize-globals\n\n    calendar = new FullCalendar.Calendar(calendarEl, {\n      headerToolbar: {\n        left: 'prev,next today',\n        center: 'title',\n        right: 'dayGridMonth,timeGridWeek,timeGridDay'\n      },\n      initialDate: TODAY,\n      navLinks: true,\n      // can click day/week names to navigate views\n      selectable: true,\n      selectMirror: true,\n      // Select dates action --- more info: https://fullcalendar.io/docs/select-callback\n      select: function select(arg) {\n        hidePopovers();\n        formatArgs(arg);\n        handleNewEvent();\n      },\n      // Click event --- more info: https://fullcalendar.io/docs/eventClick\n      eventClick: function eventClick(arg) {\n        hidePopovers();\n        formatArgs({\n          id: arg.event.id,\n          title: arg.event.title,\n          description: arg.event.extendedProps.description,\n          location: arg.event.extendedProps.location,\n          startStr: arg.event.startStr,\n          endStr: arg.event.endStr,\n          allDay: arg.event.allDay\n        });\n        handleViewEvent();\n      },\n      // MouseEnter event --- more info: https://fullcalendar.io/docs/eventMouseEnter\n      eventMouseEnter: function eventMouseEnter(arg) {\n        formatArgs({\n          id: arg.event.id,\n          title: arg.event.title,\n          description: arg.event.extendedProps.description,\n          location: arg.event.extendedProps.location,\n          startStr: arg.event.startStr,\n          endStr: arg.event.endStr,\n          allDay: arg.event.allDay\n        }); // Show popover preview\n\n        initPopovers(arg.el);\n      },\n      editable: true,\n      dayMaxEvents: true,\n      // allow \"more\" link when too many events\n      events: [{\n        id: uid(),\n        title: 'All Day Event',\n        start: YM + '-01',\n        end: YM + '-02',\n        description: 'Toto lorem ipsum dolor sit incid idunt ut',\n        className: \"fc-event-danger fc-event-solid-warning\",\n        location: 'Federation Square'\n      }, {\n        id: uid(),\n        title: 'Reporting',\n        start: YM + '-14T13:30:00',\n        description: 'Lorem ipsum dolor incid idunt ut labore',\n        end: YM + '-14T14:30:00',\n        className: \"fc-event-success\",\n        location: 'Meeting Room 7.03'\n      }, {\n        id: uid(),\n        title: 'Company Trip',\n        start: YM + '-02',\n        description: 'Lorem ipsum dolor sit tempor incid',\n        end: YM + '-03',\n        className: \"fc-event-primary\",\n        location: 'Seoul, Korea'\n      }, {\n        id: uid(),\n        title: 'ICT Expo 2021 - Product Release',\n        start: YM + '-03',\n        description: 'Lorem ipsum dolor sit tempor inci',\n        end: YM + '-05',\n        className: \"fc-event-light fc-event-solid-primary\",\n        location: 'Melbourne Exhibition Hall'\n      }, {\n        id: uid(),\n        title: 'Dinner',\n        start: YM + '-12',\n        description: 'Lorem ipsum dolor sit amet, conse ctetur',\n        end: YM + '-13',\n        location: 'Squire\\'s Loft'\n      }, {\n        id: uid(),\n        title: 'Repeating Event',\n        start: YM + '-09T16:00:00',\n        end: YM + '-09T17:00:00',\n        description: 'Lorem ipsum dolor sit ncididunt ut labore',\n        className: \"fc-event-danger\",\n        location: 'General Area'\n      }, {\n        id: uid(),\n        title: 'Repeating Event',\n        description: 'Lorem ipsum dolor sit amet, labore',\n        start: YM + '-16T16:00:00',\n        end: YM + '-16T17:00:00',\n        location: 'General Area'\n      }, {\n        id: uid(),\n        title: 'Conference',\n        start: YESTERDAY,\n        end: TOMORROW,\n        description: 'Lorem ipsum dolor eius mod tempor labore',\n        className: \"fc-event-primary\",\n        location: 'Conference Hall A'\n      }, {\n        id: uid(),\n        title: 'Meeting',\n        start: TODAY + 'T10:30:00',\n        end: TODAY + 'T12:30:00',\n        description: 'Lorem ipsum dolor eiu idunt ut labore',\n        location: 'Meeting Room 11.06'\n      }, {\n        id: uid(),\n        title: 'Lunch',\n        start: TODAY + 'T12:00:00',\n        end: TODAY + 'T14:00:00',\n        className: \"fc-event-info\",\n        description: 'Lorem ipsum dolor sit amet, ut labore',\n        location: 'Cafeteria'\n      }, {\n        id: uid(),\n        title: 'Meeting',\n        start: TODAY + 'T14:30:00',\n        end: TODAY + 'T15:30:00',\n        className: \"fc-event-warning\",\n        description: 'Lorem ipsum conse ctetur adipi scing',\n        location: 'Meeting Room 11.10'\n      }, {\n        id: uid(),\n        title: 'Happy Hour',\n        start: TODAY + 'T17:30:00',\n        end: TODAY + 'T21:30:00',\n        className: \"fc-event-info\",\n        description: 'Lorem ipsum dolor sit amet, conse ctetur',\n        location: 'The English Pub'\n      }, {\n        id: uid(),\n        title: 'Dinner',\n        start: TOMORROW + 'T18:00:00',\n        end: TOMORROW + 'T21:00:00',\n        className: \"fc-event-solid-danger fc-event-light\",\n        description: 'Lorem ipsum dolor sit ctetur adipi scing',\n        location: 'New York Steakhouse'\n      }, {\n        id: uid(),\n        title: 'Birthday Party',\n        start: TOMORROW + 'T12:00:00',\n        end: TOMORROW + 'T14:00:00',\n        className: \"fc-event-primary\",\n        description: 'Lorem ipsum dolor sit amet, scing',\n        location: 'The English Pub'\n      }, {\n        id: uid(),\n        title: 'Site visit',\n        start: YM + '-28',\n        end: YM + '-29',\n        className: \"fc-event-solid-info fc-event-light\",\n        description: 'Lorem ipsum dolor sit amet, labore',\n        location: '271, Spring Street'\n      }],\n      // Reset popovers when changing calendar views --- more info: https://fullcalendar.io/docs/datesSet\n      datesSet: function datesSet() {\n        hidePopovers();\n      }\n    });\n    calendar.render();\n  }; // Initialize popovers --- more info: https://getbootstrap.com/docs/4.0/components/popovers/\n\n\n  var initPopovers = function initPopovers(element) {\n    hidePopovers(); // Generate popover content\n\n    var startDate = data.allDay ? moment(data.startDate).format('Do MMM, YYYY') : moment(data.startDate).format('Do MMM, YYYY - h:mm a');\n    var endDate = data.allDay ? moment(data.endDate).format('Do MMM, YYYY') : moment(data.endDate).format('Do MMM, YYYY - h:mm a');\n    var popoverHtml = '<div class=\"fw-bolder mb-2\">' + data.eventName + '</div><div class=\"fs-7\"><span class=\"fw-bold\">Start:</span> ' + startDate + '</div><div class=\"fs-7 mb-4\"><span class=\"fw-bold\">End:</span> ' + endDate + '</div><div id=\"kt_calendar_event_view_button\" type=\"button\" class=\"btn btn-sm btn-light-primary\">View More</div>'; // Popover options\n\n    var options = {\n      container: 'body',\n      trigger: 'manual',\n      boundary: 'window',\n      placement: 'auto',\n      dismiss: true,\n      html: true,\n      title: 'Event Summary',\n      content: popoverHtml\n    }; // Initialize popover\n\n    popover = KTApp.initBootstrapPopover(element, options); // Show popover\n\n    popover.show(); // Update popover state\n\n    popoverState = true; // Open view event modal\n\n    handleViewButton();\n  }; // Hide active popovers\n\n\n  var hidePopovers = function hidePopovers() {\n    if (popoverState) {\n      popover.dispose();\n      popoverState = false;\n    }\n  }; // Init validator\n\n\n  var initValidator = function initValidator() {\n    // Init form validation rules. For more info check the FormValidation plugin's official documentation:https://formvalidation.io/\n    validator = FormValidation.formValidation(form, {\n      fields: {\n        'calendar_event_name': {\n          validators: {\n            notEmpty: {\n              message: 'Event name is required'\n            }\n          }\n        },\n        'calendar_event_start_date': {\n          validators: {\n            notEmpty: {\n              message: 'Start date is required'\n            }\n          }\n        },\n        'calendar_event_end_date': {\n          validators: {\n            notEmpty: {\n              message: 'End date is required'\n            }\n          }\n        }\n      },\n      plugins: {\n        trigger: new FormValidation.plugins.Trigger(),\n        bootstrap: new FormValidation.plugins.Bootstrap5({\n          rowSelector: '.fv-row',\n          eleInvalidClass: '',\n          eleValidClass: ''\n        })\n      }\n    });\n  }; // Initialize datepickers --- more info: https://flatpickr.js.org/\n\n\n  var initDatepickers = function initDatepickers() {\n    startFlatpickr = flatpickr(startDatepicker, {\n      enableTime: false,\n      dateFormat: \"Y-m-d\"\n    });\n    endFlatpickr = flatpickr(endDatepicker, {\n      enableTime: false,\n      dateFormat: \"Y-m-d\"\n    });\n    startTimeFlatpickr = flatpickr(startTimepicker, {\n      enableTime: true,\n      noCalendar: true,\n      dateFormat: \"H:i\"\n    });\n    endTimeFlatpickr = flatpickr(endTimepicker, {\n      enableTime: true,\n      noCalendar: true,\n      dateFormat: \"H:i\"\n    });\n  }; // Handle add button\n\n\n  var handleAddButton = function handleAddButton() {\n    addButton.addEventListener('click', function (e) {\n      hidePopovers(); // Reset form data\n\n      data = {\n        id: '',\n        eventName: '',\n        eventDescription: '',\n        startDate: new Date(),\n        endDate: new Date(),\n        allDay: false\n      };\n      handleNewEvent();\n    });\n  }; // Handle add new event\n\n\n  var handleNewEvent = function handleNewEvent() {\n    // Update modal title\n    modalTitle.innerText = \"Add a New Event\";\n    modal.show(); // Select datepicker wrapper elements\n\n    var datepickerWrappers = form.querySelectorAll('[data-kt-calendar=\"datepicker\"]'); // Handle all day toggle\n\n    var allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');\n    allDayToggle.addEventListener('click', function (e) {\n      if (e.target.checked) {\n        datepickerWrappers.forEach(function (dw) {\n          dw.classList.add('d-none');\n        });\n      } else {\n        endFlatpickr.setDate(data.startDate, true, 'Y-m-d');\n        datepickerWrappers.forEach(function (dw) {\n          dw.classList.remove('d-none');\n        });\n      }\n    });\n    populateForm(data); // Handle submit form\n\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable submit button whilst loading\n\n            submitButton.disabled = true; // Simulate form submission\n\n            setTimeout(function () {\n              // Simulate form submission\n              submitButton.removeAttribute('data-kt-indicator'); // Show popup confirmation \n\n              Swal.fire({\n                text: \"New event added to calendar!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide(); // Enable submit button after loading\n\n                  submitButton.disabled = false; // Detect if is all day event\n\n                  var allDayEvent = false;\n\n                  if (allDayToggle.checked) {\n                    allDayEvent = true;\n                  }\n\n                  if (startTimeFlatpickr.selectedDates.length === 0) {\n                    allDayEvent = true;\n                  } // Merge date & time\n\n\n                  var startDateTime = moment(startFlatpickr.selectedDates[0]).format();\n                  var endDateTime = moment(endFlatpickr.selectedDates[endFlatpickr.selectedDates.length - 1]).format();\n\n                  if (!allDayEvent) {\n                    var startDate = moment(startFlatpickr.selectedDates[0]).format('YYYY-MM-DD');\n                    var endDate = startDate;\n                    var startTime = moment(startTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');\n                    var endTime = moment(endTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');\n                    startDateTime = startDate + 'T' + startTime;\n                    endDateTime = endDate + 'T' + endTime;\n                  } // Add new event to calendar\n\n\n                  calendar.addEvent({\n                    id: uid(),\n                    title: eventName.value,\n                    description: eventDescription.value,\n                    location: eventLocation.value,\n                    start: startDateTime,\n                    end: endDateTime,\n                    allDay: allDayEvent\n                  });\n                  calendar.render(); // Reset form for demo purposes only\n\n                  form.reset();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning \n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  }; // Handle edit event\n\n\n  var handleEditEvent = function handleEditEvent() {\n    // Update modal title\n    modalTitle.innerText = \"Edit an Event\";\n    modal.show(); // Select datepicker wrapper elements\n\n    var datepickerWrappers = form.querySelectorAll('[data-kt-calendar=\"datepicker\"]'); // Handle all day toggle\n\n    var allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');\n    allDayToggle.addEventListener('click', function (e) {\n      if (e.target.checked) {\n        datepickerWrappers.forEach(function (dw) {\n          dw.classList.add('d-none');\n        });\n      } else {\n        endFlatpickr.setDate(data.startDate, true, 'Y-m-d');\n        datepickerWrappers.forEach(function (dw) {\n          dw.classList.remove('d-none');\n        });\n      }\n    });\n    populateForm(data); // Handle submit form\n\n    submitButton.addEventListener('click', function (e) {\n      // Prevent default button action\n      e.preventDefault(); // Validate form before submit\n\n      if (validator) {\n        validator.validate().then(function (status) {\n          console.log('validated!');\n\n          if (status == 'Valid') {\n            // Show loading indication\n            submitButton.setAttribute('data-kt-indicator', 'on'); // Disable submit button whilst loading\n\n            submitButton.disabled = true; // Simulate form submission\n\n            setTimeout(function () {\n              // Simulate form submission\n              submitButton.removeAttribute('data-kt-indicator'); // Show popup confirmation \n\n              Swal.fire({\n                text: \"New event added to calendar!\",\n                icon: \"success\",\n                buttonsStyling: false,\n                confirmButtonText: \"Ok, got it!\",\n                customClass: {\n                  confirmButton: \"btn btn-primary\"\n                }\n              }).then(function (result) {\n                if (result.isConfirmed) {\n                  modal.hide(); // Enable submit button after loading\n\n                  submitButton.disabled = false; // Remove old event\n\n                  calendar.getEventById(data.id).remove(); // Detect if is all day event\n\n                  var allDayEvent = false;\n\n                  if (allDayToggle.checked) {\n                    allDayEvent = true;\n                  }\n\n                  if (startTimeFlatpickr.selectedDates.length === 0) {\n                    allDayEvent = true;\n                  } // Merge date & time\n\n\n                  var startDateTime = moment(startFlatpickr.selectedDates[0]).format();\n                  var endDateTime = moment(endFlatpickr.selectedDates[endFlatpickr.selectedDates.length - 1]).format();\n\n                  if (!allDayEvent) {\n                    var startDate = moment(startFlatpickr.selectedDates[0]).format('YYYY-MM-DD');\n                    var endDate = startDate;\n                    var startTime = moment(startTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');\n                    var endTime = moment(endTimeFlatpickr.selectedDates[0]).format('HH:mm:ss');\n                    startDateTime = startDate + 'T' + startTime;\n                    endDateTime = endDate + 'T' + endTime;\n                  } // Add new event to calendar\n\n\n                  calendar.addEvent({\n                    id: uid(),\n                    title: eventName.value,\n                    description: eventDescription.value,\n                    location: eventLocation.value,\n                    start: startDateTime,\n                    end: endDateTime,\n                    allDay: allDayEvent\n                  });\n                  calendar.render(); // Reset form for demo purposes only\n\n                  form.reset();\n                }\n              }); //form.submit(); // Submit form\n            }, 2000);\n          } else {\n            // Show popup warning \n            Swal.fire({\n              text: \"Sorry, looks like there are some errors detected, please try again.\",\n              icon: \"error\",\n              buttonsStyling: false,\n              confirmButtonText: \"Ok, got it!\",\n              customClass: {\n                confirmButton: \"btn btn-primary\"\n              }\n            });\n          }\n        });\n      }\n    });\n  }; // Handle view event\n\n\n  var handleViewEvent = function handleViewEvent() {\n    viewModal.show(); // Detect all day event\n\n    var eventNameMod;\n    var startDateMod;\n    var endDateMod; // Generate labels\n\n    if (data.allDay) {\n      eventNameMod = 'All Day';\n      startDateMod = moment(data.startDate).format('Do MMM, YYYY');\n      endDateMod = moment(data.endDate).format('Do MMM, YYYY');\n    } else {\n      eventNameMod = '';\n      startDateMod = moment(data.startDate).format('Do MMM, YYYY - h:mm a');\n      endDateMod = moment(data.endDate).format('Do MMM, YYYY - h:mm a');\n    } // Populate view data\n\n\n    viewEventName.innerText = data.eventName;\n    viewAllDay.innerText = eventNameMod;\n    viewEventDescription.innerText = data.eventDescription ? data.eventDescription : '--';\n    viewEventLocation.innerText = data.eventLocation ? data.eventLocation : '--';\n    viewStartDate.innerText = startDateMod;\n    viewEndDate.innerText = endDateMod;\n  }; // Handle delete event\n\n\n  var handleDeleteEvent = function handleDeleteEvent() {\n    viewDeleteButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to delete this event?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, delete it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          calendar.getEventById(data.id).remove();\n          viewModal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your event was not deleted!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Handle edit button\n\n\n  var handleEditButton = function handleEditButton() {\n    viewEditButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      viewModal.hide();\n      handleEditEvent();\n    });\n  }; // Handle cancel button\n\n\n  var handleCancelButton = function handleCancelButton() {\n    // Edit event modal cancel button\n    cancelButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Handle close button\n\n\n  var handleCloseButton = function handleCloseButton() {\n    // Edit event modal close button\n    closeButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      Swal.fire({\n        text: \"Are you sure you would like to cancel?\",\n        icon: \"warning\",\n        showCancelButton: true,\n        buttonsStyling: false,\n        confirmButtonText: \"Yes, cancel it!\",\n        cancelButtonText: \"No, return\",\n        customClass: {\n          confirmButton: \"btn btn-primary\",\n          cancelButton: \"btn btn-active-light\"\n        }\n      }).then(function (result) {\n        if (result.value) {\n          form.reset(); // Reset form\t\n\n          modal.hide(); // Hide modal\t\t\t\t\n        } else if (result.dismiss === 'cancel') {\n          Swal.fire({\n            text: \"Your form has not been cancelled!.\",\n            icon: \"error\",\n            buttonsStyling: false,\n            confirmButtonText: \"Ok, got it!\",\n            customClass: {\n              confirmButton: \"btn btn-primary\"\n            }\n          });\n        }\n      });\n    });\n  }; // Handle view button\n\n\n  var handleViewButton = function handleViewButton() {\n    var viewButton = document.querySelector('#kt_calendar_event_view_button');\n    viewButton.addEventListener('click', function (e) {\n      e.preventDefault();\n      hidePopovers();\n      handleViewEvent();\n    });\n  }; // Helper functions\n  // Reset form validator on modal close\n\n\n  var resetFormValidator = function resetFormValidator(element) {\n    // Target modal hidden event --- For more info: https://getbootstrap.com/docs/5.0/components/modal/#events\n    element.addEventListener('hidden.bs.modal', function (e) {\n      if (validator) {\n        // Reset form validator. For more info: https://formvalidation.io/guide/api/reset-form\n        validator.resetForm(true);\n      }\n    });\n  }; // Populate form \n\n\n  var populateForm = function populateForm() {\n    eventName.value = data.eventName ? data.eventName : '';\n    eventDescription.value = data.eventDescription ? data.eventDescription : '';\n    eventLocation.value = data.eventLocation ? data.eventLocation : '';\n    startFlatpickr.setDate(data.startDate, true, 'Y-m-d'); // Handle null end dates\n\n    var endDate = data.endDate ? data.endDate : moment(data.startDate).format();\n    endFlatpickr.setDate(endDate, true, 'Y-m-d');\n    var allDayToggle = form.querySelector('#kt_calendar_datepicker_allday');\n    var datepickerWrappers = form.querySelectorAll('[data-kt-calendar=\"datepicker\"]');\n\n    if (data.allDay) {\n      allDayToggle.checked = true;\n      datepickerWrappers.forEach(function (dw) {\n        dw.classList.add('d-none');\n      });\n    } else {\n      startTimeFlatpickr.setDate(data.startDate, true, 'Y-m-d H:i');\n      endTimeFlatpickr.setDate(data.endDate, true, 'Y-m-d H:i');\n      endFlatpickr.setDate(data.startDate, true, 'Y-m-d');\n      allDayToggle.checked = false;\n      datepickerWrappers.forEach(function (dw) {\n        dw.classList.remove('d-none');\n      });\n    }\n  }; // Format FullCalendar reponses\n\n\n  var formatArgs = function formatArgs(res) {\n    data.id = res.id;\n    data.eventName = res.title;\n    data.eventDescription = res.description;\n    data.eventLocation = res.location;\n    data.startDate = res.startStr;\n    data.endDate = res.endStr;\n    data.allDay = res.allDay;\n  }; // Generate unique IDs for events\n\n\n  var uid = function uid() {\n    return Date.now().toString() + Math.floor(Math.random() * 1000).toString();\n  };\n\n  return {\n    // Public Functions\n    init: function init() {\n      // Define variables\n      // Add event modal\n      var element = document.getElementById('kt_modal_add_event');\n      form = element.querySelector('#kt_modal_add_event_form');\n      eventName = form.querySelector('[name=\"calendar_event_name\"]');\n      eventDescription = form.querySelector('[name=\"calendar_event_description\"]');\n      eventLocation = form.querySelector('[name=\"calendar_event_location\"]');\n      startDatepicker = form.querySelector('#kt_calendar_datepicker_start_date');\n      endDatepicker = form.querySelector('#kt_calendar_datepicker_end_date');\n      startTimepicker = form.querySelector('#kt_calendar_datepicker_start_time');\n      endTimepicker = form.querySelector('#kt_calendar_datepicker_end_time');\n      addButton = document.querySelector('[data-kt-calendar=\"add\"]');\n      submitButton = form.querySelector('#kt_modal_add_event_submit');\n      cancelButton = form.querySelector('#kt_modal_add_event_cancel');\n      closeButton = element.querySelector('#kt_modal_add_event_close');\n      modalTitle = form.querySelector('[data-kt-calendar=\"title\"]');\n      modal = new bootstrap.Modal(element); // View event modal\n\n      var viewElement = document.getElementById('kt_modal_view_event');\n      viewModal = new bootstrap.Modal(viewElement);\n      viewEventName = viewElement.querySelector('[data-kt-calendar=\"event_name\"]');\n      viewAllDay = viewElement.querySelector('[data-kt-calendar=\"all_day\"]');\n      viewEventDescription = viewElement.querySelector('[data-kt-calendar=\"event_description\"]');\n      viewEventLocation = viewElement.querySelector('[data-kt-calendar=\"event_location\"]');\n      viewStartDate = viewElement.querySelector('[data-kt-calendar=\"event_start_date\"]');\n      viewEndDate = viewElement.querySelector('[data-kt-calendar=\"event_end_date\"]');\n      viewEditButton = viewElement.querySelector('#kt_modal_view_event_edit');\n      viewDeleteButton = viewElement.querySelector('#kt_modal_view_event_delete');\n      initCalendarApp();\n      initValidator();\n      initDatepickers();\n      handleEditButton();\n      handleAddButton();\n      handleDeleteEvent();\n      handleCancelButton();\n      handleCloseButton();\n      resetFormValidator(element);\n    }\n  };\n}(); // On document ready\n\n\nKTUtil.onDOMContentLoaded(function () {\n  KTAppCalendar.init();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZXNvdXJjZXMvc3JjL2pzL2N1c3RvbS9hcHBzL2NhbGVuZGFyL2NhbGVuZGFyLmpzLmpzIiwibWFwcGluZ3MiOiJDQUVBOztBQUNBLElBQUlBLGFBQWEsR0FBRyxZQUFZO0FBQzVCO0FBQ0E7QUFDQSxNQUFJQyxRQUFKO0FBQ0EsTUFBSUMsSUFBSSxHQUFHO0FBQ1BDLElBQUFBLEVBQUUsRUFBRSxFQURHO0FBRVBDLElBQUFBLFNBQVMsRUFBRSxFQUZKO0FBR1BDLElBQUFBLGdCQUFnQixFQUFFLEVBSFg7QUFJUEMsSUFBQUEsYUFBYSxFQUFFLEVBSlI7QUFLUEMsSUFBQUEsU0FBUyxFQUFFLEVBTEo7QUFNUEMsSUFBQUEsT0FBTyxFQUFFLEVBTkY7QUFPUEMsSUFBQUEsTUFBTSxFQUFFO0FBUEQsR0FBWDtBQVNBLE1BQUlDLE9BQUo7QUFDQSxNQUFJQyxZQUFZLEdBQUcsS0FBbkIsQ0FkNEIsQ0FnQjVCOztBQUNBLE1BQUlQLFNBQUo7QUFDQSxNQUFJQyxnQkFBSjtBQUNBLE1BQUlDLGFBQUo7QUFDQSxNQUFJTSxlQUFKO0FBQ0EsTUFBSUMsY0FBSjtBQUNBLE1BQUlDLGFBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsZUFBSjtBQUNBLE1BQUlDLGtCQUFKO0FBQ0EsTUFBSUMsYUFBSjtBQUNBLE1BQUlDLGdCQUFKO0FBQ0EsTUFBSUMsS0FBSjtBQUNBLE1BQUlDLFVBQUo7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsU0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxZQUFKO0FBQ0EsTUFBSUMsWUFBSjtBQUNBLE1BQUlDLFdBQUosQ0FuQzRCLENBcUM1Qjs7QUFDQSxNQUFJQyxhQUFKO0FBQ0EsTUFBSUMsVUFBSjtBQUNBLE1BQUlDLG9CQUFKO0FBQ0EsTUFBSUMsaUJBQUo7QUFDQSxNQUFJQyxhQUFKO0FBQ0EsTUFBSUMsV0FBSjtBQUNBLE1BQUlDLFNBQUo7QUFDQSxNQUFJQyxjQUFKO0FBQ0EsTUFBSUMsZ0JBQUosQ0E5QzRCLENB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Z0IsR0FBRzRKLFdBQVcsQ0FBQzlELGFBQVosQ0FBMEIsNkJBQTFCLENBQW5CO0FBRUE3RixNQUFBQSxlQUFlO0FBQ2ZrRSxNQUFBQSxhQUFhO0FBQ2JjLE1BQUFBLGVBQWU7QUFDZjZELE1BQUFBLGdCQUFnQjtBQUNoQnhELE1BQUFBLGVBQWU7QUFDZnFELE1BQUFBLGlCQUFpQjtBQUNqQkksTUFBQUEsa0JBQWtCO0FBQ2xCQyxNQUFBQSxpQkFBaUI7QUFDakJFLE1BQUFBLGtCQUFrQixDQUFDOUYsT0FBRCxDQUFsQjtBQUNIO0FBMUNFLEdBQVA7QUE0Q0gsQ0FyM0JtQixFQUFwQixDLENBdTNCQTs7O0FBQ0F5RyxNQUFNLENBQUNDLGtCQUFQLENBQTBCLFlBQVk7QUFDbENsTSxFQUFBQSxhQUFhLENBQUM4TCxJQUFkO0FBQ0gsQ0FGRCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Jlc291cmNlcy9zcmMvanMvY3VzdG9tL2FwcHMvY2FsZW5kYXIvY2FsZW5kYXIuanM/MTdiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLy8gQ2xhc3MgZGVmaW5pdGlvblxudmFyIEtUQXBwQ2FsZW5kYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gU2hhcmVkIHZhcmlhYmxlc1xuICAgIC8vIENhbGVuZGFyIHZhcmlhYmxlc1xuICAgIHZhciBjYWxlbmRhcjtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgICAgaWQ6ICcnLFxuICAgICAgICBldmVudE5hbWU6ICcnLFxuICAgICAgICBldmVudERlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgZXZlbnRMb2NhdGlvbjogJycsXG4gICAgICAgIHN0YXJ0RGF0ZTogJycsXG4gICAgICAgIGVuZERhdGU6ICcnLFxuICAgICAgICBhbGxEYXk6IGZhbHNlXG4gICAgfTtcbiAgICB2YXIgcG9wb3ZlcjtcbiAgICB2YXIgcG9wb3ZlclN0YXRlID0gZmFsc2U7XG5cbiAgICAvLyBBZGQgZXZlbnQgdmFyaWFibGVzXG4gICAgdmFyIGV2ZW50TmFtZTtcbiAgICB2YXIgZXZlbnREZXNjcmlwdGlvbjtcbiAgICB2YXIgZXZlbnRMb2NhdGlvbjtcbiAgICB2YXIgc3RhcnREYXRlcGlja2VyO1xuICAgIHZhciBzdGFydEZsYXRwaWNrcjtcbiAgICB2YXIgZW5kRGF0ZXBpY2tlcjtcbiAgICB2YXIgZW5kRmxhdHBpY2tyO1xuICAgIHZhciBzdGFydFRpbWVwaWNrZXI7XG4gICAgdmFyIHN0YXJ0VGltZUZsYXRwaWNrcjtcbiAgICB2YXIgZW5kVGltZXBpY2tlclxuICAgIHZhciBlbmRUaW1lRmxhdHBpY2tyO1xuICAgIHZhciBtb2RhbDtcbiAgICB2YXIgbW9kYWxUaXRsZTtcbiAgICB2YXIgZm9ybTtcbiAgICB2YXIgdmFsaWRhdG9yO1xuICAgIHZhciBhZGRCdXR0b247XG4gICAgdmFyIHN1Ym1pdEJ1dHRvbjtcbiAgICB2YXIgY2FuY2VsQnV0dG9uO1xuICAgIHZhciBjbG9zZUJ1dHRvbjtcblxuICAgIC8vIFZpZXcgZXZlbnQgdmFyaWFibGVzXG4gICAgdmFyIHZpZXdFdmVudE5hbWU7XG4gICAgdmFyIHZpZXdBbGxEYXk7XG4gICAgdmFyIHZpZXdFdmVudERlc2NyaXB0aW9uO1xuICAgIHZhciB2aWV3RXZlbnRMb2NhdGlvbjtcbiAgICB2YXIgdmlld1N0YXJ0RGF0ZTtcbiAgICB2YXIgdmlld0VuZERhdGU7XG4gICAgdmFyIHZpZXdNb2RhbDtcbiAgICB2YXIgdmlld0VkaXRCdXR0b247XG4gICAgdmFyIHZpZXdEZWxldGVCdXR0b247XG5cblxuICAgIC8vIFByaXZhdGUgZnVuY3Rpb25zXG4gICAgdmFyIGluaXRDYWxlbmRhckFwcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gRGVmaW5lIHZhcmlhYmxlc1xuICAgICAgICB2YXIgY2FsZW5kYXJFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9jYWxlbmRhcl9hcHAnKTtcbiAgICAgICAgdmFyIHRvZGF5RGF0ZSA9IG1vbWVudCgpLnN0YXJ0T2YoJ2RheScpO1xuICAgICAgICB2YXIgWU0gPSB0b2RheURhdGUuZm9ybWF0KCdZWVlZLU1NJyk7XG4gICAgICAgIHZhciBZRVNURVJEQVkgPSB0b2RheURhdGUuY2xvbmUoKS5zdWJ0cmFjdCgxLCAnZGF5JykuZm9ybWF0KCdZWVlZLU1NLUREJyk7XG4gICAgICAgIHZhciBUT0RBWSA9IHRvZGF5RGF0ZS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgdmFyIFRPTU9SUk9XID0gdG9kYXlEYXRlLmNsb25lKCkuYWRkKDEsICdkYXknKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcblxuICAgICAgICAvLyBJbml0IGNhbGVuZGFyIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3MvaW5pdGlhbGl6ZS1nbG9iYWxzXG4gICAgICAgIGNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcihjYWxlbmRhckVsLCB7XG4gICAgICAgICAgICBoZWFkZXJUb29sYmFyOiB7XG4gICAgICAgICAgICAgICAgbGVmdDogJ3ByZXYsbmV4dCB0b2RheScsXG4gICAgICAgICAgICAgICAgY2VudGVyOiAndGl0bGUnLFxuICAgICAgICAgICAgICAgIHJpZ2h0OiAnZGF5R3JpZE1vbnRoLHRpbWVHcmlkV2Vlayx0aW1lR3JpZERheSdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbml0aWFsRGF0ZTogVE9EQVksXG4gICAgICAgICAgICBuYXZMaW5rczogdHJ1ZSwgLy8gY2FuIGNsaWNrIGRheS93ZWVrIG5hbWVzIHRvIG5hdmlnYXRlIHZpZXdzXG4gICAgICAgICAgICBzZWxlY3RhYmxlOiB0cnVlLFxuICAgICAgICAgICAgc2VsZWN0TWlycm9yOiB0cnVlLFxuXG4gICAgICAgICAgICAvLyBTZWxlY3QgZGF0ZXMgYWN0aW9uIC0tLSBtb3JlIGluZm86IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3Mvc2VsZWN0LWNhbGxiYWNrXG4gICAgICAgICAgICBzZWxlY3Q6IGZ1bmN0aW9uIChhcmcpIHtcbiAgICAgICAgICAgICAgICBoaWRlUG9wb3ZlcnMoKTtcbiAgICAgICAgICAgICAgICBmb3JtYXRBcmdzKGFyZyk7XG4gICAgICAgICAgICAgICAgaGFuZGxlTmV3RXZlbnQoKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIENsaWNrIGV2ZW50IC0tLSBtb3JlIGluZm86IGh0dHBzOi8vZnVsbGNhbGVuZGFyLmlvL2RvY3MvZXZlbnRDbGlja1xuICAgICAgICAgICAgZXZlbnRDbGljazogZnVuY3Rpb24gKGFyZykge1xuICAgICAgICAgICAgICAgIGhpZGVQb3BvdmVycygpO1xuXG4gICAgICAgICAgICAgICAgZm9ybWF0QXJncyh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhcmcuZXZlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBhcmcuZXZlbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhcmcuZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGFyZy5ldmVudC5leHRlbmRlZFByb3BzLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGFydFN0cjogYXJnLmV2ZW50LnN0YXJ0U3RyLFxuICAgICAgICAgICAgICAgICAgICBlbmRTdHI6IGFyZy5ldmVudC5lbmRTdHIsXG4gICAgICAgICAgICAgICAgICAgIGFsbERheTogYXJnLmV2ZW50LmFsbERheVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZVZpZXdFdmVudCgpO1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gTW91c2VFbnRlciBldmVudCAtLS0gbW9yZSBpbmZvOiBodHRwczovL2Z1bGxjYWxlbmRhci5pby9kb2NzL2V2ZW50TW91c2VFbnRlclxuICAgICAgICAgICAgZXZlbnRNb3VzZUVudGVyOiBmdW5jdGlvbiAoYXJnKSB7XG4gICAgICAgICAgICAgICAgZm9ybWF0QXJncyh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBhcmcuZXZlbnQuaWQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBhcmcuZXZlbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhcmcuZXZlbnQuZXh0ZW5kZWRQcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246IGFyZy5ldmVudC5leHRlbmRlZFByb3BzLmxvY2F0aW9uLFxuICAgICAgICAgICAgICAgICAgICBzdGFydFN0cjogYXJnLmV2ZW50LnN0YXJ0U3RyLFxuICAgICAgICAgICAgICAgICAgICBlbmRTdHI6IGFyZy5ldmVudC5lbmRTdHIsXG4gICAgICAgICAgICAgICAgICAgIGFsbERheTogYXJnLmV2ZW50LmFsbERheVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBwb3BvdmVyIHByZXZpZXdcbiAgICAgICAgICAgICAgICBpbml0UG9wb3ZlcnMoYXJnLmVsKTtcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZGF5TWF4RXZlbnRzOiB0cnVlLCAvLyBhbGxvdyBcIm1vcmVcIiBsaW5rIHdoZW4gdG9vIG1hbnkgZXZlbnRzXG4gICAgICAgICAgICBldmVudHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbGwgRGF5IEV2ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMScsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTAyJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdUb3RvIGxvcmVtIGlwc3VtIGRvbG9yIHNpdCBpbmNpZCBpZHVudCB1dCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1kYW5nZXIgZmMtZXZlbnQtc29saWQtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ0ZlZGVyYXRpb24gU3F1YXJlJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVwb3J0aW5nJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0xNFQxMzozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgaW5jaWQgaWR1bnQgdXQgbGFib3JlJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMTRUMTQ6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ01lZXRpbmcgUm9vbSA3LjAzJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnQ29tcGFueSBUcmlwJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wMicsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IHRlbXBvciBpbmNpZCcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTAzJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246ICdTZW91bCwgS29yZWEnXG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0lDVCBFeHBvIDIwMjEgLSBQcm9kdWN0IFJlbGVhc2UnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTAzJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgdGVtcG9yIGluY2knLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0wNScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1saWdodCBmYy1ldmVudC1zb2xpZC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnTWVsYm91cm5lIEV4aGliaXRpb24gSGFsbCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0Rpbm5lcicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBZTSArICctMTInLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZSBjdGV0dXInLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFlNICsgJy0xMycsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnU3F1aXJlXFwncyBMb2Z0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnUmVwZWF0aW5nIEV2ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0wOVQxNjowMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTA5VDE3OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgbmNpZGlkdW50IHV0IGxhYm9yZScsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246ICdHZW5lcmFsIEFyZWEnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdSZXBlYXRpbmcgRXZlbnQnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWU0gKyAnLTE2VDE2OjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBZTSArICctMTZUMTc6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ0dlbmVyYWwgQXJlYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvbmZlcmVuY2UnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogWUVTVEVSREFZLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPTU9SUk9XLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIGVpdXMgbW9kIHRlbXBvciBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ0NvbmZlcmVuY2UgSGFsbCBBJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTWVldGluZycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTA6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPREFZICsgJ1QxMjozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3IgZWl1IGlkdW50IHV0IGxhYm9yZScsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnTWVldGluZyBSb29tIDExLjA2J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnTHVuY2gnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9EQVkgKyAnVDEyOjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBUT0RBWSArICdUMTQ6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCB1dCBsYWJvcmUnLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ0NhZmV0ZXJpYSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHVpZCgpLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ01lZXRpbmcnLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogVE9EQVkgKyAnVDE0OjMwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiBUT0RBWSArICdUMTU6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU6IFwiZmMtZXZlbnQtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGNvbnNlIGN0ZXR1ciBhZGlwaSBzY2luZycsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnTWVldGluZyBSb29tIDExLjEwJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnSGFwcHkgSG91cicsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT0RBWSArICdUMTc6MzA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPREFZICsgJ1QyMTozMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlIGN0ZXR1cicsXG4gICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiAnVGhlIEVuZ2xpc2ggUHViJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnRGlubmVyJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFRPTU9SUk9XICsgJ1QxODowMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogVE9NT1JST1cgKyAnVDIxOjAwOjAwJyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXNvbGlkLWRhbmdlciBmYy1ldmVudC1saWdodFwiLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBjdGV0dXIgYWRpcGkgc2NpbmcnLFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogJ05ldyBZb3JrIFN0ZWFraG91c2UnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdCaXJ0aGRheSBQYXJ0eScsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBUT01PUlJPVyArICdUMTI6MDA6MDAnLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IFRPTU9SUk9XICsgJ1QxNDowMDowMCcsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZTogXCJmYy1ldmVudC1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIHNjaW5nJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246ICdUaGUgRW5nbGlzaCBQdWInXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdTaXRlIHZpc2l0JyxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IFlNICsgJy0yOCcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogWU0gKyAnLTI5JyxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBcImZjLWV2ZW50LXNvbGlkLWluZm8gZmMtZXZlbnQtbGlnaHRcIixcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgbGFib3JlJyxcbiAgICAgICAgICAgICAgICAgICAgbG9jYXRpb246ICcyNzEsIFNwcmluZyBTdHJlZXQnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8gUmVzZXQgcG9wb3ZlcnMgd2hlbiBjaGFuZ2luZyBjYWxlbmRhciB2aWV3cyAtLS0gbW9yZSBpbmZvOiBodHRwczovL2Z1bGxjYWxlbmRhci5pby9kb2NzL2RhdGVzU2V0XG4gICAgICAgICAgICBkYXRlc1NldDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBoaWRlUG9wb3ZlcnMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgY2FsZW5kYXIucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVycyAtLS0gbW9yZSBpbmZvOiBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy80LjAvY29tcG9uZW50cy9wb3BvdmVycy9cbiAgICBjb25zdCBpbml0UG9wb3ZlcnMgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICBoaWRlUG9wb3ZlcnMoKTtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBwb3BvdmVyIGNvbnRlbnRcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gZGF0YS5hbGxEYXkgPyBtb21lbnQoZGF0YS5zdGFydERhdGUpLmZvcm1hdCgnRG8gTU1NLCBZWVlZJykgOiBtb21lbnQoZGF0YS5zdGFydERhdGUpLmZvcm1hdCgnRG8gTU1NLCBZWVlZIC0gaDptbSBhJyk7XG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBkYXRhLmFsbERheSA/IG1vbWVudChkYXRhLmVuZERhdGUpLmZvcm1hdCgnRG8gTU1NLCBZWVlZJykgOiBtb21lbnQoZGF0YS5lbmREYXRlKS5mb3JtYXQoJ0RvIE1NTSwgWVlZWSAtIGg6bW0gYScpO1xuICAgICAgICBjb25zdCBwb3BvdmVySHRtbCA9ICc8ZGl2IGNsYXNzPVwiZnctYm9sZGVyIG1iLTJcIj4nICsgZGF0YS5ldmVudE5hbWUgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImZzLTdcIj48c3BhbiBjbGFzcz1cImZ3LWJvbGRcIj5TdGFydDo8L3NwYW4+ICcgKyBzdGFydERhdGUgKyAnPC9kaXY+PGRpdiBjbGFzcz1cImZzLTcgbWItNFwiPjxzcGFuIGNsYXNzPVwiZnctYm9sZFwiPkVuZDo8L3NwYW4+ICcgKyBlbmREYXRlICsgJzwvZGl2PjxkaXYgaWQ9XCJrdF9jYWxlbmRhcl9ldmVudF92aWV3X2J1dHRvblwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLWxpZ2h0LXByaW1hcnlcIj5WaWV3IE1vcmU8L2Rpdj4nO1xuXG4gICAgICAgIC8vIFBvcG92ZXIgb3B0aW9uc1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbnRhaW5lcjogJ2JvZHknLFxuICAgICAgICAgICAgdHJpZ2dlcjogJ21hbnVhbCcsXG4gICAgICAgICAgICBib3VuZGFyeTogJ3dpbmRvdycsXG4gICAgICAgICAgICBwbGFjZW1lbnQ6ICdhdXRvJyxcbiAgICAgICAgICAgIGRpc21pc3M6IHRydWUsXG4gICAgICAgICAgICBodG1sOiB0cnVlLFxuICAgICAgICAgICAgdGl0bGU6ICdFdmVudCBTdW1tYXJ5JyxcbiAgICAgICAgICAgIGNvbnRlbnQ6IHBvcG92ZXJIdG1sLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBwb3BvdmVyXG4gICAgICAgIHBvcG92ZXIgPSBLVEFwcC5pbml0Qm9vdHN0cmFwUG9wb3ZlcihlbGVtZW50LCBvcHRpb25zKTtcblxuICAgICAgICAvLyBTaG93IHBvcG92ZXJcbiAgICAgICAgcG9wb3Zlci5zaG93KCk7XG5cbiAgICAgICAgLy8gVXBkYXRlIHBvcG92ZXIgc3RhdGVcbiAgICAgICAgcG9wb3ZlclN0YXRlID0gdHJ1ZTtcblxuICAgICAgICAvLyBPcGVuIHZpZXcgZXZlbnQgbW9kYWxcbiAgICAgICAgaGFuZGxlVmlld0J1dHRvbigpO1xuICAgIH1cblxuICAgIC8vIEhpZGUgYWN0aXZlIHBvcG92ZXJzXG4gICAgY29uc3QgaGlkZVBvcG92ZXJzID0gKCkgPT4ge1xuICAgICAgICBpZiAocG9wb3ZlclN0YXRlKSB7XG4gICAgICAgICAgICBwb3BvdmVyLmRpc3Bvc2UoKTtcbiAgICAgICAgICAgIHBvcG92ZXJTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gSW5pdCB2YWxpZGF0b3JcbiAgICBjb25zdCBpbml0VmFsaWRhdG9yID0gKCkgPT4ge1xuICAgICAgICAvLyBJbml0IGZvcm0gdmFsaWRhdGlvbiBydWxlcy4gRm9yIG1vcmUgaW5mbyBjaGVjayB0aGUgRm9ybVZhbGlkYXRpb24gcGx1Z2luJ3Mgb2ZmaWNpYWwgZG9jdW1lbnRhdGlvbjpodHRwczovL2Zvcm12YWxpZGF0aW9uLmlvL1xuICAgICAgICB2YWxpZGF0b3IgPSBGb3JtVmFsaWRhdGlvbi5mb3JtVmFsaWRhdGlvbihcbiAgICAgICAgICAgIGZvcm0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZmllbGRzOiB7XG4gICAgICAgICAgICAgICAgICAgICdjYWxlbmRhcl9ldmVudF9uYW1lJzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vdEVtcHR5OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFdmVudCBuYW1lIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgJ2NhbGVuZGFyX2V2ZW50X3N0YXJ0X2RhdGUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1N0YXJ0IGRhdGUgaXMgcmVxdWlyZWQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAnY2FsZW5kYXJfZXZlbnRfZW5kX2RhdGUnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90RW1wdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ0VuZCBkYXRlIGlzIHJlcXVpcmVkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBwbHVnaW5zOiB7XG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXI6IG5ldyBGb3JtVmFsaWRhdGlvbi5wbHVnaW5zLlRyaWdnZXIoKSxcbiAgICAgICAgICAgICAgICAgICAgYm9vdHN0cmFwOiBuZXcgRm9ybVZhbGlkYXRpb24ucGx1Z2lucy5Cb290c3RyYXA1KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1NlbGVjdG9yOiAnLmZ2LXJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVJbnZhbGlkQ2xhc3M6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlVmFsaWRDbGFzczogJydcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRlcGlja2VycyAtLS0gbW9yZSBpbmZvOiBodHRwczovL2ZsYXRwaWNrci5qcy5vcmcvXG4gICAgY29uc3QgaW5pdERhdGVwaWNrZXJzID0gKCkgPT4ge1xuICAgICAgICBzdGFydEZsYXRwaWNrciA9IGZsYXRwaWNrcihzdGFydERhdGVwaWNrZXIsIHtcbiAgICAgICAgICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxuICAgICAgICB9KTtcblxuICAgICAgICBlbmRGbGF0cGlja3IgPSBmbGF0cGlja3IoZW5kRGF0ZXBpY2tlciwge1xuICAgICAgICAgICAgZW5hYmxlVGltZTogZmFsc2UsXG4gICAgICAgICAgICBkYXRlRm9ybWF0OiBcIlktbS1kXCIsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHN0YXJ0VGltZUZsYXRwaWNrciA9IGZsYXRwaWNrcihzdGFydFRpbWVwaWNrZXIsIHtcbiAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRydWUsXG4gICAgICAgICAgICBub0NhbGVuZGFyOiB0cnVlLFxuICAgICAgICAgICAgZGF0ZUZvcm1hdDogXCJIOmlcIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZW5kVGltZUZsYXRwaWNrciA9IGZsYXRwaWNrcihlbmRUaW1lcGlja2VyLCB7XG4gICAgICAgICAgICBlbmFibGVUaW1lOiB0cnVlLFxuICAgICAgICAgICAgbm9DYWxlbmRhcjogdHJ1ZSxcbiAgICAgICAgICAgIGRhdGVGb3JtYXQ6IFwiSDppXCIsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhZGQgYnV0dG9uXG4gICAgY29uc3QgaGFuZGxlQWRkQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBhZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGhpZGVQb3BvdmVycygpO1xuXG4gICAgICAgICAgICAvLyBSZXNldCBmb3JtIGRhdGFcbiAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJycsXG4gICAgICAgICAgICAgICAgZXZlbnREZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICAgICAgICAgIGVuZERhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgYWxsRGF5OiBmYWxzZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGhhbmRsZU5ld0V2ZW50KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBhZGQgbmV3IGV2ZW50XG4gICAgY29uc3QgaGFuZGxlTmV3RXZlbnQgPSAoKSA9PiB7XG4gICAgICAgIC8vIFVwZGF0ZSBtb2RhbCB0aXRsZVxuICAgICAgICBtb2RhbFRpdGxlLmlubmVyVGV4dCA9IFwiQWRkIGEgTmV3IEV2ZW50XCI7XG5cbiAgICAgICAgbW9kYWwuc2hvdygpO1xuXG4gICAgICAgIC8vIFNlbGVjdCBkYXRlcGlja2VyIHdyYXBwZXIgZWxlbWVudHNcbiAgICAgICAgY29uc3QgZGF0ZXBpY2tlcldyYXBwZXJzID0gZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1rdC1jYWxlbmRhcj1cImRhdGVwaWNrZXJcIl0nKTtcblxuICAgICAgICAvLyBIYW5kbGUgYWxsIGRheSB0b2dnbGVcbiAgICAgICAgY29uc3QgYWxsRGF5VG9nZ2xlID0gZm9ybS5xdWVyeVNlbGVjdG9yKCcja3RfY2FsZW5kYXJfZGF0ZXBpY2tlcl9hbGxkYXknKTtcbiAgICAgICAgYWxsRGF5VG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXJXcmFwcGVycy5mb3JFYWNoKGR3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHcuY2xhc3NMaXN0LmFkZCgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVuZEZsYXRwaWNrci5zZXREYXRlKGRhdGEuc3RhcnREYXRlLCB0cnVlLCAnWS1tLWQnKTtcbiAgICAgICAgICAgICAgICBkYXRlcGlja2VyV3JhcHBlcnMuZm9yRWFjaChkdyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGR3LmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwb3B1bGF0ZUZvcm0oZGF0YSk7XG5cbiAgICAgICAgLy8gSGFuZGxlIHN1Ym1pdCBmb3JtXG4gICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBQcmV2ZW50IGRlZmF1bHQgYnV0dG9uIGFjdGlvblxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSBmb3JtIGJlZm9yZSBzdWJtaXRcbiAgICAgICAgICAgIGlmICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IudmFsaWRhdGUoKS50aGVuKGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3ZhbGlkYXRlZCEnKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09ICdWYWxpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgbG9hZGluZyBpbmRpY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uc2V0QXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicsICdvbicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEaXNhYmxlIHN1Ym1pdCBidXR0b24gd2hpbHN0IGxvYWRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbXVsYXRlIGZvcm0gc3VibWlzc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1rdC1pbmRpY2F0b3InKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgY29uZmlybWF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiTmV3IGV2ZW50IGFkZGVkIHRvIGNhbGVuZGFyIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuaXNDb25maXJtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmhpZGUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRW5hYmxlIHN1Ym1pdCBidXR0b24gYWZ0ZXIgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERldGVjdCBpZiBpcyBhbGwgZGF5IGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWxsRGF5RXZlbnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhbGxEYXlUb2dnbGUuY2hlY2tlZCkgeyBhbGxEYXlFdmVudCA9IHRydWU7IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGFydFRpbWVGbGF0cGlja3Iuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApIHsgYWxsRGF5RXZlbnQgPSB0cnVlOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE1lcmdlIGRhdGUgJiB0aW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhcnREYXRlVGltZSA9IG1vbWVudChzdGFydEZsYXRwaWNrci5zZWxlY3RlZERhdGVzWzBdKS5mb3JtYXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbmREYXRlVGltZSA9IG1vbWVudChlbmRGbGF0cGlja3Iuc2VsZWN0ZWREYXRlc1tlbmRGbGF0cGlja3Iuc2VsZWN0ZWREYXRlcy5sZW5ndGggLSAxXSkuZm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFsbERheUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gbW9tZW50KHN0YXJ0RmxhdHBpY2tyLnNlbGVjdGVkRGF0ZXNbMF0pLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZERhdGUgPSBzdGFydERhdGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gbW9tZW50KHN0YXJ0VGltZUZsYXRwaWNrci5zZWxlY3RlZERhdGVzWzBdKS5mb3JtYXQoJ0hIOm1tOnNzJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5kVGltZSA9IG1vbWVudChlbmRUaW1lRmxhdHBpY2tyLnNlbGVjdGVkRGF0ZXNbMF0pLmZvcm1hdCgnSEg6bW06c3MnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZVRpbWUgPSBzdGFydERhdGUgKyAnVCcgKyBzdGFydFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZVRpbWUgPSBlbmREYXRlICsgJ1QnICsgZW5kVGltZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWRkIG5ldyBldmVudCB0byBjYWxlbmRhclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXIuYWRkRXZlbnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB1aWQoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogZXZlbnROYW1lLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBldmVudERlc2NyaXB0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uOiBldmVudExvY2F0aW9uLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBzdGFydERhdGVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZDogZW5kRGF0ZVRpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxsRGF5OiBhbGxEYXlFdmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxlbmRhci5yZW5kZXIoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzZXQgZm9ybSBmb3IgZGVtbyBwdXJwb3NlcyBvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vZm9ybS5zdWJtaXQoKTsgLy8gU3VibWl0IGZvcm1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCB3YXJuaW5nIFxuICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIlNvcnJ5LCBsb29rcyBsaWtlIHRoZXJlIGFyZSBzb21lIGVycm9ycyBkZXRlY3RlZCwgcGxlYXNlIHRyeSBhZ2Fpbi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGl0IGV2ZW50XG4gICAgY29uc3QgaGFuZGxlRWRpdEV2ZW50ID0gKCkgPT4ge1xuICAgICAgICAvLyBVcGRhdGUgbW9kYWwgdGl0bGVcbiAgICAgICAgbW9kYWxUaXRsZS5pbm5lclRleHQgPSBcIkVkaXQgYW4gRXZlbnRcIjtcblxuICAgICAgICBtb2RhbC5zaG93KCk7XG5cbiAgICAgICAgLy8gU2VsZWN0IGRhdGVwaWNrZXIgd3JhcHBlciBlbGVtZW50c1xuICAgICAgICBjb25zdCBkYXRlcGlja2VyV3JhcHBlcnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWNhbGVuZGFyPVwiZGF0ZXBpY2tlclwiXScpO1xuXG4gICAgICAgIC8vIEhhbmRsZSBhbGwgZGF5IHRvZ2dsZVxuICAgICAgICBjb25zdCBhbGxEYXlUb2dnbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9jYWxlbmRhcl9kYXRlcGlja2VyX2FsbGRheScpO1xuICAgICAgICBhbGxEYXlUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgZGF0ZXBpY2tlcldyYXBwZXJzLmZvckVhY2goZHcgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkdy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZW5kRmxhdHBpY2tyLnNldERhdGUoZGF0YS5zdGFydERhdGUsIHRydWUsICdZLW0tZCcpO1xuICAgICAgICAgICAgICAgIGRhdGVwaWNrZXJXcmFwcGVycy5mb3JFYWNoKGR3ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZHcuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBvcHVsYXRlRm9ybShkYXRhKTtcblxuICAgICAgICAvLyBIYW5kbGUgc3VibWl0IGZvcm1cbiAgICAgICAgc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBidXR0b24gYWN0aW9uXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIFZhbGlkYXRlIGZvcm0gYmVmb3JlIHN1Ym1pdFxuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci52YWxpZGF0ZSgpLnRoZW4oZnVuY3Rpb24gKHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndmFsaWRhdGVkIScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT0gJ1ZhbGlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIGluZGljYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2RhdGEta3QtaW5kaWNhdG9yJywgJ29uJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIERpc2FibGUgc3VibWl0IGJ1dHRvbiB3aGlsc3QgbG9hZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VibWl0QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2ltdWxhdGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW11bGF0ZSBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWt0LWluZGljYXRvcicpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBwb3B1cCBjb25maXJtYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJOZXcgZXZlbnQgYWRkZWQgdG8gY2FsZW5kYXIhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwic3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5pc0NvbmZpcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBFbmFibGUgc3VibWl0IGJ1dHRvbiBhZnRlciBsb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXRCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIG9sZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXIuZ2V0RXZlbnRCeUlkKGRhdGEuaWQpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBEZXRlY3QgaWYgaXMgYWxsIGRheSBldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFsbERheUV2ZW50ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWxsRGF5VG9nZ2xlLmNoZWNrZWQpIHsgYWxsRGF5RXZlbnQgPSB0cnVlOyB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhcnRUaW1lRmxhdHBpY2tyLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAwKSB7IGFsbERheUV2ZW50ID0gdHJ1ZTsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBNZXJnZSBkYXRlICYgdGltZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXJ0RGF0ZVRpbWUgPSBtb21lbnQoc3RhcnRGbGF0cGlja3Iuc2VsZWN0ZWREYXRlc1swXSkuZm9ybWF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZW5kRGF0ZVRpbWUgPSBtb21lbnQoZW5kRmxhdHBpY2tyLnNlbGVjdGVkRGF0ZXNbZW5kRmxhdHBpY2tyLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIC0gMV0pLmZvcm1hdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGxEYXlFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IG1vbWVudChzdGFydEZsYXRwaWNrci5zZWxlY3RlZERhdGVzWzBdKS5mb3JtYXQoJ1lZWVktTU0tREQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IG1vbWVudChzdGFydFRpbWVGbGF0cGlja3Iuc2VsZWN0ZWREYXRlc1swXSkuZm9ybWF0KCdISDptbTpzcycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVuZFRpbWUgPSBtb21lbnQoZW5kVGltZUZsYXRwaWNrci5zZWxlY3RlZERhdGVzWzBdKS5mb3JtYXQoJ0hIOm1tOnNzJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydERhdGVUaW1lID0gc3RhcnREYXRlICsgJ1QnICsgc3RhcnRUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZERhdGVUaW1lID0gZW5kRGF0ZSArICdUJyArIGVuZFRpbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBuZXcgZXZlbnQgdG8gY2FsZW5kYXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGVuZGFyLmFkZEV2ZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdWlkKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGV2ZW50TmFtZS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZXZlbnREZXNjcmlwdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbjogZXZlbnRMb2NhdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogc3RhcnREYXRlVGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmQ6IGVuZERhdGVUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsbERheTogYWxsRGF5RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsZW5kYXIucmVuZGVyKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IGZvcm0gZm9yIGRlbW8gcHVycG9zZXMgb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2Zvcm0uc3VibWl0KCk7IC8vIFN1Ym1pdCBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3cgcG9wdXAgd2FybmluZyBcbiAgICAgICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJTb3JyeSwgbG9va3MgbGlrZSB0aGVyZSBhcmUgc29tZSBlcnJvcnMgZGV0ZWN0ZWQsIHBsZWFzZSB0cnkgYWdhaW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdmlldyBldmVudFxuICAgIGNvbnN0IGhhbmRsZVZpZXdFdmVudCA9ICgpID0+IHtcbiAgICAgICAgdmlld01vZGFsLnNob3coKTtcblxuICAgICAgICAvLyBEZXRlY3QgYWxsIGRheSBldmVudFxuICAgICAgICB2YXIgZXZlbnROYW1lTW9kO1xuICAgICAgICB2YXIgc3RhcnREYXRlTW9kO1xuICAgICAgICB2YXIgZW5kRGF0ZU1vZDtcblxuICAgICAgICAvLyBHZW5lcmF0ZSBsYWJlbHNcbiAgICAgICAgaWYgKGRhdGEuYWxsRGF5KSB7XG4gICAgICAgICAgICBldmVudE5hbWVNb2QgPSAnQWxsIERheSc7XG4gICAgICAgICAgICBzdGFydERhdGVNb2QgPSBtb21lbnQoZGF0YS5zdGFydERhdGUpLmZvcm1hdCgnRG8gTU1NLCBZWVlZJyk7XG4gICAgICAgICAgICBlbmREYXRlTW9kID0gbW9tZW50KGRhdGEuZW5kRGF0ZSkuZm9ybWF0KCdEbyBNTU0sIFlZWVknKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50TmFtZU1vZCA9ICcnO1xuICAgICAgICAgICAgc3RhcnREYXRlTW9kID0gbW9tZW50KGRhdGEuc3RhcnREYXRlKS5mb3JtYXQoJ0RvIE1NTSwgWVlZWSAtIGg6bW0gYScpO1xuICAgICAgICAgICAgZW5kRGF0ZU1vZCA9IG1vbWVudChkYXRhLmVuZERhdGUpLmZvcm1hdCgnRG8gTU1NLCBZWVlZIC0gaDptbSBhJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQb3B1bGF0ZSB2aWV3IGRhdGFcbiAgICAgICAgdmlld0V2ZW50TmFtZS5pbm5lclRleHQgPSBkYXRhLmV2ZW50TmFtZTtcbiAgICAgICAgdmlld0FsbERheS5pbm5lclRleHQgPSBldmVudE5hbWVNb2Q7XG4gICAgICAgIHZpZXdFdmVudERlc2NyaXB0aW9uLmlubmVyVGV4dCA9IGRhdGEuZXZlbnREZXNjcmlwdGlvbiA/IGRhdGEuZXZlbnREZXNjcmlwdGlvbiA6ICctLSc7XG4gICAgICAgIHZpZXdFdmVudExvY2F0aW9uLmlubmVyVGV4dCA9IGRhdGEuZXZlbnRMb2NhdGlvbiA/IGRhdGEuZXZlbnRMb2NhdGlvbiA6ICctLSc7XG4gICAgICAgIHZpZXdTdGFydERhdGUuaW5uZXJUZXh0ID0gc3RhcnREYXRlTW9kO1xuICAgICAgICB2aWV3RW5kRGF0ZS5pbm5lclRleHQgPSBlbmREYXRlTW9kO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBkZWxldGUgZXZlbnRcbiAgICBjb25zdCBoYW5kbGVEZWxldGVFdmVudCA9ICgpID0+IHtcbiAgICAgICAgdmlld0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGRlbGV0ZSB0aGlzIGV2ZW50P1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgZGVsZXRlIGl0IVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxlbmRhci5nZXRFdmVudEJ5SWQoZGF0YS5pZCkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdmlld01vZGFsLmhpZGUoKTsgLy8gSGlkZSBtb2RhbFx0XHRcdFx0XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXN1bHQuZGlzbWlzcyA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgU3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IFwiWW91ciBldmVudCB3YXMgbm90IGRlbGV0ZWQhLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogXCJlcnJvclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvblRleHQ6IFwiT2ssIGdvdCBpdCFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybUJ1dHRvbjogXCJidG4gYnRuLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSBlZGl0IGJ1dHRvblxuICAgIGNvbnN0IGhhbmRsZUVkaXRCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIHZpZXdFZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHZpZXdNb2RhbC5oaWRlKCk7XG4gICAgICAgICAgICBoYW5kbGVFZGl0RXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNhbmNlbCBidXR0b25cbiAgICBjb25zdCBoYW5kbGVDYW5jZWxCdXR0b24gPSAoKSA9PiB7XG4gICAgICAgIC8vIEVkaXQgZXZlbnQgbW9kYWwgY2FuY2VsIGJ1dHRvblxuICAgICAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IFwiQXJlIHlvdSBzdXJlIHlvdSB3b3VsZCBsaWtlIHRvIGNhbmNlbD9cIixcbiAgICAgICAgICAgICAgICBpY29uOiBcIndhcm5pbmdcIixcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJZZXMsIGNhbmNlbCBpdCFcIixcbiAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b25UZXh0OiBcIk5vLCByZXR1cm5cIixcbiAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxCdXR0b246IFwiYnRuIGJ0bi1hY3RpdmUtbGlnaHRcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybS5yZXNldCgpOyAvLyBSZXNldCBmb3JtXHRcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuaGlkZSgpOyAvLyBIaWRlIG1vZGFsXHRcdFx0XHRcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc3VsdC5kaXNtaXNzID09PSAnY2FuY2VsJykge1xuICAgICAgICAgICAgICAgICAgICBTd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogXCJZb3VyIGZvcm0gaGFzIG5vdCBiZWVuIGNhbmNlbGxlZCEuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcImVycm9yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uVGV4dDogXCJPaywgZ290IGl0IVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VzdG9tQ2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtQnV0dG9uOiBcImJ0biBidG4tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIGNsb3NlIGJ1dHRvblxuICAgIGNvbnN0IGhhbmRsZUNsb3NlQnV0dG9uID0gKCkgPT4ge1xuICAgICAgICAvLyBFZGl0IGV2ZW50IG1vZGFsIGNsb3NlIGJ1dHRvblxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogXCJBcmUgeW91IHN1cmUgeW91IHdvdWxkIGxpa2UgdG8gY2FuY2VsP1wiLFxuICAgICAgICAgICAgICAgIGljb246IFwid2FybmluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICAgICAgICAgICAgYnV0dG9uc1N0eWxpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIlllcywgY2FuY2VsIGl0IVwiLFxuICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiTm8sIHJldHVyblwiLFxuICAgICAgICAgICAgICAgIGN1c3RvbUNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbEJ1dHRvbjogXCJidG4gYnRuLWFjdGl2ZS1saWdodFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7IC8vIFJlc2V0IGZvcm1cdFxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5oaWRlKCk7IC8vIEhpZGUgbW9kYWxcdFx0XHRcdFxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzdWx0LmRpc21pc3MgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgIFN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIllvdXIgZm9ybSBoYXMgbm90IGJlZW4gY2FuY2VsbGVkIS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwiZXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbnNTdHlsaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBcIk9rLCBnb3QgaXQhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21DbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1CdXR0b246IFwiYnRuIGJ0bi1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdmlldyBidXR0b25cbiAgICBjb25zdCBoYW5kbGVWaWV3QnV0dG9uID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2aWV3QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2t0X2NhbGVuZGFyX2V2ZW50X3ZpZXdfYnV0dG9uJyk7XG4gICAgICAgIHZpZXdCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaGlkZVBvcG92ZXJzKCk7XG4gICAgICAgICAgICBoYW5kbGVWaWV3RXZlbnQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uc1xuXG4gICAgLy8gUmVzZXQgZm9ybSB2YWxpZGF0b3Igb24gbW9kYWwgY2xvc2VcbiAgICBjb25zdCByZXNldEZvcm1WYWxpZGF0b3IgPSAoZWxlbWVudCkgPT4ge1xuICAgICAgICAvLyBUYXJnZXQgbW9kYWwgaGlkZGVuIGV2ZW50IC0tLSBGb3IgbW9yZSBpbmZvOiBodHRwczovL2dldGJvb3RzdHJhcC5jb20vZG9jcy81LjAvY29tcG9uZW50cy9tb2RhbC8jZXZlbnRzXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaGlkZGVuLmJzLm1vZGFsJywgZSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgLy8gUmVzZXQgZm9ybSB2YWxpZGF0b3IuIEZvciBtb3JlIGluZm86IGh0dHBzOi8vZm9ybXZhbGlkYXRpb24uaW8vZ3VpZGUvYXBpL3Jlc2V0LWZvcm1cbiAgICAgICAgICAgICAgICB2YWxpZGF0b3IucmVzZXRGb3JtKHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQb3B1bGF0ZSBmb3JtIFxuICAgIGNvbnN0IHBvcHVsYXRlRm9ybSA9ICgpID0+IHtcbiAgICAgICAgZXZlbnROYW1lLnZhbHVlID0gZGF0YS5ldmVudE5hbWUgPyBkYXRhLmV2ZW50TmFtZSA6ICcnO1xuICAgICAgICBldmVudERlc2NyaXB0aW9uLnZhbHVlID0gZGF0YS5ldmVudERlc2NyaXB0aW9uID8gZGF0YS5ldmVudERlc2NyaXB0aW9uIDogJyc7XG4gICAgICAgIGV2ZW50TG9jYXRpb24udmFsdWUgPSBkYXRhLmV2ZW50TG9jYXRpb24gPyBkYXRhLmV2ZW50TG9jYXRpb24gOiAnJztcbiAgICAgICAgc3RhcnRGbGF0cGlja3Iuc2V0RGF0ZShkYXRhLnN0YXJ0RGF0ZSwgdHJ1ZSwgJ1ktbS1kJyk7XG5cbiAgICAgICAgLy8gSGFuZGxlIG51bGwgZW5kIGRhdGVzXG4gICAgICAgIGNvbnN0IGVuZERhdGUgPSBkYXRhLmVuZERhdGUgPyBkYXRhLmVuZERhdGUgOiBtb21lbnQoZGF0YS5zdGFydERhdGUpLmZvcm1hdCgpO1xuICAgICAgICBlbmRGbGF0cGlja3Iuc2V0RGF0ZShlbmREYXRlLCB0cnVlLCAnWS1tLWQnKTtcblxuICAgICAgICBjb25zdCBhbGxEYXlUb2dnbGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9jYWxlbmRhcl9kYXRlcGlja2VyX2FsbGRheScpO1xuICAgICAgICBjb25zdCBkYXRlcGlja2VyV3JhcHBlcnMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWt0LWNhbGVuZGFyPVwiZGF0ZXBpY2tlclwiXScpO1xuICAgICAgICBpZiAoZGF0YS5hbGxEYXkpIHtcbiAgICAgICAgICAgIGFsbERheVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIGRhdGVwaWNrZXJXcmFwcGVycy5mb3JFYWNoKGR3ID0+IHtcbiAgICAgICAgICAgICAgICBkdy5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRUaW1lRmxhdHBpY2tyLnNldERhdGUoZGF0YS5zdGFydERhdGUsIHRydWUsICdZLW0tZCBIOmknKTtcbiAgICAgICAgICAgIGVuZFRpbWVGbGF0cGlja3Iuc2V0RGF0ZShkYXRhLmVuZERhdGUsIHRydWUsICdZLW0tZCBIOmknKTtcbiAgICAgICAgICAgIGVuZEZsYXRwaWNrci5zZXREYXRlKGRhdGEuc3RhcnREYXRlLCB0cnVlLCAnWS1tLWQnKTtcbiAgICAgICAgICAgIGFsbERheVRvZ2dsZS5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRlcGlja2VyV3JhcHBlcnMuZm9yRWFjaChkdyA9PiB7XG4gICAgICAgICAgICAgICAgZHcuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIEZvcm1hdCBGdWxsQ2FsZW5kYXIgcmVwb25zZXNcbiAgICBjb25zdCBmb3JtYXRBcmdzID0gKHJlcykgPT4ge1xuICAgICAgICBkYXRhLmlkID0gcmVzLmlkO1xuICAgICAgICBkYXRhLmV2ZW50TmFtZSA9IHJlcy50aXRsZTtcbiAgICAgICAgZGF0YS5ldmVudERlc2NyaXB0aW9uID0gcmVzLmRlc2NyaXB0aW9uO1xuICAgICAgICBkYXRhLmV2ZW50TG9jYXRpb24gPSByZXMubG9jYXRpb247XG4gICAgICAgIGRhdGEuc3RhcnREYXRlID0gcmVzLnN0YXJ0U3RyO1xuICAgICAgICBkYXRhLmVuZERhdGUgPSByZXMuZW5kU3RyO1xuICAgICAgICBkYXRhLmFsbERheSA9IHJlcy5hbGxEYXk7XG4gICAgfVxuXG4gICAgLy8gR2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgZXZlbnRzXG4gICAgY29uc3QgdWlkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gRGF0ZS5ub3coKS50b1N0cmluZygpICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwMCkudG9TdHJpbmcoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBQdWJsaWMgRnVuY3Rpb25zXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIERlZmluZSB2YXJpYWJsZXNcbiAgICAgICAgICAgIC8vIEFkZCBldmVudCBtb2RhbFxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9tb2RhbF9hZGRfZXZlbnQnKTtcbiAgICAgICAgICAgIGZvcm0gPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGRfZXZlbnRfZm9ybScpO1xuICAgICAgICAgICAgZXZlbnROYW1lID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNhbGVuZGFyX2V2ZW50X25hbWVcIl0nKTtcbiAgICAgICAgICAgIGV2ZW50RGVzY3JpcHRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2FsZW5kYXJfZXZlbnRfZGVzY3JpcHRpb25cIl0nKTtcbiAgICAgICAgICAgIGV2ZW50TG9jYXRpb24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY2FsZW5kYXJfZXZlbnRfbG9jYXRpb25cIl0nKTtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZXBpY2tlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2NhbGVuZGFyX2RhdGVwaWNrZXJfc3RhcnRfZGF0ZScpO1xuICAgICAgICAgICAgZW5kRGF0ZXBpY2tlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2NhbGVuZGFyX2RhdGVwaWNrZXJfZW5kX2RhdGUnKTtcbiAgICAgICAgICAgIHN0YXJ0VGltZXBpY2tlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2NhbGVuZGFyX2RhdGVwaWNrZXJfc3RhcnRfdGltZScpO1xuICAgICAgICAgICAgZW5kVGltZXBpY2tlciA9IGZvcm0ucXVlcnlTZWxlY3RvcignI2t0X2NhbGVuZGFyX2RhdGVwaWNrZXJfZW5kX3RpbWUnKTtcbiAgICAgICAgICAgIGFkZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWNhbGVuZGFyPVwiYWRkXCJdJyk7XG4gICAgICAgICAgICBzdWJtaXRCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGRfZXZlbnRfc3VibWl0Jyk7XG4gICAgICAgICAgICBjYW5jZWxCdXR0b24gPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF9hZGRfZXZlbnRfY2FuY2VsJyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbiA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX2FkZF9ldmVudF9jbG9zZScpO1xuICAgICAgICAgICAgbW9kYWxUaXRsZSA9IGZvcm0ucXVlcnlTZWxlY3RvcignW2RhdGEta3QtY2FsZW5kYXI9XCJ0aXRsZVwiXScpO1xuICAgICAgICAgICAgbW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAvLyBWaWV3IGV2ZW50IG1vZGFsXG4gICAgICAgICAgICBjb25zdCB2aWV3RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdrdF9tb2RhbF92aWV3X2V2ZW50Jyk7XG4gICAgICAgICAgICB2aWV3TW9kYWwgPSBuZXcgYm9vdHN0cmFwLk1vZGFsKHZpZXdFbGVtZW50KTtcbiAgICAgICAgICAgIHZpZXdFdmVudE5hbWUgPSB2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1jYWxlbmRhcj1cImV2ZW50X25hbWVcIl0nKTtcbiAgICAgICAgICAgIHZpZXdBbGxEYXkgPSB2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1jYWxlbmRhcj1cImFsbF9kYXlcIl0nKTtcbiAgICAgICAgICAgIHZpZXdFdmVudERlc2NyaXB0aW9uID0gdmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtY2FsZW5kYXI9XCJldmVudF9kZXNjcmlwdGlvblwiXScpO1xuICAgICAgICAgICAgdmlld0V2ZW50TG9jYXRpb24gPSB2aWV3RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1rdC1jYWxlbmRhcj1cImV2ZW50X2xvY2F0aW9uXCJdJyk7XG4gICAgICAgICAgICB2aWV3U3RhcnREYXRlID0gdmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEta3QtY2FsZW5kYXI9XCJldmVudF9zdGFydF9kYXRlXCJdJyk7XG4gICAgICAgICAgICB2aWV3RW5kRGF0ZSA9IHZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWt0LWNhbGVuZGFyPVwiZXZlbnRfZW5kX2RhdGVcIl0nKTtcbiAgICAgICAgICAgIHZpZXdFZGl0QnV0dG9uID0gdmlld0VsZW1lbnQucXVlcnlTZWxlY3RvcignI2t0X21vZGFsX3ZpZXdfZXZlbnRfZWRpdCcpO1xuICAgICAgICAgICAgdmlld0RlbGV0ZUJ1dHRvbiA9IHZpZXdFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNrdF9tb2RhbF92aWV3X2V2ZW50X2RlbGV0ZScpO1xuXG4gICAgICAgICAgICBpbml0Q2FsZW5kYXJBcHAoKTtcbiAgICAgICAgICAgIGluaXRWYWxpZGF0b3IoKTtcbiAgICAgICAgICAgIGluaXREYXRlcGlja2VycygpO1xuICAgICAgICAgICAgaGFuZGxlRWRpdEJ1dHRvbigpO1xuICAgICAgICAgICAgaGFuZGxlQWRkQnV0dG9uKCk7XG4gICAgICAgICAgICBoYW5kbGVEZWxldGVFdmVudCgpO1xuICAgICAgICAgICAgaGFuZGxlQ2FuY2VsQnV0dG9uKCk7XG4gICAgICAgICAgICBoYW5kbGVDbG9zZUJ1dHRvbigpO1xuICAgICAgICAgICAgcmVzZXRGb3JtVmFsaWRhdG9yKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfTtcbn0oKTtcblxuLy8gT24gZG9jdW1lbnQgcmVhZHlcbktUVXRpbC5vbkRPTUNvbnRlbnRMb2FkZWQoZnVuY3Rpb24gKCkge1xuICAgIEtUQXBwQ2FsZW5kYXIuaW5pdCgpO1xufSk7XG4iXSwibmFtZXMiOlsiS1RBcHBDYWxlbmRhciIsImNhbGVuZGFyIiwiZGF0YSIsImlkIiwiZXZlbnROYW1lIiwiZXZlbnREZXNjcmlwdGlvbiIsImV2ZW50TG9jYXRpb24iLCJzdGFydERhdGUiLCJlbmREYXRlIiwiYWxsRGF5IiwicG9wb3ZlciIsInBvcG92ZXJTdGF0ZSIsInN0YXJ0RGF0ZXBpY2tlciIsInN0YXJ0RmxhdHBpY2tyIiwiZW5kRGF0ZXBpY2tlciIsImVuZEZsYXRwaWNrciIsInN0YXJ0VGltZXBpY2tlciIsInN0YXJ0VGltZUZsYXRwaWNrciIsImVuZFRpbWVwaWNrZXIiLCJlbmRUaW1lRmxhdHBpY2tyIiwibW9kYWwiLCJtb2RhbFRpdGxlIiwiZm9ybSIsInZhbGlkYXRvciIsImFkZEJ1dHRvbiIsInN1Ym1pdEJ1dHRvbiIsImNhbmNlbEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwidmlld0V2ZW50TmFtZSIsInZpZXdBbGxEYXkiLCJ2aWV3RXZlbnREZXNjcmlwdGlvbiIsInZpZXdFdmVudExvY2F0aW9uIiwidmlld1N0YXJ0RGF0ZSIsInZpZXdFbmREYXRlIiwidmlld01vZGFsIiwidmlld0VkaXRCdXR0b24iLCJ2aWV3RGVsZXRlQnV0dG9uIiwiaW5pdENhbGVuZGFyQXBwIiwiY2FsZW5kYXJFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ0b2RheURhdGUiLCJtb21lbnQiLCJzdGFydE9mIiwiWU0iLCJmb3JtYXQiLCJZRVNURVJEQVkiLCJjbG9uZSIsInN1YnRyYWN0IiwiVE9EQVkiLCJUT01PUlJPVyIsImFkZCIsIkZ1bGxDYWxlbmRhciIsIkNhbGVuZGFyIiwiaGVhZGVyVG9vbGJhciIsImxlZnQiLCJjZW50ZXIiLCJyaWdodCIsImluaXRpYWxEYXRlIiwibmF2TGlua3MiLCJzZWxlY3RhYmxlIiwic2VsZWN0TWlycm9yIiwic2VsZWN0IiwiYXJnIiwiaGlkZVBvcG92ZXJzIiwiZm9ybWF0QXJncyIsImhhbmRsZU5ld0V2ZW50IiwiZXZlbnRDbGljayIsImV2ZW50IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImV4dGVuZGVkUHJvcHMiLCJsb2NhdGlvbiIsInN0YXJ0U3RyIiwiZW5kU3RyIiwiaGFuZGxlVmlld0V2ZW50IiwiZXZlbnRNb3VzZUVudGVyIiwiaW5pdFBvcG92ZXJzIiwiZWwiLCJlZGl0YWJsZSIsImRheU1heEV2ZW50cyIsImV2ZW50cyIsInVpZCIsInN0YXJ0IiwiZW5kIiwiY2xhc3NOYW1lIiwiZGF0ZXNTZXQiLCJyZW5kZXIiLCJlbGVtZW50IiwicG9wb3Zlckh0bWwiLCJvcHRpb25zIiwiY29udGFpbmVyIiwidHJpZ2dlciIsImJvdW5kYXJ5IiwicGxhY2VtZW50IiwiZGlzbWlzcyIsImh0bWwiLCJjb250ZW50IiwiS1RBcHAiLCJpbml0Qm9vdHN0cmFwUG9wb3ZlciIsInNob3ciLCJoYW5kbGVWaWV3QnV0dG9uIiwiZGlzcG9zZSIsImluaXRWYWxpZGF0b3IiLCJGb3JtVmFsaWRhdGlvbiIsImZvcm1WYWxpZGF0aW9uIiwiZmllbGRzIiwidmFsaWRhdG9ycyIsIm5vdEVtcHR5IiwibWVzc2FnZSIsInBsdWdpbnMiLCJUcmlnZ2VyIiwiYm9vdHN0cmFwIiwiQm9vdHN0cmFwNSIsInJvd1NlbGVjdG9yIiwiZWxlSW52YWxpZENsYXNzIiwiZWxlVmFsaWRDbGFzcyIsImluaXREYXRlcGlja2VycyIsImZsYXRwaWNrciIsImVuYWJsZVRpbWUiLCJkYXRlRm9ybWF0Iiwibm9DYWxlbmRhciIsImhhbmRsZUFkZEJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwiRGF0ZSIsImlubmVyVGV4dCIsImRhdGVwaWNrZXJXcmFwcGVycyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhbGxEYXlUb2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwidGFyZ2V0IiwiY2hlY2tlZCIsImZvckVhY2giLCJkdyIsImNsYXNzTGlzdCIsInNldERhdGUiLCJyZW1vdmUiLCJwb3B1bGF0ZUZvcm0iLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkYXRlIiwidGhlbiIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJzZXRBdHRyaWJ1dGUiLCJkaXNhYmxlZCIsInNldFRpbWVvdXQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJTd2FsIiwiZmlyZSIsInRleHQiLCJpY29uIiwiYnV0dG9uc1N0eWxpbmciLCJjb25maXJtQnV0dG9uVGV4dCIsImN1c3RvbUNsYXNzIiwiY29uZmlybUJ1dHRvbiIsInJlc3VsdCIsImlzQ29uZmlybWVkIiwiaGlkZSIsImFsbERheUV2ZW50Iiwic2VsZWN0ZWREYXRlcyIsImxlbmd0aCIsInN0YXJ0RGF0ZVRpbWUiLCJlbmREYXRlVGltZSIsInN0YXJ0VGltZSIsImVuZFRpbWUiLCJhZGRFdmVudCIsInZhbHVlIiwicmVzZXQiLCJoYW5kbGVFZGl0RXZlbnQiLCJnZXRFdmVudEJ5SWQiLCJldmVudE5hbWVNb2QiLCJzdGFydERhdGVNb2QiLCJlbmREYXRlTW9kIiwiaGFuZGxlRGVsZXRlRXZlbnQiLCJzaG93Q2FuY2VsQnV0dG9uIiwiY2FuY2VsQnV0dG9uVGV4dCIsImhhbmRsZUVkaXRCdXR0b24iLCJoYW5kbGVDYW5jZWxCdXR0b24iLCJoYW5kbGVDbG9zZUJ1dHRvbiIsInZpZXdCdXR0b24iLCJyZXNldEZvcm1WYWxpZGF0b3IiLCJyZXNldEZvcm0iLCJyZXMiLCJub3ciLCJ0b1N0cmluZyIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImluaXQiLCJNb2RhbCIsInZpZXdFbGVtZW50IiwiS1RVdGlsIiwib25ET01Db250ZW50TG9hZGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./resources/src/js/custom/apps/calendar/calendar.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/src/js/custom/apps/calendar/calendar.js"]();
/******/ 	
>>>>>>> Stashed changes
/******/ })()
;
//# sourceMappingURL=calendar.js.map