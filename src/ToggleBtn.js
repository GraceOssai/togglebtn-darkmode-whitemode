import React, { useState } from "react";
import "./togglebtn.css";

const ToggleBtn = () => {
  const [bgColor, setBgColor] = useState("white");
  const [txtColor, setTxtColor] = useState("#1b1b1b");
  const [btnStyle, setBtnStyle] = useState("white");

  const handleClick = () => {
    setBgColor(bgColor === "white" ? "#1b1b1b" : "white");
    setTxtColor(txtColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
    setBtnStyle(bgColor === "white" ? "#1b1b1b" : "white");
  };
  return (
    <div>
      <section style={{ backgroundColor: bgColor, color: txtColor }}>
        <button
          onClick={handleClick}
          style={{ btnStyle, color: txtColor, border: "2px solid ${txtColor}" }}
        >
          {bgColor === '#1b1b1b' ? 'Black Theme' : 'White Theme'}
        </button>
        <section class="content">
          <h1>
            Welcome to a <br /> real world
          </h1>
        </section>
      </section>
    </div>
  );
};

export default ToggleBtn;
