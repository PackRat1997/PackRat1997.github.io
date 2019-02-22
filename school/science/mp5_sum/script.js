var slide;
var testSlide;
var slideNum
var maxSlides;

function onload() {
  testSlide = false;
  maxSlides = 5;
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
  else if (num ==3) {document.getElementById("pres1").innerHTML = "<center><h1>What's Regional Climate and Global Climate?</h1><h3>Regional Climate is the average weather patterns for that time period in a certain area. Say Vermont, it's yearly average temperature is 45.85°F, the average yearly rainfall is 36.79 inches, and the average snowfall is 81 inches. (According to <a href='https://www.usclimatedata.com/climate/vermont/united-states/3215' class='presLink' target='_vermontClimate'>usclimatedata.com</a>), But somewhere like Florida, will have different climate, because theres different terrain, and its in a different position than Vermont.<br>Global Climate is the average weather across the entire world. If the global climate changes, than it can affect many ecosystems and things living on earth. </center>"}
  else if (num == 4) {document.getElementById("pres1").innerHTML = "<center><h1>What's the climate of Richford?</h1><h3>In the winter (January), Richford gets really cold, down to about 0°F on an average day. However, you won't usually see that in summer. Richford usually only gets down to about 55°F (July).<img style='margin-left: 18%;' src='https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi4suLH_s_gAhWHl-AKHW6pAlIQjRx6BAgBEAU&url=http%3A%2F%2Fwww.city-data.com%2Fcity%2FRichford-Vermont.html&psig=AOvVaw29DkHcOFqUxSc4gTVmh8Dt&ust=1550947161845065'> Richfords rainfall stays the same sort of all months (A little less in the winter). <br>Theres not many tornadoes in the history of Richford, this may because of the mountains in Vermont, and the temperature that enters into it. Richford isn't really viable for a tornado either, there's a lot of hills, and small mountains.</h3></center>"
  else if (num == 5) {document.getElementById("pres1").innerHTML = "<center><h1>Whats the connection between thunderstorms, thunder, lightning, and flash flooding?</h1><h3>Thunderstorms are large storms that cause thunder and lighting. The lightning is caused by the difference in possitively/negitively charged electrons. They jump from one place to another to even it out. When a thunderstorms builds up enough of a difference, the 'Lightning' jumps from the ground to the storm. Then the thunder comes after the lightning as a byproduct. Light travels way faster than sound, so you can see the lightning almost instantly, but it takes the thunder 5 seconds every mile to hit your ear. Thunderstorms can also cause flash flooding. Sometimes, when a towns elevation is really low, they can be subject to flash flooding. Water always travels to the lowest point, so if you have a storm come by over a town that has a low elevation, all of the water from the storm, wont drain out, and all of the other water from neighboring towns will drain into their water stream. This makes for flash flooding, the water doesnt drain fast enough to keep up with</h3></center>
                      else {document.getElementById("pres1").innerHTML = "";}
}
