$("qrScan").load("sites/qrScan.html", function () {
    $.getScript("js/qrScan.js", function () {});
  });

$("editForm").load("sites/editLink.html", function () {
    $.getScript("js/editLink.js", function () {});
    $("editForm").hide();
});
 
console.log('Document Ready');
    // Verwenden Sie den strict Modus um Referenzfehler durch fehlerhaft geschriebene Methoden oder Variablen auszuschließen.
    'use strict';
    $.ajaxSetup({ async: false });
    // --------------------------------------------------------------------------
    // Initialize Firebase - Anonymous
    // --------------------------------------------------------------------------
    var config = {    apiKey: "AIzaSyDKh12MZNN12vrkVPjpQzZY3lX4iLqvjoo",
    authDomain: "qr-bookmarks.firebaseapp.com",
    databaseURL: "https://qr-bookmarks-default-rtdb.firebaseio.com",
    projectId: "qr-bookmarks",
    storageBucket: "qr-bookmarks.appspot.com",
    messagingSenderId: "114812925160",
    appId: "1:114812925160:web:0ac008f53b101774e2455d",
    measurementId: "G-EJNF2PCRZT"
  };
  
    firebase.initializeApp(config);

    showData();

    function cancelEdit() {
        $("#editLink").hide();
        $("#liste").show();
        $("qrScan").show();
        $("template").show();
    }

function showData() {
    $('#info').html('Daten werden geladen.....');
    // Template in eine Variable speichern
    $("editForm").hide();

    var template = $('#template').html();
    // Firebase Daten holen
    var ref = firebase.database().ref();
    ref.on("value", function (response) {

        var array = [];
        var i = 0;
        $.each(response.val().link, function (indexInArray, valueOfElement) {

            if (valueOfElement) {
                array.push({ ['link']: valueOfElement });
                array[i].link.id = i+1;
                i++;
            }
        });

        var htmlListe = Mustache.render(template, array);

        $('#liste').html(htmlListe);

        $('.linkRectangle').swipeleft(function(){
            console.log("user wants to delete link ....");
            var id = $(this).attr("data-id")-1;
            var result = confirm("Do you want to delete this link?");
            if (result) {
                firebase.database().ref("link/" + id + "/").remove();
                M.toast({html: 'delete complete ', classes: 'red lighten-3 black-text'});
            }else{
                M.toast({html: 'delete canceld ', classes: 'yellow lighten-3 black-text'});
            }
        });

        $('.linkRectangle').swiperight(function(){
            console.log("user wants to edit link ....");
            var id = $(this).attr("data-id")-1;

            M.toast({html: 'edit complete ', classes: 'red lighten-3 black-text'});

            var editTemplate = $('#editTemplate').html();
            var arrayObjectToEdit = array[id]
            console.log(arrayObjectToEdit);
            var htmlEdit = Mustache.render(editTemplate, arrayObjectToEdit);
            $('#editLink').html(htmlEdit);

            $("editForm").show();

            $("#liste").hide();
            $("qrScan").hide();
            $("template").hide();
              
        });

        

    }, function (error) {
        console.log("Error: " + error.message);
    });
}