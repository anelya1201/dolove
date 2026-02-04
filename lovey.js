const yesBtn = document.querySelector(".js-yes-btn");
const questionContainer = document.querySelector(".question-container");
const heartLoader = document.querySelector(".cssload-main");
const resultContainer = document.querySelector(".result-container");
const video = document.querySelector("video");
const noBtn = document.querySelector(".js-no-btn");

// /change the postion of no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.floor(Math.random() * questionContainer.offsetWidth);
  const newY = Math.floor(Math.random() * questionContainer.offsetWidth);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});



yesBtn.addEventListener("click", () => {
  // hide question
  questionContainer.style.display = "none";

  // show heart animation
  heartLoader.style.display = "block";

  // after animation, show result
  setTimeout(() => {
    heartLoader.style.display = "none";
    resultContainer.style.display = "block";
    video.play();
  }, 2500); // matches heart animation timing
});
