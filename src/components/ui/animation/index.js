import React from "react";
import "./style.css";

function Animation() {
  return (
    <div className="relative w-screen h-screen z-0 overflow-x-hidden">
      <div className="animation02">
        <div className="rhombus_box">
          <span className="rhombus_item_wrapper rhombus_item01_wrapper">
            <span className="rhombus_item"></span>
          </span>
          <span className="rhombus_item_wrapper rhombus_item02_wrapper">
            <span className="rhombus_item"></span>
          </span>
        </div>
        <div className="double_content">
          <div className="double_wrapper02 dotted02">
            <div className="dotted_hide">
              <div className="double_wrapper01 dotted01">
                <span className="dotted_right"></span>
              </div>
            </div>
          </div>
          <div className="double_wrapper02 white02">
            <div className="double_wrapper01 white01"></div>
          </div>
          <div className="double_wrapper02 gray02">
            <div className="double_wrapper01 gray01"></div>
          </div>
          <div className="double_wrapper02 orange02">
            <div className="double_wrapper01 orange01"></div>
          </div>
        </div>
        <div className="name">
          <p>HELLO</p>
          <span className="name_circle01"></span>
          <span className="name_circle02"></span>
        </div>
      </div>
    </div>
  );
}

export default Animation;
