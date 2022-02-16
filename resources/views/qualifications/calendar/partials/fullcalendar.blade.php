<div>
    <div class="post d-flex flex-column-fluid" id="kt_post">
        <div id="kt_content_container" class="container-xxl">
            <div id="full_calendar">

            </div>
        </div>
    </div>
</div>
@push('extra-js')
    <script src="{{asset('assets/plugins/custom/fullcalendar/fullcalendar.bundle.js')}}"></script>
    <script>
        var calendar;
        var data = {
            id: '',
            eventName: '',
            startDate: '',
            url: ''
        };
        var popover;
        var popoverState = false;


        var startDay = moment().startOf('day');
        var today = startDay.format('YYYY-MM-DD');
        document.addEventListener('DOMContentLoaded', function () {
            var calendarEl = document.getElementById('full_calendar');
            var calendar = new FullCalendar.Calendar(calendarEl, {
                headerToolbar: {
                    left: "prev,next today",
                    center: "title",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                },
                height: 800,
                contentHeight: 780,
                aspectRatio: 3,
                nowIndicator: true,
                displayEventTime: false,
                editable: false,
                navLinks: true,
                now: today,
                timeZone: 'GMT',
                views: {
                    dayGridMonth: {
                        buttonText: "Month"
                    },
                    timeGridWeek: {
                        buttonText: "Week"
                    },
                    timeGridDay: {
                        buttonText: "Day"
                    }
                },
                events: @json($events),
                eventMouseEnter: function (arg) {
                    formatArgs({
                        id: arg.event.id,
                        title: arg.event.title,
                        startStr: arg.event.start,
                        url: arg.event.url
                    });

                    // Show popover preview
                    initPopovers(arg.el);
                },

            });
            calendar.render();
        });
        const initPopovers = (element) => {
            hidePopovers();

            // Generate popover content
            const startDate = data.allDay ? moment(data.startDate).format('DD-MM-YYYY') : moment(data.startDate).format('DD-MM-YYYY');
            const popoverHtml = '<div class="fw-bolder mb-2">' + data.eventName + '</div><div class="fs-7"><span class="fw-bold">Expiry Date:</span> ' + startDate + '</div><div id="kt_calendar_event_view_button" type="button" class="btn btn-sm btn-light-primary">View More</div>';

            // Popover options
            var options = {
                container: 'body',
                trigger: 'manual',
                boundary: 'window',
                placement: 'auto',
                dismiss: true,
                html: true,
                title: 'Qualification Expiry',
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
        const formatArgs = (res) => {
            data.id = res.id;
            data.eventName = res.title;
            data.startDate = res.start;
            data.url = res.url
        }
        // Hide active popovers
        const hidePopovers = () => {
            if (popoverState) {
                popover.dispose();
                popoverState = false;
            }
        }
        const handleViewButton = () => {
            const viewButton = document.querySelector('#kt_calendar_event_view_button');
            viewButton.addEventListener('click', e => {
                e.preventDefault();

                hidePopovers();
                window.location.href = data.url
            });
        }

    </script>
@endpush
