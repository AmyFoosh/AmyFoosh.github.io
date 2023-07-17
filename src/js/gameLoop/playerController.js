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

    // Call PC movement if device is a PC.
    if (userDevice === "pc") {

        playerPCMovement();
    }

    // TODO: call mobile movement if device is a phone.
}

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

// -- DRAW PLAYER ON CANVAS --

// Draw player on canvas.
function drawPlayer() {

    ctx.fillStyle = player.color;
    ctx.beginPath();
    ctx.arc(player.x, player.y, player.radius, 0, Math.PI * 2);

    ctx.fill();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 