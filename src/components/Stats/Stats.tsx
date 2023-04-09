import Image from 'next/image'
import React from 'react'

type Props = {}

const Stats = (props: Props) => {
  return (
    <section className="number-area" id="number-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-5 col-lg-5">
          <div className="number-img">
            <Image width={368} height={462} src="/images/about2.png.webp" alt="" />
            
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
  )
}

export default Stats