import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 5,
  },
};


const Hero = () => {
  return (
    <>
      <div className="hero_bg" >
        <div className="container-fluid" >
          <div className="d-flex text-white justify-content-between mb-4 align-items-center">
            <div>
              <h2>Top Collections</h2>
            </div>
            <div>
              <h3> See All</h3>
            </div>
          </div>
          <div className="carosole">
                  <Carousel
                    responsive={responsive}
                    arrows
                    autoPlay
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className=""
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite={true}
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    pauseOnHover
                    renderArrowsWhenDisabled={false}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    style={{borderRadius: '10px'}}
                  >
                    <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro1.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po2.jpeg"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Art Blocks</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img src="assets/images/caro2.jpeg"alt="img"className="img-fluid"/>
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po1.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Mutant Ape Yatch</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro3.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po3.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Meebits</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro4.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po4.png"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Board Ape Yatch</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro5.png"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
                <div className="card_txt d-flex justify-content-start align-items-center">
                  <img
                    src="assets/images/po5.jpeg"
                    className="img-fluid img_1 mx-1"
                    alt=""
                  />
                  <p className="mx-2">Otherdeed For</p>
                  <img
                    src="assets/images/pa1.svg"
                    className="img-fluid mx-1"
                    alt=""
                  />
                </div>
              </div>
                  </Carousel>
                </div>
          
          <div className="explore css-1juzciw" id="myHeader">
            <h2>Explore</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
