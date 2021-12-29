'use strict'

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
        //Sound of the character attacking
        audioAttacksCharacter.play();
        
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
        //Sound of the character attacking
        audioAttacksCharacter.play();
              
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
        //Sound of the running character
        audioRunCharacter.play();

        //The character should not got out of the game field
        if (elementMove <= 250) { //For the left move
            elementMove = elementMove + 1;
            $container.css('left', elementMove);
        } else if (elementMove >= 650) { //for the right move
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
        },3000);
    },

    case39: function() {
        if (moveAnimationStarted === false) {
            window.clearInterval(staticIntervalId);
            window.clearInterval(moveIntervalId);
            moveIntervalId = moveMethod.moveRight(10);
            moveAnimationStarted = true;
        }
        lastPosition = 'rightSide';
    },

    case37: function() {
        if (moveAnimationStarted === false) {
            window.clearInterval(staticIntervalId);
            window.clearInterval(moveIntervalId);
            moveIntervalId = moveMethod.moveLeft(-10);
            moveAnimationStarted = true;
        }
        lastPosition = 'leftSide';
    },
    
    case32: function() {
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
    }
};


$(function() {

    //Intro and command button in custom alerts:
    alertMethod.functionAlertIntro1();

    //Setting of the initial position of the character:
    $container.css('left', InitialCharacterPosition);

    window.onkeyup = function(event){
        // Static movement
        window.clearInterval(staticIntervalId);
        window.clearInterval(moveIntervalId);
        moveAnimationStarted = false;
        moveAttackAnimationStarted = false;
        staticIntervalId = moveMethod.static();
    }
    
    window.onkeydown = function(event){

        var code = event.keyCode;

        switch(code){
            case 39:
            // Move to the right by right arrow key
            moveMethod.case39();

            break;
            
            case 37:
            // move to the left by left arrow key
            moveMethod.case37();
            
            break;
                
            case 32:
            // attack move by space key            
            moveMethod.case32();

            break;
        };
    };

    // Tactile touch command:
    $leftTactileTouch.mouseenter(moveMethod.case37);
    $leftTactileTouch.mouseleave(window.clearInterval(moveIntervalId));

    $rightTactileTouch.mouseenter(moveMethod.case39);
    $rightTactileTouch.mouseleave(window.clearInterval(moveIntervalId));
    
    $attackTactileTouch.mouseenter(moveMethod.case32);
    $attackTactileTouch.mouseleave(window.clearInterval(moveIntervalId));
});