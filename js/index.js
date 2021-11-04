// document.addEventListener("deviceready", onDeviceReady, false);

<<<<<<< Updated upstream
$(document).ready(function() {
  onDeviceReady()
})
=======
$( document ).ready(function() {
  onDeviceReady()
});
>>>>>>> Stashed changes

function onDeviceReady() {
  startup()
}

function startup() {
  console.log("Startup")
  sitesOnLoad()
}

function sitesOnLoad() {
  console.log("sitesOnLoad")
  $('titel').load("sites/titel.html", function () {
    $.getScript("js/own/titel.js", function () { });
  });
  $('sites').load("sites/home.html", function () {
    $.getScript("js/own/home.js", function () { });
  });
  $('navBlock').load("sites/nav.html", function () {
    $.getScript("js/own/nav.js", function () { });
  });
}

function setTitel(text) {
  $("#screenTitel").empty()
  $("#screenTitel").text(text)
}