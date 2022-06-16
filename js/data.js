const levels = [
    {
        title: "start",
        playerStartingPos: { x: 2, y: 10 },
        foreGround: "./assets/levels/start.png",
        platforms: [
            { x: 0, y:13, w:30, h: 2 },
            { x: 18, y: 11, w: 12, h: 2 },
            { x: 21, y: 9, w: 9, h: 2 },
            { x: 24, y: 6, w: 9, h: 3 },
            { x: 27, y: 3, w: 9, h: 3 },


            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: -2, y: -10, w: 2, h: 40 },
            
        ],
        deathBlocks: [
        ],
        items: [
        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 0 },
        ]

    },
       {
        title:"basicJump",
        playerStartingPos:{x:2,y:10},
        foreGround: "./assets/levels/basicJump.png",
        platforms:[
            { x:0,y:0,w:1,h:30},
            { x: 0, y: 3, w: 5, h: 2 },
            { x: 0, y: 14, w: 30, h: 1 },
            { x: 18, y: 11, w: 12, h: 3 },
            { x: 22, y: 7, w: 8, h: 2 },
            { x: 26, y: 3, w: 5, h: 2 },
            { x: 29, y: 3, w: 1, h: 12 },
            { x: 5, y: 7, w: 10, h: 2 },
            

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2 , h: 40},
            { x: -2, y: -10, w: 2, h: 40 }
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
        ]
        
    },
    {
        title:"basicJump",
        playerStartingPos:{x:2,y:10},
        foreGround: "./assets/levels/basicJump.png",
        platforms:[
            { x:0,y:0,w:1,h:30},
            { x: 0, y: 3, w: 5, h: 2 },
            { x: 0, y: 14, w: 30, h: 1 },
            { x: 18, y: 11, w: 12, h: 3 },
            { x: 22, y: 7, w: 8, h: 2 },
            { x: 26, y: 3, w: 5, h: 2 },
            { x: 29, y: 3, w: 1, h: 12 },
            { x: 5, y: 7, w: 10, h: 2 },
            

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2 , h: 40},
            { x: -2, y: -10, w: 2, h: 40 }
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
        ]
        
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

            {x:20,y:6,w:3,h:0.5},

            { x: 26, y: 3, w: 4, h: 12 },

            //outOfBoundsWalls
            { x: 30, y: -10, w: 2, h: 40 },
            { x: -2, y: -10, w: 2, h: 40 }
        ],
        deathBlocks: [
            { x: 4, y: 13, w: 3, h: 1 },
            { x: 10, y: 13, w: 4, h: 1 },
        ],
        items: [

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 0 },
        ]

    },
    {
        title: "doubleJump",
        playerStartingPos: { x: 6, y: 10 },
        foreGround:"./assets/levels/doubleJump.png",
        platforms: [
            { x: 0, y: 1, w: 5, h: 6},
            { x: 0, y: 12, w: 8, h: 3},
            { x: 0, y: 0, w: 30, h: 1},
            { x: 13, y: 0, w: 5, h: 4},
            { x: 8, y: 6, w: 5, h: 9},
            { x: 18, y: 6, w: 4, h: 9},
            { x: 27, y: 3, w: 3, h: 12},
        ],
        deathBlocks: [
        ],
        items: [
            { x: 15, y: 8, w: 0.5, h: 0.5, type: "key" },
            { x: 6, y: 6, w: 0.5, h: 0.5, type: "key" },
            { x: 4, y: 10, w: 0.5, h: 0.5, type: "wallJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 3, color: 'brown', keyNumber: 2 },
        ]
    },
    {
        title: "doubleJumpIslands",
        playerStartingPos: { x: 1, y: 10 },
        foreGround: "./assets/levels/DoubleJumpIslands.png",
        platforms: [
            { x: 0, y: 12, w: 8, h: 3},
            { x: 0, y: 2, w: 6, h: 0.5},
            { x: 12, y: 6, w: 6, h: 0.5},
            { x: 14, y: 12, w: 3, h: 0.5},
            { x: 24, y: 13, w: 6, h: 2},
            { x: 26, y: 7, w: 4, h: 0.5},
            { x: 26, y: 2, w: 4, h: 0.5},
        ],
        deathBlocks: [
            //{ x: 300, y: 400, w: 100, h: 30, color: 'black' },
        ],
        items: [
            { x: 1, y: 1, w: 0.5, h: 0.5, type: "key" },
            { x: 15.25, y: 10, w: 0.5, h: 0.5, type: "key" },
            { x: 27, y: 11, w: 0.5, h: 0.5, type: "doubleJump" },

        ],
        doors: [
            { x: 29, y: 0, w: 1, h: 2, color: 'brown', keyNumber: 2 },
        ]
        },
        {
        title: "1-2",
        playerStartingPos: { x: 25, y: 480 },
        platforms: [
            { x: 0, y: 0, w: 5, h: 495, color: 'gray' },
            { x: 995, y: 0, w: 5, h: 500, color: 'gray' },
            { x: 0, y: 0, w: 1000, h: 5, color: 'gray' },
            { x: 0, y: 495, w: 1000, h: 5, color: 'gray' },
            { x: 155, y: 140, w: 20, h: 200, color: 'purple' },
            { x: 220, y: 210, w: 300, h: 5, color: 'purple' },
            { x: 5, y: 420, w: 420, h: 5, color: 'purple' },
            { x: 160, y: 475, w: 300, h: 20, color: 'purple' },
            { x: 700, y: 5, w: 5, h: 400, color: 'purple' },
            { x: 780, y: 420, w: 215, h: 5, color: 'purple' },
            { x: 925, y: 60, w: 70, h: 5, color: 'purple' },
            { x: 905, y: 180, w: 90, h: 5, color: 'purple' },
            { x: 885, y: 300, w: 110, h: 5, color: 'purple' },


        ],
        deathBlocks: [
            { x: 460, y: 475, w: 50, h: 20, color: 'black' },
        ],
        items: [
            { x: 925, y: 430, w: 10, h: 10, type: "key" },
            { x: 25, y: 250, w: 10, h: 10, type: "key" },
            { x: 70, y: 250, w: 10, h: 10, type: "doubleJump" }

        ],
        doors: [
            { x: 925, y: 5, w: 70, h: 55, color: 'brown', keyNumber: 2 },
        ]
    },
    {
        title: "1-3",
        playerStartingPos: { x: 25, y: 450 },
        platforms: [
            { x: 0, y: 480, w: 100, h: 20, color: 'gray' },
            { x: 200, y: 70, w: 20, h: 330, color: 'purple' },
            { x: 500, y: 70, w: 20, h: 330, color: 'purple' },




        ],
        deathBlocks: [
            //{ x: 300, y: 400, w: 100, h: 30, color: 'black' },
        ],
        items: [
            { x: 400, y: 250, w: 10, h: 10, type: "key" },
            { x: 25, y: 400, w: 10, h: 10, type: "wallJump" },
            { x: 600, y: 200, w: 10, h: 10, type: "doubleJump" }

        ],
        doors: [
            { x: 930, y: 5, w: 70, h: 55, color: 'brown', keyNumber: 1 }
        ]


    },

    {
        title: "1-4",
        playerStartingPos: { x: 25, y: 480 },
        platforms: [
            { x: 0, y: 0, w: 5, h: 495, color: 'gray' },
            { x: 995, y: 0, w: 5, h: 500, color: 'gray' },
            { x: 0, y: 0, w: 1000, h: 5, color: 'gray' },
            { x: 0, y: 495, w: 1000, h: 5, color: 'gray' },
            { x: 180, y: 400, w: 250, h: 5, color: 'purple' },
            { x: 5, y: 110, w: 150, h: 5, color: 'purple' },
            { x: 55, y: 5, w: 5, h: 65, color: 'purple' },
            { x: 200, y: 200, w: 150, h: 5, color: 'purple' },
            { x: 620, y: 150, w: 150, h: 5, color: 'purple' },
            { x: 655, y: 300, w: 340, h: 5, color: 'purple' },
            { x: 685, y: 350, w: 5, h: 145, color: 'purple' },
            { x: 690, y: 400, w: 185, h: 5, color: 'purple' },
            { x: 770, y: 80, w: 5, h: 225, color: 'purple' },
            { x: 925, y: 60, w: 70, h: 5, color: 'purple' },
            { x: 925, y: 200, w: 70, h: 5, color: 'purple' },


        ],
        deathBlocks: [
            { x: 5, y: 70, w: 10, h: 5, color: 'black' },
            { x: 200, y: 190, w: 5, h: 10, color: 'black' },
            { x: 345, y: 190, w: 5, h: 10, color: 'black' },
            { x: 650, y: 300, w: 5, h: 10, color: 'black' },
            { x: 620, y: 155, w: 150, h: 5, color: 'black' },
            { x: 690, y: 405, w: 100, h: 5, color: 'black' },
            { x: 795, y: 490, w: 35, h: 5, color: 'black' }




        ],
        items: [
            { x: 150, y: 300, w: 10, h: 10, type: "key" },
            { x: 700, y: 470, w: 10, h: 10, type: "key" },
            { x: 450, y: 300, w: 10, h: 10, type: "key" },
            { x: 10, y: 10, w: 10, h: 10, type: "key" },



        ],
        doors: [
            { x: 925, y: 5, w: 70, h: 55, color: 'brown', keyNumber: 2 },
        ]

    }






]
