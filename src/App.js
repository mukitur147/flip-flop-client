import { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import AllServices from './Components/AllServices/AllServices';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceDetails from './Components/ServiceDetails/ServiceDetails';
import AuthProvider from './Contex/AuthProvider';
import { PulseLoader } from 'react-spinners';
import MyOrders from './Components/MyOrders/MyOrders';
import AllOrders from './Components/AllOrders/AllOrders';
import AddNewService from './Components/AddNewService/AddNewService';
import NotFound from './Components/NotFound/NotFound';

function App() {
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },2000)
  },[])
  return (
    <div className="App">

      {
        loading ?  <div className="mt-5">
          <h6>Please wait a moment...</h6>
          <PulseLoader color={'#F5A623'} loading={loading}  size={30} />
        </div>
        :
        <AuthProvider>
        <BrowserRouter>
         <Header></Header>
         <Switch>
           <Route exact path="/">
             <Home></Home>
           </Route>
           <Route path="/home">
             <Home></Home>
           </Route>
           <Route path="/allServices">
             <AllServices></AllServices>
           </Route>
           <Route path="/about">
             <About></About>
           </Route>
           <Route path="/login">
             <Login></Login>
           </Route>
           <PrivateRoute path="/serviceDetails/:key">
             <ServiceDetails></ServiceDetails>
           </PrivateRoute>
           <PrivateRoute path="/myorders">
             <MyOrders></MyOrders>
           </PrivateRoute>
           <PrivateRoute path="/allorders">
             <AllOrders></AllOrders>
           </PrivateRoute>
           <PrivateRoute path="/addservice">
             <AddNewService></AddNewService>
           </PrivateRoute>
           <Route path="*">
             <NotFound></NotFound>
           </Route>
         </Switch>
         <Footer></Footer>
         </BrowserRouter>
        </AuthProvider>
      }
    
    </div>
  );
}

export default App;
