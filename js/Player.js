class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { x: 10, y: 0 };
        this.previousPos = { x: undefined, y: undefined }
        this.jumping = false;
        this.jumpForce = 15
        //this.playerImage
        this.physics = { gravity: .4 }


        this.init()
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg


    }
    updatePhysics(keyUp, blocks) {
        this.playerPos.y += this.playerSpeed.y;

        const basePos = this.isGrounded(blocks);

        console.log("is gorunded: ", basePos);
        if (basePos) {
            //if he is on the gorund
            this.playerSpeed.y = 0;
            this.playerPos.y = basePos - this.playerSize.h;
            this.jumping = false;
        } else {
            //player is on the air
            const blockPos = this.checkBlock(blocks);
            if (!blockPos.down) {
                this.playerSpeed.y += this.physics.gravity;
            } else {
                //if there is a block on top;
                this.playerSpeed.y *= -1;

                this.playerPos.y = blockPos.down;
            }

        }


        if (!keyUp && this.jumping && this.playerSpeed.y < 0) {
            this.jumping = false;
            this.playerSpeed.y *= 0.2;
        };


    }
    jump(blocks) {
        if (this.isGrounded(blocks)) {

            this.playerPos.y -= 1
            this.playerSpeed.y -= this.jumpForce;
            this.jumping = true;

        }


    }
    draw() {

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);

    }
    moveRight(blocks) {

        this.playerPos.x += this.playerSpeed.x;

        // this.previousPos = { ...this.playerPos };

        // this.playerPos.x += this.playerSpeed.x;

        // const pos = this.checkForCollision(blocks);

        // if (pos.x) {
        //     this.playerPos.x = pos.x;
        // }
    }

    moveLeft() {

        this.playerPos.x -= this.playerSpeed.x
    }
    //return 0 if the player is not on top of a block, return the Y value of the block that the player is standing on
    isGrounded(blocks) {
        let output = 0;

        for (const block of blocks) {
            //check for horizontal grounding
            if (!(this.playerPos.x + this.playerSize.w <= block.pos.x || this.playerPos.x >= block.pos.x + block.size.w)) {
                //check for vertical gorunding
                if (this.playerPos.y + this.playerSize.h >= block.pos.y && this.playerPos.y + this.playerSize.h < block.pos.y + block.size.h) {


                    output = block.pos.y;
                    break;
                }
            }
        }
        return output;
    }
    //checks for collision with the bottom of a block
    checkBlock(blocks) {
        let output = { down: 0, left: 0, right: 0 };
        for (const block of blocks) {
            //check if we are on the same x axis as a block
            if (!(this.playerPos.x + this.playerSize.w < block.pos.x || this.playerPos.x > block.pos.x + block.size.w)) {
                //check if there is a block on top
                if (this.playerPos.y < block.pos.y + block.size.h && this.playerPos.y > block.pos.y) {
                    output = { down: block.pos.y + block.size.h, left: block.pos.x, right: block.pos.x + block.size.w }
                    break;
                }
            }
        }
        return output;
    }

    checkForCollision(blocks) {
        let output = { x: 0, y: 0 };
        for (const block of blocks) {

            if (block.pos.x < this.playerPos.x + this.playerSize.w &&
                block.pos.x + block.size.w > this.playerPos.x &&
                block.pos.y < this.playerPos.y + this.playerSize.h &&
                block.size.h + block.pos.y > this.playerPos.y) {


                output = { ...this.previousPos };
            }

        }
        return output;
    }

    // checkForCollision(blocks) {
    //     // let output = { x: 0, y: 0 };
    //     for (const block of blocks) {

    //         if (this.playerPos.x + this.playerSize.w >= block.pos.x &&
    //             this.playerPos.x <= block.pos.x + block.size.w &&
    //             this.playerPos.y + this.playerSize.h >= block.pos.y &&
    //             this.playerPos.y <= block.pos.y + block.size.h) {

    //             return true


    //         }

    //         return false;
    //     }
    // }

}