var slide;
var maxSlides;

function onload() {
  slide = 1;
  maxSlides = 2;
  document.getElementById("previous").style.background = "grey";
  update(slide);
  if (maxSlides == 1) {document.getElementById("next").style.background = "grey";}
}
function previous() {
  if(slide > 1) {
  slide -= 1;
  if(slide == 1) {
    document.getElementById("previous").style.background = "grey";
  }
  if (slide < maxSlides) {
    document.getElementById("next").style.background = "#4CAF50";
  }
  update(slide);
}}
function next() {
  if (slide < maxSlides) {
  slide += 1;
  if(slide > 1) {
    document.getElementById("previous").style.background = "#4CAF50";
  }
  if (maxSlides == slide) {document.getElementById("next").style.background = "grey";}
  update(slide);
}}
function update(num) {
  if(num == 0) {}
  else if (num == 1) {document.getElementById("pres1").innerHTML = "<center><h1 class='center'>What is Climate?</h1></center><center><h3 class='center'>Climate is the average weather over long periods of time. It is a bunch of data about meteorological conditions. </h3></center><center><h1 class='center'>What is Weather?</h1></center><center><h3 class='center'>Weather is the current atmospheric conditions. Unlike climate, weather is not over a long period of time, there's no time frame, it's just the measured conditions of present times.</h3></center>"}
  else if (num == 2) {document.getElementById("pres1").innerHTML = ""}
  else {document.getElementById("pres1").innerHTML = "";}
}
