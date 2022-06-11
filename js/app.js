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
    keysPressed: { up: false, left: false, right: false },
    fps: 60,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');

        this.setDimensions(canvasId);

        //this.ctx.save()                       *see gravity, trying to find issue tried with this.

        this.player = new Player(this.ctx, this.canvasSize, 50, 460, 40, 40);

        //TEMP Move to -> level
        this.blocks = [];
        this.blocks.push(new Block(this.ctx, this.canvasSize, 0, 500, 2000, 50, 'gray'));
        this.blocks.push(new Block(this.ctx, this.canvasSize, this.canvasSize.w / 2, 250, this.canvasSize.h / 2, 50, "purple"));

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
                    this.keysPressed.left = true;
                    break;
                case 'ArrowRight':
                    this.keysPressed.right = true;
                    break;
                case 'ArrowUp':
                    this.keysPressed.up = true;
                    break;


            }
        }
        document.onkeyup = e => {
            const { key } = e
            switch (key) {
                case 'ArrowLeft':
                    this.keysPressed.left = false;
                    break;
                case 'ArrowRight':
                    this.keysPressed.right = false;
                    break;
                case 'ArrowUp':
                    this.keysPressed.up = false;

                    break;


            }
        }
    },
    updateInput() {
        if (this.keysPressed.up) {
            this.player.jump();
        }
        if (this.keysPressed.left) {
            this.player.moveLeft();
        }
        if (this.keysPressed.right) {
            this.player.moveRight();
        }
    },
    drawAll() {
        setInterval(() => {
            this.updateInput();
            this.clearAll();

            this.blocks.forEach(block => {
                block.draw();
            });
            this.player.updateJump();
            this.player.draw();

        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}