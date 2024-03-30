console.log("Initializing...");

addEventListener("load", function() {
  console.log("Load Event fired!");
  document.getElementById("games-btn").onclick = function () {location.href = "https://www.youtube.com"};
  document.getElementById("proxy-btn").onclick = function () {location.href = "https://game-portal.glitch.me"};
});

