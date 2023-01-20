import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/characters/all";

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

function displayBooks() {
  characters.books.forEach((character) => {
    DOMSelectors.popularBooks.insertAdjacentHTML(
      "beforeend",
      `<div class="popular-list">
              <img
              src="${book.book_image}"
              alt="Book Cover"
              class="book-cover">
              <div class="book-info">
                  <h1 class="book-title">${book.title}</h1>
                  <p class="book-author">${book.contributor}</p>
                  <p class="book-description">
                      ${book.description}
                  </p>
                  <div class="buy-btn">
                      <a class="shop-btn" href="${book.amazon_product_url}">Buy Now</a></div>
                  </div>
              </div>
          </div>`
    );
  });
}
displayBooks();

async function getData(URL) {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayCharacters() {
      data.entity.forEach((character) => {
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
