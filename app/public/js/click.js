$(document).ready(function() {
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
          button.addClass("btn btn-primary btn-md");
          button.text(val);
          button.attr("id", "topic_" + i + "  ");
          button.css("padding", "8px");

          $(".jumbotron").append(button);

    })


 $("#buttonWell").on("click", 'button', function() {

  var animal = $(this).text()

  console.log("this is the animal" + animal)

  var queryURL ="https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=IRB5UHpnFotXqJl0k2m6bqbTX5PAdV67";

  $.ajax({

    url: queryURL,
    method: "GET"

  }).done(function(response) {

      for (var k = 0; k < 10; k++) {

      var answer = response.volumes;
        console.log("answer is: " + volumes[k])
      
        var rating = $("<p>").text("Rating: " + answer[k].rating);
        var imageGif = $("<img>").text(rating);
        imageGif.attr("src", answer[k].images.fixed_height.url);
        $("#images").prepend(imageGif).before(rating);
        imageGif.css("padding", "8px");
        imageGif.addClass("gif");
        var animateGif= imageGif.attr("data-animate", answer[k].images.fixed_height.url);
        var stillGif= imageGif.attr("data-still", answer[k].images.fixed_height_still.url);
       }

      
// PAUSE-START
     $(".gif").on("click", function() { 
     
        var state = $(this).attr('data-state');
        var animate = $(this).attr('data-animate');
        var still= $(this).attr('data-still');

        // =============================================

        // STEP THREE: Check if the variable state is equal to 'still',
        if (state === 'still'){ //== would be evaluating value
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
        
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });


      // submit button is clicked
      $(".btn btn-default").on("click", function(event) {
        event.preventDefault();
        // This grabs the input from the textbox
        var newTag = $("#input-id").text(JSON.stringify(response));
        newTag.push(topics[i]);
        console.log(newTag);
      });

      $(document).on("click", "<img>", response);
          
});
});
 });
