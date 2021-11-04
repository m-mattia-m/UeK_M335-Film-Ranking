firstLoadMovieViewSite = 0;

console.log("Document Ready");
("use strict");
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
      $(".movieRow").swipeleft(function () {
        console.log("swipeleft works");
        console.log(array)
        deleteDaten($(this).attr("data-id"))
      });
      $(".movieRow").click(function(){openMovie($(this).attr("data-id"))})
    },
    function (error) {
      console.log("Error: " + error.message);
    },

  );

}

// Zu bearbeiten

function deleteDaten(id) {
  // $('#info').html('deleteDaten');
  // Löschen 
  firebase.database().ref("Media/" + id + "/").remove();
}

function updateDaten(id) {
  // $('#info').html('updateDaten');
  firebase.database().ref("Media/" + id + "/").set({
      id: parseInt(id) + 1,
      
  });
}

function openMovie(id) {

  if (firstLoadMovieViewSite == 0) {
    console.log("first load movieView")
    $('movieView').load("sites/home_movieView.html", function () {});
    firstLoadMovieViewSite = 1;
  }

  console.log("click on " + id)

  $("#movieSite").hide()
  $("#homeSite").hide()
  $("#serieSite").hide()
  $("#movieView").show()
}