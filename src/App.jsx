import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './layout/footer/Footer';
import Navigation from './layout/navigation/Navigation';
import Router from './router/Router';

export default function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
      <Footer/>
    </React.Fragment>
  )
}
