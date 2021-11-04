console.log("Document Ready");
("use strict");
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
showData();

function showData() {
  var template = $("#template").html();
  // Firebase Daten holen
  var ref = firebase.database().ref();
  ref.on("value", function (response) {
      var array = [];
      $.each(response.val(), function (indexInArray, valueOfElement) {
        console.info(indexInArray);
        console.warn(valueOfElement);
        if (valueOfElement) {
          array.push({
            ["Media"]: valueOfElement
          });
        }
      });
      array = array[0];
      var html = Mustache.render(template, array);
      $("#movieData").html(html);
    },
    function (error) {
      console.log("Error: " + error.message);
    },

    $(".movieRow").swipeleft(function () {
      // console.log($(this).value())
      console.log("swipe works");
      alert("swipe works");
    }),


    // $(".testSwipContainer").swipeleft(function () {
    //   // console.log($(this).value())
    //   console.log("swipe works");
    //   alert("swipe works");
    // })
  );

}