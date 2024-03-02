// const THREE = require('three');
// const { MathEx } = require('@ykob/js-util');
import Three from "three";
import {MathEx} from "@ykob/js-util";
import * as groundvs from "./glsl/ground.fs"
import * as groundfs from "./glsl/ground.fs"


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
        vertexShader: groundvs.default,
        fragmentShader: groundfs.default,
        transparent: true,
        wireframe: true
      })
    )
  }
  render(time) {
    this.uniforms.time.value += time;
  }
}
