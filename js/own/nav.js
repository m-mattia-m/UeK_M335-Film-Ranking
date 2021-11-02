var firstLoadMovieSite = 0;
var firstLoadHomeSite = 0;
var firstLoadSerieSite = 0;

$("#movieSiteBtn").click(function(){
    $("#movieSite").show()
    $("#homeSite").hide()
    $("#serieSite").hide()
    setTitel("Filme")

    if (firstLoadMovieSite == 0) {
      $('movieBlock').load("sites/home_movies.html", function () {
        $.getScript("js/own/home_movies.js", function () { });
      });
      firstLoadMovieSite = 1;
    }


})
$("#homeSiteBtn").click(function(){
    $("#movieSite").hide()
    $("#homeSite").show()
    $("#serieSite").hide()
    setTitel("Neuer Film / Neue Serie")

    if (firstLoadHomeSite == 0) {
      $('newObjectBlock').load("sites/home_newObject.html", function () {
        $.getScript("js/own/home_newObject.js", function () { });
      });
      firstLoadHomeSite = 1;
    }
})
$("#serieSiteBtn").click(function(){
    $("#movieSite").hide()
    $("#homeSite").hide()
    $("#serieSite").show()
    setTitel("Serien")

    if (firstLoadSerieSite == 0) {
      $('serieBlock').load("sites/home_series.html", function () {
        $.getScript("js/own/home_series.js", function () { });
      });
      firstLoadSerieSite = 1;
    }
})