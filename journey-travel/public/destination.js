const urlParams = new URLSearchParams(window.location.search);
const attractionId = urlParams.get('id');

const attractions = [
    {
        id: 1,
        name: "Maasai Mara National Reserve",
        location: "Narok County, Kenya",
        BestTime: "July to October",
        priceRange: "$200-500",
        about: "Experience the world-famous wildlife sanctuary, home to the Great Migration and incredible year-round game viewing. Watch zebras and giraffes grazing on the savannah, and witness the diverse ecosystem that makes the Mara unique.",
        culturalInfo: "Home to the Maasai people, known for their distinctive customs and dress.",
        transportOptions: ["Flight", "Road Transfer", "4x4 Safari Vehicle"],
        imageUrl: "images/MASAI.jpeg",
        
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.4834851649825!2d35.1274146750717!3d-1.4821323985039443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182ce8a64a31fdb1%3A0x296a9587e0c3c410!2sMaasai%20Mara%20National%20Reserve!5e0!3m2!1sen!2ske!4v1741326958116!5m2!1sen!2ske"
    },
    {
        id: 2,
        name: "Diani Beach",
        location: "Kwale County, Kenya",
        BestTime: "Year-round",
        priceRange: "$150-400",
        about: "Beautiful white sandy beach with crystal-clear waters, perfect for relaxation and water sports.",
        culturalInfo: "Diani Beach is a vibrant blend of Swahili culture and coastal charm. Known for its warm hospitality, the local community embraces a laid-back lifestyle influenced by centuries of trade and interaction with Arab, Persian, and European settlers. The Swahili language, music, and cuisine dominate the area, offering visitors a taste of authentic coastal life. Don’t miss the chance to explore traditional Swahili architecture, enjoy fresh seafood dishes, or join in the lively festivals that celebrate the region’s rich heritage..",
        transportOptions: ["Flight", "Road Transfer", "Taxi"],
        imageUrl: "images/DIANI.jpeg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15914.830025133579!2d39.584469699124476!3d-4.276956631150856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1840463f2a0b107d%3A0xafa0063ab0f439ad!2sDiani%20Beach!5e0!3m2!1sen!2ske!4v1741283076558!5m2!1sen!2ske"
    },
    {
        id: 3,
        name: "Mount Kenya",
        location: "Meru county",
        BestTime:"January-March, June-October (dry seasons)" ,
        priceRange:"$200-600",  
        about:"Africa’s second-highest peak, Mount Kenya offers breathtaking landscapes, including glaciers, alpine forests, and diverse wildlife. It’s a paradise for hikers, climbers, and nature enthusiasts." , 
        culturalInfo:"The mountain holds spiritual significance for the Kikuyu and Meru communities, who believe it is the home of their god, Ngai. Visitors can learn about local traditions and folklore while exploring the region.",
        transportOptions:["Road Transfer", "Flight"],
        imageUrl: "images/MOUNTKENYA.jpeg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.217019396026!2d37.298108148933295!3d-0.1521383475418098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1827e264a95116b7%3A0x501b6e20567ff6b8!2sMount%20Kenya!5e0!3m2!1sen!2ske!4v1741283315876!5m2!1sen!2ske"
    },
    {
        id: 4,
        name: "Amboseli National Park",
        location: "Kajiado",
        BestTime:"June-October, January-February (dry seasons for clear views of Kilimanjaro)",
        priceRange:"$100-300",    
        about:"Famous for its large herds of elephants and stunning views of Mount Kilimanjaro, Amboseli is a photographer’s dream. The park also hosts lions, cheetahs, and a variety of bird species.",
        culturalInfo: "The Maasai people inhabit the area, and visitors can experience their traditional way of life, including dances, crafts, and village tours.",  
        transportOptions:["Road Transfer", "Flight"],
        imageUrl: "images/AMBOSELI.jpeg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.5430173649384!2d37.25804577507484!3d-2.6526704973250332!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18309e7455555555%3A0x8405eed269adf949!2sAmboseli%20National%20Park!5e0!3m2!1sen!2ske!4v1741285917889!5m2!1sen!2ske"
    },
    {
        id: 5,
        name: "Lake Nakuru",
        location: "Nakuru",
        BestTime:" June-March (best for birdwatching and wildlife viewing)",
        priceRange: "$80-250",
        about: "Known for its flamingos and rhino sanctuary, Lake Nakuru is a birdwatcher’s paradise. The park also hosts lions, leopards, and giraffes, set against a backdrop of lush forests and a sparkling lake.",
        culturalInfo: "The area is rich in Kenyan history and culture, with nearby towns offering insights into local life and traditions.",
        transportOptions: ["Road Transfer", "Flight"],
        imageUrl: "images/NAKURU.jpeg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63835.83855599141!2d36.046568921650874!3d-0.3592106071347066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18298fe3b0de60ef%3A0xbb9b734c1a471f80!2sLake%20Nakuru!5e0!3m2!1sen!2ske!4v1741327085335!5m2!1sen!2ske"
    },
    {
        id: 6,
        name: "Tsavo National Park",
        location: "Taita-Taveta",
        BestTime:"May-October, January-February (dry seasons)" ,
        priceRange: "$100-350 ",
        about: "One of the largest national parks in the world, Tsavo is divided into East and West. It’s famous for its red elephants, lions, and diverse landscapes, including volcanic hills, savannahs, and rivers.",
        culturalInfo: "The park is steeped in history, including the story of the “Man-Eaters of Tsavo.” Local communities offer cultural experiences, including traditional dances and crafts.",
        transportOptions: ["Road Transfer", "Flight"],
        imageUrl: "images/TSAVO2.jpg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25818.023057781982!2d37.889215716133755!3d-2.9645865110497813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x183980bcec682bb7%3A0xfc507de3c2bb2aff!2sTsavo%20National%20Park!5e0!3m2!1sen!2ske!4v1741327168195!5m2!1sen!2ske"
    },
    {
        id: 7,
        name: "Hell's Gate National Park",
        location: "Naivasha",
        BestTime: "June-February (dry seasons for hiking and cycling)",
        priceRange: "$50-200",
        about: "Known for its dramatic cliffs, gorges, and geothermal activity, Hell’s Gate is perfect for hiking, cycling, and rock climbing. It’s one of the few parks where walking and biking are allowed.",
        culturalInfo: "The park is close to Maasai communities, offering opportunities to learn about their culture and traditions.",
        transportOptions: ["Road Transfer"],
        imageUrl: "images/HELL.webp",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20779.76239637857!2d36.296912495109524!3d-0.8708240286444296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18294a01b3120caf%3A0xa1258436f698fc5d!2sHells%20Gate%20National%20Park!5e0!3m2!1sen!2ske!4v1741327984213!5m2!1sen!2ske"
    },
    {
        id: 8,
        name: "Lamu Island",
        location: "Lamu",
        BestTime:" October-March (dry season)",
        priceRange: "$150-500",
        about: "A UNESCO World Heritage Site, Lamu Island is a tranquil destination with narrow streets, Swahili architecture, and pristine beaches. It’s perfect for relaxation and cultural immersion.",
        culturalInfo: "Lamu is a hub of Swahili culture, with traditional festivals, dhow sailing, and rich history influenced by Arab, Persian, and European traders.",
        transportOptions: ["Flight", "Boat Transfer"],
        imageUrl: "images/LAMU.jpeg",
        mapUrl:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63786.03563853821!2d40.823778072521286!3d-2.291710458149417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18171c11b40ac0b9%3A0xd0803fae0427abf9!2sLamu!5e0!3m2!1sen!2ske!4v1741330619448!5m2!1sen!2ske"
    },
    {
        id: 9,
        name: "Samburu National Reserve",
        location: "Samburu",
        BestTime: "June-October, January-February (dry seasons)",
        priceRange: "$100-300",
        about: "Located in northern Kenya, Samburu is known for its unique wildlife, including the “Samburu Special Five” (Grevy’s zebra, reticulated giraffe, Somali ostrich, gerenuk, and Beisa oryx). The Ewaso Ng’iro River adds to the scenic beauty.",
        culturalInfo: "The Samburu people, closely related to the Maasai, offer cultural experiences, including traditional dances and village visits.",
        transportOptions: ["Road Transfer", "Flight"],
        imageUrl: "images/SAMBURU.jpeg",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7100.136434375001!2d37.53155254778767!3d0.6100208012687472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17888d933c6f7369%3A0xa2e2dc34ae133bde!2sSamburu%20National%20Reserve!5e0!3m2!1sen!2ske!4v1741331173141!5m2!1sen!2ske"
    },
    {
        id: 10,
        name: "Nairobi National Park",
        location: "Nairobi",
        BestTime: "Year-round (best in dry seasons: June-October, January-February)",
        priceRange: "$50-200",
        about: "The world’s only wildlife park located within a capital city, Nairobi National Park is home to lions, rhinos, giraffes, and more. It’s a great spot for a quick safari experience.",
        culturalInfo: "The park is close to Nairobi’s bustling city life, offering a mix of urban and natural experiences. Nearby attractions include the David Sheldrick Wildlife Trust and the Giraffe Centre.",
        transportOptions: ["Road Transfer"],
        imageUrl: "images/NAIROBI.jpeg",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.808234715944!2d36.81683731475399!3d-1.406536536002134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0fbbde36bc45%3A0x6f9671d1966870ec!2sNairobi%20National%20Park!5e0!3m2!1sen!2ske!4v1633021234567!5m2!1sen!2ske"
    },
];

// Find the selected attraction
const selectedAttraction = attractions.find((attraction) => attraction.id == attractionId);

if (selectedAttraction) {
    // Update the image
    const destinationImage = document.querySelector(".destination-image img");
    destinationImage.src = selectedAttraction.imageUrl;

    // Update the page content with the selected attraction's details
    document.getElementById("destination-name").textContent = selectedAttraction.name;
    document.getElementById("destination-location").textContent = selectedAttraction.location;
    document.getElementById("best-time").textContent = selectedAttraction.BestTime;
    document.getElementById("price-range").textContent = selectedAttraction.priceRange;
    document.getElementById("about-text").textContent = selectedAttraction.about;
    document.getElementById("cultural-info-text").textContent = selectedAttraction.culturalInfo;

    // Update transportation options
    const transportList = document.getElementById("transportation-options");
    transportList.innerHTML = selectedAttraction.transportOptions
        .map((option) => `<li>${option}</li>`)
        .join("");

    // Update the embedded map
    const mapIframe = document.getElementById("map-iframe");
    mapIframe.src = selectedAttraction.mapUrl;
}

// Redirect to the booking page
function redirectToBooking() {
    window.location.href = `booking.html?id=${attractionId}`;
}