'use strict'

const $enemyContainer = $('.enemyContainer');
const $enemyContent = $('enemyContent');

var InitialEnemyPosition = windowSize * .80;

const moveEnemyMethod = {
    moveLeft: function() {
        let idInterval = setInterval(function() {
            let curentEnemyPosition = parseFloat($enemyContainer.css('left'));
            curentEnemyPosition = curentEnemyPosition - 3;
            $enemyContainer.css('left', curentEnemyPosition);
        },50)
    },
};

$(function() {
    $enemyContainer.css('left', InitialEnemyPosition);

    moveEnemyMethod.moveLeft();

});
