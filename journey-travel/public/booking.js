document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const attractionId = urlParams.get('id');
    console.log("Attraction ID from URL:", attractionId);

    const attractions = [
        {
            id: 1,
            name: "Maasai Mara National Reserve",
            location: "Narok County, Kenya",
            priceRange: "$200-500",
            hotels: [
                { id: 1, name: "Mara Serena Safari Lodge", pricePerNight: 300 },
                { id: 2, name: "Keekorok Lodge", pricePerNight: 250 },
            ],
        },
        {
            id: 2,
            name: "Diani Beach",
            location: "Kwale County, Kenya",
            priceRange: "$150-400",
            hotels: [
                { id: 3, name: "Diani Sea Resort", pricePerNight: 200 },
                { id: 4, name: "Baobab Beach Resort", pricePerNight: 180 },
            ],
        },
        {
            id: 3,
            name: "Mount Kenya",
            location: "Central Kenya",
            priceRange:"$200-600",
            hotels: [
                { id: 5, name: "Mount Kenya Lodge", pricePerNight: 150, rating: 4.3 },
                { id: 6, name: "Serena Mountain Lodge", pricePerNight: 220, rating: 4.7 },
            ],
        },
        {
            id: 4,
            name: "Amboseli National Park",
            location: "Kajiado",
            priceRange:"$100-300",  
            hotels: [
                { id: 7, name: "Amboseli Serena Lodge", pricePerNight: 280, rating: 4.6 },
                { id: 8, name: "Tortilis Camp", pricePerNight: 350, rating: 4.9 },
            ],
        },
        {
            id: 5,
            name: "Lake Nakuru",
            location: "Nakuru",
            priceRange: "$80-250",
            hotels: [
                { id: 9, name: "Lake Nakuru Lodge", pricePerNight: 180, rating: 4.4 },
                { id: 10, name: "Sarova Lion Hill Lodge", pricePerNight: 220, rating: 4.6 },
            ],
        },
        {
            id: 6,
            name: "Tsavo National Park",
            location: "Taita-Taveta",
            priceRange: "$100-350 ",
            hotels: [
                { id: 11, name: "Kilaguni Serena Lodge", pricePerNight: 300, rating: 4.7 },
                { id: 12, name: "Voi Wildlife Lodge", pricePerNight: 200, rating: 4.5 },
            ],
        },
        {
            id: 7,
            name: "Hell's Gate National Park",
            location: "Naivasha",
            priceRange: "$50-200",
            hotels: [
                { id: 13, name: "Lake Naivasha Resort", pricePerNight: 150, rating: 4.3 },
                { id: 14, name: "Elsamere Lodge", pricePerNight: 180, rating: 4.5 },
            ],
        },
        {
            id: 8,
            name: "Lamu Island",
            location: "Lamu",
            priceRange: "$150-500",
            hotels: [
                { id: 15, name: "Peponi Hotel", pricePerNight: 250, rating: 4.7 },
                { id: 16, name: "Lamu House", pricePerNight: 200, rating: 4.6 },
            ],
        },
        {
            id: 9,
            name: "Samburu National Reserve",
            location: "Samburu",
            priceRange: "$100-300",
            hotels: [
                { id: 17, name: "Samburu Intrepids Camp", pricePerNight: 300, rating: 4.8 },
                { id: 18, name: "Elephant Bedroom Camp", pricePerNight: 350, rating: 4.9 },
            ],
        },
        {
            id: 10,
            name: "Nairobi National Park",
            location: "Nairobi",
            priceRange: "$50-200",
            hotels: [
                { id: 19, name: "Nairobi Serena Hotel", pricePerNight: 200, rating: 4.6 },
                { id: 20, name: "Emara Ole-Sereni", pricePerNight: 180, rating: 4.5 },
            ],
        },
    ];

    const selectedAttraction = attractions.find((attraction) => attraction.id == attractionId);

    if (selectedAttraction) {
        document.getElementById("destination-name").textContent = selectedAttraction.name;

        const hotelSelect = document.getElementById("hotel");
        hotelSelect.innerHTML = selectedAttraction.hotels
            .map((hotel) => `<option value="${hotel.id}">${hotel.name} - $${hotel.pricePerNight}/night</option>`)
            .join("");

        const transportationSelect = document.getElementById("transportation");

        const updateTotalCost = () => {
            const rooms = parseInt(document.getElementById("rooms").value) || 0;
            const hotel = selectedAttraction.hotels.find((h) => h.id == hotelSelect.value);
            const checkIn = new Date(document.getElementById("check-in").value);
            const checkOut = new Date(document.getElementById("check-out").value);
            const nights = Math.ceil((checkOut - checkIn) / (1000 * 60 * 60 * 24));
            let totalCost = hotel.pricePerNight * rooms * nights;

            if (transportationSelect.value === "flight") {
                const flightDetails = JSON.parse(sessionStorage.getItem("flightDetails")) || {};
                const adults = parseInt(flightDetails.adults) || 0;
                const students = parseInt(flightDetails.students) || 0;
                const seniors = parseInt(flightDetails.seniors) || 0;
                const youths = parseInt(flightDetails.youths) || 0;
                const children = parseInt(flightDetails.children) || 0;
                const toddlers = parseInt(flightDetails.toddlers) || 0;
                const infants = parseInt(flightDetails.infants) || 0;

                const flightClass = flightDetails.flightClass;
                let flightCost = 0;

                switch (flightClass) {
                    case "economy":
                        flightCost = 100;
                        break;
                    case "premium-economy":
                        flightCost = 200;
                        break;
                    case "business":
                        flightCost = 500;
                        break;
                    case "first":
                        flightCost = 1000;
                        break;
                }

                totalCost += (adults + students + seniors + youths + children + toddlers + infants) * flightCost;
            } else if (transportationSelect.value === "road") {
                const roadTransferDetails = JSON.parse(sessionStorage.getItem("roadTransferDetails")) || {};
                const numberOfPeople = parseInt(roadTransferDetails.numberOfPeople) || 0;
                const roadTransferCost = 50;
                totalCost += numberOfPeople * roadTransferCost;
            } else if (transportationSelect.value === "safari") {
                const safariVehicleDetails = JSON.parse(sessionStorage.getItem("safariVehicleDetails")) || {};
                const numberOfPeople = parseInt(safariVehicleDetails.numberOfPeople) || 0;
                const safariVehicleCost = 100;
                totalCost += numberOfPeople * safariVehicleCost;
            }

            document.getElementById("total-cost").textContent = `$${totalCost.toFixed(2)}`;
        };

        const transportModal = document.getElementById("transport-modal");
        const closeModal = document.querySelector(".close-modal");
        const saveFlightDetails = document.getElementById("save-flight-details");
        
        // Show modal when flight is selected
        transportationSelect.addEventListener("change", () => {
            if (transportationSelect.value === "flight") {
                transportModal.style.display = "block"; // Show the modal
            } else if (transportationSelect.value === "road" || transportationSelect.value === "safari") {
                const numberOfPeople = prompt("Enter the number of people:");
                if (numberOfPeople) {
                    const details = { numberOfPeople: parseInt(numberOfPeople) };
                    if (transportationSelect.value === "road") {
                        sessionStorage.setItem("roadTransferDetails", JSON.stringify(details));
                    } else if (transportationSelect.value === "safari") {
                        sessionStorage.setItem("safariVehicleDetails", JSON.stringify(details));
                    }
                    updateTotalCost();
                }
            } else {
                transportModal.style.display = "none"; // Hide the modal
            }
        });
        
        // Close modal when the close button is clicked
        closeModal.addEventListener("click", () => {
            transportModal.style.display = "none";
        });
        
        // Close modal when clicking outside the modal
        window.addEventListener("click", (event) => {
            if (event.target === transportModal) {
                transportModal.style.display = "none";
            }
        });
        
        // Save flight details when the "Done" button is clicked
        saveFlightDetails.addEventListener("click", () => {
            const flightDetails = {
                flightClass: document.getElementById("flight-class").value,
                adults: document.getElementById("adults").value,
                students: document.getElementById("students").value,
                seniors: document.getElementById("seniors").value,
                youths: document.getElementById("youths").value,
                children: document.getElementById("children").value,
                toddlers: document.getElementById("toddlers").value,
                infants: document.getElementById("infants").value,
            };
        
            // Save flight details to sessionStorage
            sessionStorage.setItem("flightDetails", JSON.stringify(flightDetails));
        
            // Close the modal
            transportModal.style.display = "none";
        
            // Update the total cost
            updateTotalCost();
        });

// Close modal when the close button is clicked
closeModal.addEventListener("click", () => {
    transportModal.style.display = "none";
});

// Close modal when clicking outside the modal
window.addEventListener("click", (event) => {
    if (event.target === transportModal) {
        transportModal.style.display = "none";
    }
});

// Save flight details when the "Done" button is clicked
saveFlightDetails.addEventListener("click", () => {
    const flightDetails = {
        flightClass: document.getElementById("flight-class").value,
        adults: document.getElementById("adults").value,
        students: document.getElementById("students").value,
        seniors: document.getElementById("seniors").value,
        youths: document.getElementById("youths").value,
        children: document.getElementById("children").value,
        toddlers: document.getElementById("toddlers").value,
        infants: document.getElementById("infants").value,
    };

    // Save flight details to sessionStorage
    sessionStorage.setItem("flightDetails", JSON.stringify(flightDetails));

    // Close the modal
    transportModal.style.display = "none";

    // Update the total cost
    updateTotalCost();
});


// Payment Method Select Event Listener
const paymentMethodSelect = document.getElementById("payment-method");
const visaGroup = document.getElementById("visa-group");
const paypalGroup = document.getElementById("paypal-group");
const cryptoGroup = document.getElementById("crypto-group");
const creditcardGroup = document.getElementById("creditcard-group");
const wiseGroup = document.getElementById("wise-group");
const mpesaGroup = document.getElementById("mpesa-group"); // Added M-Pesa group

paymentMethodSelect.addEventListener("change", () => {
    const selectedMethod = paymentMethodSelect.value;

    // Hide all payment method groups
    visaGroup.style.display = "none";
    paypalGroup.style.display = "none";
    cryptoGroup.style.display = "none";
    creditcardGroup.style.display = "none";
    wiseGroup.style.display = "none";
    mpesaGroup.style.display = "none"; // Hide M-Pesa group by default

    // Show the selected payment method group
    if (selectedMethod === "visa") {
        visaGroup.style.display = "block";
    } else if (selectedMethod === "paypal") {
        paypalGroup.style.display = "block";
    } else if (selectedMethod === "crypto") {
        cryptoGroup.style.display = "block";
    } else if (selectedMethod === "creditcard") {
        creditcardGroup.style.display = "block";
    } else if (selectedMethod === "wise") {
        wiseGroup.style.display = "block";
    } else if (selectedMethod === "mpesa") {
        mpesaGroup.style.display = "block"; // Show M-Pesa group
    }
});



        // Confirm Booking Button
        document.getElementById("confirm-booking-button").addEventListener("click", (e) => {
            e.preventDefault();

            // Validate and collect form data
            const bookingDetails = collectBookingDetails();
            if (!bookingDetails) return;

            // Save booking details to localStorage
            localStorage.setItem("bookingDetails", JSON.stringify(bookingDetails));

            // Redirect to confirmation page
            window.location.href = "confirmation.html";
        });

        document.getElementById("download-pdf-button").addEventListener("click", async () => {
            const bookingDetails = collectBookingDetails();
            if (!bookingDetails) return;
        
            // Generate and download PDF with QR code
            await generatePDF(bookingDetails);
        });

        const collectBookingDetails = () => {
            const firstName = document.getElementById("first-name").value;
            const surname = document.getElementById("surname").value;
            const nationality = document.getElementById("nationality").value;
            const passport = document.getElementById("passport").value;
            const phone = document.getElementById("phone").value;
            const checkIn = document.getElementById("check-in").value;
            const checkOut = document.getElementById("check-out").value;
            const location = document.getElementById("location").value;
            const hotelId = document.getElementById("hotel").value;
            const rooms = document.getElementById("rooms").value;
            const transportation = document.getElementById("transportation").value;
            const paymentMethod = document.getElementById("payment-method").value;
            const specialRequests = document.getElementById("special-requests").value;
            const emergencyContact = document.getElementById("emergency-contact").value;
        
            // Collect payment details based on the selected payment method
            let paymentDetails = {};
            if (paymentMethod === "visa") {
                paymentDetails = {
                    visaNumber: document.getElementById("visa-number").value,
                    visaExpiry: document.getElementById("visa-expiry").value,
                    visaCVV: document.getElementById("visa-cvv").value,
                };
            } else if (paymentMethod === "paypal") {
                paymentDetails = {
                    paypalEmail: document.getElementById("paypal-email").value,
                };
            } else if (paymentMethod === "crypto") {
                paymentDetails = {
                    cryptoWallet: document.getElementById("crypto-wallet").value,
                };
            } else if (paymentMethod === "creditcard") {
                paymentDetails = {
                    creditcardNumber: document.getElementById("creditcard-number").value,
                    creditcardExpiry: document.getElementById("creditcard-expiry").value,
                    creditcardCVV: document.getElementById("creditcard-cvv").value,
                };
            } else if (paymentMethod === "wise") {
                paymentDetails = {
                    wiseEmail: document.getElementById("wise-email").value,
                };
            } else if (paymentMethod === "mpesa") {
                paymentDetails = {
                    mpesaPhone: document.getElementById("mpesa-phone").value,
                };
            }
        
            if (!firstName || !surname || !nationality || !passport || !phone || !checkIn || !checkOut || !location || !hotelId || !rooms || !transportation || !paymentMethod || !emergencyContact) {
                alert("Please fill out all required fields.");
                return null;
            }
        
            const checkInDate = new Date(checkIn);
            const checkOutDate = new Date(checkOut);
            if (checkOutDate <= checkInDate) {
                alert("Check-out date must be after check-in date.");
                return null;
            }
        
            const hotel = selectedAttraction.hotels.find((h) => h.id == hotelId);
        
            return {
                destination: selectedAttraction.name,
                firstName,
                middleName: document.getElementById("middle-name").value,
                surname,
                nationality,
                passport,
                phone,
                checkIn,
                checkOut,
                location,
                hotel: hotel.name,
                rooms,
                transportation,
                paymentMethod,
                paymentDetails, // Include payment details
                specialRequests,
                emergencyContact,
                totalCost: document.getElementById("total-cost").textContent,
            };
        };
        // Function to generate a unique QR code
const generateQRCode = (bookingDetails) => {
    return new Promise((resolve, reject) => {
        // Create a unique string for the QR code (e.g., booking ID + name + destination)
        const qrData = `Booking ID: ${Date.now()}\nName: ${bookingDetails.firstName} ${bookingDetails.surname}\nDestination: ${bookingDetails.destination}`;

        // Generate the QR code as a data URL
        QRCode.toDataURL(qrData, { width: 200, margin: 2 }, (err, url) => {
            if (err) {
                reject(err);
            } else {
                resolve(url); // Resolve with the QR code image URL
            }
        });
    });
};
const generatePDF = async (bookingDetails) => {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Set font size and add booking details
    doc.setFontSize(18);
    doc.text("Booking Confirmation", 10, 20);
    doc.setFontSize(12);
    doc.text(`Destination: ${bookingDetails.destination}`, 10, 30);
    doc.text(`Name: ${bookingDetails.firstName} ${bookingDetails.middleName} ${bookingDetails.surname}`, 10, 40);
    doc.text(`Nationality: ${bookingDetails.nationality}`, 10, 50);
    doc.text(`Passport: ${bookingDetails.passport}`, 10, 60);
    doc.text(`Phone: ${bookingDetails.phone}`, 10, 70);
    doc.text(`Check-in: ${bookingDetails.checkIn}`, 10, 80);
    doc.text(`Check-out: ${bookingDetails.checkOut}`, 10, 90);
    doc.text(`Hotel: ${bookingDetails.hotel}`, 10, 100);
    doc.text(`Rooms: ${bookingDetails.rooms}`, 10, 110);
    doc.text(`Transportation: ${bookingDetails.transportation}`, 10, 120);
    doc.text(`Payment Method: ${bookingDetails.paymentMethod}`, 10, 130);

    // Include payment details in the PDF
    if (bookingDetails.paymentMethod === "mpesa") {
        doc.text(`M-Pesa Phone: ${bookingDetails.paymentDetails.mpesaPhone}`, 10, 140);
    } else if (bookingDetails.paymentMethod === "visa") {
        doc.text(`Visa Card Number: ${bookingDetails.paymentDetails.visaNumber}`, 10, 140);
        doc.text(`Expiry Date: ${bookingDetails.paymentDetails.visaExpiry}`, 10, 150);
        doc.text(`CVV: ${bookingDetails.paymentDetails.visaCVV}`, 10, 160);
    } else if (bookingDetails.paymentMethod === "paypal") {
        doc.text(`PayPal Email: ${bookingDetails.paymentDetails.paypalEmail}`, 10, 140);
    } else if (bookingDetails.paymentMethod === "crypto") {
        doc.text(`Crypto Wallet: ${bookingDetails.paymentDetails.cryptoWallet}`, 10, 140);
    } else if (bookingDetails.paymentMethod === "creditcard") {
        doc.text(`Credit Card Number: ${bookingDetails.paymentDetails.creditcardNumber}`, 10, 140);
        doc.text(`Expiry Date: ${bookingDetails.paymentDetails.creditcardExpiry}`, 10, 150);
        doc.text(`CVV: ${bookingDetails.paymentDetails.creditcardCVV}`, 10, 160);
    } else if (bookingDetails.paymentMethod === "wise") {
        doc.text(`Wise Email: ${bookingDetails.paymentDetails.wiseEmail}`, 10, 140);
    }

    doc.text(`Special Requests: ${bookingDetails.specialRequests}`, 10, 170);
    doc.text(`Emergency Contact: ${bookingDetails.emergencyContact}`, 10, 180);
    doc.text(`Total Cost: ${bookingDetails.totalCost}`, 10, 190);

    // Generate and add the QR code
    try {
        const qrCodeUrl = await generateQRCode(bookingDetails); // Generate QR code
        doc.addImage(qrCodeUrl, "PNG", 10, 200, 50, 50); // Add QR code to the PDF
        doc.text("Scan this QR code for booking details", 70, 220);
    } catch (error) {
        console.error("Failed to generate QR code:", error);
    }

    // Save the PDF
    doc.save("booking_confirmation.pdf");
};
    } else {
        console.error("Attraction not found.");
        window.location.href = "index.html";
    }
});