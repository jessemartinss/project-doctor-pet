import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <React.Fragment>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </React.Fragment>
  )
}
