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
    return typeof (f) == "function";
}

function drawText(text, x, y, fontsize = 16, textCol = "black", font = "Arial") {
    const ctx = engine.context2d;
    ctx.fillStyle = textCol;
    ctx.font = `${fontsize}px ${font}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText(text, x, y);
}

function createButton(text, x, y, w, h, buttonCol, fontsize, textCol, borderRadius = 10, font = "Arial") {
    const ctx = engine.context2d;
    ctx.fillStyle = buttonCol;
    ctx.beginPath();
    ctx.moveTo(x + borderRadius, y);
    ctx.lineTo(x + w - borderRadius, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + borderRadius);
    ctx.lineTo(x + w, y + h - borderRadius);
    ctx.quadraticCurveTo(x + w, y + h, x + w - borderRadius, y + h);
    ctx.lineTo(x + borderRadius, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - borderRadius);
    ctx.lineTo(x, y + borderRadius);
    ctx.quadraticCurveTo(x, y, x + borderRadius, y);
    ctx.closePath();
    ctx.fill();
    
    ctx.fillStyle = textCol;
    ctx.font = `${fontsize}px ${font}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + w / 2, y + h / 2);
}

export { areColliding, randomInteger, drawLine, drawImage, isFunction, createButton, drawText };
