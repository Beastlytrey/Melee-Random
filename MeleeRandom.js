/*
make an array of characters
make that array of characters into objects with these values
[Tier (high,mid,low) Description, Image, Character Challenges]
Keep track of time practiced on each character

Also need to call random element from that array of characters

When character is called, show a drop down summary of tips,
neutral, list of tech, and possibly add matchup sheets
*/

let charSelect = document.getElementById("character-icon");

// how do i get these things to only show up with low or high tier
let meleeCharacters = [
  "Dr. MARIO",
  "MARIO",
  "LUIGI",
  "BOWSER",
  "PEACH",
  "YOSHI",
  "DK",
  "CAPTAIN FALCON",
  "GANONDORF",
  "FALCO",
  "FOX",
  "NESS",
  "ICE CLIMBERS",
  "KIRBY",
  "SAMUS",
  "ZELDA",
  "SHEIK",
  "LINK",
  "YOUNG LINK",
  "PICHU",
  "PIKACHU",
  "JIGGLYPUFF",
  "MEWTWO",
  "MR. GAME & WATCH",
  "MARTH",
  "ROY",
];
console.log(meleeCharacters.length);

//select random character from selected filter. "show all" "High" "Mid" "Low"
//get element by class name "all/high/mid/low" and use those from that filter

//Can i replace button with different button when clicking filters?
//

function random() {
  charSelect.textContent =
    meleeCharacters[Math.floor(Math.random() * meleeCharacters.length)];
  console.log(charSelect.innerText);
  console.log(document.getElementsByClassName("filterDiv"));
}

//function ObjectLength ()

async function logCharacters() {
  const response = await fetch("http://smashdb.me/api/characters");
  const myMeleeCharacters = await response.json();
  console.log(myMeleeCharacters);
}

//idea, have a button that shows only with "all/high/mid/low"
filterSelection("all");
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
      console.log(arr1);
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

function changeName(x) {
  charSelect.innerHTML = meleeCharacters[x];
}
