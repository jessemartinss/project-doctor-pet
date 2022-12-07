/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram,FaLinkedin } from 'react-icons/fa';
import './Footer.scss';
import Brand from '../../assets/icons/brand-default.svg';

export default function Footer() {
  return (
    <React.Fragment>
        <footer className="dt-footer">
            <div className="container">
                <img src={Brand} alt="Brand" />
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit. Nec nulla lacus.</p>
                <div className="dt-footer-social">
                    <a href="" className='hvr-float'><FaFacebookF/></a>
                    <a href="" className='hvr-float'><FaInstagram/></a>
                    <a href="" className='hvr-float'><FaTwitter/></a>
                    <a href="" className='hvr-float'><FaLinkedin/></a>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}
