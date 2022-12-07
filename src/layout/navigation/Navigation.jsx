import React from 'react';
import './Navigation.scss';
import { ButtonSmallGray, ButtonSmallOrange } from '../../components/buttons/Buttons';
import Card from '../../components/modal/Card';
import NavigationMobile from '../navigation-mobile/NavigationMobile';
import Brand from '../../assets/icons/brand-default.svg';
import IconCat from '../../assets/icons/icon-cat.svg';
import IconDog from '../../assets/icons/icon-dog.svg';
import IconHar from '../../assets/icons/icon-har.svg';
import IconBath from '../../assets/icons/icon-bath.svg';

export default function Navigation() {
    return (
        <React.Fragment>
            <nav class="navbar navbar-expand-lg bg-transparent py-4 dt-navigation">
                <div class="container">
                    <a class="navbar-brand" href="/">
                        <img src={Brand} alt="Brand" />
                    </a>
                    <div className="dt-btn-mobile">
                        <a class="nav-link" href="/contact" data-bs-toggle="modal" data-bs-target="#card">
                            <ButtonSmallGray value="Cart(0)" />
                        </a>
                        <button class="navbar-toggler hvr-bob" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobile" aria-controls="offcanvasRight">
                            <div className="dt-icon-mobile">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </button>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
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
                                <ul class="dropdown-menu animate__animated animate__fadeInUp">
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
                        <div class="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a class="nav-link" href="/contact" data-bs-toggle="modal" data-bs-target="#card">
                                    <ButtonSmallGray value="Cart(0)" />
                                </a>
                            </li>
                            <li className="nav-item">
                                <a class="nav-link" href="/contact">
                                    <ButtonSmallOrange value="Contact us" />
                                </a>
                            </li>
                        </div>
                    </div>
                </div>
            </nav>
            <Card />
            <NavigationMobile />
        </React.Fragment>
    )
}
