const calendarQuery =
  "https://9bp0tyzf.api.sanity.io/v2025-10-20/data/query/production?query=%7B%0A++%22events%22%3A+*%5B_type+%3D%3D+%22event%22%5D%2C%0A++++%22images%22%3A+*%5B_type+%3D%3D+%22sanity.imageAsset%22%5D%0A%7D&perspective=published";

document.addEventListener("DOMContentLoaded", function () {
  var cal = document.getElementById("calendar");
  // var myModal = document.getElementById("calModal");
  var modalTitle = document.getElementsByClassName("modal-title")[0];
  var modalBody = document.getElementsByClassName("modal-body")[0];
  var modalDate = document.getElementsByClassName("modal-date")[0];
  var modalDateEnd = document.getElementsByClassName("modal-date-end")[0];
  var modalBodyWrapper =
    document.getElementsByClassName("modal-body-wrapper")[0];
  var modalFooter = document.getElementsByClassName("modal-footer")[0];

  var modalAttachment = document.getElementsByClassName("modal-attachment")[0];
  var modalLink = document.getElementsByClassName("modal-link")[0];
  var windowWidth = window.innerWidth;

  //~ fetch data
  fetchData(calendarQuery).then((data) => {
    // Scrub data for multiday end date here, adding a day to end date (because of weirdness with FullCalendar)
    const allEvents = data.events;
    allEvents.forEach((event, index) => {
      console.log("%cWorking?", "color:coral");
      console.log(event.end);
      if (event?.multidayEvent) {
        event.end = moment(event.end).add(1, "days").format("YYYY-MM-DD");
      }
    });

    //~ create custom view
    const { sliceEvents, createPlugin } = FullCalendar;

    const CustomViewConfig = {
      classNames: ["custom-view"],
      content: function (props) {
        let segs = sliceEvents(props, true);
        // sort events ascendingly
        const sortedSegs = segs.sort(
          (a, b) => new Date(b.range.start) - new Date(a.range.start)
        );
        console.log("segs", segs);
        let html =
          segs.length > 0
            ? ` <div class="events-list-wrapper d-flex flex-column-reverse">
                  ${sortedSegs
                    .map((seg) => {
                      console.log(
                        "includes today's date? ",
                        moment(moment().format("YYYY-MM-DD")).isBetween(
                          moment(seg.range.start)
                            .add(1, "days")
                            .format("YYYY-MM-DD"),
                          moment(seg.range.end).format("YYYY-MM-DD"),
                          undefined,
                          "[]"
                        )
                      );
                      // console.log("today's date: ", moment().format("YYYY-MM-DD"))
                      // console.log("title: ", seg.def.title)
                      // console.log(
                      //   "start: ",
                      //   moment(seg.range.start)
                      //     .add(1, "days")
                      //     .format("YYYY-MM-DD")
                      // );
                      // console.log(
                      //   "end: ",
                      //   moment(seg.range.end).format("YYYY-MM-DD")
                      // );
                      return `
                  <div class="event-list-item event-list-item-limned ${
                    moment(moment().format("YYYY-MM-DD")).isBetween(
                      moment(seg.range.start)
                        .add(1, "days")
                        .format("YYYY-MM-DD"),
                      moment(seg.range.end).format("YYYY-MM-DD"),
                      undefined,
                      "[]"
                    )
                      ? " today"
                      : ""
                  }">
                    <div class="event-list-title">${seg.def.title}</div>
                    <div class="event-list-date-wrapper">
                     <img src="assets/images/icons/calendar-2.svg" class="date-icon" alt=""/>
                      <div class="event-list-date-start">
                      
                        ${
                          // adding a day because FullCalendar ranges (which are given to all events in FC) are exclusive (example: an event falling on July 23rd is given the range "Tue Jul 22 2025 19:00 (start) - Wed Jul 23 2025 19:00 (end)")
                          moment(seg.range.start)
                            .add(1, "days")
                            .format("dddd, MMMM Do")
                        }
                      </div>
                      <div class="event-list-date-end">
                        ${
                          moment(seg.range.end).isAfter(
                            moment(seg.range.start).add(1, "days")
                          )
                            ? "&nbsp;- " +
                              moment(seg.range.end).format("dddd, MMMM Do")
                            : ""
                        }
                      </div>
                    </div>
                    <hr/>
                    <div class="event-list-description">${
                      seg.def.extendedProps.eventDescription
                    }</div>
                    <div class="event-list-footer d-flex flex-column flex-md-row ${
                      seg.def.extendedProps.linkQuestion ||
                      seg.def.extendedProps.flyerQuestion
                        ? ""
                        : "no-buttons"
                    }">
                 ${
                   seg.def.extendedProps?.flyer
                     ? `<a href="${
                         data.images.find(
                           (image) =>
                             image._id ===
                             seg.def.extendedProps.flyer.asset._ref
                         ).url
                       }"
                  class="btn btn-secondary event-list-flyer-btn"
                  target="_blank"
                  >view flyer</a>`
                     : ""
                 }
                 ${
                   seg.def.extendedProps?.linkQuestion
                     ? `
                   <a
                  href="${seg.def.extendedProps?.linkDeets?.linkURL}"
                  class="btn btn-secondary event-list-link-btn"
                  target="_blank"
                  >${seg.def.extendedProps?.linkDeets?.linkText}</a
                >
                  `
                     : ""
                 }
              </div>
                  </div>
                
              `;
                    })
                    .join("")}
                </div>`
            : `<div class="no-events-message"><img class="no-events-icon injectable" src="assets/images/icons/no-events.svg"/>no events scheduled for this month</div>`;

        return { html: html };
      },
    };

    const CustomViewPlugin = createPlugin({
      views: {
        monthList: CustomViewConfig,
      },
    });

    //~ initialize Calendar
    var calendar = new FullCalendar.Calendar(cal, {
      plugins: [CustomViewPlugin],
      firstDay: 1,
      headerToolbar: {
        left: "dayGridMonth,monthList",
        center: "title",
        right: "today prev,next",
      },
      views: {
        monthList: {
          buttonText: "list",
          duration: {
            months: 1,
          },
          // contentHeight: '500px',
          height: "unset",
        },
        dayGridMonth: {
          contentHeight: windowWidth < 768 ? 700 : null,
        },
      },
      windowResize: function (dayGridMonth) {
        windowWidth = window.innerWidth;
        if (windowWidth < 768) {
          calendar.setOption("contentHeight", 700);
        } else {
          calendar.setOption("contentHeight", null);
        }
      },
      initialView: "dayGridMonth",

      //* WHERE EVENTS ARE CONSUMED BY FULLCALENDAR
      // events: data.events,
      events: allEvents,

      eventClick: function (info) {
        //~Modal
        // ➡️ remove links until check
        modalAttachment.style = "display:none";
        modalLink.style = "display:none";
        modalFooter.style = "display:none !important";
        // ➡️ add title
        modalTitle.textContent = info.event.title;

        // ➡️ add start date
        modalDate.textContent = moment(info.event.start).format(
          "dddd, MMMM Do"
        );
        // ➡️ add event description
        modalBody.textContent = info.event.extendedProps.eventDescription;

        // ➡️ check if there is an event end and if not remove any formally set .textContent
        if (info.event.end) {
          modalDateEnd.textContent =
            " - " +
            moment(info.event.end).subtract(1, "days").format("dddd, MMMM Do");
        } else {
          modalDateEnd.textContent = "";
        }

        // ➡️  check if there is an attachment OR a link
        console.log(
          "has flyerQuestion or linkQuestion?: " +
            info.event.extendedProps?.flyerQuestion ||
            info.event.extendedProps?.linkQuestion
        );
        if (
          info.event.extendedProps?.flyerQuestion ||
          info.event.extendedProps?.linkQuestion
        ) {
          modalFooter.style = "display: flex";
          modalBodyWrapper.style = "padding-bottom: 2rem";
          // ➡️ if there is a flyer, search for it and attach it to the View Flyer button...
          if (info.event.extendedProps?.flyerQuestion) {
            modalAttachment.style = "display:flex";
            var imageAssetObject = data.images.find(
              (image) => image._id === info.event.extendedProps.flyer.asset._ref
            );
            modalAttachment.href = imageAssetObject.url;
          } else {
            // ...otherwise delete the button
            modalAttachment.style = "display:none";
          }
          // ➡️  if there is a registration link, search for it and attach it to the Register button...
          if (info.event.extendedProps?.linkQuestion) {
            modalLink.style = "display:flex";
            modalLink.href = info.event.extendedProps.linkDeets.linkURL;
            modalLink.textContent = info.event.extendedProps.linkDeets.linkText;
          } else {
            // ...otherwise delete the button
            modalLink.style = "display:none";
          }
        } else {
          modalFooter.style = "display: none !important";
          modalBodyWrapper.style = "padding-bottom: 4rem";
        }

        $("#calModal").modal("show");
      },
    });
    calendar.render();
  });
});
