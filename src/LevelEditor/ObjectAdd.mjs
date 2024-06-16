import { BuildingBlock } from '../BuildingBlocks/BuildingBlock.mjs';
import { Cylinder } from '../BuildingBlocks/Cylinder.mjs';
import { GolfHole } from '../BuildingBlocks/GolfHole.mjs';
// import { Iceblock } from '../BuildingBlocks/Iceblock.mjs';
import { MovingPlatform } from '../BuildingBlocks/MovingPlatform.mjs';
import { createBall } from '../ball.mjs';
import { Ramp } from '../BuildingBlocks/Ramp.mjs';
let objDimentions = [];

async function AddObj(obj) {
    const { x, y, z, w, h, d, t } = obj;

    if (t == 'Cube')
        new BuildingBlock(x, y, z, w, h, d);
    else if (t == 'Cylinder')
        new Cylinder(x, y, z, w, h, d);
    else if (t == 'Ramp')
        new Ramp(x, y, z, w, h, d);
    else if (t == 'Moving platform')
        new MovingPlatform(x, y, z, w, h, d, 1500, 200);
    else if (t == 'Hole')
        new GolfHole(x, y, z, w, h, d);
    else if (t == 'Ball')
        createBall(x, y, z);
}

function UIAddObj() {
    const popup = document.createElement('div');
    const addBtn = document.createElement('button');
    const xInput = document.createElement('input');
    const yInput = document.createElement('input');
    const zInput = document.createElement('input');
    const wInput = document.createElement('input');
    const hInput = document.createElement('input');
    const dInput = document.createElement('input');
    const select = document.createElement('select');
    const opt1 = document.createElement('option');
    const opt2 = document.createElement('option');
    const opt3 = document.createElement('option');
    const opt4 = document.createElement('option');
    const opt5 = document.createElement('option');
    const opt6 = document.createElement('option');
    const opt7 = document.createElement('option');

    popup.textContent = 'Choose the object you want to add:';
    popup.style.position = 'absolute';
    popup.style.right = '0px';
    popup.style.top = '300px';
    popup.style.display = 'flex';
    popup.style.flexDirection = 'column';
    document.body.appendChild(popup);

    popup.appendChild(select);
    select.style.padding = '10px';
    select.style.borderRadius = '10px';
    select.id = 'objectSelect'
    opt1.textContent = 'Nothing';
    opt2.textContent = 'Cube';
    opt3.textContent = 'Cylinder';
    opt4.textContent = 'Ramp';
    opt5.textContent = 'Hole';
    opt6.textContent = 'Moving platform';
    opt7.textContent = 'Ball';
    select.appendChild(opt1);
    select.appendChild(opt2);
    select.appendChild(opt3);
    select.appendChild(opt4);
    select.appendChild(opt5);
    select.appendChild(opt6);
    select.appendChild(opt7);

    popup.appendChild(xInput);
    popup.appendChild(yInput);
    popup.appendChild(zInput);
    popup.appendChild(wInput);
    popup.appendChild(hInput);
    popup.appendChild(dInput);

    xInput.placeholder = 'X:';
    yInput.placeholder = 'Y:';
    zInput.placeholder = 'Z:';
    wInput.placeholder = 'Width:';
    hInput.placeholder = 'Height:';
    dInput.placeholder = 'Depth:';

    xInput.style.padding = '10px';
    yInput.style.padding = '10px';
    zInput.style.padding = '10px';
    wInput.style.padding = '10px';
    hInput.style.padding = '10px';
    dInput.style.padding = '10px';

    xInput.style.borderRadius = '10px';
    yInput.style.borderRadius = '10px';
    zInput.style.borderRadius = '10px';
    wInput.style.borderRadius = '10px';
    hInput.style.borderRadius = '10px';
    dInput.style.borderRadius = '10px';

    popup.appendChild(addBtn);
    addBtn.textContent = 'Add Object';
    addBtn.style.borderRadius = '10px';
    addBtn.style.border = '0px';
    addBtn.style.borderBottom = '2px solid black';
    addBtn.style.cursor = 'pointer';
    addBtn.style.padding = '10px';
    addBtn.style.backgroundColor = "rgb(78, 188, 124)";

    addBtn.onclick = async () => {
        const newObj = {
            x: parseFloat(xInput.value),
            y: parseFloat(yInput.value),
            z: parseFloat(zInput.value),
            w: parseFloat(wInput.value),
            h: parseFloat(hInput.value),
            d: parseFloat(dInput.value),
            t: select.value,
        };

        objDimentions.push(newObj);
        AddObj(newObj);

        // CORS error
        // const { data, error } = await supabase
        //     .from('obj_dimensions')
        //     .insert([newObj])
        //     .select();

        // if (error) {
        //     console.error('Error inserting data: ', error);
        // } else {
        //     console.log('Data inserted successfully: ', data);
        //     if (data && data.length > 0) {
        //         const insertedId = data[0].id;
        //         AddObj(insertedId);
        //     }
        // }
    };

    // UIOM()
}

export { UIAddObj, objDimentions };