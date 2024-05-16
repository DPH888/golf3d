import * as THREE from "three";
import * as CANNON from "cannon-es";
import { engine } from "../engine.mjs";
class GolfHole {
    constructor(x, y, z, radiusTop, RadiusBottom, Height, RadialSegments, HightSegments) {
        const holeGeometry = new THREE.CylinderGeometry(radiusTop, RadiusBottom, Height, RadialSegments, HightSegments);
        const holeMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const hole = new THREE.Mesh(holeGeometry, holeMaterial);
        hole.position.set(x, y, z);
        engine.scene.add(hole);

        const groundMaterialPhysics = new CANNON.Material();
        groundMaterialPhysics.restitution = 0;
        var cylinderShape = new CANNON.Cylinder(radiusTop, RadiusBottom, Height, RadialSegments);
        var cylinderBody = new CANNON.Body({ mass: 0, material: groundMaterialPhysics });
        cylinderBody.addShape(cylinderShape);
        cylinderBody.position.set(x, y, z);
        console.log(cylinderBody.position, hole.position);
        cylinderBody.type = CANNON.Body.STATIC;
        engine.cannonjs_world.addBody(cylinderBody);
    }
}
export { GolfHole };