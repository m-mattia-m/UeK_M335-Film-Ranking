$('newObjectBlock').load("sites/home_newObject.html", function () {
  $.getScript("js/own/home_newObject.js", function () { });
});

// $("#objectFile").value("<span class='material-icons'>photo_camera</span>")

$("#objectFile").click(function () {
  // $("#getFile").click()
  alert("click on button");
});


$.ajaxSetup({
  async: false
});
var config = {
  apiKey: "AIzaSyCKzSy6Ac6TLzSYWVerRnN2cO9sSfMxpnI",
  authDomain: "uek335-ee3c5.firebaseapp.com",
  databaseURL: "https://uek335-ee3c5-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "uek335-ee3c5",
  storageBucket: "uek335-ee3c5.appspot.com",
  messagingSenderId: "299268752022",
  appId: "1:299268752022:web:d23e73053ae8be0dc9b8b7",
  measurementId: "G-BTKB2C3ZE7",
};
firebase.initializeApp(config);

function insertDaten(id) {
  // $('#info').html('insertDaten');
  console.log("input submit")
  firebase.database().ref("Media/" + id + "/").set({
      Id: parseInt(id),
      Beschreibung: "test",
      Bewertung: 5,
      Name: "Test-Name",
  });
}