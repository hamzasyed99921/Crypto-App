import React from "react";
import { useNavigate } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { BsEyeFill } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";
import { FaShare } from "react-icons/fa";
import { RiShareBoxLine } from "react-icons/ri";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

const Overview = () => {  
    const navigate = useNavigate();
  const { state } = useLocation();
  const { image, imgRandom, crypto, title, sale, from, to, btn } = state;
  return (
    <>
      <div className="overview">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-12">
              <div className="left_img">
                <img src={image} className="img-fluid " alt="img" />
              </div>
              <div className="mt-4 img_botm">
                <a href="">View Crypto.org Chain details</a>
                <RiShareBoxLine style={{ cursor: "pointer" }} />
              </div>
            </div>
            <div className="col-md-7 col-12">
              <div className="back">
                <p onClick={() => navigate(-1)} style={{cursor: 'pointer'}}>
                 Back
                </p>
              </div>
              <div className="d-flex justify-content-between">
                <div
                  className="d-flex justify-content-evenly icons"
                  style={{ width: "40%" }}
                >
                  <span>
                    <BsHeart size={23} style={{ cursor: "pointer" }} />
                  </span>
                  <p>1172</p>
                  <span>
                    <BsEyeFill size={20} />
                  </span>
                  <p>15712</p>
                  <span>
                    <FaShare size={18} style={{ cursor: "pointer" }} />
                  </span>
                  <p>Share</p>
                </div>
                <BsThreeDots size={23} style={{ cursor: "pointer" }} />
              </div>
              <div className="d-flex mt-3 chain">
                <span>
                  Chain: <strong>Crypto.org Chain</strong>
                </span>
              </div>
              <div>
                <div className="d-flex justify-content- round_img">
                  <div className="d-flex mt-4 w-50">
                    <img
                      src="assets/images/logo.jpeg"
                      className="img-fluid  "
                      alt=""
                    />
                    <div className="round_txt ms-2">
                      <span className="small">Creator</span>
                      <br />
                      <span className="botm_txt">Crypto.com</span>
                    </div>
                  </div>
                  <div className="d-flex mt-4 w-50">
                    <img
                      src={imgRandom}
                      className="img-fluid w-25 ms-5"
                      alt=""
                    />
                    <div className="round_txt ms-2">
                      <span className="small">Collection</span>
                      <br />
                      <span className="botm_txt">{crypto}</span>
                    </div>
                  </div>
                </div>
                <h2 className="mt-5">3928 Editions Minted</h2>
                <div className="d-flex align-items-center title">
                  <h3>{title}</h3>
                  <span className="ms-3">Marketplace</span>
                </div>
                <h4 className="mt-3">Accepting Offers</h4>
                <p className="para">
                  It’s Crypto.com’s 6th birthday and Monsieur Lionne has baked a
                  few cakes that are just out of this world!
                </p>
                <a href="#" className="me-2">
                  Art
                </a>
                <a href="#">Crypto</a>
              </div>
              <div className="d-flex align-items-center mt-5">
                <div className=" arrow mt-5">
                  <MdKeyboardArrowUp size={20} className="up" />
                  <MdKeyboardArrowDown size={20} className="down" />
                </div>
                <div className="d-flex edition justify-content-between mt-5 align-items-center">
                  <p className="">Edition #981</p>
                  <a href="#" className="">
                    Select Edition
                  </a>
                </div>
              </div>
              <div className="list">
                <ul className="d-flex justify-content-evenly w-50 mt-4">
                  <li>Ownership</li>
                  <li>History</li>
                  <li>Offers</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div
              className="BuyEditionContainer_baseContainer__8fyxA"
            >
              <div className="d-flex BuyEditionContainer_assetContainer__8woNY css-33gphr">
                    <img src={image} className='img-fluid ' style={{width: '10%'}} alt="" />
                <div className="ms-3 BuyEditionContainer_assetInformation__W965G css-1rt1idp">
                  <div className="text">Edition 981 of 5000</div>
                  <div className="BuyEditionContainer_assetName__wM9jU css-10a3ax5">
                    <div className="title_name">{title}</div>
                  </div>
                </div>
              </div>
              <div className="css-6el5gu">
                <div className="buton">
                  <button type="button" className="btn">
                    Make an Offer
                  </button>
                </div>
                <div className="css-o3k3g8">
                  <span className="BuyEditionContainer_royalty__tnMA4">
                    <div
                      data-test-id="action-button-bar-royalties-message"
                      className="small_txt"
                    >
                      A 2% royalty goes to the creator for future resale
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Overview;
