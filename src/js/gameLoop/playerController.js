// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PLAYER CONTROLLER --

/*
    This class allows player interaction on the game.
    It uses Player class and this is called on gameLoop 
    to enable functionality.
*/

// Calls player interaction on gameLoop.
function playerController() {

    playerMovement();
    drawPlayer();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PLAYER MOVEMENT --

// This class allows player movement across canvas.
function playerMovement() {

    if (userDevice === "pc") playerPCMovement();
    if (userDevice === "mobile") playerMobileMovement();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PC MOVEMENT --

function playerPCMovement() {

    // Get player current speed.
    let speed = player.movementSpeedCurrent;

    // Check if player is moving.
    if (moveUp || moveDown || moveLeft || moveRight) {

        // Increase current player speed.
        player.move();

        // Check diagonal speed if player is pressing
        // two keys at the same time.
        if ((moveUp || moveDown) && (moveLeft || moveRight)) {

            // Calculate diagonal speed.
            speed *= Math.sqrt(2) / 2;
        }

        // Move player based on its current speed.
        if (moveUp) player.y -= speed;
        if (moveDown) player.y += speed;
        if (moveLeft) player.x -= speed;
        if (moveRight) player.x += speed;

    } else {

        // Reduce current player speed when is not moving.
        player.unmove();
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- MOBILE MOVEMENT --

function playerMobileMovement() {

    if (joystick.active) {

        player.move();

        let dirX = joystick.defaultX - joystick.x;
        let dirY = joystick.defaultY - joystick.y;

        let angle = Math.atan2(dirY, dirX);

        player.x -= Math.cos(angle) * player.movementSpeedCurrent;
        player.y -= Math.sin(angle) * player.movementSpeedCurrent;

    } else {

        player.unmove();
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- DRAW PLAYER ON CANVAS --

// Draw player on canvas.
function drawPlayer() {

    // Draw player.
    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);

    ctx.fill();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 