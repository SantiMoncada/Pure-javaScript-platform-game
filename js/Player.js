class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { x: 10, y: 0 }

        this.basePos = this.playerPos.y

        this.jumpForce = 15
        //this.playerImage
        this.physics = { gravity: .4 }//harcoded gravity, check if change later, is affecting x axis as well when moving

        this.init()
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg


    }
    updateJump() {

        this.playerPos.y += this.playerSpeed.y;

        if (this.playerPos.y >= this.basePos) {
            //if he is on the gorund
            this.playerSpeed.y = 0;
            this.playerPos.y = this.basePos
            console.log(this.playerPos.y);

        } else {
            this.playerSpeed.y += this.physics.gravity;

        }


    }
    jump() {
        if (this.playerPos.y >= this.basePos) {
            this.playerPos.y -= 1
            this.playerSpeed.y -= this.jumpForce;

        }


    }
    draw() {

        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);

    }
    moveRight() {
        this.playerPos.x += this.playerSpeed.x

    }

    moveLeft() {
        this.playerPos.x -= this.playerSpeed.x
    }
    isGrounded(blocks) {


    }

}