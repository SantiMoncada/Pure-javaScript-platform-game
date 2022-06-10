class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { x: 10, y: 0 }
        this.basePos = this.playerPos.y
        //this.playerImage
        //this.physics = { gravity: .4 }//harcoded gravity, check if change later, is affecting x axis as well when moving

        this.init()
    }
    init() {
        // this.imageInstance = new Image()                                 For images
        // this.imageInstance.src = this.playerImg


    }

    draw() {
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h)
    }
    moveRight() {
        this.playerPos.x += this.playerSpeed.x

    }

    moveLeft() {
        this.playerPos.x -= this.playerSpeed.x
    }
    jump() {
        // //this.playerPos.y -= 40
        // if (this.playerPos.y < this.basePos) {                   tries for jump, this one first elevates it with gravity,
        //     this.playerPos.y += this.playerSpeed.y;              then dissappears
        //     this.playerSpeed.y += this.gravity;
        // } else {
        //     this.playerPos.y = this.basePos;
        //     this.playerSpeed.y = 1;
        // }
        //this.playerSpeed.y -= 8
        // this.playerSpeed.y += this.physics.gravity
        // if (this.playerPos.y >= 450) {
        //    this.playerSpeed.y = 0
        // }


        //this.playerPos.y += this.playerSpeed.y


    }
}