var gameArray = [];
var userArray = [];
var gameCounter = 0;
var gameStatus = 0;
var userCounter = 0;
var autoPlay = 0;

/* gameArray with random numbers */
function randomArray() {
  for (var i = 0; i < 300; i++) {
    gameArray[i] = Math.floor(Math.random() * 4);
  }
}

/* start function */
function startGame() {

  $('.play_button').html('Good Luck!');
  $('.commentText').html('');

  setTimeout(function () {
    //add class and remove class
    switch (gameArray[gameCounter]) {
      case 0:
        $('.red').addClass('redAuto');
        setTimeout(function() {
          $('.red').removeClass('redAuto');
        }, 600);
        break;
      case 1:
        $('.green').addClass('greenAuto');
        setTimeout(function() {
          $('.green').removeClass('greenAuto');
        }, 600);
        break;
      case 2:
        $('.blue').addClass('blueAuto');
        setTimeout(function() {
          $('.blue').removeClass('blueAuto');
        }, 600);
        break;
      default:
        $('.yellow').addClass('yellowAuto');
        setTimeout(function() {
          $('.yellow').removeClass('yellowAuto');
        }, 600);
        break;
    }
    //if (0 < 0) ... if (0 < n)
    if (gameCounter < gameStatus) {
      gameCounter++;
      startGame();
    //start always at the first, but increase the gameStatus num
    } else {
      gameCounter = 0;
      gameStatus++;
      userCounter = 0;
    }
  }, 1200)

};
//click on a color
function getColor(num) {
  userArray[userCounter++] = num;
  for (var i = 0; i < userCounter; i++) {
    //are you clicked on the right color?
    //if yes, do nothig, if no, game over
    if (gameArray[i] != userArray[i]) {
      $('.commentText').html('Game Over!');
      $('.play_button').html('Restart!');
      //set everything to zero
      gameCounter = 0;
      gameStatus = 0;
      userCounter = 0;
      userArray = [];
      break;
    }
    //auto play
    if (i == (gameStatus - 1)) {
      startGame();
    }
  }
};
