var BR_TAG = "<br />"
var FORMS_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLScO5VYHAXun4djnJ39Buj9hBUGknxBlK2BGbAfpJRJNAcs0UA/viewform?usp=pp_url&entry.915385680=Your+Name+Here';
var events_text = 'Below is a listing of the events planned for the weekend! Please take a look at fill out <a href="' + FORMS_LINK + '">this form</a> to let me know what you\'d like to attend.';
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
    var eventHtml = '<div class="event_info col text-center">';
    eventHtml += wrapInH2(eventInfo.event_title) + BR_TAG;
    eventHtml += wrapInP(eventInfo.date + " --- " + eventInfo.start_time) + BR_TAG;
    eventHtml += wrapInP(eventInfo.event_location) + BR_TAG;
    eventHtml += wrapInP(wrapInI(eventInfo.event_description)) + BR_TAG + BR_TAG;
    eventHtml += '</div>';
    return eventHtml;
}

function renderAllEvents(events) {
    eventsInnerHtml = '<h1> Events </h1>';
    eventsInnerHtml += BR_TAG + wrapInP(events_text);
    for(var i = 0; i < events.length; i++) {
        var makeNewRow = i % 2 === 0;
        var event = events[i];
        if (makeNewRow) { eventsInnerHtml += '<div class="row">' }
        eventsInnerHtml += renderEvent(event);
        if (!makeNewRow) { eventsInnerHtml += '</div>'}
    }
    var eventsElement = document.getElementById('events');
    eventsElement.innerHTML += eventsInnerHtml;
}