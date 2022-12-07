/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './NavigationMobile.scss';
import Brand from '../../assets/icons/brand-default.svg';
import IconCat from '../../assets/icons/icon-cat.svg';
import IconDog from '../../assets/icons/icon-dog.svg';
import IconHar from '../../assets/icons/icon-har.svg';
import IconBath from '../../assets/icons/icon-bath.svg';

export default function NavigationMobile() {
    return (
        <React.Fragment>
            <div class="offcanvas offcanvas-end" tabindex="-1" id="mobile" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <a class="navbar-brand" href="/">
                        <img src={Brand} alt="Brand" />
                    </a>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div class="navbar-nav ms-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about">About</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="/#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6 dt-navigation-service">
                                            <div className="dt-navigation-service-img">
                                                <img src={IconDog} alt="Dog" />
                                            </div>
                                            <div className="dt-navigation-service-content">
                                                <a href="/dog">Dog pet visit</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 dt-navigation-service">
                                            <div className="dt-navigation-service-img">
                                                <img src={IconCat} alt="Cat" />
                                            </div>
                                            <div className="dt-navigation-service-content">
                                                <a href="/cat">Cat pet visit</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 dt-navigation-service">
                                            <div className="dt-navigation-service-img">
                                                <img src={IconBath} alt="Bath" />
                                            </div>
                                            <div className="dt-navigation-service-content">
                                                <a href="/bath">Pet bath</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 dt-navigation-service">
                                            <div className="dt-navigation-service-img">
                                                <img src={IconHar} alt="Cat" />
                                            </div>
                                            <div className="dt-navigation-service-content">
                                                <a href="/har">Pet grooming</a>
                                                <p>Lorem ipsum dolor sit amet, consectetur.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/blog">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/shop">Shop</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/products">Products</a>
                        </li>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
