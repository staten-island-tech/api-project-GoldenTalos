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
                <img class="img" src="https://static.wikia.nocookie.net/gensin-impact/images/1/15/Character_Hu_Tao_Card.png/revision/latest?cb=20220725204937" alt="Hu Tao">                
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
