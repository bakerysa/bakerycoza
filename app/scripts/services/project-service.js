(function() {

    'use strict';

    /**
     * @ngdoc function
     * @name bakeryApp.controller:ProjectService
     * @description
     * # ProjectService
     * Service of the projects for bakeryApp
     */
    angular.module('bakeryApp')
        .service('ProjectService', function() {
            /* jshint ignore:start */
            var projects = [{
                    id: 1,
                    name: 'Anatomy Store JHB',
                    description: "<p>We were tasked with creating a premium sneaker and streetwear store in JHB. It is the first of it's kind and holds some of the best gear available to the local market. Situated at 73 Juta st. Braamfontein, Anatomy is a place for sneaker enthusiasts to hang out, shop, and collaborate. </p><p>The store includes an access system developed by The Bread and ThingKing. A visitor enters their mobile number into a tablet at the store, they receive a pin which they then enter into the door to gain access. </p> <p> The Bread saw the project through from concept and design to fabrication, build, launch event, and PR. We transformed a derelict basement of a 60 year-old building into the streetwear store JHB has been waiting for. </p> <p> We invited Heron Preston (of Been Trill NYC) to launch the store with us in an opening that would go down in history. </p>",
                    thumb: '../../images/projects/01/thumb.jpg',
                    client: "<a href='http://www.tfg.co.za/'>The Foschini Group</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<a href='http://danieltingchong.com/'>Daniel Ting Chong</a> (Graphic Designer) <br/><a href='http://www.carl.co.za/'>Carl Ascroft</a> (Spatial Designer) <br/><p>Dean Westmore (Fabrication & Build)</p> <br/><p>The Bread With Heron Preston (Launch Event)</p> <br/><p>The Bread (PR & Social)</p> <br/><a href='http://www.thingking.co.za/'>ThingKing</a> (Access System) <br/>",
                    cover: '../../images/projects/01/cover.png',
                    videos: [
                        'https://vimeo.com/136603900',
                    ],
                    images: [
                        '../../images/projects/01/1.jpg',
                        '../../images/projects/01/2.jpg',
                        '../../images/projects/01/3.jpg',
                        '../../images/projects/01/4.jpg',
                        '../../images/projects/01/5.jpg',
                        '../../images/projects/01/6.jpg',
                        '../../images/projects/01/7.jpg',
                        '../../images/projects/01/8.jpg',
                        '../../images/projects/01/9.jpg',
                        '../../images/projects/01/10.jpg',
                        '../../images/projects/01/11.jpg',
                        '../../images/projects/01/12.jpg',
                        '../../images/projects/01/13.jpg',
                        '../../images/projects/01/14.jpg',
                        '../../images/projects/01/15.jpg',
                        '../../images/projects/01/16.jpg',
                        '../../images/projects/01/17.jpg',
                        '../../images/projects/01/18.jpg',
                        '../../images/projects/01/19.jpg',
                        '../../images/projects/01/20.jpg',
                        '../../images/projects/01/21.jpg',
                        '../../images/projects/01/22.jpg',
                        '../../images/projects/01/23.jpg',
                        '../../images/projects/01/24.jpg',
                        '../../images/projects/01/25.jpg',
                    ]
                }, {
                    id: 2,
                    name: 'Autonomy Graphic Identity & Web Design',
                    description: "<p>Autonomy is a 4-day event that celebrates the urban mobility revolution. The first event (to be held annually) will take place 6-9 October 2016 in Paris.</p><p>We were tasked with developing a graphic identity for the brand. Autonomy wants to become the authority on all forms of urban mobility, from electric skateboards to driverless cars and the sharing economy. </p> <p> With Paris as the organisation's home-base we took inspiration from their subway map colours, and the various ways one could criss-cross the massive city. Multiple forms of transport represented by multiple colours along a line. </p> <p> This project is still ongoing. </p>",
                    thumb: '../../images/projects/02/thumb.jpg',
                    client: "<a href='http://www.autonomy.paris/'>Autonomy Paris</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Nicholas Christowitz & Hannah Shone (Graphic Designer) </p> <br/><a href='http://www.carl.co.za/'>Carl Ascroft</a> (Spatial Designer) <br/><p>Dean Westmore (Fabrication & Build)</p> <br/><p>The Bread With Heron Preston (Launch Event)</p> <br/><p>The Bread (PR & Social)</p><br/><a href='http://www.thingking.co.za/'>ThingKing</a> (Access System) <br/>",
                    cover: '../../images/projects/02/cover.png',
                    images: [
                        '../../images/projects/02/1.jpg',
                        '../../images/projects/02/2.jpg',
                        '../../images/projects/02/3.jpg',
                        '../../images/projects/02/4.jpg',
                        '../../images/projects/02/5.jpg',
                        '../../images/projects/02/6.jpg',
                        '../../images/projects/02/7.jpg',
                        '../../images/projects/02/8.jpg',
                        '../../images/projects/02/9.jpg',
                        '../../images/projects/02/10.jpg',
                        '../../images/projects/02/11.jpg',
                        '../../images/projects/02/12.jpg',
                        '../../images/projects/02/13.jpg',
                        '../../images/projects/02/14.jpg',
                        '../../images/projects/02/15.jpg',
                        '../../images/projects/02/16.jpg',
                        '../../images/projects/02/17.jpg',
                        '../../images/projects/02/18.jpg',
                        '../../images/projects/02/19.jpg',
                        '../../images/projects/02/20.jpg',
                        '../../images/projects/02/21.gif',
                        '../../images/projects/02/22.jpg',
                        '../../images/projects/02/23.jpg',
                        '../../images/projects/02/24.jpg',
                        '../../images/projects/02/25.jpg',
                        '../../images/projects/02/26.jpg',
                    ]
                }, {
                    id: 3,
                    name: 'Beauty Fix',
                    description: "<p>We were tasked with creating the visual identity for a new beauty range and brand called Beauty Fix. In a month since launch it has found its way into over 30 Salons in South Africa and several salons in the UK.</p>",
                    thumb: '../../images/projects/03/thumb.jpg',
                    client: "<a href='http://www.beautyfixskincare.com/'>Beauty Fix</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Nicholas Christowitz (Graphic Design) </p> <br/><p> Nicholas Christowitz (Web Design)</p> <br/><p> John Del (Illustration)</p> <br/><p> Andrew Berry (Photography)</p> <br/>",
                    cover: '../../images/projects/03/cover.png',
                    images: [
                        '../../images/projects/03/1.jpg',
                        '../../images/projects/03/2.jpg',
                        '../../images/projects/03/3.jpg',
                        '../../images/projects/03/4.jpg',
                        '../../images/projects/03/5.jpg',
                        '../../images/projects/03/6.jpg',
                        '../../images/projects/03/7.jpg',
                    ]
                },

                {
                    id: 4,
                    name: 'House of Vans Cape Town',
                    description: "<p>On the 16th of March 2016 VANS celebrated their 50th anniversary globally. To mark this massive achievement, VANS threw 'House Of Vans' events in cities all around the world. We were brought in to execute House Of Vans Cape Town.</p> <p> We had just under 2 weeks from start to finish. In this time we worked with various creative partners to conceptualise the space, produce all the elements, create workshops and ensure the live music offering was something to write home about. The entire Bread team went to Cape Town for a week - 3 Days to build the entire space (in what was nothing more than a glass box 5 stories high at the foot of Table Mountain), and 4 days of running the actual event</p> <p>From custom deck chairs, coffee mugs, and pop corn boxes, to checkered wooden floors, 3m high walls, and a custom-made arcade claw machine filled with VANS merch, we pushed ourselves and our brilliant suppliers to pull off one of our favourite events of the year for one of the best clients one could hope for!</p>",
                    thumb: '../../images/projects/04/thumb.jpg',
                    client: "<a href='http://www.vans.com/'>Vans</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Matt Hitchens, Black Koki & Danielle Clough (Artists) </p> </br><p> Stilo Magolide, Sean Kross, The Make-Overs, The Valley, Retro Dizzy, ANG, Mudblud, Bombardier, ST(E)AK & Roastin Records (Musicians)</p> </br><p> The Bread (Event Production)</p> <p> We-Are-Awesome Film (Content Production)</p> <p> Dean Westmore (Decor Fabrication)</p> <p> The Bread & Dean Westmore (Spatial Design) </p> <p> Sekh-Fei De Lacy & Grant Payne (Photography)</p>",
                    cover: '../../images/projects/04/cover.png',
                    videos: [
                        'https://www.youtube.com/watch?v=JS7ID3_Vjag',
                    ],
                    images: [
                        '../../images/projects/04/2.jpg',
                        '../../images/projects/04/3.jpg',
                        '../../images/projects/04/4.jpg',
                        '../../images/projects/04/5.jpg',
                        '../../images/projects/04/6.jpg',
                        '../../images/projects/04/7.jpg',
                        '../../images/projects/04/8.jpg',
                        '../../images/projects/04/9.jpg',
                        '../../images/projects/04/10.jpg',
                        '../../images/projects/04/11.jpg',
                        '../../images/projects/04/12.jpg',
                        '../../images/projects/04/13.jpg',
                        '../../images/projects/04/14.jpg',
                        '../../images/projects/04/15.jpg',
                        '../../images/projects/04/16.jpg',
                        '../../images/projects/04/17.jpg',
                        '../../images/projects/04/18.jpg',
                        '../../images/projects/04/19.jpg',
                        '../../images/projects/04/20.jpg',
                        '../../images/projects/04/21.gif',
                        '../../images/projects/04/22.jpg',
                        '../../images/projects/04/23.jpg',
                        '../../images/projects/04/24.jpg',
                        '../../images/projects/04/25.jpg',
                        '../../images/projects/04/26.jpg',
                        '../../images/projects/04/27.jpg',
                        '../../images/projects/04/28.jpg',
                        '../../images/projects/04/29.jpg',
                        '../../images/projects/04/31.jpg',
                        '../../images/projects/04/31.jpg',
                        '../../images/projects/04/32.jpg',
                        '../../images/projects/04/33.jpg',
                        '../../images/projects/04/34.jpg',
                        '../../images/projects/04/35.jpg',
                        '../../images/projects/04/36.jpg',
                        '../../images/projects/04/37.jpg',
                        '../../images/projects/04/38.jpg',
                        '../../images/projects/04/39.jpg',
                        '../../images/projects/04/40.jpg',
                        '../../images/projects/04/41.jpg',
                        '../../images/projects/04/42.jpg',
                        '../../images/projects/04/43.jpg',
                        '../../images/projects/04/44.jpg',
                        '../../images/projects/04/45.jpg',
                        '../../images/projects/04/46.jpg',
                        '../../images/projects/04/47.jpg',
                        '../../images/projects/04/48.jpg',
                        '../../images/projects/04/49.jpg',
                        '../../images/projects/04/50.jpg',
                        '../../images/projects/04/51.jpg',
                        '../../images/projects/04/52.jpg',
                        '../../images/projects/04/53.jpg',
                        '../../images/projects/04/54.jpg',
                        '../../images/projects/04/55.jpg',
                        '../../images/projects/04/56.jpg',
                        '../../images/projects/04/57.jpg',
                        '../../images/projects/04/58.jpg',
                        '../../images/projects/04/59.jpg',
                        '../../images/projects/04/60.jpg',
                        '../../images/projects/04/61.jpg',
                        '../../images/projects/04/62.jpg',
                        '../../images/projects/04/63.jpg',
                        '../../images/projects/04/64.jpg',
                        '../../images/projects/04/65.jpg',
                        '../../images/projects/04/66.jpg',
                        '../../images/projects/04/67.jpg',
                        '../../images/projects/04/68.jpg',
                        '../../images/projects/04/69.jpg',
                        '../../images/projects/04/70.jpg',
                        '../../images/projects/04/71.jpg',
                        '../../images/projects/04/72.jpg',
                        '../../images/projects/04/73.jpg',
                        '../../images/projects/04/74.jpg',
                        '../../images/projects/04/75.jpg',
                        '../../images/projects/04/76.jpg',
                        '../../images/projects/04/77.jpg',
                        '../../images/projects/04/78.jpg',
                    ]
                },

                {
                    id: 5,
                    name: 'King Kennedy Funding Campaign',
                    description: "<p>We were asked to create a funding campaign for King Kennedy - a film that is complete but needs $280 000 to license all the archival footage it uses before it can be shown at film festivals around the world. We created a to-the-point animation with our friends at Radio to spearhead the campaign. We wrote the script, directed the video, created the website and the IndieGoGo campaign and handled all PR and marketing relating to the campaign.</p> <p>King Kennedy is a feature film created solely from archival footage, with no narration, and no assumption. Crafted over decades using footage from 53 archives around the world the film let's us experience the lives of JFK, MLK, and RFK, while they were still happening.</p>",
                    thumb: '../../images/projects/05/thumb.jpg',
                    client: "<a href='http://propertuity.co.za/'>Casablanca Productons London</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Radio (Animation) </p> </br><p> Roger Young, Nicholas Christowitz & Howard Goldstein (Script & Copy)</p> <p> Thor Rixon (Soundtrack) </p> <p> The Bread (Web Design) </p>",
                    cover: '../../images/projects/05/cover.png',
                    videos: [
                        'https://vimeo.com/152672284',
                    ],
                    images: [
                        '../../images/projects/05/2.jpg',
                        '../../images/projects/05/3.jpg',
                        '../../images/projects/05/4.jpg',
                        '../../images/projects/05/5.jpg',
                        '../../images/projects/05/6.jpg',
                        '../../images/projects/05/7.jpg',
                        '../../images/projects/05/8.jpg',
                        '../../images/projects/05/9.jpg',
                        '../../images/projects/05/10.jpg',
                        '../../images/projects/05/11.jpg',
                    ]
                }, {
                    id: 6,
                    name: 'Levi’s® Pioneer Nation 2014',
                    description: "<p>We created a unique 16 hour festival in the heart of Braamfontein. It featured 40 speakers, 2 workshops, 2 parties, speed-mentoring sessions, and huge amounts of networking.</p> <p>The premise of the entire project was based on the following statement: Where others would find an excuse, the Pioneer sees only opportunity, and it’s by taking chances and facing the inevitable challenges head on, which defines them. Levi’s® Pioneer Nation celebrates these brave spirits. More than a festival, it’s a movement, a vehicle that aims to inspire, inform and entertain. Celebrating doers. Championing champions. Attempting to change a generation.</p>",
                    thumb: '../../images/projects/06/thumb.jpg',
                    client: "<a href='http://www.levis.co.za/'>Levi’s®</a>",
                    agency: "<a href='http://www.matchboxology.com/'>Matchboxology</a> & <a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Ian Jepson, Nicholas Christowitz, TwoShoes Design & Carl Ascroft (Graphic Design) </p> </br><p> North (Spatial Design) </p> <p> Beanstalk (Event Production) </p> <p> We-Are-Awesome Film (Content Production) </p> <p> We-Are-Awesome, 10and5, GQ & Glamour (Media Partners) </p>",
                    cover: '../../images/projects/06/cover.png',
                    videos: [
                        'https://vimeo.com/109457142',
                    ],
                    images: [
                        '../../images/projects/06/2.jpg',
                        '../../images/projects/06/3.jpg',
                        '../../images/projects/06/4.jpg',
                        '../../images/projects/06/5.jpg',
                        '../../images/projects/06/6.jpg',
                        '../../images/projects/06/7.jpg',
                        '../../images/projects/06/8.jpg',
                        '../../images/projects/06/9.jpg',
                        '../../images/projects/06/10.jpg',
                        '../../images/projects/06/11.jpg',
                        '../../images/projects/06/12.jpg',
                        '../../images/projects/06/13.jpg',
                        '../../images/projects/06/14.jpg',
                        '../../images/projects/06/15.jpg',
                        '../../images/projects/06/16.jpg',
                        '../../images/projects/06/17.jpg',
                        '../../images/projects/06/18.jpg',
                        '../../images/projects/06/19.jpg',
                    ]
                }, {
                    id: 7,
                    name: 'Levi’s® Pioneer Nation 2015',
                    description: "<p>We created a unique 16 hour festival in the heart of Braamfontein. It featured 40 speakers, 2 workshops, 2 parties, speed-mentoring sessions, and huge amounts of networking.</p> <p>The premise of the entire project was based on the following statement: Where others would find an excuse, the Pioneer sees only opportunity, and it’s by taking chances and facing the inevitable challenges head on, which defines them. Levi’s® Pioneer Nation celebrates these brave spirits. More than a festival, it’s a movement, a vehicle that aims to inspire, inform and entertain. Celebrating doers. Championing champions. Attempting to change a generation.</p>",
                    thumb: '../../images/projects/07/thumb.jpg',
                    client: "<a href='http://www.levis.co.za/'>Levi’s®</a>",
                    agency: "<a href='http://www.matchboxology.com/'>Matchboxology</a> & <a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Ian Jepson, Nicholas Christowitz & TwoShoes Design (Graphic Design) </p> </br> <p> Beanstalk (Event Production) </p> <p> We-Are-Awesome Film (Content Production) </p> <p> We-Are-Awesome & 10and5 (Media Partners) </p>",
                    cover: '../../images/projects/07/cover.png',
                    videos: [
                        'https://vimeo.com/142351521',
                    ],
                    images: [
                        '../../images/projects/07/2.jpg',
                        '../../images/projects/07/3.jpg',
                        '../../images/projects/07/4.jpg',
                        '../../images/projects/07/5.jpg',
                        '../../images/projects/07/6.jpg',
                        '../../images/projects/07/7.jpg',
                        '../../images/projects/07/8.jpg',
                        '../../images/projects/07/9.jpg',
                        '../../images/projects/07/10.jpg',
                        '../../images/projects/07/11.jpg',
                        '../../images/projects/07/12.jpg',
                        '../../images/projects/07/13.jpg',
                        '../../images/projects/07/14.jpg',
                        '../../images/projects/07/15.jpg',
                        '../../images/projects/07/16.jpg',
                        '../../images/projects/07/17.jpg',
                        '../../images/projects/07/18.jpg',
                        '../../images/projects/07/19.jpg',
                        '../../images/projects/07/20.jpg',
                    ]
                }, {
                    id: 8,
                    name: 'Red Bull Studio’s Presents Little Dragon',
                    description: "<p>We worked with RedBull Studios to bring Little Dragon to Cape Town and Johannesburg audiences for the final leg of their album tour. The shows enjoyed massive crowds and positive feedback from artists and concertgoers alike.</p>",
                    thumb: '../../images/projects/08/thumb.jpg',
                    client: "<a href='http://www.redbullstudios.com/'>Red Bull Studio’s</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p> Little Dragon (Artist) </p> </br> <p>Beanstalk, Battalion & The Bread(Event Production) </p> <p> We-Are-Awesome Film (Content Production) </p> <p> Klara Van Wyngfarden (Decor Fabrication) </p> <p> Sydelle Willow Smith (Photography)</p>",
                    cover: '../../images/projects/08/cover.png',
                    videos: [
                        'https://vimeo.com/140646586',
                    ],
                    images: [
                        '../../images/projects/08/2.jpg',
                        '../../images/projects/08/3.jpg',
                        '../../images/projects/08/4.jpg',
                        '../../images/projects/08/5.jpg',
                    ]
                }, {
                    id: 9,
                    name: 'Propeller Films',
                    description: "<p>We were tasked with re-creating the visual identity for Propeller Films, A South African film company comprised of an experienced team of producers, directors, researchers, and storytellers. They liked the idea of each director having their own illustrated flying machine based on their tastes, personality, and previous work.</p>",
                    thumb: '../../images/projects/09/thumb.jpg',
                    client: "<a href='http://www.propellerfilms.co.za/'>Propeller Films</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p>Nicholas Christowitz (Graphic & Web Design)</p> <p> Johnny Kotze & Nicholas Christowitz (Illustration) </p>",
                    cover: '../../images/projects/09/cover.png',
                    images: [
                        '../../images/projects/09/1.jpg',
                        '../../images/projects/09/2.jpg',
                        '../../images/projects/09/3.jpg',
                        '../../images/projects/09/4.jpg',
                        '../../images/projects/09/5.jpg',
                        '../../images/projects/09/6.jpg',
                        '../../images/projects/09/7.jpg',
                        '../../images/projects/09/8.jpg',
                        '../../images/projects/09/9.jpg',
                        '../../images/projects/09/10.jpg',
                        '../../images/projects/09/11.jpg',
                        '../../images/projects/09/12.jpg',
                    ]
                }, {
                    id: 10,
                    name: 'ProTEST HIV / U.N. AIDS T-Shirt Launch JHB',
                    description: "<p>We brought a local campaign for ProTEST HIV by United Nations AIDS Organisation to life in Johannesburg. The concept, created by BAM Berlin, involved limited-edition T-shirts created by some of the world's most renowned artists. These were launched globally on World Aids Day. They were limited to only the top tier of retailers world-wide. The likes of SOTO Store Berlin, Colette Paris, 290SQM AMSTERDAM, Goodhood London, and STORM Copenhagen.</p> <p>We held the local-leg of the launch as an exhibition at Kalashnikovv Gallery in Braamfontein, JHB. The event exposed people to the concept behind ProTEST HIV, a movement that hopes to grow its global presence very quickly. They advocate a pro-test lifestyle and focus on ensuring youths know their status by removing the stigma around HIV. All proceeds went to AIDS research.</p>",
                    thumb: '../../images/projects/10/thumb.jpg',
                    client: "<a href='http://www.protesthiv.org/'>ProTEST HIV</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a> & <a href='http://bam-berlin.com/'>BAM BERLIN</a>",
                    collaborators: "<p>Andre, Futura, Dustin Yellin, Scott Campbell & Aerosyn-Lex (Artists)</p> <p> The Bread & Kalashnikovv Gallery (Event Production) </p> <p> Andrew Berry (Event Photography)</p> <p>Rachel Israela (Lookbook Photography)</p>",
                    cover: '../../images/projects/10/cover.png',
                    images: [
                        '../../images/projects/10/1.jpg',
                        '../../images/projects/10/2.jpg',
                        '../../images/projects/10/3.jpg',
                        '../../images/projects/10/4.jpg',
                        '../../images/projects/10/5.jpg',
                        '../../images/projects/10/6.jpg',
                        '../../images/projects/10/7.jpg',
                        '../../images/projects/10/8.jpg',
                    ]
                }, {
                    id: 11,
                    name: 'Ray-Ban #Campaign4Change',
                    description: "<p>We were tasked with launching Ray-Ban's global #Campaign4Change to South Africa. This resulted in a massive party with live performances, live painting, and graffiti writers. As part of the launch of #Campaign4Change in South Africa we were tasked with creating a series of videos highlighting the stories of our 5 ambassadors.</p>",
                    thumb: '../../images/projects/11/thumb.jpg',
                    client: "<a href='http://www.ray-ban.com/'>Ray-Ban</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p>Muptee, Riky Rick, Stilo Magolide, Nonku Phiri & PHFAT (Artists)</p> <p> Klara Van Wyngarden (Fabrication) </p> <p>The Bread (Event Production)</p> <p>We-Are-Awesome Film (Content Production)</p> <p>Chris Valentine (Live Painter) </p> <p>Ben Eagle & Matt Bouch (Tag Writers) </p> <p>We-Are-Awesome Film (Film Production)</p> <p> Adriaan Louw, Chris Saunders, Dave East & Lebogang Rasethaba (Directors) </p> <p>Didi, Nonku Phiri, Roxanne Robinson, Jake Lipman & Reason (Stars)</p>",
                    cover: '../../images/projects/11/cover.png',
                    videos: [
                        'https://www.youtube.com/watch?v=06JLOlMVA8M',
                        'https://www.youtube.com/watch?v=iUqGNdwpgyI',
                        'https://www.youtube.com/watch?v=MQg3GVgKOqM',
                    ],
                    images: [
                        '../../images/projects/11/1.jpg',
                        '../../images/projects/11/2.jpg',
                        '../../images/projects/11/3.jpg',
                        '../../images/projects/11/4.jpg',
                        '../../images/projects/11/5.jpg',
                    ]
                }, {
                    id: 12,
                    name: 'Ray-Ban: The Order Of Never Hide',
                    description: "<p>As part of Ray-Ban’s Order Of Never Hide campaign we produced four videos with local musicians to illustrate the new materials that were being used on Ray-Ban’s iconic frames.</p> <p>The four materials that we brought emphasis to are leather, velvet, titanium, and camo. Characteristics of each material were aligned with musicians to bring a greater understanding to the consumer of how new materials are being used on iconic, classic models. </p> <p>The project aimed to educated both consumers on Ray-Ban’s use of materials, while also telling some of the untold stories of our local musicians, illustrating Ray-Ban’s undying support for local creatives. </p>",
                    thumb: '../../images/projects/12/thumb.jpg',
                    client: "<a href='http://www.ray-ban.com/'>Ray-Ban</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p>We-Are-Awesome Film (Content Production)</p> <p> Cassper Noyvest, DJ Doowap, aKing, and PH FAT. (Musicians) </p>",
                    cover: '../../images/projects/12/cover.png',
                    videos: [
                        'https://www.youtube.com/watch?v=i_XNKnT-YaA',
                        'https://www.youtube.com/watch?v=vLEZt8vhqeg',
                        'https://www.youtube.com/watch?v=ZBWScCsQ-4Y',
                        'https://www.youtube.com/watch?v=Qk5fSUZw7tE',
                    ],
                }, {
                    id: 13,
                    name: 'The Scene Artworks Project',
                    description: "<p>We were required to commission various artworks that could live within The Scene stores as they expand across South Africa. We've designed the stores to be neutral and monotone, allowing the variety of product to bring life to each space. This meant we could create colourful and vibrant works to compliment the store's Charcoal walls.</p>",
                    thumb: '../../images/projects/13/thumb.jpg',
                    client: "<a href='http://www.tfg.co.za/'>The Foschini Group</a>",
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<p>Ben Johnson & Ben Eagles (Artists)</p>",
                    cover: '../../images/projects/13/cover.png',
                    images: [
                        '../../images/projects/13/1.jpg',
                        '../../images/projects/13/2.jpg',
                        '../../images/projects/13/3.jpg',
                        '../../images/projects/13/4.jpg',
                        '../../images/projects/13/5.jpg',
                        '../../images/projects/13/6.jpg',
                        '../../images/projects/13/7.jpg',
                        '../../images/projects/13/8.jpg',
                        '../../images/projects/13/9.jpg',
                        '../../images/projects/13/10.jpg',
                        '../../images/projects/13/11.jpg',
                        '../../images/projects/13/12.jpg',
                        '../../images/projects/13/13.jpg',
                        '../../images/projects/13/14.jpg',
                        '../../images/projects/13/15.jpg',
                        '../../images/projects/13/16.jpg',
                        '../../images/projects/13/17.jpg',
                    ]
                }, {
                    id: 14,
                    name: 'The Scene East Rand Mall',
                    description: '<p>We were tasked with designing a new The Scene store in East Rand Mall, Johannesburg. We had to work with their graphic branding while developing a new style of interior. We focused heavily on reducing visual clutter, and bringing the colour palette of the store into a neutral range, allowing the massive variety of product to shine. </p><p>Because of the size and shape of the space we split the shop in two: The front space for clothing and accessories, and a "sneaker lounge" in the back. The spaces are divided by powder-coated mesh walls, and the dropped ceiling feature in the sneaker lounge draws intrigue from passersby. </p>',
                    thumb: '../../images/projects/14/thumb.jpg',
                    agency: "<a href='http://www.thebread.co.za/'>The Bread</a>",
                    collaborators: "<a href='http://www.carl.co.za/'>Carl Ashcroft</a> (Spatial Designer)",
                    cover: '../../images/projects/14/cover.png',
                    images: [
                        '../../images/projects/14/1.jpg',
                        '../../images/projects/14/2.jpg',
                        '../../images/projects/14/3.jpg',
                        '../../images/projects/14/4.jpg',
                        '../../images/projects/14/5.jpg',
                        '../../images/projects/14/6.jpg',
                        '../../images/projects/14/7.jpg',
                        '../../images/projects/14/8.jpg',
                        '../../images/projects/14/9.jpg',
                        '../../images/projects/14/10.jpg',
                        '../../images/projects/14/11.jpg',
                        '../../images/projects/14/12.jpg',
                        '../../images/projects/14/13.jpg',
                        '../../images/projects/14/14.jpg',
                        '../../images/projects/14/15.jpg',
                    ]
                }

            ];
            return {
                list: function() {
                    return projects;
                },
                find: function(id) {
                    return _.find(projects, function(project) {
                        return project.id == id;
                    });
                }
            };
            /* jshint ignore:end */
        });

})();
