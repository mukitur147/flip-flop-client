import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faLocationArrow, faMailBulk, faPhone,} from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Form, Row } from 'react-bootstrap';
import './About.css'
import aboutIamge from '../../Images/coose1.jpg'

const About = () => {
    const locate = <FontAwesomeIcon icon={faLocationArrow} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    const cell = <FontAwesomeIcon icon={faPhone} />
    return (
        <div>
        <div className=" container contact-us my-5 ">
          <div className="left-align mx-auto">
             
              <h4 className="mb-4 text-danger "><b>Get In Touch With Us</b></h4>
              
                <p> <span>{locate}</span> Dhaka,Bangladsh</p>
                <p> <span>{mail}</span> holidays@gmail.com</p>
                <p> <span>{cell} </span>(+11)9331 3949</p>
          </div>
          <div className="left-align">
          <Form>
<Row className="mb-3">
<Form.Group as={Col} controlId="formGridEmail">
  <Form.Label>Email</Form.Label>
  <Form.Control type="email" placeholder="Enter email" />
</Form.Group>

<Form.Group as={Col} controlId="formGridPassword">
  <Form.Label>Password</Form.Label>
  <Form.Control type="password" placeholder="Password" />
</Form.Group>
</Row>

<Form.Group className="mb-3" controlId="formGridAddress1">
<Form.Label>Address</Form.Label>
<Form.Control placeholder="1234 Main St" />
</Form.Group>

<Row className="mb-3">
<Form.Group as={Col} controlId="formGridCity">
  <Form.Label>City</Form.Label>
  <Form.Control />
</Form.Group>

<Form.Group as={Col} controlId="formGridState">
  <Form.Label>State</Form.Label>
  <Form.Select defaultValue="Choose...">
    <option>Choose...</option>
    <option>...</option>
  </Form.Select>
</Form.Group>

<Form.Group as={Col} controlId="formGridZip">
  <Form.Label>Zip</Form.Label>
  <Form.Control />
</Form.Group>
</Row>

<button className="custom-button">Submit</button>
</Form>
          </div>
        </div>

        <Container>
            <div className="choose-section mb-5">
            <div>
                 <img className="img-fluid" src={aboutIamge} alt="" />
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
    </div>
    );
};

export default About;