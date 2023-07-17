// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- VCAM CLASS --

/*
    This class follows a target on the game.
    It can follow any Sprite-Class object (and child classes like Player),
    however, it's configured mainly to follow player movement.
*/

// Set initial values for virtual camera position and
// its tracking speed.
let vCamX = 0;
let vCamY = 0;
let vCamSpeed = 0.05;

let joystick;

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- STARTING VCAM POSITION --

// Set starting camera position.
// It should be called on player coordinates to match position.
function setVCamStartingPos(x, y) {

    vCamX -= x;
    vCamY -= y;

    joystick = new Joystick(100, canvas.height - 200, 100, 100);
    joystick.setDefaultPos(100, canvas.height - 200);
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

addEventListener("touchstart", (e) => {

    joystick.x = e.offsetX - joystick.width / 2;
    joystick.y = e.offsetY - joystick.height / 2;
    joystick.active = true;
    
});

addEventListener("touchend", (e) => {

    joystick.x = joystick.defaultX;
    joystick.y = joystick.defaultY;
    joystick.active = false;
});

addEventListener("touchmove", (e) => {

    if (joystick.active) {

        joystick.x = e.offsetX - joystick.width / 2;
        joystick.y = e.offsetY - joystick.height / 2;
    }
});

// -- FOLLOW TARGET --

// Follow desired target.
function vCam(target) {

    // Match vCam central with target coordinates.
    let posX = (target.x - canvas.width / 2);
    let posY = (target.y - canvas.height / 2);

    // Create a delay effect.
    vCamX += (posX - vCamX) * vCamSpeed;
    vCamY += (posY - vCamY) * vCamSpeed;

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- UI --

    ctx.strokeStyle = "green";
    ctx.lineWidth = 2;
    ctx.strokeRect(joystick.x, joystick.y, joystick.width, joystick.height);
    ctx.fill();

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Apply vCam movement.
    ctx.translate(-vCamX, -vCamY);
}

// ---- ---- ---- ---- ---- ---- ---- ---- 