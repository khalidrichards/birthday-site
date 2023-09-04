var events = {
    "events": [
        {
            "date": "09/08/2023",
            "event_title": "Karaoke @ Karaoke City",
            "event_description": "Come prepared to SANG! We're going to go through three hours of hits!",
            "event_location": "22 W 32nd St, 7th Floor New York, NY 10001",
            "start_time": "06:15 PM (sharp)",
            "end_time": "09:15PM"
        },
        {
            "date": "09/08/2023",
            "event_title": "Post-Karaoke Dinner",
            "event_description": "After singing our hearts out, let's enjoy some KFC (Korean Fried Chicken) together!",
            "event_location": "Turntable Chicken Jazz",
            "start_time": "09:30 PM"
        },
        {
            "date": "09/09/2023",
            "event_title": "Bowling",
            "event_description": "While I'm not great at bowling, I still have occasional cravings for the sport. Let's enjoy some light refreshments and embarrass ourselves.",
            "event_location": "Frames Bowling Lounge",
            "start_time": "01:00 PM (sharp)"
        },
        {
            "date": "09/09/2023",
            "event_title": "Dinner @ Baron's",
            "event_description": "A large dinner with friends and family. (Website: http://barons-brooklyn.com/)",
            "event_location": "564 Dekalb Ave, Brooklyn, NY 11205",
            "start_time": "07:00 PM (sharp)"
        },
        {
            "date": "09/10/2023",
            "event_title": "Brunch",
            "event_description": "Lorem ipsum blah",
            "event_location": "Somewhere",
            "start_time": "12:30PM"
        },
        {
            "date": "09/10/2023",
            "event_title": "More Games! D&B",
            "event_description": "Anyone who knows me knows how much I love a good time at the arcade. Let's play some games, maybe grab some drinks and finish the weekend off strong.",
            "event_location": "Dave & Buster's (@ Atlantic Center)",
            "start_time": "03:00 PM"
        }
    ]
};

var wishlist = {
    "video_games": [
        {
            "name": "Pokémon Violet",
            "sources": {
                "amazon": "https://www.amazon.com/Pok%C3%A9mon-Violet-Nintendo-Switch/dp/B09TMHDVLD/ref=sr_1_1?keywords=pokemon+violet&qid=1685893770&sprefix=Pokemon+Violet%2Caps%2C168&sr=8-1"
            }
        }

    ],
    "trading_card_games": [
        {
            "name": "Magic: the Gathering -- The Lord of the Rings, Tales of Middle-Earth Gift Bundle",
            "sources": {
                "website": "https://montasynyc.com/collections/pre-order-1/products/universes-beyond-the-lord-of-the-rings-tales-of-middle-earth-gift-bundle"
            }
        },
        {
            "name": "Magic: the Gathering -- Wilds of Eldraine Bundle",
            "sources": {
                "amazon": "https://www.amazon.com/Magic-Gathering-Wilds-Eldraine-Bundle/dp/B0C3T1CN9K?ref_=ast_sto_dp"
            }
        },
        {
            "name": "Magic: the Gathering -- Wilds of Eldraine Set Booster Box",
            "sources": {
                "amazon": "https://www.amazon.com/Magic-Gathering-Wilds-Eldraine-Booster/dp/B0C3T925PF?ref_=ast_sto_dp"
            }
        },
        {
            "name": "Magic: the Gathering -- Wilds of Eldraine Collector Booster Box",
            "sources": {
                "amazon": "https://www.amazon.com/Magic-Gathering-Eldraine-Collector-Booster/dp/B0C3T4VZN8?ref_=ast_sto_dp"
            }
        },
        {
            "name": "Disney Lorcana: The First Chapter Booster Box",
            "sources": {
                "website": "https://www.bestbuy.com/site/disney-lorcana-booster-pack-display/6550309.p?skuId=6550309"
            }
        }
    ],
    "other_games": [
        {
            "name": "Queen by Midnight",
            "sources": {
                "website": "https://darringtonpress.com/queen-by-midnights-gen-con-debut-how-to-play-and-full-release/ (Note: Only available after Aug 22.)"
            }
        },
        {
            "name": "Framework",
            "sources": {
                "website": "TBD"
            }
        }
    ],
    "books": [
        {
            "name": "<i>Linear Algebra Done Right</i>, Sheldon Axler",
            "sources": {
                "amazon": "https://www.amazon.com/Linear-Algebra-Right-Undergraduate-Mathematics/dp/3319110799/?_encoding=UTF8&pd_rd_w=bDmr4&content-id=amzn1.sym.5f7e0a27-49c0-47d3-80b2-fd9271d863ca%3Aamzn1.symc.e5c80209-769f-4ade-a325-2eaec14b8e0e&pf_rd_p=5f7e0a27-49c0-47d3-80b2-fd9271d863ca&pf_rd_r=FHMW9JE9WQC6VYY434A3&pd_rd_wg=jxnZv&pd_rd_r=71de8d3a-27e2-4e3d-98a8-656ea2a3c385&ref_=pd_gw_ci_mcx_mr_hp_atf_m"
            }
        },
        {
            "name": "<i>Principles of Mathematical Analysis</i>, Walter Rudin",
            "sources": {
                "amazon": "https://www.amazon.com/Principles-Mathematical-Analysis-International-Mathematics/dp/0070856133/ref=sr_1_1?keywords=principles+of+mathematical+analysis&qid=1691031414&sprefix=Principles+of+Mathemati%2Caps%2C97&sr=8-1&ufe=app_do%3Aamzn1.fos.006c50ae-5d4c-4777-9bc0-4513d670b6bc"
            }
        }
    ],
    "alcohol": [
        {
            "name": "Casa Dragones Tequila",
            "sources": {

            }
        },
        {
            "name": "Yamazaki 12-Year Whiskey",
            "sources": {

            }
        },
        {
            "name": "Woodford Reserve Double-Oaked Bourbon",
            "sources": {

            }
        },
        {
            "name": "Clase Azul Mezcal",
            "sources": {
            }
        }
    ],
    "miscellaneous": [
        {
            "name": "Gift Cards",
            "sources": [
                {
                    "source": "amazon",
                    "site": "https://www.amazon.com/b/?node=2238192011&tag=googhydr-20&hvadid=550213431116&hvpos=&hvexid=&hvnetw=g&hvrand=2824838839347909905&hvpone=&hvptwo=&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9129391&hvtargid=kwd-1158502147&ref=pd_sl_24826martu_e",
                },
                {
                    "source": "apple",
                    "site": "https://www.apple.com/shop/gift-cards"
                },
                {
                    "source": "website",
                    "site": "https://www.dickssportinggoods.com/s/gift-cards"
                },
                {
                    "source": "website",
                    "site": "https://www.jomalone.com/giftcards"
                },
            ]
        }

    ]
};

var faq = {
    "faq": [
        {
            "question": "Can I bring a friend/my [new] partner/etc.?",
            "answer": "Absolutely not. While I am happy some of y'all have folks in your life that you love, my birthday celebration is NOT the time for me to meet them. Let's go out for drinks some other time, but I am not entertaining new \"friends\" that weekend."
        },
        {
            "question": "What should I sign up for?",
            "answer": "Whatever you want to show up to. I'm making the attendance list available for folks to find other folks they could also socialize with."
        },
        {
            "question": "Wait, do you expect us to go to <i>all</i> of these events?",
            "answer": "Not at all! I mainly try and curate a weekend of events that people can weave in and out of. I am blessed to have a lot of y'all that care about me, so I wanted to give opportunities to hang out with everyone."
        },
        {
            "question": "Now are you really expecting [insert item here] from the wishlist? It's kinda pricey.",
            "answer": "The wishlist is mainly meant to be something you can refer to if you have no idea of the things I <i>would</i> like. I'm mainly interested in your attendance, but if you're not a great gift giver, choose something off the list. (Note: The \"Miscellaneous\" section has gift cards. I love a gift card. "
        },
        {
            "question": "When should we make our event desires known?",
            "answer": "Please RSVP to things no later than <b>August 15</b>. I will <b>NOT</b> be looking for you if you do not sign up for something by then."
        },
        {
            "question": "My question wasn't on here...",
            "answer": "Cool; you can hit me up and I'll get back to you as soon as possible."
        }
    ]
}
