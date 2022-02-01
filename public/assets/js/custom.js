$(function() {
    $('input[type="date"]').datepicker({
        altFormat: "dd-mm-yyyy",
        altField: "#alt-date"
    });

    $("#datepicker").datepicker("option", "altFormat", "dd-mm-yy");
});