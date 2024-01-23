var width = screen.width;
var height = screen.height;

var containers = document.querySelectorAll('.container');

// document.addEventListener('DOMContentLoaded', function() {
//   // Get the elements with the class "container"
  

//   // Check if any element was found
//   if (containers.length > 0) {
//     // Set the color for each container
//     containers.forEach(function(container) {
//       container.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
//     });
//   } else {
//     console.error('No element with class "container" found on the page.');
//   }
// });

window.onload = function GetBGImage() {
  var img = new Image();
  img.src = "https://source.unsplash.com/" + width + "x" + height + "/?" + "landscape&";

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
  };

};


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

var DarkModeActive = true;

DarkBtn.addEventListener('click', function(){
  DarkModeActive = true;
  if(DarkModeActive == true){
    alert("Dark Mode Active");
    document.getElementById("Link").style.color = "black";
    document.getElementById("Link").style.border = "solid";
    document.getElementById("Link").style.border.color = "black";
    document.getElementById("txt").style.color = "black";
    document.getElementById("txtbx-1").style.color = "black";
    document.getElementById("txtbx-1").style.border = "solid";
    document.getElementById("txtbx-1").style.border.color = "black";
    document.getElementById("moon").style.fill = "black";
    document.getElementById("sun").style.fill = "black";
    document.getElementById("weather").style.fill = "black";
    document.getElementById("SearchBarInput").style.fill = "black";

  }
})

LightBtn.addEventListener('click', function(){
  DarkModeActive = false;
  if(DarkModeActive == false){
    alert("Light Mode Active")
    document.getElementById("Link").style.color = "white";
    document.getElementById("Link").style.border = "solid";
    document.getElementById("Link").style.border.color = "white";
    document.getElementById("txt").style.color = "white";
    document.getElementById("txtbx-1").style.color = "white";
    document.getElementById("txtbx-1").style.border = "solid";
    document.getElementById("txtbx-1").style.border.color = "white";
    document.getElementById("moon").style.fill = "white";
    document.getElementById("sun").style.fill = "white";
    document.getElementById("weather").style.fill = "white";
    document.getElementById("SearchBarInput").style.fill = "white";
  }
})