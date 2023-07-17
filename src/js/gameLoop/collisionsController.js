// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- COLLISIONS CONTROLLER --

/*
    This class manages every collision between any game object element.
*/

// Global collision controller.
function collisionsController() {

    checkPlayerAndEnemiesCollisions();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PLAYER AND ENEMIES COLLISIONS --

function checkPlayerAndEnemiesCollisions() {

    // Check collision between player and every enemy.
    enemyArmy.forEach((enemy) => {

        // If there is a collision, set the enemy to destroy it.
        if (Collisions.circularCollision(player, enemy)) {

            enemy.destroy = true;
        }
    });
}

// ---- ---- ---- ---- ---- ---- ---- ----

// ---- ---- ---- ---- ---- ---- ---- ---- 