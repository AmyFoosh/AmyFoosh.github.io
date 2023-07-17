// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- INITIAL VARIABLES --

// Get access to Canvas and game CTX.
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");
let player = new Player(0, 0, 20, randomColor());

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- GAME LOOP --

function gameLoop() {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Clear canvas.
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- GAME FUNCTIONALITY HERE --

    // Follow player.
    vCam(player);
    // Call player behavior.
    playerController();
    // Call enemies behavior.
    enemyController();
    // Call collisions behavior.
    collisionsController();

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Refresh VCam.
    ctx.setTransform(1, 0, 0, 1, 0, 0);

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Call next frame.
    requestAnimationFrame(gameLoop);

    // ---- ---- ---- ---- ---- ---- ---- ---- 
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- START GAME LOOP --

// Call this to start gameLoop.
function startGameLoop() {

    console.log("Started Game Loop.");
    requestAnimationFrame(gameLoop);
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- STOP GAME LOOP --

// Call this to stop gameLoop.
function stopGameLoop() {

    console.log("Stopped Game Loop.");
    cancelAnimationFrame(gameLoop);
}

// ---- ---- ---- ---- ---- ---- ---- ---- 