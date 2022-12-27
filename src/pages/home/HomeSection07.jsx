/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome06 from '../../assets/images/img-home-06.jpeg';
import ImgHome07 from '../../assets/images/img-home-07.jpeg';
import ImgHome08 from '../../assets/images/img-home-08.jpeg';
import { ButtonDefaultGray } from '../../components/buttons/Buttons';

export default function HomeSection07() {
  return (
    <React.Fragment>
        <section className="dt-home-07">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-lg-12 py-3 d-flex align-items-center justify-content-between dt-home-title">
                        <h4>Our articles & news</h4>
                        <ButtonDefaultGray value="Browse all articles"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="dt-home-card hvr-grow">
                            <div className="dt-home-card-img text-end">
                                <span>Dogs</span>
                                <img src={ImgHome06} alt=""/>
                            </div>
                            <div className="dt-home-card-content">
                                <a href="">Dog toys: How to pick the best and the safest</a>
                                <hr />
                                <div className="dt-home-card-links">
                                    <a href="">Read More</a>
                                    <p>September 1, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="dt-home-card hvr-grow">
                            <div className="dt-home-card-img text-end">
                                <span>Dogs</span>
                                <img src={ImgHome07} alt="" />
                            </div>
                            <div className="dt-home-card-content">
                                <a href="">Dog toys: How to pick the best and the safest</a>
                                <hr />
                                <div className="dt-home-card-links">
                                    <a href="">Read More</a>
                                    <p>September 1, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0">
                        <div className="dt-home-card hvr-grow">
                            <div className="dt-home-card-img text-end">
                                <span>Cats</span>
                                <img src={ImgHome08} alt="" />
                            </div>
                            <div className="dt-home-card-content">
                                <a href="">Dog toys: How to pick the best and the safest</a>
                                <hr />
                                <div className="dt-home-card-links">
                                    <a href="">Read More</a>
                                    <p>September 1, 2022</p>
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
