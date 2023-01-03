/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './Home.scss';
import ImgHome03 from '../../assets/images/img-home-03.jpg';
import ImgHome04 from '../../assets/images/img-home-04.jpg';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function HomeSection05() {
  return (
    <React.Fragment>
      <section className="dt-home-05">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-12">
              <h2>What our clients say about us</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricies felis feugiat elementum gravida. Facilisis libero aliquam curabitur.</p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="container">
              <div className="col-lg-12">
                <div className="dt-home-btn-05">
                  <button type="button" data-bs-target="#slide02" data-bs-slide="prev"><FaChevronLeft /></button>
                  <button type="button" data-bs-target="#slide02" data-bs-slide="next"><FaChevronRight /></button>
                </div>
              </div>
            </div>
          </div>
          <div className="row dt-home-slide-05">
            <div className="col-lg-12">
              <div id="slide02" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div className="row dt-home-slide-item-05">
                      <div className="col-lg-6">
                        <img src={ImgHome03} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3>"A team of vets you can trust"</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.</h4>
                        <h5>Kathie Corl</h5>
                        <h6>Molly’s Owner</h6>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div className="row dt-home-slide-item-05">
                      <div className="col-lg-6">
                        <img src={ImgHome04} alt="" />
                      </div>
                      <div className="col-lg-6">
                        <h3>"A team of vets you can trust"</h3>
                        <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit in consectetur lacus vitae, quis et odio egestas. Diam elit, feugiat adipiscing nibh pretium. Enim eget ut quam.</h4>
                        <h5>Sophie Moore</h5>
                        <h6>Tommy’s Owner</h6>
                      </div>
                    </div>
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
