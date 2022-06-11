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
        this.physics = { gravity: .4 }//harcoded gravity, check if change later, is affecting x axis as well when moving

        this.init()
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg


    }
    updateJump(keyUp, blocks) {


        this.playerPos.y += this.playerSpeed.y;
        const basePos = this.isGrounded(blocks);
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


        if (!keyUp && this.jumping) {
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

        const leftPos = this.checkBlock(blocks).left;
        if (!leftPos) {
            this.playerPos.x += this.playerSpeed.x;
        } else {
            this.playerPos.x = leftPos - this.playerSize.w;
        }
    }

    moveLeft() {

        this.playerPos.x -= this.playerSpeed.x
    }
    //return 0 if the player is not on top of a block, return the Y value of the block that the player is standing on
    isGrounded(blocks) {
        let output = 0;

        for (const block of blocks) {
            //check for horizontal grounding
            if (this.playerPos.y + this.playerSize.h >= block.pos.y && this.playerPos.y + this.playerSize.h < block.pos.y + block.size.h) {
                //check for vertical gorunding
                if (!(this.playerPos.x + this.playerSize.w < block.pos.x || this.playerPos.x > block.pos.x + block.size.w)) {

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

}