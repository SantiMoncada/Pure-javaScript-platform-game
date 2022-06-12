class  Item{
    constructor(ctx, canvasSize, posX, posY, width, height){
        this.ctx = ctx;
        this.pos = { x: posX, y: posY };
        this.size = { w: width, h: height };

    }
    draw() {
        this.ctx.fillStyle = 'orange'; //TODO change to img
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

    }
}