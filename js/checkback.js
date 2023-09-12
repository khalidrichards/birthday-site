const CONVERSION_FACTOR_TO_DAYS = 1 / ( 1000 * 3600 * 24);

function shouldHideEventContent() {
    return getDaysUntilNextBirthdayAgenda() > 90;
}

function hideAllEventContent() {
    var header = document.getElementById('header');
    var intro = document.getElementById('intro');
    var nav = document.getElementById('nav');
    header.classList.add('hidden');
    intro.classList.add('hidden');
    nav.classList.add('hidden');
}

function getDaysUntilNextBirthdayAgenda() {
    var today = new Date();
    var currentYear = today.getFullYear();
    var targetBday1 = new Date(`09/11/${currentYear}`);
    console.log('days until next birthday: ', timeTillThisYearsBday);
    // Check to see if we're already past this year's 9/11.
    if (today.getTime() > targetBday1.getTime()) {
        var targetBday2 = new Date(`09/11/${currentYear + 1}`);
        return Math.ceil(((targetBday2.getTime() - today.getTime()) * CONVERSION_FACTOR_TO_DAYS) - 90);
    } else if (today.getTime() < targetBday1.getTime()){
        var timeTillThisYearsBday = (today.getTime() - targetBday1.getTime()) * CONVERSION_FACTOR_TO_DAYS;
        return timeTillThisYearsBday - 90;
    }
}

function wrapInP(text) {
    return "<p>" + text + "</p>";
}

function wrapInB(text) {
    return "<b>" + text + "</b>";
}

function renderCheckBack() {
    var daysUntilCheckBack = getDaysUntilNextBirthdayAgenda();
    var checkbackHtml = 'Hi, if you reached this page, it\'s not quite time';
    checkbackHtml += ' for my birthday. You should check back in ';
    checkbackHtml += daysUntilCheckBack + ' days. If you missed my birthday and wanted';
    checkbackHtml += ' to get me something, hit me up and I\'ll send you the wishlist.<br>'
    checkbackHtml += 'Thanks!'
    var checkback = document.getElementById('checkback');
    checkback.innerHTML = wrapInB(wrapInP(checkbackHtml));
}