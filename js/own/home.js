$('newObjectBlock').load("sites/home_newObject.html", function () {
  $.getScript("js/own/home_newObject.js", function () { });
});

// $("#objectFile").value("<span class='material-icons'>photo_camera</span>")

$("#objectFile").click(function () {
  // $("#getFile").click()
  alert("click on button");
});
