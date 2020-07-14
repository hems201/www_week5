import "./styles.css";

var turn = 0;
let player = "X"; //current player
let status = "Game on"; //shows the game status, default id game on
const cells = document.getElementsByClassName("cell"); //all cell elements

//goes through all cells and adds EventListener
for (let i = 0; i < cells.length; i++) {
  //cells[i].addEventListener("click", cellClick(i));
  cells[i].addEventListener("click", function() {
    cellClick(i);
  });
}

//Event listener fot Restart button
document.getElementById("restart").addEventListener("click", restart);

//Function for clicked cell
function cellClick(i) {
  if (cells[i].innerHTML.trim() === "" && status === "Game on") {
    //checks that the cell is empty and game is on
    cells[i].innerHTML = player; //current player's mark is written to clicked cell
    //player is switched

    //check if there are 5 matching symbols in a row
    for (let j = 0; j < 25; j = j + 5) {
      if (
        cells[j].innerHTML !== "" &&
        cells[j].innerHTML === cells[j + 1].innerHTML &&
        cells[j].innerHTML === cells[j + 2].innerHTML &&
        cells[j].innerHTML === cells[j + 3].innerHTML &&
        cells[j].innerHTML === cells[j + 4].innerHTML
      ) {
        winner(j, j + 1, j + 2, j + 3, j + 4); //trigger winning function if winning requirements are met
      }
    }
    //check if there are 5 matching symbols in a column
    for (let k = 0; k < 5; k = k + 1) {
      if (
        cells[k].innerHTML !== "" &&
        cells[k].innerHTML === cells[k + 5].innerHTML &&
        cells[k].innerHTML === cells[k + 10].innerHTML &&
        cells[k].innerHTML === cells[k + 15].innerHTML &&
        cells[k].innerHTML === cells[k + 20].innerHTML
      ) {
        winner(k, k + 5, k + 10, k + 15, k + 20);
      }
      //check if there are 5 matching symbols accross the table
    }
    if (
      cells[0].innerHTML !== "" &&
      cells[0].innerHTML === cells[6].innerHTML &&
      cells[0].innerHTML === cells[12].innerHTML &&
      cells[0].innerHTML === cells[18].innerHTML &&
      cells[0].innerHTML === cells[24].innerHTML
    ) {
      winner(0, 6, 12, 18, 24);
    } else if (
      cells[4].innerHTML !== "" &&
      cells[4].innerHTML === cells[8].innerHTML &&
      cells[4].innerHTML === cells[12].innerHTML &&
      cells[4].innerHTML === cells[16].innerHTML &&
      cells[4].innerHTML === cells[20].innerHTML
    ) {
      winner(4, 8, 12, 16, 20);
    }
    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }

    document.getElementById("player").innerHTML = player.toUpperCase();
    //if all the boxes are filled but there has been no win, alert tie
    turn = turn + 1;
    if (turn === 25) {
      alert("It's a tie! No winners here.");
    }
  }
}

function winner(a, b, c, d, e) {
  //if game is won
  //highlight winner cells
  turn = 0; //make turn 0 so that the tie message won't be executed
  cells[a].style.backgroundColor = "green";
  cells[b].style.backgroundColor = "green";
  cells[c].style.backgroundColor = "green";
  cells[d].style.backgroundColor = "green";
  cells[e].style.backgroundColor = "green";
  alert("Game over, player " + player + " won!");
  status = "Game over"; //end game
}

//when restart button is pressed
function restart() {
  //make cells blank again and reset color
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "black";
  }
  //change player to player X again and set game status to "game on"
  player = "X";
  status = "Game on";
  turn = 0;
}
