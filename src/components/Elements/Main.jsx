import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { data } from "./data/Data";

const Main = () => {
 

  const navigate = useNavigate();
  const component = (user) =>
  {
    navigate("/overview", {state:user});
  }

  return (
    <>
      <div className="main ">
        <div className="container_fluid" >
          <div className=" d-flex flex-row justify-content-end css-1131l6h" >
            <div className="">
              
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
                    Most Relevant
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Recently Listed 
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Newest
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: Low to High
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Price: High to Low
                  </a>
                </li>
              </ul>
            </div>
            </div>
          </div>
          <div className="row mb-3" style={{margin: '0px'}}>
            {data.map((user) => {
                return(
            <div className="col-lg-3 col-md-6  col-12" >
            <div className="details mt-3">
            <div className="card" onClick={()=>
                    {
                        component(user)
                    }} style={{  cursor: 'pointer' }}>
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
