import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/characters/all";
const imgUrl1 = "https://api.genshin.dev/characters/";
const imgUrl2 = "/card";

const listen = function () {
  DOMSelectors.searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    DOMSelectors.searchResults.innerHTML = "";
    const searchParams = DOMSelectors.searchInput.value.trim();
    const searchQuery = async function () {
      try {
        const response = await fetch(
          `https://api.genshin.dev/characters/${searchParams}`
        );
        const data = await response.json();

        function checkForBlank() {
          if (searchParams === "") {
            DOMSelectors.result.classList.add("hidden1");
            DOMSelectors.empty.classList.remove("hidden1");
          } else {
            DOMSelectors.result.classList.remove("hidden1");
            DOMSelectors.empty.classList.add("hidden1");
          }
        }
        checkForBlank();

        function noResults() {
          if (data.errors === true) {
            DOMSelectors.notFound.classList.remove("hidden1");
          } else {
            DOMSelectors.notFound.classList.add("hidden1");
          }
        }
        noResults();
        console.log(noResults);

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
            DOMSelectors.character.insertAdjacentHTML(
              "beforeend",
              `<div class="search-character">
              <img src= ${actual} alt="Character Icon">               
              <h3 class= "search-name">${ppl.name}</h3>
              <p class="search-nation">${ppl.nation}</p>
              <p class="search-vision">${ppl.vision}</p>
              <p class="search-weapon">${ppl.weapon}</p>
                </div>`
            );
          });
        }
        displayCharacters();
      } catch (error) {
        console.log(error);
        alert("Too many search requests!");
      }
    };
    searchQuery();
  });
};
listen();
