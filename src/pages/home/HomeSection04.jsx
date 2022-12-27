/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome02 from '../../assets/images/img-home-02.png';
import IconCheck from '../../assets/icons/icon-check.svg';
import { ButtonDefaultOrange } from '../../components/buttons/Buttons';

export default function HomeSection04() {
  return (
    <React.Fragment>
        <section className="dt-home-04">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-6">
                        <img src={ImgHome02} alt="" className="p-0 p-lg-3 mb-5 mb-lg-0" />
                    </div>
                    <div className="col-lg-6">
                        <h2>About us</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nunc nulla ut lobortis nibh porttitor. Facilisi arcu, nibh vel risus, morbi pharetra. Facilisi sit mi sed mauris non iaculis elit fusce. Amet nunc in odio molestie lorem mi id a.
                        </p>
                        <div className="dt-home-options">
                            <img src={IconCheck} alt="" />
                            <h6>Over 10 years of experience</h6>
                        </div>
                        <div className="dt-home-options">
                            <img src={IconCheck} alt="" />
                            <h6>20 talented vets ready to help you</h6>
                        </div>
                        <div className="dt-home-options">
                            <img src={IconCheck} alt="" />
                            <h6>High-quality products only</h6>
                        </div>
                        <a href=""><ButtonDefaultOrange value="More about us"/></a>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
