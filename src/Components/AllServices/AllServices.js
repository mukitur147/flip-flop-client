import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from '../Home/Service';

const AllServices = () => {
    const [services,setServices]=useState([])
  useEffect(()=>{
    fetch('./services.json')
    .then(res=>res.json())
    .then(data=>setServices(data.service))

  },[])
    return (
        <div>
            <Container>
            <div className="testimonial-section">
    <h6 className=" mt-4 ">Our Packages</h6>
    <h4 className="mb-5"><b>Travel With Us</b> </h4>
    </div>

                {/* card map  */}
                <Row xs={1} md={2} className="g-4 mb-5">
                    {Array.from({ length: 1 }).map((_, idx) => (

                        services.map(service => <Service
                            key={service.key}
                            service={service}
                        ></Service>)
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default AllServices;