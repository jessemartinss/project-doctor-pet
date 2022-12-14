/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import IconSend from '../../assets/icons/icon-home-01.svg';
import IconTimer from '../../assets/icons/icon-home-02.svg';
import IconPin from '../../assets/icons/icon-home-03.svg';

export default function HomeSection02() {
  return (
    <React.Fragment>
        <section className="dt-home-02">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 dt-home-card animate__animated animate__fadeInUp">
                        <div className="dt-home-card-img">
                            <img src={IconSend} alt="Send" />
                        </div>
                        <div className="dt-home-card-content">
                            <h2>Contact us</h2>
                            <h5>contact@doctorpet.com</h5>
                            <h5>(323) 238 - 0696</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 dt-home-card animate__animated animate__fadeInUp">
                        <div className="dt-home-card-img">
                            <img src={IconTimer} alt="Send" />
                        </div>
                        <div className="dt-home-card-content">
                            <h2>Open Hours</h2>
                            <h5>Mon - Fri: 8:00 AM to 5:00 PM</h5>
                            <h5>Saturday: 9:00 AM to 3:00 PM</h5>
                            <h5>Sunday: 9:00 AM to 2:00 PM</h5>
                        </div>
                    </div>
                    <div className="col-lg-4 dt-home-card animate__animated animate__fadeInUp">
                        <div className="dt-home-card-img">
                            <img src={IconPin} alt="Send" />
                        </div>
                        <div className="dt-home-card-content">
                            <h2>Location</h2>
                            <h5>9400 S Normandie Ave #14</h5>
                            <h5>Los Angeles, CA</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
