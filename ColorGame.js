//number of squares variable
var numbSquares = 6;
//call our "generateRandomColors()" function //our function takes one argument!
var color = [];
//assign random color to be guessed by calling our "pickColor()" function
var pickedColor;
//select all squares
var squares = document.querySelectorAll(".square");
//select colorDisplay id
var colorDisplay = document.getElementById('colorDisplay');
//select our message span
var messageDisplay = document.querySelector("#message");
//select h1
var h1 = document.querySelector("h1");
//select our resertButton
var resertButton = document.getElementById("resert");
//select our buttons Easey/hard
var modeButtons = document.querySelectorAll(".mode");

//in the Begining we run our inti() function
init();

//run all our code inside it....called above
function init(){
  //call our setupModeButton function
  setUpModeButtons();
  //call our setUpSquares function
  setUpSquares();
  //call our resert function
  resert();
}

//our setupModeButton
function setUpModeButtons(){
  //loop through all our buttons
  for (var i = 0; i < modeButtons.length; i++) {
      //modeButtons addEventListener
      modeButtons[i].addEventListener("click", function(){
        //remove class "selected" from both button
        modeButtons[0].classList.remove("selected");
        modeButtons[1].classList.remove("selected");
        //add "selected" class to button - when selected
        this.classList.add("selected");
        //update modeButtons - with turnary operator(we can use an if else statement!)
        //change this code if we wanted to add another button because now it only works for the two
        this.textContent === "Easy" ? numbSquares = 3: numbSquares = 6;
        //our "resert()" function call
        resert();
        //figure out how many squares to show
        //pick new Colors
        //update page to reflect changes
    });
  }
}

//our setUpSquares function
function setUpSquares(){
  //loop through
  for(var i = 0; i < squares.length; i++){
    //add click event listener for squares
    squares[i].addEventListener("click", function(){
       //grab color of clicked square
       var clickedColor = this.style.backgroundColor;
       //compare color to pickedColor
       if (clickedColor === pickedColor) {
         //if correct //update our messageDisplay
          messageDisplay.textContent = "Correct!";
          //change resertButton text content
          resertButton.textContent = "Play Again?";
          //callback our changeColors function and pass In the correct clickedColor-to change all our squares!
          changeColors(clickedColor);
          //change h1 backgroundColor to match the correct clicked colorDisplay
          h1.style.backgroundColor = clickedColor;
         //if guess is Wrong!
       } else {
           //change the incorrect option color / to fadeIn the background-match background css
           this.style.backgroundColor = "#232323";
           //update our messageDisplay
           messageDisplay.textContent = "Try Again";
        }
    });
  }
}

//our resert function
function resert(){
  //generate new colors
  color = generateRandomColors(numbSquares);
  //pick a new random color from array
  pickedColor = pickColor();
  //change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  //change text on resertbutton
  resertButton.textContent = "New Colors";
  //update resertButton none
  messageDisplay.textContent = "";
  //loop through - change colors of squares
  for(var i = 0; i < squares.length; i++){
    if (color[i]) {
      //make sure all squares are visible first
      squares[i].style.display ="block";
      //assign each a color from our array// if there is three only for the first "Easey"
      squares[i].style.backgroundColor = color[i];
    } else {
      //else hide squares that dont have color = null
      squares[i].style.display = "none";
    }
  }
  //resert h1 backgroundColor back
  h1.style.backgroundColor = "steelblue";
}

  //resert button
  resertButton.addEventListener("click", function(){
  //call our resert function
  resert()
});

//our changeColors function take in an argument color
function changeColors(color){
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each square color to match given color
    squares[i].style.backgroundColor = color;
  }
}

//our random number generator function
function pickColor(){
  //generate a number between 1 and the length of our color array
  var random = Math.floor(Math.random() * color.length);
  //return that index in our color array
  return color[random];
}

//our generateRandomColors function
function generateRandomColors(num) {
  //make an empty array
  var arr = [];
  //repeat num times - 3 for Easy & 6 for Hard
  for (var i = 0; i < num; i++) {
    //cal our randomColor() function
    //get random color and push into array
    arr.push(randomColor());
  }
  //retun that array
  return arr;
}
//generate random number making our colors
function randomColor(){
  //pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  //putting it all together in a string and returning the String!
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
