
$(document).ready(function() {
  $('.parallax').parallax();
  var topics = [
    "cats",
    "kittens",
    "dogs",
    "puppies",
    "capybara",
    "hamster",
    "chinchilla",
    "rabbit",
    "alpaca",
    "baby tiger"
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
            for (var k = 0; k < 10; k++) {
            // Saving the image_original_url property
            var results = response.data;
           
            var animated = results[k].images.fixed_height.url;
            var still = results[k].images.fixed_height_still.url;
       
            // Creating and storing an image tag
            var cardHold = $("<div class=\"cardA\">");
            var gifImage = $("<img class='imgdis'>");
            gifImage.attr("src", still);
            gifImage.attr("data-still", still);
            gifImage.attr("data-animate", animated);
            gifImage.attr("data-state", "still");
            gifImage.attr("src", animated);
            gifImage.attr("alt", "image");
            cardHold.append(gifImage);
            $("#images").append(cardHold);
              // var answer = response.volumes;
              // console.log("answer is: " + volumes[k])  
              // var rating = $("<p>").text("Rating: " + answer[k].rating);
              // var imageGif = $("<img>").text(rating);
              // imageGif.attr("src", answer[k].images.fixed_height.url);
              // $("#images").prepend(imageGif).before(rating);
              // imageGif.css("padding", "8px");
              // imageGif.addClass("gif");
              // var animateGif= imageGif.attr("data-animate", answer[k].images.fixed_height.url);
              // var stillGif= imageGif.attr("data-still", answer[k].images.fixed_height_still.url);
             }
        });
  });
});
