const levels = [
    {
        title: "start",
        playerStartingPos: { x: 1.465, y: 12 },
        foreGround: "./assets/levels/start.png",
        platforms: [
            { x: 0, y: 13, w: 30, h: 2 },
            { x: 18, y: 11, w: 12, h: 5 },
            { x: 21, y: 9, w: 9, h: 5 },
            { x: 24, y: 6, w: 9, h: 5 },
            { x: 27, y: 3, w: 9, h: 5 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },

        ],
        deathBlocks: [
        ],
        items: [
        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 0 },
        ],
        boxes: [
            { x: 10, y: 405, w: 40, h: 40 },
            { x: 50, y: 425, w: 20, h: 20 },
            { x: 70, y: 425, w: 20, h: 20 },
            { x: 90, y: 425, w: 20, h: 20 },
            { x: 110, y: 425, w: 20, h: 20 },
            { x: 130, y: 425, w: 20, h: 20 },
            { x: 70, y: 385, w: 40, h: 40 },
            { x: 110, y: 405, w: 20, h: 20 },
            { x: 30, y: 385, w: 20, h: 20 },
            { x: 50, y: 385, w: 20, h: 20 },
            { x: 60, y: 365, w: 20, h: 20 },
            
        ]
    },
    {
        title: "basicJump",
        playerStartingPos: { x: 2, y: 10 },
        foreGround: "./assets/levels/basicJump.png",
        platforms: [
            { x: 0, y: 0, w: 1, h: 30 },
            { x: 0, y: 3, w: 5, h: 2 },
            { x: 0, y: 14, w: 30, h: 1 },
            { x: 18, y: 11, w: 12, h: 3 },
            { x: 22, y: 7, w: 8, h: 2 },
            { x: 26, y: 3, w: 5, h: 2 },
            { x: 29, y: 3, w: 1, h: 12 },
            { x: 5, y: 7, w: 10, h: 2 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
        ],
        items: [
            { x: 27, y: 10, w: 0.5, h: 0.5, type: "key" },
            { x: 27, y: 6, w: 0.5, h: 0.5, type: "key" },
            { x: 2, y: 2, w: 0.5, h: 0.5, type: "key" },
        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 3 },
        ],
        boxes: [],

    },
    {
        title: "BegginerLevel",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/begginerMap.png",
        platforms: [
            { x: 0, y: 12, w: 30, h: 3 },
            { x: 0, y: 3, w: 5, h: 0.5 },
            { x: 0, y: 6, w: 5, h: 0.5 },
            { x: 8, y: 8, w: 6, h: 0.5 },
            { x: 19, y: 4, w: 3, h: 0.5 },
            { x: 22, y: 8, w: 8, h: 4 },
            { x: 27, y: 3, w: 3, h: 5 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },



        ],
        deathBlocks: [

        ],
        items: [
            { x: 2, y: 1.2, w: 0.5, h: 0.5, type: "key" },
            { x: 15.25, y: 10, w: 0.5, h: 0.5, type: "key" },


        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],


    },
    {
        title: "deathJumps",
        playerStartingPos: { x: 1, y: 0 },
        foreGround: "./assets/levels/deathJumps.png",
        platforms: [
            { x: 0, y: 3, w: 4, h: 27 },
            { x: 0, y: 14, w: 15, h: 1 },
            { x: 7, y: 8, w: 3, h: 8 },
            { x: 14, y: 9, w: 3, h: 8 },

            { x: 20, y: 6, w: 3, h: 0.5 },

            { x: 26, y: 3, w: 4, h: 12 },

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
            { x: 4, y: 13, w: 3, h: 1 },
            { x: 10, y: 13, w: 4, h: 1 },
        ],
        items: [

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 0 },
        ],
        boxes: [],

    },
    {
        title: "boxPush",
        playerStartingPos: { x: 1, y: 0 },
        foreGround: "./assets/levels/boxPush.png",
        platforms: [
            { x: 0, y: 11, w: 30, h: 4 },
            { x: 14, y: 8, w: 3, h: 2 },
            { x: 26, y: 3, w: 20, h: 10 },

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
        ],
        items: [

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 0 },
        ],
        boxes: [
            { x: 700, y: 20, w: 100, h: 150 },
        ]

    },
    {
        title: "doubleJump",
        playerStartingPos: { x: 6, y: 10 },
        foreGround: "./assets/levels/doubleJump.png",
        platforms: [
            { x: 0, y: 1, w: 5, h: 6 },
            { x: 0, y: 12, w: 8, h: 3 },
            { x: 0, y: 0, w: 30, h: 1 },
            { x: 13, y: 0, w: 5, h: 4 },
            { x: 8, y: 6, w: 5, h: 9 },
            { x: 18, y: 6, w: 4, h: 9 },
            { x: 27, y: 3, w: 3, h: 12 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },


        ],
        deathBlocks: [],
        items: [
            { x: 15, y: 8, w: 0.5, h: 0.5, type: "key" },
            { x: 6, y: 6, w: 0.5, h: 0.5, type: "key" },
            { x: 4, y: 10, w: 1, h: 1, type: "wallJump" },

        ],
        doors: [
            { x: 29, y: 1, w: 1, h: 2, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],
    },
    {
        title: "doubleJumpIslands",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/DoubleJumpIslands.png",
        platforms: [
            { x: 0, y: 12, w: 8, h: 3 },
            { x: 0, y: 2, w: 6, h: 0.5 },
            { x: 12, y: 6, w: 6, h: 0.5 },
            { x: 14, y: 12, w: 3, h: 0.5 },
            { x: 24, y: 13, w: 6, h: 2 },
            { x: 26, y: 7, w: 4, h: 0.5 },
            { x: 26, y: 2, w: 4, h: 0.5 },

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [

        ],
        items: [
            { x: 1, y: 1, w: 0.5, h: 0.5, type: "key" },
            { x: 15, y: 10, w: 0.5, h: 0.5, type: "key" },
            { x: 27, y: 11, w: 1, h: 1, type: "doubleJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 2, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],
    },
    {
        title: "cavernLevel",
        playerStartingPos: { x: 1, y: 12 },
        foreGround: "./assets/levels/cavernLevel.png",
        platforms: [
            { x: 0, y: 0, w: 5, h: 9 },
            { x: 0, y: 12, w: 11, h: 3 },
            { x: 5, y: 0, w: 23, h: 1 },
            { x: 8, y: 4, w: 9, h: 5 },
            { x: 11, y: 1, w: 3, h: 3 },
            { x: 11, y: 13, w: 3, h: 2 },
            { x: 14, y: 12, w: 4, h: 3 },
            { x: 18, y: 13, w: 9, h: 2 },
            { x: 19, y: 8, w: 5, h: 2 },
            { x: 21, y: 1, w: 3, h: 7 },
            { x: 27, y: 3, w: 3, h: 12 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },




        ],
        deathBlocks: [
            { x: 11, y: 12, w: 3, h: 1 },
        ],
        items: [
            { x: 9.25, y: 2.25, w: 0.5, h: 0.5, type: "key" },
            { x: 12.25, y: 10.25, w: 0.5, h: 0.5, type: "key" },

            { x: 15, y: 2, w: 1, h: 1, type: "wallJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],


    },
    {
        title: "wallJumpSpikes",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/wallJumpSpikes.png",
        platforms: [
            { x: 0, y: 12, w: 5, h: 3 },
            { x: 0, y: 0, w: 3, h: 1 },
            { x: 0, y: 1, w: 1, h: 4 },
            { x: 1, y: 3, w: 5, h: 2 },
            { x: 6, y: 2, w: 2, h: 3 },
            { x: 6, y: 8, w: 3, h: 0.5 },
            { x: 11, y: 0, w: 5, h: 6 },
            { x: 11, y: 10, w: 2, h: 0.5 },
            { x: 11, y: 14, w: 6, h: 1 },
            { x: 19, y: 6, w: 6, h: 0.5 },
            { x: 21, y: 10, w: 2, h: 0.5 },
            { x: 26, y: 3, w: 5, h: 0.5 },
            { x: 27, y: 10, w: 3, h: 5 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
            { x: 1, y: 1, w: 1, h: 2 },

            { x: 21, y: 5, w: 2, h: 1 },
        ],
        items: [
            { x: 2.5, y: 1.5, w: 0.5, h: 0.5, type: "key" },
            { x: 15.25, y: 10, w: 0.5, h: 0.5, type: "key" },
            { x: 27, y: 8, w: 1, h: 1, type: "wallJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],
    },
    {
        title: "towersLevel",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/towerLevel.png",
        platforms: [
            { x: 0, y: 12, w: 4, h: 3 },
            { x: 0, y: 3, w: 4, h: 0.5 },
            { x: 9, y: 4, w: 2, h: 11 },
            { x: 18, y: 5, w: 2, h: 10 },
            { x: 28, y: 3, w: 2, h: 12 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },

        ],
        deathBlocks: [

        ],
        items: [
            { x: 2, y: 1.2, w: 0.5, h: 0.5, type: "key" },
            { x: 15, y: 8, w: 0.5, h: 0.5, type: "key" },
            { x: 3, y: 10, w: 1, h: 1, type: "wallJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: []


    },
    {
        title: "doublePowerUp",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/doublePowerupmap.png",
        platforms: [
            { x: 0, y: 12, w: 8, h: 3 },
            { x: 0, y: 3, w: 3, h: 0.5 },
            { x: 0, y: 7, w: 3, h: 0.5 },
            { x: 15, y: 8, w: 3, h: 0.5 },
            { x: 27, y: 3, w: 3, h: 12 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },

        ],
        deathBlocks: [

        ],
        items: [
            { x: 2, y: 1.2, w: 0.5, h: 0.5, type: "key" },
            { x: 13, y: 6, w: 0.5, h: 0.5, type: "key" },
            { x: 16, y: 7, w: 1, h: 1, type: "doubleJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: []


    },
    {
        title: "longSpikes",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/longSpikesmap.png",
        platforms: [
            { x: 0, y: 12, w: 10, h: 3 },
            { x: 0, y: 3, w: 4, h: 0.5 },
            { x: 6, y: 6, w: 3, h: 0.5 },
            { x: 13, y: 9, w: 6, h: 0.5 },
            { x: 10, y: 14, w: 17, h: 1 },
            { x: 27, y: 10, w: 3, h: 5 },
            { x: 26, y: 3, w: 4, h: 0.5 },




            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
            { x: 10, y: 13, w: 17, h: 1 },
        ],
        items: [
            { x: 2.25, y: 1.25, w: 0.5, h: 0.5, type: "key" },
            { x: 23.25, y: 11.25, w: 0.5, h: 0.5, type: "key" },
            { x: 16, y: 7, w: 1, h: 1, type: "doubleJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],


    },
    {
        title: "longSpikes",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/jumpSpikemap.png",
        platforms: [
            { x: 0, y: 12, w: 7, h: 3 },
            { x: 0, y: 0, w: 7, h: 8 },
            { x: 7, y: 0, w: 9, h: 2 },
            { x: 7, y: 14, w: 19, h: 1 },
            { x: 12, y: 9, w: 5, h: 0.5 },
            { x: 22, y: 7, w: 4, h: 2 },
            { x: 26, y: 3, w: 4, h: 13 },




            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: 0, y: -10, w: 0.1, h: 40 },
        ],
        deathBlocks: [
            { x: 24, y: 13, w: 2, h: 1 },
            { x: 5, y: 11, w: 2, h: 1 },
            { x: 7, y: 5, w: 1, h: 1 },
            { x: 25, y: 6, w: 1, h: 1 },
        ],
        items: [
            { x: 8.25, y: 3.25, w: 0.5, h: 0.5, type: "key" },
            { x: 24, y: 10, w: 1, h: 1, type: "doubleJump" },
            { x: 14.25, y: 7.25, w: 0.5, h: 0.5, type: "key" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ],
        boxes: [],


    },








]
