import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const {name,overview,type,img1,duration,key} = props.service
    return (
        <div>
            <Col>
                <Card className="services-card left-align h-100">
                    <Card.Img variant="top" src={img1} />
                    <Card.Body >
                        <h4><b>{name}</b> </h4>
                        <p><small>Tour Type : {type}</small></p>
                        <p><small>Duration : {duration}</small></p>
                        <p>{overview}</p>
                       <Link to={`/serviceDetails/${key}`}><button className="custom-button">Book Now</button></Link>
                    
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Service;