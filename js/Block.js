class Block {
    constructor(ctx, canvasSize, tile, posX, posY, width, height) {
        this.ctx = ctx;
        this.tile = tile;
        this.pos = { x: posX * this.tile, y: posY * this.tile };
        this.size = { w: width * this.tile, h: height * this.tile };
        this.color = 'rgba(000, 000, 000, 0.5)';
    }
    draw() {
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);

    }

}

class Door extends Block {
    constructor(ctx, canvasSize, tile, posX, posY, width, height, color, keyNumber) {
        super(ctx, canvasSize, tile, posX, posY, width, height, color)
        this.keyNumber = keyNumber
        this.isOpen = false
        this.imageOpenSrc = "./assets/mailBoxOpen.png";
        this.imageClosedSrc = "./assets/mailBoxClosed.png";
        this.init();
    }
    init(){
        this.imageInstance = new Image();
        this.imageInstance.src = this.imageClosedSrc;
    }
    draw() {
        // if (this.isOpen) {
        //     this.ctx.fillStyle = 'green';
        // } else {
        //     this.ctx.fillStyle = "brown";
        // }

        //this.ctx.fillRect(this.pos.x, this.pos.y, this.size.w, this.size.h);
        this.ctx.drawImage(this.imageInstance, this.pos.x, this.pos.y, this.size.h/3, this.size.h);

    }

    open(){
        this.isOpen = true;
        this.imageInstance.src = this.imageOpenSrc;
    }
    close(){
        this.isOpen = false;
        this.imageInstance.src = this.imageClosedSrc;
    }

}