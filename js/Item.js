class Item {
    constructor(ctx, canvasSize, tile, posX, posY, width, height) {
        this.ctx = ctx;
        this.tile = tile
        this.pos = { x: posX * this.tile, y: posY * this.tile };
        this.size = { w: width * this.tile, h: height * this.tile };

    }
    draw() {
        this.ctx.fillStyle = 'orange'; //TODO change to img
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

    }
}