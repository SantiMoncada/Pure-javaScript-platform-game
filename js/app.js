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

        //this.ctx.save()                       *see gravity, trying to find issue tried with this.

        this.player = new Player(this.ctx, this.canvasSize, 50, 460, 40, 40),

            this.floor = new Block(this.ctx, this.canvasSize, 0, 500, 2000, 50, 'gray');


        this.createEventListeners()

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
    createEventListeners() {
        document.onkeydown = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.player.moveLeft()
                    break;
                case 'ArrowRight':
                    this.player.moveRight()
                    break;
                case 'ArrowUp':
                    this.player.jump()
                    break;


            }
        }

    },
    drawAll() {
        setInterval(() => {

            this.clearAll()
            this.floor.draw();
            this.player.draw()

        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}