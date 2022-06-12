class Block {
    constructor(ctx, canvasSize, posX, posY, width, height, color) {
        this.ctx = ctx;
        this.pos = { x: posX, y: posY };
        this.size = { w: width, h: height };
        this.color = color;
        this.init();
    }
    init() {

    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

    }

}