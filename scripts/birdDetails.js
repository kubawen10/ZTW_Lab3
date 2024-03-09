function showBirdsDetails(latinName) {
    const foundBird = birdsList.find(bird => bird.latinName === latinName);
    birdsDetailsImage.src = foundBird.photo;
    birdsDetailsName.textContent = foundBird.name;
    birdsDetailsLatinName.textContent = foundBird.latinName;
    birdsDetailsTrivia.textContent = foundBird.trivia;

    birdsDetails.classList.remove("hidden");
    mainContainer.classList.add("background");
}

function hideBirdsDetails() {
    birdsDetails.classList.add("hidden");
    mainContainer.classList.remove("background");
}

let birdsDetails = document.getElementById("birds-details");
let birdsDetailsImage = birdsDetails.querySelector(".bird-details-image");
let birdsDetailsName = birdsDetails.querySelector(".details-name");
let birdsDetailsLatinName = birdsDetails.querySelector(".details-latin-name");
let birdsDetailsTrivia = birdsDetails.querySelector(".bird-trivia");

let mainContainer = document.getElementById("main-container");
let elements = document.getElementsByClassName("birdbox");

for (let i = 0; i < elements.length; i++) {
    let birdbox = elements[i];
    let latinNameElement = birdbox.querySelector(".latinName");
    if (latinNameElement) {
        let latinNameValue = latinNameElement.textContent;
        birdbox.addEventListener("click", () => showBirdsDetails(latinNameValue));
    }
}