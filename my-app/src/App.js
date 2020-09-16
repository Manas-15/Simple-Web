import React from 'react';
import Navbar from './pages/navbar/navbar';
import Products from './pages/products/products-page';
import Services from './pages/Services/Services-page';
import Contact from './pages/contact/contactPage';
import Homepage  from './pages/homepage/home-page'
import {Switch,Route} from 'react-router-dom';
import Signup from './pages/Signup/sign-up';
import Footer from './pages/Footer/footer';
import Signin from './pages/Signin/Signin';

export default function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/products' component={Products} />
        <Route path='/contact' component={Contact} />
        <Route path='/services' component={Services} />
        <Route path='/signup' component={Signup} />
        <Route path='/signin' component={Signin} />
      </Switch>
      <Footer />
    </div>
  )
}
