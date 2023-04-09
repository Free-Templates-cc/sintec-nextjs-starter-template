import React from 'react'
import Image from 'next/image'

type Props = {}

const About = (props: Props) => {
  return (
    <section className="about-area area-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block">
              <div className="about-img">
                <Image width={555} height={485} src="/images/about1.png.webp" alt="" />
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
  )
}

export default About