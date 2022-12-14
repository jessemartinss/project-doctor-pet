/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome01 from '../../assets/images/img-home-01.png';
import { ButtonDefaultOrange } from '../../components/buttons/Buttons';

export default function HomeSection01() {
  return (
    <React.Fragment>
        <section className="dt-home-01">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-lg-7">
                        <h1>A veterinary you and your little friend can trust</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat a feugiat cursus nisi, vel enim. Non et vitae dictum.</p>
                        <a href="/contact">
                            <ButtonDefaultOrange value="Contact us"/>
                        </a>
                    </div>
                    <div className="col-lg-5">
                        <img src={ImgHome01} alt="Image01" className='animate__animated animate__backInRight' />
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
