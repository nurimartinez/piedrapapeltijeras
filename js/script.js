//Script pantalla principal

const ROCK = document.querySelector(".rock").addEventListener("click", rockGame);
const PAPER = document.querySelector(".paper").addEventListener("click", paperGame);
const SCISSORS = document.querySelector(".scissors").addEventListener("click", scissorsGame);
let playerGame;
let machineGame;
let playerCounter = 0;
let machineCounter = 0;

function rockGame() {
  document.querySelector(".game-player img").setAttribute("src", "img/rock.png");
  document.getElementById("clickSound").play()
  playerGame = 0;
  setMachineGame();
}

function paperGame() {
  document.querySelector(".game-player img").setAttribute("src", "img/paper.png");
  document.getElementById("clickSound").play()
  playerGame = 1;
  setMachineGame();
}

function scissorsGame() {
  document.querySelector(".game-player img").setAttribute("src", "img/scissors.png");
  document.getElementById("clickSound").play()
  playerGame = 2;
  setMachineGame();
}

function setMachineGame(){
  machineGame = Math.round(Math.random()*2);
  let machineImage = document.querySelector(".game-machine img");

  if (machineGame == 0) machineImage.setAttribute("src", "img/rock.png");
  else if (machineGame == 1) machineImage.setAttribute("src", "img/paper.png");
  else machineImage.setAttribute("src", "img/scissors.png");

  gameResult()
}

function gameResult() {

  if (playerGame == 0 && machineGame == 2 || playerGame == 1 && machineGame == 0 || playerGame== 2 && machineGame == 1) {
    document.querySelector(".game-title").textContent = "¡Ganas!"
    document.querySelector(".result img").setAttribute("src", "img/check.png")
    playerCounter++;
  } else if (playerGame == 0 && machineGame == 1 || playerGame == 1 && machineGame == 2 || playerGame == 2 && machineGame == 0) {
    document.querySelector(".game-title").textContent = "¡Pierdes!"
    document.querySelector(".result img").setAttribute("src", "img/cross.png")
    machineCounter++;
  } else {
    document.querySelector(".game-title").textContent = "¡Empate!"
    document.querySelector(".result img").setAttribute("src", "img/tie.png")
  }

  document.querySelector(".counter-player").textContent = playerCounter;
  document.querySelector(".counter-machine").textContent = machineCounter;

  if (playerCounter == 3 || machineCounter == 3) {
    
    setTimeout(() => {
      document.querySelector(".finalScreen").classList.remove("hidden");

      if (playerCounter == 3) {
        document.querySelector(".finalScreen h2").textContent = "¡Ganaste!";
        document.querySelector(".gif img").setAttribute("src", "audio/winner.gif")
      }
  
      if (machineCounter == 3) {
        document.querySelector(".finalScreen h2").textContent = "¡Perdiste!";
        document.querySelector(".gif img").setAttribute("src", "audio/loser.gif")
      }

    }, 1200);

  }

  
}

//Script pantalla modal del comienzo

let botonPlay = document.querySelector(".play").addEventListener("click", playGame);

function playGame() {
  document.querySelector(".game .name-player").textContent = document.querySelector("#name").value;
  document.querySelector(".startScreen").classList.add("hidden");
}

//Script pantalla modal del final

let botonReplay = document.querySelector(".replay").addEventListener("click", replayGame);

function replayGame() {
  document.querySelector(".finalScreen").classList.add("hidden");
  playerCounter = 0;
  machineCounter = 0;
  document.querySelector(".counter-player").textContent = playerCounter;
  document.querySelector(".counter-machine").textContent = machineCounter;
  document.querySelector(".game-player img").setAttribute("src", "");
  document.querySelector(".game-machine img").setAttribute("src", "");
  document.querySelector(".game-title").textContent = "";
  document.querySelector(".result img").setAttribute("src", "")
}