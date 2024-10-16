import React from 'react'
import build from "../../../assets/Building.gif"
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <>
          <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={build}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
                BOOKIT!
            </h1>
            <p className="lead">
            Book Your Stay Today!
            Ready to experience the best of hospitality? Whether you're traveling for business, leisure, or a special occasion, BookIt Hotel is your ideal destination.
            Join us and make unforgettable memories at BookIt Hotel!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/user/signup" className='text-decoration-none '>         
            <button class="btn bt  p-3  fw-bold me-3 d-lg-block" style={{backgroundColor:"#445297", color:"white"}}>
                Get Started 
              </button>
              </Link>
             
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Landing