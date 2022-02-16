// Dates
var qualExpiry = new Pikaday({
    field: document.getElementById('qualExpiry'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

var tenderStart = new Pikaday({
    field: document.getElementById('tenderStart'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }
});

var tenderExpiry = new Pikaday({
    field: document.getElementById('tenderExpiry'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }

});

var employeeEnd = new Pikaday({
    field: document.getElementById('employeeStart'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }

});

var employeeStart = new Pikaday({
    field: document.getElementById('employeeEnd'),
    format: 'D/M/YYYY',
    toString(date, format) {
        // you should do formatting based on the passed format,
        // but we will just return 'D/M/YYYY' for simplicity
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}-${month}-${year}`;
    },
    parse(dateString, format) {
        // dateString is the result of `toString` method
        const parts = dateString.split('/');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);
        return new Date(year, month, day);
    }

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
var startDate,
    endDate,
    updateStartDate = function () {
        startPicker.setStartRange(startDate);
        endPicker.setStartRange(startDate);
        endPicker.setMinDate(startDate);
        document.getElementById('expiryStart')
    },
    updateEndDate = function () {
        startPicker.setEndRange(endDate);
        startPicker.setMaxDate(endDate);
        endPicker.setEndRange(endDate);
    },
    startPicker = new Pikaday({
        field: document.getElementById('expiryStart'),
        format: 'D-M-YYYY',
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function () {
            startDate = this.getDate();
            updateStartDate();
        }
    }),
    endPicker = new Pikaday({
        field: document.getElementById('expiryEnd'),
        format: 'D-M-YYYY',
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function () {
            endDate = this.getDate();
            updateEndDate();
        }
    }),
    _startDate = startPicker.getDate(),
    _endDate = endPicker.getDate();

if (_startDate) {
    startDate = _startDate;

    updateStartDate();
}

if (_endDate) {
    endDate = _endDate;
    updateEndDate();
}

