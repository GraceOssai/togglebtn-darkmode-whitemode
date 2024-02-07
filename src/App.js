import "./App.css";
import { useState } from "react";
// import ToggleBtn from "./ToggleBtn";

function App() {
  const [bgColor, setBgColor] = useState("white");
  const [txtColor, setTxtColor] = useState('#1b1b1b')

  const handleClick = () => {
    setBgColor(bgColor === 'white' ? '#1a1a1a' : 'white')
    setTxtColor(txtColor === '#1b1b1b' ? '#ffa31a' : '#1b1b1b')
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      <button
        onClick={handleClick}
        style={{
          color: txtColor === "#1b1b1b" ? "" : "#ffa31a",
          padding: "10px 15px",
        }}
      >
        {bgColor === "white" ? "White mode" : "Dark mode"}
      </button>
      <h1 style={{ color: txtColor === "#1b1b1b" ? "#1a1a1a" : "white" }}>
        This is the text area
      </h1>
      {/* <ToggleBtn /> */}
    </div>
  );
}

export default App;
