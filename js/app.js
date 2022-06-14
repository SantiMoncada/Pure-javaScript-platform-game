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
    keysPressed: { up: false, left: false, right: false, previousUp: false },
    fps: 60,
    tileSize: undefined,
    levelIndex: 0,
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);
        this.player = new Player(this.ctx, this.canvasSize, this.tileSize, 20, 20);
        this.level = new Level(this.ctx, this.canvasSize, this.tileSize, this.levelIndex, this.player);

        this.createEventListeners()
        this.drawAll();
    },
    setDimensions(canvasId) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const aspectRatio = width / height;
        if (aspectRatio > 2) {
            this.canvasSize = {
                w: height * 2,
                h: height,
            }
        } else {
            this.canvasSize = {
                w: width,
                h: width / 2,
            }
        }
        this.tileSize = this.canvasSize.w / 1000;
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
        if (this.keysPressed.up && !this.keysPressed.previousUp) {
            this.player.jump(this.level.platforms);
        }
        this.keysPressed.previousUp = this.keysPressed.up;
        if (this.keysPressed.left) {
            this.player.moveLeft();
        }
        if (this.keysPressed.right) {
            this.player.moveRight();
        }
    },
    drawAll() {
        setInterval(() => {
            this.clearAll();
            this.updateInput();
            this.player.updatePhysics(this.keysPressed.up, this.level.platforms);
            this.level.draw();
            this.player.draw();
            if (this.level.isFinished()) {
                this.levelIndex++;
                this.level = new Level(this.ctx, this.canvasSize, this.tileSize, this.levelIndex, this.player);   //TEMP TODO HARDCODED
            }
        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}
