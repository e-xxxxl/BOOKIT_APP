const express = require('express');
const router = express.Router();

// Array of hotel objects
const rooms = [
  {
    id: 1,
    name: 'King Guest Room W/ 1 King Bed',
    description: 'Elegant room featuring a king bed, designed for comfort and relaxation.',
    longdescription: 'Panoramic city view, high floor, art deco-style room, marble bathroom with separate bath, toilet and bidet, WiFi. Enjoy a beautiful view of the city from this bright, airy guest room with large windows, king-sized bed and WiFi access. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation. Sleeps 2 adults and 1 child',
    imageUrl: 'https://www.hilton.com/im/en/ABUHITW/10564303/abuhi-0732second.tif?impolicy=crop&cw=6663&ch=3988&gravity=NorthWest&xposition=28&yposition=0&rw=528&rh=316',
  },
  {
    id: 2,
    name: 'Royal Room W/ 1 King Bed',
    description: ' Luxurious space featuring a king bed, perfect for a restful stay.',
    longdescription:'Extra 15 sq. m/161 sq. ft., city and mountain view, high floor, WiFi. Stretch out in this spacious art deco-style room featuring a large bathroom. Start your day with a fresh coffee prepared in your room. Catch up with work at the desk and stay connected with WiFi access. Relax on the sofa and choose one of our on-demand movies to watch on the 48-inch TV. Freshen up in the spacious bathroom that features a separate bath tub, large walk-in shower, toilet and bidet before slipping in the bathrobe and slippers. Sleeps 2 adults and 1 child on a rollaway.',
    imageUrl: 'https://www.hilton.com/im/en/ABUHITW/10564089/abuhi-0145.jpg?impolicy=crop&cw=6523&ch=3904&gravity=NorthWest&xposition=98&yposition=0&rw=528&rh=316',
  },
  {
    id: 3,
    name: 'Two Double Beds Guest Room',
    description: 'Comfortable room with two double beds, perfect for families or friends.',
    longdescription:'Panoramic city view, high floor, art deco-style room, marble bathroom with separate bath, toilet and bidet, WiFi. Enjoy a beautiful view of the city from this bright, airy guest room with large windows, two double beds and WiFi access. Relax on one of the chaise chairs and watch the 48-inch LED TV or freshen up in the spacious marble bathroom that features a bathtub, toilet and bidet. Wake up to a fresh cup of coffee prepared in your room and catch up on work in the flexible workstation. Sleeps 2 adults and 1 child. ',
    imageUrl: 'https://www.hilton.com/im/en/ABUHITW/10564243/abuhi-0558.tif?impolicy=crop&cw=6720&ch=4021&gravity=NorthWest&xposition=0&yposition=229&rw=528&rh=316',
  },
];

// NEST ROOMS
const nestRooms = [
  {
    id: 1,
    name: 'Classic Room',
    description: 'Our 10 luxurious, en-suite Classic Rooms feature a king-size bed.',
    longdescription : "Our 10 elegantly appointed Classic Rooms offer the perfect blend of comfort and sophistication, each designed to provide a serene escape for our guests. These luxurious rooms feature a spacious king-size bed, dressed in the finest linens, ensuring a restful night’s sleep. Every room is equipped with its own en-suite bathroom, fitted with modern amenities and premium toiletries to enhance your stay. ",
    imageUrl: 'https://bonhotels.com/wp-content/uploads/2022/10/nest-ogbomosho-classic-room-images-1.png',
  },
  {
    id: 2,
    name: 'Imperial Room',
    description: 'Our spacious and stylishly furnished Imperial Rooms guarantee a comfortable stay.',
    longdescription: "Our spacious and elegantly furnished Imperial Rooms promise an exceptional stay, combining comfort and sophistication to create a truly inviting atmosphere. Each room is meticulously designed with stylish décor and high-quality furnishings, offering a perfect blend of modern luxury and timeless charm. ",
    imageUrl: 'https://bonhotels.com/wp-content/uploads/2022/10/nest-ogbomosho-imperial-room-images-3.png',
  },
  {
    id: 3,
    name: 'Presidential Suite',
    description: 'We have 2 Presidential Suites which sleep two people each. Beautifully furnished.',
    longdescription:"Our two exclusive Presidential Suites offer the ultimate in luxury and privacy, each designed to accommodate two guests in unparalleled comfort. Beautifully furnished with meticulous attention to detail, these suites feature a grand king-size bed adorned with premium linens, ensuring a restful night’s sleep. The spacious, elegantly appointed bathroom includes top-tier amenities for a lavish bathing experience.",
    imageUrl: 'https://bonhotels.com/wp-content/uploads/2022/10/nest-ogbomosho-ambassadorial-suite-images-2.png',
  },
]
// Eko ROOMS
const ekoRooms = [
  {
    id: 1,
    name: 'Classic Suite',
    description: 'Our Classic Suites are standard rooms with extra space for your comfort. They have separate living rooms that are ideal for meetings.',
    longdescription:"Our Classic Suites offer the perfect balance of comfort and functionality, providing more space than our standard rooms to enhance your stay. Each suite features a separate living room, creating a versatile area ideal for informal meetings, work, or relaxation.",
    imageUrl: 'https://www.ekohotels.com/assets/img/hotel-rooms/eh-classic-suites-4.jpg',
  },
  {
    id: 2,
    name: 'Studio Suite',
    description: 'The studio suite features more space with a lounge for receiving visitors, a personal safe, minibar, working desk and a kitchenette.',
    longdescription:"The Studio Suite at Eko Hotels & Suites offers more space than our standard rooms, with a lounge area perfect for receiving visitors. Each suite also includes a personal safe, minibar, working desk, and a kitchenette, making it the ideal choice for business travelers or families looking for extra comfort and convenience.",
    imageUrl: 'https://www.ekohotels.com/assets/img/hotel-rooms/esu-studio-suite-6.webp',
  },
  {
    id: 3,
    name: 'Atlantic Superior Room',
    description: 'Standard rooms with marble floors and a great view of the Atlantic with smoking or non – smoking rooms available.',
    longdescription:"Our Superior Rooms at Eko Hotels & Suites are designed with marble floors and a great view of the Atlantic. Each room is equipped with a flat-screen TV, air conditioning, and a private bathroom with a shower. Smoking and non-smoking rooms are available, ensuring that every guest can enjoy their stay in comfort and style.",
    imageUrl: 'https://www.ekohotels.com/assets/img/hotel-rooms/eh-atlantic-superior-room-2.jpg',
  },
]

const hotels = [
  {
    id: 1,
    name: 'Transcorp Hilton',
    description: 'A luxurious hotel in the heart of the city of Abuja.',
    imageUrl: 'https://www.hilton.com/im/en/ABUHITW/3149698/abuhitw-74491.jpg?impolicy=crop&cw=4880&ch=2732&gravity=NorthWest&xposition=0&yposition=334&rw=768&rh=430',
  },
  {
    id: 2,
    name: 'Nest Hotel',
    description: 'A cozy and affordable stay in Ogbomsho.',
    imageUrl: 'https://bonhotels.com/wp-content/uploads/2022/10/nest-ogbomosho8.jpg',
  },
  {
    id: 3,
    name: 'Eko hotel',
    description: 'A modern hotel with excellent amenities.',
    imageUrl: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/79476196.jpg?k=16f1b387011e6016ffa88f748d8f147b0b0f2381b13591add470f1c9574d6795&o=&hp=1',
  },
];

router.get('/hotels', (req, res) => {
  res.json(hotels); 
});

router.get('/hotels/:id', (req, res) => {
  const hotelId = parseInt(req.params.id, 10); 
  const hotel = hotels.find(h => h.id === hotelId); 
  if (hotel) { // Return 404 if not found
    res.json(hotel); // Send the found hotel as JSON
  } else {
    res.status(404).json({ message: 'Hotel not found' }); // Return 404 if not found
    console.log("Hotel not found");
    
  }
  
});

// Route to get all rooms
router.get('/rooms', (req, res) => {
  res.json(rooms); // Send hotel array as JSON to the frontend
});

router.get('/nestRooms', (req, res) => {
  res.json(nestRooms); 
});
router.get('/ekoRooms', (req, res) => {
  res.json(ekoRooms); 
});

module.exports = router;
