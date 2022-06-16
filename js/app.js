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
    backgorundForestSound: undefined,
    soundStarted:false,
    tileSize: undefined,
    bigTileSize: undefined,
    gameDone : false,
    levelIndex: 0,
    startBoxesPlayerHitBox: [],
    init(canvasId) {
        this.ctx = document.querySelector(canvasId).getContext('2d');
        this.setDimensions(canvasId);
        this.player = new Player(this.ctx, this.canvasSize, this.tileSize, 20, 20);
        this.level = new Level(this.ctx, this.canvasSize, this.bigTileSize, this.levelIndex, this.player, this.tileSize);
        this.backgorundForestSound = new Audio("./assets/audio/Spider.mp3");
        this.endingMusic = new Audio("./assets/audio/Undertale.mp3");
        this.finishedLevelSound = new Audio("./assets/audio/Finished.wav");
        this.backgorundForestSound.loop = true;
        this.backgorundForestSound.volume = 0.2;
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
            if (!this.soundStarted){
                this.backgorundForestSound.play();
                this.soundStarted = true;
            }
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
            if(!this.gameDone){
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
                    this.finishedLevelSound.play();
                    if(this.levelIndex < levels.length){
                        this.level = new Level(this.ctx, this.canvasSize, this.bigTileSize, this.levelIndex, this.player, this.tileSize);   //TEMP TODO HARDCODED
                    }else{
                        this.gameDone = true;
                    }
                }
            }else{
                this.backgorundForestSound.pause();
                this.endingMusic.play();
                this.ctx.fillStyle = "black";
                this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
                this.ctx.fillStyle = "white"
                this.ctx.strokeStyle = "white";
                this.ctx.font = '90px serif';
                this.ctx.strokeText('The box made it :,)', this.canvasSize.w / 2, this.canvasSize.h / 2);
            }
        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}