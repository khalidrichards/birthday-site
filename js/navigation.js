function setUpNavigation() {
    /** The buttons */
    var eventsButton = document.getElementById('events-button');
    var wishlistButton = document.getElementById('wishlist-button');
    var faqButton = document.getElementById('faq-button');

    /** The sections */
    var events = document.getElementById('events');
    var wishlist = document.getElementById('wishlist');
    var faq = document.getElementById('faq');

    /** Colors */
    var selectedButtonBgColor = '#5D3FD3';
    var unselectedButtonBgColor = '#7a73fb';
    var selectedButtonTextColor = 'white';
    var unselectedButtonTextColor = 'black';

    eventsButton.addEventListener('click', function(event) {
        events.classList.remove('hidden');
        wishlist.classList.add('hidden');
        faq.classList.add('hidden');
        eventsButton.style.backgroundColor = selectedButtonBgColor;
        eventsButton.style.color = selectedButtonTextColor;
        wishlistButton.style.backgroundColor = unselectedButtonBgColor;
        wishlistButton.style.color = unselectedButtonTextColor
        faqButton.style.backgroundColor = unselectedButtonBgColor;
        faqButton.style.color = unselectedButtonTextColor;
    });

    wishlistButton.addEventListener('click', function(event) {
        events.classList.add('hidden');
        wishlist.classList.remove('hidden');
        faq.classList.add('hidden');
        eventsButton.style.backgroundColor = unselectedButtonBgColor;
        eventsButton.style.color = unselectedButtonTextColor;
        wishlistButton.style.backgroundColor = selectedButtonBgColor;
        wishlistButton.style.color = selectedButtonTextColor;
        faqButton.style.backgroundColor = unselectedButtonBgColor;
        faqButton.style.color = unselectedButtonTextColor;
    });

    faqButton.addEventListener('click', function(event) {
        events.classList.add('hidden');
        wishlist.classList.add('hidden');
        faq.classList.remove('hidden');
        eventsButton.style.backgroundColor = unselectedButtonBgColor;
        eventsButton.style.color = unselectedButtonTextColor;
        wishlistButton.style.backgroundColor = unselectedButtonBgColor;
        wishlistButton.style.color = unselectedButtonTextColor;
        faqButton.style.backgroundColor = selectedButtonBgColor;
        faqButton.style.color = selectedButtonTextColor;
    });
}