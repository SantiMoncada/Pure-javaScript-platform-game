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

                this.resetLevel(this.title);
            break;
        
            case '1-2':
                this.playerStartingPos = {x:50,y:800};
                this.referenceToPlayer.pos = {...this.playerStartingPos};
                this.platforms.push(new Block(this.ctx, this.canvasSize, 0, this.canvasSize.h - 10, this.canvasSize.w, 10, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 0, 0, this.canvasSize.w, 10, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, this.canvasSize.w - 10, 0, 10, this.canvasSize.h, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 0, 0, 10, this.canvasSize.h, 'gray'));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 300, 700, 500, 10, "purple"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 10, 200, 300, 10, "purple"));
                //this.blocks.push(new Block(this.ctx, this.canvasSize, 700, 500, this.canvasSize.w - 710, 10, "blue"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 900, 300, 300, 10, "green"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 1010, 570, 580, 10, "pink"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 1000, this.canvasSize.h - 260, 10, 250, "brown"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 1010, 770, 370, 10, "green"));
                this.platforms.push(new Block(this.ctx, this.canvasSize, 1200, 170, 10, 400, "yellow"));  
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
    resetLevel(title){
        switch(title){
            case '1-1':
                this.items = [];
                this.items.push(new Item(this.ctx,this.canvasSize,100,600,20,50));
                this.items.push(new Item(this.ctx,this.canvasSize,200,600,20,50));
                this.items.push(new Item(this.ctx,this.canvasSize,300,600,20,50));
                this.items.push(new Item(this.ctx,this.canvasSize,400,600,20,50));
                
                this.doors = [];
                this.doors.push(new Block(this.ctx,this.canvasSize, 1200, this.canvasSize.h - 400, 30, 450, "brown"));        
                break;
            case '1-2':
                break;
        }

    }

    isFinished(){
        //TEMP TODO HARDCODED
        return this.referenceToPlayer.pos.x > 1500;
        //TEMP TODO HARDCODED
    }
    draw(){

        //TEMP TODO HARDCODED
        if(this.items.length === 0){
            this.doors = [];
        }


        //TEMP TODO HARDCODED

        if(!this.isPlayerAlive(this.referenceToPlayer)){
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
            if(this.referenceToPlayer.collidedWith(item)){
                arr.splice(index, 1);
            }else{
                item.draw();
            }
            
        });
    }
    
}
