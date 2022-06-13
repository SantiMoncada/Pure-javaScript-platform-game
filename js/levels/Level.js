class Level {
    constructor(ctx, canvasSize, tile, title, player) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.referenceToPlayer = player;
        this.playerStartingPos = { x: undefined, y: undefined };
        this.title = title;
        this.platforms = [];
        this.deathBlocks = [];
        this.items = [];
        this.doors = [];
        this.tile = tile;
        this.init(ctx, canvasSize, title);
    }
    init(ctx, canvasSize, title) {
        switch (title) {
            case '1-1':

                this.playerStartingPos = { x: 25, y: 480 };
                this.referenceToPlayer.pos = { ...this.playerStartingPos };
                const layout = layouts[0](this.ctx, this.canvasSize, this.tile);
                this.platforms = [...layout.platforms];
                this.deathBlocks = [...layout.deathBlocks];

                console.log(this.platforms)
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 5, 495, 'gray'));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 995, 0, 5, 500, 'gray'));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 1000, 5, 'gray'));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 495, 1000, 5, 'gray'));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 155, 140, 5, 200, "purple"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 220, 210, 300, 5, "green"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 5, 420, 420, 5, "yellow"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 160, 475, 300, 20, 'gray'));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 700, 5, 5, 400, "purple"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 780, 420, 215, 5, "yellow"));

                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 60, 70, 5, "blue"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 905, 180, 90, 5, "blue"));
                // this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 885, 300, 110, 5, "blue"));

                // this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 460, 475, 50, 20, 'black'));


                this.resetLevel(this.title);
                break;

            case '1-2':
                this.playerStartingPos = { x: 25, y: 200 };
                this.referenceToPlayer.pos = { ...this.playerStartingPos };
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 5, 495, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 995, 0, 5, 500, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 1000, 5, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 495, 1000, 5, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 180, 400, 250, 5, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 5, 110, 150, 5, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 55, 5, 5, 65, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 200, 200, 150, 5, "blue"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 620, 150, 150, 5, "orange"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 655, 300, 340, 5, "pink"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 685, 350, 5, 145, "brown"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 690, 400, 185, 5, "green"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 770, 80, 5, 225, "yellow"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 60, 70, 5, "blue"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 200, 70, 5, "blue"));


                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 5, 70, 10, 5, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 200, 190, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 345, 190, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 650, 300, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 620, 155, 150, 5, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 690, 405, 100, 5, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 795, 490, 35, 5, "black"));
                this.resetLevel(this.title);
                break;

        }
    }
    isPlayerAlive(player) {
        let output = true;
        if (player.pos.y > 500 * this.tile ||
            player.isColliding(this.deathBlocks)) {
            output = false;
        }
        return output;
    }
    resetLevel(title) {
        switch (title) {
            case '1-1':
                this.items = [];
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 100, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 200, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 300, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 400, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 925, 430, 10, 10));

                this.doors = [];
                this.doors.push(new Block(this.ctx, this.canvasSize, 1200, this.canvasSize.h - 400, 30, 450, "brown"));
                break;
            case '1-2':
                this.items = [];
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 150, 300, 10, 10));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 700, 470, 10, 10));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 450, 300, 10, 10));
                this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 10, 10, 10, 10));
                // this.items.push(new Item(this.ctx, this.canvasSize,this.tile, 500, 100, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize,this.tile, 100, 600, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize,this.tile, 100, 600, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize,this.tile, 100, 600, 20, 50));
                this.doors = [];
                this.doors.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 5, 70, 55, "brown"));

                break;
        }

    }

    isFinished() {
        //TEMP TODO HARDCODED
        return this.referenceToPlayer.pos.x > 935 * this.tile && this.referenceToPlayer.pos.y < 60 * this.tile;
        //TEMP TODO HARDCODED
    }
    draw() {

        //TEMP TODO HARDCODED
        if (this.items.length === 0) {
            this.doors = [];
        }


        //TEMP TODO HARDCODED

        if (!this.isPlayerAlive(this.referenceToPlayer)) {
            this.referenceToPlayer.resetTo(this.playerStartingPos);
            this.resetLevel(this.title);
        }

        this.platforms.forEach(block => {
            block.draw();
        });
        this.deathBlocks.forEach(block => {
            block.draw();
        });
        this.doors.forEach(block => {
            block.draw();
        });
        this.items.forEach((item, index, arr) => {
            if (this.referenceToPlayer.collidedWith(item)) {
                arr.splice(index, 1);
            } else {
                item.draw();
            }

        });
    }

}
