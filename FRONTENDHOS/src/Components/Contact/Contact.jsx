import React from 'react'
import Navbardash from '../Dashboard/Navbardash'
import Footer from '../Footer/Footer'

const Contact = () => {
  return (
    <>
    <Navbardash/>

    <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-5">Contact Us</h1>
      <p class="lead"><input type="text" className='form-control' placeholder='Email' name="" id="" /></p>
      <p class="lead"><input type="text" className='form-control' placeholder='Phone Number' name="" id="" /></p>
      <p class="lead"><input type="text" className='form-control' placeholder='Addressx ' name="" id="" /></p>
      <button class="btn rounded-5 w-100 fw-bold d-lg-block"   style={{ backgroundColor: "#445297", color: "white" }} > Submit </button>
      </div>
      <div class="col-10 col-sm-8 col-lg-6">
        <img src="https://media.istockphoto.com/id/1448506100/photo/male-hotel-receptionist-assisting-female-guest.jpg?s=1024x1024&w=is&k=20&c=6nKtlBaGlK3jOg6N0VPXFUdU__FL8JBmIeQSzzdOlxw=" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
    </div>
  </div>






    <Footer/>
    </>
  )
}

export default Contact