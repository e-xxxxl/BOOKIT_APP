import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <>
     <MDBFooter bgColor='ligt' className='text-center mt-4 foot text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='facebook-f' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='google' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='white' icon='gem' className='me-3' />
                BOOKIT
              </h6>
              <p>
              Discover the ultimate hotel booking experience with our user-friendly platform. Explore a wide range of luxurious accommodations.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>HOTELS</h6>
              <p>
                <a href='/hotels' className='text-reset'>
                Transcorp Hilton
                </a>
              </p>
              <p>
                <a href='/hotels' className='text-reset'>
                  Nest Hostel
                </a>
              </p>
              <p>
                <a href='/hotels' className='text-reset'>
                  Eko Hotel
                </a>
              </p>
            
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='white' icon='home' className='me-2' />
                Nigeria Oyo
              </p>
              <p>
                <MDBIcon color='white' icon='envelope' className='me-3' />
                eaajejohnson@gmail.com | samuelsam91e@gmail.com
              </p>
              <p>
                <MDBIcon color='white' icon='phone' className='me-3' /> +2348160885374
              </p>

            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-decoration-none ps-2 fw-bold' href='/'>
          Bookit.Com
        </a>
      </div>
    </MDBFooter>
    
    </>
  )
}

export default Footer