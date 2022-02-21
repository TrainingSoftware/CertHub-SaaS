// Dates
// var qualExpiry = new F({
//     field: document.getElementById('qualExpiry'),
//     format: 'D/M/YYYY',
//     toString(date, format) {
//         // you should do formatting based on the passed format,
//         // but we will just return 'D/M/YYYY' for simplicity
//         const day = date.getDate();
//         const month = date.getMonth() + 1;
//         const year = date.getFullYear();
//         return `${day}-${month}-${year}`;
//     },
//     parse(dateString, format) {
//         // dateString is the result of `toString` method
//         const parts = dateString.split('/');
//         const day = parseInt(parts[0], 10);
//         const month = parseInt(parts[1], 10) - 1;
//         const year = parseInt(parts[2], 10);
//         return new Date(year, month, day);
//     }
// });
$("#qualExpiry").flatpickr({
    dateFormat: "d-m-Y",
});
$("#tenderStart").flatpickr({
    dateFormat: "d-m-Y",
});
$("#tenderExpiry").flatpickr({
    dateFormat: "d-m-Y",
});
$("#employeeStart").flatpickr({
    dateFormat: "d-m-Y",
});
$("#employeeEnd").flatpickr({
    dateFormat: "d-m-Y",
});
$("#employeeDob").flatpickr({
    dateFormat: "d-m-Y"
});
$("#expiryStart").flatpickr({
    dateFormat: "d-m-Y"
});
$("#expiryEnd").flatpickr({
    dateFormat: "d-m-Y"
});


// Select2
$(document).ready(function () {
    $("#providerSelect").attr("data-control", "select2");
    $('#providerSelect').attr('data-placeholder', 'Select an option');

    $(".globalSearch").click(function () {
        $("#globalSearch").modal("show");
    });
});

// Global Search Modal
$(document).ready(function () {
    $(".globalSearch").click(function () {
        $("#globalSearch").modal("show");
    });
});

// API Modal
$(document).ready(function () {
    if (window.location.href.indexOf('#showToken') != -1) {
        $('#kt_modal_show_token').modal('show');
    }
});

// Copy API Token
$(document).ready(function () {
    $("#copyToken").click(function () {
        $("#apiToken").select();
        document.execCommand("copy");
    });
});



