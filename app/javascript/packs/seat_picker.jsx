import React from "react";
import ReactDOM from "react-dom";
import App from "../components/seat_picker_c";



document.addEventListener('DOMContentLoaded', () => {
  const data = document.getElementById("root")  
  ReactDOM.render(<App />,data)
  })

// const mapa = document.getElementById("root");
// ReactDOM.render(App, mapa);
