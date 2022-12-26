import React from 'react';
import './Home.scss';
import HomeSection01 from './HomeSection01';
import HomeSection02 from './HomeSection02';
import HomeSection03 from './HomeSection03';
import HomeSection04 from './HomeSection04';
import HomeSection05 from './HomeSection05';
import HomeSection06 from './HomeSection06';

export default function Home() {
  return (
    <React.Fragment>
      <HomeSection01/>
      <HomeSection02/>
      <HomeSection03/>
      <HomeSection04/>
      <HomeSection05/>
      <HomeSection06/>
    </React.Fragment>
  )
}
