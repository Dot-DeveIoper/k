var navbar = document.getElementById("navbar");
var icon = document.getElementById("icon");
var topMenu = document.getElementById("menu");

document.getElementById("icon").innerHTMl = "close";
document.getElementById("menu").style.maxHeight = "64px";

navbar.onclick = function (e) {
  if (document.getElementById("icon").innerHTML === "close" && topMenu.style.maxHeight === "64px") {
    document.getElementById("icon").innerHTML = "close";
    icon.style.marginTop = "11.5px";
    // icon.style.marginLeft = "-1.2px";
    icon.style.fontSize = "2.5rem";
    // icon.style.fontWeight = "800";
    topMenu.style.maxHeight = "262px";
    // topMenu.style.maxHeight = "295px";
  } else if (document.getElementById("icon").innerHTML === "close" && topMenu.style.maxHeight === "262px") {
    document.getElementById("icon").innerHTML = "menu";
    icon.style.marginTop = "11px";
    // icon.style.marginLeft = "-0.5px";
    icon.style.fontSize = "2.5rem";
    topMenu.style.maxHeight = "64px";
  } else if (document.getElementById("icon").innerHTML === "menu" && topMenu.style.maxHeight === "64px") {
    document.getElementById("icon").innerHTML = "close";
    icon.style.marginTop = "11.5px";
    // icon.style.marginLeft = "-1.2px";
    icon.style.fontSize = "2.5rem";
    // icon.style.fontWeight = "800";
    topMenu.style.maxHeight = "262px";
    // topMenu.style.maxHeight = "295px";
  } else {
    document.getElementById("icon").innerHTML = "close";
    icon.style.marginTop = "11px";
    // icon.style.marginLeft = "-0.5px";
    icon.style.fontSize = "2.5rem";
    topMenu.style.maxHeight = "262px";
  }
};