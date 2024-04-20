import { React, useState } from 'react'
import './contact.scss'
import { Close } from '@material-ui/icons';
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsClockHistory } from "react-icons/bs";

export default function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [members, setMembers] = useState('');
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Check if all required fields are filled
    if (name && email && number && members) {
      // Do something with the form data (e.g., send it to a server)
      // Here, I'm just showing a message
      setShowMessage(true);
      // Clear the form inputs
      setName('');
      setEmail('');
      setNumber('');
      setMembers('');
      setMessage('');
      alert('Thank you for your submission! We will get back to you soon');
    } else {
      // Show an error message if any required field is empty
      alert('Please fill in all required fields');
    }
  };


  return (
    <div className='contact'>
      <div className="contact-cont">
        <div className="contact-cont-contactus">
          Contact Us
        </div>
        <div className="contact-cont-home-contact">
          Home / Contact Us
        </div>
      </div>

      <div className="contact-cont2">
        <div className="contact-cont2-1">
          <div className="contact-cont2-icons-cont">
            <div className="contact-cont2-icon">
              <CiLocationOn className='contact-cont2-icon-1' />
            </div>
            <CiLocationOn className='contact-cont2-icon-2' />
            <div className="contact-cont2-location">Location</div>
            <div className="contact-cont2-6952">6952 Shelley St</div>
            <div className="contact-cont2-melbource">Melbource</div>
          </div>
          <div className="contact-cont2-icons-cont">
            <div className="contact-cont2-icon">
              <BsTelephone className='contact-cont2-icon-1' />
            </div>
            <BsTelephone className='contact-cont2-icon-2' />
            <div className="contact-cont2-location">Phone Number</div>
            <div className="contact-cont2-6952">+(800) 800-900-100</div>
            <div className="contact-cont2-melbource">+222 33 567 8665</div>
          </div>
          <div className="contact-cont2-icons-cont">
            <div className="contact-cont2-icon">
              <CiMail className='contact-cont2-icon-1' />
            </div>
            <CiMail className='contact-cont2-icon-2' />
            <div className="contact-cont2-location">Email Address</div>
            <div className="contact-cont2-6952">Info@Webmail.com</div>
            <div className="contact-cont2-melbource">Info@Example.web.com</div>
          </div>
          <div className="contact-cont2-icons-cont">
            <div className="contact-cont2-icon">
              <BsClockHistory className='contact-cont2-icon-1' />
            </div>
            <BsClockHistory className='contact-cont2-icon-2' />
            <div className="contact-cont2-location">Open & Closing</div>
            <div className="contact-cont2-6952">Mon - Fri: 09:00am</div>
            <div className="contact-cont2-melbource">to 07.00pm</div>
          </div>

        </div>

        <div className="contact-cont2-reservation">Reservation</div>
        <div className="contact-cont2-3">
          <form onSubmit={handleFormSubmit}>

            <div className="contact-cont2-3-1 ">
              <div className="contact-cont2-yourname ">
                Your Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='contact-cont2-input' required />
              </div>
              <div className="contact-cont2-yourname ">
                Your Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className='contact-cont2-input' required />
              </div>
            </div>

            <div className="contact-cont2-3-1">
              <div className="contact-cont2-yourname ">
                Your Number
                <input type="tel" value={number} onChange={(e) => setNumber(e.target.value)} className='contact-cont2-input' required />
              </div>
              <div className="contact-cont2-yourname ">
                Members
                <input type="number" value={members} onChange={(e) => setMembers(e.target.value)} className='contact-cont2-input' required />
              </div>
            </div>

            <div className="contact-cont2-3-3">
              <div className="cotact-cont2-message">Message</div>
              <div className="cotact-cont2-hi">Hi, do you Have a moment to talk About !</div>
              <div className=" col-12">
                <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} className='contact-cont2-input col-12' />
              </div>
            </div>
            <div className="contact-cont2-3-4">
              <button type="submit" className="cotact-cont2-book">Book A Table</button>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}
//