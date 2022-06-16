class Player extends PhysicsObject {
    constructor(ctx, canvasSize, tile, playerWidth, playerHeight) {
        super(ctx, canvasSize, tile, playerWidth, playerHeight);

        this.jumping = false;
        this.jumpForce = 7 * this.tile;
        this.pushingForce = 2 * this.tile;


        this.wallJump = false;
        this.doubleJump = false;
        this.doubleJumping = false;
        this.playerImage = "./assets/Crate.png";
        this.jumpSound = new Audio("./assets/audio/Jump.wav");
        this.deathSound = new Audio("./assets/audio/Death.wav");
        this.doubleJumpSound = new Audio("./assets/audio/DoubleJump.wav");
        this.init();
    }
    init() {
        this.imageInstance = new Image();
        this.imageInstance.src = this.playerImage;
    }
    draw() {
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.w, this.size.h);
    }
    updatePhysics(keyUp, blocks) {
        this.pos.y += this.speed.y;
        this.speed.y += this.physics.gravity;
        this.speed.x *= this.physics.drag;
        this.pos.x += this.speed.x;
        const collision = this.checkForCollision(blocks);
        if (collision.y && this.speed.y >= 0) {
            this.pos.y = collision.y;
            //this.speed.y *= -0.1; // bounce on land
            this.speed.y = 0;
        } else if (collision.y && this.speed.y < 0) {
            //bouncing on the ceilling
            this.pos.y = collision.y;
            this.speed.y *= -1;
        }
        if (collision.x) {
            //bounce on walls
            this.pos.x = collision.x;
            this.speed.x *= -0.5;
        }
        //console.log("x:",this.speed.x.toFixed(3)," y:",this.speed.y.toFixed(3))
        //to stop upwards speed on  a jump when the up arrow key is released, check if the key is pressed,
        //if it is a player iniated jump and if the speed is going upwards,
        //then set the jump variable to false to not get in this conditional again, and set the speed to 20%,
        //the else if checks if the player has stopped going upwards to give it the ability to jump again

        if (!keyUp && this.jumping && this.speed.y < 0) {
            this.jumping = false;
            this.speed.y *= 0.2;
        } else if (this.speed.y >= 0) {
            this.jumping = false
        }
        //power ups physics
        if (this.doubleJump && this.doubleJumping) {
            if (this.isGrounded(blocks)) {
                this.doubleJumping = false;
            }
        }
    }
    jump(blocks) {
        //checking for jump before the funciton is gorunded is a good way to save on performance
        const gorunded = this.isGrounded(blocks);
        if (!this.jumping && gorunded) {
            this.speed.y = -this.jumpForce;
            this.jumping = true;
            this.jumpSound.play();
        } else if (this.doubleJump && !this.doubleJumping) {
            this.doubleJumpSound.play();
            this.speed.y = -this.jumpForce;
            this.doubleJumping = true;
        }
    }
    moveRight() {
        this.speed.x += this.pushingForce;
    }
    moveLeft() {
        this.speed.x -= this.pushingForce;
    }
    resetTo(newPos) {
        this.pos = { x: newPos.x * this.tile, y: newPos.y * this.tile };
        this.speed = { x: 0, y: 0 };
        this.jumping = false;
        this.removePowerUps()
    }
    addPowerUp(type) {
        this.removePowerUps()
        switch (type) {
            case "wallJump":
                this.wallJump = true;
                break;
            case "doubleJump":
                this.doubleJump = true;
                break;
        }

    }
    removePowerUps() {
        this.doubleJumping = false;
        this.wallJump = false;
        this.doubleJump = false;
    }
}