import React, { useState, useEffect } from "react";

export default function ContactComp(props) {
  return (
    <>
      <center>
        {/* <h5>SOCIAL MEDAI</h5> */}
        <div className="row footer-icon" style={{paddingTop:"1rem"}}>
          <div className="col-3"></div>
          <div className="col-2">
            <a
              href="https://web.facebook.com/ufo4x4accessories"
              className="float-element"
              target="_back"
            >
              <i className="fab fa-facebook"></i>
              <p className="click-contact">(คลิก)</p>
            </a>
          </div>
          {/* <div className="col-2">
                                    <i className="fab fa-instagram social-footer-icon"></i>
                                </div> */}
          {/* <div className="col-2">
                                    <i className="fab fa-youtube social-footer-icon"></i>
                                </div> */}
          {/* <div className="col-2">
                                    <i className="fab fa-twitter social-footer-icon"></i>
                                </div> */}
          <div className="col-2">
            <a
              href="https://m.me/109283075234392"
              className="float-element"
              target="_back"
            >
              <i className="fab fa-facebook-messenger"></i>
              <p className="click-contact">(คลิก)</p>
            </a>
          </div>
          <div className="col-2">
            <a
              href="https://lin.ee/xdm4N6q"
              className="float-element"
              target="_back"
            >
              <i className="fab fa-line"></i>
              <p className="click-contact">(คลิก)</p>
            </a>
          </div>
          <div className="col-3"></div>
        </div>

        <h5 style={{ marginTop: "25px" }}>เพิ่มเติม</h5>

        <p style={{ marginBottom: "0px" }}>
          <i className="fas fa-mobile-alt"></i> : 098-4708144
        </p>
        <p>
          <i className="fas fa-envelope"></i> : ufo4x4accessories@gmail.com
        </p>
      </center>
    </>
  );
}
