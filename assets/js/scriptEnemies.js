'use strict'

const moveEnemyMethod = {
    moveLeft: function() {
        let idInterval = setInterval(function() {
            let curentEnemyPosition = parseFloat($enemyContainer.css('left'));
            if (lifeCountCharacter > 0 && lifeCountEnemy > 0) {
                curentEnemyPosition = curentEnemyPosition - 3;
                $enemyContainer.css('left', curentEnemyPosition);
            }
             else {
                setTimeout(function() {
                    $enemyContainer.css('left', 850);
                },1100) 
            }
            
        },50)
    },
    attackEnemyAction: function() {
        if (parseFloat($container.css('left')) + 40 >= parseFloat($enemyContainer.css('left'))) { 
            if (lifeCountCharacter > 0) {
                //Sound of the character getting hurt
                audioDeathCharacter.play();
            }

            let curentCharacterPosition = parseFloat($container.css('left'));
            curentCharacterPosition = parseFloat($container.css('left')) - 60;
            $container.css('left', curentCharacterPosition);
            
            lifeCountCharacter = lifeCountCharacter - 1;

            // Life points status of the character:

            if (lifeCountCharacter == 2) {
                $heart1.css('display', 'none');
            }

            if (lifeCountCharacter == 1) {
                $heart2.css('display', 'none');
            }

            if (lifeCountCharacter == 0) {
                $heart3.css('display', 'none');
            }

            if (lifeCountCharacter == 0) {
                //Sound of the character dying
                audioLoosing.play();

                moveMethod.deathAction();
            }
        }
    },
    hurtEnemy: function() {
        if (parseFloat($container.css('left')) + 150 >= parseFloat($enemyContainer.css('left'))) {           
            //Sound of the enemy getting hurt
            audioEnemyHurt.play();
            
            
            let curentEnemyPosition = parseFloat($enemyContainer.css('left'));
            curentEnemyPosition = parseFloat($enemyContainer.css('left')) + 125;
            $enemyContainer.css('left', curentEnemyPosition);
            
            lifeCountEnemy = lifeCountEnemy - 1;
            
            console.log("🚀 ~ file: scriptEnemies.js ~ line 42 ~  lifeCountEnemy", lifeCountEnemy)

            // Appearing of the trophies
            
            if (lifeCountEnemy == 6) {
                $trophy1.css('display', 'flex');
                console.log('1er trophée');
                //Sound of the winning trophy
                audioTrophyAlert.play();
            }

            if (lifeCountEnemy == 3) {
                $trophy2.css('display', 'flex');
                console.log('2ème trophée');
                //Sound of the winning trophy
                audioTrophyAlert.play();
            }

            if (lifeCountEnemy == 0) {
                $trophy3.css('display', 'flex');
                console.log('3ème trophée');
            }
    
            if (lifeCountEnemy == 0) {
                //Sound of the winning award
                audioWin.play();

                // Make the enemy disappear after his death.
                setTimeout(function() {
                    $enemyContainer.addClass('deadCharacter');
                }, 600);

                setTimeout(function() {
                    $enemyContainer.removeClass('enemyContainer').addClass('enemyNoneContainer');

                    alert('BRAVO, vous avez battu Mr WWW!');
                    location.href = 'score.html';

                }, 7000);
            }
        }
    }
};

$(function() {
    $enemyContainer.css('left', InitialEnemyPosition);

    moveEnemyIntervalId = moveEnemyMethod.moveLeft();

    setInterval(moveEnemyMethod.attackEnemyAction, 100);
    
});
