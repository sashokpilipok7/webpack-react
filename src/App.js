import React from "react";
// import "tailwindcss/tailwind.css";
import "./App.scss";

import Logo from "./assets/images/Logo.svg";
import MainImage from "./assets/images/Main Image.jpg";

export function App() {
  const onImageClick = (e) => {
    console.log(e, "react senthetic event");
  };
  return (
    <div>
      Hello from App.js! <img src={Logo} />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img
          onClick={onImageClick}
          onClickCapture={onImageClick}
          src={MainImage}
        />
      </div>
    </div>
  );
}
