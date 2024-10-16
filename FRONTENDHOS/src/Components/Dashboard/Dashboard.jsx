import React, { useEffect, useState, useMemo } from "react";
import hot from "../../../src/assets/hot.jpg";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
        navigate('/user/signin'); // Redirect to sign-in if no token
    }
}, [navigate]);



  const storedName = localStorage.getItem("userName");
  let displayName = "User"; 

  if (storedName) {
    try {
      const parsedName = JSON.parse(storedName); // Attempt to parse
      displayName = parsedName.name; // Get the name property
    } catch (error) {
      console.error("Error parsing userName from localStorage:", error);
    }
  } else {
    console.warn("userName not found in localStorage");
  }


  const [isActive, setIsActive] = useState(true);

  const classes = useMemo(
    () => `${!isActive ? "closed" : ""} card-body px-0`,
    [isActive]
  );

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [nestrooms, setnestRooms] = useState([]);
  const [ekorooms, setekoRooms] = useState([]);
  // const [email, setEmail] = useState([])
 const View = () => {
    window.location.href = "/";
 }
  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://book-it-alpha.vercel.app/api/rooms")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  useEffect(() => { 
    // Fetch hotels from the backend
    fetch("https://book-it-alpha.vercel.app/api/nestRooms")
      .then((response) => response.json())
      .then((data) => {
        setnestRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  useEffect(() => { 
    // Fetch hotels from the backend
    fetch("https://book-it-alpha.vercel.app/api/ekoRooms")
      .then((response) => response.json())
      .then((data) => {
        setekoRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
 

  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://book-it-alpha.vercel.app/api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  const getRoomsById = (id) => {
    return rooms.filter(room => room.id === id);
  };
  const getnestRoomsById = (id) => {
    return nestrooms.filter(nestroom => nestroom.id === id);
  };
  const getekoRoomsById = (id) => {
    return ekorooms.filter(ekoroom => ekoroom.id === id);
  };
  const room1 = getRoomsById(3);
  const nest = getnestRoomsById(1);
  const Eko1 = getekoRoomsById(2);
  return (
    <>
 <div>
 
      

   
  
  
    </div>
      <div className="px-4 pt-5 my-5 text-center">
        <h1 className="display-4 fw-bold text-body-emphasis">
          WELCOME TO BOOKIT!  <span>{displayName}</span> 
        </h1>
        {/* {email.map((user) => (
          <li key={user._id}>
            <p>Name: {user.Name}</p>
          </li>
        ))} */}
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Discover the ultimate hotel booking experience with our
            user-friendly platform. Explore a wide range of luxurious
            accommodations.
          </p>
        </div>
        <div>
          <div className="hotel">
            <img
              src={hot}
              className="img-fluid card-img rounded-3 mb-4"
              alt="Example image"
              style={{ width: "100%", height: "725px", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    
      <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4">Elevate Your Gatewayy</h1>
          <p className="text-center">
            Indulge in the comfort and elegance of our meticulously designed
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* King Guest Start */}
          {Eko1.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name} <small>(EkoHotels)</small> </p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    
                        <button
                          className="btn me-2 rounded-0 fw-bold d-lg-block"
                          style={{ backgroundColor: "#445297", color: "white" }}
                         >
                         <a href="/user/hotels" className="text-decoration-none text-white">View</a> 
                        </button>
                     
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                          ₦284,287
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* King Guest End */}


          {nest.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name} <small>(NestHotels)</small> </p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    
                        <button
                          className="btn me-2 rounded-0 fw-bold d-lg-block"
                          style={{ backgroundColor: "#445297", color: "white" }}
                        >
                      <a href="/user/hotels" className="text-decoration-none text-white">View</a> 
                        </button>
                     
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                         ₦277,875
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          

          {/* Two Double Room Start */}
          {room1.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name} <small>(TranscorpHotels)</small> </p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                    
                        <button
                          className="btn me-2 rounded-0 fw-bold d-lg-block"
                          style={{ backgroundColor: "#445297", color: "white" }}
                        >
                         <a href="/user/hotels" className="text-decoration-none text-white">View</a> 
                        </button>
                     
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                         ₦277,875
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Two Double Room End */}
        </div>

      </div>

      <div className="container pt-5 pb-5">
        <div className="row mt-5">
          <div className="col-10 col-sm-8   col-lg-5">
            <p className="fs-4 mt-2">ACCOMODATION</p>
            <select class="form-select" aria-label="Default select example">
              <option disabled selected>
                Packages
              </option>
              <option value="1">Dining Packages</option>
              <option value="2">Seasonal Packages</option>
              <option value="3">Business</option>
            </select>

            <select
              class="form-select mt-2"
              aria-label="Default select example"
            >
              <option disabled selected>
                Offers
              </option>
              <option value="1">Loyalty Program Benefits</option>
              <option value="2">Spa Retreat</option>
              <option value="3">Last-Minute Deals</option>
            </select>

            <div>
              <p className="fs-4 mt-2">AMENTIES</p>
              <select
                class="form-select mt-2"
                aria-label="Default select example"
              >
                <option disabled selected>
                  Dinning
                </option>
                <option value="breakfast">Breakfast</option>
                <option value="lunch">Lunch</option>
                <option value="dinner">Dinner</option>
                <option value="room-service">Room Service</option>
              </select>
              <select
                class="form-select mt-2"
                aria-label="Default select example"
              >
                <option disabled selected>
                  Explore
                </option>
                <option value="amenities">Amenities</option>
                <option value="rooms">Rooms & Suites</option>
                <option value="services">Services</option>
              </select>
              <button
                class="btn rounded-1 mt-3 mb-4 fw-bold me-3 d-lg-block"
                style={{ backgroundColor: "#445297", color: "white" }}
              >
                Book Now
              </button>
            </div>
          </div>
          <div className="col-lg-6">
            <img
              src={hot}
              className="img-fluid rounded-3 mb-4"
              alt="Example image"
            />
          </div>
        </div>
      </div>

      <div className="container pt-3">
        <div>
          <h1 className="text-center display-2 mb-4">Explore Our Hotels</h1>
          <p className="text-center">
            Discover a world class hotel experience with our carefully curated
            collection of luxury accommodations{" "}
          </p>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={hotel.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={hotel.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{hotel.name}</p>
                  <p className="card-text">{hotel.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        class="btn rounded-0 d-none fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        View
                      </button>
                      <button
                        class="btn rounded-0 d-none fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 pt-4 mt-5" style={{ maxWidth: "100%" }}>
        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=TranscorpHiltonAbuja&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    Transcorp Hilton, Abuja
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A luxury hotel in Maitama.
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0">call</p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Smile</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          1 Aguiyi Ironsi Street, Maitama, Abuja, Nigeria.
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem"}}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=BonOgbomosho&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    Nest, Ogbomosho
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A modern hotel in Ogbomoso.
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0">call</p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Relax</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          KM5, Ogbomoso-Ilorin Expressway,
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="container">
          <section className="mx-auto my-5" style={{ maxWidth: "23rem" }}>
            <div className="card map-card">
              <div
                id="map-container-google-1"
                className="z-depth-1-half map-container"
                style={{ height: "500px" }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=EkoHotels&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  frameBorder={0}
                  style={{ border: "0" }}
                ></iframe>
              </div>
              <div className={classes} onClick={() => setIsActive(!isActive)}>
                <div className="button px-2 mt-3">
                  <a
                    className="btn btn-floating btn-lg living-coral text-white float-end"
                    style={{ marginRight: ".75rem;" }}
                  >
                    <i className="fas fa-bicycle"></i>
                  </a>
                </div>
                <div className="bg-white px-4 pb-4 pt-3-5">
                  <h5 className="card-title h5 living-coral-text">
                    EKO HOTELS, Lagos
                  </h5>
                  <div className="d-flex justify-content-between living-coral-text">
                    <h6 className="card-subtitle font-weight-light">
                      A Luxurious hotel in the heart of lagos.
                    </h6>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                    <div>
                      <i className="fas fa-phone fa-lg mb-3"></i>
                      <p className="mb-0">call</p>
                    </div>
                    <div>
                      <i className="fas fa-cat fa-lg mb-3"></i>
                      <p className="mb-0">Love</p>
                    </div>
                    <div>
                      <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                      <p className="mb-0">Smile</p>
                    </div>
                  </div>
                  <hr />
                  <table className="table table-borderless">
                    <tbody>
                      <tr>
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-map-marker-alt living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          East 64th Street, New York, NY 10021, US
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="far fa-clock living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">
                          <span className="deep-purple-text me-2"> Closed</span>{" "}
                          Opens 10 AM
                        </td>
                      </tr>
                      <tr className="mt-2">
                        <th scope="row" className="px-0 pb-3 pt-2">
                          <i className="fas fa-cloud-moon living-coral-text"></i>
                        </th>
                        <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

     <Footer/>
    <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </>
  );
};

export default Dashboard;
