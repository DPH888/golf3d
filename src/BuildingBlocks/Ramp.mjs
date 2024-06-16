// import * as THREE from "three";
// import * as CANNON from "cannon-es";
// import { engine } from "../engine.mjs";
// import { materials } from "../asset_loading/assets_3d.mjs";

// class Ramp {
//     constructor(x, y, z, width, dir, angle) {
//         // Block visual representation

//         var rampGeometry = new THREE.BoxGeometry(width, 1, width);
//         var borderGeometry = new THREE.BoxGeometry(width, 3, 2);

//         var cube = new THREE.Mesh(rampGeometry, materials.Grass);
//         var border1 = new THREE.Mesh(borderGeometry, materials.Wood);
//         var border2 = new THREE.Mesh(borderGeometry, materials.Wood);

//         border1.position.set(0, 0, 0 - width/2);
//         border2.position.set(0, 0, 0 + width/2);
//         cube.position.set(0, 0, 0);

//         // Групираме ги щото искаме да ги трансформираме само веднъж
//         let rampGroup = new THREE.Group();
//         rampGroup.add(cube, border1, border2);
//         rampGroup.rotation.y = dir;
//         rampGroup.rotation.z = angle;
//         rampGroup.position.set(x, y, z);
//         // cube.rotation.y = dir;
//         // cube.rotation.z = angle;
//         // border1.rotation.y = dir;
//         // border1.rotation.z = angle;
//         // border2.rotation.y = dir;
//         // border2.rotation.z = angle;

//         engine.scene.add(rampGroup);

//         // Block physics and collision detection
//         const groundMaterialPhysics = new CANNON.Material(); // Create a new material
//         groundMaterialPhysics.restitution = 0.5; // Set the restitution coefficient to 0.5 (adjust as needed)
//         var cubeShape = new CANNON.Box(new CANNON.Vec3(width/2, 1/2, width/2));
//         var borderShape = new CANNON.Box(new CANNON.Vec3(width/2, 1.5, 1));

//         var cubeBody = new CANNON.Body({ mass: 1000, material: groundMaterialPhysics});
//         var border1Body = new CANNON.Body({ mass: 1000, material: groundMaterialPhysics});


//         cubeBody.addShape(cubeShape);
//         border1Body.addShape(borderShape);


//         // Копираме позиция/ ротация от three.js групата
//         cubeBody.position.copy(rampGroup.position);
//         cubeBody.quaternion.copy(rampGroup.quaternion);
        
//         border1Body.position.copy(rampGroup.position);
//         border1Body.quaternion.copy(rampGroup.quaternion);

//         cubeBody.type = CANNON.Body.STATIC;
//         engine.cannonjs_world.addBody(cubeBody);
//     }
// }

// export {Ramp};

import * as THREE from "three";
import * as CANNON from "cannon-es";
import { engine } from "../engine.mjs";
import { materials } from "../asset_loading/assets_3d.mjs";

class Ramp {
    constructor(x, y, z, width, dir, angle) {
        // Create the Three.js objects
        var rampGeometry = new THREE.BoxGeometry(width, 1, width);
        var borderGeometry = new THREE.BoxGeometry(width, 3, 2);

        var cube = new THREE.Mesh(rampGeometry, materials.Grass);
        var border1 = new THREE.Mesh(borderGeometry, materials.Wood);
        var border2 = new THREE.Mesh(borderGeometry, materials.Wood);

        border1.position.set(0, 1, -width / 2); // Adjusted height for visual alignment
        border2.position.set(0, 1, width / 2);
        cube.position.set(0, 0, 0);

        // Group the objects for transformation
        let rampGroup = new THREE.Group();
        rampGroup.add(cube, border1, border2);
        rampGroup.rotation.y = dir;
        rampGroup.rotation.z = angle;
        rampGroup.position.set(x, y, z);

        engine.scene.add(rampGroup);

        // Create Cannon.js materials and shapes
        const groundMaterialPhysics = new CANNON.Material();
        groundMaterialPhysics.restitution = 0.5;

        var cubeShape = new CANNON.Box(new CANNON.Vec3(width / 2, 0.5, width / 2));
        var borderShape = new CANNON.Box(new CANNON.Vec3(width / 2, 1.5, 1));

        var cubeBody = new CANNON.Body({ mass: 0, material: groundMaterialPhysics });
        var border1Body = new CANNON.Body({ mass: 0, material: groundMaterialPhysics });
        var border2Body = new CANNON.Body({ mass: 0, material: groundMaterialPhysics });

        cubeBody.addShape(cubeShape);
        border1Body.addShape(borderShape);
        border2Body.addShape(borderShape);

        // Set positions and rotations
        cubeBody.position.copy(rampGroup.position);
        cubeBody.quaternion.copy(rampGroup.quaternion);

        border1Body.position.set(x, y + 1, z - width / 2);
        border1Body.quaternion.copy(rampGroup.quaternion);

        border2Body.position.set(x, y + 1, z + width / 2);
        border2Body.quaternion.copy(rampGroup.quaternion);

        // Set static body type
        cubeBody.type = CANNON.Body.STATIC;
        border1Body.type = CANNON.Body.STATIC;
        border2Body.type = CANNON.Body.STATIC;

        // Add bodies to the world
        engine.cannonjs_world.addBody(cubeBody);
        engine.cannonjs_world.addBody(border1Body);
        engine.cannonjs_world.addBody(border2Body);

        // Store for synchronization in the animation loop
        this.bodies = [cubeBody, border1Body, border2Body];
        this.meshGroup = rampGroup;
    }

    // Function to update the Cannon.js bodies
    updateBodies() {
        this.bodies.forEach(body => {
            body.position.copy(this.meshGroup.position);
            body.quaternion.copy(this.meshGroup.quaternion);
        });
    }
}

export { Ramp };
