$(function() {
    $('.form-date').datepicker({
        altFormat: "dd-mm-yyyy",
        altField: "#alt-date"
    });

    $("#datepicker").datepicker("option", "altFormat", "dd-mm-yy");
});

$('.select2').find(':selected');

// Dates
var qualExpiry = new Pikaday({
    field: document.getElementById('qualExpiry'),
    format: 'DD-MM-YYYY',
    showWeekNumber: true,
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date()
});

var tenderStart = new Pikaday({
    field: document.getElementById('tenderStart'),
    format: 'DD-MM-YYYY',
    showWeekNumber: true,
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date()
});

var tenderExpiry = new Pikaday({
    field: document.getElementById('tenderExpiry'),
    format: 'DD-MM-YYYY',
    showWeekNumber: true,
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date()
});

var employeeEnd = new Pikaday({
    field: document.getElementById('employeeStart'),
    format: 'DD-MM-YYYY',
    showWeekNumber: true,
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date()
});

var employeeStart = new Pikaday({
    field: document.getElementById('employeeEnd'),
    format: 'DD-MM-YYYY',
    showWeekNumber: true,
    disableWeekends: false,
    firstDay: 1,
    minDate: new Date()
});