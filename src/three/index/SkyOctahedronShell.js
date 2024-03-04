// const THREE = require('three');
import * as THREE from "three"
import OctahedronShellvs from "./glsl/skyOctahedronShell.vs.glsl"
import OctahedronShellfs from "./glsl/skyOctahedronShell.fs.glsl"


export default class SkyOctahedronShell {
    constructor() {
        this.uniforms = {
            time: {
                type: 'f',
                value: 0
            },
        };
        this.obj = this.createObj();
    }

    createObj() {
        const geometry = new THREE.OctahedronGeometry(150, 20);
        return new THREE.Mesh(
            geometry,
            new THREE.RawShaderMaterial({
                uniforms: this.uniforms,
                vertexShader: OctahedronShellvs,
                fragmentShader: OctahedronShellfs,
                transparent: true,
                side: THREE.DoubleSide,
                depthWrite: false
            })
        )
    }

    render(time) {
        this.uniforms.time.value += time;
    }
}
