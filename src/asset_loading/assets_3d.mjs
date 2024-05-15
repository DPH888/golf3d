import * as THREE from "three";
import { engine } from "../engine.mjs";
import { materials_data } from "./asset_config.mjs";

let skybox_texture = null;
class Skybox {
    constructor() {
        this.x = 0
        this.y = 0
        this.z = 0

        //Load texture
        skybox_texture = new THREE.TextureLoader().load('./images/SkyboxTexture.jpg')

        //Threejs setup
        this.geometry = new THREE.SphereGeometry(500, 32, 16)
        this.material = new THREE.MeshBasicMaterial({map: skybox_texture, side: THREE.BackSide, fog: false, })
        this.mesh = new THREE.Mesh( this.geometry, this.material);


        //Add to scene
        this.mesh.position.set(this.x, this.y, this.z)
        engine.scene.add(this.mesh)
    }
}

function RegisterNewMaterial(name, path, tilingx, tilingy, tint, metalness, roughness) {
    let _tex = new THREE.TextureLoader().load(path)
    _tex.wrapS = THREE.RepeatWrapping
    _tex.wrapT = THREE.RepeatWrapping
    _tex.repeat.set(tilingx, tilingy)
    if(metalness == undefined) metalness = 0;
    if(roughness == undefined) roughness = 0.8;
    materials[name] = new THREE.MeshStandardMaterial({color: tint, map: _tex, metalness: metalness, roughness: roughness})
}

function loadLiminalTextureLib() {
    for(let material of materials_data) {
        RegisterNewMaterial(material.name, material.path, material.tilingx, material.tilingy, material.tint, material.metalness, material.roughness);

    }
}
//simply use materials.xmaterial or materials["xmaterial"] and it will return a material for a three mesh
let materials = {}
export {Skybox, materials, loadLiminalTextureLib, skybox_texture}