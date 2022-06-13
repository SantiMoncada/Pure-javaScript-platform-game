const layouts = [
    function (ctx, canvasSize, tile) {
        const layout = {
            platforms: [],
            deathBlocks: [],
            playerStartingPos: { x: 25, y: 450 }
        }

        layout.platforms.push(new Block(ctx, canvasSize, tile, 0, 0, 5, 495, 'gray'));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 995, 0, 5, 500, 'gray'));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 0, 0, 1000, 5, 'gray'));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 0, 495, 1000, 5, 'gray'));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 155, 140, 20, 200, "purple"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 220, 210, 300, 5, "green"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 5, 420, 420, 5, "yellow"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 160, 475, 300, 20, 'gray'));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 700, 5, 5, 400, "purple"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 780, 420, 215, 5, "yellow"));

        layout.platforms.push(new Block(ctx, canvasSize, tile, 925, 60, 70, 5, "blue"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 905, 180, 90, 5, "blue"));
        layout.platforms.push(new Block(ctx, canvasSize, tile, 885, 300, 110, 5, "blue"));

        layout.deathBlocks.push(new Block(ctx, canvasSize, tile, 460, 475, 50, 20, 'black'));
        return layout
    }
]