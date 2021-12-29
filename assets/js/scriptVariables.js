'use strict'

// audio of the game :
const audioRunCharacter = new Audio('../audio/footsteps.mp3');
const audioDeathCharacter = new Audio('../audio/characterDeath.mp3');
const audioEnemyHurt = new Audio('../audio/enemyHurt.mp3');
const audioAttacksCharacter = new Audio('../audio/characterAttacks.mp3');
const audioLoosing = new Audio('../audio/loosing.mp3');
const audioWin = new Audio('../audio/win.mp3');
const audioTrophyAlert = new Audio('../audio/trophyAlert.mp3');

const $gameField = $('#gameField');
const $container = $('.container');
const $content = $('.content');
var lastPosition = 'rightSide'; // keep in a var the last direction/position of the character

const windowSize = window.innerWidth;

// Character settings :
var InitialCharacterPosition = 250;
var elementMove = InitialCharacterPosition;

var moveIntervalId = 0;
var moveAnimationStarted = false;
var moveAttackAnimationStarted = false;
var staticIntervalId = 0;

// Enemy settings :
const $enemyContainer = $('.enemyContainer');
const $enemyContent = $('enemyContent');

var InitialEnemyPosition = 850;
var moveEnemyIntervalId = 0;

//Life counters :
var lifeCountCharacter = 3;
var lifeCountEnemy = 9;

// Trophies settings :
const $trophy1 = $('.trophy1');
const $trophy2 = $('.trophy2');
const $trophy3 = $('.trophy3');

// Life left character settings :
const $heart1 = $('.heart1');
const $heart2 = $('.heart2');
const $heart3 = $('.heart3');

// Tactile command settings :
const $leftTactileTouch = $('.leftTouch');
const $attackTactileTouch = $('.attackTouch');
const $rightTactileTouch = $('.rightTouch');

// Custom Alerts for Intro and Outro :
const $alertIntro1 = $('#alertIntro1');
const $alertIntro2 = $('#alertIntro2');
const $alertIntro3 = $('#alertIntro3');

const $alertWin1 = $('.alertWin1')
const $alertWin2 = $('.alertWin2')
const $alertWin3 = $('.alertWin3')