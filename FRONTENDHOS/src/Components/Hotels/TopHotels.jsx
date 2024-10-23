import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const TopHotels = () => {
  const [rooms, setRooms] = useState([]);
  const [nestrooms, setnestRooms] = useState([]);
  const [ekorooms, setekoRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/user/signin"); // Redirect to sign-in if no token
    }
  }, [navigate]);

  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://bookit-app-vn3p.vercel.app/api/rooms")
      .then((response) => response.json())
      .then((data) => {
        setRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://bookit-app-vn3p.vercel.app/api/nestRooms")
      .then((response) => response.json())
      .then((data) => {
        setnestRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://bookit-app-vn3p.vercel.app/api/ekoRooms")
      .then((response) => response.json())
      .then((data) => {
        setekoRooms(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  useEffect(() => {
    // Fetch hotels from the backend
    fetch("https://bookit-app-vn3p.vercel.app/api/hotels")
      .then((response) => response.json())
      .then((data) => {
        setHotels(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching hotels:", error));
  }, []);
  const [showMore, setShowMore] = useState(false);
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const handleClose2 = () => setShow2(false);
  const [show2, setShow2] = useState(false);
  const handleShow2 = () => setShow2(true);

  const handleClose3 = () => setShow3(false);
  const [show3, setShow3] = useState(false);
  const handleShow3 = () => setShow3(true);

  const handleClose4 = () => setShow4(false);
  const [show4, setShow4] = useState(false);
  const handleShow4 = () => setShow4(true);

  const handleClose5 = () => setShow5(false);
  const [show5, setShow5] = useState(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const [show6, setShow6] = useState(false);
  const handleShow6 = () => setShow6(true);

  const handleClose7 = () => setShow7(false);
  const [show7, setShow7] = useState(false);
  const handleShow7 = () => setShow7(true);

  const handleClose8 = () => setShow8(false);
  const [show8, setShow8] = useState(false);
  const handleShow8 = () => setShow8(true);

  const handleClose9 = () => setShow9(false);
  const [show9, setShow9] = useState(false);
  const handleShow9 = () => setShow9(true);

  const getHotelById = (id) => {
    return hotels.filter((hotel) => hotel.id === id);
  };
  const getRoomsById = (id) => {
    return rooms.filter((room) => room.id === id);
  };
  const getnestRoomsById = (id) => {
    return nestrooms.filter((nestroom) => nestroom.id === id);
  };
  const getekoRoomsById = (id) => {
    return ekorooms.filter((ekoroom) => ekoroom.id === id);
  };
  const room1 = getRoomsById(1);
  const room2 = getRoomsById(2);
  const room3 = getRoomsById(3);
  const Nest1 = getnestRoomsById(1);
  const Nest2 = getnestRoomsById(2);
  const Nest3 = getnestRoomsById(3);
  const Eko1 = getekoRoomsById(1);
  const Eko2 = getekoRoomsById(2);
  const Eko3 = getekoRoomsById(3);
  const Hilton = getHotelById(1);
  const Nest = getHotelById(2);
  const Eko = getHotelById(3);

  const seeMoreOrLess = (longdescription) => {
    let updatedDescription = "";
    if (!showMore) {
      updatedDescription = longdescription.slice(0, 130);
      return <span>{updatedDescription}...</span>;
    }
    return <span>{longdescription}</span>;
  };

  return (
    <>
      <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4 mt-4">Explore Our Hotels</h1>
          <p className="text-center">
            Discover a world class hotel experience with our carefully curated
            collection of luxury accommodations{" "}
          </p>
        </div>
        <div className="container" id="hil">
          {Hilton.map((hotel) => (
            <div className="row" key={hotel.id}>
              <div className="col-md-8">
                <Link
                  to={`/user/hotels/${hotel.id}`}
                  className="text-decoration-black  text-black"
                >
                  <h2 className="fw-bold display-4 mt-3">{hotel.name}</h2>
                </Link>
                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* King Guest Start */}
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
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/king-room/payments" className="text-decoration-none">
                     <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show}
                        onHide={handleClose}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3 ">
                              King Guest Room W/ 1 King Bed
                            </h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            <Link to="/user/hotels/king-room/payments" className="text-decoration-none text-white fw-bold">
                            Book Now
                            
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* King Guest End */}

          {/* Royal Room Start */}
          {room2.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow2}
                      >
                        View
                      </Button>

                      <Link to ="/user/hotels/royal-room/payments" className="text-decoration-none text-white fw-bold" >
                    
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      </Link>

                      <Modal
                        size="lg"
                        centered
                        show={show2}
                        onHide={handleClose2}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Royal Room</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            <Link to ="/user/hotels/royal-room/payments" className="text-decoration-none text-white fw-bold">
                            
                            Book Now
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Royal Room End */}

          {/* Two Double Room Start */}
          {room3.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow3}
                      >
                        View
                      </Button>

                      <Link to ="/user/hotels/double-room/payments" className="text-decoration-none text-white fw-bold">
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,875
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show3}
                        onHide={handleClose3}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Double Beds Guest Room</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            
                          <Link to ="/user/hotels/double-room/payments" className="text-decoration-none text-white fw-bold">
                            
                            Book Now
                            </Link>

                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Two Double Room End */}
        </div>

        <div className="container" id="nes">
          {Nest.map((hotel) => (
            <div className="row" key={hotel.id}>
              <div className="col-md-8">
                <Link
                  to={`/user/hotels/${hotel.id}`}
                  className="text-decoration-black  text-black"
                >
                  <h2 className="fw-bold display-4 mt-3">{hotel.name}</h2>
                </Link>
                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* Claassic Start */}
          {Nest1.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow4}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/classic-room/payments" className="text-decoration-none text-white fw-bold">
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show4}
                        onHide={handleClose4}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Classic Room</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}} >
                              <Link to="/user/hotels/classic-room/payments" className="text-decoration-none text-white fw-bold">
                              
                            Book Now
                              </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* King Guest End */}

          {/* Imperial Start */}
          {Nest2.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow5}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/imperial-room/payments" className="text-decoration-none text-white fw-bold" >
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show5}
                        onHide={handleClose5}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Imperial Room</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}} >
                            <Link to="/user/hotels/imperial-room/payments" className="text-decoration-none text-white fw-bold">
                            
                            Book Now
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Royal Room End */}

          {/* Two Double Room Start */}
          {Nest3.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow6}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/presidential-suite/payments" className="text-decoration-none text-white fw-bold">
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,875
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show6}
                        onHide={handleClose6}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Prseidential Room</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            
                          <Link to="/user/hotels/presidential-suite/payments" className="text-decoration-none text-white fw-bold">
                            
                            Book Now
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* Two Double Room End */}
        </div>

        <div className="container" id="eko">
          {Eko.map((hotel) => (
            <div className="row" key={hotel.id}>
              <div className="col-md-8">
                <Link
                  to={`/user/hotels/${hotel.id}`}
                  className="text-decoration-black  text-black"
                >
                  <h2 className="fw-bold display-4 mt-3">{hotel.name}</h2>
                </Link>
                <p>{hotel.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {/* Clasic Suite Start */}
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
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow7}
                      >
                        View
                      </Button>

                    <Link to="/user/hotels/classic-eko-suite/payments" className="text-decoration-none text-white fw-bold" >
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show7}
                        onHide={handleClose7}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Classic suite</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                          <Link to="/user/hotels/classic-eko-suite/payments" className="text-decoration-none text-white fw-bold">
                            Book Now
                            </Link>
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/*  End */}

          {/* Studio Start */}
          {Eko2.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow8}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/studio-eko-suite/payments" className="text-decoration-none text-white fw-bold">
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show8}
                        onHide={handleClose8}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Studio suite</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            
                          <Link to="/user/hotels/studio-eko-suite/payments" className="text-decoration-none text-white fw-bold">
                            Book Now
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* End */}

          {/* Superior Room Start */}
          {Eko3.map((rooms) => (
            <div key={rooms.id} className="col">
              <div className="card shadow-sm">
                <img
                  src={rooms.imageUrl}
                  className="bd-placeholder-img card-img-top"
                  alt={rooms.name}
                  style={{ width: "100%", height: "225px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-text fw-bold">{rooms.name}</p>
                  <p className="card-text">{rooms.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <Button
                        className="btn me-2 border-0 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow9}
                      >
                        View
                      </Button>

                      <Link to="/user/hotels/atlantic-eko-suite/payments" className="text-decoration-none text-white fw-bold">
                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,880
                      </button>
                      </Link>
                      <Modal
                        size="lg"
                        centered
                        show={show9}
                        onHide={handleClose9}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body>
                            {" "}
                            <img
                              src={rooms.imageUrl}
                              className="bd-placeholder-img card-img-top"
                              alt={rooms.name}
                              style={{
                                width: "100%",
                                height: "225px",
                                objectFit: "cover",
                              }}
                            />
                            <h6 className="mt-3">Atlantic suite</h6>
                            <p className="hoteldes">
                              {seeMoreOrLess(rooms.longdescription)}
                              <Link onClick={() => setShowMore(!showMore)}>
                                {showMore ? "Read Less" : "Read More"}
                              </Link>
                            </p>
                          </Modal.Body>
                          <Modal.Body className="amen">
                            <small className="fw-bold">Hotel Amenities</small>
                            <div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-p-circle"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Free Parking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  fill="currentColor"
                                  class="bi bi-fire"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16m0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">No Smoking</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="20"
                                  height="20"
                                  fill="currentColor"
                                  class="bi bi-person-gear"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4m.256 7a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382zM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0" />
                                </svg>{" "}
                                <br />
                                <small className="e-5">Conceirge</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-bag-heart-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132" />
                                </svg>{" "}
                                <br />
                                <small>Spa</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="22"
                                  height="22"
                                  fill="currentColor"
                                  class="bi bi-playstation"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M15.858 11.451c-.313.395-1.079.676-1.079.676l-5.696 2.046v-1.509l4.192-1.493c.476-.17.549-.412.162-.538-.386-.127-1.085-.09-1.56.08l-2.794.984v-1.566l.161-.054s.807-.286 1.942-.412c1.135-.125 2.525.017 3.616.43 1.23.39 1.368.962 1.056 1.356M9.625 8.883v-3.86c0-.453-.083-.87-.508-.988-.326-.105-.528.198-.528.65v9.664l-2.606-.827V2c1.108.206 2.722.692 3.59.985 2.207.757 2.955 1.7 2.955 3.825 0 2.071-1.278 2.856-2.903 2.072Zm-8.424 3.625C-.061 12.15-.271 11.41.304 10.984c.532-.394 1.436-.69 1.436-.69l3.737-1.33v1.515l-2.69.963c-.474.17-.547.411-.161.538.386.126 1.085.09 1.56-.08l1.29-.469v1.356l-.257.043a8.45 8.45 0 0 1-4.018-.323Z" />
                                </svg>{" "}
                                <br />
                                <small>Tennis</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="19"
                                  height="19"
                                  fill="currentColor"
                                  class="bi bi-dice-6-fill"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M3 0a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3zm1 5.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m8 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m1.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M12 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3M5.5 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0M4 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>{" "}
                                <br />
                                <small>Casino</small>
                              </div>
                              <div>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="23"
                                  height="23"
                                  fill="currentColor"
                                  class="bi bi-person-wheelchair"
                                  viewBox="0 0 16 16"
                                >
                                  <path d="M12 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m-.663 2.146a1.5 1.5 0 0 0-.47-2.115l-2.5-1.508a1.5 1.5 0 0 0-1.676.086l-2.329 1.75a.866.866 0 0 0 1.051 1.375L7.361 3.37l.922.71-2.038 2.445A4.73 4.73 0 0 0 2.628 7.67l1.064 1.065a3.25 3.25 0 0 1 4.574 4.574l1.064 1.063a4.73 4.73 0 0 0 1.09-3.998l1.043-.292-.187 2.991a.872.872 0 1 0 1.741.098l.206-4.121A1 1 0 0 0 12.224 8h-2.79zM3.023 9.48a3.25 3.25 0 0 0 4.496 4.496l1.077 1.077a4.75 4.75 0 0 1-6.65-6.65z" />
                                </svg>{" "}
                                <br />
                                <small>Excutive Lounge</small>
                              </div>
                            </div>
                          </Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button className="border-0" style={{backgroundColor:"#445297"}}>
                            
                          <Link to="/user/hotels/atlantic-eko-suite/payments" className="text-decoration-none text-white fw-bold">
                            Book Now
                            </Link>
                            
                            </Button>
                        </Modal.Footer>
                      </Modal>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/*  End */}
        </div>
      </div>
      <Footer />

      <a href="#" class="back-to-top">
        <i class="fa fa-chevron-up"></i>
      </a>
    </>
  );
};

export default TopHotels;
