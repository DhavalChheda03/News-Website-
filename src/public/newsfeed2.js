const API_KEY = `4133a954c08249019e6f221dc4e9b1b8`;
const api_url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${API_KEY}`;
const articles=[
    {
        "source": {
            "id": null,
            "name": "Sportskeeda"
        },
        "author": "Jason Wright",
        "title": "Pokemon Scarlet and Violet: How to get Pawmi, Pawmo, and Pawmot - Sportskeeda",
        "description": "Generation 9 of the Pokemon series has finally been introduced to the world with the release of Pokemon Scarlet and Violet.",
        "url": "https://www.sportskeeda.com/pokemon/pokemon-scarlet-violet-how-get-pawmi-pawmo-pawmot",
        "urlToImage": "https://staticc.sportskeeda.com/editor/2022/11/91c9a-16690616090643-1920.jpg",
        "publishedAt": "2022-11-22T00:08:05Z",
        "content": "Generation 9 of the Pokemon series has finally been introduced to the world with the release of Pokemon Scarlet and Violet. Like previous generations, the newest titles in the series introduce traine… [+2776 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Rupsa Chakraborty",
        "title": "Another child dies of measles; toll reaches 10 | Cities News - The Indian Express",
        "description": "On November 19, a 15-month-old girl from Govandi that falls under the M-East ward succumbed to the infection.",
        "url": "https://indianexpress.com/article/cities/mumbai/another-child-dies-of-measles-toll-reaches-10-8281733/",
        "urlToImage": "https://images.indianexpress.com/2022/11/Since-the-start-of-November-government-run-JJ-hospital-has-been-witnessing-two-to-three-patients-with-measles-on-an-average-on-a-daily-basis-of-which-nearly-20-per-cent-are-above-the-age-of-10.-Amit-Chakrav.jpg",
        "publishedAt": "2022-11-21T21:31:42Z",
        "content": "One more child succumbed to measles in Mumbai on Monday, taking the toll to 10, of which, nine are from the city while one was reported from Bhiwadi, Thane. The civic body’s death committee has confi… [+789 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Phys.Org"
        },
        "author": "Science X staff",
        "title": "Research to mend broken bones, test implantable devices, and inspire future explorers on way to ISS - Phys.org",
        "description": "While millions of Americans plan for the upcoming holidays, a variety of critical research and supplies will head to the International Space Station (ISS) as part of SpaceX's 26th Commercial Resupply Services mission (SpaceX CRS-26). The SpaceX Dragon spacecr…",
        "url": "https://phys.org/news/2022-11-broken-bones-implantable-devices-future.html",
        "urlToImage": "https://scx2.b-cdn.net/gfx/news/2022/research-to-mend-broke.jpg",
        "publishedAt": "2022-11-21T21:14:29Z",
        "content": "by International Space Station U.S. National LaboratoryWhile millions of Americans plan for the upcoming holidays, a variety of critical research and supplies will head to the International Space Sta… [+2832 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Hindustan Times"
        },
        "author": "Rahul Singh",
        "title": "Artillery guns to rockets, army upgrades capability in Ladakh - Hindustan Times",
        "description": "The border standoff between India and China erupted in May 2020. While the two sides have had partial success in disengaging rival soldiers from some friction areas on LAC, talks are still on to end the deadlock that has derailed the bilateral relationship. |…",
        "url": "https://www.hindustantimes.com/india-news/artillery-guns-to-rockets-army-upgrades-capability-in-ladakh-101669064539857.html",
        "urlToImage": "https://images.hindustantimes.com/img/2022/11/21/1600x900/soldiers-bhishma-actual-indian-control-operating-t_1669064642962_1669064643168_1669064643168.jpg",
        "publishedAt": "2022-11-21T21:05:37Z",
        "content": "The Indian Army is swiftly upgrading its capability in the Ladakh sector with a variety of weapons and systems including artillery guns, swarm drone systems that can carry out offensive missions in e… [+4132 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "The Indian Express"
        },
        "author": "Sports Desk",
        "title": "USA vs Wales, FIFA World Cup 2022 Live Score: USA 1-0 WAL after 75 mins - The Indian Express",
        "description": "USA vs Wales World Cup 2022 Live Updates: Wales take on USA in third and final match of the day.",
        "url": "https://indianexpress.com/article/sports/football/england-vs-iran-senegal-vs-netherlands-usa-vs-wales-fifa-world-cup-2022-live-score-8280416/",
        "urlToImage": "https://images.indianexpress.com/2022/11/Wales-vs-USA-live.jpg",
        "publishedAt": "2022-11-21T20:28:58Z",
        "content": "USA vs Wales, Group B, FIFA World Cup 2022 Live Scorecard: Timothy Weah rained on the Welsh party as his lone goal separated the side after the first half. A young and buoyant USA team outclassed and… [+1504 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Wait For The iPhone 15 & 15 Pro! Here's Why! - 9to5Mac",
        "description": "So now that we've had the iPhone 14's out for a while, its officially time to start talking iPhone 15!9to5 Article: https://9to5mac.com/2022/11/20/iphone-15-...",
        "url": "https://www.youtube.com/watch?v=I9dIa9QpvPU",
        "urlToImage": "https://i.ytimg.com/vi/I9dIa9QpvPU/maxresdefault.jpg",
        "publishedAt": "2022-11-21T18:31:42Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Investing.com"
        },
        "author": "Reuters",
        "title": "Oil prices rebound from early dive as reports vary on OPEC+ output By Reuters - Investing.com",
        "description": "Oil prices rebound from early dive as reports vary on OPEC+ output",
        "url": "https://www.investing.com/news/commodities-news/oil-dips-near-2month-lows-as-supply-concerns-ease-2948447",
        "urlToImage": "https://i-invdn-com.investing.com/news/oil_3_800x533_L_1412683007.jpg",
        "publishedAt": "2022-11-21T18:16:00Z",
        "content": "By Laila Kearney\r\nNEW YORK (Reuters) - Oil prices whipsawed on Monday, diving early to their lowest since early January but then rebounding as reports varied about whether Saudi Arabia and other OPEC… [+2488 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Gatesnotes.com"
        },
        "author": "Bill Gates",
        "title": "Best book about the periodic table | Bill Gates - Gates Notes",
        "description": "<i>Mendeleyev’s Dream</i> helps you understand how the periodic table got pieced together and why it’s so helpful.",
        "url": "https://www.gatesnotes.com/Books/Mendeleyevs-Dream",
        "urlToImage": "https://media.gatesnotes.com/-/media/Images/Books/Mendeleyevs-Dream/mendeleyevs_dream_2022_20221003_blog-roll_800x494.ashx",
        "publishedAt": "2022-11-21T17:49:48Z",
        "content": "When you walk into my office, one of the first things you see is a huge version of the periodic table. It includes examples or representations of all 118 elements, like a clock with glow-in-the-dark … [+3453 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "ANI News"
        },
        "author": null,
        "title": "Study suggests how MRI shows brain changes in patina post-COVID - ANI News",
        "description": "Neurological symptoms associated with long COVID include difficulty thinking or concentrating, headache, sleep problems, lightheadedness, pins-and-needles sensation, change in smell or taste, and depression or anxiety. Researchers suggested how a particular t…",
        "url": "https://www.aninews.in/news/health/study-suggests-how-mri-shows-brain-changes-in-patina-post-covid20221121225144",
        "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221121172059.jpg",
        "publishedAt": "2022-11-21T17:21:00Z",
        "content": "Chicago [US], November 21 (ANI): Researchers have discovered brain alterations in individuals up to six months after they recovered from COVID-19 using a particular kind of MRI.The study being presen… [+3779 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Devdiscourse"
        },
        "author": "Devdiscourse News Desk",
        "title": "Massive volcanic activity may have transformed Venus from wet world to acidic hothouse: Study - Devdiscourse",
        "description": "Read more about Massive volcanic activity may have transformed Venus from wet world to acidic hothouse: Study on Devdiscourse",
        "url": "https://www.devdiscourse.com/article/science-environment/2260136-massive-volcanic-activity-may-have-transformed-venus-from-wet-world-to-acidic-hothouse-study",
        "urlToImage": "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/21_11_2022_22_11_18_6439078.jpg?width=920&format=jpeg",
        "publishedAt": "2022-11-21T17:03:56Z",
        "content": "A new study by NASA suggests that volcanic activity lasting hundreds to thousands of centuries and erupting massive amounts of material may have caused the planet's present condition.\r\nAt present, Ve… [+1772 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Koimoi"
        },
        "author": "Oshine Koul",
        "title": "Drishyam 2 Box Office Day 4 (Early Trends): Ajay Devgn Drops A Double Digit Banger, Heading Towards Shattering Some Records! - Koimoi",
        "description": "Drishyam 2 Box Office Day 4 (Early Trends): There’s clearly no stopping for Ajay Devgn starrer. Read on for more details.",
        "url": "https://www.koimoi.com/?p=939285",
        "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/drishyam-2-box-office-day-4-early-trends-ajay-devgn-drops-a-double-digit-banger-001.jpg",
        "publishedAt": "2022-11-21T16:33:22Z",
        "content": "Drishyam 2 Box Office Day 4 (Early Trends): Ajay Devgn Starrer Heading Towards Shattering Some Records ( Photo Credit Drishyam 2 Poster )\r\nDrishyam 2 Box Office Day 4 (Early Trends): There is clearly… [+1914 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Moneycontrol"
        },
        "author": "Sunil Shankar Matkar",
        "title": "Trade setup for Tuesday: Top 15 things to know before the opening bell - Moneycontrol",
        "description": "Based on the open interest future percentage, there were 77 stocks including Gujarat State Petronet, Mindtree, Metropolis Healthcare, IRCTC, and LIC Housing Finance, in which long unwinding was seen.",
        "url": "https://www.moneycontrol.com/news/business/markets/trade-setup-for-tuesday-top-15-things-to-know-before-the-opening-bell-13-9576561.html",
        "urlToImage": "https://images.moneycontrol.com/static-mcnews/2022/10/market-770x433.jpg",
        "publishedAt": "2022-11-21T16:31:30Z",
        "content": "The selling pressure extended for a third consecutive session, with the benchmark indices falling eight-tenth of a percent on November 21, tracking weak global cues.\r\nThe BSE Sensex declined 519 poin… [+9535 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "News18"
        },
        "author": "News Desk",
        "title": "Delhi: Father Kills Daughter for 'Marrying Against His Choice', Mother Helps Him Pack Body in Suitcase - News18",
        "description": "Victim Ayushi Yadav (21) had gone out for a few days without informing her parents and this enraged her father, who allegedly shot her dead at their house in Modband village in Delhi's Badarpur on November 17, the day she came back",
        "url": "https://www.news18.com/news/india/delhi-father-shoots-daughter-as-she-went-out-without-informing-mother-helps-him-pack-body-in-suitcase-6437659.html",
        "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/delhi-girl-166904786316x9.jpg",
        "publishedAt": "2022-11-21T16:25:00Z",
        "content": "Uttar Pradesh has solved the mystery behind the murder of a 21-year-old woman whose body was found stuffed in a trolley bag near Yamuna Expressway in Mathura last week and arrested her parents with t… [+2122 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Nasa's Artemis spacecraft arrives at the Moon - BBC News - BBC News",
        "description": "Nasa's Artemis spacecraft has arrived at the Moon.The Orion capsule swept 130km (80 miles) above the lunar surface, and it will now begin to enter a larger o...",
        "url": "https://www.youtube.com/watch?v=tGbkldxc_Uw",
        "urlToImage": "https://i.ytimg.com/vi/tGbkldxc_Uw/hqdefault.jpg",
        "publishedAt": "2022-11-21T16:12:57Z",
        "content": null
    },
    {
        "source": {
            "id": null,
            "name": "Livemint"
        },
        "author": "Livemint",
        "title": "India discontinues Air Suvidha form filling for international passengers | Mint - Mint",
        "description": "Last year, the Ministry of Civil Aviation and Ministry of Health and Family Welfare has mandated contactless self-declaration at Air Suvidha Portal to ensure the smooth passage of international travellers arriving in India.",
        "url": "https://www.livemint.com/news/india/india-discontinues-air-suvidha-form-filling-for-international-passengers-11669043901469.html",
        "urlToImage": "https://images.livemint.com/img/2022/11/21/600x338/heathrow-airport_1666768208870_1669043973192_1669043973192.jpg",
        "publishedAt": "2022-11-21T15:22:40Z",
        "content": "The ministry of Civil Aviation of the Indian Government has decided to lift off the mandate to fill up Air Suvidha form for all international passengers. The decision was made and declared on Monday,… [+2067 chars]"
    },
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "Iran refuse to sing national anthem in World Cup opener - Al Jazeera English",
        "description": "The national team shows support for the anti-government protests taking place after Mahsa Amini’s death.",
        "url": "https://www.aljazeera.com/news/2022/11/21/iran-refuse-to-sing-national-anthem-in-world-cup-opener",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/000_32PF7VN.jpg?resize=1920%2C1440",
        "publishedAt": "2022-11-21T15:15:37Z",
        "content": "In a striking act of solidarity with protesters in Iran, the mens national football team decided not to sing the national anthem in its opening World Cup game against England.\r\nThe unrest in Iran beg… [+2477 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Greatandhra.com"
        },
        "author": "IANS",
        "title": "Powerful film content can reach globally: Anurag Thakur - Greatandhra",
        "description": "Information & Broadcasting Minister Anurag Singh Thakur on Monday said that powerful local content can reach nationally and internationally, which one needs to give in the industry.",
        "url": "https://www.greatandhra.com/movies/news/powerful-film-content-can-reach-globally-125360",
        "urlToImage": "https://www.greatandhra.com/newphotos10/Anurag1669043662.jpg",
        "publishedAt": "2022-11-21T15:14:22Z",
        "content": "Panaji: Information &amp; Broadcasting Minister Anurag Singh Thakur on Monday said that powerful local content can reach nationally and internationally, which one needs to give in the industry.\r\nThak… [+1462 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Abplive.com"
        },
        "author": "ABP News Bureau",
        "title": "'Shivaji Is Our God': Nitin Gadkari Intervenes Amid Tension Between BJP, Shinde Camp - ABP Live",
        "description": "The remarks by Gadkari came amid huge protests by the Sena's Uddhav Thackeray camp, Congress and NCP in Mumbai and other cities demanding the ouster of the governor.",
        "url": "https://news.abplive.com/news/india/nitin-gadkari-intervenes-amid-row-between-bjp-eknath-shinde-camp-on-governor-koshyari-chhatrapati-shivaji-remarks-1564763",
        "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/21/4bf2504f6620ece1f2af342afb4114bd1669040614737320_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
        "publishedAt": "2022-11-21T14:33:33Z",
        "content": "Amid a row over Maharashtra Governor BS Koshyari's remarks about Chhatrapati Shivaji Maharaj, Union Minister Nitin Gadkari on Monday stepped in to douse flames between BJP and its ally, the Eknath Sh… [+2250 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "NDTV News"
        },
        "author": null,
        "title": "Delhi Murder Case: Aaftab Poonawala Used Shraddha Walkar's Number To Buy Fridge - NDTV",
        "description": "In the gruesome murder of Shraddha Walkar in Delhi, her live-in partner Aaftab Poonawala used her number to buy the fridge that he later used to allegedly stash her body parts.",
        "url": "https://www.ndtv.com/india-news/delhi-murder-case-aaftab-poonawala-used-shraddhas-number-to-buy-fridge-3540235",
        "urlToImage": "https://c.ndtvimg.com/2022-11/hn54cb4_aftab-poonawala-shraddha-walkar_625x300_17_November_22.jpg",
        "publishedAt": "2022-11-21T13:50:00Z",
        "content": "New Delhi: After allegedly murdering Shraddha Walkar, her partner Aaftab Poonawala used her phone number when he bought the fridge that he allegedly used to store her body parts.\r\nThe bill for the 30… [+1103 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "YouTube"
        },
        "author": null,
        "title": "Sony launched LinkBuds S (WF-LS900N) earbuds in India, Watch Price and Features - BGR India",
        "description": "#BGRIndia #TechNews Sony has launched LinkBuds S (WF-LS900N) earbuds. Sony LinkBuds S (WF-LS900N) first debuted in the global market in May 2022 and is now a...",
        "url": "https://www.youtube.com/watch?v=dOLvUJmYRas",
        "urlToImage": "https://i.ytimg.com/vi/dOLvUJmYRas/maxresdefault.jpg",
        "publishedAt": "2022-11-21T13:44:16Z",
        "content": null
    }
]
  
// Defining async function
function getNews(url) {
    
    
    // Storing response
    // const response = await fetch(url);
    // console.log(response);
    var newsHtml;
    // Storing data in form of JSON
    // var data = await response.json();
    // let articles=data.articles;
    // const articles=JSON.parse(articles); 
    console.log(articles);
    articles.forEach((element)=>{
        // console.log("---------------------------------------------");
        // console.log("title: ",element.title);
        // console.log("desc: ",element.description);
        // console.log("link: ",element.url);
        // console.log("---------------------------------------------");

        let news=`<div class="swiper-slide">
        <div class="newsbox">
        <img src="${element.urlToImage}">
        <h3>${element.title}</h3>
        <p>${element.description}</p>
        <a href="${element.url}" target="_blank"><button class="btn">Read more</button></a>
    </div>
    </div>`;
    console.log(news);
    newsHtml+=news;
    });
    let newsfeed=document.getElementById('newsfeed');
    console.log(newsfeed); 
    newsfeed.innerHTML=newsHtml; 
    // console.log(data);
}
getNews(api_url);
module.exports=getNews(api_url);


