class Level {
    constructor(ctx, canvasSize, tile, levelIndex, player) {
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.referenceToPlayer = player;
        this.playerStartingPos = { x: undefined, y: undefined };
        this.levelIndex = levelIndex;
        this.platforms = [];
        this.deathBlocks = [];
        this.items = [];
        this.doors = [];
        this.currentItems = [];
        this.currentDoors = [];
        this.tile = tile;
        this.init(ctx, canvasSize, levelIndex);
    }
    init(ctx, canvasSize, levelIndex) {
        const levelLayout = levels[levelIndex];

        this.playerStartingPos = levelLayout.playerStartingPos;

        levelLayout.platforms.forEach(block => {
            this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color));
        });
        levelLayout.deathBlocks.forEach(block => {
            this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color));
        });
        levelLayout.items.forEach(item => {
            this.items.push(new Item(this.ctx, this.canvasSize, this.tile, item.x, item.y, item.w, item.h));
        });
        levelLayout.doors.forEach(block => {
            this.doors.push(new Block(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color));
        });

        this.referenceToPlayer.resetTo(this.playerStartingPos);

        this.currentItems = [...this.items];
        this.currentDoors = [...this.doors];



    }
    isPlayerAlive(player) {
        let output = true;
        if (player.pos.y > 500 * this.tile ||
            player.isColliding(this.deathBlocks)) {
            output = false;
        }
        return output;
    }
    resetLevel() {

        this.currentItems = [...this.items];
        this.currentDoors = [...this.doors];
        // switch (title) {
        //     case '1-1':
        //         this.items = [];

        //         this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 925, 430, 10, 10));
        //         this.items.push(new Item(this.ctx, this.canvasSize, this.tile, 25, 250, 10, 10));

        //         this.doors = [];
        //         this.doors.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 5, 70, 55, "brown"));
        //         break;
        //     case '1-2':
        //         this.items = [];
        //         150, 300, 10, 10));
        //         700, 470, 10, 10));
        //         450, 300, 10, 10));
        //         10, 10, 10, 10));

        //         this.doors = [];
        //         this.doors.push(new Block(this.ctx, this.canvasSize, this.tile, 925, 5, 70, 55, "brown"));

        //         break;
        // }

    }

    isFinished() {
        //TEMP TODO HARDCODED
        if (this.currentDoors.length === 0) {
            return this.referenceToPlayer.pos.x > 935 * this.tile && this.referenceToPlayer.pos.y < 60 * this.tile;

        } else {
            return false
        }
        //TEMP TODO HARDCODED
    }
    draw() {

        //TEMP TODO HARDCODED
        if (this.currentItems.length === 0) {
            this.currentDoors[0].color = 'green';
        }


        //TEMP TODO HARDCODED

        if (!this.isPlayerAlive(this.referenceToPlayer)) {
            this.referenceToPlayer.resetTo(this.playerStartingPos);
            this.resetLevel();
        }

        this.platforms.forEach(block => {
            block.draw();
        });
        this.deathBlocks.forEach(block => {
            block.draw();
        });
        this.currentDoors.forEach(block => {
            block.draw();
        });
        this.currentItems.forEach((item, index, arr) => {
            if (this.referenceToPlayer.collidedWith(item)) {
                arr.splice(index, 1);
                item.draw();
            } else {
                item.draw();
            }

        });
    }

}
