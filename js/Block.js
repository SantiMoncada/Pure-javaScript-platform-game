class Block {
    constructor(ctx, canvasSize, tile, posX, posY, width, height, color) {
        this.ctx = ctx;
        this.tile = tile;
        this.pos = { x: posX * this.tile, y: posY * this.tile };
        this.size = { w: width * this.tile, h: height * this.tile };
        this.color = color;
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

    }

}