/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import IconDog from '../../assets/icons/icon-dog.svg';
import IconCat from '../../assets/icons/icon-cat.svg';
import IconBath from '../../assets/icons/icon-bath.svg';
import IconHar from '../../assets/icons/icon-har.svg';
import { ButtonDefaultGray, ButtonDefaultOrange, ButtonSmallGray } from '../../components/buttons/Buttons';
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa';

export default function HomeSection03() {
    return (
        <React.Fragment>
            <section className="container dt-home-03">
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-between align-items-center py-lg-5 py-3">
                        <h2>Our services</h2>
                        <div className="dt-home-btns">
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev"><FaChevronLeft/></button>
                            <button type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next"><FaChevronRight/></button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="dt-home-card-03">
                                            <div className="dt-home-card-img">
                                                <img src={IconDog} alt="Dog" />
                                            </div>
                                            <div className="dt-home-card-content">
                                                <a href="">Dog pet visit</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.</p>
                                                <a href=""><ButtonSmallGray value="99 USD" /></a>
                                                <a href=""><ButtonSmallGray value="1 hr" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="dt-home-card-03">
                                            <div className="dt-home-card-img">
                                                <img src={IconCat} alt="Cat" />
                                            </div>
                                            <div className="dt-home-card-content">
                                                <a href="">Cat pet visit</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.</p>
                                                <a href=""><ButtonSmallGray value="99 USD" /></a>
                                                <a href=""><ButtonSmallGray value="1 hr" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="dt-home-card-03">
                                            <div className="dt-home-card-img">
                                                <img src={IconBath} alt="Bath" />
                                            </div>
                                            <div className="dt-home-card-content">
                                                <a href="">Pet bath</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.</p>
                                                <a href=""><ButtonSmallGray value="99 USD" /></a>
                                                <a href=""><ButtonSmallGray value="1.5 hr" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="dt-home-card-03">
                                            <div className="dt-home-card-img">
                                                <img src={IconHar} alt="Har" />
                                            </div>
                                            <div className="dt-home-card-content">
                                                <a href="">Pet grooming</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semolmel neque quam pellentesque sed elit.</p>
                                                <a href=""><ButtonSmallGray value="99 USD" /></a>
                                                <a href=""><ButtonSmallGray value="1.8 hr" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row py-lg-5 py-3">
                    <div className="col-lg-12 dt-home-btn-footer text-center">
                        <a href=""><ButtonDefaultOrange value="Contact us"/></a>
                        <a href=""><ButtonDefaultGray value="Browse all services"/></a>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}
