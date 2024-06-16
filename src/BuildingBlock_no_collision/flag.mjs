import * as THREE from "three";
import { engine } from "../engine.mjs";
import { materials } from "../asset_loading/assets_3d.mjs";

function flag(x,y,z){
    let poleHeight = 15
    let flagGroup = new THREE.Group();
    let poleGeom = new THREE.CylinderGeometry(1, 1, poleHeight, 10 );
    let poleMesh = new THREE.Mesh(poleGeom, materials.Metal1);
    poleMesh.position.set(25, poleHeight/2 ,0);
    flagGroup.add(poleMesh);

    let flagSGeom =  new THREE.PlaneGeometry( 7, 5 );

    materials.Flag.side = THREE.DoubleSide;
    let flagSMesh = new THREE.Mesh(flagSGeom, materials.Flag);
    flagSMesh.position.set(29, poleHeight-3,0);
    flagGroup.add(flagSMesh);


    flagGroup.position.set(x, y, z);
    engine.scene.add(flagGroup);
    return flagGroup;
}
export {flag};