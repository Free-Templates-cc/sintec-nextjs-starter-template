import React from "react";
import { Parallax } from "react-parallax";

type Props = {};

const HomeBanner = (props: Props) => {
  return (
    <section className="home_banner_area">

        <Parallax
          blur={0}
          bgImage="/images/home-banner.jpg.webp"
          bgImageAlt="home banner"
          strength={100}
          className="container-fluid banner_inner d-flex"
          contentClassName="container-fluid d-flex align-items-center"
        >
          <div className="container">
            <div className="banner_content text-center">
              <span>Future construction</span>
              <h3>
                Make your dream home
                <br />
                with sintac
              </h3>
              <a className="main_btn" href="#">
                get a quote
              </a>
            </div>
          </div>
        </Parallax>
     
    </section>
  );
};

export default HomeBanner;
