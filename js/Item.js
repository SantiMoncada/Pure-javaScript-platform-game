class Item {
    constructor(ctx, canvasSize, tile, posX, posY, width, height, itemType) {
        this.ctx = ctx;
        this.tile = tile
        this.pos = { x: posX * this.tile, y: posY * this.tile };
        this.size = { w: width * this.tile, h: height * this.tile };
        this.type = itemType;

    }
    draw() {
        switch (this.type) {
            case "key":
                this.ctx.fillStyle = 'orange' //TODO change to img

                break;
            case "wallJump":
                this.ctx.fillStyle = 'green' //TODO change to img

                break;
            case "doubleJump":
                this.ctx.fillStyle = 'blue' //TODO change to img

                break;
            default:
                this.ctx.fillStyle = 'red'

        }
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h)


    }
}