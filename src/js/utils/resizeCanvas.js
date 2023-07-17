// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- RRESIZE SCREEN CLASS --

/* 
    This class resize canvas size when user
    changes browser screen size.
*/

// Add listener to resize canvas.
addEventListener("resize", (e) => {

    // Call resize function.
    resizeCanvas();
});

// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- MATCH CANVAS WITH BROWSER SIZE --

// Resize canvas to match device screen.
function resizeCanvas() {

    // Match canvas with browser screen.
    canvas.width = innerWidth;
    canvas.height = innerHeight;
}

// ---- ---- ---- ---- ---- ---- ---- ---- 