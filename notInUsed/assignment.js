/** @format */
// question 1
var pets = [
  {
    type: "cat",
    age: 5.5,
  },
  {
    type: "dog",
    age: 3.8,
  },
  {
    type: "parrot",
    age: 4.0,
  },
];
for (i = 0; i < pets.length; i++) {
  if (pets[i].age >= 4.0) {
    console.log(pets[i].type);
  }
}

// question 2
function asking() {
  return "What the func is this nonsense?";
}
function logname(firstname, secondname) {
  fullname = firstname + " " + secondname;
  console.log(fullname);
}
logname(heba, mousa);
function multiply(n1, n2) {
  var typeN1 = typeof n1;
  var typeN2 = typeof n2;
  if (typeN1 !== "number" || typeN1 !== "number") {
    console.log("Please supply number values");
  }
  return n1 * n2;
}
var x = document.querySelector(".h1");
x.oneclick = function () {
  var heading = document.querySelector(".h1");
  heading.innerHTML += "updated";
};

var tit = document.querySelector(".title");
tit.oneclick1 = function () {
  var tit1 = document.querySelector("I've been updated");
};
