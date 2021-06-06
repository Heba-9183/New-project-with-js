/** @format */

var requiredName = "Gertrude";
var supppliedName = "GERTRUDE";
if (requiredName.toLowerCase() === supppliedName.toLowerCase()) {
  console.log("The string is equal");
}

var username = "myusername";
var leng = username.length;
if (leng < 4 && leng > 10) {
  console.log("Acceptable username");
} else {
  if (leng < 4) {
    console.log("Too few characters");
  }
  if (leng > 10) {
    console.log("Too many characters");
  }
}

var winningNumbers = [1, 76, 2, 78, 16, 7];
console.log(winningNumbers[2]);

var vegetables = ["rice", "potatoes", "porridge", "cake", "spinach"];
vegetables.push("tomato");

var randomThings = ["pumpkin", false, 23, true, "tomato"];
for (i = 0; i < randomThings.length; i++) {
  console.log(randomThings[i]);
}

var moreThings = [14, "cat", true, 29, "fox", true, 34, 19];
for (i = 0; i < moreThings.length; i++) {
  var typeofitem = typeof moreThings[i];
  if (typeofitem === "number") {
    console.log(moreThings[i]);
  }
}

var ingredients = ["water", "flour", "toothpaste", "fish lips"];
var sorteding = ingredients.sort();
for (i = 0; i < sorteding.length; i++) {
  console.log(sorteding[i]);
}
var characters = [
  "Gob",
  "Michael",
  "George Michael",
  "Lindsay",
  "Buster",
  "Maeby",
  "Tobias",
  "Lucille",
];
for (i = 0; i < sorteding.length; i++) {
  if (i % 2 === 1) {
    console.log(characters[i]);
  }
}

var product = {
  name: "Chicken feet",
  price: 149.99,
};
console.log(product.name);

var animals = [
  {
    type: "cat",
    colour: "black",
  },
  {
    type: "elephant",
    colour: "grey",
  },
  {
    type: "dog",
    colour: "brown",
  },
  {
    type: "zebra",
    colour: "black and white",
  },
];
for (i = 0; i < animals.length; i++) {
  console.log(animals[i].colour);
}

var dinnerOptions = [
  { name: "Fish and Dips", price: 11.95, onSpecial: true },
  { name: "Bacon and Frogs", price: 12.99, onSpecial: false },
  { name: "Mince Flies", price: 19.0, onSpecial: true },
];
for (i = 0; i < dinnerOptions.length; i++) {
  if (dinnerOptions[i].onSpecial) {
    console.log(dinnerOptions[i].name);
  }
}

var people = [
  {
    firstName: "Burt",
    lastName: "Smacharach",
    age: 35,
  },
  {
    firstName: "Elvis",
    lastName: "Deadly",
    age: 55,
  },
  {
    firstName: "Susan",
    lastName: "Sarongson",
    age: 42,
  },
  {
    firstName: "Big",
    lastName: "Gabe",
    age: 20,
  },
];
for (i = 0; i < people.length; i++) {
  if (people[i].age >= 20 && people[i].age <= 50) {
    console.log(people[i].firstName);
    console.log(people[i].lastName);
  }
}

var products = [
  {
    name: "Elephant eggs",
    price: 45.0,
  },
  {
    name: "Bucket of water",
    price: 459.99,
  },
  {
    name: "4 cabbages",
    price: 500.95,
  },
];
/* <script src="assignment.js"></script>
<script src="{Heba Mousa}-pf-ma1.js"></script>
<script src="EXERCISE.JS"></script>*/
