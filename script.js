var tabs = document.getElementsByClassName("tab");
var buttons = document.getElementsByClassName("button");
var landingPage = document.querySelector(".landingPage");
var musicIcon = document.getElementsByClassName("sound");

for (var x of tabs) {
  x.style.display = "none";
  document.getElementById("pirmas").style.display = "block";
}

function changeSection(id) {
  for (var x of tabs) {
    x.style.display = "none";
  }
  if (id == "pirmas") {
    document.getElementById("pirmas").style.display = "block";
  }

  document.getElementById(id).style.display = "block";
  document.getElementById(id).classList.add("sectionAnimation");
}

function enableSound() {
  for (var z of musicIcon) {
    if (z.classList.contains("fa-volume-off")) {
      z.classList.remove("fa-volume-off");
      z.classList.add("fa-volume-high");
      document.getElementById("audio").play();
    } else {
      z.classList.remove("fa-volume-high");
      z.classList.add("fa-volume-off");
      document.getElementById("audio").pause();
    }
  }
}
