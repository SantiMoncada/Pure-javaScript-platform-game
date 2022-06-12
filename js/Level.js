class Level{
    constructor(ctx,canvasSize,title, player){
        this.ctx = ctx;
        this.canvasSize = canvasSize;
        this.referenceToPlayer = player;
        this.playerStartingPos = {x:undefined,y:undefined};
        this.title = title;
        this.platforms = [];
        this.deathBlocks = [];
        this.items = [];
        this.doors = [];
        this.init(ctx,canvasSize,title);
    }
    init(ctx,canvasSize,title){
        switch(title){
            case '1-1':
            
            this.playerStartingPos = {x:50,y:800};
            this.referenceToPlayer.pos = {...this.playerStartingPos};
            this.platforms.push(new Block(ctx, canvasSize, 0, canvasSize.h - 50,canvasSize.w, 50, 'gray'));
            this.platforms.push(new Block(ctx, canvasSize, 500, 700, 500, 30, "purple"));
            this.platforms.push(new Block(ctx, canvasSize, 1200, 100, 30, 400, "yellow"));
            
            this.deathBlocks.push(new Block(ctx, canvasSize, 300, 500, 500, 30, "black"));

            this.resetLevel();
            break;
        
            case '1-2':
            break;
        
        }
    }
    isPlayerAlive(player){
        let output = true;
        if(player.pos.y > 1000 ||
            player.isColliding(this.deathBlocks)){
            output = false;
        }
        return output;
    }
    resetLevel(){
        this.items = [];
        this.items.push(new Item(this.ctx,this.canvasSize,100,600,20,50));
        this.items.push(new Item(this.ctx,this.canvasSize,200,600,20,50));
        this.items.push(new Item(this.ctx,this.canvasSize,300,600,20,50));
        this.items.push(new Item(this.ctx,this.canvasSize,400,600,20,50));
        
        this.doors = [];
        this.doors.push(new Block(this.ctx,this.canvasSize, 1200, this.canvasSize.h - 400, 30, 450, "brown"));

    }
    draw(){

        //TEMP TODO HARDCODED
        if(this.items.length === 0){
            this.doors = [];
        }


        if(!this.isPlayerAlive(this.referenceToPlayer)){
            this.referenceToPlayer.resetTo(this.playerStartingPos);
            this.resetLevel();
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
            if(this.referenceToPlayer.collidedWith(item)){
                arr.splice(index, 1);
            }else{
                item.draw();
            }
            
        });
    }
}
