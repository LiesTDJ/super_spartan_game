'use strict'

const spriteMovePosition = {
    staticRight: [{
            // static right position
            maskContainerWidth: 80,
            spritePositionLeft: -4529
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -4688
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -4845
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -5005
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -5163
        },
    ],
    staticLeft: [{
            // static left position
            maskContainerWidth: 80,
            spritePositionLeft: -9012
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -8856
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -8700
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -8545
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -8389
        },
    ],
    
    attackRight: [{
            maskContainerWidth: 80,
            spritePositionLeft: 0
        },
        {
            maskContainerWidth: 104,
            spritePositionLeft: -223
        },
        {
            maskContainerWidth: 119,
            spritePositionLeft: -439
        },
        {
            maskContainerWidth: 136,
            spritePositionLeft: -649
        },
        {
            maskContainerWidth: 133,
            spritePositionLeft: -845
        },
        {
            maskContainerWidth: 133,
            spritePositionLeft: -1059
        },
        {
            maskContainerWidth: 190,
            spritePositionLeft: -1303
        },
        {
            maskContainerWidth: 147,
            spritePositionLeft: -1526
        },
        {
            maskContainerWidth: 111,
            spritePositionLeft: -1746
        },
    ],

    deathRight: [{
            maskContainerWidth: 83,
            spritePositionLeft: -2197
        },
        {
            maskContainerWidth: 106,
            spritePositionLeft: -2367
        },
        {
            maskContainerWidth: 129,
            spritePositionLeft: -2522
        },
        {
            maskContainerWidth: 155,
            spritePositionLeft: -2671
        },
        {
            maskContainerWidth: 159,
            spritePositionLeft: -2827
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -2988
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3151
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3312
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3474
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3635
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3797
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -3959
        },
    ],


    runRight: [{
            maskContainerWidth: 80,
            spritePositionLeft: -5660
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -5818
        },
        {
            maskContainerWidth: 84,
            spritePositionLeft: -5973
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -6135
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -6292
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -6451
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -6610
        },
    ],
    
    attackLeft: [{
            maskContainerWidth: 80,
            spritePositionLeft: -13460
        },
        {
            maskContainerWidth: 106,
            spritePositionLeft: -13217
        },
        {
            maskContainerWidth: 120,
            spritePositionLeft: -12990
        },
        {
            maskContainerWidth: 136,
            spritePositionLeft: -12768
        },
        {
            maskContainerWidth: 132,
            spritePositionLeft: -12578
        },
        {
            maskContainerWidth: 132,
            spritePositionLeft: -12368
        },
        {
            maskContainerWidth: 190,
            spritePositionLeft: -12074
        },
        {
            maskContainerWidth: 147,
            spritePositionLeft: -11896
        },
        {
            maskContainerWidth: 111,
            spritePositionLeft: -11714
        },
    ],

    deathLeft: [{
            maskContainerWidth: 83,
            spritePositionLeft: -11299
        },
        {
            maskContainerWidth: 106,
            spritePositionLeft: -11109
        },
        {
            maskContainerWidth: 129,
            spritePositionLeft: -10935
        },
        {
            maskContainerWidth: 155,
            spritePositionLeft: -10764
        },
        {
            maskContainerWidth: 159,
            spritePositionLeft: -10606
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -10464
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -10304
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -10146
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -9986
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -9827
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -9668
        },
        {
            maskContainerWidth: 143,
            spritePositionLeft: -9509
        },
    ],


    runLeft: [{
            maskContainerWidth: 80,
            spritePositionLeft: -7901
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -7745
        },
        {
            maskContainerWidth: 84,
            spritePositionLeft: -7589
        },
        {
            maskContainerWidth: 80,
            spritePositionLeft: -7434
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -7278
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -7123
        },
        {
            maskContainerWidth: 82,
            spritePositionLeft: -6968
        },
    ]
};

const $gameField = $('#gameField');
const $container = $('.container');
const $content = $('.content');
var lastPosition = 'rightSide'; // keep in a var the last position of the character

const windowSize = window.innerWidth;
console.log("🚀 ~ file: script.js ~ line 294 ~ windowSize", windowSize);

var InitialCharacterPosition = 250;
var elementMove = InitialCharacterPosition;

var moveIntervalId = 0;
var moveAnimationStarted = false;
var moveAttackAnimationStarted = false;
var staticIntervalId = 0;

const moveMethod = {
    static: function() {
        if (lastPosition == 'rightSide') {
            let i = 0;
            let idInterval = setInterval(function(){
                let length = spriteMovePosition.staticRight.length; 
                let newPositionLeft = spriteMovePosition.staticRight[i].spritePositionLeft;
                $content.css('left', newPositionLeft);
                $container.width(spriteMovePosition.staticRight[i].maskContainerWidth);
                i++;
                if (i == spriteMovePosition.staticRight.length) {
                    i = 0;
                }
            },125);
            return idInterval;
        } else if (lastPosition == 'leftSide') {
            let i = 0;
            let idInterval = setInterval(function(){
                let length = spriteMovePosition.staticLeft.length; 
                let newPositionLeft = spriteMovePosition.staticLeft[i].spritePositionLeft;
                $content.css('left', newPositionLeft);
                $container.width(spriteMovePosition.staticLeft[i].maskContainerWidth);
                i++;
                if (i == spriteMovePosition.staticLeft.length) {
                    i = 0;
                }
            },125);
            return idInterval;
        }
    },
    
    actionAttackRight: function() {
        
        // The enemy is getting hurt
        moveEnemyMethod.hurtEnemy();

        let i = 0;
        let idInterval = setInterval(function(){
            let length = spriteMovePosition.attackRight.length; 
            let newPositionLeft = spriteMovePosition.attackRight[i].spritePositionLeft;
            $content.css('left', newPositionLeft);
            $container.width(spriteMovePosition.attackRight[i].maskContainerWidth);
            i++;
            if (i == spriteMovePosition.attackRight.length) {
                i = 0;
                clearInterval(idInterval);
                moveAttackAnimationStarted = false;
            }
        },45);
        return idInterval;
    },

    actionAttackLeft: function() {        
        let i = 0;
        let idInterval = setInterval(function(){
            let length = spriteMovePosition.attackLeft.length; 
            let newPositionLeft = spriteMovePosition.attackLeft[i].spritePositionLeft;
            $content.css('left', newPositionLeft);
            $container.width(spriteMovePosition.attackLeft[i].maskContainerWidth);
            i++;
            if (i == spriteMovePosition.attackLeft.length) {
                i = 0;
            }
        },45);
        return idInterval;
    },

    spriteMovementAction: function(addPosition) {
        //The character should not got out of the game field
        if (elementMove <= 250) { //For the left move
            elementMove = elementMove + 1;
            $container.css('left', elementMove);
        } else if (elementMove >= 750) { //for the right move
            elementMove = elementMove - 1;
            $container.css('left', elementMove);
        } else {
            elementMove = parseInt(elementMove) + addPosition;
            $container.css('left', elementMove);
        }
    },

    moveRight: function(addPosition) {
        let i = 0;
        let idInterval = setInterval(function(){
            moveMethod.bgParallaxRight();
            moveMethod.spriteMovementAction(addPosition);
            let length = spriteMovePosition.runRight.length; 
            let newPositionLeft = spriteMovePosition.runRight[i].spritePositionLeft;
            $content.css('left', newPositionLeft);
            $container.width(spriteMovePosition.runRight[i].maskContainerWidth);
            i++;
            if (i == spriteMovePosition.runRight.length) {
                i = 0;
            }
        },50);
        return idInterval;
    },

    moveLeft: function(addPosition) {
        let i = 0;
        let idInterval = setInterval(function(){
            moveMethod.bgParallaxLeft();
            moveMethod.spriteMovementAction(addPosition);
            let length = spriteMovePosition.runLeft.length; 
            let newPositionLeft = spriteMovePosition.runLeft[i].spritePositionLeft;
            $content.css('left', newPositionLeft);
            $container.width(spriteMovePosition.runLeft[i].maskContainerWidth);
            i++;
            if (i == spriteMovePosition.runLeft.length) {
                i = 0;
            }
        },50);
        return idInterval;
    },
    bgParallaxRight: function() {
        let bgPosition = $gameField.css('background-position-x');
        let bgArrayPosition = bgPosition.split('px, ');
        bgArrayPosition[0] = parseInt(bgArrayPosition[0]) - 15;
        bgArrayPosition[1] = parseInt(bgArrayPosition[1]) - 7;
        bgArrayPosition[2] = parseInt(bgArrayPosition[2]) - 3;
        bgPosition = bgArrayPosition[0] + 'px, ' +
        bgArrayPosition[1] + 'px, ' +
        bgArrayPosition[2] + 'px, 15px';
        $gameField.css('background-position-x', bgPosition);
        
    },
    bgParallaxLeft: function() {
        let bgPosition = $gameField.css('background-position-x');
        let bgArrayPosition = bgPosition.split('px, ');
        bgArrayPosition[0] = parseInt(bgArrayPosition[0]) + 15;
        bgArrayPosition[1] = parseInt(bgArrayPosition[1]) + 7;
        bgArrayPosition[2] = parseInt(bgArrayPosition[2]) + 3;
        bgPosition = bgArrayPosition[0] + 'px, ' +
        bgArrayPosition[1] + 'px, ' +
        bgArrayPosition[2] + 'px, 15px';
        $gameField.css('background-position-x', bgPosition);
        
    },
    deathAction: function() {
        let i = 0;
        let idInterval = setInterval(function(){            
            window.clearInterval(staticIntervalId);
            window.clearInterval(moveIntervalId);
            let length = spriteMovePosition.deathRight.length; 
            let newPositionLeft = spriteMovePosition.deathRight[i].spritePositionLeft;
            $content.css('left', newPositionLeft);
            $container.width(spriteMovePosition.deathRight[i].maskContainerWidth);
            i++;
            if (i == spriteMovePosition.deathRight.length) {
                i = 0;
                clearInterval(idInterval);
            }
        },50);

        // Make the character disappear after his death.
        setTimeout(function() {$container.addClass('deadCharacter');}, 600);
        setTimeout(function() {$container.css('display', 'none')},1000);
        let alertRetry = 'GAME OVER. Cliquez "OK" pour recommencer.';
        setTimeout(function() {
            alert(alertRetry);
            location.reload();
        },1600);
    }
};


$(function() {

    //Setting of the initial position of the character
    $container.css('left', InitialCharacterPosition);

    window.onkeyup = function(event){
        // Static movement
        window.clearInterval(staticIntervalId);
        window.clearInterval(moveIntervalId);        moveAnimationStarted = false;
        moveAttackAnimationStarted = false;
        staticIntervalId = moveMethod.static();
    }
    
    window.onkeydown = function(event){

        var code = event.keyCode;

        switch(code){
            case 39:
            // Move to the right by right arrow key

            if (moveAnimationStarted === false) {
                window.clearInterval(staticIntervalId);
                window.clearInterval(moveIntervalId);                moveIntervalId = moveMethod.moveRight(10);
                moveAnimationStarted = true;
            }
            lastPosition = 'rightSide';            
            break;
            
            case 37:
            // move to the left by left arrow key

            if (moveAnimationStarted === false) {
                window.clearInterval(staticIntervalId);
                window.clearInterval(moveIntervalId);
                moveIntervalId = moveMethod.moveLeft(-10);
                moveAnimationStarted = true;
            }
            lastPosition = 'leftSide';            
            break;
                
            case 32:
            // attack move by space key
            
            if (lastPosition == 'rightSide') {
                if (moveAttackAnimationStarted === false) {
                    window.clearInterval(staticIntervalId);
                    window.clearInterval(moveIntervalId);
                    moveIntervalId = moveMethod.actionAttackRight();
                    moveAttackAnimationStarted = true;
                }
            } else if (lastPosition == 'leftSide') {
                if (moveAttackAnimationStarted === false) {
                    window.clearInterval(staticIntervalId);
                    window.clearInterval(moveIntervalId);
                    moveIntervalId = moveMethod.actionAttackLeft();
                    moveAttackAnimationStarted = true;
                }
            }
            break;
        };
    };
});