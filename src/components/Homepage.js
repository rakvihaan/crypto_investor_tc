import React from 'react';
import banner from "../assets/banner.png";
import featureBanner from '../assets/featurebanner.png';

const Homepage = () => {
  
  return (
    <div>
        <div className="container justify-content-start" style={{marginTop: '200px'}}>
          <div className="getStarted">
            <div className="row align-items-center">
              <div className="col-lg-6 banner-pic justify-content-center">
                <img src={banner} alt="bitcoin picture" />
              </div>
              <div className="col-lg-6 description">
                <p>Start investing in <span className="descCrypto">crypto</span> today.</p>
                <div className="row signInForm" style={{marginTop: '30px'}}>
                  <input type="text" className="col shadow-none form-control signInEmail" placeholder="someone@example.com" />
                  <button className="col-auto shadow-none btn getstbtn">Get Started!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container spacingline">
          <div className="row divline">
          </div>
        </div>
        <div className="container appFeatures">
          <div className="container featureBanner ">
            <div className="row align-items-center  subBanner">
              <div className="col-lg-6 featureBannerImg d-flex justify-content-center">
                <img src={featureBanner} alt="feature banner" />
              </div>
              <div className="col-lg-6 featureDesc">
                <h1 className="display-4 featureHeading">Invest on the go.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus nostrum, cupiditate harum inventore quam error optio sunt ipsum, eos soluta veniam consectetur temporibus necessitatibus labore, odit amet ipsa nemo?
                </p>
              </div>
            </div>
            <div className="row align-items-center  subBanner">
              <div className="col-lg-6 featureDesc">
                <h1 className="display-4 featureHeading">Some other feature.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus nostrum, cupiditate harum inventore quam error optio sunt ipsum, eos soluta veniam consectetur temporibus necessitatibus labore, odit amet ipsa nemo?
                </p>
              </div>
              <div className="col-lg-6 featureBannerImg d-flex justify-content-center">
                <img src={featureBanner} alt="feature banner" />
              </div>
            </div>
            <div className="row align-items-center  subBanner">
              <div className="col-lg-6 featureBannerImg d-flex justify-content-center">
                <img src={featureBanner} alt="feature banner" />
              </div>
              <div className="col-lg-6 featureDesc">
                <h1 className="display-4 featureHeading">Some other other feature.</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus nostrum, cupiditate harum inventore quam error optio sunt ipsum, eos soluta veniam consectetur temporibus necessitatibus labore, odit amet ipsa nemo?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Homepage;
