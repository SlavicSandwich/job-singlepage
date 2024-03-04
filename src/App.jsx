// import React, { useState } from "react";
import {Canvas} from "@react-three/fiber";
import {useEffect} from "react";
import wave from "./three/index/init.js"

const App = () => {
  // const [heading, setHeading] = useState("Magnificent Monkeys");

  // const clickHandler = () => {
  //   setHeading("Radical Rhinos");
  // };
  useEffect(wave, [])
  return (
    <>
      <canvas id={'canvas-webgl'}></canvas>
    </>
  );
};
export default App;
