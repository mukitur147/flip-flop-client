import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import { PulseLoader } from 'react-spinners';
import useAuth from '../../Hooks/useAuth';
import useFirebase from '../../Hooks/useFirebase';

const PrivateRoute = ({children,...rest}) => {
    const {user,isLoading} = useAuth();
    if(isLoading){
      return    <PulseLoader color={'#F5A623'} loading={isLoading}  size={30} />
    }

    return (
        <Route
        {...rest}
        render={({location})=> user.displayName ? children :
         <Redirect
         to={{
            pathname: "/login",
            state: { from: location }
          }}>

        </Redirect>}
        
        >
            
        </Route>
    );
};

export default PrivateRoute;