// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- BULLETS CLASS --

/*  
    This class creates bullets instances on the game.
    It has properties related to bullet speed, flying time and
    boolean to destroy in case of collision.
*/

class Bullet extends Sprite {

    constructor(x, y, radius, angle) {

        super(x, y, radius);

        this.angle = angle;
        this.speed = 12;
        this.flyingTime = 30;
        this.destroy = false;
    }
}

// ---- ---- ---- ---- ---- ---- ---- ---- 