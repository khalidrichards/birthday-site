var BR_TAG = "<br />";

function wrapInH2(text) {
    return "<h2>" + text + "</h2>";
}
function wrapInP(text) {
    return "<p>" + text + "</p>";
}
function wrapInI(text) {
    return "<i>" + text + "</i>";
}
function wrapInB(text) {
    return "<b>" + text + "</b>";
}

function renderFaq(faq) {
    console.log(faq);
    var faqHtml = '<div class="faq_item col text-center">';
    faqHtml += wrapInB("Question: ") + wrapInI(faq.question) + BR_TAG;
    faqHtml += wrapInB("Answer: ") + faq.answer + BR_TAG + BR_TAG;
    console.log("faqHtml: ", faqHtml);
    return faqHtml;
}

function renderAllFaq(faqs) {
    console.log(faqs);
    faqsInnerHtml = '<h1 class="section-header"> Frequently Asked Questions (FAQ) </h1>';
    for (var i = 0; i < faqs.length; i++) {
        faqElement = '<div class="row">';
        faqElement += renderFaq(faqs[i]);
        faqElement += '</div>';
        faqsInnerHtml += faqElement;
    }
    var faqsElement = document.getElementById('faq');
    faqsElement.innerHTML += faqsInnerHtml;
}