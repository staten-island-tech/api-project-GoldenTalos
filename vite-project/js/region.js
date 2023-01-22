import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/nations/all";
const imgUrl1 = "https://api.genshin.dev/nations/";
const imgUrl2 = "/icon";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayNation() {
      data.forEach((nation) => {
        let lowercase = nation.name.toLowerCase();
        let actual = imgUrl1 + lowercase + imgUrl2;
        DOMSelectors.region.insertAdjacentHTML(
          "beforeend",
          `<div class="nation-card">
          <img src= ${actual} alt="Nation Icon">               
                    <h3 class= "nation-name">${nation.name}</h3>
                    <p class="nation-element">${nation.element}</p>
                    <p class="nation-archon">${nation.archon}</p>
                    <p class="nation-leader">${nation.controllingEntity}</p>
                </div>`
        );
      });
    }
    displayNation();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();
