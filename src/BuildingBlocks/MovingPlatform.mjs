import * as THREE from "three.js";
import * as CANNON from "cannon-es";
import { engine } from "../engine.mjs";

/*
x1,y1,z1 - where the platform initially is
x2,y2,z2 - where the platform moves to
timeToStay - time at which the platform stays at any of the end points (ms)
timeToTravel - time which the platform takes to go from position 1 to position 2 (should be ms but just isnt)
*/ 

class MovingPlatform{
    constructor(x1, y1, z1, x2, y2, z2, width, height, depth, timeToStay = 1500, timeToTravel = 200) {
        // Block visual representation
        var geometry = new THREE.BoxGeometry(width, height, depth);
        var material = new THREE.MeshPhongMaterial({ color: 0x00ff00 });
        var cube = new THREE.Mesh(geometry, material);
        cube.position.set(x1, y1, z1);
        engine.scene.add(cube);
        this.Mesh = cube; //This is needed to be able to manipulate the mesh of the platform later on

        // Block physics and collision detection
        const groundMaterialPhysics = new CANNON.Material(); // Create a new material
        groundMaterialPhysics.restitution = 0.5; // Set the restitution coefficient to 0.5 (adjust as needed)
        groundMaterialPhysics.friction = 1;
        var cubeShape = new CANNON.Box(new CANNON.Vec3(width/2, height/2, depth/2));
        var cubeBody = new CANNON.Body({ mass: 1000, material: groundMaterialPhysics});
        cubeBody.addShape(cubeShape);
        cubeBody.position.set(x1, y1, z1);
        cubeBody.type = CANNON.Body.STATIC;
        engine.cannonjs_world.addBody(cubeBody);
        this.Box = cubeBody; //This is needed so we can manipulate the collision box of the moving object

        //This is needed to know where and how to move the platform later on
        this.xDiff = x1 - x2;
        this.yDiff = y1 - y2;
        this.zDiff = z1 - z2;
        this.tts = timeToStay;
        this.ttt = timeToTravel;
        this.timePassed = 0;
        this.movingToSecondPosition = true;
        this.movingInterval = setInterval(() => {
            this.move();
        }, 1);
    }
    move(){
        if(this.timePassed >= this.ttt){
            this.movingToSecondPosition = !this.movingToSecondPosition;
            clearInterval(this.movingInterval);
            this.timePassed = 0;
            setTimeout(() => { this.movingInterval = setInterval(() => { this.move() }, 1) }, this.tts);
        }
        if(this.movingToSecondPosition){
            this.Mesh.position.set(this.Mesh.position.x-(this.xDiff/this.ttt),
                                   this.Mesh.position.y-(this.yDiff/this.ttt),
                                   this.Mesh.position.z-(this.zDiff/this.ttt)
                                   );
            this.Box.position.set(this.Box.position.x-(this.xDiff/this.ttt),
                                   this.Box.position.y-(this.yDiff/this.ttt),
                                   this.Box.position.z-(this.zDiff/this.ttt)
                                 );
        }else{
            this.Mesh.position.set(this.Mesh.position.x+(this.xDiff/this.ttt),
                                   this.Mesh.position.y+(this.yDiff/this.ttt),
                                   this.Mesh.position.z+(this.zDiff/this.ttt)
                                   );
            this.Box.position.set(this.Box.position.x+(this.xDiff/this.ttt),
                                   this.Box.position.y+(this.yDiff/this.ttt),
                                   this.Box.position.z+(this.zDiff/this.ttt)
                                 );
        }
        this.timePassed++;
    }
}
export {MovingPlatform}