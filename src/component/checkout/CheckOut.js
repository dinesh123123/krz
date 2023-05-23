import Address from "../product-left-thumbnail/Address";
import Orderlist from "../order-success/Orderlist";
import React from "react";

import { useState, useEffect } from "react";

import axios from "axios";
import lottie from "lottie-web";
import { defineElement } from "lord-icon-element";
const CheckOut = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    getHomeData();
  }, []);

  const getHomeData = async () => {
    const userid = localStorage.getItem("useriid");

    const options = {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*",
      },
    };
    const data = JSON.stringify({
      userId: userid,
    });

    try {
      const res = await axios.post(
        "https://admin.krazeal.com/krazeal/api/address_list",
        data,
        options
      );
      setLists(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  defineElement(lottie.loadAnimation);
  return (
    <>
      {/* <Header/> */}
      <section className="checkout-section-2 section-b-space">
        <div className="container-fluid-lg">
          <div className="row g-sm-4 g-3">
            <div className="col-lg-8">
              <div className="left-sidebar-checkout">
                <div className="checkout-detail-box">
                  <ul>
                    <li>
                      <div className="checkout-icon">
                        <lord-icon
                          target=".nav-item"
                          src="https://cdn.lordicon.com/ggihhudh.json"
                          trigger="loop-on-hover"
                          colors="primary:#121331,secondary:#646e78,tertiary:#0baf9a"
                          className="lord-icon"
                        ></lord-icon>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Delivery Address</h4>
                        </div>
                        <div className="checkout-detail">
                          <div className="row g-4">
                            {lists.map((list) => {
                              return (
                                <div className="col-xxl-6 col-lg-12 col-md-6">
                                  <div className="delivery-address-box">
                                    <div>
                                      {/* <Order  onClick={(getHomeData) =>
                            localStorage.setItem(
                              "shipingiid",
                              list._id,
                              
                            )
                          }
                          style={{ width: "208px" }}
                          aria-hidden="true"
                          key={list.id}/> */}
                                      <li>
                                        <input
                                          onClick={() =>
                                            localStorage.setItem(
                                              "shipingid",
                                              list._id
                                            )
                                          }
                                          className="form-check-input"
                                          type="radio"
                                          name="jack"
                                          id="flexRadioDefault1"
                                        ></input>
                                      </li>
                                      <div className="label">
                                        <label>Home</label>
                                      </div>
                                      <ul className="delivery-address-detail">
                                        {/* <li>
                                      {list._id}
                                    </li> */}
                                        <li>
                                          <p className="text-content">
                                            <span className="text-title">
                                              Address :{" "}
                                            </span>
                                            {list.address}{" "}
                                          </p>
                                        </li>
                                        <li>
                                          <h6 className="text-content">
                                            <span className="text-title">
                                              Pin Code :
                                            </span>{" "}
                                            {list.pincode}
                                          </h6>
                                        </li>
                                        <li>
                                          <h6 className="text-content mb-0">
                                            <span className="text-title">
                                              City :
                                            </span>{" "}
                                            {list.city}
                                          </h6>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="checkout-icon">
                        <lord-icon
                          target=".nav-item"
                          src="https://cdn.lordicon.com/qmcsqnle.json"
                          trigger="loop-on-hover"
                          colors="primary:#0baf9a,secondary:#0baf9a"
                          className="lord-icon"
                        ></lord-icon>
                      </div>
                      <div className="checkout-box">
                        <div className="checkout-title">
                          <h4>Payment Option</h4>
                        </div>
                        <div className="checkout-detail">
                          <div
                            className="accordion accordion-flush custom-accordion"
                            id="accordionFlushExample"
                          >
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingFour"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseFour"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="cash"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="cash"
                                        defaultChecked
                                      />{" "}
                                      Cash On Delivery
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="accordion-item">
                              <div
                                className="accordion-header"
                                id="flush-headingOne"
                              >
                                <div
                                  className="accordion-button collapsed"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                >
                                  <div className="custom-form-check form-check mb-0">
                                    <label
                                      className="form-check-label"
                                      htmlFor="credit"
                                    >
                                      <input
                                        className="form-check-input mt-0"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="credit"
                                      />
                                      Online payment
                                    </label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <Orderlist />
          </div>
        </div>
      </section>
      {/* <Footer/> */}
    </>
  );
};

export default CheckOut;
