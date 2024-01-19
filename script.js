window.onload = function GetBGImage(){
  document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x1000/?" + "landscape" + "')";
  startTime();

  document.querySelector('input').autofocus();
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

prevBtn.addEventListener('click', function(){
  num++;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/2560x1080/?" + "landscape&"+ num + "')";
})

nextBtn.addEventListener('click', function(){
  num++;
  document.body.style.backgroundImage = "url('https://source.unsplash.com/2560x1080/?" + "landscape&" + num + "')";
})

