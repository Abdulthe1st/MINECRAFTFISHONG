// Functionize Minecraft Fishing Start Code

// HTML Variables
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");
let plus5Btn = document.getElementById("plus5");
let until200Btn = document.getElementById("until200");
let fishBtnEl = document.getElementById("fish-btn");
let howManyTimes = document.getElementById("inputtimes");
let howManyTimesEl = document.getElementById("inputtimes").value;

// Fish Coutn Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Fish Button Event Listener
document.getElementById("fish-btn").addEventListener("click", fishBtnClicked);
plus5Btn.addEventListener("click", plus5);
until200Btn.addEventListener("click", until200);
howManyTimes.addEventListener("change", fishForTimes);
document.getElementById("sortfish").addEventListener("click", sortFish);

function fishBtnClicked() {
  // Determine Selected Character
  let character = document.getElementById("character-select").value;

  if (character === "steve") {
    //  Steve Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.7) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      document.getElementById("div").innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.9) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      document.getElementById("div").innerHTML +=
        "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.95) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      document.getElementById("div").innerHTML +=
        "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      document.getElementById("div").innerHTML +=
        "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "alex") {
    // Alex Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.1) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      document.getElementById("div").innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.2) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      document.getElementById("div").innerHTML +=
        "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      document.getElementById("div").innerHTML +=
        "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      document.getElementById("div").innerHTML +=
        "<img src='img/Pufferfish.png'>";
    }
  } else if (character === "villager") {
    // Villager Fish Simulator
    let randNum = Math.random();
    console.log(randNum);
    if (randNum < 0.25) {
      resultImg.src = "img/Raw-Cod.png";
      numCod++;
      numCodSpan.innerHTML = numCod;
      document.getElementById("div").innerHTML += "<img src='img/Raw-Cod.png'>";
    } else if (randNum < 0.5) {
      resultImg.src = "img/Raw-Salmon.png";
      numSalmon++;
      numSalmonSpan.innerHTML = numSalmon;
      document.getElementById("div").innerHTML +=
        "<img src='img/Raw-Salmon.png'>";
    } else if (randNum < 0.75) {
      resultImg.src = "img/Tropical-Fish.png";
      numTropical++;
      numTropicalSpan.innerHTML = numTropical;
      document.getElementById("div").innerHTML +=
        "<img src='img/Tropical-Fish.png'>";
    } else {
      resultImg.src = "img/Pufferfish.png";
      numPuffer++;
      numPufferSpan.innerHTML = numPuffer;
      document.getElementById("div").innerHTML +=
        "<img src='img/Pufferfish.png'>";
    }
  }
}

function plus5() {
  for (let n = 1; n <= 5; n++) {
    fishBtnClicked();
  }
}

function until200() {
  let codTarget = numCod + 200;
  let count = 0;
  while (numCod < codTarget) {
    fishBtnClicked();
    count++;
  }
  console.log(count);
}

function fishForTimes() {
  let howManyTimesEl = document.getElementById("inputtimes").value;
  for (let n = 1; n <= howManyTimesEl; n++) {
    fishBtnClicked();
  }
}

function sortFish() {
  document.getElementById("div").innerHTML = "";

  n = 1;

  while (n <= numCod) {
    document.getElementById("div").innerHTML += "<img src='img/Raw-Cod.png'>";
    n++;
  }

  x = 1;

  while (x <= numSalmon) {
    document.getElementById("div").innerHTML +=
      "<img src='img/Raw-Salmon.png'>";
    x++;
  }

  y = 1;

  while (y <= numTropical) {
    document.getElementById("div").innerHTML +=
      "<img src='img/Tropical-Fish.png'>";
    y++;
  }

  z = 1;

  while (z <= numPuffer) {
    document.getElementById("div").innerHTML +=
      "<img src='img/Pufferfish.png'>";
    z++;
  }
}
