import React from 'react';
import "../../assets/scss/pages/users.scss"
import Navbar from './Component/Navbar';
import Header from './Component/Header';
import Customer from './Component/Customer';
import Service from './Component/Service';
import Detail1 from './Component/Detail1';
import Lightbox from './Component/Lightbox';
import Detail2 from './Component/Detail2';
import Pricing from './Component/Pricing';
import Registration from './Component/Registration';
import Video from './Component/Video1';
import Testimonial from './Component/Testimonial';
import Footerr from './Component/Footer'
import Copyright from './Component/Copyright';
import About from './Component/About';
import Contact from './Component/contact';



  function Apps() {
    return (
      <>
      <div className="of">
      <Navbar/>
      <Header/>
      <Customer/>
      <Service/>
      <Detail1/>
      <Lightbox/>
      <Detail2/>
      <Pricing/>
      <Registration/>
      <Video/>
      <Testimonial/>
      <About/>
      <Contact/>
      <Footerr/>
      <Copyright/>
      </div>
      </>
  
    );
  } 
  
  export default Apps;


