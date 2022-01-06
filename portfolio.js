const GITHUB_URL = "https://api.github.com/users/TalRozenblat";

fetch(GITHUB_URL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    if (profileImage) {
      profileImage.src = data.avatar_url;
    }
    const profileName = document.getElementById("myName");
    if (profileName) {
      profileName.innerHTML = data.name;
    }

  });




  //sticky nav bar solution

window.onscroll = function() {navBarFix()};
let navbar = document.getElementById('navbar');
let sticky = navbar.offsetTop;


function navBarFix() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } 
  else {
    navbar.classList.remove("sticky");
  }
}


//footer solution

const codingLanguages = ['HTML', 'CSS', 'JavaScript', ];
const footerText = document.querySelector('.footerText');
let stringToAdd = "";

for(let i = 0; i < codingLanguages.length; i++){
  if(i === 0){
    stringToAdd += (" " + codingLanguages[i]);
  }
  else if(i<codingLanguages.length - 1){
    stringToAdd += (", " + codingLanguages[i]);
  }
  else{
    stringToAdd += (" and " + codingLanguages[i] + ".");
  }
}

footerText.textContent += (stringToAdd);



// map solution
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentlySelected = 0;
const map = document.querySelector('.map-frame');


const cities = ["https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54199.7719645519!2d34.806349!3d31.893396999999997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502b70592bfe58f%3A0xeeadf8cb1758f957!2sRehovot!5e0!3m2!1sen!2sil!4v1641221879301!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108499.68821452232!2d34.658154!3d31.808234000000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502a3117547e4ef%3A0x97806d1a5a86632f!2sAshdod!5e0!3m2!1sen!2sil!4v1641221927387!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d108169.8896978942!2d34.797246!3d32.087932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2sTel%20Aviv-Yafo!5e0!3m2!1sen!2sil!4v1641221969019!5m2!1sen!2sil",

  "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d224040.02992289845!2d-106.064618!3d28.670931000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86ea449d5d484033%3A0xb7f1a7a706dd1d7b!2sChihuahua%2C%20Mexico!5e0!3m2!1sen!2sil!4v1641221995911!5m2!1sen!2sil"]


function previous() {
  nextBtn.disabled = false;
  currentlySelected--;
  map.src = cities[currentlySelected];

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
}

function next() {
  prevBtn.disabled = false;
  currentlySelected++;
  map.src = cities[currentlySelected];
  if (currentlySelected + 1 === cities.length) {
    nextBtn.disabled = true;
  }
}

prevBtn?.addEventListener("click", function () {
  previous();
});

nextBtn?.addEventListener("click", function () {
  next();
});



//printing form to log solution

const submitAct = document.getElementById('form');
submitAct.addEventListener("submit", send);
const submitBtn = document.getElementById('submitBtn');

const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const email = document.getElementById('email');
const comment = document.getElementById('comment');


function send(event) {
  event.preventDefault()
  event.stopPropagation()
  const inputs = document.querySelectorAll('.to-print')

  inputs.forEach((input) => {
    if (input.name === 'ic' && input.checked) {
      console.log(`Favourite ice cream flavour : ${input.value}`);
    } else if (!(input.name === 'ic')){
      console.log(`${input.name}: ${input.value}`);
    }
  })
}

const formNodes = document.querySelectorAll('.formField');
for (let i = 0; i < formNodes.length; i++) {
  formNodes[i].onchange = checkFields
}

function checkFields() {
  if (fName.value && email.value && comment.value) {
    submitBtn.removeAttribute("disabled");
  }
  else {
    submitBtn.setAttribute("disabled", true);
  }
}

