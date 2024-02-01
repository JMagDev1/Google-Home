window.onload = function GetBGImage() {
  var img = new Image();
  img.src = "https://source.unsplash.com/" + width + "x" + height + "/?" + "nature&";

  // Event handler for when the image is loaded
  img.onload = function () {
    // Set the background image for the body
    document.body.style.backgroundImage = "url('" + img.src + "')";

    setTimeout(1500);

    document.getElementById("overlay").style.display = "none";

    // Show container
    var containerElements = document.getElementsByClassName("container");
    if (containerElements.length > 0) {
      containerElements[0].style.display = "block";
    }
    startTime();
    var DarkModeActive = false;
    DarkMode();
  };

};

var width = screen.width;
var height = screen.height;

var containers = document.querySelectorAll('.container');

function AddBackgroundBlurLight(){
  // Check if any element was found
  if (containers.length > 0) {
    // Set the color for each container
    containers.forEach(function(container) {
      container.style.backgroundColor = 'rgba(255, 255, 255, 0.35)';
    });
  } else {
    console.error('No element with class "container" found on the page.');
  }
}

function AddBackgroundBlurDark(){
  // Check if any element was found
  if (containers.length > 0) {
    // Set the color for each container
    containers.forEach(function(container) {
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
    });
  } else {
    console.error('No element with class "container" found on the page.');
  }
}

function startTime(){
  const today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
  setTimeout(startTime, 1000);
}
  
function checkTime(i){
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

var num = 0;

var width = screen.width;
var height = screen.height;

function updateBackground() {
  document.getElementById("BtnContainer").style.display = "none";
  document.body.backgroundColor = "white";
  // Display the overlay
  document.getElementById("overlay").style.display = "flex";

  // Increment the num variable
  num++;

  // Create a new image element
  var img = new Image();

  // Event handler for when the image is loaded
  img.onload = function () {
    // Set the background image for the body
    document.body.style.backgroundImage = "url('" + img.src + "')";

    // Hide the overlay
    document.getElementById("overlay").style.display = "none";
    setTimeout(1500);
    document.getElementById("BtnContainer").style.display = "block";    
    
  };

  // Set the source of the image
  img.src = "https://source.unsplash.com/" + width + "x" + height + "/?" + "landscape&" + num;
}

prevBtn.addEventListener('click', updateBackground);
nextBtn.addEventListener('click', updateBackground);

//DARK AND LIGHT THEMES
const DarkBtn = document.getElementById("BtnDarkMode");
const LightBtn = document.getElementById("BtnLightMode");

var DarkModeActive = false;

DarkBtn.addEventListener('click', function(){
  DarkModeActive = true;
  DarkMode();
})

LightBtn.addEventListener('click', function(){
  DarkModeActive = false;
  LightMode();
})

function DarkMode(){
  document.getElementById("BtnDarkMode").style.backgroundColor = 'rgba(255, 255, 255, 0.25)';
  document.getElementById("BtnDarkMode").style.borderRadius = '25%';
  document.getElementById("BtnLightMode").style.backgroundColor = 'transparent';
  document.getElementById("Link").style.color = "white";
  document.getElementById("Link").style.border = "solid";
  document.getElementById("Link").style.border.color = "white";
  document.getElementById("Link1").style.color = "white";
  document.getElementById("Link1").style.border = "solid";
  document.getElementById("Link1").style.border.color = "white";
  document.getElementById("Link2").style.color = "white";
  document.getElementById("Link2").style.border = "solid";
  document.getElementById("Link2").style.border.color = "white";
  document.getElementById("Link3").style.color = "white";
  document.getElementById("Link3").style.border = "solid";
  document.getElementById("Link3").style.border.color = "white";
  document.getElementById("Link4").style.color = "white";
  document.getElementById("Link4").style.border = "solid";
  document.getElementById("Link4").style.border.color = "white";
  document.getElementById("Link5").style.color = "white";
  document.getElementById("Link5").style.border = "solid";
  document.getElementById("Link5").style.border.color = "white";
  document.getElementById("Link6").style.color = "white";
  document.getElementById("Link6").style.border = "solid";
  document.getElementById("Link6").style.border.color = "white";
  document.getElementById("Link7").style.color = "white";
  document.getElementById("Link7").style.border = "solid";
  document.getElementById("Link7").style.border.color = "white";
  document.getElementById("Link8").style.color = "white";
  document.getElementById("Link8").style.border = "solid";
  document.getElementById("Link8").style.border.color = "white";
  document.getElementById("Link9").style.color = "white";
  document.getElementById("Link9").style.border = "solid";
  document.getElementById("Link9").style.border.color = "white";
  document.getElementById("Link10").style.color = "white";
  document.getElementById("Link10").style.border = "solid";
  document.getElementById("Link10").style.border.color = "white";
  document.getElementById("Link11").style.color = "white";
  document.getElementById("Link11").style.border = "solid";
  document.getElementById("Link11").style.border.color = "white";
  document.getElementById("Link12").style.color = "white";
  document.getElementById("Link12").style.border = "solid";
  document.getElementById("Link12").style.border.color = "white";
  document.getElementById("Link13").style.color = "white";
  document.getElementById("Link13").style.border = "solid";
  document.getElementById("Link13").style.border.color = "white";
  document.getElementById("Link14").style.color = "white";
  document.getElementById("Link14").style.border = "solid";
  document.getElementById("Link14").style.border.color = "white";
  document.getElementById("Link15").style.color = "white";
  document.getElementById("Link15").style.border = "solid";
  document.getElementById("Link15").style.border.color = "white";

  document.getElementById("txt").style.color = "white";

  document.getElementById("SearchBarInput").style.color = "white"
  document.getElementById("SearchBarInput").style.border.color = "white";
  AddBackgroundBlurDark();
}

function LightMode(){
  document.getElementById("BtnLightMode").style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
  document.getElementById("BtnLightMode").style.borderRadius = '25%';
  document.getElementById("BtnDarkMode").style.backgroundColor = 'transparent';
  document.getElementById("Link").style.color = "black";
  document.getElementById("Link").style.border = "solid";
  document.getElementById("Link").style.border.color = "black";
  document.getElementById("Link1").style.color = "black";
  document.getElementById("Link1").style.border = "solid";
  document.getElementById("Link1").style.border.color = "black";
  document.getElementById("Link2").style.color = "black";
  document.getElementById("Link2").style.border = "solid";
  document.getElementById("Link2").style.border.color = "black";
  document.getElementById("Link3").style.color = "black";
  document.getElementById("Link3").style.border = "solid";
  document.getElementById("Link3").style.border.color = "black";
  document.getElementById("Link4").style.color = "black";
  document.getElementById("Link4").style.border = "solid";
  document.getElementById("Link4").style.border.color = "black";
  document.getElementById("Link5").style.color = "black";
  document.getElementById("Link5").style.border = "solid";
  document.getElementById("Link5").style.border.color = "black";
  document.getElementById("Link6").style.color = "black";
  document.getElementById("Link6").style.border = "solid";
  document.getElementById("Link6").style.border.color = "black";
  document.getElementById("Link7").style.color = "black";
  document.getElementById("Link7").style.border = "solid";
  document.getElementById("Link7").style.border.color = "black";
  document.getElementById("Link8").style.color = "black";
  document.getElementById("Link8").style.border = "solid";
  document.getElementById("Link8").style.border.color = "black";
  document.getElementById("Link9").style.color = "black";
  document.getElementById("Link9").style.border = "solid";
  document.getElementById("Link9").style.border.color = "black";
  document.getElementById("Link10").style.color = "black";
  document.getElementById("Link10").style.border = "solid";
  document.getElementById("Link10").style.border.color = "black";
  document.getElementById("Link11").style.color = "black";
  document.getElementById("Link11").style.border = "solid";
  document.getElementById("Link11").style.border.color = "black";
  document.getElementById("Link12").style.color = "black";
  document.getElementById("Link12").style.border = "solid";
  document.getElementById("Link12").style.border.color = "black";
  document.getElementById("Link13").style.color = "black";
  document.getElementById("Link13").style.border = "solid";
  document.getElementById("Link13").style.border.color = "black";
  document.getElementById("Link14").style.color = "black";
  document.getElementById("Link14").style.border = "solid";
  document.getElementById("Link14").style.border.color = "black";
  document.getElementById("Link15").style.color = "black";
  document.getElementById("Link15").style.border = "solid";
  document.getElementById("Link15").style.border.color = "black";

  document.getElementById("txt").style.color = "black";

  document.getElementById("SearchBarInput").style.color = "black"
  document.getElementById("SearchBarInput").style.border.color = "black";
  AddBackgroundBlurLight();  
}