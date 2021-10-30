import React, { useEffect, useState } from 'react';
import { Carousel, Container, Row } from 'react-bootstrap';
import carousel1 from '../../Images/carousel1.jpg'
import carousel2 from '../../Images/carousel2.jpg'
import carousel3 from '../../Images/carousel3.jpg'
import choosePic from '../../Images/choose3.jpg' 
import choosepic2 from '../../Images/coose1.jpg'
import man1 from '../../Images/man1.jpg'
import man2 from '../../Images/man2.jpg'
import man3 from '../../Images/man3.jpg'
import man4 from '../../Images/man4.jpg'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Service from './Service.js';

const Home = () => {
  
 

  const star = <FontAwesomeIcon icon={faStar} />

  const [services,setServices]=useState([])
  useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>setServices(data.service))

  },[])
    return (
        <div>

  
   <div className="mb-5 ">
        <Carousel fade>
         <Carousel.Item>
      <img
      className="d-block w-100"
      src={carousel1}
      alt="First slide"
    />
    <Carousel.Caption>
     <div className="slide-details">
     <h3><b>Flip Flop Holidays</b></h3>
      <p>Your trusted Tour oparetor</p>
      <p><small>There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them</small></p>
      <button className="custom-button mt-3">View Our All Packages</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel2}
      alt="Second slide"
    />

    <Carousel.Caption>
    <div className="slide-details">
     <h3><b>Flip Flop Holidays</b></h3>
      <p>Your trusted Tour oparetor</p>
      <p><small>There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them</small></p>
      <button className="custom-button mt-3">View Our All Packages</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousel3}
      alt="Third slide"
    />

    <Carousel.Caption>
    <div className="slide-details">
    <h3><b>Flip Flop Holidays</b></h3>
      <p>Your trusted Tour oparetor</p>
      <p><small>There’s a sunrise and a sunset every single day, and they’re absolutely free. Don’t miss so many of them</small></p>
      <button className="custom-button mt-3">View Our All Packages</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            </div>

       {/* why choose us  */}

       <Container>
            <div className="choose-section mb-5">
             <div className="choose-detail">
                 <h6>Benefits</h6>
                 <h4><b>Some Benefits of Travelling</b></h4>
                 <p>Positive experiences reduce stress. So if you are struggling with burnout, fighting anxiety or simply feeling too tired, you have to travel for reset your mind.  If you have the opportunity to take some time off and travel, go for it! It will do you a world of good!</p>
                 
                 <ul >
                     <li>Travel Makes You Happier</li>
                     <li>Travel Lets You Disconnect and Recharge</li>
                     <li>Traveling Relieves Stress and Anxiety</li>
                     <li>Travel Exposes You to New Things</li>
                     <li>Travel Makes You Physically Healthier</li>
                 </ul>
             </div>
             <div>
                 <img className="img-fluid" src={choosePic} alt="" />
             </div>
            </div>
        </Container>
       <Container>
            <div className="choose-section mb-5">
            <div>
                 <img className="img-fluid" src={choosepic2} alt="" />
             </div>
             <div className="choose-detail">
                 <h6>We Gave</h6>
                 <h4><b>MEMORABLE EXPERIANCE OF NATURE</b></h4>
                 <p>Positive experiences reduce stress. So if you are struggling with burnout, fighting anxiety or simply feeling too tired, you have to travel for reset your mind.  If you have the opportunity to take some time off and travel, go for it! It will do you a world of good!</p>
                 <p>There are some reasons to choose us -</p>
                 <ul >
                     <li>Everything possible even with complicated dates</li>
                     <li>Saving time</li>
                     <li>Security guarantee</li>
                     <li>Access to the principal tourist attractions</li>
                     <li>Transfers</li>
                 </ul>
             </div>
             
            </div>
        </Container>

         
       {/* services  */}

       <div className="my-3">


        <Container>
    <div className="testimonial-section">
    <h6 className=" mt-4 ">Our Packages</h6>
    <h4 className="mb-5"><b>Travel With Us</b> </h4>
    </div>

    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 1 }).map((_, idx) => (
            services.slice(0,6).map(service=> <Service
             service={service}
            ></Service>)
      ))}
       </Row>
       <button className=" m-4 custom-button">See All Packages</button> 
       </Container>
       </div>
          
  



        {/* testimonials */}




        <Container>
            <div className="testimonial-section">
            <h6>Testimonials</h6>
            <h4><b>What Our Customer Says</b></h4>
            <p>There are some reviews from our customers. See their experinces down below.</p>
            <div className="testimonials mb-5">
              <div className="reviews">
                 
                  <p>Awesome Service !! I am greatfull to them . For a healthy life you should travel more and more .</p>
                  <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <img className="reviewers-img img-fluid" src={man1} alt="" />
                  <p className="text-danger">-Mark Otto</p>
              </div>
              <div  className="reviews">
              
                  <p>Awesome Service !! I am greatfull to them . For a healthy life you should travel more and more .</p>
                  <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <img className="reviewers-img img-fluid" src={man2} alt="" />
                  <p className="text-danger">-Steve Johnson</p>
              </div>
              <div  className="reviews">
           
                  <p>Awesome Service !! I am greatfull to them . For a healthy life you should travel more and more .</p>
                  <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <img className="reviewers-img img-fluid" src={man3} alt="" />
                  <p className="text-danger">-Chris Thomas</p>
                 
              </div>
              <div  className="reviews">
             
                  <p>Awesome Service !! I am greatfull to them . For a healthy life you should travel more and more .</p>
                  <p className="text-warning">{star}{star}{star}{star}{star}</p>
                  <img className="reviewers-img img-fluid" src={man4} alt="" />
                  <p className="text-danger">-Json Roy</p>
                 
              </div>
            </div>
            </div>
        </Container>

        </div>
    );
};

export default Home;