var pileOfRocks = "@".repeat(16).split('')
var playerTurn = "Player#1";
var rocksChosen = 0;
var playingTheGame = true;


function computerPick() {
  for (var i = 0; i < (4 - parseInt(rocksChosen)); i++) {
    pileOfRocks.pop();
  }
  alert(playerTurn + " chose " + (4 - Number(rocksChosen)) + " rocks . There are " + pileOfRocks.length + " remaining.")
  playerTurn = 'Player#1';
}

function printRockPile() {
  document.writeln("Rock pile: " + pileOfRocks + "</br>");
  console.log("Rock pile: " + pileOfRocks);
}

function isWinner(pileOfRocks) {
  if (pileOfRocks.length <= 3) {
    document.writeln(playerTurn + ' is the winner!');
    console.log(playerTurn + ' is the winner!');

    playingTheGame = false;
  }
}

function pickSomeRocks() {
  if (playerTurn === 'Player#1') {
    var numberOfRocks = prompt(playerTurn + "'s turn. There are " + pileOfRocks.length + " rocks remaining." + "\n" +
      "How many rocks do you choose? 1-3");
    if (numberOfRocks <= pileOfRocks.length && numberOfRocks <= 3 && numberOfRocks >= 1) {
      for (var i = 0; i < numberOfRocks; i++)
        pileOfRocks.pop();

      rocksChosen = numberOfRocks;
      playerTurn = 'Player#2';
    } else
      alert('You must pick a number between 1 and 3.');

  } else
    computerPick();;

  printRockPile();
  isWinner(pileOfRocks);
}

function playGame() {
  while (playingTheGame) {
    pickSomeRocks();
  }

}




// printBoard();