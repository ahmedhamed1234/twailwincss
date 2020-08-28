import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './componets/Navbar';
import Home from './Pages/Home'
import Footer from './componets/Footer'
// import Home from './screens/Home';
// import BlogMain from './screens/Blog/BlogMain'

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home/>
      <Switch>
        {/* <Route exact path='/' component={Home} />
        <Route exact path='/blog' component={BlogMain} /> */}

      </Switch>
      <Footer/>
    </BrowserRouter>
  );
};

export default Routes;
