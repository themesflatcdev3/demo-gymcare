/**
 *
 *
 *
 **/

(function ($) {
    ("use strict");
    var initFullCalendars = function () {
        if ($(".calendar").length > 0) {
            $(".calendar").each(function () {
                var $thisCalendarEl = $(this);

                var getCalendarOptions = function () {
                    return {

                        initialView: "timeGridWeek",
                        defaultDate: "2025-06-02",
                        validRange: {
                            start: "2025-06-01",
                            end: "2025-06-08"
                        },
                        nowIndicator: false,
                        slotMinTime: "08:00:00",
                        slotMaxTime: "19:00:00",
                        slotDuration: "01:00:00",
                        slotLabelInterval: "01:00:00",
                        slotLabelContent: function (arg) {
                            return {
                                html: `<div style="line-height: 71.5px;">${arg.time.meridiem ? arg.time.hour + arg.time.meridiem : arg.text
                                    }</div>`,
                            };
                        },
                        allDaySlot: false,
                        headerToolbar: {
                            left: "",
                            center: "title",
                            right: "",
                        },
                        dayHeaderFormat: { weekday: "long" },
                        eventClassNames: () => ["custom-event"],
                        eventContent: renderEventContent,
                        events: getEvents(),
                    };
                };

                var renderEventContent = function (arg) {
                    const start = new Date(arg.event.start);
                    const end = new Date(arg.event.end);
                    const durationHours = (end - start) / (1000 * 60 * 60);
                    const layoutClass = durationHours > 3 ? "column-layout" : "row-layout";
                    const lines = arg.event.title.split("\n");
                    return {
                        html:
                            `<div class="${layoutClass} calender-item">` +
                            `<div class="custom-title-time">` +
                            `<div class="custom-title">${lines[0]}</div>` +
                            `<div class="custom-time">${lines[1]}</div>` +
                            `</div>` +
                            `<div class="custom-location"><div class="icon-calendar"><i class="icon-location-dot2"></i></div>${lines[2]}</div>` +
                            `</div>`,
                    };
                };
                var getEvents = function () {
                    return [
                        {
                            title: "Medical Camp\n08am - 12am\nNY 10012, United States",
                            start: "2025-06-02T08:00:00",
                            end: "2025-06-02T12:00:00",
                        },
                        {
                            title: "Neurology Camp\n02pm - 03pm\nNY 10012, USA",
                            start: "2025-06-01T14:00:00",
                            end: "2025-06-01T16:00:00",
                        },
                        {
                            title: "Eye Care Camp\n03pm - 06pm\nNY 10012, United States",
                            start: "2025-06-03T15:00:00",
                            end: "2025-06-03T19:00:00",
                        },
                        {
                            title: "Dental Health Camp\n09am - 10am\nNY 10012, USA",
                            start: "2025-06-04T09:00:00",
                            end: "2025-06-04T11:00:00",
                        },
                        {
                            title: "Child Care Camp\n04pm - 05pm\nNY 10012, USA",
                            start: "2025-06-05T16:00:00",
                            end: "2025-06-05T18:00:00",
                        },
                    ];
                };
                var calendar = new FullCalendar.Calendar($thisCalendarEl[0], getCalendarOptions());
                calendar.render();
            });
        }
    };
    // Dom Ready
    $(function () {
        initFullCalendars();
    });
})(jQuery);
