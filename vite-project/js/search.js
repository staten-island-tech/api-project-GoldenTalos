import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/characters/all";
const imgUrl1 = "https://api.genshin.dev/characters/";
const imgUrl2 = "/card";

async function data(URL) {
  try {
    const getcharacter = await fetch(URL);

    if (getcharacter.status <= 199 || getcharacter.status >= 300) {
      throw new Error(getcharacter);
    } else {
    }
  } catch (error) {
    console.log(error);
    console.log("error occur");
    console.log(getcharacter.status);
  }
}

function clear() {
  document.querySelector("text-box").reset();
}

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  card.GetCard();
  clear();
});

const card = {
  GetCard: async function () {
    const response = await fetch(URL);
    const data = await response.json();

    let Input = DOMSelectors.searchInput.value;
    const UserInput =
      Input.toLowerCase() +
      Input.trim() +
      Input.replace(" ", "-") +
      Input.replace(/kamisato|kaedehara|sangonomiya|shogun|kujou/, "");
    console.log(UserInput);

    response.data
      .filter((ppl) => ppl.name == `${UserInput}`)
      .forEach((ppl) => {
        let lowercase = ppl.name.toLowerCase();
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
                      <h3 class="character-name">${ppl.name}</h3>
                      <p class="character-vision">${ppl.vision}</p>
                      <p class="character-weapon">Weapon: ${ppl.weapon}</p>
                      <p class="character-nation">Nation: ${ppl.nation}</p>
                  </div>`
        );
      });
  },
};
