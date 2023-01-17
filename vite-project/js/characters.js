import { menu } from "./menu";
import "../styles/style.css";
import { DOMSelectors } from "./dom";
import { DOMSelectorsTwo } from "./dom";

DOMSelectorsTwo.light.addEventListener("click", function () {
  if (document.body.classList.contains("dark")) {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("light");
    document.body.classList.remove("bleu");
  }
});

DOMSelectorsTwo.dark.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("bleu")) {
    document.body.classList.add("dark");
    document.body.classList.remove("bleu");
  }
});

DOMSelectorsTwo.bleu.addEventListener("click", function () {
  if (document.body.classList.contains("light")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("light");
  } else if (document.body.classList.contains("dark")) {
    document.body.classList.add("bleu");
    document.body.classList.remove("dark");
  }
});

function menustuff() {
  menu.forEach((item) => {
    DOMSelectors.menuitem.insertAdjacentHTML(
      "beforeend",
      `<div class="menu-card">
              <h2>${item.name}</h2>
              <img class="menu-image" src="${item.image}">
              <p class="menu-price">$${item.price}</p>
              <p class="menu-description">${item.description}</p>
          </div>`
    );
  });
}

menustuff();

function drink() {
  menu
    .filter((drink) => drink.drink.includes("y"))
    .forEach((drink) => {
      DOMSelectors.menuitem.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${drink.name}</h2>
                <img class="menu-image" src="${drink.image}">
                <p class="menu-price">$${drink.price}</p>
                <p class="menu-description">${drink.description}</p>
            </div>`
      );
    });
}

function beef() {
  menu
    .filter((beef) => beef.meat.includes("beef"))
    .forEach((beef) => {
      DOMSelectors.menuitem.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${beef.name}</h2>
                <img class="menu-image" src="${beef.image}">
                <p class="menu-price">$${beef.price}</p>
                <p class="menu-description">${beef.description}</p>
            </div>`
      );
    });
}

function chicken() {
  menu
    .filter((chicken) => chicken.meat.includes("chicken"))
    .forEach((chicken) => {
      DOMSelectors.menuitem.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${chicken.name}</h2>
                <img class="menu-image" src="${chicken.image}">
                <p class="menu-price">$${chicken.price}</p>
                <p class="menu-description">${chicken.description}</p>
            </div>`
      );
    });
}

function pork() {
  menu
    .filter((pork) => pork.meat.includes("pork"))
    .forEach((pork) => {
      DOMSelectors.menuitem.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${pork.name}</h2>
                <img class="menu-image" src="${pork.image}">
                <p class="menu-price">$${pork.price}</p>
                <p class="menu-description">${pork.description}</p>
            </div>`
      );
    });
}

function veg() {
  menu
    .filter((veg) => veg.vegetarian.includes("y"))
    .forEach((veg) => {
      DOMSelectors.menuitem.insertAdjacentHTML(
        "beforeend",
        `<div class="menu-card">
                <h2 class="name">${veg.name}</h2>
                <img class="menu-image" src="${veg.image}">
                <p class="menu-price">$${veg.price}</p>
                <p class="menu-description">${veg.description}</p>
            </div>`
      );
    });
}

function clear() {
  DOMSelectors.menuitem.innerHTML = "";
}

document.getElementById("fullmenu").addEventListener("click", function () {
  clear();
  menustuff();
});

document.getElementById("drinks").addEventListener("click", function () {
  clear();
  drink();
});

document.getElementById("pork").addEventListener("click", function () {
  clear();
  pork();
});

document.getElementById("chicken").addEventListener("click", function () {
  clear();
  chicken();
});

document.getElementById("beef").addEventListener("click", function () {
  clear();
  beef();
});

document.getElementById("veg").addEventListener("click", function () {
  clear();
  veg();
});
