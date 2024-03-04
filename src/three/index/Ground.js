// const THREE = require('three');
// const { MathEx } = require('@ykob/js-util');
import * as Three from "three";
import {MathEx} from "@ykob/js-util";
import groundvs from "./glsl/ground.vs.glsl"
import groundfs from "./glsl/ground.fs.glsl"


export default class Ground {
    constructor() {
        this.uniforms = {
            time: {
                type: 'f',
                value: 0
            },
        };
        this.obj = this.createObj();
        this.obj.position.set(0, -200, 0);
        this.obj.rotation.set(MathEx.radians(-90), 0, 0);
    }

    createObj() {
        return new Three.Mesh(
            new Three.PlaneGeometry(1024, 1024, 32, 32),
            new Three.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: groundvs,
                fragmentShader: groundfs,
                transparent: true,
                wireframe: true
            })
        )
    }

    render(time) {
        this.uniforms.time.value += time;
    }
}
