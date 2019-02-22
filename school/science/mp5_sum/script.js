var slide;
var testSlide;
var slideNum
var maxSlides;

function onload() {
  testSlide = false;
  maxSlides = 3;
  if (testSlide == false) {slide = 1;}
  else {slide = 0;}
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
  else if (num == 1) {document.getElementById("pres1").innerHTML = "<center><h1 class='center'>What is Climate?</h1></center><center><h3 class='center'>Climate is the average weather over long periods of time. It is a bunch of data about meteorological conditions. </h3></center><center><h1 class='center'>What is Weather?</h1></center><center><h3 class='center'>Weather is the current atmospheric conditions. Unlike climate, weather is not over a long period of time, there's no time frame, it's just the measured conditions of the present time.</h3></center>"}
  else if (num == 2) {document.getElementById("pres1").innerHTML = "<center><h1>How are tornadoes formed?</h1></center><center><h3>Tornadoes are formed when warm moist air meets cold dry air, the cold air drops as the warm air rises and eventually begins to twist. The bigger the difference in air temperature and moisture, the bigger, more violent the tornado is.</h3></center><br><center><h3>This is a map showing the frequency of tornadoes in the US.</h3></center><center><img style='margin-left: 18%;' src='../../../assets/tornadoMap.png'></center>"}
  else if (num ==3) {document.getElementById("pres1").innerHTML = "<center><h1>What's Regional Climate and Global Climate?</h1><h3>Regional Climate is the average weather patterns for that time period in a certain area. Say Vermont, it's yearly average temperature is 45.85°F, the average yearly rainfall is 36.79 inches, and the average snowfall is 81 inches. (According to <a href='https://www.usclimatedata.com/climate/vermont/united-states/3215' class='presLink' target='_vermontClimate'>usclimatedata.com</a>), But somewhere like Florida, will have different climate, because theres different terrain, and its in a different position than Vermont.<br>Global Climate is the average weather across the entire world. For instance, climate change. According to scientists, the global climate is rising a certain amount per decade.</center>"}
  else {document.getElementById("pres1").innerHTML = "";}
}
