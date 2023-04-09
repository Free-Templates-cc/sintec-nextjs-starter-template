import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
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
  )
}

export default Footer