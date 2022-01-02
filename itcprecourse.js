const GITHUB_URL = "https://api.github.com/users/IsraelTechChallengeITC";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
  });


const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentlySelected = 0;
const nodes = document.querySelectorAll('.map-frame');

function previous() {
  nextBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected--;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  nodes[currentlySelected].classList.remove("active");
  currentlySelected++;
  nodes[currentlySelected].classList.add("active");

  if (currentlySelected + 1 === nodes.length) {
    nextBtn.disabled = true;
  }
}

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();