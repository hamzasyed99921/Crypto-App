import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero_bg">
        <div className="container-fluid">
          <div className="d-flex text-white justify-content-between mb-4 align-items-center">
            <div>
              <h2>Top Collections</h2>
            </div>
            <div>
              <h3> See All</h3>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
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
                    src="assets/images/po1.png"
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
            </div>

            <div>
              <div
                className="card position-relative"
                style={{ width: "14rem", height: "14rem" }}
              >
                <div className="card-body">
                  <img
                    src="assets/images/caro2.jpeg"
                    alt="img"
                    className="img-fluid"
                  />
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
            </div>
            <div>
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
                    src="assets/images/po1.png"
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
            </div>
            <div>
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
                    src="assets/images/po1.png"
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
            </div>
            <div>
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
                    src="assets/images/po1.png"
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
            </div>
          </div>
          <div className="explore">
            <h2>Explore</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
