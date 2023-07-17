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

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- STARTING VCAM POSITION --

// Set starting camera position.
// It should be called on player coordinates to match position.
function setVCamStartingPos(x, y) {

    vCamX -= x;
    vCamY -= y;
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- FOLLOW TARGET --

// Follow desired target.
function vCam(target) {

    // Match vCam central with target coordinates.
    let posX = (target.x - canvas.width / 2);
    let posY = (target.y - canvas.height / 2);

    // Create a delay effect.
    vCamX += (posX - vCamX) * vCamSpeed;
    vCamY += (posY - vCamY) * vCamSpeed;

    // Apply vCam movement.
    ctx.translate(-vCamX, -vCamY);
}

// ---- ---- ---- ---- ---- ---- ---- ---- 