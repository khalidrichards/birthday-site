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

/** Expand/Hide for FAQ */
function getExpandIcon() {
    return '<i class="fa-solid fa-chevron-down"></i>';
}

function getHideIcon() {
    return '<i class="fa-solid fa-chevron-up hidden"></i>'
}

function renderFaq(faq) {
    console.log(faq);
    var faqHtml = '<div class="faq_item col text-center">';
    faqHtml += '<div class="faq_question">'
    faqHtml += wrapInB("Question: ") + wrapInI(faq.question);
    faqHtml += getExpandIcon();
    faqHtml += getHideIcon();
    faqHtml += '</div>';
    faqHtml += BR_TAG;
    faqHtml += '<div class="faq_answer hidden">';
    faqHtml += wrapInP(wrapInB("Answer: ") + faq.answer + BR_TAG + BR_TAG + '</div>');
    faqHtml += '</div></div>';
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

/** Initialize behavior for FAQ section */

function expandFaq(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    var questionElement = event.target.parentElement;
    var faqElement = questionElement.parentElement;
    console.log("faqElement: ", faqElement);
    // 1. Hide the clicked button.
    var expandButton = questionElement.querySelector('.fa-chevron-down');
    console.log("expandButton: ", expandButton);
    expandButton.classList.add('hidden');
    // 2. Show the hide button.
    var removeButton = questionElement.querySelector('.fa-chevron-up');
    removeButton.classList.remove('hidden');
    console.log("removeButton: ", removeButton);
    // 3. Show the text.
    var answerText = faqElement.querySelector('.faq_answer');
    console.log('answerText: ', answerText.innerHTML);
    answerText.classList.remove('hidden');
}

function collapseFaq(event) {
    if (event.target !== event.currentTarget) {
        return;
    }
    console.log('Hide clicked!');
    var questionElement = event.target.parentElement;
    var faqElement = questionElement.parentElement;
    // 1. Hide the clicked button.
    var expandButton = questionElement.querySelector('.fa-chevron-down');
    expandButton.classList.remove('hidden');
    // 2. Show the hide button.
    var removeButton = questionElement.querySelector('.fa-chevron-up');
    removeButton.classList.add('hidden');
    // 3. Show the text.
    var answerText = faqElement.querySelector('.faq_answer');
    console.log('answerText: ', answerText.innerHTML);
    answerText.classList.add('hidden');   
}

function initializeFaq() {
    // Functionality for expand buttons.
    var expandButtons = document.getElementsByClassName('fa-chevron-down');
    for(button of expandButtons) {
        button.addEventListener('click', expandFaq, false);
    }

    var hideButtons = document.getElementsByClassName('fa-chevron-up');
    for (button of hideButtons) {
        button.addEventListener('click', collapseFaq, false);
    }

}

