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
    //tileSize:
    init(canvasId) {

        this.ctx = document.querySelector(canvasId).getContext('2d');

        this.setDimensions(canvasId);

        
        console.log(this.level)
        this.player = new Player(this.ctx, this.canvasSize, 40, 40);
        this.level = new Level(this.ctx, this.canvasSize, "1-1",this.player);

        /* 
        this.blocks.push(new Block(this.ctx, this.canvasSize, 0, this.canvasSize.h - 10, this.canvasSize.w, 10, 'gray'));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 0, 0, this.canvasSize.w, 10, 'gray'));
        this.blocks.push(new Block(this.ctx, this.canvasSize, this.canvasSize.w - 10, 0, 10, this.canvasSize.h, 'gray'));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 0, 0, 10, this.canvasSize.h, 'gray'));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 300, 700, 500, 10, "purple"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 10, 200, 300, 10, "purple"));
        //this.blocks.push(new Block(this.ctx, this.canvasSize, 700, 500, this.canvasSize.w - 710, 10, "blue"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 900, 300, 300, 10, "green"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 1010, 570, 580, 10, "pink"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 1000, this.canvasSize.h - 260, 10, 250, "brown"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 1010, 770, 370, 10, "green"));
        this.blocks.push(new Block(this.ctx, this.canvasSize, 1200, 170, 10, 400, "yellow"));        
        */
        
        this.createEventListeners()

        this.drawAll();
    },
    setDimensions(canvasId) {
        this.canvasSize = {
            //w: window.innerWidth,
            //h: window.innerHeight,
            w : 1600,
            h : 900
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
            this.player.jump(this.level.platforms);
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
            this.clearAll();
            
            this.updateInput();
            
            this.player.updatePhysics(this.keysPressed.up, this.level.platforms);

            this.level.draw();
            this.player.draw();

        }, 1000 / this.fps)
    },
    clearAll() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    },
}