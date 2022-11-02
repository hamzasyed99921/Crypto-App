import React from "react";
import { data } from "./data/Data";
const Main = () => {
  return (
    <>
      <div className="main ">
        <div className="container_fluid">
          <div className=" d-flex flex-row justify-content-end ">
            <div className="dropdown ">
              <button
                className="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort By
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row">
            {data.map((user) => {
                return(
            <div className="col-md-4 col-12">
            <div className="details mt-3">
            <div className="card" style={{ width: "19rem" }}>
              <img
                src={user.image}
                className="card-img-top"
                alt="..."
                style={{borderRadius: '15px 15px 0 0'}}
              />
              <div className="card-body">
                <div className="">
                  <span>
                    <img
                      src={user.imgRandom}
                      className="random_img"
                      alt=""
                    />
                  </span>
                  <small>{user.crypto}</small>
                  <img src="assets/images/pa1.svg" alt="" />
                </div>
                <h5 className="card-title mt-2">{user.title}</h5>
                <small className="botm_txt">{user.sale}</small>
                <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex small_txt justify-content-between align-items-center">
                        <p>{user.from}</p>
                        <p>{user.to}</p>
                    </div>
                    <div className="botn"><a href="#">{user.btn}</a></div>
                </div>
              </div>
            </div>
          </div>
            </div>

                )
            })}
           
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
