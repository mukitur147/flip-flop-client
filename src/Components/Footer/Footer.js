import React from 'react';
import './Footer.css'
import umbrella from '../../Images/umbrella.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDumbbell, faLocationArrow, faMailBulk, faPhone, faStar } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
   
    const locate = <FontAwesomeIcon icon={faLocationArrow} />
    const mail = <FontAwesomeIcon icon={faMailBulk} />
    const cell = <FontAwesomeIcon icon={faPhone} />
    return (
        <div>
            <div  className="main-footer">
           <div className="footer container">
                <div className="left-align">
                    <h5> <img src={umbrella} alt="" /> Flip Flop Holidays</h5>
                    <p> <span>{locate}</span> Dhaka,Bangladsh</p>
                    <p> <span>{mail}</span> flipflophol@gmail.com</p>
                    <p> <span>{cell} </span>(+11)9331 3949</p>
                </div>
                <div className="left-align">
                    <h5> <b><span>Company</span></b></h5>
                    <p>About Us</p>
                    <p>Packages</p>
                    <p>Reviews</p>
                    <p>Blogs</p>
                </div>
                <div className="left-align">
                    <h5><b><span>Information</span></b></h5>
                    <p>Sitemap</p>
                    <p>Documentation</p>
                    <p>Cookies</p>
                </div>
                <div className="left-align">
                    <input type="text"  placeholder="Email Adress"/> <br /> <br />
                    <button className="custom-button">Subscribe</button>
                </div>
            </div>
            <p className="py-3"><small>Flip Flop Holidays template by - Mukitur Rahman Tilok</small></p>
           </div>
        </div>
    );
};

export default Footer;