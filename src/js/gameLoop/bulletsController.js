// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- BULLETS CONTROLLER --

let bulletsArmy = [];
let isShooting = false;
let cooldown = 0;
let cooldownMaxTime = 30;
let mouseX;
let mouseY;

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- LISTENERS --

// Listener when user wants to shoot.
addEventListener("mousedown", (e) => {

    isShooting = true;
});

// Listener when player stops shooting.
addEventListener("mouseup", (e) => {

    isShooting = false;
});

// Get mouse direction to shoot.
addEventListener("mousemove", (e) => {

    mouseX = e.offsetX;
    mouseY = e.offsetY;
});

// Special attack using Space Bar.
addEventListener("keydown", (e) => {

    // Check if Space Bar was clicked.
    if (e.key === " ") {

        // Create default number of bullets per shoot and get angle vector.
        let nOfBulletsPerShot = 12;
        let x = mouseX - canvas.width / 2;
        let y = mouseY - canvas.height / 2;

        // Add all bullets to attack.
        for (let i = 0; i < nOfBulletsPerShot; i++) {

            // Shoot bullets in all directions.
            let angle = Math.atan2(y, x) + (Math.PI * 2 / nOfBulletsPerShot) * i;

            // Add bullet and push it to bulletsArmy.
            let bullet = new Bullet(player.x, player.y, 10, angle);
            bulletsArmy.push(bullet);
        }
    }
});

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- BULLETS CONTROLLER --

function bulletsController() {

    shootBullets();
    moveBullets();
    removeBullets();
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- SHOOT BULLETS --

function shootBullets() {

    // Reduce attack cooldown.
    cooldown--;

    // Check if player is clicking.
    if (isShooting) {

        // When cooldown equals 0, player can attack.
        if (cooldown <= 0) {

            // Reset cooldown for next attack.
            cooldown = cooldownMaxTime;

            // Get bullet angle vector.
            let x = mouseX - canvas.width / 2;
            let y = mouseY - canvas.height / 2;

            // Get angle and number of bullets per shoot.
            let fanAngle = Math.PI / 8;
            let nOfBulletsPerShot = 3;

            // Add all bullets.
            for (let i = 0; i < nOfBulletsPerShot; i++) {

                // Fan shooting.
                let angle = Math.atan2(y, x) - fanAngle / 2 + fanAngle / (nOfBulletsPerShot - 1) * i;

                // Add bullet and push it to bulletsArmy.
                let bullet = new Bullet(player.x, player.y, 10, angle);
                bulletsArmy.push(bullet);
            }
        }
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- MOVE BULLETS --

function moveBullets() {

    // Loop through all bullets and move them.
    bulletsArmy.forEach((bullet) => {

        // Move bullet.
        bullet.x += Math.cos(bullet.angle) * bullet.speed;
        bullet.y += Math.sin(bullet.angle) * bullet.speed;

        // Draw bullet.
        ctx.fillStyle = "red";
        ctx.beginPath();
        ctx.arc(bullet.x, bullet.y, bullet.radius, 0, Math.PI * 2);
        ctx.fill();
    });
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- REMOVE BULLETS --

function removeBullets() {

    // Loop through bulletsArmy in reverse.
    let i = bulletsArmy.length - 1;
    let bullet;

    while (i > - 1) {

        // Get bullet instance.
        bullet = bulletsArmy[i];

        // Reduce its flying time.
        bullet.flyingTime--;

        // When flying time equals 0, bullet must be destroyed.
        if (bullet.flyingTime <= 0) bullet.destroy = true;

        // Destroy bullet.
        if (bullet.destroy) bulletsArmy.splice(i, 1);

        i--;
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 