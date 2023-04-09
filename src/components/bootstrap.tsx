import React from "react";

type Props = {};

const Bootstrap = (props: Props) => {
  return (
    <>
      <header className="header_area">
        <div className="top_menu row m0">
          <div className="container">
            <div className="float-left">
              <a className="dn_btn" href="">
                <i className="ti-mobile"></i>+1 (205) 325-1235
              </a>
              <span className="dn_btn">
                {" "}
                <i className="ti-location-pin"></i> 4256 Marshville Road,
                Poughkeepsie, NY 12601
              </span>
            </div>
            <div className="float-right">
              <span className="follow_us">Follow us: </span>
              <ul className="list header_social">
                <li>
                  <a href="#">
                    <i className="ti-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-skype"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="ti-vimeo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about-us.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">
                      services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="project.html">
                      project
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="right-button">
                <ul>
                  <li className="shop-icon">
                    <a href="#">
                      <i className="ti-shopping-cart-full"></i>
                      <span>0</span>
                    </a>
                  </li>
                  <li>
                    <a id="search" href="javascript:void(0)">
                      <i className="ti-search"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="search_input" id="search_input_box">
          <div className="container ">
            <form className="d-flex justify-content-between search-inner">
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn"></button>
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
              ></span>
            </form>
          </div>
        </div>
      </header>

      <section className="home_banner_area">
        <div className="banner_inner d-flex align-items-center">
          <div
            className="overlay bg-parallax"
            data-stellar-ratio="0.9"
            data-stellar-vertical-offset="0"
            data-background=""
          ></div>
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
        </div>
      </section>

      <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <img src="img/banner/about1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content">
                <h4>
                  WE ARE ON EXPERT <br />
                  THIS FIELD BUILDINGS
                  <br />
                  SOLUTIONS SINCE 1974.
                </h4>
                <p>
                  Void gathering midst together you{`'`}re shall. Beast set he{" "}
                  <br />
                  likeness spirit winged two all fourth they{`'`}re gathered
                  <br /> seasons very may heaven saying. Fly image th
                </p>
                <a className="main_btn" href="#">
                  learn more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">What We Provide</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <img src="img/icon/i1.png" alt="" />
                </div>
                <div className="service-content">
                  <h5>Architecture Design</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <img src="img/icon/i2.png" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Construction</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <img src="img/icon/i3.png" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Renovation</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-xl-3">
              <div className="single-service">
                <div className="service-icon">
                  <img src="img/icon/i4.png" alt="" />
                </div>
                <div className="service-content">
                  <h5>Building Maintenance</h5>
                  <p>
                    You{`'`}re which creepeth were yielding kind, divide sixten
                    po gatherin all first fill Seed wherein life. Years one
                    fifth{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="number-area" id="number-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-5">
              <div className="number-img">
                <img src="img/banner/about2.png" alt="" />
              </div>
            </div>
            <div className="col-md-7 col-lg-6">
              <div className="number-content">
                <h4>
                  Providing Personalized And <br />
                  High Quality Service .
                </h4>
                <p>
                  Grass bearing make open multiply that may fly cattle gathering
                  be unto
                  <br /> void moving. Blessed one evening had them heaven
                  <br /> divide said heaven whose brought he. Give It fowl
                  green.
                </p>
                <div className="number-wrapper">
                  <div className="single-number">
                    <h5>
                      <span className="counter">15</span>K+
                    </h5>
                    <p>happy customer</p>
                  </div>
                  <div className="single-number">
                    <h5>
                      <span className="counter">10</span>K+
                    </h5>
                    <p>Project Done</p>
                  </div>
                  <div className="single-number">
                    <h5>
                      <span className="counter">9</span>/
                      <span className="counter">10</span>
                    </h5>
                    <p>Average Rating</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="portfolio_area area-padding" id="portfolio">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Our Recent Project</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="filters portfolio-filter">
            <ul>
              <li className="active" data-filter="*">
                all
              </li>
              <li data-filter=".popular">buildings</li>
              <li data-filter=".latest"> offices</li>
              <li data-filter=".following">rebuild</li>
              <li data-filter=".upcoming">architecture</li>
            </ul>
          </div>
          <div className="filters-content">
            <div className="row portfolio-grid">
              <div className="grid-sizer col-md-3 col-lg-6"></div>
              <div className="col-lg-6 col-md-6 all following">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/project/1.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <p>construction</p>
                    <h4>
                      <a href="portfolio-details.html">Desert Work, Dubai</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 all latest popular upcoming">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/project/2.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <p>construction</p>
                    <h4>
                      <a href="portfolio-details.html">Desert Work, Dubai</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 all latest following">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/project/3.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <p>construction</p>
                    <h4>
                      <a href="portfolio-details.html">Desert Work, Dubai</a>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 all latest upcoming">
                <div className="single_portfolio">
                  <img
                    className="img-fluid w-100"
                    src="img/project/4.jpg"
                    alt=""
                  />
                  <div className="short_info">
                    <p>construction</p>
                    <h4>
                      <a href="portfolio-details.html">Desert Work, Dubai</a>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Customer reviews</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
            <div className="active-testimonial-carusel owl-carousel">
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/elements/tes1.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Adame Nesane</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/elements/tex2.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Adam Nahan</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/elements/tes1.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Adame Nesane</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/elements/tex2.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Adam Nahan</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <img
                    className="img-fluid"
                    src="img/elements/tes1.jpg"
                    alt=""
                  />
                </div>
                <div className="desc">
                  <h4>Adame Nesane</h4>
                  <p className="designation">Chief Customer</p>
                  <p>
                    You{`'`}re had. Subdue grass Meat us winged years you{`'`}ll
                    doesn{`'`}t. fruit two also won one yielding creepeth third
                    give may never lie alternet food.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Our Recent News</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/blog/1.jpg" alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">
                      <i className="ti-calendar"></i> Feb 14, 2019
                    </a>
                    <a href="#">
                      <i className="ti-folder"></i> company
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Yielding called winged years they are likeness hath
                      morning
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/blog/2.jpg" alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">
                      <i className="ti-calendar"></i> Feb 14, 2019
                    </a>
                    <a href="#">
                      <i className="ti-folder"></i> company
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Yielding called winged years they are likeness hath
                      morning
                    </h4>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="single-blog">
                <div className="thumb">
                  <img className="img-fluid" src="img/blog/3.jpg" alt="" />
                </div>
                <div className="short_details">
                  <div className="meta-top d-flex">
                    <a href="#">
                      <i className="ti-calendar"></i> Feb 14, 2019
                    </a>
                    <a href="#">
                      <i className="ti-folder"></i> company
                    </a>
                  </div>
                  <a className="d-block" href="single-blog.html">
                    <h4>
                      Yielding called winged years they are likeness hath
                      morning
                    </h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-area ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget">
                <h6>Userful Links</h6>
                <div className="row">
                  <div className="col-lg-6">
                    <ul className="footer-nav">
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">home</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">about us</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">company news</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">projects</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">careers</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="footer-nav">
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">our services</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">terms and condition</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">shop</a>
                      </li>
                      <li>
                        <i className="ti-angle-right"></i>
                        <a href="#">contuct us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4  col-md-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">Business Hours</h6>
                <ul className="business-hour">
                  <li>
                    Monday - Friday : <span>9:00 am - 18:00 pm</span>{" "}
                  </li>
                  <li>
                    Saturday :<span>9:00 am - 16:00 pm</span>
                  </li>
                  <li>
                    Sunday :<span>Closed</span>
                  </li>
                </ul>
                <p>We work all the holidays!</p>
              </div>
            </div>
            <div className="col-lg-4  col-md-12">
              <div className="single-footer-widget newsletter">
                <h6>Email Newsletter</h6>
                <div id="mc_embed_signup">
                  <form
                    target="_blank"
                    action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                    method="get"
                    className="form-inline"
                  >
                    <div className="form-group row no-gutters">
                      <div className="col-lg-8 col-md-8 col-7">
                        <input
                          name="EMAIL"
                          placeholder="Your Email Address"
                          required={true}
                          type="email"
                        />
                      </div>
                      <div className="col-lg-4 col-md-4 col-5">
                        <button className="nw-btn main_btn circle">
                          subscribe
                          <span className="lnr lnr-arrow-right"></span>
                        </button>
                      </div>
                    </div>
                    <div className="info"></div>
                  </form>
                </div>
                <p>
                  Sign up for new Recover Construction Company content, updates,
                  surveys & offers.
                </p>
                <a className="footer-link" href="#">
                  privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row ">
              <p className="col-lg-12 footer-text ">
                Copyright &copy;
                2023 All
                rights reserved | This template is made with{" "}
                <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Bootstrap;
