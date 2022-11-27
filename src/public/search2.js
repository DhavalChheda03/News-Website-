//for category
const list=document.querySelectorAll(".list");
function activeLink(){
    list.forEach((item)=>{
    item.classList.remove("active")});
    this.classList.add("active");
    getCategory();
}

function getCategory(){
    const active=document.querySelectorAll(".active");
    var category;
    active.forEach((item)=>{
    category=item.textContent});
    if(category)
    {
        return category;
    }
    else{
        
        category="None";
        return category;
    }
}

list.forEach((item)=>
item.addEventListener("click",activeLink));

//for sort By
const slist=document.querySelectorAll(".slist");
function sortActive(){
    slist.forEach((item)=>{
        item.classList.remove("sActive")});
        this.classList.add("sActive");
        getSort();
}

function getSort(){
    const sActive=document.querySelectorAll(".sActive");
    var sortBy;
    sActive.forEach((item)=>{
        sortBy=item.textContent});
        if(sortBy)
        {
            return sortBy;
        }
        else
        {
            sortBy="PublishedAt";
            return sortBy;
        }
}
slist.forEach((item)=>
item.addEventListener("click",sortActive));

// function activelink(element){
//     let item=document.getElementById(`${element}`);
//     const list=document.querySelectorAll(".list");
//     list.forEach((elmt)=>{
//         elmt.classList.remove("active")});
//     item.classList.add("active");
// }

//for keywords
function getKeywords(){
    var searchInput=document.getElementById("searchInput").value;
    if(searchInput)
    {
        return searchInput;
    }
    else
    {
        searchInput="none";
        return searchInput;
    }
}

//for search
const searchbtn=document.getElementById("searchbtn");
searchbtn.addEventListener("click",search);

//executing search
const API_KEY = `4133a954c08249019e6f221dc4e9b1b8`;
var url;
function search(){
    var category=getCategory();
    var keywords=getKeywords();
    var sortBy=getSort();
    if(category!="None")
    {
        if(keywords!="none")
        {
            console.log("1",keywords);
            url=`https://newsapi.org/v2/top-headlines?country=in&q=${keywords}&category=${category}&apiKey=${API_KEY}`;
        }
        else
        { 
            console.log("2");
            url=`https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=${API_KEY}`;
        }
    }
    else
    {
        if(keywords!="none")
        {
            console.log("3",keywords);
            url=`https://newsapi.org/v2/everything?language=en&sortBy=${sortBy}&q=${keywords}&apiKey=${API_KEY}`;
        }
        else
        {
            console.log("4");
            url=`https://newsapi.org/v2/everything?language=en&sortBy=${sortBy}&apiKey=${API_KEY}`;
        }
    }
    //const api_url=`https://newsapi.org/v2/everything?language=en&q=${sortBy}&q=${keywords}&apiKey=${API_KEY}`;
    getNews(url,keywords,category,sortBy);

}
function getNews(url,keywords,category,sortBy) {
    var newsHtml;
    var data=setData(keywords,category,sortBy);
    // console.log(data);
    let articles=data.articles;
    articles.forEach((element)=>{
        let news=`<div class="swiper-slide">
        <div class="newsbox">
        <img src="${element["urlToImage"]}">
        <h3>${element["title"]}</h3>
        <p>${element["description"]}</p>
        <a href="${element["url"]}" target="_blank"><button class="btn">Read more</button></a>
    </div>
    </div>`;
    newsHtml+=news;
    });
    let newsfeed=document.getElementById('newsfeed');
    newsfeed.innerHTML=newsHtml; 
}

function setData(keywords,category,sortBy){
    var data;
    if(keywords!="None")
    {
        if(category==="General")
        {
            data=General;
        }
        if(category==="Business")
        {
            data=Business;
        }
        if(category==="Entertainment")
        {
            data=Entertainment;
        }
        if(category==="Health")
        {
            data=Health;
        }
        if(category==="Science")
        {
            data=Science;
        }
        if(category==="Sports")
        {
            data=Sports;
        }
        if(category==="Technology")
        {
            data=Technology;
        }
    }
    else
    {
        if(keywords="tesla")
        {
            data=tesla;
        }
        if(keywords="bitcoin")
        {
            data=bitcoin;
        }
        if(keywords="cricket")
        {
            data=cricket;
        }
        if(keywords="apple")
        {
            data=apple;
        }
        if(keywords="none")
        {
            data=General;
        }
    }
    return data;
}

const General={
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights: Keysher Fuller Strikes As Costa Rica Beat Japan To Blow Group E Wide Open - NDTV Sports",
            "description": "FIFA World Cup 2022, Japan vs Costa Rica Highlights: Keysher Fuller scored a goal for Costa Rica in the 81st minute of the game against Japan and that proved to be the difference between the two sides.",
            "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-japan-vs-costa-rica-football-live-score-updates-3557244",
            "urlToImage": "https://c.ndtvimg.com/2022-11/hm0guil8_keysher-fuller-afp_625x300_27_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-11-27T12:21:30Z",
            "content": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights:Costa Rica defeated Japan 1-0 in a Group E match of FIFA World Cup 2022 at Ahmed bin Ali Stadium, Al Rayyan on Sunday. Keysher Fuller Spence scored… [+727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVE - CNN-News18",
            "description": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVEThe Dragon is carrying four cubesats for NASA’s Cubesat Launch Ini...",
            "url": "https://www.youtube.com/watch?v=jP3BAMr2tAk",
            "urlToImage": "https://i.ytimg.com/vi/jP3BAMr2tAk/maxresdefault_live.jpg",
            "publishedAt": "2022-11-27T12:07:58Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Women Look Good When...\": Ramdev's Comment Sets Off Controversy - NDTV",
            "description": "Yoga teacher and Patanjali Ayurved's Ramdev's indecent remarks on women's attire has set off a controversy that threatens to turn political.",
            "url": "https://www.ndtv.com/india-news/women-look-good-when-ramdevs-comment-sets-off-controversy-3557603",
            "urlToImage": "https://c.ndtvimg.com/2022-11/s7djbocg_ramdev_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T12:06:00Z",
            "content": "Ramdev's indecent remarks on women's attire have been condemned by leaders\r\nNew Delhi: Yoga teacher and Patanjali Ayurved's Ramdev's indecent remarks on women's attire has set off a controversy that … [+2998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newindian.in"
            },
            "author": null,
            "title": "Scientists study 'world's oldest meal' to learn about our animal ancestors - THE NEW INDIAN - The New Indian",
            "description": "Scientists of Australian National University study ‘world’s oldest meal’ to learn about our animal ancestors",
            "url": "https://newindian.in/web-stories/scientists-study-worlds-oldest-meal-to-learn-about-our-animal-ancestors/",
            "urlToImage": null,
            "publishedAt": "2022-11-27T11:53:00Z",
            "content": "Scientists study worlds oldest meal to learn about our animal ancestors\r\nThe last meal consumed by some of the earliest known animals has helped scientists discover new clues about some odd ancient c… [+1181 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "WhatsApp brings ‘contact card’ for Windows - BusinessLine",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMia2h0dHBzOi8vd3d3LnRoZWhpbmR1YnVzaW5lc3NsaW5lLmNvbS9pbmZvLXRlY2gvd2hhdHNhcHAtYnJpbmdzLWNvbnRhY3QtY2FyZC1mb3Itd2luZG93cy9hcnRpY2xlNjYxOTEzMjcuZWNl0gFwaHR0cHM6Ly93d3cudGhlaGluZHVidXNpbmVzc2xpbmUuY29tL2luZm8tdGVjaC93aGF0c2FwcC1icmluZ3MtY29udGFjdC1jYXJkLWZvci13aW5kb3dzL2FydGljbGU2NjE5MTMyNy5lY2UvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T11:50:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's Artemis 1, Over 400,000 Kms From Earth, Sets A New Record - NDTV",
            "description": "NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 401,798 kilometres from Earth.",
            "url": "https://www.ndtv.com/world-news/nasas-artemis-1-over-400-000-kms-from-earth-sets-a-new-record-3557577",
            "urlToImage": "https://c.ndtvimg.com/2022-11/81tn5nac_artemis-orion_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T11:29:02Z",
            "content": "New Delhi: NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 419,378 kilometres from Earth. The record was previously set during the … [+2171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "iCloud on Windows showing random photos and videos from other users: Report | Mint - Mint",
            "description": "Many users have complained about the problem in the MacRumours forum. At present, it is limited to iCloud on Windows only. It is not sure yet whether the problem is for Apple or Microsoft to fix.",
            "url": "https://www.livemint.com/technology/tech-news/icloud-on-windows-showing-random-photos-and-videos-from-other-users-report-11669545470146.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/iphone_1669545580717_1669545581007_1669545581007.jpg",
            "publishedAt": "2022-11-27T10:40:12Z",
            "content": "Are you seeing photos and videos from other users when using iCloud on Windows? If yes, then you are not alone. Many Apple iPhone users have complained about seeing photos and videos that do not belo… [+116 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Pilot Vs Gehlot: There'll Be 'Amicable Settlement' To Rajasthan Congress Crisis, Says KC Venugopal - ABP Live",
            "description": "Congress Leader KC Venugopal says there will be an amicable settlement to the Rajasthan issue.",
            "url": "https://news.abplive.com/news/india/congress-leader-kc-venugopal-amicable-settlement-rajasthan-affairs-pilot-gehlot-1566005",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/27/3ca33fbb4de3e6ce1dd27d2005d743e7166954452455819_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2022-11-27T10:31:09Z",
            "content": "New Delhi: Congress General Secretary, KC Venugopal on Sunday said he was confident that there will be an amicable settlement to the Rajasthan Congress Crisis.\r\n\"There will be an amicable settlement … [+1844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Parmita Uniyal",
            "title": "Measles outbreak: How to protect your child from measles; expert offers tips - Hindustan Times",
            "description": "A large number of children have been detected with measles in Mumbai which has caused panic among parents. Here are tips you must follow to protect your kid from measles. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/measles-outbreak-how-to-protect-your-child-from-measles-expert-offers-tips-101669543820734.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/measles_1669543863203_1669543863321_1669543863321.jpg",
            "publishedAt": "2022-11-27T10:18:44Z",
            "content": "Measles outbreak in Mumbai has become a cause of concern as cases continue to rise and hospitalisations increase. The disease that initially shows up with symptoms like fever, dry cough, sore throat,… [+3453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Sri Lanka vs Afghanistan, 2nd ODI, Afghanistan tour of Sri Lanka, 2022 - Cricbuzz",
            "description": "Follow Sri Lanka vs Afghanistan, 2nd ODI, Nov 27, Afghanistan tour of Sri Lanka, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/live-cricket-scores/56943/sl-vs-afg-2nd-odi-afghanistan-tour-of-sri-lanka-2022",
            "urlToImage": null,
            "publishedAt": "2022-11-27T09:02:19Z",
            "content": "18:06 Local Time, 12:36 GMT, 18:06 IST: Afghanistan fail to bat out their quota of 50 overs. Rajitha bowled a tight spell with the new ball but it was Lahiru Kumara who provided the breakthrough the … [+3103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "BJP \"Agitated\", Congress \"Nowhere\": Arvind Kejriwal Sure Of Gujarat Win - NDTV",
            "description": "Delhi Chief Minister Arvind Kejriwal on Sunday made a written assertion that the Aam Aadmi Party (AAP) will form government in Gujarat after the upcoming Assembly polls.",
            "url": "https://www.ndtv.com/india-news/aap-will-win-gujarat-assembly-polls-kejriwal-promises-old-pension-scheme-for-govt-employees-by-jan-31-3557249",
            "urlToImage": "https://c.ndtvimg.com/2022-01/0014f05o_arvindkejriwal_650x400_18_January_22.jpg",
            "publishedAt": "2022-11-27T08:43:00Z",
            "content": "The BJP was agitated because it was staring at defeat, he said. (File photo)\r\nAhmedabad: Delhi Chief Minister Arvind Kejriwal on Sunday made a written assertion that the Aam Aadmi Party (AAP) will fo… [+3847 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "140-foot asteroid rushing towards close approach to Earth at blazing speed of 51875 kmph - HT Tech",
            "description": "NASA confirmed that a 140-foot asteroid is on its way to Earth at a massive speed of 51875 kmph.",
            "url": "https://tech.hindustantimes.com/tech/news/140foot-asteroid-rushing-towards-close-approach-to-earth-at-blazing-speed-of-51875-kmph-71669537458364.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/27/1600x900/asteroid-4369511_1920_1669537616654_1669537634123_1669537634123.jpg",
            "publishedAt": "2022-11-27T08:27:53Z",
            "content": "Earth may face a bit of danger from this upcoming asteroid hurtling towards Earth at terrifying speed! A huge \"potentially hazardous\" asteroid zoomed by yesterday after it made its closest approach t… [+2081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "'Xi Jinping step down, end lockdown': Anti-Covid protests flare up in China after fire kills 10 - India Today",
            "description": "Protests against China’s restrictive Covid-19 measures continued to flare up in China after a deadly fire in Xinjiang killed ten people. Protestors claimed that the strict Covid curbs hampered the rescue operations.",
            "url": "https://www.indiatoday.in/world/story/end-the-lockdown-anti-covid-protests-china-xinjiang-beijing-deadly-fire-2302191-2022-11-27",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/1000_6-sixteen_nine.jpeg?VersionId=oJexZAimy3kwoxJ5sogoXghkA43eqv5y",
            "publishedAt": "2022-11-27T08:26:15Z",
            "content": "By India Today Web Desk: The public anger against the Chinese President Xi Jinping's strict Covid measures continued to rise in Shanghai as protestors called for Chinese leader to step down. Protesto… [+3987 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "India is the lone absentee at China’s Indian Ocean forum of 19 countries - The Hindu",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMicmh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL2ludGVybmF0aW9uYWwvY2hpbmEtY29udmVuZXMtYW4taW5kaWFuLW9jZWFuLWZvcnVtLXdpdGhvdXQtaW5kaWEvYXJ0aWNsZTY2MTg3NjA4LmVjZdIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T08:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Second ODI abandoned but New Zealand rise in Super League standings - ICC Cricket",
            "description": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.",
            "url": "https://www.icc-cricket.com/news/2918453",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/27/c8f78d72-fd66-42a8-a65a-3356762229be/GettyImages-1444875376.jpg",
            "publishedAt": "2022-11-27T07:25:53Z",
            "content": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.Watch t… [+1546 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Koimoi"
            },
            "author": "Joginder Tuteja",
            "title": "Bhediya Box Office Day 2: Grows Quite Well On Saturday! - Koimoi",
            "description": "Bhediya Box Office Day 2: It was a good day for Varun Dhawan and Kriti Sanon starrer as it witnessed growth on Saturday. Read more deets!",
            "url": "https://www.koimoi.com/box-office/bhediya-box-office-day-2-grows-quite-well-on-saturday/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-bhediya-grows-quite-well-on-saturday-001.jpg",
            "publishedAt": "2022-11-27T07:24:43Z",
            "content": "Bhediya Box Office Day 2 Updates! (Photo Credit jiostudios/Instagram)\r\nAs expected, Bhediya saw good growth coming its way as the film entered the double-digit score. Yes, it should have happened on … [+1535 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Elon Musk says Twitter user signups at all-time high, touts features of 'everything app' - Economic Times",
            "description": "Musk said user active minutes were at a record high, averaging nearly eight billion active minutes per day in the last seven days as of November 15, an increase of 30% in comparison to the same week last year.",
            "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-says-twitter-user-signups-at-all-time-high-touts-features-of-everything-app/articleshow/95802059.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-95802150,width-1070,height-580,imgsize-1262460,overlay-ettech/photo.jpg",
            "publishedAt": "2022-11-27T07:06:00Z",
            "content": "Twitter Inc chief executive Elon Musk said new user signups to the social media platform are at an \"all-time high\", as he struggles with a mass exodus of advertisers and users fleeing to other platfo… [+2192 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Mosque-Like\" Karnataka Bus Stop Has A New Look After BJP MP's Threat - NDTV",
            "description": "A bus stop in Mysuru, recently in the news over a BJP MP's threat to raze it for looking like a mosque because it had three domes on top, now has a new look, videos and images shared online show.",
            "url": "https://www.ndtv.com/karnataka-news/mosque-like-karnataka-bus-stop-has-a-new-look-after-bjp-mps-threat-3557095",
            "urlToImage": "https://c.ndtvimg.com/2022-11/72ohpo6o_before-and-after-of-mysuru-mosquelike-bus-shelter_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T06:47:27Z",
            "content": "Before and after images of the bus stop on the National Highway-766 in Mysuru.\r\nBengaluru: A bus stop in Mysuru, recently in the news over a BJP MP's threat to raze it for looking like a mosque becau… [+2458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Divesh Merani",
            "title": "Bloodline member possibly suffers broken hand in WarGames Match at Survivor Series 2022 - Sportskeeda",
            "description": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022.",
            "url": "https://www.sportskeeda.com/wwe/rumor-bloodline-member-possibly-suffers-broken-hand-wargames-match-survivor-series-2022",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/db1b7-16695299345434-1920.jpg",
            "publishedAt": "2022-11-27T06:23:02Z",
            "content": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022. He was part of the winning team, as Sami Zayn proved his loyalty to the Anoa'i family du… [+2092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "THE WEEK"
            },
            "author": "Priya Menon",
            "title": "Limited awareness in India about cardio-oncology - The Week",
            "description": "Interview/ Dr Satish C. Govind, chief of non-invasive cardiology, Narayana Institute",
            "url": "https://www.theweek.in/health/more/2022/11/25/limited-awareness-in-india-about-cardio-oncology.html",
            "urlToImage": "https://www.theweek.in/content/dam/week/magazine/health/more/images/2022/11/25/41-Dr-Satish-C-Govind.jpg",
            "publishedAt": "2022-11-27T06:18:00Z",
            "content": "Interview/ Dr Satish C. Govind, chief of non-invasive cardiology, Narayana Institute of Cardiac Sciences, Bengaluru\r\nQ. What happens when you tell the patient, \"You have won your battle against cance… [+5122 chars]"
        }
    ]
}
const Business={
    "status": "ok",
    "totalResults": 38,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights: Keysher Fuller Strikes As Costa Rica Beat Japan To Blow Group E Wide Open - NDTV Sports",
            "description": "FIFA World Cup 2022, Japan vs Costa Rica Highlights: Keysher Fuller scored a goal for Costa Rica in the 81st minute of the game against Japan and that proved to be the difference between the two sides.",
            "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-japan-vs-costa-rica-football-live-score-updates-3557244",
            "urlToImage": "https://c.ndtvimg.com/2022-11/hm0guil8_keysher-fuller-afp_625x300_27_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-11-27T12:21:30Z",
            "content": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights:Costa Rica defeated Japan 1-0 in a Group E match of FIFA World Cup 2022 at Ahmed bin Ali Stadium, Al Rayyan on Sunday. Keysher Fuller Spence scored… [+727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVE - CNN-News18",
            "description": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVEThe Dragon is carrying four cubesats for NASA’s Cubesat Launch Ini...",
            "url": "https://www.youtube.com/watch?v=jP3BAMr2tAk",
            "urlToImage": "https://i.ytimg.com/vi/jP3BAMr2tAk/maxresdefault_live.jpg",
            "publishedAt": "2022-11-27T12:07:58Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Women Look Good When...\": Ramdev's Comment Sets Off Controversy - NDTV",
            "description": "Yoga teacher and Patanjali Ayurved's Ramdev's indecent remarks on women's attire has set off a controversy that threatens to turn political.",
            "url": "https://www.ndtv.com/india-news/women-look-good-when-ramdevs-comment-sets-off-controversy-3557603",
            "urlToImage": "https://c.ndtvimg.com/2022-11/s7djbocg_ramdev_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T12:06:00Z",
            "content": "Ramdev's indecent remarks on women's attire have been condemned by leaders\r\nNew Delhi: Yoga teacher and Patanjali Ayurved's Ramdev's indecent remarks on women's attire has set off a controversy that … [+2998 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Newindian.in"
            },
            "author": null,
            "title": "Scientists study 'world's oldest meal' to learn about our animal ancestors - THE NEW INDIAN - The New Indian",
            "description": "Scientists of Australian National University study ‘world’s oldest meal’ to learn about our animal ancestors",
            "url": "https://newindian.in/web-stories/scientists-study-worlds-oldest-meal-to-learn-about-our-animal-ancestors/",
            "urlToImage": null,
            "publishedAt": "2022-11-27T11:53:00Z",
            "content": "Scientists study worlds oldest meal to learn about our animal ancestors\r\nThe last meal consumed by some of the earliest known animals has helped scientists discover new clues about some odd ancient c… [+1181 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "WhatsApp brings ‘contact card’ for Windows - BusinessLine",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMia2h0dHBzOi8vd3d3LnRoZWhpbmR1YnVzaW5lc3NsaW5lLmNvbS9pbmZvLXRlY2gvd2hhdHNhcHAtYnJpbmdzLWNvbnRhY3QtY2FyZC1mb3Itd2luZG93cy9hcnRpY2xlNjYxOTEzMjcuZWNl0gFwaHR0cHM6Ly93d3cudGhlaGluZHVidXNpbmVzc2xpbmUuY29tL2luZm8tdGVjaC93aGF0c2FwcC1icmluZ3MtY29udGFjdC1jYXJkLWZvci13aW5kb3dzL2FydGljbGU2NjE5MTMyNy5lY2UvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T11:50:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's Artemis 1, Over 400,000 Kms From Earth, Sets A New Record - NDTV",
            "description": "NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 401,798 kilometres from Earth.",
            "url": "https://www.ndtv.com/world-news/nasas-artemis-1-over-400-000-kms-from-earth-sets-a-new-record-3557577",
            "urlToImage": "https://c.ndtvimg.com/2022-11/81tn5nac_artemis-orion_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T11:29:02Z",
            "content": "New Delhi: NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 419,378 kilometres from Earth. The record was previously set during the … [+2171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "iCloud on Windows showing random photos and videos from other users: Report | Mint - Mint",
            "description": "Many users have complained about the problem in the MacRumours forum. At present, it is limited to iCloud on Windows only. It is not sure yet whether the problem is for Apple or Microsoft to fix.",
            "url": "https://www.livemint.com/technology/tech-news/icloud-on-windows-showing-random-photos-and-videos-from-other-users-report-11669545470146.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/iphone_1669545580717_1669545581007_1669545581007.jpg",
            "publishedAt": "2022-11-27T10:40:12Z",
            "content": "Are you seeing photos and videos from other users when using iCloud on Windows? If yes, then you are not alone. Many Apple iPhone users have complained about seeing photos and videos that do not belo… [+116 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Abplive.com"
            },
            "author": "ABP News Bureau",
            "title": "Pilot Vs Gehlot: There'll Be 'Amicable Settlement' To Rajasthan Congress Crisis, Says KC Venugopal - ABP Live",
            "description": "Congress Leader KC Venugopal says there will be an amicable settlement to the Rajasthan issue.",
            "url": "https://news.abplive.com/news/india/congress-leader-kc-venugopal-amicable-settlement-rajasthan-affairs-pilot-gehlot-1566005",
            "urlToImage": "https://feeds.abplive.com/onecms/images/uploaded-images/2022/11/27/3ca33fbb4de3e6ce1dd27d2005d743e7166954452455819_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
            "publishedAt": "2022-11-27T10:31:09Z",
            "content": "New Delhi: Congress General Secretary, KC Venugopal on Sunday said he was confident that there will be an amicable settlement to the Rajasthan Congress Crisis.\r\n\"There will be an amicable settlement … [+1844 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Parmita Uniyal",
            "title": "Measles outbreak: How to protect your child from measles; expert offers tips - Hindustan Times",
            "description": "A large number of children have been detected with measles in Mumbai which has caused panic among parents. Here are tips you must follow to protect your kid from measles. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/measles-outbreak-how-to-protect-your-child-from-measles-expert-offers-tips-101669543820734.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/measles_1669543863203_1669543863321_1669543863321.jpg",
            "publishedAt": "2022-11-27T10:18:44Z",
            "content": "Measles outbreak in Mumbai has become a cause of concern as cases continue to rise and hospitalisations increase. The disease that initially shows up with symptoms like fever, dry cough, sore throat,… [+3453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Sri Lanka vs Afghanistan, 2nd ODI, Afghanistan tour of Sri Lanka, 2022 - Cricbuzz",
            "description": "Follow Sri Lanka vs Afghanistan, 2nd ODI, Nov 27, Afghanistan tour of Sri Lanka, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/live-cricket-scores/56943/sl-vs-afg-2nd-odi-afghanistan-tour-of-sri-lanka-2022",
            "urlToImage": null,
            "publishedAt": "2022-11-27T09:02:19Z",
            "content": "18:06 Local Time, 12:36 GMT, 18:06 IST: Afghanistan fail to bat out their quota of 50 overs. Rajitha bowled a tight spell with the new ball but it was Lahiru Kumara who provided the breakthrough the … [+3103 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "BJP \"Agitated\", Congress \"Nowhere\": Arvind Kejriwal Sure Of Gujarat Win - NDTV",
            "description": "Delhi Chief Minister Arvind Kejriwal on Sunday made a written assertion that the Aam Aadmi Party (AAP) will form government in Gujarat after the upcoming Assembly polls.",
            "url": "https://www.ndtv.com/india-news/aap-will-win-gujarat-assembly-polls-kejriwal-promises-old-pension-scheme-for-govt-employees-by-jan-31-3557249",
            "urlToImage": "https://c.ndtvimg.com/2022-01/0014f05o_arvindkejriwal_650x400_18_January_22.jpg",
            "publishedAt": "2022-11-27T08:43:00Z",
            "content": "The BJP was agitated because it was staring at defeat, he said. (File photo)\r\nAhmedabad: Delhi Chief Minister Arvind Kejriwal on Sunday made a written assertion that the Aam Aadmi Party (AAP) will fo… [+3847 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "140-foot asteroid rushing towards close approach to Earth at blazing speed of 51875 kmph - HT Tech",
            "description": "NASA confirmed that a 140-foot asteroid is on its way to Earth at a massive speed of 51875 kmph.",
            "url": "https://tech.hindustantimes.com/tech/news/140foot-asteroid-rushing-towards-close-approach-to-earth-at-blazing-speed-of-51875-kmph-71669537458364.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/27/1600x900/asteroid-4369511_1920_1669537616654_1669537634123_1669537634123.jpg",
            "publishedAt": "2022-11-27T08:27:53Z",
            "content": "Earth may face a bit of danger from this upcoming asteroid hurtling towards Earth at terrifying speed! A huge \"potentially hazardous\" asteroid zoomed by yesterday after it made its closest approach t… [+2081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "'Xi Jinping step down, end lockdown': Anti-Covid protests flare up in China after fire kills 10 - India Today",
            "description": "Protests against China’s restrictive Covid-19 measures continued to flare up in China after a deadly fire in Xinjiang killed ten people. Protestors claimed that the strict Covid curbs hampered the rescue operations.",
            "url": "https://www.indiatoday.in/world/story/end-the-lockdown-anti-covid-protests-china-xinjiang-beijing-deadly-fire-2302191-2022-11-27",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/1000_6-sixteen_nine.jpeg?VersionId=oJexZAimy3kwoxJ5sogoXghkA43eqv5y",
            "publishedAt": "2022-11-27T08:26:15Z",
            "content": "By India Today Web Desk: The public anger against the Chinese President Xi Jinping's strict Covid measures continued to rise in Shanghai as protestors called for Chinese leader to step down. Protesto… [+3987 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "India is the lone absentee at China’s Indian Ocean forum of 19 countries - The Hindu",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMicmh0dHBzOi8vd3d3LnRoZWhpbmR1LmNvbS9uZXdzL2ludGVybmF0aW9uYWwvY2hpbmEtY29udmVuZXMtYW4taW5kaWFuLW9jZWFuLWZvcnVtLXdpdGhvdXQtaW5kaWEvYXJ0aWNsZTY2MTg3NjA4LmVjZdIBAA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T08:08:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Second ODI abandoned but New Zealand rise in Super League standings - ICC Cricket",
            "description": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.",
            "url": "https://www.icc-cricket.com/news/2918453",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/27/c8f78d72-fd66-42a8-a65a-3356762229be/GettyImages-1444875376.jpg",
            "publishedAt": "2022-11-27T07:25:53Z",
            "content": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.Watch t… [+1546 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Koimoi"
            },
            "author": "Joginder Tuteja",
            "title": "Bhediya Box Office Day 2: Grows Quite Well On Saturday! - Koimoi",
            "description": "Bhediya Box Office Day 2: It was a good day for Varun Dhawan and Kriti Sanon starrer as it witnessed growth on Saturday. Read more deets!",
            "url": "https://www.koimoi.com/box-office/bhediya-box-office-day-2-grows-quite-well-on-saturday/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-bhediya-grows-quite-well-on-saturday-001.jpg",
            "publishedAt": "2022-11-27T07:24:43Z",
            "content": "Bhediya Box Office Day 2 Updates! (Photo Credit jiostudios/Instagram)\r\nAs expected, Bhediya saw good growth coming its way as the film entered the double-digit score. Yes, it should have happened on … [+1535 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": "Reuters",
            "title": "Elon Musk says Twitter user signups at all-time high, touts features of 'everything app' - Economic Times",
            "description": "Musk said user active minutes were at a record high, averaging nearly eight billion active minutes per day in the last seven days as of November 15, an increase of 30% in comparison to the same week last year.",
            "url": "https://economictimes.indiatimes.com/tech/technology/elon-musk-says-twitter-user-signups-at-all-time-high-touts-features-of-everything-app/articleshow/95802059.cms",
            "urlToImage": "https://img.etimg.com/thumb/msid-95802150,width-1070,height-580,imgsize-1262460,overlay-ettech/photo.jpg",
            "publishedAt": "2022-11-27T07:06:00Z",
            "content": "Twitter Inc chief executive Elon Musk said new user signups to the social media platform are at an \"all-time high\", as he struggles with a mass exodus of advertisers and users fleeing to other platfo… [+2192 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "\"Mosque-Like\" Karnataka Bus Stop Has A New Look After BJP MP's Threat - NDTV",
            "description": "A bus stop in Mysuru, recently in the news over a BJP MP's threat to raze it for looking like a mosque because it had three domes on top, now has a new look, videos and images shared online show.",
            "url": "https://www.ndtv.com/karnataka-news/mosque-like-karnataka-bus-stop-has-a-new-look-after-bjp-mps-threat-3557095",
            "urlToImage": "https://c.ndtvimg.com/2022-11/72ohpo6o_before-and-after-of-mysuru-mosquelike-bus-shelter_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T06:47:27Z",
            "content": "Before and after images of the bus stop on the National Highway-766 in Mysuru.\r\nBengaluru: A bus stop in Mysuru, recently in the news over a BJP MP's threat to raze it for looking like a mosque becau… [+2458 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Divesh Merani",
            "title": "Bloodline member possibly suffers broken hand in WarGames Match at Survivor Series 2022 - Sportskeeda",
            "description": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022.",
            "url": "https://www.sportskeeda.com/wwe/rumor-bloodline-member-possibly-suffers-broken-hand-wargames-match-survivor-series-2022",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/db1b7-16695299345434-1920.jpg",
            "publishedAt": "2022-11-27T06:23:02Z",
            "content": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022. He was part of the winning team, as Sami Zayn proved his loyalty to the Anoa'i family du… [+2092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "THE WEEK"
            },
            "author": "Priya Menon",
            "title": "Limited awareness in India about cardio-oncology - The Week",
            "description": "Interview/ Dr Satish C. Govind, chief of non-invasive cardiology, Narayana Institute",
            "url": "https://www.theweek.in/health/more/2022/11/25/limited-awareness-in-india-about-cardio-oncology.html",
            "urlToImage": "https://www.theweek.in/content/dam/week/magazine/health/more/images/2022/11/25/41-Dr-Satish-C-Govind.jpg",
            "publishedAt": "2022-11-27T06:18:00Z",
            "content": "Interview/ Dr Satish C. Govind, chief of non-invasive cardiology, Narayana Institute of Cardiac Sciences, Bengaluru\r\nQ. What happens when you tell the patient, \"You have won your battle against cance… [+5122 chars]"
        }
    ]
}
const Entertainment={
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Entertainment Bureau",
            "title": "News18 Showreel 2022 Live Updates: Subhash Ghai Calls Actors 'Spoilt Children'; Says OTT Gave Talent, Cinem - News18",
            "description": "News18 Showreel Conclave 2022 Mumbai Live Updates: News18 presents the first-of-its-kind conclave on everything entertainment, News18 Showreel. Kartik Aaryan, Ayushmann Khurrana, Anupam Kher, and Shankar Mahadevan will be participating in the conclave organis…",
            "url": "https://www.news18.com/news/movies/news18-showreel-conclave-2022-mumbai-live-updates-kartik-aaryan-anupam-kher-ayushmann-khurrana-kajol-yami-gautam-mrunal-thakur-shefali-shah-rasika-dugal-livenews-6481999.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/news18-showreel-kartik-aaryan-anupam-kher-aayushmann-khurrana-166953830416x9.jpg",
            "publishedAt": "2022-11-27T12:31:08Z",
            "content": "to talk about the year gone by and all other things Bollywood.This year’s conference kicks off with Kartik Aaryan. Riding high on the success of blockbuster Bhool Bhulaiyaa 2, Kartik Aaryan has two m… [+1555 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "OpIndia"
            },
            "author": "OpIndia Staff",
            "title": "Uorfi Javed calls out Chetan Bhagat, shares his #MeToo chats after Bhagat calls her a ‘distraction’ for the youth - OpIndia",
            "description": "Uorfi Javed, who is popular for her social media presence and unconventional fashion sense, called out author Chetan Bhagat for his remarks where he called Uorfi a 'distraction' for young boys | OpIndia News",
            "url": "https://www.opindia.com/2022/11/uorfi-javed-chetan-bhagat-mee-too-instagram-reels-stories/",
            "urlToImage": "https://www.opindia.com/wp-content/uploads/2022/11/urfi.jpg",
            "publishedAt": "2022-11-27T09:31:35Z",
            "content": "On November 26, actress Uorfi Javed, who is popular for her social media presence and unconventional fashion sense, called out author Chetan Bhagat for his remarks where he called Uorfi a ‘distractio… [+5292 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "Unseen pic of Prabhas from Baahubali goes viral - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/unseen-pic-of-prabhas-from-baahubali-goes-viral.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2022-11-27T09:31:00Z",
            "content": "Prabhas, who is termed a darling by his fans and dear ones, is now busy with multiple projects. The PAN Indian actor’s next release is Adhipurush which will hit the theatres on June 16, 2023. The fan… [+667 chars]"
        },
        {
            "source": {
                "id": "the-times-of-india",
                "name": "The Times of India"
            },
            "author": null,
            "title": "Then and Now! Fardeen Khan looks fit as a fiddle as he gets spotted shelling out uber-cool vibes; fans say 'Complete makeover' - Times of India",
            "description": "After being away from the film industry for a long time, of late, actor Fardeen Khan has been spotted several times in the city flaunting his dramatic weight loss. The actor, who once was trolled for his weight gain, recently got spotted by the paparazzi in h…",
            "url": "https://timesofindia.indiatimes.com/videos/entertainment/hindi/then-and-now-fardeen-khan-looks-fit-as-a-fiddle-as-he-gets-spotted-shelling-out-uber-cool-vibes-fans-say-complete-makeover/videoshow/95803849.cms",
            "urlToImage": "https://timesofindia.indiatimes.com/photo/95803849/size-57756/95803849.jpg",
            "publishedAt": "2022-11-27T09:10:52Z",
            "content": "After being away from the film industry for a long time, of late, actor Fardeen Khan\r\n has been spotted several times in the city flaunting his dramatic weight loss. The actor, who once was trolled f… [+432 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "OTT: Love Today’s Telugu version to be premiered on this date - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/ott-love-todays-telugu-version-to-be-premiered-on-this-date.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2022-11-27T07:47:00Z",
            "content": "Earlier today, we reported that the super hit movie Love Today will be premiered on Netflix on December 2, 2022. As the Telugu version was released last Friday, it won’t be premiered on the above-men… [+672 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Katrina Kaif fans praise her 'sanskari bahu aura' at Mumbai airport. Watch - Hindustan Times",
            "description": "Katrina Kaif travelled out of Mumbai on Sunday in a red ethnic outfit. Here's how fans reacted. Watch video. | Bollywood",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/katrina-kaif-waves-at-paparazzi-jets-off-from-mumbai-in-pink-outfit-fans-react-101669531843212.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/Katrina_Kaif_1669532987909_1669533002979_1669533002979.jpg",
            "publishedAt": "2022-11-27T07:30:33Z",
            "content": "Actor Katrina Kaif flew out of Mumbai on Sunday. Taking to Instagram, a paparazzo account posted a clip of the actor at the airport in the morning. In the clip, the actor got out of her car and walke… [+1717 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Koimoi"
            },
            "author": "Joginder Tuteja",
            "title": "Bhediya Box Office Day 2: Grows Quite Well On Saturday! - Koimoi",
            "description": "Bhediya Box Office Day 2: It was a good day for Varun Dhawan and Kriti Sanon starrer as it witnessed growth on Saturday. Read more deets!",
            "url": "https://www.koimoi.com/box-office/bhediya-box-office-day-2-grows-quite-well-on-saturday/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/box-office-bhediya-grows-quite-well-on-saturday-001.jpg",
            "publishedAt": "2022-11-27T07:24:43Z",
            "content": "Bhediya Box Office Day 2 Updates! (Photo Credit jiostudios/Instagram)\r\nAs expected, Bhediya saw good growth coming its way as the film entered the double-digit score. Yes, it should have happened on … [+1535 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Entertainment Bureau",
            "title": "Anurag Kashyap Went to Rehab Thrice, Had a Heart Attack; Filmmaker Opens Up About His Struggles - News18",
            "description": "In a recent interview, director Anurag Kashyap opened up about going to rehab three times and coping with depression.",
            "url": "https://www.news18.com/news/movies/anurag-kashyap-went-to-rehab-thrice-had-a-heart-attack-filmmaker-opens-up-about-his-struggles-6481321.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/anurag-kashyap-1-166953248516x9.jpg",
            "publishedAt": "2022-11-27T07:02:13Z",
            "content": "Anurag Kashyap might be one of the most celebrated filmmakers in the country now but he had to go through his share of struggles and gloomy days. In a recent interview, the Gangs of Wasseypur directo… [+1534 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Wrestling Inc."
            },
            "author": "Sai Mohan",
            "title": "Triple H Addresses The Future Of The WarGames Match - Wrestling Inc.",
            "description": "Speaking at the post-Survivor Series presser, WWE Chief Content Officer Triple H was asked if fans can expect WarGames matches every November.",
            "url": "https://www.wrestlinginc.com/1117154/triple-h-addresses-the-future-of-the-wargames-match/",
            "urlToImage": "https://www.wrestlinginc.com/img/gallery/triple-h-addresses-the-future-of-the-wargames-match/l-intro-1669532338.jpg",
            "publishedAt": "2022-11-27T07:00:00Z",
            "content": "Is the WarGames match set to become an annual affair at WWE Survivor Series? \r\nSpeaking at the post-Survivor Series presser, WWE Chief Content Officer Triple H was asked if fans can expect to see Sup… [+2581 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Koimoi"
            },
            "author": "Koimoi.com Team",
            "title": "Drishyam 2 Day 10 vs Bhediya Day 3 Box Office Morning Occupancy: We Have A Clear Winner For Sunday But There’s No Giving Up Yet! - Koimoi",
            "description": "Drishyam 2 Day 10 vs Bhediya Day 3 Box Office Morning Occupancy: There’s an improvement but Ajay Devgn starrer is the clear winner!",
            "url": "https://www.koimoi.com/box-office/drishyam-2-day-10-vs-bhediya-day-3-box-office-morning-occupancy-we-have-a-clear-winner-for-sunday-but-theres-no-giving-up-yet/",
            "urlToImage": "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/11/drishyam-2-day-10-vs-bhediya-day-3-box-office-morning-occupancy-001.jpg",
            "publishedAt": "2022-11-27T06:46:36Z",
            "content": "Drishyam 2 Day 10 vs Bhediya Day 3 Box Office Morning Occupancy Updates! ( Photo Credit Bhediya Poster / IMDb )\r\nSuch a terrific run it is for Ayan Devgn led Drishyam 2 at the box office. With each p… [+1848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Divesh Merani",
            "title": "Bloodline member possibly suffers broken hand in WarGames Match at Survivor Series 2022 - Sportskeeda",
            "description": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022.",
            "url": "https://www.sportskeeda.com/wwe/rumor-bloodline-member-possibly-suffers-broken-hand-wargames-match-survivor-series-2022",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/db1b7-16695299345434-1920.jpg",
            "publishedAt": "2022-11-27T06:23:02Z",
            "content": "It seems like Jey Uso of The Bloodline may have broken his hand during the main event of Survivor Series 2022. He was part of the winning team, as Sami Zayn proved his loyalty to the Anoa'i family du… [+2092 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "ICYMI: Pics From Nysa Devgan's Thanksgiving Party With Orhan Awatramani And Friends - NDTV Movies",
            "description": "\"Gratitude for you,\" commented Nysa Devgan on the post",
            "url": "https://www.ndtv.com/entertainment/nysa-devgan-enjoys-thanksgiving-dinner-with-orhan-awatramani-and-other-friends-3557020",
            "urlToImage": "https://c.ndtvimg.com/2022-11/02t0dhi_nysa-_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T06:12:15Z",
            "content": "Nysa Devgan with Orhan Awatramani. (courtesy: orry1)\r\nNew Delhi: Ajay Devgn and Kajol's daughter Nysa and Orhan Awatramani aka Orry are best of friends. The duo are often spotted spending fun time to… [+2274 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Inside Madhuri Dixit And Shriram Nene's Thanksgiving Dinner With Chef Vikas Khanna - NDTV Movies",
            "description": "\"This year was extra special to be with my Ma and Nene-Dixit family,\" read the caption",
            "url": "https://www.ndtv.com/entertainment/inside-madhuri-dixit-and-shriram-nenes-thanksgiving-dinner-with-chef-vikas-khanna-3557016",
            "urlToImage": "https://c.ndtvimg.com/2022-11/vihbros8_madhuri-_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T06:01:00Z",
            "content": "Shriram Nene shared this image. (courtesy: drneneofficial)\r\nNew Delhi: We got a glimpse of Madhuri Dixit and husband Shriram Nene's Thanksgiving festivities with celeb chef Vikas Khanna and his mom. … [+1100 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "Young beauty pairs up with Allu Arjun – Deets inside - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/young-beauty-pairs-up-with-allu-arjun-deets-inside.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2022-11-27T05:30:00Z",
            "content": "Young and talented beauty Sreeleela flooded with offers post the release of her Tollywood debut movie Pelli SandaD. The actress, who will be seen next in Dhamaka, is now paired up with a star actor f… [+697 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "Masaba Gupta's Birthday Note For Boyfriend Satyadeep Misra Is Everything - NDTV Movies",
            "description": "Masaba Gupta's birthday wish for Satyadeep Misra is all hearts",
            "url": "https://www.ndtv.com/entertainment/here-s-how-masaba-gupta-wished-her-boyfriend-satyadeep-misra-on-his-birthday-3556922",
            "urlToImage": "https://c.ndtvimg.com/2022-11/svid1578_masaba_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T05:22:53Z",
            "content": "Masaba Gupta with Satyadeep Misra. (courtesy: instasattu)\r\nFashion designer Masaba Gupta and her boyfriend Satyadeep Misra never shy away from expressing love for each other on social media. Now, whe… [+2842 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "Not Aamir Khan, Ira's mother-in-law was the happiest at her engagement party. Here's proof! - India Today",
            "description": "Aamir Khan's daughter, Ira Khan, got engaged to her longtime boyfriend Nupur Shikhare on November 18. In a new post shared by Ira, we get a glimpse of Nupur's mother dancing her heart out.",
            "url": "https://www.indiatoday.in/movies/celebrities/story/not-aamir-khan-iras-mother-in-law-was-the-happiest-at-her-engagement-party-heres-proof-2302233-2022-11-27",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/befunky-collage_87-sixteen_nine.jpg?VersionId=zaY4LaDWOT7chp0vWSUiYQImvgR7bwXo",
            "publishedAt": "2022-11-27T05:19:22Z",
            "content": "By India Today Web Desk: Aamir Khan and his former wife Reena Dutta's daughter Ira Khan recently celebrated her engagement to longtime boyfriend Nupur Shikhare in Mumbai. She got engaged to him on No… [+2252 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Ken",
            "title": "5 reasons why Seth Rollins lost the United States Championship at WWE Survivor Series WarGames 2022 - Sportskeeda",
            "description": "WWE Survivor Series WarGames 2022 was an epic event filled with several exciting matches.",
            "url": "https://www.sportskeeda.com/wwe/5-reasons-seth-rollins-lost-united-states-championship-wwe-survivor-series-wargames-2022",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/844fa-16695204617927-1920.jpg",
            "publishedAt": "2022-11-27T04:54:39Z",
            "content": "WWE Survivor Series WarGames 2022 was an epic event filled with several exciting matches. Two bouts on the card were held inside the dangerous WarGames structure, plus former friends clashed, and the… [+4967 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Entertainment Desk",
            "title": "Shweta Bachchan reacts after mom Jaya says she makes everything about herself - Hindustan Times",
            "description": "Shweta Bachchan said that she loved it when her mother Jaya Bachchan and daughter Navya Naveli Nanda praised her on the podcast What The Hell Navya. In response, Jaya said Shweta always ‘manages’ to make everything about herself. Here's how Shweta responded t…",
            "url": "https://www.hindustantimes.com/entertainment/bollywood/shweta-bachchan-reacts-after-mom-jaya-bachchan-says-she-makes-everything-about-herself-101669521219165.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/Jaya_Bachchan-_Shweta_Bachchan-Navya_Naveli_Nanda_1645361379309_1669521528959_1669521528959.jpg",
            "publishedAt": "2022-11-27T04:36:53Z",
            "content": "Navya Naveli Nanda was joined by her mother Shweta Bachchan and grandmother Jaya Bachchan for the finale episode of her podcast What The Hell Navya. In the episode, which was released on Saturday, Na… [+2137 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "DNA India"
            },
            "author": "DNA Web Team",
            "title": "Kantara star Rishab Shetty refuses to work with Rashmika Mandanna, says 'is type ke actors..' - DNA India",
            "description": "Rishab Shetty recently made headlines as took a dig at Rashmika Mandanna for an old interview that recently went viral.",
            "url": "https://www.dnaindia.com/entertainment/report-kantara-star-rishab-shetty-refuses-to-work-with-rashmika-mandanna-says-is-type-ke-actors-3006068",
            "urlToImage": "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/11/27/2557000-rashmika.jpg",
            "publishedAt": "2022-11-27T04:31:00Z",
            "content": "Reported By:| Edited By: DNA Web Team |Source: DNA webdesk |Updated: Nov 27, 2022, 10:54 AM ISTWith his Kannada movie becoming a mega-blockbuster and having a successful run at the box office, Rishab… [+1809 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "123telugu.com"
            },
            "author": null,
            "title": "Interesting update on Kamal’s Indian 2 - 123telugu",
            "description": "Telugu cinema news, Telugu Movies Updates, Latest Movie reviews in Telugu, Telugu cinema reviews, telugu movie reviews, Tollywood, Box office collections, Telugu Movie show times, Theater List, telugu cinema tickets",
            "url": "https://www.123telugu.com/mnews/interesting-update-on-kamals-indian-2.html",
            "urlToImage": "https://www.123telugu.com/content/wp-content/themes/123telugu/images/logo.gif",
            "publishedAt": "2022-11-27T04:30:00Z",
            "content": "It is already known that Ulaganayagan Kamal Haasan is busy shooting for his upcoming movie, Indian 2. The Shankar Shanmugam directorial has Kajal Aggarwal as the female lead. \r\nThe latest update is t… [+608 chars]"
        }
    ]
}
const Health={
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "7 Symptoms of High Blood Pressure You Should Know - TheHealthSite",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMidmh0dHBzOi8vd3d3LnRoZWhlYWx0aHNpdGUuY29tL3dlYnN0b3JpZXMvZGlzZWFzZXMtY29uZGl0aW9ucy83LXN5bXB0b21zLW9mLWhpZ2gtYmxvb2QtcHJlc3N1cmUteW91LXNob3VsZC1rbm93LTkyODQ2MC_SAXZodHRwczovL3d3dy50aGVoZWFsdGhzaXRlLmNvbS93ZWJzdG9yaWVzL2Rpc2Vhc2VzLWNvbmRpdGlvbnMvNy1zeW1wdG9tcy1vZi1oaWdoLWJsb29kLXByZXNzdXJlLXlvdS1zaG91bGQta25vdy05Mjg0NjAv?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T12:23:53Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Zarafshan Shiraz",
            "title": "Diabetes rising among children. Here's what can be done to reduce the risk - Hindustan Times",
            "description": "In India especially, poor lifestyle choices and unhealthy eating habits are surging diabetes among children. The Diabetes Atlas reported that 1,28,500 Indian adolescents had diabetes from which 97,700 were children. Here's what can be done to reduce the risk …",
            "url": "https://www.hindustantimes.com/lifestyle/health/diabetes-rising-among-children-here-s-what-can-be-done-to-reduce-the-risk-101669550531997.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/pexels-tima-miroshnichenko-4908729_1669550709127_1669550759809_1669550759809.jpg",
            "publishedAt": "2022-11-27T12:16:16Z",
            "content": "The fast-paced technological environment has its share of pros and cons where changes in standard of living have induced rising incidences of non-communicable diseases where in India especially, poor… [+2395 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Indepthnews.net"
            },
            "author": "Somar Wijayadasa",
            "title": "The 34th World AIDS Day: “Achieving Equity to End HIV” - IDN InDepthNews | Analysis That Matters",
            "description": "IDN-InDepthNews is flagship agency of the global International Press Syndicate Group speaking out for people, planet and peace.",
            "url": "https://www.indepthnews.net/index.php/sustainability/health-well-being/5761-the-34th-world-aids-day-achieving-equity-to-end-hiv",
            "urlToImage": null,
            "publishedAt": "2022-11-27T12:06:44Z",
            "content": "By Somar Wijayadasa*\r\nLast year, every two minutes one person got infected with HIV, and every minute one person died of AIDS-related causes.\r\nNEW YORK (IDN) Every year on December 1, people througho… [+7848 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Zarafshan Shiraz",
            "title": "Can increase in oil content in food cause diabetes? Here's what doctors say - Hindustan Times",
            "description": "Fat is important since it provides cushioning to organs, stores energy, protects the body against elements, supports cell growth and prevents early cell death but can increase in oil content in food cause diabetes? Doctors answer | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/can-increase-in-oil-content-in-food-cause-diabetes-here-s-what-doctors-say-101669547348271.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/pexels-kampus-production-6605223_1669547946428_1669547978299_1669547978299.jpg",
            "publishedAt": "2022-11-27T11:49:22Z",
            "content": "When one talks about diabetes its usually the carbohydrate that gets all the attention in diabetes management however, there is another important nutrient considered as part of a balanced diet which … [+3808 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Eatingwell.com"
            },
            "author": "Lauren Manaker M.S., RDN, LD, CLEC",
            "title": "Menopause and Type 2 Diabetes: What's the Link and How to Reduce the Risk - EatingWell",
            "description": "The food you eat may reduce your diabetes risk during menopause.",
            "url": "https://www.eatingwell.com/article/8014248/menopause-and-type-2-diabetes/",
            "urlToImage": "https://imagesvc.meredithcorp.io/v3/mm/image?q=60&c=sc&poi=%5B1000%2C559%5D&w=2000&h=1000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F44%2F2022%2F11%2F23%2Fmenopause-and-type-2-diabetes.jpg",
            "publishedAt": "2022-11-27T11:09:12Z",
            "content": "When people think of menopause, hot flashes, increased weight and mood swings are common symptoms that come to mind. And while it is true that some females who are experiencing their menopausal trans… [+6514 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News9live.com"
            },
            "author": "Dr Porus Turner",
            "title": "Higher level of glucose in saliva increases risk of oral damage, periodontal therapy can be beneficial - News9 LIVE",
            "description": "Good glycemic control reduces the risk of periodontal disease and further deterioration",
            "url": "https://www.news9live.com/health/health-conditions/higher-level-of-glucose-in-saliva-increases-risk-of-oral-damage-periodontal-therapy-can-be-beneficial-210381",
            "urlToImage": "https://media.news9live.com/h-upload/2022/11/27/585793-dibates.jpg",
            "publishedAt": "2022-11-27T11:08:03Z",
            "content": "In people with diabetes, the implications of increased blood glucose levels can cause reduced production of saliva, leading to a dry sensation in the mouth, and allowing for a build-up of plaque. Peo… [+1875 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ANI News"
            },
            "author": null,
            "title": "Poor diet damages blood vessels: Study - ANI News",
            "description": "Metabolic disease affects blood vessels in different organs of our body in a unique way, suggests the findings of recent study",
            "url": "https://www.aninews.in/news/lifestyle/food/poor-diet-damages-blood-vessels-study20221127160323",
            "urlToImage": "https://aniportalimages.s3.amazonaws.com/media/details/ANI-20221127103310.jpg",
            "publishedAt": "2022-11-27T10:33:00Z",
            "content": "Washington [US], November 27 (ANI): Metabolic disease affects blood vessels in different organs of our body in a unique way, suggests the findings of recent study.For instance, blood vessels in the l… [+1952 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Zoom"
            },
            "author": "Simran Arora",
            "title": "Lung cancer: Know the first signs of India’s fourth most common tumour - Times Now",
            "description": "According to a report in the Journal of Thoracic Oncology, the mortality rate of lung cancer in India is 8.1 per cent. When it comes to lung cancer treatment, it all starts with the timely detection and being aware of the early symptoms of the disease.",
            "url": "https://www.timesnownews.com/health/lung-cancer-know-the-first-signs-of-indias-fourth-most-common-tumour-article-95803177",
            "urlToImage": "https://static.tnn.in/thumb/msid-95803177,imgsize-100,width-1280,height-720,resizemode-75/95803177.jpg",
            "publishedAt": "2022-11-27T10:26:23Z",
            "content": "India ranks 4th in Renewable Energy installed capacity after China, EU, US; 'country taking steps to develop SMR tech'"
        },
        {
            "source": {
                "id": null,
                "name": "Daijiworld.com"
            },
            "author": null,
            "title": "Some impressive benefits of vitamin C supplements - Daijiworld.com",
            "description": "By Shikha Dwivedi\r\nNew Delhi, Nov 27 (IANSlife): Vitamin C is a very important vitamin that plays a number of roles in the human body. Packed with a wide range of impressive health benefits, the water-soluble vitamin is present in numerous fruits and vegetabl…",
            "url": "https://www.daijiworld.com/news/newsDisplay?newsID=1023734",
            "urlToImage": "https://daijiworld.ap-south-1.linodeobjects.com/Linode/images3/arun_271122_vitc.jpg",
            "publishedAt": "2022-11-27T10:22:51Z",
            "content": "By Shikha Dwivedi\r\nNew Delhi, Nov 27 (IANSlife): Vitamin C is a very important vitamin that plays a number of roles in the human body. Packed with a wide range of impressive health benefits, the wate… [+3338 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Abigail Banerji",
            "title": "Are cold showers in the winter good? - Hindustan Times",
            "description": "While we may shudder to even think of having a cold water shower, here are the pros and cons of a taking a cold shower in the winters. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/are-cold-showers-in-the-winter-good-101669544386459.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/4e0e2428-6e3b-11ed-95b9-ed68d951bc1b_1669544370306.jpg",
            "publishedAt": "2022-11-27T10:19:46Z",
            "content": "Nothing is more relaxing than a shower after a long day. But as the leaves fall and the season changes, some of us might swap our cold showers for hot ones while still others will continue to opt for… [+6231 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "Parmita Uniyal",
            "title": "Measles outbreak: How to protect your child from measles; expert offers tips - Hindustan Times",
            "description": "A large number of children have been detected with measles in Mumbai which has caused panic among parents. Here are tips you must follow to protect your kid from measles. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/measles-outbreak-how-to-protect-your-child-from-measles-expert-offers-tips-101669543820734.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/measles_1669543863203_1669543863321_1669543863321.jpg",
            "publishedAt": "2022-11-27T10:18:44Z",
            "content": "Measles outbreak in Mumbai has become a cause of concern as cases continue to rise and hospitalisations increase. The disease that initially shows up with symptoms like fever, dry cough, sore throat,… [+3453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "ANI",
            "title": "Almonds can help cut calories during weight loss journey: Research - Hindustan Times",
            "description": "A handful of almonds can motivate people to eat fewer kilojoules each day, according to researchers who researched how almonds can change human hunger. | Health",
            "url": "https://www.hindustantimes.com/lifestyle/health/almonds-can-help-cut-calories-during-weight-loss-journey-research-101669543689943.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/dhanya-purohit-xQ3f6J5HSgE-unsplash_1666345232268_1669543819261_1669543819261.jpg",
            "publishedAt": "2022-11-27T10:17:23Z",
            "content": "A recent study from the University of South Australia revealed that a handful of almonds can assist prevent weight gain even though reducing weight can be a thankless task. Researchers, who studied h… [+2796 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Kalinga TV"
            },
            "author": "Shraddha Suman",
            "title": "Symptoms that point towards the possibility of thyroid cancer - Kalinga TV",
            "description": "Thyroid cancer is a growth of cells that starts in the thyroid. The thyroid is a butterfly-shaped gland located at the base of the neck, just below the Adam's apple. The thyroid produces hormones that regulate heart rate, blood pressure, body tempera",
            "url": "https://kalingatv.com/health/signs-and-symptoms-that-might-point-towards-thyroid-cancer/",
            "urlToImage": "https://kalingatv.com/wp-content/uploads/2022/11/thyroid-cancer.jpg",
            "publishedAt": "2022-11-27T08:53:56Z",
            "content": "Thyroidcancer is a growth of cells that starts in the thyroid. The thyroid is a butterfly-shaped gland located at the base of the neck, just below the Adam’s apple. The thyroid produces hormones that… [+5700 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Saradha V",
            "title": "Heart Attack, Stroke, Cancer Leading Causes of Deaths among Tribals, Finds ICMR Study - News18",
            "description": "The study on tribal deaths, carried out in 12 districts with more than 50% tribal people between 2016 and 2018, found that 66% of deaths were caused by Non-Communicable Diseases (NCDs). Infectious diseases caused 15% of the deaths",
            "url": "https://www.news18.com/news/india/heart-attack-stroke-cancer-leading-causes-of-deaths-among-tribals-finds-icmr-study-6481825.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/heart-attack-1-1-1-166730327116x9.png",
            "publishedAt": "2022-11-27T08:44:00Z",
            "content": "Heart attacks, strokes and cancer are the main causes of death among tribal people, a study by the Tribal Health Research Forum of the Indian Council of Medical Research (ICMR) has found.\r\nThe study … [+3133 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNBCTV18"
            },
            "author": "Vanita Srivastava",
            "title": "Centre suggests early vaccination against measles in infants, but the efficacy is yet to be scientifically val - CNBCTV18",
            "description": "Amid the surge in measles in some states in India,  the central government   has already recommended a shot of measles vaccine for children between 6 months and 5 years of age living in the affected areas. However, some evidence on the age-specific effects of…",
            "url": "https://www.cnbctv18.com/views/should-measles-vaccine-be-given-at-6-months-instead-of-9-for-infants-15269471.htm",
            "urlToImage": "https://images.cnbctv18.com/wp-content/uploads/2019/05/2019-05-06T101012Z_1_LYNXNPEF450KT_RTROPTP_4_USA-MEASLES-VACCINE-1019x573.jpg",
            "publishedAt": "2022-11-27T08:29:00Z",
            "content": "Next Article\r\nChina COVID-19 restrictions: Anti-lockdown protests intensify as cases hit record high"
        },
        {
            "source": {
                "id": null,
                "name": "Dnpindia.in"
            },
            "author": "Rafia Tasleem",
            "title": "PCOS: 5 strategies for managing mood swings during Polycystic ovary syndrome - DNP INDIA ",
            "description": "PCOS: Polycystic ovary syndrome may have mood swings that appear more frequent, dramatic, and disruptive to the daily lives.",
            "url": "https://www.dnpindia.in/current-affairs/helth/pcos-5-strategies-for-managing-mood-swings-during-polycystic-ovary-syndrome/133239/",
            "urlToImage": "https://www.dnpindia.in/wp-content/uploads/2022/11/PCOS.webp",
            "publishedAt": "2022-11-27T08:25:18Z",
            "content": "PCOS: Women who have Polycystic ovary syndrome (PCOS) frequently describe symptoms of anxiety, despair, and mood swings. Mood swings, which are brought on by hormone imbalance, can feel like rapidly … [+4277 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "https://www.india.com/author/lifestylestaff/",
            "title": "Diet Tips For Bride-To-Be: 8 Easy-to-Follow Diet Tips to Look And Feel Best on Their D-Day - India.com",
            "description": "Diet Tips For Bride-To-Be-8 Easy-to-Follow Diet Tips to Look And Feel Best on Their D-Day",
            "url": "https://www.india.com/lifestyle/diet-tips-for-bride-to-be-8-easy-diet-weight-loss-tips-look-feel-best-wedding-day-glowing-skin-secret-hacks-5767694/",
            "urlToImage": "https://www.india.com/wp-content/uploads/2022/11/Diet-tips-for-bride-to-be.jpeg",
            "publishedAt": "2022-11-27T08:19:00Z",
            "content": "Diet Tips For Bride-To-Be: Preparing for your big day? Clear skin, energy, and a healthy body are a few key traits ladies look for before the wedding. Use these helpful tips!\r\nDiet Tips For Bride-To-… [+2449 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Asianetnews.com"
            },
            "author": "Richa Barua",
            "title": "What is premature birth? Do some women have a higher risk of giving birth prematurely? - Asianet Newsable ",
            "description": "We spoke to Dr. Sangeeta Gomes, Consultant - Obstetrician & Gynaecologist, Motherhood Hospitals, Sarjapur, Bangalore, who to take care of premature infants and how to handle prematurity-related issues",
            "url": "https://newsable.asianetnews.com/lifestyle/what-is-premature-birth-do-some-women-have-a-higher-risk-of-giving-birth-prematurely-rba-rlzz3g",
            "urlToImage": "https://static-ai.asianetnews.com/images/01gjw2jnr1ngxz3801vqjc6ts9/whatsapp-image-2022-11-27-at-1-30-27-pm_1200x630xt.jpg",
            "publishedAt": "2022-11-27T08:18:53Z",
            "content": "We spoke to Dr. Sangeeta Gomes, Consultant - Obstetrician &amp; Gynaecologist, Motherhood Hospitals, Sarjapur, Bangalore, who to take care of premature infants and how to handle prematurity-related i… [+3106 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Free Press Journal"
            },
            "author": "Rajshree Vora",
            "title": "How Moxa Therapy can help those suffering from fibromyalgia - Free Press Journal",
            "description": "",
            "url": "https://www.freepressjournal.in/health/how-moxa-therapy-can-help-those-suffering-from-fibromyalgia",
            "urlToImage": "https://gumlet.assettype.com/freepressjournal/2022-11/7ab61266-cfcc-41d6-9988-7a54cb7e0b16/info_rajshree_nov_26.jpeg?rect=0%2C0%2C3900%2C2048&w=1200&auto=format%2Ccompress&ogImage=true",
            "publishedAt": "2022-11-27T08:04:17Z",
            "content": "Fibromyalgia is a chronic condition that causes widespread musculoskeletal pain, constant tiredness, poor sleep quality, trouble with focus and memory, and mood swings. It also puts individuals at ri… [+2038 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Asianetnews.com"
            },
            "author": "Team Newsable",
            "title": "How to reach out to people feeling suicidal: Know these points - Asianet Newsable ",
            "description": "There could be many among our friends, in the neighbourhood, or in the circle of our acquaintances who nurture the tendency to commit suicide. How do we reach out to them and pull them back to life? How do we take care of them?",
            "url": "https://newsable.asianetnews.com/lifestyle/how-to-reach-out-to-people-feeling-suicidal-know-these-points-rlzy8s",
            "urlToImage": "https://static-ai.asianetnews.com/images/01gjw1f83vp64nxtyc5m0n2205/depression_1200x630xt.jpg",
            "publishedAt": "2022-11-27T08:00:29Z",
            "content": "There could be many among our friends, in the neighbourhood, or in the circle of our acquaintances who nurture the tendency to commit suicide. How do we reach out to them and pull them back to life? … [+2762 chars]"
        }
    ]
}
const Science={
    "status": "ok",
    "totalResults": 64,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVE - CNN-News18",
            "description": "SpaceX Launch LIVE | SpaceX LIVE | SpaceX's New Cargo Dragon Spacecraft | English News LIVEThe Dragon is carrying four cubesats for NASA’s Cubesat Launch Ini...",
            "url": "https://www.youtube.com/watch?v=jP3BAMr2tAk",
            "urlToImage": "https://i.ytimg.com/vi/jP3BAMr2tAk/maxresdefault_live.jpg",
            "publishedAt": "2022-11-27T12:07:58Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": null,
            "title": "NASA's Artemis 1, Over 400,000 Kms From Earth, Sets A New Record - NDTV",
            "description": "NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 401,798 kilometres from Earth.",
            "url": "https://www.ndtv.com/world-news/nasas-artemis-1-over-400-000-kms-from-earth-sets-a-new-record-3557577",
            "urlToImage": "https://c.ndtvimg.com/2022-11/81tn5nac_artemis-orion_625x300_27_November_22.jpg",
            "publishedAt": "2022-11-27T11:29:02Z",
            "content": "New Delhi: NASA's Artemis 1 Orion has set a new record for the spacecraft designed to carry humans to deep space by travelling 419,378 kilometres from Earth. The record was previously set during the … [+2171 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "140-foot asteroid rushing towards close approach to Earth at blazing speed of 51875 kmph - HT Tech",
            "description": "NASA confirmed that a 140-foot asteroid is on its way to Earth at a massive speed of 51875 kmph.",
            "url": "https://tech.hindustantimes.com/tech/news/140foot-asteroid-rushing-towards-close-approach-to-earth-at-blazing-speed-of-51875-kmph-71669537458364.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/27/1600x900/asteroid-4369511_1920_1669537616654_1669537634123_1669537634123.jpg",
            "publishedAt": "2022-11-27T08:27:53Z",
            "content": "Earth may face a bit of danger from this upcoming asteroid hurtling towards Earth at terrifying speed! A huge \"potentially hazardous\" asteroid zoomed by yesterday after it made its closest approach t… [+2081 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Thehansindia.com"
            },
            "author": "Susmita Modak",
            "title": "Man Keeps Rock For Years In The Hopes Of Finding Gold But Instead Finds Something More Valuable - The Hans India",
            "description": "Since Maryborough is located in the Goldfields region, where the Australian gold rush peaked in the...",
            "url": "https://www.thehansindia.com/offbeat/man-keeps-rock-for-years-in-the-hopes-of-finding-gold-but-instead-finds-something-more-valuable-770910",
            "urlToImage": "https://assets.thehansindia.com/h-upload/2022/11/27/1322362-rock.jpg",
            "publishedAt": "2022-11-27T08:00:52Z",
            "content": "David Hole was prospecting in 2015 in the Maryborough Regional Park, which is close to Melbourne, Australia. He used a metal detector to unearth something unusual: a large, reddish rock sitting on so… [+2698 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "It's coral spawning season in the Great Barrier Reef - watch this beautiful natural process unfold - euronews",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAh_3auIISYk",
            "urlToImage": null,
            "publishedAt": "2022-11-27T06:07:34Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "Gulf-times.com"
            },
            "author": "AFP/Bangalore, India",
            "title": "India's budget mini space shuttle blasts off| Gulf Times - Gulf Times",
            "description": "India successfully launched its first mini space shuttle on Monday as New Delhis famously frugal space agency joined the global race to make rockets as...",
            "url": "https://www.gulf-times.com/story/494442/indias-budget-mini-space-shuttle-blasts-off",
            "urlToImage": "https://www.gulf-times.com/uploads/imported_images/Upload/Slider/5201623132624751798892.jpg",
            "publishedAt": "2022-11-27T03:10:00Z",
            "content": "India successfully launched its first mini space shuttle on Monday as New Delhi's famously frugal space agency joined the global race to make rockets as reusable as airplanes.\r\nThe shuttle was report… [+3030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Orissapost.com"
            },
            "author": "Post News Network",
            "title": "Hubble captures unusual galaxy merger in ancient universe - OrissaPOST",
            "description": "Washington: The NASA Hubble Space Telescope has captured an unusual galaxy merger in the ancient universe. The Arp-Madore catalog is a collection of particularly peculiar galaxies spread throughout the southern sky, and includes a collection of subtly interac…",
            "url": "https://www.orissapost.com/hubble-captures-unusual-galaxy-merger-in-ancient-universe/",
            "urlToImage": "https://www.orissapost.com/wp-content/uploads/2022/11/NASA-Hubble-Telescope-galaxy-.jpg",
            "publishedAt": "2022-11-27T02:55:23Z",
            "content": "Washington: The NASA Hubble Space Telescope has captured an unusual galaxy merger in the ancient universe.\r\nThe Arp-Madore catalog is a collection of particularly peculiar galaxies spread throughout … [+1331 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "EastMojo"
            },
            "author": "The Conversation",
            "title": "Why our world might look very different if dinosaurs hadn't gone extinct - EastMojo",
            "description": "Sixty-six million years ago, an asteroid hit the Earth with the force of 10 billion atomic bombs and changed the course of evolution. The skies darkened",
            "url": "http://www.eastmojo.com/world/2022/11/27/why-our-world-might-look-very-different-if-dinosaurs-hadnt-gone-extinct/",
            "urlToImage": "https://i0.wp.com/www.eastmojo.com/wp-content/uploads/2022/11/dinosaur.jpg?fit=1200%2C675&ssl=1",
            "publishedAt": "2022-11-27T02:30:00Z",
            "content": "Sixty-six million years ago, an asteroid hit the Earth with the force of 10 billion atomic bombs and changed the course of evolution. The skies darkened and plants stopped photosynthesising. The plan… [+6839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ThePrint"
            },
            "author": "Mohana Basu",
            "title": "New Jezero Crater finds bear evidence of organic compounds, interaction of rocks & water on Mars - ThePrint",
            "description": "ScientiFix, our weekly feature, offers you a summary of the top global science stories of the week, with links to their sources.",
            "url": "https://theprint.in/scientifix/new-jezero-crater-finds-bear-evidence-of-organic-compounds-interaction-of-rocks-water-on-mars/1236618/",
            "urlToImage": "https://static.theprint.in/wp-content/uploads/2022/11/mars.jpg",
            "publishedAt": "2022-11-27T02:00:59Z",
            "content": "New Delhi: Scientists from NASA have found multiple rocks at the bottom of the Jezero Crater on Mars which show evidence of organic compounds, along with significant interaction between rocks and wat… [+4996 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ScienceAlert"
            },
            "author": "Michelle Starr",
            "title": "We Just Got The Most Detailed View of an Exoplanet Atmosphere Yet - And It's Active - ScienceAlert",
            "description": "WASP-39b, a gas giant about 700 light-years away, is turning out to be quite the exoplanetary treasure.",
            "url": "https://www.sciencealert.com/we-just-got-the-most-detailed-view-of-an-exoplanet-atmosphere-yet-and-its-active",
            "urlToImage": "https://www.sciencealert.com/images/2022/11/wasp-38b-illustration.jpg",
            "publishedAt": "2022-11-26T23:00:40Z",
            "content": "WASP-39b, a gas giant about 700 light-years away, is turning out to be quite the exoplanetary treasure.\r\nEarlier this year, WASP-39b was the subject of the first-ever detection of carbon dioxide in t… [+4869 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Ancient Origins"
            },
            "author": "Nathan Falde",
            "title": "What Could Go Wrong?! 48500-Year-Old Siberian Virus is Revived - Ancient Origins",
            "description": "The world’s oldest known frozen and dormant virus has been revived in a French laboratory leading many to express concerns about the dangers of bringing to life ancient microbes.",
            "url": "https://www.ancient-origins.net/news-science-space/siberian-virus-0017581",
            "urlToImage": "https://www.ancient-origins.net/sites/default/files/field/image/Siberian-virus.jpg",
            "publishedAt": "2022-11-26T22:02:00Z",
            "content": "The worlds oldest known frozen and dormant virus has been revived in a French laboratory leading many to express concerns about the dangers of bringing to life ancient microbes. The virus was removed… [+7839 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "MIT Finds Indoor Humidity “Sweet Spot” To Reduce Spread of COVID-19 - SciTechDaily",
            "description": "New research links very dry and very humid indoor environments with worse COVID-19 outcomes. We know proper indoor ventilation is key to reducing the spread of COVID-19. Now, a study by MIT researchers finds that indoor relative humidity may also influence th…",
            "url": "https://scitechdaily.com/mit-finds-indoor-humidity-sweet-spot-to-reduce-spread-of-covid-19/",
            "urlToImage": "https://scitechdaily.com/images/Humidifier.jpg",
            "publishedAt": "2022-11-26T21:06:25Z",
            "content": "ByJennifer Chu, Massachusetts Institute of TechnologyNovember 26, 2022\r\nAn MIT study shows that keeping indoor humidity at a sweet spot may reduce the spread of COVID-19.\r\nNew research links very dry… [+9051 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Inverse"
            },
            "author": "Andy Tomaswick, Universe Today",
            "title": "A cutting-edge radar system could be a front-line tool to fight dangerous space junk - Inverse",
            "description": "Enter a new idea from researchers in Iran – using a novel type of radar to detect and track space debris before it becomes a danger",
            "url": "https://www.inverse.com/science/new-space-junk-solutions",
            "urlToImage": "https://imgix.bustle.com/uploads/getty/2022/11/23/83eae047-00ad-4641-a0b8-f1c8a17bf23d-getty-1310271513.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg",
            "publishedAt": "2022-11-26T21:00:25Z",
            "content": "Space debris\r\n is becoming more and more of a real problem. Were not quite at Kessler syndrome levels yet, but with the increased interest in getting things into space, there is a real possibility th… [+3411 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bollyinside.com"
            },
            "author": "Lisa Jennings",
            "title": "A million times brighter than our sun are the stars - BollyInside",
            "description": "When NASA launched the James Webb Telescope, astronomers hoped its infrared and high-resolution capabilities would capture parts of the universe too far",
            "url": "https://www.bollyinside.com/news/a-million-times-brighter-than-our-sun-are-the-stars",
            "urlToImage": "https://cdn-photos.itemsb.com/wp-content/uploads/2022/11/Web-capture_26-11-2022_21451_www.bing_.com_.jpeg",
            "publishedAt": "2022-11-26T20:35:26Z",
            "content": "When NASA launched the James Webb Telescope, astronomers hoped its infrared and high-resolution capabilities would capture parts of the universe too far for its predecessor, the Hubble Telescope. you… [+3112 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bollyinside.com"
            },
            "author": "Lisa Jennings",
            "title": "Astronauts say Thanksgiving in space is a thing of the future - BollyInside",
            "description": "NASA astronauts are now in space living so far into the future that they celebrated American Thanksgiving on Tuesday, November 22, they joked in a video.",
            "url": "https://www.bollyinside.com/news/astronauts-say-thanksgiving-in-space-is-a-thing-of-the-future",
            "urlToImage": "https://cdn-photos.itemsb.com/wp-content/uploads/2022/11/Web-capture_26-11-2022_21428_www.bing_.com_.jpeg",
            "publishedAt": "2022-11-26T20:05:23Z",
            "content": "NASA astronauts are now in space living so far into the future that they celebrated American Thanksgiving on Tuesday, November 22, they joked in a video.\r\nJokes aside, the crew on the US side of the … [+2227 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Bollyinside.com"
            },
            "author": "Lisa Jennings",
            "title": "NASA and ESA reveal a story of death and dust in the Orion constellation - BollyInside",
            "description": "In a story of cosmic proportions, this region is transformed by massive stars that live and die there. A new image that combines previously published data",
            "url": "https://www.bollyinside.com/news/nasa-and-esa-reveal-a-story-of-death-and-dust-in-the-orion-constellation",
            "urlToImage": "https://cdn-photos.itemsb.com/wp-content/uploads/2022/11/Web-capture_26-11-2022_221212_www.bing_.com_.jpeg",
            "publishedAt": "2022-11-26T19:35:26Z",
            "content": "In a story of cosmic proportions, this region is transformed by massive stars that live and die there.\r\nA new image that combines previously published data from three telescopes reveals an area that … [+2841 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Weather Channel"
            },
            "author": "The Weather Channel",
            "title": "Mars Ingenuity Helicopter Makes 18-Second Successful Flight | Weather.com - The Weather Channel",
            "description": "Ingenuity's 34th flight, which took place on Tuesday (Nov. 22), hovered for 18 seconds after takeoff above Mars' surface before landing just 16 feet (5 meters) away from its starting point.",
            "url": "https://weather.com/en-IN/india/space/news/2022-11-26-mars-ingenuity-helicopter-makes-18-second-successful-flight",
            "urlToImage": "https://s.w-x.co/6b04bb6b2de220d784cab0cfd710f06d.jpg",
            "publishedAt": "2022-11-26T19:06:08Z",
            "content": "NASA engineers have taken its Mars Ingenuity helicopter on a short but important 18-second successful flight to test new capabilities.\r\nThe operations team has been working on the new capabilities ov… [+1485 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ThePrint"
            },
            "author": "ANI",
            "title": "Octopus and human brains have surprising similarity and here is why - ThePrint",
            "description": "Berlin [Germany], November 26 (ANI): Evolutionary history over time has shown that while vertebrates, ie, those animals with backbones developed large and complex brains, invertebrates lacked them. However, one exception did exist in the latter: the cephalopo…",
            "url": "https://theprint.in/science/octopus-and-human-brains-have-surprising-similarity-and-here-is-why/1237659/",
            "urlToImage": null,
            "publishedAt": "2022-11-26T18:14:31Z",
            "content": "Berlin [Germany], November 26 (ANI): Evolutionary history over time has shown that while vertebrates, ie, those animals with backbones developed large and complex brains, invertebrates lacked them. H… [+5729 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Digital Trends"
            },
            "author": "Georgina Torbet",
            "title": "Strangely chonky exoplanet has astronomers puzzled - Digital Trends",
            "description": "Astronomers recently discovered a hefty exoplanet orbiting a star similar to our sun, and it has researchers puzzled due to its tremendous density.",
            "url": "https://www.digitaltrends.com/space/strengely-dense-exoplanet/",
            "urlToImage": "https://www.digitaltrends.com/wp-content/uploads/2022/11/original-16690406031.webp?p=1",
            "publishedAt": "2022-11-26T17:37:13Z",
            "content": "Astronomers recently discovered a hefty exoplanet orbiting a star similar to our sun. At just 15 million years old, this chunky planet is a baby by galactic standards, old, but it has researchers puz… [+2317 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "World Atlas"
            },
            "author": "Aidan Remple",
            "title": "Was Venus More Earth-Like In The Past? - Worldatlas.com",
            "description": "Venus and Earth are significant different today, yet Venus was likely a habitable world billions of years ago, with its own oceans and stable atmosphere.",
            "url": "https://www.worldatlas.com/space/was-venus-more-earth-like-in-the-past.html",
            "urlToImage": "https://www.worldatlas.com/r/w1200-q80/upload/df/71/8a/0f27fcec-7e8f-4b66-8e4b-c0b2d3e77b21.jpeg",
            "publishedAt": "2022-11-26T17:07:09Z",
            "content": "Venus is the closest planet to the Earth, located at an average distance of 67-million miles (108-million kilometres). It is also the most similar planet to the Earth in terms of size and mass, being… [+4289 chars]"
        }
    ]
}
const Sports={
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights: Keysher Fuller Strikes As Costa Rica Beat Japan To Blow Group E Wide Open - NDTV Sports",
            "description": "FIFA World Cup 2022, Japan vs Costa Rica Highlights: Keysher Fuller scored a goal for Costa Rica in the 81st minute of the game against Japan and that proved to be the difference between the two sides.",
            "url": "https://sports.ndtv.com/fifa-world-cup-2022/fifa-world-cup-2022-japan-vs-costa-rica-football-live-score-updates-3557244",
            "urlToImage": "https://c.ndtvimg.com/2022-11/hm0guil8_keysher-fuller-afp_625x300_27_November_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-11-27T12:21:30Z",
            "content": "Japan vs Costa Rica, FIFA World Cup 2022 Highlights:Costa Rica defeated Japan 1-0 in a Group E match of FIFA World Cup 2022 at Ahmed bin Ali Stadium, Al Rayyan on Sunday. Keysher Fuller Spence scored… [+727 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Insidesport.in"
            },
            "author": null,
            "title": "BCCI NEW Selection Committee: BCCI receives 80 applications before Nov 28 DEADLINE, Sivaramakrishnan out of reckoning, Follow LIVE - InsideSport",
            "description": "BCCI NEW Selection Committee, Chetan Sharma, Laxman Sivaramakrishnan, BCCI Selection Committee, Indian Cricket Live, BCCI Selectors, India Selection Committee",
            "url": "https://www.insidesport.in/bcci-new-selection-committee-bcci-receives-80-applications-before-nov-28-deadline-laxman-sivaramakrishnan-out-of-reckoning-follow-live-updates/",
            "urlToImage": "https://www.insidesport.in/wp-content/uploads/2022/10/bcci-1666113907.jpg?w=809",
            "publishedAt": "2022-11-27T11:23:19Z",
            "content": "BCCI NEW Selection Committee: With November 28 deadline approaching, BCCI has already received over 80 applications for five selectors. However, one of the…BCCI NEW Selection Committee: With November… [+4010 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "NDTV Sports Desk",
            "title": "Watch: Video Of MS Dhoni Dancing With Hardik Pandya, Badshah Goes Viral - NDTV Sports",
            "description": "Former India captain MS Dhoni was spotted partying with Hardik Panda in a club. Even famous rapper Badshah was shaking his legs with the duo in the viral video.",
            "url": "https://sports.ndtv.com/cricket/watch-video-of-ms-dhoni-dancing-with-hardik-pandya-badshah-goes-viral-3557556",
            "urlToImage": "https://c.ndtvimg.com/2022-11/saqr3n88_ms-dhoni-and-hardik-pandya_625x300_27_November_22.jpg?im=FitAndFill,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-11-27T10:56:56Z",
            "content": "Having successfully led the Indian team to a T20I series triumph over New Zealand, Hardik Pandya had a gala time with former India captain MS Dhoni and famous rapper Badshah. In a video that has surf… [+1528 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "Sri Lanka vs Afghanistan, 2nd ODI, Afghanistan tour of Sri Lanka, 2022 - Cricbuzz",
            "description": "Follow Sri Lanka vs Afghanistan, 2nd ODI, Nov 27, Afghanistan tour of Sri Lanka, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/live-cricket-scores/56943/sl-vs-afg-2nd-odi-afghanistan-tour-of-sri-lanka-2022",
            "urlToImage": null,
            "publishedAt": "2022-11-27T09:02:19Z",
            "content": "18:06 Local Time, 12:36 GMT, 18:06 IST: Afghanistan fail to bat out their quota of 50 overs. Rajitha bowled a tight spell with the new ball but it was Lahiru Kumara who provided the breakthrough the … [+3103 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": "ESPNcricinfo staff",
            "title": "UAE to host Afghanistan's home games for next five years - ESPNcricinfo",
            "description": "Afghanistan to play UAE in three-match T20I series once a year for the duration of the deal",
            "url": "https://www.espncricinfo.com/story/afghanistan-cricket-uae-to-host-afghanistan-home-games-for-next-five-years-1346656",
            "urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/315500/315533.6.jpg",
            "publishedAt": "2022-11-27T08:37:19Z",
            "content": "The Abu Dhabi stadium will likely host Afghanistan over several games in the coming year(s)  •  Abu Dhabi Cricket"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Gambhir reacts to Ramiz Raja's 'PAK won't go to India for 2023 WC if...' remark - Hindustan Times",
            "description": "After Sports minister Anurag Thakur, former India cricketer Gautam Gambhir has reacted on Ramiz's fiery statement. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/whatever-decision-they-take-gautam-gambhir-reacts-to-ramiz-raja-s-fiery-pakistan-won-t-go-to-india-for-2023-world-cup-if-remark-101669478132057.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/26/1600x900/New_Project_-_2022-11-26T213103233_1669478593133_1669478593297_1669478593297.jpg",
            "publishedAt": "2022-11-27T08:02:12Z",
            "content": "PCB chief Ramiz Raja's explosive statement clarifying Pakistan's stance over ODI World Cup 2023, scheduled to be played in India, has created quite a stir in world cricket. A month after BCCI secreta… [+1918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "India captain Dhawan reveals why Samson was dropped for 2nd ODI vs New Zealand - Hindustan Times",
            "description": "At the end of the second game, which was abandoned due to rain after just 12.5 overs of play, Dhawan revealed the reason behind dropping Samson. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/india-captain-shikhar-dhawan-reveals-why-sanju-samson-was-dropped-for-2nd-odi-vs-new-zealand-101669533949064.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/samson_dhawan_1669534120973_1669534125493_1669534125493.jpg",
            "publishedAt": "2022-11-27T07:40:36Z",
            "content": "Despite a decent knock in the opening match of the ODI series on Friday in Auckland, Sanju Samson was dropped from the playing XI for the second game. The decision left fans on Twitter fuming at capt… [+1575 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "International Cricket Council"
            },
            "author": "ICC",
            "title": "Second ODI abandoned but New Zealand rise in Super League standings - ICC Cricket",
            "description": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.",
            "url": "https://www.icc-cricket.com/news/2918453",
            "urlToImage": "https://resources.pulse.icc-cricket.com/ICC/photo/2022/11/27/c8f78d72-fd66-42a8-a65a-3356762229be/GettyImages-1444875376.jpg",
            "publishedAt": "2022-11-27T07:25:53Z",
            "content": "Rain played spoilsport as the second ODI between New Zealand and India was called off after a lengthy delay. However, the hosts gained crucial Super League points to rise to No.3 on the table.Watch t… [+1546 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Faras Ghani",
            "title": "Who is the biggest footballer of them all? Has to be Messi - Al Jazeera English",
            "description": "He turned up, he led, he scored. And Argentina survived and stayed in the World Cup.",
            "url": "https://www.aljazeera.com/sports/2022/11/27/who-is-the-biggest-footballer-of-them-all-has-to-be-messi",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/11/2022-11-26T203320Z_1203444761_UP1EIBQ1L3IVO_RTRMADP_3_SOCCER-WORLDCUP-ARG-MEX-REPORT.jpg?resize=1920%2C1440",
            "publishedAt": "2022-11-27T06:23:24Z",
            "content": "Doha, Qatar It wasnt the way Lionel Messi scored but the way he seized the moment and made it his own in front of 88,000 people.\r\nLusail Stadium needs to be a no-fly zone when Argentina play there wi… [+4156 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Kevin Dotson, Tara Subramaniam",
            "title": "West Indies cricket great David Murray dead at 72 - CNN",
            "description": "David Murray, a wicketkeeper for the West Indies cricket team in the 1970s and 1980s, has died at age 72, Cricket West Indies said on Saturday.",
            "url": "https://www.cnn.com/2022/11/26/americas/west-indies-cricket-david-murray-dead-intl-hnk/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221126220806-01-david-murray-0283.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-27T04:00:00Z",
            "content": "David Murray, a wicketkeeper for the West Indies cricket team in the 1970s and 1980s, has died at age 72, Cricket West Indies said on Saturday.\r\nMaking his international debut in 1973, the Barbadian … [+2097 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India Today"
            },
            "author": "India Today Web Desk",
            "title": "Resign from FIFA, disgrace to football: Iran coach furious with Jurgen Klinsmann over 'culture comments' - India Today",
            "description": "FIFA World Cup 2022: Iran coach Carlos Queiroz slammed former Germany footballer Jurgen Klinsmann over his comments for the BCC about the Iran team and their culture. Klinsmann alleged gamesmanship from Iran in their 2-0 win over Wales in a Group B match.",
            "url": "https://www.indiatoday.in/sports/fifa-world-cup-2022/story/iran-coach-carlos-queiroz-jurgen-klinsmann-bbc-comments-resign-fifa-2302209-2022-11-27",
            "urlToImage": "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202211/carlosqueiroziranfifa-sixteen_nine.jpg?VersionId=u3RYTmnEgCa.UCcGugFY0KXE1FGivx84",
            "publishedAt": "2022-11-27T03:35:47Z",
            "content": "By India Today Web Desk: Iran football team coach Carlos Queiroz has slammed former Germany footballer Jurgen Klinsmann over his comments about Iran and their \"culture\" during a television show after… [+3410 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "Germany stood up for what matters; now to regain that winning mentality to once again stand tall - The Indian Express",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMimgFodHRwczovL2luZGlhbmV4cHJlc3MuY29tL2FydGljbGUvc3BvcnRzL2Zvb3RiYWxsL2dlcm1hbnktc3Rvb2QtdXAtZm9yLXdoYXQtbWF0dGVycy1ub3ctdG8tcmVnYWluLXRoYXQtd2lubmluZy1tZW50YWxpdHktdG8tb25jZS1hZ2Fpbi1zdGFuZC10YWxsLTgyOTIwMDUv0gEA?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T03:29:35Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "Watch: Messi's thunderous goal that helped Argentina stay alive in World Cup - Hindustan Times",
            "description": "Messi kept their hopes alive with a thunderous goal in the second half as Argentina beat Mexico 2-0 to jump to the second spot in the table. | Football News",
            "url": "https://www.hindustantimes.com/sports/football/watch-lionel-messi-levels-maradona-s-incredible-record-with-thunderous-goal-that-helped-argentina-stay-alive-in-fifa-world-cup-mexico-101669517957795.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/1600x900/New_Project_-_2022-11-27T082724418_1669517954920_1669517955062_1669517955062.jpg",
            "publishedAt": "2022-11-27T03:16:34Z",
            "content": "Argentina needed Lionel Messi more than ever on Saturday night in Mexico. The two-time FIFA World Cup champions headed into the crucial group-stage fixture against Mexico with the possibility that it… [+1517 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NDTV News"
            },
            "author": "Asian News International",
            "title": "\"Every Time Indian Cricket Does Not Do Well, The Blame...\": Gautam Gambhir - NDTV Sports",
            "description": "Gautam Gambhir, who led Kolkata Knight Riders as captain to two Indian Premier League trophies, went on to speak on how the introduction of IPL has transformed the state of cricket in the country, over the years.",
            "url": "https://sports.ndtv.com/cricket/ipl-is-best-thing-that-has-happen-to-indian-cricket-gautam-gambhir-3556006",
            "urlToImage": "https://c.ndtvimg.com/2022-10/a75vd06o_gautam-gambhir_640x480_27_October_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
            "publishedAt": "2022-11-27T02:52:04Z",
            "content": "Former Indian cricketer Gautam Gambhir was felicitated by Sanjog Gupta, Chairperson, Sports &amp; Youth Affairs Committee, FICCI and Head - Sports, presented with a token of appreciation. The former … [+3260 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "News18"
            },
            "author": "Aman Sharma",
            "title": "Olympic Dreams, India’s Answer to MCG, Boundary View from Each Seat: How Narendra Modi Stadium Sizes Up - News18",
            "description": "In its election manifesto for the Gujarat assembly polls, the BJP has made a pitch to launch the ‘Gujarat Olympics Mission’ and create world-class sports infrastructure with an aim to host the Games in 2036",
            "url": "https://www.news18.com/news/elections/olympic-dreams-indias-answer-to-mcg-boundary-view-from-each-seat-how-the-narendra-modi-stadium-sizes-up-6480133.html",
            "urlToImage": "https://images.news18.com/ibnlive/uploads/2022/11/untitled-design-2022-11-27t005450.662-166949081616x9.jpg",
            "publishedAt": "2022-11-27T02:30:52Z",
            "content": "Sardar Vallabhbhai Patel Sports Enclave, Narendra Modi Stadium says the board on the main building of the cricket stadium. Inside, a statue of the Iron Man of India greets us.\r\nThis in a good measure… [+3704 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "'Achha hua jo T20WC nahi khela...': Umran's father reacts to son's non-selection - Hindustan Times",
            "description": "Almost a fortnight after India's heartbreaking exit for the tournament, Umran's father broke his silence on his son's non-selection for the World Cup. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/achha-hua-jo-t20-world-cup-nahi-khela-umran-malik-s-father-breaks-silence-on-son-s-nonselection-101669479988291.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/26/1600x900/CRICKET-NZL-IND-58_1669480035323_1669480035323_1669480052795_1669480052795.jpg",
            "publishedAt": "2022-11-27T01:49:03Z",
            "content": "Young Umran Malik impressed cricket legends across the globe with the fiery pace and wicket-taking abilities during the 2022 IPL. He was immediately touted by all to be part of India's T20 World Cup … [+1883 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Sports Desk",
            "title": "‘I’m no one to comment whether Rohit Sharma, Virat Kohli will continue in T20Is' - Hindustan Times",
            "description": "Does he see Virat Kohli and Rohit Sharma continuing playing the shortest format? Harbhajan Singh gave an interesting answer. | Cricket",
            "url": "https://www.hindustantimes.com/cricket/im-no-one-to-comment-whether-rohit-sharma-and-virat-kohli-will-continue-playing-t20is-harbhajan-singh-101669463327567.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/26/1600x900/CRICKET-WC-2022-T20-IND-ENG-34_1669463539728_1669463539728_1669463561865_1669463561865.jpg",
            "publishedAt": "2022-11-27T01:38:24Z",
            "content": "Former India off-spinner Harbhajan Singh feels the Indian team's approach has to change whether the current top three -- Rohit Sharma, K L Rahul and Virat Kohli -- extend their careers till 2024 Worl… [+2086 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Cricbuzz"
            },
            "author": null,
            "title": "New Zealand vs India, 2nd ODI, India tour of New Zealand, 2022 - Cricbuzz",
            "description": "Follow New Zealand vs India, 2nd ODI, Nov 27, India tour of New Zealand, 2022 with live Cricket score, ball by ball commentary updates on Cricbuzz",
            "url": "https://www.cricbuzz.com/cricket-commentary/49514/nz-vs-ind-2nd-odi-india-tour-of-new-zealand-2022",
            "urlToImage": null,
            "publishedAt": "2022-11-27T01:17:59Z",
            "content": "20:03 Local Time, 07:03 GMT, 12:33 IST: That, will be it, then. Game called off. The umpires have had the final word with both the skippers and time now for some handshakes. Both teams see the funny … [+647 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Mirror Online"
            },
            "author": "Jacob Leeks",
            "title": "Cristiano Ronaldo's generous gesture to Portugal teammates on World Cup night out - The Mirror",
            "description": "Much of the focus around Portugal has been Cristiano Ronaldo's exit from Manchester United, but the captain took his teammates out to dinner during a night off from the World Cup",
            "url": "https://www.mirror.co.uk/sport/football/news/cristiano-ronaldo-portugal-world-cup-28593482",
            "urlToImage": "https://i2-prod.mirror.co.uk/incoming/article28593496.ece/ALTERNATES/s1200/0_GettyImages-1443196520.jpg",
            "publishedAt": "2022-11-27T01:00:00Z",
            "content": "Cristiano Ronaldo reportedly took his Portugal team-mates out for dinner after they were given a night off by manager Fernando Santos. \r\n Portugal got their World Cup campaign off to the best possibl… [+2917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN India"
            },
            "author": "ESPN",
            "title": "2022 World Cup: France reach last 16, Argentina bounce back - ESPN India",
            "description": "A loss to Spain will see Germany eliminated in the group stage for a second straight World Cup. Here's the latest and what's ahead at the World Cup.",
            "url": "https://www.espn.in/football/fifa-world-cup/story/4815304/2022-world-cup-france-reach-last-16argentina-bounce-back",
            "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F1126%2Fr1097442_1296x729_16%2D9.jpg",
            "publishedAt": "2022-11-27T00:22:52Z",
            "content": "The Saturday World Cup action saw our first team book their place in the round of 16, while one of the tournament's GOATs returned to winning ways. A Kylian Mbappe brace saw France beat an inspired D… [+11865 chars]"
        }
    ]
}
const Technology={
    "status": "ok",
    "totalResults": 70,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": "HT Tech",
            "title": "Dangerous SharkBot malware found in Google Play apps BANNED; did you download any? - HT Tech",
            "description": "Cyber security experts have detected SharkBot malware in several Google Play Store apps, which have racked up thousands of downloads.",
            "url": "https://tech.hindustantimes.com/tech/news/dangerous-sharkbot-malware-found-in-google-play-apps-banned-did-you-download-any-71669551148313.html",
            "urlToImage": "https://images.hindustantimes.com/tech/img/2022/11/27/1600x900/app-4868817_1920_1669551412975_1669551424469_1669551424469.jpg",
            "publishedAt": "2022-11-27T12:19:58Z",
            "content": "In yet another shocking revelation, Google Play Store, which is supposed to be carrying only secured apps, was found to have many apps with malware in them, infecting those users' gadgets who downloa… [+1938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Amartya",
            "title": "5 upcoming games with realistic-looking graphics - Sportskeeda",
            "description": "Photo-realism and realistic game mechanics have become two of the most important aspects of good graphics in games.",
            "url": "https://www.sportskeeda.com/esports/5-upcoming-games-realistic-looking-graphics",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/e2ea2-16693956257289-1920.jpg",
            "publishedAt": "2022-11-27T12:16:42Z",
            "content": "Photo-realism and realistic game mechanics have become two of the most important aspects of good graphics in games. The increasing demand for better visuals has been reshaping gaming technologies for… [+7912 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pragativadi.com"
            },
            "author": "Pragativadi News Service",
            "title": "Noise Air Buds 2 Launched In India: Check Out Features And Price - Pragativadi",
            "description": "New Delhi: The Noise Air Buds 2 true wireless earphones have been launched in India. Early in the month, Noise released two headphones. True wireless earphones face stiff competition in the inexpensive market from companies like Realme, OnePlus, and",
            "url": "https://pragativadi.com/noise-air-buds-2-launched-in-india-check-out-features-and-price/",
            "urlToImage": "https://pragativadi.com/wp-content/uploads/2022/11/noise.png",
            "publishedAt": "2022-11-27T12:02:46Z",
            "content": "New Delhi: The Noise Air Buds 2 true wireless earphones have been launched in India. Early in the month, Noise released two headphones. True wireless earphones face stiff competition in the inexpensi… [+1288 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Aero road bike helmets: 6 of the BEST in 2022 - road.cc",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DPzsjTNC7xwE",
            "urlToImage": null,
            "publishedAt": "2022-11-27T12:00:26Z",
            "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "David Phelan",
            "title": "Apple iPhone 15 To Boast Amazing Upgrade, New Leak Says - Forbes",
            "description": "A new report claims that a radically different look is coming to the iPhone 15 next fall.",
            "url": "https://www.forbes.com/sites/davidphelan/2022/11/27/apple-iphone-15-to-boast-amazing-update-new-leak-says/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/638242133e7ef726b64597ac/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2022-11-27T12:00:00Z",
            "content": "Apple iPhone 14 Pro. Will the iPhone 15 series have a new technology behind those two volume ... [+] buttons?\r\nDavid Phelan\r\nHow would you like an iPhone with no physical buttons? A new report claims… [+2998 chars]"
        },
        {
            "source": {
                "id": "google-news",
                "name": "Google News"
            },
            "author": null,
            "title": "WhatsApp brings ‘contact card’ for Windows - BusinessLine",
            "description": null,
            "url": "https://news.google.com/__i/rss/rd/articles/CBMia2h0dHBzOi8vd3d3LnRoZWhpbmR1YnVzaW5lc3NsaW5lLmNvbS9pbmZvLXRlY2gvd2hhdHNhcHAtYnJpbmdzLWNvbnRhY3QtY2FyZC1mb3Itd2luZG93cy9hcnRpY2xlNjYxOTEzMjcuZWNl0gFwaHR0cHM6Ly93d3cudGhlaGluZHVidXNpbmVzc2xpbmUuY29tL2luZm8tdGVjaC93aGF0c2FwcC1icmluZ3MtY29udGFjdC1jYXJkLWZvci13aW5kb3dzL2FydGljbGU2NjE5MTMyNy5lY2UvYW1wLw?oc=5",
            "urlToImage": null,
            "publishedAt": "2022-11-27T11:50:01Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Amazon Fab Phones fest: Deals on affordable smartphones under ₹15,000 | Mint - Mint",
            "description": "Amazon sale will end on November 29. It offers discounts on a range of handsets from Samsung, Realme, Redmi, and other brands.",
            "url": "https://www.livemint.com/technology/gadgets/amazon-fab-phones-fest-deals-on-affordable-smartphones-under-rs-15000-11669548518436.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/affordablephones_1669548545010_1669548545265_1669548545265.jpg",
            "publishedAt": "2022-11-27T11:31:52Z",
            "content": "Amazon Fab Phones fest started on November 26. The smartphone sale offers discounts on a range of handsets from Samsung, Realme, Redmi, and other brands. The sale will continue till November 29 . Her… [+1914 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Forbes"
            },
            "author": "David Phelan",
            "title": "Nothing Phone (1) Just Launched Cool Apple AirPods Upgrade - Forbes",
            "description": "A new Android phone has a unique extra feature that works with your AirPods.",
            "url": "https://www.forbes.com/sites/davidphelan/2022/11/27/nothing-phone-1-just-launched-cool-apple-airpods-upgrade/",
            "urlToImage": "https://imageio.forbes.com/specials-images/imageserve/638341facffbb9c1d10b4382/0x0.jpg?format=jpg&width=1200",
            "publishedAt": "2022-11-27T11:00:04Z",
            "content": "Nothing Phone (1).\r\nDavid Phelan\r\nTheres a new phone brand, but perhaps it means nothing to you. Thats all right, thats its name. Nothing is the brainchild of Carl Pei, previously known for OnePlus. … [+1694 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Zee Media Bureau",
            "title": "OnePlus 11 smartphone colour options revealed for India; Details inside - Zee News",
            "description": "OnePlus is all set to launch the OnePlus 11 in the coming year. In the first half of 2023, the OnePlus 11 is anticipated to go on sale. The smartphones anticipated features and specifications have been making the rounds on the internet ahead of its debut.",
            "url": "https://zeenews.india.com/technology/oneplus-11-come-with-these-colour-options-in-india-details-inside-2540790.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/11/27/1122539-untitled-design-2022-11-27t161540.398.jpg",
            "publishedAt": "2022-11-27T10:47:39Z",
            "content": "New Delhi: OnePlus is all set to launch the OnePlus 11 in the coming year. In the first half of 2023, the OnePlus 11 is anticipated to go on sale. The smartphone's anticipated features and specificat… [+1895 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "iCloud on Windows showing random photos and videos from other users: Report | Mint - Mint",
            "description": "Many users have complained about the problem in the MacRumours forum. At present, it is limited to iCloud on Windows only. It is not sure yet whether the problem is for Apple or Microsoft to fix.",
            "url": "https://www.livemint.com/technology/tech-news/icloud-on-windows-showing-random-photos-and-videos-from-other-users-report-11669545470146.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/iphone_1669545580717_1669545581007_1669545581007.jpg",
            "publishedAt": "2022-11-27T10:40:12Z",
            "content": "Are you seeing photos and videos from other users when using iCloud on Windows? If yes, then you are not alone. Many Apple iPhone users have complained about seeing photos and videos that do not belo… [+116 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Google brings updates to Workspace: Details on new features - Mint",
            "description": "The technology giant says that it will use users’ Gmail search activity to enhance results when they access the email service via the web. The development to Gmail search would improve the results and make them more contextual along with better relevancy, say…",
            "url": "https://www.livemint.com/technology/tech-news/google-brings-updates-to-workspace-details-on-new-features-11669544054769.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/1206aa74-6727-11ed-ae07-9ae8fb027558_1669105067256_1669105067256_1669545344717_1669545344717.jpg",
            "publishedAt": "2022-11-27T10:36:13Z",
            "content": "Google, an American technology company, has announced that it brings new updates for Workspace which includes enhanced search results in Gmail, customisable pivot tables in Sheets and more. Interesti… [+2124 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Pragativadi.com"
            },
            "author": "Pragativadi News Service",
            "title": "Realme 10 Pro Series India Launch Date Set For December 8: All Details Here - Pragativadi",
            "description": "New Delhi: Realme 10 Pro+ 5g and Realme 10 Pro 5G are all set to launch in India on December 8. The Realme 10 Pro series, which made its debut in China this month, will go on sale in India via Flipkart. The online marketplace claims that the Realme 1",
            "url": "https://pragativadi.com/realme-10-pro-series-india-launch-date-set-for-december-8-all-details-here/",
            "urlToImage": "https://pragativadi.com/wp-content/uploads/2022/11/realmmmm.png",
            "publishedAt": "2022-11-27T10:28:03Z",
            "content": "New Delhi: Realme 10 Pro+ 5g and Realme 10 Pro 5G are all set to launch in India on December 8. The Realme 10 Pro series, which made its debut in China this month, will go on sale in India via Flipka… [+1301 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "India.com"
            },
            "author": "Zee Media Bureau",
            "title": "Lava Blaze NXT with 13MP camera, MediaTek Helio G37 goes on sale on Amazon; Check price, specs, other detai... - Zee News",
            "description": "Lava Blaze NXT, another affordable smartphone by the homegrown smartphone maker Lava Mobiles, is now available for sale on Amazon, and shows a listing on the e-commerce portal. However, what is surprising is that Lava Blaze NXT is priced a bit higher compared…",
            "url": "https://zeenews.india.com/technology/lava-blaze-nxt-with-13mp-camera-mediatek-helio-g37-goes-on-sale-on-amazon-check-price-specs-other-details-2540776.html",
            "urlToImage": "https://english.cdn.zeenews.com/sites/default/files/2022/11/27/1122527-lava-blaze-nxt-new2.jpg",
            "publishedAt": "2022-11-27T10:22:00Z",
            "content": "Lava Blaze NXT Mobile: Lava Blaze NXT, another affordable smartphone by the homegrown smartphone maker Lava Mobiles, is now available for sale on Amazon, and shows a listing on the e-commerce portal.… [+1334 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Ashim",
            "title": "5 best Free Fire characters in OB37 version - Sportskeeda",
            "description": "Free Fire is a well-known mobile battle royale shooter with several unique features that make it even more exciting.",
            "url": "https://www.sportskeeda.com/free-fire/5-best-free-fire-characters-ob37-version",
            "urlToImage": "https://staticc.sportskeeda.com/editor/2022/11/758f9-16695425402214-1920.jpg",
            "publishedAt": "2022-11-27T10:12:06Z",
            "content": "Free Fire is a well-known mobile battle royale shooter with several unique features that make it even more exciting. The in-game character abilities are among the aforementioned special features of t… [+3599 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Livemint"
            },
            "author": "Livemint",
            "title": "Android Auto receives dark mode and new design update | Mint - Mint",
            "description": "this latest update in Android Auto is a part of the latest Android Auto 7.5 update and it will roll out to all users gradually. This means that the update will roll out for all users soon, suggests the report. In terms of changes, the Android Auto settings pa…",
            "url": "https://www.livemint.com/technology/tech-news/android-auto-receives-dark-mode-and-new-design-update-11669541026969.html",
            "urlToImage": "https://images.livemint.com/img/2022/11/27/600x338/key_img11_1637844730035_1669541128826_1669541128826.jpg",
            "publishedAt": "2022-11-27T09:26:38Z",
            "content": "Android Auto will soon get its significant in-car IP redesign update, as per a report. It is believed that the company updated the design of the Android Auto settings page on mobile handsets. Recentl… [+2223 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "GSMArena.com"
            },
            "author": "Peter",
            "title": "Weekly poll: the vivo X90 series temps with cutting edge chipsets and cameras, are you interested? - GSMArena.com news - GSMArena.com",
            "description": "The first SD 8 Gen 2 and Dimensity 9200 phones are here.",
            "url": "https://www.gsmarena.com/weekly_poll_the_vivo_x90_series_temps_with_cutting_edge_chipsets_and_cameras_are_you_interested-news-56635.php",
            "urlToImage": "https://fdn.gsmarena.com/imgroot/news/22/11/weekly-poll-vivo-x90-series/-952x498w6/gsmarena_000.jpg",
            "publishedAt": "2022-11-27T09:21:01Z",
            "content": "In one fell swoop vivo unveiled the first phone with the Snapdragon 8 Gen 2 chipset and the first phones with the Dimensity 9200 SoC. We are talking about the vivo X90 series, of course, which will g… [+4132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Techstory.in"
            },
            "author": "Prity Khanal",
            "title": "Unlock AI's model by watching 70,000 hours of Minecraft - Techstory",
            "description": "It is also the first bot that can craft called diamond tools, same task for a good human player takes 20 minutes of high-speed clicking",
            "url": "https://techstory.in/unlock-ais-model-by-watching-70000-hours-of-minecraft/",
            "urlToImage": "https://techstory.in/wp-content/uploads/2022/11/getty_509646667_338162.jpg",
            "publishedAt": "2022-11-27T08:49:57Z",
            "content": "OpenAI which is an Artificial Intelligence research laboratory has built another stunning AI model which is the best Minecraft-playing bot till now by making it watch 70,000 hours of video gamers pla… [+2927 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Sportskeeda"
            },
            "author": "Krishanu Ranjan Sarma",
            "title": "Overwatch 2: Ramattra's abilities explained - Sportskeeda",
            "description": "There are three categories of characters in Overwatch 2 - Tank, Damage, and Support.",
            "url": "https://www.sportskeeda.com/esports/overwatch-2-ramattra-abilities-explained",
            "urlToImage": "https://staticg.sportskeeda.com/editor/2022/11/114b8-16695336721231-1920.jpg",
            "publishedAt": "2022-11-27T08:02:08Z",
            "content": "There are three categories of characters in Overwatch 2 - Tank, Damage, and Support. Ramattra will be introduced to the game as a Tank hero who will join the ranks of the first line of defense for th… [+3230 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Is Flexibility a Good Enough Reason to Buy The Lenovo Yoga AIO 7? | The Gadgets 360 Show - NDTV",
            "description": null,
            "url": "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DS_yUPF3VYoc",
            "urlToImage": null,
            "publishedAt": "2022-11-27T07:37:49Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Hindustan Times"
            },
            "author": null,
            "title": "10 best air purifiers to buy for your room - Hindustan Times",
            "description": "The best air purifiers ensure that your living space is free of allergens and pathogens. Choose from the ten best air purifiers available in the market.",
            "url": "https://www.hindustantimes.com/shop-now/electronics/10-best-air-purifiers-to-buy-for-your-room-101669531255197.html",
            "urlToImage": "https://images.hindustantimes.com/img/2022/11/27/400x225/air_1669531413802_1669531413935_1669531413935.jpeg",
            "publishedAt": "2022-11-27T07:22:00Z",
            "content": null
        }
    ]
}
const bitcoin={
    "status": "ok",
    "totalResults": 10090,
    "articles": [
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Andy Greenberg",
            "title": "The Hunt for the Dark Web’s Biggest Kingpin, Part 4: Face to Face",
            "description": "The team uses a secret technique to locate AlphaBay’s server. But just as the operation heats up, the agents have an unexpected run-in with their target.",
            "url": "https://www.wired.com/story/alphabay-series-part-4-face-to-face/",
            "urlToImage": "https://media.wired.com/photos/6369782f3505151fbc0b01cd/191:100/w_1280,c_limit/WI110122_EX_Tracers_AlphaBay2_01.jpg",
            "publishedAt": "2022-11-15T11:00:00Z",
            "content": "The answer appeared, without fanfare, on Levins screen: an AlphaBay IP address. Or rather, a handful of IP addresses that were likely to belong to the sites wallet server. A quick search revealed tha… [+4733 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gian M. Volpicelli",
            "title": "The Great Crypto-Cop Brain Drain",
            "description": "Hunting down crypto criminals is a dying art as law enforcement officers jump in-house.",
            "url": "https://www.wired.com/story/the-great-crypto-cop-brain-drain/",
            "urlToImage": "https://media.wired.com/photos/636b01906776a0176c76e576/191:100/w_1280,c_limit/business-crypto-cop.jpg",
            "publishedAt": "2022-11-09T12:00:00Z",
            "content": "In the course of a decade as a special agent with the US Internal Revenue Service (IRS), Tigran Gambaryan has seen them all. \r\nFrom plundered crypto exchange Mt Gox, to dark-net marketplace Silk Road… [+3016 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Jennifer Conrad",
            "title": "China’s Digital Yuan Works Just Like Cash—With Added Surveillance",
            "description": "Government officials are urging citizens to adopt the official digital currency in a bid to gain more control over the economy.",
            "url": "https://www.wired.com/story/chinas-digital-yuan-ecny-works-just-like-cash-surveillance/",
            "urlToImage": "https://media.wired.com/photos/636302865ca6e79a517309e6/191:100/w_1280,c_limit/Chinas-Digital-Currency-Has-A-Slow-Start-Business-1232784739.jpg",
            "publishedAt": "2022-11-08T13:00:00Z",
            "content": "By the mid-2010s, Chinese people in big cities had generally switched from using cash to using Alipay and WeChat Pay. By the end of 2021, about 64 percent of Chinese people were using mobile payment … [+2838 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Mitchell Clark",
            "title": "As FTX sinks, other crypto exchanges are showing their coins",
            "description": "Crypto.com, Binance, and Coinbase are among the cryptocurrency exchanges trying to prove to customers that their funds are safe following the collapse of FTX.",
            "url": "https://www.theverge.com/2022/11/11/23453560/ftx-bankruptcy-coinbase-binance-crypto-proof-of-reserves",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/wPO2usOSxctI84haZv11M8ErP_0=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/23587767/acastro_220524_STK428_0003.jpg",
            "publishedAt": "2022-11-11T21:31:19Z",
            "content": "You say you have my money? Prove it. | Illustration by Alex Castro / The Verge\r\n\n \n\n As FTX, formerly the world’s third-largest cryptocurrency exchange by volume, files for bankruptcy and halts withd… [+5867 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Mitchell Clark",
            "title": "An alleged crypto scam involving a bank called Polybius is headed to court",
            "description": "The Department of Justice has announced that two people have been arrested in connection with HashFlare and Polybius, two crypto projects that allegedly defrauded investors of over $500 million.",
            "url": "https://www.theverge.com/2022/11/23/23474163/hashflare-crypto-mining-alleged-scam-arrests",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/N6om89FQ0jWiLUP0sV6HlxPftxI=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/8954807/acastro_170726_1777_0008.jpg",
            "publishedAt": "2022-11-23T19:47:44Z",
            "content": "An alleged crypto scam involving a bank called Polybius is headed to court\r\nAn alleged crypto scam involving a bank called Polybius is headed to court\r\n / Two people have been arrested in connection … [+3633 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Richard Lawler",
            "title": "FTX files for Chapter 11 bankruptcy as CEO Sam Bankman-Fried resigns",
            "description": "FTX announced the Chapter 11 bankruptcy filing on Friday morning as well as the resignation of its founder and CEO Sam Bankman-Fried, who reportedly loaned $10 billion in customer funds to his other crypto business.",
            "url": "https://www.theverge.com/2022/11/11/23453164/ftx-bankruptcy-filing-sam-bankman-fried-resigns",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/Rh6LjOzhbaY2qoQ8eTeSqnz-rB4=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24038412/STK136_K_Radtke_FTX_02.jpg",
            "publishedAt": "2022-11-11T15:20:09Z",
            "content": "FTX files for Chapter 11 bankruptcy as CEO Sam Bankman-Fried resigns\r\nFTX files for Chapter 11 bankruptcy as CEO Sam Bankman-Fried resigns\r\n / The crypto exchange will have a new CEO as it attempts t… [+3003 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Nilay Patel",
            "title": "Never pay the ransom — a cybersecurity CEO explains why",
            "description": "Ransomware attacks still plague our healthcare system. Steve Cagle’s cybersecurity company Clearwater Compliance is trying to prevent them and protect patients’ healthcare data.",
            "url": "https://www.theverge.com/23410990/cybersecurity-ransomware-healthcare-data-hipaa-hospitals",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/zP-Fr6Hsjea-PYDjqb35DDYaWg0=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/24087582/Decoder_vincentkilbride_theverge.jpg",
            "publishedAt": "2022-10-27T14:54:21Z",
            "content": "Ransomware attacks still plague our healthcare system. Steve Cagles cybersecurity company is trying to prevent them.\r\nByNilay Patel / @reckless\r\nOct 27, 2022, 2:54 PM UTC|\r\nThis bonus episode of Deco… [+57040 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Bitcoin Price Slides to Two-Year Low as Fears Persist Over FTX Contagion",
            "description": "The price of Bitcoin slid to just $15,680 on Tuesday morning, the lowest level in over two years for the cryptocurrency. And most people expect the price to continue to fall substantially as traders worry the fallout from the implosion of FTX, once the second…",
            "url": "https://gizmodo.com/bitcoin-price-slides-fears-persist-ftx-contagion-eth-1849811382",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e20e15c2c69269e8476e99a9a8e9ed9a.png",
            "publishedAt": "2022-11-22T11:00:00Z",
            "content": "The price of Bitcoin slid to just $15,680 on Tuesday morning, the lowest level in over two years for the cryptocurrency. And most people expect the price to continue to fall substantially as traders … [+1918 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "DOJ and SEC Investigating FTX Collapse as Entire Crypto Market Plunges",
            "description": "The Department of Justice and Securities and Exchange Commission are investigating FTX, a crypto platform that halted withdrawals on Tuesday, according to a new report from the Wall Street Journal. And while the SEC’s investigation has reportedly been going “…",
            "url": "https://gizmodo.com/doj-sec-investigating-ftx-bitcoin-price-crypto-plunges-1849766102",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f8565ac7ce2dbb67f7fee4f98c736b91.png",
            "publishedAt": "2022-11-10T11:00:00Z",
            "content": "The Department of Justice and Securities and Exchange Commission are investigating FTX, a crypto platform that halted withdrawals on Tuesday, according to a new report from the Wall Street Journal. A… [+5185 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Crypto Platform AAX Halts Withdrawals But Denies It Had Exposure to FTX",
            "description": "Hong Kong-based crypto trading platform AAX halted withdrawals on Sunday and claims it will try to resume trades in 7-10 days, according to a press release from the company. But we’ve certainly heard that one before in crypto land.Read more...",
            "url": "https://gizmodo.com/crypto-platform-aax-bitcoin-ether-halts-withdrawals-ftx-1849778792",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/906075272c0e4593aec100c0bc8ac23a.jpg",
            "publishedAt": "2022-11-14T10:00:00Z",
            "content": "Hong Kong-based crypto trading platform AAX halted withdrawals on Sunday and claims it will try to resume trades in 7-10 days, according to a press release from the company. But weve certainly heard … [+2589 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Nikki Main",
            "title": "Meta Employees Were Reportedly Fired for Selling Account Information to Hackers",
            "description": "Meta reportedly fired more than a dozen security guards and other workers in the last year after internal investigations revealed they had been selling users’ information and login details to hackers. Some of those who received disciplinary actions were contr…",
            "url": "https://gizmodo.com/meta-hackers-security-guards-facebook-instagram-1849798256",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/cac9a70b4e826f3cf83e12d807857856.jpg",
            "publishedAt": "2022-11-17T22:05:00Z",
            "content": "Meta reportedly fired more than a dozen security guards and other workers in the last year after internal investigations revealed they had been selling users information and login details to hackers.… [+3125 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "The fall of the FTX ‘King of Crypto’ Sam Bankman-Fried",
            "description": "How a crypto empire built on video game battles and beanbags came crashing down.",
            "url": "https://www.bbc.co.uk/news/technology-63612489",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BAA5/production/_127618774_5cddff17-11a0-4777-9fe8-0d3fdf9c52e3.jpg",
            "publishedAt": "2022-11-13T11:25:59Z",
            "content": "It took fewer than eight days for Sam Bankman-Fried to go from being nicknamed the \"King Of Crypto\" to his company filing for bankruptcy and him stepping down as CEO, potentially facing federal inves… [+8052 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Billions being spent in metaverse land grab",
            "description": "Corporations, speculators and individuals have spent nearly $2bn (£1.75bn) on virtual plots.",
            "url": "https://www.bbc.co.uk/news/technology-63488059",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/16F10/production/_127486939_ee2c969d-a2a6-4d6c-98f2-88a35e17e904.jpg",
            "publishedAt": "2022-11-04T00:11:18Z",
            "content": "Nearly $2bn (£1.75bn) has been spent on virtual land in the past 12 months, as people and companies race to get a foothold in the metaverse, research shows. \r\nBut we are years away from the metaverse… [+6635 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Sriram Krishnan: The Indian-American 'helping' Elon Musk run Twitter",
            "description": "Who is Sriram Krishnan, the India-born tech expert who is reportedly in Elon Musk's \"inner circle\"?",
            "url": "https://www.bbc.co.uk/news/world-asia-india-63481873",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/6D37/production/_127495972_gettyimages-1322070790-594x594.jpg",
            "publishedAt": "2022-11-07T23:32:25Z",
            "content": "Twitter's new owner Elon Musk has whipped up a storm after he sacked thousands of employees last week.\r\nThe controversial way the firings happened - with many employees discovering they had been laid… [+6636 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Emily Parker",
            "title": "Opinion: Crypto's white knight problem",
            "description": "Over the past year, as crypto companies imploded and losses mounted, a white knight appeared. Sam Bankman-Fried, the 30-year-old CEO of crypto exchange FTX, helped bail out distressed crypto companies like BlockFi and Voyager. In an industry with a reputation…",
            "url": "https://www.cnn.com/2022/11/12/opinions/crypto-white-knight-problem-sam-bankman-fried-ftx-parker/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221109152426-sam-bankman-fried-ftx-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-12T16:04:20Z",
            "content": "Editors Note: Emily Parker is executive director of global content at CoinDesk, a media, event, indices and data company, and a former policy advisor at the US State Department and writer/editor at T… [+5488 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Allison Morrow",
            "title": "The crypto meltdown, explained",
            "description": "November 2022 is a month that investors, particularly in cryptocurrencies, will never forget. And the worst may be yet to come.",
            "url": "https://www.cnn.com/2022/11/18/business/ftx-crypto-downfall-explained/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221118105502-sam-bankman-fried-0209-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-18T19:31:25Z",
            "content": "November 2022 is a month that investors, particularly in cryptocurrencies, will never forget. And the worst may be yet to come. \r\nOver the past two weeks, the digital asset industry has watched in ho… [+7852 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: Bitcoin wants to break its bond with stocks - Reuters",
            "description": "After months of tears and tantrums, bitcoin wants to split up with stock markets.",
            "url": "https://www.reuters.com/technology/cryptoverse-bitcoin-wants-break-its-bond-with-stocks-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/bWNhsz1HaCN1pRR9s5PyHbHlF3Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Z34ISH2TFNO6DND4JK4XQAJ3LU.jpg",
            "publishedAt": "2022-11-01T06:16:29Z",
            "content": "Nov 1 (Reuters) - After months of tears and tantrums, bitcoin wants to split up with stock markets.\r\nThe cryptocurrency, which has been closely correlated with tech stocks for much of its torrid 2022… [+4079 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tumbling bitcoin overshadows El Salvador's crypto conference - Reuters",
            "description": "El Salvador's long-awaited bitcoin conference, which was in the limelight in 2021 after the small nation became the world's first to adopt the cryptocurrency as legal tender, has lost its luster this time amid a deep rout in the digital currency universe.",
            "url": "https://www.reuters.com/technology/tumbling-bitcoin-overshadows-el-salvadors-crypto-conference-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/EDlGLf_u7ZMbj-kJTdM9E0EbqPo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FJKWG42UNBNIPHHYW7R3JIA4LI.jpg",
            "publishedAt": "2022-11-17T22:59:00Z",
            "content": "SAN SALVADOR, Nov 17 (Reuters) - El Salvador's long-awaited bitcoin conference, which was in the limelight in 2021 after the small nation became the world's first to adopt the cryptocurrency as legal… [+1956 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "El Salvador govt seeks Congress approval to issue bitcoin-backed bonds - Reuters",
            "description": "The government of El Salvador, the first country in the world to adopt bitcoin as legal tender, is seeking congressional approval to issue investment bonds in the cryptocurrency.",
            "url": "https://www.reuters.com/markets/rates-bonds/el-salvador-govt-seeks-congress-approval-issue-bitcoin-backed-bonds-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/vw5LUa1a6Yti_HK0JhCmXz-sAkw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TBSQPPOZCNNOFAAZZCMXA2JOKQ.jpg",
            "publishedAt": "2022-11-23T18:03:00Z",
            "content": "SAN SALVADOR, Nov 23 (Reuters) - The government of El Salvador, the first country in the world to adopt bitcoin as legal tender, is seeking congressional approval to issue investment bonds in the cry… [+1746 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Crypto markets teeter with FTX after Binance abandons bailout - Reuters",
            "description": "Cryptocurrency markets nursed heavy losses on Thursday, with bitcoin pinned near a two-year low as investors fretted about the fallout from the implosion of crypto exchange FTX.",
            "url": "https://www.reuters.com/markets/currencies/crypto-markets-teeter-with-ftx-after-binance-abandons-bailout-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/vw5LUa1a6Yti_HK0JhCmXz-sAkw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TBSQPPOZCNNOFAAZZCMXA2JOKQ.jpg",
            "publishedAt": "2022-11-10T05:32:00Z",
            "content": "HONG KONG/SINGAPORE, Nov 10 (Reuters) - Cryptocurrency markets nursed heavy losses on Thursday, with bitcoin pinned near a two-year low as investors fretted about the fallout from the implosion of cr… [+3473 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Trading in crypto derivatives surges as investors hedge positions after FTX shock - Reuters",
            "description": "Trading volumes in bitcoin futures and exchange traded funds (ETFs) has exploded as investors scrambled to hedge their positions after this week's slump in digital tokens triggered by turmoil at <a href=\"/markets/currencies/crypto-markets-teeter-with-ftx-afte…",
            "url": "https://www.reuters.com/business/finance/trading-crypto-derivatives-surges-investors-hedge-positions-after-ftx-shock-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/vw5LUa1a6Yti_HK0JhCmXz-sAkw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TBSQPPOZCNNOFAAZZCMXA2JOKQ.jpg",
            "publishedAt": "2022-11-10T18:23:00Z",
            "content": "Nov 10 (Reuters) - Trading volumes in bitcoin futures and exchange traded funds (ETFs) has exploded as investors scrambled to hedge their positions after this week's slump in digital tokens triggered… [+2358 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "As regulators scrutinise FTX, investor focus swings to Crypto.com - Reuters",
            "description": "The fallout from the collapse of crypto exchange FTX kept bitcoin and other cryptocurrencies under pressure on Monday, with market participants worrying about heavy withdrawals at Singapore-based exchange Crypto.com.",
            "url": "https://www.reuters.com/technology/regulators-scrutinise-ftx-investor-focus-swings-cryptocom-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/I9QkCu6v6aAVd1B7qmgoAPLQh6Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FU5QNLLW2BOZLL7TQJDZNLFUL4.jpg",
            "publishedAt": "2022-11-14T06:48:00Z",
            "content": "SINGAPORE, Nov 14 (Reuters) - The fallout from the collapse of crypto exchange FTX kept bitcoin and other cryptocurrencies under pressure on Monday, with market participants worrying about heavy with… [+3319 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Crypto stocks slide as FTX prepares for bankruptcy proceedings - Reuters",
            "description": "Shares of cryptocurrency and blockchain-related firms dropped on Friday after FTX, one of the biggest crypto exchanges, said it would initiate bankruptcy proceedings in the United States, triggering a potentially massive meltdown in the industry.",
            "url": "https://www.reuters.com/markets/crypto-stocks-slide-ftx-prepares-bankruptcy-proceedings-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/_wMFawbTXgvaPkkyEfP9eQznO4c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IEKBL26CVFNPJJPQNQNVV4NMMI.jpg",
            "publishedAt": "2022-11-11T15:59:00Z",
            "content": "Nov 11 (Reuters) - Shares of cryptocurrency and blockchain-related firms dropped on Friday after FTX, one of the biggest crypto exchanges, said it would initiate bankruptcy proceedings in the United … [+1700 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Column: Good money after bad? Crypto still seems to be attracting punters - Reuters.com",
            "description": "If a series of high-profile multibillion-dollar blow-ups, alleged fraud and a 75% collapse in the price of your biggest asset doesn't shake faith in the crypto universe, it's hard to imagine what will.",
            "url": "https://www.reuters.com/markets/currencies/good-money-after-bad-crypto-still-seems-be-attracting-punters-2022-11-18/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-18T16:48:00Z",
            "content": "ORLANDO, Fla., Nov 18 (Reuters) - If a series of high-profile multibillion-dollar blow-ups, alleged fraud and a 75% collapse in the price of your biggest asset doesn't shake faith in the crypto unive… [+5080 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews - Sam Bankman-Fried did financial system a favour - Reuters",
            "description": "Sam Bankman-Fried has tipped the cryptocurrency industry into crisis. But the spectacular implosion of FTX, the exchange he founded, has done the broader financial system a big favour. The curly-haired kingpin was at the forefront of pushing regulators and po…",
            "url": "https://www.reuters.com/breakingviews/sam-bankman-fried-did-financial-system-favour-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/2sMBqaUSJwnaQ5mt-KO242t9NCY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MWKTVFVMMZFCDHLL5ULKPSQFK4.JPG",
            "publishedAt": "2022-11-15T04:48:25Z",
            "content": "LONDON, Nov 14 (Reuters Breakingviews) - Sam Bankman-Fried has tipped the cryptocurrency industry into crisis. But the spectacular implosion of FTX, the exchange he founded, has done the broader fina… [+4600 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Coinbase reports third-quarter loss as volumes drop - Reuters",
            "description": "U.S. cryptocurrency exchange Coinbase Global Inc <a href=\"https://www.reuters.com/companies/COIN.O\" target=\"_blank\">(COIN.O)</a> on Thursday reported a third-quarter loss as high inflation, rising interest rates and geopolitical tensions weakened demand for r…",
            "url": "https://www.reuters.com/technology/coinbase-reports-third-quarter-loss-volumes-drop-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/-HW_K2fwvRYLeHP4I00MqlCbAII=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7CLO3WASGNLOHGLA7RJPPTXG2U.jpg",
            "publishedAt": "2022-11-03T20:21:00Z",
            "content": "Nov 3 (Reuters) - U.S. cryptocurrency exchange Coinbase Global Inc (COIN.O) on Thursday reported a third-quarter loss as high inflation, rising interest rates and geopolitical tensions weakened deman… [+401 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Crypto winter highlights gold’s warming qualities - Reuters.com",
            "description": "The crypto winter is bitterly cold. The frost set in earlier this year with the collapse of Terra, a digital token supposedly pegged to the U.S. dollar. The recent failure of Sam Bankman-Fried’s FTX exchange has further lowered the temperature. The aggregate …",
            "url": "https://www.reuters.com/breakingviews/crypto-winter-highlights-golds-warming-qualities-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/VnSxRLGiLxsuGwYE03LABZNTZM8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5BWIRY3ZBVN2ZLJZHG44TPXN24.jpg",
            "publishedAt": "2022-11-25T01:20:00Z",
            "content": "LONDON, Nov 25 (Reuters Breakingviews) - The crypto winter is bitterly cold. The frost set in earlier this year with the collapse of Terra, a digital token supposedly pegged to the U.S. dollar. The r… [+6665 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Blockchain firm Valereum gets approval to buy Gibraltar exchange - Reuters",
            "description": "Blockchain company Valereum <a href=\"https://www.reuters.com/companies/6TJ.SG\" target=\"_blank\">(6TJ.SG)</a> said on Monday it has received regulatory approval to buy the Gibraltar Stock Exchange (GSX) and turn it into a gateway to European capital for fledgli…",
            "url": "https://www.reuters.com/business/blockchain-firm-valereum-gets-approval-buy-gibraltar-exchange-2022-10-31/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-31T07:49:00Z",
            "content": "LONDON, Oct 31 (Reuters) - Blockchain company Valereum (6TJ.SG) said on Monday it has received regulatory approval to buy the Gibraltar Stock Exchange (GSX) and turn it into a gateway to European cap… [+1391 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Grocery retailer Pick n Pay to start accepting cryptocurrency payments - Reuters.com",
            "description": "One of South Africa's largest grocery retailers Pick n Pay <a href=\"https://www.reuters.com/companies/PIKJ.J\" target=\"_blank\">(PIKJ.J)</a> is expanding a pilot of adding cryptocurrency as a payment option to more stores after the successful completion of the …",
            "url": "https://www.reuters.com/technology/grocery-retailer-pick-n-pay-start-accepting-cryptocurrency-payments-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/Ncx9fzKUG6j3wDty_lEOP84raW4=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/67PLGIFT6NKPTKOT3OOJ4IZQ3M.jpg",
            "publishedAt": "2022-11-01T11:04:00Z",
            "content": "JOHANNESBURG, Nov 1 (Reuters) - One of South Africa's largest grocery retailers Pick n Pay (PIKJ.J) is expanding a pilot of adding cryptocurrency as a payment option to more stores after the successf… [+1526 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Linklaters hires energy finance partner from Sidley Austin in New York - Reuters",
            "description": "UK-founded law firm Linklaters on Monday said it has hired a finance-focused partner from Sidley Austin in New York to head its energy and infrastructure practice in the Americas.",
            "url": "https://www.reuters.com/legal/legalindustry/linklaters-hires-energy-finance-partner-sidley-austin-new-york-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/s8FABgihS_Yk1RS8DM3088oMUY8=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IJNDPP54PBLORK4M367YRDGRYE.jpg",
            "publishedAt": "2022-11-14T18:04:00Z",
            "content": "Nov 14 (Reuters) - UK-founded law firm Linklaters on Monday said it has hired a finance-focused partner from Sidley Austin in New York to head its energy and infrastructure practice in the Americas.\r… [+1639 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Asian shares fall ahead of U.S. CPI, crypto worries mount - Reuters",
            "description": "Asian share markets were tense on Thursday and the dollar held on to its overnight gains before the big test of a U.S. consumer inflation report, while market sentiment took a dive as the likely collapse of a major crypto exchange spooked investors.",
            "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/CzCIBqgB-q40RoP-z5tT2U7nVGM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6ORULZYX5ZPCVF4SRAD5KDK56A.jpg",
            "publishedAt": "2022-11-10T02:04:00Z",
            "content": "SYDNEY, Nov 10 (Reuters) - Asian share markets were tense on Thursday and the dollar held on to its overnight gains before the big test of a U.S. consumer inflation report, while market sentiment too… [+3489 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Dollar wobbles while investors await midterms; cryptos skittish - Reuters",
            "description": "The dollar wavered on Wednesday, as traders awaited results from U.S. midterm elections and inflation data that could disappoint hopes for a slowdown in rate hikes, while cryptocurrency markets attempted to steady after news of a bailout of exchange FTX.",
            "url": "https://www.reuters.com/markets/currencies/dollar-wobbles-while-investors-await-midterms-cryptos-skittish-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/RAqDwRGukpLQsDyAdVj8bwD9Hwo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FH7EYAOX4ZLR3CRL3KMYMNRUDU.jpg",
            "publishedAt": "2022-11-09T01:35:00Z",
            "content": "SINGAPORE, Nov 9 (Reuters) - The dollar wavered on Wednesday, as traders awaited results from U.S. midterm elections and inflation data that could disappoint hopes for a slowdown in rate hikes, while… [+2275 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Investors flock to short crypto funds, products as negative sentiment deepens -CoinShares - Reuters",
            "description": "Institutional investors rushed to crypto products that bet on price declines, posting record inflows, as the <a href=\"/markets/currencies/exclusive-least-1-billion-client-funds-missing-failed-crypto-firm-ftx-sources-2022-11-12/\">collapse of digital asset exch…",
            "url": "https://www.reuters.com/technology/investors-flock-short-crypto-funds-products-negative-sentiment-deepens-2022-11-21/",
            "urlToImage": "https://www.reuters.com/resizer/-4c6cbQ7CabG-LHwGVTTq--yrTg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BE5Q5YJS3RNQXENCM3WMPXUTKM.jpg",
            "publishedAt": "2022-11-21T20:15:00Z",
            "content": "NEW YORK, Nov 21 (Reuters) - Institutional investors rushed to crypto products that bet on price declines, posting record inflows, as the collapse of digital asset exchange FTX rippled across the ind… [+2425 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "FTX to start U.S. bankruptcy proceedings, CEO to exit - Reuters",
            "description": "Crypto exchange FTX is to start U.S. bankruptcy proceedings and CEO Sam Bankman-Fried is to step down, after a liquidity crisis at the cryptocurrency group that has prompted intervention from regulators around the world.",
            "url": "https://www.reuters.com/business/ftx-start-us-bankruptcy-proceedings-ceo-exit-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/WxSBoSOCqqDiukoRWWyetYsehrw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AK4QJ5OUYJOCPNRPYM5IKOGOJI.jpg",
            "publishedAt": "2022-11-11T15:13:00Z",
            "content": "SINGAPORE/LONDON, Nov 11 (Reuters) - Crypto exchange FTX is to start U.S. bankruptcy proceedings and CEO Sam Bankman-Fried is to step down, after a liquidity crisis at the cryptocurrency group that h… [+2153 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "CoinShares says has $30.3 million exposure to FTX - Reuters",
            "description": "Crypto asset manager CoinShares has $30.3 million worth of exposure to crypto exchange FTX, CoinShares said in a statement on Thursday.",
            "url": "https://www.reuters.com/technology/coinshares-says-has-303-million-exposure-ftx-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/_wMFawbTXgvaPkkyEfP9eQznO4c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/IEKBL26CVFNPJJPQNQNVV4NMMI.jpg",
            "publishedAt": "2022-11-10T14:23:00Z",
            "content": "LONDON, Nov 10 (Reuters) - Crypto asset manager CoinShares has $30.3 million worth of exposure to crypto exchange FTX, CoinShares said in a statement on Thursday.\r\nCoinShares said its exposure to FTX… [+617 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Singapore's Temasek writes down $275 mln investment in FTX - Reuters",
            "description": "Singapore's state investor Temasek Holdings (TEM.UL) said on Thursday it will write down the value of its full investment in collapsed cryptocurrency exchange FTX, irrespective of outcome of its bankruptcy filing.",
            "url": "https://www.reuters.com/technology/singapores-temasek-writes-down-275-mln-investment-ftx-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/QtRrM_Mfn7Dihu59uO8ewz09tqI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DK6TYIZ5TJMUVMNS35LJGYTVGI.jpg",
            "publishedAt": "2022-11-16T23:53:00Z",
            "content": "Nov 17 (Reuters) - Singapore's state investor Temasek Holdings (TEM.UL) said on Thursday it will write down the value of its full investment in collapsed cryptocurrency exchange FTX, irrespective of … [+711 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "France, Singapore, Switzerland jointly test central bank digital currencies - Reuters.com",
            "description": "France, Singapore and Switzerland have launched a joint trial of their experimental central bank digital currencies (CBDCs) in the first cross-regional trial of its kind.",
            "url": "https://www.reuters.com/technology/france-singapore-switzerland-jointly-test-central-bank-digital-currencies-2022-11-02/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=118",
            "publishedAt": "2022-11-02T18:00:00Z",
            "content": "LONDON, Nov 2 (Reuters) - France, Singapore and Switzerland have launched a joint trial of their experimental central bank digital currencies (CBDCs) in the first cross-regional trial of its kind.\r\nT… [+1205 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Binance to relaunch bid to buy bankrupt Voyager Digital - Coindesk - Reuters",
            "description": "Crypto exchange Binance's U.S. unit is relaunching its bid to buy bankrupt crypto lender Voyager Digital, Coindesk <a href=\"https://bit.ly/3EFSsx9\" target=\"_blank\">reported</a> on Thursday, citing a person familiar with the matter.",
            "url": "https://www.reuters.com/technology/binance-relaunch-bid-buy-bankrupt-voyager-digital-coindesk-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/VIJNNtW3E44_sf0rCmhPBHuD49o=/800x419/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UQ4XSZNLJBNEVE4IBQUJ4T65YM.jpg",
            "publishedAt": "2022-11-17T09:30:00Z",
            "content": "Nov 17 (Reuters) - Crypto exchange Binance's U.S. unit is relaunching its bid to buy bankrupt crypto lender Voyager Digital, Coindesk reported on Thursday, citing a person familiar with the matter.\r\n… [+990 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. Senate to hold FTX hearing on Dec. 1, CFTC chairman to testify - Reuters",
            "description": "The U.S. Senate Agriculture Committee on Thursday said it will hold a hearing on Dec. 1 to examine the sudden collapse of FTX, one of the world's biggest crypto exchanges.",
            "url": "https://www.reuters.com/technology/us-senate-hold-ftx-hearing-dec-1-cftc-chairman-testify-2022-11-21/",
            "urlToImage": "https://www.reuters.com/resizer/zOqEv6d9mQ6OKkvn-YOnmkRe6M4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D4GLMIJXQNNFFJC7F5Z2CKD7J4.jpg",
            "publishedAt": "2022-11-21T20:43:00Z",
            "content": "Nov 21 (Reuters) - The U.S. Senate Agriculture Committee on Thursday said it will hold a hearing on Dec. 1 to examine the sudden collapse of FTX, one of the world's biggest crypto exchanges.\r\nFTX fil… [+985 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Binance CEO Zhao says don't fight crypto, regulate it - Reuters",
            "description": "Binance Chief Executive Officer Changpeng Zhao said on Friday regulation rather than opposition of the crypto sector is a better option for world governments as digital currencies become more mainstream.",
            "url": "https://www.reuters.com/legal/government/binance-ceo-zhao-says-dont-fight-crypto-regulate-it-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/6m4G-Ef4XWqoWbojun8C97opEPc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZGZQXHKQTZLTJNFJKBGTT33GXA.jpg",
            "publishedAt": "2022-11-25T19:58:00Z",
            "content": "ATHENS, Nov 25 (Reuters) - Binance Chief Executive Officer Changpeng Zhao said on Friday regulation rather than opposition of the crypto sector is a better option for world governments as digital cur… [+1402 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Asia shares mixed while oil falls on China COVID outlook - Reuters",
            "description": "Asian share markets were mixed on Tuesday and oil was weaker as investors sought to digest the economic implications of China's COVID policy adjustments and a rescue package for the country's struggling property sector.",
            "url": "https://www.reuters.com/markets/global-markets-wrapup-1-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/dvH0FA_QEvcO2Mgo5qHJVpty68o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WLLYKSM2UFL6XFFWUAC7JPPRNA.jpg",
            "publishedAt": "2022-11-15T02:26:00Z",
            "content": "SYDNEY, Nov 15 (Reuters) - Asian share markets were mixed on Tuesday and oil was weaker as investors sought to digest the economic implications of China's COVID policy adjustments and a rescue packag… [+3057 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Sam Bankman-Fried's sudden turn from white knight to washout - Reuters",
            "description": "Sam Bankman-Fried earned a reputation as savior of the crypto industry when he bailed out two platforms earlier this year. But when FTX, the exchange he co-founded and led until Friday, needed a lifeline, none was forthcoming.",
            "url": "https://www.reuters.com/technology/sam-bankman-frieds-sudden-turn-white-knight-washout-2022-11-12/",
            "urlToImage": "https://www.reuters.com/resizer/rsAC6U_M5UjiUg8YMgMfpC1xteQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KTCVBIOG3FNUNH4HGWF24CSMLQ.jpg",
            "publishedAt": "2022-11-12T02:46:00Z",
            "content": "Nov 11 (Reuters) - Sam Bankman-Fried earned a reputation as savior of the crypto industry when he bailed out two platforms earlier this year. But when FTX, the exchange he co-founded and led until Fr… [+3060 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews - Crypto watchdogs have a giant offshore problem - Reuters",
            "description": "Tighter cryptocurrency regulation is inevitable after the collapse of exchange FTX. Even so, there will still be places that the rules don’t touch. Big players like Binance, as well as services based on so-called decentralised finance, may stay out of reach. …",
            "url": "https://www.reuters.com/breakingviews/crypto-watchdogs-have-giant-offshore-problem-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/0kCkCccVQMmDulJhS_LD0lxTl4I=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BFGRRCUOGBN6VOQQO7TJBXNWYM.jpg",
            "publishedAt": "2022-11-17T10:55:00Z",
            "content": "LONDON, Nov 17 (Reuters Breakingviews) - Tighter cryptocurrency regulation is inevitable after the collapse of exchange FTX. Even so, there will still be places that the rules dont touch. Big players… [+3759 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hong Kong's leading crypto retail operator says it ceases trading as FTX fallout roils sector - Reuters",
            "description": "A leading cryptocurrency retail service provider in Hong Kong said it has ceased trading as the broader fallout from the collapse of FTX, and solvency issues at other major crypto firms, continues to roil the sector.",
            "url": "https://www.reuters.com/technology/hong-kongs-leading-crypto-retail-operator-says-it-ceases-trading-ftx-fallout-2022-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/Bf7rKdH01ww1Wv_AtARAaa8mgUw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C4SMQFCB4JICHAM4PBKXROWFKQ.jpg",
            "publishedAt": "2022-11-18T08:37:00Z",
            "content": "HONG KONG, Nov 18 (Reuters) - A leading cryptocurrency retail service provider in Hong Kong said it has ceased trading as the broader fallout from the collapse of FTX, and solvency issues at other ma… [+3157 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Crypto exchange Binance, Musk's co-investor, to help Twitter with blockchain - Reuters",
            "description": "Binance, the world's largest crypto exchange that has invested $500 million into Elon Musk's buyout of Twitter Inc, is creating a team to work on how blockchain and crypto could be helpful to Twitter, the company's spokesperson said on Friday.",
            "url": "https://www.reuters.com/technology/crypto-exchange-binance-musks-co-investor-help-twitter-with-blockchain-2022-10-28/",
            "urlToImage": "https://www.reuters.com/resizer/ONel_IVvWGtyivb3GNw_CepCK6g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2VR6FABUJFMP7GE4BGP3MUQCDI.jpg",
            "publishedAt": "2022-10-28T14:48:00Z",
            "content": "Oct 28 (Reuters) - Binance, the world's largest crypto exchange that has invested $500 million into Elon Musk's buyout of Twitter Inc, is creating a team to work on how blockchain and crypto could be… [+1872 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Exchange operator CME tops profit views as trading volumes surge - Reuters",
            "description": "Futures exchange operator CME Group Inc <a href=\"https://www.reuters.com/companies/CME.O\" target=\"_blank\">(CME.O)</a> reported third-quarter profits that beat expectations as volatility in the global markets amid high inflation, aggressive rate hikes and rece…",
            "url": "https://www.reuters.com/business/exchange-operator-cme-tops-profit-views-trading-volumes-surge-2022-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/JiaC7qpynuP1UYAE1k1FD42YAFM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SPKBYUI5OJJJVCRLGJ5KVBRQL4.jpg",
            "publishedAt": "2022-10-26T14:04:00Z",
            "content": "Oct 26 (Reuters) - Futures exchange operator CME Group Inc (CME.O) reported third-quarter profits that beat expectations as volatility in the global markets amid high inflation, aggressive rate hikes… [+1674 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Warren Buffett's Berkshire warns about crypto website using its name - Reuters",
            "description": "Berkshire Hathaway Inc <a href=\"https://www.reuters.com/companies/BRKa.N\" target=\"_blank\">(BRKa.N)</a>, run by billionaire Warren Buffett, on Friday warned investors it has no affiliation with a purported cryptocurrency brokerage website using the Berkshire H…",
            "url": "https://www.reuters.com/technology/warren-buffetts-berkshire-warns-about-crypto-website-using-its-name-2022-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/aAcg7s7iiOQMjDIlvIRYXy0ZQ4U=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GRBVHTDGFZO73JPWHO6GKFLPOU.jpg",
            "publishedAt": "2022-11-18T23:55:00Z",
            "content": "Nov 18 (Reuters) - Berkshire Hathaway Inc (BRKa.N), run by billionaire Warren Buffett, on Friday warned investors it has no affiliation with a purported cryptocurrency brokerage website using the Ber… [+1778 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Take Five: Everything to play for - Reuters",
            "description": "The final month of the year is almost here but there's no time yet to slow down, with latest U.S. jobs numbers and euro zone inflation data coming up.",
            "url": "https://www.reuters.com/business/take-five/global-markets-themes-takealook-pix-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/IZ3k_l3HA97U4QNxqwxryoCYACk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ULJSQIBO6BO3FM3X3IWWFNS6ZE.jpg",
            "publishedAt": "2022-11-25T08:15:00Z",
            "content": "LONDON, Nov 25 (Reuters) - The final month of the year is almost here but there's no time yet to slow down, with latest U.S. jobs numbers and euro zone inflation data coming up.\r\nAnd don't forget the… [+4805 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cooling, and melting down - Reuters",
            "description": "A look at the day ahead in Asian markets from Lewis Krauskopf",
            "url": "https://www.reuters.com/markets/asia/global-markets-view-asia-graphic-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/Af9Z6m-NvhsJbKxBhiG_B_64uts=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FWGUE4EDIJK3FIX3ES6SPAY2HI.jpg",
            "publishedAt": "2022-11-10T21:34:00Z",
            "content": "Nov 11 (Reuters) - A look at the day ahead in Asian markets from Lewis Krauskopf\r\nThe inflation datapoint investors have been itching for finally arrived and set off a feverish risk-on rally in marke… [+2386 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Robinhood, Coinbase find sanctuary in interest income amid market rout - Reuters.com",
            "description": "For U.S. online trading companies an often-overlooked financial metric could act as a bulwark against softening demand in the third quarter, according to analysts.",
            "url": "https://www.reuters.com/technology/robinhood-coinbase-find-sanctuary-interest-income-amid-market-rout-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/-HW_K2fwvRYLeHP4I00MqlCbAII=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/7CLO3WASGNLOHGLA7RJPPTXG2U.jpg",
            "publishedAt": "2022-11-01T17:13:00Z",
            "content": "Nov 1 (Reuters) - For U.S. online trading companies an often-overlooked financial metric could act as a bulwark against softening demand in the third quarter, according to analysts.\r\nThe U.S. Federal… [+2555 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Dollar tentative as investors await Fed minutes - Reuters",
            "description": "The U.S. dollar was steady on Wednesday as investors tempered their risk appetites ahead of the release of minutes of the Federal Reserve's policy meeting that could offer clues on the outlook for inflation and interest rates.",
            "url": "https://www.reuters.com/markets/currencies/dollar-tentative-investors-await-fed-minutes-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/-t0OPfoHuGqQuudu4iVEsAUgwu8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A6RSMPX6KBLCVMXJYSG3MDAFR4.jpg",
            "publishedAt": "2022-11-23T02:04:12Z",
            "content": "SINGAPORE, Nov 23 (Reuters) - The U.S. dollar was steady on Wednesday as investors tempered their risk appetites ahead of the release of minutes of the Federal Reserve's policy meeting that could off… [+2301 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptocurrencies slide as concerns over FTX exchange rattle markets - Reuters",
            "description": "Cryptocurrencies fell heavily on Tuesday and the native token of crypto exchange FTX collapsed by 15% as investors appeared to take fright at talk of pressure on FTX's financials.",
            "url": "https://www.reuters.com/markets/currencies/cryptocurrencies-slide-concerns-over-ftx-exchange-rattle-markets-2022-11-08/",
            "urlToImage": "https://www.reuters.com/resizer/AzsryMToCxlt9VdYxbPWt7WU4QM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I3RRFYLACBPO3G5G5ZORXYBHXQ.jpg",
            "publishedAt": "2022-11-08T08:28:00Z",
            "content": "SINGAPORE, Nov 8 (Reuters) - Cryptocurrencies fell heavily on Tuesday and the native token of crypto exchange FTX collapsed by 15% as investors appeared to take fright at talk of pressure on FTX's fi… [+1967 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Congress unswept, crypto a mess - Reuters",
            "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
            "url": "https://www.reuters.com/markets/us/global-markets-view-usa-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/m9k_robas_c2UTgEY8J9P5K6IZc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CKW7X5EKMNITZGOAQSV7PYO7CY.jpg",
            "publishedAt": "2022-11-09T11:03:00Z",
            "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nRunning market assumptions of a Republican clean sweep of U.S. Congress in Tuesday's midterm elections appear wide of the mark so … [+3915 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Morning Bid: Wild oil ride amid China and crypto woe - Reuters",
            "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
            "url": "https://www.reuters.com/markets/global-markets-view-usa-2022-11-22/",
            "urlToImage": "https://www.reuters.com/resizer/skt3G-JWGxnffiCVdLCmxupskSI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/D3BTSZOCMZIKFBGP6KDHE56XEE.jpg",
            "publishedAt": "2022-11-22T11:14:00Z",
            "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nTurbulence in oil, China's COVID crunch and unravelling cryptocurrencies make for uncomfortable reading for investors starting to … [+3867 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Global regulators to target crypto platforms after FTX crash - Reuters.com",
            "description": "The crash of FTX exchange has injected greater urgency into regulating the crypto sector and targeting such 'conglomerate' platforms will be the focus for 2023, the new chair of global securities watchdog IOSCO said in an interview.",
            "url": "https://www.reuters.com/markets/global-markets-regulator-pix-2022-11-24/",
            "urlToImage": "https://www.reuters.com/resizer/3cOZejx9E8tVQLXICOeE-O_LeKA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZQ4KYJVHTRJDLPCOCQ3CVZYYTY.jpg",
            "publishedAt": "2022-11-24T06:06:00Z",
            "content": "LONDON, Nov 24 (Reuters) - The crash of FTX exchange has injected greater urgency into regulating the crypto sector and targeting such 'conglomerate' platforms will be the focus for 2023, the new cha… [+2910 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Dollar steadies as Fed cautions on inflation - Reuters",
            "description": "The U.S. dollar held firm on Monday following last week's bruising dive as Federal Reserve Governor Christopher Waller said that the central bank was not softening its fight against inflation.",
            "url": "https://www.reuters.com/markets/currencies/dollar-steadies-fed-cautions-inflation-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/FHbdHazi9K-Cx-xwVbQdiW-vOZA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T4JLH64IUFO77FCOQG3AFA4TPM.jpg",
            "publishedAt": "2022-11-14T02:22:10Z",
            "content": "SINGAPORE, Nov 14 (Reuters) - The U.S. dollar held firm on Monday following last week's bruising dive as Federal Reserve Governor Christopher Waller said that the central bank was not softening its f… [+2655 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Dollar dives as investors cheer after U.S. inflation misses forecasts - Reuters",
            "description": "The dollar languished on Friday after U.S. inflation data came in cooler than expected, raising market hopes that inflation may have peaked and that the Federal Reserve will begin scaling back its hefty interest rate increases.",
            "url": "https://www.reuters.com/markets/currencies/dollar-dives-investors-cheer-after-us-inflation-misses-forecasts-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/aURLx77hfn12ZoYnG6lHjddUCak=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MMZ3XFL5RBPETA3FNYTXFW4MWA.jpg",
            "publishedAt": "2022-11-11T00:29:11Z",
            "content": "SINGAPORE, Nov 11 (Reuters) - The dollar languished on Friday after U.S. inflation data came in cooler than expected, raising market hopes that inflation may have peaked and that the Federal Reserve … [+2879 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Special Reports",
            "title": "Crypto exchanges enabled online child sex-abuse profiteer - Reuters",
            "description": "As websites selling horrific child-abuse images have proliferated on the",
            "url": "https://www.reuters.com/investigates/special-report/fintech-crypto-abuse/",
            "urlToImage": "https://www.reuters.com/investigates/special-report/assets/fintech-crypto-abuse/mastheads/fintech_abuse_15.jpg?v=003311231122",
            "publishedAt": "2022-11-23T12:26:00Z",
            "content": "Researcher Chainalysis, used by U.S. government agencies to track illegal flows, estimates that child abuse sites annual revenue in crypto leapt from around $250,000 in 2017 to almost $1 million in 2… [+19855 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Crypto exchange Binance helped Iranian firms trade $8 billion despite sanctions - Reuters",
            "description": "Crypto giant Binance has processed Iranian transactions with a value of $8 billion since 2018 despite U.S. sanctions intended to cut Iran off from the global financial system, blockchain data show.",
            "url": "https://www.reuters.com/business/finance/exclusive-crypto-exchange-binance-helped-iranian-firms-trade-8-billion-despite-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/kmdAZ7WMK3jx2mGNYbAvYdZLjkY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OGYFKJKKX5OQJLWH5OPRA3RZFE.jpg",
            "publishedAt": "2022-11-04T12:34:00Z",
            "content": "LONDON, Nov 4 (Reuters) - Crypto giant Binance has processed Iranian transactions with a value of $8 billion since 2018 despite U.S. sanctions intended to cut Iran off from the global financial syste… [+14652 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cryptoverse: So long, Solana? Ether rival clobbered by FTX crash - Reuters",
            "description": "Cryptoverse: So long, Solana? Ether rival clobbered by FTX crash  Reuters",
            "url": "https://www.reuters.com/technology/cryptoverse-so-long-solana-ether-rival-clobbered-by-ftx-crash-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/kIJpob8JK2grB5jO88V6XC1isRE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T2XOLHT65JOUTLMMKCPVEWNM6A.jpg",
            "publishedAt": "2022-11-15T06:12:00Z",
            "content": "Nov 15 (Reuters) - Solana, a poster coin of the crypto future, is in trouble.\r\nThe cryptocurrency, which had been lauded by FTX's founder Sam Bankman-Fried, has been hit harder than any other major c… [+4025 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Disinflation stations - Reuters",
            "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
            "url": "https://www.reuters.com/markets/us/global-markets-view-usa-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/SOHeQU7OrGc6ueMeOZjkeBmq4aY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/35O7VDDS3ZL2RBJA3YEXM6EOJQ.jpg",
            "publishedAt": "2022-11-11T11:04:00Z",
            "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nAs scrambling relief rallies go, that was a whopper. Now the hard thinking sets it.\r\nThe sheer scale Thursday's surge in world mar… [+4073 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews - Lisbon tech schmooze takes baby steps to reality - Reuters",
            "description": "Tech bubbles are bursting everywhere. Web Summit, the sector’s annual bash held in Lisbon, is doing the opposite. Volumes of newly mask-free attendees to the event co-founded by Paddy Cosgrave in Dublin a decade ago have returned to their pre-pandemic levels …",
            "url": "https://www.reuters.com/breakingviews/lisbon-tech-schmooze-takes-baby-steps-reality-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/BdMV7dftSM_2c_BYdu-heRI6Z-E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Q3Q466KZL5JBTLVXFCK3HO7OJY.jpg",
            "publishedAt": "2022-11-04T13:13:00Z",
            "content": "LISBON, Nov 4 (Reuters Breakingviews) - Tech bubbles are bursting everywhere. Web Summit, the sectors annual bash held in Lisbon, is doing the opposite. Volumes of newly mask-free attendees to the ev… [+4560 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Reality check - Reuters",
            "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
            "url": "https://www.reuters.com/markets/us/global-markets-view-usa-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/XZV_AzWGwCB9FuZmHbG0s5BxV54=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DH6CWHNW6BPC3L3TNSDOGMQ2CM.jpg",
            "publishedAt": "2022-11-14T11:06:00Z",
            "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nAfter its best week in months, Wall St now has to assess what's durable from the euphoria surrounding October's inflation relief.\r… [+4194 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Take Five: A UK budget and trouble in crypto land - Reuters",
            "description": "The long-awaited UK fiscal plan is (almost) here and after the ructions unleashed by September's mini-budget, markets are paying close attention.",
            "url": "https://www.reuters.com/business/take-five/global-markets-themes-takealook-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/v8qu0ne8XufGNkg60EKv-xf6cHU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5273NYHYURP3ZDKX7OFDSMCQAE.jpg",
            "publishedAt": "2022-11-11T08:29:00Z",
            "content": "LONDON, Nov 11 (Reuters) - The long-awaited UK fiscal plan is (almost) here and after the ructions unleashed by September's mini-budget, markets are paying close attention.\r\nChaos reigns in cryptolan… [+4832 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Factbox: From Binance to Voyager, crypto firms' exposure to FTX is coming to light - Reuters",
            "description": "After major crypto exchange FTX filed for U.S. bankruptcy protection on Friday, the crypto industry is bracing for further fallout.",
            "url": "https://www.reuters.com/technology/binance-voyager-crypto-firms-exposure-ftx-is-coming-light-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/T3EyuV6bE4KLg9JFbkgoCUkZ9FI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VHZXVTOXGRLIBNCGJ6BU2NCKKY.jpg",
            "publishedAt": "2022-11-14T17:37:00Z",
            "content": "LONDON, Nov 14 (Reuters) - After major crypto exchange FTX filed for U.S. bankruptcy protection on Friday, the crypto industry is bracing for further fallout.\r\nSome of FTX's investors have said they … [+4515 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Behind FTX's fall, battling billionaires and a failed bid to save crypto - Reuters",
            "description": "EXCLUSIVE Behind FTX's fall, battling billionaires and a failed bid to save crypto  Reuters",
            "url": "https://www.reuters.com/technology/exclusive-behind-ftxs-fall-battling-billionaires-failed-bid-save-crypto-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/uKnVXeHOjGPcdlbQEBfcm42JBdc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SFIZC5J2CVKXTORUWJ3VK4GVKM.jpg",
            "publishedAt": "2022-11-10T04:45:00Z",
            "content": "Nov 10 (Reuters) - (This story contains language some readers may find offensive in paragraph 2)\r\nOn Tuesday morning, Sam Bankman-Fried, owner of cryptocurrency exchange FTX, caught his employees off… [+8836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Reuters",
            "title": "US justice department seizes bitcoins worth more than $3bn stolen a decade ago",
            "description": "A search of James Zhong’s Georgia home uncovered 50,000 bitcoins found on a circuit board in the bottom of a popcorn tinThe United States is seeking the forfeiture of more than $1bn in bitcoin stolen from the Silk Road online marketplace, federal prosecutors …",
            "url": "https://www.theguardian.com/technology/2022/nov/07/us-justice-department-seizes-bitcoin-theft",
            "urlToImage": "https://i.guim.co.uk/img/media/dc1236999a50e3c2f9d34726a9759bed8aefc328/0_53_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ebe22b35c995880fe8402ed459c17ffb",
            "publishedAt": "2022-11-07T23:10:22Z",
            "content": "The United States is seeking the forfeiture of more than $1bn in bitcoin stolen from the Silk Road online marketplace, federal prosecutors in Manhattan said on Monday.\r\nIn the second largest seizure … [+1711 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Carol Alexander",
            "title": "After the collapse of FTX, Binance will become the Amazon of the crypto market | Carol Alexander",
            "description": "Buyers should beware as the ‘self-regulated’ organisation could become a feeding ground for ill-intentioned investorsFollowing the bankruptcy of one of the world’s largest cryptocurrency exchanges, FTX, the price of bitcoin (BTC) has tumbled again. It is now …",
            "url": "https://www.theguardian.com/commentisfree/2022/nov/23/ftx-binance-crypto-market",
            "urlToImage": "https://i.guim.co.uk/img/media/00899c7ff9f212ac2faae5df03bced06a8222698/0_38_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=43b41a91806aac861af183c0a4b628d0",
            "publishedAt": "2022-11-23T15:30:02Z",
            "content": "Following the bankruptcy of one of the worlds largest cryptocurrency exchanges, FTX, the price of bitcoin (BTC) has tumbled again. It is now about $16,500 a far cry from the all-time high of $66,000 … [+4574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Associated Press",
            "title": "Binance pulls out of FTX merger sending cryptocurrency prices plunging",
            "description": "The deal was conditional to due diligence of FTX’s balance sheet which raised enough concerns for Binance to back outCryptocurrency prices plunged for a second-straight day on Wednesday after crypto exchange Binance announced it was pulling out of its deal to…",
            "url": "https://www.theguardian.com/technology/2022/nov/09/ftx-binance-merger-crypto-price-falls",
            "urlToImage": "https://i.guim.co.uk/img/media/e720e293b2a42aa602d013244219a4c73ef5b97c/0_183_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bda570656383ac2a6851e226ba8bd847",
            "publishedAt": "2022-11-09T22:06:39Z",
            "content": "Cryptocurrency prices plunged for a second-straight day on Wednesday after crypto exchange Binance announced it was pulling out of its deal to purchase its failing rival FTX Trading.\r\nBitcoin and oth… [+1710 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Dan Milmo and Alex Hern",
            "title": "What happened to FTX and could the crisis spill over to the rest of crypto?",
            "description": "International exchange for crypto assets is effectively unregulated – and may have been built on sand<ul><li>Cryptocurrency exchange FTX now worthless, says key investor</li></ul>FTX, the world’s second largest cryptocurrency exchange, is in a crisis and has …",
            "url": "https://www.theguardian.com/technology/2022/nov/10/what-happened-to-ftx-and-could-crisis-spill-over-to-rest-of-crypto",
            "urlToImage": "https://i.guim.co.uk/img/media/844db8351bf4487ce2a5b88a748e64d5b4a41ac7/0_18_8081_4848/master/8081.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=327514e535cf3428f03c9fbb2c651699",
            "publishedAt": "2022-11-10T15:22:29Z",
            "content": "FTX, the worlds second largest cryptocurrency exchange, is in a crisis and has pitched the digital asset market into another crash.\r\nHere we look at what has happened to FTX, why, and what it means f… [+6599 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian community team",
            "title": "Have you been affected by the FTX crypto exchange collapse?",
            "description": "We’d like to speak to users who have lost fundsThe FTX cryptocurrency exchange has collapsed with at least $1bn in investor assets lost.The exchange has filed for bankruptcy in the US, and its boss Sam Bankman-Fried has also stepped down as chief executive. C…",
            "url": "https://www.theguardian.com/technology/2022/nov/14/have-you-been-affected-by-the-ftx-crypto-exchange-collapse",
            "urlToImage": "https://i.guim.co.uk/img/media/4cdf3dc31464d0cdc10c1172cd11b8fae5e2e410/0_66_5606_3365/master/5606.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=bc28f71faa8eb9d24d382259721d2a30",
            "publishedAt": "2022-11-14T15:30:11Z",
            "content": "The FTX cryptocurrency exchange has collapsed with at least $1bn in investor assets lost.\r\nThe exchange has filed for bankruptcy in the US, and its boss Sam Bankman-Fried has also stepped down as chi… [+1052 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hern UK technology editor",
            "title": "Cryptocurrency exchange FTX now worthless, says key investor",
            "description": "Firm once valued at $25bn in 2021 suffered bank run-style crisis as investors rushed to withdraw money FTX, once the second-largest cryptocurrency exchange in the world, is now worthless, according to one of the company’s early investors.In a note to partners…",
            "url": "https://www.theguardian.com/technology/2022/nov/10/cryptocurrency-exchange-ftx-now-worthless-says-key-investor",
            "urlToImage": "https://i.guim.co.uk/img/media/c966cad62ab241d7336ffc8b856a586fb03265d8/29_29_4873_2923/master/4873.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=34e83076227d650e0706c0103338a51a",
            "publishedAt": "2022-11-10T11:28:39Z",
            "content": "FTX, once the second-largest cryptocurrency exchange in the world, is now worthless, according to one of the companys early investors.\r\nIn a note to partners, venture capital firm Sequoia announced i… [+4821 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Aletha Adu Political correspondent",
            "title": "Boris Johnson to be keynote speaker at blockchain conference in Singapore",
            "description": "Former PM will address meeting to discuss global ‘migration to the digital economy’Boris Johnson is to head to Singapore, in the latest of his post-prime ministerial travels, as the keynote speaker at a conference on blockchain.The former prime minister, who …",
            "url": "https://www.theguardian.com/politics/2022/nov/01/boris-johnson-to-be-keynote-speaker-at-blockchain-conference-in-singapore",
            "urlToImage": "https://i.guim.co.uk/img/media/c2c12de47885ba6d35f0d23e75f4c1b7594c4cc6/10_0_587_352/master/587.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4874e67ff2f1a605f2cc7146041b61d",
            "publishedAt": "2022-11-01T19:04:52Z",
            "content": "Boris Johnson is to head to Singapore, in the latest of his post-prime ministerial travels, as the keynote speaker at a conference on blockchain.\r\nThe former prime minister, who pulled out of the rac… [+2493 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hern",
            "title": "Inside the $8bn FTX crypto scandal – and its real-world impact",
            "description": "Sam Bankman-Fried was what everyone wanted a crypto billionaire to be – until things began to go very, very wrong<ul><li>Don’t get TechScape delivered to your inbox? Sign up for the full article here</li></ul>Every week after I finish writing this newsletter,…",
            "url": "https://www.theguardian.com/technology/2022/nov/15/inside-the-8bn-ftx-crypto-scandal-and-its-real-world-impact",
            "urlToImage": "https://i.guim.co.uk/img/media/a35853f23486214cb2395e22fb75f77aaeb0dec7/0_240_5191_3115/master/5191.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=0938e464e67c7074c50352a7a9814c8d",
            "publishedAt": "2022-11-15T11:55:29Z",
            "content": "Every week after I finish writing this newsletter, I think: Next week Ill try not to devote the whole email to a single topic. Some variety is always nice, and there are so many other things to write… [+9646 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hern and Dan Milmo",
            "title": "What do we know so far about collapse of crypto exchange FTX?",
            "description": "How did Sam Bankman-Fried’s FTX fail and what does the firm’s fate tell us about cryptocurrencies?The collapse of FTX, one of the world’s largest cryptocurrency exchanges, has unleashed another bout of volatility in the highly speculative digital asset market…",
            "url": "https://www.theguardian.com/technology/2022/nov/18/how-did-crypto-firm-ftx-collapse",
            "urlToImage": "https://i.guim.co.uk/img/media/77d2d2d6dc96220e47933a57b31c56a0b8f22a44/0_62_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c58b18d7a21389f241a35ab5c6ac17b6",
            "publishedAt": "2022-11-18T18:33:38Z",
            "content": "The collapse of FTX, one of the worlds largest cryptocurrency exchanges, has unleashed another bout of volatility in the highly speculative digital asset market. The fortune of FTXs founder, Sam Bank… [+6877 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Editorial",
            "title": "The Guardian view on Elon Musk’s Twitter takeover: the unfulfilled promises pile up | Editorial",
            "description": "The world’s richest man promises more than he has delivered. His social network purchase is likely to go the same wayElon Musk is a fan of the science fiction writer Isaac Asimov. When his spacecraft company SpaceX successfully sent its Falcon Heavy rocket pa…",
            "url": "https://www.theguardian.com/commentisfree/2022/nov/01/the-guardian-view-on-elon-musk-twitter-takeover-the-unfulfilled-promises-pile-up",
            "urlToImage": "https://i.guim.co.uk/img/media/28da0bf992412a37a74a813ec7f1fb4c2236921d/0_71_2069_1241/master/2069.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=aac9134099ce86265d45714a85f4fff8",
            "publishedAt": "2022-11-01T18:50:19Z",
            "content": "Elon Musk is a fan of the science fiction writer Isaac Asimov. When his spacecraft company SpaceX successfully sent its Falcon Heavy rocket payload into orbit around the sun in 2018, the cargo includ… [+2958 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Dan Milmo Global technology editor",
            "title": "Binance boss says no one can be protected from a ‘bad player’",
            "description": "Changpeng Zhao announces plans for an industry ‘recovery fund’ for struggling crypto firmsThe head of the world’s largest cryptocurrency exchange has said after the collapse of rival FTX that no one can be protected from a “bad player” and announced plans for…",
            "url": "https://www.theguardian.com/technology/2022/nov/14/binance-changpeng-zhao-crypto-firms",
            "urlToImage": "https://i.guim.co.uk/img/media/511bcf2e6789f84bf635121912a4202796cd5c44/0_233_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=72cab0065fabde8a95ac6ecbc16f91bb",
            "publishedAt": "2022-11-14T11:09:51Z",
            "content": "The head of the worlds largest cryptocurrency exchange has said after the collapse of rival FTX that no one can be protected from a bad player and announced plans for an industry recovery fund for st… [+3956 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Susannah Clapp",
            "title": "The week in theatre: Something in the Air; A Dead Body in Taos – reviews",
            "description": "Jermyn Street theatre, London; Wilton’s Music Hall, LondonPeter Gill’s subtle new play finds the power of love in the smallest of details, while David Farr explores strained family bonds in a transhuman futureIn one of the smallest theatres in London, a play …",
            "url": "https://www.theguardian.com/stage/2022/nov/06/the-week-in-theatre-something-in-the-air-a-dead-body-in-taos-reviews",
            "urlToImage": "https://i.guim.co.uk/img/media/fb37379de01f038f406cf1b169bd5167055f31e7/0_136_2048_1229/master/2048.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=f65a3d5cd46508bd4c2d21ef5215a420",
            "publishedAt": "2022-11-06T10:30:16Z",
            "content": "In one of the smallest theatres in London, a play whose main characters do not budge from their chairs slowly unfurls. You might think (at least if you have never heard of Samuel Beckett) that Someth… [+5192 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff",
            "title": "Trevor Noah on attack ads: ‘We don’t accept this in any other job’",
            "description": "Late-night hosts discuss mean-spirited campaign attack ads, Maga voter intimidation and Elon Musk’s proposal to add a video paywall to TwitterTrevor Noah continued his week of live shows in Atlanta on Wednesday evening, and noted the amount of campaign ads he…",
            "url": "https://www.theguardian.com/culture/2022/nov/03/trevor-noah-political-attack-ads-late-night-recap",
            "urlToImage": "https://i.guim.co.uk/img/media/04bdd6328440a0cd5f0e1854943b87ffaf1a7852/104_123_2589_1553/master/2589.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=7cfad6daac19afff7594dd3031bca119",
            "publishedAt": "2022-11-03T15:50:23Z",
            "content": "Trevor Noah\r\nTrevor Noah continued his week of live shows in Atlanta on Wednesday evening, and noted the amount of campaign ads he had seen and heard during his time in Georgia. If you only knew Stac… [+4917 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "David Gerard",
            "title": "Sam Bankman-Fried was hailed as a crypto wonder child. What happened? | David Gerard",
            "description": "Bankman-Fried promoted himself as an eccentric genius. In reality, his image was a distraction from what was going on inside FTXLast Tuesday, FTX, the second-largest cryptocurrency exchange in the world, closed withdrawals, blaming “severe liquidity problems”…",
            "url": "https://www.theguardian.com/commentisfree/2022/nov/15/ftx-cryptocurrency-sam-bankman-fried",
            "urlToImage": "https://i.guim.co.uk/img/media/b19b76e810c153309bba55cdf0d548dfa1bc6ef4/0_313_5149_3090/master/5149.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=073ff285da9d709dbbcedcc8fd97a3fe",
            "publishedAt": "2022-11-15T11:08:01Z",
            "content": "Last Tuesday, FTX, the second-largest cryptocurrency exchange in the world, closed withdrawals, blaming severe liquidity problems. By Friday, FTX had filed for bankruptcy.\r\nAfter a stupendously profi… [+4822 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Arwa Mahdawi",
            "title": "Why were so many smart people so dumb about FTX? Did they seriously just like Sam Bankman-Fried’s ‘vibe’?",
            "description": "The collapse of the cryptocurrency exchange will cost investors billions. But why would anyone give money to a man who plays video games in important meetings?Do you ever get the impression that the entire economy is an elaborate scheme and nobody in charge a…",
            "url": "https://www.theguardian.com/technology/commentisfree/2022/nov/15/why-were-so-many-smart-people-so-dumb-about-ftx-did-they-seriously-just-like-sam-bankman-frieds-vibe-",
            "urlToImage": "https://i.guim.co.uk/img/media/0f49874798210579da9d899af7a9ab75681660b8/0_179_5380_3228/master/5380.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=dc748819e125ba8a1f6614c25201e9e9",
            "publishedAt": "2022-11-15T17:27:22Z",
            "content": "Do you ever get the impression that the entire economy is an elaborate scheme and nobody in charge actually knows what the hell theyre doing? Ive been getting that feeling a lot lately. In just the p… [+3827 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Kenneth Mohammed",
            "title": "Banks are leaving the Caribbean. It’s unfair and will backfire on the west | Kenneth Mohammed",
            "description": "Financial ‘de-risking’ is making life difficult in vulnerable regions and will lead to more corruption and tax evasionMia Mottley, once again, this time at Cop27, chastised the west for being the main culprits in the climate crisis. The Barbados prime ministe…",
            "url": "https://www.theguardian.com/global-development/commentisfree/2022/nov/11/banks-leaving-caribbean-unfair-backfire-on-west",
            "urlToImage": "https://i.guim.co.uk/img/media/9689ea474aadae723582fbc8bc037f66d7983ebb/0_130_5184_3110/master/5184.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=19df442dccdfc78e7ce10e3c373f4422",
            "publishedAt": "2022-11-11T06:30:04Z",
            "content": "Mia Mottley, once again, this time at Cop27, chastised the west for being the main culprits in the climate crisis. The Barbados prime minister said that the Caribbean and Pacific islands, being the m… [+6259 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Alex Hern",
            "title": "How do you slice a billion-dollar crypto bankruptcy pie?",
            "description": "The 50 biggest claims against FTX total $3.1bn. Now a US court has to determine who gets what – if anything. Plus, what will be more valuable by the end of the year: Musk’s stake in Twitter, or a lettuce?<ul><li>Don’t get TechScape delivered to your inbox? Si…",
            "url": "https://www.theguardian.com/technology/2022/nov/22/techscape-ftx-bankruptcy-twitter-elon-musk-value",
            "urlToImage": "https://i.guim.co.uk/img/media/1be2f27880aeeea8a423433e8bd73f36deb6cd32/0_104_4902_2941/master/4902.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f69e20086dbf622b30d84ce12d7ff014",
            "publishedAt": "2022-11-22T11:57:22Z",
            "content": "If you owe the bank a grand and cant repay it, youre in trouble. If you owe the bank a billion and cant repay it, the banks in trouble. If the bank owes you a billion and cant repay it, the systems i… [+8509 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Sarah Lord",
            "title": "DOJ Seizes $3.3B in Stolen Bitcoin Tied to Silk Road Case - CNET",
            "description": "The seizure is related to the 2012 Silk Road dark web fraud investigation.",
            "url": "https://www.cnet.com/personal-finance/crypto/doj-seizes-3-3b-in-stolen-bitcoin-tied-to-silk-road-case/",
            "urlToImage": "https://www.cnet.com/a/img/resize/50d5451562d9c1859215da38f621c64662a4a349/hub/2022/04/27/ae541c87-160d-4df7-994c-8afe67af5781/bitcoin-logo-2022-531.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-11-07T19:01:49Z",
            "content": "The case of a mysterious 2012 bitcoin heist is closed. The Department of Justice on Friday seized $3.36 billion in cryptocurrency from a Georgia man who pleaded guilty to wire fraud, the agency said … [+1498 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CNET"
            },
            "author": "Sean Keane",
            "title": "FTX Files for Bankruptcy in Wake of Binance Halting Acquisition, CEO Resigns - CNET",
            "description": "The second-largest crypto exchange has had a rocky week.",
            "url": "https://www.cnet.com/personal-finance/crypto/ftx-files-for-bankruptcy-in-wake-of-binance-halting-acquisition-ceo-resigns/",
            "urlToImage": "https://www.cnet.com/a/img/resize/0ab550c40191abf2c298777fd9a0942cde844041/hub/2022/11/10/52e67171-02b5-4cda-a730-7cf5a13b5e48/binance-red.jpg?auto=webp&fit=crop&height=630&width=1200",
            "publishedAt": "2022-11-11T15:45:00Z",
            "content": "Beleaguered cryptocurrency platform FTX filed for bankruptcy protection Friday, in the wake of rival Binance backing out of a plan to acquire it. CEO Sam Bankman-Fried resigned from his position, but… [+2627 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "htan@insider.com (Huileng Tan)",
            "title": "Sequoia Capital says it's marking its investment in FTX down to $0 as a liquidity crunch threatens to put the crypto exchange into bankruptcy",
            "description": "Sequoia wrote to its investors after Binance U-turned on acquiring FTX, citing issues \"beyond our control or ability to help.\"",
            "url": "https://www.businessinsider.com/ftx-investment-zero-vc-firm-sequoia-capital-says-binance-2022-11",
            "urlToImage": "https://i.insider.com/636c85b6951bdc00182d715c?width=1200&format=jpeg",
            "publishedAt": "2022-11-10T06:47:11Z",
            "content": "Venture capital giant Sequoia Capital says it's marking down the full value of its investment in FTX to zero dollars, amid uncertainty over the crypto exchange's liquidity crunch.\r\nThe VC firm wrote … [+2758 chars]"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "tmohamed@businessinsider.com (Theron Mohamed)",
            "title": "'Big Short' investor Michael Burry touts gold as a winner from the FTX fiasco - and hints he's betting against the stock market",
            "description": "Burry suggested the cascade of crypto scandals could boost gold's appeal as a haven asset, and teased a bearish wager against stocks.",
            "url": "https://markets.businessinsider.com/news/stocks/big-short-michael-burry-gold-crypto-ftx-stock-market-outlook-2022-11",
            "urlToImage": "https://i.insider.com/6033c77238aa9f00185e02c3?width=1200&format=jpeg",
            "publishedAt": "2022-11-17T11:28:01Z",
            "content": "Michael Burry has trumpeted gold as a likely winner from the crypto meltdown, and hinted he's betting on stocks to tumble.\r\nGolden opportunity\r\n\"Long thought that the time for gold would be when cryp… [+3470 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "The Associated Press",
            "title": "FTX crypto exchange, billions of dollars low and under DOJ scrutiny, seeks bankruptcy",
            "description": "FTX had agreed earlier this week to sell itself to bigger rival Binance after experiencing the cryptocurrency equivalent of a bank run. The Department of Justice and the SEC are investigating.",
            "url": "https://www.npr.org/2022/11/11/1136028292/ftx-crypto-exchange-billions-of-dollars-low-and-under-doj-scrutiny-seeks-bankrup",
            "urlToImage": "https://media.npr.org/assets/img/2022/11/11/ap22313545058654_wide-a6909a9fe3a8ad1569def2eedc9991cb426fbaae-s1400-c100.jpg",
            "publishedAt": "2022-11-11T15:29:26Z",
            "content": "An advertisement for Bitcoin cryptocurrency is displayed on a street Feb. 17 in Hong Kong. Bitcoin slumped to a two-year low Wednesday.\r\nKin Cheung/AP\r\nEmbattled cryptocurrency exchange FTX, short bi… [+1238 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "The Associated Press",
            "title": "The downfall of FTX's Sam Bankman-Fried sends shockwaves through the crypto world",
            "description": "Sam Bankman-Fried received huge plaudits and superstar status as the head of cryptocurrency exchange FTX. Now the comments aren't so kind after FTX filed for bankruptcy protection.",
            "url": "https://www.npr.org/2022/11/14/1136482889/ftx-sam-bankman-fried-shockwaves-crypto",
            "urlToImage": "https://media.npr.org/include/images/facebook-default-wide-s1400-c100.jpg",
            "publishedAt": "2022-11-14T15:54:16Z",
            "content": "NEW YORK Sam Bankman-Fried received numerous plaudits as he rapidly achieved superstar status as the head of cryptocurrency exchange FTX: the savior of crypto, the newest force in Democratic politics… [+5828 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "NPR"
            },
            "author": "David Gura",
            "title": "Wringing its hands over FTX's collapse, Washington hopes to prevent more crypto pain",
            "description": "Congress, which has been unable to pass comprehensive crypto legislation, is digging into what happened as regulators try to police the new, mysterious world of virtual currencies with old laws.",
            "url": "https://www.npr.org/2022/11/22/1137809625/ftx-sam-bankman-fried-crypto-cryptocurrency-bankruptcy-bitcoin",
            "urlToImage": "https://media.npr.org/assets/img/2022/11/18/gettyimages-1357912812-1-_wide-0d8dfd0b78429d469b0c06c30d26544346ab0e42-s1400-c100.jpg",
            "publishedAt": "2022-11-22T10:01:20Z",
            "content": "Sam Bankman-Fried, then FTX's CEO, appeared before the House Financial Services Committee in December 2021. Its chairwoman, Rep. Maxine Waters (D-CA), says she expects him to testify again soon.\r\nAle… [+4453 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Binance Releases Proof-of-Reserves System",
            "description": "Binance has released its proof-of-reserves system, starting with bitcoin, in order to show that the exchange is healthy and solvent. From a report: This comes just weeks after rival exchange FTX collapsed, after seemingly swapping user funds for other, more i…",
            "url": "https://slashdot.org/story/22/11/25/1426252/binance-releases-proof-of-reserves-system",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-11-26T06:01:00Z",
            "content": "I came, I saw, I deleted all your files."
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Harvard Paper To Central Banks: Buy Bitcoin",
            "description": "A new working paper by Matthew Ferranti -- a fifth-year PhD candidate in Harvard's economics department and advisee of Ken Rogoff, a former economist at the IMF and the Federal Reserve Board of Governors who is now a Harvard professor -- has caused a minor sp…",
            "url": "https://news.slashdot.org/story/22/11/24/1026238/harvard-paper-to-central-banks-buy-bitcoin",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-11-24T14:00:00Z",
            "content": "In it, Ferranti argues that it makes sense for many central banks to hold a small amount of Bitcoin under normal circumstances, and much more Bitcoin if they face sanctions risks, though his analysis… [+2188 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "First Bitcoin ETF Loses Record Amount In Its Initial Year",
            "description": "One year after its record-breaking launch, the world's first exchange traded fund tracking the price of bitcoin has lost more of investors' dollars than any other ETF debut. The Financial Times reports: Asset manager ProShares launched its Bitcoin Strategy fu…",
            "url": "https://slashdot.org/story/22/10/26/2229259/first-bitcoin-etf-loses-record-amount-in-its-initial-year",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-10-27T00:45:00Z",
            "content": "Asset manager ProShares launched its Bitcoin Strategy fund in October 2021, and it immediately became the most successful new ETF in history, amassing more than $1bn in its first week of trading on t… [+1275 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "More Than 50% of Bitcoin Addresses Are Now In Loss",
            "description": "Most addresses holding bitcoin (BTC), the largest cryptocurrency, are now in the red, the first time that's happened since the start of the coronavirus-induced crash of March 2020. CoinDesk reports: Just over 51%, or 24.6 million addresses of the total 47.9 m…",
            "url": "https://slashdot.org/story/22/11/21/232218/more-than-50-of-bitcoin-addresses-are-now-in-loss",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-11-22T01:25:00Z",
            "content": "Just over 51%, or 24.6 million addresses of the total 47.9 million, are below purchase price on their investments, according to data provided by blockchain analytics firm IntoTheBlock. About 45% are … [+601 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Hong Kong Plans To Legalize Retail Crypto Trading To Become Hub",
            "description": "An anonymous reader quotes a report from Bloomberg: Hong Kong is pivoting toward a friendlier regulatory regime for cryptocurrencies with a plan to legalize retail trading, contrasting with the city's skeptical stance of recent years and the ban in place in m…",
            "url": "https://slashdot.org/story/22/10/28/2112220/hong-kong-plans-to-legalize-retail-crypto-trading-to-become-hub",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-10-29T00:02:00Z",
            "content": "Hong Kong is pivoting toward a friendlier regulatory regime for cryptocurrencies with a plan to legalize retail trading, contrasting with the city's skeptical stance of recent years and the ban in pl… [+1074 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "msmash",
            "title": "Andreessen Horowitz Went All In on Crypto at the Worst Possible Time",
            "description": "As cryptocurrency prices soared last year, no investor bet more on the sector than Andreessen Horowitz. The timing wasn't good. From a report: The storied venture-capital firm had developed a reputation as Silicon Valley's greatest crypto bull, thanks largely…",
            "url": "https://news.slashdot.org/story/22/10/26/125230/andreessen-horowitz-went-all-in-on-crypto-at-the-worst-possible-time",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2022-10-26T14:40:00Z",
            "content": "The storied venture-capital firm had developed a reputation as Silicon Valley's greatest crypto bull, thanks largely to a 50-year-old partner named Chris Dixon who was one of the earliest evangelists… [+1030 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Binance's CZ Slams Reports Binance's Reserves Are Full of Its Own Tokens",
            "description": "An anonymous reader quotes a report from Benzinga: Binance CEO Changpeng Zhao on Friday came down heavily on a report the cryptocurrency exchange holds $74.6 billion in tokens, out of which nearly 40% are its own stablecoin BUSD and native coin BNB. Sharing d…",
            "url": "https://slashdot.org/story/22/11/11/2122223/binances-cz-slams-reports-binances-reserves-are-full-of-its-own-tokens",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-11-12T00:02:00Z",
            "content": "CZ was at a conference in Indonesia where he said the industry must look to regulation [cnn.com] and acknowledged it is currently facing a 2008 scenario. “We’ve just seen another very big player goin… [+1177 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Crypto.com Preliminary Audit Shows 20% of Its Assets Are In Shiba Inu Coin",
            "description": "An anonymous reader quotes a report from CoinDesk: The swift collapse of the FTX crypto exchange has sparked an industry push among big rivals to publish proof of their reserves as a means to provide transparency into the assets on their platforms. With those…",
            "url": "https://slashdot.org/story/22/11/11/2247234/cryptocom-preliminary-audit-shows-20-of-its-assets-are-in-shiba-inu-coin",
            "urlToImage": "https://a.fsdn.com/sd/topics/bitcoin_64.png",
            "publishedAt": "2022-11-12T13:00:00Z",
            "content": "An anonymous reader quotes a report from CoinDesk: The swift collapse of the FTX crypto exchange has sparked an industry push among big rivals to publish proof of their reserves as a means to provide… [+1836 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Slashdot.org"
            },
            "author": "BeauHD",
            "title": "Binance Walks Away From Deal To Acquire FTX",
            "description": "According to CoinDesk, Binance has walked away from a deal to acquire FTX. From the report: \"As a result of corporate due diligence, as well as the latest news reports regarding mishandled customer funds and alleged U.S. agency investigations, we have decided…",
            "url": "https://slashdot.org/story/22/11/09/234222/binance-walks-away-from-deal-to-acquire-ftx",
            "urlToImage": "https://a.fsdn.com/sd/topics/business_64.png",
            "publishedAt": "2022-11-09T23:05:00Z",
            "content": "You perform due diligence before submitting a firm offer for the company!! This would have saved so many problems!\r\n(No, I will not pay the $8 XD )"
        },
        {
            "source": {
                "id": "business-insider",
                "name": "Business Insider"
            },
            "author": "ztayeb@businessinsider.com (Zahra Tayeb)",
            "title": "Bitcoin and other cryptos spiral lower as worries about the fallout from FTX's troubles grow",
            "description": "Bitcoin and other cryptos extended losses Wednesday as worries about FTX-Binance turmoil spreading to other players spooked investors.",
            "url": "https://markets.businessinsider.com/news/currencies/crypto-prices-bitcoin-binance-ftx-takeover-liquidity-issues-2022-11",
            "urlToImage": "https://i.insider.com/628e15263dbbd20018b71e03?width=1200&format=jpeg",
            "publishedAt": "2022-11-09T11:58:54Z",
            "content": "Bitcoin and other cryptocurrencies extended their losses Wednesday as worries built that the FTX troubles that led to Binance's bailout could spread to other big digital-asset players.\r\nIn a stunning… [+1690 chars]"
        }
    ]
}
const tesla={
    "status": "ok",
    "totalResults": 11229,
    "articles": [
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Tesla recalls over 80,000 cars in China due to software and seat belt flaws",
            "description": "Tesla is having a particularly lousy week. The Wall Street Journalreports the EV manufacturer has recalled a total of 80,561 cars in China over software and seat belt problems. Battery management glitches affecting 67,698 Model S and Model X vehicles could le…",
            "url": "https://www.engadget.com/tesla-recall-china-model-s-x-3-153644099.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/6ea2f270-3af3-11ed-bcdf-db0ea3a4bd82",
            "publishedAt": "2022-11-25T15:36:44Z",
            "content": "Tesla is having a particularly lousy week. The Wall Street Journalreports the EV manufacturer has recalled a total of 80,561 cars in China over software and seat belt problems. Battery management gli… [+1394 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Tesla's FSD driver assist beta is now available to anyone who wants to pay",
            "description": "After gradually expanding access to its so-called full self-driving (FSD) beta for the last few years, Tesla is opening it up to anyone who has paid for it, Elon Musk announced in a tweet. \"Tesla Full Self-Driving Beta is now available to anyone in North Amer…",
            "url": "https://www.engadget.com/tesla-fsd-driver-assist-available-to-all-drivers-114916660.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-10/6c395900-3556-11ec-b7fd-4efdb713370a",
            "publishedAt": "2022-11-24T11:49:16Z",
            "content": "After gradually expanding access to its so-called full self-driving (FSD) beta for the last few years, Tesla is opening it up to anyone who has paid for it, Elon Musk announced in a tweet. \"Tesla Ful… [+1830 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "DOJ reportedly investigating Tesla’s Autopilot self-driving claims after crashes",
            "description": "The Department of Justice is reportedly investigating whether Tesla has misled customers and investors by claiming that its Autopilot technology enables full-fledged self-driving capabilities. According to Reuters, the DOJ launched the probe last year followi…",
            "url": "https://www.engadget.com/doj-investigating-tesla-autopilot-self-driving-claims-113038198.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/63779510-55e0-11ed-bfe1-18d97e45c86d",
            "publishedAt": "2022-10-27T11:30:38Z",
            "content": "The Department of Justice is reportedly investigating whether Tesla has misled customers and investors by claiming that its Autopilot technology enables full-fledged self-driving capabilities. Accord… [+2075 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Tesla recalls 30,000 Model X cars due to faulty airbag behavior",
            "description": "Tesla has issued a recall for 29,348 Model X vehicles, because their airbag might deploy incorrectly in some situations. This recall affects 2021 to 2023 Model X cars manufactured for customers in the US. According to the recall notice (PDF) published by the …",
            "url": "https://www.engadget.com/tesla-recalls-30000-model-x-cars-faulty-airbag-behavior-150757761.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ce7232c0-6801-11ed-9ff0-7e7af706c84a",
            "publishedAt": "2022-11-19T15:07:57Z",
            "content": "Tesla has issued a recall for 29,348 Model X vehicles, because their airbag might deploy incorrectly in some situations. This recall affects 2021 to 2023 Model X cars manufactured for customers in th… [+1438 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "GM suspends advertising on Twitter to evaluate its direction under Elon Musk",
            "description": "General Motors has temporarily stopped paying for advertisements on Twitter after Elon Musk closed the $44 billion deal to take over the website, according to the CNBC. Musk, as you know, is also the chief executive at Tesla, which overtook GM and all its com…",
            "url": "https://www.engadget.com/gm-suspends-advertising-on-twitter-090026887.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/b58ec0c0-575d-11ed-bed9-35052323f833",
            "publishedAt": "2022-10-29T09:00:26Z",
            "content": "General Motors has temporarily stopped paying for advertisements on Twitter after Elon Musk closed the $44 billion deal to take over the website, according to the CNBC. Musk, as you know, is also the… [+1660 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Elon Musk says Twitter will form a 'moderation council' before it reinstates banned accounts",
            "description": "Twitter isn't about to rush into big content policy changes now that Elon Musk owns the company. Musk has announced that the social network will form a moderation council with members holding \"widely diverse viewpoints.\" There won't be any \"major\" content dec…",
            "url": "https://www.engadget.com/twitter-moderation-council-elon-musk-193142274.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/eaee4b80-56dd-11ed-bd4b-da79fe00494f",
            "publishedAt": "2022-10-28T19:31:42Z",
            "content": "Twitter isn't about to rush into big content policy changes now that Elon Musk owns the company. Musk has announced that the social network will form a moderation council with members holding \"widely… [+1945 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Karissa Bell",
            "title": "Joe Biden says Elon Musk’s ‘relationships’ with other countries should be ‘looked at’",
            "description": "President Joe Biden says that Elon Musk’s dealings with countries outside of the United States are “worthy of being looked at.” Speaking to reporters, Biden didn’t elaborate on if some kind of of investigation was underway, but suggested the Tesla and Twitter…",
            "url": "https://www.engadget.com/joe-biden-elon-musk-relationships-to-other-countries-looked-at-234044046.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/bed86410-6086-11ed-bead-ae7a52706016",
            "publishedAt": "2022-11-09T23:40:44Z",
            "content": "President Joe Biden says that Elon Musks dealings with countries outside of the United States are worthy of being looked at. Speaking to reporters, Biden didnt elaborate on if some kind of of investi… [+1501 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "SpaceX gears up for Falcon Heavy's first flight since 2019 with a static fire test",
            "description": "SpaceX is on track to launch the Falcon Heavy for the first time in three years after it successfully put the heavy-lift launch vehicle through a static fire test. The private space corporation has announced the test's successful completion on Twitter, along …",
            "url": "https://www.engadget.com/spacex-falcon-heavy-static-fire-test-space-force-mission-065827642.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/f6c94740-5672-11ed-bccb-27fab16d776c",
            "publishedAt": "2022-10-28T07:48:27Z",
            "content": "SpaceX is on track to launch the Falcon Heavy for the first time in three years after it successfully put the heavy-lift launch vehicle through a static fire test. The private space corporation has a… [+1530 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Elon Musk considers making verification a Twitter Blue perk",
            "description": "With Elon Musk in charge, Twitter is planning to boost the price of its Blue subscription plan from $5 to $20 per month and make it mandatory for verified users, according to Platformer's Casey Newton and The Verge. If it launches the plan, verified users (ce…",
            "url": "https://www.engadget.com/elon-musk-considers-making-verification-a-twitter-blue-perk-051906957.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/eaee4b80-56dd-11ed-bd4b-da79fe00494f",
            "publishedAt": "2022-10-31T05:19:06Z",
            "content": "With Elon Musk in charge, Twitter is planning to boost the price of its Blue subscription plan from $5 to $20 per month and make it mandatory for verified users, according to Platformer's Casey Newto… [+1738 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Twitter is reportedly failing to pay some suppliers amidst cost-cutting measures",
            "description": "Elon Musk is refusing to pay hundreds of thousands of dollars in travel bills accumulated by Twitter employees before he took over the company, The New York Times has reported. The company is on a drastic cost-cutting campaign and Musk has reportedly issued o…",
            "url": "https://www.engadget.com/twitter-is-reportedly-failing-to-pay-some-bills-amidst-cost-cutting-measures-123507995.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/93285890-6b1a-11ed-bb7e-0e329ffc063b",
            "publishedAt": "2022-11-23T12:35:07Z",
            "content": "Elon Musk is refusing to pay hundreds of thousands of dollars in travel bills accumulated by Twitter employees before he took over the company, The New York Times has reported. The company is on a dr… [+1538 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Steven Levy",
            "title": "Good Luck Getting Elon Musk to Stop Tweeting",
            "description": "Twitter’s billionaire new owner is seemingly addicted to his own platform, firing off updates that endanger his own turnaround plan.",
            "url": "https://www.wired.com/story/plaintext-good-luck-getting-elon-musk-to-stop-tweeting/",
            "urlToImage": "https://media.wired.com/photos/6376d35240faa865b10965a7/191:100/w_1280,c_limit/elon-tweets-graphick6.jpg",
            "publishedAt": "2022-11-18T14:00:00Z",
            "content": "Why do it? When I wrote about Musks tweeting earlier this year, I leaned toward the idea that Twitter itself had led him into this 280-character recklessness. I described Twitter as a superhighway fr… [+3169 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Will Knight",
            "title": "Elon Musk Is Overloaded",
            "description": "Twitter’s new CEO also leads Tesla, SpaceX, and startups working on tunnel digging and brain implants. His social media project will make it harder to juggle them all.",
            "url": "https://www.wired.com/story/twitter-elon-musk-is-overloaded/",
            "urlToImage": "https://media.wired.com/photos/6365775e6776a0176c76e4d7/191:100/w_1280,c_limit/Elon-Musk-Has-Alot-On-His-Plate-Business-1238366977.jpg",
            "publishedAt": "2022-11-07T12:00:00Z",
            "content": "Operating in China could get more difficult for Musk if the countrys leaders dislike how he operates Twitter. Government news sources there have complained that the platform labels its staff on the p… [+2803 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Boone Ashworth",
            "title": "The Prius Gets a Redesign That Actually Looks Cool",
            "description": "Plus: You can now play games in Microsoft Teams, Leica debuts a new smartphone, and Netflix closes the net on account sharing.",
            "url": "https://www.wired.com/story/toyota-prius-gets-a-redesign/",
            "urlToImage": "https://media.wired.com/photos/637822a3e9158002679f743f/191:100/w_1280,c_limit/Prius-2023-H-1-Gear.jpg",
            "publishedAt": "2022-11-19T14:00:00Z",
            "content": "Toyotas got a sleek and shiny new Prius, and the auto press seems to agree: This one looks pretty cool. Previous Prius models have long been seen as, uhh, less than cool, with their awkwardly boxy te… [+4559 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "George Hotz, iPhone hacker and Elon Musk antagonist, is leaving Comma AI",
            "description": "George Hotz is stepping down as CEO of Comma AI, a company he founded to build a driver-assist product that’s better than Tesla Autopilot.",
            "url": "https://www.theverge.com/2022/10/31/23433110/george-hotz-comma-ai-step-down-driver-assist",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/aQwYCF4fcRvaXNuSPShiUrWRjuE=/0x0:1500x1000/1200x628/filters:focal(750x500:751x501)/cdn.vox-cdn.com/uploads/chorus_asset/file/6599947/mzelenko_230516_1078_0037.0.jpg",
            "publishedAt": "2022-10-31T17:44:25Z",
            "content": "George Hotz, iPhone hacker and Elon Musk antagonist, is leaving Comma AI\r\nGeorge Hotz, iPhone hacker and Elon Musk antagonist, is leaving Comma AI\r\n / Hotz founded the driver-assist technology compan… [+3291 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Mitchell Clark",
            "title": "The Tesla Cyberquad for kids has been recalled for not meeting safety standards",
            "description": "Radio Flyer is issuing a recall of the Tesla Cyberquad ATV for kids, a $1,900 vehicle sold on the automaker’s website. It doesn’t meet federal safety regulations.",
            "url": "https://www.theverge.com/2022/10/27/23426752/tesla-cyberquad-toy-atv-recall-radio-flyer",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/M4HCsLTsXSeYyQkPh5OcGFbguWQ=/0x0:1200x800/1200x628/filters:focal(681x395:682x396)/cdn.vox-cdn.com/uploads/chorus_asset/file/24145819/WFLnzpB.jpg",
            "publishedAt": "2022-10-27T16:57:38Z",
            "content": "The Tesla Cyberquad for kids has been recalled for not meeting safety standards\r\nThe Tesla Cyberquad for kids has been recalled for not meeting safety standards\r\n / The electric vehicle, modeled afte… [+2047 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "Ford thinks driver assist is a safer bet than driverless cars, but it’s fooling itself",
            "description": "Ford said it would stop funding driverless startup Argo AI in favor of developing Level 2 and Level 3 driver-assist technology in-house. But that might actually be a riskier — and more dangerous — pursuit.",
            "url": "https://www.theverge.com/2022/10/27/23426449/ford-argo-ai-driver-assist-level-2-level-3-danger-risk",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/EvwN7LUC5pJpuK4-rhy2lWHWeXo=/0x0:6720x4480/1200x628/filters:focal(3360x2240:3361x2241)/cdn.vox-cdn.com/uploads/chorus_asset/file/24004952/Next_Gen_BlueCruise.jpg",
            "publishedAt": "2022-10-27T15:54:00Z",
            "content": "Ford thinks driver assist is a safer bet than driverless cars, but its fooling itself\r\nFord thinks driver assist is a safer bet than driverless cars, but its fooling itself\r\n / The automaker pulled s… [+6766 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Justine Calma",
            "title": "Fired SpaceX employees file charges with National Labor Relations Board",
            "description": "SpaceX fired employees involved in writing a letter critical of Elon Musk and asking the company to craft stronger protections against sexual harassment. Several of the former employees have now filed charges, saying they were fired illegally.",
            "url": "https://www.theverge.com/2022/11/17/23464180/spacex-employees-fired-elon-musk-charges-national-labor-relations-board",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/8-TGtxG2vwa7Hkt1p7xV7McEwbo=/0x0:4089x2727/1200x628/filters:focal(2045x1364:2046x1365)/cdn.vox-cdn.com/uploads/chorus_asset/file/24205786/1242718802.jpg",
            "publishedAt": "2022-11-17T17:59:23Z",
            "content": "Fired SpaceX employees file charges with National Labor Relations Board\r\nFired SpaceX employees file charges with National Labor Relations Board\r\n / The employees say SpaceX retaliated against them f… [+4752 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Andrew J. Hawkins",
            "title": "Elon Musk’s first Hyperloop tunnel in California is gone",
            "description": "Elon Musk’s Hyperloop tube near SpaceX headquarters in California has been removed and replaced with parking spots. The tube hosted student competitions in 2018 and 2019.",
            "url": "https://www.theverge.com/2022/11/3/23438755/elon-musk-hyperloop-tunnel-spacex-remove-parking-lot",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/F8YbMDDXeP756ydio6lma5S0M-8=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/19086661/pacalin_190721_3581_0003.jpg",
            "publishedAt": "2022-11-03T16:55:25Z",
            "content": "Elon Musks first Hyperloop tunnel in California is gone\r\nElon Musks first Hyperloop tunnel in California is gone\r\n / The test tunnel that hosted student competitions in 2018 and 2019 has been removed… [+2439 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "James Vincent",
            "title": "Twitter is being sued by former employees for Elon Musk’s mass firing",
            "description": "Twitter is being sued by former employees for alleged violation of the federal WARN Act. The act requires companies to give employees at least 60 days’ notice during a mass firing.",
            "url": "https://www.theverge.com/2022/11/4/23440304/twitter-mass-firing-class-action-lawsuit-violation-federal-warn-act-notice",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/jLONKVfMFnpvTKw2ST_DC3Uq40g=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951429/acastro_STK050_03.jpg",
            "publishedAt": "2022-11-04T13:35:18Z",
            "content": "Illustration by Alex Castro / The Verge\r\n\n \n\n Twitter is being sued in a class-action lawsuit filed by former employees laid off as part of a mass firing instigated by the company’s new owner, Elon M… [+1887 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Elizabeth Lopatto",
            "title": "Twitter is now an Elon Musk company",
            "description": "Elon Musk’s $44 billion acquisition of Twitter is complete, the company has confirmed. Former CEO Parag Agrawal, along with CFO Ned Segal and policy chief Vijaya Gadde have reportedly been fired.",
            "url": "https://www.theverge.com/2022/10/27/23184519/elon-musk-twitter-acquisition-deal-complete-agreement",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/88fSb8bd5QmZ-mQtl0AGjH_DM8A=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24090219/STK171_VRG_Illo_13_Normand_ElonMusk_13.jpg",
            "publishedAt": "2022-10-28T00:54:00Z",
            "content": "Twitter is now an Elon Musk company\r\nTwitter is now an Elon Musk company\r\n / Twitters current CEO, CFO, and policy chief have left the building.\r\nElon Musk, Twitters most important shitposter, has of… [+3694 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Casey Newton",
            "title": "How weak leadership cratered Twitter’s morale",
            "description": "As Elon Musk takes control of Twitter, he’ll inherit a company suffering a morale crisis, as shown in internal surveys from 2019 to 2022.",
            "url": "https://www.theverge.com/2022/10/28/23428103/twitter-morale-weak-leadership-elon-musk-parag-agrawal",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/2hKyPyHYth1o-C3Dlk_alBZRzhs=/0x0:3000x2000/1200x628/filters:focal(1500x1000:1501x1001)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951434/acastro_STK050_08.jpg",
            "publishedAt": "2022-10-28T12:40:00Z",
            "content": "Alex Castro / The Verge\r\n\n \n\n\n Internal surveys from 2019 to 2022 show that the company’s morale crisis predates Elon Musk Just over six months from the day Elon Musk announced his intention to buy T… [+10138 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "Musk Said He Plans to Reduce His Time at Twitter as He Defends His $56 Billion Tesla Payment Deal",
            "description": "Elon Musk, the owner of Tesla, SpaceX, Boring Company, Neuralink, and now Twitter, is a very busy man, or so he claims. He’s so busy, it’s hard to believe he can actually keep on top of everything going on at every one of his companies. That time management q…",
            "url": "https://gizmodo.com/elon-musk-tesla-twitter-lawsuit-1849791653",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/c72fdf15b8fe207423154b700a5f6d35.jpg",
            "publishedAt": "2022-11-16T20:10:00Z",
            "content": "Elon Musk, the owner of Tesla, SpaceX, Boring Company, Neuralink, and now Twitter, is a very busy man, or so he claims. Hes so busy, its hard to believe he can actually keep on top of everything goin… [+4210 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Dell Cameron",
            "title": "Elon Is Re-Verifying Neo-Nazis and Selling Blue Checks to Transphobes and QAnoners",
            "description": "A hodgepodge of Twitter’s worst individuals were sporting shiny blue check marks on Friday, including notorious punching bag and literal neo-Nazi Richard Spencer, thanks to the ill-conceived money grab of the platform’s new owner, Elon Musk.Read more...",
            "url": "https://gizmodo.com/elon-musk-twitter-verify-richard-spencer-jason-kessler-1849773076",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b9f0a20b53f663e9c581b8ee9440f9a2.jpg",
            "publishedAt": "2022-11-11T17:20:00Z",
            "content": "A hodgepodge of Twitters worst individuals were sporting shiny blue check marks on Friday, including notorious punching bag and literal neo-Nazi Richard Spencer, thanks to the ill-conceived money gra… [+4343 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matt Novak",
            "title": "Elon Musk Tells Twitter Engineers to Look at Resurrecting Vine Video App",
            "description": "Elon Musk, the billionaire who recently took Twitter private with a $44 billion acquisition, has told engineers at the social media company to look at resurrecting Vine, the video app purchased by Twitter in 2012 and shuttered just four years later, according…",
            "url": "https://gizmodo.com/elon-musk-twitter-engineers-resurrecting-vine-video-app-1849726638",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/44b073016fd2cb3d4081a8fc21beaeb5.jpg",
            "publishedAt": "2022-11-01T10:00:00Z",
            "content": "Elon Musk, the billionaire who recently took Twitter private with a $44 billion acquisition, has told engineers at the social media company to look at resurrecting Vine, the video app purchased by Tw… [+1885 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Jody Serrano",
            "title": "All the Execs That Have Quit Elon’s Twitter (So Far)",
            "description": "Twitter’s new owner Elon Musk has essentially set the company on fire—and critical employees are running as fast as they can to escape the flames.Read more...",
            "url": "https://gizmodo.com/elon-musk-twitter-executives-quit-list-1849771927",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b8d854573b86aa2a1b9d9dcf48f57d01.jpg",
            "publishedAt": "2022-11-12T15:00:00Z",
            "content": "Twitters new owner Elon Musk has essentially set the company on fireand critical employees are running as fast as they can to escape the flames.\r\nThe company lost five high-level execs on Thursday, i… [+1181 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Thomas Germain",
            "title": "The 11 Wildest Moments from Elon's First Week at Twitter",
            "description": "Just before midnight last Thursday, Elon Musk tweeted “the bird is freed.” The message confirmed once and for all that he’d finally, officially, really, actually purchased Twitter. It marked the end of a long saga during which Musk spent months trying to wrig…",
            "url": "https://gizmodo.com/elon-musk-twitter-takeover-11-wildest-moments-1849739905",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0adc5e65ff608ed8ce5ed75c1d4a3b82.jpg",
            "publishedAt": "2022-11-04T11:04:00Z",
            "content": "Just before midnight last Thursday, Elon Musk tweeted the bird is freed. The message confirmed once and for all that hed finally, officially, really, actually purchased Twitter. It marked the end of … [+962 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lauren Leffer",
            "title": "Elon Musk Says Twitter Won't Become a 'Hellscape,' as Stock Trading Freezes Ahead of Deal",
            "description": "Everyone’s favorite insufferable billionaire is here to reassure the internet. Under his (pending) leadership, Twitter will not became a “free-for-all hellscape,” Elon Musk said in a tweet composed of screenshots on Thursday. What he’s seemingly forgotten, ho…",
            "url": "https://gizmodo.com/elon-musk-twitter-stocks-advertisers-1849709610",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/72d45bbedf692941b8b6be2ee39687f9.jpg",
            "publishedAt": "2022-10-27T17:40:00Z",
            "content": "Everyones favorite insufferable billionaire is here to reassure the internet. Under his (pending) leadership, Twitter will not became a free-for-all hellscape, Elon Musk said in a tweet composed of s… [+2843 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Thomas Germain",
            "title": "General Motors, Pfizer, United Airlines: Here Are All the Big Advertisers That Have Left Twitter Since Elon Took Over",
            "description": "Major advertisers have fled Twitter since Elon Musk took over the platform a little over a week ago admidst concerns about a rise in misinformation, hate speech, and other distasteful content under his watch. Musk’s company-wide layoffs cut major portions of …",
            "url": "https://gizmodo.com/elon-musk-twitter-list-of-advertisers-leaving-1849751644",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/0429ed80077970504921d12fc6fa6849.jpg",
            "publishedAt": "2022-11-07T19:32:00Z",
            "content": "Major advertisers have fled Twitter since Elon Musk took over the platform a little over a week ago admidst concerns about a rise in misinformation, hate speech, and other distasteful content under h… [+2371 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lauren Leffer",
            "title": "SpaceX Buys Ads on Twitter",
            "description": "SpaceX, Elon Musk’s rocket company, has bought a bevy of advertisements on Twitter, Elon Musk’s social media platform. The ad campaign purchase, first reported by CNBC, comes amid other advertisers fleeing Twitter during the billionaire’s thus-far chaotic sti…",
            "url": "https://gizmodo.com/spacex-twitter-ads-elon-musk-1849779141",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/27d9ab7ab2c9ea04de789e3899350d36.jpg",
            "publishedAt": "2022-11-14T16:00:00Z",
            "content": "SpaceX, Elon Musks rocket company, has bought a bevy of advertisements on Twitter, Elon Musks social media platform. The ad campaign purchase, first reported by CNBC, comes amid other advertisers fle… [+2254 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Kevin Hurler",
            "title": "Musk's California Hyperloop Prototype Will Become a Parking Lot",
            "description": "Elon Musk’s hyperloop—the sci-fi-esque subway of the future that definitely will not flood—is apparently hitting a speed bump. The Hyperloop’s inaugural tunnel, a prototype built in Hawthorne, California, has been torn down and will be replaced with parking s…",
            "url": "https://gizmodo.com/elon-musk-spacex-hyperloop-texas-boring-company-1849736888",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ed9238ed05b83b32274134094a4df1ab.jpg",
            "publishedAt": "2022-11-03T15:05:00Z",
            "content": "Elon Muskshyperloopthe sci-fi-esque subway of the future that definitely will not floodis apparently hitting a speed bump. The Hyperloops inaugural tunnel, a prototype built in Hawthorne, California,… [+2132 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Kyle Barr",
            "title": "What We Know About the Financiers Who Helped Create This Twitter Mess",
            "description": "While Elon Musk’s massive $44 billion buyout of Twitter might seem like a one-man show, it’s really a kind of Suicide Squad of big tech moguls and financiers coming together in a strange rogue’s gallery reunion. Not only were Musk’s personal rich friends in t…",
            "url": "https://gizmodo.com/twitter-elon-musk-finance-1849744679",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/77490b502fb14a50ef65f5fc68e8f4de.jpg",
            "publishedAt": "2022-11-05T15:00:00Z",
            "content": "While Elon Musks massive $44 billion buyout of Twitter might seem like a one-man show, its really a kind of Suicide Squad of big tech moguls and financiers coming together in a strange rogues gallery… [+3418 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lauren Leffer",
            "title": "A Warning to Twitter Verified Users: Don't Take the Bait",
            "description": "There are approximately one million pieces of Twitter news circulating this week. If you’re a user of the site, it could be hard to keep tabs on what’s happening behind the scenes amid Elon Musk’s chaotic takeover.Read more...",
            "url": "https://gizmodo.com/twitter-phishing-verified-users-elon-musk-1849742603",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/338e41d3645108556a3ae62ad6fa4278.jpg",
            "publishedAt": "2022-11-04T16:00:00Z",
            "content": "There are approximately one million pieces of Twitter news circulating this week. If youre a user of the site, it could be hard to keep tabs on whats happening behind the scenes amid Elon Musks chaot… [+3574 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Lauren Leffer",
            "title": "Elon Musk Says Twitter Shadowbans Are the New Law of the Land",
            "description": "Things are really going off the rails at Twitter, as Elon Musk pushes forward in a hostile takeover that seems liable to ensure he’s eventually the only one left at the social media platform. In the latest set of deeply confusing declarations from the multi-C…",
            "url": "https://gizmodo.com/twitter-elon-musk-shadowbans-freedom-friday-1849802917",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/669dc4c94c3c9cc229c71af084f69ee4.jpg",
            "publishedAt": "2022-11-18T22:30:00Z",
            "content": "Things are really going off the rails at Twitter, as Elon Musk pushes forward in a hostile takeover that seems liable to ensure hes eventually the only one left at the social media platform. In the l… [+2897 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Gizmodo.com"
            },
            "author": "Matthew James Seidel",
            "title": "What Silicon Valley Gets Wrong About the Future of Transportation",
            "description": "In \"Road to Nowhere,\" Paris Marx argues for a people-oriented framework for the future of transportation that prioritizes the welfare of the public.",
            "url": "https://gizmodo.com/silicon-valley-wrong-future-transportation-paris-marx-1849815463",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/fc10dd6975a222d25b5efbfeee5ae048.png",
            "publishedAt": "2022-11-25T13:40:00Z",
            "content": "This article originally appeared in Protean Magazine, a leftist print magazine of critique, fiction, poetry, and art. \r\nNothing quite captures the enormous chasm between capitalist promises about the… [+19566 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Elon Musk sells almost $4bn of Tesla shares",
            "description": "It comes less than two weeks after the world's richest man completed his $44bn takeover of Twitter.",
            "url": "https://www.bbc.co.uk/news/business-63564694",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/BE56/production/_127562784_0d6abb2f6582f855f76e16f6049d4795f9d322e2.jpg",
            "publishedAt": "2022-11-09T02:22:22Z",
            "content": "Tesla boss Elon Musk has sold another 19.5 million shares of the electric car maker worth $3.95bn (£3.4bn), filings with the US financial watchdog show.\r\nThe news comes less than two weeks after the … [+1486 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Elon Musk: How the world's richest person bought Twitter",
            "description": "One of the most publicised and frenetic deals in Silicon Valley history has reportedly been completed.",
            "url": "https://www.bbc.co.uk/news/technology-63408534",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10427/production/_127399566_whatsubject.jpg",
            "publishedAt": "2022-10-28T01:41:31Z",
            "content": "It was a cool evening in late March in San Jose. \r\nA hastily organised meeting had been arranged at an Airbnb to host the world's richest person. \r\nThe meeting was a big one for Twitter. Elon Musk ha… [+5553 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Matt McFarland",
            "title": "Rivian owners can't help but gush about their trucks, flaws and all",
            "description": "Denis Wang says he always hated the car-buying process — until he met Rivian.",
            "url": "https://www.cnn.com/2022/10/27/business/rivian-owners-r1t/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221026172349-01-rivian-050922.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-27T14:08:39Z",
            "content": "Denis Wang says he always hated the car-buying process until he met Rivian. \r\nBuying the automakers R1T electric pickup was so wonderful that he says he drove 45 minutes to Rivians Irvine, California… [+8162 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Brian Fung",
            "title": "Bezos' tips on managing economic downturn",
            "description": "Amazon founder Jeff Bezos recently warned consumers and businesses they should consider postponing large purchases in the coming months as the global economy contends with a downturn and faces a possible recession.",
            "url": "https://www.cnn.com/2022/11/14/economy/jeff-bezos-economy/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221114110853-bezos-cnn-111322.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-14T18:00:30Z",
            "content": "Amazon founder Jeff Bezos recently warned consumers and businesses they should consider postponing large purchases in the coming months as the global economy contends with a downturn and faces a poss… [+3178 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Oliver Darcy, Donie O'Sullivan",
            "title": "Twitter's new owner tweets conspiracy theory about attack on Paul Pelosi",
            "description": "Elon Musk on Sunday gave credence to a fringe conspiracy theory about the violent attack on Paul Pelosi.",
            "url": "https://www.cnn.com/2022/10/30/business/musk-tweet-pelosi-conspiracy/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221027093149-elon-musk-0927-file.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-10-30T18:54:05Z",
            "content": "Elon Musk on Sunday gave credence to a fringe conspiracy theory about the violent attack on Paul Pelosi.\r\nThe new Twitter owner tweeted a link to an article full of baseless claims about Pelosi. The … [+2344 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Peter Valdes-Dapena",
            "title": "Rivian's founder had an early advantage with his electric truck. Now rivals GM and Ford are closing in",
            "description": "Rivian CEO Robert Joseph Scaringe, better known as RJ, is living his lifelong dream. Getting here though has required dedication to a vision that once seemed nearly impossible. Even now, as the company's assembly lines have started churning out its electric v…",
            "url": "https://www.cnn.com/2022/11/22/cars/risk-takers-rj-scaringe-rivian-ceo/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221116182320-risk-takers-series-01-r-j-scaringe-rivian.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-22T12:26:46Z",
            "content": "Rivian CEO Robert Joseph Scaringe, better known as RJ, is living his lifelong dream. Getting here though has required dedication to a vision that once seemed nearly impossible. Even now, as the compa… [+9746 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jackie Wattles",
            "title": "SpaceX's Falcon Heavy rocket returns to flight after three years",
            "description": "SpaceX's Falcon Heavy, the most powerful operational rocket in the world, will launch out of Florida on Tuesday morning, marking the first flight for the rocket in more than three years.",
            "url": "https://www.cnn.com/2022/11/01/business/spacex-falcon-heavy-launch-ussf-44-scn/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221031164135-spacex-static-fire-falcon-heavy-102722.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-01T11:47:11Z",
            "content": "Sign up for CNNs Wonder Theory science newsletter. Explore the universe with news on fascinating discoveries, scientific advancements and more.\r\nSpaceXs Falcon Heavy a towering, three-pronged vehicle… [+4937 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Richard Galant",
            "title": "Opinion: The VUCA election",
            "description": "In the late 1980s, strategists at the US Army War College popularized the acronym \"VUCA\" as a lens for viewing a world in turmoil. It stands for \"volatility, uncertainty, complexity, and ambiguity.\" Or, as professors Nate Bennett and G. James Lemoine wrote ye…",
            "url": "https://www.cnn.com/2022/11/06/opinions/midterms-are-vuca-election-opinion-column-galant/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/221104151854-house-chamber-capitol-dc-file-022822.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2022-11-06T13:10:07Z",
            "content": "Editors Note: Sign up to get this weekly column as a newsletter. Were looking back at the strongest, smartest opinion takes of the week from CNN and other outlets.\r\nIn the late 1980s, strategists at … [+16151 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla board member says Elon Musk identified potential successor as Tesla CEO - Reuters.com",
            "description": "James Murdoch, a Tesla board director, said on Wednesday that Elon Musk has in the last few months identified someone as a potential successor in the role of chief executive of the electric carmaker.",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-board-member-says-elon-musk-identified-potential-successor-tesla-ceo-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/7GPxHRWeH1FrPScFaa7p7ql5uXw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XWU6MXNYHNKJZDYLC6JHPHVQA4.jpg",
            "publishedAt": "2022-11-16T21:25:00Z",
            "content": "SAN FRANCISCO, Nov 16 (Reuters) - James Murdoch, a Tesla board director, said on Wednesday that Elon Musk has in the last few months identified someone as a potential successor in the role of chief e… [+476 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Tesla faces U.S. criminal probe - sources - Reuters",
            "description": "Tesla is under criminal investigation in the United States over claims that the company's electric vehicles can drive themselves, three people familiar with the matter said. Flora Bradley-Watson reports.",
            "url": "https://www.reuters.com/video/watch/idRW501127102022RP1",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20221027&i=RW501127102022RP1&r=RW501127102022RP1&t=2",
            "publishedAt": "2022-10-27T07:19:51Z",
            "content": "Posted \r\nTesla is under criminal investigation in the United States over claims that the company's electric vehicles can drive themselves, three people familiar with the matter said. Flora Bradley-Wa… [+12 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla shares down over 5%, hit the lowest level in 20 months - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> shares slid to their lowest level in nearly two years on Wednesday after Chief Executive Elon Musk <a href=\"/business/autos-transportation/elon-musk-sells-195-mln-tesla-…",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-shares-down-over-5-hit-lowest-level-20-months-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/g-sJd_85n-Rov9KNwz_z_rgv06Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5SVQHRV6SZNFTOPALUBP323NGI.jpg",
            "publishedAt": "2022-11-09T18:36:00Z",
            "content": "SAN FRANCISCO, Nov 9 (Reuters) - Tesla Inc (TSLA.O) shares slid to their lowest level in nearly two years on Wednesday after Chief Executive Elon Musk sold $3.95 billion worth of shares in the electr… [+3099 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Factbox: Advertisers react to Twitter's new ownership - Reuters",
            "description": "Advertisers are grappling with Twitter's new ownership under Tesla boss Elon Musk, who once tweeted \"I hate advertising\".",
            "url": "https://www.reuters.com/technology/advertisers-react-twitters-new-ownership-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/PJPV62O3is7V--LURF-hpzzOSDc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XUYWYZ4BVNL47HEQV77ZERSHK4.jpg",
            "publishedAt": "2022-11-03T12:58:00Z",
            "content": "Nov 3 (Reuters) - Advertisers are grappling with Twitter's new ownership under Tesla boss Elon Musk, who once tweeted \"I hate advertising\".\r\nBelow are reactions from some of the companies:\r\nFord Moto… [+1501 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla recalls 24000 U.S. vehicles over seat belt issue - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> is recalling just over 24,000 U.S. 2017-2022 Model 3 vehicles over a seat belt issue.",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-recalls-24000-us-vehicles-over-seat-belt-issue-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/9HJfdoT3gYvI3sYOWsRKFlOt8Mg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DI6MMZRQQJIJFCY2HZRVOL5D5E.jpg",
            "publishedAt": "2022-10-27T10:56:00Z",
            "content": "WASHINGTON, Oct 27 (Reuters) - Tesla Inc (TSLA.O) is recalling just over 24,000 U.S. 2017-2022 Model 3 vehicles over a seat belt issue.\r\nThe Austin-based electric vehicle company said the second-row … [+430 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Two senators 'encouraged' by U.S. Tesla criminal probe report - Reuters",
            "description": "Two Democratic U.S. senators said they are \"encouraged\" by a reported criminal probe by the Justice Department into Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> over claims its electric vehicles can drive themselve…",
            "url": "https://www.reuters.com/markets/us/two-senators-encouraged-by-us-tesla-criminal-probe-report-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/HpB8wXvaq7kd7weCv2xpSp0RYUA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VA7KZSIIPZMKPF76KLW4DSL4NM.jpg",
            "publishedAt": "2022-10-27T20:43:00Z",
            "content": "WASHINGTON, Oct 27 (Reuters) - Two Democratic U.S. senators said they are \"encouraged\" by a reported criminal probe by the Justice Department into Tesla Inc (TSLA.O) over claims its electric vehicles… [+660 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla driver's criminal trial in California delayed - Reuters",
            "description": "California prosecutors have asked a court to delay a trial for a Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> Model S driver who faces manslaughter charges over a 2019 crash that left two people dead, according to cour…",
            "url": "https://www.reuters.com/legal/tesla-drivers-criminal-trial-california-delayed-2022-11-14/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-14T21:33:00Z",
            "content": "SAN FRANCISCO, Nov 14 (Reuters) - California prosecutors have asked a court to delay a trial for a Tesla (TSLA.O) Model S driver who faces manslaughter charges over a 2019 crash that left two people … [+1562 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla recalls 321000 U.S. vehicles over rear light issue - Reuters",
            "description": "Tesla is recalling more than 321,000 vehicles in the United States because tail lights may intermittently fail to illuminate, according to a filing made public Saturday.",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-recalls-321000-us-vehicles-over-rear-light-issue-2022-11-19/",
            "urlToImage": "https://www.reuters.com/resizer/m9jErV3N6O4OCNzjvy6qECcsufc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/C77SGR5KEFPQHAMSWA2GLTZQKQ.jpg",
            "publishedAt": "2022-11-19T13:30:00Z",
            "content": "WASHINGTON, Nov 19 (Reuters) - Tesla is recalling more than 321,000 vehicles in the United States because tail lights may intermittently fail to illuminate, according to a filing made public Saturday… [+462 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla ships 71704 China-made EVs in October - CPCA - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> delivered 71,704 China-made electric vehicles (EVs) in October, down 14% from a record high in the previous month, according to a report released on Thursday by the Chin…",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-ships-71704-china-made-evs-october-cpca-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/CWt1ts8kK2tRugeM9z_vzElJA9g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WYFWVMWA3NNOZGMKHVDSWU43JY.jpg",
            "publishedAt": "2022-11-03T13:06:00Z",
            "content": "Nov 3 (Reuters) - Tesla Inc (TSLA.O) delivered 71,704 China-made electric vehicles (EVs) in October, down 14% from a record high in the previous month, according to a report released on Thursday by t… [+897 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Tesla plans mass production start for Cybertruck -sources - Reuters",
            "description": "Tesla aims to start mass production of its Cybertruck at the end of 2023, two people with knowledge of the plans told Reuters. This report produced by Chris Dignam.",
            "url": "https://www.reuters.com/video/watch/idRW620101112022RP1",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20221101&i=RW620101112022RP1&r=RW620101112022RP1&t=2",
            "publishedAt": "2022-11-01T18:32:40Z",
            "content": "Posted \r\nTesla aims to start mass production of its Cybertruck at the end of 2023, two people with knowledge of the plans told Reuters. This report produced by Chris Dignam."
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla's California EV market share slips as rivals step up - Reuters.com",
            "description": "Tesla's <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> dominant market share of the electric vehicle market in California slipped again this year, according to Reuters' calculations based on government data from January to Sep…",
            "url": "https://www.reuters.com/business/autos-transportation/teslas-california-ev-market-share-slips-rivals-step-up-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/qmyZSndavDIbQAbSUq_7kepu-5w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JLBANRLNWNKPBPHECMVZUTC7E4.jpg",
            "publishedAt": "2022-11-03T19:20:00Z",
            "content": "SAN FRANCISCO, Nov 3 (Reuters) - Tesla's (TSLA.O) dominant market share of the electric vehicle market in California slipped again this year, according to Reuters' calculations based on government da… [+1888 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Tesla plans mass production start for Cybertruck at end of 2023-sources - Reuters",
            "description": "Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> aims to start mass production of its Cybertruck at the end of 2023, two years after the initial target for the long-awaited pickup truck Chief Executive Elon Musk unveiled i…",
            "url": "https://www.reuters.com/business/autos-transportation/exclusive-tesla-plans-mass-production-start-cybertruck-end-2023-sources-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/KfxcVlFPilxVUHpHOc-Yxu1YutU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GAWTQ4M6HBPHZIPBTOGZZYK26M.jpg",
            "publishedAt": "2022-11-01T08:01:00Z",
            "content": "Nov 1 (Reuters) - Tesla (TSLA.O) aims to start mass production of its Cybertruck at the end of 2023, two years after the initial target for the long-awaited pickup truck Chief Executive Elon Musk unv… [+3086 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Musk says his companies will remain well positioned in 2023 - Reuters",
            "description": "Elon Musk, who heads five companies including Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> and Twitter Inc, said in a tweet on Friday that his companies will be well positioned in 2023 despite the possibility of a …",
            "url": "https://www.reuters.com/technology/musk-says-his-companies-will-remain-well-positioned-2023-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/4EK4UApJmFoewDsc01w2v83U59o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I5EMM32RD5LFZALW2DF3EDCLQM.jpg",
            "publishedAt": "2022-11-11T09:45:00Z",
            "content": "Nov 11 (Reuters) - Elon Musk, who heads five companies including Tesla Inc (TSLA.O) and Twitter Inc, said in a tweet on Friday that his companies will be well positioned in 2023 despite the possibili… [+1716 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk sells 19.5 mln Tesla shares worth $3.95 bln - SEC filing - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> Chief Executive Officer Elon Musk has sold 19.5 million shares of the electric vehicle maker worth $3.95 billion, U.S. securities filings showed on Tuesday.",
            "url": "https://www.reuters.com/business/autos-transportation/elon-musk-sells-195-mln-tesla-shares-worth-395-bln-sec-filing-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/p_lj8m9G343pN9RWzW0TRxd8NB4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XYUUJ4SYVJP5PB5AJFAQ37XHBQ.jpg",
            "publishedAt": "2022-11-09T01:39:00Z",
            "content": "Nov 8 (Reuters) - Tesla Inc (TSLA.O) Chief Executive Officer Elon Musk has sold 19.5 million shares of the electric vehicle maker worth $3.95 billion, U.S. securities filings showed on Tuesday.\r\nThe … [+632 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk trial opens to decide fate of his $56 billion Tesla pay - Reuters",
            "description": "Tesla CEO Elon Musk is scheduled to take the stand this week to defend his $56 billion pay package against shareholder allegations it was rigged with easy performance targets and that investors were duped into approving it.",
            "url": "https://www.reuters.com/legal/elon-musk-trial-opens-decide-fate-his-56-bln-tesla-pay-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/kjhePhNOJsNmzZshk9PwJHKVxPM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T4WD3ZWCUBI4LNR3UYTKV4TIMA.jpg",
            "publishedAt": "2022-11-14T11:09:00Z",
            "content": "WILMINGTON, Del, Nov 14 (Reuters) - Tesla CEO Elon Musk is scheduled to take the stand this week to defend his $56 billion pay package against shareholder allegations it was rigged with easy performa… [+2730 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Tesla faces U.S. criminal probe over self-driving claims-sources - Reuters",
            "description": "Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> is under criminal investigation in the United States over claims that the company's electric vehicles can drive themselves, three people familiar with the matter said.",
            "url": "https://www.reuters.com/legal/exclusive-tesla-faces-us-criminal-probe-over-self-driving-claims-sources-2022-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/Pc83Ei_m8ULxEdqo8XyYwlSi_f0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S72XIA724ZL7BKAKEXM3RWBDYM.jpg",
            "publishedAt": "2022-10-26T19:43:00Z",
            "content": "Oct 25 - Tesla Inc (TSLA.O) is under criminal investigation in the United States over claims that the company's electric vehicles can drive themselves, three people familiar with the matter said.\r\nTh… [+5403 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Musk's pay trial asks if Tesla's growth justifies $56 bln compensation - Reuters",
            "description": "After five days of testimony, including three hours from Elon Musk, a Delaware judge will now decide whether Musk's $56 billion pay package from Tesla Inc was justified by the company's explosive growth or undermined by a flawed process.",
            "url": "https://www.reuters.com/business/musks-pay-trial-asks-if-teslas-growth-justifies-56-bln-compensation-2022-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/dHbOKKz2r74tMN7AfiItDZxBlaw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4D4LD3E6DNL2LKVR5ZCG425KE4.jpg",
            "publishedAt": "2022-11-18T23:12:00Z",
            "content": "WILMINGTON, Del., Nov 18 (Reuters) - After five days of testimony, including three hours from Elon Musk, a Delaware judge will now decide whether Musk's $56 billion pay package from Tesla Inc was jus… [+3523 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla safety at centre of South Korean trial over fiery, fatal crash - Reuters",
            "description": "In an upscale Seoul neighbourhood two years ago, a white Tesla Model X smashed into a parking lot wall. The fiery crash killed a prominent lawyer - a close friend of South Korea's president.",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-safety-centre-south-korean-trial-over-fiery-fatal-crash-2022-11-20/",
            "urlToImage": "https://www.reuters.com/resizer/EjRyvhFOsQkTxjJwcbgI7bX84Jo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PRISTHHUXBIT3EKD7VLVUCAT7I.jpg",
            "publishedAt": "2022-11-20T23:02:00Z",
            "content": "SEOUL, Nov 21 (Reuters) - In an upscale Seoul neighbourhood two years ago, a white Tesla Model X smashed into a parking lot wall. The fiery crash killed a prominent lawyer - a close friend of South K… [+8369 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla hit with complaints of wage, safety violations at Texas plant - Reuters.com",
            "description": "Tesla Inc on Tuesday was hit with a pair of complaints accusing the electric car maker of failing to address alleged workplace safety and wage law violations by subcontractors during the construction of its $1.1 billion truck factory in Austin, Texas.",
            "url": "https://www.reuters.com/legal/litigation/tesla-hit-with-complaints-wage-safety-violations-texas-plant-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/Ocu76T_tmvInRUnRtpzyghcy5uQ=/728x381/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CO6ZQ4ZSD5NH7BLQ64WACIGG4I.jpg",
            "publishedAt": "2022-11-15T19:46:00Z",
            "content": "(Reuters) - Tesla Inc on Tuesday was hit with a pair of complaints accusing the electric car maker of failing to address alleged workplace safety and wage law violations by subcontractors during the … [+2276 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk's net worth slips below $200 billion as Tesla shares waver - Reuters",
            "description": "Elon Musk's net worth dropped below $200 billion on Tuesday as investors dumped Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> shares on fears the top executive and largest shareholder of the world's most valuable el…",
            "url": "https://www.reuters.com/technology/elon-musks-net-worth-slips-below-200-billion-tesla-shares-waver-2022-11-08/",
            "urlToImage": "https://www.reuters.com/resizer/jW_pqCM6oczK3XR0K-eXuvlEs9I=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/34FWRKKSTZIWXESQBNDP3E5OLI.jpg",
            "publishedAt": "2022-11-08T18:17:00Z",
            "content": "Nov 8 (Reuters) - Elon Musk's net worth dropped below $200 billion on Tuesday as investors dumped Tesla Inc (TSLA.O) shares on fears the top executive and largest shareholder of the world's most valu… [+1707 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Tesla mulls exporting China-made EVs to United States-sources - Reuters",
            "description": "Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> is considering exporting made-in-China electric cars to the United States, two people with knowledge of the planning told Reuters, a reversal that would reflect the automake…",
            "url": "https://www.reuters.com/business/autos-transportation/exclusive-tesla-mulls-exporting-china-made-evs-united-states-sources-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/y0mEr058uBhFlrpLKJWBrBtdc9c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/B2RKU3F37VK6HCOXNU2N5NH74Q.jpg",
            "publishedAt": "2022-11-11T15:02:00Z",
            "content": "SHANGHAI, Nov 11 (Reuters) - Tesla (TSLA.O) is considering exporting made-in-China electric cars to the United States, two people with knowledge of the planning told Reuters, a reversal that would re… [+4268 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla, Mercedes EVs ranked worst in annual reliability survey by Consumer Reports - Reuters.com",
            "description": "Electric vehicles (EVs) and full-size pick-up trucks from Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a>, Mercedes-Benz <a href=\"https://www.reuters.com/companies/MBGn.DE\" target=\"_blank\">(MBGn.DE)</a> and other bran…",
            "url": "https://www.reuters.com/business/autos-transportation/tesla-mercedes-evs-ranked-worst-annual-reliability-survey-by-consumer-reports-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/yWSrTxjDwhvJF1-kTlzTqwbC2Yk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PAM7AHIHE5OHVMCWZ3LQW2WIZA.jpg",
            "publishedAt": "2022-11-15T17:03:00Z",
            "content": "Nov 15 (Reuters) - Electric vehicles (EVs) and full-size pick-up trucks from Tesla Inc (TSLA.O), Mercedes-Benz (MBGn.DE) and other brands were among the least reliable vehicles in the United States, … [+1381 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "As Musk focuses on Twitter, his $56 billion Tesla pay goes to trial - Reuters",
            "description": "As Elon Musk is engulfed in his <a href=\"/technology/twitter-start-layoffs-friday-morning-internal-email-2022-11-04/\">overhaul of Twitter</a>, the entrepreneur is headed to trial to defend his record $56 billion Tesla Inc pay package against claims it unjustl…",
            "url": "https://www.reuters.com/legal/musk-focuses-twitter-his-56-billion-tesla-pay-goes-trial-2022-11-07/",
            "urlToImage": "https://www.reuters.com/resizer/hH8THeGm7mrsAFKe_J8e8LpNQbA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/K45K2B4YHRPVXEXQE4VAHQA53Y.jpg",
            "publishedAt": "2022-11-07T11:19:00Z",
            "content": "WILMINGTON, Del., Nov 7 (Reuters) - As Elon Musk is engulfed in his overhaul of Twitter, the entrepreneur is headed to trial to defend his record $56 billion Tesla Inc pay package against claims it u… [+4238 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Amid Twitter turmoil, Musk takes stand in $56 bln Tesla pay trial - Reuters",
            "description": "Elon Musk, known for his combative testimony, is set to take the stand in a Delaware court on Wednesday to defend against claims that his $56 billion Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> pay package was bas…",
            "url": "https://www.reuters.com/business/amid-twitter-turmoil-musk-takes-stand-56-bln-tesla-pay-trial-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/3ue9XuPCxCcNz32U2ZKX11Vx4OE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YCHS2VHWYFPAVE32ECVAXZVIXE.jpg",
            "publishedAt": "2022-11-16T11:06:00Z",
            "content": "WILMINGTON, Del, Nov 16 (Reuters) - Elon Musk, known for his combative testimony, is set to take the stand in a Delaware court on Wednesday to defend against claims that his $56 billion Tesla Inc (TS… [+3291 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Two Sigma, Holocene added Tesla shares before fourth-quarter tumble - Reuters",
            "description": "Hedge funds Group One Trading LP, Two Sigma Investments LP and Holocene Advisors LP were among the largest purchasers of Tesla Inc <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> stock during the third quarter, filings released…",
            "url": "https://www.reuters.com/business/autos-transportation/two-sigma-holocene-added-tesla-shares-before-fourth-quarter-tumble-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/g-sJd_85n-Rov9KNwz_z_rgv06Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5SVQHRV6SZNFTOPALUBP323NGI.jpg",
            "publishedAt": "2022-11-14T22:17:00Z",
            "content": "NEW YORK, Nov 14 (Reuters) - Hedge funds Group One Trading LP, Two Sigma Investments LP and Holocene Advisors LP were among the largest purchasers of Tesla Inc (TSLA.O) stock during the third quarter… [+1096 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tesla's Model Y tops new car registrations in Europe in September - report - Reuters",
            "description": "Tesla Inc's <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> Model Y topped new vehicle registrations in Europe last month, market research data showed, indicating that the mid-sized SUV from the world's most valuable automaker …",
            "url": "https://www.reuters.com/business/autos-transportation/teslas-model-y-tops-new-car-registrations-europe-september-report-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/yWSrTxjDwhvJF1-kTlzTqwbC2Yk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PAM7AHIHE5OHVMCWZ3LQW2WIZA.jpg",
            "publishedAt": "2022-10-27T11:50:00Z",
            "content": "Oct 27 (Reuters) - Tesla Inc's (TSLA.O) Model Y topped new vehicle registrations in Europe last month, market research data showed, indicating that the mid-sized SUV from the world's most valuable au… [+958 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Breakingviews - Tesla's China price cut plays offence and defence - Reuters",
            "description": "Tesla’s <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> <a href=\"/business/autos-transportation/tesla-cuts-starting-prices-model-3-model-y-china-2022-10-24/\">China price cut</a> is a double-edged sword. The $700 billion carmake…",
            "url": "https://www.reuters.com/breakingviews/teslas-china-price-cut-plays-offence-defence-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/sjEy-UM35NElmc66J7UEbUciGiA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4AAUJ73E45KWXDZEOFCPP6VZVY.jpg",
            "publishedAt": "2022-10-27T03:06:07Z",
            "content": "HONG KONG, Oct 27 (Reuters Breakingviews) - Teslas (TSLA.O)China price cut is a double-edged sword. The $700 billion carmaker says lower production overheads prompted it to lop up to 9% off the cost … [+3178 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Mercedes-Benz cuts price of some electric models in China - Reuters",
            "description": "Mercedes-Benz said it had cut prices on some of its EQE and EQS models in China from Wednesday, citing changing market demand for top-end electric vehicles.",
            "url": "https://www.reuters.com/business/autos-transportation/mercedes-benz-cuts-price-some-electric-models-china-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/iL0ODEa3SiiPdRj1s5kSKFS8v1E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XSXA6LRAIVOOLBACNBTEZCWWFM.jpg",
            "publishedAt": "2022-11-16T11:36:00Z",
            "content": "BEIJING/FRANKFURT, Nov 16 (Reuters) - Mercedes-Benz said it had cut prices on some of its EQE and EQS models in China from Wednesday, citing changing market demand for top-end electric vehicles.\r\nFor… [+1838 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Fact Check",
            "title": "Fact Check-Fabricated screenshot of an Elon Musk tweet saying he will 'buy TikTok and delete it' - Reuters.com",
            "description": "An image shared on social media purports to show Elon Musk saying on Twitter that he will buy social media app TikTok and delete it. The screenshot appears to be fabricated.",
            "url": "https://www.reuters.com/article/factcheck-elon-musk-tiktok-twitter-idUSL1N31Y2B3",
            "urlToImage": "https://s1.reutersmedia.net/resources_v2/images/rcom-default.png?w=800",
            "publishedAt": "2022-11-02T19:32:00Z",
            "content": "An image shared on social media purports to show Elon Musk saying on Twitter that he will buy social media app TikTok and delete it. The screenshot appears to be fabricated.\r\nOne Facebook user sharin… [+1541 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Panasonic Q2 profit falls 11% - Reuters",
            "description": "Japan's Panasonic Holdings Corp <a href=\"https://www.reuters.com/companies/6752.T\" target=\"_blank\">(6752.T)</a> posted on Monday an 11% drop in second-quarter operating profit, but performed better than analysts' estimates.",
            "url": "https://www.reuters.com/business/retail-consumer/panasonic-q2-profit-falls-11-2022-10-31/",
            "urlToImage": "https://www.reuters.com/resizer/9G0baqRlZ7yfRY9tcgt-ulvGX_c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/W5OJH237WVI3XGANUEATNNCIFI.jpg",
            "publishedAt": "2022-10-31T06:41:00Z",
            "content": "TOKYO, Oct 31 (Reuters) - Japan's Panasonic Holdings Corp (6752.T) posted on Monday an 11% drop in second-quarter operating profit, but performed better than analysts' estimates.\r\nIt reported 86.1 bi… [+1591 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "Musk says he's Twitter CEO, now runs five firms - Reuters.com",
            "description": "Tesla boss Elon Musk said on Monday he will serve as chief executive of Twitter, the social media company he just bought for $44 billion, a move that Wall Street analysts have said could stretch the billionaire thin. Julian Satterthwaite reports.",
            "url": "https://www.reuters.com/video/watch/idRW611801112022RP1",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20221101&i=RW611801112022RP1&r=RW611801112022RP1&t=2",
            "publishedAt": "2022-11-01T14:32:09Z",
            "content": "Posted \r\nTesla boss Elon Musk said on Monday he will serve as chief executive of Twitter, the social media company he just bought for $44 billion, a move that Wall Street analysts have said could str… [+55 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk names S. Korea among top candidates for EV investment - Yoon's office - Reuters",
            "description": "Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> CEO Elon Musk said on Wednesday South Korea is among its top candidates for electric vehicle (EV) investment as the company pushes to build a gigafactory for EVs in Asia, So…",
            "url": "https://www.reuters.com/business/autos-transportation/elon-musk-names-s-korea-among-top-candidates-ev-investment-yoons-office-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/A_PVKN8RtLHtwK-kcs8XaJ0XYaw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2ECTOFRNXZJ6LEFHYEP6BKCQNE.jpg",
            "publishedAt": "2022-11-23T02:00:46Z",
            "content": "SEOUL, Nov 23 (Reuters) - Tesla (TSLA.O) CEO Elon Musk said on Wednesday South Korea is among its top candidates for electric vehicle (EV) investment as the company pushes to build a gigafactory for … [+377 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": "Reuters Editorial",
            "title": "BVTV: Toyota’s EV re-do-over - Reuters",
            "description": "The $221 bln Japanese carmaker looks set to overhaul its electric vehicles strategy for the third time in 13 months to catch up to Tesla and rivals. While that could mean a lack of direction, Antony Currie explains that it signals Toyota is serious about corr…",
            "url": "https://www.reuters.com/video/watch/idRCV00BIWQ",
            "urlToImage": "https://static.reuters.com/resources/r/?d=20221026&i=RCV00BIWQ&r=RCV00BIWQ&t=2",
            "publishedAt": "2022-10-26T09:32:18Z",
            "content": "Posted \r\nThe $221 bln Japanese carmaker looks set to overhaul its electric vehicles strategy for the third time in 13 months to catch up to Tesla and rivals. While that could mean a lack of direction… [+84 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Oreo maker Mondelez pulls ads off Twitter, citing hate speech -CEO - Reuters",
            "description": "Mondelez International Inc CEO <a href=\"https://www.reuters.com/companies/MDLZ.O\" target=\"_blank\">(MDLZ.O)</a> Dirk Van de Put said in a Reuters Newsmaker interview on Tuesday that the maker of Oreo cookies has pulled its ads off Twitter after Tesla Inc <a hr…",
            "url": "https://www.reuters.com/business/retail-consumer/oreo-maker-mondelez-pulls-ads-off-twitter-citing-hate-speech-ceo-2022-11-08/",
            "urlToImage": "https://www.reuters.com/resizer/2vEGC5WGJkvzaKGyEcprwrZsWkQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OYSRK63QJBMQ5IMRNDJ5GBSNVA.jpg",
            "publishedAt": "2022-11-08T21:45:00Z",
            "content": "NEW YORK, Nov 8 (Reuters) - Mondelez International Inc CEO (MDLZ.O) Dirk Van de Put said in a Reuters Newsmaker interview on Tuesday that the maker of Oreo cookies has pulled its ads off Twitter afte… [+1089 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Volkswagen's $2 bln Trinity electric vehicle plant in doubt - Reuters",
            "description": "Volkswagen <a href=\"https://www.reuters.com/companies/VOWG_p.DE\" target=\"_blank\">(VOWG_p.DE)</a> Chief Executive Oliver Blume is reviewing plans to build its planned <a href=\"/business/autos-transportation/giga-casting-robots-how-volkswagens-trinity-aims-catc…",
            "url": "https://www.reuters.com/business/autos-transportation/volkswagens-2-bln-trinity-electric-vehicle-plant-doubt-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/FyHPnOOzAvb3W6nG80HNOv_gBeY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y7XINMTM65IPDDZGS6HYLRHFHQ.jpg",
            "publishedAt": "2022-11-17T10:02:00Z",
            "content": "HAMBURG, Nov 17 (Reuters) - Volkswagen (VOWG_p.DE) Chief Executive Oliver Blume is reviewing plans to build its planned Trinity electric vehicles (EV) factory, a source told Reuters on Thursday after… [+1653 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Elon Musk braces for $56 bln battle with heavy metal drummer - Reuters",
            "description": "Elon Musk has taken on Detroit's automakers, short-sellers and securities regulators. Next week, the Tesla <a href=\"https://www.reuters.com/companies/TSLA.O\" target=\"_blank\">(TSLA.O)</a> chief executive is set to square off in court against an unlikely foe - …",
            "url": "https://www.reuters.com/legal/elon-musk-braces-56-bln-battle-with-heavy-metal-drummer-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/4EK4UApJmFoewDsc01w2v83U59o=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/I5EMM32RD5LFZALW2DF3EDCLQM.jpg",
            "publishedAt": "2022-11-11T11:07:00Z",
            "content": "WILMINGTON, Del, Nov 11 (Reuters) - Elon Musk has taken on Detroit's automakers, short-sellers and securities regulators. Next week, the Tesla (TSLA.O) chief executive is set to square off in court a… [+4078 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Musk says Twitter reinstates banned users Griffin, Peterson; no decision on Trump yet - Reuters",
            "description": "Twitter has reinstated the accounts of U.S. comedian Kathy Griffin and academic Jordan Peterson, Elon Musk said on Friday, adding that a decision to bring back former U.S. President Donald Trump's account is yet to be made.",
            "url": "https://www.reuters.com/technology/musk-says-twitter-reinstates-banned-users-griffin-peterson-no-decision-trump-yet-2022-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/TAUXLIn5OstBy-Vu-Dg0lpwZsEI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QONBFKWH7VN5LCKKTXK7OAZ52Y.jpg",
            "publishedAt": "2022-11-18T20:15:00Z",
            "content": "Nov 18 (Reuters) - Twitter has reinstated the accounts of U.S. comedian Kathy Griffin and academic Jordan Peterson, Elon Musk said on Friday, adding that a decision to bring back former U.S. Presiden… [+1172 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "GM's North American battery supply chain is key to EV profits - Reuters.com",
            "description": "General Motors Co <a href=\"https://www.reuters.com/companies/GM.N\" target=\"_blank\">(GM.N)</a> plans to add more links to its North American battery supply chain, adding to roughly <a href=\"https://www.datawrapper.de/_/OA0rL/\" target=\"_blank\">20 deals</a> so f…",
            "url": "https://www.reuters.com/business/autos-transportation/gms-north-american-battery-supply-chain-is-key-ev-profits-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/i_k_y_Av3uIbXZeToesSp8dPcYY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H4COH25COZID7BF6E5QOFGUGXU.jpg",
            "publishedAt": "2022-11-15T13:16:00Z",
            "content": "DETROIT, Nov 14 (Reuters) - General Motors Co (GM.N) plans to add more links to its North American battery supply chain, adding to roughly 20 deals so far, in a key strategy to help the Detroit autom… [+3151 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Factbox: Twitter 2.0: Firings, wary advertisers dominate Musk's first week as chief - Reuters",
            "description": "In the seven days since Elon Musk took charge of Twitter, the world's richest person has vowed to shake up the social media company, keeping employees, advertisers and users on the edge of their seats.",
            "url": "https://www.reuters.com/technology/twitter-20-firings-wary-advertisers-dominate-musks-first-week-chief-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/gQvOUqWrthwJWfAYP_2hq_8r7wY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/XAK2YHHS5NL5JGMF6CYRIB52HU.jpg",
            "publishedAt": "2022-11-04T15:52:00Z",
            "content": "Nov 4 (Reuters) - In the seven days since Elon Musk took charge of Twitter, the world's richest person has vowed to shake up the social media company, keeping employees, advertisers and users on the … [+296 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Geely's Zeekr plans electric vehicle sales in Europe in 2023 - Reuters.com",
            "description": "Zhejiang Geely Holding Group's (GEELY.UL) premium electric car business plans to sell the first electric vehicle produced under the Zeekr brand in Europe next year, Zeekr's CEO said.",
            "url": "https://www.reuters.com/technology/geelys-zeekr-plans-electric-vehicle-sales-europe-2023-2022-11-02/",
            "urlToImage": "https://www.reuters.com/resizer/ddm9HrDNOEaZYzbjcNeizSxHEws=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZXWOLOSUZNISDGATQM66YI7PAE.jpg",
            "publishedAt": "2022-11-02T08:55:00Z",
            "content": "SHANGHAI, Nov 2 (Reuters) - Zhejiang Geely Holding Group's (GEELY.UL) premium electric car business plans to sell the first electric vehicle produced under the Zeekr brand in Europe next year, Zeekr'… [+1477 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "GM temporarily halts paid advertising on Twitter - Reuters",
            "description": "General Motors Co <a href=\"https://www.reuters.com/companies/GM.N\" target=\"_blank\">(GM.N)</a> said late on Friday it had temporarily halted paid advertising on Twitter after Elon Musk completed his takeover of the social media company.",
            "url": "https://www.reuters.com/technology/gm-temporarily-halts-paid-advertising-twitter-2022-10-28/",
            "urlToImage": "https://www.reuters.com/resizer/tLDPG2GSqIipFzQAqdT1YyyTtr0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UI5HDIFB5BLETP4AHLOHPCVSJQ.jpg",
            "publishedAt": "2022-10-28T21:42:00Z",
            "content": "Oct 28 (Reuters) - General Motors Co (GM.N) said late on Friday it had temporarily halted paid advertising on Twitter after Elon Musk completed his takeover of the social media company.\r\nThe largest … [+487 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Explainer: Will Twitter layoffs violate U.S. law? - Reuters",
            "description": "Twitter Inc <a href=\"/technology/twitter-start-layoffs-friday-morning-internal-email-2022-11-04/\">has begun</a> laying off employees under its new owner, Elon Musk. The San Francisco-based social media giant is expected to terminate up to 3,700 people - half …",
            "url": "https://www.reuters.com/legal/will-twitter-layoffs-violate-us-law-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/46bBP4oKIhQNE4-0MXSfAc7rxlU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2AZAYZLDVNIG3FTA2VZW32SQJ4.jpg",
            "publishedAt": "2022-11-04T17:35:00Z",
            "content": "Nov 4 (Reuters) - Twitter Inc has begun laying off employees under its new owner, Elon Musk. The San Francisco-based social media giant is expected to terminate up to 3,700 people - half of its workf… [+3401 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Toyota revamps Prius in bid to give hybrids back their halo - Reuters",
            "description": "Toyota Motor Corp <a href=\"https://www.reuters.com/companies/7203.T\" target=\"_blank\">(7203.T)</a> rolled out a 2-litre plug-in version of its Prius on Wednesday, in an attempt to reboot the 25-year-old hybrid that was once at the cutting edge of low-emissions…",
            "url": "https://www.reuters.com/business/autos-transportation/toyota-revamps-prius-bid-give-hybrids-back-their-halo-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/pAFp-T80eCYv9EX3ra2hnE7YuJs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2NL53EQNURMHPACCPFB5D7DWSY.jpg",
            "publishedAt": "2022-11-16T07:46:00Z",
            "content": "TOKYO, Nov 16 (Reuters) - Toyota Motor Corp (7203.T) rolled out a 2-litre plug-in version of its Prius on Wednesday, in an attempt to reboot the 25-year-old hybrid that was once at the cutting edge o… [+2343 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Brembo ups 2022 sales growth guidance after strong Q3 - Reuters",
            "description": "Italian brakes maker Brembo <a href=\"https://www.reuters.com/companies/BRBI.MI\" target=\"_blank\">(BRBI.MI)</a> hiked its full-year revenue growth guidance on Wednesday, after posting a jump in core earnings for the third quarter and citing a robust orders back…",
            "url": "https://www.reuters.com/business/autos-transportation/brembo-ups-2022-sales-growth-guidance-after-strong-q3-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/9DAj2hDVI9pteYzWezBmjN5znX8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/64WWYTUK3BKTPPLD3I6XAPIVSY.jpg",
            "publishedAt": "2022-11-09T12:21:00Z",
            "content": "Nov 9 (Reuters) - Italian brakes maker Brembo (BRBI.MI) hiked its full-year revenue growth guidance on Wednesday, after posting a jump in core earnings for the third quarter and citing a robust order… [+728 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Electric vehicle makers burning cash, slammed by sky-high costs - Reuters",
            "description": "Every time Lucid Group Inc <a href=\"https://www.reuters.com/companies/LCID.O\" target=\"_blank\">(LCID.O)</a> or Rivian Automotive Inc <a href=\"https://www.reuters.com/companies/RIVN.O\" target=\"_blank\">(RIVN.O)</a> sells an electric car, they are losing hundreds…",
            "url": "https://www.reuters.com/business/autos-transportation/electric-vehicle-makers-burning-cash-slammed-by-sky-high-costs-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/_bRTUCXGeluKu2UFu0isIpXL15E=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WFYQ5HVF55KDXGQCXWVCK7WSO4.jpg",
            "publishedAt": "2022-11-14T11:07:00Z",
            "content": "Nov 14 (Reuters) - Every time Lucid Group Inc (LCID.O) or Rivian Automotive Inc (RIVN.O) sells an electric car, they are losing hundreds of thousands of dollars due to staggering raw material and pro… [+4210 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EXCLUSIVE Elon Musk reached out to EU chief to assure content policing compliance - Reuters",
            "description": "Elon Musk has assured the European Commission that Twitter will continue to abide by tough European rules on illegal online content policing now the social network has passed under his ownership, EU sources said on Monday.",
            "url": "https://www.reuters.com/technology/exclusive-elon-musk-reached-out-eu-chief-assure-content-policing-compliance-2022-10-31/",
            "urlToImage": "https://www.reuters.com/resizer/I4N-rxR4PLhM8ujCu4HtbRTKxDU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/634SN2MVPJNCVKZKSF25GL5NGY.jpg",
            "publishedAt": "2022-10-31T13:03:00Z",
            "content": "PARIS, Oct 31 (Reuters) - Elon Musk has assured the European Commission that Twitter will continue to abide by tough European rules on illegal online content policing now the social network has passe… [+931 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "U.S. automaker Ford opens $260 million campus in Mexico - Reuters",
            "description": "U.S. automaker Ford Motor Co <a href=\"https://www.reuters.com/companies/F.N\" target=\"_blank\">(F.N)</a> opened its new global technology and business center on the outskirts of Mexico's capital on Monday after a $260 million investment.",
            "url": "https://www.reuters.com/business/autos-transportation/us-automaker-ford-opens-260-million-campus-mexico-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/zcZzPC6OlToPBCr_4IVD9CjT__M=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/EOIYKO5XVJJR5KNQQUUMVFWPLY.jpg",
            "publishedAt": "2022-11-01T03:18:00Z",
            "content": "MEXICO CITY, Oct 31 (Reuters) - U.S. automaker Ford Motor Co (F.N) opened its new global technology and business center on the outskirts of Mexico's capital on Monday after a $260 million investment.… [+1189 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "German government will consider whether to stay on Twitter after Musk takeover - Reuters",
            "description": "The German government will consider whether it still wants to have a presence on Twitter <a href=\"https://www.reuters.com/companies/TWTR.N\" target=\"_blank\">(TWTR.N)</a> following the takeover by the world's richest man Elon Musk, a spokesperson said on Friday.",
            "url": "https://www.reuters.com/technology/german-government-will-consider-whether-stay-twitter-after-musk-takeover-2022-10-28/",
            "urlToImage": "https://www.reuters.com/resizer/L9Y5472T0XAeGmEIqioe2CJ0hFM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PI2SPN23QRMQ3I6ZFWQTU2JTHM.jpg",
            "publishedAt": "2022-10-28T12:39:00Z",
            "content": "Oct 28 (Reuters) - The German government will consider whether it still wants to have a presence on Twitter (TWTR.N) following the takeover by the world's richest man Elon Musk, a spokesperson said o… [+1189 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Canoo to build battery manufacturing facility in Oklahoma - Reuters",
            "description": "Electric vehicle startup Canoo Inc <a href=\"https://www.reuters.com/companies/GOEV.O\" target=\"_blank\">(GOEV.O)</a> said on Wednesday it would build a battery manufacturing facility at Pryor in Oklahoma with a capacity of 320 Megawatt hours production.",
            "url": "https://www.reuters.com/business/autos-transportation/canoo-build-battery-manufacturing-facility-oklahoma-2022-11-02/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=118",
            "publishedAt": "2022-11-02T12:54:00Z",
            "content": "Nov 2 (Reuters) - Electric vehicle startup Canoo Inc (GOEV.O) said on Wednesday it would build a battery manufacturing facility at Pryor in Oklahoma with a capacity of 320 Megawatt hours production.\r… [+883 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Uber-rival Beat withdraws from Latin America - Reuters",
            "description": "Ride-sharing app Beat is withdrawing from Latin America to focus on its European operations, the company said in a LinkedIn statement on Tuesday.",
            "url": "https://www.reuters.com/technology/uber-rival-beat-withdraws-latin-america-2022-11-08/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=119",
            "publishedAt": "2022-11-08T22:04:00Z",
            "content": "MEXICO CITY, Nov 8 (Reuters) - Ride-sharing app Beat is withdrawing from Latin America to focus on its European operations, the company said in a LinkedIn statement on Tuesday.\r\nThe startup, which fi… [+1113 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Japan's Honda launches new EV model in China - Reuters",
            "description": "Japan's Honda Motor Co <a href=\"https://www.reuters.com/companies/7267.T\" target=\"_blank\">(7267.T)</a> unveiled the second model of its new China-only electric vehicle (EV) lineup on Saturday, targeting the fast-growing, battery-driven car segment in the worl…",
            "url": "https://www.reuters.com/business/autos-transportation/japans-honda-launches-new-ev-model-china-2022-11-05/",
            "urlToImage": "https://www.reuters.com/resizer/VuIrcTbeBlcg9PjPo4E182tp4QY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VGNMUNO62VOWLESLHWF3JYWP6Q.jpg",
            "publishedAt": "2022-11-05T01:01:00Z",
            "content": "TOKYO, Nov 5 (Reuters) - Japan's Honda Motor Co (7267.T) unveiled the second model of its new China-only electric vehicle (EV) lineup on Saturday, targeting the fast-growing, battery-driven car segme… [+1251 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "EV battery production faces supply chain, geopolitical headwinds - report - Reuters",
            "description": "A fragile supply chain marred by geopolitical tensions could hit the planned expansion of electric vehicle (EV) battery production, slowing EV adoption, S&P Global Mobility warned in a report on Monday.",
            "url": "https://www.reuters.com/business/autos-transportation/ev-battery-production-faces-supply-chain-geopolitical-headwinds-report-2022-10-31/",
            "urlToImage": "https://www.reuters.com/resizer/O86qbCfD4xVL4j-5pgUN4u4qK-w=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GEFNWJENBZII5PRTEEBN3OGBWI.jpg",
            "publishedAt": "2022-10-31T14:24:00Z",
            "content": "Oct 31 (Reuters) - A fragile supply chain marred by geopolitical tensions could hit the planned expansion of electric vehicle (EV) battery production, slowing EV adoption, S&amp;P Global Mobility war… [+1456 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Congress unswept, crypto a mess - Reuters",
            "description": "A look at the day ahead in U.S. and global markets from Mike Dolan.",
            "url": "https://www.reuters.com/markets/us/global-markets-view-usa-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/m9k_robas_c2UTgEY8J9P5K6IZc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CKW7X5EKMNITZGOAQSV7PYO7CY.jpg",
            "publishedAt": "2022-11-09T11:03:00Z",
            "content": "A look at the day ahead in U.S. and global markets from Mike Dolan.\r\nRunning market assumptions of a Republican clean sweep of U.S. Congress in Tuesday's midterm elections appear wide of the mark so … [+3915 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine questions Twitter takeover amid precarious ties with Musk - Reuters.com",
            "description": "A senior Ukrainian official expressed scepticism on Saturday about the takeover of Twitter by Elon Musk, whose relations with Kyiv have been precarious since the billionaire suggested in early October Ukraine should give up occupied land for peace.",
            "url": "https://www.reuters.com/business/aerospace-defense/ukraine-questions-twitter-takeover-amid-precarious-ties-with-musk-2022-10-29/",
            "urlToImage": "https://www.reuters.com/resizer/MhOi9PTMPP1cZfsfzJ1reu0SuR0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ABZB2HBV5OVZDQ5ZWFINMKXRM.jpg",
            "publishedAt": "2022-10-29T14:25:00Z",
            "content": "KYIV, Oct 29 (Reuters) - A senior Ukrainian official expressed scepticism on Saturday about the takeover of Twitter by Elon Musk, whose relations with Kyiv have been precarious since the billionaire … [+1896 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Musk says Twitter will charge $8 for blue tick - Reuters",
            "description": "Twitter Inc will charge $8 for its Blue service, which includes its sought-after \"verified\" badge, new boss Elon Musk said on Tuesday, in his push to monetize the service and make the social media network less reliant on ads.",
            "url": "https://www.reuters.com/technology/musk-says-twitter-will-charge-8-blue-tick-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/rREDL7vd6t71gb73xkEtD0KtU3Q=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/THVZNC24NFITJMGS4SNFBJHJSI.jpg",
            "publishedAt": "2022-11-01T19:40:00Z",
            "content": "Nov 1 (Reuters) - Twitter Inc will charge $8 for its Blue service, which includes its sought-after \"verified\" badge, new boss Elon Musk said on Tuesday, in his push to monetize the service and make t… [+1743 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Twitter will not reinstate banned users without 'clear process,' Musk says - Reuters",
            "description": "Banned accounts will not be allowed back onto Twitter until the social media platform has \"a clear process for doing so,\" Elon Musk tweeted in the early hours on Wednesday, giving more clarity about the potential return of Twitter's most famous banned user, f…",
            "url": "https://www.reuters.com/technology/twitter-will-not-reinstate-banned-users-without-clear-process-musk-says-2022-11-02/",
            "urlToImage": "https://www.reuters.com/resizer/H6aGWi63axNN1j7jB8d4-HJnhIs=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5BOU4I3KJFMH5E6WHXWERFNCKU.jpg",
            "publishedAt": "2022-11-02T15:33:00Z",
            "content": "Nov 2 (Reuters) - Banned accounts will not be allowed back onto Twitter until the social media platform has \"a clear process for doing so,\" Elon Musk tweeted in the early hours on Wednesday, giving m… [+1598 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Vale to supply GM with nickel for EVs, starting in 2026 - Reuters",
            "description": "Brazilian mining giant Vale SA <a href=\"https://www.reuters.com/companies/VALE3.SA\" target=\"_blank\">(VALE3.SA)</a> will supply General Motors Co <a href=\"https://www.reuters.com/companies/GM.N\" target=\"_blank\">(GM.N)</a> with battery-grade nickel for future e…",
            "url": "https://www.reuters.com/markets/commodities/vale-supply-gm-with-nickel-evs-starting-2026-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/jJ35ZlycxVzREahJuoZMZAm0mfo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/TMFJVRJHYVMZHMMPFQNYDPSL64.jpg",
            "publishedAt": "2022-11-17T19:06:00Z",
            "content": "Nov 17 (Reuters) - Brazilian mining giant Vale SA (VALE3.SA) will supply General Motors Co (GM.N) with battery-grade nickel for future electric vehicles, starting in 2026, the companies said on Thurs… [+1559 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ukraine trusts Musk's Starlink but looking for other providers too - Reuters.com",
            "description": "Ukraine trusts Elon Musk to continue providing internet access through his SpaceX rocket company's Starlink satellite system despite a wobble last month, but is also seeking additional providers, one of its deputy prime ministers said on Thursday.",
            "url": "https://www.reuters.com/technology/ukraine-trusts-musks-starlink-looking-other-providers-too-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/HA_IkgHx7vsC6k4PM9qa3BYijGU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VK7MBGFGDVMA3CN43DR5BYBJPI.jpg",
            "publishedAt": "2022-11-03T12:39:00Z",
            "content": "LISBON, Nov 3 (Reuters) - Ukraine trusts Elon Musk to continue providing internet access through his SpaceX rocket company's Starlink satellite system despite a wobble last month, but is also seeking… [+2438 chars]"
        }
    ]
}
const cricket={
    "status": "ok",
    "totalResults": 4738,
    "articles": [
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "Can women's cricket be a money-spinner for India?",
            "description": "Indian women cricketers are hopeful that a recent decision on match fees could open more doors for them.",
            "url": "https://www.bbc.co.uk/news/av/world-asia-india-63712549",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/DD08/production/_127748565_p0dj5vbf.jpg",
            "publishedAt": "2022-11-24T00:16:23Z",
            "content": "Cricket is India's most popular sport - but it still remains a male bastion in the country.\r\nSome recent decisions by administrators could change this, though, and open up more opportunities for aspi… [+495 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "'I wouldn't leave South Africa, I have a kid here'",
            "description": "South African software developers discuss what it means to them to do business in the country.",
            "url": "https://www.bbc.co.uk/news/business-63646696",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/223E/production/_127666780_guys2.jpg",
            "publishedAt": "2022-11-23T00:12:14Z",
            "content": "Software firm boss Stanford Mogotsi says he remains committed to South Africa, despite the challenges of running a small IT firm in the country.\r\n\"It's my home, I have a kid, I have a family here,\" s… [+6417 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup: England stunned by Ireland as rain results in five-run defeat",
            "description": "England suffer a major upset in the Men's T20 World Cup as an inspired Ireland and rain seriously dent their title hopes in Melbourne.",
            "url": "https://www.bbc.co.uk/sport/cricket/63395933",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/F2FC/production/_127340226_gettyimages-1436625817.jpg",
            "publishedAt": "2022-10-26T08:05:38Z",
            "content": "<table>\r\n<tr><td>ICC Men's T20 World Cup Group 1, Melbourne</td></tr><tr><td>Ireland 157 (20 overs): Balbirnie 62 (47); Livingstone 3-17, Wood 3-34</td></tr><tr><td>England 105-5 (14.3 overs): Malan … [+1127 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup: England-Australia match delayed by rain in Melbourne",
            "description": "England's highly-anticipated Men's T20 World Cup match against Australia in Melbourne is delayed by rain.",
            "url": "https://www.bbc.co.uk/sport/cricket/63423230",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/4AD8/production/_127406191_gettyimages-1244283084.jpg",
            "publishedAt": "2022-10-28T07:36:29Z",
            "content": "The match is due to begin at 09:00 BST\r\nEngland's highly-anticipated Men's T20 World Cup match against Australia in Melbourne has been delayed by rain.\r\nA defeat for either side in the match, for whi… [+704 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "Imran Khan: Fist rally by former Pakistan PM since being shot at",
            "description": "The former Pakistani prime minister was shot at during a similar gathering three weeks ago.",
            "url": "https://www.bbc.co.uk/news/world-asia-63767040",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7524/production/_127788992_gettyimages-1245102659.jpg",
            "publishedAt": "2022-11-26T12:38:51Z",
            "content": "Supporters of Pakistan's ousted Prime Minister Imran Khan have gathered for a rally - his first public appearance since being shot at and injured.\r\nThousands of people are expected in Rawalpindi, whe… [+2075 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "World Cup 2022: How football fever is gripping cricket-crazy India",
            "description": "Fans are spending a fortune to travel to Doha to watch games and putting up cut-outs of players at home.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-63645416",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/7433/production/_127674792_mediaitem127674790.jpg",
            "publishedAt": "2022-11-19T01:11:13Z",
            "content": "This week, Hashir Ali and 11 of his friends will make a long trip - from Kozhikode city in the southern state of Kerala to Doha, the capital of Qatar. \r\nMr Ali, 55, a football-crazy civil engineer, a… [+5042 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup: New Zealand-Afghanistan game delayed by rain",
            "description": "The start of the Men's T20 World Cup match between New Zealand and Afghanistan was delayed because of rain in Melbourne.",
            "url": "https://www.bbc.co.uk/sport/cricket/63346055",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/172A8/production/_127288849_melbournecricketground.jpg",
            "publishedAt": "2022-10-26T10:05:11Z",
            "content": "Rain in Melbourne had earlier cut short Ireland's shock win over England\r\n<table>\r\n<tr><td>ICC Men's T20 World Cup Group 1, Melbourne</td></tr><tr><td>New Zealand v Afghanistan</td></tr>\r\n</table>The… [+356 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": "https://www.facebook.com/bbcnews",
            "title": "T20 World Cup: Hardik Pandya’s story of pain, grit and glory",
            "description": "Whether Hardik Pandya is a second Kapil Dev or not, he is the modern-day cricketer India needs.",
            "url": "https://www.bbc.co.uk/news/world-asia-india-63565039",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/121A2/production/_127564147_gettyimages-1351489843.jpg",
            "publishedAt": "2022-11-10T00:29:54Z",
            "content": "As soon as the great Kapil Dev retired, India began looking for his replacement - a fast bowler who could also score centuries. \r\nMany auditioned for the part, from Chetan Sharma and Ajit Agarkar to … [+4305 chars]"
        },
        {
            "source": {
                "id": "bbc-news",
                "name": "BBC News"
            },
            "author": null,
            "title": "T20 World Cup: Australia's Matthew Wade tests positive for Covid-19 before England match",
            "description": "Wicketkeeper Matthew Wade tests positive for Covid-19 the day before Australia's crucial match against England in the Men's T20 World Cup.",
            "url": "https://www.bbc.co.uk/sport/cricket/63408761",
            "urlToImage": "https://ichef.bbci.co.uk/live-experience/cps/624/cpsprodpb/17FB5/production/_127392289_gettyimages-1431330770.jpg",
            "publishedAt": "2022-10-27T06:13:19Z",
            "content": "Wade did not bat in Australia's most recent match against Sri Lanka and was out for two against New Zealand\r\n<table><tr><th>ICC Men's T20 World Cup, England v Australia</th></tr>\r\n<tr><td>Date: 28 Oc… [+2349 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Sri Lanka hands Karunaratne suspended ban after disciplinary inquiry - Reuters",
            "description": "Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violations committed at the Twenty20 World Cup in Australia.",
            "url": "https://www.reuters.com/lifestyle/sports/sri-lanka-hands-karunaratne-suspended-ban-after-disciplinary-inquiry-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/GB_4DDwF3Fq1vG5wtrTJczRGVv4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/L5PJLUOX3FJD5EMZBPCY2RBQ6E.jpg",
            "publishedAt": "2022-11-23T14:06:00Z",
            "content": "Nov 23 (Reuters) - Sri Lanka Cricket (SLC) on Wednesday handed bowling all-rounder Chamika Karunaratne a suspended one-year ban from all forms of cricket following a disciplinary inquiry into violati… [+1417 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England name Jon Lewis as women's team head coach - Reuters.com",
            "description": "England named Jon Lewis as the new head coach of their women's cricket team on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/england-name-jon-lewis-womens-team-head-coach-2022-11-18/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-18T16:43:00Z",
            "content": "Nov 18 (Reuters) - England named Jon Lewis as the new head coach of their women's cricket team on Friday.\r\nThe 47-year-old former England men's seamer will replace Lisa Keightley, who left the positi… [+506 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Warner captaincy bid alive as Australia amends code of conduct - Reuters",
            "description": "David Warner can make a belated application to overturn his life ban from leadership roles in Australia's teams after the country's cricket board amended its integrity code.",
            "url": "https://www.reuters.com/lifestyle/sports/warner-captaincy-bid-alive-australia-amends-code-conduct-2022-11-21/",
            "urlToImage": "https://www.reuters.com/resizer/tUW3vFacqBY29X_ItHyrM4CzM30=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SAUQF3A4TROFFACK44PSUF7KUU.jpg",
            "publishedAt": "2022-11-21T03:07:00Z",
            "content": "MELBOURNE, Nov 21 (Reuters) - David Warner can make a belated application to overturn his life ban from leadership roles in Australia's teams after the country's cricket board amended its integrity c… [+1441 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Fearless but flexible, India's mantra for the NZ series - Reuters",
            "description": "India will play fearless cricket in the limited-overs series in New Zealand while remaining tactically flexible, coach VVS Laxman said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/fearless-flexible-indias-mantra-nz-series-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/kgcJ7c8gPIbIN1s2rtqxiBJklA4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FWBXODV5JRMI5ED7CKQ4764M6E.jpg",
            "publishedAt": "2022-11-17T05:03:00Z",
            "content": "Nov 17 (Reuters) - India will play fearless cricket in the limited-overs series in New Zealand while remaining tactically flexible, coach VVS Laxman said on Thursday.\r\nThe beaten semi-finalists of th… [+1934 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England's Buttler unfazed by ODI whitewash in Australia - Reuters",
            "description": "England white-ball captain Jos Buttler is unfazed by their 3-0 whitewash in Australia and has urged the administrators to make sure bilateral cricket remains relevant.",
            "url": "https://www.reuters.com/lifestyle/sports/englands-buttler-unfazed-by-odi-whitewash-australia-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/F7uciY0fMYX98qsKf51N75qmxVM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SKFEQZS4RZNFXONMN3CEK6FSJM.jpg",
            "publishedAt": "2022-11-23T06:32:00Z",
            "content": "MELBOURNE, Nov 23 (Reuters) - England white-ball captain Jos Buttler is unfazed by their 3-0 whitewash in Australia and has urged the administrators to make sure bilateral cricket remains relevant.\r\n… [+1520 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Woman in Paine 'sexting' scandal has bid to file harassment claim dismissed - Reuters",
            "description": "The woman involved in a 'sexting' scandal with former Australia test captain Tim Paine had her bid to lodge a sexual harassment claim against Cricket Tasmania dismissed on Thursday after a court rejected her explanation for the delay in filing the case.",
            "url": "https://www.reuters.com/lifestyle/sports/woman-paine-sexting-scandal-has-bid-file-harassment-claim-dismissed-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/2ByBYi84S0JS5eHtHRQ2TIHa9nc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/S246IPKAK5IQZMJI23EGP3J6WM.jpg",
            "publishedAt": "2022-10-27T03:23:00Z",
            "content": "MELBOURNE, Oct 27 (Reuters) - The woman involved in a 'sexting' scandal with former Australia test captain Tim Paine had her bid to lodge a sexual harassment claim against Cricket Tasmania dismissed … [+1995 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ireland-Afghanistan match washed out at T20 World Cup - Reuters.com",
            "description": "The Ireland-Afghanistan match at the T20 World Cup was abandoned without a bowl balled due to rain at the Melbourne Cricket Ground on Friday, leaving the teams to split the points.",
            "url": "https://www.reuters.com/lifestyle/sports/ireland-afghanistan-match-washed-out-t20-world-cup-2022-10-28/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-28T05:50:46Z",
            "content": "MELBOURNE, Oct 28 (Reuters) - The Ireland-Afghanistan match at the T20 World Cup was abandoned without a bowl balled due to rain at the Melbourne Cricket Ground on Friday, leaving the teams to split … [+652 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Indian board sacks selection panel after T20 World Cup exit - Reuters.com",
            "description": "The Indian cricket board (BCCI) responded to the national team's defeat in the semi-finals of the Twenty20 World Cup in Australia last week by sacking their senior selection committee on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/indian-board-sacks-selection-panel-after-t20-world-cup-exit-2022-11-18/",
            "urlToImage": "https://www.reuters.com/resizer/LWHFB6n8KixeLssWo3PraaxrBLA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RYYA6ECBE5ICXLYYO2AXJP3XKI.jpg",
            "publishedAt": "2022-11-18T16:55:00Z",
            "content": "Nov 18 (Reuters) - The Indian cricket board (BCCI) responded to the national team's defeat in the semi-finals of the Twenty20 World Cup in Australia last week by sacking their senior selection commit… [+846 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Humbled Ashes foes face off in must-win T20 World Cup clash - Reuters",
            "description": "Once promising a clash of favourites, the Super 12 showdown between Australia and England at the Melbourne Cricket Ground on Friday now appears more of a desperate battle for survival for two humbled teams.",
            "url": "https://www.reuters.com/lifestyle/sports/humbled-ashes-foes-face-off-must-win-t20-world-cup-clash-2022-10-27/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-27T09:12:00Z",
            "content": "MELBOURNE, Oct 27 (Reuters) - Once promising a clash of favourites, the Super 12 showdown between Australia and England at the Melbourne Cricket Ground on Friday now appears more of a desperate battl… [+3342 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Kohli in the runs again as India down Dutch at T20 World Cup - Reuters",
            "description": "Virat Kohli hit a second successive unbeaten half century as India made it two wins from two matches at the Twenty20 World Cup with a comfortable 56-run victory over the Netherlands at the Sydney Cricket Ground on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/kohli-runs-again-india-down-dutch-t20-world-cup-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/2juSIaVuOpaLjg2DJ3GboJw1868=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/VUGWW6P4QBLTRHUROCVHUEZCBA.jpg",
            "publishedAt": "2022-10-27T11:01:00Z",
            "content": "SYDNEY, Oct 27 (Reuters) - Virat Kohli hit a second successive unbeaten half century as India made it two wins from two matches at the Twenty20 World Cup with a comfortable 56-run victory over the Ne… [+2289 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bleak Melbourne forecast puts T20 World Cup final under a cloud - Reuters",
            "description": "England and Pakistan's staff will be poring over weather charts as well as tactics in the lead up to the Twenty20 World Cup final, with a gloomy forecast threatening to scupper the decider at the Melbourne Cricket Ground.",
            "url": "https://www.reuters.com/lifestyle/sports/bleak-melbourne-forecast-puts-t20-world-cup-final-under-cloud-2022-11-11/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-11T06:03:25Z",
            "content": "MELBOURNE, Nov 11 (Reuters) - England and Pakistan's staff will be poring over weather charts as well as tactics in the lead up to the Twenty20 World Cup final, with a gloomy forecast threatening to … [+2003 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Head, Warner hundreds help Australia whitewash England - Reuters",
            "description": "Australia, fuelled by hundreds from Travis Head and David Warner, crushed England by 221 runs in the third one day internationals to sweep the series in front of largely empty stands at the Melbourne Cricket Ground (MCG) on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/head-warner-hundreds-help-australia-whitewash-england-2022-11-22/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-22T11:36:00Z",
            "content": "MELBOURNE, Nov 22 (Reuters) - Australia, fuelled by hundreds from Travis Head and David Warner, crushed England by 221 runs in the third one day internationals to sweep the series in front of largely… [+2259 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "NZ's Mitchell to return against Sri Lanka - Southee - Reuters.com",
            "description": "Daryl Mitchell will return for New Zealand's third Twenty20 World Cup match against Sri Lanka at the Sydney Cricket Ground (SCG) on Saturday, Black Caps paceman Tim Southee told reporters on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/nzs-mitchell-return-against-sri-lanka-southee-2022-10-28/",
            "urlToImage": "https://www.reuters.com/resizer/-x0hTbObqxP9HDvaVQIGCBTW_nQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/G3Y6VEJTZVONXGKKKG4H2PUZHA.jpg",
            "publishedAt": "2022-10-28T04:37:00Z",
            "content": "SYDNEY, Oct 28 (Reuters) - Daryl Mitchell will return for New Zealand's third Twenty20 World Cup match against Sri Lanka at the Sydney Cricket Ground (SCG) on Saturday, Black Caps paceman Tim Southee… [+1723 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan set England 138 for victory in T20 World Cup final - Reuters",
            "description": "Pakistan set England a modest target of 138 for victory in the T20 World Cup final on Sunday after being sent in to bat by England captain Jos Buttler at the Melbourne Cricket Ground.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-set-england-138-victory-t20-world-cup-final-2022-11-13/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-13T09:57:00Z",
            "content": "MELBOURNE, Nov 13 (Reuters) - Pakistan set England a modest target of 138 for victory in the T20 World Cup final on Sunday after being sent in to bat by England captain Jos Buttler at the Melbourne C… [+725 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Imran, Sharif shower praise on 'brave' Pakistan after World Cup heartbreak - Reuters",
            "description": "Prime Minister Shehbaz Sharif and cricket great Imran Khan led tributes to Pakistan's valiant fight in Sunday's Twenty20 World Cup final against England saying the country was proud of the team led by Babar Azam.",
            "url": "https://www.reuters.com/lifestyle/sports/imran-sharif-shower-praise-brave-pakistan-after-world-cup-heartbreak-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/38yxmFqJYZeorfCDxHu4X8Mtgtg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/2YA27A7IQFN5ZAMVVZFQERD77U.jpg",
            "publishedAt": "2022-11-14T06:18:00Z",
            "content": "ISLAMABAD, Nov 14 (Reuters) - Prime Minister Shehbaz Sharif and cricket great Imran Khan led tributes to Pakistan's valiant fight in Sunday's Twenty20 World Cup final against England saying the count… [+1841 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Cricket 18-year-old Ahmed a 'very rare talent', says Ben Stokes - Reuters",
            "description": "England captain Ben Stokes has said that 18-year-old Rehan Ahmed, who has been called up to England's December test squad to face Pakistan, is a \"very rare talent\".",
            "url": "https://www.reuters.com/lifestyle/sports/cricket-18-year-old-ahmed-very-rare-talent-says-ben-stokes-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/uOBcedfm63NV8lpLu0D47Ko-vXU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/URRCOLQQKNNMNPF5PYQDQ6NG6E.jpg",
            "publishedAt": "2022-11-25T13:15:00Z",
            "content": "Nov 25 (Reuters) - England captain Ben Stokes has said that 18-year-old Rehan Ahmed, who has been called up to England's December test squad to face Pakistan, is a \"very rare talent\".\r\nHe would becom… [+1060 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Shastri tells India to pick new T20 captain, follow England template - Reuters",
            "description": "India need to appoint a new Twenty20 captain and follow England's template to revive their fortunes in that format, former head coach Ravi Shastri said on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/shastri-tells-india-pick-new-t20-captain-follow-england-template-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/p09ERelvTDqUb5XYdryHLeehEFI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HKMXROQF6NIYDNH5WL76R2GCFQ.jpg",
            "publishedAt": "2022-11-17T07:50:00Z",
            "content": "NEW DELHI, Nov 17 (Reuters) - India need to appoint a new Twenty20 captain and follow England's template to revive their fortunes in that format, former head coach Ravi Shastri said on Thursday.\r\nRoh… [+1915 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan drawing inspiration from '92 win over England: Hayden - Reuters",
            "description": "Pakistan have soaked up stories from the landmark 1992 Cricket World Cup final win over England in the lead up to Sunday's Twenty20 decider and hope to share their own tales of triumph in years to come, team mentor Matthew Hayden said on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-drawing-inspiration-92-win-over-england-hayden-2022-11-11/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=120",
            "publishedAt": "2022-11-11T04:08:36Z",
            "content": "MELBOURNE, Nov 11 (Reuters) - Pakistan have soaked up stories from the landmark 1992 Cricket World Cup final win over England in the lead up to Sunday's Twenty20 decider and hope to share their own t… [+1756 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England rout India by 10 wickets to reach T20 World Cup final - Reuters",
            "description": "Alex Hales and captain Jos Buttler shone in an unbroken opening partnership as a ruthless England humiliated India by 10 wickets at Adelaide Oval on Thursday to storm into the Twenty20 World Cup final.",
            "url": "https://www.reuters.com/lifestyle/sports/england-rout-india-by-10-wickets-reach-t20-world-cup-final-2022-11-10/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=119",
            "publishedAt": "2022-11-10T11:13:00Z",
            "content": "MELBOURNE, Nov 10 (Reuters) - Alex Hales and captain Jos Buttler shone in an unbroken opening partnership as a ruthless England humiliated India by 10 wickets at Adelaide Oval on Thursday to storm in… [+708 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Playing last in group stage an advantage for England, says Buttler - Reuters",
            "description": "England cricket captain Jos Buttler said his team retained an advantage playing last in the final round of group matches at the Twenty20 World Cup as they will know exactly what is needed in terms of net run rate to reach the semi-finals.",
            "url": "https://www.reuters.com/lifestyle/sports/playing-last-group-stage-an-advantage-england-says-buttler-2022-10-29/",
            "urlToImage": "https://www.reuters.com/resizer/R4xuAxvOJCR5WRR8WjKgU_xqiQY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5U42C2JY6BOVDFUNNTLW5I4FEI.jpg",
            "publishedAt": "2022-10-29T03:22:00Z",
            "content": "Oct 29 (Reuters) - England cricket captain Jos Buttler said his team retained an advantage playing last in the final round of group matches at the Twenty20 World Cup as they will know exactly what is… [+1748 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa appoint Maketa as interim coach for Australia test tour - Reuters.com",
            "description": "South Africa have named Malibongwe Maketa as interim head coach for their three-test tour of Australia starting next month, with Mark Boucher stepping down after the ongoing Twenty20 World Cup.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africa-appoint-maketa-interim-coach-australia-test-tour-2022-11-02/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=118",
            "publishedAt": "2022-11-02T08:36:00Z",
            "content": "Nov 2 (Reuters) - South Africa have named Malibongwe Maketa as interim head coach for their three-test tour of Australia starting next month, with Mark Boucher stepping down after the ongoing Twenty2… [+924 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England hoping to 'unretire' Stokes in time for 50-over World Cup - Reuters.com",
            "description": "England are hoping Ben Stokes might reconsider his retirement from one-day internationals and help the team defend their 50-over World Cup title next year.",
            "url": "https://www.reuters.com/lifestyle/sports/england-hoping-unretire-stokes-time-50-over-world-cup-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/Vbn4GBHhzV1XEMa79PR3edwqKUo=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/WR5653HYOFI4FEYUXZBY5PENRM.jpg",
            "publishedAt": "2022-11-15T04:14:00Z",
            "content": "MELBOURNE, Nov 15 (Reuters) - England are hoping Ben Stokes might reconsider his retirement from one-day internationals and help the team defend their 50-over World Cup title next year.\r\nThe talisman… [+1101 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Stokes redeems himself six years after West Indies nightmare - Reuters",
            "description": "Ben Stokes earned redemption six years after his horror show at the 2016 World Cup final with an unbeaten half-century that secured England's second global title in T20 with <a href=\"/lifestyle/sports/pakistan-set-england-138-victory-t20-world-cup-final-2022-…",
            "url": "https://www.reuters.com/lifestyle/sports/stokes-redeems-himself-six-years-after-west-indies-nightmare-2022-11-13/",
            "urlToImage": "https://www.reuters.com/resizer/ktI_e5qWjHis53gIKIFlBm4YlI0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/BDFGFZSCAFLGZM6PESCBSHBEZM.jpg",
            "publishedAt": "2022-11-13T14:43:00Z",
            "content": "MELBOURNE, Nov 13 (Reuters) - Ben Stokes earned redemption six years after his horror show at the 2016 World Cup final with an unbeaten half-century that secured England's second global title in T20 … [+2657 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "India begin World Cup preparation, but Williamson stays in present - Reuters.com",
            "description": "India skipper Shikhar Dhawan views the one-day series against New Zealand as part of their preparation for the home World Cup next year but rival captain Kane Williamson preferred to stay in the present on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/india-begin-world-cup-preparation-williamson-stays-present-2022-11-24/",
            "urlToImage": "https://www.reuters.com/resizer/Bl1fTi0xAwTZUAOIe1F_TDFNSb8=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/3KPVMZI7P5OGFFDUO56ZF3XPPM.jpg",
            "publishedAt": "2022-11-24T06:53:00Z",
            "content": "Nov 24 (Reuters) - India skipper Shikhar Dhawan views the one-day series against New Zealand as part of their preparation for the home World Cup next year but rival captain Kane Williamson preferred … [+1805 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England just getting started in new era: Buttler - Reuters UK",
            "description": "Securing England's second Twenty20 World Cup title would be a triumph for a team in transition but captain Jos Buttler says more success can be reaped by his seasoned squad.",
            "url": "https://www.reuters.com/world/uk/england-just-getting-started-new-era-buttler-2022-11-12/",
            "urlToImage": "https://www.reuters.com/resizer/GFODVywvNSsfDqyez1j6-c8oy0A=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DU6DCYHFGZNI5OKC653DMZUHE4.jpg",
            "publishedAt": "2022-11-12T08:11:00Z",
            "content": "MELBOURNE, Nov 12 (Reuters) - Securing England's second Twenty20 World Cup title would be a triumph for a team in transition but captain Jos Buttler says more success can be reaped by his seasoned sq… [+2494 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "New Zealand's Williamson rues poor performance rather than result - Reuters",
            "description": "New Zealand skipper Kane Williamson was frustrated by his team's sub-par performance as their Twenty20 World Cup dream ended with defeat to Pakistan in Wednesday's semi-final.",
            "url": "https://www.reuters.com/lifestyle/sports/new-zealands-williamson-rues-poor-performance-rather-than-result-2022-11-09/",
            "urlToImage": "https://www.reuters.com/resizer/BrWJx-8udremNL0D35q4Vnj__l0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/47T2FYP4G5IE7JJMHRVZUK6JFI.jpg",
            "publishedAt": "2022-11-09T13:37:00Z",
            "content": "SYDNEY, Nov 9 (Reuters) - New Zealand skipper Kane Williamson was frustrated by his team's sub-par performance as their Twenty20 World Cup dream ended with defeat to Pakistan in Wednesday's semi-fina… [+2225 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'It's what he's made for', Stokes ushers England into semis - Reuters",
            "description": "All-rounder Ben Stokes brushed off an underwhelming run of form with the bat to usher England into the semi-finals of the Twenty20 World Cup with a victory over Sri Lanka on Saturday.",
            "url": "https://www.reuters.com/lifestyle/sports/its-what-hes-made-for-stokes-ushers-england-into-semis-2022-11-05/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=119",
            "publishedAt": "2022-11-05T14:05:21Z",
            "content": "SYDNEY, Nov 5 (Reuters) - All-rounder Ben Stokes brushed off an underwhelming run of form with the bat to usher England into the semi-finals of the Twenty20 World Cup with a victory over Sri Lanka on… [+1621 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Guptill released from New Zealand contract - Reuters",
            "description": "New Zealand opener Martin Guptill has been released from his national contract after being omitted from the squad for the India T20 series, heralding the end of the veteran batsman's international career.",
            "url": "https://www.reuters.com/lifestyle/sports/guptill-released-new-zealand-contract-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/vX8h5QYcNHNNs0_A0HZ8c0t559c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5N6VWXL4JFPZPDXZXMGJ4G5VVI.jpg",
            "publishedAt": "2022-11-23T00:49:00Z",
            "content": "Nov 23 (Reuters) - New Zealand opener Martin Guptill has been released from his national contract after being omitted from the squad for the India T20 series, heralding the end of the veteran batsman… [+1421 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan back from the brink with a little Dutch courage - Reuters",
            "description": "Pakistan booked their place in the T20 World Cup semi-finals and Babar Azam's team have the Netherlands to thanks for doing them a huge favour in Adelaide on Sunday.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-back-brink-with-little-dutch-courage-2022-11-06/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=119",
            "publishedAt": "2022-11-06T11:21:00Z",
            "content": "MELBOURNE, Nov 6 (Reuters) - Pakistan booked their place in the T20 World Cup semi-finals and Babar Azam's team have the Netherlands to thanks for doing them a huge favour in Adelaide on Sunday.\r\nPak… [+1943 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Smith ready to slot in at World Cup as Australia sweat on injuries - Reuters",
            "description": "Steve Smith will be happy to bat anywhere in the Australian order if called upon at the T20 World Cup and he might finally have his chance with injury doubts hanging over a number of his team mates.",
            "url": "https://www.reuters.com/lifestyle/sports/smith-ready-slot-world-cup-australia-sweat-injuries-2022-11-01/",
            "urlToImage": "https://www.reuters.com/resizer/XCb361DZceWaNQCYfgD5qcfsJs4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ESYUPGN5UJMRDJCLDMUNN6TLNI.jpg",
            "publishedAt": "2022-11-01T07:24:00Z",
            "content": "MELBOURNE, Nov 1 (Reuters) - Steve Smith will be happy to bat anywhere in the Australian order if called upon at the T20 World Cup and he might finally have his chance with injury doubts hanging over… [+1864 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Williamson doesn't see teams blindly copying England T20 template - Reuters.com",
            "description": "New Zealand captain Kane Williamson does not expect teams to blindly copy the template England provided after winning the T20 World Cup in Australia with their unbridled aggression.",
            "url": "https://www.reuters.com/lifestyle/sports/williamson-doesnt-see-teams-blindly-copying-england-t20-template-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/KBPYCAnIxnjTF_glFvXJ2M3o_X4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/F6LXCLDI3FOJFBSD2VCBEJGST4.jpg",
            "publishedAt": "2022-11-15T07:51:00Z",
            "content": "Nov 15 (Reuters) - New Zealand captain Kane Williamson does not expect teams to blindly copy the template England provided after winning the T20 World Cup in Australia with their unbridled aggression… [+1958 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England's Archer 'fully back' from long injury layoff - Reuters",
            "description": "Fast bowler Jofra Archer said he was \"fully back\" from his long injury lay-off after marking his return to an England shirt by bowling for the Lions in a three-day match against the test side in the United Arab Emirates.",
            "url": "https://www.reuters.com/lifestyle/sports/englands-archer-fully-back-long-injury-layoff-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/bZQkcpXZ7n3qTQH_5r41ze84YWc=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PK4FCKU6IFNVXGTGUJTL3XL2AE.jpg",
            "publishedAt": "2022-11-25T04:44:00Z",
            "content": "Nov 25 (Reuters) - Fast bowler Jofra Archer said he was \"fully back\" from his long injury lay-off after marking his return to an England shirt by bowling for the Lions in a three-day match against th… [+1812 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan's Afridi cleared of serious knee injury - Reuters",
            "description": "Pakistan fast bowler Shaheen Afridi has been cleared of serious damage to his knee after his dramatic breakdown during the Twenty20 World Cup final.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistans-afridi-cleared-serious-knee-injury-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/iLwUzUUzQxwoLDPvT3dBxW72UYM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KCC74LDSGFOH5GEXZUQQDCJC64.jpg",
            "publishedAt": "2022-11-15T04:32:59Z",
            "content": "Nov 15 (Reuters) - Pakistan fast bowler Shaheen Afridi has been cleared of serious damage to his knee after his dramatic breakdown during the Twenty20 World Cup final.\r\nThe pace spearhead hurt his kn… [+735 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa's Rossouw determined to continue his roller-coaster ride - Reuters",
            "description": "Rilee Rossouw has taken the long road to the Twenty20 World Cup and the in-form South African batsman is determined to enjoy the ride for as long as he can.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africas-rossouw-determined-continue-his-roller-coaster-ride-2022-10-28/",
            "urlToImage": "https://www.reuters.com/resizer/fitnt4N9hFiuVOIM2l7GUryQREk=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/RFHPGZYCXJLLRJ4SS34NBGDRFE.jpg",
            "publishedAt": "2022-10-28T03:27:00Z",
            "content": "SYDNEY, Oct 28 (Reuters) - Rilee Rossouw has taken the long road to the Twenty20 World Cup and the in-form South African batsman is determined to enjoy the ride for as long as he can.\r\nThe 33-year-ol… [+2037 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Former coach Langer tears into 'cowards' on Australia team - Reuters",
            "description": "Former Australia coach Justin Langer has reopened old wounds over his acrimonious resignation, lashing out at unnamed \"cowards\" in the team who complained in the media about his intense coaching style.",
            "url": "https://www.reuters.com/lifestyle/sports/former-coach-langer-tears-into-cowards-australia-team-2022-11-23/",
            "urlToImage": "https://www.reuters.com/resizer/VkuaQ4cybGECMCmd_Si_HwBGYh0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/T6KG7SXXEBM5TBWAO7RBLPMGKI.jpg",
            "publishedAt": "2022-11-23T01:45:00Z",
            "content": "MELBOURNE, Nov 23 (Reuters) - Former Australia coach Justin Langer has reopened old wounds over his acrimonious resignation, lashing out at unnamed \"cowards\" in the team who complained in the media a… [+1723 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'Utter rubbish': Langer rejects reports of rift with Australia players - Reuters",
            "description": "Former Australia head coach Justin Langer has denied reports of a rift with captain Pat Cummins and his team, saying he remains in regular communication with the majority of the players and \"can't wait\" to catch up with them.",
            "url": "https://www.reuters.com/lifestyle/sports/utter-rubbish-langer-rejects-reports-rift-with-australia-players-2022-11-25/",
            "urlToImage": "https://www.reuters.com/resizer/oH-F9m6VTXNcW3OrQ9ezmxO1qkg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JAYZNUNGGZJDVPPM3OBHZCIU44.jpg",
            "publishedAt": "2022-11-25T04:37:00Z",
            "content": "MELBOURNE, Nov 25 (Reuters) - Former Australia head coach Justin Langer has denied reports of a rift with captain Pat Cummins and his team, saying he remains in regular communication with the majorit… [+1775 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England suffer shock Ireland defeat as rain ends T20 clash - Reuters",
            "description": "England suffered a shock loss to Ireland at the T20 World Cup on Wednesday as rain forced an early finish with the English five runs behind the par score.",
            "url": "https://www.reuters.com/lifestyle/sports/england-brink-ireland-shock-rain-halts-play-2022-10-26/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-26T08:04:00Z",
            "content": "MELBOURNE, Oct 26 (Reuters) - England suffered a shock loss to Ireland at the T20 World Cup on Wednesday as rain forced an early finish with the English five runs behind the par score.\r\nEngland were … [+848 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "NZ skipper Williamson to miss final India T20 for medical appointment - Reuters",
            "description": "New Zealand's hopes of levelling the T20 series against India with victory in the final match on Tuesday have taken a blow with captain Kane Williamson opting out of the match for a medical appointment.",
            "url": "https://www.reuters.com/lifestyle/sports/nz-skipper-williamson-miss-final-india-t20-medical-appointment-2022-11-21/",
            "urlToImage": "https://www.reuters.com/resizer/hqv8JGqlv62cBtZVnvAc5TZyePM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PRCD3Q5UPVKDBBZ5MRNWLQCL2M.jpg",
            "publishedAt": "2022-11-21T03:35:00Z",
            "content": "Nov 21 (Reuters) - New Zealand's hopes of levelling the T20 series against India with victory in the final match on Tuesday have taken a blow with captain Kane Williamson opting out of the match for … [+958 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Sri Lanka's Gunathilaka granted bail in Sydney assault case - Reuters",
            "description": "Sri Lanka cricketer Danushka Gunathilaka was granted bail in Sydney on Thursday, reversing an earlier decision in the case of the alleged sexual assault of a woman while on tour in Australia for the T20 World Cup",
            "url": "https://www.reuters.com/lifestyle/sports/sri-lankas-gunathilaka-granted-bail-sydney-assault-case-2022-11-17/",
            "urlToImage": "https://www.reuters.com/resizer/qC3C-dEYNpwSTMXp_4ifsNP8p6g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/A6DOVLT3RFLEDPLCTGONMQ7YX4.jpg",
            "publishedAt": "2022-11-17T06:24:00Z",
            "content": "SYDNEY, Nov 17 (Reuters) - Sri Lanka cricketer Danushka Gunathilaka was granted bail in Sydney on Thursday, reversing an earlier decision in the case of the alleged sexual assault of a woman while on… [+1136 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Talks held on ANZAC team to face Lions, says Australia rugby chief - Reuters.com",
            "description": "Rugby Australia chairman Hamish McLennan said he has opened talks with New Zealand Rugby officials to discuss fielding a combined ANZAC team against the British and Irish Lions in 2025.",
            "url": "https://www.reuters.com/lifestyle/sports/talks-held-anzac-team-face-lions-says-australia-rugby-chief-2022-11-02/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=118",
            "publishedAt": "2022-11-02T03:33:07Z",
            "content": "Nov 2 (Reuters) - Rugby Australia chairman Hamish McLennan said he has opened talks with New Zealand Rugby officials to discuss fielding a combined ANZAC team against the British and Irish Lions in 2… [+1169 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Little picks up hat-trick for Ireland at T20 World Cup - Reuters",
            "description": "Paceman Josh Little picked up Ireland's second hat-trick in T20 internationals when he grabbed a trio of New Zealand victims at the World Cup on Friday.",
            "url": "https://www.reuters.com/lifestyle/sports/little-picks-up-hat-trick-ireland-t20-world-cup-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/rylmOtW8DYxnKRAzqZxk1dp88oA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UN5QRSATWZPA3F3TRJ2NROS7CQ.jpg",
            "publishedAt": "2022-11-04T05:49:00Z",
            "content": "MELBOURNE, Nov 4 (Reuters) - Paceman Josh Little picked up Ireland's second hat-trick in T20 internationals when he grabbed a trio of New Zealand victims at the World Cup on Friday.\r\nLeft-armer Littl… [+853 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Phillips ton drives New Zealand to Sri Lanka win after rocky start - Reuters",
            "description": "Glenn Phillips scored a brilliant century to rescue New Zealand after a rocky start and fire them to an emphatic 65-run victory on Saturday which sent the Black Caps clear at the top of Group 1 at the Twenty20 World Cup.",
            "url": "https://www.reuters.com/lifestyle/sports/phillips-ton-drives-new-zealand-sri-lanka-win-after-rocky-start-2022-10-29/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-29T12:10:00Z",
            "content": "SYDNEY, Oct 29 (Reuters) - Glenn Phillips scored a brilliant century to rescue New Zealand after a rocky start and fire them to an emphatic 65-run victory on Saturday which sent the Black Caps clear … [+2610 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England and Pakistan eye T20 title in throwback final - Reuters",
            "description": "A confident England will look to deny Pakistan a fairytale finish in Sunday's Twenty20 World Cup final and become the first nation to hold both global white-ball trophies - if Melbourne's fickle weather permits.",
            "url": "https://www.reuters.com/lifestyle/sports/england-pakistan-eye-t20-title-throwback-final-2022-11-12/",
            "urlToImage": "https://www.reuters.com/resizer/R4xuAxvOJCR5WRR8WjKgU_xqiQY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5U42C2JY6BOVDFUNNTLW5I4FEI.jpg",
            "publishedAt": "2022-11-12T07:22:00Z",
            "content": "MELBOURNE, Nov 12 (Reuters) - A confident England will look to deny Pakistan a fairytale finish in Sunday's Twenty20 World Cup final and become the first nation to hold both global white-ball trophie… [+3452 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa recall batsman De Bruyn for Australia test series - Reuters",
            "description": "South Africa have selected fast bowler Gerald Coetzee for the first time and handed a recall to batsman Theunis de Bruyn for their crucial three-test tour of Australia that starts next month.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africa-recall-batsman-de-bruyn-australia-test-series-2022-11-14/",
            "urlToImage": "https://www.reuters.com/resizer/ymSvK8lZsFE9_IkPtfVGrsneXmA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NMLFUPR6EJIUTAVZKCRTEOSKEQ.jpg",
            "publishedAt": "2022-11-14T08:17:00Z",
            "content": "Nov 14 (Reuters) - South Africa have selected fast bowler Gerald Coetzee for the first time and handed a recall to batsman Theunis de Bruyn for their crucial three-test tour of Australia that starts … [+1685 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Boucher says South Africa deserve better after World Cup exit - Reuters",
            "description": "South Africa have themselves to blame for a disappointing 13-run loss to the Netherlands on Sunday which eliminated them from the Twenty20 World Cup and the squad deserves better, head coach Mark Boucher said.",
            "url": "https://www.reuters.com/lifestyle/sports/boucher-says-south-africa-deserve-better-after-world-cup-exit-2022-11-06/",
            "urlToImage": "https://www.reuters.com/resizer/G_l6lQm2ZsjQQWYjtWGSJAQRd20=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H2IEVC5U2ZNSXH32XZHZJ4FYYU.jpg",
            "publishedAt": "2022-11-06T09:05:00Z",
            "content": "MELBOURNE, Nov 6 (Reuters) - South Africa have themselves to blame for a disappointing 13-run loss to the Netherlands on Sunday which eliminated them from the Twenty20 World Cup and the squad deserve… [+1641 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "New Zealand still in good position despite England loss: Santner - Reuters.com",
            "description": "New Zealand all-rounder Mitchell Santner is confident his side can still advance to the next phase of the Twenty20 World Cup despite their 20-run defeat to England in Brisbane on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/new-zealand-still-good-position-despite-england-loss-santner-2022-11-02/",
            "urlToImage": "https://www.reuters.com/resizer/PwiYAZ3hPZdUWC4aMhi4E16B4NI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AMW7HC2JERPOHCATQHHZZDWS44.jpg",
            "publishedAt": "2022-11-02T01:33:00Z",
            "content": "Nov 2 (Reuters) - New Zealand all-rounder Mitchell Santner is confident his side can still advance to the next phase of the Twenty20 World Cup despite their 20-run defeat to England in Brisbane on Tu… [+1454 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "New Zealand's Guptill dropped for India white-ball series - Reuters",
            "description": "Martin Guptill's chances of playing a fourth 50-over World Cup have dimmed, with the opener dropped from New Zealand's white-ball squad to play India.",
            "url": "https://www.reuters.com/lifestyle/sports/new-zealands-guptill-dropped-india-white-ball-series-2022-11-15/",
            "urlToImage": "https://www.reuters.com/resizer/YWrjD6sddgXmbINb8mLt4k3-Z2c=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/KOCQIXFINVM65EWMHKZBLAE5BY.jpg",
            "publishedAt": "2022-11-15T00:53:00Z",
            "content": "Nov 15 (Reuters) - Martin Guptill's chances of playing a fourth 50-over World Cup have dimmed, with the opener dropped from New Zealand's white-ball squad to play India.\r\nThe 36-year-old batsman was … [+1763 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England may not be at best for Australia ODIs: Buttler - Reuters.com",
            "description": "England captain Jos Buttler said his team may struggle to fire up for the ODI series against Australia after only a few days' rest in the wake of their T20 World Cup triumph.",
            "url": "https://www.reuters.com/lifestyle/sports/england-may-not-be-best-australia-odis-buttler-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/F7uciY0fMYX98qsKf51N75qmxVM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SKFEQZS4RZNFXONMN3CEK6FSJM.jpg",
            "publishedAt": "2022-11-16T07:27:00Z",
            "content": "MELBOURNE, Nov 16 (Reuters) - England captain Jos Buttler said his team may struggle to fire up for the ODI series against Australia after only a few days' rest in the wake of their T20 World Cup tri… [+1575 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan focusing on controllables in bid to reach T20 World Cup semis - Shadab - Reuters",
            "description": "Pakistan's focus on controlling \"the controllable things\" helped them keep their faint hopes of reaching the Twenty20 World Cup semi-finals alive with a 33-run victory over South Africa on Thursday, all-rounder Shadab Khan said.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-focusing-controllables-bid-reach-t20-world-cup-semis-shadab-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/hCzgRArNxFSMxrsdAOiKXx9TImw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/E5MBMUEFKVKGPBIUEWT7ZBBGV4.jpg",
            "publishedAt": "2022-11-04T04:20:00Z",
            "content": "Nov 4 (Reuters) - Pakistan's focus on controlling \"the controllable things\" helped them keep their faint hopes of reaching the Twenty20 World Cup semi-finals alive with a 33-run victory over South Af… [+1554 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa 'back to earth' after Pakistan defeat: Bavuma - Reuters.com",
            "description": "South Africa have been brought \"back to earth\" by their defeat to Pakistan at the T20 World Cup but will use it as a wake-up call ahead of their must-win match against the Netherlands, captain Temba Bavuma said.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africa-back-earth-after-pakistan-defeat-bavuma-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/1xcwefF3hbsQRsY72v2lXUV4G2Y=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H6TZQAHWB5LYZLNQ5H3HCLL2GU.jpg",
            "publishedAt": "2022-11-04T02:27:00Z",
            "content": "Nov 4 (Reuters) - South Africa have been brought \"back to earth\" by their defeat to Pakistan at the T20 World Cup but will use it as a wake-up call ahead of their must-win match against the Netherlan… [+1648 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'Clueless' India hammered at home after World Cup 'humiliation' - Reuters",
            "description": "Local media, fans and former cricketers did not hold back after India were dumped out of the Twenty20 World Cup on Thursday, with Rohit Sharma's side labelled \"clueless\" and \"out of their depth\" following the 10-wicket defeat by England.",
            "url": "https://www.reuters.com/lifestyle/sports/clueless-india-hammered-home-after-world-cup-humiliation-2022-11-11/",
            "urlToImage": "https://www.reuters.com/resizer/XxGNwQuL1t89BqOS68OAJedI5Jg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/PTGP7YP2AFLR3P3TUD6BBLTJSA.jpg",
            "publishedAt": "2022-11-11T05:26:00Z",
            "content": "Nov 11 (Reuters) - Local media, fans and former cricketers did not hold back after India were dumped out of the Twenty20 World Cup on Thursday, with Rohit Sharma's side labelled \"clueless\" and \"out o… [+1755 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Buttler retained by IPL franchise; Williamson and Finch released - Reuters",
            "description": "T20 World Cup winning captain Jos Buttler and several of his England team mates have been retained by their Indian Premier League (IPL) franchises but Australia counterpart Aaron Finch and New Zealand skipper Kane Williamson were released.",
            "url": "https://www.reuters.com/lifestyle/sports/buttler-retained-by-ipl-franchise-williamson-finch-released-2022-11-16/",
            "urlToImage": "https://www.reuters.com/resizer/k0NmYWTQrySwAS3otA8ITetuYI0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/22P4PEUCRBJVNCCRKYVUQEFYEM.jpg",
            "publishedAt": "2022-11-16T04:23:00Z",
            "content": "NEW DELHI, Nov 16 (Reuters) - T20 World Cup winning captain Jos Buttler and several of his England team mates have been retained by their Indian Premier League (IPL) franchises but Australia counterp… [+1492 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Ton up for Rossouw as South Africa rout Bangladesh by 104 runs - Reuters",
            "description": "Rilee Rossouw scored the first century of the Twenty20 World Cup and built a partnership of 163 with Quinton de Kock to drive South Africa to a thumping 104-run victory over Bangladesh on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/ton-up-rossouw-south-africa-rout-bangladesh-by-104-runs-2022-10-27/",
            "urlToImage": "https://www.reuters.com/resizer/l73IbKSFZ1ntK6-M_-oLVHq3Fd4=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/NFLNRIDG4VJNHETV22ADYZI6Y4.jpg",
            "publishedAt": "2022-10-27T07:01:00Z",
            "content": "SYDNEY, Oct 27 (Reuters) - Rilee Rossouw scored the first century of the Twenty20 World Cup and built a partnership of 163 with Quinton de Kock to drive South Africa to a thumping 104-run victory ove… [+2076 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England deserve to 'hurt' from Ireland shock: Buttler - Reuters",
            "description": "England captain Jos Buttler refused to blame the rain for the shock loss to Ireland at the T20 World Cup on Wednesday and demanded his team feel the \"hurt\" before rebounding for the crunch match against champions Australia.",
            "url": "https://www.reuters.com/lifestyle/sports/england-deserve-hurt-ireland-shock-buttler-2022-10-26/",
            "urlToImage": "https://www.reuters.com/resizer/R4xuAxvOJCR5WRR8WjKgU_xqiQY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5U42C2JY6BOVDFUNNTLW5I4FEI.jpg",
            "publishedAt": "2022-10-26T10:49:00Z",
            "content": "MELBOURNE, Oct 26 (Reuters) - England captain Jos Buttler refused to blame the rain for the shock loss to Ireland at the T20 World Cup on Wednesday and demanded his team feel the \"hurt\" before reboun… [+1769 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Backyard horseplay with former school teacher led to Maxwell's bad break - Reuters",
            "description": "Glenn Maxwell said a bit of backyard horseplay with an old schoolteacher at a house party in Melbourne led to the broken leg that wiped out the Australian all-rounder's summer.",
            "url": "https://www.reuters.com/lifestyle/sports/backyard-horseplay-with-former-school-teacher-led-maxwells-bad-break-2022-11-22/",
            "urlToImage": "https://www.reuters.com/resizer/1Sw63NcQrbWEj416wjXm8xkqIA0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AAFJQP7IDBOZ3I5M6BGKGMV6IU.jpg",
            "publishedAt": "2022-11-22T01:10:00Z",
            "content": "MELBOURNE, Nov 22 (Reuters) - Glenn Maxwell said a bit of backyard horseplay with an old schoolteacher at a house party in Melbourne led to the broken leg that wiped out the Australian all-rounder's … [+2161 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Supporters of Pakistan's Imran Khan block roads in new protest - Reuters",
            "description": "Supporters of former Pakistani Prime Minister Imran Khan blocked roads near the capital on Tuesday, disrupting traffic and forcing schools to close, as they protested against a bid to assassinate their leader at a recent anti-government rally.",
            "url": "https://www.reuters.com/world/asia-pacific/supporters-pakistans-imran-khan-block-roads-new-protest-2022-11-08/",
            "urlToImage": "https://www.reuters.com/resizer/IVyhs4CXFoi8GMi95KofHG22-HE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/DOSIMATXBRKUPGPIH2UZFNV55Y.jpg",
            "publishedAt": "2022-11-08T08:55:00Z",
            "content": "ISLAMABAD, Nov 8 (Reuters) - Supporters of former Pakistani Prime Minister Imran Khan blocked roads near the capital on Tuesday, disrupting traffic and forcing schools to close, as they protested aga… [+1941 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Rohit, Kohli and Rahul rested for NZ tour, to return for Bangladesh series - Reuters",
            "description": "Indian captain Rohit Sharma and top order batsmen Virat Kohli and KL Rahul have been rested for the white ball tour of New Zealand next month but the trio will return for the Bangladesh series, Indian selector Chetan Sharma said on Monday.",
            "url": "https://www.reuters.com/lifestyle/sports/rohit-kohli-rahul-rested-nz-tour-return-bangladesh-series-2022-10-31/",
            "urlToImage": "https://www.reuters.com/resizer/vThnOgEgTTlL6vESEVMtLtN94B0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZQH2NPB2UBIITAPAU272OTRS3A.jpg",
            "publishedAt": "2022-10-31T14:02:00Z",
            "content": "Oct 31 (Reuters) - Indian captain Rohit Sharma and top order batsmen Virat Kohli and KL Rahul have been rested for the white ball tour of New Zealand next month but the trio will return for the Bangl… [+2406 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Back from exile, Hales delivers for England at T20 World Cup - Reuters",
            "description": "Alex Hales once pondered the prospect of an unfulfilled career during his long exile from England but the rangy opener can now dream of an elusive World Cup title after helping floor India with a brilliant half-century in the semi-final on Thursday.",
            "url": "https://www.reuters.com/lifestyle/sports/back-exile-hales-delivers-england-t20-world-cup-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/GcW0gzsv9Nu_3Cjm4-PSW6ss6JM=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/ZFW7NYMWDZM2VM6T5IVFLGYN3M.jpg",
            "publishedAt": "2022-11-10T13:39:00Z",
            "content": "ADELAIDE, Nov 10 (Reuters) - Alex Hales once pondered the prospect of an unfulfilled career during his long exile from England but the rangy opener can now dream of an elusive World Cup title after h… [+1773 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan crush Dutch by six wickets for first T20 Cup win - Reuters",
            "description": "Pakistan trounced the Netherlands by six wickets on Sunday to keep their Twenty20 World Cup campaign alive, bouncing back to register their first win of the tournament after consecutive last-ball defeats against Zimbabwe and India.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-crush-dutch-by-six-wickets-first-t20-cup-win-2022-10-30/",
            "urlToImage": "https://www.reuters.com/pf/resources/images/reuters/reuters-default.png?d=117",
            "publishedAt": "2022-10-30T13:17:04Z",
            "content": "PERTH, Oct 30 (Reuters) - Pakistan trounced the Netherlands by six wickets on Sunday to keep their Twenty20 World Cup campaign alive, bouncing back to register their first win of the tournament after… [+2001 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa taking nothing for granted at T20 World Cup - Reuters",
            "description": "Batsman Aiden Markram said South Africa are taking nothing for granted despite beating India on Sunday to put themselves in the driving seat for qualification for the Twenty20 World Cup semi-finals.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africa-taking-nothing-granted-t20-world-cup-2022-10-31/",
            "urlToImage": "https://www.reuters.com/resizer/xx-sp5-EMkpO9j_R4ZtG1w-Rp40=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SMGC7XEQTJKMDDSLG5QZZJCHRM.jpg",
            "publishedAt": "2022-10-31T02:55:00Z",
            "content": "SYDNEY, Oct 31 (Reuters) - Batsman Aiden Markram said South Africa are taking nothing for granted despite beating India on Sunday to put themselves in the driving seat for qualification for the Twent… [+2073 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "England face Sri Lanka with net run rate on mind and semis in sight - Reuters",
            "description": "A peaking England find themselves in a three-way tussle for a place in the semi-finals of the T20 World Cup but skipper Jos Buttler will have the advantage of knowing exactly what they need to do in their final group match against Sri Lanka.",
            "url": "https://www.reuters.com/lifestyle/sports/england-face-sri-lanka-with-net-run-rate-mind-semis-sight-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/R4xuAxvOJCR5WRR8WjKgU_xqiQY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/5U42C2JY6BOVDFUNNTLW5I4FEI.jpg",
            "publishedAt": "2022-11-04T05:45:00Z",
            "content": "SYDNEY, Nov 4 (Reuters) - A peaking England find themselves in a three-way tussle for a place in the semi-finals of the T20 World Cup but skipper Jos Buttler will have the advantage of knowing exactl… [+2164 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Trouble at the top ends India's World Cup hopes - Reuters",
            "description": "As India lick their wounds after the 10-wicket shellacking by England in the semi-final of the T20 World Cup on Thursday, the inaugural champions would be thoroughly justified in thinking their misfiring opening pair have let them down.",
            "url": "https://www.reuters.com/lifestyle/sports/trouble-top-ends-indias-world-cup-hopes-2022-11-10/",
            "urlToImage": "https://www.reuters.com/resizer/2sCdNrS7bfBW1S6A26sDil5QAn0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/6KQNW726NFPLFMWNANE2I64SYE.jpg",
            "publishedAt": "2022-11-10T12:55:00Z",
            "content": "ADELAIDE, Nov 10 (Reuters) - As India lick their wounds after the 10-wicket shellacking by England in the semi-final of the T20 World Cup on Thursday, the inaugural champions would be thoroughly just… [+1881 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Finch '70-30' to play in Australia's World Cup crunch match - Reuters.com",
            "description": "Australia captain Aaron Finch says he is more likely than not to play in Friday's crunch Twenty20 World Cup Super 12 match against Afghanistan, despite suffering a hamstring strain on Tuesday.",
            "url": "https://www.reuters.com/lifestyle/sports/finch-70-30-play-australias-world-cup-crunch-match-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/8MxtGndy8GsLdshAWADDyynHa50=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/AYUUUQGFCBNBXAG4UUU5G34JQI.jpg",
            "publishedAt": "2022-11-03T06:07:00Z",
            "content": "SYDNEY, Nov 3 (Reuters) - Australia captain Aaron Finch says he is more likely than not to play in Friday's crunch Twenty20 World Cup Super 12 match against Afghanistan, despite suffering a hamstring… [+2550 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Pakistan keep hopes live by ending South Africa's unbeaten run - Reuters",
            "description": "Pakistan kept alive their slim hopes of reaching the Twenty20 World Cup semi-finals with a 33-run victory over South Africa in a rain-shortened Super 12 match on Thursday, bringing the tournament's only unbeaten record to an end in the process.",
            "url": "https://www.reuters.com/lifestyle/sports/pakistan-keep-hopes-live-by-ending-south-africas-unbeaten-run-2022-11-03/",
            "urlToImage": "https://www.reuters.com/resizer/vjgECnlr5HkZjq-kU-4g5RVjHC0=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/GJTVXREBVBODPGOIP7P3VJU4DU.jpg",
            "publishedAt": "2022-11-03T12:28:00Z",
            "content": "SYDNEY, Nov 3 (Reuters) - Pakistan kept alive their slim hopes of reaching the Twenty20 World Cup semi-finals with a 33-run victory over South Africa in a rain-shortened Super 12 match on Thursday, b… [+2552 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "South Africa, India eye T20 World Cup semi-finals - Reuters",
            "description": "South Africa and India will look to seal places in the Twenty20 World Cup semi-finals with regulation wins over cricketing minnows as the Super 12 phase wraps up with a flurry of matches on Sunday.",
            "url": "https://www.reuters.com/lifestyle/sports/south-africa-india-eye-t20-world-cup-semi-finals-2022-11-05/",
            "urlToImage": "https://www.reuters.com/resizer/g-mwHFo5hawnO_MEtbxJMGzasBY=/1169x612/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/QSQ3HS2LB5JTPCQ2WFQUAHARSA.jpg",
            "publishedAt": "2022-11-05T06:32:00Z",
            "content": "MELBOURNE, Nov 5 (Reuters) - South Africa and India will look to seal places in the Twenty20 World Cup semi-finals with regulation wins over cricketing minnows as the Super 12 phase wraps up with a f… [+2585 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "'There will be a few hangovers': Arnold happy to put a smile on Australian faces - Reuters.com",
            "description": "Australia coach Graham Arnold said that Saturday's 1-0 win over Tunisia, the Socceroos' first victory at the World Cup in 12 years, is a cause for celebration but that there is still a lot of work to do to seal qualification to the knockout stages.",
            "url": "https://www.reuters.com/lifestyle/sports/there-will-be-few-hangovers-arnold-happy-put-smile-australian-faces-2022-11-26/",
            "urlToImage": "https://www.reuters.com/resizer/4JIxI3DNIoFFkY1cA496yQMiO10=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FHM3JK6GLNK73H3AG3AD7EQ3PA.jpg",
            "publishedAt": "2022-11-26T14:28:00Z",
            "content": "AL WAKRAH, Qatar, Nov 26 (Reuters) - Australia coach Graham Arnold said that Saturday's 1-0 win over Tunisia, the Socceroos' first victory at the World Cup in 12 years, is a cause for celebration but… [+2521 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Jubilation shattered by gunfire: How attack on ex-Pakistani PM Khan unfolded - Reuters",
            "description": "Moments before Pakistan's ousted Prime Minister Imran Khan was <a href=\"/world/asia-pacific/shots-fired-near-convoy-former-pakistan-pm-imran-khan-media-2022-11-03/\">shot</a> in the leg, a young man in the cheering crowd that lined the streets for a political …",
            "url": "https://www.reuters.com/world/asia-pacific/jubilation-shattered-by-gunfire-how-attack-ex-pakistani-pm-khan-unfolded-2022-11-04/",
            "urlToImage": "https://www.reuters.com/resizer/OOoaxq6TX7oW1pzV9AjiLwLWTmw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/YOCQLEW6YRMWBDSXDL3B36R4MY.jpg",
            "publishedAt": "2022-11-04T16:00:00Z",
            "content": "WAZIRABAD, Pakistan, Nov 4 (Reuters) - Moments before Pakistan's ousted Prime Minister Imran Khan was shot in the leg, a young man in the cheering crowd that lined the streets for a political protest… [+4457 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Android Central"
            },
            "author": "tips@androidcentral.com (Vishnu Sarangapurkar)",
            "title": "Leaked render reveals budget Motorola phone for 2023",
            "description": "The code name “Penang” is seemingly derived from a state in Malaysia.",
            "url": "https://www.androidcentral.com/phones/motorola-penang-5g-render-leak",
            "urlToImage": "https://cdn.mos.cms.futurecdn.net/95fQ6xFnWxGoi2jd75m5QQ-1200-80.jpg",
            "publishedAt": "2022-11-21T21:58:18Z",
            "content": "<ul><li>Motorola reportedly has a new budget handset lined up for next year.</li><li>It is codenamed “Penang,” and its first images surfaced on the web.</li><li>It will likely have 4GB of RAM and 64/… [+1759 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Geoff Lemon",
            "title": "Justin Langer’s endless grudge threatens to cloud new cricket summer",
            "description": "Justin Langer is still angry at being deposed as national coach. But with every outburst, the Test great turned television commentator kicks holes in Pat Cummins’ current teamAnd so the Justin Langer grievance tour rolls on. A lengthy podcast interview spinni…",
            "url": "https://www.theguardian.com/sport/2022/nov/25/justin-langers-endless-grudge-threatens-to-cloud-new-cricket-summer",
            "urlToImage": "https://i.guim.co.uk/img/media/a37dfa5ceee3aa35e40bec0ab60d852f3911e9d8/0_89_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=b2479a9cceaa6fe50575f80d28c69fd7",
            "publishedAt": "2022-11-25T05:54:42Z",
            "content": "And so the Justin Langer grievance tour rolls on. A lengthy podcast interview spinning off into an online article and back pages across the News Corp stable, revisiting for the umpteenth time that th… [+7267 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "The Spin | Travis Basevi: the Statsguru visionary who transformed cricket",
            "description": "The man behind Cricinfo’s search engine, who has died aged 47, was a one-off who paved the way for today’s data-driven gameTravis Basevi wasn’t the kind of man who sought the limelight. He was happy to just do his thing. And that thing was groundbreaking.Base…",
            "url": "https://www.theguardian.com/sport/2022/nov/02/travis-bavesi-the-statsguru-visionary-who-transformed-cricket-spin",
            "urlToImage": "https://i.guim.co.uk/img/media/46500bea40f5b97277840d124b423880251be282/398_733_3077_1846/master/3077.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=6d2f81da0b52aa4ecefc76c441fde9a0",
            "publishedAt": "2022-11-02T11:23:30Z",
            "content": "Travis Basevi wasnt the kind of man who sought the limelight. He was happy to just do his thing. And that thing was groundbreaking.\r\nBasevi, who died last month at the tragically young age of 47, lea… [+5882 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Paul Campbell",
            "title": "Sports quiz of the week: World Cup squads, finals, winners and drama",
            "description": "Have you been keeping up with the football, rugby, cricket and rugby league World Cups? Continue reading...",
            "url": "https://www.theguardian.com/sport/2022/nov/11/sports-quiz-week-world-cup-squads-finals-winners-football-rugby-league-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/5a0afdbf085bb3d13855d31decd17ebea85fbc3c/0_192_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=857cda631665d69d5684c460abe0535c",
            "publishedAt": "2022-11-11T15:31:33Z",
            "content": "Have you been keeping up with the football, rugby, cricket and rugby league World Cups?"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Exclusive by Ali Martin",
            "title": "ECB’s Richard Thompson: ‘It’s not quite a Packer moment, but it’s a real risk’",
            "description": "The new chair of the England and Wales Cricket Board on the challenges of balancing multiple formats and expanding diversityRichard Thompson, the new chair of the England and Wales Cricket Board, is hoping to reunite Jos Buttler’s T20 World Cup winners for a …",
            "url": "https://www.theguardian.com/sport/2022/nov/26/cricket-ecb-richard-thompson-its-not-quite-a-packer-moment-but-its-a-risk",
            "urlToImage": "https://i.guim.co.uk/img/media/b247897861d56821a83aabed8a31baea9db33ce4/0_213_3200_1920/master/3200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b4a85a0ea4839697a4755097c285050e",
            "publishedAt": "2022-11-26T07:30:20Z",
            "content": "Richard Thompson, the new chair of the England and Wales Cricket Board, is hoping to reunite Jos Buttlers T20 World Cup winners for a celebration back on home soil but in an international calendar ba… [+9920 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Geoff Lemon at the Melbourne Cricket Ground",
            "title": "T20 World Cup fights to keep romance alive in face of uncomfortable truths | Geoff Lemon",
            "description": "A tournament sponsored by an oil supplier and beset by bad weather may struggle to build on excitement of early upsetsIt must be difficult organising a major International Cricket Council event. You are tasked with bringing together the disparate corners of t…",
            "url": "https://www.theguardian.com/sport/2022/oct/28/t20-world-cup-keeping-romance-alive-in-face-of-uncomfortable-truths",
            "urlToImage": "https://i.guim.co.uk/img/media/cd8885d8043b3ac70080c441672660ddb4f5691a/0_233_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=5a175a649f4fbc38653f49bcce1f022e",
            "publishedAt": "2022-10-28T17:42:38Z",
            "content": "It must be difficult organising a major International Cricket Council event. You are tasked with bringing together the disparate corners of the cricket world in a festival of joyous inclusiveness, in… [+5250 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Emma John",
            "title": "How car-park cricket in Lebanon gives Sri Lankan migrant workers an escape",
            "description": "Sri Lankan workers and a women’s project at a Syrian refugee camp come together for games in an underground car parkWhen Fernando Sugath arrived in Lebanon in the mid-1990s, cricket was an underground sport. Literally. After living in Beirut for a year as one…",
            "url": "https://www.theguardian.com/sport/2022/nov/07/how-car-park-cricket-in-lebanon-gives-sri-lankan-migrant-workers-an-escape",
            "urlToImage": "https://i.guim.co.uk/img/media/536432c1cc76da7b3de02cc98f9d47fb23fc2320/402_166_2028_1217/master/2028.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=60e34e6e356047fa8e4a94203a031c10",
            "publishedAt": "2022-11-07T08:00:02Z",
            "content": "When Fernando Sugath arrived in Lebanon in the mid-1990s, cricket was an underground sport. Literally. After living in Beirut for a year as one of the countrys 80,000 Sri Lankan migrant workers, a fe… [+5937 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Liew",
            "title": "England’s white-ball side keep showing the rest they’re playing a different sport | Jonathan Liew",
            "description": "Victory in the T20 World Cup final is a prime example of how cricket is turning into two distinct gamesA little before 8pm local time in Melbourne on Sunday, Adil Rashid stepped up to bowl the 12th over of Pakistan’s innings. The 11th, bowled by Liam Livingst…",
            "url": "https://www.theguardian.com/sport/2022/nov/15/england-white-ball-cricket-side-playing-different-sport",
            "urlToImage": "https://i.guim.co.uk/img/media/2557affa386d3b1f15911a0118abfe78cd7e7ade/0_98_3000_1800/master/3000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=cd058c24ea96c5785b6a758890d3f43d",
            "publishedAt": "2022-11-15T08:00:17Z",
            "content": "A little before 8pm local time in Melbourne on Sunday, Adil Rashid stepped up to bowl the 12th over of Pakistans innings. The 11th, bowled by Liam Livingstone, had just been swatted for 16. After a s… [+5655 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Raf Nicholson",
            "title": "‘The team is ready to fly’: Jon Lewis primed for England women’s cricket role",
            "description": "<ul><li>‘You coach individuals,’ says former men’s bowling coach</li><li>‘My job is to take the handbrake off and free the players up’</li></ul>Jon Lewis is adamant that having no experience in women’s cricket will not prove a barrier to success as England wo…",
            "url": "https://www.theguardian.com/sport/2022/nov/23/jon-lewis-sure-he-can-succeed-as-head-coach-of-england-women-cricket-team",
            "urlToImage": "https://i.guim.co.uk/img/media/60d1879056a872a1ae0b881a1b2d98b1760d8ab0/273_123_2315_1388/master/2315.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e9be5a3167ed3c630b669706020fe13c",
            "publishedAt": "2022-11-23T17:19:30Z",
            "content": "Jon Lewis is adamant that having no experience in womens cricket will not prove a barrier to success as England womens new head coach. You coach individuals, you dont coach gender, he says, speaking … [+3090 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Luke McLaughlin",
            "title": "The Spin | Barmy Army is more than just booze and brass as Pakistan tour beckons",
            "description": "The England fan group supports Test cricket, local economies and charities. Why are some people in the game still so sniffy?The casual cricket fan – particularly one who avoids social media – could conceivably think England’s Barmy Army remains a wholly amate…",
            "url": "https://www.theguardian.com/sport/2022/nov/16/barmy-army-is-more-than-just-booze-and-brass-as-pakistan-tour-beckons-cricket-spin",
            "urlToImage": "https://i.guim.co.uk/img/media/512cc3a84338611ee93b4c3f6df9d0c0953fe1c1/252_127_3107_1865/master/3107.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=435545d1b5a0eaa3b9870308c62d7bb6",
            "publishedAt": "2022-11-16T11:22:06Z",
            "content": "The casual cricket fan particularly one who avoids social media could conceivably think Englands Barmy Army remains a wholly amateur affair.\r\nA regular run of printed T-shirts, perhaps, and an uncomf… [+6579 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "PA Media",
            "title": "England T20 World Cup hero Alex Hales reprimanded over blackface photo",
            "description": "<ul><li>Cricketer dressed as rapper Tupac Shakur at 2009 party</li><li>Ateeq Javid reprimanded for antisemitic Facebook messages</li></ul>England’s T20 World Cup winner Alex Hales has been reprimanded for a historical social media post that showed him appeari…",
            "url": "https://www.theguardian.com/sport/2022/nov/16/england-t20-world-cup-hero-alex-hales-reprimanded-for-blackface-photo-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/7f2523c5117e5a6d9507ddb85e11063216149791/0_154_3926_2355/master/3926.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=06cec7c6bae660d912a5ca6051542f44",
            "publishedAt": "2022-11-16T15:43:24Z",
            "content": "Englands T20 World Cup winner Alex Hales has been reprimanded for a historical social media post that showed him appearing in blackface.\r\nHales, who helped Jos Buttlers side to glory in Melbourne on … [+1953 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Howcroft",
            "title": "T20 World Cup 2022 Super 12s: Australia v Afghanistan – live",
            "description": "<ul><li>Updates from the final Group 1 match at Adelaide Oval</li><li>Start time at the cricket is 6:30pm local/7pm AEDT/8am GMT</li><li>Any thoughts? Email Jonathan or tweet @JPHowcroft</li></ul>Have we already seen the last of Aaron Finch in an Australian u…",
            "url": "https://www.theguardian.com/sport/live/2022/nov/04/t20-world-cup-cricket-australia-vs-afghanistan-live-scores-updates-2022-super-12-12s-scorecard-aus-v-afg-latest-score",
            "urlToImage": "https://i.guim.co.uk/img/media/a0c33a0fcaa821da5bf5434a1d3d196f82e180b8/0_340_5103_3062/master/5103.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=859e12c902a9f7f4840b4d5b0d75b189",
            "publishedAt": "2022-11-04T07:36:42Z",
            "content": "Confirmation that Aaron Finch and Tim David will miss out through injury. Not only that but Mitchell Starc has been omitted (not sure why). In come Steve Smith, Cameron Green and Kane Richardson. \r\nG… [+4238 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "James Wallace",
            "title": "The Spin | T20 World Cup’s early drama has made fans an offer that’s hard to refuse",
            "description": "Amid the meaningless bilateral series and franchise tournaments in Twenty20, this World Cup is already memorable“Just when I thought I was out … they pull me back in,” growls Al Pacino’s ageing mobster Michael Corleone in The Godfather Part III. The one-time …",
            "url": "https://www.theguardian.com/sport/2022/oct/26/t20-world-cup-cricket-an-offer-hard-to-refuse",
            "urlToImage": "https://i.guim.co.uk/img/media/1a8a3de5d02e80db729cb59798226a5e8df67f49/0_312_5000_3002/master/5000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=360390e058419260471e898ff3a5f230",
            "publishedAt": "2022-10-26T13:00:02Z",
            "content": "Just when I thought I was out they pull me back in, growls Al Pacinos ageing mobster Michael Corleone in The Godfather Part III. The one-time mafia boss has been at pains to legitimise his ways and g… [+5985 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ali Martin in Islamabad",
            "title": "Private equity firm ‘makes £400m offer’ for 75% stake in the Hundred",
            "description": "<ul><li>Bridgepoint Group reported to have made the big bid</li><li>ECB chair has voiced caution on rights ‘feeding frenzy’</li></ul>English cricket has received a “£400m private equity approach” for a majority stake in the Hundred, a potentially gamechanging…",
            "url": "https://www.theguardian.com/sport/2022/nov/26/cricket-hundred-private-equity-offer-400-million",
            "urlToImage": "https://i.guim.co.uk/img/media/54881bfadf7e5ce5faa277b0ea31c4884f735512/0_234_3500_2100/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=ac7f7a21fdafaef6b64f58a7dca52ce5",
            "publishedAt": "2022-11-26T13:12:44Z",
            "content": "English cricket has received a £400m private equity approach for a majority stake in the Hundred, a potentially gamechanging moment for the sport. The offer for 75% of the sports newest competition h… [+2652 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Tanya Aldred",
            "title": "The Spin | Winter now brings big paydays not empty schedules for English cricketers",
            "description": "Long gone are the six months of no cricket for the county crew as today’s players can fill their boots across the globeIt was just over 20 years ago that Surrey’s Ed Giddins and Nadeem Shahid spent the first half of the off-season getting needles in their soc…",
            "url": "https://www.theguardian.com/sport/2022/nov/23/winter-now-brings-big-paydays-not-empty-schedules-and-emptier-pockets",
            "urlToImage": "https://i.guim.co.uk/img/media/f6ac4f9d6299d560cf2dc6a78e41fcc9a2a06851/0_69_2078_1247/master/2078.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=c994557bba32361e9aef38e6f015f80a",
            "publishedAt": "2022-11-23T12:42:14Z",
            "content": "It was just over 20 years ago that Surreys Ed Giddins and Nadeem Shahid spent the first half of the off-season getting needles in their socks flogging Christmas trees at Wandsworth roundabout. Times … [+5934 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Bull",
            "title": "Jos Buttler not fussed by a series defeat? Take that as a red flag on fixture overkill | Andy Bull",
            "description": "Can international cricket stay relevant with dead rubbers cropping up all over a dead-rubber logjam of a schedule?If you were listening carefully you might just have learned the answer to an ancient riddle in Melbourne, where Australia finished off their whit…",
            "url": "https://www.theguardian.com/sport/blog/2022/nov/24/jos-buttler-not-fussed-by-a-series-defeat-take-that-as-a-red-flag-on-fixture-overkill",
            "urlToImage": "https://i.guim.co.uk/img/media/3971e528bbd27a991401bdcbe9e4a7a90881143d/0_248_5200_3120/master/5200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=35fa059322d165b4630d3a903e6ab3db",
            "publishedAt": "2022-11-24T07:00:21Z",
            "content": "If you were listening carefully you might just have learned the answer to an ancient riddle in Melbourne, where Australia finished off their whitewash of England in the Contractual Obligation one-day… [+5760 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ali Martin",
            "title": "England’s first Test with Pakistan could move to Karachi due to political unrest",
            "description": "<ul><li>Venue switch from Rawalpindi to Karachi being considered</li><li>England’s Test squad is due to fly to Pakistan on 26 November</li></ul>England’s first Test in Pakistan for 17 years could be set for a late move from Rawalpindi to Karachi in response t…",
            "url": "https://www.theguardian.com/sport/2022/nov/15/first-test-of-englands-pakistan-tour-could-move-to-karachi-due-to-unrest",
            "urlToImage": "https://i.guim.co.uk/img/media/3dc3be0c9180f01b23c531483de69f5ac53ca53f/401_386_4217_2532/master/4217.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=9463736bdedd6014e4e7bb97972a6150",
            "publishedAt": "2022-11-15T16:49:16Z",
            "content": "Englands first Test in Pakistan for 17 years could be set for a late move from Rawalpindi to Karachi in response to political unrest in the country.\r\nThe recent assassination attempt on the former pr… [+2369 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Ali Martin",
            "title": "Yorkshire racism hearing to be held in public after request from Azeem Rafiq",
            "description": "<ul><li>Central witness in case made request for transparency</li><li>Michael Vaughan ‘will appear to defend himself’</li></ul>The impending Yorkshire racism hearing is to be held in public after the Cricket Disciplinary Commission acceded to a request for tr…",
            "url": "https://www.theguardian.com/sport/2022/nov/02/yorkshire-racism-hearing-to-be-held-public-after-request-azeem-rafiq",
            "urlToImage": "https://i.guim.co.uk/img/media/e79f11ff87fa5a846832ba4711257743365db093/20_39_2651_1590/master/2651.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ae7778a899f65eca45ace51c6fbfc218",
            "publishedAt": "2022-11-02T22:52:09Z",
            "content": "The impending Yorkshire racism hearing is to be held in public after the Cricket Disciplinary Commission acceded to a request for transparency from Azeem Rafiq, the central witness in the case.\r\nMich… [+2991 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Barney Ronay",
            "title": "Cold-eyed Josball emerges at critical time for England at T20 World Cup | Barney Ronay",
            "description": "Key to victory against New Zealand were England’s seamers but Ben Stokes’s role in the team invites plenty of questionsThis was a very satisfying game of cricket, a mid-tournament group match in a rain-frazzled week that stayed alive for 39 of its 40 overs, p…",
            "url": "https://www.theguardian.com/sport/blog/2022/nov/01/cold-eyed-josball-emerges-at-critical-time-for-england-at-t20-world-cup",
            "urlToImage": "https://i.guim.co.uk/img/media/745edb451fc33860cb6ae97193c3b16cd3e7e9e6/0_112_2342_1405/master/2342.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=01f7ae5d559a5fcf73fa6fb191e687c5",
            "publishedAt": "2022-11-01T17:45:58Z",
            "content": "This was a very satisfying game of cricket, a mid-tournament group match in a rain-frazzled week that stayed alive for 39 of its 40 overs, played out in front of a semi-packed Gabba. In the broader s… [+5352 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Simon Burnton",
            "title": "Mark Wood admits worry over Pakistan tour after attack on Imran Khan",
            "description": "<ul><li>No plans to abandon first England Tests in country since 2005</li><li>Mark Wood admits: ‘I’d be lying if I said I wasn’t worried’</li></ul>Mark Wood has admitted the attempted assassination of the former Pakistan prime minister – and former captain of…",
            "url": "https://www.theguardian.com/sport/2022/nov/04/mark-wood-admits-england-safety-fears-in-pakistan-after-attack-on-imran-khan-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/95967fd4f90d95fde984f1a1a1816079590c54d7/356_389_2569_1541/master/2569.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=8e104b1a7c05d74d562f88466fa97cab",
            "publishedAt": "2022-11-04T18:00:28Z",
            "content": "Mark Wood has admitted the attempted assassination of the former Pakistan prime minister and former captain of the national cricket team Imran Khan on Thursday is a cause for concern but the England … [+2086 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Simon Burnton in Melbourne",
            "title": "Alex Hales ‘hard to keep out’ of 50-over World Cup after fine England return",
            "description": "<ul><li>Coach Matthew Mott says opener has been ‘a real lightning rod’</li><li>Hales has been one of England’s players of T20 World Cup</li></ul>Alex Hales’s rehabilitation into the England setup could continue beyond Sunday’s T20 World Cup final after the wh…",
            "url": "https://www.theguardian.com/sport/2022/nov/11/alex-hales-hard-to-keep-out-of-50-over-world-cup-after-fine-england-return-t20",
            "urlToImage": "https://i.guim.co.uk/img/media/bbdcf90028cdee69dfb789d77052cd903fb7204f/0_195_3402_2041/master/3402.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=1ff2ed3ac338ece1a9d09d03e3e70e47",
            "publishedAt": "2022-11-11T18:00:17Z",
            "content": "Alex Haless rehabilitation into the England setup could continue beyond Sundays T20 World Cup final after the white-ball coach, Matthew Mott, indicated that he was ready to bring the opener into the … [+3036 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Jonathan Howcroft",
            "title": "T20 World Cup 2022 Super 12s: Australia v England – live",
            "description": "<ul><li>Updates from the crunch Group 1 match at the MCG</li><li>Start time at the cricket in Melbourne is 7pm AEDT/9am BST</li><li>Any thoughts? Email Jonathan or tweet @JPHowcroft</li></ul>Hello everybody and welcome to live coverage of the 2022 ICC Men’s T…",
            "url": "https://www.theguardian.com/sport/live/2022/oct/28/t20-world-cup-cricket-australia-vs-england-live-scores-updates-2022-super-12-12s-scorecard-aus-v-eng-latest-score",
            "urlToImage": "https://i.guim.co.uk/img/media/b0224626f07aa65cd4e70a37a0e34288195f2d3e/0_0_8079_4847/master/8079.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=27cca939cf95b2d4912eedf12c622b7a",
            "publishedAt": "2022-10-28T07:03:48Z",
            "content": "Show key events onlyPlease turn on JavaScript to use this feature\r\nGeoff Lemon sets the scene for a match that may never take place, cautioning that Australia and England in their current state is no… [+3069 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Andy Bull",
            "title": "Saqlain Mushtaq’s mystical charm inspires Pakistan to triumph through instinct | Andy Bull",
            "description": "Coach’s law of nature speech highlights take-as-it-comes approach which has helped propel unlikely run to final“The mistake they make,” Harold Pinter said, “is to attempt to determine and calculate, with the finest instruments, the source of the wound”. He wa…",
            "url": "https://www.theguardian.com/sport/2022/nov/09/saqlain-mushtaq-mystical-charm-inspires-pakistan-to-triumph-through-instinct-t20-cricket",
            "urlToImage": "https://i.guim.co.uk/img/media/16e6d6b15df6fbd35714dac995c00898362b84d4/0_107_3212_1927/master/3212.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctb3BpbmlvbnMucG5n&enable=upscale&s=9712f6c23234a44125cc26c55ed108e9",
            "publishedAt": "2022-11-09T15:17:36Z",
            "content": "The mistake they make, Harold Pinter said, is to attempt to determine and calculate, with the finest instruments, the source of the wound. He wasnt talking about cricket (that time) but the words sti… [+5058 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Angus Fontaine",
            "title": "Big blow to the Big Show as Glenn Maxwell suffers freak accident at party",
            "description": "<ul><li>Star allrounder has undergone surgery today for a broken leg</li><li>Maxwell will miss ODI series against England and India Test tour</li></ul>Star allrounder Glenn Maxwell could miss the rest of the summer and faces a lengthy rehabilitation after bre…",
            "url": "https://www.theguardian.com/sport/2022/nov/13/big-blow-to-the-big-show-as-glenn-maxwell-suffers-freak-accident-at-party",
            "urlToImage": "https://i.guim.co.uk/img/media/9c632bc2bbf79c9d8a6c0e84606dd9caeb827817/0_137_4119_2473/master/4119.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f4d9b8b2a34d4bdecfdf37ee610576e5",
            "publishedAt": "2022-11-13T06:37:12Z",
            "content": "Star allrounder Glenn Maxwell could miss the rest of the summer and faces a lengthy rehabilitation after breaking his leg in a freak accident at a 50th birthday party in Melbourne this weekend.\r\nThe … [+3358 chars]"
        }
    ]
}
const apple={
    "status": "ok",
    "totalResults": 34742,
    "articles": [
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "Your Mac Has a Hidden White Noise Generator",
            "description": "If you want to drown out environmental noise, or you just like having white noise in the background while you work, you should try your Mac’s white noise generator. The feature is actually built into every Mac that runs macOS Ventura, you just need to know wh…",
            "url": "https://lifehacker.com/your-mac-has-a-hidden-white-noise-generator-1849760988",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/a1c777020d9b1f9dd584d56f5350bba7.jpg",
            "publishedAt": "2022-11-09T16:00:00Z",
            "content": "If you want to drown out environmental noise, or you just like having white noise in the background while you work, you should try your Macs white noise generator. The feature is actually built into … [+1902 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Stephen Johnson",
            "title": "10 Stealth Thanksgiving Movies",
            "description": "There are too many Christmas movies and too few Thanksgiving movies. The first that comes to most people’s minds is Planes, Trains, and Automobiles, then maybe Adams Family Values or the horrible Alice’s Restaurant. But after that, there aren’t too many to sp…",
            "url": "https://lifehacker.com/10-stealth-thanksgiving-movies-1849769620",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b241072f20207d2664b014792b954368.jpg",
            "publishedAt": "2022-11-11T15:00:00Z",
            "content": "Sylvester Stallones tale of a palooka from Philly who gets a lucky break contains a Thanksgiving scene where Rockys mousy girlfriend Adrian is preparing a turkey. Paulie, her asshole brother, throws … [+730 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Why Other Devices Put Your Laptop to Sleep",
            "description": "Like smartphones and other battery-powered devices, laptops go to sleep to conserve energy. But you might notice your machine hitting the sack in the middle of work, for no apparent reason other than bringing another device too close. No, the battery didn’t d…",
            "url": "https://lifehacker.com/why-other-devices-put-your-laptop-to-sleep-1849715303",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/e8211fc273e83d4391f542ed2a907693.jpg",
            "publishedAt": "2022-10-28T17:30:00Z",
            "content": "Like smartphones and other battery-powered devices, laptops go to sleep to conserve energy. But you might notice your machine hitting the sack in the middle of work, for no apparent reason other than… [+2341 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Jake Peterson",
            "title": "Your Gmail Account Has Unlimited Addresses",
            "description": "One Gmail, one address. That seems right. After all, you have one phone number, and one home address. The same should be true for your email addresses, Gmail included. As it happens, though, your Gmail account has an unlimited number of addresses you can use …",
            "url": "https://lifehacker.com/your-gmail-account-has-unlimited-addresses-1849809691",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/eb6379b4849ccb20a4cdc3a96df9096d.jpg",
            "publishedAt": "2022-11-21T22:00:00Z",
            "content": "One Gmail, one address. That seems right. After all, you have one phone number, and one home address. The same should be true for your email addresses, Gmail included. As it happens, though, your Gma… [+2932 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Lifehacker.com"
            },
            "author": "Pranay Parab",
            "title": "Hidden Xbox Settings You Should Change to Up Your Game",
            "description": "The Xbox is a fantastic console that ships with pretty good software. Fortunately, it has even greater potential: Your Xbox contains plenty of hidden features that are not enabled by default. All it takes is a deep dive through the settings, however, to make …",
            "url": "https://lifehacker.com/hidden-xbox-settings-you-should-change-to-up-your-game-1849709275",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/b73c76e76831bcf29e4b525ad960de7e.jpg",
            "publishedAt": "2022-10-27T18:30:00Z",
            "content": "The Xbox is a fantastic console that ships with pretty good software. Fortunately, it has even greater potential: Your Xbox contains plenty of hidden features that are not enabled by default. All it … [+4227 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Nathan Ingraham",
            "title": "Apple iPad (2022) review: An expensive facelift",
            "description": "Apple can rarely leave well enough alone. A year ago, I thought each of the four tablets in the iPad lineup was differentiated well from the others, and it was fairly easy to see what features you got as things got more expensive. The new 10th-generation iPad…",
            "url": "https://www.engadget.com/apple-ipad-10th-generation-review-160014897.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/eeed7221-56c8-11ed-a597-98db309f1bfd",
            "publishedAt": "2022-10-28T16:00:14Z",
            "content": "Screen\r\nCompared to last years iPad, the screen here is definitely bigger, but not better in any measurable way. Its the same 10.9 inches as the iPad Air (up from 10.2 inches), and that does make wor… [+3260 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Apple Store employees in Glasgow vote to unionize",
            "description": "Workers at an Apple Store in Glasgow, Scotland, voted on Wednesday to unionize. The vote came after “several” months of negotiations that eventually saw Apple agree to recognize the ballot voluntarily. According to The Herald, employees at the company’s Bucha…",
            "url": "https://www.engadget.com/apple-store-glasgow-scotland-vote-to-unionize-182001646.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/f7b95460-5ad7-11ed-bbd6-777359a0ae04",
            "publishedAt": "2022-11-02T18:20:01Z",
            "content": "Workers at an Apple Store in Glasgow, Scotland, voted on Wednesday to unionize. The vote came after several months of negotiations that eventually saw Apple agree to recognize the ballot voluntarily.… [+1687 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Spotify’s redesigned Apple Watch app feels less like an afterthought",
            "description": "Spotify is giving its Apple Watch users some love, adding UI and playback upgrades that more closely align with the familiar experience from larger screens. In an update that starts rolling out today, watchOS users will see a beefed-up Your Library view with …",
            "url": "https://www.engadget.com/spotify-apple-watch-app-watchos-offline-shuffle-podcasts-182436855.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/26fc9110-6050-11ed-bf1b-fc52e273c5f3",
            "publishedAt": "2022-11-09T18:24:36Z",
            "content": "Spotify is giving its Apple Watch users some love, adding UI and playback upgrades that more closely align with the familiar experience from larger screens. In an update that starts rolling out today… [+1835 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Daniel Cooper",
            "title": "The Morning After: The new Apple TV 4K reviewed",
            "description": "I’ve always wanted an Apple TV, but the high price and locked-down features made me opt for Roku’s ecosystem instead. And while I appreciate the freedom Roku offers, Devindra Hardawar’s review of the new TV 4K almost turned my head.The 2022 model is cheaper, …",
            "url": "https://www.engadget.com/the-morning-after-the-new-apple-tv-4-k-reviewed-111540818.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/63248b60-5c28-11ed-9eff-93e5fa5445e8",
            "publishedAt": "2022-11-04T11:15:40Z",
            "content": "Ive always wanted an Apple TV, but the high price and locked-down features made me opt for Rokus ecosystem instead. And while I appreciate the freedom Roku offers, Devindra Hardawars review of the ne… [+2639 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Nathan Ingraham",
            "title": "Apple iPad Pro review (2022): An impressive stopgap",
            "description": "Apple just released two new iPads. One of them, the basic 10th-generation iPad, was rebuilt from the ground up. The new iPad Pro, on the other hand, is a much simpler update. The company took last year’s model, swapped the M1 chip for the M2, made a few other…",
            "url": "https://www.engadget.com/apple-ipad-pro-2022-m2-review-140026198-140026510-140026377-140026181.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/bf461bf0-59e1-11ed-9df3-71cf9e8f9865",
            "publishedAt": "2022-11-01T14:00:26Z",
            "content": "Apple just released two new iPads. One of them, the basic 10th-generation iPad, was rebuilt from the ground up. The new iPad Pro, on the other hand, is a much simpler update. The company took last ye… [+6575 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Nathan Ingraham",
            "title": "Apple iPad Pro review (2022): An impressive stopgap",
            "description": "Apple just released two new iPads. One of them, the basic 10th-generation iPad, was rebuilt from the ground up. The new iPad Pro, on the other hand, is a much simpler update. The company took last year’s model, swapped the M1 chip for the M2, made a few other…",
            "url": "https://www.engadget.com/apple-ipad-pro-2022-m2-review-140026198.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/bf461bf0-59e1-11ed-9df3-71cf9e8f9865",
            "publishedAt": "2022-11-01T14:00:26Z",
            "content": "Apple just released two new iPads. One of them, the basic 10th-generation iPad, was rebuilt from the ground up. The new iPad Pro, on the other hand, is a much simpler update. The company took last ye… [+6575 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple turns healthy profit despite weak iPad sales",
            "description": "Apple seems to be weathering the financial storm, albeit with a few hitches. The company reported a record high revenue of $90.1 billion in its fiscal fourth quarter, with a net profit of $20.7 billion. While those were only slight increases versus the same p…",
            "url": "https://www.engadget.com/apple-q4-2022-earnings-215812098.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/770631e0-563a-11ed-9ed2-56cf3d5673fb",
            "publishedAt": "2022-10-27T21:58:12Z",
            "content": "Apple seems to be weathering the financial storm, albeit with a few hitches. The company reported a record high revenue of $90.1 billion in its fiscal fourth quarter, with a net profit of $20.7 billi… [+2291 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: Apple introduces AirDrop limit in China",
            "description": "The latest iOS update Apple rolled out in China came with something not included in the release for other regions. According to Bloomberg, it limits the time a user can receive files via AirDrop from non-contacts to 10 minutes. Activists and protesters in Chi…",
            "url": "https://www.engadget.com/the-morning-after-apple-puts-a-10-minute-cap-on-receiving-air-drop-transfers-in-china-121520565.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ac7c5210-5ac1-11ed-bff9-c3c9802e4b76",
            "publishedAt": "2022-11-11T12:15:20Z",
            "content": "The latest iOS update Apple rolled out in China came with something not included in the release for other regions. According to Bloomberg, it limits the time a user can receive files via AirDrop from… [+4173 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "Apple TV 4K review (2022): Still the best streaming box by a long shot",
            "description": "After Apple finally gave us a decent Siri remote last year, I couldn't imagine the Apple TV 4K getting much better. It's not like anyone is clamoring for an 8K upgrade – all we need these days is support for fast 4K streaming, as well as the multitude of HDR …",
            "url": "https://www.engadget.com/apple-tv-4k-review-2022-faster-cheaper-best-streaming-box-150013627.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/dead6340-5b80-11ed-bfcf-284c8793ce3b",
            "publishedAt": "2022-11-03T15:00:13Z",
            "content": "After Apple finally gave us a decent Siri remote last year, I couldn't imagine the Apple TV 4K getting much better. It's not like anyone is clamoring for an 8K upgrade all we need these days is suppo… [+3767 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Former Apple employee admits to defrauding the company out of $17 million",
            "description": "A former Apple\r\n employee has pled guilty to defrauding the company out of over $17 million. Dhirendra Prasad, who spent most of his decade at Apple working as a buyer in the Global Service Supply Chain department, admitted to \"taking kickbacks, inflating inv…",
            "url": "https://www.engadget.com/former-apple-employee-admits-defrauding-the-company-out-of-17-million-154208844.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ac7c5210-5ac1-11ed-bff9-c3c9802e4b76",
            "publishedAt": "2022-11-02T15:42:08Z",
            "content": "A former Apple\r\n employee has pled guilty to defrauding the company out of over $17 million. Dhirendra Prasad, who spent most of his decade at Apple working as a buyer in the Global Service Supply Ch… [+1839 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "iPhones will get USB-C charging to comply with EU law, Apple SVP confirms",
            "description": "When the European Parliament voted in favor of making USB-C the common charging standard in the region, it was pretty obvious which company was going to be the most affected by the mandate. Apple, of course. While the tech giant already has iPad models with U…",
            "url": "https://www.engadget.com/iphones-switch-usb-c-comply-eu-charger-law-075020117.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/cde87e00-54f5-11ed-9f96-6df9a7a21e26",
            "publishedAt": "2022-10-26T07:50:20Z",
            "content": "When the European Parliament voted in favor of making USB-C the common charging standard in the region, it was pretty obvious which company was going to be the most affected by the mandate. Apple, of… [+2118 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Apple pulls gambling ads from App Store product pages following backlash",
            "description": "On October 25th, Apple started displaying more ads in the App Store, particularly in the \"Today\" tab and at the bottom of app listings. Since then, multiple developers have complained about getting ads for gambling under their listings' \"You Might Also Like\" …",
            "url": "https://www.engadget.com/apple-pulls-gambling-ads-from-app-store-product-pages-082207219.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2020-03/51328a80-652a-11ea-bffb-88b19fc42fdd",
            "publishedAt": "2022-10-27T08:22:07Z",
            "content": "On October 25th, Apple started displaying more ads in the App Store, particularly in the \"Today\" tab and at the bottom of app listings. Since then, multiple developers have complained about getting a… [+1678 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "The Apple Watch Series 8 is $50 off ahead of Black Friday",
            "description": "At just $349, this is the lowest price we've seen on the Apple Watch Series 8. It's gone this low before, but it never stays on sale for long. If you've been thinking about upgrading or getting your first Apple Watch, now might be a good time to move on it. B…",
            "url": "https://www.engadget.com/the-apple-watch-series-8-is-50-off-ahead-of-black-friday-210357649.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/858128d0-3491-11ed-aeec-c03b39ac030c",
            "publishedAt": "2022-11-14T21:03:57Z",
            "content": "At just $349, this is the lowest price we've seen on the Apple Watch Series 8. It's gone this low before, but it never stays on sale for long. If you've been thinking about upgrading or getting your … [+1674 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Apple Watch Series 8 cellular models are $110 off right now",
            "description": "Amazon is having a sale on its latest Watches, with a particularly good deal on the Series 8 cellular model. You can grab one of those in multiple colors for just $389, for a savings of $110 off the regular $499 price (22 percent off). If its a Watch LE model…",
            "url": "https://www.engadget.com/apples-watch-series-8-cellular-models-are-110-off-right-now-102040821.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/889703a0-5e7b-11ed-afb9-043b30b9fcd9",
            "publishedAt": "2022-11-07T10:20:40Z",
            "content": "Amazon is having a sale on its latest Watches, with a particularly good deal on the Series 8 cellular model. You can grab one of those in multiple colors for just $389, for a savings of $110 off the … [+1612 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: UK competition regulator investigates Apple and Google's mobile dominance",
            "description": "Apple and Google’s domination across the mobile internet is under scrutiny again. Earlier this year, the UK's Competition and Markets Authority (CMA) said it was consulting on a possible probe into Google and Apple's dominance in the mobile phone market. Now,…",
            "url": "https://www.engadget.com/the-morning-after-uk-competition-regulator-investigates-apple-and-googles-mobile-dominance-121545408.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2020-02/c22eb980-521e-11ea-bb87-d7f01043e879",
            "publishedAt": "2022-11-23T12:15:45Z",
            "content": "Apple and Googles domination across the mobile internet is under scrutiny again. Earlier this year, the UK's Competition and Markets Authority (CMA) said it was consulting on a possible probe into Go… [+2964 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: iPhone usage data may not be as anonymous as Apple claims",
            "description": "Developers at Mysk claim Apple's anonymous usage data for some of its in-house apps includes a Directory Services Identifier (DSID) uniquely linked to your Apple ID and iCloud data. Mysk notes that Apple's tool to prevent third-party app tracking debuted in i…",
            "url": "https://www.engadget.com/the-morning-after-i-phone-usage-data-may-not-be-as-anonymous-as-apple-claims-121555784.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/32d0f3b0-521c-11ed-bad3-4bf45e1f7ed2",
            "publishedAt": "2022-11-22T12:15:55Z",
            "content": "Developers at Mysk claim Apple's anonymous usage data for some of its in-house apps includes a Directory Services Identifier (DSID) uniquely linked to your Apple ID and iCloud data. Mysk notes that A… [+3172 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "The best Black Friday Apple deals on iPads, MacBooks, AirPods and more",
            "description": "When it comes to aesthetics, innovation and user-friendly interfaces — not to mention pure desirability — Apple's a tough act to beat. But Apple devices aren't cheap. Black Friday deals have made many of the brand's best and most recent products much more aff…",
            "url": "https://www.engadget.com/best-black-friday-apple-deals-on-ipads-macbooks-airpods-and-more-123050079.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/bf461bf0-59e1-11ed-9df3-71cf9e8f9865",
            "publishedAt": "2022-11-25T12:30:50Z",
            "content": "When it comes to aesthetics, innovation and user-friendly interfaces not to mention pure desirability Apple's a tough act to beat. But Apple devices aren't cheap. Black Friday deals have made many of… [+9348 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Apple puts a 10-minute cap on receiving AirDrop transfers in China",
            "description": "The iOS 16.1.1 update Apple rolled out in China came with something extra that wasn't included in the release for other regions. According to Bloomberg, it limits the window of time a user can receive files via AirDrop from non-contacts to 10 minutes. Prior t…",
            "url": "https://www.engadget.com/apple-10-minute-cap-everyone-airdrop-090340980.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2020-01/d09639e0-42c8-11ea-be7f-e08d286de858",
            "publishedAt": "2022-11-10T09:03:40Z",
            "content": "The iOS 16.1.1 update Apple rolled out in China came with something extra that wasn't included in the release for other regions. According to Bloomberg, it limits the window of time a user can receiv… [+1654 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "Apple lets you practice sending emergency SOS texts via satellite in new demo mode",
            "description": "One of the most noteworthy updates Apple brought to the iPhone 14 series this year is Emergency SOS via satellite. It lets you send text messages to emergency services over satellite if you're in need of help and outside of cellular coverage. The company hope…",
            "url": "https://www.engadget.com/apple-emergency-sos-satellite-test-demo-mode-130039707.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/b4ebe7a0-646f-11ed-af7f-1864779c6c6c",
            "publishedAt": "2022-11-15T13:00:39Z",
            "content": "One of the most noteworthy updates Apple brought to the iPhone 14 series this year is Emergency SOS via satellite. It lets you send text messages to emergency services over satellite if you're in nee… [+1972 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "Engadget Podcast: A foldable iPhone, Meta layoffs and the fall of FTX",
            "description": "We’re still waiting for Apple to deliver a genuine foldable iPhone, but that didn’t stop a group of engineers in China from crafting their own prototype. This week, Cherlynn and Devindra dive into the possibility of a real foldable iPhone, plus they discuss M…",
            "url": "https://www.engadget.com/engadget-podcast-foldable-iphone-hack-133040034.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-05/f43b53b0-909f-11ea-87fd-d8d721459924",
            "publishedAt": "2022-11-11T13:30:40Z",
            "content": "Were still waiting for Apple to deliver a genuine foldable iPhone, but that didnt stop a group of engineers in China from crafting their own prototype. This week, Cherlynn and Devindra dive into the … [+1242 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Valentina Palladino",
            "title": "Apple's AirTag 4-pack drops to a new record low ahead of Black Friday",
            "description": "AirTags make great stocking stuffers for your loved ones who are constantly forgetting where they put their most important things. If you want to pick up a few, Amazon has the four-pack of AirTags for only $80 right now, which is the lowest price we've seen o…",
            "url": "https://www.engadget.com/apples-airtag-4-pack-drops-to-a-new-record-low-ahead-of-black-friday-141002755.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-04/563d46f0-a336-11eb-badb-362b28ea55b4",
            "publishedAt": "2022-11-20T14:10:02Z",
            "content": "AirTags make great stocking stuffers for your loved ones who are constantly forgetting where they put their most important things. If you want to pick up a few, Amazon has the four-pack of AirTags fo… [+1776 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Apple's 2021 iPad is back on sale for $269 ahead of Black Friday",
            "description": "If you're looking for an iPad\r\n for a loved one this holiday season and don't want to break your budget, it might be worth considering the 2021 version of the tablet. That was already the most affordable iPad on the market and now you can snap it up for a ste…",
            "url": "https://www.engadget.com/apple-ipad-black-friday-deal-184504635.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/31ffdba1-21ed-11ec-bd7b-62669876f802",
            "publishedAt": "2022-11-17T18:45:04Z",
            "content": "If you're looking for an iPad for a loved one this holiday season and don't want to break your budget, it might be worth considering the 2021 version of the tablet. That was already the most affordab… [+1927 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Windows 11's iCloud Photos integration is now available",
            "description": "If you use an iPhone and a Windows PC, syncing photos is about to get a lot easier. The feature Microsoft announced last month that adds iCloud Photos to the Windows Photos app\r\n begins rolling out today. Microsoft says\r\n it will be available to all Windows 1…",
            "url": "https://www.engadget.com/windows-11-icloud-photos-update-214218257.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/2d0453f0-6072-11ed-bff3-50811c2a4f4c",
            "publishedAt": "2022-11-09T21:42:18Z",
            "content": "If you use an iPhone and a Windows PC, syncing photos is about to get a lot easier. The feature Microsoft announced last month that adds iCloud Photos to the Windows Photos app\r\n begins rolling out t… [+1138 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Valentina Palladino",
            "title": "Apple's second-generation AirPods Pro drop to $200 for Black Friday",
            "description": "If you've been holding out for the best possible deal on the latest AirPods Pro, today might be the day to take the plunge. Apple's newest earbuds have dropped to $200 ahead of Black Friday proper, and that's $50 off their usual price and the best we've seen.…",
            "url": "https://www.engadget.com/apples-second-generation-airpods-pro-drop-to-200-for-black-friday-133540233.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/9c0c14e0-39fd-11ed-bff7-79b7ce0a4b0e",
            "publishedAt": "2022-11-20T13:35:40Z",
            "content": "If you've been holding out for the best possible deal on the latest AirPods Pro, today might be the day to take the plunge. Apple's newest earbuds have dropped to $200 ahead of Black Friday proper, a… [+1801 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Apple's second-gen AirPods Pro fall to a new all-time low",
            "description": "If you've been waiting on a sale for Apple's second-generation AirPods Pro, that patience has paid off. Amazon is offering them at the lowest price we've seen yet, $230 or $19 (8 percent) off the regular $249 price tag. While not an enormous price cut, it's a…",
            "url": "https://www.engadget.com/apples-air-pods-pro-2nd-gen-fall-to-a-new-all-time-low-130521039.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/6d1675c0-6416-11ed-a5bf-6e442f1c7f3c",
            "publishedAt": "2022-11-14T13:05:21Z",
            "content": "If you've been waiting on a sale for Apple's second-generation AirPods Pro, that patience has paid off. Amazon is offering them at the lowest price we've seen yet, $230 or $19 (8 percent) off the reg… [+1172 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Roku's revamped sports hub makes it easier to watch live games",
            "description": "The sheer variety of streaming services can make it difficult to know just where and how to tune into sports, but Roku thinks it can help. The company has debuted a revised sports \"experience\" that puts live and upcoming matches in one place. You can tune int…",
            "url": "https://www.engadget.com/roku-new-sports-experience-140022545.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/060c0db0-5c6c-11ed-956f-46e341fcf871",
            "publishedAt": "2022-11-10T14:00:22Z",
            "content": "The sheer variety of streaming services can make it difficult to know just where and how to tune into sports, but Roku thinks it can help. The company has debuted a revised sports \"experience\" that p… [+1107 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Apple's latest 11-inch iPad Pro has received its first discount at $749",
            "description": "Apple's latest 11-inch iPad Pro has received its first discount, with both Amazon and B&H dropping the 128GB version of the new tablet down to $749. That's a modest $50 off and still rather expensive, but Apple only launched this refresh a couple of weeks ago…",
            "url": "https://www.engadget.com/apple-ipad-pro-11-inch-m2-has-received-its-first-discount-at-749-174915244.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/55b8aa80-5ec4-11ed-9938-d3c46fba8919",
            "publishedAt": "2022-11-07T17:49:15Z",
            "content": "Apple's latest 11-inch iPad Pro has received its first discount, with both Amazon and B&amp;H dropping the 128GB version of the new tablet down to $749. That's a modest $50 off and still rather expen… [+3286 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Steve Dent",
            "title": "Beats Fit Pro fall to new low of $145",
            "description": "Apple's Beats Fit Pro wireless earbuds are a good alternative to AirPods, as they offer the same features like ANC and spatial audio, but offer a better fit. If the $200 price has given you pause, you can now pick up a pair at Woot for $145 (28 percent off) —…",
            "url": "https://www.engadget.com/beats-fit-pro-fall-to-new-low-of-145-for-today-only-085343121.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/ef0660b0-5b4f-11ed-bbcb-470fbb133435",
            "publishedAt": "2022-11-03T08:53:43Z",
            "content": "Apple's Beats Fit Pro wireless earbuds are a good alternative to AirPods, as they offer the same features like ANC and spatial audio, but offer a better fit. If the $200 price has given you pause, yo… [+1292 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Elizabeth Warren wants regulators to examine Big Tech's expansion into autos",
            "description": "Elizabeth Warren is calling for more federal oversight of Big Tech. In a letter (PDF link\r\n) the Democratic senator sent on Tuesday\r\n, she asked the Federal Trade Commission and Department of Justice to look into Google, Apple and Amazon’s expansion into the …",
            "url": "https://www.engadget.com/elizabeth-warren-ftc-doj-letter-big-tech-automotive-210050289.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/23ee4ed0-5aee-11ed-a7af-faa6ed6bf912",
            "publishedAt": "2022-11-02T21:00:50Z",
            "content": "Elizabeth Warren is calling for more federal oversight of Big Tech. In a letter (PDF link\r\n) the Democratic senator sent on Tuesday\r\n, she asked the Federal Trade Commission and Department of Justice… [+2734 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Apple's latest 11-inch iPad Pro is $70 off ahead of Black Friday",
            "description": "If you’ve been on the fence about Apple’s latest 11-inch iPad Pro, now is a good time to consider taking the plunge. Amazon currently has the entry-level 128GB model with WiFi for $729. Although that’s still a steep price, this model was only released a few w…",
            "url": "https://www.engadget.com/apple-ipad-pro-11-m2-sale-181021598.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/b7325b30-669e-11ed-9fee-bedb7965d880",
            "publishedAt": "2022-11-17T18:10:21Z",
            "content": "If youve been on the fence about Apples latest 11-inch iPad Pro, now is a good time to consider taking the plunge. Amazon currently has the entry-level 128GB model with WiFi for $729. Although thats … [+2481 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Apple's MagSafe Battery Pack is down to a new low of $71",
            "description": "Apple's MagSafe Battery Pack is exactly what it says on the tin: a portable battery that snaps to the back of an iPhone through Apple's MagSafe magnetic charging tech and charges the handset wirelessly. The battery is a tougher sell at full price, but today i…",
            "url": "https://www.engadget.com/apple-magsafe-battery-pack-deal-down-to-new-low-71-amazon-174136959.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/129fd1b0-dff8-11ec-bfe2-b7143f3918e0",
            "publishedAt": "2022-11-11T17:41:36Z",
            "content": "Apple's MagSafe Battery Pack is exactly what it says on the tin: a portable battery that snaps to the back of an iPhone through Apple's MagSafe magnetic charging tech and charges the handset wireless… [+3575 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: Tuvalu, threatened by climate change, turns to the metaverse",
            "description": "Tuvalu’s foreign minister, Simon Kofe, told the COP27 climate summit yesterday that Tuvalu would look to the metaverse to preserve its culture and history. With global temperatures expected to rise as much as 2.8 degrees Celsius by the end of the century, the…",
            "url": "https://www.engadget.com/the-morning-after-tuvalu-threatened-by-climate-change-turns-to-the-metaverse-121421837.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/b672f960-650a-11ed-bbf7-17c1224d0832",
            "publishedAt": "2022-11-16T12:14:21Z",
            "content": "Tuvalus foreign minister, Simon Kofe, told the COP27 climate summit yesterday that Tuvalu would look to the metaverse to preserve its culture and history. With global temperatures expected to rise as… [+5054 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Modders thought it would be fun to make a folding iPhone",
            "description": "You don't have wait for Apple to see what a foldable iPhone would look like in practice. China-based The Aesthetics of Science and Technology (AST) claims to have built a folding iPhone through heavy modifications. The engineers say they created the one-off w…",
            "url": "https://www.engadget.com/folding-iphone-unofficial-171559538.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/5183fe30-6048-11ed-aed0-07edb649475b",
            "publishedAt": "2022-11-09T17:15:59Z",
            "content": "You don't have wait for Apple to see what a foldable iPhone would look like in practice. China-based The Aesthetics of Science and Technology (AST) claims to have built a folding iPhone through heavy… [+1819 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Amazon orders limited series about the FTX crypto exchange scandal",
            "description": "The Russo brothers are creating a series for Amazon based on the story of how FTX, which was once one of the most well-known crypto exchanges, met such a swift and scandalous end. According to Variety, Amazon has approved a limited series adaptation with eigh…",
            "url": "https://www.engadget.com/amazon-orders-limited-series-ftx-crypto-exchange-scandal-130016613.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-05/a4dfe360-d2c1-11ec-9ef3-02ed92577f35",
            "publishedAt": "2022-11-24T13:00:16Z",
            "content": "The Russo brothers are creating a series for Amazon based on the story of how FTX, which was once one of the most well-known crypto exchanges, met such a swift and scandalous end. According to Variet… [+2392 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Cherlynn Low",
            "title": "The best fitness gifts for your friends who workout",
            "description": "Fitness fanatics can be pretty intense. You’ll probably identify us from miles away, decked out in workout gear, obsessing over the food we eat, or discussing our gains nonstop. A fitness lover has probably invested a lot of time and money into tools that can…",
            "url": "https://www.engadget.com/best-fitness-gifts-for-your-friends-who-workout-141522914.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/3be53ae0-6042-11ed-97f5-00c0cc34e0a8",
            "publishedAt": "2022-11-22T14:15:22Z",
            "content": "Fitness fanatics can be pretty intense. Youll probably identify us from miles away, decked out in workout gear, obsessing over the food we eat, or discussing our gains nonstop. A fitness lover has pr… [+11124 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "Apple's AirPods Pro hit a new low of $234, plus the rest of this week's best tech deals",
            "description": "You might think retailers would be holding their collective breath before the sales frenzy of Black Friday kicks in, but we found some pretty impressive deals on late-model tech this week. Apple's AirPods Pro dropped to a new low, while the Apple Watch SE wit…",
            "url": "https://www.engadget.com/apples-air-pods-pro-hit-a-new-low-of-234-plus-the-rest-of-this-weeks-best-tech-deals-191458891.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/9bd30380-39fd-11ed-9daf-94386034b5b5",
            "publishedAt": "2022-11-11T19:14:58Z",
            "content": "You might think retailers would be holding their collective breath before the sales frenzy of Black Friday kicks in, but we found some pretty impressive deals on late-model tech this week. Apple's Ai… [+16567 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Google's Pixel Buds Pro are cheaper than ever for Black Friday",
            "description": "This is a prime opportunity to go shopping if you're looking for more Android-friendly alternatives to Apple AirPods. Amazon is selling the Google Pixel Buds Pro for $150 as part of a Black Friday sale — a full $50 discount that represents the best price we'v…",
            "url": "https://www.engadget.com/google-pixel-buds-pro-black-friday-sale-133207724.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/e1c33590-69b4-11ed-b62f-e202b469f0e4",
            "publishedAt": "2022-11-22T13:32:07Z",
            "content": "This is a prime opportunity to go shopping if you're looking for more Android-friendly alternatives to Apple AirPods. Amazon is selling the Google Pixel Buds Pro for $150 as part of a Black Friday sa… [+1168 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "The Hulu + Live TV bundle will cost at least $5 more starting in December",
            "description": "Like many other streaming services over the past year, Hulu raised its subscription prices in October from $7 to $8 per month for its ad-supported tier. Now, the Disney-owned streaming service is also raising the prices for its Hulu + Live TV bundle. In an em…",
            "url": "https://www.engadget.com/hulu-live-tv-bundle-price-hike-063452182.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/fce682f0-5bef-11ed-bf7b-c0b58dc7884e",
            "publishedAt": "2022-11-04T06:34:52Z",
            "content": "Like many other streaming services over the past year, Hulu raised its subscription prices in October from $7 to $8 per month for its ad-supported tier. Now, the Disney-owned streaming service is als… [+1234 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Devindra Hardawar",
            "title": "Engadget Podcast: Elon Musk’s Twitter fiasco",
            "description": "Well, it finally happened: Elon Musk has officially taken over Twitter. This week, Cherlynn and Devindra are joined by Engadget’s Karissa Bell to discuss how Musk is reshaping the social network. Are all the changes bad, or is there some method to his madness…",
            "url": "https://www.engadget.com/engadget-podcast-elon-musk-twitter-123007454.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2020-05/f43b53b0-909f-11ea-87fd-d8d721459924",
            "publishedAt": "2022-11-04T12:30:07Z",
            "content": "Well, it finally happened: Elon Musk has officially taken over Twitter. This week, Cherlynn and Devindra are joined by Engadgets Karissa Bell to discuss how Musk is reshaping the social network. Are … [+1127 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Mozilla bundles its VPN and email relay services for $7 per month",
            "description": "Mozilla's privacy services might be more compelling if you were previously on the fence. The company now offers its virtual private network (VPN) and Firefox Relay Premium together in a $7 per month bundle when you pay for an annual subscription. Given that t…",
            "url": "https://www.engadget.com/mozilla-vpn-firefox-relay-bundle-subscription-211146697.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-01/7af195f0-5511-11eb-bfdf-e1a99276509e",
            "publishedAt": "2022-11-22T21:11:46Z",
            "content": "Mozilla's privacy services might be more compelling if you were previously on the fence. The company now offers its virtual private network (VPN) and Firefox Relay Premium together in a $7 per month … [+1208 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Apple's M2 MacBook Air is $150 off and back to its all-time low",
            "description": "A quick PSA for anyone looking to pick up a new laptop ahead of the holidays: The base model of Apple's newest MacBook Air is back down to $1,049 at various retailers, including Amazon and B&H. That matches the best price we've seen for what is currently the …",
            "url": "https://www.engadget.com/apple-macbook-air-m2-deal-150-off-at-amazon-best-buy-162316546.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-07/8f59f850-0318-11ed-bdad-5a7355971e05",
            "publishedAt": "2022-11-10T16:23:16Z",
            "content": "A quick PSA for anyone looking to pick up a new laptop ahead of the holidays: The base model of Apple's newest MacBook Air is back down to $1,049 at various retailers, including Amazon and B&amp;H. T… [+2799 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Microsoft will make Surface parts available to consumers in 2023",
            "description": "Microsoft hasn't been shy about wanting to improve the repairability of Surface devices, and that now includes the availability of spare parts. In a statement to iFixit, Microsoft says it plans \"broad availability\" of parts for individuals and independent rep…",
            "url": "https://www.engadget.com/microsoft-surface-pro-9-right-to-repair-parts-154305239.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/f7aa4890-61cf-11ed-9bff-8dc935c19a4f",
            "publishedAt": "2022-11-11T15:43:05Z",
            "content": "Microsoft hasn't been shy about wanting to improve the repairability of Surface devices, and that now includes the availability of spare parts. In a statement to iFixit, Microsoft says it plans \"broa… [+1753 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Tidal finally adds proper playlist sharing",
            "description": "Tidal has already been closing gaps with the competition by adding a free tier and similar upgrades, but its latest improvement may be one of the most important. The streaming music service has finally introduced user profiles that let you easily share your p…",
            "url": "https://www.engadget.com/tidal-profiles-playlist-sharing-160043016.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-11/5e4d34d0-47ba-11ec-bfe9-6cbd4dea05c1",
            "publishedAt": "2022-11-02T16:00:43Z",
            "content": "Tidal has already been closing gaps with the competition by adding a free tier and similar upgrades, but its latest improvement may be one of the most important. The streaming music service has final… [+1379 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Roku will lay off 200 employees after warning of weak Q4 results",
            "description": "In the latest example of what seems like daily Big Tech job cuts, Roku announced plans today to lay off around 200 employees, nearly seven percent of its workforce. The streaming company wrote\r\n in an SEC filing that it plans to cut the jobs in the US due to …",
            "url": "https://www.engadget.com/roku-layoffs-streaming-2022-201541882.html",
            "urlToImage": "https://s.yimg.com/os/creatr-images/2019-08/01546820-ba36-11e9-a777-91278a0d4a65",
            "publishedAt": "2022-11-17T20:15:41Z",
            "content": "In the latest example of what seems like daily Big Tech job cuts, Roku announced plans today to lay off around 200 employees, nearly seven percent of its workforce. The streaming company wrote\r\n in a… [+1501 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Will Shanklin",
            "title": "Amazon's smart thermostat is back down to $42 for Black Friday",
            "description": "If you want smart temperature controls without breaking the bank, you may want to look at the Amazon Smart Thermostat, on sale right now for $42. That's 30 percent off its retail price of $60, matching an all-time low. Considering the thermostat is much cheap…",
            "url": "https://www.engadget.com/amazon-smart-thermostat-black-friday-2022-deal-140057143.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/7a76c680-6a91-11ed-bbff-5a1df361ca3a",
            "publishedAt": "2022-11-24T14:30:57Z",
            "content": "If you want smart temperature controls without breaking the bank, you may want to look at the Amazon Smart Thermostat, on sale right now for $42. That's 30 percent off its retail price of $60, matchi… [+1639 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Twitter drops Ticketed Spaces to focus on other live audio features",
            "description": "Twitter no longer lets you charge users to listen to live Spaces conversations. The social media heavyweight tells The Information in a statement that it has indefinitely \"paused\" its Ticketed Spaces test. The move will let Twitter concentrate on improving th…",
            "url": "https://www.engadget.com/twitter-discontinues-ticketed-spaces-161835910.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/7c193b70-56d3-11ed-be7f-d972cb1ca592",
            "publishedAt": "2022-10-28T16:18:56Z",
            "content": "Twitter no longer lets you charge users to listen to live Spaces conversations. The social media heavyweight tells The Information in a statement that it has indefinitely \"paused\" its Ticketed Spaces… [+1599 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Apple's new iPad is on sale for $426 for Black Friday",
            "description": "This may be your best chance to get Apple's latest 'starter' tablet on sale this holiday season. Amazon is offering the new 64GB WiFi iPad for $426, or $23 below the official price. This is the first time we've seen a bargain for the device. You'll see simila…",
            "url": "https://www.engadget.com/apple-ipad-2022-black-friday-sale-price-160047105.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/c52dbea0-6cc5-11ed-a8eb-60067a8e91fa",
            "publishedAt": "2022-11-25T16:00:47Z",
            "content": "This may be your best chance to get Apple's latest 'starter' tablet on sale this holiday season. Amazon is offering the new 64GB WiFi iPad for $426, or $23 below the official price. This is the first… [+1304 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mat Smith",
            "title": "The Morning After: NASA reveals UFO investigation panel",
            "description": "NASA previously announced that it would create a panel to study \"unidentified aerial phenomena\" (UAP), aka UFOs — while saying it doesn't believe they're \"extraterrestrial in origin.\" (Sure, NASA.)Now, the space agency has unveiled the 16-member panel that wi…",
            "url": "https://www.engadget.com/the-morning-after-nasa-reveals-ufo-investigation-panel-111531764.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-06/8b7f5d60-e815-11ec-9efd-4f059dbaa4c2",
            "publishedAt": "2022-10-26T11:15:31Z",
            "content": "NASA previously announced that it would create a panel to study \"unidentified aerial phenomena\" (UAP), aka UFOs while saying it doesn't believe they're \"extraterrestrial in origin.\" (Sure, NASA.)\r\nNo… [+4408 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Microsoft: ‘Sony has more exclusive games … many of which are better quality’",
            "description": "Sony\r\n has more exclusive games than Xbox\r\n does, according to Microsoft\r\n, which claims that many of its rival's first-party titles \"are better quality.\" Lest you believe Microsoft is dunking on its own game studios for no reason, the company made the assert…",
            "url": "https://www.engadget.com/microsoft-sony-exclusive-games-quality-playstation-xbox-activision-blizzard-192512776.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/1280ee80-6b62-11ed-bfff-34b2cdf154f4",
            "publishedAt": "2022-11-23T19:25:12Z",
            "content": "Sony\r\n has more exclusive games than Xbox\r\n does, according to Microsoft\r\n, which claims that many of its rival's first-party titles \"are better quality.\" Lest you believe Microsoft is dunking on its… [+4156 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jon Fingas",
            "title": "Garmin's Instinct Crossover is a rugged hybrid smartwatch with a useful display",
            "description": "Garmin already sells hybrid smartwatches like the Vivomove, but they're really not meant for hikes and other outdoor expeditions. The company is addressing that gap today with its just-launched Instinct Crossover. You'll get a familiar mix of analog hands wit…",
            "url": "https://www.engadget.com/garmin-instinct-crossover-rugged-hybrid-smartwatch-120024799.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/19854830-5a1d-11ed-9b31-5e6a7e4a53ca",
            "publishedAt": "2022-11-08T12:00:24Z",
            "content": "Garmin already sells hybrid smartwatches like the Vivomove, but they're really not meant for hikes and other outdoor expeditions. The company is addressing that gap today with its just-launched Insti… [+1974 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "Samsung's Galaxy S22 Ultra is $300 off right now",
            "description": "When we put together our ultimate list of current-model smartphones, Samsung's Galaxy S22 Ultra easily won out as the best Android option. It's on sale at Amazon right now for $300 off the list price, bringing it down to just $900. That's only ten bucks more …",
            "url": "https://www.engadget.com/samsungs-galaxy-s22-ultra-is-300-off-right-now-164904165.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-02/8fab0d50-8f8f-11ec-bdd5-4cc9e086a97c",
            "publishedAt": "2022-11-02T16:49:04Z",
            "content": "When we put together our ultimate list of current-model smartphones, Samsung's Galaxy S22 Ultra easily won out as the best Android option. It's on sale at Amazon right now for $300 off the list price… [+2305 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Igor Bonifacic",
            "title": "Notion's latest feature is an AI that can write blog posts, to-do lists and more",
            "description": "Notion, the company behind the popular note-taking app\r\n of the same name, has started testing a new feature called Notion AI that uses a generative AI to write notes and other content. The Verge\r\n got a chance to use the software before today’s announcement.…",
            "url": "https://www.engadget.com/notion-ai-announced-202032305.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/8e3a1570-65e9-11ed-bfd9-cfa20aacd1d5",
            "publishedAt": "2022-11-16T20:20:32Z",
            "content": "Notion, the company behind the popular note-taking app\r\n of the same name, has started testing a new feature called Notion AI that uses a generative AI to write notes and other content. The Verge\r\n g… [+1893 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Daniel Cooper",
            "title": "The Morning After: Elon Musk wants users to pay for verification",
            "description": "Twitter started verifying public figures to prevent scammers from distributing fake news. New owner Elon Musk, however, thinks the blue check is just a status symbol, and one people should pay for. The platform’s new owner has reportedly decided users will ne…",
            "url": "https://www.engadget.com/the-morning-after-elon-musk-wants-you-to-pay-for-verification-111547920.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-10/29399680-5902-11ed-93df-e4c9c7229879",
            "publishedAt": "2022-10-31T11:15:47Z",
            "content": "Twitter started verifying public figures to prevent scammers from distributing fake news. New owner Elon Musk, however, thinks the blue check is just a status symbol, and one people should pay for. T… [+2382 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "EU confirms multiple ongoing investigations into TikTok data practices",
            "description": "The president of the European Commission, the executive branch of the European Union, has confirmed there are multiple ongoing investigations into TikTok\r\n. The probes concern the transfer of EU citizens' data to China and targeted advertising aimed at minors…",
            "url": "https://www.engadget.com/tiktok-data-investigation-data-practices-161535147.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-08/b37b8c10-23b3-11ed-be7d-41e6bb098e5c",
            "publishedAt": "2022-11-22T16:15:35Z",
            "content": "The president of the European Commission, the executive branch of the European Union, has confirmed there are multiple ongoing investigations into TikTok\r\n. The probes concern the transfer of EU citi… [+2059 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Apple's 10.2-inch iPad drops to $270, plus the best early Black Friday deals so far",
            "description": "Though Black Friday is technically a week away, we're already seeing a barrage of sales that we expect to carry over into the shopping holiday. Several of Apple's iPads, Apple Watches and MacBooks are available at their lowest prices to date, for instance, as…",
            "url": "https://www.engadget.com/best-early-black-friday-deals-this-week-apple-amazon-google-more-tech-171553284.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2021-09/31ffdba1-21ed-11ec-bd7b-62669876f802",
            "publishedAt": "2022-11-18T17:15:53Z",
            "content": "Though Black Friday is technically a week away, we're already seeing a barrage of sales that we expect to carry over into the shopping holiday. Several of Apple's iPads, Apple Watches and MacBooks ar… [+23236 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Kris Holt",
            "title": "Toyota's 2023 Prius Prime plug-in hybrid gets extended range and a solar roof",
            "description": "Toyota\r\n impressed many onlookers this week with a sleeker redesign for the Prius\r\n. It turns out that the 2023 Prius Prime\r\n, the plug-in hybrid model, is also getting the new look as well as some other upgrades. For one thing, Toyota says that a larger lith…",
            "url": "https://www.engadget.com/toyota-2023-prius-prime-plug-in-hybrid-162057073.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/11640f00-668f-11ed-9fdf-68017e8bb96f",
            "publishedAt": "2022-11-17T16:20:57Z",
            "content": "Toyota\r\n impressed many onlookers this week with a sleeker redesign for the Prius\r\n. It turns out that the 2023 Prius Prime\r\n, the plug-in hybrid model, is also getting the new look as well as some o… [+2920 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Mariella Moon",
            "title": "Toyota's 2023 Prius is the most fuel-efficient vehicle in the lineup",
            "description": "Toyota has unveiled the latest Prius at an event on the eve of the 2022 Los Angeles Auto Show, and it says the model is the most fuel-efficient entry in the lineup to date. The company designed the 2023 Prius, which will come in LE, XLE and Limited grades, wi…",
            "url": "https://www.engadget.com/toyota-2023-prius-064547980.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/59cf24b0-6639-11ed-bbd7-3ae4d97763aa",
            "publishedAt": "2022-11-17T06:45:47Z",
            "content": "Toyota has unveiled the latest Prius at an event on the eve of the 2022 Los Angeles Auto Show, and it says the model is the most fuel-efficient entry in the lineup to date. The company designed the 2… [+2855 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "Roku's Streaming Stick 4K hits a new low of $25, plus the rest of the week's best tech deals",
            "description": "Black Friday doesn't officially arrive for a few more weeks, but we're already starting to see retailers run early holiday sales on several gadgets we recommend. Roku's Streaming Stick 4K, for instance, has fallen to a new low of $25, while Sony's WH-1000XM5 …",
            "url": "https://www.engadget.com/roku-streaming-stick-4k-hits-new-low-of-25-best-tech-deals-this-week-164554043.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/64328e40-5c4f-11ed-bf8f-ca1e9651c578",
            "publishedAt": "2022-11-04T16:45:54Z",
            "content": "Black Friday doesn't officially arrive for a few more weeks, but we're already starting to see retailers run early holiday sales on several gadgets we recommend. Roku's Streaming Stick 4K, for instan… [+16284 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Amy Skorheim",
            "title": "The best Black Friday tech deals under $50",
            "description": "The giant TVs and high-end laptops might get the lion's share of attention on Black Friday, but the smaller tech devices are worth checking out too. We put the cap at $50 and came up with over 20 deals on inexpensive gadgets along with a few peripherals and a…",
            "url": "https://www.engadget.com/the-best-black-friday-tech-deals-under-50-144532631.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/0b1f8500-651f-11ed-bbf3-7ac0bd9d9124",
            "publishedAt": "2022-11-25T14:45:05Z",
            "content": "The giant TVs and high-end laptops might get the lion's share of attention on Black Friday, but the smaller tech devices are worth checking out too. We put the cap at $50 and came up with over 20 dea… [+14175 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Daniel Cooper",
            "title": "The Morning After: Is the M2 iPad Pro any good?",
            "description": "What’s stopping me (or you) getting an iPad Pro? The cost, for one. And a belief that anything I’d want to use an iPad for, I can already do with my eighth-generation vanilla model. That said, Nathan Ingraham’s review of the M2 iPad Pro\r\n did make me check if…",
            "url": "https://www.engadget.com/the-morning-after-is-the-m-2-i-pad-pro-any-good-111519582.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/602396a0-5a97-11ed-9f79-3dba70fb9e33",
            "publishedAt": "2022-11-02T11:15:19Z",
            "content": "Whats stopping me (or you) getting an iPad Pro? The cost, for one. And a belief that anything Id want to use an iPad for, I can already do with my eighth-generation vanilla model. That said, Nathan I… [+3958 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Jeff Dunn",
            "title": "The best Black Friday 2022 laptop deals we could find",
            "description": "It's Black Friday, and that means lots of laptops have gone on sale with little indication as to which are actually worth your time. As always, we recommend shopping directly at retailers like Microsoft, Samsung, Dell and others if you want to spec out your n…",
            "url": "https://www.engadget.com/best-black-friday-laptop-deals-2022-apple-macbook-microsoft-surface-razer-lenovo-151504201.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/a150cc40-693a-11ed-bcbd-f81fd3da36d3",
            "publishedAt": "2022-11-25T15:15:04Z",
            "content": "It's Black Friday, and that means lots of laptops have gone on sale with little indication as to which are actually worth your time. As always, we recommend shopping directly at retailers like Micros… [+6885 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Sam Rutherford",
            "title": "Yale Assure Lock 2 review: The do-everything smart lock",
            "description": "Everyone has different levels of interest when it comes to home automation, but I'd argue that a smart lock is one of the best and most impactful ways of upgrading your abode. And with the Assure Lock 2, Yale's latest smart deadbolt is easy to install, it's s…",
            "url": "https://www.engadget.com/yale-assure-lock-2-review-the-do-everything-smart-lock-specs-price-160008135.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-11/13b396a0-65c6-11ed-9bcf-b9a828e6c191",
            "publishedAt": "2022-11-17T16:00:08Z",
            "content": "Everyone has different levels of interest when it comes to home automation, but I'd argue that a smart lock is one of the best and most impactful ways of upgrading your abode. And with the Assure Loc… [+8189 chars]"
        },
        {
            "source": {
                "id": "engadget",
                "name": "Engadget"
            },
            "author": "Engadget",
            "title": "The best early Black Friday tech deals for 2022",
            "description": "Black Friday may still be a few hours away, but we're already seeing a bunch of great deals on our favorite tech. This comes after a slow trickle of deals popping up across the web ever since the start of November. While we don't have the supply chain issues …",
            "url": "https://www.engadget.com/best-early-black-friday-tech-deals-for-2022-173045711.html",
            "urlToImage": "https://s.yimg.com/os/creatr-uploaded-images/2022-09/2dc2f5e0-3a5b-11ed-bddf-cf59d100779e",
            "publishedAt": "2022-11-24T17:30:45Z",
            "content": "Black Friday may still be a few hours away, but we're already seeing a bunch of great deals on our favorite tech. This comes after a slow trickle of deals popping up across the web ever since the sta… [+13024 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Parker Hall",
            "title": "Apple TV 4K (2022) Review: Better Every Watch",
            "description": "If you hate your TV interface but love your iPhone, this is probably the device for you.",
            "url": "https://www.wired.com/review/apple-tv-4k-2022/",
            "urlToImage": "https://media.wired.com/photos/6372b2d8c7672aac035d7a40/191:100/w_1280,c_limit/Apple-TV-4K-2022-Review-FEATURED-Gear.jpg",
            "publishedAt": "2022-11-15T13:00:00Z",
            "content": "I liked the second-generation Apple TV 4K, but I rarely recommended it to anyone except Apple die-hards. Sure, it has a good remote, but it was expensive compared to streaming devices from its peers,… [+2946 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Haley Sprankle",
            "title": "12 Best Black Friday Headphone and Speaker Deals (2022): AirPods Pro, Sonos, and Beats",
            "description": "Listen up—Apple, Sonos, Sony, Beats, and more of our favorite audio brands are having huge sales this holiday weekend.",
            "url": "https://www.wired.com/story/best-black-friday-headphone-deals-speakers-2022/",
            "urlToImage": "https://media.wired.com/photos/6376ae8ad0a7e54d87737b39/191:100/w_1280,c_limit/yadi-liu-headphones.jpg",
            "publishedAt": "2022-11-25T14:12:26Z",
            "content": "I'm the anti-heroTaylor Swift sings about. I listen to the same song over and over and over again, scratching that part of my brain that just loves every moment of it. Luckily for me, this Black Frid… [+5385 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft",
            "title": "66 Best Amazon Deals For Black Friday (2022): iPads, Apple Watches, and More",
            "description": "We've rounded up the best deals on everything you need for the holidays and more, from long-lasting cookware to Apple earbuds.",
            "url": "https://www.wired.com/story/best-amazon-black-friday-deals-2022-1/",
            "urlToImage": "https://media.wired.com/photos/637694e14e550ec12107a827/191:100/w_1280,c_limit/4-Best%20Amazon%20Deals.jpg",
            "publishedAt": "2022-11-25T20:15:00Z",
            "content": "Black Friday is in full swing, and few retailers go quite as hard with online deals as Amazon. We've rounded up a massive list of our favorite Amazon Black Friday deals here, including the company's … [+24212 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Haley Sprankle",
            "title": "34 Best Black Friday Headphone and Speaker Deals (2022): AirPods Pro, Sonos, and Record Players",
            "description": "Apple, Sonos, Sony, and more of our favorite audio brands are having huge sales this cyber weekend. We've even found discounts on record players.",
            "url": "https://www.wired.com/story/best-black-friday-headphone-deals-speakers-2022-1/",
            "urlToImage": "https://media.wired.com/photos/6376ae8ad0a7e54d87737b39/191:100/w_1280,c_limit/yadi-liu-headphones.jpg",
            "publishedAt": "2022-11-26T14:52:00Z",
            "content": "I'm the anti-heroTaylor Swift sings about. I listen to the same song over and over and over again, scratching that part of my brain that just loves every moment of it. Luckily for me, this Black Frid… [+14219 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Boone Ashworth",
            "title": "Alexa Might Not Get Much Smarter Than It Is Right Now",
            "description": "Plus: Apple pays for more emergency satellite tech, LG is working on a stretchy screen, and we answer all your burning questions about Mastodon.",
            "url": "https://www.wired.com/story/amazon-alexa-reportedly-losing-money/",
            "urlToImage": "https://media.wired.com/photos/636eea48454b677de6f65e1e/191:100/w_1280,c_limit/Alexa-Might-Not-Get-Much-Smarter-Than-It-Is-Right-Now-Alamy-2DEF5DX.jpg",
            "publishedAt": "2022-11-12T14:00:00Z",
            "content": "\"Hey Alexa, can you make some money?\"\r\nAs reported by The Wall Street Journal, Amazon is aiming to cut costs by slimming down some of its less profitable departments. The big one is Alexa, Amazons vo… [+4042 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft",
            "title": "53 Best Amazon Deals For Black Friday (2022): iPads, Apple Watches, and More",
            "description": "We've rounded up the best deals on everything you need for the holidays and more, from long-lasting cookware to Apple earbuds.",
            "url": "https://www.wired.com/story/best-amazon-black-friday-deals-2022/",
            "urlToImage": "https://media.wired.com/photos/637694e14e550ec12107a827/191:100/w_1280,c_limit/4-Best%20Amazon%20Deals.jpg",
            "publishedAt": "2022-11-25T10:18:39Z",
            "content": "Black Friday is in full swing, and few retailers go quite as hard with online deals as Amazon. We've rounded up a massive list of our favorite Amazon Black Friday deals here, including the company's … [+17705 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lorenzo Franceschi-Bicchierai",
            "title": "A Leak Details Apple's Secret Dirt on Corellium, a Trusted Security Startup",
            "description": "A 500-page document reviewed by WIRED shows that Corellium engaged with several controversial companies, including spyware maker NSO Group.",
            "url": "https://www.wired.com/story/corellium-nso-group-darkmatter-apple-lawsuit/",
            "urlToImage": "https://media.wired.com/photos/636ec58e8cea9c3346925ff5/191:100/w_1280,c_limit/security-apple-corellium-1176128997.jpg",
            "publishedAt": "2022-11-21T12:00:00Z",
            "content": "Zach Edwards, an independent privacy and security researcher, says that sensitive technology cannot be haphazardly sold to any company, in any country in the world.\r\nWhile Corellium is a reverse-engi… [+3870 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Julian Chokkattu",
            "title": "HoloKit X AR Headset for iPhone: Price, Features, Release Date",
            "description": "The creators of this $129 headset want to make mixed reality accessible—and affordable—for more users.",
            "url": "https://www.wired.com/story/holokit-x-headset-iphone-ar/",
            "urlToImage": "https://media.wired.com/photos/635c3a9981a87b1d767e3965/191:100/w_1280,c_limit/HoloKit-X-SOURCE-Holo-Interactive-Phone-Gear.jpg",
            "publishedAt": "2022-10-31T13:00:00Z",
            "content": "If you need evidence that Apple is working on a mixed-reality headset, take a spin with the HoloKit X. Created by Botao Amber Hu, a developer who has worked at companies like DJI, Google, and Twitter… [+4811 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft",
            "title": "25 Great Deals From Best Buy's Early Black Friday Sale (2022): TVs, Phones, Laptops",
            "description": "Get cameras, headphones, and powerful laptops before Halloween even arrives.",
            "url": "https://www.wired.com/story/best-buy-deals-black-friday-2022-1/",
            "urlToImage": "https://media.wired.com/photos/63110abca9be2e6f4aa586ea/191:100/w_1280,c_limit/Apple-Watch-Update-Gear.jpg",
            "publishedAt": "2022-10-27T16:01:00Z",
            "content": "Its way too early to be talking about Black Friday, but it's at least objectively cooler to associate the phrase with Halloween than Thanksgiving. So well forgive Best Buy for kicking off its sale a … [+9334 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Khari Johnson",
            "title": "Europe Prepares to Rewrite the Rules of the Internet",
            "description": "The Digital Markets Act will force big tech platforms to break open their walled gardens in 2023, says the EU's new ambassador to Silicon Valley.",
            "url": "https://www.wired.com/story/europe-dma-prepares-to-rewrite-the-rules-of-the-internet/",
            "urlToImage": "https://media.wired.com/photos/635b19823d7842cc349a2212/191:100/w_1280,c_limit/business-eu-digital-markets-act.jpg",
            "publishedAt": "2022-10-28T11:00:00Z",
            "content": "Next week, a law takes effect that will change the internet foreverand make it much more difficult to be a tech giant. On November 1, the European Unions Digital Markets Act comes into force, startin… [+2900 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Medea Giordano, Julian Chokkattu",
            "title": "56 Early Target Black Friday Deals (2022): Video Games, Headphones, and Dyson Vacuums",
            "description": "The retailer has a price match guarantee for anything bought until December 24, so get ahead of your holiday shopping list without worry.",
            "url": "https://www.wired.com/story/early-target-black-friday-deals-2022/",
            "urlToImage": "https://media.wired.com/photos/627bfd36a4fb038463303e27/191:100/w_1280,c_limit/Sony-WH-1000MX5-Gear.jpg",
            "publishedAt": "2022-11-21T12:00:00Z",
            "content": "Black Friday is almost here but retailers like Target and Best Buy kicked off sales early. It makes it easier to cross gifts off your holiday shopping list before December rolls around. Below, you'll… [+16444 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Parker Hall",
            "title": "Master & Dynamic MW75 Review: Premium Sound, Premium Price",
            "description": "These high-end headphones bring fantastic fidelity everywhere.",
            "url": "https://www.wired.com/review/master-and-dynamic-mw75/",
            "urlToImage": "https://media.wired.com/photos/6377dc94c3b7b85507a91163/191:100/w_1280,c_limit/Master-and-Dynamic-MW75-SOURCE-Master-and-Dynamic-Gear.jpg",
            "publishedAt": "2022-11-20T14:00:00Z",
            "content": "Battery life is on par with other high-end noise-canceling headphones at 32 hours, and the headphones come with a USB-C cable inside a great hard-shell carrying case that allows them to plug into a c… [+3408 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Chris Stokel-Walker",
            "title": "The Reason for Meta's Massive Layoffs? Ghosts in the Machine",
            "description": "The social media company's failed projects required thousands of staffers who swelled the ranks and never left.",
            "url": "https://www.wired.com/story/meta-layoffs-overhiring/",
            "urlToImage": "https://media.wired.com/photos/636d260c3bb084d7eff58797/191:100/w_1280,c_limit/Meta-Layoffs-Business-1178141612.jpeg",
            "publishedAt": "2022-11-10T16:28:54Z",
            "content": "Remember Libra, Metas ambitious plan to enter the cryptocurrency market? Or Lasso, Metas ambitious attempt to outdo TikTok? Alongside projects like Shops, Metas ambitious plan to turn Instagram and F… [+3116 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Chris Stokel-Walker",
            "title": "After Twitter Staff Cuts, Survivors Face ‘Radio Silence’",
            "description": "The long-suffering staffers who remain at the company are scrambling to regroup and adapt to a new management style.",
            "url": "https://www.wired.com/story/musk-layoffs-twitter-management/",
            "urlToImage": "https://media.wired.com/photos/63698b97fb8d8044171209b1/191:100/w_1280,c_limit/radiosilence_twitter_GettyImages-145671939.jpg",
            "publishedAt": "2022-11-08T12:00:00Z",
            "content": "Saturday was the cleanup, he says. Much of the day was spent working on removing departed colleagues access and trying to get things as stable as possible in case anything went wrong with the platfor… [+3997 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Brenda Stolyar",
            "title": "32 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods",
            "description": "Need a new Apple Watch or iPhone case? Now's the time to snag one with Apple's Black Friday Deals.",
            "url": "https://www.wired.com/story/apple-black-friday-deals-2022-1/",
            "urlToImage": "https://media.wired.com/photos/637d41a7cfe6da8f54b1e5b1/191:100/w_1280,c_limit/19%20-%20Best%20Absolute%20Best%20Cyber%20Monday%20Deals%203.jpg",
            "publishedAt": "2022-11-25T21:46:00Z",
            "content": "Apple isn't holding a Black Friday sale per se, but it isthrowing in a gift card when you purchase an iPhone, iPad, Mac, Apple Watch, AirPods, or an accessory directly from its store. That's fine, bu… [+15364 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Brenda Stolyar, Gear Team",
            "title": "34 Best Apple Black Friday Deals (2022): Apple Watch, iPads, AirPods",
            "description": "Need a new Apple Watch or iPhone case? Now's the time to snag one with Apple's Black Friday and Cyber Monday Deals.",
            "url": "https://www.wired.com/story/apple-black-friday-deals-2022-2/",
            "urlToImage": "https://media.wired.com/photos/637d41a7cfe6da8f54b1e5b1/191:100/w_1280,c_limit/19%20-%20Best%20Absolute%20Best%20Cyber%20Monday%20Deals%203.jpg",
            "publishedAt": "2022-11-26T11:14:00Z",
            "content": "Apple isn't holding a Black Friday weekend sale per se, but it isthrowing in a gift card when you purchase an iPhone, iPad, Mac, Apple Watch, AirPods, or an accessory directly from its store. That's … [+15989 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Matt Burgess",
            "title": "Apple Tracks You More Than You Think",
            "description": "Plus: WikiLeaks’ website is falling apart, tax websites are sending your data to Facebook, and cops take down a big phone-number-spoofing operation.",
            "url": "https://www.wired.com/story/apple-iphone-privacy-analytics-security-roundup/",
            "urlToImage": "https://media.wired.com/photos/6381030e3099e6c3ba4290a1/191:100/w_1280,c_limit/Apple-data-collection-security-roundup-1244131331.jpg",
            "publishedAt": "2022-11-26T14:00:00Z",
            "content": "Cybersecurity startup Corellium offered or sold its software to spyware and hacking-tool creators in multiple repressive countries, a WIRED investigation revealed this week. A previously unreported 5… [+5268 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft",
            "title": "84 Best Amazon Deals For Black Friday (2022): iPads, Apple Watches, and More",
            "description": "We've rounded up the best Black Friday and Cyber Monday deals we've found on Amazon, from long-lasting cookware to Apple earbuds.",
            "url": "https://www.wired.com/story/best-amazon-black-friday-deals-2022-2/",
            "urlToImage": "https://media.wired.com/photos/637694e14e550ec12107a827/191:100/w_1280,c_limit/4-Best%20Amazon%20Deals.jpg",
            "publishedAt": "2022-11-26T14:14:00Z",
            "content": "Black Friday is in full swing, and few retailers go quite as hard with online deals as Amazon. We've rounded up a massive list of our favorite Amazon Black Friday deals here, including the company's … [+29095 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Simon Lucas",
            "title": "Syng Cell Alpha Wireless Speakers Review: Spatial Sorcery, Bass Bother",
            "description": "In a quest to reimagine the loudspeaker, this audio company has worked serious magic—but there's a big bass problem.",
            "url": "https://www.wired.com/review/review-syng-cell-alpha-wireless-speakers/",
            "urlToImage": "https://media.wired.com/photos/636eb3a90ae5a121565fd727/191:100/w_1280,c_limit/Syng-Cell-Alpha-Wireless-Speakers-Featured-Gear.jpg",
            "publishedAt": "2022-11-14T13:00:00Z",
            "content": "Its a truth widely accepted that theres very little point in trying to reinvent the wheel. Even those folks who attempt to update, modernize, or otherwise overhaul the concept of the wheel are, we ca… [+4795 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Eric Ravenscraft, Matt Jancer",
            "title": "30 Great Deals From Best Buy’s Early Black Friday Sale (2022): Phones, Stand Mixers, TVs",
            "description": "The retailer has a flexible holiday return policy, and the discounts are going strong.",
            "url": "https://www.wired.com/story/best-buy-deals-black-friday-2022-2/",
            "urlToImage": "https://media.wired.com/photos/63110abca9be2e6f4aa586ea/191:100/w_1280,c_limit/Apple-Watch-Update-Gear.jpg",
            "publishedAt": "2022-11-03T15:53:00Z",
            "content": "It's not just you. It really does seem like Black Friday lasts longer every year. Best Buy is either in a festive mood or hasn't checked its calendar because it kicked off its Black Friday sale a who… [+15197 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Gear Team",
            "title": "78 Absolute Best Black Friday Deals Right Now (2022)",
            "description": "These are the top discounts we’ve found across the web. Whether you want a new keyboard or a robot vac, there’s something for everyone.",
            "url": "https://www.wired.com/story/best-black-friday-deals-2022-1/",
            "urlToImage": "https://media.wired.com/photos/637d401cc6acbf9e62829f4a/191:100/w_1280,c_limit/_FINAL_WIRED_BlackFriday_Best-Deals_ShiraInbar_small.jpg",
            "publishedAt": "2022-11-25T10:35:00Z",
            "content": "The Salesmas season started a bit early this year, but that's only made things more confusingwhat's really a deal? What's not? It's hard to know which deals to snag and which to walk away from. Lucki… [+31878 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Kate Knibbs",
            "title": "Twitter’s Layoffs Are a Blow to Accessibility",
            "description": "The company recently took major steps to make the platform more inclusive after pressure from disabled users. Then Elon Musk gutted its accessibility team.",
            "url": "https://www.wired.com/story/twitter-layoffs-accessibility/",
            "urlToImage": "https://media.wired.com/photos/63780b6bef69bd3269392c1f/191:100/w_1280,c_limit/Twitter-Layoffs-Are-Blow-To-Accessibility-Culture.jpg",
            "publishedAt": "2022-11-21T14:00:00Z",
            "content": "Theyve been really strong, Scott Blanks, the vice president of the nonprofit Lighthouse for the Blind, says. Now theyre all gone.\r\nDespite its late start, Twitter had established itself as one of the… [+2885 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Scott Gilbertson, Gear Team",
            "title": "159 Absolute Best Cyber Monday Deals Right Now (2022)",
            "description": "These are the top discounts we’ve found across the web this weekend. Whether you want binoculars or a robot vac, there’s something for everyone.",
            "url": "https://www.wired.com/story/best-cyber-monday-deals-2022/",
            "urlToImage": "https://media.wired.com/photos/63812197668fb4e02b0bf078/191:100/w_1280,c_limit/_FINAL_WIRED_BlackFriday_Best-Deals_ShiraInbar_small%20(1).jpg",
            "publishedAt": "2022-11-27T11:03:00Z",
            "content": "The holiday shopping season reaches its peak when Cyber Monday deals roll around. Sales are often better than on Black Friday, but with every retailer promising the best Cyber Monday discounts, it ca… [+62419 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Adam Speight, Gear Team",
            "title": "68 Best Black Friday Laptop and Home Office Deals (2022): Office Chairs, Standing Desks, Portable Monitors",
            "description": "Get discounted office chairs, standing desks, and plenty more to furnish your remote workstation with these Black Friday and Cyber Monday deals.",
            "url": "https://www.wired.com/story/best-black-friday-laptop-deals-2022-2/",
            "urlToImage": "https://media.wired.com/photos/637e76af668fb4e02b0bef7a/191:100/w_1280,c_limit/WIRED_BlackFriday_Laptop_ShiraInbar.png",
            "publishedAt": "2022-11-26T15:16:00Z",
            "content": "Thanksgiving has ended, and that means there are Black Friday weekend and Cyber Monday laptop deals abound. But that's not all. We've collected a bunch of deals on other home office necessities, from… [+26224 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Lily Hay Newman",
            "title": "A Destabilizing Hack-and-Leak Operation Hits Moldova",
            "description": "Plus: Google’s location snooping ends in a $391 million settlement, Russian code sneaks into US government apps, and the World Cup apps set off alarms.",
            "url": "https://www.wired.com/story/moldova-leaks-google-privacy-settlement-world-cup-apps/",
            "urlToImage": "https://media.wired.com/photos/637823b284f5d2572f8d0ad0/191:100/w_1280,c_limit/Moldova-Election-Hack-Security-1401716620.jpg",
            "publishedAt": "2022-11-19T14:00:00Z",
            "content": "It was a truly wild week in the tech industry as new details emerged about the FTX cryptocurrency exchange's collapse and Elon Musk drove an ever-increasing number of Twitter employees out of the com… [+5772 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Paul Ford",
            "title": "A Tweet Before Dying",
            "description": "The revolutionary internet is over, and we don’t have much to show for it. A new start is out there, somewhere.",
            "url": "https://www.wired.com/story/tweet-dying-revolutionary-internet/",
            "urlToImage": "https://media.wired.com/photos/636aa5ad7484c01b9b6e9663/191:100/w_1280,c_limit/WI120122_ST_Ford_01.jpg",
            "publishedAt": "2022-11-10T12:00:00Z",
            "content": "i find it a good philosophical exercise to imagine the last tweet. It could come centuries hence, when a cryptobot offers a wistful adieu to another cryptobot, or in 2025, when Donald Trump, the newl… [+5513 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Louryn Strampe, Gear Team",
            "title": "20 Best Early Black Friday Deals: Robot Vacuums, iPads, Instant Pots",
            "description": "The big sale isn't here quite yet, but you can already get killer deals on laptops, streaming sticks, tablets, and even Instant Pots.",
            "url": "https://www.wired.com/story/best-early-black-friday-deals-2022/",
            "urlToImage": "https://media.wired.com/photos/615cb6377aac0c0d8e7cfb3f/191:100/w_1280,c_limit/Gear-Nintendo-Switch-OLED.jpg",
            "publishedAt": "2022-11-12T00:22:28Z",
            "content": "Black Friday will officially arrive in just a few weeks, on November 25. Deals havent been limited to just that actual Friday for many years now, and in many cases, the discounts we see in the weeks … [+9190 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Jaina Grey",
            "title": "22 Best Black Friday Sex Toy Deals (2022): Dame, Lelo, and More",
            "description": "The weather is getting colder, which means it's a great time to warm things up inside with some of the best Black Friday and Cyber Monday sex toy deals .",
            "url": "https://www.wired.com/story/best-black-friday-sex-toy-deals-2022-2/",
            "urlToImage": "https://media.wired.com/photos/6376a7d15bad9cf74491b03e/191:100/w_1280,c_limit/17%20-%20Best%20Sex%20Toy%20Deals.jpg",
            "publishedAt": "2022-11-26T11:55:00Z",
            "content": "this is a stressful time of year. If there's one thing that can help alleviate stress and keep you feeling nice and relaxed, it's a little self-care. Getting off is maybe the best self-care that ther… [+9413 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Parker Hall",
            "title": "20 Best Black Friday Soundbar and TV Deals (2022): Samsung, Vizio, LG, and More",
            "description": "Upgrade your viewing experience this holiday with these steep discounts on WIRED-tested home theater gear.",
            "url": "https://www.wired.com/story/best-black-friday-tv-soundbar-deals-2022-1/",
            "urlToImage": "https://media.wired.com/photos/637e7aa7aaba5a9218c00d00/191:100/w_1280,c_limit/WIRED_BlackFriday_TV-Soundbar_ShiraInbar.png",
            "publishedAt": "2022-11-26T21:11:00Z",
            "content": "It's a great time to upgrade your home theater thanks to some excellent Black Friday TV and soundbar deals. If you've yet to take the plunge to a modern 4K TV, or you are still listening to your favo… [+9086 chars]"
        },
        {
            "source": {
                "id": "wired",
                "name": "Wired"
            },
            "author": "Medea Giordano",
            "title": "21 Early Black Friday Deals: Electric Scooters, Binoculars, and Camera Bags",
            "description": "Black Friday has taken over the month of November. You can stock up on gifts for your family now (or gadgets for yourself).",
            "url": "https://www.wired.com/story/weekend-deals-november-5-2022/",
            "urlToImage": "https://media.wired.com/photos/6227fe35c64b025679e0e906/191:100/w_1280,c_limit/Gear-Nikon-Monarch-M5-8x42-SOURCE-BHPhoto.jpg",
            "publishedAt": "2022-11-05T11:00:00Z",
            "content": "Weve reached November and were quickly hurdling toward the holidays. Were still three weeks away from actual Black Friday, but several stores have already started early Black Friday saleswith guarant… [+9462 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Victoria Song",
            "title": "How to create custom Apple Watch interval workouts",
            "description": "In watchOS 9, Apple added the ability to create custom workouts on the Apple Watch for activities like running, cycling, and hiking, among others. You can now add intervals, set alerts, and edit which metrics you see from the wrist.",
            "url": "https://www.theverge.com/23432864/apple-watch-custom-interval-workouts-how-to",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/g8gcNdjFTrT7ZHfi7-yJGVC5paU=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24042827/Smart_watch_master.jpg",
            "publishedAt": "2022-11-01T13:30:00Z",
            "content": "Custom interval workouts are a long overdue feature for Apple Watches. | Illustration by Samar Haddad / The Verge\r\n\n \n\n While you’ve always been able to customize Apple Watch workouts, the company fi… [+8175 chars]"
        },
        {
            "source": {
                "id": "the-verge",
                "name": "The Verge"
            },
            "author": "Chris Welch",
            "title": "How to use personalized spatial audio on your Apple AirPods",
            "description": "Apple’s iOS 16 software includes a new feature called personalized spatial audio that can adjust how sound is rendered based on the unique shape of your head and ears. The end result is more immersive sound when listening to spatial audio and Dolby Atmos soun…",
            "url": "https://www.theverge.com/23416771/apple-personalized-spatial-audio-airpods-beats-how-to",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/RB_EJBTaXuNWZ1glIRC1rFfw--k=/0x0:2040x1360/1200x628/filters:focal(1020x680:1021x681)/cdn.vox-cdn.com/uploads/chorus_asset/file/24077734/HT015_S_Haddad_airpods_pro.jpg",
            "publishedAt": "2022-10-26T19:43:26Z",
            "content": "Samar Haddad / The Verge\r\n\n \n\n When it’s used well, spatial audio can lend extra immersion and depth to music, movies, and TV shows. Apple has offered the feature across its iPhone, iPad, Mac, AirPod… [+3886 chars]"
        }
    ]
}