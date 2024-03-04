import * as Three from "three"
import debrisvs from "./glsl/debris.vs.glsl"
import debrisfs from "./glsl/debris.fs.glsl"

export default class Debris {
    constructor(x, y, z) {
        this.uniforms = {
            time: {
                type: 'f',
                value: 0
            },
            rotate: {
                type: 'f',
                value: Math.random() * 10
            }
        };
        this.obj = this.createObj();
        this.obj.position.set(x, y, z);
    }

    createObj() {
        return new Three.Mesh(
            new Three.BoxGeometry(100, 100, 100),
            new Three.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: debrisvs,
                fragmentShader: debrisfs,
                transparent: true,
                wireframe: true
            })
        )
    }

    render(time) {
        this.uniforms.time.value += time;
    }
}
