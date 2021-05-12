/////// ----------------------------------------->>>>>  V2  <<<<<--------------------------------------------///////

// Button "Generate Pokemon" press function.

let btnPressed = document.querySelectorAll(".check");

for (let i = 0; i < btnPressed.length; i++)
  btnPressed[i].addEventListener("click", function (event) {
    let player = event.target;
    let randomNo = randomNumber();
    generatePokemon(player.id, randomNo);
    disableBtn(player.id);
  });

// Disable "Generate Pokemon" button when pressed

function disableBtn(playerID) {
  document.getElementById(`${playerID}`).classList.add("disabled");
}

// Generating random number which will represend random Pokemon from the list.

function randomNumber() {
  return Math.ceil(Math.random() * 897);
}

// Generating random Pokemon inside game cards.

function generatePokemon(playerID, randomNumber) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)
    .then((data) => data.json())
    .then((data) => {
      let pokemonName = data.name;
      let pokemonImg = data.sprites.front_default;
      let pokemonExp = data.base_experience;
      let pokemonHeight = data.height;
      let pokemonWeight = data.weight;

      document.getElementById(`p-${playerID}-img`).innerHTML = `<img src="${pokemonImg}" class="card-img-top" alt="${pokemonName}"></img>`;
      document.getElementById(`p-${playerID}-name`).textContent = pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1);
      document.getElementById(`p-${playerID}-exp`).textContent = pokemonExp;
      document.getElementById(`p-${playerID}-height`).textContent = pokemonHeight;
      document.getElementById(`p-${playerID}-weight`).textContent = pokemonWeight;
    });
}

// Code initialized after button "Fight" is pressed.

function fight() {

  //No allowed to press button if one or two pokemons not selected.
  let p1PokemonName = document.getElementById(`p-1-name`).textContent;
  let p2PokemonName = document.getElementById(`p-2-name`).textContent;

  if ((p1PokemonName || p2PokemonName) == 'Name') {
    return;
  }

  //Player 1 Pokemon power
  let pokemon1Exp = Number(document.getElementById(`p-1-exp`).textContent);
  let pokemon1Height = Number(document.getElementById(`p-1-height`).textContent);
  let pokemon1Weight = Number(document.getElementById(`p-1-weight`).textContent);

  let p1Power = Math.round(pokemon1Exp / 10 + pokemon1Height + pokemon1Weight / 100);

  //Player 2 Pokemon power
  let pokemon2Exp = Number(document.getElementById(`p-2-exp`).textContent);
  let pokemon2Height = Number(document.getElementById(`p-2-height`).textContent);
  let pokemon2Weight = Number(document.getElementById(`p-2-weight`).textContent);

  let p2Power = Math.round(pokemon2Exp / 10 + pokemon2Height + pokemon2Weight / 100);

  //Deciding winner and printing to monitor
  if (p1Power == p2Power) {
    document.getElementById("winner_row").textContent = `DRAW`;
  } else if(p1Power > p2Power) {
    document.getElementById("winner_row").textContent = `Winner is ${document.getElementById(`p-1-name`).textContent}`;
  } else {
    document.getElementById("winner_row").textContent = `Winner is ${document.getElementById(`p-2-name`).textContent}`;
  }
}

function resetGame(){

  document.getElementById('1').classList.remove("disabled");
  document.getElementById('2').classList.remove("disabled");
  document.getElementById("winner_row").textContent = `Who wins?`;

  //Player 1 card
  document.getElementById(`p-1-img`).innerHTML = `<img src="./img/no_img.png" class="card-img-top" alt="Pokemon Name">`;
  document.getElementById(`p-1-name`).textContent = 'Name';
  document.getElementById(`p-1-exp`).textContent = '--';
  document.getElementById(`p-1-height`).textContent = '--';
  document.getElementById(`p-1-weight`).textContent = '--';
  
  //Player 2 card
  document.getElementById(`p-2-img`).innerHTML = `<img src="./img/no_img.png" class="card-img-top" alt="Pokemon Name">`;
  document.getElementById(`p-2-name`).textContent = 'Name';
  document.getElementById(`p-2-exp`).textContent = '--';
  document.getElementById(`p-2-height`).textContent = '--';
  document.getElementById(`p-2-weight`).textContent = '--';

}

// ------------------------------------------------------------------------oooooo     V1     ooooo--------------------------------------------------------------------------------//

// //STAGE - empty card slot

// let player1Card = false;
// let player2Card = false;

// let player1RandomNumber = null;
// let player2RandomNumber = null;

// //STAGE - Generate Pokemon

// function randomNumber() {
//   return Math.floor(Math.random() * 897);
// }

// function pokemonImg(rndNumber, playerNumber) {
//   fetch("https://pokeapi.co/api/v2/pokemon/" + (rndNumber + 1))
//     .then((data) => data.json())
//     .then((data) => {
//       console.log("https://pokeapi.co/api/v2/pokemon/" + (rndNumber + 1));
//       let pokemonName = data.name;
//       let item1 = `<img src="${data.sprites.front_default}" download="${pokemonName}.png" class="card-img-top" alt="${pokemonName}">`;
//       document.getElementById(`img-player-${playerNumber}`).innerHTML = item1;
//       let item2 = `<h5 class="card-title">${pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</h5>`;
//       document.getElementById(`name-player-${playerNumber}`).innerHTML = item2;
//       let item3 = `<p class="card-text"><b>Experience:</b> ${data.base_experience}<br><b>Height:</b> ${data.height}<b><br>Weight:</b> ${data.weight}</p>`
//       document.getElementById(`stats-player-${playerNumber}`).innerHTML = item3;
//     });
// }

// //STAGE - Pokemon stats and FIGHT
// // -- Player 1

// var p1PokemonName;
// var p1Exp;
// var p1Height;
// var p1Weight;
// var p1Power;

// // -- Player 2

// var p2PokemonName;
// var p2Exp;
// var p2Height;
// var p2Weight;
// var p2Power;

// //Bendri

// //

// function pokemonFight(p1rndNumber, p2rndNumber) {

//     fetch("https://pokeapi.co/api/v2/pokemon/" + (p1rndNumber + 1))
//         .then((data) => data.json())
//         .then((data) => {
//             p1PokemonName = data.name;
//             p1Exp = data.base_experience;
//             p1Height = data.height;
//             p1Weight = data.weight;
//             console.log(p1Exp, p1Height, p1Weight);
//             p1Power = Math.round((p1Exp / 10) + (p1Height) + (p1Weight / 100));

//             console.log("P1 pwr - " + p1Power);

//     });
//     fetch("https://pokeapi.co/api/v2/pokemon/" + (p2rndNumber + 1))
//         .then((data) => data.json())
//         .then((data) => {
//             p2PokemonName = data.name;
//             p2Exp = data.base_experience;
//             p2Height = data.height;
//             p2Weight = data.weight;
//             console.log(p2Exp, p2Height, p2Weight);
//             p2Power = Math.round((p2Exp / 10) + (p2Height) + (p2Weight / 100));

//             console.log("P2 pwr " + p2Power);

//             if (p1Power === p2Power) {
//                 document.getElementById('winner_row').innerHTML = `<h1>DRAW</h1>`;
//             } else if (p1Power > p2Power) {
//                 document.getElementById('winner_row').innerHTML = `<h1>Wiiner is ${p1PokemonName.charAt(0).toUpperCase() + p1PokemonName.slice(1)}</h1>`;
//                 document.getElementById('p1-card').className = "border border-danger";
//             } else {
//                 document.getElementById('winner_row').innerHTML =`<h1>Wiiner is ${p2PokemonName.charAt(0).toUpperCase() + p2PokemonName.slice(1)}</h1>`;
//                 document.getElementById('p2-card').className = "border border-danger";
//             }
//     });
// }

// function p1PickCard() {
//   if (player1Card) {
//     return;
//   }
//   player1Card = true;
//   let player = 1;
//   player1RandomNumber = randomNumber();
//   console.log("Player 1: " + player1RandomNumber);
//   pokemonImg(player1RandomNumber, player);
//   return player1RandomNumber;
// }

// function p2PickCard() {
//   if (player2Card) {
//     return;
//   }
//   player2Card = true;
//   let player = 2;
//   player2RandomNumber = randomNumber();
//   console.log("Player 2: " + player2RandomNumber);
//   pokemonImg(player2RandomNumber, player);
//   return player2RandomNumber;
// }

// function fight() {
//     if (!player1Card || !player2Card) {
//         return;
//     }
//     pokemonFight(player1RandomNumber, player2RandomNumber);
// }

// function reset() {
//     if (!player1Card && !player2Card) {
//         return;
//     }
//     document.getElementById('p1-card').classList.remove("border-danger");
//     document.getElementById('p1-card').innerHTML = `<span  id="img-player-1"><img src="./img/no_img.png" class="card-img-top" alt="Pokemon Name"></span>
//     <div class="card-body">
//         <span id="name-player-1"><h5 class="card-title">Empty card slot</h5></span>
//         <span id="stats-player-1"><p class="card-text">Press "Generate Pokemon", to randomly choose pokemon card for <b>Player 1</b>.</p></span>
//         <a href="#" class="btn btn-light border" id="generate-pokemon" onclick="p1PickCard();return false;">Generate Pokemon</a>
//     </div>`;
//     document.getElementById('p2-card').classList.remove("border-danger");
//     document.getElementById('p2-card').innerHTML = `<span  id="img-player-2"><img src="./img/no_img.png" class="card-img-top" alt="Pokemon Name"></span>
//     <div class="card-body">
//         <span id="name-player-2"><h5 class="card-title">Empty card slot</h5></span>
//         <span id="stats-player-2"><p class="card-text">Press "Generate Pokemon", to randomly choose pokemon card for <b>Player 2</b>.</p></span>
//         <a href="#" class="btn btn-light border" onclick="p2PickCard();return false;">Generate Pokemon</a>
//     </div>`

//     document.getElementById('winner_row').innerHTML = `<h1>Let's FIGHT!</h1>`;

//     player1Card = false;
//     player2Card = false;

//     player1RandomNumber = null;
//     player2RandomNumber = null;
// }

