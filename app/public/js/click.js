
$(document).ready(function() {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  var topics = [
    "kitten",
    "dogs",
    "puppy",
    "capybara",
    "hamster",
    "chinchilla",
    "rabbit",
    "alpaca",
    "baby tiger",
    "pallas cat",
    "dolphin",
    "trending"
  ];
  
     $.each(topics, function(i, val) {
       
          var button = $("<button>");
          button.addClass("btn");
          button.text(val);
          button.attr("id", "topic_" + i + "  ");
          $("#buttonWell").append(button);
    })

  $("#buttonWell").on("click", 'button', function() {
    var animal = $(this).text();
    var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + animal + 
    "&api_key=IRB5UHpnFotXqJl0k2m6bqbTX5PAdV67";
    console.log(queryURL)

    $.ajax({
          url: queryURL,
          method: "GET",
            success: function() {
                console.log("success!")
            },
            error: function() {
                console.log("error", arguments[2])
            }
          }).done(function(response) {
            for (var k = 0; k < 15; k++) {
            var results = response.data;
            var animated = results[k].images.fixed_height.url;
            var still = results[k].images.fixed_height_still.url;
            var rating =   results[k].rating;
              if (rating === "r") {
                var removed = results.splice(data);
                console.log(removed)
              }
            var time =   results[k].import_datetime;
            var title =   results[k].title;
            console.log(title);
            var giphyUrl =   results[k].url;
            var origUrl = results[k].source;
            var gLink = '<a href="' + giphyUrl + '" target="_blank">Giphy</a>';
            var oUrl = '<a href="' + origUrl + '" target="_blank">Source</a>';
            var p = $("<div class='descript'>").html( "<p class='titleCard'>"+ title + "</p>" + "<b>Added at:</b> " + time + 
            "<br>" + "<b>Found at:</b> " + gLink + " | " + oUrl + "<br>" + "<b>Rating:</b> " + rating);
            // Creating and storing an image tag
            var cardHold = $("<div class=\"cardA animated fadeInDown delay-2s \">");
            var gifImage = $("<img class='imgdis'>");
            gifImage.attr("src", still);
            gifImage.attr("data-still", still);
            gifImage.attr("data-animate", animated);
            gifImage.attr("data-state", "still");
            gifImage.attr("src", animated);
            gifImage.attr("alt", "image");
            
            cardHold.append(gifImage, p);
            $("#animals").prepend(cardHold)
             }
             $('.imgdis').on("click", ".card", function() {
               alert("test")
             });
        });
  });
  $("#new-tag").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("input").eq(0).val();

    if (newAnimal.length > 2) {
      topics.push(newAnimal);
    }
  });
});
