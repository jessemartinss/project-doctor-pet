/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome09 from '../../assets/images/img-home-09.jpg';
import ImgHome10 from '../../assets/images/img-home-10.jpg';
import ImgHome11 from '../../assets/images/img-home-11.jpg';
import ImgHome12 from '../../assets/images/img-home-12.jpg';
import ImgHome13 from '../../assets/images/img-home-13.jpg';
import ImgHome14 from '../../assets/images/img-home-14.jpg';

export default function HomeSection08() {
    return (
        <React.Fragment>
            <section className="dt-home-08">
                <div className="container">
                    <div className="row mb-5">
                        <div className="col-lg-12">
                            <h3>Follow us on <a href="">Instagram</a></h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="dt-home-box">
                                <img src={ImgHome09} alt="" className='hvr-buzz' />
                            </div>
                        </div>
                        <div className="col-lg-4 col-6 mb-4">
                            <div className="dt-home-box">
                                <img src={ImgHome10} alt="" className='hvr-buzz'/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-12">
                            <div className="row">
                                <div className="col-lg-6 col-6 mb-lg-4 mb-4">
                                    <div className="dt-home-box">
                                        <img src={ImgHome11} alt="" className='hvr-buzz'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 mb-lg-4 mb-4">
                                    <div className="dt-home-box">
                                        <img src={ImgHome12} alt="" className='hvr-buzz'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6 mb-4">
                                    <div className="dt-home-box">
                                        <img src={ImgHome13} alt="" className='hvr-buzz'/>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-6">
                                    <div className="dt-home-box">
                                        <img src={ImgHome14} alt="" className='hvr-buzz'/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
