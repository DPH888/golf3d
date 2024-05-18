function areColliding(Ax, Ay, Awidth, Aheight, Bx, By, Bwidth, Bheight) {
    return Bx <= Ax + Awidth && Ax <= Bx + Bwidth && By <= Ay + Aheight && Ay <= By + Bheight;
}

function randomInteger(upTo) {
    return Math.floor(Math.random() * upTo);
}

function drawLine(startX, startY, endX, endY) {
    engine.context2d.beginPath();
    engine.context2d.moveTo(startX, startY);
    engine.context2d.lineTo(endX, endY);
    engine.context2d.stroke();
}

function drawImage(myImageObject, x, y, xs, ys) {
    myImageObject.draw(x, y, xs, ys);
}

function isFunction(f) {
    return typeof f == "function";
}

function createButton(text, x, y, w, h, buttonCol, fontsize, textCol, font = "Arial") {
    const ctx = engine.context2d;
    // Create background
    ctx.fillStyle = buttonCol;
    ctx.fillRect(x, y, w, h);
    // Create text
    ctx.fillStyle = textCol;
    ctx.font = `${fontsize}px ${font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + w / 2, y + h / 2);
}

export { areColliding, randomInteger, drawLine, drawImage, isFunction, createButton };
