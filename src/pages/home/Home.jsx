import React from 'react';
import './Home.scss';
import HomeSection01 from './HomeSection01';
import HomeSection02 from './HomeSection02';
import HomeSection03 from './HomeSection03';

export default function Home() {
  return (
    <React.Fragment>
      <HomeSection01/>
      <HomeSection02/>
      <HomeSection03/>
    </React.Fragment>
  )
}
