function onload() {
  if(localStorage.checkbox == "checked") {
    document.title="Google";
    document.querySelector("link[rel='shortcut icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
    document.querySelector("link[rel*='icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
    document.getElementById("toggle").checked = true;

  }
  var x = setInterval(checkOffline, 5000);
  if(localStorage.lineStatusRW == "offline") {
    document.getElementById("lineStatus").style.color = "red";
    document.getElementById("lineStatus").innerHTML = "Offline";
  }
  else if (localStorage.lineStatusRW == "online") {
    document.getElementById("lineStatus").style.color = "green";
    document.getElementById("lineStatus").innerHTML = "Online";
  }
  else {localStorage.lineStatusRW = "online"}

}
function checkOffline() {
  var online = navigator.onLine;
  if(online == true) {
    document.getElementById("lineStatus").style.color = "green";
    document.getElementById("lineStatus").innerHTML = "Online";
    localStorage.lineStatusRW = "online";
  }
  if (online == false) {
    document.getElementById("lineStatus").style.color = "red";
    document.getElementById("lineStatus").innerHTML = "Offline";
    localStorage.lineStatusRW = "offline";
  }
  console.log(online);
}
function toggle() {
var checkBox = document.getElementById("toggle");
var text = document.getElementById("text");
if(checkBox.checked == true){
  localStorage.checkbox = "checked";
  document.title="Google";
  document.querySelector("link[rel='shortcut icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
  document.querySelector("link[rel*='icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
}
else{
  localStorage.checkbox = "unchecked";
  document.title="Ryans Website";
  document.querySelector("link[rel='shortcut icon']").href="../../../../../assets/icon.png";
  document.querySelector("link[rel*='icon']").href = "../../../../../assets/icon.png";}
}
