
let fName = document.querySelector("#firstName");
let lName = document.querySelector("#firstName");
let email = document.querySelector("#email");
let ic = document.getElementsByName("ic");
let comment = document.querySelector('#comment');

function send() {
    console.log("First name:",fName.value);
    console.log("Last name:",lName.value);
    console.log("Email:",email.value);
    console.log("Favourite ice cream flavour:",ic.value);
    console.log("Comment:",comment.value);
  }