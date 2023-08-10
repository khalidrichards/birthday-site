var BR_TAG = "<br />"

var sourceImageMap = {
    "amazon": {
        "source": "font-awesome",
        "value": "fa-brands fa-amazon",
    },
    "gamestop": {
        "source": "image",
        "value": "./img/gamestop.ico",
    },
    "website": {
        "source": "font-awesome",
        "value": "fa-solid fa-globe",
    }
};

function getImageForSource(source) {
    var imageSrc = sourceImageMap[source];
    if (imageSrc !== undefined) {
        switch(imageSrc.source) {
            case 'font-awesome':
                return '<i class="' + imageSrc.value + '"></i>';
            case 'image':
                return '<img src="' + imageSrc.value + '"></img>';
            default:
                console.error('Incorrect image source: ', imageSrc.source);
        }
    }
    return;
}

function transformCategoryKeyIntoName(categoryKey) {
    var words = categoryKey.split('_');
    var wordsWithFirstLetterCapitalized = words.map(function (key) {
        var firstLetter = key.charAt(0);
        var firstLetterUppercase = firstLetter.toUpperCase();
        return firstLetterUppercase + key.substring(1);
    });
    return wordsWithFirstLetterCapitalized.join(' ');
}

function wrapInH3(text) {
    return "<h3>" + text + "</h3>";
}

function wrapInH2(text) {
    return "<h2>" + text + "</h2>";
}
function wrapInP(text) {
    return "<p>" + text + "</p>";
}
function wrapInI(text) {
    return "<i>" + text + "</i>";
}

function renderWishlistItem(item) {
    var itemHtml = '<div class="wishlist_item col">';
    itemHtml += wrapInH3(item.name) + BR_TAG;
    for (var source in item.sources) {
        var link = item.sources[source];
        var itemSrc = getImageForSource(source);
        if (itemSrc !== undefined) {
            itemHtml += '<a href="' + link + '">' + itemSrc + '</a>';
        }
    }
    itemHtml += "</div>" + BR_TAG;
    return itemHtml;
}

function renderAllWishlistItems(wishlist) {
    var wishlistHtml = '<h2 class="section-header"> Birthday Wishlist </h2>' + BR_TAG;
    for (var category in wishlist) {
        wishlistHtml += '<div class="wishlist-category">';
        wishlistHtml += '<div class="wishlist-category-name">';
        var categoryTitle = transformCategoryKeyIntoName(category);
        wishlistHtml += wrapInH3(categoryTitle);
        wishlistHtml += '</div>';
        wishlistHtml += '<div class="wishlist-items row">';
        var categoryItems = wishlist[category];
        for (var i = 0; i < categoryItems.length; i++) {
            wishlistHtml += '<div class="col">';
            wishlistHtml += renderWishlistItem(categoryItems[i]);
            wishlistHtml += '</div>';
        }
        wishlistHtml += '</div>';
        wishlistHtml += '</div>';

    }
    var wishlistElement = document.getElementById('wishlist');
    wishlistElement.innerHTML += wishlistHtml;
}