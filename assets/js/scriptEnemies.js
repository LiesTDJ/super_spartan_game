'use strict'

const $enemyContainer = $('.enemyContainer');
const $enemyContent = $('enemyContent');


var InitialEnemyPosition = 700;

var lifeCountCharacter = 4;
var lifeCountEnemy = 4;

var enemyPosition

const moveEnemyMethod = {
    moveLeft: function() {
        let idInterval = setInterval(function() {
            let curentEnemyPosition = parseFloat($enemyContainer.css('left'));
            curentEnemyPosition = curentEnemyPosition - 3;
            $enemyContainer.css('left', curentEnemyPosition);
        },50)
    },
    attackEnemyAction: function() {
        if (parseFloat($container.css('left')) + 40 >= parseFloat($enemyContainer.css('left'))) { 
            let curentCharacterPosition = parseFloat($container.css('left'));
            curentCharacterPosition = parseFloat($container.css('left')) - 60;
            $container.css('left', curentCharacterPosition);

            lifeCountCharacter = lifeCountCharacter - 1;

            if (lifeCountCharacter == 0) {
                moveMethod.deathAction();
            }
        }
    },
    hurtEnemy: function() {
        if (parseFloat($container.css('left')) + 150 >= parseFloat($enemyContainer.css('left'))) { 
            let curentEnemyPosition = parseFloat($enemyContainer.css('left'));
            curentEnemyPosition = parseFloat($enemyContainer.css('left')) + 100;
            $enemyContainer.css('left', curentEnemyPosition);
    
            lifeCountEnemy = lifeCountEnemy - 1;

            console.log("🚀 ~ file: scriptEnemies.js ~ line 42 ~  lifeCountEnemy", lifeCountEnemy)
    
            if (lifeCountEnemy == 0) {
                // Make the enemy disappear after his death.
                setTimeout(function() {$enemyContainer.addClass('deadCharacter');}, 600);

                $enemyContainer.parentNode.removeChild($enemyContainer);
            }
        }
    }
};

$(function() {
    $enemyContainer.css('left', InitialEnemyPosition);

    moveEnemyMethod.moveLeft();

    setInterval(moveEnemyMethod.attackEnemyAction, 100);
});
