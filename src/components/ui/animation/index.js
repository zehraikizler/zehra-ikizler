import React from "react";
import "./style.css";

function Animation() {
  return (
    <div className="relative w-screen h-screen">
      <div className="animation01">
        <div className="rhombus_small">
          <div className="rhombus">
            <div className="border_box">
              <span className="line line01"></span>
              <span className="line line02"></span>
              <span className="line line03"></span>
              <span className="line line04"></span>
              <span className="circle circle01"></span>
              <span className="circle circle02"></span>
              <span className="circle circle03"></span>
              <span className="circle circle04"></span>
              <span className="animation_line animation_line01"></span>
              <span className="animation_line_wrapper animation_line02_wrapper">
                <span className="animation_line animation_line02"></span>
              </span>
              <span className="animation_line animation_line03"></span>
              <span className="animation_line_wrapper animation_line04_wrapper">
                <span className="animation_line animation_line04"></span>
              </span>
              <span className="animation_line animation_line05"></span>
              <span className="animation_line_wrapper animation_line06_wrapper">
                <span className="animation_line animation_line06"></span>
              </span>
              <span className="animation_line animation_line07"></span>
              <span className="animation_line_wrapper animation_line08_wrapper">
                <span className="animation_line animation_line08"></span>
              </span>
            </div>
            <div className="wave">
              <div className="wave_wrapper">
                <div className="wave_box"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="animation02">
        <div class="rhombus_box">
          <span class="rhombus_item_wrapper rhombus_item01_wrapper">
            <span class="rhombus_item"></span>
          </span>
          <span class="rhombus_item_wrapper rhombus_item02_wrapper">
            <span class="rhombus_item"></span>
          </span>
        </div>
        <div class="double_content">
          <div class="double_wrapper02 dotted02">
            <div class="dotted_hide">
              <div class="double_wrapper01 dotted01">
                <span class="dotted_right"></span>
              </div>
            </div>
          </div>
          <div class="double_wrapper02 white02">
            <div class="double_wrapper01 white01"></div>
          </div>
          <div class="double_wrapper02 gray02">
            <div class="double_wrapper01 gray01"></div>
          </div>
          <div class="double_wrapper02 orange02">
            <div class="double_wrapper01 orange01"></div>
          </div>
        </div>
        <div class="name">
          <p>HELLO</p>
          <span class="name_circle01"></span>
          <span class="name_circle02"></span>
        </div>
      </div>
    </div>
  );
}

export default Animation;
