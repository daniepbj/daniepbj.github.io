// Defining all variables used
let textFadeIn = document.getElementById("textFadeIn");
let textFadeUp = document.getElementById("textFadeUp");
let textDance = document.getElementById("textDance");
let textHeatUp = document.getElementById("textHeatUp");
let textColors1 = document.getElementById("textColors1");
let textColors2 = document.getElementById("textColors2");
let textColors3 = document.getElementById("textColors3");
let textColors4 = document.getElementById("textColors4");
let textColors5 = document.getElementById("textColors5");
let textColors6 = document.getElementById("textColors6");
let textColors7 = document.getElementById("textColors7");
let textColors = document.getElementsByClassName("textColors")[0];
let textCool1 = document.getElementById("textCool1");
let textCool2 = document.getElementById("textCool2");
let textCool3 = document.getElementById("textCool3");
let textBlowAway = document.getElementById("textBlowAway");
let bird = document.getElementById("bird");
let thickWinter1 = document.getElementById("thickWinter1");
let thickWinter2 = document.getElementById("thickWinter2");
let thickWinter3 = document.getElementById("thickWinter3");
let thickWinter4 = document.getElementById("thickWinter4");
let thickWinter5 = document.getElementById("thickWinter5");
let leaves = document.getElementsByClassName("leaves")[0];
let bees = document.getElementsByClassName("bees")[0];
let lastWinter = document.getElementById("lastWinter");
let ending1 = document.getElementById("ending1");
let ending2 = document.getElementById("ending2");
let ending3 = document.getElementById("ending3");
let ending4 = document.getElementById("ending4");
let ending5 = document.getElementById("ending5");

// Functions to remove and add html elements, so that the right text is shown at one at a time
setTimeout(function () {
  textFadeIn.remove();
  textFadeUp.remove();
}, 13000);

setTimeout(function () {
  textDance.innerHTML =
    "♪ And I must dance, and I must sing.To see the beauty of the spring ♪";
}, 13000);

setTimeout(function () {
  textDance.remove();
}, 26000);

setTimeout(function () {
  textHeatUp.innerHTML =
    "The earth is warm, the sun's ablaze, It is a time of carefree days. And bees abuzz that chance to pass.";
}, 26000);

setTimeout(function () {
  textColors1.innerHTML = "May see me snoozing in the grass. ";
}, 26000);

setTimeout(function () {
  textColors2.innerHTML = "The leaves are ";
}, 26000);

setTimeout(function () {
  textColors3.innerHTML = "yellow, ";
}, 26000);

setTimeout(function () {
  textColors4.innerHTML = "red, ";
}, 26000);

setTimeout(function () {
  textColors5.innerHTML = "and ";
}, 26000);

setTimeout(function () {
  textColors6.innerHTML = "brown. ";
}, 26000);

setTimeout(function () {
  textColors7.innerHTML = "A shower sprinkle softly down.";
}, 26000);

setTimeout(function () {
  textHeatUp.remove();
}, 39000);

setTimeout(function () {
  textColors.remove();
}, 39000);

setTimeout(function () {
  textCool1.innerHTML = "The air is fragrant, crisp, and ";
}, 39000);

setTimeout(function () {
  textCool2.innerHTML = "cool, ";
}, 39000);

setTimeout(function () {
  textCool3.innerHTML = "And once again I'm stuck in school.";
}, 39000);

setTimeout(function () {
  textBlowAway.innerHTML =
    "The birds are gone, the world is white, The winds are wild, they chill and bite.";
}, 39000);

setTimeout(function () {
  textCool1.remove();
  textCool2.remove();
  textCool3.remove();
  textBlowAway.remove();
}, 52000);

setTimeout(function () {
  bird.remove();
}, 25500);

setTimeout(function () {
  thickWinter1.innerHTML = "The ground is";
}, 55000);

setTimeout(function () {
  thickWinter2.innerHTML = "thick";
}, 55000);

setTimeout(function () {
  thickWinter3.innerHTML = "with slush and sleet, And I can";
}, 55000);

setTimeout(function () {
  thickWinter4.innerHTML = "barely";
}, 55000);

setTimeout(function () {
  thickWinter5.innerHTML = "feel my feet.";
}, 55000);

setTimeout(function () {
  lastWinter.innerHTML =
    "The last is done, the next is here,The same as it is every year.";
}, 55000);

setTimeout(function () {
  ending1.innerHTML = "spring";
  ending2.innerHTML = "then sunshine";
  ending3.innerHTML = "autumn";
  ending4.innerHTML = "snow";
  ending5.innerHTML = "That is how each year must go.";
}, 60000);

setTimeout(function () {
  leaves.remove();
}, 35000);

setTimeout(function () {
  bees.remove();
}, 39000);
