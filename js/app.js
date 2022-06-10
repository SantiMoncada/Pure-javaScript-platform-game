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
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            w: window.innerWidth,
            h: window.innerHeight,
        }
        this.ctx.setAttribute('width', this.canvasSize.w)
        this.ctx.setAttribute('height', this.canvasSize.h)

    }
}