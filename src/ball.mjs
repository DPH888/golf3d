import { engine } from "./engine.mjs";
import * as CANNON from "cannon-es";
import * as THREE from "three";
import { materials } from "./asset_loading/assets_3d.mjs";
let ballMesh, ballBody;

function createBall(x, y, z) {
    // Ball
    const ballMaterialPhysics = new CANNON.Material(); // Create a new material
    ballMaterialPhysics.friction = 1;
    ballMaterialPhysics.restitution = 1.3;
    const ballShape = new CANNON.Sphere(1);
    ballBody = new CANNON.Body({
      mass: 5,
      position: new CANNON.Vec3(x, y, z),
      shape: ballShape,
      material: ballMaterialPhysics,
    });
  
    ballBody.linearDamping = 0.5;
  
    engine.cannonjs_world.addBody(ballBody);
    const ballGeometry = new THREE.SphereGeometry(1, 32, 32);
    
    // It is golf. The ball must be white
    const ballMaterial = new THREE.MeshPhongMaterial({ color: 0xffffff });
    ballMesh = new THREE.Mesh(ballGeometry, materials.GolfBall);

    window.ballMesh = ballMesh;
    window.ballBody = ballBody;

    ballMesh.position.set(x, y, z);
    engine.scene.add(ballMesh);
}
function deleteBall() {
    // Remove mesh from scene
    engine.scene.remove(ballMesh);
    // Remove body from world
    engine.cannonjs_world.removeBody(ballBody);
  }
  
  export { createBall, deleteBall, ballMesh, ballBody };
