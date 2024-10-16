import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";

const TopHotels = () => {
  const [rooms, setRooms] = useState([]);
  const [nestrooms, setnestRooms] = useState([]);
  const [ekorooms, setekoRooms] = useState([]);
  const [hotels, setHotels] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
        navigate('/user/signin'); // Redirect to sign-in if no token
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
  }, [])
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
    return hotels.filter(hotel => hotel.id === id);
  };
  const getRoomsById = (id) => {
    return rooms.filter(room => room.id === id);
  };
  const getnestRoomsById = (id) => {
    return nestrooms.filter(nestroom => nestroom.id === id);
  };
  const getekoRoomsById = (id) => {
    return ekorooms.filter(ekoroom => ekoroom.id === id);
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
  }

  return (
    <>

      <div className="container">
        <div>
          <h1 className="text-center display-2 mb-4">Explore Our Hotels</h1>
          <p className="text-center">
            Discover a world class hotel experience with our carefully curated
            collection of luxury accommodations{" "}
          </p>
        </div>
        <div className="container" id="hil">
          {Hilton.map((hotel) => (
            <div className="row" key={hotel.id}>
              <div className="col-md-8">
                <Link to={`/user/hotels/${hotel.id}`} className="text-decoration-black  text-black">
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      <Modal  size="lg"  centered show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">King Guest Room W/ 1 King Bed</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow2}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      <Modal  size="lg"  centered show={show2} onHide={handleClose2}>
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Royal Room</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow3}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,875
                      </button>
                      <Modal  size="lg"  centered show={show3} onHide={handleClose3}>
                        <Modal.Header closeButton>
                          <Modal.Title>Transcorp Hilton</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Double Beds Guest Room</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                <Link to={`/user/hotels/${hotel.id}`} className="text-decoration-black  text-black">
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow4}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      <Modal  size="lg"  centered show={show4} onHide={handleClose4}>
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Classic Room</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow5}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      <Modal  size="lg"  centered show={show5} onHide={handleClose5}>
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Imperial Room</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow6}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,875
                      </button>
                      <Modal  size="lg"  centered show={show6} onHide={handleClose6}>
                        <Modal.Header closeButton>
                          <Modal.Title>Nest Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Prseidential Room</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                <Link to={`/user/hotels/${hotel.id}`} className="text-decoration-black  text-black">
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow7}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦284,287
                      </button>
                      <Modal  size="lg"  centered show={show7} onHide={handleClose7}>
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Classic suite</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow8}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦433,912
                      </button>
                      <Modal  size="lg"  centered show={show8} onHide={handleClose8}>
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Studio suite</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
                        className="btn me-2 rounded-0 fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                        onClick={handleShow9}
                      >
                        View
                      </Button>

                      <button
                        class="btn rounded-0  fw-bold d-lg-block"
                        style={{ backgroundColor: "#445297", color: "white" }}
                      >
                        ₦277,875
                      </button>
                      <Modal  size="lg"  centered show={show9} onHide={handleClose9}>
                        <Modal.Header closeButton>
                          <Modal.Title>EKO Hotel</Modal.Title>
                        </Modal.Header>
                        <div className="d-flex">
                          <Modal.Body> <img
                            src={rooms.imageUrl}
                            className="bd-placeholder-img card-img-top"
                            alt={rooms.name}
                            style={{ width: "100%", height: "225px", objectFit: "cover" }}
                            />
                            <h6 className="mt-3">Atlantic suite</h6>
                            {seeMoreOrLess(rooms.longdescription)}
                            <Link onClick={()=>setShowMore(!showMore)}>{showMore ? "Read Less" : "Read More"}</Link>
                            </Modal.Body>
                            <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
                        </div>
                        <Modal.Footer>
                          <Button variant="secondary" >
                            Book This Shit
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
        <Footer/>
  




      <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>
    </>




  )
}

export default TopHotels