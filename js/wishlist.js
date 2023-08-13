var BR_TAG = "<br />"
var LINK_TO_WISHLIST_SPREADSHEET= 'https://docs.google.com/spreadsheets/d/1qFYMGCY_FiwfR1gmOfN68W7l7LdWILBsGdUM3Hl58ko/edit?resourcekey#gid=1665338705';
var LINK_TO_WISHLIST_FORM = 'https://forms.gle/XjUctuGoSEVcG6kv6';
var INSTRUCTIONS = 'Below is a (not-required) list of things to give folks an idea of gifts I might like. ';
INSTRUCTIONS += 'If you plan on getting one, please check <a href="' + LINK_TO_WISHLIST_SPREADSHEET + '">';
INSTRUCTIONS += 'this spreadsheet</a> to make sure you aren\'t getting a gift that doesn\t make sense to have multiples of, ';
INSTRUCTIONS += 'then fill out <a href="' + LINK_TO_WISHLIST_FORM + '"> this form</a> to let folks know what you got! Thanks!';
INSTRUCTIONS += BR_TAG + " (Note: I will not be checking this spreadsheet!)";

var sourceImageMap = {
    "amazon": {
        "source": "font-awesome",
        "value": "fa-brands fa-amazon",
    },
    "apple": {
        "source": "font-awesome",
        "value": "fa-brands fa-apple"
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
    if (Array.isArray(item.sources)) {
        console.log('there are multiple sources!');
        itemHtml += '<div class="where-to-find"><i>Where to find: </i> ';
        for (var i = 0; i < item.sources.length; i++) {
            var src = item.sources[i];
            itemSrc = getImageForSource(src.source);
            itemHtml += '<a href="' + src.site + '">' + itemSrc + '</a>';
        }
        itemHtml += '</div>';
    } else {
        for (var source in item.sources) {
            var link = item.sources[source];
            var itemSrc = getImageForSource(source);
            if (itemSrc !== undefined) {
                itemHtml += '<div class="where-to-find"><i>Where to find:</i> ';
                itemHtml += '<a href="' + link + '">' + itemSrc + '</a>';
                itemHtml += '</div>'
            }
        }
    }
    itemHtml += "</div>" + BR_TAG;
    return itemHtml;
}

function renderAllWishlistItems(wishlist) {
    var wishlistHtml = '<h2 class="section-header"> Birthday Wishlist </h2>' + BR_TAG;
    wishlistHtml += wrapInH3(INSTRUCTIONS) + BR_TAG;
    for (var category in wishlist) {
        wishlistHtml += '<div class="wishlist-category">';
        wishlistHtml += '<div class="wishlist-category-name">';
        var categoryTitle = transformCategoryKeyIntoName(category);
        wishlistHtml += wrapInH3(categoryTitle);
        wishlistHtml += '</div>';
        wishlistHtml += '<div class="wishlist-items container">';
        var categoryItems = wishlist[category];
        for (var i = 0; i < categoryItems.length; i++) {
            wishlistHtml += '<div class="row">';
            wishlistHtml += renderWishlistItem(categoryItems[i]);
            wishlistHtml += '</div>';
        }
        wishlistHtml += '</div>';
        wishlistHtml += '</div>';

    }
    var wishlistElement = document.getElementById('wishlist');
    wishlistElement.innerHTML += wishlistHtml;
}