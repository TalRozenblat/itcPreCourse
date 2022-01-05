const GITHUB_URL = "https://api.github.com/users/TalRozenblat";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src = data.avatar_url;
    const profileName = document.getElementById("myName");
    profileName.innerHTML = data.name;
  });


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

function init() {
  prevBtn.addEventListener("click", function() {
    previous();
  });

  nextBtn.addEventListener("click", function(e) {
    next();
  });
}

init();


function findIceCreamChoice(){
  let flavour = document.getElementsByName('ic');

  for (let i = 0; i < flavour.length; i++){
    if(flavour[i].checked){
      return flavour[i].value;
    }
  }
}

function send() {
    let fName = document.querySelector("#firstName");
    let lName = document.querySelector("#lastName");
    let email = document.querySelector("#email");
    let comment = document.querySelector('#comment');
    console.log("First name:",fName.value);
    console.log("Last name:",lName.value);
    console.log("Email:",email.value);
    console.log("Comment:",comment.value);
    console.log("Favourite ice cream flavour:",findIceCreamChoice());
  }
