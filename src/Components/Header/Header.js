import React from 'react';
import { useHistory } from 'react-router';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import umbrella from '../../Images/umbrella.png'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
   const history = useHistory()
  const loginIcon = <FontAwesomeIcon icon={faSignInAlt} />

  const {user ,logout} = useAuth();
  console.log(user.photoURL)

 
  const handleLogin=()=>{
    history.push('/login')
  }

    return (
        <div>
            <Navbar   variant="light" bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home"> <h3 className="title-name"> <img src={umbrella} alt="" /> Flip Flop Holidays</h3></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto nav-route">
        <Link to="/home"><h6>Home</h6></Link>
        <Link to="/allServices"><h6>Our Packages</h6></Link>
        <Link to="/about"><h6>About Us</h6></Link>
      </Nav>
      <Nav className="ms-auto">
        {
           user.displayName ? <div className="user">
             <img className="user-img" src={user?.photoURL} alt="" />
           <NavDropdown className="user-handler" title={user.displayName} id="basic-nav-dropdown">
          <div className="user-active">
          <Link to="/myorders">My Orders</Link>
          <Link to="/allorders">Manage All Orders</Link>
          <Link to="/addservice">Add a New Package</Link>
          </div>
          <NavDropdown.Divider />
          <button onClick={logout} className="custom-button ms-2"> Logout</button>
        </NavDropdown>
           
          
          </div> :
         <button onClick={handleLogin} className="custom-button">{loginIcon} Login</button>
        }
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Header;