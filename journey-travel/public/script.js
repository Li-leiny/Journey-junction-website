const attractions = [
    {
        id: 1,
        name: "Masai Mara",
        location: "Narok",
        description: "Famous for wildlife and the Great Migration.",
        imageUrl: "./images/R.jpg",
        mapUrl: "https://www.google.com/maps?q=Maasai+Mara&satid=id.sid%3Ad8caf2d9-49e8-68c8-939e-7547ce7e9993&FORM=KC2MAP&cp=-26.097614%7E28.446256&lvl=16.6",
        hotels: [
            { id: 1, name: "Mara Serena Safari Lodge", pricePerNight: 300, rating: 4.8 },
            { id: 2, name: "Keekorok Lodge", pricePerNight: 250, rating: 4.5 },
        ],
        transportations: [
            { id: 1, name: "Mara Shuttle", type: "Bus", price: 50, rating: 4.5 },
            { id: 2, name: "Mara Air", type: "Flight", price: 200, rating: 4.7 },
        ],
    },
     {
        id: 2,
        name: "Diani Beach",
        location: "Kwale",
        description: "Beautiful white sandy beach.",
        imageUrl: "images/R (1).jpg",
        mapUrl: "https://www.google.com/maps?mepi=101%7EAttraction%7EUnknown%7EMap_Image&ty=18&q=Diani+Beach&ss=ypid.YN8091x544262654610651293&segment=Attraction&ppois=-4.292900085449219_39.56404113769531_Diani+Beach_YN8091x544262654610651293%7E&cp=-4.292898%7E39.553571&lvl=16.0&v=2&sV=1&FORM=MPSRPL",
        hotels: [
            { id: 3, name: "Diani Sea Resort", pricePerNight: 200, rating: 4.6 },
            { id: 4, name: "Baobab Beach Resort", pricePerNight: 180, rating: 4.4 },
        ],
        transportations: [
            { id: 3, name: "Diani Taxi", type: "Taxi", price: 30, rating: 4.3 },
            { id: 4, name: "Coastal Bus", type: "Bus", price: 40, rating: 4.2 },
        ],
    },
    {
        id: 3,
        name: "Mount Kenya",
        location: "Central Kenya",
        description: "The highest mountain in Kenya and the second-highest in Africa.",
        imageUrl: "images/R (2).jpg",
        mapUrl: "https://www.google.com/maps/place/Mount+Kenya+National+Park/@-0.15,37.3140918,17z/data=!3m1!4b1!4m6!3m5!1s0x1827e15555555555:0xc947a256df18ed98!8m2!3d-0.15!4d37.3166667!16zL20vMDZqY24w?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 5, name: "Mount Kenya Lodge", pricePerNight: 150, rating: 4.3 },
            { id: 6, name: "Serena Mountain Lodge", pricePerNight: 220, rating: 4.7 },
        ],
        transportations: [
            { id: 5, name: "Mountain Shuttle", type: "Bus", price: 60, rating: 4.4 },
            { id: 6, name: "Helicopter Tours", type: "Flight", price: 300, rating: 4.8 },
        ],
    },
    {
        id: 4,
        name: "Amboseli National Park",
        location: "Kajiado",
        description: "Famous for its large elephant herds and views of Mount Kilimanjaro.",
        imageUrl: "images/R (3).jpg",
        mapUrl: "https://www.google.com/maps/place/Amboseli+National+Park/@-2.6526705,37.2557498,17z/data=!3m1!4b1!4m6!3m5!1s0x18309e7455555555:0x8405eed269adf949!8m2!3d-2.6526705!4d37.2606207!16zL20vMDN6eTNm?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 7, name: "Amboseli Serena Lodge", pricePerNight: 280, rating: 4.6 },
            { id: 8, name: "Tortilis Camp", pricePerNight: 350, rating: 4.9 },
        ],
        transportations: [
            { id: 7, name: "Amboseli Shuttle", type: "Bus", price: 70, rating: 4.5 },
            { id: 8, name: "Amboseli Air", type: "Flight", price: 250, rating: 4.7 },
        ],
    },
    {
        id: 5,
        name: "Lake Nakuru",
        location: "Nakuru",
        description: "Known for its flamingos and diverse wildlife.",
        imageUrl: "images/OIP (1).jpg",
        mapUrl: "https://www.google.com/maps/place/Lake+Nakuru+National+Park/@-0.4035304,36.0912954,17z/data=!3m1!4b1!4m6!3m5!1s0x18299ad44c2b87a1:0x8ad29aeb6bc48e31!8m2!3d-0.4035304!4d36.0961663!16s%2Fg%2F121qfs73?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 9, name: "Lake Nakuru Lodge", pricePerNight: 180, rating: 4.4 },
            { id: 10, name: "Sarova Lion Hill Lodge", pricePerNight: 220, rating: 4.6 },
        ],
        transportations: [
            { id: 9, name: "Nakuru Shuttle", type: "Bus", price: 40, rating: 4.3 },
            { id: 10, name: "Nakuru Taxi", type: "Taxi", price: 50, rating: 4.2 },
        ],
    },
    {
        id: 6,
        name: "Tsavo National Park",
        location: "Taita-Taveta",
        description: "One of the largest parks in the world with diverse wildlife.",
        imageUrl: "images/TSAVO.jpg",
        mapUrl: "https://www.google.com/maps/place/Tsavo+National+Park/@-2.9644271,37.9008149,15z/data=!3m1!4b1!4m6!3m5!1s0x183980bcec682bb7:0xfc507de3c2bb2aff!8m2!3d-2.9644272!4d37.9111147!16s%2Fg%2F1tk40dhm?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 11, name: "Kilaguni Serena Lodge", pricePerNight: 300, rating: 4.7 },
            { id: 12, name: "Voi Wildlife Lodge", pricePerNight: 200, rating: 4.5 },
        ],
        transportations: [
            { id: 11, name: "Tsavo Shuttle", type: "Bus", price: 80, rating: 4.4 },
            { id: 12, name: "Tsavo Air", type: "Flight", price: 300, rating: 4.8 },
        ],
    },
    {
        id: 7,
        name: "Hell's Gate National Park",
        location: "Naivasha",
        description: "Known for its geothermal activity and outdoor adventures.",
        imageUrl: "images/OIP (3).jpg",
        mapUrl: "https://www.google.com/maps/place/Hells+Gate+National+Park/@-0.87579,36.3148068,17z/data=!3m1!4b1!4m6!3m5!1s0x18294a01b3120caf:0xa1258436f698fc5d!8m2!3d-0.87579!4d36.3173817!16zL20vMDk5Xzd6?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 13, name: "Lake Naivasha Resort", pricePerNight: 150, rating: 4.3 },
            { id: 14, name: "Elsamere Lodge", pricePerNight: 180, rating: 4.5 },
        ],
        transportations: [
            { id: 13, name: "Naivasha Shuttle", type: "Bus", price: 30, rating: 4.2 },
            { id: 14, name: "Naivasha Taxi", type: "Taxi", price: 40, rating: 4.1 },
        ],
    },
    {
        id: 8,
        name: "Lamu Island",
        location: "Lamu",
        description: "A UNESCO World Heritage Site with rich Swahili culture.",
        imageUrl: "images/OIP (4).jpg",
        mapUrl: "https://www.google.com/maps/place/Lamu/@-2.2917105,40.8237781,13z/data=!3m1!4b1!4m6!3m5!1s0x18171c11b40ac0b9:0xd0803fae0427abf9!8m2!3d-2.290435!4d40.8677469!16zL20vMDliMWZ0?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 15, name: "Peponi Hotel", pricePerNight: 250, rating: 4.7 },
            { id: 16, name: "Lamu House", pricePerNight: 200, rating: 4.6 },
        ],
        transportations: [
            { id: 15, name: "Lamu Ferry", type: "Boat", price: 20, rating: 4.3 },
            { id: 16, name: "Lamu Air", type: "Flight", price: 150, rating: 4.5 },
        ],
    },
    {
        id: 9,
        name: "Samburu National Reserve",
        location: "Samburu",
        description: "Home to unique wildlife like the Grevy's zebra and Somali ostrich.",
        imageUrl: "images/OIP.jpg",
        mapUrl: "https://www.google.com/maps/place/Samburu+National+Reserve/@0.6110771,37.5349308,17z/data=!3m1!4b1!4m6!3m5!1s0x17888d933c6f7369:0xa2e2dc34ae133bde!8m2!3d0.6110771!4d37.5375057!16zL20vMDN6eTV5?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 17, name: "Samburu Intrepids Camp", pricePerNight: 300, rating: 4.8 },
            { id: 18, name: "Elephant Bedroom Camp", pricePerNight: 350, rating: 4.9 },
        ],
        transportations: [
            { id: 17, name: "Samburu Shuttle", type: "Bus", price: 90, rating: 4.4 },
            { id: 18, name: "Samburu Air", type: "Flight", price: 250, rating: 4.7 },
        ],
    },
    {
        id: 10,
        name: "Nairobi National Park",
        location: "Nairobi",
        description: "The only national park in the world located within a capital city.",
        imageUrl: "images/R (4).jpg",
        mapUrl: "https://www.google.com/maps/place/Nairobi+National+Park/@-1.3824923,36.8584451,17z/data=!3m1!4b1!4m6!3m5!1s0x182f0fbbde36bc45:0x6f9671d1966870ec!8m2!3d-1.3824923!4d36.86102!16zL20vMDQ1d3pi?entry=ttu&g_ep=EgoyMDI1MDIxOS.4xIKXMDSoASAFQAw%3D%3D",
        hotels: [
            { id: 19, name: "Nairobi Serena Hotel", pricePerNight: 200, rating: 4.6 },
            { id: 20, name: "Emara Ole-Sereni", pricePerNight: 180, rating: 4.5 },
        ],
        transportations: [
            { id: 19, name: "Nairobi Shuttle", type: "Bus", price: 10, rating: 4.1 },
            { id: 20, name: "Nairobi Taxi", type: "Taxi", price: 20, rating: 4.2 },
        ],
    },
];



const attractionsGrid = document.getElementById("attractions-grid");
const searchInput = document.getElementById("search");

// Display attractions
// Display attractions
function displayAttractions(attractions) {
    attractionsGrid.innerHTML = attractions
        .map(
            (attraction) => `
            <div class="attraction-card" onclick="redirectToDestination(${attraction.id})">
                <img src="${attraction.imageUrl}" alt="${attraction.name}">
                <h3>${attraction.name}</h3>
                <p>${attraction.description}</p>
                <div class="learn-more">
                <button><a href="destination.html?id=${attraction.id}">Learn More</a></button>        
                </div>
            </div>
        `
        )
        .join("");
}

// Redirect to destination page with attraction ID
function redirectToDestination(attractionId) {
    window.location.href = `destination.html?id=${attractionId}`;
}

// Search functionality
searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredAttractions = attractions.filter((attraction) =>
        attraction.name.toLowerCase().includes(searchTerm)
    );
    displayAttractions(filteredAttractions);
});

// Initial display of attractions
displayAttractions(attractions);