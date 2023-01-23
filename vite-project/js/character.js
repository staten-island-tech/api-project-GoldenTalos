import { DOMSelectors } from "./_dom";
import "../styles/characters.css";

const URL = "https://api.genshin.dev/characters/all";
const imgUrl1 = "https://api.genshin.dev/characters/";
const imgUrl2 = "/card";

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
        function traveler() {
          if (ppl.name == "Traveler") {
            let lower = lowercase + "-" + ppl.vision;
          }
        }
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
