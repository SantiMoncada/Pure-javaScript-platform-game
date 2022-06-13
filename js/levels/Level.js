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

                this.playerStartingPos = { x: 50, y: 800 };
                this.referenceToPlayer.pos = { ...this.playerStartingPos };
                this.platforms.push(new Block(ctx, canvasSize, this.tile, 0, canvasSize.h - 50, canvasSize.w, 50, 'gray'));
                this.platforms.push(new Block(ctx, canvasSize, this.tile, 500, 700, 500, 30, "purple"));
                this.platforms.push(new Block(ctx, canvasSize, this.tile, 1200, 100, 30, 400, "yellow"));

                this.deathBlocks.push(new Block(ctx, canvasSize, this.tile, 300, 500, 500, 30, "black"));

                this.resetLevel(this.title);
                break;

            case '1-2':
                this.playerStartingPos = { x: 25, y: 200 };
                this.referenceToPlayer.pos = { ...this.playerStartingPos };
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 5, 495, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 995, 0, 5, 500, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 0, 1000, 5, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 0, 495, 1000, 5, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 150, 350, 250, 5, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 5, 100, 150, 5, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 200, 200, 150, 5, "blue"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 550, 150, 150, 5, "orange"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 655, 285, 340, 5, "pink"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 685, 350, 5, 145, "brown"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 690, 400, 185, 5, "green"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, 700, 80, 5, 210, "yellow"));

                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 200, 190, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 345, 190, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 650, 285, 5, 10, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 550, 155, 150, 5, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 690, 405, 100, 5, "black"));
                this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, 800, 485, 5, 10, "black"));
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
                this.items.push(new Item(this.ctx, this.canvasSize, 100, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, 200, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, 300, 600, 20, 50));
                this.items.push(new Item(this.ctx, this.canvasSize, 400, 600, 20, 50));

                this.doors = [];
                this.doors.push(new Block(this.ctx, this.canvasSize, 1200, this.canvasSize.h - 400, 30, 450, "brown"));
                break;
            case '1-2':
                // this.items = [];
                // this.items.push(new Item(this.ctx, this.canvasSize, 300, 800, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize, 500, 100, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize, 100, 600, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize, 100, 600, 20, 50));
                // this.items.push(new Item(this.ctx, this.canvasSize, 100, 600, 20, 50));

                break;
        }

    }

    isFinished() {
        //TEMP TODO HARDCODED
        //return this.referenceToPlayer.pos.x > 1595;
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
