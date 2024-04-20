import React from 'react'
import './footer.scss'
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router-dom';

export default function Footer() {



   

    return (
        <div className='footer p-5' id="footer">



            <div className="row d-flex align-items-center justify-content-around footer-flex">
                <div className="col-3 footer-width d-flex flex-column align-self-start">
                    <h4 className='fw-bold'>CONTACT</h4>
                    <div className="d-flex align-items-center ">
                        <CiLocationOn className="footer-phone me-2 " />
                        <p className='p-margin'>  Colony, Kkatpally, Hyderabad</p>
                    </div>
                    <div className="d-flex align-items-center my-4">
                        <FiPhone className="footer-phone me-2" />
                        <p className='p-margin'>+91 987-654-3210</p>
                    </div>
                    <div className="d-flex align-items-center ">
                        <MdOutlineEmail className="footer-phone me-2" />
                        <p className='p-margin'>info@example.com</p>
                    </div>
                </div>
                <div className="col-3 footer-width d-flex flex-column align-self-start">
                    <h4 className='fw-bold'>OUR LINKS</h4>
                    <Link className='topbar-cont-contact' to='/'><p className='topbar-cont-contact'>Home</p></Link>
                    <Link className='topbar-cont-contact' to='/about'> <p className='topbar-cont-contact'>About Us</p></Link>
                    <Link className='topbar-cont-contact' to='/services'><p className='topbar-cont-contact'>Services</p></Link>
                    <Link className='topbar-cont-contact' to='/team'><p className='topbar-cont-contact'>Team</p></Link>
                    <Link className='topbar-cont-contact' to='/blog'><p className='topbar-cont-contact'>Blog</p></Link>
                </div>
                <div className="col-3 footer-width d-flex flex-column align-self-start">
                    <h4 className='fw-bold'>OUR SERVICES</h4>
                    <p>Startegy & Research</p>
                    <p>Fast Delivery</p>
                    <p>Seat Reservation</p>
                    <p>Pickup in Store</p>
                    <Link className='topbar-cont-contact' to='/menu'><p className='topbar-cont-contact'>Our Menu</p></Link>
                </div>
                <div className="col-3 footer-width d-flex flex-column align-self-start">
                    <h4 className='fw-bold'>HELP CENTER</h4>
                    <p>FAQ</p>
                    <p>Shop</p>
                    <p>Category FIlter</p>
                    <p>Testiminals</p>
                    <Link className='topbar-cont-contact' to='/contact'> <p>Contact Us</p></Link>
                </div>
            </div>

            {/* <div className="row d-flex align-items-center justify-content-around">
                <div className="col-3 ">
                    
                </div>
                <div className="col-2 ">

                 
                </div>
                <div className="col-2 ">

                    
                </div>
                <div className="col-2 ">

                  
                </div>
            </div> */}













            {/* <div className="imgCont" >
                <a  className="x"href="http://faroukworks.epizy.com/">
                    <img src="assests/f-logo.png"alt="" ></img>
                   
                </a>
            </div>

            <div className="social">
                <a href='https://www.linkedin.com/in/farouk-emad-8231a2164/'className="linkdin soc" > Linkedin</a>
                <a href='https://www.behance.net/faroukemad' className="behance soc">Behance</a>
                <a href='https://github.com/faroukemad' className="github soc">Github</a>
                <a href='https://codepen.io/faroukemad' className="codepen soc">CodePen</a>
            </div>
   
            <div className="word">
            <span>Copyright &#169; 2023 Farouk Emad</span>
            </div> */}


        </div>
    )
}
