class Box extends PhysicsObject {
  constructor(ctx, canvasSize, tile, posX, posY, width, height) {
    super(ctx, canvasSize, tile, width, height);
    this.image = "./assets/Crate.png";
    this.pos = { x: posX * this.tile, y: posY * this.tile };
    this.init();
  }
  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = this.image;
  }
  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.pos.x,
      this.pos.y,
      this.size.w,
      this.size.h
    );
  }
  getHitboxPlayerInteraction() {
    return {
      pos: { x: this.pos.x + 5, y: this.pos.y },
      size: { w: this.size.w - 10, h: this.size.h - 10 },
    };
  }
}
