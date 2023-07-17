// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- PLAYER CLASS --

/*
    This class creates a player instance, allowing it
    to move across the game and draw it.
 */

class Player extends Sprite {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // Initial values for X, Y and player radius size.
    constructor(x, y, radius, color) {

        // Get access to Sprite constructor and variables.
        super(x, y);

        this.radius = radius;

        this.color = color;

        // Set variables for player movement speed.
        this.movementSpeedCurrent = 0;
        this.movementSpeedMax = 4;
        this.movementSpeedIncrement = 0.1;
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- MOVE --

    // Increase current player speed when moving for a delay effect.
    move() {

        // Increase current movement speed.
        this.movementSpeedCurrent += this.movementSpeedIncrement;

        // Check if current speed overpass max speed allowed.
        if (this.movementSpeedCurrent > this.movementSpeedMax) {

            // Set current movement speed equals to max speed if overpass it.
            this.movementSpeedCurrent = this.movementSpeedMax;
        }
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- UNMOVE --

    // Reduce current player speed when is not moving.
    unmove() {

        // If movement speed is 0, don't reduce it.
        if (this.movementSpeedCurrent === 0) return;

        // Reduce current player speed.
        this.movementSpeedCurrent -= this.movementSpeedIncrement;

        // Check if current movement speed is lower than 0.
        if (this.movementSpeedCurrent < 0) {

            // Set current movement speed equals to 0 if is lower than 0.
            this.movementSpeedCurrent = 0;
        }
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 

}

// ---- ---- ---- ---- ---- ---- ---- ---- 