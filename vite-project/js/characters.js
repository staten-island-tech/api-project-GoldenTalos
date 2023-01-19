import "../styles/style.css";

const URL = "https://api.genshin.dev/characters/all";

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayCharacters() {
      data.characters.forEach((character) => {
        document.getElementById("api-response").insertAdjacentHTML(
          "afterbegin",
          `<div class="character-card">
                <img class="img" src="" alt="Character Icon">                
                <h3 class= "character-name">${character.name}</h3>
                <p class="character-weapon">${character.weapon}</p>
                <p class="character-vision">${character.vision}</p>
                <p class="character-nation">${character.nation}</p>
            </div>`
        );
      });
    }
    displayCharacters();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
}
getData(URL);
