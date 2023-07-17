// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- ENEMY CONTROLLER --

/*
    This class allows enemy interaction on the game.
    It uses Enemy class and this is called on gameLoop 
    to enable functionality.
*/

// Array to store enemies.
let enemyArmy = [];

// Call enemy behavior.
function enemyController() {

    spawnEnemy();
    enemyMovement();
    removeEnemies();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- SPAWN ENEMY --

// Create a new enemy on random location.
function spawnEnemy() {

    if (Math.random() < 0.5) {

        let posX = (player.x - canvas.width / 2) + Math.random() * canvas.width;
        let posY = (player.y - canvas.height / 2) + Math.random() * canvas.height;

        let enemySize = 5 + Math.random() * 10;

        let enemy = new Enemy(posX, posY, enemySize);
        enemyArmy.push(enemy);
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- ENEMY MOVEMENT --

// Move all enemies.
function enemyMovement() {

    enemyArmy.forEach((enemy) => {

        enemy.move(player);
    });
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- REMOVE ENEMIES --

// Remove enemy when it hits the player.
function removeEnemies() {

    // Get enemy army length.
    let i = enemyArmy.length - 1;

    // Loop through enemy army array.
    while (i > - 1) {

        // Get acces to enemy.
        let enemy = enemyArmy[i];

        // If enemy has collided with player, dstroy it.
        if (enemy.destroy) {

            // Remove it from array.
            enemyArmy.splice(i, 1);
        }

        i--;
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 