import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Error from '../pages/error/Error';
import Home from '../pages/home/Home';

export default function Router() {
  return (
    <React.Fragment>
        <Routes>
            <Route path='*' element={<Error/>}></Route>
            <Route path='/' element={<Home/>}></Route>
        </Routes>
    </React.Fragment>
  )
}
