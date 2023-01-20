import { DOMSelectors } from "./_dom";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    const types = data.types;
    const characters = types.characters;
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};

function displayCharacters() {
  characters.ppl.forEach((ppl) => {
    DOMSelectors.characters.insertAdjacentHTML(
      "beforeend",
      `<div class="character-card">
                <img class="img" src="" alt="Character Icon">                
                <h3 class= "character-name">${ppl.name}</h3>
                <p class="character-weapon">${ppl.weapon}</p>
                <p class="character-vision">${ppl.vision}</p>
                <p class="character-nation">${ppl.nation}</p>
            </div>`
    );
  });
}
displayCharacters();
