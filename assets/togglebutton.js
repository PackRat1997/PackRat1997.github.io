function onload() {
  if(localStorage.checkbox == "checked") {
    document.title="Google";
    document.querySelector("link[rel='shortcut icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
    document.querySelector("link[rel*='icon']").href = "https://www.google.com/images/branding/product/ico/googleg_lodp.ico";
    document.getElementById("toggle").checked = true;
  }

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
