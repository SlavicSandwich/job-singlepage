import * as THREE from "three"
import {debounce} from "@ykob/js-util"
import SmoothScrollManager from "../smooth_scroll_manager/SmoothScrollManager.js";
import TitleObject from "./TitleObject.js";
import Ground from "./Ground";
import Debris from "./Debris";
import PostEffect from "./PostEffect";
import {gsap} from "gsap";

const abs = (value) => {
    if (value < 0) return -value
    else return value
}

function getVerticalScrollPercentage( elm ){
    var p = elm.parentNode
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight ) * 100
}

export default function () {
    const contents = document.querySelector('.js-contents');
    const dummyScroll = document.querySelector('.js-dummy-scroll');

    const canvas = document.getElementById('canvas-webgl');
    // canvas.getContext( 'webgl2' );
    const renderer = new THREE.WebGL1Renderer({
        antialias: false,
        canvas: canvas,
    });
    const renderBack = new THREE.WebGLRenderTarget(document.body.clientWidth, window.innerHeight);
    const scene = new THREE.Scene();
    const sceneBack = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    const cameraBack = new THREE.PerspectiveCamera(45, document.body.clientWidth / window.innerHeight, 1, 10000);
    const clock = new THREE.Clock();
    const scrollManager = new SmoothScrollManager(contents, dummyScroll, renderer);


    const titleObject = new TitleObject();
    // const skyOctahedron = new SkyOctahedron();
    // const skyOctahedronShell = new SkyOctahedronShell();
    const ground = new Ground();
    const debris = [
        new Debris(400, -500, 200),
        new Debris(-350, -600, -50),
        new Debris(-150, -700, -150),
        new Debris(-500, -800, 0),
        new Debris(100, -1100, 250),
        new Debris(-100, -1200, -300),
        new Debris(150, -1500, -100),
        new Debris(-800, -1900, -400),
        new Debris(-175, -2000, -200),
        new Debris(600, -1700, -1000),
        new Debris(400, -2100, -100),

    ];
    const postEffect = new PostEffect(renderBack.texture);

    // const elemIntro = document.getElementsByClassName('js-transition-intro');

    const resizeWindow = () => {
        canvas.width = document.body.clientWidth;
        canvas.height = window.innerHeight;
        cameraBack.aspect = document.body.clientWidth / window.innerHeight;
        cameraBack.updateProjectionMatrix();
        renderBack.setSize(document.body.clientWidth, window.innerHeight);
        renderer.setSize(document.body.clientWidth, window.innerHeight);
        postEffect.resize();
    }
    const render = () => {
        const time = clock.getDelta();
        titleObject.render(time);
        // skyOctahedron.render(time);
        // skyOctahedronShell.render(time);
        ground.render(time);
        for (var i = 0; i < debris.length; i++) {
            debris[i].render(time);
        }
        renderer.setRenderTarget(renderBack);
        renderer.render(sceneBack, cameraBack);
        postEffect.render(time);
        renderer.setRenderTarget(null);
        renderer.render(scene, camera);
    }
    const renderLoop = () => {
        render();
        requestAnimationFrame(renderLoop);
    }

    const on = () => {
        window.addEventListener('resize', debounce(() => {
            resizeWindow();
        }), 1000);
        scrollManager.renderNext = () => {
            console.log(getVerticalScrollPercentage(document.body))
            if (abs(cameraBack.position.y / window.innerHeight) < 0.31 &&
                sceneBack.background.r === 1 &&
                sceneBack.background.g === 1 &&
                sceneBack.background.b === 1) {
                gsap.to(sceneBack.background, {
                    duration: 1,
                    r: 0,
                    g: 0,
                    b: 0
                })
            }
            if (abs(cameraBack.position.y / window.innerHeight) > 0.31 &&
                sceneBack.background.r === 0 &&
                sceneBack.background.g === 0 &&
                sceneBack.background.b === 0) {
                gsap.to(sceneBack.background, {
                    duration: 1,
                    r: 1,
                    g: 1,
                    b: 1
                })
            }
            if (scrollManager.isValidSmooth()) {
                cameraBack.position.y = scrollManager.hookes.contents.velocity[1] * 0.6;
                // console.log(cameraBack.position.y)
                // console.log(cameraBack.position.y, window.innerHeight)
                // console.log(sceneBack.background)

            } else {
                // renderer.setClearColor(Math.floor(Math.random()*16777215))
                cameraBack.position.y = scrollManager.scrollTop * -1;
            }
        }
    }
    // const transitionOnload = () => {
    //   for (var i = 0; i < elemIntro.length; i++) {
    //     const elm = elemIntro[i];
    //     elm.classList.add('is-shown');
    //   }
    // }

    const init = () => {
        renderer.setSize(document.body.clientWidth, window.innerHeight);
        // renderer.setClearColor(0x000000, 1.0);
        sceneBack.background = new THREE.Color(0x000000);
        // console.log()
        cameraBack.position.z = 800;

        scene.add(postEffect.obj);
        titleObject.loadTexture(() => {
            sceneBack.add(titleObject.obj);
            // sceneBack.add(skyOctahedron.obj);
            // sceneBack.add(skyOctahedronShell.obj);
            sceneBack.add(ground.obj);
            for (var i = 0; i < debris.length; i++) {
                sceneBack.add(debris[i].obj);
            }
            // transitionOnload();
        });

        clock.start();

        on();
        resizeWindow();
        renderLoop();
        scrollManager.start();
    }
    init();
}
