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

function isBoolean(val) {
  var valType = typeof val;
  if (val === true || val === false) {
    console.log(val);
  }
  console.log("Please pass a boolean value in");
}

isBoolean(5);
isBoolean(true);
isBoolean("Hi");
isBoolean(false);

// question 3

var heading = document.querySelector("h2");
var button = document.querySelector("button");

function changeHeading() {
  heading.innerHTML = "Updated subheading";
  heading.style.color = "blue";
}

button.onclick = changeHeading;
