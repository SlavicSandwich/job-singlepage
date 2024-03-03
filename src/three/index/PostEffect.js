// const THREE = require('three');
import * as THREE from "three"
import postEffectvs from "./glsl/postEffect.vs"
import postEffectfs from "./glsl/postEffect.fs"


export default class PostEffect {
    constructor(texture) {
        this.uniforms = {
            time: {
                type: 'f',
                value: 0,
            },
            resolution: {
                type: 'v2',
                value: new THREE.Vector2(document.body.clientWidth, window.innerHeight),
            },
            texture: {
                type: 't',
                value: texture
            }
        };
        this.obj = this.createObj(texture);
        this.time = 1;
    }

    createObj() {
        return new THREE.Mesh(
            new THREE.PlaneGeometry(2, 2),
            new THREE.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: postEffectvs,
                fragmentShader: postEffectfs,
            })
        );
    }

    render(time) {
        this.uniforms.time.value += time * this.time;
    }

    resize() {
        this.uniforms.resolution.value.set(document.body.clientWidth, window.innerHeight);
    }
}
