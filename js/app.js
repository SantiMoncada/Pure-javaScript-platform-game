const platformGame = {
    name: 'Pure JavaScript platform game',
    author: 'Alejandro Fisman Santiago Moncada',
    version: '0.1.0',
    license: undefined,
    description: 'A game where you play as a ball and try to finish the level',
    ctx: undefined,
    canvasSize: {
        w: undefined,
        h: undefined
    },
    fps: 60,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);

        this.floor = new Block(this.ctx, this.canvasSize, 0, 500, 2000, 200, 'gray');

        this.drawAll();
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)

    },
    drawAll() {
        setInterval(() => {
            this.floor.draw();
        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}