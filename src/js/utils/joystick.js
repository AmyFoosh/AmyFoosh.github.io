// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- JOYSTICK CLASS --

class Joystick extends Sprite {

    constructor(x, y, width, height) {

        super(x, y, width, height);
        this.active = false;
    }

    setDefaultPos(x, y) {

        this.defaultX = x;
        this.defaultY = y;
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 