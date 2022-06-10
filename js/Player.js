class PLayer {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { speedX: 10, speedY: 10 }
        this.playerImage
        this.physics = { gravity: .4 }//harcoded gravity, chek if change later

        this.init()
    }
    init() {
        this.imageInstance = new Image()
        this.imageInstance.src = this.playerImg

    }

    draw() {

    }
    moveRight() {
        this.playerPos.x += this.playerSpeed.speedX

    }

    moveLeft() {
        this.playerPos.x -= this.playerSpeed.speedX
    }
    jump() {
        this.playerPos.y -= 40
        this.playerSpeed.speedY -= 8

    }
}