$(document).ready(function () {

    $("#mood").show(1000);

    $(".dropdown-item").click(function () {
        $("#mood").hide(1200);
        $("#weather").show(1700);
    })
    var APIkey = "AIzaSyB4mZ9RsvgYjTqcnVBGk5ffqPrR1leHYzo";
    var queryURL = "https://www.googleapis.com/youtube/v3/search" + APIkey;
    console.log(queryURL);

      
});
