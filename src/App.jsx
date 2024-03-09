// import React, { useState } from "react";
import {useEffect} from "react";
import wave from "./three/index/init.js"
import "./css/main.scss"
import Hero from "./components/hero/Hero.jsx"
import Main from "./components/main/Main.jsx"
import Footer from "./components/footer/Footer.jsx"

const App = () => {
    // const [heading, setHeading] = useState("Magnificent Monkeys");

    // const clickHandler = () => {
    //   setHeading("Radical Rhinos");
    // };
    useEffect(() =>{
        wave();
    }, [])
    return (
        <>
            <div>
                <div className={"l-contents js-contents"}>
                    <Hero/>
                    <Main/>
                    <Footer/>
                </div>
            </div>
            <p className={'relative z-1 js-dummy-scroll'}></p>
            <canvas className={"p-canvas-webgl"} id={'canvas-webgl'}></canvas>
        </>
    );
};
export default App;
