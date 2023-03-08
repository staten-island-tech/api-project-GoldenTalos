import { DOMSelectors } from "./_dom";

const imgUrl1 = "https://api.genshin.dev/characters/";
const imgUrl2 = "/card";

function say(name) {
  const sayPromise = new Promise(function (resolve, reject) {
    resolve(`${name} bad`);
  });
  return sayPromise;
}

const cindy = say("cindy");
console.log(cindy);
cindy.then((value) => {
  console.log(value);
});

DOMSelectors.form.addEventListener("submit", function (event) {
  event.preventDefault();
  getData(DOMSelectors.input.value);
});

async function getData(character) {
  try {
    let URL = await fetch(`https://api.genshin.dev/characters/${character}`);
    DOMSelectors.character.innerHTML = "";
    DOMSelectors.input.innerHTML = "";
    if (URL.status < 200 || URL.status > 299) {
      throw error(URL);
    } else {
      const data = await URL.json();
      console.log(data);
      let lowercase = data.name.toLowerCase();
      lowercase = lowercase.replace(
        /kamisato|kaedehara|sangonomiya|shogun|kujou/,
        ""
      );
      let trimspace = lowercase.trim();
      trimspace = trimspace.replace(" ", "-");
      let actual = imgUrl1 + trimspace + imgUrl2;
      DOMSelectors.character.insertAdjacentHTML(
        "beforeend",
        `<div class="character-card">
              <img class="character-img" src= ${actual} alt="Character Icon">               
                    <h3 class="character-name">${data.name}</h3>
                    <p class="character-vision">${data.vision}</p>
                    <p class="character-weapon">Weapon: ${data.weapon}</p>
                    <p class="character-nation">Nation: ${data.nation}</p>
                    <button class="remove">Remove</button>
                </div>`
      );
      card();
    }
  } catch (error) {
    console.log(error);
    DOMSelectors.character.insertAdjacentHTML(
      "beforeend",
      `<div class ="msg"> <p> Sorry, the character you're looking for cannot be found.</p>
     </div>`
    );
  }
}

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
        let trimspace = lowercase.trim();
        trimspace = trimspace.replace(" ", "-");
        let actual = imgUrl1 + trimspace + imgUrl2;
        console.log(actual);
        DOMSelectors.character.insertAdjacentHTML(
          "beforeend",
          `<div class="character-card">
          <img src= ${actual} alt="Character Icon">               
                    <h3 class= "character-name">${ppl.name}</h3>
                    <p class="character-weapon">${ppl.weapon}</p>
                    <p class="character-vision">${ppl.vision}</p>
                    <p class="character-nation">${ppl.nation}</p>
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

function card() {
  let remove = document.querySelectorAll(".remove");
  remove.forEach((el) => {
    el.addEventListener("click", function (el) {
      this.parentElement.remove();
    });
  });
}
