import React, { useState } from "react";
import axios from "axios";
import anime from "animejs/lib/anime.es.js";
import Footer from "./Footer.js";

import "./Advice.css";

export default function Advice() {
  anime({
    targets: ".advice-shown",
    rotate: [0, 360],
    duration: 1000,
  });

  const [advice, setAdvice] = useState("Believe in yourself...");

  function handleResponse(response) {
    return setAdvice(response.data.slip.advice);
  }

  function handleClick() {
    let apiUrl = `https://api.adviceslip.com/advice`;
    axios.get(apiUrl).then(handleResponse);
  }

  function showAdvice(e) {
    e.preventDefault();
    handleClick();
  }

  return (
    <div className='container'>
      <div className='box'>
        <h1>Need a few words of advice?</h1>
        <h3 className='subtitle'>Advice generator with Adviceslip API</h3>
        <div className='advice-shown' onChange={showAdvice}>
          {advice}
        </div>
        <button onClick={showAdvice} value='Press'>
          Any thoughts?
        </button>
        <Footer />
      </div>{" "}
    </div>
  );
}
