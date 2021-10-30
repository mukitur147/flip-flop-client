import React from 'react';
import { Form } from 'react-bootstrap';
import './Login.css'
import googleIcon from '../../Images/google.png'
import useFirebase from '../../Hooks/useFirebase';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle,user}=useAuth();
   
    const location = useLocation();
    const history = useHistory();
    const redirect_url =location.state?.from || '/home' ;

    const  handleGoogleSignUp = () =>{
        signInUsingGoogle()
        .then(result=>{
            history.push(redirect_url)
        })
    }

  
    return (
        <div>
               <div className="container full-form my-5 shadow-lg p-5 rounded-3">
            <h2 className="text-primary mb-5" ><b>Login</b></h2>

            {/* email and password login  */}

            <Form >
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Control className="w-75 mx-auto" type="email" placeholder="Enter email" required />
    <Form.Text className="text-muted">
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control  className="w-75 mx-auto" type="password" placeholder="Password" required />
  </Form.Group>
  <button type="submit" className="custom-button me-4">Login </button>
</Form>
<br />

<h6 className="or my-3"><b>Or</b></h6>
{/* google login  */}
 <button
 onClick={handleGoogleSignUp}
 className="btn custom-button2"
 
 ><img src={googleIcon} alt="" /> Login With Google</button>

        </div>
        </div>
    );
};

export default Login;