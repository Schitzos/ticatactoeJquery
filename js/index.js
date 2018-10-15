// JavaScript Document

var xPlayer = "x"
var oPlayer = "o"
var count = 0;
var o_win = 0;
var x_win = 0;
var turn = "";
var matrix = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
]
$(document).ready(function () {
    initGame();
    reset();
});

function initGame() {
    makeMove(turn);
}

function makeMove(player) {

    if (!player) {
        turn = xPlayer;
    }

    $('#game li').click(function () {
        var move = $(this).attr("data-grid");
        var grid = $(this).attr("id");
        var x = move.substr(0, move.indexOf('-'));
        var y = move.substr(2, move.indexOf('-'));
        checkGrid(x, y, turn, grid);
    });
}

function checkGrid(x, y, player, grid) {
    if (matrix[x - 1][y - 1] === null) {
        matrix[x - 1][y - 1] = player;
        fillGrid(player, grid);
        checkWinner(player);
        nextPlayer(player)
    } else {
        alert('The Grid already taken')
    }
}

function checkWinner(player) {
    for (var a = 0; a < matrix.length; a++) {
        if (matrix[a][0] !== null && matrix[a][0] === matrix[a][1] && matrix[a][1] === matrix[a][2]) {
            winner(player);
            return;
        }
        if (matrix[0][a] !== null && matrix[0][a] === matrix[1][a] && matrix[1][a] === matrix[2][a]) {
            winner(player);
            return;
        }
        if (matrix[0][0] !== null && matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
            winner(player);
            return;
        }
        if (matrix[2][0] !== null && matrix[2][0] === matrix[1][1] && matrix[1][1] === matrix[0][2]) {
            winner(player);
            return;
        }
    }
}

function fillGrid(player, grid) {
    $("#" + grid).text(player)
    if (player === 'x') {
        $("#" + grid).addClass('disable x btn-info')
    } else {
        $("#" + grid).addClass('disable o btn-primary')
    }
}

function nextPlayer(player) {
    if (player === xPlayer) {
        turn = oPlayer
    } else {
        turn = xPlayer
    }
}

function winner(player) {
    if (player === xPlayer) {
        x_win += 1;
        $('#x_win').text(x_win)
    } else {
        o_win += 1;
        $('#o_win').text(o_win)
    }
    clearField();
    alert(player + ' has win the game.');
}

function reset() {
    $("#reset").click(function () {
        clearField();
    });
}

function clearField() {
    $("#game li").text("+");
    $("#game li").removeClass('disable')
    $("#game li").removeClass('o')
    $("#game li").removeClass('x')
    $("#game li").removeClass('btn-primary')
    $("#game li").removeClass('btn-info')
    count = 0
    matrix = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}