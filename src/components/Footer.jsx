import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer d-flex justify-content-evenly flex-column w-100 bg-dark text-light p-5'>
       
          <div className='d-flex justify-content-evenly'>
            <div className="w-25 about-us">
                <h2><i class="fa-brands fa-stack-overflow fa-bounce"></i> Project Fair</h2>
                <h6 className='fw-light' style={{fontSize:'15px'}}>Designed and build with all the love in the world by the Luminar team with the help of our conributors.</h6>
                <h6 className='fw-light'>Code licenced Luminar,docs CC BY 3.0.</h6>
                <p className='fw-light'>Currently v1.0.0</p>
            </div>
            <div className="links d-flex flex-column">
                <h5 className='fw-bolder'>Links</h5>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >Home</Link>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >Login</Link>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >Register</Link>
            </div>
            <div className="navigation d-flex flex-column">
            <h5  className='fw-bolder'>Guides</h5>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >React</Link>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >React Bootstrap</Link>
                <Link className='text-light fw-light' style={{textDecoration:'none'}} to={'/'} >Routing</Link>
            </div>
            <div className="w-25 contact">
            <h5  className='fw-bolder '>Contact Us</h5>
            <div className='d-flex mt-3 '>
              <input type="text" className='form-control' placeholder='Enter your Email Id' />
              <button className='btn btn-warning'><i class="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className='mt-3 d-flex justify-content-between'>
              <Link className='fs-5 text-light'><i class="fa-solid fa-envelope"></i></Link>
              <Link className='fs-5 text-light'><i class="fa-brands fa-twitter"></i></Link>
              <Link className='fs-5 text-light'><i class="fa-brands fa-facebook"></i></Link>
              <Link className='fs-5 text-light'><i class="fa-brands fa-linkedin"></i></Link>
              <Link className='fs-5 text-light'><i class="fa-brands fa-instagram"></i></Link>
              <Link className='fs-5 text-light'><i class="fa-brands fa-github"></i></Link>
            </div>
            </div>
          </div>
          <p className='text-center mt-3'>Copyrights © 2023 Project Fair. Build with React</p>
        </div>

   
  )
}

export default Footer