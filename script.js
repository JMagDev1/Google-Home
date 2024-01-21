var width = screen.width;
var height = screen.height;

var containers = document.querySelectorAll('.container');

document.addEventListener('DOMContentLoaded', function() {
  // Get the elements with the class "container"
  

  // Check if any element was found
  if (containers.length > 0) {
    // Set the color for each container
    containers.forEach(function(container) {
      container.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
    });
  } else {
    console.error('No element with class "container" found on the page.');
  }
});

window.onload = function GetBGImage(){
  document.body.style.backgroundImage = "url('https://source.unsplash.com/" + width + "x" + height+ "/?" + "landscape&')";
  startTime();
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

prevBtn.addEventListener('click', function(){
  num++;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/" + width + "x" + height+ "/?" + "landscape&"+ num + "')";
})

nextBtn.addEventListener('click', function(){
  num++;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/" + width + "x" + height+ "/?" + "landscape&"+ num + "')";
})

