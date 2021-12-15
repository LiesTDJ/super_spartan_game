'use strict'

// audio of the game
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
var lastPosition = 'rightSide'; // keep in a var the last position of the character

const windowSize = window.innerWidth;
console.log("🚀 ~ file: script.js ~ line 294 ~ windowSize", windowSize);

var InitialCharacterPosition = 250;
var elementMove = InitialCharacterPosition;

var moveIntervalId = 0;
var moveAnimationStarted = false;
var moveAttackAnimationStarted = false;
var staticIntervalId = 0;


const $enemyContainer = $('.enemyContainer');
const $enemyContent = $('enemyContent');

var InitialEnemyPosition = 700;
var moveEnemyIntervalId = 0;

var lifeCountCharacter = 3;
var lifeCountEnemy = 9;

const $trophy1 = $('.trophy1');
const $trophy2 = $('.trophy2');
const $trophy3 = $('.trophy3');