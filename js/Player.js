class Player {
    constructor(ctx, canvasSize, playerWidth, playerHeight) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.pos = {x:undefined, y:undefined};
        this.playerSize = { w: playerWidth, h: playerHeight };

        this.playerSpeed = { x: 0, y: 0 };
        this.jumping = false;
        this.jumpForce = 15;
        this.pushingForce = 3;
        this.physics = { gravity: .3, drag: .7 };
        //this.playerImage


        this.init();
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg

    }
    draw() {

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.pos.x, this.pos.y, this.playerSize.w, this.playerSize.h);

    }
    updatePhysics(keyUp, blocks) {
        
        this.pos.y += this.playerSpeed.y;
        this.playerSpeed.y += this.physics.gravity;
        this.playerSpeed.x *= this.physics.drag;
        this.pos.x += this.playerSpeed.x;
        
        const collision = this.checkForCollision(blocks);

        if(collision.y && this.playerSpeed.y >= 0){
            this.pos.y = collision.y;
            //this.playerSpeed.y *= -0.1; // bounce on land
            this.playerSpeed.y = 0;

        } else if (collision.y && this.playerSpeed.y < 0) {
            //bouncing on the ceilling
            this.pos.y = collision.y;
            this.playerSpeed.y *= -1;            
        }

        if (collision.x) {
            //bounce on walls
            this.pos.x = collision.x;
            this.playerSpeed.x *= -0.5;    
        }

        //console.log("x:",this.playerSpeed.x.toFixed(3)," y:",this.playerSpeed.y.toFixed(3))

        /*to stop upwards speed on  a jump when the up arrow key is released, check if the key is pressed, 
        if it is a player iniated jump and if the speed is going upwards,
        then set the jump variable to false to not get in this conditional again, and set the speed to 20%,
        the else if checks if the player has stopped going upwards to give it the ability to jump again
        */
        if (!keyUp && this.jumping && this.playerSpeed.y < 0) {
            this.jumping = false;
            this.playerSpeed.y *= 0.2;
        } else if (this.playerSpeed.y >= 0) {
            this.jumping = false
        }

    }
    jump(blocks) {
        //checking for jump before the funciton is gorunded is a good way to save on performance
        if(!this.jumping && this.isGrounded(blocks)){
            this.pos.y -= 1;
            this.playerSpeed.y -= this.jumpForce;
            this.jumping = true;
        }

    }
    moveRight() {

        this.playerSpeed.x += this.pushingForce;

    }
    moveLeft() {

        this.playerSpeed.x -= this.pushingForce;
    }
    //using a box casting to check if it colides with a block
    isGrounded(blocks) {
        const boxCastLength = 2;
        let output = false;
        const boxCast = {x:this.pos.x ,y:this.pos.y+this.playerSize.h, h:boxCastLength, w:this.playerSize.w};
        for (const block of blocks) {
            if (block.pos.x < boxCast.x + boxCast.w &&
                block.pos.x + block.size.w > boxCast.x &&
                block.pos.y < boxCast.y + boxCast.h &&
                block.size.h + block.pos.y > boxCast.y) {
                output = true;
                break;
            }
        }
        return output;
    }
    checkForCollision(blocks) {   
        let output = { x: null, y: null };
        for (const block of blocks) {
            //check if the player has colided with a block
            if (block.pos.x < this.pos.x + this.playerSize.w &&
                block.pos.x + block.size.w > this.pos.x &&
                block.pos.y < this.pos.y + this.playerSize.h &&
                block.size.h + block.pos.y > this.pos.y) {

                //return the closes cords to the currrent cords from the previous cords with out cliping
                //return 0 if the cords on x or y stay the same
                //compare in all the four directions to get the shortest path outside the block
                const outUp = - block.pos.y + this.pos.y + this.playerSize.h;
                const outDown = block.pos.y + block.size.h - this.pos.y;
                const outLeft = - block.pos.x + this.pos.x +this.playerSize.w;
                const outRight = block.pos.x + block.size.w - this.pos.x;

                //get the smaller one
                const min = Math.min(outUp, outDown, outLeft, outRight);
                //we get the max in case there are multiple collisions to get the furthest away that we need
                if(outUp === min){
                    output.y = Math.max(output.y, this.pos.y-outUp);
                }else if(outDown === min){
                    output.y = Math.max(output.y,this.pos.y+outDown);
                }else if(outLeft === min){
                    output.x = Math.max(output.x,this.pos.x-outLeft);
                }else if(outRight === min){
                    output.x = Math.max(output.x,this.pos.x+outRight);
                }

            }

        }
        return output;
    }
    isColliding(blocks){
        let output = false;
        for (const block of blocks) {
            //check if the player has colided with a block
            if (block.pos.x < this.pos.x + this.playerSize.w &&
                block.pos.x + block.size.w > this.pos.x &&
                block.pos.y < this.pos.y + this.playerSize.h &&
                block.size.h + block.pos.y > this.pos.y) {
                output = true;
                break;
            }

        }
        return output;
    }
    collidedWith(block){
        let output = false;
            if (block.pos.x < this.pos.x + this.playerSize.w &&
                block.pos.x + block.size.w > this.pos.x &&
                block.pos.y < this.pos.y + this.playerSize.h &&
                block.size.h + block.pos.y > this.pos.y) {
                output = true;
        }
        return output;
    }
    resetTo(newPos){
        this.pos = {...newPos};
        this.playerSpeed = { x: 0, y: 0 };
        this.jumping = false;
    }

}