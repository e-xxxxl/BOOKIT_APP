import React from 'react'
import Footer from '../Footer/Footer'
import Navbardash from '../Dashboard/Navbardash'
import Bookit from "../../assets/log.jpg"
import { Link  } from 'react-router-dom';

const About = () => {
  return (
    <>
    <Navbardash/>
    <div>
            <div>
                <h1 className="display-4 fw-thin text-body-emphasis text-center mt-3">About Bookit </h1>
            </div>
            <div>

            <div style={{backgroundColor:"white"}} class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://media.istockphoto.com/id/1448506100/photo/male-hotel-receptionist-assisting-female-guest.jpg?s=1024x1024&w=is&k=20&c=6nKtlBaGlK3jOg6N0VPXFUdU__FL8JBmIeQSzzdOlxw=" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
      <img src={Bookit} alt=""  className='mb-3' style={{width:"100px"}}/>
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Our Welcoming Staff</h1>
      <p class="lead">At Bookit Hotel, We believe that exceptional hospitability is the cornerstone of a truly memorable stay. Our dedicated team of hospitability professionals is committed to ensuring that your experience exceeds your expectations </p>
      </div>
    </div>
  </div>

            <div style={{backgroundColor:"FFF9F4"}} class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3">Luxurious Accomodation</h1>
      <p class="lead">Bookit Hotel's Luxurious Accomodation are designed to provide you with the ultimate in comfort and relaxation. Our rooms and suites ferature high-end amenities, plush bedding and stunning views</p>
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
      <img src={Bookit} alt=""  className='mb-3' style={{width:"100px"}}/>
        <img src="https://www.mayfairhotel.com.au/wp-content/uploads/2022/05/deluxe-king-room-img1-768x359.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <Link to="/user/dashboard" className='text-decoration-none'>
                     <button class="btn rounded-5  fw-bold d-lg-block"   style={{ backgroundColor: "#445297", color: "white" }} > Book Accomodation </button>
      </Link>
    </div>
  </div>

            </div>
    </div>
    <Footer/>
    </>
  )
}

export default About