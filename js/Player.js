class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { x: 10, y: 0 };
        this.jumping = false;
        this.jumpForce = 15
        //this.playerImage
        this.physics = { gravity: .4 , drag : .4}


        this.init()
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg


    }
    draw() {

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);

    }
    updatePhysics(keyUp, blocks) {

        console.log("is grounded = ",this.isGrounded(blocks));

        this.playerPos.y += this.playerSpeed.y;
        this.playerSpeed.y += this.physics.gravity;
        
        const collision = this.checkForCollision(blocks);

        if(collision.y){
            this.playerPos.y = collision.y;
            this.playerSpeed.y = 0;
        }
        if(collision.x){
            this.playerPos.x = collision.x;
            
        }
        //check if its on the ground
        //and set the speed to 0 and the pos to rigth place and jumnping to false
        //if not chech if there is a block on top to continue the sim or stop

        if (!keyUp && this.jumping && this.playerSpeed.y < 0) {
            this.jumping = false;
            this.playerSpeed.y *= 0.2;
        };

    }
    jump(blocks) {

        if(this.isGrounded(blocks)){
            this.playerPos.y -= 1;
            this.playerSpeed.y -= this.jumpForce;
            this.jumping = true;
        }
        
    }
    moveRight(blocks) {

        this.playerPos.x += this.playerSpeed.x;

    }
    moveLeft(blocks) {

        this.playerPos.x -= this.playerSpeed.x
    }
    //using a box casting to check if it colides with a block
    isGrounded(blocks) {
        let output = false;
        const boxCastLength = 5;
        const boxCast = {x:this.playerPos.x ,y:this.playerPos.y+this.playerSize.h, h:boxCastLength, w:this.playerSize.w};
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
        let output = { x: 0, y: 0 };
        for (const block of blocks) {
            //check if the player has colided with a block
            if (block.pos.x < this.playerPos.x + this.playerSize.w &&
                block.pos.x + block.size.w > this.playerPos.x &&
                block.pos.y < this.playerPos.y + this.playerSize.h &&
                block.size.h + block.pos.y > this.playerPos.y) {

                //return the closes cords to the currrent cords from the previous cords with out cliping
                //return 0 if the cords on x or y stay the same
                //compare in all the four directions to get the shortest path outside the block
                const outUp = - block.pos.y + this.playerPos.y + this.playerSize.h;
                const outDown = block.pos.y + block.size.h - this.playerPos.y;
                const outLeft = - block.pos.x + this.playerPos.x +this.playerSize.w;
                const outRight = block.pos.x + block.size.w - this.playerPos.x;

                //get the smaller one
                const min = Math.min(outUp,outDown,outLeft,outRight);
                //we get the max in case there are multiple collisions to get the furthest away that we need
                if(outUp === min){
                    output.y = Math.max(output.y, this.playerPos.y-outUp);
                }else if(outDown === min){
                    output.y = Math.max(output.y,this.playerPos.y+outDown)
                }else if(outLeft === min){
                    output.x = Math.max(output.x,this.playerPos.x-outLeft);
                }else if(outRight === min){
                    output.x = Math.max(output.x,this.playerPos.x+outRight);
                }
            
            }

        }
        return output;
    }

}