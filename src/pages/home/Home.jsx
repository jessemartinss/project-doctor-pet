import React from 'react';
import './Home.scss';
import Brand from '../../assets/icons/brand-white.svg';

export default function Home() {
  return (
    <React.Fragment>
        <main className="dt-home">
            <img src={Brand} alt="Brand" />
        </main>
    </React.Fragment>
  )
}
