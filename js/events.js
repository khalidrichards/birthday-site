var BR_TAG = "<br />"

function wrapInH2(text) {
    return "<h2>" + text + "</h2>";
}
function wrapInP(text) {
    return "<p>" + text + "</p>";
}
function wrapInI(text) {
    return "<i>" + text + "</i>";
}

function renderEvent(eventInfo) {
    var eventHtml = '<div class="event_info">';
    eventHtml += wrapInH2(eventInfo.event_title) + BR_TAG;
    eventHtml += wrapInP(eventInfo.date + " --- " + eventInfo.start_time) + BR_TAG;
    eventHtml += wrapInP(eventInfo.event_location) + BR_TAG;
    eventHtml += wrapInP(wrapInI(eventInfo.event_description)) + BR_TAG + BR_TAG;
    return eventHtml;
}

function renderAllEvents(events) {
    eventsInnerHtml = '<h1> Events </h1>';
    for(var i = 0; i < events.length; i++) {
        var event = events[i];
        eventsInnerHtml += renderEvent(event);
    }
    var eventsElement = document.getElementById('events');
    eventsElement.innerHTML += eventsInnerHtml;
}