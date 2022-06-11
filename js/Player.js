class Player {
    constructor(ctx, canvasSize, playerPosX, playerPosY, playerWidth, playerHeight) {
        this.ctx = ctx
        this.canvasSize = canvasSize
        this.playerPos = { x: playerPosX, y: playerPosY }
        this.playerSize = { w: playerWidth, h: playerHeight }
        this.playerSpeed = { x: 10, y: 0 }

        this.basePos = this.playerPos.y

        this.jumpForce = 10
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
        this.playerSpeed.y += this.physics.gravity;
        console.log(this.playerSpeed.y)
        // //this.playerPos.y -= 40 //S: Dont know waht this does
        // if (this.playerPos.y < this.basePos) {                   //tries for jump, this one first elevates it with gravity,
        //     //is on the air
        //     this.playerPos.y += this.playerSpeed.y;              //then dissappears
        //     this.playerSpeed.y += this.gravity;
        // } else {
        //     console.log("updating jump")
        //     //is on the ground
        //     this.playerPos.y = this.basePos;
        //     this.playerSpeed.y = 1;
        // }
        // //this.playerSpeed.y -= 8
        // // this.playerSpeed.y += this.physics.gravity
        // // if (this.playerPos.y >= 450) {
        // //     this.playerSpeed.y = 0
        // // }

    }
    jump() {

        //this.playerPos.y -= 1
        this.playerSpeed.y -= this.jumpForce;


    }
    draw() {
        this.updateJump();
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(this.playerPos.x, this.playerPos.y, this.playerSize.w, this.playerSize.h);
    }
    moveRight() {
        this.playerPos.x += this.playerSpeed.x

    }

    moveLeft() {
        this.playerPos.x -= this.playerSpeed.x
    }

}