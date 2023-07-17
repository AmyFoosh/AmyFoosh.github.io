// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- RANDOM COLOR --

/*
    This class crates a random color for player and enemies.
*/

// Set player random color.
let r = Math.floor(Math.random() * 256);
let g = Math.floor(Math.random() * 256);
let b = Math.floor(Math.random() * 256);

// Add color.
let rgb = `rgb(${r},${g},${b})`;

function randomColor() {

    // Pick random color.
    r = Math.floor(Math.random() * 256);
    g = Math.floor(Math.random() * 256);
    b = Math.floor(Math.random() * 256);

    // Create RGB color.
    rgb = `rgb(${r},${g},${b})`;

    return rgb;
}

// ---- ---- ---- ---- ---- ---- ---- ---- 