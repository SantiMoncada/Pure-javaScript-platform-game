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
        this.door = undefined;
        this.currentItems = [];
        this.tile = tile;
        this.keysCollected = 0;
        this.background = "./assets/backGround.png";
        this.backgroundImageInstance = undefined;
        this.foreGroundImageInstance = undefined;
        this.init(ctx, canvasSize, levelIndex);
    }
    init(ctx, canvasSize, levelIndex) {
        const levelLayout = levels[levelIndex];

        this.playerStartingPos = { x: levelLayout.playerStartingPos.x * 34.1333, y: levelLayout.playerStartingPos.y * 34.1333};

        levelLayout.platforms.forEach(block => {
            this.platforms.push(new Block(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color));
        });
        levelLayout.deathBlocks.forEach(block => {
            this.deathBlocks.push(new Block(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color));
        });
        levelLayout.items.forEach(item => {
            this.items.push(new Item(this.ctx, this.canvasSize, this.tile, item.x, item.y, item.w, item.h, item.type)); // add the parameter type
        });
        levelLayout.doors.forEach(block => {
            this.door = (new Door(this.ctx, this.canvasSize, this.tile, block.x, block.y, block.w, block.h, block.color, block.keyNumber));
        });
        
        this.backgroundImageInstance = new Image();
        this.backgroundImageInstance.src = this.background;
        this.foreGroundImageInstance = new Image();
        this.foreGroundImageInstance.src = levelLayout.foreGround;

        this.referenceToPlayer.resetTo(this.playerStartingPos);

        this.currentItems = [...this.items];



    }
    isPlayerAlive(player) {
        let output = true;
        if (player.pos.y > 15 * this.tile ||
            player.isColliding(this.deathBlocks)) {
            output = false;
        }
        return output;
    }
    resetLevel() {
        this.keysCollected = 0;
        //reset player powerUps TODO
        this.currentItems = [...this.items];

    }

    isFinished() {
        //TEMP TODO HARDCODED
        if (this.door.isOpen && this.referenceToPlayer.pos.x > 29 * this.tile && this.referenceToPlayer.pos.y < 3 * this.tile) {
            //return this.referenceToPlayer.pos.x > 935 * this.tile && this.referenceToPlayer.pos.y < 60 * this.tile;
            return true

        } else {
            return false
        }
        //TEMP TODO HARDCODED
    }
    draw() {

        if (this.door.keyNumber <= this.keysCollected) {
            this.door.isOpen = true;
        } else {
            this.door.isOpen = false;
        }


        //TEMP TODO HARDCODED

        if (!this.isPlayerAlive(this.referenceToPlayer)) {
            this.referenceToPlayer.resetTo(this.playerStartingPos);
            this.resetLevel();
        }
        this.ctx.drawImage(this.backgroundImageInstance, 0, 0, 30 * this.tile, 15 * this.tile);
        // this.platforms.forEach(block => {
        //     block.draw();
        // });
        this.deathBlocks.forEach(block => {
            block.draw();
        });
        
        this.door.draw();

        let i;
        for (i = 0; i < this.currentItems.length; i++) {
            const item = this.currentItems[i];

            if (this.referenceToPlayer.collidedWith(item)) {
                switch (item.type) {
                    case "key":
                        this.keysCollected++;
                        break;
                    case "doubleJump":
                        this.referenceToPlayer.addPowerUp(item.type)
                        break;
                    case "wallJump":
                        this.referenceToPlayer.addPowerUp(item.type)
                        break;
                }
                break;
            }
        }
        this.currentItems.splice(i, 1);

        this.ctx.drawImage(this.foreGroundImageInstance,0,0,30*this.tile,15*this.tile);
        this.currentItems.forEach((item) => {
            item.draw();
        });
    }

}
