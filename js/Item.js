class Item {
    constructor(ctx, canvasSize, tile, posX, posY, width, height, itemType) {
        this.ctx = ctx;
        this.tile = tile
        this.pos = { x: posX * this.tile, y: posY * this.tile };
        this.size = { w: width * this.tile, h: height * this.tile };
        this.type = itemType;
        this.keyImg = "./assets/stamp.png";
        this.wallJumpImg = "./assets/tape.png";
        this.doubleJumpImg = "./assets/cloud.png";
        this.verticalOffset = 0;
        this.goingUp = true;
        this.frameIndex = 0;
        this.init();

    }
    init() {
        this.imageInstance = new Image();
        this.verticalOffset = Math.floor(Math.random() * 10);

        switch (this.type) {
            case "key":
                this.imageInstance.src = this.keyImg;

                break;
            case "wallJump":
                this.imageInstance.src = this.wallJumpImg;


                break;
            case "doubleJump":
                this.imageInstance.src = this.doubleJumpImg;


                break;
            default:
                this.ctx.fillStyle = 'red'

        }
    }
    updateVerticalOffet() {
        if (this.verticalOffset < 10 && this.goingUp) {
            this.verticalOffset += this.tile / 100;
            this.verticalOffset++;

            console.log("up")

        } else {
            this.goingUp = false;
        }

        if (this.verticalOffset >= 0 && !this.goingUp) {
            this.verticalOffset -= this.tile / 250;
            console.log(this.tile)
            this.verticalOffset--;

            console.log("down")
        } else {
            this.goingUp = true;
        }

    }
    draw() {
        this.frameIndex++;

        if (this.frameIndex % 2 == 0) {
            console.log("updating")
            this.updateVerticalOffet();
        }

        if (this.frameIndex >= 5000) { this.frameIndex = 0 };

        switch (this.type) {
            case "key":
                this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y + this.verticalOffset, this.size.w, this.size.h);

                break;
            case "wallJump":
                this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y + this.verticalOffset, this.size.w, this.size.h);

                break;
            case "doubleJump":
                this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y + this.verticalOffset, this.size.w, this.size.h);

                break;
            default:
                this.ctx.fillStyle = 'red'
                this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h)

        }



    }
}