import Image from 'next/image'
import React from 'react'

type Props = {}

const Blog = (props: Props) => {
  return (
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
                  <Image width={360} height={285} className="img-fluid" src="/images/1.jpg.webp" alt="" />
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
                  <Image width={360} height={285} className="img-fluid" src="/images/2.jpg.webp" alt="" />
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
                  <Image width={360} height={285} className="img-fluid" src="/images/3.jpg.webp" alt="" />
                  
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
  )
}

export default Blog