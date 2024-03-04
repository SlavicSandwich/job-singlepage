// const THREE = require('three');
import * as THREE from "three"
import titleObjectvs from "./glsl/titleObject.vs.glsl"
import titleObjectfs from "./glsl/titleObject.fs.glsl"

export default class TitleObject {
    constructor() {
        this.uniforms = {
            time: {
                type: 'f',
                value: 0
            },
            resolution: {
                type: 'v2',
                value: new THREE.Vector2()
            },
            texture: {
                type: 't',
                value: null
            }
        };
        this.obj;
        this.isLoaded = false;
    }

    loadTexture(callback) {
        const loader = new THREE.TextureLoader();
        loader.load('src/img/index/man.png', (texture) => {
            texture.magFilter = THREE.NearestFilter;
            texture.minFilter = THREE.NearestFilter;
            this.uniforms.texture.value = texture;
            this.obj = this.createObj();
            this.isLoaded = true;
            callback();
        });
    }

    createObj() {
        return new THREE.Mesh(
            new THREE.PlaneGeometry(256, 64, 40, 10),
            new THREE.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: titleObjectvs,
                fragmentShader: titleObjectfs,
                transparent: true,
            })
        )
    }

    render(time) {
        if (!this.isLoaded) return;
        this.uniforms.time.value += time;
    }
}
