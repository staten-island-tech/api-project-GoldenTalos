import { DOMSelectors } from "./_dom";
import "../styles/characters.css";

const URL = "https://api.genshin.dev/characters/all";
const imgUrl1 = "https://api.genshin.dev/characters/";
const imgUrl2 = "/card";
let currentPage;

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayCharacters() {
      data.forEach((ppl) => {
        let lowercase = ppl.name.toLowerCase();
        lowercase = lowercase.replace(
          /kamisato|kaedehara|sangonomiya|shogun|kujou/,
          ""
        );
        /* function traveler() {
          if (ppl.name == "Traveler") {
            let lower = lowercase + "-" + ppl.vision;
          }
        } */
        let trimspace = lowercase.trim();
        trimspace = trimspace.replace(" ", "-");
        let actual = imgUrl1 + trimspace + imgUrl2;
        console.log(actual);
        DOMSelectors.character.insertAdjacentHTML(
          "beforeend",
          `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${ppl.name}</h3>
                    <p class="character-vision">${ppl.vision}</p>
                    <p class="character-weapon">Weapon: ${ppl.weapon}</p>
                    <p class="character-nation">Nation: ${ppl.nation}</p>
                </div>`
        );
      });
    }
    displayCharacters();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();

/* function pyro() {
  data
    .filter((pyro) => pryo.vision.includes("pyro"))
    .forEach((pryo) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${pryo.name}</h3>
                    <p class="character-vision">${pryo.vision}</p>
                    <p class="character-weapon">Weapon: ${pryo.weapon}</p>
                    <p class="character-nation">Nation: ${pryo.nation}</p>
                </div>`
      );
    });
}

function cryo() {
  data
    .filter((cryo) => cryo.vision.includes("cryo"))
    .forEach((cryo) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${cryo.name}</h3>
                    <p class="character-vision">${cryo.vision}</p>
                    <p class="character-weapon">Weapon: ${cryo.weapon}</p>
                    <p class="character-nation">Nation: ${cryo.nation}</p>
                </div>`
      );
    });
}

function hydro() {
  data
    .filter((hydro) => hydro.vision.includes("hydro"))
    .forEach((hydro) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${hydro.name}</h3>
                    <p class="character-vision">${hydro.vision}</p>
                    <p class="character-weapon">Weapon: ${hydro.weapon}</p>
                    <p class="character-nation">Nation: ${hydro.nation}</p>
                </div>`
      );
    });
}

function anemo() {
  data
    .filter((anemo) => anemo.vision.includes("anemo"))
    .forEach((anemo) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${anemo.name}</h3>
                    <p class="character-vision">${anemo.vision}</p>
                    <p class="character-weapon">Weapon: ${anemo.weapon}</p>
                    <p class="character-nation">Nation: ${anemo.nation}</p>
                </div>`
      );
    });
}

function electro() {
  data
    .filter((electro) => electro.vision.includes("electro"))
    .forEach((electro) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${electro.name}</h3>
                    <p class="character-vision">${electro.vision}</p>
                    <p class="character-weapon">Weapon: ${electro.weapon}</p>
                    <p class="character-nation">Nation: ${electro.nation}</p>
                </div>`
      );
    });
}

function dendro() {
  data
    .filter((dendro) => dendro.vision.includes("dendro"))
    .forEach((dendro) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${dendro.name}</h3>
                    <p class="character-vision">${dendro.vision}</p>
                    <p class="character-weapon">Weapon: ${dendro.weapon}</p>
                    <p class="character-nation">Nation: ${dendro.nation}</p>
                </div>`
      );
    });
}

function geo() {
  data
    .filter((geo) => geo.vision.includes("geo"))
    .forEach((geo) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${geo.name}</h3>
                    <p class="character-vision">${geo.vision}</p>
                    <p class="character-weapon">Weapon: ${geo.weapon}</p>
                    <p class="character-nation">Nation: ${geo.nation}</p>
                </div>`
      );
    });
}

function bow() {
  data
    .filter((bow) => bow.weapon.includes("bow"))
    .forEach((bow) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
            <img class="character-img" src= ${actual} alt="Character Icon">               
                  <h3 class="character-name">${bow.name}</h3>
                  <p class="character-vision">${bow.vision}</p>
                  <p class="character-weapon">Weapon: ${bow.weapon}</p>
                  <p class="character-nation">Nation: ${bow.nation}</p>
              </div>`
      );
    });
}

function catalyst() {
  data
    .filter((catalyst) => catalyst.weapon.includes("catalyst"))
    .forEach((catalyst) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
            <img class="character-img" src= ${actual} alt="Character Icon">               
                  <h3 class="character-name">${catalyst.name}</h3>
                  <p class="character-vision">${catalyst.vision}</p>
                  <p class="character-weapon">Weapon: ${catalyst.weapon}</p>
                  <p class="character-nation">Nation: ${catalyst.nation}</p>
              </div>`
      );
    });
}

function claymore() {
  data
    .filter((claymore) => claymore.weapon.includes("claymore"))
    .forEach((claymore) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
            <img class="character-img" src= ${actual} alt="Character Icon">               
                  <h3 class="character-name">${claymore.name}</h3>
                  <p class="character-vision">${claymore.vision}</p>
                  <p class="character-weapon">Weapon: ${claymore.weapon}</p>
                  <p class="character-nation">Nation: ${claymore.nation}</p>
              </div>`
      );
    });
}

function polearm() {
  data
    .filter((polearm) => polearm.weapon.includes("polearm"))
    .forEach((polearm) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
            <img class="character-img" src= ${actual} alt="Character Icon">               
                  <h3 class="character-name">${polearm.name}</h3>
                  <p class="character-vision">${polearm.vision}</p>
                  <p class="character-weapon">Weapon: ${polearm.weapon}</p>
                  <p class="character-nation">Nation: ${polearm.nation}</p>
              </div>`
      );
    });
}

function sword() {
  data
    .filter((sword) => sword.weapon.includes("sword"))
    .forEach((sword) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
            <img class="character-img" src= ${actual} alt="Character Icon">               
                  <h3 class="character-name">${sword.name}</h3>
                  <p class="character-vision">${sword.vision}</p>
                  <p class="character-weapon">Weapon: ${sword.weapon}</p>
                  <p class="character-nation">Nation: ${sword.nation}</p>
              </div>`
      );
    });
}

function mondstadt() {
  data
    .filter((mondstadt) => mondstadt.nation.includes("mondstadt"))
    .forEach((mondstadt) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${mondstadt.name}</h3>
                    <p class="character-vision">${mondstadt.vision}</p>
                    <p class="character-weapon">Weapon: ${mondstadt.weapon}</p>
                    <p class="character-nation">Nation: ${mondstadt.nation}</p>
                </div>`
      );
    });
}

function liyue() {
  data
    .filter((liyue) => liyue.nation.includes("liyue"))
    .forEach((liyue) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${liyue.name}</h3>
                    <p class="character-vision">${liyue.vision}</p>
                    <p class="character-weapon">Weapon: ${liyue.weapon}</p>
                    <p class="character-nation">Nation: ${liyue.nation}</p>
                </div>`
      );
    });
}

function inazuma() {
  data
    .filter((inazuma) => inazuma.nation.includes("inazuma"))
    .forEach((inazuma) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${inazuma.name}</h3>
                    <p class="character-vision">${inazuma.vision}</p>
                    <p class="character-weapon">Weapon: ${inazuma.weapon}</p>
                    <p class="character-nation">Nation: ${inazuma.nation}</p>
                </div>`
      );
    });
}

function sumeru() {
  data
    .filter((sumeru) => sumeru.nation.includes("sumeru"))
    .forEach((sumeru) => {
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${sumeru.name}</h3>
                    <p class="character-vision">${sumeru.vision}</p>
                    <p class="character-weapon">Weapon: ${sumeru.weapon}</p>
                    <p class="character-nation">Nation: ${sumeru.nation}</p>
                </div>`
      );
    });
}

function clear() {
  DOMSelectors.character.innerHTML = "";
}

document.getElementById("all").addEventListener("click", function () {
  clear();
  displayCharacters();
});

document.getElementById("pyro").addEventListener("click", function () {
  clear();
  pyro();
});

document.getElementById("hydro").addEventListener("click", function () {
  clear();
  hydro();
});

document.getElementById("cryo").addEventListener("click", function () {
  clear();
  cryo();
});

document.getElementById("geo").addEventListener("click", function () {
  clear();
  geo();
});

document.getElementById("dendro").addEventListener("click", function () {
  clear();
  dendro();
});

document.getElementById("electro").addEventListener("click", function () {
  clear();
  electro();
});

document.getElementById("anemo").addEventListener("click", function () {
  clear();
  anemo();
});

document.getElementById("bow").addEventListener("click", function () {
  clear();
  bow();
});

document.getElementById("catalyst").addEventListener("click", function () {
  clear();
  catalyst();
});

document.getElementById("claymore").addEventListener("click", function () {
  clear();
  claymore();
});

document.getElementById("polearm").addEventListener("click", function () {
  clear();
  polearm();
});

document.getElementById("sword").addEventListener("click", function () {
  clear();
  sword();
});

document.getElementById("mondstadt").addEventListener("click", function () {
  clear();
  mondstadt();
});

document.getElementById("liyue").addEventListener("click", function () {
  clear();
  liyue();
});

document.getElementById("inazuma").addEventListener("click", function () {
  clear();
  inazuma();
});

document.getElementById("sumeru").addEventListener("click", function () {
  clear();
  sumeru();
}); */
