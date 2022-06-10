class Block {
    constructor(ctx, canvasSize, posX, posY, width, height, color) {
        this.ctx = ctx;
        this.blockPos = { x: posX, y: posY };
        this.blockSize = { w: width, h: height };
        this.blockColor = color;
        this.init();
    }
    init() {

    }
    draw() {
        this.ctx.fillStyle = this.blockColor; //HardCode
        this.ctx.fillRect(this.blockPos.x, this.blockPos.y, this.blockSize.w, this.blockSize.h);

    }

}