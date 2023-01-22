import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/weapons/all";
const imgUrl1 = "https://api.genshin.dev/weapons/";
const imgUrl2 = "/icon";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayWeapon() {
      data.forEach((weapon) => {
        let first = weapon.name.toLowerCase();
        let second = first.replaceAll(" ", "-");
        second = second.replaceAll("'", "-");
        console.log(second);
        let actual = imgUrl1 + second + imgUrl2;
        DOMSelectors.weapon.insertAdjacentHTML(
          "beforeend",
          `<div class="weapon-card">
          <img src= ${actual} alt="Weapon Icons">           
                    <h3 class="weapon-name">${weapon.name}</h3>
                    <p class="weapon-type">${weapon.type}</p>
                    <p class="weapon-rarity">${weapon.rarity}</p>
                </div>`
        );
      });
    }
    displayWeapon();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();
