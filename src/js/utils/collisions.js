// ---- ---- ---- ---- ---- ---- ---- ---- 

// -- COLLISIONS --

class Collisions {

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- CIRCULAR COLLISION --

    static circularCollision(target1, target2) {

        let distX = target2.x - target1.x;
        let distY = target2.y - target1.y;

        let distance = Math.sqrt(distX * distX + distY * distY);

        if (distance <= target1.radius + target2.radius) {

            return true;

        } else {

            return false;
        }
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 

    // -- COLLISION BETWEEN MOUSE AND SPRITE --

    static spriteCollision(x, y, target) {

        
    }

    // ---- ---- ---- ---- ---- ---- ---- ---- 
}

// ---- ---- ---- ---- ---- ---- ---- ---- 