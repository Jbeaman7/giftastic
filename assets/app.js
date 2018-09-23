$("button").on("click", function(){
    
    var dog= $(this).attr("data-dog");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dog + "&api_key=Yqwe8ISj3NU74ZnryO8nS98c8OFs880Q&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(response){
        console.log(queryURL);
        console.log(response);

        var results= response.data;

        for (var i = 0; i < results.length; i++) {
            var dogDiv= $("<div>");
            var p= $("<p>").text("Rating:" + results[i].rating);
            var dogImg= $("<img>");
            dogImg.addClass('dogImg')

                    dogImg.attr('src', results[i].images.fixed_height.url);

                    dogImg.attr('data-still', results[i].images.fixed_height_still.url)

                    dogImg.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');
            
            dogDiv.append(p);
            dogDiv.append(dogImg);
            $("#gifs").prepend(dogDiv);
    
        }

        
    })
})

var newDogs= [""];

$("#userButton").on('click', function(){
    event.preventDefault() 
    var dogButton = $("#user-input").val();
    //adds the new animal

    var newButton = $("<button>").addClass( "btn btn-info").attr('data-name',dogButton).html(dogButton).css({'margin': '5px'}) ;
    
    $(".imgBtns").append(newButton);
        console.log("Work");

        queryURL = "https://api.giphy.com/v1/gifs/search?q=" + dogButton + "&api_key=Yqwe8ISj3NU74ZnryO8nS98c8OFs880Q&limit=10";
        console.log(dogButton)
        $.ajax({
            url: queryURL,
            method: "GET"
        })
    
        .then(function(response){
            
    
            var results= response.data;
    
            for (var i = 0; i < results.length; i++) {
                var dogDiv= $("<div>");
                var p= $("<p>").text("Rating:" + results[i].rating);
                var dogImg= $("<img>");
                dogImg.addClass('dogImg')
    
                        dogImg.attr('src', results[i].images.fixed_height.url);
    
                        dogImg.attr('data-still', results[i].images.fixed_height_still.url)
    
                        dogImg.attr('data-animate', results[i].images.fixed_height.url)
    
                        .attr('data-state', 'still');
                
                dogDiv.append(p);
                dogDiv.append(dogImg);
                $("#gifs").prepend(dogDiv);
        
            }
    
            
        })
    })  