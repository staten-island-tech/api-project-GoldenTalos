import { DOMSelectors } from "./_dom";

const URL = "https://api.genshin.dev/artifacts/all";
const imgUrl1 = "https://api.genshin.dev/artifacts/";
const imgUrl2 = "/circlet-of-logos";
const imgUrl3 = "/flower-of-life";
const imgUrl4 = "/goblet-of-eonothem";
const imgUrl5 = "/plume-of-death";
const imgUrl6 = "/sands-of-eon";

const query = async function () {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    function displayArtifacts() {
      data.forEach((artifact) => {
        let first = artifact.name.toLowerCase();
        let second = first.replaceAll(" ", "-");
        second = second.replaceAll("'", "-");
        console.log(second);
        let circlet = imgUrl1 + second + imgUrl2;
        let flower = imgUrl1 + second + imgUrl3;
        let goblet = imgUrl1 + second + imgUrl4;
        let plume = imgUrl1 + second + imgUrl5;
        let sands = imgUrl1 + second + imgUrl6;
        console.log(circlet);
        console.log(flower);
        console.log(goblet);
        console.log(plume);
        console.log(sands);
        DOMSelectors.artifact.insertAdjacentHTML(
          "beforeend",
          `<div class="artifact-card">
          <img src= ${circlet} alt="Artifact Icons">   
          <img src= ${flower} alt="Artifact Icons">
          <img src= ${goblet} alt="Artifact Icons">
          <img src= ${plume} alt="Artifact Icons"> 
          <img src= ${sands} alt="Artifact Icons">           
                    <h3 class="artifact-name">${artifact.name}</h3>
                    <p class="artifact-rarity">Rarity: ${artifact.max_rarity}</p>
                </div>`
        );
      });
    }
    displayArtifacts();
  } catch (error) {
    console.log(error);
    alert("An error occured.");
  }
};
query();
