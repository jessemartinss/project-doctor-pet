/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome05 from '../../assets/images/img-home-05.png';
import { ButtonDefaultOrange } from '../../components/buttons/Buttons';

export default function HomeSection06() {
  return (
    <section className="dt-home-06">
        <div className="container">
            <div className="row">
                <div className="col-lg-5 align-self-center">
                    <h2>Schedule your appointment today</h2>
                    <ButtonDefaultOrange value="Contact us"/>
                </div>
                <div className="col-lg-7 text-end">
                    <img src={ImgHome05} alt="Image" />
                </div>
            </div>
        </div>
    </section>
  )
}
