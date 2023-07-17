// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PLAYER PC CONTROLS --

/*
    This class allows player WASD/keyboard/mouse
    interaction when OS is Windows, Linux or Mac.
*/

// Create global variables for player movement.
function loadPCControlVariables() {

    // These global variables are to player movement on PC.
    window.moveUp = false;
    window.moveDown = false;
    window.moveLeft = false;
    window.moveRight = false;
}

// ---- ---- ---- ---- ---- ---- ---- ---- 

 // -- ENABLE PC CONTROLS FUNCTIONALITY --

// Enable player controls functionality.
function importPlayerPCControls() {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Initiate global variables.
    loadPCControlVariables();

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Add event to start player movement.
    addEventListener("keydown", (e) => {

        if (e.key === "w") moveUp = true;
        if (e.key === "s") moveDown = true;

        if (e.key === "a") moveLeft = true;
        if (e.key === "d") moveRight = true;
    });

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Add event to stop player movement.
    addEventListener("keyup", (e) => {

        if (e.key === "w") moveUp = false;
        if (e.key === "s") moveDown = false;

        if (e.key === "a") moveLeft = false;
        if (e.key === "d") moveRight = false;
    });
}

// ---- ---- ---- ---- ---- ---- ---- ---- 