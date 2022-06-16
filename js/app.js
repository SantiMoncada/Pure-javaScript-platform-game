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
    bigTileSize: undefined,
    levelIndex: 0,
    startBoxesPlayerHitBox : [],
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);
        this.player = new Player(this.ctx, this.canvasSize, this.tileSize, 20, 20);
        this.level = new Level(this.ctx, this.canvasSize, this.bigTileSize, this.levelIndex, this.player , this.tileSize);
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
        this.tileSize = this.canvasSize.w / 1024;
        this.bigTileSize = this.canvasSize.w / 30;
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
            this.player.jump([...this.level.platforms, ...this.startBoxesPlayerHitBox]);
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
            this.level.draw();


            this.startBoxesPlayerHitBox = [];

            this.level.currentBoxes.forEach(box => {
                this.startBoxesPlayerHitBox.push(box.getHitboxPlayerInteraction());
            });
            
            this.player.updatePhysics(this.keysPressed.up, [...this.level.platforms, ...this.startBoxesPlayerHitBox]);


            //this.player.updatePhysics(this.keysPressed.up, [...this.level.platforms, ...this.level.startBoxes]);

            //this.player.updatePhysics(this.keysPressed.up,this.level.platforms);
            
            this.player.draw();
            if (this.level.isFinished()) {
                this.levelIndex++;
                console.log(this.levelIndex);
                this.level = new Level(this.ctx, this.canvasSize, this.bigTileSize, this.levelIndex, this.player, this.tileSize);   //TEMP TODO HARDCODED
            }
        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}