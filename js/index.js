// Function used to generate a random number, which is used for selecting images.

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

var randomIntOne = getRandomInt(1,6);
var randomIntTwo = getRandomInt(1,6);

// Framing the image path.

imgOneSrc = "images/dice" + randomIntOne + ".png";
imgTwoSrc = "images/dice" + randomIntTwo + ".png";

// Selecting the images from HTML using ID.

var firstImage = document.getElementById('one');
firstImage.src = imgOneSrc;

var secondImage = document.getElementById('two');
secondImage.src = imgTwoSrc;

// Comparing the images and displaying result.

if (randomIntOne > randomIntTwo){
  document.getElementById('result').innerHTML = "Player 1 Wins";
}

else if (randomIntOne === randomIntTwo) {
  document.getElementById('result').innerHTML = "Draw";
}

else{
  document.getElementById('result').innerHTML = "Player 2 Wins";
}
