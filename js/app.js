const platformGame = {
    name: 'Pure JavaScript platform game',
    author: 'Alejandro Fisman Santiago Moncada',
    version: '0.1.0',
    license: undefined,
    description: 'A game where you play as a ball and try to finish the level',
    canvasSize: {
        w: undefined,
        h: undefined
    },
    ctx: undefined,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);
        this.ctx.fillStyle = 'red';
        this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
        console.log(this.canvasSize)
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        document.querySelector(canvasId).setAttribute('width', this.canvasSize.w)
        document.querySelector(canvasId).setAttribute('height', this.canvasSize.h)

    }
}