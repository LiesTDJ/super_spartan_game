'use strict'

const $enemyContainer = $('.enemyContainer');
const $enemyContent = $('enemyContent');


var InitialEnemyPosition = 700;
var moveEnemyIntervalId = 0;


var lifeCountCharacter = 4;
var lifeCountEnemy = 4;

const $trophy1 = $('.trophy1');
const $trophy2 = $('.trophy2');
const $trophy3 = $('.trophy3');

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

            // Appearing of the trophies

            if (lifeCountEnemy == 3) {
                $trophy1.css('display', 'flex');
                console.log('1er trophée');
            }

            if (lifeCountEnemy == 2) {
                $trophy2.css('display', 'flex');
                console.log('2ème trophée');
            }

            if (lifeCountEnemy == 1) {
                $trophy3.css('display', 'flex');
                console.log('3ème trophée');
            }
    
            if (lifeCountEnemy == 0) {
                // Make the enemy disappear after his death.
                setTimeout(function() {
                    $enemyContainer.addClass('deadCharacter');
                }, 600);

                setTimeout(function() {
                    $enemyContainer.removeClass('enemyContainer').addClass('enemyNoneContainer');

                    alert('BRAVO, vous avez battu Mr WWW!');
                    location.href = 'score.html';

                }, 1500);
            }
        }
    }
};

$(function() {
    $enemyContainer.css('left', InitialEnemyPosition);

    moveEnemyIntervalId = moveEnemyMethod.moveLeft();

    setInterval(moveEnemyMethod.attackEnemyAction, 100);
    
});
