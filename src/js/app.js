// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- MAIN CLASS TO START GAME --

/*
    This class is the core for the entire game.
    It loads all the game behavior and configuration scripts.
*/

// Wait until HTML is fully loaded.
addEventListener("DOMContentLoaded", (e) => {

    // Get user OS and Load player controls.
    getOS();

    // Call resize canvas to match device screen for the first time.
    resizeCanvas();

    // Set starting canvas position to match player position.
    setVCamStartingPos(canvas.width / 2, canvas.height / 2);

    // Start game loop and enable game display.
    startGameLoop();
});

// ---- ---- ---- ---- ---- ---- ---- ---- 