import toastr from "toastr";
var icons_large = [
  '<i class="fa fa-eercast" aria-hidden="true"></i>',
  '<i class="fa fa-fort-awesome" aria-hidden="true"></i>',
  '<i class="fa fa-tree" aria-hidden="true"></i>',
  '<i class="fa fa-pied-piper" aria-hidden="true"></i>',
  '<i class="fa fa-dribbble" aria-hidden="true"></i>',
  '<i class="fa fa-plug" aria-hidden="true"></i>',
  '<i class="fa fa-cart-plus" aria-hidden="true"></i>',
  '<i class="fa fa-bell" aria-hidden="true"></i>',
  '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
  '<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>',
  '<i class="fa fa-anchor" aria-hidden="true"></i>',
  '<i class="fa fa-car" aria-hidden="true"></i>',
  '<i class="fa fa-bug" aria-hidden="true"></i>',
  '<i class="fa fa-motorcycle" aria-hidden="true"></i>',
  '<i class="fa fa-globe" aria-hidden="true"></i>',
  '<i class="fa fa-diamond" aria-hidden="true"></i>',
  '<i class="fa fa-birthday-cake" aria-hidden="true"></i>',
  '<i class="fa fa-lemon-o" aria-hidden="true"></i>',

  '<i class="fa fa-eercast" aria-hidden="true"></i>',
  '<i class="fa fa-fort-awesome" aria-hidden="true"></i>',
  '<i class="fa fa-tree" aria-hidden="true"></i>',
  '<i class="fa fa-pied-piper" aria-hidden="true"></i>',
  '<i class="fa fa-dribbble" aria-hidden="true"></i>',
  '<i class="fa fa-plug" aria-hidden="true"></i>',
  '<i class="fa fa-cart-plus" aria-hidden="true"></i>',
  '<i class="fa fa-bell" aria-hidden="true"></i>',
  '<i class="fa fa-bullhorn" aria-hidden="true"></i>',
  '<i class="fa fa-american-sign-language-interpreting" aria-hidden="true"></i>',
  '<i class="fa fa-anchor" aria-hidden="true"></i>',
  '<i class="fa fa-car" aria-hidden="true"></i>',
  '<i class="fa fa-bug" aria-hidden="true"></i>',
  '<i class="fa fa-motorcycle" aria-hidden="true"></i>',
  '<i class="fa fa-globe" aria-hidden="true"></i>',
  '<i class="fa fa-diamond" aria-hidden="true"></i>',
  '<i class="fa fa-birthday-cake" aria-hidden="true"></i>',
  '<i class="fa fa-lemon-o" aria-hidden="true"></i>'
];

var icons_medium = [
  '<i class="fa fa-superpowers" aria-hidden="true"></i>',
  '<i class="fa fa-grav" aria-hidden="true"></i>',
  '<i class="fa fa-university" aria-hidden="true"></i>',
  '<i class="fa fa-blind" aria-hidden="true"></i>',
  '<i class="fa fa-cogs" aria-hidden="true"></i>',
  '<i class="fa fa-handshake-o" aria-hidden="true"></i>',
  '<i class="fa fa-location-arrow" aria-hidden="true"></i>',
  '<i class="fa fa-moon-o" aria-hidden="true"></i>',
  '<i class="fa fa-futbol-o" aria-hidden="true"></i>',
  '<i class="fa fa-trophy" aria-hidden="true"></i>',
  '<i class="fa fa-tags" aria-hidden="true"></i>',
  '<i class="fa fa-sort" aria-hidden="true"></i>',
  '<i class="fa fa-superpowers" aria-hidden="true"></i>',
  '<i class="fa fa-grav" aria-hidden="true"></i>',
  '<i class="fa fa-university" aria-hidden="true"></i>',
  '<i class="fa fa-blind" aria-hidden="true"></i>',
  '<i class="fa fa-cogs" aria-hidden="true"></i>',
  '<i class="fa fa-handshake-o" aria-hidden="true"></i>',
  '<i class="fa fa-location-arrow" aria-hidden="true"></i>',
  '<i class="fa fa-moon-o" aria-hidden="true"></i>',
  '<i class="fa fa-futbol-o" aria-hidden="true"></i>',
  '<i class="fa fa-trophy" aria-hidden="true"></i>',
  '<i class="fa fa-tags" aria-hidden="true"></i>',
  '<i class="fa fa-sort" aria-hidden="true"></i>'
];

var icons_small = [
  '<i class="fa fa-star" aria-hidden="true"></i>',
  '<i class="fa fa-eercast" aria-hidden="true"></i>',
  '<i class="fa fa-fort-awesome" aria-hidden="true"></i>',
  '<i class="fa fa-tree" aria-hidden="true"></i>',
  '<i class="fa fa-pied-piper" aria-hidden="true"></i>',
  '<i class="fa fa-dribbble" aria-hidden="true"></i>',
  '<i class="fa fa-plug" aria-hidden="true"></i>',
  '<i class="fa fa-paw" aria-hidden="true"></i>',
  '<i class="fa fa-tags" aria-hidden="true"></i>',
  '<i class="fa fa-star" aria-hidden="true"></i>',
  '<i class="fa fa-eercast" aria-hidden="true"></i>',
  '<i class="fa fa-fort-awesome" aria-hidden="true"></i>',
  '<i class="fa fa-tree" aria-hidden="true"></i>',
  '<i class="fa fa-pied-piper" aria-hidden="true"></i>',
  '<i class="fa fa-dribbble" aria-hidden="true"></i>',
  '<i class="fa fa-plug" aria-hidden="true"></i>',
  '<i class="fa fa-paw" aria-hidden="true"></i>',
  '<i class="fa fa-tags" aria-hidden="true"></i>'
];

var container = document.getElementsByClassName("container")[0];
var boxes = document.getElementsByClassName("box");
var startDiv = document.getElementById("start");
var enterName = document.getElementById("enterName");
var userName = document.querySelector("[name='name']");
var nameDiv = document.getElementById("nameDiv");
var change = document.getElementById("change");
var scoreboard = document.getElementById("scoreboard");
var restartBtn = document.getElementById("restartBtn");

var smallSquareBtn = document.getElementById("small");
var mediumSquareBtn = document.getElementById("medium");
var largeSquareBtn = document.getElementById("large");
var time = document.getElementById("time");

var clicks = 0;
var gameOver = 0;
var twoBox = [];
var ids = [];
var resolvedBoxes = [];
var topResults = [];
var currentSize = "";

defaultPage();

function changeUser() {
  nameDiv.style.display = "none";
  enterName.style.display = "block";
  localStorage.memName = "";
}

function defaultPage() {
  if (localStorage.topResults) {
    let text = "";
    topResults = JSON.parse(localStorage.topResults);
    for (let i = 0; i < topResults.length; i++) {
      topResults[i].value = value(topResults[i].time);
    }
    topResults.sort(function (a, b) {
      return a.value - b.value;
    });
    for (let i = 0; i < topResults.length; i++) {
      if (i < 6) {
        text += `
        <div class="col-sm-2">
          <div class="scores">
            <p>${topResults[i].name}</p>
            <p>${topResults[i].time}</p>
          </div>
        </div>
        `;
      }
    }
    scoreboard.innerHTML = text;
  }
  if (localStorage.memName && localStorage.memName != "") {
    nameDiv.style.display = "block";
    nameDiv.children[0].innerText = localStorage.memName;
    enterName.style.display = "none";

    change.addEventListener("click", changeUser);
  }
}

smallSquareBtn.addEventListener("click", startGameSmall);
function startGameSmall() {
  smallSquareBtn.style.display = "block";
  smallSquareBtn.style.display = "none";
  mediumSquareBtn.style.display = "block";
  mediumSquareBtn.style.display = "none";
  largeSquareBtn.style.display = "block";
  largeSquareBtn.style.display = "none";

  currentSize = "small";
  startDiv.style.display = "none";
  if (localStorage.memName === "" && userName.value === "") {
    toastr.error("Please enter your name!", "");
    location.reload();
  } else if (localStorage.memName) {
    if (userName.value !== "") {
      localStorage.memName = userName.value;
    } else {
      localStorage.memName = nameDiv.children[0].innerText;
    }
  } else {
    localStorage.setItem("memName", userName.value);
  }
  createTableSmall();
  addClickEvents(resolvedBoxes);
  setInterval(timer, 1000);
}

mediumSquareBtn.addEventListener("click", startGameMedium);
function startGameMedium() {
  smallSquareBtn.style.display = "block";
  smallSquareBtn.style.display = "none";
  mediumSquareBtn.style.display = "block";
  mediumSquareBtn.style.display = "none";
  largeSquareBtn.style.display = "block";
  largeSquareBtn.style.display = "none";
  startDiv.style.display = "none";
  currentSize = "medium";
  if (localStorage.memName === "" && userName.value === "") {
    toastr.error("Please enter your name!", "");
    location.reload();
  } else if (localStorage.memName) {
    if (userName.value !== "") {
      localStorage.memName = userName.value;
    } else {
      localStorage.memName = nameDiv.children[0].innerText;
    }
  } else {
    localStorage.setItem("memName", userName.value);
  }
  createTableMedium();
  addClickEvents(resolvedBoxes);
  setInterval(timer, 1000);
}

largeSquareBtn.addEventListener("click", startGameLarge);
function startGameLarge() {
  smallSquareBtn.style.display = "block";
  smallSquareBtn.style.display = "none";
  mediumSquareBtn.style.display = "block";
  mediumSquareBtn.style.display = "none";
  largeSquareBtn.style.display = "block";
  largeSquareBtn.style.display = "none";
  currentSize = "large";
  startDiv.style.display = "none";
  if (localStorage.memName === "" && userName.value === "") {
    toastr.error("Please enter your name!", "");
    location.reload();
  } else if (localStorage.memName) {
    if (userName.value !== "") {
      localStorage.memName = userName.value;
    } else {
      localStorage.memName = nameDiv.children[0].innerText;
    }
  } else {
    localStorage.setItem("memName", userName.value);
  }
  createTableLarge();
  addClickEvents(resolvedBoxes);
  setInterval(timer, 1000);
}

function restartGame() {
  toastr.success(`Game Restart!`, ``);
  location.reload();
}

restartBtn.addEventListener("click", restartGame);

var sec = 0;
var min = 0;
var hour = 0;

function timer() {
  sec++;
  if (sec > 59) {
    sec = 0;
    min++;
    if (min > 59) {
      min = 0;
      hour++;
    }
  }

  if (sec < 10 && min < 10 && hour < 10) {
    time.innerHTML = `0${hour}:0${min}:0${sec}`;
  } else if (sec > 9 && min < 10 && hour < 10) {
    time.innerHTML = `0${hour}:0${min}:${sec}`;
  } else if (sec < 10 && min > 9 && hour < 10) {
    time.innerHTML = `0${hour}:${min}:0${sec}`;
  } else if (sec < 10 && min < 10 && hour > 9) {
    time.innerHTML = `${hour}:0${min}:0${sec}`;
  } else if (sec > 9 && min > 9 && hour < 10) {
    time.innerHTML = `0${hour}:${min}:${sec}`;
  } else if (sec > 9 && min < 10 && hour > 9) {
    time.innerHTML = `${hour}:0${min}:${sec}`;
  } else if (sec < 10 && min > 9 && hour > 9) {
    time.innerHTML = `${hour}:${min}:0${sec}`;
  } else if (sec > 9 && min > 9 && hour > 10) {
    time.innerHTML = `${hour}:${min}:${sec}`;
  }
}

function createTableSmall() {
  currentSize = "small";
  var text = "";
  for (let i = 0; i < 18; i++) {
    var rand = Math.floor(Math.random() * icons_small.length);
    text +=
      "<div class='box' data-id=" +
      i +
      "><div class='back'>" +
      icons_small[rand] +
      "</div><div class='front'></div></div>";
    icons_small.splice(rand, 1);
  }
  container.innerHTML = text;
}

function createTableMedium() {
  currentSize = "medium";
  var text = "";
  for (let i = 0; i < 24; i++) {
    var rand = Math.floor(Math.random() * icons_medium.length);
    text +=
      "<div class='box' data-id=" +
      i +
      "><div class='back'>" +
      icons_medium[rand] +
      "</div><div class='front'></div></div>";
    icons_medium.splice(rand, 1);
  }
  container.innerHTML = text;
}

function createTableLarge() {
  currentSize = "large";
  var text = "";
  for (let i = 0; i < 36; i++) {
    var rand = Math.floor(Math.random() * icons_large.length);
    text +=
      "<div class='box' data-id=" +
      i +
      "><div class='back'>" +
      icons_large[rand] +
      "</div><div class='front'></div></div>";
    icons_large.splice(rand, 1);
  }
  container.innerHTML = text;
}
function flip() {
  twoBox.push(this);
  var back = this.children[0];
  var front = this.children[1];
  back.style.transform = "perspective(900px) rotateY(0deg)";
  front.style.transform = "perspective(900px) rotateY(180deg)";
  clicks++;
  var id = parseInt(this.getAttribute("data-id"), 10);
  ids.push(id);
  this.removeEventListener("click", flip);
  if (clicks === 2) {
    removeEvents();
    checkFlip(ids);
  }
}

function checkFlip(ids) {
  var front1 = twoBox[0].children[1];
  var back1 = twoBox[0].children[0];
  var front2 = twoBox[1].children[1];
  var back2 = twoBox[1].children[0];
  if (back1.innerHTML === back2.innerHTML) {
    gameOver++;
    if (
      (currentSize === "large" && gameOver === 18) ||
      (currentSize === "medium" && gameOver === 12) ||
      (currentSize === "small" && gameOver === 9)
    ) {
      topResults.push({
        name: localStorage.memName,
        time: time.innerText
      });
      localStorage.topResults = JSON.stringify(topResults);
      toastr.success(time.innerText, "You win! Your time is: ");
      location.reload();
    }
    resolvedBoxes.push(ids[0]);
    resolvedBoxes.push(ids[1]);
    resetArrs();
    addClickEvents(resolvedBoxes);
  } else {
    setTimeout(function () {
      front1.style.transform = "perspective(900px) rotateY(0)";
      back1.style.transform = "perspective(900px) rotateY(180deg)";
      front2.style.transform = "perspective(900px) rotateY(0)";
      back2.style.transform = "perspective(900px) rotateY(180deg)";
      resetArrs();
      addClickEvents(resolvedBoxes);
    }, 700);
  }
}

function removeEvents() {
  for (var i = 0; i < boxes.length; i++) {
    boxes[i].removeEventListener("click", flip);
  }
}

function addClickEvents(arr) {
  var noBoxes = [];
  var reducedBoxes = [];
  for (let i = 0; i < boxes.length; i++) {
    noBoxes.push(i);
  }
  noBoxes.forEach(function (e) {
    if (arr.indexOf(e) === -1) {
      reducedBoxes.push(e);
    }
  });
  for (var i = 0; i < reducedBoxes.length; i++) {
    boxes[reducedBoxes[i]].addEventListener("click", flip);
  }
}

function resetArrs() {
  clicks = 0;
  twoBox.length = 0;
  ids.length = 0;
}

function value(string) {
  var replaceString = string.replace(/:/g, "");
  var x = parseInt(replaceString, 10);
  return x;
}
