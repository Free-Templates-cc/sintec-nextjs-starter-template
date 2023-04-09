import React from 'react'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Image from "next/image"
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

type Props = {}

const Testimonials = (props: Props) => {

  const carouselConfig = {
    merge: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    center: false,
    dots: true,
    navText: [
      '<i class="fa fa-long-arrow-left"></i> Prev',
      'Next <i class="fa fa-long-arrow-right"></i>',
    ],
    autoplay: true,
    autoplayTimeout: 3000,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 2,
      },
      1200: {
        items: 2,
      },
    },
  };

  return (
    <section className="testimonial-area area-padding">
        <div className="container">
          <div className="area-heading">
            <h3 className="line">Customer reviews</h3>
            <p>Together female let signs for for fish fowl may first.</p>
          </div>
          <div className="row">
          <OwlCarousel
              className="active-testimonial-carusel owl-carousel"
              {...carouselConfig}
            >
              <div className="single-testimonial item d-flex flex-row">
                <div className="thumb">
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"
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
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tex2.jpg.webp"
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
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"
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
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tex2.jpg.webp"
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
                  <Image width={91} height={91}
                    className="img-fluid"
                    src="/images/tes1.jpg.webp"
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
            </OwlCarousel>
          </div>
        </div>
      </section>
  )
}

export default Testimonials